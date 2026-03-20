import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhySection from "@/components/WhySection";
import LogoBar from "@/components/LogoBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import MidCTA from "@/components/MidCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <LogoBar />
      <TestimonialsSection />
      <FAQSection />
      <MidCTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
