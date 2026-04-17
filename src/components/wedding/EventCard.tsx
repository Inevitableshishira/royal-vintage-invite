import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  bgSrc?: string;
  time: string;
  date: string;
  venue: string;
  index: number;
  names?: string; 
}

const EventCard = ({ title, bgSrc, time, date, venue, index, names }: EventCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col items-center group w-full max-w-[400px]"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, delay: index * 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-[hsl(335,30%,80%)]"
        style={{ background: "hsl(335, 30%, 88%)" }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 30px 80px rgba(100,40,70,0.2), 0 0 40px rgba(100,40,70,0.1)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        {/* Background Gradient — Thematic */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full opacity-40 mix-blend-multiply transition-all duration-700"
            style={{ 
              background: title.includes("Maduve") 
                ? "linear-gradient(135deg, #FF9E2C, #FFD700, #FF5F1F)" // Saffron/Orange/Gold for Ceremony
                : "linear-gradient(135deg, #E8A4B8, #FDF5E6, #D28296)" // Rose/Ivory/Deep Rose for Reception
            }}
          />
        </div>

        {/* Shimmer sweep on hover — warm plum-pink */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[rgba(160,80,110,0.06)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] pointer-events-none" />

        {/* The Central Seal */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-8">
          <motion.div 
            className="glass-blush p-10 md:p-14 rounded-[3.5rem] shadow-2xl flex flex-col items-center w-[92%] border border-[rgba(160,80,110,0.1)]"
            initial={{ scale: 0.85, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6 + index * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label-caps text-[9px] mb-8" style={{ 
              color: title.includes("Maduve") ? "hsl(345, 60%, 28%)" : "hsl(320, 40%, 28%)" 
            }}>
               {title.includes("Maduve") ? "THE CEREMONY" : "THE CELEBRATION"}
            </p>

            <h3 className="font-serif text-[clamp(2rem,6vw,2.8rem)] font-bold leading-[1] mb-8 tracking-tighter-framer text-center"
              style={{ color: "hsl(335, 45%, 18%)" }}>
              {title}
            </h3>

            {names && (
              <div className="mb-8 flex flex-col items-center">
                <motion.div 
                  className="w-12 h-[1px] bg-gold/30 mb-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
                <p className="font-feminine text-2xl text-wine-gradient italic">
                  {names}
                </p>
                <motion.div 
                  className="w-12 h-[1px] bg-gold/30 mt-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </div>
            )}

            <div className="flex flex-col items-center">
              <p className="font-serif text-3xl font-bold italic tracking-wide" style={{ 
                color: title.includes("Maduve") ? "hsl(345, 55%, 30%)" : "hsl(320, 40%, 30%)"
              }}>
                {time}
              </p>
              <p className="text-label-caps text-[8px] mt-2" style={{ 
                color: title.includes("Maduve") ? "hsl(345, 40%, 35% / 0.7)" : "hsl(320, 30%, 38% / 0.7)" 
              }}>
                {title.includes("Maduve") ? "Muhurtham" : "Lunch"}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* External Details — Elite Typography */}
      <motion.div 
        className="mt-12 text-center w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 + index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-sans text-2xl md:text-3xl font-black tracking-widest-luxury mb-3 drop-shadow-lg"
          style={{ color: "hsl(335, 45%, 18%)" }}>
          {date.toUpperCase()}
        </p>
        <p className="font-traditional text-lg italic mb-10 drop-shadow-md" style={{ color: "hsl(15, 35%, 30%)" }}>
          {venue}
        </p>
        
        <motion.a
          href={`https://maps.google.com/?q=${encodeURIComponent(venue + ", Chikkamagaluru")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-5 px-16 py-6 border border-transparent backdrop-blur-md text-label-caps text-[10px] tracking-widest-luxury transition-all shadow-2xl rounded-full"
          style={{ 
            backgroundColor: "hsl(335, 45%, 18%)", 
            color: "white" 
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -6,
            backgroundColor: "hsl(335, 45%, 25%)",
            boxShadow: "0 12px 40px rgba(100,40,70,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          VIEW PATH 📍
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
