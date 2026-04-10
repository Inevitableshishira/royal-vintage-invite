import { motion } from "framer-motion";
import { HeroMotifs } from "./DecorativeMotifs";
import { ModernAnimatedText } from "./AnimatedText";

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
              animateOnLoad={true}
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
              animateOnLoad={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
