import { motion } from "framer-motion";

// Structured quantitative finance network layout
// Represents: Market Data → Alpha Signals → Models → Risk → Execution
const systemNodes = [
  // Central AI Core (Quantora Intelligence)
  { id: "core", x: 50, y: 50, size: 14, layer: "core", label: "AI" },
  
  // Processing Layer (Models & Risk)
  { id: "model1", x: 35, y: 38, size: 7, layer: "processing", label: "Model" },
  { id: "model2", x: 65, y: 38, size: 7, layer: "processing", label: "Model" },
  { id: "risk", x: 50, y: 32, size: 6, layer: "processing", label: "Risk" },
  { id: "alpha", x: 50, y: 68, size: 7, layer: "processing", label: "Alpha" },
  
  // Market Data Layer (Outer - Left cluster)
  { id: "data1", x: 15, y: 25, size: 4, layer: "data", label: "Equities" },
  { id: "data2", x: 12, y: 42, size: 4, layer: "data", label: "Futures" },
  { id: "data3", x: 15, y: 58, size: 4, layer: "data", label: "Options" },
  { id: "data4", x: 20, y: 72, size: 3, layer: "data", label: "FX" },
  
  // Market Data Layer (Outer - Right cluster)
  { id: "data5", x: 85, y: 25, size: 4, layer: "data", label: "Bonds" },
  { id: "data6", x: 88, y: 42, size: 4, layer: "data", label: "Crypto" },
  { id: "data7", x: 85, y: 58, size: 4, layer: "data", label: "Commodities" },
  { id: "data8", x: 80, y: 72, size: 3, layer: "data", label: "Alt Data" },
  
  // Execution Layer (Bottom)
  { id: "exec1", x: 35, y: 85, size: 5, layer: "execution", label: "Execute" },
  { id: "exec2", x: 50, y: 90, size: 5, layer: "execution", label: "Deploy" },
  { id: "exec3", x: 65, y: 85, size: 5, layer: "execution", label: "Monitor" },
  
  // Signal Layer (Top)
  { id: "signal1", x: 35, y: 15, size: 4, layer: "signal", label: "Signal" },
  { id: "signal2", x: 50, y: 12, size: 4, layer: "signal", label: "Signal" },
  { id: "signal3", x: 65, y: 15, size: 4, layer: "signal", label: "Signal" },
];

// Directional connections representing data flow pipelines
const pipelines = [
  // Data → Processing (Inbound flow)
  { from: "data1", to: "model1", direction: "inbound" },
  { from: "data2", to: "model1", direction: "inbound" },
  { from: "data3", to: "alpha", direction: "inbound" },
  { from: "data4", to: "alpha", direction: "inbound" },
  { from: "data5", to: "model2", direction: "inbound" },
  { from: "data6", to: "model2", direction: "inbound" },
  { from: "data7", to: "alpha", direction: "inbound" },
  { from: "data8", to: "alpha", direction: "inbound" },
  
  // Processing → Core (Convergence)
  { from: "model1", to: "core", direction: "inbound" },
  { from: "model2", to: "core", direction: "inbound" },
  { from: "risk", to: "core", direction: "inbound" },
  { from: "alpha", to: "core", direction: "inbound" },
  
  // Signals → Processing
  { from: "signal1", to: "model1", direction: "inbound" },
  { from: "signal2", to: "risk", direction: "inbound" },
  { from: "signal3", to: "model2", direction: "inbound" },
  
  // Core → Execution (Outbound deployment)
  { from: "core", to: "exec1", direction: "outbound" },
  { from: "core", to: "exec2", direction: "outbound" },
  { from: "core", to: "exec3", direction: "outbound" },
  
  // Cross-connections (Models ↔ Risk)
  { from: "model1", to: "risk", direction: "internal" },
  { from: "model2", to: "risk", direction: "internal" },
  { from: "alpha", to: "model1", direction: "internal" },
  { from: "alpha", to: "model2", direction: "internal" },
];

