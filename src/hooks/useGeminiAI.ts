import { useState, useEffect, useCallback } from "react";
import { expandSearchTerm, wordRelationships } from "@/data/wordRelationships"; // Assuming wordRelationships.ts is in @/data
import { detailedWordData } from "@/data/dictionary"; // Assuming dictionary.ts is in @/data

// Using environment variables without fallback values
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.0-flash-lite"; // Updated to latest flash model
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // Adjusted for typical free tier limits

interface GeminiAIResponse {
  data: string;
  loading: boolean;
  error: string | null;
}

interface CacheEntry {
  data: string;
  timestamp: number;
}

interface RateLimitEntry {
  count: number;
  timestamp: number;
}

export function useGeminiAI() {
  const [cache, setCache] = useState<Record<string, CacheEntry>>({});
  const [rateLimit, setRateLimit] = useState<RateLimitEntry>({ count: 0, timestamp: Date.now() });

  // Load cache from localStorage with expiry check
  useEffect(() => {
    try {
      const savedCache = localStorage.getItem("gemini-ai-cache");
      if (savedCache) {
        const parsedCache = JSON.parse(savedCache);
        const now = Date.now();

        const validCache = Object.entries(parsedCache).reduce<Record<string, CacheEntry>>((acc, [key, entry]) => {
          const cacheEntry = entry as CacheEntry;
          if (cacheEntry.timestamp + CACHE_EXPIRY > now) {
            acc[key] = cacheEntry;
          } else {
            console.log(`Cache entry for ${key} expired and removed.`);
          }
          return acc;
        }, {});

        setCache(validCache);
      }
    } catch (error) {
      console.error("Error loading AI cache:", error);
    }
  }, []);

  // Save cache to localStorage
  useEffect(() => {
    if (Object.keys(cache).length > 0) {
      try {
        localStorage.setItem("gemini-ai-cache", JSON.stringify(cache));
      } catch (error) {
        console.error("Error saving AI cache:", error);
        // Potentially handle quota exceeded errors for localStorage
      }
    }
  }, [cache]);

  // Rate limiter check
  const checkRateLimit = useCallback(() => {
    const now = Date.now();

    if (now - rateLimit.timestamp > RATE_LIMIT_WINDOW) {
      setRateLimit({ count: 1, timestamp: now });
      return true;
    }

    if (rateLimit.count < MAX_REQUESTS_PER_WINDOW) {
      setRateLimit(prev => ({ ...prev, count: prev.count + 1 }));
      return true;
    }
    console.warn("Rate limit hit. Request blocked.");
    return false;
  }, [rateLimit]);

  // Retry mechanism for failed requests
  const retryRequest = useCallback(async (fn: () => Promise<Response>, retries = MAX_RETRIES): Promise<Response> => {
    try {
      const response = await fn();
      // Gemini API might return 200 OK even for some errors in the content (e.g., safety blocks)
      // but for network/server errors, this retry will help.
      if (!response.ok && response.status >= 500 && retries > 0) { // Only retry on server errors
        console.warn(`Request failed with status ${response.status}. Retrying... (${MAX_RETRIES - retries + 1}/${MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (MAX_RETRIES - retries + 1))); // Exponential backoff
        return retryRequest(fn, retries - 1);
      }
      return response;
    } catch (error) {
      if (retries > 0) { // Network errors might throw here
        console.warn(`Request failed with error: ${error}. Retrying... (${MAX_RETRIES - retries + 1}/${MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (MAX_RETRIES - retries + 1)));
        return retryRequest(fn, retries - 1);
      }
      throw error;
    }
  }, []);

  /**
   * Validate AI response to ensure it meets quality standards
   */
  const validateAIResponse = (response: string, word: string): boolean => {
    if (!response || response.trim() === "") return false;

    const wordLower = word.toLowerCase();
    const responseLower = response.toLowerCase();

    // Check if the response contains the exact word (case-insensitive) at least once in PALIWANAG and once in an HALIMBAWA
    // This is a softer check than 3 times everywhere, focusing on key areas.
    const paliwanagSection = responseLower.split("paliwanag:")[1]?.split("mga halimbawa:")[0] || "";
    const halimbawaSection = responseLower.split("mga halimbawa:")[1]?.split("mga kasingkahulugan:")[0] || "";
    const karagdaganSection = responseLower.split("karagdagang impormasyon:")[1] || "";

    const wordRegex = new RegExp(`\\b${wordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'); // Escape special characters in word
    const paliwanagMatch = wordRegex.test(paliwanagSection);
    const halimbawaMatch = wordRegex.test(halimbawaSection);

    const hasPaliwanag = /PALIWANAG:/i.test(response);
    const hasHalimbawa = /MGA HALIMBAWA:/i.test(response);
    const hasKasingkahulugan = /MGA KASINGKAHULUGAN:/i.test(response);
    const hasKaragdagan = /KARAGDAGANG IMPORMASYON:/i.test(response);

    const allSectionsPresent = hasPaliwanag && hasHalimbawa && hasKasingkahulugan && hasKaragdagan;
    const keyUsageValid = paliwanagMatch && halimbawaMatch;
    
    // Make sure Karagdagan section has meaningful content (not just the default message)
    const defaultNoInfoPattern = /wala nang direktang karagdagang impormasyon batay sa ibinigay na datos/i;
    const hasSubstantiveKaragdaganContent = 
      karagdaganSection.length > 15 && 
      !defaultNoInfoPattern.test(karagdaganSection.trim());

    if (!allSectionsPresent) console.warn(`AI Response Validation for "${word}": Missing one or more required sections.`);
    if (!keyUsageValid) console.warn(`AI Response Validation for "${word}": Word not used adequately in Paliwanag or Halimbawa.`);
    if (!hasSubstantiveKaragdaganContent) console.warn(`AI Response Validation for "${word}": Karagdagang Impormasyon section lacks meaningful content.`);

    // We'll still return true even with lacking Karagdagan content to avoid too many rejections,
    // but the warning above will help for monitoring
    return allSectionsPresent && keyUsageValid;
  };

  /**
   * Find related entries from the dictionary
   */
  const findRelatedDictionaryEntries = useCallback((word: string): string => {
    const systemRelated = expandSearchTerm(word).filter(rw => rw.toLowerCase() !== word.toLowerCase());
    let relatedEntries: typeof detailedWordData[string][] = [];

    systemRelated.forEach(relWord => {
      if (detailedWordData[relWord] && relatedEntries.length < 3) {
        if (!relatedEntries.some(entry => entry.word === relWord)) {
          relatedEntries.push(detailedWordData[relWord]);
        }
      }
    });

    if (relatedEntries.length < 3) {
      const allEntries = Object.values(detailedWordData);
      allEntries.forEach(entry => {
        if (relatedEntries.length >= 3) return;
        if (entry.word.toLowerCase() === word.toLowerCase() || relatedEntries.some(re => re.word === entry.word)) return;

        const wordLower = word.toLowerCase();
        const entryWordLower = entry.word.toLowerCase();
        const definitionLower = entry.definition.toLowerCase();
        const etymologyLower = entry.etymology.toLowerCase();

        const wordRegex = new RegExp(`\\b${wordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        const entryWordRegex = new RegExp(`\\b${entryWordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

        if (wordRegex.test(definitionLower) || wordRegex.test(etymologyLower) || entryWordRegex.test(wordLower)) {
          relatedEntries.push(entry);
        }
      });
    }

    if (relatedEntries.length === 0) return '';

    return `Mga kaugnay na salita sa diksyunaryo (para sa konteksto):\n${relatedEntries.slice(0, 3).map(e =>
      `- ${e.word}: ${e.definition}`).join('\n')}`;
  }, [detailedWordData]);


  const getEnhancedExplanation = async (
    word: string,
    definition: string,
    etymology: string,
    partOfSpeech: string,
    example: string
  ): Promise<GeminiAIResponse> => {
    const cacheKey = `enhanced-v2-${word}`; // Consider versioning cache keys if prompt changes significantly
    const initialState: GeminiAIResponse = {
      data: "",
      loading: true,
      error: null
    };

    try {
      if (!checkRateLimit()) {
        return {
            ...initialState,
            loading: false,
            error: "Rate limit naabot. Pakisubukang muli mamaya."
        }
      }

      const cachedEntry = cache[cacheKey];
      if (cachedEntry && cachedEntry.timestamp + CACHE_EXPIRY > Date.now()) {
        return {
          data: cachedEntry.data,
          loading: false,
          error: null
        };
      }

      if (!GEMINI_API_KEY) {
        return {
            ...initialState,
            loading: false,
            error: "Hindi naka-configure ang API key. Pakitingnan ang iyong environment variables."
        }
      }

      const preDefinedAlternatives = wordRelationships[word] ? wordRelationships[word].alternatives : [];
      const synonymGuidanceContext = preDefinedAlternatives.length > 0
        ? `Narito ang ilang alam naming alternatibo/kasingkahulugan para sa "${word}" mula sa aming diksyunaryo: ${preDefinedAlternatives.filter(alt => alt.toLowerCase() !== word.toLowerCase()).join(', ')}. Gamitin ang mga ito bilang pangunahing batayan para sa MGA KASINGKAHULUGAN, at magdagdag lamang ng iba kung talagang angkop at pormal.`
        : `Wala kaming direktang listahan ng kasingkahulugan para sa "${word}" sa aming sistema. Bumuo ng kasingkahulugan batay lamang sa ibinigay na depinisyon at etimolohiya, at tiyaking pormal at angkop ang mga ito.`;
      
      const relatedWordsFromSystem = expandSearchTerm(word).filter(rw => rw.toLowerCase() !== word.toLowerCase());
      const relatedWordsContext = relatedWordsFromSystem.length > 0
        ? `Mga kaugnay na salita mula sa aming sistema (para sa konteksto, hindi necesariamente kasingkahulugan): ${relatedWordsFromSystem.join(', ')}`
        : '';

      const relatedDictionaryContext = findRelatedDictionaryEntries(word);

      const prompt = `
        Ikaw ay isang eksperto sa Gen Alpha slang at modernong Filipino, na may layuning maging impormatibo at angkop sa lahat ng edad.
        
        BATAYANG IMPORMASYON TUNGKOL SA SALITA:
        --------------------------------------
        Salita: ${word}
        Bahagi ng Pananalita: ${partOfSpeech}
        Pangunahing Kahulugan: ${definition}
        Etimolohiya (Pinagmulan): ${etymology}
        Halimbawang Pangungusap (mula sa diksyunaryo): ${example}
        
        ${synonymGuidanceContext}
        
        ${relatedWordsContext}
        
        ${relatedDictionaryContext}
        
        IYONG MGA TAGUBILIN:
        --------------------
        Batay LAMANG sa BATAYANG IMPORMASYON SA ITAAS (Salita, Bahagi ng Pananalita, Kahulugan, Etimolohiya, Halimbawang Pangungusap, at gabay sa kasingkahulugan), gawin ang mga sumusunod:

        1.  **PALIWANAG:**
            *   Magbigay ng maikli (2-4 pangungusap) ngunit malaman na paliwanag tungkol sa salitang "${word}".
            *   Ipaliwanag kung bakit ito itinuturing na Gen Alpha slang. Ano ang "vibe" o pakiramdam kapag ginagamit ito kumpara sa pormal na katumbas?
            *   HUWAG LANG ULITIN ang ibinigay na kahulugan; magbigay ng dagdag na insight at konteksto ng paggamit.
            *   PALAGING gamitin ang eksaktong spelling ng "${word}".

        2.  **MGA HALIMBAWA:**
            *   Magbigay ng TATLONG (3) bagong halimbawang pangungusap.
            *   Dapat NATURAL at MAKABULUHAN ang pagkakagamit ng "${word}" sa bawat pangungusap.
            *   Dapat ipakita ng mga halimbawa kung paano ito ginagamit ng mga kabataan/Gen Alpha sa pang-araw-araw na usapan, online (hal. TikTok, Twitter/X, chat), o social media.
            *   Siguraduhing ang mga halimbawa ay ANGKOP sa tunay na kahulugan ng "${word}".

        3.  **MGA KASINGKAHULUGAN:**
            *   Magbigay ng HANGGANG TATLONG (3) pinaka-angkop na kasingkahulugan para sa "${word}".
            *   UNAWAIN: Kung may ibinigay na "alternatibo/kasingkahulugan" sa itaas, PRAYORIDAD na gamitin ang mga iyon kung talagang kasingkahulugan sila ng "${word}" at pormal. Ilista ang mga ito.
            *   Kung wala o kulang, magbigay ng iba pang TUNAY na kasingkahulugan batay sa depinisyon.
            *   GUMAMIT NG PORMAL AT DISENTENG MGA SALITA (hal. "pakikipagtalik" imbes na vulgar). Iwasan ang slang bilang kasingkahulugan ng ibang slang maliban kung ito ay napaka-komon at angkop.
            *   HUWAG kumuha ng kasingkahulugan mula sa "${relatedWordsContext}" o "${relatedDictionaryContext}" maliban kung 100% kang sigurado na direktang kasingkahulugan ito ng "${word}" batay sa depinisyon. Ang mga ito ay para lang sa konteksto.

        4.  **KARAGDAGANG IMPORMASYON:**
            *   Magbigay ng NATURAL at KAPAKI-PAKINABANG na impormasyon na makakatulong sa user intindihin at gamitin ang salita nang tama.
            *   HUWAG gumamit ng masyadong pormal o template-like na tono. Gumamit ng conversational na tono na parang kausap mo lang ang user.
            *   ISAMA ang mga sumusunod na impormasyon sa isang NATURAL na paraan:
                - Ang pormal o karaniwang kahulugan ng salita (hal. "Ang 'bembang' ay tumutukoy sa pakikipagtalik")
                - Konteksto kung saan ito ginagamit (hal. "Madalas itong ginagamit ng mga kabataan sa casual na usapan")
                - Babala sa paggamit kung kinakailangan (hal. "Hindi ito angkop gamitin sa pormal na setting")
                - Karagdagang impormasyon tungkol sa salita, usage, o pop culture context
            *   Gumamit ng TATLONG PANGUNGUSAP para sa mas komprehensibong paliwanag. Isulat ito sa paraan na parang nagbibigay ka lang ng advice sa kaibigan.
            *   Mag-focus sa pagbibigay ng MAKABULUHANG INSIGHT, hindi lang simpleng babala. Layunin mo na matulungan ang user na maintindihan ang konteksto at tamang paggamit ng salita sa pang-araw-araw na usapan.

        NAPAKAHALAGANG MGA PAALALA:
        -   ACCURACY OVER CREATIVITY: Mas mahalaga ang tama kaysa malikhain. Kung hindi sigurado, huwag hulaan.
        -   STICK TO PROVIDED DATA: Gamitin LAMANG ang impormasyong nasa "BATAYANG IMPORMASYON TUNGKOL SA SALITA" at ang gabay sa kasingkahulugan. Huwag magdagdag ng sariling kaalaman na wala doon.
        -   EXACT WORD USAGE: Laging gamitin ang eksaktong spelling ng "${word}" sa iyong paliwanag at mga halimbawa. HUWAG itong palitan o isalin sa ibang salita.
        -   AGE APPROPRIATENESS: Siguraduhing ang buong sagot ay angkop para sa pangkalahatang mambabasa, kabilang ang mga menor de edad. Gumamit ng disenteng lenggwahe.
        -   FOCUS ON THE SPECIFIC WORD: Ang buong paliwanag ay dapat tungkol lamang sa salitang "${word}" at hindi sa mga kaugnay na salita.
        -   INSIGHT OVER DEFAULT: Para sa KARAGDAGANG IMPORMASYON, mas mabuti ang magbigay ng anumang insight mula sa ibinigay na datos kaysa sa default na "walang karagdagang impormasyon" na pahayag.

        I-FORMAT ang response mo sa ganitong paraan (sundin ang mga label nang eksakto, kasama ang mga blankong linya para sa espasyo):
        
        PALIWANAG:
        (iyong paliwanag)
        
        MGA HALIMBAWA:
        - (halimbawa 1)
        - (halimbawa 2)
        - (halimbawa 3)
        
        MGA KASINGKAHULUGAN:
        - (kasingkahulugan 1)
        - (kasingkahulugan 2, kung meron)
        - (kasingkahulugan 3, kung meron)
        
        KARAGDAGANG IMPORMASYON:
        (iyong karagdagang impormasyon)
      `;

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
      const url = new URL(endpoint);
      url.searchParams.append("key", GEMINI_API_KEY);

      const fetchResponse = await retryRequest(async () => {
        return fetch(url.toString(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.25, // Slightly higher than 0.2 for a bit more natural language but still conservative
              topP: 0.9,
              topK: 40,
              // maxOutputTokens: 512 // Consider adding if responses are too long or getting truncated
            },
            // === SAFETY SETTINGS ===
            // Mahalaga ito para maiwasan ang mga bastos o hindi angkop na sagot, lalo na sa mga sensitibong salita.
            // I-adjust ang threshold kung kinakailangan. BLOCK_MEDIUM_AND_ABOVE or BLOCK_LOW_AND_ABOVE for stricter.
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE", // Para sa mga salitang tulad ng 'Bembang', ito ay mahalaga
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
            ],
            // =======================
          })
        });
      });

      if (!fetchResponse.ok) {
        // Attempt to parse error from Gemini API response body
        let errorBody = "Unknown API error";
        try {
            const errorJson = await fetchResponse.json();
            errorBody = errorJson.error?.message || JSON.stringify(errorJson);
        } catch (e) {
            errorBody = await fetchResponse.text();
        }
        throw new Error(`API error: ${fetchResponse.status} - ${errorBody}`);
      }

      const result = await fetchResponse.json();

      // Check for content filtering or other issues from Gemini
      if (!result.candidates || result.candidates.length === 0) {
        let blockReason = "Hindi nakabuo ng sagot ang AI.";
        if (result.promptFeedback?.blockReason) {
            blockReason = `Hindi nakabuo ng sagot ang AI dahil sa: ${result.promptFeedback.blockReason}.`;
            if (result.promptFeedback.safetyRatings) {
                blockReason += ` Safety Ratings: ${JSON.stringify(result.promptFeedback.safetyRatings)}`;
            }
        } else if (result.candidates && result.candidates[0]?.finishReason && result.candidates[0].finishReason !== "STOP") {
            blockReason = `Hindi nakabuo ng kumpletong sagot ang AI. Dahilan: ${result.candidates[0].finishReason}.`;
             if (result.candidates[0].safetyRatings) {
                blockReason += ` Safety Ratings: ${JSON.stringify(result.candidates[0].safetyRatings)}`;
            }
        }
        console.warn(`AI Response Issue for "${word}": ${blockReason}`);
        throw new Error(blockReason);
      }


      const generatedText = result.candidates[0]?.content?.parts?.[0]?.text?.trim() || "";

      if (generatedText === "") {
        console.warn(`AI response for "${word}" was empty.`);
         throw new Error("Nakabuo ng blankong sagot ang AI.");
      }
      
      const isValid = validateAIResponse(generatedText, word);

      if (!isValid) {
        console.warn(`AI response for "${word}" failed validation checks. The response was: \n${generatedText}`);
        // Decide if you want to throw an error here or use the partially valid response
        // For now, let's use it but it's flagged.
      }

      setCache(prevCache => ({
        ...prevCache,
        [cacheKey]: {
          data: generatedText,
          timestamp: Date.now()
        }
      }));

      return {
        data: generatedText,
        loading: false,
        error: null
      };
    } catch (error) {
      console.error(`Error fetching AI explanation for "${word}":`, error);
      return {
        ...initialState,
        loading: false,
        error: error instanceof Error ? error.message : "Nagkaroon ng hindi inaasahang error."
      };
    }
  };

  const clearAICache = useCallback(() => {
    setCache({});
    localStorage.removeItem("gemini-ai-cache");
    console.log("AI cache cleared");
  }, []);

  return {
    getEnhancedExplanation,
    clearAICache
  };
}