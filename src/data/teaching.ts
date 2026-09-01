export interface TeachingAudience {
  title: string;
  titleVi: string;
  badge: string;
  badgeVi: string;
  description: string;
  descriptionVi: string;
  outcome: string;
  outcomeVi: string;
}

export const teachingAudiences: TeachingAudience[] = [
  {
    title: "Complete Beginners",
    titleVi: "Người Mới Hoàn Toàn",
    badge: "NO CODE BACKGROUND NEEDED",
    badgeVi: "KHÔNG CẦN BIẾT CODE TRƯỚC",
    description:
      "People with zero prior programming experience who want to learn how software works and build their very first functional web application.",
    descriptionVi:
      "Dành cho người chưa từng có kinh nghiệm lập trình, muốn hiểu cách phần mềm vận hành và tự tay tạo ra ứng dụng web đầu tiên của mình.",
    outcome: "Understand core software fundamentals and ship your first live project without fear.",
    outcomeVi: "Nắm vững bản chất phần mềm và tự tin xuất bản dự án thực tế đầu tiên mà không còn sợ hãi.",
  },
  {
    title: "AI Beginners",
    titleVi: "Người Mới Làm Quen AI",
    badge: "AI TOOL MASTERY",
    badgeVi: "LÀM CHỦ CÔNG CỤ AI",
    description:
      "Individuals who use ChatGPT casually but want to understand real AI APIs, model differences, prompt engineering, and practical workflows.",
    descriptionVi:
      "Những ai đang dùng ChatGPT hàng ngày nhưng muốn hiểu sâu về gọi API, sự khác biệt giữa các mô hình, kỹ nghệ prompt và quy trình ứng dụng thực tế.",
    outcome: "Master prompting, context management, and integrating AI into daily work.",
    outcomeVi: "Làm chủ nghệ thuật viết prompt, kiểm soát ngữ cảnh và tích hợp AI vào công việc hàng ngày.",
  },
  {
    title: "Vibe Coders",
    titleVi: "Lập Trình Viên Vibe Coding",
    badge: "HIGH-VELOCITY AGENTS",
    badgeVi: "TĂNG TỐC CÙNG AI AGENT",
    description:
      "People wanting to build software using modern AI coding agents (Claude Code, Cursor, Antigravity) without getting lost in debugging loops.",
    descriptionVi:
      "Những ai muốn xây dựng phần mềm với tác tử lập trình AI (Claude Code, Cursor, Antigravity) mà không bị rơi vào các vòng lặp lỗi luẩn quẩn.",
    outcome: "Learn spec-driven vibe coding: write clear specs, direct agents, and verify code like an architect.",
    outcomeVi: "Thành thạo Vibe Coding theo đặc tả: viết spec rõ ràng, chỉ huy Agent và kiểm duyệt code như một kiến trúc sư.",
  },
  {
    title: "Students & Creators",
    titleVi: "Học Sinh, Sinh Viên & Sáng Tạo",
    badge: "IDEA TO REALITY",
    badgeVi: "BIẾN Ý TƯỞNG THÀNH HIỆN THỰC",
    description:
      "High school or university students with product ideas who want to build real portfolio pieces instead of memorizing boring textbook syntax.",
    descriptionVi:
      "Các bạn học sinh, sinh viên ấp ủ ý tưởng sản phẩm và muốn tạo ra những dự án ấn tượng cho hồ sơ cá nhân thay vì học vẹt lý thuyết giáo trình.",
    outcome: "Transform creative ideas into live, public GitHub repositories and deployed web products.",
    outcomeVi: "Biến ý tưởng sáng tạo thành kho mã nguồn GitHub công khai và sản phẩm web chạy thật trên internet.",
  },
  {
    title: "Beginner Builders",
    titleVi: "Người Khởi Nghiệp Tự Thân",
    badge: "LEARN BY BUILDING",
    badgeVi: "HỌC QUA THỰC HÀNH",
    description:
      "Aspiring entrepreneurs and solo founders who want to build functional MVPs, customer dashboards, and automation tools independently.",
    descriptionVi:
      "Những người muốn khởi nghiệp, solo founder cần tự tay làm bản MVP hoàn chỉnh, bảng điều khiển khách hàng và công cụ tự động hóa một cách độc lập.",
    outcome: "Gain the self-sufficiency to design, build, debug, and deploy software completely independently.",
    outcomeVi: "Đạt được sự tự chủ hoàn toàn để tự thiết kế, lập trình, sửa lỗi và triển khai phần mềm độc lập.",
  },
];

