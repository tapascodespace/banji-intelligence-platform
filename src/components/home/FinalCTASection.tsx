import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[520px] mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-medium text-foreground leading-[1.15] tracking-[-0.02em] mb-5">
            Help Shape the Next Generation of Quant Infrastructure
          </h2>

          {/* Copy */}
          <p className="text-[16px] leading-[1.65] text-muted-foreground mb-10">
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
