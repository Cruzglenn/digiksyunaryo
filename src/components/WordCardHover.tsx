import { cn } from "@/lib/utils";
import { Bookmark, BookmarkCheck, BookText, Quote, BookA } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useBookmarks } from "@/context/BookmarkContext";

interface WordCardHoverProps {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example?: string;
  className?: string;
  index: number;
}

const WordCardHover = ({
  word,
  pronunciation,
  partOfSpeech,
  definition,
  example,
  className = "",
  index = 0,
}: WordCardHoverProps) => {
  // Pronunciation functionality removed as requested

  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(word);
  
  const handleBookmark = () => {
    if (bookmarked) {
      // Find the bookmark ID by word
      const bookmarkItems = JSON.parse(localStorage.getItem('digiksyunaryo-bookmarks') || '[]');
      const bookmarkItem = bookmarkItems.find(item => item.word === word);
      
      if (bookmarkItem) {
        removeBookmark(bookmarkItem.id);
        toast.success(`"${word}" ay tinanggal sa mga bookmark.`);
      }
    } else {
      addBookmark({
        word,
        pronunciation,
        partOfSpeech,
        definition,
        example
      });
      toast.success(`"${word}" ay nai-bookmark na!`);
    }
  };

  // Get appropriate icon based on part of speech
  const getIcon = () => {
    switch (partOfSpeech.toLowerCase()) {
      case "pangngalan":
        return <BookA size={24} />;
      case "pang-uri":
        return <BookText size={24} />;
      default:
        return <Quote size={24} />;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col relative group/feature rounded-lg overflow-hidden",
        "transition-all duration-300", 
        className
      )}
    >
      {/* Gradient effect on hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-maroon/5 to-transparent pointer-events-none" />
      
      {/* Word card content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-4 relative z-10 text-maroon">
              {getIcon()}
            </div>
            
            <div className="text-xl font-bold mb-2 relative z-10">
              {/* Left vertical bar */}
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-maroon/30 group-hover/feature:bg-maroon transition-all duration-200 origin-center" />
              
              {/* Word with hover animation */}
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-dictionary-dark pl-3 text-lg sm:text-xl break-words">
                {word}
              </span>
              
              {/* Pronunciation */}
              <div className="text-sm text-muted-foreground mt-1 pl-3 group-hover/feature:translate-x-2 transition duration-200">
                <span>{pronunciation}</span>
              </div>
            </div>
            
            {/* Part of speech */}
            <p className="text-sm italic text-muted-foreground mb-2 pl-3 relative z-10 group-hover/feature:translate-x-2 transition duration-200">
              {partOfSpeech}
            </p>
            
            {/* Definition */}
            <p className="text-sm text-dictionary-dark relative z-10 pl-3 group-hover/feature:translate-x-2 transition duration-200 line-clamp-3 sm:line-clamp-none">
              {definition}
            </p>
            
            {/* Example (if available) */}
            {example && (
              <p className="text-sm italic text-muted-foreground mt-3 pl-3 relative z-10 group-hover/feature:translate-x-2 transition duration-200">
                "{example}"
              </p>
            )}
          </div>
          
          {/* Bookmark button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className={`p-1 relative z-10 ${bookmarked ? 'text-maroon' : ''}`} 
            onClick={handleBookmark}
            aria-label={bookmarked ? `Alisin sa bookmark ang ${word}` : `I-bookmark ang ${word}`}
          >
            {bookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WordCardHover;
