import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Filter, ArrowLeft, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WordDetail from '@/components/WordDetail';
import { Link, useSearchParams } from 'react-router-dom';
import { useDictionaryCache } from '@/hooks/useDictionaryCache';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

// Define the available filters
type FilterOptions = {
  partOfSpeech: string | null;
  searchMode: 'exact' | 'fuzzy' | 'prefix';
  caseSensitive: boolean;
};

const DEFAULT_FILTERS: FilterOptions = {
  partOfSpeech: null,
  searchMode: 'fuzzy',
  caseSensitive: false,
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(queryParam);
  const [results, setResults] = useState<any[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>(DEFAULT_FILTERS);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Get dictionary data with our optimized cache
  const { 
    isLoading, 
    error, 
    findWords, 
    getWordDetails,
    dictionarySize 
  } = useDictionaryCache();
  
  // Get all available parts of speech from the dictionary for filters
  const [partsOfSpeech, setPartsOfSpeech] = useState<string[]>([]);

  // Sync query state with URL parameter
  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    if (!isLoading) {
      // Collect all parts of speech from the dictionary
      // In a production app, this would be better optimized in the useDictionaryCache hook
      const allParts = new Set<string>();
      
      // Get 20 random words to analyze
      const randomWords = Array.from({ length: 20 }, () => 
        Math.floor(Math.random() * dictionarySize)
      );
      
      randomWords.forEach(idx => {
        const wordData = findWords('', 100)[idx];
        if (wordData) {
          const details = getWordDetails(wordData.word);
          if (details?.partOfSpeech) {
            allParts.add(details.partOfSpeech);
          }
        }
      });
      
      setPartsOfSpeech(Array.from(allParts).sort());
    }
  }, [isLoading, dictionarySize]);
  
  // Perform search when query or filters change
  useEffect(() => {
    if (query.trim()) {
      handleSearch();
    }
  }, [query, filters]);
  
  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    // Update the URL to reflect the current search
    setSearchParams({ q: query });
    
    // Search with our cached dictionary data
    const searchResults = findWords(query, 50); // Get more results for filtering
    
    // Apply filters
    let filteredResults = searchResults;
    
    // Filter by part of speech if selected
    if (filters.partOfSpeech) {
      filteredResults = filteredResults.filter(word => {
        const details = getWordDetails(word.word);
        return details?.partOfSpeech === filters.partOfSpeech;
      });
    }
    
    setResults(filteredResults);
  };
  
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };
  
  // Render loading state
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 text-maroon animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Naglo-load ang dictionary data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Render error state
  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-4">
            <div className="bg-red-100 rounded-lg p-4 mb-4">
              <h2 className="text-xl text-red-800 font-medium mb-2">May Error</h2>
              <p className="text-red-700">{error.message}</p>
            </div>
            <Button onClick={() => window.location.reload()}>I-refresh ang Page</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-8"
      >
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-maroon transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Bumalik sa Home
            </Link>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
            className="text-3xl font-serif font-bold text-maroon mt-2 mb-6"
          >
            Advanced na Paghahanap
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-white rounded-lg border border-gold-1/20 shadow-sm overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-4 border-b border-gold-1/20 bg-white">
              <div className="relative flex items-center">
                <div className="absolute left-3 text-muted-foreground">
                  <SearchIcon className="h-5 w-5" />
                </div>
                
                <Input
                  type="search"
                  placeholder="Maghanap ng salita..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pr-28 py-6 text-lg border-2 border-maroon/20 focus:border-maroon"
                />
                
                <div className="absolute right-2 flex space-x-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center text-muted-foreground"
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  >
                    <Filter className={cn("h-4 w-4 mr-1", filters.partOfSpeech && "text-maroon")} />
                    <span>Filters</span>
                  </Button>
                  
                  <Button 
                    type="button" 
                    onClick={handleSearch}
                    className="bg-maroon hover:bg-burgundy text-white"
                  >
                    Hanapin
                  </Button>
                </div>
              </div>
              
              {/* Filters Panel */}
              {isFiltersOpen && (
                <div className="mt-4 p-4 bg-dictionary-100/30 rounded-lg animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Part of speech filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-2">Uri ng Salita</h3>
                      <RadioGroup 
                        value={filters.partOfSpeech || ''} 
                        onValueChange={(value) => setFilters({...filters, partOfSpeech: value || null})}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="" id="pos-all" />
                          <Label htmlFor="pos-all" className="cursor-pointer">Lahat</Label>
                        </div>
                        
                        {partsOfSpeech.map(pos => (
                          <div key={pos} className="flex items-center space-x-2">
                            <RadioGroupItem value={pos} id={`pos-${pos}`} />
                            <Label htmlFor={`pos-${pos}`} className="cursor-pointer">{pos}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    {/* Search mode filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-2">Moda ng Paghahanap</h3>
                      <RadioGroup 
                        value={filters.searchMode} 
                        onValueChange={(value: 'exact' | 'fuzzy' | 'prefix') => 
                          setFilters({...filters, searchMode: value})}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="exact" id="mode-exact" />
                          <Label htmlFor="mode-exact" className="cursor-pointer">
                            Eksakto
                            <p className="text-xs text-muted-foreground">
                              Tutugma lang kapag eksaktong pareho ang mga letra
                            </p>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fuzzy" id="mode-fuzzy" />
                          <Label htmlFor="mode-fuzzy" className="cursor-pointer">
                            Fuzzy
                            <p className="text-xs text-muted-foreground">
                              Tutugma kahit may pagkakaiba sa mga letra o typo
                            </p>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="prefix" id="mode-prefix" />
                          <Label htmlFor="mode-prefix" className="cursor-pointer">
                            Prefix
                            <p className="text-xs text-muted-foreground">
                              Tutugma ang mga salitang nagsisimula sa iyong hinahanap
                            </p>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-4">
                          <Checkbox 
                            id="case-sensitive" 
                            checked={filters.caseSensitive}
                            onCheckedChange={(checked) => 
                              setFilters({...filters, caseSensitive: !!checked})}
                          />
                          <Label htmlFor="case-sensitive" className="cursor-pointer">
                            Case Sensitive
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={resetFilters}
                      className="text-xs"
                    >
                      I-reset ang Filters
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Search Results */}
            <div className="p-4">
              <Tabs defaultValue="results" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="results">
                    Mga Resulta 
                    {results.length > 0 && <span className="ml-2 bg-maroon/10 text-maroon rounded-full px-2 py-0.5 text-xs">{results.length}</span>}
                  </TabsTrigger>
                  <TabsTrigger value="word-details" disabled={!selectedWord}>
                    Detalye ng Salita
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="results" className="py-4">
                  {results.length === 0 ? (
                    query ? (
                      <div className="text-center py-10">
                        <p className="text-muted-foreground">
                          Walang nahanap na resulta para sa "{query}"
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Subukan mong baguhin ang iyong paghahanap o ang mga filter
                        </p>
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <SearchIcon className="h-10 w-10 mx-auto text-muted-foreground opacity-20 mb-4" />
                        <p className="text-muted-foreground">
                          Maghanap ng salita upang makita ang mga resulta
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {results.map((word, index) => (
                        <div
                          key={`${word.word}-${index}`}
                          className="p-4 bg-white border border-gold-1/20 rounded-lg hover:border-gold-1/50 hover:shadow-md transition-all cursor-pointer"
                          onClick={() => handleWordClick(word.word)}
                        >
                          <h3 className="font-serif font-bold text-lg text-maroon">{word.word}</h3>
                          <p className="text-sm text-muted-foreground truncate mt-1">
                            {word.definition}
                          </p>
                          {getWordDetails(word.word)?.partOfSpeech && (
                            <span className="inline-block mt-2 px-2 py-0.5 bg-maroon/10 text-maroon text-xs rounded-full">
                              {getWordDetails(word.word)?.partOfSpeech}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="word-details" className="py-4">
                  {selectedWord && getWordDetails(selectedWord) ? (
                    <div className="border border-gold-1/20 rounded-lg p-6 bg-white shadow-sm">
                      <WordDetail wordData={getWordDetails(selectedWord)!} />
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-muted-foreground">
                        Pumili muna ng salita mula sa mga resulta
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
