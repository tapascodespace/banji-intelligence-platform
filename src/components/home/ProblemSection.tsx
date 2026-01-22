import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "Institutional teams rely on disconnected tools for data, research, execution, and compliance",
  "Infrastructure was not designed for adaptive AI systems",
  "Complexity increases operational risk, cost, and time-to-deployment",
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[560px] mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-5 block">
            The Reality
          </span>

          {/* Headline */}
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-medium text-foreground leading-[1.15] tracking-[-0.02em] mb-10">
            Modern Quantitative Finance Is Built on Fragmentation
          </h2>

          {/* Problem bullets */}
          <div className="space-y-4 text-left max-w-[440px] mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-[3px] h-[3px] rounded-full bg-muted-foreground/60 mt-[9px] flex-shrink-0" />
                <p className="text-[15px] leading-[1.65] text-muted-foreground">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
