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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section label */}
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block">
            The Reality
          </span>

          {/* Headline */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-10">
            Modern Quantitative Finance Is Built on Fragmentation
          </h2>

          {/* Problem bullets */}
          <div className="space-y-4 text-left max-w-lg mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
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
