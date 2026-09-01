"use client";

import * as React from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  shape: "pixel" | "cross" | "dot";
}

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export function InteractivePixelCanvas() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      "#38bdf8", // cyan / sky
      "#818cf8", // indigo
      "#c084fc", // violet
      "#34d399", // emerald
      "#fbbf24", // amber
      "#f472b6", // pink
    ];

    const particles: Particle[] = [];
    const sparkles: Sparkle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    // Initialize ambient particles
    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const baseAlpha = Math.random() * 0.4 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45 - 0.1, // slight upward drift
        size: Math.floor(Math.random() * 3) + 2, // 2px to 4px crisp pixels
        color,
        alpha: baseAlpha,
        baseAlpha,
        shape: Math.random() > 0.6 ? "cross" : Math.random() > 0.3 ? "pixel" : "dot",
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      // Spawn burst of 12-16 colorful retro pixel sparks
      const count = 14;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 3.5 + 1.5;
        sparkles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2,
          size: Math.random() > 0.5 ? 3 : 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          maxLife: Math.random() * 25 + 25,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Draw & update ambient particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction: brighten and connect
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const proximity = 1 - dist / mouse.radius;
          p.alpha = Math.min(1, p.baseAlpha + proximity * 0.6);

          // Draw faint laser trace to cursor
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${proximity * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          p.alpha = p.baseAlpha;
        }

        // Draw particle shape (pixel, cross, or square)
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;

        if (p.shape === "cross") {
          // Pixel cross (+)
          const s = p.size;
          ctx.fillRect(Math.floor(p.x) - s, Math.floor(p.y), s * 2 + 1, 1);
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y) - s, 1, s * 2 + 1);
        } else {
          // Pixel square
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
        }
      }

      // 3. Draw & update click sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.08; // subtle gravity
        s.vx *= 0.98; // friction
        s.life -= 1 / s.maxLife;

        if (s.life <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
