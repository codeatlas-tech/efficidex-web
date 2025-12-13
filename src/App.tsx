import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

// Pages
import Index from "./pages/Index";
import Product from "./pages/Product";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import JoinOurMission from "./pages/JoinOurMission";
import Integrations from "./pages/Integrations";
import Docs from "./pages/Docs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <Routes>
          {/* Core */}
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />

          {/* Content */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industry" element={<IndustryDetail />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/docs" element={<Docs />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<JoinOurMission />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
