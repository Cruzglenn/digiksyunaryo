import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the bookmark item interface
export interface BookmarkItem {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example?: string;
  timestamp: number;
}

// Define the context interface
interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  addBookmark: (bookmark: Omit<BookmarkItem, 'id' | 'timestamp'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (word: string) => string | null;
  clearAllBookmarks: () => void;
}

// Create the context with default values
const BookmarkContext = createContext<BookmarkContextType>({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
  isBookmarked: () => null,
  clearAllBookmarks: () => {},
});

// Custom hook to use the bookmark context
export const useBookmarks = () => useContext(BookmarkContext);

// Provider component
export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    const savedBookmarks = localStorage.getItem('digiksyunaryo-bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  // Save to localStorage whenever bookmarks change
  useEffect(() => {
    localStorage.setItem('digiksyunaryo-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Add a new bookmark
  const addBookmark = (bookmark: Omit<BookmarkItem, 'id' | 'timestamp'>) => {
    // Generate a unique ID
    const id = `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Add the bookmark with timestamp
    setBookmarks((prev) => [
      ...prev.filter(b => b.word !== bookmark.word), // Remove if already exists
      { ...bookmark, id, timestamp: Date.now() }
    ]);
  };

  // Remove a bookmark by ID
  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id));
  };

  // Check if a word is already bookmarked and return the bookmark ID if found
  const isBookmarked = (word: string): string | null => {
    const bookmark = bookmarks.find((bookmark) => bookmark.word === word);
    return bookmark ? bookmark.id : null;
  };

  // Clear all bookmarks
  const clearAllBookmarks = () => {
    setBookmarks([]);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        clearAllBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
