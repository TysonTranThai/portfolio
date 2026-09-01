"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  Code2,
  Mail,
  Copy,
  Sun,
  Moon,
  ArrowRight,
  Command,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Modal } from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { contactInfo, socialLinks } from "@/data/socials";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";

interface CommandMenuItem {
  title: string;
  subtitle?: string;
  href?: string;
  action?: () => void;
  icon: React.ComponentType<{ className?: string }>;
}

interface CommandMenuSection {
  category: string;
  items: CommandMenuItem[];
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { showToast } = useToast();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    showToast("Email address copied to clipboard!");
    setIsOpen(false);
  };

  const handleNavigate = (url: string) => {
    setIsOpen(false);
    router.push(url);
  };

  const sections: CommandMenuSection[] = [
    {
      category: "Navigation",
      items: [
        { title: "Home / Overview", href: "/#", icon: Sparkles },
        { title: "View CV & Resume (Print / PDF)", href: "/cv", icon: FileText },
        { title: "Projects & Portfolio", href: "/#projects", icon: Code2 },
        { title: "Client Services", href: "/#services", icon: Briefcase },
        { title: "Teaching & Mentorship", href: "/#teaching", icon: GraduationCap },
        { title: "How I Build (AI Workflow)", href: "/#how-i-build", icon: Sparkles },
        { title: "Experience Timeline", href: "/#experience", icon: Briefcase },
        { title: "Tech Stack & Skills", href: "/#tech-stack", icon: Code2 },
        { title: "Contact & Inquiries", href: "/#contact", icon: Mail },
      ],
    },
    {
      category: "Featured Projects",
      items: projectsData.slice(0, 4).map((p) => ({
        title: p.title,
        subtitle: p.tagline,
        href: `/#projects`,
        icon: Code2,
      })),
    },
    {
      category: "Services",
      items: servicesData.slice(0, 4).map((s) => ({
        title: s.title,
        subtitle: s.tagline,
        href: `/#services`,
        icon: Briefcase,
      })),
    },
    {
      category: "Quick Actions",
      items: [
        {
          title: `Copy Email (${contactInfo.email})`,
          action: handleCopyEmail,
          icon: Copy,
        },
        {
          title: "Toggle Light / Dark Mode",
          action: () => {
            setTheme(theme === "dark" ? "light" : "dark");
            setIsOpen(false);
          },
          icon: theme === "dark" ? Sun : Moon,
        },
        {
          title: "Open GitHub Profile",
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "GitHub")?.url, "_blank");
            setIsOpen(false);
          },
          icon: GithubIcon,
        },
        {
          title: "Open LinkedIn Profile",
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "LinkedIn")?.url, "_blank");
            setIsOpen(false);
          },
          icon: LinkedinIcon,
        },
      ],
    },
  ];

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette"
        className="command-menu-trigger hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-surface-200 hover:bg-slate-200/80 dark:hover:bg-surface-300 border border-slate-200 dark:border-surface-300 rounded-xl transition-all select-none"
      >
        <Search className="w-3.5 h-3.5" />
        <span>Command Menu</span>
        <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-surface-100 rounded border border-slate-300 dark:border-surface-300">
          <Command className="w-2.5 h-2.5" /> K
        </kbd>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="xl">
        <div className="space-y-4">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, page, or search query..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
              autoFocus
            />
          </div>

          <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
            {filteredSections.length === 0 ? (
              <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                No matching results found for &ldquo;{query}&rdquo;
              </div>
            ) : (
              filteredSections.map((section) => (
                <div key={section.category} className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2">
                    {section.category}
                  </div>
                  {section.items.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.action) {
                            item.action();
                          } else if (item.href) {
                            handleNavigate(item.href);
                          }
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-surface-200 text-left transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-300/50 text-slate-600 dark:text-slate-300 group-hover:text-sky-500">
                            <Icon className="w-4 h-4 shrink-0" />
                          </div>
                          <div className="truncate">
                            <div className="text-sm font-medium text-slate-900 dark:text-white truncate">
                              {item.title}
                            </div>
                            {item.subtitle && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                {item.subtitle}
                              </div>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-surface-200 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              Navigation: <kbd className="px-1 py-0.5 bg-slate-100 dark:bg-surface-200 rounded">Esc</kbd> to close
            </span>
            <span>Tyson Tran Personal Command Center</span>
          </div>
        </div>
      </Modal>
    </>
  );
}
