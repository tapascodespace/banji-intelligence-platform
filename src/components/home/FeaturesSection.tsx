import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import intelligenceImg from "@/assets/capability-intelligence.jpg";
import researchImg from "@/assets/capability-research.jpg";
import modularImg from "@/assets/capability-modular.jpg";
import securityImg from "@/assets/capability-security.jpg";

const capabilities = [
  {
    number: "01",
    title: "Adaptive Intelligence",
    subtitle: "Self-Optimizing Models",
    description: "Machine learning systems designed to adapt to shifting market regimes — evolving with the data, not against it.",
    image: intelligenceImg,
  },
  {
    number: "02",
    title: "Research Labs",
    subtitle: "Collaborative Infrastructure",
    description: "A unified environment for your entire team — from early-stage research to production-ready deployment.",
    image: researchImg,
  },
  {
    number: "03",
    title: "Modular Hub",
    subtitle: "Plug-and-Play Architecture",
    description: "A curated library of quantitative components. Compose, customize, and deploy — without rewriting infrastructure.",
    image: modularImg,
  },
  {
    number: "04",
    title: "Secure Execution",
    subtitle: "Zero-Trust Infrastructure",
    description: "Enterprise-grade security with complete audit trails and explainability at every layer. Built for institutional compliance.",
    image: securityImg,
  },
];

// Corner Accent Component
const CornerAccent = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`absolute ${positionClasses[position]} w-8 h-8 pointer-events-none`}
    >
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path
          d="M0 0 L12 0 L12 1 L1 1 L1 12 L0 12 Z"
          fill="currentColor"
          className="text-primary/20"
        />
      </svg>
    </motion.div>
  );
};

const CapabilityCard = ({ 
  capability, 
  index, 
  isReversed 
}: { 
  capability: typeof capabilities[0]; 
  index: number; 
  isReversed: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Image */}
      <div className={`relative group ${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
          {/* Corner accents */}
          <CornerAccent position="top-left" />
          <CornerAccent position="top-right" />
          <CornerAccent position="bottom-left" />
          <CornerAccent position="bottom-right" />
          
          {/* Image with overlay */}
          <img 
            src={capability.image} 
            alt={capability.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
          
          {/* Number badge */}
          <div className="absolute top-6 left-6">
            <span className="font-mono text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
              {capability.number}
            </span>
          </div>
        </div>
        
        {/* Decorative corner frame */}
        <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-border/50 rounded-lg -z-10" />
        <div className="absolute -top-3 -left-3 w-16 h-16 border border-primary/10 rounded-lg -z-10" />
      </div>

      {/* Content */}
      <div className={`space-y-6 relative ${isReversed ? 'lg:col-start-1' : ''}`}>
        {/* Corner accent on content */}
        <div className="absolute -top-4 -left-4 w-6 h-6 opacity-30">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M0 0 L8 0 L8 1 L1 1 L1 8 L0 8 Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        
        {/* Subtitle - 13px label */}
        <span className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
          {capability.subtitle}
        </span>
        
        {/* Title - H3 28px */}
        <h3 className="text-foreground leading-tight">
          {capability.title}
        </h3>
        
        {/* Description - 18px body */}
        <p className="text-muted-foreground max-w-md">
          {capability.description}
        </p>
        
        {/* Divider line with accent */}
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 rounded-full bg-foreground/20" />
          <div className="w-16 h-px bg-border" />
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section className="py-40 lg:py-48 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.015]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-24 lg:mb-32"
        >
          <span className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 block">
            Core Capabilities
          </span>
          <h2 className="text-foreground">
            Quantitative
            <br />
            <span className="text-muted-foreground">Excellence.</span>
          </h2>
        </motion.div>

        {/* Capabilities */}
        <div className="space-y-24 lg:space-y-32">
          {capabilities.map((capability, index) => (
            <CapabilityCard 
              key={capability.number} 
              capability={capability} 
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent mx-auto mb-8" />
          <a
            href="#product"
            className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground font-medium transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest">Explore Full Architecture</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
