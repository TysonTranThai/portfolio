"use client";

import * as React from "react";
import { Palette } from "lucide-react";

export type ThemeAccent = "emerald" | "lime" | "cyan" | "violet" | "ember" | "graphite";

interface AccentOption {
  id: ThemeAccent;
  label: string;
  color: string;
}

const accentOptions: AccentOption[] = [
  { id: "emerald", label: "Emerald Lab", color: "#10b981" },
  { id: "lime", label: "Editorial Lime", color: "#ccff00" },
  { id: "cyan", label: "Cyber Cyan", color: "#06b6d4" },
  { id: "violet", label: "Aurora Violet", color: "#8b5cf6" },
  { id: "ember", label: "Ember Flame", color: "#f43f5e" },
  { id: "graphite", label: "Carbon Graphite", color: "#94a3b8" },
];

export function ThemeAccentPicker() {
  const [currentAccent, setCurrentAccent] = React.useState<ThemeAccent>("emerald");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem("tyson-theme-accent") as ThemeAccent;
    if (saved && accentOptions.some((o) => o.id === saved)) {
      setCurrentAccent(saved);
      document.documentElement.setAttribute("data-theme-accent", saved);
    } else {
      document.documentElement.setAttribute("data-theme-accent", "emerald");
    }
  }, []);

  const selectAccent = (accent: ThemeAccent) => {
    setCurrentAccent(accent);
    document.documentElement.setAttribute("data-theme-accent", accent);
    localStorage.setItem("tyson-theme-accent", accent);
    setIsOpen(false);
  };

  return (
    <div className="relative theme-accent-picker no-print">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Customize theme accent color"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all shadow-sm"
        title="Customize theme accent"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm"
          style={{
            backgroundColor: accentOptions.find((o) => o.id === currentAccent)?.color || "#10b981",
          }}
        />
        <Palette className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-950/95 border border-slate-800 p-2 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 font-mono text-xs">
          <div className="px-2.5 py-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-800 mb-1">
            LAB_THEME_ACCENT
          </div>
          <div className="space-y-1">
            {accentOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => selectAccent(opt.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl transition-all ${
                  currentAccent === opt.id
                    ? "bg-slate-800 text-white font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: opt.color }}
                  />
                  <span>{opt.label}</span>
                </div>
                {currentAccent === opt.id && (
                  <span className="text-[10px] text-emerald-400">ACTIVE</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
