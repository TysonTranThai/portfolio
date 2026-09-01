"use client";

import * as React from "react";
import Link from "next/link";
import {
  Printer,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { servicesData } from "@/data/services";
import { contactInfo, socialLinks } from "@/data/socials";
import { Button } from "@/components/ui/Button";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50 dark:bg-surface-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top toolbar (hidden on print) */}
        <div className="no-print mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-surface-100 border border-slate-200 dark:border-surface-300 shadow-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              leftIcon={<Printer className="w-4 h-4" />}
            >
              Print / Save as PDF
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              rightIcon={<Sparkles className="w-3.5 h-3.5" />}
            >
              Hire Tyson
            </Button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="print-container bg-white dark:bg-surface-100 border border-slate-200 dark:border-surface-300 rounded-3xl p-8 sm:p-12 shadow-xl print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
          {/* Header & Contact */}
          <header className="border-b border-slate-200 dark:border-surface-300 pb-8 space-y-4 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight print:text-black">
                  {profileData.fullName}
                </h1>
                <div className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-1 print:text-black font-mono">
                  {profileData.preferredName} Tran · {profileData.title}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 print:text-black">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              {/* Contact info block */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 sm:text-right print:text-black font-mono">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-500 print:text-black" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300 print:text-black" />
                  <span>github.com/{socialLinks.find((s) => s.platform === "GitHub")?.username}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-600 print:text-black" />
                  <span>linkedin.com/{socialLinks.find((s) => s.platform === "LinkedIn")?.username}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <TelegramIcon className="w-3.5 h-3.5 text-sky-400 print:text-black" />
                  <span>telegram: {contactInfo.telegram}</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed print:text-black">
                {profileData.bioParagraphs[0]} {profileData.bioParagraphs[2]}
              </p>
            </div>
          </header>

          {/* Core Technical Proficiencies */}
          <section className="py-6 border-b border-slate-200 dark:border-surface-300 space-y-3 print:border-black/20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black">
              Technical Proficiencies &amp; Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 print:text-black">
                    {cat.category}:
                  </span>{" "}
                  <span className="text-slate-600 dark:text-slate-300 print:text-black">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Work & Engineering Experience */}
          <section className="py-6 border-b border-slate-200 dark:border-surface-300 space-y-6 print:border-black/20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black">
              Experience &amp; Milestones
            </h2>

            <div className="space-y-6">
              {experienceData.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                        {item.role}
                      </span>{" "}
                      <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 print:text-black">
                        — {item.organizationOrProject}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-black">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed print:text-black">
                    {item.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-4 list-disc print:text-black">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1 print:text-black">
                    <span className="font-semibold">Technologies:</span> {item.technologies.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Featured Projects */}
          <section className="py-6 border-b border-slate-200 dark:border-surface-300 space-y-5 print:border-black/20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black">
              Featured Systems &amp; Projects
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                      {p.title} <span className="text-xs font-normal text-slate-500 print:text-black">({p.role})</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-black">{p.year}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 print:text-black">
                    {p.description}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 print:text-black">
                    <span className="font-semibold">Stack:</span> {p.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Client Offerings & Capabilities */}
          <section className="py-6 border-b border-slate-200 dark:border-surface-300 space-y-3 print:border-black/20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black">
              Available Client &amp; Mentorship Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 print:text-black">
              {servicesData.slice(0, 6).map((s) => (
                <div key={s.id} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 print:text-black shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white print:text-black">{s.title}:</strong>{" "}
                    {s.tagline}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer note on CV */}
          <footer className="pt-6 text-center text-xs text-slate-400 print:text-black">
            Generated directly from live data architecture at tysontran.dev · References &amp; codebase verification available upon request
          </footer>
        </div>
      </div>
    </div>
  );
}
