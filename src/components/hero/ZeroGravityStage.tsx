"use client";

import * as React from "react";
import { Sparkles, ArrowRight, FileText, Bot, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";

interface FloatingItemProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  depth: number;
  rotation: number;
  floatDelay: string;
  floatDuration: string;
  mouseX: number;
  mouseY: number;
  label: string;
  onClick?: () => void;
}

function FloatingItem({
  children,
  initialX,
  initialY,
  depth,
  rotation,
  floatDelay,
  floatDuration,
  mouseX,
  mouseY,
  label,
  onClick,
}: FloatingItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Parallax translation calculation
  const offsetX = initialX + mouseX * depth * 35;
  const offsetY = initialY + mouseY * depth * 35;
  const tiltX = mouseY * depth * 15;
  const tiltY = -mouseX * depth * 15;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0px) rotate(${rotation + (isHovered ? 8 : 0)}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        animationDuration: floatDuration,
        animationDelay: floatDelay,
      }}
      className="absolute cursor-pointer transition-transform duration-300 ease-out select-none group z-20 animate-float-gentle"
    >
      {children}

      {/* Floating Tooltip Label */}
      <div
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-white/10 text-white font-mono text-[10px] whitespace-nowrap border border-white/20 backdrop-blur-md transition-all duration-200 pointer-events-none ${
          isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export function ZeroGravityStage() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [headlineMode, setHeadlineMode] = React.useState<"creative" | "tyson">("tyson");
  const stageRef = React.useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

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
    <div
      ref={stageRef}
      className="relative min-h-[95vh] w-full flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-black text-white select-none"
    >
      {/* Subtle Apple-style Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/[0.06] via-emerald-500/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* ---------------------------------------------------- */}
      {/* FLOATING ZERO-GRAVITY ARTIFACTS (Interactive Objects) */}
      {/* ---------------------------------------------------- */}

      {/* 1. Retro Handheld Game Boy Console (Upper Left) */}
      <FloatingItem
        initialX={-280}
        initialY={-140}
        depth={1.4}
        rotation={-18}
        floatDelay="0s"
        floatDuration="5.2s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        label="RETRO_CONSOLE // VIBE_CODING"
        onClick={() => showToast("🎮 Retro Console: High-velocity playful engineering!")}
      >
        <div className="w-24 h-36 sm:w-28 sm:h-44 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 p-2.5 shadow-2xl border-2 border-sky-300/40 relative flex flex-col justify-between group-hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-shadow">
          {/* Bezel & Screen */}
          <div className="w-full h-20 sm:h-24 rounded-lg bg-slate-900 border-2 border-slate-700/80 p-2 flex flex-col justify-between">
            <div className="w-full h-full rounded bg-[#9bbc0f] p-1.5 flex flex-col justify-between font-mono text-[8px] text-[#0f380f] font-bold">
              <div className="flex items-center justify-between">
                <span>TYSON_OS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f380f] animate-ping" />
              </div>
              <div className="text-center text-[10px] tracking-tighter">▶ PLAY</div>
              <div className="text-[7px]">LVL 99 · AI AGENT</div>
            </div>
          </div>

          {/* Controls Cluster */}
          <div className="flex items-end justify-between px-1 pb-1">
            {/* D-Pad */}
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 m-auto w-7 h-2.5 bg-slate-900 rounded-sm" />
              <div className="absolute inset-0 m-auto w-2.5 h-7 bg-slate-900 rounded-sm" />
            </div>

            {/* A/B Red Round Buttons */}
            <div className="flex items-center gap-1.5 -rotate-25">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-600 border border-rose-400 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-rose-600 border border-rose-400 shadow-sm" />
            </div>
          </div>
        </div>
      </FloatingItem>

      {/* 2. Floating Open Sketchbook / Architecture Spec (Upper Right) */}
      <FloatingItem
        initialX={280}
        initialY={-160}
        depth={1.6}
        rotation={22}
        floatDelay="1.2s"
        floatDuration="6.0s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        label="ARCHITECTURE_NOTEBOOK // SPECS"
        onClick={() => showToast("📖 Spec-Driven Architecture: Measure twice, code once.")}
      >
        <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-lg bg-slate-100 text-slate-900 p-2.5 shadow-2xl border border-white/80 relative flex flex-col justify-between transform -rotate-12 group-hover:rotate-0 transition-transform">
          {/* Wire binding */}
          <div className="absolute -left-2 top-2 bottom-2 w-2 flex flex-col justify-between">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-3 h-1 rounded-full bg-slate-400 border border-slate-600" />
            ))}
          </div>

          {/* Magenta Header Banner & Guidelines */}
          <div className="space-y-1.5 pl-1.5">
            <div className="w-full h-1.5 rounded bg-rose-500" />
            <div className="space-y-1">
              <div className="w-3/4 h-1 rounded bg-slate-300" />
              <div className="w-full h-1 rounded bg-slate-300" />
              <div className="w-1/2 h-1 rounded bg-slate-300" />
            </div>
          </div>

          <div className="pl-1.5 text-[8px] font-mono text-slate-500 flex items-center justify-between">
            <span>SPEC v3.0</span>
            <span className="font-bold text-rose-600">PROD</span>
          </div>
        </div>
      </FloatingItem>

      {/* 3. Spinning Rainbow Holographic CD-ROM Disc (Bottom Center) */}
      <FloatingItem
        initialX={0}
        initialY={140}
        depth={1.2}
        rotation={0}
        floatDelay="0.6s"
        floatDuration="4.8s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        label="RELEASE_DISC // MODEL_GATEWAY"
        onClick={() => showToast("💿 Optical Release Disc: High-throughput model distribution.")}
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl relative flex items-center justify-center p-1 group-hover:scale-110 transition-transform animate-spin-slow">
          {/* Rainbow Spectral Gradient Wedges */}
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ffffff_0deg,#00f0ff_70deg,#ccff00_140deg,#ffffff_220deg,#f43f5e_300deg,#ffffff_360deg)] opacity-90" />
          
          {/* Inner Clear Plastic Ring */}
          <div className="w-10 h-10 rounded-full bg-black/80 border-2 border-white/60 relative flex items-center justify-center">
            {/* Center Spindle Hole */}
            <div className="w-4 h-4 rounded-full bg-black border border-white/40 shadow-inner" />
          </div>
        </div>
      </FloatingItem>

      {/* 4. Floating Basketball / Athletic Sphere (Bottom Left) */}
      <FloatingItem
        initialX={-320}
        initialY={100}
        depth={1.8}
        rotation={15}
        floatDelay="2.1s"
        floatDuration="5.8s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        label="ATHLETE_GRIT // DISCIPLINE"
        onClick={() => showToast("🏀 Athlete Mindset: Relentless discipline & team execution.")}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-500 via-orange-600 to-amber-900 shadow-2xl relative flex items-center justify-center overflow-hidden border border-orange-400/40">
          {/* Basketball Seams */}
          <div className="absolute inset-0 border-t-2 border-b-2 border-black/70 my-auto h-0" />
          <div className="absolute inset-0 border-l-2 border-r-2 border-black/70 mx-auto w-0" />
          <div className="absolute inset-2 rounded-full border border-black/40" />
        </div>
      </FloatingItem>

      {/* 5. Glowing AI Neural Core Wafer (Bottom Right) */}
      <FloatingItem
        initialX={310}
        initialY={110}
        depth={1.5}
        rotation={-12}
        floatDelay="1.8s"
        floatDuration="5.4s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        label="NEURAL_CORE // VPS_COMPUTE"
        onClick={() => showToast("⚡ Neural Compute: Self-hosted vLLM inference engine.")}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border-2 border-emerald-400 p-2 shadow-[0_0_25px_rgba(16,185,129,0.3)] flex flex-col justify-between items-center group-hover:border-emerald-300">
          <div className="w-full flex justify-between text-[7px] font-mono text-emerald-400">
            <span>AI_CHIP</span>
            <span>8nm</span>
          </div>
          <Cpu className="w-8 h-8 text-emerald-400 animate-pulse" />
          <div className="text-[7px] font-mono text-slate-400">vLLM_READY</div>
        </div>
      </FloatingItem>

      {/* ---------------------------------------------------- */}
      {/* CENTER STAGE: DRAMATIC EDITORIAL TYPOGRAPHY */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Toggle Mode Badge (Creative Director vs Tyson Signature) */}
        <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => setHeadlineMode("tyson")}
            className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold transition-all ${
              headlineMode === "tyson"
                ? "bg-white text-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            TYSON TRAN
          </button>
          <button
            onClick={() => setHeadlineMode("creative")}
            className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold transition-all ${
              headlineMode === "creative"
                ? "bg-white text-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            CREATIVE DIRECTOR
          </button>
        </div>

        {/* Giant Iconic Typography */}
        <div className="space-y-1">
          {headlineMode === "creative" ? (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif tracking-tight text-white uppercase leading-[0.88] drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
                CREATIVE
              </h1>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif tracking-tight text-white uppercase leading-[0.88] drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
                DIRECTOR
              </h1>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif tracking-tight text-white uppercase leading-[0.88] drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
                TYSON TRAN
              </h1>
              <div className="text-xl sm:text-3xl font-mono tracking-widest text-emerald-400 uppercase pt-2">
                AI BUILDER &amp; ARCHITECT
              </div>
            </div>
          )}
        </div>

        {/* Apple-grade Product Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-sans font-normal leading-relaxed pt-2">
          Operating at the frontier of autonomous AI agents, high-velocity vibe coding, and self-hosted cloud infrastructure — while mentoring builders worldwide.
        </p>

        {/* Key Capability Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 font-mono text-xs">
          <Badge variant="cyan" size="md">
            <Bot className="w-3.5 h-3.5" />
            <span>Multi-Agent Swarms</span>
          </Badge>
          <Badge variant="success" size="md">
            <Terminal className="w-3.5 h-3.5" />
            <span>vLLM Linux Infra</span>
          </Badge>
          <Badge variant="violet" size="md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vibe Coding 10x</span>
          </Badge>
        </div>

        {/* Action Button Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="rounded-full font-mono text-xs font-bold uppercase shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-all"
          >
            Work With Me
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="#projects"
            className="rounded-full font-mono text-xs font-bold uppercase bg-white/10 hover:bg-white/20 text-white border border-white/15"
          >
            Inspect Portfolio
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/cv"
            leftIcon={<FileText className="w-4 h-4" />}
            className="rounded-full font-mono text-xs border-white/20 text-slate-300 hover:text-white"
          >
            Download CV (PDF)
          </Button>
        </div>
      </div>
    </div>
  );
}
