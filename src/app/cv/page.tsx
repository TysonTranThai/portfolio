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
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { servicesData } from "@/data/services";
import { contactInfo } from "@/data/socials";
import { Button } from "@/components/ui/Button";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#060a12] text-white transition-colors font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top toolbar (hidden on print) */}
        <div className="no-print mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-sm bg-black border border-white/20 shadow-xl font-mono text-xs">
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
              className="font-mono text-xs rounded-sm border-white/20 text-white"
            >
              Print / Save as PDF
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              rightIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="font-mono text-xs font-bold uppercase rounded-sm bg-white text-black hover:bg-slate-200"
            >
              Hire Tyson
            </Button>
          </div>
        </div>

        {/* Printable Paper Document */}
        <div className="cv-print-area p-8 sm:p-14 rounded-sm bg-black/90 border border-white/20 shadow-2xl space-y-10">
          {/* Header */}
          <div className="border-b border-white/15 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  {profileData.fullName}
                </h1>
                <div className="text-sm font-mono text-amber-400 mt-1 uppercase tracking-wider font-semibold">
                  {profileData.title}
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-slate-300 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{profileData.location} (Remote / Global)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-sans pt-2">
              {profileData.heroLead}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-1.5">
              {"// CORE ARCHITECTURAL CAPABILITIES"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {servicesData.map((svc) => (
                <div key={svc.id} className="p-3.5 rounded-sm bg-white/5 border border-white/10 space-y-1">
                  <div className="font-serif font-bold text-white">{svc.title}</div>
                  <div className="text-slate-300 text-[11px] leading-relaxed font-sans">{svc.tagline}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-1.5">
              {"// CHRONOLOGICAL RECORD"}
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-serif font-bold text-base text-white">
                      {exp.role} <span className="font-sans font-normal text-slate-400 text-xs">at</span>{" "}
                      <span className="text-amber-400 font-mono text-xs">{exp.organizationOrProject}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">{exp.period}</div>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{exp.summary}</p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Software Architecture */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-1.5">
              {"// SELECTED DEPLOYED SYSTEMS"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-4 rounded-sm bg-white/5 border border-white/10 space-y-2">
                  <div className="font-serif font-bold text-white text-sm">{proj.title}</div>
                  <div className="text-xs font-mono text-amber-400">{proj.role}</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Matrix */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-1.5">
              {"// TECHNICAL STACK"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {skillsData.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <div className="text-amber-400 font-semibold uppercase">{cat.category}</div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
