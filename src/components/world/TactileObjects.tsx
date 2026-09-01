"use client";

import * as React from "react";

// ============================================================================
// 1. RETRO GAMEBOY CONSOLE (Glossy Polycarbonate + Backlit LCD + D-Pad)
// ============================================================================
export function RetroGameboy({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-22 h-34 xs:w-26 xs:h-40 sm:w-28 sm:h-44 lg:w-32 lg:h-48 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.35)] border-2 border-cyan-300/50 relative flex flex-col justify-between group hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all ${className}`}
    >
      {/* Top Gloss Reflection */}
      <div className="absolute top-1 left-3 right-3 h-1.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none" />

      {/* Screen Frame & Backlit LCD */}
      <div className="w-full h-18 sm:h-22 lg:h-26 rounded-lg bg-slate-950 border-2 border-slate-700/80 p-1.5 sm:p-2 flex flex-col justify-between shadow-inner">
        <div className="w-full h-full rounded bg-[#9bbc0f] p-1 sm:p-1.5 flex flex-col justify-between font-mono text-[7px] sm:text-[8px] text-[#0f380f] font-bold shadow-inner">
          <div className="flex items-center justify-between text-[6px] sm:text-[7px]">
            <span>TYSON_OS::v2.5</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f380f] animate-ping" />
          </div>
          <div className="text-center font-serif text-[9px] sm:text-[11px] tracking-tight font-black">
            ▶ VIBE CODING
          </div>
          <div className="flex items-center justify-between text-[6px] sm:text-[7px]">
            <span>LVL 99</span>
            <span className="text-[5px] sm:text-[6px] tracking-tighter">8 AGENTS READY</span>
          </div>
        </div>
      </div>

      {/* Controls & Tactile Buttons */}
      <div className="flex items-end justify-between px-1 pb-0.5 pt-0.5 sm:pb-1 sm:pt-1">
        {/* Directional Cross D-Pad */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
          <div className="absolute inset-0 m-auto w-6 sm:w-7 lg:w-8 h-2 sm:h-2.5 bg-slate-900 rounded-xs border border-slate-700 shadow-md" />
          <div className="absolute inset-0 m-auto w-2 sm:w-2.5 h-6 sm:h-7 lg:h-8 bg-slate-900 rounded-xs border border-slate-700 shadow-md" />
          <div className="absolute inset-0 m-auto w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-800" />
        </div>

        {/* Diagonal A/B Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5 -rotate-25">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-rose-500 to-rose-700 border border-rose-400 shadow-md active:scale-90" />
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-rose-500 to-rose-700 border border-rose-400 shadow-md active:scale-90" />
        </div>
      </div>

      {/* Bottom Speaker Grille Slots */}
      <div className="absolute bottom-2 right-2.5 sm:bottom-2.5 sm:right-3 flex gap-0.5 sm:gap-1 rotate-30 opacity-60">
        <div className="w-0.5 h-2.5 sm:h-3 bg-black/50 rounded-full" />
        <div className="w-0.5 h-2.5 sm:h-3 bg-black/50 rounded-full" />
        <div className="w-0.5 h-2.5 sm:h-3 bg-black/50 rounded-full" />
      </div>
    </div>
  );
}

// ============================================================================
// 2. ARCHITECTURAL SPEC NOTEBOOK (Paper Texture + Spiral Coil + Tape)
// ============================================================================
export function SpecNotebook({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-30 h-22 xs:w-34 xs:h-26 sm:w-38 sm:h-28 lg:w-44 lg:h-32 rounded-lg bg-[#f8fafc] text-slate-900 p-2 sm:p-3 shadow-[0_20px_45px_rgba(0,0,0,0.85)] border border-slate-300 relative flex flex-col justify-between ${className}`}
    >
      {/* Metallic Spiral Wire Coil on Left */}
      <div className="absolute -left-2 sm:-left-2.5 top-2 bottom-2 w-2.5 sm:w-3 flex flex-col justify-between z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-2.5 sm:w-3.5 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-600 shadow-sm"
          />
        ))}
      </div>

      {/* Top Magenta / Hot Pink Drafting Tape */}
      <div className="space-y-1 sm:space-y-1.5 pl-1.5 sm:pl-2">
        <div className="w-full h-2.5 sm:h-3 rounded-xs bg-rose-500 text-white font-mono text-[6px] sm:text-[7px] font-bold flex items-center px-1 sm:px-1.5 shadow-sm">
          <span>{"// ARCHITECTURE CONTRACT"}</span>
        </div>
        {/* Handwritten Mock Spec Guidelines */}
        <div className="space-y-0.5 sm:space-y-1 pt-0.5 sm:pt-1">
          <div className="flex items-center gap-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-cyan-700 font-bold">1.</span>
            <div className="w-4/5 h-0.5 sm:h-1 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-cyan-700 font-bold">2.</span>
            <div className="w-3/5 h-0.5 sm:h-1 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-cyan-700 font-bold">3.</span>
            <div className="w-full h-0.5 sm:h-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Bottom Spec Signature Badge */}
      <div className="pl-1.5 sm:pl-2 flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-slate-500 border-t border-slate-200 pt-0.5 sm:pt-1">
        <span className="font-bold text-slate-800">SPEC &gt; VIBE</span>
        <span className="px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded-xs bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 text-[6px] sm:text-[7px]">
          100% PROD
        </span>
      </div>

      {/* Folded Corner Effect */}
      <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-bl from-slate-300 via-slate-200 to-transparent rounded-bl-sm" />
    </div>
  );
}

