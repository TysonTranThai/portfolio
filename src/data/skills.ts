import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "AI & Intelligent Systems",
    categoryVi: "Kỹ Nghệ AI & Hệ Thống Thông Minh",
    description: "Core discipline in LLM integration, autonomous agent swarms, prompt architectures, and vector search.",
    descriptionVi: "Chuyên môn cốt lõi về tích hợp LLM, mạng lưới tác tử tự hành, kiến trúc prompt đặc tả và tra cứu vector.",
    skills: [
      { name: "LLMs & Model APIs", level: "Experienced", notes: "Claude, OpenAI, DeepSeek, Qwen, Llama 3", notesVi: "Claude, OpenAI, DeepSeek, Qwen, Llama 3" },
      { name: "Autonomous AI Agents", level: "Experienced", notes: "Multi-agent coordination, state machines, function calling", notesVi: "Điều phối đa tác tử, máy trạng thái, gọi hàm công cụ ngoài" },
      { name: "Prompt & Context Engineering", level: "Experienced", notes: "Structured markdown specs, zero-shot/few-shot, tool guardrails", notesVi: "Đặc tả markdown có cấu trúc, quản lý ngữ cảnh, rào chắn bảo vệ" },
      { name: "AI Automation Pipelines", level: "Experienced", notes: "Event-driven workflows, background document extraction", notesVi: "Quy trình kích hoạt theo sự kiện, trích xuất tài liệu ngầm" },
      { name: "RAG & Vector Retrieval", level: "Working Knowledge", notes: "Embeddings, vector databases (pgvector, Pinecone), search chunking", notesVi: "Vector embeddings, cơ sở dữ liệu vector (pgvector, Pinecone)" },
      { name: "AI Workflow Optimization", level: "Working Knowledge", notes: "Latency reduction, token streaming, cost tiering", notesVi: "Giảm độ trễ phản hồi, truyền dữ liệu luồng, phân tầng chi phí token" },
    ],
  },
  {
    category: "Software Engineering & Full-Stack",
    categoryVi: "Kỹ Nghệ Phần Mềm & Full-Stack",
    description: "Modern web applications, responsive interfaces, and type-safe backend services.",
    descriptionVi: "Ứng dụng web hiện đại, giao diện tương thích đa thiết bị và dịch vụ backend an toàn kiểu dữ liệu.",
    skills: [
      { name: "TypeScript", level: "Experienced", notes: "Strict type safety, shared interface contracts, generics", notesVi: "Kiểu dữ liệu nghiêm ngặt, chia sẻ hợp đồng interface, generics" },
      { name: "Next.js (App Router)", level: "Experienced", notes: "Server components, API routes, streaming SSR, optimization", notesVi: "Server components, API routes, SSR truyền luồng, tối ưu SEO" },
      { name: "React", level: "Experienced", notes: "Hooks, component composition, state management, modern UI", notesVi: "React Hooks, quản lý state, kiến trúc component hiện đại" },
      { name: "Tailwind CSS", level: "Experienced", notes: "Responsive design, design systems, dark mode, animations", notesVi: "Thiết kế tương thích đa màn hình, hệ thống giao diện, dark mode" },
      { name: "Node.js", level: "Working Knowledge", notes: "Backend services, CLI utilities, API middleware", notesVi: "Dịch vụ backend, công cụ dòng lệnh CLI, middleware API" },
      { name: "Python", level: "Working Knowledge", notes: "Scripting, AI tooling, data manipulation, automation", notesVi: "Viết kịch bản tự động, công cụ AI, xử lý dữ liệu" },
      { name: "HTML5 / CSS3", level: "Experienced", notes: "Semantic layouts, responsive flexbox/grid, accessibility", notesVi: "Cấu trúc ngữ nghĩa chuẩn, Flexbox/Grid tương thích, khả năng truy cập" },
      { name: "SQL", level: "Working Knowledge", notes: "Relational queries, schema migrations, indexing basics", notesVi: "Truy vấn quan hệ, di chuyển schema, đánh chỉ mục cơ bản" },
    ],
  },
  {
    category: "AI Infrastructure & Hosting",
    categoryVi: "Hạ Tầng Máy Chủ & Vận Hành AI",
    description: "Configuring, securing, and operating bare-metal cloud servers, GPU instances, and inference gateways.",
    descriptionVi: "Cấu hình, gia cố bảo mật và vận hành máy chủ đám mây, GPU chuyên dụng và cổng định tuyến suy luận.",
    skills: [
      { name: "Linux (Ubuntu / Debian)", level: "Working Knowledge", notes: "Systemd services, bash scripting, SSH keys, file permissions", notesVi: "Dịch vụ Systemd, viết bash script, khóa SSH, phân quyền tệp tin" },
      { name: "Docker & Containerization", level: "Working Knowledge", notes: "Dockerfiles, compose stacks, container isolation", notesVi: "Dockerfile, Docker Compose, môi trường container cô lập" },
      { name: "Self-Hosted AI & Model Serving", level: "Working Knowledge", notes: "vLLM, Ollama, GPU acceleration, OpenAI-compatible endpoints", notesVi: "vLLM, Ollama, tăng tốc phần cứng GPU, cổng API chuẩn OpenAI" },
      { name: "VPS & Cloud Server Management", level: "Working Knowledge", notes: "Server provisioning, firewalls (UFW), reverse proxy routing", notesVi: "Khởi tạo máy chủ, thiết lập tường lửa UFW, điều phối proxy" },
      { name: "Nginx & Reverse Proxies", level: "Working Knowledge", notes: "SSL configuration, load balancing, websocket streaming", notesVi: "Cấu hình chứng chỉ SSL, cân bằng tải, websocket streaming" },
      { name: "API Gateways & Routing", level: "Working Knowledge", notes: "Intelligent fallback meshes, rate limiting, request proxying", notesVi: "Mạng lưới dự phòng thông minh, giới hạn tần suất, chuyển tiếp proxy" },
    ],
  },
  {
    category: "Data & Backend Integrations",
    categoryVi: "Cơ Sở Dữ Liệu & Tích Hợp Backend",
    description: "Database architectures, authentication protocols, and third-party API connectivity.",
    descriptionVi: "Kiến trúc cơ sở dữ liệu, giao thức xác thực bảo mật và kết nối API bên thứ ba.",
    skills: [
      { name: "REST APIs & Webhooks", level: "Experienced", notes: "Contract design, error schemas, event-driven webhooks", notesVi: "Thiết kế hợp đồng API, schema xử lý lỗi, webhook theo sự kiện" },
      { name: "Supabase", level: "Working Knowledge", notes: "PostgreSQL, Row Level Security, Auth, Storage", notesVi: "PostgreSQL, Bảo mật cấp hàng (RLS), Xác thực, Lưu trữ tệp" },
      { name: "PostgreSQL", level: "Working Knowledge", notes: "Relational modeling, constraints, transactions", notesVi: "Mô hình quan hệ, ràng buộc toàn vẹn, giao dịch an toàn" },
      { name: "User Authentication", level: "Working Knowledge", notes: "OAuth 2.0, JWTs, session tokens, secure cookies", notesVi: "OAuth 2.0, JWT, session token, cookie bảo mật" },
    ],
  },
  {
    category: "Developer Tools & Agentic Workflows",
    categoryVi: "Công Cụ Phát Triển & Quy Trình Lập Trình Với AI",
    description: "The modern development toolkit enabling high-velocity spec-driven vibe coding.",
    descriptionVi: "Bộ công cụ hiện đại hỗ trợ phát triển phần mềm tốc độ cao theo đặc tả Vibe Coding.",
    skills: [
      { name: "AI Coding Agents", level: "Experienced", notes: "Claude Code, Cursor, Antigravity, spec-driven piloting", notesVi: "Claude Code, Cursor, Antigravity, chỉ đạo AI theo đặc tả" },
      { name: "Git & GitHub", level: "Experienced", notes: "Atomic commits, branching strategies, PR workflows, CI/CD", notesVi: "Commit nguyên tử, chiến lược phân nhánh, pull request, CI/CD" },
      { name: "CLI & Terminal Workflows", level: "Working Knowledge", notes: "Zsh, shell utilities, task automation, environment management", notesVi: "Zsh, tiện ích dòng lệnh, tự động hóa tác vụ, quản lý biến môi trường" },
      { name: "Spec-Driven Vibe Coding", level: "Experienced", notes: "Architectural markdown planning, guardrails, automated lint/type loops", notesVi: "Lập kế hoạch kiến trúc markdown, rào chắn kiểm thử, vòng lặp tự sửa lỗi" },
    ],
  },
];
