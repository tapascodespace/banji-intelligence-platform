import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Unified Intelligence Layer",
    description: "One system connecting data, research, models, and execution.",
  },
  {
    number: "02",
    title: "Adaptive AI Systems",
    description: "Models that evolve with market regimes, not static assumptions.",
  },
  {
    number: "03",
    title: "Institution-Grade Control",
    description: "Built for security, auditability, and regulatory environments.",
  },
  {
    number: "04",
    title: "Composable Architecture",
    description: "Modular by design — institutions choose how deep to integrate.",
  },
];

export const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-5 block">
            What We're Building
          </span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-medium text-foreground leading-[1.15] tracking-[-0.02em]">
            What BANJI Will Enable
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 max-w-[960px] mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="text-center"
            >
              {/* Number */}
              <span className="text-[11px] font-mono text-muted-foreground/40 mb-4 block">
                {pillar.number}
              </span>
              
              {/* Title */}
              <h3 className="text-[15px] font-medium text-foreground mb-2 tracking-[-0.01em]">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-[14px] leading-[1.6] text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
