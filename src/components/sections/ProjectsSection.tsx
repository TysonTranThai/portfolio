"use client";

import * as React from "react";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  FileCode2,
  Layers,
  ArrowRight,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import {
  PixelBot,
  PixelTerminal,
  PixelStar,
  PixelGamepad,
  PixelRocket,
} from "@/components/ui/PixelArtIcons";
import {
  AIChip,
  ServerBlade,
  SpecNotebook,
  TactileBasketball,
} from "@/components/world/TactileObjects";
import { projectsData } from "@/data/projects";
import { caseStudiesData } from "@/data/caseStudies";
import { Project, CaseStudy } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const getProjectPixelIcon = (id: string) => {
    switch (id) {
      case "chief-of-agents":
        return <PixelBot size={16} color="#06b6d4" />;
      case "gpu-rental-kit":
        return <PixelTerminal size={16} color="#10b981" />;
      case "code-journey":
        return <PixelStar size={16} color="#fbbf24" />;
      case "athletics-detour":
        return <PixelGamepad size={16} color="#f97316" />;
      default:
        return <PixelRocket size={16} color="#60a5fa" />;
    }
  };

  const getProjectPhysicalArtifact = (id: string) => {
    switch (id) {
      case "chief-of-agents":
        return <AIChip className="scale-75 origin-center" />;
      case "gpu-rental-kit":
        return <ServerBlade className="scale-75 origin-center" />;
      case "code-journey":
        return <SpecNotebook className="scale-75 origin-center" />;
      case "athletics-detour":
        return <TactileBasketball className="scale-75 origin-center" />;
      default:
        return null;
    }
  };

  const handleOpenCaseStudy = (project: Project) => {
    if (project.caseStudyId) {
      const found = caseStudiesData.find((cs) => cs.id === project.caseStudyId);
      if (found) {
        setSelectedCaseStudy(found);
        return;
      }
    }
  };

  return (
    <section id="projects" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15 atmosphere-cyan">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>{t("// THE WORK & SELECTED ARCHITECTURES", "// CÁC DỰ ÁN & HỆ THỐNG TIÊU BIỂU")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Engineered for real-world impact.", "Kiến tạo vì giá trị thực tiễn.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "Every project listed represents a production system built with rigorous interface specifications, deterministic error recovery, and measurable ROI.",
              "Mỗi dự án đều là một hệ thống thực chiến được xây dựng với đặc tả chuẩn mực, khả năng tự sửa lỗi và mang lại hiệu quả đo lường được."
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const title = isVi && project.titleVi ? project.titleVi : project.title;
            const role = isVi && project.roleVi ? project.roleVi : project.role;
            const status = isVi && project.statusVi ? project.statusVi : project.status;
            const description = isVi && project.descriptionVi ? project.descriptionVi : project.description;
            const problem = isVi && project.problemVi ? project.problemVi : project.problem;
            const highlights = isVi && project.highlightsVi ? project.highlightsVi : project.highlights;

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-8 sm:p-10 bg-black/70 border border-cyan-500/20 hover:border-cyan-400/50 rounded-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
              >
                <div className="space-y-5">
                  {/* Header Plate */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-sm bg-white/5 border border-white/10">
                        {getProjectPixelIcon(project.id)}
                      </div>
                      <span className="text-xs font-serif font-bold text-cyan-400 font-mono">
                        N° 0{idx + 1}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 uppercase">
                      {status}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-1 uppercase tracking-wider font-semibold">
                        {role} · {project.year}
                      </p>
                    </div>

                    {/* Tactile Physical Mini Artifact */}
                    {getProjectPhysicalArtifact(project.id) && (
                      <div className="shrink-0 -my-2 opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        {getProjectPhysicalArtifact(project.id)}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                    {description}
                  </p>

                  {/* Problem Statement Tablet */}
                  {problem && (
                    <div className="space-y-2 text-xs font-sans border-t border-white/10 pt-3">
                      <div className="p-3 rounded-sm bg-white/5 border border-white/10 space-y-1">
                        <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                          {t("PROBLEM STATEMENT:", "VẤN ĐỀ ĐẶT RA:")}
                        </span>
                        <p className="text-slate-300 leading-relaxed text-[11px]">
                          {problem}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-2 font-sans text-xs">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                      {t("DELIVERABLES & OUTCOMES:", "KẾT QUẢ & BÀN GIAO:")}
                    </div>
                    <ul className="space-y-1 text-slate-300">
                      {highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-6 mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors uppercase text-[11px] font-bold"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition-colors uppercase text-[11px] font-bold"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>CODE</span>
                      </a>
                    )}
                  </div>

                  {project.caseStudyId && (
                    <button
                      onClick={() => handleOpenCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-200 text-black font-bold uppercase text-[11px] rounded-sm transition-colors shadow-md"
                    >
                      <span>{t("CASE STUDY", "CHI TIẾT")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study Modal Drawer */}
        {selectedCaseStudy && (
          <Modal
            isOpen={Boolean(selectedCaseStudy)}
            onClose={() => setSelectedCaseStudy(null)}
            title={isVi && selectedCaseStudy.titleVi ? selectedCaseStudy.titleVi : selectedCaseStudy.title}
            maxWidth="3xl"
          >
            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div className="p-4 bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 font-mono flex items-center justify-between">
                <span>{isVi && selectedCaseStudy.clientOrProjectVi ? selectedCaseStudy.clientOrProjectVi : selectedCaseStudy.clientOrProject}</span>
                <span>{isVi && selectedCaseStudy.goalVi ? selectedCaseStudy.goalVi : selectedCaseStudy.goal}</span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-1.5 text-base">
                  {t("The Problem", "Vấn Đề Đặt Ra")}
                </h4>
                <p className="leading-relaxed text-slate-200">
                  {isVi && selectedCaseStudy.problemVi ? selectedCaseStudy.problemVi : selectedCaseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  {t("System Architecture", "Kiến Trúc Hệ Thống")}
                </h4>
                <p className="leading-relaxed text-slate-200 mb-3">
                  {isVi && selectedCaseStudy.architecture.overviewVi ? selectedCaseStudy.architecture.overviewVi : selectedCaseStudy.architecture.overview}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(isVi && selectedCaseStudy.architecture.componentsVi ? selectedCaseStudy.architecture.componentsVi : selectedCaseStudy.architecture.components).map((comp, idx) => (
                    <div key={idx} className="p-3 bg-black border border-white/10 rounded-sm flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  {t("Key Implementation Steps", "Các Bước Triển Khai Chính")}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {(isVi && selectedCaseStudy.implementationStepsVi ? selectedCaseStudy.implementationStepsVi : selectedCaseStudy.implementationSteps).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileCode2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase rounded-sm text-center"
                >
                  {t("Close", "Đóng")}
                </button>
                <Link
                  href="#contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase rounded-sm text-center shadow-md transition-colors"
                >
                  {t("Discuss Similar Architecture →", "Thảo Luận Dự Án Tương Tự →")}
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
