import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroMotifs } from "./DecorativeMotifs";
import { ModernAnimatedText } from "./AnimatedText";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: motifs drift up slightly slower than scroll
  const motifY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  // Names scale down gently as you scroll past
  const namesScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const namesOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start overflow-hidden px-5 md:px-4 pt-10 md:pt-24 pb-4"
      style={{ zIndex: 0, minHeight: "75vh" }}
    >
      {/* Hand-drawn style decorative motifs — parallax layer */}
      <motion.div style={{ y: motifY }}>
        <HeroMotifs />
      </motion.div>

      <motion.div
        className="relative mt-2 md:mt-4 w-full max-w-4xl"
        style={{ scale: namesScale, opacity: namesOpacity }}
      >
        <div className="text-center relative py-10 px-6 md:px-12 backdrop-blur-[6px] bg-black/10 rounded-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" style={{ zIndex: 2 }}>

          {/* ── Mangala Shloka ── */}
          <motion.div
            className="mb-10 md:mb-16 select-text"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="font-traditional leading-[2.2] md:leading-[2.6] text-center"
              style={{
                fontFamily: 'var(--font-traditional)',
                fontSize: "clamp(0.75rem, 1.4vw, 1.05rem)",
                lineHeight: "1.8",
                letterSpacing: "0.05em",
                color: "hsl(35, 30%, 45%)", /* Deep Sandalwood neutral */
              }}
            >
              ಕಲ್ಯಾಣದ್ಭುತ ಗಾತ್ರಾಯ ಕಾಮಿತಾರ್ಥ ಪ್ರದಾಯಿನೆ |<br />
              ಶ್ರೀಮದ್ ವೆಂಕಟ ನಾಥಾಯ ಶ್ರೀನಿವಾಸಾಯ ಮಂಗಳಂ ||
            </motion.p>
            <motion.div
              className="mx-auto mt-6"
              style={{
                width: "120px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #FFFFFF, #FDF5E6, #FFFFFF, transparent)",
                opacity: 0.5,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Hashtag - Animated entrance + pulsing glow */}
          <motion.div
            className="text-label-caps mb-10 md:mb-14 font-black text-rosegold-gradient"
            initial={{ opacity: 0, letterSpacing: "0.1em", filter: "blur(4px)" }}
            animate={{ opacity: 1, letterSpacing: "0.6em", filter: "blur(0px)" }}
            transition={{ duration: 2.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
            style={{ 
                background: "#FFFFFF",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "none"
              }}
              animate={{
                filter: "none",
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              #PRATHARVAN
            </motion.span>
          </motion.div>

          {/* The Hero Names - Aggressive Scaling */}
          <div className="mb-6">
            <ModernAnimatedText 
              text="Pratheeksha" 
              delay={0.4} 
              fontSize="clamp(3.5rem, 10vw, 7rem)"
              animateOnLoad={true}
              className="tracking-normal"
              fontFamily="var(--font-cinzel)"
              gradientColors={["#FFFFFF", "#FDF5E6", "#FFFFFF"]}
            />
          </div>

          <div className="relative z-10 -my-4 md:-my-6">
            <motion.p 
            className="my-2 md:my-4"
            style={{ 
              fontSize: "clamp(1rem, 4vw, 2.5rem)", 
              fontFamily: 'var(--font-cinzel)',
              color: "#FFFFFF", 
              textShadow: "none",
              fontWeight: 700
            }}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring" }}
            >
              &
            </motion.p>
          </div>

          <div className="relative">
            <ModernAnimatedText 
              text="Atharvan" 
              delay={1.6} 
              fontSize="clamp(4.5rem, 12vw, 9rem)"
              animateOnLoad={true}
              className="tracking-normal"
              fontFamily="var(--font-cinzel)"
              gradientColors={["#FFFFFF", "#FDF5E6", "#FFFFFF"]}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
