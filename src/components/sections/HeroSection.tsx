"use client";

import * as React from "react";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ShowcaseCard {
  id: string;
  title: string;
  category: string;
  tagline: string;
  stat: string;
  statLabel: string;
  accent: string;
  rotation: string;
  positionClass: string;
  bgGradient: string;
}

const showcaseCards: ShowcaseCard[] = [
  {
    id: "router",
    title: "Not Limited Router",
    category: "AI INFRASTRUCTURE",
    tagline: "Dynamic model routing gateway with automatic fallback across local & cloud LLMs.",
    stat: "< 12ms",
    statLabel: "LATENCY",
    accent: "text-emerald-400 border-emerald-500/30",
    rotation: "-rotate-6 hover:rotate-0",
    positionClass: "lg:-translate-x-28 lg:-translate-y-4",
    bgGradient: "from-slate-900 to-emerald-950/40",
  },
  {
    id: "agents",
    title: "Autonomous Agent Swarms",
    category: "MULTI-AGENT RAG",
    tagline: "Deterministic tool contracts, memory recall graphs, and self-correcting pipelines.",
    stat: "100%",
    statLabel: "TOOL ACCURACY",
    accent: "text-cyan-400 border-cyan-500/30",
    rotation: "rotate-2 hover:rotate-0",
    positionClass: "lg:translate-x-0 lg:-translate-y-12 z-20",
    bgGradient: "from-slate-900 to-cyan-950/40",
  },
  {
    id: "vibe",
    title: "Vibe Coding 10x",
    category: "HIGH-VELOCITY MVP",
    tagline: "Spec-driven development turning complex architectures into production web apps.",
    stat: "10x",
    statLabel: "SHIPPING SPEED",
    accent: "text-rose-400 border-rose-500/30",
    rotation: "rotate-8 hover:rotate-0",
    positionClass: "lg:translate-x-28 lg:translate-y-2",
    bgGradient: "from-slate-900 to-rose-950/40",
  },
];

export function HeroSection() {
  const [activeCardId, setActiveCardId] = React.useState<string>("agents");
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
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#060709] text-white select-none">
      {/* Background Soft Organic Smoke Glow Cones (like Image 3) */}
      <div className="absolute -top-40 left-1/4 w-[700px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-gradient-to-bl from-indigo-500/10 via-rose-500/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Architectural Corner Crosshairs (like Image 2) */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative pointer-events-none">
        <div className="absolute top-0 left-6 text-slate-600 font-mono text-sm">+</div>
        <div className="absolute top-0 right-6 text-slate-600 font-mono text-sm">+</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto space-y-12 relative z-10">
        {/* ---------------------------------------------------- */}
        {/* 1. TOP INTERACTIVE PHYSICAL SHOWCASE STAGE (Image 2 & 4 style) */}
        {/* ---------------------------------------------------- */}
        <div className="relative py-6 flex items-center justify-center min-h-[320px] sm:min-h-[360px]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 w-full">
            {showcaseCards.map((card) => {
              const isSelected = activeCardId === card.id;
              const tiltX = mousePos.y * 10;
              const tiltY = -mousePos.x * 10;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveCardId(card.id)}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                  }}
                  className={cn(
                    "w-full max-w-sm sm:w-80 rounded-3xl p-6 border transition-all duration-500 cursor-pointer shadow-2xl backdrop-blur-2xl bg-gradient-to-b relative group",
                    card.positionClass,
                    card.rotation,
                    card.bgGradient,
                    isSelected
                      ? "border-white/40 ring-2 ring-emerald-400/50 scale-105 z-30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                      : "border-white/10 opacity-85 hover:opacity-100 hover:scale-102 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400">
                      {card.category}
                    </span>
                    <span className={cn("text-xs font-mono font-bold", card.accent)}>
                      {card.statLabel}: {card.stat}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {card.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      DEPLOYED
                    </span>
                    <span className="text-emerald-400 font-bold group-hover:underline flex items-center gap-1">
                      INSPECT SPECS →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. MASSIVE EDITORIAL TYPOGRAPHY & POSITIONING (Images 2 & 3 style) */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-6 pt-4 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI BUILDER · SOFTWARE DEVELOPER · EDUCATOR</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95] font-sans">
                ENGINEERING AUTONOMOUS AI &amp; HIGH-VELOCITY SYSTEMS.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Operating at the frontier of multi-agent orchestration, self-hosted LLM infrastructure, and vibe coding — while mentoring builders worldwide.
              </p>
            </div>

            {/* Apple-style Action Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end shrink-0">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="rounded-full font-mono text-xs font-bold uppercase bg-white text-black hover:bg-slate-200 shadow-xl px-7 py-3.5"
              >
                Work With Me
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#projects"
                className="rounded-full font-mono text-xs font-bold uppercase bg-white/10 hover:bg-white/20 text-white border border-white/15 px-7 py-3.5"
              >
                Inspect Portfolio
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/cv"
                leftIcon={<FileText className="w-4 h-4" />}
                className="rounded-full font-mono text-xs border-white/20 text-slate-300 hover:text-white"
              >
                Download CV (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. BOTTOM HUD BAR WITH LIVE SCROLL INDICATOR (Image 2 style) */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-8 flex items-center justify-between border-t border-white/10 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            ACCEPTING_NEW_BRIEFS
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline">Q3/Q4 ENGAGEMENTS</span>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
        >
          <span>Scroll down</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
