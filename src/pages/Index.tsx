import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import MarqueeSection from "@/components/MarqueeSection";
import ScheduleSection from "@/components/ScheduleSection";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ImpactSection />
      <MarqueeSection />
      <ScheduleSection />
      <WhoShouldJoinSection />
      <CTASection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
