"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number;
  glowColor?: string;
  className?: string;
  children: React.ReactNode;
}

export function TiltCard({
  maxTilt = 6,
  glowColor = "rgba(56, 189, 248, 0.15)",
  className,
  children,
  ...props
}: TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = React.useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn(
        "relative rounded-3xl bg-white/80 dark:bg-surface-100/75 border border-slate-200/90 dark:border-surface-300/40 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-2xl overflow-hidden group",
        className
      )}
      {...props}
    >
      {/* Glare effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-10"
        style={{
          background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 70%)`,
          opacity: glarePos.opacity,
        }}
        aria-hidden="true"
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