// ============================================================================
// 3. HOLOGRAPHIC OPTICAL DISC (CD-ROM with Iridescent Spectral Reflection)
// ============================================================================
export function HoloDisc({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(59,130,246,0.3)] border border-white/40 flex items-center justify-center overflow-hidden group ${className}`}
      style={{
        background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8) 0%, rgba(200,225,255,0.4) 20%, rgba(139,92,246,0.5) 45%, rgba(6,182,212,0.6) 70%, rgba(245,158,11,0.5) 85%, rgba(16,185,129,0.7) 100%)`,
      }}
    >
      {/* Rotating Prismatic Rainbow Sheen */}
      <div
        className="absolute inset-0 opacity-80 mix-blend-color-dodge animate-spin"
        style={{
          animationDuration: "12s",
          background: `conic-gradient(from 0deg, #ff007f, #7928ca, #0070f3, #00dfd8, #7928ca, #ff007f)`,
        }}
      />

      {/* Outer Clear Plastic Track Ring */}
      <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-white/30 pointer-events-none" />

      {/* Center Mirror Hub & Spindle Hole */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-slate-900 border-2 border-white/60 flex items-center justify-center shadow-lg">
        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-black border border-white/40" />
      </div>

      {/* Laser Reflection Flare */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent pointer-events-none" />
    </div>
  );
}

