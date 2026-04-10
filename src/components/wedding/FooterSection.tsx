import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";
import lanternImg from "@/assets/lantern.png";

// ─── Animated gold sparkle dot ────────────────────────────────────────────────
const GoldDot = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: 2, height: 2, background: `hsl(45 70% 65%)` }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
    transition={{ duration: 3 + Math.random() * 2, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

// ─── Om symbol SVG ────────────────────────────────────────────────────────────
const OmSymbol = ({ opacity = 0.06, size = 120 }: { opacity?: number; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }} aria-hidden>
    <text x="50" y="72" fontSize="72" textAnchor="middle"
      fill="hsl(45 70% 55%)" fontFamily="serif" fontWeight="bold">
      ಓಂ
    </text>
  </svg>
);

// ─── Gold divider ornament ────────────────────────────────────────────────────
const GoldDivider = ({ label }: { label?: string }) => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="flex-1 h-px max-w-[100px]" style={{ background: "linear-gradient(90deg, transparent, hsl(45 70% 55% / 0.4))" }} />
    <span className="font-sans text-[9px] tracking-[0.5em] uppercase" style={{ color: "hsl(45 70% 55% / 0.5)" }}>
      {label ?? "✦"}
    </span>
    <div className="flex-1 h-px max-w-[100px]" style={{ background: "linear-gradient(90deg, hsl(45 70% 55% / 0.4),transparent)" }} />
  </div>
);

// ─── Gold card wrapper (Stitch "Royal Mandap" inspired) ───────────────────────
const GoldCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`relative ${className}`}
    style={{
      background: "linear-gradient(145deg, hsl(215 45% 17%), hsl(215 40% 14%))",
      border: "1px solid hsl(45 70% 55% / 0.22)",
      boxShadow: "0 0 40px hsl(45 70% 55% / 0.06), inset 0 0 30px hsl(45 70% 55% / 0.03)",
    }}
  >
    {/* Corner flowers */}
    <img src={flowersImg} alt="" aria-hidden className="absolute -top-2 -left-2 w-12 opacity-25 -rotate-12"
      style={{ filter: "drop-shadow(0 0 4px hsl(45 70% 55% / 0.3))" }} />
    <img src={flowersImg} alt="" aria-hidden className="absolute -bottom-2 -right-2 w-12 opacity-25 rotate-12 scale-x-[-1]"
      style={{ filter: "drop-shadow(0 0 4px hsl(45 70% 55% / 0.3))" }} />
    {children}
  </div>
);

// ── Sacred Blessing Card (replaces RSVP) ────────────────────────────────
const BlessingCard = () => (
  <GoldCard className="px-6 py-8 md:px-8">
    {/* Om watermark */}
    <div className="absolute top-4 right-4 opacity-[0.06]">
      <OmSymbol size={60} opacity={1} />
    </div>

    <p className="font-sans text-[12px] md:text-sm tracking-[0.5em] uppercase text-center mb-4 text-shadow-premium font-bold"
      style={{ color: "hsl(var(--cream))" }}>
      ✦ &nbsp; Sacred Blessings &nbsp; ✦
    </p>

    {/* Sanskrit shloka */}
    <motion.p
      className="font-serif text-center text-lg md:text-xl italic mb-4 leading-relaxed"
      style={{ color: "hsl(45 70% 65%)" }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 5, repeat: Infinity }}>
      "ಸರ್ವಮಂಗಲ ಮಾಂಗಲ್ಯೇ ಶಿವೇ ಸರ್ವಾರ್ಥ ಸಾಧಕೇ"
    </motion.p>
    <p className="font-sans text-[11px] md:text-[12px] tracking-widest text-center mb-6"
      style={{ color: "hsl(45 60% 70%)" }}>
      May all that is auspicious bless this union
    </p>

    {/* Lotus divider */}
    <div className="flex justify-center gap-2 mb-5">
      {["🩷","✦","🩷","✦","🩷"].map((s, i) => (
        <span key={i} style={{
          fontSize: s === "✦" ? "8px" : "15px",
          color: i % 2 === 0 ? "hsl(330 50% 65% / 0.5)" : "hsl(45 70% 55% / 0.3)",
          opacity: 0.8,
        }}>{s}</span>
      ))}
    </div>

    {/* Heartfelt message */}
    <p className="font-serif text-sm md:text-base text-center leading-relaxed"
      style={{ color: "hsl(40 35% 82% / 0.75)" }}>
      With hearts full of joy, we invite you to witness&#10;the sacred union of our beloved children&#10;and share in the blessings of this divine occasion.
    </p>

    {/* Family names */}
    <div className="mt-5 pt-4" style={{ borderTop: "1px solid hsl(45 70% 55% / 0.12)" }}>
      <p className="font-sans text-[12px] md:text-sm tracking-[0.4em] uppercase text-center mb-2 font-bold text-shadow-premium"
        style={{ color: "hsl(var(--cream))" }}>With blessings of</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div>
          <p className="font-serif text-[13px] md:text-[14px] text-center" style={{ color: "hsl(var(--gold))" }}>
            Smt. Ramamani &amp; Shri Rajegowda
          </p>
          <p className="font-sans text-[11px] text-center mt-1 uppercase tracking-widest text-cream font-bold text-shadow-premium"
             style={{ opacity: 0.9 }}>
            Chittemakki &amp; Karagunda Families
          </p>
        </div>
        <div>
          <p className="font-serif text-[13px] md:text-[14px] text-center" style={{ color: "hsl(var(--gold))" }}>
            Smt. Lekha &amp; Shri Jagadeesh Hegde
          </p>
          <p className="font-sans text-[11px] text-center mt-1 uppercase tracking-widest text-cream font-bold text-shadow-premium"
             style={{ opacity: 0.9 }}>
            Kalkuli &amp; Nandipura Families
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gold/5 flex flex-col items-center">
        <p className="font-sans text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-center mb-3 text-cream font-bold text-shadow-premium" style={{ opacity: 0.85 }}>With Best Compliments From</p>
        <p className="font-serif text-[12px] md:text-[13px] leading-relaxed text-center px-4 max-w-[320px] md:max-w-none text-cream/90 text-shadow-premium" 
           style={{ fontStyle: "italic" }}>
          Prajwal, Venkatesh, Saraswathi, Anushruthi, Arjun, Ahana, Ananya, Rakshith, Prema Nagesh, and children.
        </p>
      </div>
    </div>
  </GoldCard>
);

