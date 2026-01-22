import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-5">
            Help Shape the Next Generation of Quant Infrastructure
          </h2>

          {/* Copy */}
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We're working closely with early institutional partners to define the future of AI-native financial systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-row items-center justify-center gap-3">
            <Button variant="hero" size="xl">
              Request a Demo
            </Button>
            <Button variant="heroOutline" size="xl">
              Download Overview
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
