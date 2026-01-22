import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { KPIStrip } from "@/components/home/KPIStrip";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ArchitectureSection } from "@/components/home/ArchitectureSection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <KPIStrip />
        <FeaturesSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