// ============================================================================
// 4. MINI FROSTED GLASS CODE TERMINAL (macOS Window + Live Code Syntax)
// ============================================================================
export function MiniCodeTerminal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-52 xs:w-56 sm:w-64 lg:w-72 max-w-[85vw] rounded-lg bg-black/85 border border-cyan-500/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.25)] p-2.5 sm:p-3 space-y-2 sm:space-y-2.5 font-mono text-[9px] sm:text-[10px] text-slate-300 ${className}`}
    >
      {/* Top macOS Control Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 sm:pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500 border border-rose-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500 border border-amber-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 border border-emerald-400" />
        </div>
        <div className="text-[8px] sm:text-[9px] text-cyan-400 font-bold flex items-center gap-1">
          <span>agent_swarm.ts</span>
        </div>
        <div className="text-[7px] sm:text-[8px] text-slate-500 font-bold">UTF-8</div>
      </div>

      {/* Code Snippet */}
      <div className="space-y-0.5 sm:space-y-1 text-[8px] sm:text-[9px] leading-relaxed select-text">
        <div className="text-slate-500">{"// Chief of Agents pipeline"}</div>
        <div>
          <span className="text-violet-400">const</span>{" "}
          <span className="text-cyan-300">swarm</span> ={" "}
          <span className="text-amber-300">new</span>{" "}
          <span className="text-emerald-400">ChiefOfAgents</span>();
        </div>
        <div>
          <span className="text-violet-400">await</span>{" "}
          <span className="text-cyan-300">swarm</span>.
          <span className="text-blue-400">orchestrate</span>({`{`}
        </div>
        <div className="pl-2 sm:pl-3 text-slate-400">
          spec: <span className="text-emerald-300">&quot;production&quot;</span>,
        </div>
        <div className="pl-2 sm:pl-3 text-slate-400">
          agents: <span className="text-amber-400">8</span>,
        </div>
        <div>{`});`}</div>
        <div className="flex items-center gap-1 text-emerald-400 pt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-[8px] sm:text-[9px]">STATUS: 100% COMPILED</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. TACTILE BASKETBALL (Rubber Grain Texture + Cyber Grooves)
// ============================================================================
export function TactileBasketball({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(249,115,22,0.35)] border-2 border-orange-400/60 overflow-hidden flex items-center justify-center group ${className}`}
      style={{
        background: `radial-gradient(circle at 35% 30%, #fb923c 0%, #ea580c 50%, #9a3412 85%, #431407 100%)`,
      }}
    >
      {/* Pebbled Leather Highlights */}
      <div className="absolute inset-0 bg-radial-dots opacity-20 pointer-events-none" />

      {/* Horizontal Seam Rib */}
      <div className="absolute w-full h-[2px] sm:h-[2.5px] bg-black/90 shadow-sm" />

      {/* Vertical Curved Seam Rib */}
      <div className="absolute h-full w-[2px] sm:h-[2.5px] bg-black/90 shadow-sm" />

      {/* Left & Right Curved Panel Seams */}
      <div className="absolute -left-2.5 sm:-left-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-black/80 pointer-events-none" />
      <div className="absolute -right-2.5 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-black/80 pointer-events-none" />

      {/* Cyber Glow Center Line Accent */}
      <div className="absolute w-full h-[1px] bg-amber-300/40 blur-[0.5px]" />

      {/* Specular Highlight Sheen */}
      <div className="absolute top-1.5 left-2 sm:top-2 sm:left-3 w-4 h-2 sm:w-6 sm:h-3 rounded-full bg-white/30 blur-[2px] rotate-45 pointer-events-none" />
    </div>
  );
}

