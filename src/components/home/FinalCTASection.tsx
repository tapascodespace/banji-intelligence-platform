import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.2]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-foreground/5 blur-3xl pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-[520px] mx-auto text-center">
          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[clamp(24px,3.5vw,40px)] font-medium text-foreground leading-[1.15] tracking-[-0.02em] mb-5"
          >
            Help Shape the Next Generation of Quant Infrastructure
          </motion.h2>

          {/* Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[16px] leading-[1.65] text-muted-foreground mb-10"
          >
            We're working closely with early institutional partners to define the future of AI-native financial systems.
          </motion.p>

          {/* CTAs with stagger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row items-center justify-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl">
                Request a Demo
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="xl">
                Download Overview
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
