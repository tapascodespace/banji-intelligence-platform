import { motion } from "framer-motion";

// Structured quantitative finance network layout
// Research → Signal → Model → Risk → Execution pipeline
const systemNodes = [
  // Central AI Core (Quantora Intelligence Engine)
  { id: "core", x: 50, y: 50, size: 16, layer: "core", label: "Quantora" },
  
  // Processing Layer (Models & Risk)
  { id: "model1", x: 32, y: 40, size: 8, layer: "processing", label: "Alpha" },
  { id: "model2", x: 68, y: 40, size: 8, layer: "processing", label: "Factor" },
  { id: "risk", x: 50, y: 28, size: 7, layer: "processing", label: "Risk" },
  { id: "research", x: 50, y: 72, size: 8, layer: "processing", label: "Research" },
  
  // Market Data Layer (Left cluster - Asset Classes)
  { id: "eq", x: 12, y: 28, size: 5, layer: "data", label: "EQ" },
  { id: "fi", x: 10, y: 44, size: 5, layer: "data", label: "FI" },
  { id: "fx", x: 12, y: 60, size: 5, layer: "data", label: "FX" },
  { id: "cmdty", x: 18, y: 74, size: 4, layer: "data", label: "CMDTY" },
  
  // Market Data Layer (Right cluster - Data Sources)
  { id: "tick", x: 88, y: 28, size: 5, layer: "data", label: "Tick" },
  { id: "alt", x: 90, y: 44, size: 5, layer: "data", label: "Alt" },
  { id: "macro", x: 88, y: 60, size: 5, layer: "data", label: "Macro" },
  { id: "sent", x: 82, y: 74, size: 4, layer: "data", label: "Sent" },
  
  // Execution Layer (Bottom)
  { id: "oms", x: 32, y: 88, size: 5, layer: "execution", label: "OMS" },
  { id: "ems", x: 50, y: 92, size: 5, layer: "execution", label: "EMS" },
  { id: "tca", x: 68, y: 88, size: 5, layer: "execution", label: "TCA" },
  
  // Signal Layer (Top)
  { id: "sig1", x: 32, y: 12, size: 4, layer: "signal", label: "Vol" },
  { id: "sig2", x: 50, y: 8, size: 4, layer: "signal", label: "Mom" },
  { id: "sig3", x: 68, y: 12, size: 4, layer: "signal", label: "Val" },
];

// Directional connections representing data flow pipelines
const pipelines = [
  // Data → Processing (Inbound flow)
  { from: "eq", to: "model1", direction: "inbound" },
  { from: "fi", to: "model1", direction: "inbound" },
  { from: "fx", to: "research", direction: "inbound" },
  { from: "cmdty", to: "research", direction: "inbound" },
  { from: "tick", to: "model2", direction: "inbound" },
  { from: "alt", to: "model2", direction: "inbound" },
  { from: "macro", to: "research", direction: "inbound" },
  { from: "sent", to: "research", direction: "inbound" },
  
  // Processing → Core (Convergence)
  { from: "model1", to: "core", direction: "inbound" },
  { from: "model2", to: "core", direction: "inbound" },
  { from: "risk", to: "core", direction: "inbound" },
  { from: "research", to: "core", direction: "inbound" },
  
  // Signals → Risk/Models
  { from: "sig1", to: "risk", direction: "inbound" },
  { from: "sig2", to: "model1", direction: "inbound" },
  { from: "sig3", to: "model2", direction: "inbound" },
  
  // Core → Execution (Outbound deployment)
  { from: "core", to: "oms", direction: "outbound" },
  { from: "core", to: "ems", direction: "outbound" },
  { from: "core", to: "tca", direction: "outbound" },
  
  // Cross-connections (Internal)
  { from: "model1", to: "risk", direction: "internal" },
  { from: "model2", to: "risk", direction: "internal" },
  { from: "research", to: "model1", direction: "internal" },
  { from: "research", to: "model2", direction: "internal" },
];

