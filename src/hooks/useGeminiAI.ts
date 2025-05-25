import { useState, useEffect, useCallback } from "react";

// Using environment variables without fallback values
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.0-flash";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

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
        
        // Remove expired entries
        const validCache = Object.entries(parsedCache).reduce<Record<string, CacheEntry>>((acc, [key, entry]) => {
          const cacheEntry = entry as CacheEntry;
          if (cacheEntry.timestamp + CACHE_EXPIRY > now) {
            acc[key] = cacheEntry;
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
      }
    }
  }, [cache]);

  // Rate limiter check
  const checkRateLimit = useCallback(() => {
    const now = Date.now();
    
    // Reset rate limit if window has passed
    if (now - rateLimit.timestamp > RATE_LIMIT_WINDOW) {
      setRateLimit({ count: 1, timestamp: now });
      return true;
    }
    
    // Check if within limits
    if (rateLimit.count < MAX_REQUESTS_PER_WINDOW) {
      setRateLimit(prev => ({ ...prev, count: prev.count + 1 }));
      return true;
    }
    
    return false;
  }, [rateLimit]);

  // Retry mechanism for failed requests
  const retryRequest = useCallback(async (fn: () => Promise<any>, retries = MAX_RETRIES): Promise<any> => {
    try {
      return await fn();
    } catch (error) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return retryRequest(fn, retries - 1);
      }
      throw error;
    }
  }, []);

  /**
   * Get enhanced explanation for a word with improvements
   */
  const getEnhancedExplanation = async (
    word: string,
    definition: string,
    etymology: string,
    partOfSpeech: string,
    example: string
  ): Promise<GeminiAIResponse> => {
    const cacheKey = `enhanced-${word}`;
    const initialState: GeminiAIResponse = {
      data: "",
      loading: true,
      error: null
    };
    
    try {
      // Check rate limit
      if (!checkRateLimit()) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      
      // Check if we have a valid cached response
      const cachedEntry = cache[cacheKey];
      if (cachedEntry && cachedEntry.timestamp + CACHE_EXPIRY > Date.now()) {
        return {
          data: cachedEntry.data,
          loading: false,
          error: null
        };
      }
      
      // Check if API key is available
      if (!GEMINI_API_KEY) {
        throw new Error("API key is not configured. Please check your environment variables.");
      }

      // Prepare the prompt for Gemini
      const prompt = `
        Pakipaliwanag sa Filipino ang salitang "${word}" na bahagi ng pananalita na "${partOfSpeech}".
        
        Kahulugan nito: "${definition}"
        
        Pakibigay ng:
        1. Mas detalyadong paliwanag tungkol sa salita (maikli lang pero malaman)
        2. 3-5 mga halimbawa ng paggamit nito sa pangungusap
        3. Mga kasingkahulugan o katuturan (kung mayroon)
        4. Anumang karagdagang impormasyon na makakatulong sa pag-intindi ng salita
        
        MAHALAGA: Huwag gumamit ng markdown formatting o asterisks (*). Huwag gumamit ng anumang special characters para sa formatting. Simple text lang ang gamitin mo. I-format ang response mo sa ganitong paraan:
        
        PALIWANAG:
        (iyong detalyadong paliwanag dito - maikli lang pero malaman)
        
        MGA HALIMBAWA:
        - (halimbawa 1)
        - (halimbawa 2)
        - (halimbawa 3)
        
        MGA KASINGKAHULUGAN:
        - (kasingkahulugan 1)
        - (kasingkahulugan 2)
        
        KARAGDAGANG IMPORMASYON:
        (anumang karagdagang detalye dito - maikli lang)
      `;
      
      // Create endpoint URL from environment variable to avoid exposing in client-side code
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
      
      // API key is only added during the request, never stored in client-side code
      const url = new URL(endpoint);
      url.searchParams.append("key", GEMINI_API_KEY);
      
      // Make API call to Gemini with retry mechanism
      const response = await retryRequest(async () => {
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
            ]
          })
        });
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Extract the text from the response
      const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text || "";
      
      // Cache the result with timestamp
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
      console.error("Error fetching AI explanation:", error);
      return {
        ...initialState,
        loading: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      };
    }
  };
  
  return {
    getEnhancedExplanation
  };
}
