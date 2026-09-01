"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingObjectProps {
  children: React.ReactNode;
  initialX?: number; // percentage or pixel offset
  initialY?: number;
  depth?: number; // 0.5 (far/slow) to 2.5 (near/fast)
  rotation?: number; // initial degree
  floatDuration?: string;
  floatDelay?: string;
  mouseX?: number;
  mouseY?: number;
  label?: string;
  className?: string;
  onClick?: () => void;
  zIndex?: number;
  hideOnMobile?: boolean;
}

export function FloatingObject({
  children,
  initialX = 0,
  initialY = 0,
  depth = 1.0,
  rotation = 0,
  floatDuration = "6s",
  floatDelay = "0s",
  mouseX = 0,
  mouseY = 0,
  label,
  className = "",
  onClick,
  zIndex = 20,
  hideOnMobile = false,
}: FloatingObjectProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Parallax translation & 3D tilt calculation
  const offsetX = initialX + mouseX * depth * 32;
  const offsetY = initialY + mouseY * depth * 32;
  const tiltX = mouseY * depth * 14;
  const tiltY = -mouseX * depth * 14;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0px) rotate(${rotation + (isHovered ? 6 : 0)}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovered ? 1.06 : 1})`,
        animationDuration: floatDuration,
        animationDelay: floatDelay,
        zIndex,
      }}
      className={cn(
        "absolute cursor-pointer transition-transform duration-300 ease-out select-none group animate-float-slow",
        hideOnMobile ? "hidden md:block" : "block",
        className
      )}
    >
      {children}

      {/* Floating Tooltip Pill */}
      {label && (
        <div
          className={cn(
            "absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/80 text-white font-mono text-[10px] whitespace-nowrap border border-white/20 backdrop-blur-md transition-all duration-200 pointer-events-none shadow-xl z-30",
            isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
}
