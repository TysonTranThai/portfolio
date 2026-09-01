# Tran Thai Son (Tyson) — Personal Command Center & CV Portfolio

> **Production-grade personal command center, portfolio, client services portal, teaching hub, and interactive CV.**  
> Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, next-themes, and Lucide Icons.

---

## ⚡ Quick Start

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌟 Key Features

1. **Apple × OpenAI Aesthetic**:
   - Deep obsidian dark mode + crisp clean light mode with smooth theme switching.
   - Ambient lighting mesh, frosted glass cards (`glass-panel`), responsive typography, and refined micro-interactions.
2. **Personal Command Center (`Cmd+K` / `Ctrl+K`)**:
   - Spotlight search palette with instant keyboard navigation, route shortcuts, email copy trigger, and theme toggling.
3. **Decoupled Central Data Layer (`/src/data/`)**:
   - Single source of truth driving the entire website and the CV page simultaneously.
   - Zero duplicated data across components.
4. **Interactive Dedicated CV Page (`/cv`)**:
   - Screen-optimized view + custom `@media print` CSS for 1-click pixel-perfect PDF export.
5. **Dynamic Project Portfolio with Deep Case Studies**:
   - Filterable by `All`, `AI`, `Software`, `Automation`, `Infrastructure`, `Business`, `Education`.
   - Interactive modal drawers for deep architectural case studies (Problem, Architecture, Solutions, Results).
6. **Dedicated Client Services Portal (`/services`)**:
   - 8 distinct client offerings with clear deliverables, target audience, example use cases, and inquiry routing.
7. **Teaching & Mentorship Hub (`/teaching`)**:
   - Project-first "AI Vibe Coding" curriculum, core philosophy, and 1-on-1 mentorship sprint formats.
8. **Interactive "How I Build" AI Pipeline**:
   - Visual 7-stage vibe coding & spec-driven engineering workflow (Idea → Research → Plan → Build → Test → Deploy → Iterate).
9. **Multi-Intent Contact Router**:
   - Interactive intent selector for Client Projects, Student Mentorship, and Technical Collaboration with instant copy-to-clipboard email toast.
10. **Full SEO & Accessibility**:
    - JSON-LD Structured Data (`Person`), dynamic OpenGraph, Twitter cards, `sitemap.xml`, `robots.txt`, semantic HTML, and keyboard accessibility.

---

## 📁 Architecture & File Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (Metadata, JSON-LD, Providers, Navbar, Footer)
│   │   ├── page.tsx           # Homepage (Personal Command Center)
│   │   ├── cv/page.tsx        # Print-optimized interactive CV / Resume page
│   │   ├── projects/page.tsx  # Extended Projects & Case Studies catalog
│   │   ├── services/page.tsx  # Client Engineering & Services portal
│   │   ├── teaching/page.tsx  # AI Vibe Coding Mentorship portal
│   │   ├── sitemap.ts         # Dynamic SEO sitemap generator
│   │   ├── robots.ts          # Dynamic robots.txt generator
│   │   └── globals.css        # Tailwind design tokens, print CSS, ambient mesh
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Sticky glass navigation with mobile drawer
│   │   │   ├── Footer.tsx         # Comprehensive footer with status indicator
│   │   │   ├── CommandMenu.tsx    # Cmd+K Spotlight search modal
│   │   │   └── ThemeToggle.tsx    # Dark/Light mode switch
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx            # Positioning, badges, CTAs, live status
│   │   │   ├── AboutSection.tsx           # Authentic journey & milestone progression
│   │   │   ├── WhatIDoSection.tsx         # 5 core pillars (AI, Software, Infra, Automation, Teaching)
│   │   │   ├── ProjectsSection.tsx        # Filterable project cards + case study modal
│   │   │   ├── ClientServicesSection.tsx  # 8 client offerings + detailed modal
│   │   │   ├── TeachingSection.tsx        # Mentorship curriculum & formats
│   │   │   ├── HowIBuildSection.tsx       # 7-phase vibe coding pipeline
│   │   │   ├── ClientWorkflowSection.tsx  # 7-step client delivery roadmap
│   │   │   ├── StudentWorkflowSection.tsx # 6-step student empowering roadmap
│   │   │   ├── ExperienceSection.tsx      # Structured career & build milestones
│   │   │   ├── TechStackSection.tsx       # Categorized skills with honest proficiency
│   │   │   ├── CaseStudiesSection.tsx     # Deep architectural breakdowns
│   │   │   ├── TestimonialsSection.tsx    # Social proof & feedback
│   │   │   ├── BeyondTheCodeSection.tsx   # Personal side & discipline
│   │   │   └── ContactSection.tsx         # Multi-intent inquiry router & copy toast
│   │   ├── ui/
│   │   │   ├── Button.tsx, Card.tsx, Badge.tsx, Modal.tsx, Tabs.tsx, Toast.tsx, Icons.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx          # Next-themes wrapper
│   ├── data/                              # 📌 Centralized Content Architecture
│   │   ├── profile.ts         # Personal identity, bio, positioning, quick facts
│   │   ├── projects.ts        # Projects data structure with problem/solution/tags
│   │   ├── services.ts        # Client service offerings & deliverables
│   │   ├── teaching.ts        # Mentorship topics & learning formats
│   │   ├── experience.ts      # Career & build timeline
│   │   ├── skills.ts          # Tech stack & nuanced proficiency levels
│   │   ├── workflows.ts       # How I Build, Client & Student workflows
│   │   ├── caseStudies.ts     # Deep architectural case studies
│   │   ├── testimonials.ts    # Client & student testimonials
│   │   ├── socials.ts         # Contact info, email, GitHub, LinkedIn, Telegram
│   │   └── navigation.ts      # Header navigation items & CTA
│   ├── lib/
│   │   └── utils.ts           # Class merging (clsx + tailwind-merge)
│   └── types/
│       └── index.ts           # TypeScript interfaces for all data structures
```

---

## 🛠️ How to Update Your Information

You can update any piece of information on the website or CV by modifying the files in `src/data/`:

| What you want to edit | File to modify |
|---|---|
| Name, Bio, Tagline, Availability status, Personal Interests | `src/data/profile.ts` |
| Projects, GitHub / Demo links, Tech tags | `src/data/projects.ts` |
| Client Services, Deliverables, Use Cases | `src/data/services.ts` |
| Mentorship topics, formats, target audience | `src/data/teaching.ts` |
| Work experience, project roles, achievements | `src/data/experience.ts` |
| Tech stack & proficiency levels | `src/data/skills.ts` |
| Email, Telegram, LinkedIn, GitHub links | `src/data/socials.ts` |
| Client & Student testimonials | `src/data/testimonials.ts` |
| Deep case studies & architectures | `src/data/caseStudies.ts` |

---

## 🖨️ How to Export the CV as PDF

1. Navigate to `/cv` on the website (or click **"Download CV"** in the Hero or Navbar).
2. Click the **"Print / Save as PDF"** button.
3. In the browser print dialog:
   - **Destination**: *Save as PDF*
   - **Layout**: *Portrait*
   - **Margins**: *Default* or *None*
   - **Background graphics**: *Checked*
4. Click **Save**.

The custom `@media print` stylesheet automatically hides navbars, footers, and buttons, generating a crisp, high-contrast, professional resume document.
