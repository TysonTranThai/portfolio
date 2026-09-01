"use client";

import * as React from "react";
import {
  ExternalLink,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import { caseStudiesData } from "@/data/caseStudies";
import { ProjectCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
    <section id="projects" className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio & Work"
          title="Featured Projects & Systems"
          subtitle="Explore selected applications, multi-agent frameworks, model routing layers, and infrastructure systems I have designed and engineered."
        />

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <Tabs
            tabs={categoryTabs}
            activeTab={activeCategory}
            onChange={(tabId) => setActiveCategory(tabId as ProjectCategory)}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-surface-100"
            >
              <div className="space-y-4">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-600 dark:text-sky-400 mt-1">
                    {project.role} · {project.year}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution Breakdown */}
                {project.problem && project.solution && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-surface-200/50 border border-slate-200/60 dark:border-surface-300/40 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">The Problem: </span>
                      <span className="text-slate-600 dark:text-slate-400">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">The Solution: </span>
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
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-surface-200 text-slate-700 dark:text-slate-300 rounded border border-slate-200/60 dark:border-surface-300/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-surface-200/60 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  {project.caseStudyId && (
                    <button
                      onClick={() => setSelectedCaseStudyId(project.caseStudyId!)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Deep Case Study</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && project.githubUrl.startsWith("http") ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-surface-200 transition-colors"
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
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      Private Repository / Client Build
                    </span>
                  )}
                </div>
              </div>
            </Card>
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
              <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50 text-xs text-sky-800 dark:text-sky-300">
                <span className="font-semibold">{activeCaseStudy.clientOrProject}</span> — {activeCaseStudy.summary}
              </div>

              {activeCaseStudy.heroMetrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeCaseStudy.heroMetrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-100 dark:bg-surface-200 text-center">
                      <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Background &amp; Problem</h4>
                <p className="leading-relaxed">{activeCaseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Architecture &amp; Data Flow</h4>
                <p className="leading-relaxed">{activeCaseStudy.architecture.overview}</p>
                {activeCaseStudy.architecture.diagramSummary && (
                  <div className="p-3 mt-2 rounded-lg bg-slate-900 text-slate-100 dark:bg-surface-950 font-mono text-xs overflow-x-auto">
                    {activeCaseStudy.architecture.diagramSummary}
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Key Challenges &amp; Engineering Solutions</h4>
                <div className="space-y-3">
                  {activeCaseStudy.challengesAndSolutions.map((cs, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300 text-xs space-y-1">
                      <div className="font-semibold text-rose-600 dark:text-rose-400">Challenge: {cs.challenge}</div>
                      <div className="text-slate-700 dark:text-slate-300">Solution: {cs.solution}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Results &amp; Impact</h4>
                <ul className="space-y-1.5 text-xs">
                  {activeCaseStudy.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{r}</span>
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
