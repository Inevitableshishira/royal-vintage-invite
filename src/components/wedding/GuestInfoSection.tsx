import { motion } from "framer-motion";
import { Hash, Sun, Users, Car } from "lucide-react";

const items = [
  { icon: Hash, title: "Hashtag", desc: "#PRATHARVAN" },
  { icon: Sun, title: "Weather", desc: "Sunny, 27°C – 31°C" },
  { icon: Users, title: "Staff", desc: "Onsite team available 24/7" },
  { icon: Car, title: "Parking", desc: "Complimentary valet parking" },
];

const GuestInfoSection = () => {
  return (
    <section className="py-20 md:py-28 px-4" style={{ background: "hsl(160 25% 12%)" }}>
      <motion.h2
        className="font-serif text-3xl md:text-5xl text-center gold-shimmer mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Things to Know
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="flex flex-col items-center text-center p-6 rounded-xl border transition-all duration-300 gold-glow-hover"
            style={{
              borderColor: "hsl(45 70% 55% / 0.2)",
              background: "hsl(150 30% 8% / 0.5)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <item.icon className="text-gold mb-3" size={28} style={{ color: "hsl(45 70% 55%)" }} />
            <h3 className="font-serif text-lg text-gold">{item.title}</h3>
            <p className="font-sans text-xs text-cream opacity-70 mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GuestInfoSection;
