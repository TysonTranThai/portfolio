import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "not-limited-router",
    slug: "not-limited-router",
    title: "Not Limited Router",
    tagline: "Intelligent AI Model Routing & Multi-Provider Fallback Gateway",
    description:
      "A high-performance AI API gateway and routing layer designed to dynamically distribute LLM requests across multiple providers (OpenAI, Anthropic, local self-hosted models) with automatic failover, latency optimization, and cost tracking.",
    role: "Lead Architect & Developer",
    category: ["AI", "Infrastructure", "Software"],
    technologies: ["TypeScript", "Node.js", "Next.js", "Docker", "Reverse Proxy", "FastAPI / Python", "Redis"],
    featured: true,
    status: "Active",
    problem:
      "Relying on a single LLM API provider creates vendor lock-in, latency spikes, rate limit failures, and unpredictable API billing without unified observability.",
    solution:
      "Engineered a unified proxy layer that normalizes requests, checks provider health in real-time, routes tasks to the most cost-effective and low-latency model, and fails over seamlessly without downtime.",
    results: [
      "99.9% uptime with automated zero-touch failovers",
      "Unified telemetry for token usage, latency, and cost per request",
      "Support for hybrid cloud: routing trivial tasks to local LLMs and complex reasoning to frontier APIs",
    ],
    githubUrl: "[PLACEHOLDER — ADD REPO URL]",
    liveUrl: "[PLACEHOLDER — ADD LIVE URL]",
    caseStudyId: "case-study-not-limited-router",
    highlights: [
      "Dynamic model switching based on prompt complexity and latency",
      "Built-in caching layer to prevent duplicate inference costs",
      "Compatible with standard OpenAI API specs for drop-in replacement",
    ],
    year: "2025 - Present",
  },
  {
    id: "not-limited-team",
    slug: "not-limited-team",
    title: "Not Limited Team",
    tagline: "Autonomous Multi-Agent Collaboration & Workflow Execution Hub",
    description:
      "An agentic workflow platform coordinating specialized AI agents (researcher, planner, coder, reviewer) to execute complex digital tasks, code generation, and business research autonomously.",
    role: "Creator & Systems Builder",
    category: ["AI", "Automation", "Software"],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Python", "LangChain/Custom Agents", "WebSockets"],
    featured: true,
    status: "In Development",
    problem:
      "Standard chatbots lack persistent memory, multi-step execution capabilities, and cross-agent peer review necessary for complex end-to-end deliverables.",
    solution:
      "Constructed a structured multi-agent pipeline where specialized agents hand off tasks with strict input/output contracts, step-by-step verification, and human-in-the-loop oversight.",
    results: [
      "Automates multi-phase research and content generation pipelines",
      "Structured task state persistence with real-time streaming UI",
      "Modular agent plugin architecture for custom tools",
    ],
    githubUrl: "[PLACEHOLDER — ADD REPO URL]",
    liveUrl: "[PLACEHOLDER — ADD LIVE URL]",
    caseStudyId: "case-study-not-limited-team",
    highlights: [
      "Autonomous sub-agent delegation with specialized tool access",
      "Step-by-step execution timeline with live feedback stream",
      "Custom memory context architecture for cross-session continuity",
    ],
    year: "2025",
  },
  {
    id: "ai-support-automation",
    slug: "ai-support-automation",
    title: "AI Customer Support & Lead Automation",
    tagline: "Autonomous Omnichannel Support & Lead Triage for Businesses",
    description:
      "A tailored customer service and lead capture automation system integrating messaging channels (Telegram, Web Chat, Discord) with knowledge base retrieval (RAG) and CRM sync.",
    role: "AI Consultant & Full-Stack Engineer",
    category: ["AI", "Automation", "Business"],
    technologies: ["Next.js", "TypeScript", "OpenAI / Claude API", "Vector Embeddings", "Supabase", "Webhook APIs"],
    featured: true,
    status: "Completed",
    problem:
      "Client business was overwhelmed with repetitive inquiry messages outside business hours, leading to delayed response times and lost customer conversions.",
    solution:
      "Designed and deployed an intelligent conversational assistant connected to the client's internal product documentation, capable of answering detailed questions and escalating warm leads directly to staff.",
    results: [
      "Instant response time 24/7 across customer messaging touchpoints",
      "Over 70% of repetitive Tier-1 support questions resolved without human intervention",
      "Structured lead collection piped directly into operational dashboards",
    ],
    githubUrl: "[PLACEHOLDER — CLIENT REPO PRIVATE]",
    liveUrl: "[PLACEHOLDER — ADD DEMO URL]",
    caseStudyId: "case-study-customer-support",
    highlights: [
      "Strict grounding in client knowledge base to prevent hallucinations",
      "Human handoff mechanism with conversation context summaries",
      "Zero latency webhook pipeline with analytics logging",
    ],
    year: "2024 - 2025",
  },
  {
    id: "self-hosted-ai-infra",
    slug: "self-hosted-ai-infra",
    title: "Self-Hosted AI Inference & VPS Cloud Stack",
    tagline: "Private High-Throughput LLM & Tool Server Architecture",
    description:
      "A cost-efficient, self-hosted Linux VPS infrastructure running containerized local models (vLLM, Ollama, Qwen, DeepSeek) with Nginx reverse proxy, SSL, and authentication.",
    role: "DevOps & Infrastructure Engineer",
    category: ["Infrastructure", "AI"],
    technologies: ["Linux (Ubuntu)", "Docker & Docker Compose", "vLLM", "Ollama", "Nginx", "Certbot", "UFW / WireGuard"],
    featured: true,
    status: "Active",
    problem:
      "Commercial cloud API costs and data privacy concerns made running continuous background research and batch processing expensive and restrictive.",
    solution:
      "Configured a dedicated GPU/CPU VPS cluster running lightweight quant models with API authentication, token bucket rate limiting, and automated health monitoring.",
    results: [
      "Significantly reduced experimental inference costs compared to public APIs",
      "100% private data isolation for sensitive processing and scraping tasks",
      "Sub-second response times for localized semantic search and summarization",
    ],
    githubUrl: "[PLACEHOLDER — INFRASTRUCTURE CONFIGS]",
    highlights: [
      "Automated Docker container deployment with auto-restart policies",
      "Secured API endpoints behind Nginx reverse proxy and bearer token auth",
      "Tailscale / WireGuard private network peering for secure remote access",
    ],
    year: "2024 - Present",
  },
  {
    id: "personal-command-center",
    slug: "personal-command-center",
    title: "Personal Command Center & Dynamic CV",
    tagline: "High-Performance Developer Identity, Portfolio & Interactive Resume",
    description:
      "A purpose-built personal platform presenting professional capabilities, client service offerings, interactive CV generation, and mentorship roadmaps with Apple × OpenAI aesthetic.",
    role: "Designer & Solo Developer",
    category: ["Software", "Education", "Business"],
    technologies: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    featured: false,
    status: "Active",
    problem:
      "Traditional static CVs and generic portfolio templates fail to convey modern multi-faceted capabilities in AI, infrastructure, client consulting, and teaching.",
    solution:
      "Built a unified command center with single-source-of-truth data architecture, instant Cmd+K search, filterable work catalog, and dedicated client & student onboarding portals.",
    results: [
      "100 Lighthouse performance score with zero layout shifts",
      "Single central data layer driving both on-screen interactive UI and printable PDF CV",
      "Seamless dark/light mode with custom typography and smooth animations",
    ],
    githubUrl: "[PLACEHOLDER — ADD REPO URL]",
    liveUrl: "[PLACEHOLDER — ADD LIVE URL]",
    highlights: [
      "Centralized content architecture in TypeScript modules",
      "Print-optimized CV layout with clean page breaks",
      "Direct interactive client and student inquiry workflows",
    ],
    year: "2025",
  },
  {
    id: "student-mentorship-hub",
    slug: "student-mentorship-hub",
    title: "AI Vibe Coding & Builder Launchpad",
    tagline: "Practical Project-Based Curriculum for Aspiring Builders",
    description:
      "A structured hands-on coaching framework helping complete beginners and non-traditional learners build and deploy functional software applications using modern AI coding agents.",
    role: "Mentor & Curriculum Creator",
    category: ["Education", "Software", "AI"],
    technologies: ["AI Coding Agents", "Cursor / VS Code", "Git / GitHub", "Next.js", "Vercel / Supabase"],
    featured: false,
    status: "Active",
    problem:
      "Traditional computer science tutoring spends months on dry syntax before students ever build anything real, causing high drop-off and frustration.",
    solution:
      "Created a modern 'builder-first' curriculum focused on product ideation, AI agent prompting, mental models for debugging, and rapid deployment.",
    results: [
      "Empowered students to deploy real full-stack web applications in weeks",
      "Transformed non-technical learners into confident AI-assisted builders",
      "100% project-based portfolio outcomes for mentees",
    ],
    githubUrl: "[PLACEHOLDER — CURRICULUM REPO]",
    highlights: [
      "Real-world problem solving over theoretical syntax drills",
      "Modern Git, GitHub, and cloud deployment workflows taught practically",
      "1-on-1 personalized debugging and architecture reviews",
    ],
    year: "2024 - Present",
  },
  {
    id: "ecommerce-automation-suite",
    slug: "ecommerce-automation-suite",
    title: "Digital Commerce & Inventory Automation",
    tagline: "Automated Order Processing & Sync for Multi-Channel Retail",
    description:
      "Custom integration scripts and dashboards syncing inventory data across multiple retail channels with automated notification hooks and receipt parsing.",
    role: "Full-Stack & Automation Builder",
    category: ["Automation", "Software", "Business"],
    technologies: ["Node.js", "TypeScript", "REST APIs", "Google Sheets API", "PostgreSQL", "Telegram Bot API"],
    featured: false,
    status: "Completed",
    problem:
      "Manual order verification and inventory tallying across channels resulted in stock discrepancies, missed orders, and hours of tedious data entry.",
    solution:
      "Built automated webhooks and serverless functions that reconcile incoming orders, update inventory databases in real time, and alert managers via Telegram.",
    results: [
      "Eliminated manual inventory reconciliation errors",
      "Saved ~15+ operational hours per week for business owners",
      "Instant automated notification alerts on order state changes",
    ],
    githubUrl: "[PLACEHOLDER — PRIVATE REPO]",
    highlights: [
      "Resilient retry mechanism for external API rate limits",
      "Real-time notifications sent directly to staff mobile devices",
      "Clean administrative dashboard for stock audits",
    ],
    year: "2024",
  },
];
