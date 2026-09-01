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
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
    <section id="projects" className="py-24 md:py-32 relative bg-computational-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio & Systems"
          title="Featured Projects & Architecture"
          subtitle="Explore selected applications, multi-agent frameworks, model routing layers, and infrastructure systems I have designed and engineered."
        />

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs
            tabs={categoryTabs}
            activeTab={activeCategory}
            onChange={(tabId) => setActiveCategory(tabId as ProjectCategory)}
          />
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <TiltCard
              key={project.id}
              glowColor={
                project.category.includes("AI")
                  ? "rgba(16, 185, 129, 0.25)"
                  : project.category.includes("Infrastructure")
                  ? "rgba(6, 182, 212, 0.25)"
                  : "rgba(204, 255, 0, 0.25)"
              }
              className="flex flex-col justify-between p-8 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10"
            >
              <div className="space-y-5">
                {/* Top Number & Status Row */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black font-mono text-emerald-400">
                      0{idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.category.map((cat) => (
                        <Badge key={cat} variant="subtle" size="sm" className="font-mono text-[10px]">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Badge
                    variant={
                      project.status === "Active" || project.status === "Completed"
                        ? "success"
                        : "cyan"
                    }
                    size="sm"
                    className="font-mono text-[10px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{project.status}</span>
                  </Badge>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 mt-1">
                    {project.role} {"//"} {project.year}
                  </div>
                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution Preview */}
                {project.problem && project.solution && (
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2.5 text-xs font-sans">
                    <div>
                      <span className="font-bold text-white font-mono text-emerald-400">PROBLEM: </span>
                      <span className="text-slate-300">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-white font-mono text-cyan-400">SOLUTION: </span>
                      <span className="text-slate-300">{project.solution}</span>
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono bg-white/5 text-slate-300 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap font-mono">
                <div>
                  {project.caseStudyId && (
                    <button
                      onClick={() => setSelectedCaseStudyId(project.caseStudyId!)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>CASE_STUDY →</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && project.githubUrl.startsWith("http") ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-slate-200 transition-colors"
                    >
                      <span>LIVE_DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      [PROD_CLIENT_BUILD]
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
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
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2 font-mono">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>{activeCaseStudy.clientOrProject}</strong> {"//"} {activeCaseStudy.summary}
                </span>
              </div>

              {activeCaseStudy.heroMetrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  {activeCaseStudy.heroMetrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 text-center">
                      <div className="text-xl font-extrabold text-emerald-400">
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
                <h4 className="font-bold text-white mb-1.5 text-xs font-mono uppercase text-slate-400">
                  {"// PROBLEM_CONTEXT"}
                </h4>
                <p className="leading-relaxed text-slate-200">{activeCaseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1.5 text-xs font-mono uppercase text-slate-400">
                  {"// ARCHITECTURE_TELEMETRY"}
                </h4>
                <p className="leading-relaxed text-slate-200">{activeCaseStudy.architecture.overview}</p>
                {activeCaseStudy.architecture.diagramSummary && (
                  <div className="p-4 mt-3 rounded-2xl bg-black text-emerald-300 font-mono text-xs overflow-x-auto border border-emerald-500/30">
                    {activeCaseStudy.architecture.diagramSummary}
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 text-xs font-mono uppercase text-slate-400">
                  {"// CHALLENGES_AND_SOLUTIONS"}
                </h4>
                <div className="space-y-3">
                  {activeCaseStudy.challengesAndSolutions.map((cs, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-xs space-y-1.5 font-sans"
                    >
                      <div className="font-semibold text-rose-400 font-mono">
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
                <h4 className="font-bold text-white mb-2 text-xs font-mono uppercase text-slate-400">
                  {"// VERIFIED_IMPACT"}
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

              <div className="pt-4 border-t border-white/10 flex justify-end font-mono">
                <Button variant="secondary" size="sm" onClick={() => setSelectedCaseStudyId(null)}>
                  Close Case Study
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
