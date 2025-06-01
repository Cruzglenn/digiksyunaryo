import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const MakipagUgnay = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow py-16 animate-fade-in">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                className="text-4xl md:text-5xl font-serif font-bold mb-4 text-maroon"
              >
                <span className="inline-block">Makipag-ugnay sa Amin</span>
                <MapPin className="inline-block ml-3 mb-2" size={28} />
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-lg text-gray-700 max-w-2xl mx-auto"
              >
                May mga katanungan o mungkahi? Makipag-ugnayan sa amin gamit ang mga sumusunod na impormasyon o bumisita sa aming lokasyon.
              </motion.p>
              
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <a href="#location" className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon/90 text-white px-5 py-2.5 rounded-lg transition-all font-medium">
                  <MapPin className="h-4 w-4" /> Tingnan ang Lokasyon
                </a>
              </div>
            </div>
            <div className="mb-16">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-maroon/20">
                <h2 className="text-2xl font-serif font-bold mb-6 text-maroon inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Impormasyon
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mt-6">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-maroon/10 group-hover:bg-maroon/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-lg">Email</h3>
                      <a href="mailto:digiksyunaryo@example.com" className="text-maroon hover:underline mt-1 block">
                      digiksyunaryo@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mag-email para sa mga katanungan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-maroon/10 group-hover:bg-maroon/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-lg">Telepono</h3>
                      <a href="tel:+6321234567" className="text-maroon hover:underline mt-1 block">
                        +63 (2) 1234-5678
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Lunes - Biyernes, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-maroon/10 group-hover:bg-maroon/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <MapPin className="h-6 w-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-lg">Lokasyon</h3>
                      <p className="text-maroon mt-1">
                        Polytechnic University of the Philippines, Santa Rosa Campus
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Sta. Rosa-Tagaytay Road, Brgy. Bubuyan, Sta. Rosa, Laguna</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4">Sundan kami sa social media</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-400 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-pink-100 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Map */}
            <div id="location" className="bg-white p-6 rounded-lg shadow-md border border-maroon/20 hover:shadow-lg transition-all duration-300 mb-16">
              <h2 className="text-2xl font-serif font-bold mb-6 text-maroon inline-flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Lokasyon Namin
              </h2>
              
              <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-md border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5069.04423282093!2d121.10410407609001!3d14.313504484039155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d9a2c100ff29%3A0xdd4591d2efaa4ea4!2sPolytechnic%20University%20of%20the%20Philippines%2C%20Santa%20Rosa%20Campus!5e1!3m2!1sen!2sph!4v1747735304131!5m2!1sen!2sph" 
                  width="100%" 
                  height="100%" 
                  className="border-0"
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PUP Santa Rosa Campus Location"
                ></iframe>
              </div>
              
              <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <h3 className="font-medium text-lg">Polytechnic University of the Philippines, Santa Rosa Campus</h3>
                  <p className="text-muted-foreground mt-1">Sta. Rosa-Tagaytay Road, Brgy. Bubuyan, Sta. Rosa, Laguna</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/3PZUW5xDd4fXLgU89" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon/90 text-white px-5 py-2.5 rounded-lg transition-all font-medium whitespace-nowrap"
                >
                  <ExternalLink className="h-4 w-4" /> Buksan sa Google Maps
                </a>
              </div>
            </div>


          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MakipagUgnay;
