import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import ovalFrameImg from "@/assets/oval-frame.png";

interface EventCardProps {
  title: string;
  icon: React.ReactNode;
  time: string;
  date: string;
  venue: string;
  index: number;
}

const EventCard = ({ title, icon, time, date, venue, index }: EventCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col items-center group"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 120 }}
    >
      {/* Oval frame background with glass effect */}
      <div className="relative w-44 h-56 md:w-52 md:h-64 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 section-glass rounded-[40%]">
        <motion.img
          src={ovalFrameImg}
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
          whileHover={{ rotate: [0, 1, -1, 0] }}
          transition={{ duration: 0.6 }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.div
            className="mb-3 flex justify-center text-gold"
            whileInView={{ scale: [0.5, 1.2, 1] }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + 0.3, duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-serif text-xl md:text-2xl text-gold font-semibold">{title}</h3>
          <p className="font-sans text-xs text-cream mt-2 opacity-80">{time}</p>
        </div>
      </div>
      <div className="mt-4 text-center pb-2">
        <p className="font-sans text-sm md:text-base font-bold text-cream tracking-wide">{date}</p>
        <p className="font-sans text-sm md:text-base font-medium text-gold mt-1">{venue}</p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(venue + ", Sangameshwarpet")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-xs font-sans text-gold transition-all duration-300 hover:underline gold-glow-hover rounded-full px-3 py-1 border border-transparent hover:border-wedding-gold"
        >
          <MapPin size={12} /> See the Route
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;
