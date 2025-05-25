import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookmarkProvider } from "./context/BookmarkContext";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TungkolSa = lazy(() => import("./pages/TungkolSa"));
const Feedback = lazy(() => import("./pages/Feedback"));
const MakipagUgnay = lazy(() => import("./pages/MakipagUgnay"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  
  return null;
}

// Animated Routes component
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-[#800020] text-4xl animate-spin flex items-center justify-center border-t-[#800020] rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-[#FFD700] text-2xl animate-spin flex items-center justify-center border-t-[#FFD700] rounded-full"></div>
          </div>
        </div>
      </div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Index />
            </motion.div>
          } />
          <Route path="/tungkol-sa" element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TungkolSa />
            </motion.div>
          } />
          <Route path="/feedback" element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Feedback />
            </motion.div>
          } />
          <Route path="/makipag-ugnay" element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MakipagUgnay />
            </motion.div>
          } />
          <Route path="/bookmarks" element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Bookmarks />
            </motion.div>
          } />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <NotFound />
            </motion.div>
          } />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookmarkProvider>
        <Toaster />
        <Sonner />
<Analytics />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </BookmarkProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
