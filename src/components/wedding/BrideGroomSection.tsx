import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";


const BrideGroomSection = () => {
  return (
    <section
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Spinning mandala watermarks */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-20 -right-20 w-64 opacity-[0.05] pointer-events-none"
        animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-20 -left-20 w-52 opacity-[0.04] pointer-events-none"
        animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      {/* Om background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg width="300" height="300" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="72" fontSize="72" textAnchor="middle" fill="hsl(45 70% 55%)" fontFamily="serif" fontWeight="bold">ॐ</text>
        </svg>
      </div>
      {/* Om background */}

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <motion.p
          className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-mint mb-3 opacity-60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Meet the
        </motion.p>
        <motion.h2
          className="font-serif text-5xl md:text-7xl gold-shimmer mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bride &amp; Groom
        </motion.h2>

        {/* Couple Portrait — Postage Stamp */}
        <div className="relative mx-auto mt-6">


          {/* Solid background added so the car is completely hidden when directly behind it */}
          <motion.div
            className="relative z-10 flex items-center justify-center p-2 md:p-3 border border-gold/30 rounded-sm section-glass"
            style={{ 
              width: "300px", 
              height: "300px",
              boxShadow: "0 20px 50px -10px rgba(0,0,0,0.8), 0 0 20px rgba(184, 134, 11, 0.2)"
            }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          >
            <img
              src={weddingPostageImg}
              alt="Pratheeksha & Atharvan"
              className="w-full h-full object-contain relative z-20"
            />
            {/* Subtle gold corner decorations */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold/40 z-30" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold/40 z-30" />
          </motion.div>
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
            <h3 className="font-serif text-4xl md:text-5xl text-gold italic font-bold tracking-wide">Pratheeksha</h3>
            <div className="w-16 h-px bg-gold/50 mx-auto my-5" />
            <p className="font-sans text-base md:text-lg text-cream opacity-100 leading-relaxed font-semibold">
              Daughter of<br />
              <span className="text-gold">Smt. Ramamani &amp; Shri Rajegowda</span>
            </p>
            <p className="font-sans text-sm text-mint mt-3 opacity-90 italic font-medium">
              Chittemakki, Balehonnur
            </p>
            <p className="font-sans text-xs text-lavender mt-4 tracking-[0.3em] opacity-80 uppercase font-black">
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
            <h3 className="font-serif text-4xl md:text-5xl text-gold italic font-bold tracking-wide">Atharvan</h3>
            <div className="w-16 h-px bg-gold/50 mx-auto my-5" />
            <p className="font-sans text-base md:text-lg text-cream opacity-100 leading-relaxed font-semibold">
              Son of<br />
              <span className="text-gold">Smt. Lekha &amp; Shri Jagadeesh Hegde</span>
            </p>
            <p className="font-sans text-sm text-mint mt-3 opacity-90 italic font-medium">
              Kalkuli Estate, Sringeri
            </p>
            <p className="font-sans text-xs text-lavender mt-4 tracking-[0.3em] opacity-80 uppercase font-black">
              The Groom
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrideGroomSection;
