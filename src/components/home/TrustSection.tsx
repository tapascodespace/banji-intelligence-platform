import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, FileCheck } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade protection from day one.",
  },
  {
    icon: Server,
    title: "Flexible Deployment",
    description: "Cloud, private, or on-premises. Your choice.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Built for regulatory and audit requirements.",
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto"
        >
          {/* Principles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                  <principle.icon className="w-5 h-5 text-muted-foreground/60" strokeWidth={1.5} />
                </div>
                
                {/* Title - H4 */}
                <h4 className="text-[18px] font-semibold text-foreground mb-2">
                  {principle.title}
                </h4>
                
                {/* Description */}
                <p className="text-[16px] leading-[1.5] text-muted-foreground">
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