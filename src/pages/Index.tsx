import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import BrideGroomSection from "@/components/wedding/BrideGroomSection";

import EventsSection from "@/components/wedding/EventsSection";
import VenueSection from "@/components/wedding/VenueSection";
import ThingsToKnowSection from "@/components/wedding/ThingsToKnowSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import FloatingLanterns from "@/components/wedding/FloatingLanterns";
import CarTransition from "@/components/wedding/CarTransition";
import TraditionalDivider from "@/components/wedding/TraditionalDivider";
import OrnamentDivider from "@/components/wedding/OrnamentDivider";
import FooterSection from "@/components/wedding/FooterSection";

// Reusable scroll-reveal wrapper with fade + lift + blur
const PageReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1], // quint ease-out
    }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  // Scroll progress for the gold progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative block h-auto min-h-screen pointer-events-auto overflow-x-hidden w-full max-w-[100vw] overflow-hidden" style={{ scrollBehavior: "auto" }}>
      
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9999]"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #d4862a, #c5a059, #e8a4b8, #c5a059, #d4862a)",
          boxShadow: "0 0 8px rgba(212,134,42,0.5), 0 0 20px rgba(232,164,184,0.2)",
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

      {/* 🪔 Diya divider */}
      <TraditionalDivider variant="diya" fromColor="transparent" toColor="transparent" />



      {/* EVENTS */}
      <PageReveal delay={0.08}><EventsSection /></PageReveal>

      {/* 🪔 Diya / lantern row divider */}
      <TraditionalDivider variant="diya" fromColor="transparent" toColor="transparent" />

      {/* VENUE PHOTO */}
      <PageReveal delay={0.08}><VenueSection /></PageReveal>

      {/* Premium Ornament Divider */}
      <PageReveal delay={0.1}>
        <OrnamentDivider />
      </PageReveal>

      {/* THINGS TO KNOW */}
      <PageReveal delay={0.08}><ThingsToKnowSection /></PageReveal>

      {/* ✦ Gopuram divider before countdown */}
      <TraditionalDivider variant="gopuram" fromColor="transparent" toColor="transparent" />

      {/* COUNTDOWN */}
      <PageReveal delay={0.08}><CountdownSection /></PageReveal>

      <PageReveal delay={0.08}><FooterSection /></PageReveal>

      {/* Overlay - now at bottom */}
      <FloatingLanterns />
    </main>
  );
};

export default Index;
