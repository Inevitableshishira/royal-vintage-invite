import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import flowersImg from "@/assets/flowers.png";
import templeImg from "@/assets/temple-gopuram.png";
import { HeroMotifs } from "./DecorativeMotifs";

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
        <motion.div className="text-center relative py-4 px-4" style={{ zIndex: 2 }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}>

          <motion.h1
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 8rem)", 
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 400,
              willChange: "transform, opacity"
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}>
            Pratheeksha
          </motion.h1>

          <motion.p className="font-serif italic my-1 md:my-2"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "hsl(45 90% 70%)" }}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 200 }}>
            &amp;
          </motion.p>

          <motion.h1
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(4rem, 14vw, 9rem)",
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 400,
              willChange: "transform, opacity"
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 1.2 }}
          >
            Atharvan
          </motion.h1>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
