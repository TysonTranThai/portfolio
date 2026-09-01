"use client";

import * as React from "react";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  FileCode2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import { caseStudiesData } from "@/data/caseStudies";
import { Project, CaseStudy } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);
  const { t } = useLanguage();

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
    <section id="projects" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
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
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-8 sm:p-10 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Header Plate */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                    N° 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-slate-300 uppercase">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400 mt-1 uppercase tracking-wider font-semibold">
                    {project.role} · {project.year}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans pt-2">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution Tablets */}
                {project.problem && (
                  <div className="space-y-2 text-xs font-sans border-t border-white/10 pt-3">
                    <div className="p-3 rounded-sm bg-white/5 border border-white/10 space-y-1">
                      <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                        {t("PROBLEM STATEMENT:", "VẤN ĐỀ ĐẶT RA:")}
                      </span>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        {project.problem}
                      </p>
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-2 font-sans text-xs">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                    {t("DELIVERABLES & OUTCOMES:", "KẾT QUẢ & BÀN GIAO:")}
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {project.highlights.slice(0, 3).map((h, i) => (
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
                      className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors uppercase text-[11px] font-bold"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                </div>

                {project.caseStudyId && (
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-bold uppercase text-[11px] rounded-sm hover:bg-slate-200 transition-colors shadow-md"
                  >
                    <span>{t("CASE STUDY", "CHI TIẾT")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal Drawer */}
        {selectedCaseStudy && (
          <Modal
            isOpen={Boolean(selectedCaseStudy)}
            onClose={() => setSelectedCaseStudy(null)}
            title={selectedCaseStudy.title}
            maxWidth="3xl"
          >
            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div className="p-4 bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 font-mono flex items-center justify-between">
                <span>{selectedCaseStudy.clientOrProject}</span>
                <span>{selectedCaseStudy.goal}</span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-1.5 text-base">
                  {t("The Problem", "Vấn Đề")}
                </h4>
                <p className="leading-relaxed text-slate-200">{selectedCaseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  {t("System Architecture", "Kiến Trúc Hệ Thống")}
                </h4>
                <p className="leading-relaxed text-slate-200 mb-3">{selectedCaseStudy.architecture.overview}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedCaseStudy.architecture.components.map((comp, idx) => (
                    <div key={idx} className="p-3 bg-black border border-white/10 rounded-sm flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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
                  {selectedCaseStudy.implementationSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileCode2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between font-mono">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 bg-white/10 text-white text-xs uppercase"
                >
                  {t("Close", "Đóng")}
                </button>
                <Link
                  href="#contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-5 py-2 bg-white text-black font-bold text-xs uppercase"
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
