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
    <section id="projects" className="py-24 md:py-32 relative">
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
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              glowColor={
                project.category.includes("AI")
                  ? "rgba(6, 182, 212, 0.25)"
                  : project.category.includes("Infrastructure")
                  ? "rgba(16, 185, 129, 0.25)"
                  : "rgba(139, 92, 246, 0.25)"
              }
              className="flex flex-col justify-between p-7 sm:p-9"
            >
              <div className="space-y-5">
                {/* Top status & category row */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="subtle" size="sm">
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  <Badge
                    variant={
                      project.status === "Active" || project.status === "Completed"
                        ? "success"
                        : project.status === "In Development"
                        ? "cyan"
                        : "default"
                    }
                    size="sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{project.status}</span>
                  </Badge>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-600 dark:text-sky-400 mt-1">
                    {project.role} · {project.year}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution Preview */}
                {project.problem && project.solution && (
                  <div className="p-4 rounded-2xl bg-slate-50/90 dark:bg-surface-200/50 border border-slate-200/70 dark:border-surface-300/40 space-y-2.5 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-200">The Problem: </span>
                      <span className="text-slate-600 dark:text-slate-400">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-200">The Solution: </span>
                      <span className="text-slate-600 dark:text-slate-400">{project.solution}</span>
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
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
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-100 dark:bg-surface-200 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/60 dark:border-surface-300/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-surface-200/60 flex items-center justify-between gap-3 flex-wrap">
                <div>
                  {project.caseStudyId && (
                    <button
                      onClick={() => setSelectedCaseStudyId(project.caseStudyId!)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Deep Architectural Case Study</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && project.githubUrl.startsWith("http") ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-surface-200 transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 transition-opacity shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      Private Repository / Client Solution
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
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50 text-xs text-sky-800 dark:text-sky-300 flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-sky-500 shrink-0" />
                <span>
                  <strong>{activeCaseStudy.clientOrProject}</strong> — {activeCaseStudy.summary}
                </span>
              </div>

              {activeCaseStudy.heroMetrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeCaseStudy.heroMetrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-100 dark:bg-surface-200 text-center">
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                  Problem Context &amp; Objectives
                </h4>
                <p className="leading-relaxed">{activeCaseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                  Architecture &amp; Data Flow
                </h4>
                <p className="leading-relaxed">{activeCaseStudy.architecture.overview}</p>
                {activeCaseStudy.architecture.diagramSummary && (
                  <div className="p-4 mt-3 rounded-2xl bg-slate-950 text-slate-100 dark:bg-surface-950 font-mono text-xs overflow-x-auto border border-slate-800">
                    {activeCaseStudy.architecture.diagramSummary}
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                  Key Challenges &amp; Engineering Solutions
                </h4>
                <div className="space-y-3">
                  {activeCaseStudy.challengesAndSolutions.map((cs, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300 text-xs space-y-1.5"
                    >
                      <div className="font-semibold text-rose-600 dark:text-rose-400">
                        Challenge: {cs.challenge}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        Solution: {cs.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                  Verified Results &amp; Impact
                </h4>
                <ul className="space-y-2 text-xs">
                  {activeCaseStudy.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-surface-200 flex justify-end">
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
