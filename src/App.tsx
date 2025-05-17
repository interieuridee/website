import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Aanpak from "./pages/Aanpak";
import Projecten from "./pages/Projecten";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();
const App = () => <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/aanpak" element={<Aanpak />} />
              <Route path="/projecten" element={<Projecten />} />
              <Route path="/projecten/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        
        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/31654994964" target="_blank" rel="noopener noreferrer" className="whatsapp-button" aria-label="Contact via WhatsApp">
          <img src="/lovable-uploads/icons8-whatsapp.svg" alt="WhatsApp" width="24" height="24" />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;
export default App;
