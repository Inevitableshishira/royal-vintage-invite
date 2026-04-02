import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import weddingPostageImg from "@/assets/wedding-postage.png";
import vintageTeal from "@/assets/vintage-car-teal.png";
import vintageBlack from "@/assets/vintage-car-black.png";

const CoupleSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const carLeftX = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const carRightX = useTransform(scrollYProgress, [0, 1], [200, -100]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(160 30% 20%), hsl(270 20% 15%))" }}>
      {/* Parallax cars */}
      <motion.img
        src={vintageTeal}
        alt="Vintage teal car"
        className="absolute top-1/4 left-0 w-48 md:w-72 opacity-20"
        style={{ x: carLeftX }}
        loading="lazy"
      />
      <motion.img
        src={vintageBlack}
        alt="Vintage black car"
        className="absolute bottom-1/4 right-0 w-48 md:w-72 opacity-20 scale-x-[-1]"
        style={{ x: carRightX }}
        loading="lazy"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center p-2 border border-gold/20"
          style={{ 
            background: "hsl(45 30% 10% / 0.4)",
            boxShadow: "0 30px 60px -12px rgba(0,0,0,0.9)"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={weddingPostageImg} alt="Pratheeksha & Atharvan" className="w-full h-full object-contain" />
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-gold/30" />
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl gold-shimmer">Pratheeksha &amp; Atharvan</h2>
          <p className="font-sans text-sm text-lavender mt-3 tracking-widest uppercase">May 8, 2026 · Khandya Planters' Club</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
