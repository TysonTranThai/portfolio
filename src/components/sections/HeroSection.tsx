"use client";

import * as React from "react";
import {
  ArrowRight,
  Cpu,
  Layers,
  GraduationCap,
  Terminal,
  Briefcase,
  FileText,
  Copy,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroBackground } from "@/components/3d/HeroBackground";
import { useToast } from "@/components/ui/Toast";

type CommandKey = "whoami" | "capabilities" | "stack" | "contact";

const commandOutputs: Record<CommandKey, string[]> = {
  whoami: [
    "Tran Thai Son (Tyson) — AI Systems Builder & Educator",
    "Specialization: Multi-agent architectures, autonomous pipelines & scalable web apps",
    "Operating Mode: Spec-driven agentic engineering with strict verification",
    "Location: Vietnam · Available Globally (Remote)",
  ],
  capabilities: [
    "✓ Autonomous AI Agents & Tool-Calling Workflows",
    "✓ Retrieval-Augmented Generation (RAG) & Vector Databases",
    "✓ Self-Hosted LLMs & Local Inference (vLLM, Ollama, Qwen)",
    "✓ High-Performance Web Apps (Next.js 15, React 19, TypeScript)",
    "✓ 1-on-1 AI-Assisted Vibe Coding Mentorship",
  ],
  stack: [
    "Languages: TypeScript, Python, SQL, Modern JavaScript",
    "AI & LLMs: OpenAI API, Claude, vLLM, Ollama, Model Routing Gateways",
    "Cloud & DevOps: Linux (Ubuntu), Docker, Nginx Reverse Proxy, Supabase, Vercel",
    "Architecture: Clean component isolation, REST/WebSockets, pgvector",
  ],
  contact: [
    "Email: tysontran.builds@gmail.com",
    "Telegram: @tysontran",
    "Status: Accepting Q3/Q4 Client Projects & 1-on-1 Mentorship Mentees",
    "Response Time: Typically under 12 hours",
  ],
};

export function HeroSection() {
  const [activeCommand, setActiveCommand] = React.useState<CommandKey>("whoami");
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
    showToast("Terminal output copied to clipboard!");
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* 3D WebGL Background Canvas */}
      <HeroBackground />

      {/* Ambient Lighting Cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 dark:bg-sky-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Availability Beacon Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-surface-100/80 border border-slate-200/90 dark:border-surface-300/60 backdrop-blur-xl shadow-sm hover:border-sky-500/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {profileData.availability.label}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-surface-300" />
            <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400">
              GMT+7 · Global Remote
            </span>
          </div>

          {/* Main Hero Title & Positioning */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400">
                {profileData.positioning}
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              {profileData.heroLead}
            </p>
          </div>

          {/* Discipline Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            <Badge variant="cyan" size="md" className="backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Agents &amp; Model Gateways</span>
            </Badge>
            <Badge variant="violet" size="md" className="backdrop-blur-md">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Architecture</span>
            </Badge>
            <Badge variant="success" size="md" className="backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>Self-Hosted VPS Infrastructure</span>
            </Badge>
            <Badge variant="default" size="md" className="backdrop-blur-md">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>AI Vibe Coding Educator</span>
            </Badge>
          </div>

          {/* Primary CTA Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3">
            <div className="beam-border rounded-xl">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-xl"
              >
                Work With Me
              </Button>
            </div>
            <Button
              variant="secondary"
              size="lg"
              href="#projects"
              leftIcon={<Briefcase className="w-4 h-4" />}
            >
              Explore Selected Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/cv"
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Download CV (PDF)
            </Button>
          </div>

          {/* Interactive Live Developer Terminal */}
          <div className="pt-8 max-w-2xl mx-auto text-left">
            <div className="rounded-3xl bg-slate-950/95 dark:bg-surface-950/95 border border-slate-800/90 dark:border-surface-300/40 shadow-2xl backdrop-blur-2xl p-5 overflow-hidden transition-all duration-300 hover:border-sky-500/40 group">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    tyson@builder-matrix:~
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LATENCY: 8ms
                  </span>
                  <button
                    onClick={handleCopyOutput}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy terminal text"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Command Selector Buttons */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {(["whoami", "capabilities", "stack", "contact"] as CommandKey[]).map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setActiveCommand(cmd)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all select-none ${
                      activeCommand === cmd
                        ? "bg-sky-500 text-white shadow-sm font-bold"
                        : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    }`}
                  >
                    $ {cmd}
                  </button>
                ))}
              </div>

              {/* Live Terminal Output Window */}
              <div className="space-y-2 font-mono text-xs sm:text-sm min-h-[110px] bg-slate-950 p-3 rounded-xl border border-slate-900">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-slate-100">{activeCommand}</span>
                  {isTyping && <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse" />}
                </div>

                <div className="whitespace-pre-line text-slate-300 text-xs sm:text-sm pl-3 border-l-2 border-slate-800/80 leading-relaxed font-mono">
                  {typedOutput}
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>[PROMPT] Click tabs above to execute live developer commands</span>
                <span className="text-sky-400/80">SYSTEM: OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
