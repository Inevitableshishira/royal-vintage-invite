import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";
import lanternImg from "@/assets/lantern.png";

type DividerVariant = "marigold" | "diya" | "gopuram";

interface TraditionalDividerProps {
  variant?: DividerVariant;
  fromColor?: string;
  toColor?: string;
}

// ── Marigold / flower garland divider ────────────────────────────────────────
const MarigoldDivider = ({
  fromColor,
  toColor,
}: {
  fromColor: string;
  toColor: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mandalaRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const mandalaScale  = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const mandalaOpac   = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const flowerL       = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const flowerR       = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const flowerOpac    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.8, 0.8, 0]);

  return (
    <div
      ref={ref}
      className="relative pointer-events-none"
      style={{
        height: "160px",
        background: `linear-gradient(180deg, ${fromColor}, ${toColor})`,
        zIndex: 40,
        isolation: "isolate",
        overflow: "hidden",
      }}
    >
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-12 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${fromColor}, transparent)`, zIndex: 3 }} />

      {/* Mandala left */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute top-1/2 left-8 w-16 md:w-20 -translate-y-1/2 opacity-30"
        style={{ x: flowerL, opacity: flowerOpac, zIndex: 2, rotate: 15 }}
      />
      {/* Mandala right */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute top-1/2 right-8 w-16 md:w-20 -translate-y-1/2 opacity-30"
        style={{ x: flowerR, opacity: flowerOpac, zIndex: 2, rotate: -15 }}
      />

      {/* Central mandala */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute top-1/2 left-1/2 w-20 md:w-28"
        style={{
          x: "-50%", y: "-50%",
          rotate: mandalaRotate,
          scale: mandalaScale,
          opacity: mandalaOpac,
          zIndex: 3,
          filter: "drop-shadow(0 0 10px hsl(45 70% 55% / 0.35))",
          willChange: "transform, opacity",
        }}
      />

      {/* Gold line */}
      <div className="absolute inset-x-0 top-1/2 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(45 70% 55% / 0.35), transparent)", zIndex: 1 }} />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
        style={{ background: `linear-gradient(0deg, ${toColor}, transparent)`, zIndex: 3 }} />
    </div>
  );
};

// ── Diya / lantern row divider ────────────────────────────────────────────────
const DiyaDivider = ({
  fromColor,
  toColor,
}: {
  fromColor: string;
  toColor: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rowY       = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const diyas = [0, 1, 2, 3, 4];

  return (
    <div
      ref={ref}
      className="relative pointer-events-none"
      style={{
        height: "160px",
        background: `linear-gradient(180deg, ${fromColor}, ${toColor})`,
        zIndex: 40,
        isolation: "isolate",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-12 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${fromColor}, transparent)`, zIndex: 3 }} />

      {/* Decorative Sanskrit-style OM or gold ornament text */}
      <motion.div
        className="absolute inset-x-0 top-2 text-center pointer-events-none"
        style={{ opacity: rowOpacity, zIndex: 2 }}
      >
        <span className="text-xs tracking-[0.5em] uppercase font-sans"
          style={{ color: "hsl(45 70% 55% / 0.5)" }}>
          ✦ &nbsp; शुभ विवाह &nbsp; ✦
        </span>
      </motion.div>

      {/* Lantern row */}
      <motion.div
        className="absolute left-0 right-0 flex justify-center items-center gap-6 md:gap-10"
        style={{ y: rowY, opacity: rowOpacity, top: "38%", zIndex: 2 }}
      >
        {diyas.map((i) => (
          <motion.img
            key={i}
            src={lanternImg}
            alt=""
            aria-hidden
            className="w-8 md:w-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              filter: "drop-shadow(0 0 4px hsl(45 70% 55% / 0.4))",
              willChange: "transform" 
            }}
          />
        ))}
      </motion.div>

      {/* Gold line */}
      <div className="absolute inset-x-0 top-1/2 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(45 70% 55% / 0.35), transparent)", zIndex: 1 }} />

      <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
        style={{ background: `linear-gradient(0deg, ${toColor}, transparent)`, zIndex: 3 }} />
    </div>
  );
};

// ── Gold ornament / lotus divider (no temple) ─────────────────────────────────
const GopuramDivider = ({
  fromColor,
  toColor,
}: {
  fromColor: string;
  toColor: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mandalaRotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const mandalaScale  = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.6]);
  const mandalaOpac   = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const ringScale     = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.3, 0.5]);
  const ringOpac      = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  return (
    <div
      ref={ref}
      className="relative pointer-events-none"
      style={{
        height: "160px",
        background: `linear-gradient(180deg, ${fromColor}, ${toColor})`,
        zIndex: 40,
        isolation: "isolate",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-12 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${fromColor}, transparent)`, zIndex: 3 }} />

      {/* Expanding lotus / ring glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full border"
        style={{
          x: "-50%", y: "-50%",
          width: "100px", height: "100px",
          borderColor: "hsl(45 70% 55% / 0.35)",
          scale: ringScale,
          opacity: ringOpac,
          zIndex: 1,
          boxShadow: "0 0 30px hsl(45 70% 55% / 0.15)",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full border"
        style={{
          x: "-50%", y: "-50%",
          width: "60px", height: "60px",
          borderColor: "hsl(45 70% 55% / 0.25)",
          scale: ringScale,
          opacity: ringOpac,
          zIndex: 1,
        }}
      />

      {/* Spinning mandala center */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute top-1/2 left-1/2 w-16 md:w-20"
        style={{
          x: "-50%", y: "-50%",
          rotate: mandalaRotate,
          scale: mandalaScale,
          opacity: mandalaOpac,
          zIndex: 2,
          filter: "drop-shadow(0 0 10px hsl(45 70% 55% / 0.4))",
          willChange: "transform, opacity",
        }}
      />

      {/* Gold ornament lines */}
      <div className="absolute inset-x-0 flex items-center justify-center gap-4 pointer-events-none"
        style={{ top: "46%", zIndex: 1 }}>
        <div className="h-px flex-1 max-w-[80px] md:max-w-[160px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(45 70% 55% / 0.4))" }} />
        <span style={{ color: "hsl(45 70% 55% / 0.6)", fontSize: "10px" }}>✦</span>
        <div className="h-px flex-1 max-w-[80px] md:max-w-[160px]"
          style={{ background: "linear-gradient(90deg, hsl(45 70% 55% / 0.4), transparent)" }} />
      </div>

      {/* Blessed text */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none" style={{ zIndex: 3 }}>
        <span className="text-[10px] tracking-[0.6em] font-sans uppercase"
          style={{ color: "hsl(45 70% 55% / 0.45)" }}>
          ✦ &nbsp; With Divine Blessings &nbsp; ✦
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
        style={{ background: `linear-gradient(0deg, ${toColor}, transparent)`, zIndex: 3 }} />
    </div>
  );
};

// ── Main export ───────────────────────────────────────────────────────────────
const TraditionalDivider = ({
  variant = "marigold",
  fromColor = "white",
  toColor = "white",
}: TraditionalDividerProps) => {
  if (variant === "diya")    return <DiyaDivider    fromColor={fromColor} toColor={toColor} />;
  if (variant === "gopuram") return <GopuramDivider fromColor={fromColor} toColor={toColor} />;
  return <MarigoldDivider fromColor={fromColor} toColor={toColor} />;
};

export default TraditionalDivider;
