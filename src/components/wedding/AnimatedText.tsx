import { motion } from "framer-motion";
import { useId } from "react";

interface ModernAnimatedTextProps {
  text: string;
  delay?: number;
  fontSize: string;
  className?: string;
  animateOnLoad?: boolean;
  gradientColors?: string[];
  fontFamily?: string;
}

/**
 * ModernAnimatedText - SVG-Overlay version.
 * - Optimized with Precision Typography (Framer/Designer style tracking).
 */
export const ModernAnimatedText = ({ 
  text, 
  delay = 0, 
  fontSize, 
  className = "",
  animateOnLoad = false,
  gradientColors = ["#FFD700", "#FFF8DC", "#FFD700"],
  fontFamily = "var(--font-feminine)"
}: ModernAnimatedTextProps) => {
  const words = text.split(" ");
  const gradId = useId().replace(/:/g, "-");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: "0.2em",
      filter: "blur(8px)", 
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: "0em", 
      filter: "blur(0px)", 
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 150 
      }
    }
  };

  return (
    <div 
      className={`flex flex-wrap justify-center items-center gap-x-[0.25em] overflow-visible ${className}`} 
      style={{ fontSize, letterSpacing: "-0.05em" }}
    >
      {words.map((word, wordIdx) => (
        <motion.div
          key={wordIdx}
          variants={container}
          initial="hidden"
          animate={animateOnLoad ? "visible" : undefined}
          whileInView={!animateOnLoad ? "visible" : undefined}
          viewport={{ once: true }}
          className="relative inline-block overflow-visible"
        >
          {/* 
            Invisible shadow word:
            Using -0.05em letter-spacing for the high-end compressed look.
          */}
          <span 
            className="invisible select-none leading-[1.1] whitespace-nowrap" 
            style={{ letterSpacing: "-0.01em", fontFamily }}
          >
            {word}
          </span>

          <svg 
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            style={{ 
              filter: "none" 
            }}
          >
            <defs>
              <linearGradient id={`${gradId}-${wordIdx}`} x1="0%" y1="0%" x2="100%" y2="20%">
                {gradientColors.map((color, i) => (
                  <stop 
                    key={i} 
                    offset={`${(i / (gradientColors.length - 1)) * 100}%`} 
                    stopColor={color} 
                  />
                ))}
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-transparent"
              style={{ 
                fontSize: "1em", 
                fontFamily,
                fill: `url(#${gradId}-${wordIdx})`,
                stroke: "rgba(0,0,0,0.6)",
                strokeWidth: "0.4px",
                letterSpacing: "-0.01em",
                fontWeight: 900
              }}
            >
              {Array.from(word).map((char, charIdx) => (
                <motion.tspan
                  key={charIdx}
                  variants={child}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.tspan>
              ))}
            </text>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
