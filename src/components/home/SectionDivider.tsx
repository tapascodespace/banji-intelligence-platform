import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "line" | "gradient" | "dots" | "glow";
  className?: string;
}

export const SectionDivider = ({ variant = "line", className = "" }: SectionDividerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (variant === "line") {
    return (
      <div ref={ref} className={`relative py-8 ${className}`}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[200px] mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div ref={ref} className={`relative h-32 overflow-hidden ${className}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div ref={ref} className={`relative py-12 flex justify-center gap-3 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="w-1 h-1 rounded-full bg-muted-foreground/30"
          />
        ))}
      </div>
    );
  }

  if (variant === "glow") {
    return (
      <div ref={ref} className={`relative h-24 overflow-hidden ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-px bg-primary/40"
        />
      </div>
    );
  }

  return null;
};

// Gradient transition overlay for section backgrounds
export const GradientTransition = ({ 
  direction = "down",
  className = "" 
}: { 
  direction?: "up" | "down";
  className?: string;
}) => {
  return (
    <div 
      className={`absolute left-0 right-0 h-32 pointer-events-none ${
        direction === "down" ? "bottom-0" : "top-0"
      } ${className}`}
    >
      <div 
        className={`w-full h-full bg-gradient-to-${direction === "down" ? "b" : "t"} from-transparent to-background/50`}
      />
    </div>
  );
};

// Decorative corner accent
export const CornerAccent = ({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-24 h-24 pointer-events-none opacity-20`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M0 0 L40 0 L40 2 L2 2 L2 40 L0 40 Z"
          fill="currentColor"
          className="text-border"
        />
      </svg>
    </div>
  );
};
