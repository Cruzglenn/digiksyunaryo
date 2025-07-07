import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Zap } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { detailedWordData } from "@/data/dictionary";

const WordOfDay = () => {
  const [wordOfDay, setWordOfDay] = useState<{
    word: string;
    pronunciation: string;
    partOfSpeech: string;
    definition: string;
    example: string;
    etymology: string;
  } | null>(null);

  useEffect(() => {
    // Get a word based on the current date
    const getWordOfDay = () => {
      // Get all available words
      const allWords = Object.entries(detailedWordData);
      if (allWords.length === 0) return null;
      
      // Use the current date to deterministically select a word
      const now = new Date();
      const dateStr = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
      
      // Create a simple hash of the date string
      let hash = 0;
      for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
      }
      
      // Use the hash to select a word
      const index = Math.abs(hash) % allWords.length;
      const [word, details] = allWords[index];
      
      // Format the pronunciation
      const pronunciation = `/${word.split('').join('-')}/`;
      
      return {
        word,
        pronunciation: details.pronunciation || pronunciation,
        partOfSpeech: details.partOfSpeech,
        definition: details.definition,
        example: details.example,
        etymology: details.etymology
      };
    };
    
    const selectedWord = getWordOfDay();
    if (selectedWord) {
      setWordOfDay(selectedWord);
    }
  }, []);
  
  // Pronunciation functionality removed as requested

  const today = new Date().toLocaleDateString('tl-PH', { 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Card className="border-2 border-maroon/20 shadow-lg overflow-hidden rounded-xl bg-gradient-to-br from-gold-1/5 via-white to-gold-1/10 min-h-[300px]">
      <div className="bg-gradient-to-r from-maroon to-burgundy text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Zap className="h-6 w-6 mr-3 text-gold-2" />
          <h2 className="text-xl md:text-2xl font-serif font-semibold">Salita ng Araw</h2>
        </div>
        <div className="flex items-center text-sm opacity-90">
          <Calendar className="h-4 w-4 mr-1.5" />
          <span>{today}</span>
        </div>
      </div>
      
      <CardContent className="p-6 md:p-8">
        {wordOfDay ? (
          <>
            <div className="mb-4">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-maroon mb-1">
                {wordOfDay.word}
              </h3>
              <div className="text-md text-muted-foreground italic">
                {wordOfDay.pronunciation}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-burgundy text-sm tracking-wider uppercase mb-1">Kahulugan:</p>
                <p className="text-dictionary-dark leading-relaxed">{wordOfDay.definition}</p>
              </div>

              {wordOfDay.partOfSpeech && (
                <div>
                  <p className="font-semibold text-burgundy text-sm tracking-wider uppercase mb-1">Uri ng Salita:</p>
                  <p className="text-dictionary-dark leading-relaxed">{wordOfDay.partOfSpeech}</p>
                </div>
              )}
              
              {wordOfDay.example && (
                <div>
                  <p className="font-semibold text-burgundy text-sm tracking-wider uppercase mb-1">Halimbawa:</p>
                  <p className="text-dictionary-dark leading-relaxed italic" dangerouslySetInnerHTML={{ __html: `"${wordOfDay.example}"` }}>
                  </p>
                </div>
              )}
              
              {wordOfDay.etymology && (
                <div className="mt-6 pt-4 border-t border-gold-1/20">
                  <h4 className="font-semibold text-burgundy text-sm tracking-wider uppercase mb-1">Etimolohiya:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {wordOfDay.etymology}
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-muted-foreground">Naglo-load ang salita ng araw...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WordOfDay;
