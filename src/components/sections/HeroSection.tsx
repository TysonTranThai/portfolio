"use client";

import * as React from "react";
import {
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  GraduationCap,
  FileText,
  Copy,
  Activity,
  ShieldCheck,
  Sparkles,
  Waves,
  Boxes,
  Binary,
  Dot,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroBackground, BackgroundVisualMode } from "@/components/3d/HeroBackground";
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

const bgModes: { id: BackgroundVisualMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "wave", label: "3D Wave Mesh", icon: Waves },
  { id: "geometry", label: "Holo Geometry", icon: Boxes },
  { id: "matrix", label: "Data Streams", icon: Binary },
  { id: "particles", label: "Neural Nodes", icon: Dot },
  { id: "minimal", label: "Clean Minimal", icon: Sparkles },
];

export function HeroSection() {
  const [activeCommand, setActiveCommand] = React.useState<CommandKey>("whoami");
  const [bgMode, setBgMode] = React.useState<BackgroundVisualMode>("wave");
  const [typedOutput, setTypedOutput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const { showToast } = useToast();

  React.useEffect(() => {
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
  }, [activeCommand]);

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(commandOutputs[activeCommand].join("\n"));
    showToast("Telemetry copied to clipboard!");
  };

  const handleBgModeChange = (mode: BackgroundVisualMode) => {
    setBgMode(mode);
    const modeLabel = bgModes.find((m) => m.id === mode)?.label;
    showToast(`Background switched to: ${modeLabel}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-computational-grid ambient-lab-glow">
      {/* 3D WebGL Neural / Geometric / Wave Background Canvas */}
      <HeroBackground mode={bgMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Background Visualizer Demo Selector Pill */}
        <div className="flex items-center justify-center mb-6 no-print">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/90 border border-emerald-500/30 backdrop-blur-2xl shadow-xl font-mono text-xs">
            <div className="px-2.5 py-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>BG_CANVAS_DEMO:</span>
            </div>
            {bgModes.map((item) => {
              const Icon = item.icon;
              const isSelected = bgMode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleBgModeChange(item.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 select-none ${
                    isSelected
                      ? "bg-emerald-500 text-black font-bold shadow-md scale-105"
                      : "text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Editorial Headline & Positioning (from Option C) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Beacon Bar */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300 font-medium">
                TRAN THAI SON (TYSON)
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold">
                SYSTEMS_ONLINE
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-[0.95]">
                ENGINEERING <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400">
                  AUTONOMOUS AI
                </span> <br />
                &amp; SYSTEMS.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Young builder architecting intelligent multi-agent pipelines, full-stack software products, and self-hosted infrastructure — while teaching builders modern vibe coding.
              </p>
            </div>

            {/* Discipline Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <Badge variant="cyan" size="md">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI Agents</span>
              </Badge>
              <Badge variant="violet" size="md">
                <Layers className="w-3.5 h-3.5" />
                <span>Full-Stack Web</span>
              </Badge>
              <Badge variant="success" size="md">
                <Terminal className="w-3.5 h-3.5" />
                <span>vLLM / VPS Compute</span>
              </Badge>
              <Badge variant="default" size="md">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Builder Mentorship</span>
              </Badge>
            </div>

            {/* Action CTA Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="hud-beam-border rounded-xl">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-mono text-xs font-bold uppercase shadow-xl"
                >
                  Work With Me
                </Button>
              </div>
              <Button
                variant="secondary"
                size="lg"
                href="#projects"
                className="font-mono text-xs font-bold uppercase"
              >
                Inspect Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/cv"
                leftIcon={<FileText className="w-4 h-4" />}
                className="font-mono text-xs"
              >
                Download CV (PDF)
              </Button>
            </div>
          </div>

          {/* Right Column: Dark AI Lab Interactive Terminal & HUD (from Option D) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-950/95 border border-white/15 p-6 shadow-2xl backdrop-blur-2xl space-y-4 font-mono text-xs transition-all duration-300 hover:border-emerald-500/50 group">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2">
                    tyson@lab-matrix:~
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    PING: 8ms
                  </span>
                  <button
                    onClick={handleCopyOutput}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy terminal output"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Command Selector Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {(["whoami", "capabilities", "telemetry", "stack", "contact"] as CommandKey[]).map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setActiveCommand(cmd)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all select-none ${
                      activeCommand === cmd
                        ? "bg-emerald-500 text-black font-bold shadow-md"
                        : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    }`}
                  >
                    $ {cmd}
                  </button>
                ))}
              </div>

              {/* Live Terminal Output Window */}
              <div className="space-y-2 font-mono text-xs sm:text-sm min-h-[130px] bg-slate-950 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-bold">{activeCommand}</span>
                  {isTyping && <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />}
                </div>

                <div className="whitespace-pre-line text-slate-300 text-xs sm:text-sm pl-3 border-l-2 border-emerald-500/40 leading-relaxed font-mono">
                  {typedOutput}
                </div>
              </div>

              {/* HUD Telemetry Summary Pill */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CLUSTER: OPTIMAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>THREADS: 100% HEALTHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
