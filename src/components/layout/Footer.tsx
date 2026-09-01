"use client";

import * as React from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, TelegramIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { contactInfo, socialLinks } from "@/data/socials";
import { useToast } from "@/components/ui/Toast";

export function Footer() {
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    showToast("Email address copied to clipboard!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialIcon = (platform: string) => {
    if (platform === "GitHub") return <GithubIcon className="w-3.5 h-3.5" />;
    if (platform === "LinkedIn") return <LinkedinIcon className="w-3.5 h-3.5" />;
    if (platform === "Telegram") return <TelegramIcon className="w-3.5 h-3.5" />;
    return <TwitterXIcon className="w-3.5 h-3.5" />;
  };

  return (
    <footer className="bg-[#05070d] border-t border-white/15 pt-20 pb-12 transition-colors no-print font-sans text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/15">
          {/* Identity column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border border-white/20 flex items-center justify-center font-serif font-bold text-base text-white shadow-xl">
                T
              </div>
              <span className="font-serif font-bold text-xl text-white">
                {profileData.fullName}
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-sans">
              AI systems builder &amp; software architect. Engineering autonomous multi-agent pipelines, self-hosted LLM infrastructure, and modern software products.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LOCATION: VIETNAM · AVAILABLE GLOBALLY</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {"// NAVIGATION"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  The Philosophy
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  The Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  The Services
                </Link>
              </li>
              <li>
                <Link href="#teaching" className="hover:text-white transition-colors">
                  The Academy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Deep dive links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {"// SPECIFICATIONS"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/cv" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>PRINT /CV.PDF</span>
                </Link>
              </li>
              <li>
                <Link href="#how-i-build" className="hover:text-white transition-colors">
                  Vibe Coding Pipeline
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-white transition-colors">
                  System Capabilities
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Client Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {"// DIRECT TRANSMISSION"}
            </h4>
            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3 rounded-sm bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-slate-300 font-mono transition-colors"
                title="Click to copy email address"
              >
                <span className="truncate">{contactInfo.email}</span>
                <Copy className="w-3.5 h-3.5 shrink-0 ml-1 text-amber-400" />
              </button>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Tyson's ${social.platform}`}
                    className="p-2.5 rounded-sm bg-white/5 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white transition-colors"
                  >
                    {renderSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Tran Thai Son (Tyson). All rights reserved. Neoclassical Cyber-Architectural System.
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>ASCEND TO TOP ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
