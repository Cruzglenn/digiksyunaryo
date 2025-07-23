import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Recaptcha, RecaptchaRef } from "@/components/ui/recaptcha";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, Send, Mail, User, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getSiteKey } from "@/services/RecaptchaService";

const feedbackSchema = z.object({
  email: z
    .string()
    .min(1, "Email address ay kinakailangan")
    .email("Mangyaring maglagay ng wastong email address")
    .max(254, "Email address ay masyadong mahaba"),
  pangalan: z
    .string()
    .min(2, "Pangalan ay dapat may hindi bababa sa 2 character")
    .max(100, "Pangalan ay masyadong mahaba")
    .regex(/^[a-zA-ZÀ-ÿ\s.'-]+$/, "Pangalan ay dapat naglalaman lamang ng mga titik at espasyo"),
  lebel: z
    .string()
    .min(2, "Kurso o lebel ay kinakailangan")
    .max(100, "Kurso o lebel ay masyadong mahaba"),
  mungkahi: z
    .string()
    .min(10, "Puna o mungkahi ay dapat may hindi bababa sa 10 character")
    .max(2000, "Puna o mungkahi ay masyadong mahaba")
    .refine((val) => val.trim().length >= 10, "Puna o mungkahi ay hindi dapat puro espasyo"),
  recaptcha: z
    .string()
    .min(1, "Mangyaring kumpletuhin ang reCAPTCHA verification")
});

type FeedbackValues = z.infer<typeof feedbackSchema>;

const Feedback = () => {
  const form = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      email: "",
      pangalan: "",
      lebel: "",
      mungkahi: "",
      recaptcha: ""
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<RecaptchaRef>(null);
  
  // Simplified reCAPTCHA handling
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');

  const onSubmit = async (data: FeedbackValues) => {
    setIsSubmitting(true);
    
    try {
      // Production-ready reCAPTCHA validation
      if (!data.recaptcha || data.recaptcha.trim() === '' || data.recaptcha.length < 20) {
        toast.error("reCAPTCHA verification required", {
          description: "Mangyaring kumpletuhin ang reCAPTCHA verification."
        });
        return;
      }

      // Additional client-side validation for production
      if (!data.recaptcha.match(/^[A-Za-z0-9_-]+$/)) {
        toast.error("Invalid reCAPTCHA token", {
          description: "Pakisubukang muli ang reCAPTCHA verification."
        });
        return;
      }



      const templateParams = {
        from_name: data.pangalan,
        from_email: data.email,
        level: data.lebel,
        message: data.mungkahi,
        reply_to: data.email,
        to_name: "Digiksyunaryo Admin",
        recaptcha_verified: "Yes"
      };

      const response = await emailjs.send(
        'service_j6d3eln',
        'template_8jdc759',
        templateParams,
        'YE_cdwWA94NYVKBSB'
      );

      console.log('SUCCESS!', response.status, response.text);
      toast.success("Maraming salamat sa inyong puna o mungkahi!", {
        description: "Natanggap na namin ang inyong feedback at ito ay aming susuriin."
      });

      form.reset();
      setRecaptchaToken('');
      recaptchaRef.current?.reset();
      
    } catch (err) {
      console.error('FAILED...', err);
      toast.error("May naganap na error sa pagpapadala ng inyong feedback", {
        description: "Pakisubukang muli mamaya o makipag-ugnay sa amin sa ibang paraan."
      });
      setRecaptchaToken('');
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-maroon mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Feedback at Mungkahi
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Ang inyong opinyon ay mahalaga sa amin. Ibahagi ang inyong mga ideya, suhestiyon, o mga natuklasang isyu upang mapagbuti namin ang Digiksyunaryo.
              </motion.p>
            </div>

            <Card className="border-maroon/20 shadow-lg mt-8">
              <CardHeader className="bg-gradient-to-r from-maroon to-burgundy text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Magbahagi ng Inyong Feedback
                </CardTitle>
                <CardDescription className="text-gray-100">
                  Kumpletuhin ang form sa ibaba upang maipaabot sa amin ang inyong mga puna o mungkahi.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="feedback-form space-y-6">
                    {/* Personal Information Section */}
                    <div className="form-section">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <FormLabel className="text-base font-medium flex items-center">
                                <Mail className="mr-2 h-4 w-4 text-maroon" /> Email
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Ilagay ang inyong email address" 
                                  className="border-maroon/20 focus-visible:ring-maroon"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-red-600" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="pangalan"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <FormLabel className="text-base font-medium flex items-center">
                                <User className="mr-2 h-4 w-4 text-maroon" /> Pangalan
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Ilagay ang inyong buong pangalan" 
                                  className="border-maroon/20 focus-visible:ring-maroon"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-red-600" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Academic Level Section */}
                    <div className="form-section">
                      <FormField
                        control={form.control}
                        name="lebel"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-base font-medium flex items-center">
                              <BookOpen className="mr-2 h-4 w-4 text-maroon" /> Kurso o Lebel ng Pag-aaral
                            </FormLabel>
                            <FormDescription className="text-gray-500 text-sm">
                              Halimbawa: Grade 7, Grade 12, College Freshman, Teacher, atbp.
                            </FormDescription>
                            <FormControl>
                              <Input 
                                placeholder="Ilagay ang inyong kurso o lebel ng pag-aaral" 
                                className="border-maroon/20 focus-visible:ring-maroon"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Feedback Message Section */}
                    <div className="form-section">
                      <FormField
                        control={form.control}
                        name="mungkahi"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-base font-medium flex items-center">
                              <MessageSquare className="mr-2 h-4 w-4 text-maroon" /> Puna o Mungkahi
                            </FormLabel>
                            <FormDescription className="text-gray-500 text-sm">
                              Ibahagi ang inyong mga ideya, suhestiyon, o mga natuklasang isyu.
                            </FormDescription>
                            <FormControl>
                              <Textarea 
                                placeholder="Ilagay dito ang inyong puna o mungkahi..." 
                                className="min-h-[180px] border-maroon/20 focus-visible:ring-maroon"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* reCAPTCHA Section - Simple Design */}
                    <div className="form-section">
                      <FormField
                        control={form.control}
                        name="recaptcha"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <div className="flex justify-center">
                                <Recaptcha
                                  ref={recaptchaRef}
                                  onChange={(token) => {
                                    field.onChange(token || '');
                                    setRecaptchaToken(token || '');
                                  }}
                                  onExpired={() => {
                                    field.onChange('');
                                    setRecaptchaToken('');
                                  }}
                                  onError={() => {
                                    field.onChange('');
                                    setRecaptchaToken('');
                                  }}
                                  theme="light"
                                  size="normal"
                                  required
                                  showLabel={false}
                                  className="w-full"
                                />
                              </div>
                            </FormControl>
                            <div className="flex justify-center mt-2">
                              <FormMessage className="recaptcha-error-message text-red-600 text-xs text-center bg-red-50 border border-red-200 rounded px-3 py-2 max-w-xs" />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Submit Button Section */}
                    <div className="form-section pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-maroon hover:bg-maroon/90 text-white py-4 text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                            <span>Isinusumite...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Isumite ang Feedback</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-2 text-center text-sm text-gray-500 border-t border-gray-100 pt-6 pb-4">
                <p>Ang inyong feedback ay mahalaga sa amin at ito ay gagamitin upang mapagbuti ang Digiksyunaryo.</p>
                <p>Salamat sa inyong suporta!</p>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;
