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
    <section ref={sectionRef} className="py-40 lg:py-48 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-foreground/[0.03] blur-[150px] pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-[580px] mx-auto text-center">
          {/* H2 - 44px */}
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-foreground mb-8"
          >
            Help Shape the Next Generation of Quant Infrastructure
          </motion.h2>

          {/* Body - 18px */}
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground mb-12"
          >
            We're working closely with early institutional partners to define the future of AI-native financial systems.
          </motion.p>

          {/* CTAs with consistent sizing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row items-center justify-center gap-4"
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
