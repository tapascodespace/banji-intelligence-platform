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
    <section className="py-40 lg:py-48 relative bg-card/20">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mx-auto text-center"
        >
          {/* Section label - 13px */}
          <span className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8 block">
            Market Opportunity
          </span>

          {/* H2 - 44px */}
          <h2 className="text-foreground mb-12">
            A Multi-Trillion Dollar Industry Built on Legacy Infrastructure
          </h2>

          {/* Insights - 18px body */}
          <div className="space-y-5 text-left max-w-[480px] mx-auto">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-[10px] flex-shrink-0" />
                <p className="text-muted-foreground">
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
