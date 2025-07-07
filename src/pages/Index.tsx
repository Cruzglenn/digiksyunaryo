/**
 * File: Index.tsx
 * Author: Glenn Cruz
 * Created: May 21, 2025
 * Description: Main homepage for Digiksyunaryo website.
 * ---------------------------------------------------------------
 * This page renders the hero section, navigation bar, featured
 * "Word of the Day" card, trending search terms, and word listings.
 * It includes search functionality, word filtering, and interactive
 * word cards with animations.
 * Built with React, TypeScript, and Tailwind CSS.
 * 
 
 */

import React from "react";
import Navbar from "@/components/Navbar";
import SearchBar, { useSearchHistory } from "@/components/SearchBar";
import WordOfDay from "@/components/WordOfDay";
import { AnimatePresence, motion } from "framer-motion";
import WordCardHover from "@/components/WordCardHover";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Search, TrendingUp, ChevronDown, Filter, AlignJustify, Sparkles } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { dictionaryWords, detailedWordData } from "@/data/dictionary";
import { getCuratedFeaturedWords } from "@/data/featuredWords";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";
import { expandSearchTerm } from "@/data/wordRelationships";

// Extract and format words from dictionary data to be used in the app
const getFormattedDictionaryWords = (count: number, startIndex: number = 0) => {
  // Get words from detailed data
  const detailedEntries = Object.entries(detailedWordData).slice(startIndex, startIndex + count);
  
  return detailedEntries.map(([wordKey, details]) => ({
    word: wordKey,
    pronunciation: details.pronunciation || '',
    partOfSpeech: details.partOfSpeech,
    definition: details.definition,
    example: details.example
  }));
};

// Get words for different categories from actual dictionary data
const getRandomWords = (count: number, exclude: string[] = []) => {
  const keys = Object.keys(detailedWordData).filter(key => !exclude.includes(key));
  const shuffled = [...keys].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  
  return selected.map(key => ({
    word: key,
    pronunciation: detailedWordData[key].pronunciation || '',
    partOfSpeech: detailedWordData[key].partOfSpeech,
    definition: detailedWordData[key].definition,
    example: detailedWordData[key].example
  }));
};