export const teachingData = {
  headline: "Learn to build real things with modern AI-assisted engineering.",
  headlineVi: "Học cách tự tay xây dựng sản phẩm thật với công nghệ AI hiện đại.",
  corePhilosophy:
    "I don't want to just give people answers. I want to teach them how to figure things out.",
  corePhilosophyVi:
    "Mình không muốn chỉ đưa ra câu trả lời có sẵn. Mình muốn hướng dẫn bạn phương pháp tự mình tìm ra giải pháp cho mọi vấn đề.",
  methodologyLead:
    "This is not traditional tutoring or passive syntax memorization. We work through real projects specifically tailored to your current knowledge, learning speed, and goals. The objective is 100% independence — giving you the confidence and workflow to build anything you imagine.",
  methodologyLeadVi:
    "Đây không phải là hình thức gia sư truyền thống hay học thuộc lòng cú pháp thụ động. Chúng ta sẽ cùng làm các dự án thực tế được thiết kế riêng theo kiến thức hiện tại, tốc độ tiếp thu và mục tiêu của bạn. Đích đến cuối cùng là sự tự chủ 100% — mang lại cho bạn sự tự tin và quy trình chuẩn để tự tay xây dựng bất cứ thứ gì bạn tưởng tượng.",
  learningFlow: [
    { step: "01", name: "Define Goal", nameVi: "Xác Định Mục Tiêu", desc: "Pick a concrete, meaningful project you genuinely care about building.", descVi: "Chọn một dự án cụ thể, có ý nghĩa mà bạn thực sự hào hứng muốn làm." },
    { step: "02", name: "Understand Concepts", nameVi: "Hiểu Bản Chất", desc: "Break down the underlying mechanics (frontend, backend, database, AI).", descVi: "Mổ xẻ các khái niệm nền tảng (giao diện, backend, cơ sở dữ liệu, mô hình AI)." },
    { step: "03", name: "Learn the Workflow", nameVi: "Nắm Quy Trình", desc: "Master spec drafting, prompt structure, and agent orchestration.", descVi: "Làm chủ cách viết đặc tả kỹ thuật, cấu trúc câu lệnh và điều phối Agent." },
    { step: "04", name: "Build Together", nameVi: "Cùng Thực Hành", desc: "Hands-on implementation with real-time pair programming and guidance.", descVi: "Trực tiếp lập trình cùng nhau trong thời gian thực với sự hướng dẫn chi tiết." },
    { step: "05", name: "Debug & Demystify", nameVi: "Gỡ Lỗi & Làm Sáng Tỏ", desc: "Learn how to read error logs, trace bugs, and prompt agents to fix issues.", descVi: "Học cách đọc nhật ký lỗi, truy vết vấn đề và chỉ đạo AI sửa lỗi chuẩn xác." },
    { step: "06", name: "Deploy Publicly", nameVi: "Xuất Bản Sản Phẩm", desc: "Ship your project to production on Vercel or cloud servers with a custom domain.", descVi: "Đưa dự án lên mạng thật qua Vercel hoặc máy chủ đám mây kèm tên miền riêng." },
    { step: "07", name: "Build Independently", nameVi: "Tự Chủ Hoàn Toàn", desc: "Graduate with the repeatable methodology to build future projects on your own.", descVi: "Tốt nghiệp với phương pháp luận chuẩn mực để tự tin làm mọi dự án tiếp theo." },
  ],
  curriculumTopics: [
    {
      title: "Spec-Driven Vibe Coding & Agent Steering",
      titleVi: "Lập Trình Vibe Coding Theo Đặc Tả & Chỉ Huy AI Agent",
      description:
        "Learn how to pilot AI coding agents (Claude Code, Cursor, Antigravity) effectively. Write clear specifications (`.cursorrules`, interface contracts) so AI agents write clean, modular code without hallucinations.",
      descriptionVi:
        "Học cách chỉ đạo các tác tử lập trình AI (Claude Code, Cursor, Antigravity) hiệu quả. Viết tài liệu đặc tả chuẩn (`.cursorrules`, hợp đồng interface) để AI viết mã nguồn sạch sẽ, dạng module và không bị ảo giác.",
      items: [
        "Prompt engineering & context window management",
        "Writing `.cursorrules` and markdown architecture specs",
        "Steering multi-file edits and handling edge cases",
      ],
      itemsVi: [
        "Kỹ nghệ prompt & quản lý dung lượng cửa sổ ngữ cảnh",
        "Viết file `.cursorrules` và tài liệu kiến trúc dạng markdown",
        "Chỉ đạo AI chỉnh sửa nhiều file đồng thời và xử lý trường hợp biên",
      ],
    },
    {
      title: "Modern Web & Full-Stack Fundamentals",
      titleVi: "Nền Tảng Phát Triển Web Hiện Đại & Full-Stack",
      description:
        "Understand the core anatomy of web applications: React component trees, Next.js routing, server vs client state, TypeScript types, and styling with Tailwind CSS.",
      descriptionVi:
        "Hiểu rõ cấu trúc giải phẫu của một ứng dụng web: cây component React, cơ chế định tuyến Next.js, trạng thái phía server/client, kiểu dữ liệu TypeScript và định dạng giao diện với Tailwind CSS.",
      items: [
        "React state, props, and component architecture",
        "Next.js App Router & server rendering basics",
        "TypeScript type safety and clean modularity",
      ],
      itemsVi: [
        "Quản lý state, props và kiến trúc component trong React",
        "Cơ chế Next.js App Router & nền tảng Server Components",
        "Độ an toàn kiểu dữ liệu với TypeScript và phân tách module sạch",
      ],
    },
    {
      title: "APIs, Databases & Backend Integrations",
      titleVi: "Tích Hợp API, Cơ Sở Dữ Liệu & Backend",
      description:
        "Learn how software communicates. Connect frontends to PostgreSQL/Supabase databases, set up secure authentication, manage environment variables, and integrate external APIs.",
      descriptionVi:
        "Hiểu cách các thành phần phần mềm giao tiếp với nhau. Kết nối giao diện người dùng với database PostgreSQL / Supabase, thiết lập xác thực tài khoản an toàn và tích hợp các API bên ngoài.",
      items: [
        "Database schema design & CRUD operations",
        "Secure user authentication (OAuth / Email)",
        "REST API endpoints and webhook handlers",
      ],
      itemsVi: [
        "Thiết kế cấu trúc cơ sở dữ liệu & thao tác CRUD",
        "Bảo mật xác thực người dùng (Đăng nhập Google / Email)",
        "Xây dựng điểm cuối REST API và bộ xử lý webhook",
      ],
    },
    {
      title: "AI API Integration & Autonomous Agents",
      titleVi: "Tích Hợp API AI & Tác Tử Tự Hành",
      description:
        "Incorporate intelligent capabilities into your software. Call OpenAI, Anthropic, and open-weight models, implement vector search (RAG), and create autonomous tool-calling agents.",
      descriptionVi:
        "Đưa năng lực trí tuệ nhân tạo vào phần mềm của bạn. Gọi các mô hình OpenAI, Anthropic và mã nguồn mở, triển khai tra cứu vector (RAG) và tạo tác tử có khả năng gọi công cụ ngoài.",
      items: [
        "LLM API integration & streaming responses",
        "Knowledge retrieval with vector embeddings (RAG)",
        "Function calling & structured JSON outputs",
      ],
      itemsVi: [
        "Tích hợp API LLM & phản hồi dữ liệu dạng luồng (streaming)",
        "Tra cứu tri thức thông minh với vector embedding (RAG)",
        "Cơ chế gọi hàm (function calling) & chuẩn hóa đầu ra JSON",
      ],
    },
    {
      title: "Git, GitHub & Version Control Workflows",
      titleVi: "Quy Trình Quản Lý Mã Nguồn Với Git & GitHub",
      description:
        "Master the essential developer toolkit: Git branching, atomic commits, pull requests, resolving merge conflicts, and publishing a clean open-source GitHub profile.",
      descriptionVi:
        "Làm chủ bộ công cụ sống còn của lập trình viên: phân nhánh Git, commit nguyên tử, tạo pull request, xử lý xung đột code và xây dựng hồ sơ GitHub chuyên nghiệp.",
      items: [
        "Essential terminal CLI commands & Git workflow",
        "Clean repository structure and README documentation",
        "Managing merge conflicts and release branches",
      ],
      itemsVi: [
        "Các câu lệnh dòng lệnh (CLI) thiết yếu & quy trình Git",
        "Cấu trúc thư mục chuẩn và viết tài liệu README rõ ràng",
        "Xử lý xung đột mã nguồn và quản lý các nhánh phát hành",
      ],
    },
    {
      title: "Production Deployment, Domains & Cloud Hosting",
      titleVi: "Triển Khai Chạy Thật, Cấu Hình Tên Miền & Máy Chủ",
      description:
        "Take your project from localhost to the world. Deploy web apps to Vercel, setup custom domains, configure DNS records, and explore basic Linux VPS hosting.",
      descriptionVi:
        "Đưa dự án từ máy tính cá nhân ra thế giới. Triển khai ứng dụng lên Vercel, kết nối tên miền riêng, cấu hình bản ghi DNS và làm quen với máy chủ Linux VPS.",
      items: [
        "Automated CI/CD deployments with Vercel & GitHub",
        "Domain configuration, DNS records, and HTTPS/SSL",
        "Introduction to Linux VPS hosting and Docker basics",
      ],
      itemsVi: [
        "Tự động hóa triển khai CI/CD với Vercel & GitHub",
        "Cấu hình tên miền riêng, bản ghi DNS và chứng chỉ bảo mật HTTPS",
        "Làm quen với quản trị máy chủ Linux VPS và container Docker",
      ],
    },
  ],
};
