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
    <section className="py-20 lg:py-28 relative bg-card/30">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block">
            Market Opportunity
          </span>

          {/* Headline */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-10">
            A Multi-Trillion Dollar Industry Built on Legacy Infrastructure
          </h2>

          {/* Insights */}
          <div className="space-y-4 text-left max-w-lg mx-auto">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
