"use client";

import * as React from "react";

interface PixelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

// Crisp 8-bit Pixel Bot
export function PixelBot({ size = 24, color = "#06b6d4", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="7" y="1" width="2" height="2" />
      <rect x="3" y="3" width="10" height="2" />
      <rect x="2" y="5" width="12" height="7" />
      {/* Eyes */}
      <rect x="4" y="7" width="2" height="2" fill="#000" />
      <rect x="10" y="7" width="2" height="2" fill="#000" />
      {/* Mouth */}
      <rect x="5" y="10" width="6" height="1" fill="#000" />
      {/* Antenna & Ears */}
      <rect x="0" y="7" width="2" height="3" />
      <rect x="14" y="7" width="2" height="3" />
      <rect x="4" y="12" width="2" height="2" />
      <rect x="10" y="12" width="2" height="2" />
    </svg>
  );
}

// Crisp 8-bit Pixel Lightning
export function PixelLightning({ size = 24, color = "#f59e0b", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="8" y="0" width="3" height="2" />
      <rect x="7" y="2" width="3" height="2" />
      <rect x="6" y="4" width="3" height="2" />
      <rect x="4" y="6" width="7" height="2" />
      <rect x="7" y="8" width="3" height="2" />
      <rect x="6" y="10" width="3" height="2" />
      <rect x="5" y="12" width="3" height="2" />
      <rect x="4" y="14" width="3" height="2" />
    </svg>
  );
}

// Crisp 8-bit Pixel Brain / Neural
export function PixelBrain({ size = 24, color = "#a855f7", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="4" y="1" width="8" height="2" />
      <rect x="2" y="3" width="12" height="2" />
      <rect x="1" y="5" width="14" height="6" />
      <rect x="2" y="11" width="12" height="2" />
      <rect x="4" y="13" width="8" height="2" />
      {/* Brain Fissure */}
      <rect x="7" y="3" width="2" height="10" fill="#000" />
      <rect x="4" y="6" width="2" height="1" fill="#000" />
      <rect x="10" y="6" width="2" height="1" fill="#000" />
      <rect x="3" y="8" width="3" height="1" fill="#000" />
      <rect x="10" y="8" width="3" height="1" fill="#000" />
    </svg>
  );
}

// Crisp 8-bit Pixel Heart (Community / Not Limited)
export function PixelHeart({ size = 24, color = "#ec4899", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="4" height="2" />
      <rect x="10" y="2" width="4" height="2" />
      <rect x="1" y="4" width="6" height="3" />
      <rect x="9" y="4" width="6" height="3" />
      <rect x="2" y="7" width="12" height="2" />
      <rect x="3" y="9" width="10" height="2" />
      <rect x="5" y="11" width="6" height="2" />
      <rect x="7" y="13" width="2" height="2" />
    </svg>
  );
}

// Crisp 8-bit Pixel Star
export function PixelStar({ size = 24, color = "#38bdf8", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="7" y="1" width="2" height="3" />
      <rect x="6" y="4" width="4" height="2" />
      <rect x="1" y="6" width="14" height="4" />
      <rect x="6" y="10" width="4" height="2" />
      <rect x="7" y="12" width="2" height="3" />
      <rect x="4" y="4" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="4" y="10" width="2" height="2" />
      <rect x="10" y="10" width="2" height="2" />
    </svg>
  );
}

// Crisp 8-bit Pixel Terminal / Code Screen
export function PixelTerminal({ size = 24, color = "#10b981", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="1" y="2" width="14" height="12" />
      {/* Screen Inner */}
      <rect x="2" y="3" width="12" height="10" fill="#000" />
      {/* Prompt `>` and cursor */}
      <rect x="4" y="5" width="2" height="1" fill={color} />
      <rect x="5" y="6" width="2" height="1" fill={color} />
      <rect x="4" y="7" width="2" height="1" fill={color} />
      <rect x="8" y="7" width="3" height="1" fill={color} />
    </svg>
  );
}

// Crisp 8-bit Pixel Gamepad / Athletics & Energy
export function PixelGamepad({ size = 24, color = "#f97316", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="10" height="8" />
      <rect x="1" y="6" width="14" height="6" />
      {/* D-pad and buttons in black */}
      <rect x="3" y="8" width="3" height="1" fill="#000" />
      <rect x="4" y="7" width="1" height="3" fill="#000" />
      <rect x="10" y="7" width="1" height="1" fill="#000" />
      <rect x="12" y="9" width="1" height="1" fill="#000" />
      <rect x="11" y="8" width="1" height="1" fill="#000" />
    </svg>
  );
}

// Crisp 8-bit Pixel Rocket / Launch
export function PixelRocket({ size = 24, color = "#3b82f6", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      <rect x="7" y="0" width="2" height="2" />
      <rect x="6" y="2" width="4" height="3" />
      <rect x="5" y="5" width="6" height="6" />
      {/* Porthole */}
      <rect x="7" y="6" width="2" height="2" fill="#000" />
      {/* Wings */}
      <rect x="3" y="9" width="2" height="4" />
      <rect x="11" y="9" width="2" height="4" />
      {/* Flame */}
      <rect x="7" y="11" width="2" height="3" fill="#f59e0b" />
      <rect x="6" y="14" width="4" height="2" fill="#ef4444" />
    </svg>
  );
}

// Crisp 8-bit Pixel Coffee
export function PixelCoffee({ size = 24, color = "#d97706", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={className}
      {...props}
    >
      {/* Steam */}
      <rect x="5" y="1" width="1" height="2" fill="#94a3b8" />
      <rect x="8" y="0" width="1" height="2" fill="#94a3b8" />
      <rect x="11" y="1" width="1" height="2" fill="#94a3b8" />
      {/* Cup */}
      <rect x="3" y="4" width="9" height="9" />
      <rect x="4" y="13" width="7" height="1" />
      {/* Handle */}
      <rect x="12" y="6" width="2" height="5" />
      <rect x="13" y="7" width="1" height="3" fill="#000" />
    </svg>
  );
}