export const SystemDiagram = () => {
  const getNodePosition = (id: string) => {
    const node = systemNodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  const getNodeOpacity = (layer: string) => {
    switch (layer) {
      case "core": return 1;
      case "processing": return 0.9;
      case "execution": return 0.75;
      case "signal": return 0.65;
      case "data": return 0.55;
      default: return 0.5;
    }
  };

  const getLineOpacity = (direction: string) => {
    switch (direction) {
      case "inbound": return 0.12;
      case "outbound": return 0.18;
      case "internal": return 0.06;
      default: return 0.08;
    }
  };

  const getLabelOffset = (layer: string, size: number) => {
    if (layer === "core") return size * 1.1;
    if (layer === "processing") return size * 0.95;
    return size * 0.85;
  };

  const getFontSize = (layer: string) => {
    switch (layer) {
      case "core": return "3.2px";
      case "processing": return "2.4px";
      case "execution": return "2px";
      default: return "1.8px";
    }
  };

  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto">
      {/* Subtle ambient glow around core */}
      <div className="absolute inset-[25%] bg-foreground/[0.03] rounded-full blur-3xl" />
      <div className="absolute inset-[35%] bg-foreground/[0.02] rounded-full blur-2xl" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          {/* Core glow - strongest */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
            <stop offset="40%" stopColor="hsl(var(--foreground))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>
          
          {/* Processing layer glow */}
          <radialGradient id="processingGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.65" />
            <stop offset="60%" stopColor="hsl(var(--foreground))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>
          
          {/* Data layer glow - subtle */}
          <radialGradient id="dataGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.35" />
            <stop offset="70%" stopColor="hsl(var(--foreground))" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>

          {/* Pulse glow for active signals */}
          <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Pipeline connections */}
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
              strokeWidth="0.25"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 + i * 0.03, ease: "easeOut" }}
            />
          );
        })}

        {/* System nodes with labels */}
        {systemNodes.map((node, i) => {
          const glowId = node.layer === "core" ? "coreGlow" : 
                         node.layer === "processing" ? "processingGlow" : "dataGlow";
          const opacity = getNodeOpacity(node.layer);
          const labelOffset = getLabelOffset(node.layer, node.size);
          const fontSize = getFontSize(node.layer);
          
          return (
            <motion.g key={node.id}>
              {/* Outer glow halo */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 1.6}
                fill={`url(#${glowId})`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: opacity * 0.5, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.025 }}
              />
              
              {/* Node border ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.55}
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="0.2"
                strokeOpacity={opacity * 0.25}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.025 }}
              />
              
              {/* Core node solid */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.32}
                fill="hsl(var(--foreground))"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: opacity, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.025 }}
              />
              
              {/* Node label */}
              <motion.text
                x={node.x}
                y={node.y + labelOffset}
                textAnchor="middle"
                fill="hsl(var(--foreground))"
                fontSize={fontSize}
                fontFamily="Inter, -apple-system, sans-serif"
                fontWeight={node.layer === "core" ? "600" : "500"}
                letterSpacing="0.03em"
                initial={{ opacity: 0, y: node.y + labelOffset + 2 }}
                animate={{ opacity: opacity * 0.7, y: node.y + labelOffset }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.025 }}
              >
                {node.label}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Inbound data pulses - Market Data → Core */}
        {[
          { from: "eq", to: "model1", delay: 0 },
          { from: "tick", to: "model2", delay: 0.7 },
          { from: "fx", to: "research", delay: 1.4 },
          { from: "alt", to: "model2", delay: 2.1 },
          { from: "model1", to: "core", delay: 1.0 },
          { from: "model2", to: "core", delay: 1.8 },
          { from: "research", to: "core", delay: 2.5 },
          { from: "risk", to: "core", delay: 3.0 },
        ].map((pulse, idx) => {
          const from = getNodePosition(pulse.from);
          const to = getNodePosition(pulse.to);
          return (
            <motion.circle
              key={`pulse-in-${idx}`}
              r="0.7"
              fill="hsl(var(--foreground))"
              filter="url(#pulseGlow)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 0.85, 0],
              }}
              transition={{
                duration: 2.2,
                delay: pulse.delay,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Outbound execution pulses - Core → EMS/OMS/TCA */}
        {[
          { from: "core", to: "oms", delay: 4.0 },
          { from: "core", to: "ems", delay: 4.4 },
          { from: "core", to: "tca", delay: 4.8 },
        ].map((pulse, idx) => {
          const from = getNodePosition(pulse.from);
          const to = getNodePosition(pulse.to);
          return (
            <motion.circle
              key={`pulse-out-${idx}`}
              r="0.9"
              fill="hsl(var(--foreground))"
              filter="url(#pulseGlow)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                delay: pulse.delay,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Core breathing animation */}
        <motion.circle
          cx={50}
          cy={50}
          r={6}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="0.15"
          strokeOpacity={0.2}
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.08, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};