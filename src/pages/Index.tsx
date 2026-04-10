import { motion } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import BrideGroomSection from "@/components/wedding/BrideGroomSection";
import EventsSection from "@/components/wedding/EventsSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import FloatingLanterns from "@/components/wedding/FloatingLanterns";
import CarTransition from "@/components/wedding/CarTransition";
import TraditionalDivider from "@/components/wedding/TraditionalDivider";
import FooterSection from "@/components/wedding/FooterSection";

import backgroundTopImg from "@/assets/wedding-background.png";

// Reusable scroll-reveal wrapper with fade + lift effect
const PageReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <main className="relative block h-auto min-h-screen pointer-events-auto overflow-x-hidden w-full max-w-[100vw] overflow-hidden bg-[#0d1a16]" style={{ scrollBehavior: "auto" }}>
      
      {/* ── BACKGROUND LAYERS ────────────────── */}
      {/* 1. Top Scenery — absolute behind content, fades into solid bg color */}
      <div className="absolute top-0 left-0 right-0 z-[-5] pointer-events-none" 
        style={{ 
          height: "413.5vw",
          backgroundImage: `linear-gradient(to bottom, transparent 80%, #0d1a16 100%), url(${backgroundTopImg})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          filter: "contrast(1.05) brightness(1.02) saturate(1.05)"
        }} 
      />

      {/* HERO — absolutely positioned over the temple peak */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroSection />
        </div>
      </div>

      {/* 
        This spacer exactly anchors the next section to the "brown horizontal line" 
        (the temple base) which is precisely 34% down the background image. 
        Because the background is scaled to 100% width, the image height is ~414vw, 
        and 34% of 414vw is roughly 140vw.
      */}
      <div style={{ height: "140vw", minHeight: "60vh", pointerEvents: "none" }} />

      {/* CAR TRANSITION — placed right on the brown horizontal line! */}
      <div className="relative -mt-20 md:-mt-32 z-0 pointer-events-none">
        <CarTransition carType="black" flip={true} fromColor="transparent" toColor="transparent" />
      </div>

      {/* BRIDE & GROOM — Starts EXACTLY at the temple base */}
      <section className="relative px-4 overflow-hidden" style={{ zIndex: 10 }}>
        <PageReveal>
          <BrideGroomSection />
        </PageReveal>
      </section>

      {/* 🌺 Marigold mandala divider */}
      <TraditionalDivider variant="marigold" fromColor="transparent" toColor="transparent" />

      {/* EVENTS */}
      <PageReveal delay={0.05}><EventsSection /></PageReveal>

      {/* 🪔 Diya / lantern row divider row divider */}
      <TraditionalDivider variant="diya" fromColor="transparent" toColor="transparent" />

      {/* COUNTDOWN */}
      <PageReveal delay={0.05}><CountdownSection /></PageReveal>

      {/* ✦ Gold ornament divider before footer */}
      <TraditionalDivider variant="gopuram" fromColor="transparent" toColor="transparent" />

      <PageReveal delay={0.05}><FooterSection /></PageReveal>

      {/* Overlay - now at bottom */}
      <FloatingLanterns />
    </main>
  );
};

export default Index;
