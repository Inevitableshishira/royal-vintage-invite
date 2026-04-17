import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import ornamentMain from "@/assets/ornament-main.png";

// ─── Placeholder image component ────────────────────────────────────────────
// When the user provides real photos, replace the `src` props in SLIDES and STRIP_PHOTOS.
const PlaceholderSlide = ({
  label,
  aspectRatio = "3/4",
}: {
  label: string;
  aspectRatio?: string;
}) => (
  <div
    className="w-full flex flex-col items-center justify-center gap-3 select-none"
    style={{
      aspectRatio,
      background:
        "linear-gradient(145deg, hsl(335 30% 88%), hsl(325 28% 84%))",
      border: "1.5px dashed hsl(320 40% 35% / 0.35)",
      borderRadius: "4px",
    }}
  >
    <span style={{ fontSize: 36, opacity: 0.4 }}>📷</span>
    <p
      className="font-sans text-xs tracking-widest uppercase text-center px-4"
      style={{ color: "hsl(320 40% 35% / 0.55)" }}
    >
      {label}
    </p>
  </div>
);

// ─── Slide definitions — replace `img` with a real src once photos arrive ──
// Each entry has: { src?: string, label: string }
const SLIDES = [
  { src: slide1, label: "Beautiful Moments 1" },
  { src: slide2, label: "Beautiful Moments 2" },
  { src: slide3, label: "Beautiful Moments 3" },
  { src: slide4, label: "Beautiful Moments 4" },
];

// ─── Gold rule ───────────────────────────────────────────────────────────────
const GoldRule = () => (
  <div className="flex items-center gap-4 max-w-[200px] mx-auto opacity-60 my-6">
    <div
      className="flex-1 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, hsl(320 40% 35%), transparent)",
      }}
    />
    <div
      className="w-[6px] h-[6px] flex-shrink-0"
      style={{ background: "hsl(345 55% 30%)", transform: "rotate(45deg)" }}
    />
    <div
      className="flex-1 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, hsl(320 40% 35%), transparent)",
      }}
    />
  </div>
);

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (n: number) => setCurrent(((n % total) + total) % total),
    [total]
  );

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(current + 1), 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, goTo]);

  const prev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(current - 1);
  };
  const next = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(current + 1);
  };

  return (
    <div className="relative w-full max-w-full md:max-w-[420px] mx-auto mt-8 px-0 md:px-0">
      {/* Ornamental Frame Wrapper */}
      <div
        className="relative shadow-2xl overflow-hidden md:rounded-2xl"
        style={{
          padding: "8px",
          background: "linear-gradient(135deg, #c5a059 0%, #FDF5E6 20%, #e8a4b8 50%, #FDF5E6 80%, #c5a059 100%)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        {/* Inner Frame with double border effect */}
        <div
          className="relative bg-[#1a1510] overflow-hidden flex items-center justify-center border border-[#c5a059]/30 md:rounded-lg"
          style={{ height: "clamp(420px, 120vw, 580px)" }}
        >
          {/* Decorative Corner Accents (Optional but premium) */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#c5a059] z-30 opacity-60" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#c5a059] z-30 opacity-60" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#c5a059] z-30 opacity-60" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#c5a059] z-30 opacity-60" />
          {/* Main photo display */}
          <div className="relative w-full h-full flex items-center justify-center">
            {SLIDES.map((slide, i) => (
              i === current && (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    zIndex: 10
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  {slide.src ? (
                    <img
                      src={slide.src}
                      alt={`Couple photo ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      style={{ transform: "translateZ(0)" }}
                    />
                  ) : (
                    <PlaceholderSlide label={slide.label} aspectRatio="auto" />
                  )}
                </motion.div>
              )
            ))}
          </div>

          {/* Elegant vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: "radial-gradient(circle, transparent 40%, rgba(26,21,16,0.2) 100%)",
            }}
          />

          {/* Slide count indicator */}
          <div
            className="absolute bottom-4 right-4 px-3 py-1 rounded-full z-30"
            style={{
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#fdf5e6",
              fontWeight: "bold",
            }}
          >
            {current + 1} / {total}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-6">
        {/* Prev */}
        <button
          aria-label="Previous photo"
          onClick={prev}
          className="w-10 h-10 rounded-full border border-gold-ornamental/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 bg-white/5 text-[#c5a059]"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2.5 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-500"
              style={{
                width: i === current ? 24 : 8,
                height: 4,
                borderRadius: 99,
                background: i === current ? "#c5a059" : "rgba(197, 160, 89, 0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          aria-label="Next photo"
          onClick={next}
          className="w-10 h-10 rounded-full border border-gold-ornamental/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 bg-white/5 text-[#c5a059]"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const CouplePhotoSlideSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center">
      {/* Floating Mandalas */}
      <motion.img
        src={ornamentMain}
        alt=""
        className="absolute -top-32 -left-32 w-[600px] opacity-[0.03] pointer-events-none"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden", willChange: "transform" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src={ornamentMain}
        alt=""
        className="absolute -bottom-32 -right-32 w-[600px] opacity-[0.03] pointer-events-none"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden", willChange: "transform" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center px-0 md:px-5">
        {/* Main Ornamental Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            type: "spring",
            stiffness: 50
          }}
          className="mb-8"
        >
          <img 
            src={ornamentMain} 
            alt="Royal Ornament" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(197,160,89,0.4)]"
          />
        </motion.div>

        <div className="text-center px-5 md:px-0 flex flex-col items-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase font-bold mb-3 text-[hsl(var(--wine))]">
              A Beautiful Journey
            </p>
            <h2 className="font-feminine text-plum-gradient text-5xl md:text-7xl">
              Our Memories
            </h2>
          </motion.div>

          <GoldRule />
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel />
        </motion.div>
      </div>

      {/* Decorative floral garland */}
      <div className="flex gap-3 mt-16 opacity-30">
        {["🌸", "✨", "🌸", "✨", "🌸"].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            className="text-xl"
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default CouplePhotoSlideSection;
