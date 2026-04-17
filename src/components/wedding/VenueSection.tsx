import { motion } from "framer-motion";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";
import venueBg from "@/assets/venue-bg.png";

const VenueSection = () => {
  return (
    <section
      id="venue"
      className="relative py-20 md:py-40 px-5 overflow-hidden flex flex-col items-center bg-[#FAFAF5]"
      style={{ zIndex: 0 }}
    >
      {/* Background Watermarks */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015]">
        <svg width="400" height="400" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="72" fontSize="72" textAnchor="middle" fill="#8B7D6B" fontFamily="serif" fontWeight="bold">ಓಂ</text>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-center font-black mb-4 text-slate-400">
            ✦ &nbsp; ಸ್ಥಳ • THE LOCATION &nbsp; ✦
          </p>
          <h2 className="font-feminine text-[clamp(2.5rem,8vw,5rem)] text-slate-800 mb-6 leading-none">
            The Venue
          </h2>
          <p className="font-sans text-lg md:text-xl tracking-[0.2em] uppercase font-black text-slate-600">
            Khandya Planters&apos; Club
          </p>
        </motion.div>

        {/* Combined Infomation Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full mb-20 items-stretch">
          
          {/* Main Visual */}
          <motion.div
            className="md:col-span-12 lg:col-span-10 relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <img src={venueBg} alt="The Venue" className="w-full h-full object-cover brightness-95" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-2 italic leading-tight">
                Khandya Planters&apos; Club
              </h3>
              <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase font-black opacity-80">
                Sangameshwarpet, Chikkamagaluru
              </p>
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div
            className="md:col-span-12 lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {/* Merged Info Box — No Icons */}
            <div 
              className="flex-1 bg-white p-6 rounded-[3rem] shadow-xl relative overflow-hidden border border-[#D2B48C]/30 flex flex-col justify-center"
            >
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 opacity-[0.03] pointer-events-none grayscale">
                <img src={mandalaImg} alt="" className="animate-spin-slow" />
              </div>

              <div className="mb-12">
                <p className="font-sans text-[11px] tracking-[0.4em] uppercase font-black text-slate-400 mb-4">Date & Time</p>
                <p className="font-serif text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                  Friday, May 8, 2026<br/>
                  <span className="text-xl text-slate-500 font-bold italic border-l-2 border-slate-300 pl-3">09:30 AM — 10:00 AM</span>
                </p>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.4em] uppercase font-black text-slate-400 mb-4">Dress Code</p>
                <p className="font-serif text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                  Traditional<br/>
                  <span className="text-xl text-slate-500 font-bold italic">Indian Ethnic Wear</span>
                </p>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com/?q=Khandya+Planters+Club+Chikkamagaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="py-6 bg-slate-900 rounded-full text-white shadow-xl flex items-center justify-center gap-4 hover:scale-[1.03] active:scale-95 transition-all text-sm tracking-[0.3em] font-black uppercase"
            >
              EXPLORE ROUTES 📍
            </a>
          </motion.div>
        </div>

        {/* Footer decorations */}
        <div className="flex justify-center items-center gap-6 mt-16 opacity-20 grayscale brightness-75">
           {Array.from({ length: 4 }).map((_, i) => (
            <img key={i} src={flowersImg} alt="" className="w-10" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
