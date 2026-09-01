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
    <div className="min-h-screen py-10 sm:py-16 bg-slate-950 text-white transition-colors font-sans bg-computational-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top toolbar (hidden on print) */}
        <div className="no-print mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl backdrop-blur-xl font-mono text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&lt;- RETURN_TO_COMMAND_CENTER</span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              leftIcon={<Printer className="w-4 h-4" />}
              className="font-mono text-xs"
            >
              Print / Save as PDF
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              rightIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="font-mono text-xs font-bold uppercase"
            >
              Hire Tyson
            </Button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="print-container bg-slate-950/90 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl print:p-0 print:border-none print:shadow-none print:bg-white print:text-black font-sans">
          {/* Header & Contact */}
          <header className="border-b border-white/10 pb-8 space-y-4 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase print:text-black">
                  {"CURRICULUM_VITAE // OPERATOR_PROFILE"}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight print:text-black mt-1">
                  {profileData.fullName}
                </h1>
                <div className="text-base font-semibold text-emerald-400 mt-1 print:text-black font-mono">
                  {profileData.preferredName} Tran · {profileData.title}
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 print:text-black font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{profileData.location} (Remote / Global)</span>
                </div>
              </div>

              {/* Contact info block */}
              <div className="space-y-1.5 text-xs text-slate-300 sm:text-right print:text-black font-mono">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300 print:text-black" />
                  <span>github.com/{socialLinks.find((s) => s.platform === "GitHub")?.username}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                  <span>linkedin.com/{socialLinks.find((s) => s.platform === "LinkedIn")?.username}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <TelegramIcon className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>telegram: {contactInfo.telegram}</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-black">
                {profileData.bioParagraphs[0]} {profileData.bioParagraphs[2]}
              </p>
            </div>
          </header>

          {/* Core Technical Proficiencies */}
          <section className="py-6 border-b border-white/10 space-y-3 print:border-black/20">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              {"// TECHNICAL_PROFICIENCIES_&_STACK"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <span className="font-bold text-white print:text-black font-mono">
                    {cat.category}:
                  </span>{" "}
                  <span className="text-slate-300 print:text-black">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Work & Engineering Experience */}
          <section className="py-6 border-b border-white/10 space-y-6 print:border-black/20">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              {"// EXPERIENCE_&_BUILD_MILESTONES"}
            </h2>

            <div className="space-y-6">
              {experienceData.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-sm font-bold text-white print:text-black">
                        {item.role}
                      </span>{" "}
                      <span className="text-xs font-mono font-semibold text-emerald-400 print:text-black">
                        — {item.organizationOrProject}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-black">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                    {item.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-slate-300 pl-4 list-disc print:text-black">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-400 pt-1 print:text-black">
                    <span className="font-semibold text-emerald-400">Stack:</span> {item.technologies.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Featured Projects */}
          <section className="py-6 border-b border-white/10 space-y-5 print:border-black/20">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              {"// FEATURED_SYSTEMS_&_PROJECTS"}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-bold text-white print:text-black">
                      {p.title} <span className="text-xs font-normal text-slate-400 print:text-black">({p.role})</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-black">{p.year}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-black">
                    {p.description}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 print:text-black">
                    <span className="font-semibold text-emerald-400">Stack:</span> {p.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Client Offerings & Capabilities */}
          <section className="py-6 border-b border-white/10 space-y-3 print:border-black/20">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              {"// CLIENT_&_MENTORSHIP_CAPABILITIES"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-black">
              {servicesData.slice(0, 6).map((s) => (
                <div key={s.id} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 print:text-black shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white print:text-black font-mono">{s.title}:</strong>{" "}
                    {s.tagline}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer note on CV */}
          <footer className="pt-6 text-center text-xs text-slate-500 print:text-black font-mono">
            {"// Generated directly from live data architecture at tysontran.dev · Reference verification available upon request"}
          </footer>
        </div>
      </div>
    </div>
  );
}
