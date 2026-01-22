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
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Principles grid */}
          <div className="grid grid-cols-3 gap-6 lg:gap-10">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                  <principle.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-sm font-medium text-foreground mb-1">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
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
