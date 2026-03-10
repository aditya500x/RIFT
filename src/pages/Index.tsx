import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ImpactSection from "@/sections/ImpactSection";
import MarqueeSection from "@/sections/MarqueeSection";
import PreScheduleShowcase from "@/sections/PreScheduleShowcase";
import ScheduleSection from "@/sections/ScheduleSection";
import PartnersSection from "@/sections/PartnersSection";
import WhoShouldJoinSection from "@/sections/WhoShouldJoinSection";
import CTASection from "@/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ImpactSection />
      <MarqueeSection />
      <PreScheduleShowcase />
      <MarqueeSection />
      <ScheduleSection />
      <PartnersSection />
      <WhoShouldJoinSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
