import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";
import TracksSection from "@/components/TracksSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Vertical guide lines */}
      <div className="site-lines" />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ScheduleSection />
      <WhoShouldJoinSection />
      <TracksSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
