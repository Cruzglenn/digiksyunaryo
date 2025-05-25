import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Bookmark, BookmarkCheck, Sparkles, ChevronDown, ChevronUp, Loader2, MessageCircleMore, ListChecks, BookOpen, Globe } from "lucide-react";
import { useBookmarks } from "@/context/BookmarkContext";
import { Button } from "@/components/ui/button";
import { useGeminiAI } from "@/hooks/useGeminiAI";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Interface matching the WordDetails structure in our dictionary.ts file
interface WordDetails {
  word: string;
  definition: string;
  etymology: string;
  partOfSpeech: string;
  example: string;
}

interface WordDetailProps {
  wordData: WordDetails;
  className?: string;
}

const WordDetail = ({ wordData, className }: WordDetailProps) => {
  if (!wordData) return null;
  
  // Use a mobile hook
  const isMobile = useIsMobile();
  
  // Use bookmarks functionality
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  
  // Check if the word is bookmarked and get its ID if it is
  const wordBookmarkId = isBookmarked(wordData.word);
  
  // AI enhancement state
  const [aiData, setAiData] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isAIExpanded, setIsAIExpanded] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  
  // AI hook
  const { getEnhancedExplanation } = useGeminiAI();
  
  // Handle bookmark toggle
  const handleBookmarkToggle = () => {
    if (wordBookmarkId) {
      // If already bookmarked, remove it
      removeBookmark(wordBookmarkId);
    } else {
      // Add as new bookmark
      addBookmark({
        word: wordData.word,
        definition: wordData.definition,
        pronunciation: wordData.etymology || '',
        partOfSpeech: wordData.partOfSpeech || '',
        example: wordData.example || ''
      });
    }
  };

  // Handle AI explanation request
  const handleAIExplanation = async () => {
    // Toggle off if already expanded
    if (isAIExpanded && aiData) {
      setIsAIExpanded(false);
      return;
    }
    
    setIsLoadingAI(true);
    setAiError(null);
    
    try {
      const response = await getEnhancedExplanation(
        wordData.word,
        wordData.definition,
        wordData.etymology || '',
        wordData.partOfSpeech || '',
        wordData.example || ''
      );
      
      if (response.error) {
        setAiError(response.error);
      } else {
        setAiData(response.data);
        setIsAIExpanded(true);
      }
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "May naganap na error.");
    } finally {
      setIsLoadingAI(false);
    }
  };
  
  // Parse AI data into structured format
  const parseAIData = (data: string) => {
    if (!data) return null;
    
    const sections = {
      paliwanag: "",
      halimbawa: [],
      kasingkahulugan: [],
      karagdagan: ""
    };
    
    // Process content
    const paliwanagMatch = data.match(/PALIWANAG:\s*([^]*?)(?=\n\s*MGA HALIMBAWA:|$)/i);
    if (paliwanagMatch && paliwanagMatch[1]) {
      sections.paliwanag = paliwanagMatch[1].trim();
    }
    
    const halimbawaMatch = data.match(/MGA HALIMBAWA:\s*([^]*?)(?=\n\s*MGA KASINGKAHULUGAN:|$)/i);
    if (halimbawaMatch && halimbawaMatch[1]) {
      sections.halimbawa = halimbawaMatch[1]
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('-'))
        .map(line => line.substring(1).trim());
    }
    
    const kasingkahuluganMatch = data.match(/MGA KASINGKAHULUGAN:\s*([^]*?)(?=\n\s*KARAGDAGANG IMPORMASYON:|$)/i);
    if (kasingkahuluganMatch && kasingkahuluganMatch[1]) {
      sections.kasingkahulugan = kasingkahuluganMatch[1]
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('-'))
        .map(line => line.substring(1).trim());
    }
    
    const karagdaganMatch = data.match(/KARAGDAGANG IMPORMASYON:\s*([^]*?)$/i);
    if (karagdaganMatch && karagdaganMatch[1]) {
      sections.karagdagan = karagdaganMatch[1].trim();
    }
    
    return sections;
  };

  return (
    <div className={cn("word-detail space-y-6 animate-fade-in", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline">
          <h3 className="text-3xl font-serif font-bold text-maroon mr-3">{wordData.word}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm px-2 py-1 bg-maroon/10 rounded-md text-maroon font-medium">{wordData.partOfSpeech}</span>
          </div>
        </div>
        <Button
          onClick={handleBookmarkToggle}
          variant="ghost"
          size="sm"
          className="rounded-full hover:bg-maroon/10 transition-colors p-2"
          aria-label={wordBookmarkId ? "Alisin sa Mga Bookmark" : "Idagdag sa Mga Bookmark"}
        >
          {wordBookmarkId ? (
            <BookmarkCheck className="h-5 w-5 text-maroon" />
          ) : (
            <Bookmark className="h-5 w-5 text-muted-foreground hover:text-maroon" />
          )}
        </Button>
      </div>
      
      <div className="space-y-6">
        <section className="space-y-2 border-l-4 border-gold-1 pl-4 hover:border-gold-2 transition-colors duration-300 bg-gold-1/5 p-3 rounded-r-md">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-1"></span>
            Kahulugan
          </h4>
          <p className="text-dictionary-dark font-medium">{wordData.definition}</p>
        </section>
        
        <section className="space-y-2 border-l-4 border-maroon pl-4 hover:border-burgundy transition-colors duration-300 bg-maroon/5 p-3 rounded-r-md">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-maroon"></span>
            Etimolohiya
          </h4>
          <p className="text-dictionary-dark font-medium">{wordData.etymology}</p>
        </section>
        
        <section className="space-y-2 border-l-4 border-burgundy pl-4 hover:border-maroon transition-colors duration-300 bg-burgundy/5 p-3 rounded-r-md">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-burgundy"></span>
            Pangungusap
          </h4>
          <p className="text-dictionary-dark font-medium italic">{wordData.example}</p>
        </section>
        
        {/* AI-Enhanced Explanation Button */}
        <div className="mt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleAIExplanation}
                  className={cn(
                    "w-full py-2 flex items-center justify-between transition-colors overflow-hidden",
                    isAIExpanded ?
                      "bg-maroon/10 hover:bg-maroon/15 text-maroon border border-maroon/20 rounded-t-lg rounded-b-none" :
                      "bg-maroon hover:bg-maroon/90 text-white shadow-sm rounded-lg"
                  )}
                  disabled={isLoadingAI}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-medium">{isAIExpanded ? "AI Paliwanag" : "Dagdag na Kaalaman"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isLoadingAI && (
                      <div className="flex items-center gap-1">
                        <span className="text-sm italic truncate">Naglo-load..</span>
                        <Loader2 className="h-4 w-4 animate-spin flex-shrink-0" />
                      </div>
                    )}
                    {!isLoadingAI && (
                      isAIExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </Button>
              </TooltipTrigger>
              {!isMobile && (
                <TooltipContent side="top" sideOffset={8}>
                  <p>Tingnan ang mas detalyadong kahulugan gamit ang AI.</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
          
          {/* AI Content */}
          {isAIExpanded && aiData && (
            <div className="p-4 bg-white border border-maroon/20 border-t-0 rounded-b-lg animate-fade-in">
              {aiError ? (
                <div className="p-4 border border-red-300 bg-red-50 rounded-md text-red-800">
                  <p>May error na naganap: {aiError}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {(() => {
                    const parsedData = parseAIData(aiData);
                    if (!parsedData) return <p>Hindi ma-parse ang datos.</p>;
                    
                    return (
                      <div className="space-y-4">
                        {/* Detailed Explanation */}
                        <div className="border-l-4 border-maroon rounded-r pl-4 py-2 bg-maroon/5">
                          <h3 className="font-semibold text-maroon flex items-center gap-2 mb-2">
                            <MessageCircleMore className="h-4 w-4" />
                            Kahulugan
                          </h3>
                          <p className="text-dictionary-dark">{parsedData.paliwanag}</p>
                        </div>
                        
                        {/* Examples */}
                        {parsedData.halimbawa.length > 0 && (
                          <div className="border-l-4 border-gold-1 rounded-r pl-4 py-2 bg-gold-1/5">
                            <h3 className="font-semibold text-gold-2 flex items-center gap-2 mb-2">
                              <ListChecks className="h-4 w-4" />
                              Mga Halimbawa
                            </h3>
                            <ul className="space-y-1.5">
                              {parsedData.halimbawa.map((example, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="inline-block font-medium text-gold-2">{i + 1}.</span>
                                  <span className="text-dictionary-dark italic">{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Synonyms */}
                        {parsedData.kasingkahulugan.length > 0 && (
                          <div className="border-l-4 border-burgundy rounded-r pl-4 py-2 bg-burgundy/5">
                            <h3 className="font-semibold text-burgundy flex items-center gap-2 mb-2">
                              <BookOpen className="h-4 w-4" />
                              Mga Kasingkahulugan
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {parsedData.kasingkahulugan.map((synonym, i) => (
                                <span 
                                  key={i} 
                                  className="px-2 py-1 bg-white border border-burgundy/20 rounded-md text-sm text-burgundy"
                                >
                                  {synonym}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Additional Information */}
                        {parsedData.karagdagan && (
                          <div className="border-l-4 border-slate-400 rounded-r pl-4 py-2 bg-slate-50">
                            <h3 className="font-semibold text-slate-700 flex items-center gap-2 mb-2">
                              <Globe className="h-4 w-4" />
                              Karagdagang Impormasyon
                            </h3>
                            <p className="text-dictionary-dark">{parsedData.karagdagan}</p>
                          </div>
                        )}
                        
                        {/* Footer */}
                        <div className="flex justify-end items-center border-t border-slate-200 pt-2 text-xs text-slate-500">
                          <span>Powered by Gemini AI</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="pt-3 border-t border-gold-1/20">
        <p className="text-sm text-muted-foreground">Ang datos ay mula sa Digiksyunaryo.</p>
      </div>
    </div>
  );
};

export default WordDetail;
