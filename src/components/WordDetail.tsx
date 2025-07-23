import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Bookmark, BookmarkCheck, Sparkles, ChevronDown, ChevronUp, Loader2, MessageCircleMore, ListChecks, BookOpen, Globe, RefreshCw } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Interface matching the WordDetails structure in our dictionary.ts file
interface WordDetails {
  word: string;
  pronunciation: string;
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
  
  const isMobile = useIsMobile();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const wordBookmarkId = isBookmarked(wordData.word);
  
  const [aiData, setAiData] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isAIExpanded, setIsAIExpanded] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  
  const { getEnhancedExplanation, clearAICache } = useGeminiAI();
  const [isRefreshDialogOpen, setIsRefreshDialogOpen] = useState(false);
  
  const handleBookmarkToggle = () => {
    if (wordBookmarkId) {
      removeBookmark(wordBookmarkId);
    } else {
      addBookmark({
        word: wordData.word,
        definition: wordData.definition,
        pronunciation: wordData.pronunciation || '',
        partOfSpeech: wordData.partOfSpeech || '',
        example: wordData.example || ''
      });
    }
  };

  const handleAIExplanation = async (forceRefresh = false) => {
    if (isAIExpanded && aiData && !forceRefresh) {
      setIsAIExpanded(false);
      return;
    }
    
    setIsLoadingAI(true);
    setAiError(null);
    
    try {
      if (forceRefresh) {
        clearAICache();
      }
      
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
        if (isRefreshDialogOpen) {
          setIsRefreshDialogOpen(false);
        }
      }
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "May naganap na error.");
    } finally {
      setIsLoadingAI(false);
    }
  };
  
  const handleRefreshRequest = () => {
    handleAIExplanation(true);
  };
  
  const parseAIData = (data: string) => {
    if (!data) return null;

    const sections = {
      paliwanag: "",
      halimbawa: [] as string[],
      kasingkahulugan: [] as string[],
      karagdagan: ""
    };

    // Parse PALIWANAG section
    const paliwanagMatch = data.match(/\*\*PALIWANAG:\*\*\s*([^]*?)(?=\n\s*\*\*MGA HALIMBAWA:\*\*|$)/i);
    if (paliwanagMatch && paliwanagMatch[1]) {
      sections.paliwanag = paliwanagMatch[1].trim();
    }

    // Parse MGA HALIMBAWA section - looking for numbered lists (1., 2., 3.)
    const halimbawaMatch = data.match(/\*\*MGA HALIMBAWA:\*\*\s*([^]*?)(?=\n\s*\*\*MGA KASINGKAHULUGAN:\*\*|$)/i);
    if (halimbawaMatch && halimbawaMatch[1]) {
      sections.halimbawa = halimbawaMatch[1]
        .split('\n')
        .map(line => line.trim())
        .filter(line => /^\d+\./.test(line)) // Look for lines starting with number and dot
        .map(line => line.replace(/^\d+\.\s*/, '').trim()); // Remove the number and dot
    }

    // Parse MGA KASINGKAHULUGAN section - looking for numbered lists (1., 2., 3.)
    const kasingkahuluganMatch = data.match(/\*\*MGA KASINGKAHULUGAN:\*\*\s*([^]*?)(?=\n\s*\*\*KARAGDAGANG IMPORMASYON:\*\*|$)/i);
    if (kasingkahuluganMatch && kasingkahuluganMatch[1]) {
      sections.kasingkahulugan = kasingkahuluganMatch[1]
        .split('\n')
        .map(line => line.trim())
        .filter(line => /^\d+\./.test(line)) // Look for lines starting with number and dot
        .map(line => line.replace(/^\d+\.\s*/, '').trim()); // Remove the number and dot
    }

    // Parse KARAGDAGANG IMPORMASYON section
    const karagdaganMatch = data.match(/\*\*KARAGDAGANG IMPORMASYON:\*\*\s*([^]*?)$/i);
    if (karagdaganMatch && karagdaganMatch[1]) {
      sections.karagdagan = karagdaganMatch[1].trim();
    }

    return sections;
  };

  return (
    <div className={cn("word-detail space-y-6 animate-fade-in", className)}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <h3 className="text-3xl font-serif font-bold text-maroon mr-3">{wordData.word}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm px-2 py-1 bg-maroon/10 rounded-md text-maroon font-medium">{wordData.partOfSpeech}</span>
            </div>
          </div>
          {wordData.pronunciation && wordData.pronunciation !== 'N/A' && (
            <div className="flex items-center mt-1 pl-1"> {/* Added flex, items-center, and pl-1 for alignment */}
              <span className="text-lg text-gray-700 font-mono font-semibold">{wordData.pronunciation}</span>
            </div>
          )}
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
          <p className="text-dictionary-dark font-medium italic" dangerouslySetInnerHTML={{ __html: wordData.example }}></p>
        </section>
        
        <div className="mt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => handleAIExplanation()} // Added () to call the function
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
                        {parsedData.paliwanag && (
                            <div className="border-l-4 border-maroon rounded-r pl-4 py-2 bg-maroon/5">
                            <h3 className="font-semibold text-maroon flex items-center gap-2 mb-2">
                                <MessageCircleMore className="h-4 w-4" />
                                Kahulugan
                            </h3>
                            <p className="text-dictionary-dark">{parsedData.paliwanag}</p>
                            </div>
                        )}
                        
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
                                  <span className="text-dictionary-dark italic" dangerouslySetInnerHTML={{ __html: example }}></span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
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
                        
                        {/* CORRECTED Additional Information Section */}
                        {parsedData.karagdagan && (
                          <div className="border-l-4 border-slate-400 rounded-r pl-4 py-2 bg-slate-50">
                            <h3 className="font-semibold text-slate-700 flex items-center gap-2 mb-2">
                              <Globe className="h-4 w-4" />
                              Karagdagang Impormasyon
                            </h3>
                            <p className="text-dictionary-dark">{parsedData.karagdagan}</p>
                          </div>
                        )}
                        
                        {/* AI Disclaimer Banner - Smaller Version */}
                        <div className="mt-3 py-1.5 px-2 bg-amber-50 border border-amber-200 rounded-md flex items-center gap-2 text-xs">
                          <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <p className="text-amber-800 text-xs">Ang AI paliwanag ay maaaring magkamali. Palaging i-verify ang impormasyon ibinibigay.</p>
                        </div>
                      </div> // Closes inner "space-y-4" for parsed sections
                    );
                  })()}
                </div> // Closes outer "space-y-4" for AI content sections
              )}
            </div> // Closes "p-4 bg-white..." for AI content
          )}
           {/* Refresh Dialog Trigger and Content (Example) */}
           {/* You might want to add a button or mechanism to open this dialog if needed */}
           <Dialog open={isRefreshDialogOpen} onOpenChange={setIsRefreshDialogOpen}>
            {/* <DialogTrigger asChild> */}
            {/*   <Button variant="outline">Refresh AI Data (Trigger Example)</Button> */}
            {/* </DialogTrigger> */}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>I-refresh ang AI Data?</DialogTitle>
                <DialogDescription>
                  Sigurado ka bang gusto mong kumuha ng panibagong paliwanag mula sa AI? Maaaring ma-clear ang kasalukuyang cache.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsRefreshDialogOpen(false)}>Kanselahin</Button>
                <Button onClick={() => { handleRefreshRequest(); setIsRefreshDialogOpen(false); }}>Oo, I-refresh</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div> {/* Closes "mt-4" div */}
      </div> {/* Closes outer "space-y-6" div */}

      <div className="pt-3 border-t border-gold-1/20">
        <p className="text-sm text-muted-foreground">Ang datos ay mula sa Digiksyunaryo.</p>
      </div>
    </div> // Closes main "word-detail" div
  );
};

export default WordDetail;
