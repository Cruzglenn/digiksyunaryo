import { Facebook, Instagram, Twitter, Youtube, BookOpen, Search as SearchIcon, Info, ArrowUp, Bookmark, BadgeCheck} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile"; // Import useIsMobile hook

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const isMobile = useIsMobile(); // Use the hook to detect mobile view

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
      setShowBackToTop(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <footer className="bg-gradient-to-t from-dictionary-darker to-dictionary-dark text-white pt-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <picture>
                <source srcSet="/uploads/logo.webp" type="image/webp" />
                <img 
                  src="/uploads/logo.png" 
                  alt="Digiksyunaryo Logo" 
                  className="h-12 w-12 rounded-full border-2 border-gold-1"
                />
              </picture>
              <div>
                <h3 className="text-2xl font-serif font-bold text-gold-1">DIGIKSYUNARYO</h3>
                <p className="text-xs text-gray-300 mt-1">
                  Modernong Digiksyunaryong Filipino
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Ang iyong modernong gabay sa mga trending na salitang Filipino. Tuklasin ang mga bagong ekspresyon at palawakin ang iyong bokabularyo.
            </p>
            
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gold-1/30 flex items-center">
              <BookOpen className="mr-2" size={18} />
              Mga Mapagkukunan
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/?filter=recent" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Salita ng Araw
                </Link>
              </li>
              <li>
                <Link to="/?filter=new" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Bagong mga Salita
                </Link>
              </li>
              <li>
                <Link to="/?filter=popular" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mga Popular na Paghahanap
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mga Naka-bookmark
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Dictionary Column */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gold-1/30 flex items-center">
              <SearchIcon className="mr-2" size={18} />
              Diksyunaryo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/?sort=az" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Maghanap (A-Z)
                </Link>
              </li>
              <li>
                <Link to="/?type=synonym" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kasingkahulugan
                </Link>
              </li>
              <li>
                <Link to="/?type=translation" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mga Pagsasalin
                </Link>
              </li>
              <li>
                <Link to="/word-relationships" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mga Kaugnay na Salita
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About Column */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gold-1/30 flex items-center">
              <Info className="mr-2" size={18} />
              Tungkol Sa
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/tungkol-sa" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Tungkol sa Amin
                </Link>
              </li>
              <li>
                <Link to="/makipag-ugnay" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Makipag-ugnayan
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Magbigay ng Feedback
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-gold-1 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-1 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Patakaran sa Privacy
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link to="#" aria-label="Facebook" className="text-gray-400 hover:text-gold-1 transition-colors transform hover:scale-110">
                <Facebook size={22} />
              </Link>
              <Link to="#" aria-label="Instagram" className="text-gray-400 hover:text-gold-1 transition-colors transform hover:scale-110">
                <Instagram size={22} />
              </Link>
              <Link to="#" aria-label="Twitter" className="text-gray-400 hover:text-gold-1 transition-colors transform hover:scale-110">
                <Twitter size={22} />
              </Link>
              <Link to="#" aria-label="Youtube" className="text-gray-400 hover:text-gold-1 transition-colors transform hover:scale-110">
                <Youtube size={22} />
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <div className="flex items-center text-xs text-gray-400">
                <BadgeCheck className="mr-1 text-gold-1" size={14} />
                <span>Napapanahong Kaalaman</span>
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <Bookmark className="mr-1 text-gold-1" size={14} />
                <span>100% Libre</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-400">
                © {currentYear} Digiksyunaryo. Nakalaan ang lahat ng karapatan.
              </p>
              <div className="text-xs text-gray-500 mt-1">
                <span className="mr-1.5">Developed by</span>
                <Link to="/tungkol-sa#developers" className="hover:text-gold-1 transition-colors">
                  Glenn Mark Cruz and Jimwel Manguiat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && !isMobile && ( // Conditionally render the button based on scroll and mobile view
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-gold-1 hover:bg-gold-2 text-dictionary-dark p-3 rounded-full shadow-lg transition-all transform hover:scale-105"
          aria-label="Bumalik sa itaas"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
