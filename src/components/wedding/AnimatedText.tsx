import { motion } from "framer-motion";

interface ModernAnimatedTextProps {
  text: string;
  delay?: number;
  fontSize: string;
  className?: string;
  animateOnLoad?: boolean;
}

export const ModernAnimatedText = ({ 
  text, 
  delay = 0, 
  fontSize, 
  className = "",
  animateOnLoad = false 
}: ModernAnimatedTextProps) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(12px)", 
      scale: 0.8,
      skewX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      scale: 1,
      skewX: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 150 
      }
    }
  };

  // Reverting to character-level styles for maximum Framer Motion compatibility,
  // but with precision spacing to eliminate rendering seams.
  const charStyle: React.CSSProperties = {
    display: "inline-block",
    fontSize: fontSize,
    background: "linear-gradient(135deg, #FFD700, #FDB931, #E8A122, #FDB931, #FFD700)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: 400,
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    marginTop: "-0.2em",
    marginBottom: "-0.2em",
    // Remove horizontal padding/margin to ensure characters touch perfectly, fixing the 'broken line' glitch
    paddingLeft: "0px", 
    paddingRight: "0px",
    marginLeft: "0px",
    marginRight: "0px",
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={animateOnLoad ? "visible" : undefined}
      whileInView={!animateOnLoad ? "visible" : undefined}
      viewport={{ once: true }}
      className={`flex flex-wrap justify-center overflow-visible ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span 
          key={wordIdx} 
          className="inline-block whitespace-nowrap overflow-visible font-feminine leading-[1.2] px-[0.1em]"
        >
          {Array.from(word).map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={child}
              className="overflow-visible"
              style={charStyle}
            >
              {char}
            </motion.span>
          ))}
          {wordIdx < words.length - 1 && (
            <span className="inline-block w-[0.25em]" aria-hidden="true" />
          )}
        </span>
      ))}
    </motion.div>
  );
};
