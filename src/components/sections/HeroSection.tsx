"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#060b14] text-white select-none">
      {/* ---------------------------------------------------- */}
      {/* 1. CELESTIAL MEDITERRANEAN AZURE & CYBERNETIC SONAR WAVES */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Atmospheric Glow Gradients */}
        <div className="absolute -top-32 right-1/4 w-[750px] h-[750px] bg-gradient-to-b from-[#1b64be]/30 via-[#0f4c94]/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-t from-amber-500/10 via-cyan-500/5 to-transparent rounded-full blur-[150px]" />

        {/* Concentric Cybernetic Sonar Waves (Behind Tyson) */}
        <div className="absolute top-1/2 right-10 lg:right-32 -translate-y-1/2 w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] flex items-center justify-center opacity-30">
          <div className="absolute w-[200px] h-[200px] rounded-full border border-amber-400/40 animate-pulse" />
          <div className="absolute w-[350px] h-[350px] rounded-full border border-cyan-400/30" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/20 border-dashed" />
          <div className="absolute w-[680px] h-[680px] rounded-full border border-white/10" />
          <div className="absolute w-[860px] h-[860px] rounded-full border border-amber-400/10" />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. ARCHITECTURAL BLUEPRINT GRID OVERLAY WITH CROSSHAIRS */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Horizontal Blueprint Lines */}
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/15" />
        <div className="absolute bottom-24 left-0 right-0 h-[1px] bg-white/15" />

        {/* Vertical Blueprint Lines */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-14 w-[1px] bg-white/15" />
        <div className="absolute top-0 bottom-0 right-6 sm:right-14 w-[1px] bg-white/15" />
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10" />

        {/* Intersection Crosshairs (+) */}
        <div className="absolute top-24 left-6 sm:left-14 -translate-x-1/2 -translate-y-1/2 text-amber-400/80 font-mono text-xs">
          +
        </div>
        <div className="absolute top-24 right-6 sm:right-14 translate-x-1/2 -translate-y-1/2 text-amber-400/80 font-mono text-xs">
          +
        </div>
        <div className="absolute bottom-24 left-6 sm:left-14 -translate-x-1/2 translate-y-1/2 text-amber-400/80 font-mono text-xs">
          +
        </div>
        <div className="absolute bottom-24 right-6 sm:right-14 translate-x-1/2 translate-y-1/2 text-amber-400/80 font-mono text-xs">
          +
        </div>

        {/* Prismatic Light Flare */}
        <div className="absolute top-1/3 left-14 sm:left-20 w-36 h-[2px] bg-gradient-to-r from-amber-400 via-cyan-300 to-rose-400 opacity-90 blur-[1px]" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. HERO STAGE: TYPOGRAPHY + INTEGRATED TYSON PORTRAIT */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-14 pt-32 sm:pt-40 pb-16 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Classical Headline & Positioning (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Brand Drop Glyph & Line 1 */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/25 backdrop-blur-md">
                <svg
                  className="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05]">
                <strong className="font-semibold underline decoration-amber-400/40 underline-offset-8">
                  tyson
                </strong>{" "}
                makes you appear.
              </h1>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]">
              Not an agency on the clock,
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]">
              a partner in the upside.
            </h2>
          </div>

          {/* Subtitle & Value Proposition */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans max-w-xl">
            We build custom software, autonomous AI agents, and private model infrastructure, rank them where customers search, and take our pay as a share of the revenue it earns. No retainers, no hours: if you don’t grow, we don’t get paid.
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-white hover:bg-slate-200 text-black text-xs sm:text-sm font-mono tracking-widest uppercase font-bold shadow-2xl transition-all group"
            >
              <span>Request partnership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-black/60 hover:bg-black/80 text-white text-xs sm:text-sm font-mono tracking-widest uppercase border border-white/25 backdrop-blur-md transition-all"
            >
              <span>Inspect The Work</span>
            </Link>

            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm text-slate-300 hover:text-white text-xs font-mono tracking-widest uppercase transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>CV (PDF)</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Tyson's Portrait Integrated with Cybernetic Chiaroscuro (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
          
          {/* Subtle Halo Rim Behind Tyson */}
          <div className="absolute w-[320px] h-[450px] sm:w-[420px] sm:h-[550px] bg-gradient-to-tr from-amber-500/20 via-sky-500/20 to-transparent rounded-full blur-[80px] pointer-events-none" />

          {/* Interactive Parallax Portrait Container */}
          <div
            style={{
              transform: `perspective(1000px) rotateY(${-mousePos.x * 6}deg) rotateX(${mousePos.y * 6}deg)`,
            }}
            className="relative w-[280px] h-[400px] sm:w-[360px] sm:h-[500px] transition-transform duration-300 ease-out"
          >
            {/* Architectural Frame Lines */}
            <div className="absolute -inset-3 border border-white/10 rounded-sm pointer-events-none" />
            <div className="absolute -top-3 -left-3 text-amber-400 font-mono text-[10px]">+</div>
            <div className="absolute -top-3 -right-3 text-amber-400 font-mono text-[10px]">+</div>
            <div className="absolute -bottom-3 -left-3 text-amber-400 font-mono text-[10px]">+</div>
            <div className="absolute -bottom-3 -right-3 text-amber-400 font-mono text-[10px]">+</div>

            {/* Tyson's Portrait Cutout */}
            <Image
              src="/images/me-cutout.png"
              alt="Tran Thai Son (Tyson) — AI Systems Builder & Architect"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />

            {/* Bottom Vignette Scrim so Portrait Merges Naturally into Page */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060b14] via-[#060b14]/70 to-transparent pointer-events-none" />

            {/* Floating Telemetry Badge 1 (Top Left) */}
            <div className="absolute -top-2 -left-6 sm:-left-10 px-3.5 py-1.5 rounded-sm bg-black/80 border border-white/20 backdrop-blur-xl font-mono text-[10px] text-amber-400 shadow-2xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>AI_ARCHITECT // OPERATOR</span>
            </div>

            {/* Floating Telemetry Badge 2 (Bottom Right) */}
            <div className="absolute bottom-8 -right-4 sm:-right-8 px-3.5 py-1.5 rounded-sm bg-black/80 border border-white/20 backdrop-blur-xl font-mono text-[10px] text-emerald-400 shadow-2xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>vLLM_INFRA · ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 4. BOTTOM ARCHITECTURAL TELEMETRY HUD */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-14 pb-8 w-full flex items-center justify-between text-xs font-mono text-white/80">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase">
            OPERATING AT THE AI FRONTIER // GLOBALLY AVAILABLE
          </span>
        </div>

        <a
          href="#about"
          className="hidden sm:inline-flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest text-[11px]"
        >
          <span>THE PHILOSOPHY</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
