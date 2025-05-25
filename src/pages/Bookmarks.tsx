import { useBookmarks, BookmarkItem } from "@/context/BookmarkContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Search, Clock, BookmarkCheck, ClipboardCopy, SortAsc, Filter, Calendar } from "lucide-react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Bookmarks = () => {
  const { bookmarks, removeBookmark, clearAllBookmarks } = useBookmarks();
  const [filteredBookmarks, setFilteredBookmarks] = useState<BookmarkItem[]>(bookmarks);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<string>("recent");
  const [viewMode, setViewMode] = useState<string>("grid");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Update filtered bookmarks when bookmarks change or filters/sort change
  useEffect(() => {
    let result = [...bookmarks];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(bookmark => 
        bookmark.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bookmark.definition.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter(bookmark => 
        bookmark.partOfSpeech.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      switch (sortOrder) {
        case "alphabetical":
          return a.word.localeCompare(b.word);
        case "reverse-alphabetical":
          return b.word.localeCompare(a.word);
        case "oldest":
          return a.timestamp - b.timestamp;
        case "recent":
        default:
          return b.timestamp - a.timestamp;
      }
    });
    
    setFilteredBookmarks(result);
  }, [bookmarks, searchQuery, sortOrder, categoryFilter]);

  // Pronunciation functionality removed

  const handleRemoveBookmark = (id: string, word: string) => {
    removeBookmark(id);
    toast.success(`"${word}" ay tinanggal sa mga bookmark.`);
  };

  const handleClearAllBookmarks = () => {
    if (window.confirm("Sigurado ka bang gusto mong tanggalin ang lahat ng bookmark?")) {
      clearAllBookmarks();
      toast.success("Lahat ng bookmark ay tinanggal na.");
    }
  };
  
  const handleCopyDefinition = (word: string, definition: string) => {
    navigator.clipboard.writeText(`${word}: ${definition}`);
    toast.success(`Definition of "${word}" copied to clipboard`);
  };

  const formatTimestamp = (timestamp: number) => {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };
  
  // Get the parts of speech available in current bookmarks
  const getAvailableCategories = () => {
    const categories = new Set<string>();
    bookmarks.forEach(bookmark => {
      if (bookmark.partOfSpeech) {
        const normalizedPartOfSpeech = bookmark.partOfSpeech.toLowerCase().trim();
        categories.add(normalizedPartOfSpeech);
      }
    });
    return Array.from(categories);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 animate-fade-in flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-3xl font-serif font-bold text-maroon flex items-center gap-2">
            <BookmarkCheck className="h-7 w-7" />
            Mga Bookmark
            <span className="text-sm font-normal bg-maroon/10 text-maroon px-2 py-1 rounded-full ml-2">
              {filteredBookmarks.length} {filteredBookmarks.length === 1 ? 'item' : 'items'}
            </span>
          </h1>
          
          {bookmarks.length > 0 && (
            <Button 
              variant="outline" 
              className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
              onClick={handleClearAllBookmarks}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Tanggalin Lahat
            </Button>
          )}
        </div>
        
        {bookmarks.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex flex-col gap-4 items-stretch justify-between sm:items-center">
              {/* Search Input */}
              <div className="relative w-full sm:col-span-3 max-w-none sm:max-w-md mx-auto">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Maghanap sa mga bookmark..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <SortAsc className="h-4 w-4 text-maroon flex-shrink-0" />
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Pagkakasunod-sunod" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Pinakabago</SelectItem>
                      <SelectItem value="oldest">Pinakaluma</SelectItem>
                      <SelectItem value="alphabetical">A hanggang Z</SelectItem>
                      <SelectItem value="reverse-alphabetical">Z hanggang A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Category Filter Dropdown */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter className="h-4 w-4 text-maroon flex-shrink-0" />
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Uri ng Salita" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Lahat ng Uri</SelectItem>
                      {getAvailableCategories().map(category => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* View Mode Toggle */}
                <Tabs defaultValue={viewMode} className="w-full sm:w-[180px]" onValueChange={setViewMode}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        )}

        {bookmarks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-maroon/10 text-maroon">
              <BookmarkCheck className="h-8 w-8" />
            </div>
            <p className="text-muted-foreground text-lg mb-4">
              Wala ka pang nai-bookmark na salita.
            </p>
            <p className="text-muted-foreground">
              I-click ang bookmark icon sa mga salita para idagdag ang mga ito sa iyong listahan.
            </p>
          </div>
        ) : filteredBookmarks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-muted-foreground text-lg mb-4">
              Walang nahanap na bookmark na tumutugma sa iyong paghahanap.
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setCategoryFilter("all"); }}>
              I-clear ang mga filter
            </Button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookmarks.map((bookmark) => (
              <BookmarkCard 
                key={bookmark.id} 
                bookmark={bookmark} 
                onRemove={handleRemoveBookmark}
                onCopy={handleCopyDefinition}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookmarks.map((bookmark) => (
              <BookmarkListItem
                key={bookmark.id}
                bookmark={bookmark}
                onRemove={handleRemoveBookmark}
                onCopy={handleCopyDefinition}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

interface BookmarkCardProps {
  bookmark: BookmarkItem;
  onRemove: (id: string, word: string) => void;
  onCopy: (word: string, definition: string) => void;
}

const BookmarkCard = ({ bookmark, onRemove, onCopy }: BookmarkCardProps) => {
  // Define color class based on part of speech
  const getColorClass = (partOfSpeech: string) => {
    const pos = partOfSpeech.toLowerCase();
    if (pos.includes('noun')) return 'bg-blue-50 border-blue-200 text-blue-700';
    if (pos.includes('verb')) return 'bg-green-50 border-green-200 text-green-700';
    if (pos.includes('adjective')) return 'bg-purple-50 border-purple-200 text-purple-700';
    if (pos.includes('adverb')) return 'bg-orange-50 border-orange-200 text-orange-700';
    return 'bg-gray-50 border-gray-200 text-gray-700';
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-maroon/20 hover:border-maroon/40">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-maroon mb-1">
                {bookmark.word}
              </h3>
              <div className="text-sm text-muted-foreground mb-3">
                <span className="opacity-75">{bookmark.pronunciation}</span>
              </div>
            </div>
            <div className="flex gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-50" 
                onClick={() => onCopy(bookmark.word, bookmark.definition)}
                title="Copy definition"
              >
                <ClipboardCopy className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1 text-red-500 hover:text-red-600 hover:bg-red-50" 
                onClick={() => onRemove(bookmark.id, bookmark.word)}
                title="Remove bookmark"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mb-3">
            <span className={cn(
              "text-xs font-medium px-2 py-1 rounded-full", 
              getColorClass(bookmark.partOfSpeech)
            )}>
              {bookmark.partOfSpeech}
            </span>
          </div>
          
          <div className="definition-text bg-gray-50 p-3 rounded-lg">
            <p className="definition text-gray-800">{bookmark.definition}</p>
            {bookmark.example && (
              <p className="example text-gray-600 mt-2 italic">"{bookmark.example}"</p>
            )}
          </div>
          
          <CardFooter className="p-0 mt-4 flex justify-between items-center">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {formatDistanceToNow(bookmark.timestamp, { addSuffix: true })}
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(bookmark.timestamp).toLocaleDateString()}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// New List View mode component
const BookmarkListItem = ({ bookmark, onRemove, onCopy }: BookmarkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden hover:bg-gray-50 transition-all duration-200 border-maroon/20">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-serif font-semibold text-maroon">
                    {bookmark.word} 
                  </h3>
                  <span className="text-xs bg-maroon/10 text-maroon px-2 py-0.5 rounded-full">
                    {bookmark.partOfSpeech}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground hidden md:flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 
                  {formatDistanceToNow(bookmark.timestamp, { addSuffix: true })}
                </div>
              </div>
              
              <p className="definition text-gray-800 mt-1">{bookmark.definition}</p>
              {bookmark.example && (
                <p className="example text-gray-600 text-sm mt-1 italic">"{bookmark.example}"</p>
              )}
              
              <div className="text-xs text-muted-foreground md:hidden mt-2">
                <Clock className="inline h-3 w-3 mr-1" /> 
                {formatDistanceToNow(bookmark.timestamp, { addSuffix: true })}
              </div>
            </div>
            
            <div className="flex md:flex-col gap-2 md:gap-3">

              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700" 
                onClick={() => onCopy(bookmark.word, bookmark.definition)}
              >
                <ClipboardCopy className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-red-500 hover:text-red-600" 
                onClick={() => onRemove(bookmark.id, bookmark.word)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Bookmarks;
