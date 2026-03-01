import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CompaniesSection />
    <StatsSection />
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <TeamSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
