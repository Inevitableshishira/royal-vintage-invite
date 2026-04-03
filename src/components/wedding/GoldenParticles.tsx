import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacitySpeed: number;
  life: number;
  maxLife: number;
  hue: number;
}

const GoldenParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnParticle = (): Particle => ({
      x: Math.random() * width,
      y: height * (0.2 + Math.random() * 0.6),
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 0.8 + 0.3),
      radius: Math.random() * 2.5 + 0.5,
      opacity: 0,
      opacitySpeed: Math.random() * 0.015 + 0.005,
      life: 0,
      maxLife: Math.random() * 160 + 80,
      hue: 40 + Math.random() * 20, // gold range 40–60
    });

    // pre-fill fewer particles
    for (let i = 0; i < 20; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // reduced spawn rate
      if (particles.length < 30 && Math.random() < 0.2) {
        particles.push(spawnParticle());
      }

      particles = particles.filter((p) => p.life < p.maxLife);

      for (const p of particles) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.0025; 

        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.opacity = Math.min(p.opacity + p.opacitySpeed, 0.75);
        } else if (progress > 0.75) {
          p.opacity = Math.max(p.opacity - p.opacitySpeed * 1.2, 0);
        }

        const twinkle = 0.9 + Math.sin(p.life * 0.12) * 0.1;
        const alpha = p.opacity * twinkle;
        
        if (alpha <= 0.01) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Only use expensive gradients for large particles (>2.0px)
        if (p.radius > 2.0) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
          grad.addColorStop(0, `hsla(${p.hue}, 90%, 85%, ${alpha})`);
          grad.addColorStop(1, `hsla(${p.hue}, 70%, 45%, 0)`);
          ctx.fillStyle = grad;
        } else {
          ctx.fillStyle = `hsla(${p.hue}, 85%, 65%, ${alpha})`;
        }
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default GoldenParticles;
