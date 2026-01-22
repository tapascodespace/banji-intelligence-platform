import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface KPIProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

const KPICounter = ({ value, suffix, label, delay = 0 }: KPIProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center px-8 py-6"
    >
      <div className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

const kpis = [
  { value: 2847, suffix: "+", label: "Models Deployed" },
  { value: 156, suffix: "K", label: "Data Pipelines" },
  { value: 12, suffix: "ms", label: "Avg. Latency" },
  { value: 99, suffix: ".9%", label: "Uptime SLA" },
];

export const KPIStrip = () => {
  return (
    <section className="relative py-16 border-y border-border bg-card/30">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {kpis.map((kpi, index) => (
            <KPICounter
              key={kpi.label}
              value={kpi.value}
              suffix={kpi.suffix}
              label={kpi.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
