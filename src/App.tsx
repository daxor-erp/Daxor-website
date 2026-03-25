import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import AIPage from "./pages/AI";
import Analytics from "./pages/Analytics";
import Dashboards from "./pages/Dashboards";
import CloudConsulting from "./pages/services/CloudConsulting";
import DataMigration from "./pages/services/DataMigration";
import Training from "./pages/services/Training";
import AIMLIntegration from "./pages/services/AIMLIntegration";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Security from "./pages/Security";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dashboards" element={<Dashboards />} />
            {/* Services */}
            <Route path="/services/cloud-consulting" element={<CloudConsulting />} />
            <Route path="/services/data-migration" element={<DataMigration />} />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/ai-ml" element={<AIMLIntegration />} />
            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/security" element={<Security />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
