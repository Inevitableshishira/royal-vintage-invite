import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/couple-stamp.png";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";
import { ModernAnimatedText } from "./AnimatedText";

const BrideGroomSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden flex flex-col items-center" style={{ zIndex: 10 }}>
      {/* Spinning mandala watermarks */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-20 -right-20 w-64 opacity-[0.05] pointer-events-none"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-20 -left-20 w-52 opacity-[0.04] pointer-events-none"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      {/* Om background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg width="300" height="300" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="72" fontSize="72" textAnchor="middle" fill="hsl(45 70% 55%)" fontFamily="serif" fontWeight="bold">ಓಂ</text>
        </svg>
      </div>
      {/* Om background */}

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <motion.p
          className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-cream mb-3 opacity-90 font-bold text-shadow-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Meet the
        </motion.p>
        <div className="mb-12 md:mb-16">
          <ModernAnimatedText 
            text="Bride & Groom" 
            fontSize="clamp(3.5rem, 10vw, 7rem)"
            animateOnLoad={true}
          />
        </div>

        {/* Couple Portrait — Postage Stamp */}
        <div className="relative mx-auto mt-6">
          <motion.img
            src={weddingPostageImg}
            alt="Pratheeksha & Atharvan"
            className="w-[clamp(300px,85vw,450px)] h-auto object-contain relative z-20"
            style={{ 
              mixBlendMode: "screen", 
              clipPath: "inset(3px round 12px)", // Precision cut to remove edge artifacts
              filter: "contrast(1.1) brightness(1.05) drop-shadow(0 8px 16px rgba(0,0,0,0.4))"
            }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          />
        </div>


        {/* Bride & Groom Details */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-3xl text-center">
          {/* Bride */}
          <motion.div
            className="section-glass p-8 rounded-2xl border border-gold/20 shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="mb-4">
              <ModernAnimatedText 
                text="Pratheeksha" 
                fontSize="clamp(2.5rem, 8vw, 4.5rem)"
                animateOnLoad={true}
              />
            </div>
            <div className="w-16 h-px bg-gold/50 mx-auto my-5" />
            <p className="font-traditional text-xl md:text-2xl text-cream opacity-100 leading-relaxed font-bold text-shadow-premium">
              Daughter of<br />
              <span className="text-gold">Smt. Ramamani &amp; Shri Rajegowda</span>
            </p>
            <p className="font-sans text-sm text-cream mt-3 opacity-90 italic font-medium">
              Chittemakki, Balehonnur
            </p>
            <p className="font-sans text-xs text-cream mt-4 tracking-[0.3em] opacity-80 uppercase font-black">
              The Bride
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            className="section-glass p-8 rounded-2xl border border-gold/20 shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="mb-4">
              <ModernAnimatedText 
                text="Atharvan" 
                fontSize="clamp(2.5rem, 8vw, 4.5rem)"
                animateOnLoad={true}
              />
            </div>
            <div className="w-16 h-px bg-gold/50 mx-auto my-5" />
            <p className="font-traditional text-xl md:text-2xl text-cream opacity-100 leading-relaxed font-bold text-shadow-premium">
              Son of<br />
              <span className="text-gold">Smt. Lekha &amp; Shri Jagadeesh Hegde</span>
            </p>
            <p className="font-sans text-sm text-cream mt-3 opacity-90 italic font-medium">
              Kalkuli Estate, Sringeri
            </p>
            <p className="font-sans text-xs text-cream mt-4 tracking-[0.3em] opacity-80 uppercase font-black">
              The Groom
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrideGroomSection;
