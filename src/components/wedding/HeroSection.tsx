import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import flowersImg from "@/assets/flowers.png";
import templeImg from "@/assets/temple-gopuram.png";
import GoldenParticles from "./GoldenParticles";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-24"
      style={{ background: "hsl(270 30% 12%)", zIndex: 0 }}
    >
      {/* ── Toran garland at top ─────────────────────────────────────── */}
      <motion.div
        className="absolute top-0 inset-x-0 flex justify-center items-start pointer-events-none"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {Array.from({ length: 14 }).map((_, i) => {
          const droop = Math.sin((i / 13) * Math.PI) * 18;
          const isCenter = Math.abs(i - 6) < 3;
          const flower = ["🌺", "🌸", "🌼", "🌺"][i % 4];
          return (
            <motion.div key={i} className="flex flex-col items-center"
              style={{ paddingTop: `${droop}px`, willChange: "transform" }}
              animate={{ y: [0, isCenter ? -2 : -1, 0] }}
              transition={{ duration: 3 + (i % 2) * 0.5, delay: i * 0.08, repeat: Infinity, ease: "easeInOut" }}>
              <span style={{ fontSize: isCenter ? "16px" : "11px", opacity: 0.6 }}>{flower}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Corner flowers (one per side only) ──────────────────────── */}
      <motion.img src={flowersImg} alt="" aria-hidden
        className="absolute top-0 right-0 w-32 md:w-48 opacity-30 rotate-45 pointer-events-none"
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.5 }} />
      <motion.img src={flowersImg} alt="" aria-hidden
        className="absolute bottom-0 left-0 w-32 md:w-48 opacity-30 -rotate-45 scale-x-[-1] pointer-events-none"
        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.5 }} />

      {/* ── Wedding Postage Header ──────────────────────────────────── */}
      <motion.img src={weddingPostageImg} alt="Wedding Postage" aria-hidden
        className="w-40 md:w-52 relative z-10 pointer-events-none"
        style={{ 
          opacity: 0.9, 
          filter: "drop-shadow(0 0 20px hsl(45 70% 35% / 0.3))",
          willChange: "transform, opacity"
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.0 }}
        loading="eager"
        decoding="async"
      />

      {/* ── HERO couple names with Temple background ────────────────── */}
      <div className="relative mt-6 md:mt-10 w-full max-w-2xl">

        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
          style={{ zIndex: 0, margin: "-20px -40px", willChange: "transform, opacity" }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={templeImg} alt="" aria-hidden
            className="w-full h-full object-contain"
            style={{ filter: "brightness(0.4) contrast(1.2)" }}
            loading="eager"
            decoding="async" />
          {/* Vignette to blend edges */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, hsl(270 30% 12% / 0.9) 100%)" }} />
        </motion.div>

        {/* Golden particles behind text */}
        <div className="absolute -inset-8" style={{ zIndex: 1 }}>
          <GoldenParticles />
        </div>

        {/* Names */}
        <motion.div className="text-center relative py-8 px-4" style={{ zIndex: 2 }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}>

          {/* OM blessing */}
          <motion.p className="font-sans text-sm mb-3"
            style={{ color: "hsl(45 70% 75% / 0.9)", letterSpacing: "0.5em" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            ॐ
          </motion.p>

          <motion.h1
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 6.5rem)", // Slightly smaller for longer name
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 4px 12px rgba(0,0,0,0.45)", // Lighter than filter: drop-shadow
              fontWeight: 400,
              willChange: "transform, opacity"
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}>
            Pratheeksha
          </motion.h1>

          <motion.p className="font-serif italic my-2 md:my-3"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", color: "hsl(45 70% 75%)", textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 200 }}>
            &amp;
          </motion.p>

          <motion.h1
            className="font-serif text-gold-shimmer"
            style={{
              fontSize: "clamp(3rem, 12vw, 8rem)",
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 6px 16px rgba(0,0,0,0.5)", // Massive performance win over filter: drop-shadow
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

      {/* ── #PRATHARVAN hashtag badge ──────────────────────────────── */}
      <motion.div className="mt-6 md:mt-8 relative z-10"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}>
        <div className="relative inline-block px-8 py-3 border border-gold/40 rounded-full">
          <motion.div className="absolute inset-0 rounded-full gold-glow opacity-40"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }} />
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-gold relative z-10">
            #PRATHARVAN
          </p>
        </div>
      </motion.div>

      {/* ── Date & Venue ─────────────────────────────────────────────── */}
      <motion.div className="text-center mt-8 md:mt-10 relative z-10"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.0 }}>
        <p className="font-serif text-lg md:text-2xl text-cream">Friday, May 8, 2026</p>
        <p className="font-sans text-xs md:text-sm mt-3 tracking-[0.2em] uppercase opacity-70 px-4"
          style={{ color: "hsl(160 40% 65%)" }}>
          Khandya Planters' Club · Chikkamagaluru
        </p>
      </motion.div>

      {/* ── Blessings ────────────────────────────────────────────────── */}
      <motion.div className="text-center mt-10 md:mt-14 max-w-xl relative z-10"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.4 }}>
        <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-55"
          style={{ color: "hsl(45 60% 75%)" }}>
          With the blessings of
        </p>
        <p className="font-serif text-sm md:text-base text-cream leading-relaxed mt-3 opacity-80">
          Smt. Ramamani &amp; Shri Rajegowda
        </p>
        <p className="font-serif text-sm md:text-base text-cream leading-relaxed mt-1 opacity-80">
          Smt. Lekha &amp; Shri Jagadeesh Hegde
        </p>
      </motion.div>

      {/* ── Bottom gradient fade into next section ───────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(0deg, hsl(270 30% 15%), transparent)", zIndex: 5 }} />
    </section>
  );
};

export default HeroSection;