// ============================================================================
// 6. SERVER BLADE / GPU COMPUTE CHASSIS (Brushed Metal + Pulsing LEDs)
// ============================================================================
export function ServerBlade({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-36 xs:w-40 sm:w-44 lg:w-52 max-w-[85vw] h-20 sm:h-24 rounded-sm bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-cyan-500/40 p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(6,182,212,0.2)] font-mono text-[8px] sm:text-[9px] flex flex-col justify-between text-slate-300 ${className}`}
    >
      {/* Top Status Plate */}
      <div className="flex items-center justify-between border-b border-white/10 pb-1 sm:pb-1.5">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-white tracking-wider text-[8px] sm:text-[9px]">vLLM::GPU_NODE_01</span>
        </div>
        <span className="text-[6px] sm:text-[7px] text-cyan-400 font-bold px-1 sm:px-1.5 py-0.5 bg-cyan-950/60 border border-cyan-500/30 rounded-xs">
          24GB VRAM
        </span>
      </div>

      {/* Fan Intake Grille & Activity Bar */}
      <div className="flex items-center gap-2 py-1">
        {/* Hex Fan Vents */}
        <div className="w-12 h-10 rounded-xs bg-black border border-white/15 p-1 flex flex-wrap gap-0.5 items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>

        {/* Telemetry Metrics */}
        <div className="space-y-0.5 text-[8px] flex-1">
          <div className="flex justify-between">
            <span className="text-slate-400">INFERENCE:</span>
            <span className="text-emerald-300 font-bold">128 tok/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">LATENCY:</span>
            <span className="text-cyan-300 font-bold">14ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">THERMAL:</span>
            <span className="text-amber-300 font-bold">54°C</span>
          </div>
        </div>
      </div>

      {/* Bottom PCIe Gold Contact Edge */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 rounded-xs border-t border-amber-200" />
    </div>
  );
}

// ============================================================================
// 7. RETRO CRT MONITOR (90s Beige PC with Green Phosphor Scanlines)
// ============================================================================
export function CRTMonitor({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-28 h-26 xs:w-30 xs:h-28 sm:w-34 sm:h-32 lg:w-36 lg:h-34 rounded-xl bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.85)] border-2 border-[#94a3b8] relative flex flex-col justify-between text-slate-900 ${className}`}
    >
      {/* CRT Screen Bezel */}
      <div className="w-full h-18 sm:h-20 lg:h-22 rounded-lg bg-black border-2 border-slate-700 p-1 sm:p-1.5 flex flex-col justify-between relative overflow-hidden shadow-inner">
        {/* Curved Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent bg-[length:100%_3px] pointer-events-none" />

        <div className="font-mono text-[6px] sm:text-[7px] text-emerald-400 leading-tight space-y-0.5 select-none">
          <div className="text-white font-bold">MS-DOS v6.22</div>
          <div>C:\&gt; TYSON_BOOT.EXE</div>
          <div className="text-emerald-300 animate-pulse">&gt; SYS_READY_</div>
        </div>

        <div className="flex items-center justify-between text-[5px] sm:text-[6px] font-mono text-emerald-500">
          <span>LỚP 3 · 1999</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Bottom Power Knob & Brand Badge */}
      <div className="flex items-center justify-between px-1 pt-0.5 sm:pt-1">
        <div className="text-[6px] sm:text-[7px] font-bold font-serif tracking-widest text-slate-600">
          TYSON
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-400 border border-slate-600" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 8. VINTAGE 3.5" FLOPPY DISK (Matte Shell + Metal Slider + Paper Label)
// ============================================================================
export function FloppyDisk({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-md bg-slate-900 border-2 border-slate-700 p-1.5 sm:p-2 shadow-2xl relative flex flex-col justify-between group ${className}`}
    >
      {/* Top Sliding Metal Shutter */}
      <div className="w-11 sm:w-14 h-6 sm:h-8 mx-auto rounded-xs bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 border border-slate-500 shadow-sm flex items-center justify-center">
        <div className="w-2.5 sm:w-3 h-4 sm:h-5 rounded-xs bg-slate-800 border border-slate-600" />
      </div>

      {/* Paper Adhesive Label */}
      <div className="w-full h-8 sm:h-10 rounded-xs bg-amber-50 text-slate-900 p-1 border border-amber-200 font-mono text-[6px] sm:text-[7px] leading-tight flex flex-col justify-between shadow-xs">
        <div className="font-bold text-blue-900 uppercase">HTML &amp; JS v1.0</div>
        <div className="text-[5px] sm:text-[6px] text-slate-600 flex justify-between">
          <span>LỚP 4–7</span>
          <span className="font-bold">1.44 MB</span>
        </div>
      </div>

      {/* Write-protect Notch */}
      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-xs" />
    </div>
  );
}

// ============================================================================
// 9. AI NEURAL SILICON PROCESSOR CHIP (Gold Pins + Glowing Core)
// ============================================================================
export function AIChip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-md bg-slate-950 border-2 border-violet-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(139,92,246,0.35)] p-1.5 sm:p-2 flex items-center justify-center group ${className}`}
    >
      {/* Perimeter Gold Contact Pins */}
      <div className="absolute inset-0 border border-dashed border-amber-400/40 rounded-md pointer-events-none" />

      {/* Metallic Heat Spreader Core */}
      <div className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-sm bg-gradient-to-br from-slate-800 via-violet-950 to-black border border-violet-400/60 flex flex-col items-center justify-center text-center p-1 font-mono shadow-inner">
        <div className="text-[6px] sm:text-[7px] text-amber-400 font-bold tracking-widest">NEURAL_CORE</div>
        <div className="text-xs sm:text-sm font-bold text-white font-serif tracking-tight">AI 70B</div>
        <div className="text-[5px] sm:text-[6px] text-cyan-300">MULTI-AGENT</div>
        {/* Pulsing Core LED */}
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] animate-ping mt-0.5 sm:mt-1" />
      </div>
    </div>
  );
}

// ============================================================================
// 10. SATELLITE COMMS ANTENNA (Direct Comms Dish with Radio Wave Arcs)
// ============================================================================
export function CommsAntenna({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-black/80 border border-cyan-400/50 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center font-mono ${className}`}
    >
      {/* Concentric Signal Arcs */}
      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-500/30 animate-ping" />
      <div className="absolute w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-blue-500/40" />

      {/* Central Horn Emitter */}
      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-pulse" />
      </div>

      <div className="absolute bottom-1 text-[6px] sm:text-[7px] font-bold text-cyan-400 tracking-wider">
        DIRECT_LINK
      </div>
    </div>
  );
}
