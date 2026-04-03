import { motion } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import BrideGroomSection from "@/components/wedding/BrideGroomSection";
import EventsSection from "@/components/wedding/EventsSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import FloatingLanterns from "@/components/wedding/FloatingLanterns";
import CarTransition from "@/components/wedding/CarTransition";
import TraditionalDivider from "@/components/wedding/TraditionalDivider";
import FooterSection from "@/components/wedding/FooterSection";

// Reusable scroll-reveal wrapper with fade + lift effect
const PageReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    style={{ willChange: "transform, opacity" }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <main className="relative block h-auto min-h-screen pointer-events-auto" style={{ scrollBehavior: "auto" }}>
      {/* 🚀 Move fixed overlay to the bottom to prevent early interaction capture */}
      
      {/* HERO — no reveal wrapper, loads immediately */}
      <HeroSection />

      {/* 🚗 One vintage car — dramatic entrance between hero and bride/groom */}
      <CarTransition
        carType="black"
        flip={true}
        fromColor="hsl(270 30% 15%)"
        toColor="hsl(270 25% 18%)"
      />

      {/* BRIDE & GROOM */}
      <PageReveal>
        <BrideGroomSection />
      </PageReveal>

      {/* 🌺 Marigold mandala divider */}
      <TraditionalDivider
        variant="marigold"
        fromColor="hsl(270 25% 18%)"
        toColor="hsl(155 40% 12%)"
      />

      {/* EVENTS */}
      <PageReveal delay={0.05}>
        <EventsSection />
      </PageReveal>

      {/* 🪔 Diya / lantern row divider */}
      <TraditionalDivider
        variant="diya"
        fromColor="hsl(155 40% 12%)"
        toColor="hsl(270 20% 15%)"
      />

      {/* COUNTDOWN */}
      <PageReveal delay={0.05}>
        <CountdownSection />
      </PageReveal>

      {/* ✦ Gold ornament divider before footer */}
      <TraditionalDivider
        variant="gopuram"
        fromColor="hsl(270 20% 15%)"
        toColor="hsl(215 50% 12%)"
      />

      <PageReveal delay={0.05}>
        <FooterSection />
      </PageReveal>

      {/* Overlay - now at bottom */}
      <FloatingLanterns />
    </main>
  );
};

export default Index;
