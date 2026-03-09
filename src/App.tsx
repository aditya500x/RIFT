import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQs from "./pages/FAQs";
import Jury from "./pages/Jury";
import Team from "./pages/Team";
import Workshops from "./pages/Workshops";
import Divisions from "./pages/Divisions";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/layout/ScrollToTop";
import Loader from "./components/layout/Loader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ── Full-screen loader (initial site load only) ── */}
        <AnimatePresence>
          {isLoading && (
            <Loader onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* ── Main application content ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/jury" element={<Jury />} />
              <Route path="/team" element={<Team />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/divisions" element={<Divisions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
