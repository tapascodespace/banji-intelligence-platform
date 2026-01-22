import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, FileCheck } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Security-First Design",
    description: "Designed with institutional security principles from the ground up.",
  },
  {
    icon: Server,
    title: "Deployment Flexibility",
    description: "Private cloud and on-premises deployment planned for enterprise requirements.",
  },
  {
    icon: FileCheck,
    title: "Compliance-Aware",
    description: "Built with regulatory and audit requirements in mind from day one.",
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-40 relative border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto"
        >
          {/* Principles grid - evenly spaced */}
          <div className="grid grid-cols-3 gap-12 lg:gap-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center">
                  <principle.icon className="w-5 h-5 text-muted-foreground/60" strokeWidth={1.5} />
                </div>
                
                {/* Title - H3 scale adjusted */}
                <h3 className="text-[18px] font-medium text-foreground mb-2">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-[15px] leading-[1.6] text-muted-foreground hidden sm:block">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
