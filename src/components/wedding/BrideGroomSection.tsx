import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/couple-stamp.png";
import mandalaImg from "@/assets/mandala-gold.png";
import { ModernAnimatedText } from "./AnimatedText";

// Stagger container for cards
const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const BrideGroomSection = () => {
  return (
    <section className="relative py-24 md:py-48 px-5 md:px-4 overflow-hidden flex flex-col items-center" style={{ zIndex: 10 }}>
      {/* Spinning mandala watermarks with very low opacity */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-20 -right-20 w-80 opacity-[0.04] pointer-events-none grayscale"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-20 -left-20 w-64 opacity-[0.03] pointer-events-none grayscale"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />
      
      {/* Subtle Om background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg width="400" height="400" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="70" fontSize="70" textAnchor="middle" fill="#c5a059" fontFamily="serif" fontWeight="bold">ಓಂ</text>
        </svg>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-label-caps mb-6"
          style={{ color: "hsl(30, 35%, 65%)" }}
          initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, scale: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          MEET THE COUPLE
        </motion.p>

        <div className="mb-20 md:mb-32">
          <ModernAnimatedText 
            text="Bride & Groom" 
            fontSize="clamp(3.5rem, 12vw, 8rem)"
            animateOnLoad={true}
          />
        </div>

        {/* Couple Portrait — High Fidelity Frame */}
        <div className="relative mx-auto mt-4 px-2">
          <motion.div
            className="p-4 md:p-6 glass-ivory rounded-xl relative z-20"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              boxShadow: "0 0 40px rgba(197,160,89,0.15), 0 20px 60px rgba(0,0,0,0.3)",
              transition: { duration: 0.4 }
            }}
          >
            <motion.img
              src={weddingPostageImg}
              alt="Pratheeksha & Atharvan"
              className="block relative shadow-lg"
              style={{
                width: "clamp(280px, 85vw, 500px)",
                height: "auto",
                objectFit: "cover",
                borderRadius: "4px",
                filter: "sepia(0.05) contrast(1.05) brightness(1.1)",
              }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
          {/* Subtle floral accent */}
          <motion.div 
            className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 rotate-12 blur-[1px]"
            animate={{ y: [0, -6, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={mandalaImg} alt="" className="w-full h-full grayscale" />
          </motion.div>
        </div>

        {/* Details Cards — Glassmorphism & Gold — Staggered */}
        <motion.div
          className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl w-full text-center px-4"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          
          {/* Bride Card — Rose-tinted */}
          <motion.div
            className="glass-rose p-10 md:p-16 rounded-[3rem] border border-[rgba(210,130,150,0.2)] relative overflow-hidden group cursor-default"
            variants={cardItem}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 60px rgba(210,130,150,0.12), 0 0 30px rgba(210,130,150,0.08), 0 0 40px rgba(197,160,89,0.06)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <div className="mb-8">
              <ModernAnimatedText 
                text="Pratheeksha" 
                fontSize="clamp(3rem, 10vw, 5.5rem)"
                animateOnLoad={true}
              />
            </div>
            <p className="font-traditional text-xl md:text-3xl leading-relaxed text-ivory/90 font-medium">
              Daughter of<br />
              <span className="text-rosegold-gradient font-bold drop-shadow-sm">Smt. Ramamani &amp; Shri Rajegowda</span>
            </p>
            <p className="text-label-caps mt-8 tracking-widest-luxury text-[0.7rem]" style={{ color: "hsl(340, 35%, 60%)" }}>
              Chittemakki, Balehonnur
            </p>
            
            {/* Hover Shimmer — rose-tinted */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(232,164,184,0.06)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>

          {/* Groom Card — Saffron-tinted */}
          <motion.div
            className="glass-saffron p-10 md:p-16 rounded-[3rem] border border-[rgba(220,170,90,0.2)] relative overflow-hidden group cursor-default"
            variants={cardItem}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 60px rgba(212,134,42,0.12), 0 0 30px rgba(212,134,42,0.08), 0 0 40px rgba(197,160,89,0.06)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <div className="mb-8">
              <ModernAnimatedText 
                text="Atharvan" 
                fontSize="clamp(3rem, 10vw, 5.5rem)"
                animateOnLoad={true}
              />
            </div>
            <p className="font-traditional text-xl md:text-3xl leading-relaxed text-ivory/90 font-medium">
              Son of<br />
              <span className="text-saffron-gradient font-bold drop-shadow-sm">Smt. Lekha &amp; Shri Jagadeesh Hegde</span>
            </p>
            <p className="text-label-caps mt-8 tracking-widest-luxury text-[0.7rem]" style={{ color: "hsl(28, 55%, 55%)" }}>
              Kalkuli Estate, Sringeri
            </p>

            {/* Hover Shimmer — saffron-tinted */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(212,134,42,0.05)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default BrideGroomSection;
