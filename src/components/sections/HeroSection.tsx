"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#1562b8] text-white select-none">
      {/* ---------------------------------------------------- */}
      {/* 1. NEOCLASSICAL RENAISSANCE MASTERWORK HERO IMAGE */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/art/renaissance-hero.jpg"
          alt="Neoclassical Renaissance Cybernetic Painting"
          fill
          priority
          className="object-cover object-center sm:object-[center_30%]"
        />
        {/* Subtle gradient scrim on the left for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1562b8]/80 via-[#1562b8]/40 to-transparent sm:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. ARCHITECTURAL BLUEPRINT GRID OVERLAY WITH CROSSHAIRS */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top & Bottom Horizontal Blueprint Lines */}
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/20" />
        <div className="absolute bottom-28 left-0 right-0 h-[1px] bg-white/20" />

        {/* Vertical Blueprint Lines */}
        <div className="absolute top-0 bottom-0 left-8 sm:left-16 w-[1px] bg-white/20" />
        <div className="absolute top-0 bottom-0 right-8 sm:right-16 w-[1px] bg-white/20" />
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/15" />

        {/* Intersection Crosshair Marks (+) */}
        <div className="absolute top-24 left-8 sm:left-16 -translate-x-1/2 -translate-y-1/2 text-white/70 font-mono text-xs">
          +
        </div>
        <div className="absolute top-24 right-8 sm:right-16 translate-x-1/2 -translate-y-1/2 text-white/70 font-mono text-xs">
          +
        </div>
        <div className="absolute bottom-28 left-8 sm:left-16 -translate-x-1/2 translate-y-1/2 text-white/70 font-mono text-xs">
          +
        </div>
        <div className="absolute bottom-28 right-8 sm:right-16 translate-x-1/2 translate-y-1/2 text-white/70 font-mono text-xs">
          +
        </div>

        {/* Prismatic Light Dispersion Flare on Grid Line */}
        <div className="absolute top-1/2 left-16 sm:left-24 w-32 h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-300 to-rose-400 opacity-80 blur-[1px] -translate-y-12" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. HERO CONTENT & TYPOGRAPHY (Left-Aligned Precision) */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-16 pt-36 sm:pt-44 pb-20 w-full my-auto">
        <div className="max-w-2xl space-y-6">
          {/* Main Neoclassical Serif Headline */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2.5">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 border border-white/30 backdrop-blur-md">
                <svg
                  className="w-4 h-4 text-white"
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
                <strong className="font-semibold underline decoration-white/30 underline-offset-8">
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
          <p className="text-sm sm:text-base text-slate-100/90 leading-relaxed font-sans max-w-xl">
            We build custom software, autonomous AI agents, and private model infrastructure, rank them where customers search, and take our pay as a share of the revenue it earns. No retainers, no hours: if you don’t grow, we don’t get paid.
          </p>

          {/* Primary Action Button */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-black hover:bg-slate-900 text-white text-xs sm:text-sm font-mono tracking-widest uppercase border border-white/20 shadow-2xl hover:border-white/50 transition-all group"
            >
              <span>Request partnership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-mono tracking-widest uppercase border border-white/25 backdrop-blur-md transition-all"
            >
              <span>Inspect The Work</span>
            </Link>

            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm text-slate-200 hover:text-white text-xs font-mono tracking-widest uppercase transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>CV (PDF)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 4. BOTTOM ARCHITECTURAL TELEMETRY HUD */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-16 pb-8 w-full flex items-center justify-between text-xs font-mono text-white/80">
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
