import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Layers, Box, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive Intelligence Engine",
    description: "Self-optimizing models that learn from market regimes and adapt strategies in real-time without manual intervention.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Layers,
    title: "Unified Research Labs",
    description: "Collaborative notebooks with version control, reproducible pipelines, and seamless transition from research to production.",
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: Box,
    title: "Modular Model Hub",
    description: "A marketplace of pre-built quantitative models with plug-and-play architecture. Deploy, combine, and scale instantly.",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Shield,
    title: "Secure Execution & Monitoring",
    description: "Zero-trust infrastructure with real-time audit trails, model lineage tracking, and complete explainability at every layer.",
    gradient: "from-primary/20 to-primary/5",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full bg-card border border-border rounded-lg p-8 card-hover overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>

          {/* Hover indicator */}
          <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">Learn more</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs text-primary uppercase tracking-widest font-medium mb-4 block">
            Core Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Quantitative Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A modular operating system that unifies every stage of the quantitative workflow — from data ingestion to model deployment.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="accent-line max-w-xs mx-auto mb-8" />
          <p className="text-muted-foreground mb-6">
            Ready to explore the full platform?
          </p>
          <a
            href="#product"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Product Architecture
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
