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
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Principles grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                  <principle.icon className="w-6 h-6 text-foreground/60" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
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
