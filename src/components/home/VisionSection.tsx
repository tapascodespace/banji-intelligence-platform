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
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 block">
            Our Vision
          </span>

          {/* H2 - 36px */}
          <h2 className="text-foreground mb-6">
            Why we built Quantora.
          </h2>

          {/* Vision statement - 18px body */}
          <p className="text-muted-foreground max-w-[520px] mx-auto">
            Quantora exists to unify quantitative finance. One platform for research, 
            execution, and deployment — giving institutions the clarity and control they need.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-px bg-border/50 mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
};