"use client";

import * as React from "react";
import {
  PixelBot,
  PixelLightning,
  PixelBrain,
  PixelHeart,
  PixelTerminal,
  PixelGamepad,
  PixelRocket,
  PixelCoffee,
} from "./PixelArtIcons";

export function FloatingPixelDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ---------------------------------------------------- */}
      {/* 1. FLOATING 8-BIT PIXEL ART ICONS & COMPANIONS */}
      {/* ---------------------------------------------------- */}

      {/* Top Left: Pixel Bot Companion */}
      <div className="absolute top-[8%] left-[2%] sm:left-[3%] opacity-70 animate-pixel-1 flex flex-col items-center gap-1 group">
        <div className="p-2 rounded-sm bg-cyan-950/40 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-md">
          <PixelBot size={20} color="#38bdf8" />
        </div>
        <span className="text-[8px] font-mono text-cyan-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-cyan-500/20">
          BOT::ACTIVE
        </span>
      </div>

      {/* Top Right: Pixel Lightning Bolt (Speed & 10x Velocity) */}
      <div className="absolute top-[11%] right-[2%] sm:right-[4%] opacity-70 animate-pixel-2 flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-amber-950/40 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)] backdrop-blur-md">
          <PixelLightning size={20} color="#fbbf24" />
        </div>
        <span className="text-[8px] font-mono text-amber-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-amber-500/20">
          10X_SPEED
        </span>
      </div>

      {/* Mid Left: Pixel Neural Brain (AI & LLMs) */}
      <div className="absolute top-[32%] left-[1.5%] sm:left-[2.5%] opacity-65 animate-pixel-3 hidden sm:flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-violet-950/40 border border-violet-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-md">
          <PixelBrain size={20} color="#c084fc" />
        </div>
        <span className="text-[8px] font-mono text-violet-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-violet-500/20 hidden md:inline">
          NEURAL_NET
        </span>
      </div>

      {/* Mid Right: Pixel Terminal (Code & Vibe Coding) */}
      <div className="absolute top-[36%] right-[1.5%] sm:right-[3%] opacity-65 animate-pixel-1 hidden sm:flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-emerald-950/40 border border-emerald-400/40 shadow-[0_0_15px_rgba(160,185,129,0.3)] backdrop-blur-md">
          <PixelTerminal size={20} color="#34d399" />
        </div>
        <span className="text-[8px] font-mono text-emerald-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-emerald-500/20 hidden md:inline">
          PROMPT_SPEC
        </span>
      </div>

      {/* Lower Left: Pixel Heart (Community / Not Limited) */}
      <div className="absolute top-[58%] left-[2%] sm:left-[3.5%] opacity-70 animate-pixel-2 hidden md:flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-pink-950/40 border border-pink-400/40 shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-md">
          <PixelHeart size={20} color="#f472b6" />
        </div>
        <span className="text-[8px] font-mono text-pink-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-pink-500/20 hidden lg:inline">
          COMMUNITY
        </span>
      </div>

      {/* Lower Right: Pixel Rocket (Rapid MVP Launch) */}
      <div className="absolute top-[64%] right-[2%] sm:right-[3.5%] opacity-70 animate-pixel-3 hidden md:flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-blue-950/40 border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md">
          <PixelRocket size={20} color="#60a5fa" />
        </div>
        <span className="text-[8px] font-mono text-blue-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-blue-500/20 hidden lg:inline">
          MVP_SHIP
        </span>
      </div>

      {/* Bottom Left: Pixel Gamepad (Discipline & Energy) */}
      <div className="absolute top-[82%] left-[2.5%] sm:left-[4%] opacity-65 animate-pixel-1 hidden sm:flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-orange-950/40 border border-orange-400/40 shadow-[0_0_15px_rgba(249,115,22,0.3)] backdrop-blur-md">
          <PixelGamepad size={20} color="#fb923c" />
        </div>
        <span className="text-[8px] font-mono text-orange-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-orange-500/20 hidden sm:inline">
          RESILIENCE
        </span>
      </div>

      {/* Bottom Right: Pixel Coffee (Builder Fuel) */}
      <div className="absolute top-[86%] right-[2.5%] sm:right-[4%] opacity-65 animate-pixel-2 hidden sm:flex flex-col items-center gap-1">
        <div className="p-2 rounded-sm bg-amber-950/40 border border-amber-400/40 shadow-[0_0_15px_rgba(217,119,6,0.3)] backdrop-blur-md">
          <PixelCoffee size={20} color="#f59e0b" />
        </div>
        <span className="text-[8px] font-mono text-amber-300/80 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded-xs border border-amber-500/20 hidden sm:inline">
          NONSTOP_BUILD
        </span>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. FLOATING CYBER GLYPHS & PIXEL STARS */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-[20%] left-[8%] text-blue-400 font-mono text-xs opacity-50 animate-pixel-2">
        ✦
      </div>
      <div className="absolute top-[25%] right-[9%] text-violet-400 font-mono text-sm opacity-50 animate-pixel-1">
        ✧
      </div>
      <div className="absolute top-[48%] left-[7%] text-emerald-400 font-mono text-xs opacity-50 animate-pixel-3">
        ⬡
      </div>
      <div className="absolute top-[55%] right-[8%] text-cyan-400 font-mono text-xs opacity-50 animate-pixel-2">
        ◈
      </div>
      <div className="absolute top-[75%] left-[9%] text-amber-400 font-mono text-xs opacity-50 animate-pixel-1">
        +
      </div>
      <div className="absolute top-[78%] right-[8%] text-pink-400 font-mono text-xs opacity-50 animate-pixel-3">
        ■
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. AMBIENT RETRO CORNER BREADCRUMBS */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-3 left-4 text-cyan-400/50 font-mono text-[9px] select-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-none bg-cyan-400 animate-pulse" />
        <span>┌─ [TYSON_OS::v2.5] ─┐</span>
      </div>
      <div className="absolute top-3 right-4 text-cyan-400/50 font-mono text-[9px] select-none text-right flex items-center gap-1.5">
        <span>┌─ [LOC: VIETNAM · AI_NODE] ─┐</span>
        <span className="w-1.5 h-1.5 rounded-none bg-emerald-400" />
      </div>
    </div>
  );
}
