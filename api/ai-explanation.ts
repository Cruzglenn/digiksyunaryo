import type { VercelRequest, VercelResponse } from '@vercel/node';

// CORS headers for security
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
    ? 'https://digiksyunaryo.vercel.app' 
    : '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

interface AIRequest {
  word: string;
  definition: string;
  etymology: string;
  partOfSpeech: string;
  example: string;
  synonymGuidanceContext?: string;
  relatedWordsContext?: string;
  relatedDictionaryContext?: string;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
    finishReason?: string;
    safetyRatings?: any[];
  }>;
  promptFeedback?: {
    blockReason?: string;
    safetyRatings?: any[];
  };
}

// Rate limiting function
function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);
  
  if (!clientData || now - clientData.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(clientIP, { count: 1, timestamp: now });
    return true;
  }
  
  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  clientData.count++;
  return true;
}

// Input validation
function validateInput(data: any): data is AIRequest {
  return (
    typeof data.word === 'string' &&
    typeof data.definition === 'string' &&
    typeof data.etymology === 'string' &&
    typeof data.partOfSpeech === 'string' &&
    typeof data.example === 'string' &&
    data.word.length > 0 &&
    data.word.length <= 100
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  // Set CORS headers
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are supported' 
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] as string || 
                    req.headers['x-real-ip'] as string || 
                    'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.'
      });
    }

    // Validate environment variables
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash-lite";

    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables');
      return res.status(500).json({
        error: 'Server configuration error',
        message: 'AI service is not properly configured'
      });
    }

    // Validate request body
    if (!validateInput(req.body)) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Required fields: word, definition, etymology, partOfSpeech, example'
      });
    }

    const {
      word,
      definition,
      etymology,
      partOfSpeech,
      example,
      synonymGuidanceContext = '',
      relatedWordsContext = '',
      relatedDictionaryContext = ''
    } = req.body as AIRequest;

    // Build the prompt (same as frontend)
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

      1. **PALIWANAG:** Magbigay ng mas detalyadong paliwanag ng salita na "${word}" gamit ang modernong Filipino. Siguraduhing ginagamit mo ang salitang "${word}" nang hindi bababa sa dalawang beses sa seksyong ito.

      2. **MGA HALIMBAWA:** Gumawa ng tatlong (3) makabuluhang halimbawang pangungusap na nagpapakita ng iba't ibang gamit ng salitang "${word}". Siguraduhing ginagamit mo ang salitang "${word}" sa bawat halimbawa.

      3. **MGA KASINGKAHULUGAN:** Magbigay ng tatlong (3) kasingkahulugan o katumbas na salita sa Filipino. Kung walang direktang kasingkahulugan, magbigay ng mga salitang malapit ang kahulugan.

      4. **KARAGDAGANG IMPORMASYON:** Magbigay ng mga kawili-wiling detalye tungkol sa salita, tulad ng:
         - Paano ito ginagamit sa kasalukuyang panahon
         - Mga kontekstong angkop gamitin ito
         - Anumang kultura o historikal na kaugnayan

      MAHALAGANG ALITUNTUNIN:
      - Gumamit ng SIMPLENG at MADALING MAINTINDIHANG Filipino
      - Iwasang gumamit ng mga salitang bastos o hindi angkop
      - Siguraduhing tama at kapani-paniwala ang lahat ng impormasyon
      - I-format ang sagot nang maayos gamit ang mga header na nabanggit
      - Siguraduhing ginagamit mo ang salitang "${word}" nang sapat sa buong explanation

      I-format ang inyong sagot tulad nito:

      **PALIWANAG:**
      [Inyong detalyadong paliwanag dito]

      **MGA HALIMBAWA:**
      1. [Unang halimbawa]
      2. [Pangalawang halimbawa] 
      3. [Pangatlong halimbawa]

      **MGA KASINGKAHULUGAN:**
      1. [Unang kasingkahulugan]
      2. [Pangalawang kasingkahulugan]
      3. [Pangatlong kasingkahulugan]

      **KARAGDAGANG IMPORMASYON:**
      [Mga karagdagang detalye dito]
    `;

    // Call Gemini API
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
    const url = new URL(endpoint);
    url.searchParams.append("key", GEMINI_API_KEY);

    const geminiResponse = await fetch(url.toString(), {
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
          temperature: 0.25,
          topP: 0.9,
          topK: 40,
        },
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
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      })
    });

    if (!geminiResponse.ok) {
      console.error(`Gemini API error: ${geminiResponse.status} ${geminiResponse.statusText}`);
      return res.status(500).json({
        error: 'AI service error',
        message: 'Failed to get response from AI service'
      });
    }

    const result: GeminiResponse = await geminiResponse.json();

    // Check for content filtering or other issues
    if (!result.candidates || result.candidates.length === 0) {
      let blockReason = "Hindi nakabuo ng sagot ang AI.";
      if (result.promptFeedback?.blockReason) {
        blockReason = `Hindi nakabuo ng sagot ang AI dahil sa: ${result.promptFeedback.blockReason}.`;
      } else if (result.candidates && result.candidates[0]?.finishReason && result.candidates[0].finishReason !== "STOP") {
        blockReason = `Hindi nakabuo ng kumpletong sagot ang AI. Dahilan: ${result.candidates[0].finishReason}.`;
      }
      
      return res.status(400).json({
        error: 'AI content filtered',
        message: blockReason
      });
    }

    const generatedText = result.candidates[0]?.content?.parts?.[0]?.text?.trim() || "";

    if (generatedText === "") {
      return res.status(400).json({
        error: 'Empty AI response',
        message: 'Nakabuo ng blankong sagot ang AI.'
      });
    }

    // Return successful response
    return res.status(200).json({
      success: true,
      data: generatedText,
      word: word
    });

  } catch (error) {
    console.error('AI explanation API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'An unexpected error occurred'
    });
  }
}
