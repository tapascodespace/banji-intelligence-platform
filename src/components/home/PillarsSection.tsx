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
    <section className="py-20 lg:py-28 relative bg-card/30">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block">
            What We're Building
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
            What BANJI Will Enable
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center"
            >
              {/* Number */}
              <span className="font-mono text-xs text-muted-foreground/50 mb-3 block">
                {pillar.number}
              </span>
              
              {/* Title */}
              <h3 className="font-display text-base font-medium text-foreground mb-2">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
