import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const insights = [
  "Global hedge fund and asset management industry spans trillions in AUM",
  "Quantitative and systematic strategies continue to grow as markets become more complex",
  "AI adoption is accelerating — but infrastructure has not kept pace",
  "Institutions need a unified intelligence layer, not more tools",
];

export const MarketSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative bg-card/30">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section label */}
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6 block">
              Market Opportunity
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              A Multi-Trillion Dollar Industry Built on
              <span className="text-muted-foreground"> Legacy Infrastructure</span>
            </h2>

            {/* Insights */}
            <div className="space-y-5">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {insight}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Layered grid visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 1, 2].map((layer) => (
                  <motion.div
                    key={layer}
                    className="absolute border border-border/30 rounded-lg"
                    style={{
                      width: `${70 - layer * 15}%`,
                      height: `${70 - layer * 15}%`,
                    }}
                    initial={{ opacity: 0, rotate: -5 + layer * 5 }}
                    animate={isInView ? { 
                      opacity: 0.3 + layer * 0.2, 
                      rotate: -5 + layer * 5 
                    } : {}}
                    transition={{ duration: 1, delay: 0.5 + layer * 0.2 }}
                  />
                ))}
                
                {/* Center node */}
                <motion.div
                  className="absolute w-3 h-3 bg-foreground/60 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                
                {/* Orbiting dots */}
                {[0, 1, 2, 3].map((dot) => (
                  <motion.div
                    key={dot}
                    className="absolute w-1.5 h-1.5 bg-foreground/30 rounded-full"
                    style={{
                      transform: `rotate(${dot * 90}deg) translateX(80px)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + dot * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
