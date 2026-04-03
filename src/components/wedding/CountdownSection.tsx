import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";

const WEDDING_DATE = new Date("2026-05-08T09:30:00+05:30").getTime();

// Pulsing diya flame SVG
const DivaFlame = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    animate={{ scaleY: [1, 1.3, 0.9, 1.2, 1], scaleX: [1, 0.85, 1.1, 0.9, 1] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    style={{ transformOrigin: "bottom", willChange: "transform" }}
  >
    <svg width="14" height="20" viewBox="0 0 14 20" aria-hidden>
      <ellipse cx="7" cy="15" rx="5" ry="4" fill="hsl(45 70% 35% / 0.6)" />
      <ellipse cx="7" cy="10" rx="4" ry="8" fill="hsl(40 90% 58%)" />
      <ellipse cx="7" cy="7" rx="2.5" ry="5" fill="hsl(50 100% 75%)" />
      <ellipse cx="7" cy="5" rx="1.5" ry="3" fill="hsl(60 100% 90% / 0.9)" />
    </svg>
  </motion.div>
);

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: "hsl(270 20% 15%)", zIndex: 0 }}
    >
      {/* Mandala watermarks */}
      <img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-16 -left-16 w-48 opacity-[0.04] pointer-events-none animate-spin-slow" />
      <img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-16 -right-16 w-40 opacity-[0.04] pointer-events-none animate-spin-slow" />

      {/* Om symbol center background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
        <svg width="280" height="280" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="72" fontSize="72" textAnchor="middle"
            fill="hsl(45 70% 55%)" fontFamily="serif" fontWeight="bold">ॐ</text>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Title */}
        <motion.p className="font-sans text-[10px] tracking-[0.5em] uppercase text-center mb-2"
          style={{ color: "hsl(45 70% 55% / 0.5)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          ✦ &nbsp; The Auspicious Hour &nbsp; ✦
        </motion.p>
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-center gold-shimmer mb-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Counting Down
        </motion.h2>
        <motion.p className="font-serif text-base md:text-lg text-center italic mb-10"
          style={{ color: "hsl(40 40% 80% / 0.5)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}>
          to Muhurtham · 6:30 AM
        </motion.p>

        {/* Countdown tiles */}
        <div className="flex justify-center gap-3 md:gap-6">
          {units.map((u, i) => (
            <motion.div key={u.label} className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>

              {/* Diya on top */}
              <DivaFlame delay={i * 0.3} />

              {/* Tile */}
              <div
                className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(145deg, hsl(270 25% 20%), hsl(270 20% 14%))",
                  border: "1px solid hsl(45 70% 55% / 0.3)",
                  boxShadow: "0 0 20px hsl(45 70% 55% / 0.08), inset 0 0 15px hsl(45 70% 55% / 0.04)",
                }}
              >
                {/* Corner micro-flares */}
                {["tl","tr","bl","br"].map((c) => (
                  <div key={c} className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "hsl(45 70% 55% / 0.4)",
                      top: c.startsWith("t") ? "4px" : "auto",
                      bottom: c.startsWith("b") ? "4px" : "auto",
                      left: c.endsWith("l") ? "4px" : "auto",
                      right: c.endsWith("r") ? "4px" : "auto",
                    }} />
                ))}
                <motion.span
                  key={u.value}
                  className="font-serif text-2xl md:text-4xl text-gold"
                  initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}>
                  {pad(u.value)}
                </motion.span>
              </div>

              <span className="font-sans text-[10px] tracking-widest uppercase text-lavender"
                style={{ opacity: 0.6 }}>{u.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom marigold row */}
        <motion.div className="flex justify-center items-center gap-2 mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}>
          {["🌼","✦","🌺","✦","🌸","✦","🌺","✦","🌼"].map((e, i) => (
            <motion.span key={i}
              animate={{ y: [0, i % 2 === 0 ? -3 : 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontSize: e === "✦" ? "8px" : "16px",
                color: e === "✦" ? "hsl(45 70% 55% / 0.35)" : undefined,
                opacity: 0.7,
              }}>
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
