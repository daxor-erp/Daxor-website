import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CompaniesSection />
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
