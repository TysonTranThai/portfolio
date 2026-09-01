"use client";

import * as React from "react";
import {
  Sparkles,
  Layers,
  Palette,
  Eye,
  Flame,
  Terminal,
  BookOpen,
  Apple,
} from "lucide-react";
import { OptionA_AppleProduct } from "./OptionA_AppleProduct";
import { OptionB_LiquidGlass } from "./OptionB_LiquidGlass";
import { OptionC_Editorial } from "./OptionC_Editorial";
import { OptionD_DarkAILab } from "./OptionD_DarkAILab";
import { OptionE_SoftPremium } from "./OptionE_SoftPremium";
import { OptionF_TysonSignature } from "./OptionF_TysonSignature";
import { cn } from "@/lib/utils";

type DesignOptionKey = "A" | "B" | "C" | "D" | "E" | "F";

interface DesignOptionMeta {
  key: DesignOptionKey;
  name: string;
  subtitle: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  philosophy: string;
  typography: string;
  background: string;
  cardStyle: string;
  motion3D: string;
}

const designOptions: DesignOptionMeta[] = [
  {
    key: "A",
    name: "Apple / Product",
    subtitle: "Minimal & Refined",
    tagline: "Hardware-grade product precision with enormous clean typography.",
    icon: Apple,
    accentColor: "from-sky-500 to-blue-600",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    philosophy: "Understated luxury, ultra-clean white/black surfaces, maximum readability, product-first restraint.",
    typography: "Inter / SF Pro Display — large scale headers with tight tracking and balanced line-heights.",
    background: "Deep obsidian black (#000000 / #0a0a0c) with subtle graphite radial light.",
    cardStyle: "Sleek matte panels with 1px white/10 borders and zero aggressive blur.",
    motion3D: "Smooth subtle lerp translations, spring micro-interactions, clean product perspective.",
  },
  {
    key: "B",
    name: "Liquid Glass / Spatial",
    subtitle: "Vision Pro × ThreeUI",
    tagline: "Translucent frosted glass with refractive depth and spatial glow.",
    icon: Sparkles,
    accentColor: "from-cyan-400 to-violet-600",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-400",
    philosophy: "Spatial computing aesthetic, luminous light refractions, soft depth layers, futuristic yet tactile.",
    typography: "Modern geometric sans with glowing gradient fills and variable letterforms.",
    background: "Ultra-dark nebula navy (#070913) with layered cyan and violet ambient light cones.",
    cardStyle: "Multi-layered frosted glass (backdrop-blur-2xl) with refractive inner specular highlights.",
    motion3D: "Reactive WebGL particle mesh, floating card physics, dynamic radial glare follows mouse.",
  },
  {
    key: "C",
    name: "Editorial / Studio",
    subtitle: "Awwwards Magazine",
    tagline: "High-contrast asymmetrical layouts with oversized typography.",
    icon: BookOpen,
    accentColor: "from-lime-400 to-emerald-500",
    badgeBg: "bg-lime-400/10",
    badgeText: "text-lime-400",
    philosophy: "Creative studio magazine layout, high editorial whitespace, bold monochromatic tension with neon lime accents.",
    typography: "Oversized bold display sans paired with technical monospace labels and massive numbers (01, 02).",
    background: "Pure matte charcoal (#0d0d0d) with crisp structural line grids.",
    cardStyle: "Sharp asymmetrical containers with high contrast borders and large index typography.",
    motion3D: "Snappy typographic entrance reveals, scroll-linked masking, high-impact hover states.",
  },
  {
    key: "D",
    name: "Dark AI Lab / OS",
    subtitle: "Computational HUD",
    tagline: "Personal AI research laboratory with live telemetry and system metrics.",
    icon: Terminal,
    accentColor: "from-emerald-400 to-cyan-500",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    philosophy: "Authentic developer laboratory, cyber operating system HUD, live telemetry matrices, technical authority.",
    typography: "JetBrains Mono as first-class display font paired with clean UI sans.",
    background: "Deep black (#040608) with subtle computational matrix grid and green circuit accents.",
    cardStyle: "Technical HUD terminal panels with status beacons and live data visualization grids.",
    motion3D: "Live typing simulations, real-time latency ping animations, interactive node graphs.",
  },
  {
    key: "E",
    name: "Soft Premium / Warm",
    subtitle: "Humanist × Notion",
    tagline: "Warm cream surfaces, tactile clay cards, and approachable mentorship vibes.",
    icon: Layers,
    accentColor: "from-amber-500 to-emerald-600",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-500",
    philosophy: "Human-centric warmth, organic comfort, friendly education and client consulting balance.",
    typography: "Warm humanistic sans-serif with natural proportions and comfortable readability.",
    background: "Warm cream & off-white (#fbf9f5 / #f4efe6) with soft sandstone borders.",
    cardStyle: "Tactile elevated clay cards with soft diffused drop-shadows and rounded corners.",
    motion3D: "Gentle natural ease curves, organic card floats, friendly conversational micro-interactions.",
  },
  {
    key: "F",
    name: "Tyson Signature",
    subtitle: "Builder Matrix",
    tagline: "Bespoke identity blending AI engineering, basketball discipline grit, and vibe coding.",
    icon: Flame,
    accentColor: "from-sky-400 via-indigo-400 to-rose-500",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-400",
    philosophy: "Original builder identity reflecting Tyson's hands-on AI speed, entrepreneurial drive, and athletic discipline.",
    typography: "Dynamic kinetic sans-serif with bold emphasis and technical status badges.",
    background: "Carbon obsidian (#090b10) with kinetic ignition gradient trails.",
    cardStyle: "High-velocity builder cards with live DNA telemetry tags and glowing action accents.",
    motion3D: "Energy ray ambient shaders, interactive builder matrix nodes, high-impact button transforms.",
  },
];

