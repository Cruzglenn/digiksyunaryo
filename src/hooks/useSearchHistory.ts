import { useState, useEffect } from 'react';
import { detailedWordData } from '@/data/dictionary';

// Structure for individual search records
interface SearchRecord {
  term: string;
  timestamp: number;
  count: number;
}

// Structure for the overall search history
interface SearchHistory {
  searches: SearchRecord[];
  lastUpdated: number;
}

// Local storage key
const SEARCH_HISTORY_KEY = 'digiksyunaryo-search-history';

/**
 * Custom hook to manage search history and popular searches
 */
export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<SearchHistory>({
    searches: [],
    lastUpdated: Date.now()
  });

  // Load search history from local storage
  useEffect(() => {
    const storedHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (storedHistory) {
      try {
        const parsedHistory = JSON.parse(storedHistory) as SearchHistory;
        setSearchHistory(parsedHistory);
      } catch (error) {
        console.error('Failed to parse search history:', error);
        // If parsing fails, just use the default empty history
      }
    }
  }, []);

  // Save a search term to history
  const recordSearch = (term: string) => {
    const normalizedTerm = term.trim().toLowerCase();
    if (!normalizedTerm) return;
    
    // Only record searches for words that exist in our dictionary
    const exists = Object.keys(detailedWordData).some(
      key => key.toLowerCase() === normalizedTerm
    );
    
    if (!exists) return;

    setSearchHistory(prevHistory => {
      // Look for existing record
      const existingIndex = prevHistory.searches.findIndex(
        record => record.term === normalizedTerm
      );

      let updatedSearches = [...prevHistory.searches];

      if (existingIndex >= 0) {
        // Update existing record
        updatedSearches[existingIndex] = {
          ...updatedSearches[existingIndex],
          timestamp: Date.now(),
          count: updatedSearches[existingIndex].count + 1
        };
      } else {
        // Add new record
        updatedSearches.push({
          term: normalizedTerm,
          timestamp: Date.now(),
          count: 1
        });
      }

      // Sort by count (descending)
      updatedSearches.sort((a, b) => b.count - a.count);

      // Keep only top 50 records to avoid excessive storage
      if (updatedSearches.length > 50) {
        updatedSearches = updatedSearches.slice(0, 50);
      }

      const newHistory = {
        searches: updatedSearches,
        lastUpdated: Date.now()
      };

      // Save to localStorage
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));

      return newHistory;
    });
  };

  // Get top N popular searches that exist in the dictionary
  const getPopularSearches = (count: number = 5): string[] => {
    // Filter to ensure only words that exist in the dictionary are returned
    const validSearches = searchHistory.searches.filter(record => {
      return Object.keys(detailedWordData).some(
        key => key.toLowerCase() === record.term.toLowerCase()
      );
    });
    
    // Return top N searches sorted by count
    return validSearches
      .slice(0, count)
      .map(record => record.term);
  };

  // Get recent searches (last 7 days)
  const getRecentSearches = (count: number = 5): string[] => {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return searchHistory.searches
      .filter(record => record.timestamp > oneWeekAgo)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, count)
      .map(record => record.term);
  };

  // Clear all search history
  const clearSearchHistory = () => {
    setSearchHistory({
      searches: [],
      lastUpdated: Date.now()
    });
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  };

  // Add a function that returns sample searches
  const getSampleSearches = () => {
    // Get a selection of valid words from the dictionary
    const dictWords = Object.keys(detailedWordData);
    // Shuffle and take the first 5
    return [...dictWords]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  };
  
  return {
    recordSearch,
    getPopularSearches,
    getRecentSearches,
    clearSearchHistory,
    getSampleSearches
  };
}


