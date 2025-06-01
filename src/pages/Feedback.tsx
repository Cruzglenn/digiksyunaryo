import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
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
import { MessageSquare, Send, Mail, User, BookOpen } from "lucide-react"; // Removed HelpCircle
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Removed Tabs, TabsContent, TabsList, TabsTrigger imports

const feedbackSchema = z.object({
  email: z.string().email("Mangyaring maglagay ng wastong email address"),
  pangalan: z.string().min(2, "Mangyaring maglagay ng pangalan"),
  lebel: z.string().min(2, "Mangyaring maglagay ng iyong kurso o lebel"),
  mungkahi: z.string().min(10, "Mangyaring maglagay ng iyong puna o mungkahi")
});

type FeedbackValues = z.infer<typeof feedbackSchema>;

const Feedback = () => {
  const form = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      email: "",
      pangalan: "",
      lebel: "",
      mungkahi: ""
    }
  });

    const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FeedbackValues) => {
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: data.pangalan,
      from_email: data.email,
      level: data.lebel,
      message: data.mungkahi,
      reply_to: data.email,
      to_name: "Digiksyunaryo Admin"
    };

    emailjs.send(
      'service_j6d3eln',
      'template_8jdc759', 
      templateParams,
      'YE_cdwWA94NYVKBSB'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Maraming salamat sa iyong puna o mungkahi!", {
        description: "Natanggap na namin ang iyong feedback at ito ay aming susuriin."
      });
      form.reset();
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.error("May naganap na error sa pagpapadala ng iyong feedback", {
        description: "Pakisubukang muli mamaya o makipag-ugnay sa amin sa ibang paraan."
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                className="text-4xl md:text-5xl font-serif font-bold mb-4 text-maroon"
              >
                <span className="inline-block">Feedback</span>
                <MessageSquare className="inline-block ml-3 mb-2" size={32} />
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-lg text-gray-700 max-w-2xl mx-auto"
              >
                Mahalaga sa amin ang iyong mga puna at mungkahi upang patuloy naming mapagbuti ang 
                Digiksyunaryo. Gamitin ang form sa ibaba para sa pagbibigay ng feedback.
              </motion.p>
            </div>
            
            {/* Tabs and TabsList removed */}
            
            {/* Online Form Card is now directly rendered */}
            <Card className="border-maroon/20 shadow-lg mt-8"> {/* Added mt-8 for spacing */}
              <CardHeader className="bg-gradient-to-r from-maroon/10 to-transparent pb-8">
                <CardTitle className="text-2xl font-serif text-maroon flex items-center">
                  <User className="mr-2" /> Magbigay ng Feedback
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Ibahagi sa amin ang iyong mga ideya, suhestiyon, o mga natuklasang isyu.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                placeholder="Ilagay dito ang iyong email" 
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
                                placeholder="Ilagay dito ang iyong pangalan" 
                                className="border-maroon/20 focus-visible:ring-maroon" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="lebel"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-base font-medium flex items-center">
                            <BookOpen className="mr-2 h-4 w-4 text-maroon" /> Lebel/Kurso
                          </FormLabel>
                          <FormDescription className="text-gray-500 text-sm">
                            Halimbawa: Mag-aaral ng Grade 10, Guro, Propesyonal, atbp.
                          </FormDescription>
                          <FormControl>
                            <Input 
                              placeholder="Ilagay dito ang iyong lebel o kurso" 
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
                      name="mungkahi"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-base font-medium flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4 text-maroon" /> Puna o Mungkahi
                          </FormLabel>
                          <FormDescription className="text-gray-500 text-sm">
                            Ibahagi ang iyong mga ideya, suhestiyon, o mga natuklasang isyu.
                          </FormDescription>
                          <FormControl>
                            <Textarea 
                              placeholder="Ilagay dito ang iyong puna o mungkahi..." 
                              className="min-h-[180px] border-maroon/20 focus-visible:ring-maroon"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-maroon hover:bg-burgundy text-white py-6 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                            <span>Isinusumite...</span>
                          </>
                        ) : (
                          <>
                            <Send className="mr-1" />
                            <span>Isumite ang Feedback</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-2 text-center text-sm text-gray-500 border-t border-gray-100 pt-6 pb-4">
                <p>Ang iyong feedback ay mahalaga sa amin at ito ay gagamitin upang mapagbuti ang Digiksyunaryo.</p>
                <p>Salamat sa iyong suporta!</p>
              </CardFooter>
            </Card>
            
            {/* Google Form TabsContent and Card removed */}
            
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;