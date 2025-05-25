import { Facebook, Instagram, Twitter, Youtube, BookOpen, Search as SearchIcon, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-dictionary-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <picture>
                <source srcSet="/uploads/logo.webp" type="image/webp" />
                <img src="/uploads/logo.png" alt="Digiksyunaryo Logo" className="h-10 w-10 rounded-full" />
              </picture>
              <h3 className="text-2xl font-serif font-bold text-gold-1">Digiksyunaryo</h3>
            </div>
            <p className="text-sm text-gray-300">
              Ang iyong modernong gabay sa mga trending na salitang Filipino. Tuklasin ang mga bagong ekspresyon at palawakin ang iyong bokabularyo.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <BookOpen className="mr-2" size={16} />
              Mga Mapagkukunan
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/?filter=recent" className="hover:text-white transition-colors">
                  Salita ng Araw
                </Link>
              </li>
              <li>
                <Link to="/?filter=new" className="hover:text-white transition-colors">
                  Bagong mga Salita
                </Link>
              </li>
              <li>
                <Link to="/?filter=popular" className="hover:text-white transition-colors">
                  Mga Popular na Paghahanap
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <SearchIcon className="mr-2" size={16} />
              Diksyunaryo
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/?sort=az" className="hover:text-white transition-colors">
                  Maghanap (A-Z)
                </Link>
              </li>
              <li>
                <Link to="/?type=synonym" className="hover:text-white transition-colors">
                  Kasingkahulugan
                </Link>
              </li>
              <li>
                <Link to="/?type=translation" className="hover:text-white transition-colors">
                  Mga Pagsasalin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Info className="mr-2" size={16} />
              Tungkol Sa
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/tungkol-sa" className="hover:text-white transition-colors">
                  Tungkol sa Amin
                </Link>
              </li>
              <li>
                <Link to="/makipag-ugnay" className="hover:text-white transition-colors">
                  Makipag-ugnayan
                </Link>
              </li>
              <li>
                <Link to="/tungkol-sa#help" className="hover:text-white transition-colors">
                  Tulong
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Digiksyunaryo. Nakalaan ang lahat ng karapatan.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <p className="text-sm text-gray-400">
              <span className="mr-2">Developed by</span>
              <Link to="/tungkol-sa#developers" className="hover:text-white transition-colors">
                Glenn Mark Cruz and Jimwel Manguiat
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
