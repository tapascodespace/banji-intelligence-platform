import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6 block">
            Our Purpose
          </span>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Why We're Building BANJI
          </h2>

          {/* Vision statement */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            BANJI exists to become the foundational infrastructure layer for intelligent markets — reducing fragmentation, enabling adaptive systems, and allowing institutions to operate with clarity and control.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-px bg-border mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
};
