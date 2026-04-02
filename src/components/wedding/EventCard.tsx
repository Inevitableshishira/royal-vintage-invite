import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
      {/* Decorative oval frame - CSS only */}
      <div className="relative w-44 h-56 md:w-52 md:h-64 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <div 
          className="absolute inset-0 rounded-[50%] border border-gold/40 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: "inset 0 0 15px hsl(45 70% 55% / 0.1), 0 0 15px hsl(45 70% 55% / 0.1)"
          }}
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
      <div className="mt-3 text-center">
        <p className="font-sans text-xs text-lavender">{date}</p>
        <p className="font-sans text-xs text-mint mt-1">{venue}</p>
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
