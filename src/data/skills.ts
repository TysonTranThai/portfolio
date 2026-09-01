import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "AI & Large Language Models",
    description: "Architectures, agentic systems, model gateways, and generative tooling.",
    skills: [
      { name: "OpenAI & Anthropic APIs", level: "Experienced", notes: "Tool calling, structured outputs, prompt optimization" },
      { name: "AI Coding Agents & Vibe Coding", level: "Experienced", notes: "Cursor, Claude Code, Antigravity, spec-driven development" },
      { name: "Ollama & Local LLM Serving", level: "Experienced", notes: "Local model orchestration, quantizations, private inference" },
      { name: "Multi-Agent System Architecture", level: "Working Knowledge", notes: "Subagent coordination, state persistence, tool execution" },
      { name: "vLLM & High-Throughput Inference", level: "Working Knowledge", notes: "Continuous batching, PagedAttention, GPU serving" },
      { name: "Vector Search & RAG", level: "Working Knowledge", notes: "Embeddings, vector indexing, retrieval grounding" },
      { name: "Qwen & Open-Weight Ecosystem", level: "Working Knowledge", notes: "Fine-tuning exploration, local deployment, benchmarking" },
      { name: "LangChain / LangGraph", level: "Familiar", notes: "Chain composition and memory constructs" },
    ],
  },
  {
    category: "Languages & Core Programming",
    description: "Core languages used across full-stack applications, scripting, and APIs.",
    skills: [
      { name: "TypeScript", level: "Experienced", notes: "Strict type safety, modern async patterns, interfaces" },
      { name: "JavaScript (ES6+)", level: "Experienced", notes: "Event loop, DOM manipulation, modular architecture" },
      { name: "Python", level: "Working Knowledge", notes: "FastAPI, scripting, AI library bindings, data utilities" },
      { name: "SQL", level: "Working Knowledge", notes: "Schema design, queries, relations, indexing (PostgreSQL)" },
      { name: "HTML5 & Modern CSS", level: "Experienced", notes: "Semantic markup, responsive layouts, accessibility" },
      { name: "Bash & Shell Scripting", level: "Working Knowledge", notes: "Linux automation, server provisioning, cron jobs" },
    ],
  },
  {
    category: "Frameworks & Frontend Architecture",
    description: "Modern web application stacks focused on performance and fluid UX.",
    skills: [
      { name: "Next.js (App Router)", level: "Experienced", notes: "Server components, server actions, dynamic routing, SEO" },
      { name: "React 19 & Hooks", level: "Experienced", notes: "Component state, custom hooks, context, memoization" },
      { name: "Tailwind CSS", level: "Experienced", notes: "Custom design systems, responsive design, dark/light theme" },
      { name: "Node.js Runtimes", level: "Experienced", notes: "Express, REST APIs, middleware, event-driven backends" },
      { name: "Framer Motion", level: "Working Knowledge", notes: "Micro-interactions, layout animations, exit transitions" },
      { name: "FastAPI", level: "Working Knowledge", notes: "High-performance Python API microservices" },
    ],
  },
  {
    category: "Infrastructure, Cloud & DevOps",
    description: "Server administration, containerization, deployment, and database services.",
    skills: [
      { name: "Linux Administration (Ubuntu)", level: "Working Knowledge", notes: "Server hardening, UFW, systemd services, SSH keys" },
      { name: "Docker & Docker Compose", level: "Working Knowledge", notes: "Multi-container services, networking, volume persistence" },
      { name: "Nginx Reverse Proxy & SSL", level: "Working Knowledge", notes: "Certbot SSL, rate limiting, header forwarding, routing" },
      { name: "VPS Cloud Deployment", level: "Working Knowledge", notes: "Hetzner, DigitalOcean, dedicated compute instances" },
      { name: "Supabase & PostgreSQL", level: "Working Knowledge", notes: "Auth, row-level security, realtime subscriptions, relational tables" },
      { name: "Vercel & Cloudflare", level: "Experienced", notes: "Edge deployments, DNS management, serverless functions" },
      { name: "WireGuard & Private Networking", level: "Familiar", notes: "Encrypted mesh tunnels for private server access" },
      { name: "Kubernetes & Orchestration", level: "Exploring", notes: "Container orchestration at scale" },
    ],
  },
  {
    category: "Developer Tooling & Workflows",
    description: "Tools, protocols, and practices that maximize velocity and code reliability.",
    skills: [
      { name: "Git & GitHub", level: "Experienced", notes: "Branching workflows, PR reviews, CI/CD actions" },
      { name: "REST APIs & Webhooks", level: "Experienced", notes: "API integration, event-driven webhooks, payload validation" },
      { name: "CLI & Terminal Productivity", level: "Experienced", notes: "Zsh, tmux, package managers (pnpm/bun), curl/jq" },
      { name: "Performance & SEO Optimization", level: "Working Knowledge", notes: "Lighthouse, Core Web Vitals, OpenGraph, JSON-LD" },
      { name: "Automated Testing & Verification", level: "Working Knowledge", notes: "Unit tests, integration checks, end-to-end verification" },
    ],
  },
];
