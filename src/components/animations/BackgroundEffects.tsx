import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const FloatingOrbs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large ambient orb */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl"
      />
      
      {/* Medium orb */}
      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute top-[60%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-radial from-foreground/[0.015] to-transparent blur-2xl"
      />
      
      {/* Small accent orb */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[40%] right-[20%] w-[200px] h-[200px] rounded-full bg-gradient-radial from-foreground/[0.02] to-transparent blur-xl"
      />
    </div>
  );
};

export const GridLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
      {/* Vertical lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-foreground"
          style={{ left: `${(i + 1) * 16.666}%` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        />
      ))}
      
      {/* Horizontal accent lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent"
        style={{ top: "33%" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent"
        style={{ top: "66%" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />
    </div>
  );
};

export const MovingDots = () => {
  const dots = [
    { x: "10%", y: "20%", size: 2, duration: 20 },
    { x: "85%", y: "15%", size: 3, duration: 25 },
    { x: "70%", y: "60%", size: 2, duration: 22 },
    { x: "15%", y: "70%", size: 2, duration: 28 },
    { x: "50%", y: "45%", size: 3, duration: 24 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-foreground/20"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`w-full flex justify-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export const TextReveal = ({ 
  children,
  className = "" 
}: { 
  children: string;
  className?: string;
}) => {
  const words = children.split(" ");
  
  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: i * 0.05,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
