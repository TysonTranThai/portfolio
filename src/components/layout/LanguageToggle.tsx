"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  showIcon?: boolean;
}

export function LanguageToggle({ className, showIcon = true }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center p-1 rounded-sm bg-white/5 border border-white/15 backdrop-blur-md font-mono text-[11px] select-none",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      {showIcon && (
        <div className="px-1.5 text-amber-400">
          <Globe className="w-3.5 h-3.5" />
        </div>
      )}

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "px-2 py-0.5 rounded-sm font-bold tracking-wider transition-all duration-150",
          language === "en"
            ? "bg-white text-black shadow-sm"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        )}
      >
        EN
      </button>

      <span className="text-slate-600 px-0.5">/</span>

      <button
        type="button"
        onClick={() => setLanguage("vi")}
        aria-pressed={language === "vi"}
        className={cn(
          "px-2 py-0.5 rounded-sm font-bold tracking-wider transition-all duration-150",
          language === "vi"
            ? "bg-amber-400 text-black shadow-sm"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        )}
      >
        VI
      </button>
    </div>
  );
}
