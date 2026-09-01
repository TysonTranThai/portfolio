import { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    id: "chief-of-agents-case-study",
    slug: "chief-of-agents",
    title: "Chief of Agents: Orchestrating Autonomous Multi-Agent Software Development",
    titleVi: "Chief of Agents: Hệ Thống Điều Phối Đa Tác Tử AI Lập Trình Tự Hành",
    clientOrProject: "Flagship Technical System by Tyson",
    clientOrProjectVi: "Hệ Thống Công Nghệ Tiêu Biểu Bởi Tyson",
    summary:
      "A deep exploration of an AI-native development environment where a central 'Chief' coordinator breaks down high-level user goals into structured implementation specifications, decomposes tasks, and manages specialized AI coding agents working in parallel.",
    summaryVi:
      "Nghiên cứu chuyên sâu về môi trường phát triển gốc AI, nơi điều phối viên trung tâm 'Chief' phân rã mục tiêu cấp cao của người dùng thành các đặc tả kỹ thuật chi tiết, chia nhỏ tác vụ và quản lý các tác tử lập trình chuyên trách chạy song song.",
    problem:
      "While 'vibe coding' makes writing code accessible, creating robust, production-grade software remains difficult. Without a clear workflow, creators struggle with what to build first, how to plan architecture, how to structure modular directories, how to test edge cases, and how to debug agent errors. Autonomous agents frequently get caught in circular hallucinations or write disjointed code.",
    problemVi:
      "Dù 'vibe coding' giúp việc viết mã trở nên dễ dàng hơn, việc xây dựng một hệ thống phần mềm hoàn chỉnh chạy thực tế vẫn là một thách thức lớn. Khi thiếu quy trình chuẩn, người dùng thường lúng túng: nên bắt đầu từ đâu, cấu trúc thư mục ra sao, kiểm thử các trường hợp ngoại lệ thế nào và sửa lỗi AI ra sao. Các tác tử tự hành thường xuyên rơi vào vòng lặp ảo giác hoặc tạo ra mã nguồn rời rạc.",
    context:
      "Tyson developed this system based on his own hands-on experience building full-stack software with AI coding tools. He wanted to codify his personal planning, decomposition, and verification workflow into a software application that enables Vietnamese and international creators to build production-grade applications with confidence.",
    contextVi:
      "Mình phát triển hệ thống này dựa trên chính kinh nghiệm thực chiến khi xây dựng các ứng dụng full-stack với công cụ AI. Mình muốn đóng gói quy trình lập kế hoạch, phân rã tác vụ và tự động xác thực của mình thành một phần mềm hoàn chỉnh giúp các nhà sáng tạo tại Việt Nam và quốc tế tự tin làm ra sản phẩm đạt chuẩn.",
    goal:
      "Create an AI project manager + development team + execution environment that transforms ambiguous product goals into validated, working software.",
    goalVi:
      "Xây dựng một hệ thống quản lý dự án AI + đội ngũ phát triển + môi trường thực thi giúp chuyển hóa các ý tưởng sản phẩm ban đầu thành phần mềm hoàn thiện được xác thực nghiêm ngặt.",
    architecture: {
      overview:
        "The system operates as a hierarchical multi-agent state machine. The Chief Planner breaks goals into atomic task graphs with explicit input/output contracts. Worker agents execute tasks in isolated workspaces, while Reviewer and Verifier agents enforce code quality before merging.",
      overviewVi:
        "Hệ thống vận hành như một máy trạng thái phân tầng đa tác tử. Chief Planner phân rã mục tiêu thành sơ đồ tác vụ nguyên tử với hợp đồng đầu vào/đầu ra rõ ràng. Các Worker Agent thực thi nhiệm vụ trong không gian làm việc cô lập, trong khi Reviewer và Verifier Agent kiểm duyệt chất lượng code trước khi lưu.",
      components: [
        "Chief Orchestrator: High-level reasoning, roadmap planning, and dependency resolution",
        "Task Decomposer: Breaks features into independent, verifiable sub-tasks with clear contracts",
        "Specialized Worker Agents: Context-isolated agents (Frontend, Backend, Database, Config)",
        "Review & Verification Engine: Automated linting, type checks, and diff validation before commit",
        "Model Routing Layer: Matches specialized tasks to optimal LLMs for speed and accuracy",
      ],
      componentsVi: [
        "Chief Orchestrator: Suy luận cấp cao, lập lộ trình và xử lý phụ thuộc tác vụ",
        "Task Decomposer: Phân rã tính năng thành các tác vụ con độc lập, có thể kiểm chứng",
        "Specialized Worker Agents: Tác tử chuyên trách theo ngữ cảnh (Giao diện, Backend, Cơ sở dữ liệu, Cấu hình)",
        "Review & Verification Engine: Tự động kiểm tra cú pháp, kiểu dữ liệu và chất lượng diff trước khi hợp nhất",
        "Model Routing Layer: Điều phối tác vụ đến mô hình AI tối ưu nhất về tốc độ và độ chính xác",
      ],
      diagramSummary:
        "USER GOAL → PLANNING → TASK DECOMPOSITION → SPECIALIZED AGENTS → PARALLEL WORK → REVIEW → REVISION → FINAL RESULT",
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "LLM Tool Calling",
      "Agent State Management",
      "Graph-based Task Scheduling",
      "Tailwind CSS",
      "Node.js",
    ],
    implementationSteps: [
      "Step 1: Goal Formalization — User provides high-level intent; Chief asks clarifying questions to eliminate ambiguities.",
      "Step 2: Architecture Planning — System generates structured markdown specs (interfaces, schemas, component trees).",
      "Step 3: Graph Decomposition — Breaks implementation into ordered waves of independent tasks with dependency tracking.",
      "Step 4: Parallel Agent Dispatch — Specialized subagents execute code edits concurrently within defined workspace boundaries.",
      "Step 5: Rigorous Verification — Code is inspected for type safety, lint compliance, and contract alignment.",
      "Step 6: Revision & Handoff — Self-healing loops address any compiler or test errors before final delivery.",
    ],
    implementationStepsVi: [
      "Bước 1: Chuẩn Hóa Mục Tiêu — Người dùng cung cấp ý tưởng; Chief đặt câu hỏi làm rõ để loại bỏ mọi sự mơ hồ.",
      "Bước 2: Lập Kế Hoạch Kiến Trúc — Hệ thống tự tạo đặc tả kỹ thuật dạng markdown (giao diện, schema dữ liệu, cây component).",
      "Bước 3: Phân Rã Sơ Đồ Tác Vụ — Chia việc thành các đợt tác vụ độc lập theo thứ tự ưu tiên và kiểm soát phụ thuộc.",
      "Bước 4: Điều Phối Tác Tử Song Song — Các sub-agent chuyên biệt thực thi mã nguồn đồng thời trong không gian riêng.",
      "Bước 5: Xác Thực Nghiêm Ngặt — Kiểm tra kiểu dữ liệu, chuẩn cú pháp lint và độ khớp với hợp đồng ban đầu.",
      "Bước 6: Tự Sửa Lỗi & Bàn Giao — Vòng lặp tự phục hồi xử lý các cảnh báo biên dịch trước khi xuất bản bản phát hành.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Agent Context Drift & Hallucination during Large Edits",
        challengeVi: "Hiện tượng AI trôi ngữ cảnh và sinh code ảo giác khi sửa đổi nhiều file lớn",
        solution:
          "Enforced strict file-level boundaries and short, single-responsibility prompts for worker agents instead of passing the entire codebase in one prompt.",
        solutionVi:
          "Thiết lập ranh giới cô lập ở cấp độ từng file và chỉ giao các câu lệnh ngắn, đơn trách nhiệm cho Worker thay vì nhồi toàn bộ mã nguồn vào một prompt.",
      },
      {
        challenge: "Dependency Deadlocks in Parallel Execution",
        challengeVi: "Xung đột và bế tắc phụ thuộc khi nhiều tác tử chạy đồng thời",
        solution:
          "Implemented a wave-based dependency graph where tasks requiring foundational schemas or packages run in Wave 1 before UI components in Wave 2.",
        solutionVi:
          "Áp dụng sơ đồ phụ thuộc theo từng đợt sóng (Wave), trong đó các tác vụ nền tảng về schema dữ liệu được hoàn tất ở Đợt 1 trước khi chuyển sang xây dựng giao diện ở Đợt 2.",
      },
    ],
    results: [
      "Eliminates circular debugging loops common in unguided AI coding sessions",
      "Produces modular, production-ready codebases with clean TypeScript interfaces",
      "Serves as the foundation for Tyson's software development and teaching methodology",
    ],
    resultsVi: [
      "Loại bỏ hoàn toàn các vòng lặp gỡ lỗi vô tận thường gặp khi dùng AI không có quy trình",
      "Tạo ra cấu trúc mã nguồn dạng module, sạch sẽ với các kiểu dữ liệu TypeScript chặt chẽ",
      "Trở thành nền tảng cốt lõi cho phương pháp lập trình và giảng dạy thực chiến của mình",
    ],
    learnings: [
      "AI makes coding faster, but software architecture, planning, and verification are more important than ever.",
      "A great developer workflow is about structuring constraints so AI agents succeed predictably.",
    ],
    learningsVi: [
      "AI giúp viết mã nhanh hơn, nhưng vai trò của kiến trúc phần mềm, lập kế hoạch và xác thực càng trở nên sống còn hơn bao giờ hết.",
      "Một quy trình phát triển xuất sắc là việc thiết lập các khuôn khổ ràng buộc rõ ràng để AI hoàn thành công việc một cách chuẩn xác và nhất quán.",
    ],
  },
  {
    id: "not-limited-case-study",
    slug: "not-limited",
    title: "Not Limited: Removing Financial & Technical Barriers to Building Software",
    titleVi: "Not Limited: Xóa Bỏ Rào Cản Tài Chính & Kỹ Thuật Khi Xây Dựng Phần Mềm",
    clientOrProject: "Mission Initiative by Tyson",
    clientOrProjectVi: "Dự Án Sứ Mệnh Bởi Tyson",
    summary:
      "A platform and mission grounded in the core belief that people shouldn't be prevented from building their ideas simply because they don't have enough money or don't know traditional programming syntax.",
    summaryVi:
      "Một nền tảng và sứ mệnh bắt nguồn từ niềm tin rằng không ai bị tước đi cơ hội hiện thực hóa ý tưởng chỉ vì thiếu kinh phí hay chưa từng học lập trình truyền thống.",
    problem:
      "Young creators and non-technical founders in Vietnam and worldwide have powerful ideas, but face extreme gatekeeping: expensive software subscriptions, steep syntax learning curves, and inaccessible developer tooling that costs hundreds of dollars a month.",
    problemVi:
      "Các bạn trẻ và những người sáng lập không chuyên về kỹ thuật tại Việt Nam cũng như trên thế giới có rất nhiều ý tưởng tuyệt vời, nhưng phải đối mặt với rào cản quá lớn: chi phí phần mềm đắt đỏ, kiến thức cú pháp phức tạp và các công cụ phát triển tốn hàng trăm USD mỗi tháng.",
    context:
      "Tyson started Not Limited as a free initiative to share tools, workflows, and guidance with anyone wanting to build. He is committed to keeping the platform free for as long as possible, or as affordable and accessible as humanly sustainable.",
    contextVi:
      "Mình khởi xướng Not Limited như một dự án vì cộng đồng để chia sẻ công cụ, quy trình và kiến thức với bất kỳ ai có khao khát xây dựng sản phẩm. Mình cam kết duy trì nền tảng miễn phí lâu nhất có thể, hoặc giữ mức chi phí dễ tiếp cận nhất.",
    goal:
      "Democratize software building by providing free/accessible workflows, community knowledge, and AI tooling to help anyone ship real products.",
    goalVi:
      "Phổ cập hóa việc làm phần mềm bằng cách cung cấp quy trình tinh gọn, tri thức cộng đồng và công cụ AI hỗ trợ mọi người tự tay tạo ra sản phẩm thật.",
    architecture: {
      overview:
        "A lightweight, modular platform providing curated AI workflows and collaborative team environments (Not Limited Team).",
      overviewVi:
        "Một nền tảng gọn nhẹ dạng module cung cấp quy trình AI tinh gọn và môi trường cộng tác nhóm (Not Limited Team).",
      components: [
        "Knowledge Hub: Practical, step-by-step guides for building real apps with AI",
        "Not Limited Team: Collaborative workspace concepts for young builders",
      ],
      componentsVi: [
        "Trung Tâm Tri Thức: Hướng dẫn thực hành từng bước để tự xây dựng ứng dụng với AI",
        "Not Limited Team: Môi trường làm việc nhóm tích hợp AI cho các bạn trẻ",
      ],
      diagramSummary: "CREATIVE IDEA → NOT LIMITED GUIDANCE → ACCESSIBLE AI TOOLS → VERIFIED WORKING SOFTWARE",
    },
    technologies: [
      "React",
      "Next.js",
      "Open Source AI",
      "API Gateways",
      "Community Platforms",
    ],
    implementationSteps: [
      "Step 1: Community Feedback — Interviewed non-programmers to pinpoint exact technical friction points.",
      "Step 2: Workflow Simplification — Condensed complex terminal commands into accessible, reproducible steps.",
      "Step 3: Tool Distribution — Released open guides and routing tools to minimize cost barriers.",
    ],
    implementationStepsVi: [
      "Bước 1: Lắng Nghe Cộng Đồng — Khảo sát những người không chuyên về IT để xác định chính xác những khó khăn thường gặp.",
      "Bước 2: Tinh Gọn Quy Trình — Chuyển đổi các câu lệnh terminal phức tạp thành các bước thao tác đơn giản, dễ áp dụng.",
      "Bước 3: Chia Sẻ Công Cụ — Xuất bản tài liệu hướng dẫn và bộ định tuyến nhằm giảm tối đa rào cản chi phí.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Financial Sustainability of Free Community Tools",
        challengeVi: "Bài toán duy trì tài chính bền vững cho các công cụ cộng đồng miễn phí",
        solution:
          "Leveraged open-source models, lightweight infrastructure, and efficient caching to keep server running costs near zero.",
        solutionVi:
          "Tận dụng các mô hình mã nguồn mở, tối ưu hạ tầng máy chủ gọn nhẹ và bộ nhớ đệm thông minh để đưa chi phí vận hành máy chủ về mức tối thiểu.",
      },
    ],
    results: [
      "Helped numerous aspiring creators build and understand their first software projects",
      "Established an authentic, mission-first builder identity for Tyson",
    ],
    resultsVi: [
      "Giúp nhiều bạn trẻ và người học tự tay hoàn thành và hiểu rõ ứng dụng phần mềm đầu tiên của mình",
      "Định hình phong cách builder chân thực, luôn đặt sứ mệnh vì cộng đồng lên hàng đầu của mình",
    ],
    learnings: [
      "Empathy for the beginner's journey is essential when designing developer tools and education.",
      "True leverage comes from empowering others to build independently.",
    ],
    learningsVi: [
      "Sự thấu hiểu hành trình của người mới bắt đầu là yếu tố quan trọng nhất khi thiết kế công cụ và tài liệu học tập.",
      "Giá trị lớn nhất của công nghệ là trao quyền để người khác có thể tự chủ kiến tạo tương lai của chính họ.",
    ],
  },
];
