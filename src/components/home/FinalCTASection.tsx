import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Help Shape the Next Generation of
            <span className="text-muted-foreground"> Quant Infrastructure</span>
          </h2>

          {/* Copy */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            We're working closely with early institutional partners to define the future of AI-native financial systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="minimal" size="lg" className="text-muted-foreground hover:text-foreground">
              Download Overview
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
