import { motion, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const gridY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-40 lg:py-48 relative bg-card/20 overflow-hidden">
      {/* Animated grid background */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 grid-pattern opacity-[0.02]" 
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8 block"
          >
            What We're Building
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground"
          >
            What BANJI Will Enable
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 max-w-[1000px] mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.15 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -4 }}
              className="text-center group"
            >
              {/* Number with animation */}
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-[12px] font-mono text-muted-foreground/30 mb-6 block group-hover:text-muted-foreground/50 transition-colors"
              >
                {pillar.number}
              </motion.span>
              
              {/* Title - H3 28px */}
              <h3 className="text-foreground mb-3 group-hover:text-foreground/90 transition-colors">
                {pillar.title}
              </h3>
              
              {/* Description - 18px body */}
              <p className="text-muted-foreground text-[16px]">
                {pillar.description}
              </p>
              
              {/* Hover indicator */}
              <motion.div 
                className="w-8 h-px bg-foreground/15 mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId={`indicator-${pillar.number}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
