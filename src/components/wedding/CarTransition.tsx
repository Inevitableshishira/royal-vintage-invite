import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import carBlackImg from "@/assets/vintage-car-black.png";
import carTealImg from "@/assets/vintage-car-teal.png";

interface CarTransitionProps {
  flip?: boolean;
  carType?: "black" | "teal";
  fromColor?: string;
  toColor?: string;
}

const CarTransition = ({
  flip = false,
  carType = "black",
  fromColor = "white",
  toColor = "white",
}: CarTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Car drives Right-to-Left (flip=true)
  // X=110vw (Right side) at scroll start (0)
  // X=-110vw (Left side) at scroll end (1)
  // Center-anchored travel path: moves from one side of the viewport's center to the other.
  // This approach is perfectly responsive for all devices (Mobile to Ultra-wide).
  const carX = useTransform(
    scrollYProgress,
    [0.1, 0.9], // Start/End slightly tighter for better visibility
    flip 
      ? ["70vw", "-70vw"] // Start right relative to center, cross to left
      : ["-70vw", "70vw"] // Start left relative to center, cross to right
  );
  
  const carOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );
  
  const carScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Tilt the car slightly during entrance/exit
  const carRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    flip ? [2, 0, -2] : [-2, 0, 2]
  );

  // Subtle bobbing motion
  const carY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -3, 3, -3, 3, 0]
  );

  const carImg = carType === "teal" ? carTealImg : carBlackImg;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden pointer-events-none"
      style={{
        height: "280px", // Increased height
        background: `linear-gradient(180deg, ${fromColor}, ${toColor})`,
        zIndex: 50, // Improved composition performance
        isolation: "isolate",
      }}
    >
      {/* Container that allows the car to be visible even if it exceeds the height during motion */}
      <div className="absolute inset-0 overflow-visible">
        
        {/* Road line with dashed pattern */}
        <div
          className="absolute left-0 right-0 pointer-events-none opacity-20"
          style={{
            top: "70%",
            height: "2px",
            backgroundImage: "linear-gradient(90deg, hsl(45 70% 55%) 50%, transparent 50%)",
            backgroundSize: "60px 100%",
            zIndex: 1,
          }}
        />

        {/* Car container */}
        <motion.div
          className="absolute"
          style={{
            x: carX,
            y: carY,
            rotate: carRotate,
            opacity: carOpacity,
            scale: carScale,
            top: "20%",
            zIndex: 10,
            left: "50%", // Anchor to exact horizontal center
            translateX: "-50%", // Keep the car itself centered relative to its position
          }}
        >
          <div className="relative">
            {/* Shadow under car */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2"
              style={{
                width: "85%",
                height: "24px",
                background: "rgba(0,0,0,0.6)",
                filter: "blur(20px)",
                borderRadius: "50%",
              }}
            />
            <img
              src={carImg}
              alt="vintage car"
              className="w-56 md:w-80 relative z-20"
              style={{
                filter: "contrast(1.05) brightness(0.95) drop-shadow(0 15px 25px rgba(0,0,0,0.5))",
                // Flip the face based on user feedback
                transform: flip ? "scaleX(1)" : "scaleX(-1)",
              }}
            />
          </div>
        </motion.div>

        {/* Motion trail / dust */}
        <motion.div
          className="absolute top-[70%] left-0 right-0 flex justify-center pointer-events-none"
          style={{ x: carX, zIndex: 5 }}
        >
            <div className={`absolute ${flip ? 'left-auto -right-12' : '-left-12'}`}>
              {Array.from({ length: 2 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gold/10 rounded-full blur-xl"
                  style={{
                    width: 60 + i * 25,
                    height: 40 + i * 15,
                    left: flip ? i * 40 : -i * 40,
                    bottom: -i * 5,
                    willChange: "transform, opacity",
                  }}
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }}
                />
              ))}
            </div>
        </motion.div>
      </div>

      {/* Ornament line */}
      <div className="absolute inset-x-0 top-1/2 h-px pointer-events-none opacity-[0.03]"
        style={{ background: "hsl(45 70% 55%)", zIndex: 0 }} />
    </div>
  );
};

export default CarTransition;
