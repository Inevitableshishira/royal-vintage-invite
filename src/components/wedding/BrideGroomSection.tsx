import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";

const BrideGroomSection = () => {
  return (
    <section
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{ zIndex: 0 }}
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
          className="font-serif text-4xl md:text-6xl gold-shimmer mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bride &amp; Groom
        </motion.h2>

        {/* Couple Portrait — Postage Stamp */}
        <motion.div
          className="relative flex items-center justify-center p-2 md:p-3 border border-gold/30 rounded-sm"
          style={{ 
            width: "300px", 
            height: "300px",
            background: "hsl(45 30% 15% / 0.3)",
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
            className="w-full h-full object-contain"
          />
          {/* Subtle gold corner decorations */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold/40" />
        </motion.div>


        {/* Bride & Groom Details */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-3xl text-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-gold italic">Pratheeksha</h3>
            <div className="w-12 h-px bg-gold/40 mx-auto my-4" />
            <p className="font-sans text-xs text-cream opacity-70 leading-relaxed">
              Daughter of<br />
              Smt. Ramamani &amp; Shri Rajegowda
            </p>
            <p className="font-sans text-[10px] text-mint mt-2 opacity-50 italic">
              Chittemakki, Balehonnur
            </p>
            <p className="font-sans text-[10px] text-lavender mt-3 tracking-wider opacity-50 uppercase">
              The Bride
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-gold italic">Atharvan</h3>
            <div className="w-12 h-px bg-gold/40 mx-auto my-4" />
            <p className="font-sans text-xs text-cream opacity-70 leading-relaxed">
              Son of<br />
              Smt. Lekha &amp; Shri Jagadeesh Hegde
            </p>
            <p className="font-sans text-[10px] text-mint mt-2 opacity-50 italic">
              Kalkuli Estate, Sringeri
            </p>
            <p className="font-sans text-[10px] text-lavender mt-3 tracking-wider opacity-50 uppercase">
              The Groom
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrideGroomSection;
