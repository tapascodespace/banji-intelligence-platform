import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, FlaskConical, Brain, Zap, Activity, Lock } from "lucide-react";

const layers = [
  {
    icon: Database,
    title: "Data Ingestion Layer",
    description: "Connect to 500+ data sources with real-time streaming and historical batch processing.",
    code: `from banji import DataPipeline

pipeline = DataPipeline()
pipeline.connect("bloomberg", "reuters", "internal")
pipeline.stream(frequency="1ms")`,
  },
  {
    icon: FlaskConical,
    title: "Research & Collaboration",
    description: "Jupyter-native environment with version control, experiment tracking, and team collaboration.",
    code: `# Research notebook with auto-versioning
experiment = banji.Experiment("alpha_v3")
experiment.log_params(window=20, threshold=0.05)
experiment.run(backtest=True)`,
  },
  {
    icon: Brain,
    title: "AI / Quant Model Hub",
    description: "Pre-built models, custom ML pipelines, and one-click deployment to production.",
    code: `from banji.models import MomentumAlpha

model = MomentumAlpha.from_hub("institutional/momentum-v2")
model.fine_tune(dataset, epochs=100)
model.deploy(environment="prod")`,
  },
  {
    icon: Zap,
    title: "Execution Engine",
    description: "Sub-millisecond order routing with smart execution algorithms and multi-venue connectivity.",
    code: `execution = banji.ExecutionEngine(venue="smart")
execution.submit(
    orders=signals.to_orders(),
    algo="TWAP",
    urgency="medium"
)`,
  },
  {
    icon: Activity,
    title: "Monitoring & Analytics",
    description: "Real-time P&L, risk metrics, and performance attribution with customizable dashboards.",
    code: `dashboard = banji.Dashboard()
dashboard.add_metric("sharpe_ratio", window="30d")
dashboard.add_alert(drawdown_pct > 0.05)
dashboard.stream()`,
  },
  {
    icon: Lock,
    title: "Audit & Explainability",
    description: "Complete model lineage, decision audit trails, and regulatory compliance reporting.",
    code: `audit = banji.Audit(model_id="alpha_v3")
audit.explain(trade_id="TXN_001")
audit.export(format="regulatory", period="Q4")`,
  },
];

const LayerCard = ({ layer, index }: { layer: typeof layers[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Content - alternating sides */}
      <div className={`${isEven ? '' : 'lg:order-2'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <layer.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            Layer {index + 1}
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
          {layer.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {layer.description}
        </p>
      </div>

      {/* Code Block */}
      <div className={`${isEven ? '' : 'lg:order-1'}`}>
        <div className="bg-background-deep rounded-lg border border-border overflow-hidden">
          {/* Code header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">example.py</span>
          </div>
          {/* Code content */}
          <pre className="p-4 text-sm overflow-x-auto">
            <code className="font-mono text-muted-foreground">
              {layer.code.split('\n').map((line, i) => (
                <div key={i} className="leading-relaxed">
                  {line.startsWith('#') ? (
                    <span className="text-muted-foreground/60">{line}</span>
                  ) : line.includes('from') || line.includes('import') ? (
                    <span>
                      <span className="text-primary/80">
                        {line.split(' ')[0]}
                      </span>
                      <span> {line.split(' ').slice(1).join(' ')}</span>
                    </span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export const ArchitectureSection = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section id="product" className="py-24 lg:py-32 bg-card/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs text-primary uppercase tracking-widest font-medium mb-4 block">
            Platform Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Modular Quant Operating System
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Six integrated layers that work together seamlessly — or independently, depending on your needs.
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-20 lg:space-y-24">
          {layers.map((layer, index) => (
            <LayerCard key={layer.title} layer={layer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
