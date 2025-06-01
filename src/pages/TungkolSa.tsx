import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Users, Bookmark, HelpCircle, Shield, FileText, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-maroon/10 hover:border-maroon/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start">
        <div className="mr-4 bg-maroon/10 p-3 rounded-full text-maroon">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-dictionary-dark">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TungkolSa = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-maroon/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                  className="text-4xl md:text-5xl font-serif font-bold mb-6 text-maroon"
                >
                  Tungkol sa Digiksyunaryo
                </motion.h1>
                
                <div className="w-24 h-1 bg-maroon/60 mx-auto mb-8 rounded-full"></div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                >
                  Ang Digiksyunaryo ay isang komprehensibong digital na diksyunaryo ng wikang Filipino na naglalayong maging 
                  mapagkakatiwalaang sanggunian para sa mga mag-aaral, guro, at sinumang nagnanais na pagyamanin ang 
                  kanilang kaalaman sa wikang Filipino.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white" id="mission">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-10">
                <Heart className="text-maroon mr-3" size={28} />
                <h2 className="text-3xl font-serif font-semibold text-dictionary-dark">
                  Aming Layunin
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Naglalayon ang Digiksyunaryo na:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <FeatureCard 
                  icon={<BookOpen size={24} />}
                  title="Pangalagaan ang Wikang Filipino"
                  description="Mapangalagaan at maipalaganap ang mayamang wika at kultura ng Pilipinas"
                />
                
                <FeatureCard 
                  icon={<Users size={24} />}
                  title="Gawing Madali ang Pag-aaral"
                  description="Mapagaan ang pag-aaral ng wikang Filipino sa pamamagitan ng modernong teknolohiya"
                />
                
                <FeatureCard 
                  icon={<Bookmark size={24} />}
                  title="Maging Komprehensibong Sanggunian"
                  description="Makapagbigay ng komprehensibong sanggunian para sa mga salitang Filipino"
                />
                
                <FeatureCard 
                  icon={<Shield size={24} />}
                  title="Ipreserba ang Bokabularyo"
                  description="Maipreserba ang mayamang bokabularyo ng ating wika para sa susunod na henerasyon"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16 bg-slate-50" id="content">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-10">
                <BookOpen className="text-maroon mr-3" size={28} />
                <h2 className="text-3xl font-serif font-semibold text-dictionary-dark">
                  Aming Nilalaman
                </h2>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-maroon/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-maroon mr-3"></div>
                    <p className="text-gray-700">Mahigit 300 na salitang Filipino</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-maroon mr-3"></div>
                    <p className="text-gray-700">Mga detalyadong kahulugan at paliwanag</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-maroon mr-3"></div>
                    <p className="text-gray-700">Etimolohiya o pinagmulan ng mga salita</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-maroon mr-3"></div>
                    <p className="text-gray-700">Mga halimbawa ng paggamit sa pangungusap</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-maroon mr-3"></div>
                    <p className="text-gray-700">Audio ng tamang pagbigkas</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-maroon mr-3"></div>
                    <p className="text-gray-700">Mga kasingkahulugan at kasalungat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* For Everyone Section */}
        <section className="py-16 bg-gradient-to-t from-maroon/10 to-transparent" id="audience">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-10">
                <Users className="text-maroon mr-3" size={28} />
                <h2 className="text-3xl font-serif font-semibold text-dictionary-dark">
                  Para sa Ating Lahat
                </h2>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-maroon/10">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ang Digiksyunaryo ay dinisenyo para sa lahat ng mga Pilipino at sa sinumang nagnanais na matuto 
                  ng wikang Filipino - mula sa mga mag-aaral, guro, manunulat, hanggang sa pangkaraniwang mambabasa 
                  na naghahanap ng kahulugan ng isang salita. 
                </p>
                
                <div className="my-6 border-l-4 border-maroon pl-6 py-2 bg-maroon/5 rounded-r-md">
                  <p className="text-gray-700 italic">
                    "Sa pamamagitan ng pagsasadigital ng ating wika, naglalayon kaming gawing mas accessible at 
                    napapanahon ang pag-aaral at pagyayaman ng Filipino."
                  </p>
                </div>
                
                <div className="flex justify-center mt-8">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-6 py-3 bg-maroon text-white rounded-md hover:bg-burgundy transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/makipag-ugnay";
                    }}
                  >
                    <HelpCircle className="mr-2" size={18} />
                    Makipag-ugnay sa Amin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Privacy and Terms Section */}
        <section className="py-16 bg-white" id="privacy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-10">
                <Shield className="text-maroon mr-3" size={28} />
                <h2 className="text-3xl font-serif font-semibold text-dictionary-dark">
                  Patakaran sa Privacy at Mga Tuntunin
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-maroon/10 hover:border-maroon/30 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-medium mb-4 text-dictionary-dark flex items-center">
                    <Shield className="mr-2 text-maroon" size={20} /> Patakaran sa Privacy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ang Digiksyunaryo ay nakatuon sa pagprotekta sa iyong personal na impormasyon at privacy. 
                    Hindi namin ibinebenta o ibinahagi ang iyong data sa mga third party.
                  </p>
                  <a href="#" className="text-maroon hover:underline inline-flex items-center">
                    <span>Basahin ang buong patakaran</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-maroon/10 hover:border-maroon/30 transition-all duration-300 hover:shadow-lg" id="terms">
                  <h3 className="text-xl font-medium mb-4 text-dictionary-dark flex items-center">
                    <FileText className="mr-2 text-maroon" size={20} /> Mga Tuntunin ng Paggamit
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sa paggamit ng Digiksyunaryo, sumasang-ayon ka sa aming mga tuntunin at kondisyon. 
                    Mangyaring basahin nang mabuti ang mga ito bago gamitin ang aming serbisyo.
                  </p>
                  <a href="#" className="text-maroon hover:underline inline-flex items-center">
                    <span>Basahin ang mga tuntunin</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-16 bg-white" id="help">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-10">
                <HelpCircle className="text-maroon mr-3" size={28} />
                <h2 className="text-3xl font-serif font-semibold text-dictionary-dark">
                  Tulong
                </h2>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-maroon/10">
                <p className="text-gray-700 mb-6">
                  Kung kailangan mo ng tulong sa paggamit ng Digiksyunaryo o may mga katanungan, 
                  maaari kang:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <a 
                    href="/makipag-ugnay" 
                    className="flex items-center p-4 bg-maroon/5 rounded-lg hover:bg-maroon/10 transition-colors"
                  >
                    <div className="bg-maroon/20 p-2 rounded-full mr-4">
                      <Mail className="text-maroon" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-dictionary-dark">Makipag-ugnay sa Amin</h3>
                      <p className="text-sm text-gray-600">Magpadala ng mensahe sa aming team</p>
                    </div>
                  </a>
                  
                  <a 
                    href="/feedback" 
                    className="flex items-center p-4 bg-maroon/5 rounded-lg hover:bg-maroon/10 transition-colors"
                  >
                    <div className="bg-maroon/20 p-2 rounded-full mr-4">
                      <MessageSquare className="text-maroon" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-dictionary-dark">Magbigay ng Feedback</h3>
                      <p className="text-sm text-gray-600">Ibahagi ang iyong mga suhestiyon</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TungkolSa;
