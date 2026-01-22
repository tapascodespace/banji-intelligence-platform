import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { MarketSection } from "@/components/home/MarketSection";
import { VisionSection } from "@/components/home/VisionSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="problem">
          <ProblemSection />
        </section>
        <section id="market">
          <MarketSection />
        </section>
        <section id="vision">
          <VisionSection />
        </section>
        <section id="capabilities">
          <PillarsSection />
        </section>
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
