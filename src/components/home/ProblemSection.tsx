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
          className="max-w-3xl"
        >
          {/* Section label */}
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6 block">
            The Reality
          </span>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-12">
            Modern Quantitative Finance Is Built on
            <span className="text-muted-foreground"> Fragmentation</span>
          </h2>

          {/* Problem bullets */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-3 flex-shrink-0" />
                <p className="text-lg text-muted-foreground leading-relaxed">
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
