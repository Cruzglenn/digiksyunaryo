import { Bookmark, Menu, Book, MessageSquare, Phone, Home, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  // Handle scroll event for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleBookmark = () => {
    // Navigation is now handled by the Link component
  };
  
  return (    
    <header className={cn(
      "sticky top-0 z-30 w-full bg-background/80 backdrop-blur-sm border-b border-gold-2/20",
      isScrolled && "shadow-md"
    )}>
      <div className="container flex items-center justify-between h-16 mx-auto px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full overflow-hidden border-2 border-gold-1 h-12 w-12 flex items-center justify-center">
              <picture>
                <source srcSet="/uploads/logo.webp" type="image/webp" />
                <img src="/uploads/logo.png" alt="Digiksyunaryo Logo" className="h-12 w-12 hover-scale object-cover" />
              </picture>
            </div>
            <span className="hidden text-maroon font-serif text-2xl font-bold hover:text-burgundy transition-colors duration-300">DIGIKSYUNARYO</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium transition-colors flex items-center gap-2 ${isActive('/') ? 'text-maroon' : 'text-muted-foreground hover:text-maroon'}`}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/tungkol-sa" className={`font-medium transition-colors flex items-center gap-2 ${isActive('/tungkol-sa') ? 'text-maroon' : 'text-muted-foreground hover:text-maroon'}`}>
            <Book className="h-5 w-5" />
            <span>Tungkol sa</span>
          </Link>
          <Link to="/feedback" className={`font-medium transition-colors flex items-center gap-2 ${isActive('/feedback') ? 'text-maroon' : 'text-muted-foreground hover:text-maroon'}`}>
            <MessageSquare className="h-5 w-5" />
            <span>Feedback</span>
          </Link>
          <Link to="/makipag-ugnay" className={`font-medium transition-colors flex items-center gap-2 ${isActive('/makipag-ugnay') ? 'text-maroon' : 'text-muted-foreground hover:text-maroon'}`}>
            <Phone className="h-5 w-5" />
            <span>Makipag-ugnay</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/bookmarks" aria-label="Tingnan ang mga bookmark">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex hover:bg-gold-1/10 hover:text-maroon transition-all duration-300"
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild aria-label="Buksan ang menu ng nabigasyon">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-dictionary-dark"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72 bg-white/95 backdrop-blur-sm">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for Digiksyunaryo</SheetDescription>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-gold-1/20">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full overflow-hidden border-2 border-gold-1 h-8 w-8 flex items-center justify-center">
                        <picture>
                          <source srcSet="/uploads/logo.webp" type="image/webp" />
                          <img src="/uploads/logo.png" alt="Digiksyunaryo Logo" className="h-8 w-8 object-cover" />
                        </picture>
                      </div>
                      <span className="text-maroon font-serif text-lg font-bold">DIGIKSYUNARYO</span>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col p-2 mt-2 flex-grow">
                    <Link 
                      to="/" 
                      className={cn(
                        "px-4 py-3 font-medium rounded-lg transition-colors flex items-center gap-2",
                        isActive('/') 
                          ? "bg-maroon/10 text-maroon" 
                          : "text-muted-foreground hover:text-maroon hover:bg-maroon/5"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Home className="h-5 w-5" />
                      <span>Home</span>
                    </Link>
                    <Link 
                      to="/tungkol-sa" 
                      className={cn(
                        "px-4 py-3 font-medium rounded-lg transition-colors flex items-center gap-2",
                        isActive('/tungkol-sa') 
                          ? "bg-maroon/10 text-maroon" 
                          : "text-muted-foreground hover:text-maroon hover:bg-maroon/5"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Book className="h-5 w-5" />
                      <span>Tungkol sa</span>
                    </Link>
                    <Link 
                      to="/feedback" 
                      className={cn(
                        "px-4 py-3 font-medium rounded-lg transition-colors flex items-center gap-2",
                        isActive('/feedback') 
                          ? "bg-maroon/10 text-maroon" 
                          : "text-muted-foreground hover:text-maroon hover:bg-maroon/5"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Feedback</span>
                    </Link>
                    <Link 
                      to="/makipag-ugnay" 
                      className={cn(
                        "px-4 py-3 font-medium rounded-lg transition-colors flex items-center gap-2",
                        isActive('/makipag-ugnay') 
                          ? "bg-maroon/10 text-maroon" 
                          : "text-muted-foreground hover:text-maroon hover:bg-maroon/5"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span>Makipag-ugnay</span>
                    </Link>
                    <Link 
                      to="/bookmarks" 
                      className="px-4 py-3 font-medium rounded-lg transition-colors flex items-center gap-2 hover:bg-maroon/5 hover:text-maroon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Bookmark className="h-5 w-5" />
                      <span>Mga Bookmark</span>
                    </Link>
                  </nav>
                  
                  <div className="p-4 border-t border-gold-1/20 mt-auto">
                    {/* Advanced search link removed */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