export const SystemDiagram = () => {
  const getNodePosition = (id: string) => {
    const node = systemNodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  const getNodeOpacity = (layer: string) => {
    switch (layer) {
      case "core": return 1;
      case "processing": return 0.85;
      case "execution": return 0.7;
      case "signal": return 0.6;
      case "data": return 0.5;
      default: return 0.5;
    }
  };

  const getLineOpacity = (direction: string) => {
    switch (direction) {
      case "inbound": return 0.15;
      case "outbound": return 0.2;
      case "internal": return 0.08;
      default: return 0.1;
    }
  };

  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto">
      {/* Subtle ambient glow around core */}
      <div className="absolute inset-[25%] bg-foreground/[0.04] rounded-full blur-3xl" />
      <div className="absolute inset-[35%] bg-foreground/[0.03] rounded-full blur-2xl" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          {/* Pipeline gradient - subtle directional flow */}
          <linearGradient id="pipelineInbound" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.02" />
            <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.25" />
          </linearGradient>
          
          <linearGradient id="pipelineOutbound" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.25" />
            <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.02" />
          </linearGradient>
          
          {/* Core glow - strongest */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
            <stop offset="40%" stopColor="hsl(var(--foreground))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>
          
          {/* Processing layer glow */}
          <radialGradient id="processingGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.7" />
            <stop offset="60%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>
          
          {/* Data layer glow - subtle */}
          <radialGradient id="dataGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.4" />
            <stop offset="70%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>

          {/* Pulse glow for active signals */}
          <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Pipeline connections - rendered first (behind nodes) */}
        {pipelines.map((pipe, i) => {
          const from = getNodePosition(pipe.from);
          const to = getNodePosition(pipe.to);
          const opacity = getLineOpacity(pipe.direction);
          
          return (
            <motion.line
              key={`pipe-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="hsl(var(--foreground))"
              strokeOpacity={opacity}
              strokeWidth="0.3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 + i * 0.04, ease: "easeOut" }}
            />
          );
        })}

        {/* System nodes */}
        {systemNodes.map((node, i) => {
          const glowId = node.layer === "core" ? "coreGlow" : 
                         node.layer === "processing" ? "processingGlow" : "dataGlow";
          const opacity = getNodeOpacity(node.layer);
          
          return (
            <motion.g key={node.id}>
              {/* Outer glow halo */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 1.8}
                fill={`url(#${glowId})`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: opacity * 0.6, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.03 }}
              />
              
              {/* Node border ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.6}
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="0.3"
                strokeOpacity={opacity * 0.3}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.03 }}
              />
              
              {/* Core node solid */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.35}
                fill="hsl(var(--foreground))"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: opacity, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.03 }}
              />
            </motion.g>
          );
        })}

        {/* Inbound data pulses - flowing toward core */}
        {[
          { from: "data1", to: "model1", delay: 0 },
          { from: "data5", to: "model2", delay: 0.8 },
          { from: "data3", to: "alpha", delay: 1.6 },
          { from: "data7", to: "alpha", delay: 2.4 },
          { from: "model1", to: "core", delay: 1.2 },
          { from: "model2", to: "core", delay: 2.0 },
          { from: "alpha", to: "core", delay: 2.8 },
        ].map((pulse, idx) => {
          const from = getNodePosition(pulse.from);
          const to = getNodePosition(pulse.to);
          return (
            <motion.circle
              key={`pulse-in-${idx}`}
              r="0.8"
              fill="hsl(var(--foreground))"
              filter="url(#pulseGlow)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 0.9, 0],
              }}
              transition={{
                duration: 2.5,
                delay: pulse.delay,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Outbound deployment pulses - flowing from core */}
        {[
          { from: "core", to: "exec1", delay: 3.5 },
          { from: "core", to: "exec2", delay: 4.0 },
          { from: "core", to: "exec3", delay: 4.5 },
        ].map((pulse, idx) => {
          const from = getNodePosition(pulse.from);
          const to = getNodePosition(pulse.to);
          return (
            <motion.circle
              key={`pulse-out-${idx}`}
              r="1"
              fill="hsl(var(--foreground))"
              filter="url(#pulseGlow)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: pulse.delay,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Core breathing animation */}
        <motion.circle
          cx={50}
          cy={50}
          r={5}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="0.2"
          strokeOpacity={0.3}
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};