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
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6 block">
            What We're Building
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            What BANJI
            <span className="text-muted-foreground"> Will Enable</span>
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="border-t border-border pt-8">
                {/* Number */}
                <span className="font-mono text-sm text-muted-foreground/50 mb-4 block">
                  {pillar.number}
                </span>
                
                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