const Index = () => {
  const [searchParams] = useSearchParams();
  
  const [searchQueryFromUrl, setSearchQueryFromUrl] = useState(searchParams.get("q") || "");
  const [wordCount, setWordCount] = useState(6); // Initial number of words to show
  const [featuredWords, setFeaturedWords] = useState<ReturnType<typeof getFormattedDictionaryWords>>([]);
  const [trendingWords, setTrendingWords] = useState<ReturnType<typeof getFormattedDictionaryWords>>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [alphabetFilter, setAlphabetFilter] = useState<string>("all");
  const [wordsPerLoad, setWordsPerLoad] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [initialWordCount] = useState<number>(6); // Store the initial word count
  const [featuredWordsFilter, setFeaturedWordsFilter] = useState<string>(""); // Search filter for featured words
  const [trendingWordsFilter, setTrendingWordsFilter] = useState<string>(""); // Search filter for trending words
  const [activeTab, setActiveTab] = useState<string>("featured");
  const MAX_WORDS = 48; // Maximum number of words to load
  
  // Get popular searches from history
  const { getPopularSearches, getSampleSearches } = useSearchHistory();
  
  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setSearchQueryFromUrl(queryParam);
    }
  }, [searchParams]);
  
  // Initialize word lists from dictionary data and popular searches
  useEffect(() => {
    // Get curated featured words
    const curatedWordKeys = getCuratedFeaturedWords(wordCount);
    const initialFeatured = curatedWordKeys.map(wordKey => ({
      word: wordKey,
      pronunciation: detailedWordData[wordKey]?.pronunciation || '',
      partOfSpeech: detailedWordData[wordKey]?.partOfSpeech || '',
      definition: detailedWordData[wordKey]?.definition || '',
      example: detailedWordData[wordKey]?.example || ''
    }));
    setFeaturedWords(initialFeatured);
    
    // Get trending words from search history
    const popularSearchTerms = getPopularSearches(wordCount);
    
    // If we have popular searches, use them for trending words
    if (popularSearchTerms.length > 0) {
      const trendingWordsFromHistory = popularSearchTerms.map(term => {
        const wordKey = Object.keys(detailedWordData).find(
          key => key.toLowerCase() === term.toLowerCase()
        ) || term;
        
        return {
          word: wordKey,
          pronunciation: detailedWordData[wordKey]?.pronunciation || '',
          partOfSpeech: detailedWordData[wordKey]?.partOfSpeech || '',
          definition: detailedWordData[wordKey]?.definition || '',
          example: detailedWordData[wordKey]?.example || ''
        };
      });
      setTrendingWords(trendingWordsFromHistory);
    } else {
      // If no search history, fall back to random words (excluding featured words)
      const featuredWordNames = initialFeatured.map(w => w.word);
      const initialTrending = getRandomWords(wordCount, featuredWordNames);
      setTrendingWords(initialTrending);
    }
    
    // Get popular searches for the popular searches section
    const popular = getPopularSearches(5);
    setPopularSearches(popular.length > 0 ? popular : getSampleSearches());
  }, []);
  
  const handlePopularSearchClick = (term: string) => {
    setSearchQueryFromUrl(term);
    // Simulate a click on the search button after a brief delay
    setTimeout(() => {
      const searchButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (searchButton) {
        searchButton.click();
      }
    }, 100);
  };
  
  // Filter words by alphabet and search term
  const filterWordsByAlphabet = (words: ReturnType<typeof getFormattedDictionaryWords>, searchFilter: string = "") => {
    let filtered = words;
    
    if (searchFilter.trim() !== "") {
      const searchTerm = searchFilter.toLowerCase().trim();
      
      // Get expanded search terms (synonyms and related words)
      const expandedTerms = expandSearchTerm(searchTerm);
      
      // First filter by direct text matching
      const directMatches = filtered.filter(word => 
        word.word.toLowerCase().includes(searchTerm) || 
        word.definition.toLowerCase().includes(searchTerm) ||
        word.partOfSpeech.toLowerCase().includes(searchTerm)
      );
      
      // Then filter by expanded terms
      const expandedMatches = expandedTerms.length > 0 ? 
        filtered.filter(word => 
          expandedTerms.some(term => word.word.toLowerCase() === term.toLowerCase())
        ) : [];
      
      // Combine results, ensuring no duplicates
      const combinedResults = [...directMatches];
      expandedMatches.forEach(match => {
        if (!combinedResults.some(w => w.word === match.word)) {
          combinedResults.push(match);
        }
      });
      
      filtered = combinedResults;
    }
    
    if (alphabetFilter !== "all") {
      filtered = filtered.filter(word => word.word.toUpperCase().startsWith(alphabetFilter));
    }
    
    return filtered;
  };

  // Get alphabet letters for filter
  const alphabetLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                         "N", "Ñ", "Ng", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // Handle showing more words with animation and filtering
  const handleShowMoreWords = () => {
    // Check if we've reached the maximum number of words
    if (wordCount >= MAX_WORDS) {
      // Show a message or notification that we've reached the maximum
      alert("Naabot na ang maximum na bilang ng mga salita. Gamitin ang filter para mahanap ang hinahanap mo.");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      // Get current words to exclude them from the new batch
      const currentFeaturedWords = featuredWords.map(w => w.word);
      const currentTrendingWords = trendingWords.map(w => w.word);
      const allCurrentWords = [...currentFeaturedWords, ...currentTrendingWords];
      
      // Calculate how many more words we can load without exceeding the maximum
      const remainingWords = MAX_WORDS - wordCount;
      const wordsToLoad = Math.min(wordsPerLoad, remainingWords);
      
      // Get more curated featured words
      const moreCurated = getCuratedFeaturedWords(wordCount + wordsToLoad)
        .filter(word => !currentFeaturedWords.includes(word))  // Don't repeat featured words
        .slice(0, wordsToLoad);
      
      // Map to word objects
      const additionalFeatured = moreCurated.map(wordKey => ({
        word: wordKey,
        pronunciation: detailedWordData[wordKey]?.pronunciation || '',
        partOfSpeech: detailedWordData[wordKey]?.partOfSpeech || '',
        definition: detailedWordData[wordKey]?.definition || '',
        example: detailedWordData[wordKey]?.example || ''
      }));
      
      // Get more popular searches for trending
      const popularSearches = getPopularSearches(wordCount + wordsToLoad);
      const newTrendingTerms = popularSearches
        .filter(term => !currentTrendingWords.includes(term))
        .slice(0, wordsToLoad);
      
      let additionalTrending;
      
      if (newTrendingTerms.length > 0) {
        // Map trending search terms to word objects
        additionalTrending = newTrendingTerms.map(term => {
          const wordKey = Object.keys(detailedWordData).find(
            key => key.toLowerCase() === term.toLowerCase()
          ) || term;
          
          return {
            word: wordKey,
            pronunciation: detailedWordData[wordKey]?.pronunciation || '',
            partOfSpeech: detailedWordData[wordKey]?.partOfSpeech || '',
            definition: detailedWordData[wordKey]?.definition || '',
            example: detailedWordData[wordKey]?.example || ''
          };
        });
      } else {
        // Fall back to random words if we don't have enough popular searches
        additionalTrending = getRandomWords(
          wordsToLoad, 
          [...allCurrentWords, ...additionalFeatured.map(w => w.word)]
        );
      }
      
      // Combine current and new words
      let newFeatured = [...featuredWords, ...additionalFeatured];
      let newTrending = [...trendingWords, ...additionalTrending];
      
      setFeaturedWords(newFeatured);
      setTrendingWords(newTrending);
      setWordCount(wordCount + wordsToLoad);
      setIsExpanded(true);
      setIsLoading(false);
      
      // If we've reached the maximum, disable the button
      if (wordCount + wordsToLoad >= MAX_WORDS) {
        // You could show a notification here that we've reached the maximum
      }
    }, 600);
  };
  
  // Reset filters
  const resetFilters = () => {
    setAlphabetFilter("all");
    setWordsPerLoad(6);
    setShowFilters(false);
  };
  
  // Collapse expanded words
  const handleCollapseWords = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      // Keep only the initial set of words
      const initialFeatured = featuredWords.slice(0, initialWordCount);
      const initialTrending = trendingWords.slice(0, initialWordCount);
      
      setFeaturedWords(initialFeatured);
      setTrendingWords(initialTrending);
      setWordCount(initialWordCount);
      setIsExpanded(false);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-beige-light via-white to-beige-lightest font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-12 md:py-20 lg:py-24 bg-white shadow-inner-lg"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-maroon mb-6 leading-tight"
          >
            DIGIKSYUNARYO
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-dictionary-dark max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Ang iyong modernong gabay sa mga trending na salitang Filipino. Tuklasin ang mga bagong ekspresyon at palawakin ang iyong bokabularyo.
          </motion.p>
          
          {/* Enhanced SearchBar placement and styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <SearchBar 
              initialQuery={searchQueryFromUrl}
              className="shadow-xl rounded-full"
            />
          </motion.div>

          {/* Popular Searches Chips - Enhanced Styling */}
          {popularSearches.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-10 md:mb-12"
            >
              <h2 className="text-sm font-semibold text-maroon mb-3 tracking-wider uppercase flex items-center justify-center">
                <TrendingUp className="h-4 w-4 mr-1.5" />
                Mga Sikat na Paghahanap:
              </h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {popularSearches.map((term, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1, ease: "backOut" }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePopularSearchClick(term)}
                      className="bg-gold-1/10 hover:bg-gold-1/20 border-gold-1/30 text-maroon rounded-full px-3 py-1 text-xs sm:text-sm transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-gold-1/40"
                      aria-label={`Hanapin ang ${term}`}
                    >
                      {term}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {/* Word of the Day Section - Centered and Prominent */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <WordOfDay />
        </motion.section>
        
        {/* Word List Section */}
        <section className="py-16 bg-gradient-to-b from-white to-dictionary-100/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-maroon/10 text-maroon text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Mga Salitang Filipino</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dictionary-dark mb-4">
                Tuklasin ang mga Salita
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sariwa, modernong mga salita mula sa diksyunaryo ng Digiksyunaryo. Lawakan ang bokabularyo mo sa isang madaling paraan.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-maroon/10 bg-white shadow-lg mb-10">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="bg-dictionary-100/30 p-4 border-b border-maroon/10">
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                    <TabsTrigger value="featured" className="text-sm md:text-base data-[state=inactive]:text-slate-700">Mga Tampok na Salita</TabsTrigger>
                    <TabsTrigger value="trending" className="text-sm md:text-base data-[state=inactive]:text-slate-700">Mga Trending</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="featured" className="mt-0 p-6">
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Maghanap ng salita..."
                        value={featuredWordsFilter}
                        onChange={(e) => setFeaturedWordsFilter(e.target.value)}
                        className="w-full px-4 py-2 border border-maroon/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/30"
                      />
                      <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {featuredWordsFilter && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {filterWordsByAlphabet(featuredWords, featuredWordsFilter).length} (na) resulta para sa "{featuredWordsFilter}"
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {filterWordsByAlphabet(featuredWords, featuredWordsFilter).map((word, index) => (
                      <motion.div
                        key={`featured-${word.word}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: index % 3 * 0.1 }}
                      >
                        <WordCardHover
                          word={word.word}
                          pronunciation={word.pronunciation}
                          partOfSpeech={word.partOfSpeech}
                          definition={word.definition}
                          example={word.example}
                          index={index}
                          className={cn(
                            "transform transition-all duration-300 hover:shadow-md border border-maroon/10 hover:scale-[1.02]",
                            index % 3 === 0 ? "bg-white" : "",
                            index % 3 === 1 ? "bg-white" : "",
                            index % 3 === 2 ? "bg-white" : ""
                          )}
                        />
                      </motion.div>
                    ))}
                    </AnimatePresence>
                  </div>
                </TabsContent>
                
                <TabsContent value="trending" className="mt-0 p-6">
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Maghanap ng salita..."
                        value={trendingWordsFilter}
                        onChange={(e) => setTrendingWordsFilter(e.target.value)}
                        className="w-full px-4 py-2 border border-maroon/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/30"
                      />
                      <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {trendingWordsFilter && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {filterWordsByAlphabet(trendingWords, trendingWordsFilter).length} (na) resulta para sa "{trendingWordsFilter}"
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {filterWordsByAlphabet(trendingWords, trendingWordsFilter).map((word, index) => (
                      <motion.div
                        key={`trending-${word.word}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: index % 3 * 0.1 }}
                      >
                        <WordCardHover
                          word={word.word}
                          pronunciation={word.pronunciation}
                          partOfSpeech={word.partOfSpeech}
                          definition={word.definition}
                          example={word.example}
                          index={index}
                          className={cn(
                            "transform transition-all duration-300 hover:shadow-md border border-maroon/10 hover:scale-[1.02]",
                            index % 3 === 0 ? "bg-white" : "",
                            index % 3 === 1 ? "bg-white" : "",
                            index % 3 === 2 ? "bg-white" : ""
                          )}
                        />
                      </motion.div>
                    ))}
                    </AnimatePresence>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex flex-col items-center mt-12 space-y-4">
              {/* Filters Section */}
              <div className="flex flex-wrap justify-center gap-3 mb-2 w-full max-w-2xl">
                <Popover open={showFilters} onOpenChange={setShowFilters}>
                  <PopoverTrigger asChild>
                    <button 
                      className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-white text-black border border-maroon/30 hover:bg-maroon/5 hover:text-maroon transition-colors" 
                      onClick={resetFilters}
                      aria-label="I-reset ang mga filter"
                    >
                      <Filter className="h-4 w-4" />
                      I-reset ang Mga Filter
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Ayusin ayon sa Alpabeto</h4>
                        <div className="flex flex-wrap gap-1">
                          <Button
                            variant={alphabetFilter === "all" ? "default" : "outline"}
                            size="sm"
                            className={`text-xs px-2 py-0 h-7 ${alphabetFilter === "all" ? 'bg-maroon hover:bg-maroon/90' : ''}`}
                            onClick={() => setAlphabetFilter("all")}
                            aria-label="Lahat"
                          >
                            Lahat
                          </Button>
                          {alphabetLetters.map(letter => (
                            <Button
                              key={letter}
                              variant={alphabetFilter === letter ? "default" : "outline"}
                              size="sm"
                              className={`text-xs px-2 py-0 h-7 ${alphabetFilter === letter ? 'bg-maroon hover:bg-maroon/90' : ''}`}
                              onClick={() => setAlphabetFilter(letter)}
                              aria-label={letter}
                            >
                              {letter}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoading ? 0.7 : 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {/* Show More Words Button */}
                <button
                  className="flex items-center justify-center px-6 py-3 bg-maroon text-white rounded-md shadow hover:bg-burgundy-dark transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  onClick={handleShowMoreWords}
                  disabled={isLoading || wordCount >= MAX_WORDS}
                  aria-label="Ipakita ang higit pang mga salita"
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Nilo-load...
                    </>
                  ) : wordCount >= MAX_WORDS ? (
                    <>Maximum na ang mga ipinapakitang salita</>
                  ) : (
                    <>
                      Ipakita ang Higit Pang Mga Salita ({wordCount}/{MAX_WORDS})
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                    </>
                  )}
                </button>
                
                {/* Collapse Button - Only show if expanded */}
                {isExpanded && (
                  <button 
                    onClick={handleCollapseWords} 
                    className="flex items-center justify-center px-6 py-3 border border-maroon/30 text-maroon rounded-md hover:bg-maroon/5 transition-all duration-200"
                    aria-label="I-collapse ang mga salita"
                  >
                    <ChevronDown className="mr-2 h-4 w-4" />
                    <span>I-collapse</span>
                  </button>
                )}
              </motion.div>
              
              {/* Word Count Display */}
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span>
                  Ipinapakita: {filterWordsByAlphabet(featuredWords).length + filterWordsByAlphabet(trendingWords).length} na salita
                  {alphabetFilter !== "all" && ` na nagsisimula sa '${alphabetFilter}'`}
                </span>
                {wordCount > initialWordCount && (
                  <span className="inline-flex items-center text-xs bg-maroon/10 text-maroon px-2 py-0.5 rounded-full">
                    +{wordCount - initialWordCount} karagdagang salita
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-dictionary-dark mb-4">
                Hindi Lang Basta Diksyunaryo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ang Digiksyunaryo ay iyong digital na kaagapay sa wika Filipino na may koleksyon ng mga salita at makabuluhang kagamitan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-maroon/10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-maroon/10 text-maroon">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Malawak na Diksyunaryo</h3>
                <p className="text-muted-foreground">
                  Koleksyon ng mga salitang Filipino na may detalyadong kahulugan, etimolohiya, at mga halimbawa ng paggamit sa pangungusap.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-maroon/10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-maroon/10 text-maroon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Bookmark Feature</h3>
                <p className="text-muted-foreground">
                  I-save ang iyong mga paboritong salita para sa madaling pagbabalik-aral at pagreperensya sa hinaharap.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-maroon/10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-maroon/10 text-maroon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Salita ng Araw</h3>
                <p className="text-muted-foreground">
                  Palawakin ang iyong bokabularyo sa pamamagitan ng bagong salitang ipinapakita araw-araw.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
