import { motion } from "framer-motion";
import { Flower2, Sun, Music, Gem, Flame, Wine } from "lucide-react";
import EventCard from "./EventCard";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";

const events = [
  { title: "Maduve Samarambha", icon: <Flame size={28} strokeWidth={1.5} />, time: "09:30 AM — 10:00 AM", date: "Friday, May 8th, 2026", venue: "Khandya Planters' Club" },
  { title: "Arathakshete", icon: <Wine size={28} strokeWidth={1.5} />, time: "11:30 AM onwards", date: "Friday, May 8th, 2026", venue: "Khandya Planters' Club" },
];

const EventsSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden flex flex-col items-center" style={{ zIndex: 0 }}>
      {/* Spinning mandala watermarks */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-16 -right-16 w-56 opacity-[0.05] pointer-events-none"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-16 -left-16 w-44 opacity-[0.04] pointer-events-none"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />
      {/* Om watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg width="320" height="320" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="72" fontSize="72" textAnchor="middle" fill="hsl(45 70% 55%)" fontFamily="serif" fontWeight="bold">ಓಂ</text>
        </svg>
      </div>
      {/* Om watermark */}

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.p className="font-sans text-[10px] tracking-[0.5em] uppercase text-center mb-3 font-bold text-shadow-adaptive"
          style={{ color: "hsl(var(--cream))" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          ✦ &nbsp; ಪವಿತ್ರ ಉತ್ಸವ &nbsp; ✦
        </motion.p>
        <motion.h2
          className="font-feminine text-fluid-h2 text-center gold-shimmer mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Celebrations
        </motion.h2>
        <motion.p
          className="font-sans text-fluid-body text-center text-cream mb-16 tracking-widest uppercase font-bold text-shadow-adaptive"
          style={{ opacity: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join us for the most auspicious day
        </motion.p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          {events.map((event, i) => (
            <div key={event.title} className="w-full">
              <EventCard {...event} index={i} />
            </div>
          ))}
        </div>

        <motion.div className="mt-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          
          <div className="relative max-w-4xl mx-auto py-12">
            {/* Background spinning mandala */}
            <motion.img 
              src={mandalaImg} 
              alt="" 
              className="absolute top-1/2 left-1/2 w-[350px] md:w-[600px] opacity-[0.1] pointer-events-none -translate-x-1/2 -translate-y-1/2"
              style={{ willChange: "transform" }}
              animate={{ rotate: 360 }} 
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
            />
            <motion.div className="absolute inset-0 rounded-full gold-glow opacity-40"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }} />

            <p className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-90 mb-4 text-cream font-bold text-shadow-premium">Venue &amp; Location</p>
            <h4 className="font-serif text-3xl md:text-5xl text-gold mb-3">Khandya Planters' Club</h4>
            <p className="font-sans text-xs text-cream tracking-[0.2em] uppercase mb-10 opacity-90 font-bold text-shadow-premium">
               Sangameshwarpet, Chikkamagaluru
            </p>

            <div className="relative inline-block pb-8">
              <a 
                href="https://maps.google.com/?q=Khandya+Planters'+Club,+Sangameshwarpet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gold/5 border border-gold/30 rounded-full text-gold text-sm tracking-[0.3em] uppercase transition-all hover:bg-gold/15 hover:scale-105 active:scale-95 group"
              >
                <span className="text-xl group-hover:animate-bounce">📍</span>
                <span>Get Route &amp; Directions</span>
              </a>

              {/* Decorative base flowers */}
              <img src={flowersImg} alt="" className="absolute -left-12 -bottom-4 w-24 opacity-25 -rotate-12 pointer-events-none" />
              <img src={flowersImg} alt="" className="absolute -right-12 -bottom-4 w-24 opacity-25 rotate-12 scale-x-[-1] pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Bottom marigold row */}
        <motion.div className="flex justify-center items-center gap-2 mt-14"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}>
          {["🌼","✦","🌺","✦","🌸","✦","🌺","✦","🌼"].map((e, i) => (
            <span key={i} style={{
              fontSize: e === "✦" ? "8px" : "16px",
              color: e === "✦" ? "hsl(45 70% 55% / 0.35)" : undefined,
              opacity: 0.6,
            }}>{e}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
