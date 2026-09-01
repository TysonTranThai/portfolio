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
  GraduationCap,
  Briefcase,
  ExternalLink,
  Code2,
  Globe,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { contactInfo } from "@/data/socials";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CVPage() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const handlePrint = () => {
    window.print();
  };

  const coreMantras = isVi && profileData.coreMantrasVi ? profileData.coreMantrasVi : profileData.coreMantras;

  return (
    <div className="min-h-screen py-6 sm:py-12 lg:py-16 bg-[#06080e] text-white transition-colors font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top toolbar (hidden on print) */}
        <div className="no-print mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-sm bg-black border border-white/20 shadow-xl font-mono text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors touch-target"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("<- RETURN_TO_WEBSITE", "<- QUAY LẠI TRANG CHỦ")}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              leftIcon={<Printer className="w-4 h-4" />}
              className="font-mono text-xs rounded-sm border-white/20 text-white hover:bg-white/10 touch-target"
            >
              {t("Print / Save as PDF", "In / Lưu Dưới Dạng PDF")}
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              rightIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="font-mono text-xs font-bold uppercase rounded-sm bg-blue-500 text-white hover:bg-blue-600 shadow-md touch-target"
            >
              {t("Work With Tyson", "Hợp Tác Cùng Mình")}
            </Button>
          </div>
        </div>

        {/* Printable Paper Document (ATS-Friendly Structure) */}
        <div className="cv-print-area p-5 sm:p-10 lg:p-14 rounded-sm bg-black/90 border border-blue-500/30 shadow-2xl space-y-8 sm:space-y-10 text-white">
          
          {/* Header */}
          <div className="border-b border-white/15 pb-6 sm:pb-8 space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  {profileData.fullName} ({profileData.preferredName})
                </h1>
                <div className="text-xs sm:text-sm font-mono text-blue-400 mt-1 uppercase tracking-wider font-semibold">
                  {isVi && profileData.titleVi ? profileData.titleVi : profileData.title}
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-slate-300 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isVi && profileData.locationVi ? profileData.locationVi : profileData.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {t(
                      "Languages: Vietnamese (Native) · English (Fluent) · Chinese (Basic)",
                      "Ngôn ngữ: Tiếng Việt (Bản ngữ) · Tiếng Anh (Thành thạo) · Tiếng Trung (Cơ bản)"
                    )}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pt-2">
              {isVi && profileData.heroLeadVi ? profileData.heroLeadVi : profileData.heroLead}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>{t("// EDUCATION", "// HỌC VẤN")}</span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
              <div>
                <div className="font-serif font-bold text-base text-white">
                  {profileData.education.school}
                </div>
                <div className="text-slate-400 font-sans mt-0.5">
                  {isVi && profileData.education.degreeVi ? profileData.education.degreeVi : profileData.education.degree} ·{" "}
                  {isVi && profileData.education.notesVi ? profileData.education.notesVi : profileData.education.notes}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience (Honest Independent Experience) */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>{t("// PROFESSIONAL & INDEPENDENT EXPERIENCE", "// KINH NGHIỆM LẬP TRÌNH & DỰ ÁN ĐỘC LẬP")}</span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => {
                const role = isVi && exp.roleVi ? exp.roleVi : exp.role;
                const organizationOrProject = isVi && exp.organizationOrProjectVi ? exp.organizationOrProjectVi : exp.organizationOrProject;
                const period = isVi && exp.periodVi ? exp.periodVi : exp.period;
                const summary = isVi && exp.summaryVi ? exp.summaryVi : exp.summary;
                const responsibilities = isVi && exp.responsibilitiesVi ? exp.responsibilitiesVi : exp.responsibilities;

                return (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="font-serif font-bold text-base text-white">
                        {role}{" "}
                        <span className="font-sans font-normal text-slate-400 text-xs">·</span>{" "}
                        <span className="text-blue-400 font-mono text-xs">{organizationOrProject}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400">{period}</div>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{summary}</p>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Technical Systems & Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>{t("// SELECTED TECHNICAL PROJECTS", "// DỰ ÁN KỸ THUẬT TIÊU BIỂU")}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.map((proj) => {
                const title = isVi && proj.titleVi ? proj.titleVi : proj.title;
                const role = isVi && proj.roleVi ? proj.roleVi : proj.role;
                const description = isVi && proj.descriptionVi ? proj.descriptionVi : proj.description;

                return (
                  <div key={proj.id} className="p-4 rounded-sm bg-white/5 border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-white text-sm">{title}</span>
                      <span className="text-[10px] font-mono text-blue-400">{proj.year}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">{role}</div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{description}</p>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 font-mono text-[11px] hover:underline pt-1"
                      >
                        <span>{t("View on GitHub ↗", "Xem trên GitHub ↗")}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Matrix */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b border-white/10 pb-1.5">
              {t("// TECHNICAL SKILLS MATRIX", "// BẢNG KỸ NĂNG CÔNG NGHỆ")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {skillsData.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <div className="text-blue-400 font-semibold uppercase text-[11px]">
                    {isVi && cat.categoryVi ? cat.categoryVi : cat.category}
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Mantras */}
          <div className="space-y-3 pt-2 border-t border-white/15 text-xs font-mono text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-blue-400 font-bold uppercase">{t("CORE MANTRA:", "PHƯƠNG CHÂM:")}</span>{" "}
              <span>{coreMantras.join("  //  ")}</span>
            </div>
            <div className="text-slate-400 text-[11px]">
              {t("Available for Remote Contracts & Client Builds", "Sẵn sàng nhận hợp đồng từ xa & dự án doanh nghiệp")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