export function DesignLabExplorer() {
  const [selectedKey, setSelectedKey] = React.useState<DesignOptionKey>("F");

  const currentOption = designOptions.find((o) => o.key === selectedKey)!;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Top Banner / Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
          <Palette className="w-4 h-4" />
          <span>Phase 1 · Design Exploration Studio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Choose Your Visual Brand Identity
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore 6 genuinely distinct visual design systems crafted for your personal command center, portfolio, client services, and mentorship portal.
        </p>
      </div>

      {/* Option Selector Cards Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {designOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selectedKey === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => setSelectedKey(opt.key)}
              className={cn(
                "p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between select-none relative group",
                isSelected
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-sky-500 shadow-xl scale-102 ring-2 ring-sky-500"
                  : "bg-white dark:bg-surface-100 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-surface-300 hover:border-sky-400"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold">OPTION {opt.key}</span>
                <Icon
                  className={cn(
                    "w-4 h-4",
                    isSelected ? "text-sky-400 dark:text-sky-600" : "text-slate-400"
                  )}
                />
              </div>
              <div>
                <div className="text-sm font-bold truncate">{opt.name}</div>
                <div className="text-[11px] opacity-75 truncate">{opt.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active System Strategy & Tokens Drawer */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${currentOption.badgeBg} ${currentOption.badgeText}`}>
                OPTION {currentOption.key}
              </span>
              <h2 className="text-2xl font-bold text-white">{currentOption.name}</h2>
            </div>
            <p className="text-sm text-slate-300">{currentOption.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
              Target: Complete Site Redesign
            </div>
          </div>
        </div>

        {/* System Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-semibold text-sky-400 uppercase tracking-wider text-[11px]">
              Design Philosophy
            </div>
            <p className="text-slate-300 leading-relaxed">{currentOption.philosophy}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-semibold text-violet-400 uppercase tracking-wider text-[11px]">
              Typography Architecture
            </div>
            <p className="text-slate-300 leading-relaxed">{currentOption.typography}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
              Surface &amp; Background
            </div>
            <p className="text-slate-300 leading-relaxed">{currentOption.background}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="font-semibold text-amber-400 uppercase tracking-wider text-[11px]">
              Motion &amp; 3D Physics
            </div>
            <p className="text-slate-300 leading-relaxed">{currentOption.motion3D}</p>
          </div>
        </div>
      </div>

      {/* Live Interactive Specimen Viewport */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Eye className="w-4 h-4" />
            <span>Interactive Live Component Specimen</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Active: Option {currentOption.key} ({currentOption.name})
          </span>
        </div>

        {/* Render Selected Option Specimen */}
        {selectedKey === "A" && <OptionA_AppleProduct />}
        {selectedKey === "B" && <OptionB_LiquidGlass />}
        {selectedKey === "C" && <OptionC_Editorial />}
        {selectedKey === "D" && <OptionD_DarkAILab />}
        {selectedKey === "E" && <OptionE_SoftPremium />}
        {selectedKey === "F" && <OptionF_TysonSignature />}
      </div>

      {/* Comparison Matrix Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-surface-100 border border-slate-200 dark:border-surface-300 shadow-xl space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Design Directions Comparison Matrix
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Compare key attributes across all 6 visual design directions to choose the best foundation for your brand.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-surface-300 text-slate-400 uppercase font-mono text-[11px]">
                <th className="py-3 px-4">Option</th>
                <th className="py-3 px-4">Brand Positioning</th>
                <th className="py-3 px-4">Dominant Colors</th>
                <th className="py-3 px-4">Best For</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-surface-200">
              {designOptions.map((opt) => (
                <tr
                  key={opt.key}
                  className={cn(
                    "hover:bg-slate-50 dark:hover:bg-surface-200/50 transition-colors",
                    selectedKey === opt.key ? "bg-sky-50/50 dark:bg-sky-950/20 font-medium" : ""
                  )}
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${opt.badgeBg} ${opt.badgeText}`}>
                      {opt.key}
                    </span>
                    <span>{opt.name}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{opt.subtitle}</td>
                  <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">{opt.background.split(" ")[0]}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{opt.tagline}</td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => setSelectedKey(opt.key)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                        selectedKey === opt.key
                          ? "bg-sky-500 text-white"
                          : "bg-slate-100 dark:bg-surface-200 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                      )}
                    >
                      {selectedKey === opt.key ? "Viewing" : "Preview"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
