import { motion } from "framer-motion";

// Neural network node positions - symmetrical brain-like layout
const neuralNodes = [
  // Center core
  { id: "core", x: 50, y: 50, size: 12, layer: "core" },
  
  // Inner ring - 6 nodes, hexagonal symmetry
  { id: "inner1", x: 50, y: 25, size: 6, layer: "inner" },
  { id: "inner2", x: 71.6, y: 37.5, size: 6, layer: "inner" },
  { id: "inner3", x: 71.6, y: 62.5, size: 6, layer: "inner" },
  { id: "inner4", x: 50, y: 75, size: 6, layer: "inner" },
  { id: "inner5", x: 28.4, y: 62.5, size: 6, layer: "inner" },
  { id: "inner6", x: 28.4, y: 37.5, size: 6, layer: "inner" },
  
  // Outer ring - 12 nodes, symmetrical
  { id: "outer1", x: 50, y: 8, size: 4, layer: "outer" },
  { id: "outer2", x: 68, y: 14, size: 3, layer: "outer" },
  { id: "outer3", x: 82, y: 28, size: 4, layer: "outer" },
  { id: "outer4", x: 88, y: 50, size: 3, layer: "outer" },
  { id: "outer5", x: 82, y: 72, size: 4, layer: "outer" },
  { id: "outer6", x: 68, y: 86, size: 3, layer: "outer" },
  { id: "outer7", x: 50, y: 92, size: 4, layer: "outer" },
  { id: "outer8", x: 32, y: 86, size: 3, layer: "outer" },
  { id: "outer9", x: 18, y: 72, size: 4, layer: "outer" },
  { id: "outer10", x: 12, y: 50, size: 3, layer: "outer" },
  { id: "outer11", x: 18, y: 28, size: 4, layer: "outer" },
  { id: "outer12", x: 32, y: 14, size: 3, layer: "outer" },
];

// Connections forming neural pathways
const connections = [
  // Core to inner ring
  { from: "core", to: "inner1" },
  { from: "core", to: "inner2" },
  { from: "core", to: "inner3" },
  { from: "core", to: "inner4" },
  { from: "core", to: "inner5" },
  { from: "core", to: "inner6" },
  
  // Inner ring interconnections
  { from: "inner1", to: "inner2" },
  { from: "inner2", to: "inner3" },
  { from: "inner3", to: "inner4" },
  { from: "inner4", to: "inner5" },
  { from: "inner5", to: "inner6" },
  { from: "inner6", to: "inner1" },
  
  // Inner to outer connections
  { from: "inner1", to: "outer1" },
  { from: "inner1", to: "outer2" },
  { from: "inner1", to: "outer12" },
  { from: "inner2", to: "outer2" },
  { from: "inner2", to: "outer3" },
  { from: "inner2", to: "outer4" },
  { from: "inner3", to: "outer4" },
  { from: "inner3", to: "outer5" },
  { from: "inner3", to: "outer6" },
  { from: "inner4", to: "outer6" },
  { from: "inner4", to: "outer7" },
  { from: "inner4", to: "outer8" },
  { from: "inner5", to: "outer8" },
  { from: "inner5", to: "outer9" },
  { from: "inner5", to: "outer10" },
  { from: "inner6", to: "outer10" },
  { from: "inner6", to: "outer11" },
  { from: "inner6", to: "outer12" },
];

export const SystemDiagram = () => {
  const getNodePosition = (id: string) => {
    const node = neuralNodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto">
      {/* Subtle ambient glow */}
      <div className="absolute inset-[15%] bg-foreground/5 rounded-full blur-3xl" />
      <div className="absolute inset-[30%] bg-foreground/3 rounded-full blur-2xl animate-pulse-glow" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          {/* Subtle gradient for connections */}
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.03" />
            <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.03" />
          </linearGradient>
          
          {/* Radial gradient for nodes */}
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.6" />
            <stop offset="70%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.line
              key={`conn-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#neuralGradient)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.03 }}
            />
          );
        })}

        {/* Neural nodes */}
        {neuralNodes.map((node, i) => (
          <motion.g key={node.id}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 1.5}
              fill={node.layer === "core" ? "url(#coreGlow)" : "url(#nodeGlow)"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
            />
            
            {/* Core node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.4}
              fill="hsl(var(--foreground))"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: node.layer === "core" ? 1 : node.layer === "inner" ? 0.8 : 0.5,
                scale: 1 
              }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.04 }}
            />
          </motion.g>
        ))}

        {/* Animated pulse signals traveling along connections */}
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          const conn = connections[idx * 4];
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.circle
              key={`pulse-${idx}`}
              r="0.8"
              fill="hsl(var(--foreground))"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x, from.x],
                cy: [from.y, to.y, from.y],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                delay: idx * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
        
        {/* Reverse direction pulses for visual interest */}
        {[2, 4, 6].map((idx) => {
          const conn = connections[idx * 3 + 10];
          if (!conn) return null;
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.circle
              key={`pulse-rev-${idx}`}
              r="0.6"
              fill="hsl(var(--foreground))"
              opacity={0.6}
              initial={{ cx: to.x, cy: to.y, opacity: 0 }}
              animate={{
                cx: [to.x, from.x, to.x],
                cy: [to.y, from.y, to.y],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.5,
                delay: 1 + idx * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

    </div>
  );
};