// ─── Main FooterSection ───────────────────────────────────────────────────────
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
      y: 20, 
      filter: "blur(8px)", 
      skewY: 2 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      skewY: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
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
    padding: "0.15em 0.05em",
    margin: "-0.15em -0.05em",
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center overflow-visible"
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap overflow-visible">
          {Array.from(word).map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={child}
              className="inline-block font-feminine leading-[1.4] overflow-visible"
              style={textStyle}
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

const FooterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mandalaRot1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mandalaRot2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const starsOp     = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Pre-generate star positions so they're stable
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: (i * 137.5 + 30) % 100,
    y: (i * 97.3 + 10) % 100,
    s: 0.5 + (i % 5) * 0.4,
    o: 0.15 + (i % 7) * 0.08,
  }));

  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    x: (i * 73 + 15) % 95, y: (i * 59 + 5) % 95, delay: i * 0.3,
  }));

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ zIndex: 0 }}>

      {/* ── Starfield ──────────────────────────────────────────────────────── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: starsOp }}>
        {stars.map((s, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, background: `hsl(45 70% 75% / ${s.o})` }} />
        ))}
      </motion.div>

      {/* Animated sparkle dots */}
      {sparkles.map((sp, i) => <GoldDot key={i} x={sp.x} y={sp.y} delay={sp.delay} />)}

      {/* ── Large mandala watermarks ────────────────────────────────────────── */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-24 -right-24 w-72 md:w-[28rem] opacity-[0.035] pointer-events-none"
        style={{ rotate: mandalaRot1 }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-24 -left-24 w-56 md:w-80 opacity-[0.03] pointer-events-none"
        style={{ rotate: mandalaRot2 }} />

      {/* Center Om watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
        <OmSymbol size={360} opacity={1} />
      </div>

      <div className="relative z-10 px-4 py-16 md:py-24 max-w-lg mx-auto flex flex-col gap-8">

        {/* ── 1. COUPLE NAMES HEADER ──────────────────────────────────────── */}
        <div className="text-center">

          <motion.p className="font-sans text-[10px] tracking-[0.6em] uppercase mb-4 font-bold"
            style={{ 
              color: "#0d2b21",
              textShadow: "0 1px 2px rgba(255,255,255,0.3)" 
            }}
            initial={{ opacity: 0, letterSpacing: "1.2em", filter: "blur(6px)" }}
            whileInView={{ opacity: 1, letterSpacing: "0.6em", filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}>
            ✦ &nbsp; ಶುಭ ವಿವಾಹ &nbsp; ✦
          </motion.p>

          <div className="py-2">
            <ModernAnimatedText 
              text="Pratheeksha & Atharvan" 
              delay={0.3} 
              fontSize="var(--fluid-h2)"
            />
          </div>
          
          <motion.p 
            className="font-serif text-fluid-body mt-3 font-bold" style={{ color: "#0d2b21" }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 1, duration: 0.8 }}>
            Friday, May 8, 2026
          </motion.p>
          
          <motion.p 
            className="font-sans text-[10px] tracking-[0.3em] uppercase mt-2 px-4 font-bold" style={{ color: "#0d2b21" }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 1.3, duration: 1 }}>
            Khandya Planters' Club · Chikkamagaluru
          </motion.p>

          <GoldDivider label="#PRATHARVAN" />
        </div>

        {/* ── 2. BLESSING CARD ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
          <BlessingCard />
        </motion.div>

        {/* ── 3. VENUE CARD ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }}>
          <GoldCard className="px-6 py-8">
            <div className="absolute top-3 left-3 opacity-[0.05]">
              <OmSymbol size={50} opacity={1} />
            </div>
            <p className="font-sans text-[12px] md:text-sm tracking-[0.5em] uppercase text-center mb-4 text-shadow-premium font-bold"
              style={{ color: "hsl(var(--cream))" }}>✦ &nbsp; The Venue &nbsp; ✦</p>

            <div className="flex flex-col items-center text-center gap-3">
              <motion.span className="text-4xl"
                animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>📍</motion.span>
              <h4 className="font-serif text-3xl md:text-4xl text-gold">Khandya Planters' Club</h4>

              {/* Lotus row */}
              <div className="flex gap-2 my-1">
                {["🪷", "✦", "🪷", "✦", "🪷"].map((s, i) => (
                  <span key={i} className="text-base"
                    style={{ color: i % 2 === 0 ? "hsl(330 50% 65% / 0.5)" : "hsl(45 70% 55% / 0.3)", fontSize: i % 2 === 1 ? "8px" : "14px" }}>
                    {s}
                  </span>
                ))}
              </div>

              <p className="font-sans text-sm md:text-base leading-relaxed font-bold text-shadow-premium" style={{ color: "hsl(var(--cream))" }}>
                Sangameshwarpet, Chikkamagaluru<br />Karnataka, India
              </p>
              <a href="https://maps.google.com/?q=Khandya+Planters'+Club,+Sangameshwarpet"
                target="_blank" rel="noopener noreferrer"
                className="font-sans text-sm tracking-[0.3em] uppercase mt-2 pb-px transition-all hover:opacity-100 font-bold"
                style={{ color: "hsl(var(--gold))", borderBottom: "1px solid hsl(var(--gold) / 0.5)" }}>
                Get Directions →
              </a>
            </div>
          </GoldCard>
        </motion.div>

        {/* ── 4. DRESS CODE/HASHTAG ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <GoldCard className="px-4 py-5">
            <div className="flex items-center justify-between gap-2">
              <motion.img src={flowersImg} alt="" aria-hidden className="w-12 opacity-40 -rotate-12"
                animate={{ rotate: [-12, -8, -12] }} transition={{ duration: 4, repeat: Infinity }} />
              <div className="text-center flex-1 px-1">
                <p className="font-sans text-[9px] tracking-[0.5em] uppercase mb-1 text-shadow-premium font-bold"
                  style={{ color: "hsl(var(--cream))" }}>Dress Code</p>
                <p className="font-serif text-base md:text-lg" style={{ color: "hsl(45 60% 82%)" }}>
                  Traditional Wedding Attire
                </p>
              </div>
              <motion.img src={flowersImg} alt="" aria-hidden className="w-12 opacity-40 rotate-12 scale-x-[-1]"
                animate={{ rotate: [12, 8, 12] }} transition={{ duration: 4, repeat: Infinity }} />
            </div>
          </GoldCard>
        </motion.div>

        {/* ── 5. FLOATING LANTERNS ─────────────────────────────────────────── */}
        <motion.div className="flex justify-center items-end gap-3 md:gap-5 py-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.img key={i} src={lanternImg} alt="" aria-hidden
              className="w-7 md:w-9"
              animate={{ y: [0, -8, 0], rotate: [0, i % 2 === 0 ? 4 : -4, 0] }}
              transition={{ duration: 2.5 + i * 0.15, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                filter: "drop-shadow(0 0 10px hsl(330 60% 65% / 0.5))",
                opacity: 0.85 - Math.abs(i - 3) * 0.07,
              }} />
          ))}
        </motion.div>

        {/* ── 6. BLESSING FOOTER ───────────────────────────────────────────── */}
        <motion.div className="text-center pt-2 pb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.2 }}>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(45 70% 55% / 0.3))" }} />
            <motion.img src={mandalaImg} alt="" aria-hidden className="w-8 opacity-50"
              style={{ willChange: "transform" }}
              animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, hsl(45 70% 55% / 0.3), transparent)" }} />
          </div>

          <p className="font-sans text-fluid-label tracking-[0.4em] uppercase mb-4 text-shadow-adaptive font-bold"
            style={{ color: "#0d2b21" }}>
            Pratheeksha &amp; Atharvan 
          </p>
          <p className="font-sans text-sm tracking-[0.3em] uppercase opacity-90 font-bold" style={{ color: "#0d2b21" }}>
            Friday, May 8, 2026 · Chikkamagaluru
          </p>
          <p className="font-sans text-lg mt-4 font-bold tracking-[0.2em]" style={{ color: "#8a4b3d" }}>
            #PRATHARVAN
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default FooterSection;
