import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const problems = [
  "Institutional teams rely on disconnected tools for data, research, execution, and compliance",
  "Infrastructure was not designed for adaptive AI systems",
  "Complexity increases operational risk, cost, and time-to-deployment",
];

export const ProblemSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} className="py-40 lg:py-48 relative overflow-hidden">
      {/* Parallax background element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-foreground/[0.008] blur-[120px] pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-[600px] mx-auto text-center">
          {/* Section label - 15px */}
          <motion.span 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8 block"
          >
            The Reality
          </motion.span>

          {/* H2 - 44px */}
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground mb-12"
          >
            Modern Quantitative Finance Is Built on Fragmentation
          </motion.h2>

          {/* Problem bullets with stagger - 18px body */}
          <div className="space-y-5 text-left max-w-[480px] mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-[10px] flex-shrink-0" 
                />
                <p className="text-muted-foreground">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
