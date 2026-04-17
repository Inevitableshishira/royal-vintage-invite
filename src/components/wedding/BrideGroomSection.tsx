import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/couple-stamp.png";
import mandalaImg from "@/assets/mandala-gold.png";
import { ModernAnimatedText } from "./AnimatedText";

const BrideGroomSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden flex flex-col items-center" style={{ zIndex: 10 }}>
      {/* Background Watermarks */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-20 -right-20 w-64 opacity-[0.03] pointer-events-none grayscale"
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

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <motion.p
          className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-wine mb-4 opacity-70 font-black"
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
            gradientColors={["#4A0404", "#800020", "#4A0404"]}
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
              clipPath: "inset(3px round 12px)", 
              filter: "contrast(1.05) brightness(1.05) drop-shadow(0 12px 32px rgba(100,40,70,0.3))"
            }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          />
        </div>

        {/* Bride & Groom Details */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-6xl text-center">
          
          <motion.div
            className="glass-pink-surface p-10 md:p-14 rounded-[3.5rem] border border-[rgba(160,80,110,0.15)] shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="mb-6">
              <ModernAnimatedText 
                text="Pratheeksha" 
                fontSize="clamp(2.5rem, 8vw, 4.5rem)"
                animateOnLoad={true}
                gradientColors={["#581c1c", "#8d2d2d", "#581c1c"]}
              />
            </div>
            <p className="font-traditional text-xl md:text-2xl text-slate-800 opacity-100 leading-relaxed font-bold">
              Daughter of<br />
              <span className="text-wine-gradient drop-shadow-sm">Smt. Ramamani &amp; Shri Rajegowda</span>
            </p>
            <p className="font-sans text-[11px] text-slate-600 mt-4 tracking-[0.2em] uppercase font-black">
              Chittemakki, Balehonnur, Chikkamagaluru
            </p>

            {/* Siblings & Relatives */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-4 font-black">Family & Relatives</p>
              <p className="font-traditional text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                Prajwal, Venkatesh, Saraswathi, and children.
              </p>
              <p className="font-sans text-[9px] text-slate-500 mt-4 uppercase tracking-[0.2em]">
                Chittemakki and Karagunda families
              </p>
            </div>

            <p className="font-sans text-[10px] text-wine mt-10 tracking-[0.4em] opacity-40 uppercase font-black">
              The Bride
            </p>
          </motion.div>

          <motion.div
            className="glass-pink-surface p-10 md:p-14 rounded-[3.5rem] border border-[rgba(160,80,110,0.15)] shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="mb-6">
              <ModernAnimatedText 
                text="Atharvan Hegde" 
                fontSize="clamp(2.5rem, 8vw, 4.5rem)"
                animateOnLoad={true}
                gradientColors={["#581c1c", "#8d2d2d", "#581c1c"]}
              />
            </div>
            <p className="font-traditional text-xl md:text-2xl text-slate-800 opacity-100 leading-relaxed font-bold">
              Son of<br />
              <span className="text-wine-gradient drop-shadow-sm">Smt. Lekha &amp; Shri Jagadeesh Hegde</span>
            </p>
            <p className="font-sans text-[11px] text-slate-600 mt-4 tracking-[0.2em] uppercase font-black">
              Kalkuli , Sringeri, Chikkamagaluru
            </p>

            {/* Siblings & Relatives */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-4 font-black">Family & Relatives</p>
              <p className="font-traditional text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                Anushruthi, Arjun, Kumari Ahana, Ananya, Rakshith, Prema Nagesh, and children.
              </p>
              <p className="font-sans text-[9px] text-slate-500 mt-4 uppercase tracking-[0.2em]">
                Kalkuli and Nandipura families
              </p>
            </div>

            <p className="font-sans text-[10px] text-wine mt-10 tracking-[0.4em] opacity-40 uppercase font-black">
              The Groom
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrideGroomSection;
