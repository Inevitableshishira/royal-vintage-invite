import { motion } from "framer-motion";
import { useRef } from "react";
import bgHashtag from "@/assets/card-bgs/bg-hashtag.png";
import bgWeather from "@/assets/card-bgs/bg-weather.png";
import bgDress from "@/assets/card-bgs/bg-dress.png";
import mandalaImg from "@/assets/mandala-gold.png";

const ThingCard = ({
  bgSrc,
  title,
  desc,
  delay,
}: {
  bgSrc: string;
  title: string;
  desc: string;
  delay: number;
}) => {
  const fallbacks: Record<string, string> = {
    "Hashtag": "linear-gradient(135deg, #F0F0FF, #E6E6FA)", 
    "Weather": "linear-gradient(135deg, #F0FFFF, #E0F7FA)", 
    "Dress Code": "linear-gradient(135deg, #FFF9F0, #FFF5E6)", 
  };

  return (
    <motion.div
      className="relative flex flex-col items-center text-center px-10 py-16 rounded-[2.5rem] h-full overflow-hidden shadow-xl group"
      style={{
        border: "1px solid rgba(210, 180, 140, 0.3)",
        background: fallbacks[title] || "#FDF5E6",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {/* Hand-Painted Background Artwork */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgSrc} 
          alt="" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" 
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Content — Typographically Balanced */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <p className="font-sans text-[10px] tracking-[0.5em] uppercase font-black text-slate-400 mb-6 opacity-60">
          ✦ &nbsp; NOTE &nbsp; ✦
        </p>
        
        <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-black text-slate-800 mb-6 tracking-tighter leading-none">
          {title}
        </h3>

        <div className="w-8 h-[1px] bg-slate-300 mb-8" />

        <p className="font-serif text-lg leading-relaxed text-slate-700 font-bold px-2 italic">
          {desc}
        </p>
      </div>

      {/* Subtle paper grain / watermark */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.03] grayscale brightness-50 pointer-events-none">
        <img src={mandalaImg} alt="" className="w-full h-full animate-spin-slow" />
      </div>
    </motion.div>
  );
};

const ThingsToKnowSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const ITEMS = [
    {
      bgSrc: bgHashtag,
      title: "Hashtag",
      desc: "Share your special moments with us using our official wedding hashtag — #PRATHARVAN",
    },
    {
      bgSrc: bgWeather,
      title: "Weather",
      desc: "A beautiful day awaits with warm sunlight around 30°C and pleasant, breezy evenings.",
    },
    {
      bgSrc: bgDress,
      title: "Dress Code",
      desc: "We look forward to seeing everyone in their finest Traditional Wedding Attire.",
    },
  ];

  return (
    <section
      ref={ref}
      id="things-to-know"
      className="relative py-24 md:py-40 px-5 overflow-hidden flex flex-col items-center"
      style={{ zIndex: 0 }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-[11px] tracking-[0.6em] uppercase font-bold mb-4 text-[hsl(var(--burgundy))]">
            ✦ &nbsp; GUEST INFORMATION &nbsp; ✦
          </p>
          <h2 className="font-feminine text-wine-gradient" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
            Details to Note
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full">
          {ITEMS.map((item, i) => (
            <ThingCard
              key={item.title}
              {...item}
              delay={i * 0.2}
            />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex gap-4 mt-24 opacity-20 grayscale brightness-75">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="text-2xl">🌸</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnowSection;
