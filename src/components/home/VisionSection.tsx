import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 lg:py-48 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mx-auto text-center"
        >
          {/* Section label - 13px */}
          <span className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8 block">
            Our Purpose
          </span>

          {/* H2 - 44px */}
          <h2 className="text-foreground mb-8">
            Why We're Building BANJI
          </h2>

          {/* Vision statement - 18px body */}
          <p className="text-muted-foreground max-w-[520px] mx-auto">
            BANJI exists to become the foundational infrastructure layer for intelligent markets — reducing fragmentation, enabling adaptive systems, and allowing institutions to operate with clarity and control.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-px bg-border/50 mx-auto mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
};
