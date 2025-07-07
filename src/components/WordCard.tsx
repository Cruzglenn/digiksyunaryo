import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useBookmarks } from "@/context/BookmarkContext";

interface WordCardProps {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example?: string;
  className?: string;
}

const WordCard = ({
  word,
  pronunciation,
  partOfSpeech,
  definition,
  example,
  className = "",
}: WordCardProps) => {
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

  return (
    <Card className={`overflow-hidden word-card-hover ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-dictionary-dark mb-1">
              {word}
            </h3>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <span>{pronunciation}</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`p-1 ${bookmarked ? 'text-maroon' : ''}`} 
            onClick={handleBookmark}
            aria-label={bookmarked ? `Alisin sa mga bookmark ang ${word}` : `Idagdag sa mga bookmark ang ${word}`}
          >
            {bookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="definition-text">
          <p className="part-of-speech">{partOfSpeech}</p>
          <p className="definition">{definition}</p>
          {example && <p className="example" dangerouslySetInnerHTML={{ __html: `"${example}"` }}></p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default WordCard;
