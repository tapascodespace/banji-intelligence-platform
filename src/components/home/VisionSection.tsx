import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-40 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[560px] mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-5 block">
            Our Purpose
          </span>

          {/* Headline */}
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-medium text-foreground leading-[1.15] tracking-[-0.02em] mb-6">
            Why We're Building BANJI
          </h2>

          {/* Vision statement */}
          <p className="text-[16px] leading-[1.7] text-muted-foreground max-w-[480px] mx-auto">
            BANJI exists to become the foundational infrastructure layer for intelligent markets — reducing fragmentation, enabling adaptive systems, and allowing institutions to operate with clarity and control.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-12 h-px bg-border/60 mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
};
