"use client";

import * as React from "react";
import {
  ArrowRight,
  Terminal,
  Cpu,
  FileText,
  Copy,
  Activity,
  ShieldCheck,
  Sparkles,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";

type CommandKey = "whoami" | "capabilities" | "telemetry" | "stack" | "contact";

const commandOutputs: Record<CommandKey, string[]> = {
  whoami: [
    "OPERATOR: Tran Thai Son (Tyson) // AI Systems Builder & Educator",
    "SPECIALIZATION: Autonomous Agents, RAG Pipelines & Model Gateways",
    "METHODOLOGY: Spec-Driven Vibe Coding with Deterministic Verification",
    "LOCATION: Vietnam · Available Globally for Strategic Projects",
  ],
  capabilities: [
    "✓ Autonomous AI Agents with Multi-Step Tool Contracts",
    "✓ Retrieval-Augmented Generation (RAG) & Vector Enclaves",
    "✓ Self-Hosted LLMs on Dedicated Linux VPS (vLLM, Ollama, Qwen)",
    "✓ Scalable Full-Stack Web Applications (Next.js 15, TypeScript)",
    "✓ 1-on-1 Practical AI-Assisted Vibe Coding Mentorship",
  ],
  telemetry: [
    "AI_SYSTEMS: ONLINE (Multi-Model Mesh)",
    "AUTOMATION_PIPELINES: ACTIVE (24/7 Operations)",
    "INFRASTRUCTURE: RUNNING (vLLM Cluster on Ubuntu VPS)",
    "LATENCY: ~8ms (Edge Prerendered)",
    "STUDENT_MENTORSHIP: ACCEPTING (Q3/Q4 Cohort)",
  ],
  stack: [
    "LANGUAGES: TypeScript, Python, SQL, Modern JavaScript",
    "AI_ENGINEERING: OpenAI, Claude 3.5, vLLM, Ollama, Model Routers",
    "CLOUD_INFRA: Linux (Ubuntu), Docker, Nginx Reverse Proxy, Supabase, Vercel",
    "ARCHITECTURE: Clean Module Decoupling, WebSockets, pgvector",
  ],
  contact: [
    "EMAIL: tysontran.builds@gmail.com",
    "TELEGRAM: @tysontran",
    "STATUS: Ready to review new client briefs & mentee applications",
    "RESPONSE_WINDOW: Under 12 Hours",
  ],
};

interface FloatingObjectProps {
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

function FloatingObject({
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
}: FloatingObjectProps) {
  const [isHovered, setIsHovered] = React.useState(false);

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

export function HeroSection() {
  const [viewMode, setViewMode] = React.useState<"creative" | "lab">("creative");
  const [headlineMode, setHeadlineMode] = React.useState<"creative" | "tyson">("tyson");
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  // Terminal state for lab mode
  const [activeCommand, setActiveCommand] = React.useState<CommandKey>("whoami");
  const [typedOutput, setTypedOutput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
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

  React.useEffect(() => {
    if (viewMode === "lab") {
      setIsTyping(true);
      setTypedOutput("");
      const lines = commandOutputs[activeCommand];
      const fullText = lines.join("\n");
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedOutput((prev) => prev + fullText.charAt(currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 8);

      return () => clearInterval(interval);
    }
  }, [activeCommand, viewMode]);

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(commandOutputs[activeCommand].join("\n"));
    showToast("Telemetry copied to clipboard!");
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-black text-white select-none">
      {/* Subtle Apple-style Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-b from-white/[0.05] via-emerald-500/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Top View Mode Switcher Pill */}
      <div className="relative z-30 mb-8 no-print">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-2xl shadow-2xl font-mono text-xs">
          <button
            onClick={() => setViewMode("creative")}
            className={`px-4 py-1.5 rounded-full font-bold transition-all flex items-center gap-1.5 ${
              viewMode === "creative"
                ? "bg-white text-black shadow-md scale-102"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREATIVE_STAGE</span>
          </button>
          <button
            onClick={() => setViewMode("lab")}
            className={`px-4 py-1.5 rounded-full font-bold transition-all flex items-center gap-1.5 ${
              viewMode === "lab"
                ? "bg-emerald-500 text-black shadow-md scale-102"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>AI_LAB_TERMINAL</span>
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MODE 1: ZERO-GRAVITY CREATIVE STAGE (Reference Style) */}
      {/* ---------------------------------------------------- */}
      {viewMode === "creative" && (
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
          
          {/* FLOATING OBJECT 1: Retro Handheld Game Boy Console */}
          <FloatingObject
            initialX={-300}
            initialY={-130}
            depth={1.5}
            rotation={-16}
            floatDelay="0s"
            floatDuration="5.2s"
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            label="RETRO_CONSOLE // VIBE_CODING"
            onClick={() => showToast("🎮 Retro Console: High-velocity playful engineering!")}
          >
            <div className="w-24 h-36 sm:w-28 sm:h-44 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 p-2.5 shadow-2xl border-2 border-sky-300/40 relative flex flex-col justify-between group-hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-shadow">
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

              <div className="flex items-end justify-between px-1 pb-1">
                <div className="relative w-7 h-7">
                  <div className="absolute inset-0 m-auto w-7 h-2.5 bg-slate-900 rounded-sm" />
                  <div className="absolute inset-0 m-auto w-2.5 h-7 bg-slate-900 rounded-sm" />
                </div>
                <div className="flex items-center gap-1.5 -rotate-25">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600 border border-rose-400 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600 border border-rose-400 shadow-sm" />
                </div>
              </div>
            </div>
          </FloatingObject>

          {/* FLOATING OBJECT 2: Open Architectural Notebook */}
          <FloatingObject
            initialX={300}
            initialY={-140}
            depth={1.6}
            rotation={20}
            floatDelay="1.2s"
            floatDuration="6.0s"
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            label="ARCHITECTURE_NOTEBOOK // SPECS"
            onClick={() => showToast("📖 Spec-Driven Architecture: Measure twice, code once.")}
          >
            <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-lg bg-slate-100 text-slate-900 p-2.5 shadow-2xl border border-white/80 relative flex flex-col justify-between transform -rotate-12 group-hover:rotate-0 transition-transform">
              <div className="absolute -left-2 top-2 bottom-2 w-2 flex flex-col justify-between">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-1 rounded-full bg-slate-400 border border-slate-600" />
                ))}
              </div>

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
          </FloatingObject>

          {/* FLOATING OBJECT 3: Spinning Rainbow Holographic CD-ROM */}
          <FloatingObject
            initialX={0}
            initialY={145}
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
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ffffff_0deg,#00f0ff_70deg,#ccff00_140deg,#ffffff_220deg,#f43f5e_300deg,#ffffff_360deg)] opacity-90" />
              <div className="w-10 h-10 rounded-full bg-black/80 border-2 border-white/60 relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black border border-white/40 shadow-inner" />
              </div>
            </div>
          </FloatingObject>

          {/* FLOATING OBJECT 4: Basketball / Athlete Sphere */}
          <FloatingObject
            initialX={-330}
            initialY={110}
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
              <div className="absolute inset-0 border-t-2 border-b-2 border-black/70 my-auto h-0" />
              <div className="absolute inset-0 border-l-2 border-r-2 border-black/70 mx-auto w-0" />
              <div className="absolute inset-2 rounded-full border border-black/40" />
            </div>
          </FloatingObject>

          {/* FLOATING OBJECT 5: Glowing AI Neural Core */}
          <FloatingObject
            initialX={330}
            initialY={120}
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
          </FloatingObject>

          {/* CENTER STAGE: DRAMATIC EDITORIAL TYPOGRAPHY */}
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
            {/* Title Mode Sub-Switcher */}
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
            <div className="space-y-0.5">
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
                  <div className="text-lg sm:text-2xl font-mono tracking-widest text-emerald-400 uppercase pt-2">
                    AI BUILDER &amp; ARCHITECT
                  </div>
                </div>
              )}
            </div>

            {/* Apple-grade Product Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-sans font-normal leading-relaxed pt-1">
              Operating at the frontier of autonomous AI agents, high-velocity vibe coding, and self-hosted cloud infrastructure — while mentoring builders worldwide.
            </p>

            {/* Key Capability Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs">
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
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
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
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 2: COMPUTATIONAL AI LAB TERMINAL MODE */}
      {/* ---------------------------------------------------- */}
      {viewMode === "lab" && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="rounded-3xl bg-slate-950/95 border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2">tyson@lab-matrix:~</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-emerald-400">PING: 8ms</span>
                <button
                  onClick={handleCopyOutput}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(["whoami", "capabilities", "telemetry", "stack", "contact"] as CommandKey[]).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setActiveCommand(cmd)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activeCommand === cmd
                      ? "bg-emerald-500 text-black font-bold shadow-md"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  $ {cmd}
                </button>
              ))}
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm min-h-[140px] bg-black p-5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-bold">{activeCommand}</span>
                {isTyping && <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />}
              </div>
              <div className="whitespace-pre-line text-slate-300 pl-3 border-l-2 border-emerald-500/40 leading-relaxed font-mono">
                {typedOutput}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CLUSTER: OPTIMAL</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>THREADS: 100% HEALTHY</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
