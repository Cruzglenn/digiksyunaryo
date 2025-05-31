import { Search, ChevronDown, X, Book, TrendingUp, Filter, Eye, GripHorizontal, Minimize, Maximize } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import Fuse from "fuse.js";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import WordDetail from "./WordDetail";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { dictionaryWords, detailedWordData } from "@/data/dictionary";

interface SearchBarProps {
  className?: string;
  initialQuery?: string;
}

const SearchBar = ({ className, initialQuery = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<typeof dictionaryWords>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"popup" | "below" | "mini">("popup");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{
    partOfSpeech: string | null;
  }>({ partOfSpeech: null });
  const searchRef = useRef<HTMLDivElement>(null);
  
  const { recordSearch, getPopularSearches, getSampleSearches } = useSearchHistory();
  
  const [miniViewPosition, setMiniViewPosition] = useState({ x: window.innerWidth - 320, y: window.innerHeight - 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const miniViewRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragStartOffset = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const popular = getPopularSearches(5);
    setPopularSearches(popular.length > 0 ? popular : getSampleSearches());
  }, []);
  
  useEffect(() => {
    if (initialQuery && initialQuery !== query) {
      setQuery(initialQuery);
      if (initialQuery) {
        const wordKey = initialQuery.toLowerCase();
        const matchingWord = Object.keys(detailedWordData).find(
          key => key.toLowerCase() === wordKey
        );
        
        if (matchingWord) {
          setSelectedWord(matchingWord);
          setDialogOpen(viewMode === "popup");
          setPopoverOpen(viewMode === "mini");
          recordSearch(matchingWord);
          const updated = getPopularSearches(5);
          setPopularSearches(updated);
        }
      }
    }
  }, [initialQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const partsOfSpeech = useMemo(() => {
    const allParts = new Set<string>();
    Object.values(detailedWordData).forEach(word => {
      if (word.partOfSpeech) {
        allParts.add(word.partOfSpeech);
      }
    });
    return Array.from(allParts).sort();
  }, [detailedWordData]);

  const fuse = useMemo(() => new Fuse(dictionaryWords, {
    keys: ['word'],
    threshold: 0.4, 
    distance: 100, 
    includeScore: true, 
    useExtendedSearch: true, 
    ignoreLocation: true, 
    findAllMatches: true, 
  }), [dictionaryWords]);

  useEffect(() => {
    if (query.length > 0) {
      const startsWithQuery = dictionaryWords.filter(word => 
        word.word.toLowerCase().startsWith(query.toLowerCase())
      );
      
      const results = fuse.search(query);
      let fuzzyResults = results
        .sort((a, b) => (a.score || 1) - (b.score || 1))
        .map(result => result.item)
        .filter(item => !startsWithQuery.some(w => w.word === item.word));
      
      let fuzzyResultsLimited = fuzzyResults.slice(0, 20); 
      
      let filteredWords = [...startsWithQuery, ...fuzzyResultsLimited];
      
      if (activeFilters.partOfSpeech) {
        filteredWords = filteredWords.filter(word => {
          const detailedData = detailedWordData[word.word];
          return detailedData?.partOfSpeech === activeFilters.partOfSpeech;
        });
      }
      
      setSuggestions(filteredWords);
    } else {
      setSuggestions([]);
    }
  }, [query, fuse, activeFilters]);
  
  const resetFilters = () => {
    setActiveFilters({ partOfSpeech: null });
    setFilterMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    if (query.trim().length < 2) return;
    
    const wordKey = query.trim().toLowerCase();
    const matchingWord = Object.keys(detailedWordData).find(
      key => key.toLowerCase() === wordKey
    );
    
    if (matchingWord) {
      setSelectedWord(matchingWord);
      setDialogOpen(viewMode === "popup");
      setPopoverOpen(viewMode === "mini");
      recordSearch(matchingWord);
      const updated = getPopularSearches(5);
      setPopularSearches(updated);
    } 
  };

  const handleSuggestionClick = (word: string) => {
    setQuery(word);
    setIsFocused(false);
    setSuggestions([]);
    
    const wordKey = word.toLowerCase();
    const matchingWord = Object.keys(detailedWordData).find(
      key => key.toLowerCase() === wordKey
    );
    
    if (matchingWord) {
      setSelectedWord(matchingWord);
      setDialogOpen(viewMode === "popup");
      setPopoverOpen(viewMode === "mini");
      recordSearch(matchingWord);
      const updated = getPopularSearches(5);
      setPopularSearches(updated);
    }
  };

  const handleCloseDetails = () => {
    setSelectedWord(null);
    setDialogOpen(false);
    setPopoverOpen(false);
  };

  const cycleViewMode = () => {
    const modes: Array<"popup" | "below" | "mini"> = ["popup", "below", "mini"];
    const currentIndex = modes.indexOf(viewMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    const nextMode = modes[nextIndex];
    
    setViewMode(nextMode);
    if (selectedWord) {
      setDialogOpen(nextMode === "popup");
      setPopoverOpen(nextMode === "mini");
    }
  };

  const changeViewMode = (mode: "popup" | "below" | "mini") => {
    setViewMode(mode);
    if (selectedWord) {
      setDialogOpen(mode === "popup");
      setPopoverOpen(mode === "mini");
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!miniViewRef.current) return;
    
    setIsDragging(true);
    
    if ('touches' in e) {
      dragStartPos.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    } else {
      dragStartPos.current = {
        x: e.clientX,
        y: e.clientY
      };
      e.preventDefault();
    }
    
    dragStartOffset.current = {
      x: miniViewPosition.x,
      y: miniViewPosition.y
    };
    
    e.stopPropagation();
  };

  const animationFrameRef = useRef<number | null>(null);

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    let currentX = 0;
    let currentY = 0;
    
    if (e.type.startsWith('touch')) {
      const touchEvent = e as TouchEvent;
      if (touchEvent.touches && touchEvent.touches.length > 0) {
        currentX = touchEvent.touches[0].clientX;
        currentY = touchEvent.touches[0].clientY;
      }
    } else {
      const mouseEvent = e as MouseEvent;
      currentX = mouseEvent.clientX;
      currentY = mouseEvent.clientY;
      mouseEvent.preventDefault();
    }
    
    const deltaX = currentX - dragStartPos.current.x;
    const deltaY = currentY - dragStartPos.current.y;
    
    const newX = dragStartOffset.current.x + deltaX;
    const newY = dragStartOffset.current.y + deltaY;
    
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    if (miniViewRef.current) {
      miniViewRef.current.style.transform = `translate3d(0, 0, 0)`;
      miniViewRef.current.style.left = `${newX}px`;
      miniViewRef.current.style.top = `${newY}px`;
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setMiniViewPosition({
        x: newX,
        y: newY
      });
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (miniViewRef.current) {
      const currentLeft = parseFloat(miniViewRef.current.style.left) || miniViewPosition.x;
      const currentTop = parseFloat(miniViewRef.current.style.top) || miniViewPosition.y;
      
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const miniViewWidth = isMinimized ? 100 : miniViewRef.current.offsetWidth;
      const miniViewHeight = miniViewRef.current.offsetHeight;
      
      let x = currentLeft;
      let y = currentTop;
      
      if (x < 0) x = 0;
      if (x + miniViewWidth > viewportWidth) x = viewportWidth - miniViewWidth;
      
      if (y < 0) y = 0;
      if (y + miniViewHeight > viewportHeight) y = viewportHeight - miniViewHeight;
      
      setMiniViewPosition({ x, y });
      
      miniViewRef.current.style.left = `${x}px`;
      miniViewRef.current.style.top = `${y}px`;
    }
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchMove = (e: TouchEvent) => handleDrag(e);
    const handleTouchEnd = () => handleDragEnd();
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isDragging]);
  
  useEffect(() => {
    if (viewMode === "mini" && selectedWord) {
      handleDragEnd(); 
    }
  }, [viewMode, selectedWord]);

  return (
    <div className={cn(`relative w-full max-w-3xl mx-auto`, className)} ref={searchRef}>
      <form 
        onSubmit={handleSearch}
        className="relative flex items-center"
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          id="main-search-input"
          name="query"
          type="search"
          placeholder="Maghanap ng salita..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="pl-12 pr-16 sm:pr-24 py-6 sm:py-7 text-lg sm:text-xl rounded-full border-2 border-maroon/30 focus:border-maroon-dark focus:ring-4 focus:ring-gold-1/60 shadow-lg transition-all duration-300 placeholder:text-sm sm:placeholder:text-base placeholder-gray-400"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
          {query.length > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="mr-0.5 sm:mr-1 w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground hover:text-maroon"
              onClick={() => setQuery("")}
              title="Clear search"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          )}
          <Popover open={filterMenuOpen} onOpenChange={setFilterMenuOpen}>
            <PopoverTrigger asChild>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="mr-0.5 sm:mr-1 w-8 h-8 sm:w-10 sm:h-10"
                title="Mga Filter"
              >
                <Filter className={cn(
                  "h-4 w-4 sm:h-5 sm:w-5 transition-colors",
                  activeFilters.partOfSpeech 
                    ? "text-maroon" 
                    : "text-muted-foreground hover:text-maroon"
                )} />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-56 p-3 z-30">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Uri ng Salita</h3>
                  <div className="space-y-1">
                    <div
                      className={cn(
                        "px-2 py-1 text-sm rounded-md cursor-pointer hover:bg-maroon/5 transition-colors flex items-center justify-between",
                        !activeFilters.partOfSpeech && "bg-maroon/10 text-maroon font-medium"
                      )}
                      onClick={() => setActiveFilters({ ...activeFilters, partOfSpeech: null })}
                    >
                      <span>Lahat</span>
                      {!activeFilters.partOfSpeech && <TrendingUp className="h-3.5 w-3.5" />}
                    </div>
                    <ScrollArea className="h-[200px] pr-2">
                      <div className="space-y-1 pr-2">
                        {partsOfSpeech.map(part => (
                          <div
                            key={part}
                            className={cn(
                              "px-2 py-1 text-sm rounded-md cursor-pointer hover:bg-maroon/5 transition-colors flex items-center justify-between",
                              activeFilters.partOfSpeech === part && "bg-maroon/10 text-maroon font-medium"
                            )}
                            onClick={() => setActiveFilters({ ...activeFilters, partOfSpeech: part })}
                          >
                            <span>{part}</span>
                            {activeFilters.partOfSpeech === part && <TrendingUp className="h-3.5 w-3.5" />}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
                
                <div className="flex justify-center w-full mt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={resetFilters}
                    className="text-xs w-full py-1"
                  >
                    I-reset ang Mga Filter
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Button 
            type="submit" 
            className="rounded-full bg-maroon hover:bg-burgundy-dark text-white h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-gold-1/50 focus:outline-none"
          >
            Hanapin
          </Button>
        </div>
      </form>

      {isFocused && suggestions.length > 0 && (
        <div 
          className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gold-2/20 animate-fade-in z-20"
          onClick={(e) => e.stopPropagation()} 
          onWheel={(e) => e.stopPropagation()} 
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-gold-1/10">
            <h2 className="font-medium text-maroon">Mga Mungkahi</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{suggestions.length} salita</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div 
            className="overflow-y-auto max-h-80 custom-scrollbar p-1" 
            onScroll={(e) => e.stopPropagation()} 
          >
            <ul className="divide-y divide-gold-1/10">
              {suggestions.map((item, index) => (
                <li 
                  key={index} 
                  onClick={() => handleSuggestionClick(item.word)}
                  className="px-4 py-3 hover:bg-gold-1/10 cursor-pointer transition-colors flex justify-between group"
                >
                  <span className="font-medium">{item.word}</span>
                  <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.definition.substring(0, 20)}...
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0 pt-6 pb-4">
          <DialogHeader className="px-6 flex flex-row justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-serif text-maroon font-semibold">Kahulugan ng Salita</DialogTitle>
              <DialogDescription>Tingnan ang detalyadong impormasyon para sa salitang ito.</DialogDescription>
            </div>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              title="Pagpipilian ng Anyo"
              onClick={cycleViewMode}
              className="h-8 w-8"
              aria-label="Pagpipilian ng Anyo"
            >
              <Eye className="h-5 w-5 text-muted-foreground hover:text-maroon transition-colors" />
            </Button>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[70vh] px-6 py-4">
            {selectedWord && (
              <WordDetail wordData={detailedWordData[selectedWord]} className="bg-white/80 rounded-lg" />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {selectedWord && viewMode === "below" && (
        <div className="mt-6 animate-fade-in border border-gold-1/30 rounded-xl bg-white shadow-lg">
          <div className="flex flex-row justify-between items-start px-6 py-4 border-b border-gold-1/20 bg-maroon/5">
            <div className="text-left">
              <h2 className="text-2xl font-serif text-maroon font-semibold">Kahulugan ng Salita</h2>
              <p className="text-muted-foreground text-sm">Tingnan ang detalyadong impormasyon para sa salitang ito.</p>
            </div>
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon"
                title="Pagpipilian ng Anyo" 
                onClick={cycleViewMode}
                className="h-8 w-8"
                aria-label="Pagpipilian ng Anyo"
              >
                <Eye className="h-5 w-5 text-muted-foreground hover:text-maroon transition-colors" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCloseDetails}
                aria-label="Isara ang detalye"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="p-6 bg-white/70">
            <WordDetail wordData={detailedWordData[selectedWord]} className="bg-white/80 p-6 rounded-lg shadow-sm" />
          </div>
        </div>
      )}

      {selectedWord && viewMode === "mini" && (
        <div 
          ref={miniViewRef}
          className={cn(
            "fixed z-50 bg-white shadow-lg border border-gold-2/30 animate-fade-in",
            isDragging 
              ? "" 
              : "transition-[width,border-radius,transform,box-shadow,border-color] duration-300 ease-in-out",
            isMinimized 
              ? "w-auto rounded-full hover:shadow-xl hover:border-maroon/40 hover:scale-105" 
              : "w-[20rem] sm:w-96 rounded-lg"
          )}
          style={{
            left: `${miniViewPosition.x}px`,
            top: `${miniViewPosition.y}px`,
            cursor: isDragging ? 'grabbing' : 'auto',
            touchAction: 'none' 
          }}
        >
          <div 
            className={cn(
              "flex justify-between items-center p-3",
              isMinimized 
                ? "bg-gradient-to-r from-maroon/90 to-maroon rounded-full px-4" 
                : "border-b border-gold-1/20 bg-maroon/5",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="flex items-center gap-2">
              <GripHorizontal className={cn("h-4 w-4", isMinimized ? "text-white/80" : "text-muted-foreground")} />
              {!isMinimized && <h3 className="font-medium">Mini View</h3>}
              {isMinimized && selectedWord && (
                <span className="text-white font-medium truncate max-w-24">{selectedWord}</span>
              )}
            </div>
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon"
                title={isMinimized ? "Maximize" : "Minimize"}
                onClick={toggleMinimize}
                className="h-8 w-8"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? 
                  <Maximize className={cn(
                    "h-4 w-4 transition-all",
                    isMinimized ? "text-white hover:text-gold-2" : "text-muted-foreground hover:text-maroon"
                  )} /> : 
                  <Minimize className="h-4 w-4 text-muted-foreground hover:text-maroon transition-colors" />
                }
              </Button>
              {!isMinimized && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  title="Pagpipilian ng Anyo" 
                  onClick={cycleViewMode}
                  className="h-8 w-8"
                  aria-label="Pagpipilian ng Anyo"
                >
                  <Eye className="h-4 w-4 text-muted-foreground hover:text-maroon transition-colors" />
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleCloseDetails}
                className="h-8 w-8"
                aria-label="Isara ang detalye"
              >
                <X className={cn("h-4 w-4 transition-all", isMinimized ? "text-white hover:text-gold-2" : "")} />
              </Button>
            </div>
          </div>
          {!isMinimized && (
            <div className="p-3 sm:p-4">
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                <WordDetail 
                  wordData={detailedWordData[selectedWord]} 
                  className="bg-white/80 p-2 sm:p-3 rounded-lg text-sm sm:text-base" 
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { useSearchHistory } from "@/hooks/useSearchHistory";
export default SearchBar;