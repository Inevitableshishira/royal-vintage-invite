import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const SocialSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 text-center" style={{ background: "linear-gradient(180deg, hsl(160 25% 12%), hsl(215 50% 15%))" }}>
      <motion.h2
        className="font-serif text-3xl md:text-5xl gold-shimmer mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Follow the Action
      </motion.h2>
      <motion.p
        className="font-sans text-sm text-cream opacity-60 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Share your moments with us
      </motion.p>
      <motion.a
        href="https://instagram.com/explore/tags/pratharvan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border font-sans text-sm tracking-wider transition-all duration-300 text-gold gold-glow-hover"
        style={{ borderColor: "hsl(45 70% 55% / 0.4)", color: "hsl(45 70% 55%)" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Instagram size={20} />
        @PRATHARVAN
      </motion.a>
    </section>
  );
};

export default SocialSection;
