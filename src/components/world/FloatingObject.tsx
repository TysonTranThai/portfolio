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
  hideOnTablet?: boolean;
  priority?: "high" | "medium" | "low";
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
  hideOnTablet = false,
  priority = "high",
}: FloatingObjectProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    }
  }, []);

  // Parallax translation & 3D tilt calculation - softened on smaller viewports
  const motionFactor = isTouchDevice ? 0 : 1;
  const offsetX = initialX + mouseX * depth * 24 * motionFactor;
  const offsetY = initialY + mouseY * depth * 24 * motionFactor;
  const tiltX = mouseY * depth * 10 * motionFactor;
  const tiltY = -mouseX * depth * 10 * motionFactor;

  // Priority-based visibility classes:
  // - "high": visible on desktop, tablet, and mobile (positioned carefully)
  // - "medium": visible ONLY on large screens (lg:block / >=1024px)
  // - "low": visible ONLY on extra large desktops (xl:block / >=1280px)
  const priorityClasses =
    priority === "low"
      ? "hidden xl:block"
      : priority === "medium"
      ? "hidden lg:block"
      : hideOnMobile
      ? "hidden md:block"
      : hideOnTablet
      ? "hidden lg:block"
      : "block";

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0px) rotate(${rotation + (isHovered ? 4 : 0)}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovered ? 1.05 : 1})`,
        animationDuration: floatDuration,
        animationDelay: floatDelay,
        zIndex,
      }}
      className={cn(
        "absolute cursor-pointer transition-transform duration-300 ease-out select-none group animate-float-slow max-w-full",
        priorityClasses,
        className
      )}
    >
      {children}

      {/* Floating Tooltip Pill */}
      {label && (
        <div
          className={cn(
            "absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/90 text-white font-mono text-[9px] sm:text-[10px] whitespace-nowrap border border-white/20 backdrop-blur-md transition-all duration-200 pointer-events-none shadow-xl z-30",
            isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
}
