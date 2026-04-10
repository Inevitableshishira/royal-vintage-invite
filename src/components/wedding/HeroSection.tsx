import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import flowersImg from "@/assets/flowers.png";
import templeImg from "@/assets/temple-gopuram.png";
import { HeroMotifs } from "./DecorativeMotifs";

const ModernAnimatedText = ({ text, delay = 0, fontSize }: { text: string; delay?: number; fontSize: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      filter: "blur(10px)", 
      skewY: 5,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      skewY: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  const textStyle: React.CSSProperties = {
    fontSize: fontSize,
    background: "linear-gradient(135deg, hsl(45 95% 75%), hsl(40 80% 95%), hsl(45 80% 60%))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: 400,
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
    padding: "0.1em 0.05em", // Add padding to prevent font clipping
    margin: "-0.1em -0.05em", // Counteract padding to keep spacing
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center overflow-visible"
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap overflow-visible">
          {Array.from(word).map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={child}
              className="inline-block font-feminine leading-[1.3] overflow-visible"
              style={textStyle}
            >
              {char}
            </motion.span>
          ))}
          {/* Add space between words */}
          {wordIdx < words.length - 1 && (
            <span className="inline-block w-[0.25em]" aria-hidden="true" />
          )}
        </span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-start overflow-hidden px-4 pt-10 md:pt-16 pb-4"
      style={{ zIndex: 0, minHeight: "60vh" }}
    >
      {/* Animated decorative gold motifs */}
      <HeroMotifs />

      {/* ── HERO couple names with Temple background ────────────────── */}
      <div className="relative mt-2 md:mt-4 w-full max-w-2xl">

        {/* Names positioned over the temple peak */}
        <div className="text-center relative py-4 px-4" style={{ zIndex: 2 }}>

          {/* Hashtag with smooth fade in - Increased weight and contrast */}
          <motion.div
            className="font-sans text-[12px] md:text-base tracking-[0.5em] uppercase mb-6 font-bold"
            style={{ 
              color: "hsl(45 95% 90%)",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)"
            }}
            initial={{ opacity: 0, letterSpacing: "1.2em", filter: "blur(8px)" }}
            animate={{ opacity: 1, letterSpacing: "0.5em", filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "circOut" }}
          >
            #PRATHARVAN
          </motion.div>

          <div className="mb-2">
            <ModernAnimatedText 
              text="Pratheeksha" 
              delay={0.4} 
              fontSize="clamp(3.5rem, 12vw, 9rem)"
            />
          </div>

          <motion.p 
            className="font-serif italic my-3"
            style={{ 
              fontSize: "clamp(2rem, 6vw, 5.5rem)", 
              color: "hsl(45 90% 70%)",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)"
            }}
            initial={{ opacity: 0, scale: 0, rotate: -45, filter: "blur(5px)" }} 
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.5 }}>
            &amp;
          </motion.p>

          <div className="mt-2 text-center">
            <ModernAnimatedText 
              text="Atharvan" 
              delay={1.4} 
              fontSize="clamp(4rem, 14vw, 10rem)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
