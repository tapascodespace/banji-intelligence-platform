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
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[560px] mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-5 block">
            Market Opportunity
          </span>

          {/* Headline */}
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-medium text-foreground leading-[1.15] tracking-[-0.02em] mb-10">
            A Multi-Trillion Dollar Industry Built on Legacy Infrastructure
          </h2>

          {/* Insights */}
          <div className="space-y-4 text-left max-w-[440px] mx-auto">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-[3px] h-[3px] rounded-full bg-muted-foreground/60 mt-[9px] flex-shrink-0" />
                <p className="text-[15px] leading-[1.65] text-muted-foreground">
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
