import { motion } from "framer-motion";

export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(0 0% 100%)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="hsl(0 0% 100%)" stopOpacity="0.12" />
            <stop offset="70%" stopColor="hsl(0 0% 100%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(0 0% 100%)" stopOpacity="0.05" />
            <stop offset="60%" stopColor="hsl(0 0% 100%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(0 0% 100%)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary flowing wave */}
        <motion.path
          d="M-100,400 C200,300 400,500 700,350 C1000,200 1200,450 1540,300"
          stroke="url(#waveGradient1)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M-100,400 C200,300 400,500 700,350 C1000,200 1200,450 1540,300",
              "M-100,380 C200,320 400,480 700,370 C1000,220 1200,430 1540,320",
              "M-100,420 C200,280 400,520 700,330 C1000,180 1200,470 1540,280",
              "M-100,400 C200,300 400,500 700,350 C1000,200 1200,450 1540,300",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeOut" },
            opacity: { duration: 1 },
            d: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Secondary wave - offset */}
        <motion.path
          d="M-100,450 C150,350 350,550 650,400 C950,250 1150,500 1540,350"
          stroke="url(#waveGradient2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M-100,450 C150,350 350,550 650,400 C950,250 1150,500 1540,350",
              "M-100,470 C150,330 350,570 650,380 C950,230 1150,520 1540,330",
              "M-100,430 C150,370 350,530 650,420 C950,270 1150,480 1540,370",
              "M-100,450 C150,350 350,550 650,400 C950,250 1150,500 1540,350",
            ]
          }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeOut", delay: 0.3 },
            opacity: { duration: 1, delay: 0.3 },
            d: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />

        {/* Tertiary wave - subtle */}
        <motion.path
          d="M-100,500 C100,400 300,600 600,450 C900,300 1100,550 1540,400"
          stroke="url(#waveGradient3)"
          strokeWidth="0.75"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M-100,500 C100,400 300,600 600,450 C900,300 1100,550 1540,400",
              "M-100,520 C100,380 300,620 600,430 C900,280 1100,570 1540,380",
              "M-100,480 C100,420 300,580 600,470 C900,320 1100,530 1540,420",
              "M-100,500 C100,400 300,600 600,450 C900,300 1100,550 1540,400",
            ]
          }}
          transition={{
            pathLength: { duration: 3, ease: "easeOut", delay: 0.6 },
            opacity: { duration: 1, delay: 0.6 },
            d: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        />

        {/* Upper accent wave */}
        <motion.path
          d="M-100,250 C300,180 500,320 800,200 C1100,80 1300,280 1540,180"
          stroke="url(#waveGradient3)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.6,
            d: [
              "M-100,250 C300,180 500,320 800,200 C1100,80 1300,280 1540,180",
              "M-100,270 C300,160 500,340 800,180 C1100,60 1300,300 1540,160",
              "M-100,230 C300,200 500,300 800,220 C1100,100 1300,260 1540,200",
              "M-100,250 C300,180 500,320 800,200 C1100,80 1300,280 1540,180",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeOut", delay: 0.8 },
            opacity: { duration: 1, delay: 0.8 },
            d: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }}
        />
      </svg>

      {/* Subtle glow effect behind waves */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};
