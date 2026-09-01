import { TeachingProgram } from "@/types";

export const teachingData: TeachingProgram = {
  id: "ai-vibe-coding-mentorship",
  title: "AI-Assisted Software Building & Vibe Coding Mentorship",
  badge: "Practical 1-on-1 Mentorship",
  description:
    "A modern, hands-on mentorship program designed to teach you how to turn ideas into working, deployed software using modern AI coding agents, clean architecture, and real-world developer tools.",
  corePhilosophy:
    "Traditional programming education spends months teaching abstract syntax before you ever build anything real. My approach flips this on its head: we build real projects from day one, leveraging modern AI coding tools while learning the foundational mental models, architecture, and debugging skills needed to build independently.",
  curriculumTopics: [
    {
      title: "AI Fundamentals & Prompt Engineering for Code",
      description: "Learn how LLMs process code and how to write precise architectural specifications.",
      items: [
        "Mental models for Large Language Models and coding agents",
        "Writing effective prompts, system instructions, and project specification docs",
        "Context management: preventing hallucinations and maintaining project integrity",
        "Spec-driven development: defining requirements before touching code",
      ],
    },
    {
      title: "Modern AI Coding Agents & Tooling",
      description: "Master the modern tools that elite builders use to ship at 10x speed.",
      items: [
        "Working effectively with AI coding environments (Cursor, Claude Code, Antigravity, GitHub Copilot)",
        "Configuring custom rules (`.cursorrules`, system prompts) for consistent code quality",
        "Agent orchestration: letting AI handle boilerplate while you steer architecture",
        "Terminal and CLI productivity essentials",
      ],
    },
    {
      title: "Full-Stack Web Development Architecture",
      description: "Understand the core building blocks of modern web applications.",
      items: [
        "Modern React & Next.js App Router fundamentals",
        "Tailwind CSS for responsive, modern UI design",
        "Client-side vs. Server-side rendering mental models",
        "Component-driven architecture and state management",
      ],
    },
    {
      title: "Backend, APIs & Databases",
      description: "Connect your frontends to real data, authentication, and external services.",
      items: [
        "REST APIs, webhooks, and HTTP protocols explained simply",
        "Relational databases & SQL with Supabase and PostgreSQL",
        "User authentication (OAuth, magic links, session management)",
        "Integrating third-party AI APIs (OpenAI, Anthropic, OpenRouter)",
      ],
    },
    {
      title: "Version Control, Git & GitHub",
      description: "Professional source control workflows demystified.",
      items: [
        "Git fundamentals: commits, branches, merges, and rollbacks",
        "GitHub repository management and collaboration workflows",
        "Handling merge conflicts and tracking project history cleanly",
        "Safe experimentation with git branches",
      ],
    },
    {
      title: "Debugging, Verification & Deployment",
      description: "Take your application from local localhost to a live URL on the internet.",
      items: [
        "Systematic debugging: reading error logs and isolating root causes",
        "Testing and verification strategies for AI-generated code",
        "One-click deployments with Vercel, Netlify, and custom domains",
        "Environment variables, secrets management, and basic security best practices",
      ],
    },
  ],
  targetAudience: [
    "Complete beginners with little or no prior coding experience who want to build real software",
    "Students looking to build impressive, functional portfolio projects instead of toy exercises",
    "Non-technical founders and entrepreneurs needing to build and launch working MVPs",
    "Traditional developers curious about transitioning to AI-assisted 'vibe coding' workflows",
  ],
  formats: [
    {
      title: "1-on-1 Personalized Mentorship",
      duration: "Weekly 60–90 min live sessions + asynchronous chat support",
      description:
        "Dedicated private coaching tailored to your specific project goals. We screen-share, architect, code together, and debug in real-time.",
      features: [
        "Personalized curriculum tailored to your exact project idea",
        "Direct code reviews and architectural guidance",
        "Async Q&A support between live sessions",
        "Step-by-step accountability from zero to deployment",
      ],
    },
    {
      title: "Project-Based Sprint Build",
      duration: "Intensive 2–3 week sprint",
      description:
        "We pick a concrete product or tool you want to build and sprint together through ideation, specification, AI-assisted development, and deployment.",
      features: [
        "Focused milestone roadmap with tangible weekly deliverables",
        "Hands-on pair programming and agent orchestration sessions",
        "Live deployed project published under your own domain/GitHub",
        "Complete ownership of code and architecture",
      ],
    },
    {
      title: "AI Developer Tooling & Workflow Workshop",
      duration: "1–2 intensive masterclass sessions",
      description:
        "A concentrated deep-dive into setting up, configuring, and mastering AI coding agents (Cursor, Claude Code, etc.) to 10x your personal build speed.",
      features: [
        "IDE and agent environment setup and shortcut optimization",
        "Custom rule templates and specification blueprints",
        "Live interactive building exercise to cement prompt patterns",
        "Cheat sheets and reference guides for continuous learning",
      ],
    },
  ],
};
