import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import flowersImg from "@/assets/flowers.png";
import templeImg from "@/assets/temple-gopuram.png";
import { HeroMotifs } from "./DecorativeMotifs";

const HeroSection = () => {
  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

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

          {/* Hashtag with smooth fade in */}
          <motion.div
            className="font-sans text-[12px] md:text-base tracking-[0.5em] uppercase text-cream mb-6 opacity-95 font-bold text-shadow-premium"
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 0.95, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            #PRATHARVAN
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              custom={0} variants={nameVariants} initial="hidden" animate="visible"
              className="font-feminine leading-[1.1] py-4"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 9rem)", 
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 400,
              }}>
              Pratheeksha
            </motion.h1>
          </div>

          <motion.p 
            className="font-serif italic my-2"
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", color: "hsl(45 90% 70%)" }}
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}>
            &amp;
          </motion.p>

          <div className="overflow-hidden mt-2">
            <motion.h1
              custom={2} variants={nameVariants} initial="hidden" animate="visible"
              className="font-feminine leading-[1.1] py-4"
              style={{
                fontSize: "clamp(4rem, 14vw, 10rem)",
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 400,
              }}>
              Atharvan
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
