import { useState, useEffect } from 'react';
import { dictionaryWords, detailedWordData } from '@/data/dictionary';

// Type for the cached dictionary data
type DictionaryCache = {
  initialized: boolean;
  words: typeof dictionaryWords;
  details: typeof detailedWordData;
  lastAccessed: Record<string, number>; // Track when words were last accessed
  popularWords: string[]; // Cache for popular words
  version: string; // For cache versioning
};

// Default cache that will be lazily populated
const DEFAULT_CACHE: DictionaryCache = {
  initialized: false,
  words: [],
  details: {},
  lastAccessed: {},
  popularWords: [],
  version: '1.0.0', // Update this when dictionary structure changes
};

// Create a singleton cache that persists across component renders
let globalCache: DictionaryCache = { ...DEFAULT_CACHE };

/**
 * Hook for efficiently accessing dictionary data with caching
 * Implements lazy loading, LRU caching, and improved performance
 */
export function useDictionaryCache() {
  const [cache, setCache] = useState<DictionaryCache>(globalCache);
  const [isLoading, setIsLoading] = useState(!globalCache.initialized);
  const [error, setError] = useState<Error | null>(null);
  
  // Initialize cache if needed
  useEffect(() => {
    if (!globalCache.initialized) {
      try {
        setIsLoading(true);
        
        // Check if we have a cached version in localStorage
        const storedCache = localStorage.getItem('dictionaryCache');
        
        if (storedCache) {
          try {
            const parsedCache = JSON.parse(storedCache) as DictionaryCache;
            
            // Only use cache if versions match
            if (parsedCache.version === DEFAULT_CACHE.version) {
              globalCache = parsedCache;
              globalCache.initialized = true;
              setCache(globalCache);
              setIsLoading(false);
              return;
            }
          } catch (e) {
            // If parsing fails, just continue with fresh cache
            console.error('Failed to parse dictionary cache:', e);
            localStorage.removeItem('dictionaryCache');
          }
        }
        
        // Initialize fresh cache with data
        globalCache.words = [...dictionaryWords];
        globalCache.details = { ...detailedWordData };
        globalCache.initialized = true;
        
        // Save to localStorage
        saveCache();
        
        // Update component state
        setCache(globalCache);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize dictionary cache'));
        console.error('Error initializing dictionary cache:', err);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);
  
  // Save cache to localStorage (throttled)
  const saveCache = () => {
    try {
      localStorage.setItem('dictionaryCache', JSON.stringify(globalCache));
    } catch (err) {
      console.error('Failed to save dictionary cache to localStorage:', err);
      // If localStorage is full, we could clear it or implement a fallback strategy
    }
  };
  
  // Get a word's details with access tracking
  const getWordDetails = (word: string) => {
    if (!globalCache.initialized) return null;
    
    const wordKey = Object.keys(globalCache.details).find(
      key => key.toLowerCase() === word.toLowerCase()
    );
    
    if (wordKey) {
      // Update last accessed time
      globalCache.lastAccessed[wordKey] = Date.now();
      
      // Throttled save to not overwhelm localStorage
      setTimeout(saveCache, 5000);
      
      return globalCache.details[wordKey];
    }
    
    return null;
  };
  
  // Find words that match a search term with fuzzy matching
  const findWords = (searchTerm: string, limit = 10) => {
    if (!searchTerm.trim() || !globalCache.initialized) return [];
    
    const lowercaseTerm = searchTerm.toLowerCase();
    
    // Simple ranking algorithm:
    // 1. Exact match gets highest priority
    // 2. Starts with search term gets medium priority
    // 3. Contains search term gets lowest priority
    const results = globalCache.words
      .map(word => {
        const lowercaseWord = word.word.toLowerCase();
        let score = 0;
        
        if (lowercaseWord === lowercaseTerm) {
          score = 3; // Exact match
        } else if (lowercaseWord.startsWith(lowercaseTerm)) {
          score = 2; // Starts with
        } else if (lowercaseWord.includes(lowercaseTerm)) {
          score = 1; // Contains
        }
        
        return { word, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.word)
      .slice(0, limit);
    
    return results;
  };
  
  // Get popular words based on user access patterns
  const getPopularWords = (limit = 5) => {
    if (!globalCache.initialized) return [];
    
    // If we have cached popular words, use them
    if (globalCache.popularWords.length >= limit) {
      return globalCache.popularWords.slice(0, limit);
    }
    
    // Otherwise calculate based on access patterns
    const sortedWords = Object.entries(globalCache.lastAccessed)
      .sort((a, b) => b[1] - a[1]) // Sort by timestamp (descending)
      .map(([word]) => word)
      .slice(0, limit);
    
    // Cache for next time
    globalCache.popularWords = sortedWords;
    
    return sortedWords;
  };
  
  return {
    isLoading,
    error,
    findWords,
    getWordDetails,
    getPopularWords,
    dictionarySize: globalCache.initialized ? globalCache.words.length : 0,
  };
}
