"use client";

import * as React from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, TelegramIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { contactInfo, socialLinks } from "@/data/socials";
import { navigationItems } from "@/data/navigation";
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
    if (platform === "GitHub") return <GithubIcon className="w-4 h-4" />;
    if (platform === "LinkedIn") return <LinkedinIcon className="w-4 h-4" />;
    if (platform === "Telegram") return <TelegramIcon className="w-4 h-4" />;
    return <TwitterXIcon className="w-4 h-4" />;
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 transition-colors no-print font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Identity column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white text-slate-950 flex items-center justify-center font-mono font-bold text-xs shadow-md">
                T
              </div>
              <span className="font-bold text-lg text-white font-mono">
                {profileData.fullName} {"//"} {profileData.preferredName}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              AI builder, software developer, and educator. Architecting intelligent multi-agent systems, automation workflows, and hands-on developer education.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LOCATION: {profileData.location} (REMOTE_GLOBAL)</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {"// EXPLORE"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {navigationItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Deep dive links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {"// ARCHITECTURE"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/cv" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>CAT /CV.PDF</span>
                </Link>
              </li>
              <li>
                <Link href="/#how-i-build" className="hover:text-white transition-colors">
                  How I Build (Pipeline)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Client Engineering
                </Link>
              </li>
              <li>
                <Link href="/#teaching" className="hover:text-white transition-colors">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="hover:text-white transition-colors">
                  Technology Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {"// CONNECT"}
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 font-mono transition-colors"
                title="Click to copy email address"
              >
                <span className="truncate">{contactInfo.email}</span>
                <Copy className="w-3.5 h-3.5 shrink-0 ml-1 text-emerald-400" />
              </button>

              <div className="flex items-center gap-2 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Tyson's ${social.platform}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    {renderSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Tran Thai Son (Tyson). All rights reserved. Built with Next.js 15, TypeScript &amp; Tailwind.
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>TOP ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
