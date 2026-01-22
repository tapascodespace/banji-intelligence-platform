import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { SystemDiagram } from "./SystemDiagram";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                Enterprise-Grade Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-foreground">BANJI</span>
              <span className="text-muted-foreground"> — </span>
              <br />
              <span className="text-gradient-primary">Infrastructure for</span>
              <br />
              <span className="text-foreground">Thinking Markets</span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              An AI-native operating system for quantitative research, trading, and deployment — built for speed, security, and explainability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-4 h-4" />
                Enter Sandbox
              </Button>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Trusted by leading institutions
              </p>
              <div className="flex items-center gap-8 opacity-50">
                {["Fund I", "Capital", "Research", "Trading"].map((name) => (
                  <span key={name} className="font-display text-sm text-muted-foreground">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* System Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <SystemDiagram />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
