"use client";

import * as React from "react";
import {
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import { caseStudiesData } from "@/data/caseStudies";
import { ProjectCategory } from "@/types";
import { Tabs, TabItem } from "@/components/ui/Tabs";
import { Modal } from "@/components/ui/Modal";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("All");
  const [selectedCaseStudyId, setSelectedCaseStudyId] = React.useState<string | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "AI",
    "Software",
    "Automation",
    "Infrastructure",
    "Business",
    "Education",
  ];

  const categoryTabs: TabItem[] = categories.map((cat) => ({
    id: cat,
    label: cat,
    count:
      cat === "All"
        ? projectsData.length
        : projectsData.filter((p) => p.category.includes(cat)).length,
  }));

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeCategory));

  const activeCaseStudy = caseStudiesData.find(
    (cs) => cs.id === selectedCaseStudyId || cs.slug === selectedCaseStudyId
  );

  return (
    <section id="projects" className="py-28 md:py-36 relative bg-[#060910] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
              {"// THE WORK & SELECTED ARCHITECTURES"}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white">
              Engineered with precision.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans">
              Autonomous multi-agent systems, local model routing gateways, and full-stack software built for production.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="shrink-0 font-mono">
            <Tabs
              tabs={categoryTabs}
              activeTab={activeCategory}
              onChange={(tabId) => setActiveCategory(tabId as ProjectCategory)}
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-8 sm:p-10 bg-black/70 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Top Number Plate */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
                    N° 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider bg-white/5 border border-white/15 text-slate-300 uppercase"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Role */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-amber-400">
                    {project.role} {"//"} {project.year}
                  </div>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed pt-2">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution */}
                {project.problem && project.solution && (
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-2 text-xs font-sans">
                    <div>
                      <span className="font-bold text-amber-400 font-mono">PROBLEM: </span>
                      <span className="text-slate-300">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-cyan-400 font-mono">SOLUTION: </span>
                      <span className="text-slate-300">{project.solution}</span>
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between gap-4 font-mono text-xs">
                <div>
                  {project.caseStudyId && (
                    <button
                      onClick={() => setSelectedCaseStudyId(project.caseStudyId!)}
                      className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase underline underline-offset-4"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>CASE STUDY</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && project.githubUrl.startsWith("http") ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-white/5 border border-white/15 transition-colors"
                      title="View Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  ) : null}

                  {project.liveUrl && project.liveUrl.startsWith("http") ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors shadow-md"
                    >
                      <span>LIVE SYSTEM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                      [PRODUCTION_SYSTEM]
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        {activeCaseStudy && (
          <Modal
            isOpen={Boolean(selectedCaseStudyId)}
            onClose={() => setSelectedCaseStudyId(null)}
            title={activeCaseStudy.title}
            maxWidth="3xl"
          >
            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div className="p-4 bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>{activeCaseStudy.clientOrProject}</strong> {"//"} {activeCaseStudy.summary}
                </span>
              </div>

              {activeCaseStudy.heroMetrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  {activeCaseStudy.heroMetrics.map((m, i) => (
                    <div key={i} className="p-3.5 bg-black border border-white/15 text-center">
                      <div className="text-xl font-serif font-bold text-amber-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-serif font-bold text-white mb-1.5 text-base">
                  Problem Context
                </h4>
                <p className="leading-relaxed text-slate-200">{activeCaseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-1.5 text-base">
                  Architecture Telemetry
                </h4>
                <p className="leading-relaxed text-slate-200">{activeCaseStudy.architecture.overview}</p>
                {activeCaseStudy.architecture.diagramSummary && (
                  <div className="p-4 mt-3 bg-black text-emerald-300 font-mono text-xs overflow-x-auto border border-emerald-500/30">
                    {activeCaseStudy.architecture.diagramSummary}
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  Challenges &amp; Solutions
                </h4>
                <div className="space-y-3">
                  {activeCaseStudy.challengesAndSolutions.map((cs, i) => (
                    <div
                      key={i}
                      className="p-4 bg-black border border-white/15 text-xs space-y-1.5 font-sans"
                    >
                      <div className="font-semibold text-amber-400 font-mono">
                        CHALLENGE: {cs.challenge}
                      </div>
                      <div className="text-slate-300">
                        SOLUTION: {cs.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  Verified Outcomes
                </h4>
                <ul className="space-y-2 text-xs font-sans">
                  {activeCaseStudy.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-slate-200">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex justify-end font-mono">
                <button
                  onClick={() => setSelectedCaseStudyId(null)}
                  className="px-5 py-2 bg-white text-black font-bold uppercase text-xs"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
