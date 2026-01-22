import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { MarketSection } from "@/components/home/MarketSection";
import { VisionSection } from "@/components/home/VisionSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollAnimations";
import { MovingDots } from "@/components/animations/BackgroundEffects";
import { SectionDivider } from "@/components/home/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <MovingDots />
      <Navbar />
      <main>
        <HeroSection />
        
        <SectionDivider variant="gradient" />
        
        <section id="problem">
          <ProblemSection />
        </section>
        
        <SectionDivider variant="dots" />
        
        <section id="market">
          <MarketSection />
        </section>
        
        <SectionDivider variant="line" />
        
        <section id="vision">
          <VisionSection />
        </section>
        
        <SectionDivider variant="glow" />
        
        <section id="capabilities">
          <FeaturesSection />
        </section>
        
        <SectionDivider variant="gradient" />
        
        <PillarsSection />
        
        <SectionDivider variant="dots" />
        
        <TrustSection />
        
        <SectionDivider variant="glow" />
        
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
