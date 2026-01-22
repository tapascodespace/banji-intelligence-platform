import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground/80 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export const ParallaxSection = ({ 
  children, 
  offset = 50,
  className = "" 
}: { 
  children: React.ReactNode; 
  offset?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export const FadeInOnScroll = ({ 
  children, 
  delay = 0,
  direction = "up",
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1,
  className = "" 
}: { 
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children,
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ 
  children,
  duration = 6,
  delay = 0,
  className = "" 
}: { 
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{ 
        y: [-8, 8, -8],
      }}
      transition={{ 
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnScroll = ({ 
  children,
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
};
