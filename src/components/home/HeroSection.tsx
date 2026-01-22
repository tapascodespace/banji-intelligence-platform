import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SystemDiagram } from "./SystemDiagram";
import { WaveBackground } from "./WaveBackground";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      {/* Animated Wave Background */}
      <WaveBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/[0.01] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[520px] text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="text-[clamp(40px,5vw,64px)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground mb-6">
              Infrastructure for
              <br />
              Thinking Markets
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[16px] leading-[1.65] text-muted-foreground mb-10 max-w-[420px] mx-auto lg:mx-0"
            >
              BANJI is an AI-native operating system for quantitative research, trading and deployment built for speed, security, and explainability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-row gap-3 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Get Started Now
              </Button>
              <Button variant="heroOutline" size="xl">
                See Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* System Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <SystemDiagram />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
