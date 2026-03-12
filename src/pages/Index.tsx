import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroScrollSection from "@/components/HeroScrollSection";
import CompaniesSection from "@/components/CompaniesSection";
import NexusAIFlow from "@/components/NexusAIFlow";
import ERPStackSection from "@/components/ERPStackSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConsultingSection from "@/components/ConsultingSection";
import GlobeSection from "@/components/GlobeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TwitterTestimonialsSection from "@/components/TwitterTestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <HeroScrollSection />
    <CompaniesSection />
    <NexusAIFlow />
    <ERPStackSection />
    <FeaturesSection />
    <ConsultingSection />
    <GlobeSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <TwitterTestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
