import { motion } from "framer-motion";
import { Database, Brain, Activity, Shield, Zap, Layers } from "lucide-react";

const nodes = [
  { id: "data", label: "Data Layer", icon: Database, x: 50, y: 20, delay: 0 },
  { id: "research", label: "Research Labs", icon: Layers, x: 20, y: 45, delay: 0.1 },
  { id: "models", label: "Model Hub", icon: Brain, x: 80, y: 45, delay: 0.2 },
  { id: "execution", label: "Execution", icon: Zap, x: 35, y: 70, delay: 0.3 },
  { id: "monitoring", label: "Monitoring", icon: Activity, x: 65, y: 70, delay: 0.4 },
  { id: "security", label: "Security", icon: Shield, x: 50, y: 90, delay: 0.5 },
];

const connections = [
  { from: "data", to: "research" },
  { from: "data", to: "models" },
  { from: "research", to: "execution" },
  { from: "models", to: "execution" },
  { from: "models", to: "monitoring" },
  { from: "execution", to: "monitoring" },
  { from: "execution", to: "security" },
  { from: "monitoring", to: "security" },
];

export const SystemDiagram = () => {
  const getNodePosition = (id: string) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {connections.map((conn, i) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
          );
        })}

        {/* Animated data particles */}
        {connections.slice(0, 3).map((conn, i) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.circle
              key={`particle-${i}`}
              r="0.8"
              fill="hsl(var(--primary))"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + node.delay }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Node card */}
            <div className="relative bg-card border border-border rounded-lg p-3 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                  <node.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground whitespace-nowrap hidden sm:block">
                  {node.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Center label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="font-display text-xs text-primary font-semibold tracking-widest uppercase">
          BANJI OS
        </div>
      </motion.div>
    </div>
  );
};
