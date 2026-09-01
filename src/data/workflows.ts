import { WorkflowStep } from "@/types";

export const clientWorkflowSteps: WorkflowStep[] = [
  {
    step: "01",
    number: "Phase 1",
    numberVi: "Giai Đoạn 1",
    title: "Discover & Workflow Mapping",
    titleVi: "Khảo Sát & Lập Sơ Đồ Quy Trình",
    subtitle: "Understand the human, the business, and the true operational bottleneck",
    subtitleVi: "Thấu hiểu con người, bối cảnh kinh doanh và điểm nghẽn vận hành thực tế",
    description:
      "Every engagement begins with deep listening. I map your actual daily workflows, isolate repetitive friction points, and identify where AI or automation creates measurable business leverage.",
    descriptionVi:
      "Mọi dự án đều bắt đầu từ việc lắng nghe sâu sắc. Mình trực tiếp vẽ sơ đồ quy trình làm việc thực tế hàng ngày, bóc tách các điểm nghẽn tốn thời gian và xác định chính xác vị trí AI tạo ra đòn bẩy kinh doanh đo lường được.",
    outputs: ["Operational friction audit", "AI feasibility assessment", "Clear boundary of scope"],
    outputsVi: ["Báo cáo đánh giá điểm nghẽn vận hành", "Phân tích tính khả thi ứng dụng AI", "Ranh giới phạm vi công việc rõ ràng"],
  },
  {
    step: "02",
    number: "Phase 2",
    numberVi: "Giai Đoạn 2",
    title: "Research & Pragmatic Stack Selection",
    titleVi: "Nghiên Cứu & Lựa Chọn Công Nghệ Thực Tế",
    subtitle: "Select the most cost-effective models, APIs, and architecture",
    subtitleVi: "Lựa chọn mô hình AI, API và kiến trúc tối ưu chi phí nhất",
    description:
      "I evaluate available LLMs (proprietary vs. self-hosted open-weight), database requirements, and third-party integrations to design a resilient, low-maintenance architecture without unnecessary bloat.",
    descriptionVi:
      "Mình đánh giá kỹ lưỡng các mô hình AI phù hợp (API thương mại so với tự dựng mã nguồn mở), yêu cầu cơ sở dữ liệu và tích hợp bên thứ ba để thiết kế hệ thống bền bỉ, dễ bảo trì và không bị dư thừa chi phí.",
    outputs: ["Technical architecture specification", "Model & tool cost estimate", "Security & data privacy plan"],
    outputsVi: ["Tài liệu đặc tả kiến trúc kỹ thuật", "Bảng ước tính chi phí mô hình & công cụ", "Kế hoạch bảo mật & an toàn dữ liệu"],
  },
  {
    step: "03",
    number: "Phase 3",
    numberVi: "Giai Đoạn 3",
    title: "Rigorous System Specifications",
    titleVi: "Lập Đặc Tả Hệ Thống Chuẩn Mực",
    subtitle: "Draft explicit interface contracts before touching code",
    subtitleVi: "Xác lập hợp đồng interface và schema dữ liệu trước khi viết code",
    description:
      "Before orchestrating AI agents or writing code, I draft structured markdown specifications and type schemas. This eliminates ambiguities, prevents hallucinations, and establishes exact expectations.",
    descriptionVi:
      "Trước khi điều phối tác tử AI hay viết code, mình lập các tài liệu đặc tả markdown có cấu trúc và schema kiểu dữ liệu. Điều này giúp loại bỏ hoàn toàn sự mơ hồ, ngăn chặn lỗi ảo giác của AI và đảm bảo bàn giao đúng kỳ vọng.",
    outputs: ["TypeScript data schemas", "API endpoint contracts", "Agent prompt guidelines"],
    outputsVi: ["Cấu trúc kiểu dữ liệu TypeScript", "Hợp đồng điểm cuối API", "Bộ chỉ dẫn prompt chi tiết cho Agent"],
  },
  {
    step: "04",
    number: "Phase 4",
    numberVi: "Giai Đoạn 4",
    title: "Agentic Build & High-Velocity Assembly",
    subtitle: "High-speed implementation with human steering and clean modularity",
    subtitleVi: "Phát triển thần tốc cùng AI với sự kiểm soát chặt chẽ của kỹ sư",
    description:
      "I leverage modern AI coding agents to write clean, modular full-stack code at 10x velocity. As the lead architect, I manage state boundaries, test every component, and ensure code quality.",
    descriptionVi:
      "Mình chỉ huy các tác tử AI viết mã nguồn full-stack dạng module, sạch sẽ với tốc độ gấp 10 lần. Đóng vai trò kiến trúc sư trưởng, mình quản lý ranh giới dữ liệu, kiểm thử từng thành phần và đảm bảo chất lượng code cao nhất.",
    outputs: ["Working frontend interfaces", "Production backend & database", "Secure API integrations"],
    outputsVi: ["Giao diện người dùng hoàn chỉnh", "Hệ thống backend & database tối ưu", "Kết nối API bảo mật"],
  },
  {
    step: "05",
    number: "Phase 5",
    numberVi: "Giai Đoạn 5",
    title: "Edge-Case Testing & Hardening",
    titleVi: "Kiểm Thử Trường Hợp Biên & Gia Cố Bảo Mật",
    subtitle: "Verify error handling, guardrails, and real-world failure modes",
    subtitleVi: "Kiểm tra xử lý lỗi, rào chắn an toàn và các tình huống sự cố thực tế",
    description:
      "I test error states, rate limit fallback mechanisms, prompt injection guardrails, and cross-device responsiveness to ensure the system never breaks under unexpected user input.",
    descriptionVi:
      "Mình kiểm tra các trạng thái lỗi, cơ chế chuyển đổi dự phòng khi quá tải hạn mức, rào chắn chống prompt injection và khả năng hiển thị đa thiết bị để đảm bảo hệ thống luôn hoạt động ổn định trước mọi tình huống bất ngờ.",
    outputs: ["Resilient error boundaries", "Strict anti-hallucination checks", "Zero TypeScript/lint errors"],
    outputsVi: ["Ranh giới bắt lỗi tự phục hồi", "Cơ chế chống thông tin sai lệch", "Không còn lỗi cú pháp hay kiểu dữ liệu"],
  },
  {
    step: "06",
    number: "Phase 6",
    numberVi: "Giai Đoạn 6",
    title: "Deployment & Production Launch",
    titleVi: "Triển Khai & Ra Mắt Bản Hoạt Động Thật",
    subtitle: "Ship to production with automated CI/CD, SSL, and monitoring",
    subtitleVi: "Đưa lên môi trường chạy thật với CI/CD tự động, SSL và giám sát 24/7",
    description:
      "I deploy the solution to production environments (Vercel, private Linux VPS, Supabase, Cloudflare) with automated continuous integration, custom domains, HTTPS certificates, and health monitoring.",
    descriptionVi:
      "Mình đưa giải pháp lên môi trường sản xuất (Vercel, máy chủ Linux VPS riêng, Supabase, Cloudflare) với quy trình tích hợp liên tục tự động, gắn tên miền riêng, chứng chỉ bảo mật HTTPS và giám sát hệ thống liên tục.",
    outputs: ["Live production deployment", "Automated CI/CD pipelines", "Operational monitoring & alert channels"],
    outputsVi: ["Hệ thống chạy thật trên internet", "Quy trình triển khai CI/CD tự động", "Kênh thông báo & cảnh báo vận hành"],
  },
  {
    step: "07",
    number: "Phase 7",
    numberVi: "Giai Đoạn 7",
    title: "Feedback & Continuous Iteration",
    titleVi: "Lắng Nghe Phản Hồi & Tối Ưu Liên Tục",
    subtitle: "Refine based on actual usage metrics and business performance",
    subtitleVi: "Tinh chỉnh dựa trên chỉ số sử dụng thực tế và hiệu quả kinh doanh",
    description:
      "Software isn't finished on launch day. I observe real-world usage data, collect team feedback, optimize prompt performance, and iterate to maximize commercial return.",
    descriptionVi:
      "Phần mềm không kết thúc vào ngày ra mắt. Mình theo dõi dữ liệu sử dụng thực tế, lắng nghe phản hồi của người dùng, tối ưu tốc độ/chi phí prompt và liên tục nâng cấp để mang lại giá trị thương mại lớn nhất.",
    outputs: ["User feedback review", "Prompt latency & cost tuning", "Continuous support & feature expansions"],
    outputsVi: ["Tổng hợp phản hồi người dùng", "Tối ưu hóa độ trễ & chi phí prompt", "Hỗ trợ đồng hành & mở rộng tính năng"],
  },
];

export const studentWorkflowSteps: WorkflowStep[] = [
  {
    step: "01",
    number: "Stage 1",
    numberVi: "Bước 1",
    title: "Understand the Goal",
    titleVi: "Xác Định Rõ Mục Tiêu",
    subtitle: "Choose a meaningful project you genuinely care about building",
    subtitleVi: "Chọn một dự án cụ thể, có ý nghĩa mà bạn thực sự hào hứng muốn làm",
    description:
      "Learning happens through building things that excite you. We start by defining a concrete project idea — whether a custom AI agent, a personal SaaS tool, or an interactive web application.",
    descriptionVi:
      "Chúng ta chỉ học nhanh nhất khi bắt tay vào làm những thứ mình thực sự đam mê. Chúng ta bắt đầu bằng việc chọn một ý tưởng rõ ràng — có thể là một tác tử AI, một công cụ SaaS hay một ứng dụng web.",
    outputs: ["Crystal-clear project scope", "Defined target user & problem", "Architecture blueprint sketch"],
    outputsVi: ["Mục tiêu dự án rõ ràng", "Chân dung người dùng & bài toán cần giải", "Phác thảo sơ đồ kiến trúc ban đầu"],
  },
  {
    step: "02",
    number: "Stage 2",
    numberVi: "Bước 2",
    title: "Learn the Core Mechanics",
    titleVi: "Hiểu Bản Chất & Cơ Chế Vận Hành",
    subtitle: "Demystify how software, APIs, and AI models actually work",
    subtitleVi: "Làm sáng tỏ cách phần mềm, API và mô hình AI thực sự hoạt động",
    description:
      "We walk through the underlying concepts: client vs. server, databases, REST APIs, and how AI coding agents process instructions. No boring theory — only practical fundamentals.",
    descriptionVi:
      "Chúng ta cùng đi qua các khái niệm bản chất: máy khách và máy chủ, cơ sở dữ liệu, REST API và cách AI hiểu chỉ dẫn. Không có lý thuyết suông — chỉ tập trung vào nền tảng thực chiến.",
    outputs: ["Mental model of modern web stacks", "Understanding of API calls & data flow", "Prompt engineering principles"],
    outputsVi: ["Mô hình tư duy về kiến trúc web hiện đại", "Hiểu rõ luồng gọi API và luồng dữ liệu", "Nguyên tắc kỹ nghệ câu lệnh prompt"],
  },
  {
    step: "03",
    number: "Stage 3",
    numberVi: "Bước 3",
    title: "Spec-Driven Vibe Coding",
    titleVi: "Lập Trình Vibe Coding Theo Đặc Tả",
    subtitle: "Master the workflow of piloting AI coding agents effectively",
    subtitleVi: "Làm chủ quy trình chỉ huy tác tử lập trình AI hiệu quả",
    description:
      "I teach you how to write clear specifications (`.cursorrules`, interface files) and direct AI coding tools (Claude Code, Cursor, Antigravity) so you build cleanly without getting stuck in errors.",
    descriptionVi:
      "Mình hướng dẫn bạn cách viết tài liệu đặc tả chuẩn (`.cursorrules`, file interface) và cách điều khiển công cụ lập trình AI (Claude Code, Cursor, Antigravity) để code sạch sẽ mà không bị kẹt lỗi.",
    outputs: ["Structured `.cursorrules` file", "Architecture specification document", "High-velocity development setup"],
    outputsVi: ["File cấu hình `.cursorrules` chuẩn", "Tài liệu đặc tả kiến trúc phần mềm", "Môi trường phát triển tốc độ cao"],
  },
  {
    step: "04",
    number: "Stage 4",
    numberVi: "Bước 4",
    title: "Hands-On Implementation",
    titleVi: "Trực Tiếp Cùng Nhau Thực Hành",
    subtitle: "Pair-program in real-time to build your application step-by-step",
    subtitleVi: "Lập trình cặp trong thời gian thực để xây dựng ứng dụng từng bước",
    description:
      "We write code together. You learn how to structure folders, create components, connect databases, and steer AI assistants through multi-file edits with complete control.",
    descriptionVi:
      "Chúng ta sẽ cùng viết code. Bạn sẽ học cách tổ chức thư mục, tạo component, kết nối cơ sở dữ liệu và chỉ đạo AI chỉnh sửa nhiều file một cách chủ động và kiểm soát hoàn toàn.",
    outputs: ["Modular React/Next.js components", "Connected database backend", "Working software prototype"],
    outputsVi: ["Các component React/Next.js dạng module", "Kết nối cơ sở dữ liệu backend", "Bản mẫu phần mềm hoạt động trơn tru"],
  },
  {
    step: "05",
    number: "Stage 5",
    numberVi: "Bước 5",
    title: "Debugging & Problem Solving",
    titleVi: "Kỹ Năng Gỡ Lỗi & Tự Tìm Giải Pháp",
    subtitle: "Learn how to diagnose errors and fix issues independently",
    subtitleVi: "Học cách đọc lỗi và tự giải quyết sự cố một cách độc lập",
    description:
      "When bugs occur, we don't panic. I teach you how to read console logs, isolate root causes, and prompt AI agents systematically to diagnose and resolve errors.",
    descriptionVi:
      "Khi gặp lỗi, chúng ta không hoang mang. Mình hướng dẫn bạn cách đọc nhật ký bảng điều khiển (console log), cô lập nguyên nhân gốc rễ và chỉ đạo AI từng bước để sửa lỗi triệt để.",
    outputs: ["Debugging methodology & log analysis", "Unit/integration testing checks", "Resilient error handling"],
    outputsVi: ["Phương pháp luận gỡ lỗi & phân tích log", "Kiểm thử các trường hợp dữ liệu", "Cơ chế xử lý lỗi an toàn"],
  },
  {
    step: "06",
    number: "Stage 6",
    numberVi: "Bước 6",
    title: "Public Production Deployment",
    titleVi: "Triển Khai Đưa Dự Án Lên Mạng Thật",
    subtitle: "Deploy your project to the live internet with your own domain",
    subtitleVi: "Đưa dự án lên internet với tên miền riêng của chính bạn",
    description:
      "We push your code to GitHub, connect it to Vercel or cloud hosting, set up environment variables securely, and connect a custom domain so you can share your work with the world.",
    descriptionVi:
      "Chúng ta đưa mã nguồn lên GitHub, kết nối với Vercel hoặc máy chủ đám mây, cấu hình biến môi trường an toàn và gắn tên miền riêng để bạn tự hào chia sẻ sản phẩm với bạn bè và nhà tuyển dụng.",
    outputs: ["Live public production URL", "Clean GitHub repository portfolio", "SSL security & domain config"],
    outputsVi: ["Đường dẫn trang web chạy thật công khai", "Kho mã nguồn GitHub chuẩn chỉ cho CV", "Cấu hình bảo mật SSL & tên miền"],
  },
  {
    step: "07",
    number: "Stage 7",
    numberVi: "Bước 7",
    title: "Independent Builder Graduation",
    titleVi: "Tốt Nghiệp & Tự Chủ Hoàn Toàn",
    subtitle: "Graduate with the repeatable methodology to build anything on your own",
    subtitleVi: "Tốt nghiệp với phương pháp luận chuẩn mực để tự tay làm bất cứ điều gì",
    description:
      "The ultimate objective is 100% independence. You leave with a proven, repeatable framework to ideate, plan, build, debug, and ship any future software project on your own.",
    descriptionVi:
      "Mục tiêu cao nhất là sự tự chủ 100%. Bạn kết thúc khóa học với một bộ khung phương pháp luận đã được kiểm chứng để tự mình lên ý tưởng, lập kế hoạch, viết code, sửa lỗi và xuất bản mọi sản phẩm tương lai.",
    outputs: ["Complete developer self-sufficiency", "Repeatable vibe coding playbook", "Confidence to ship future ideas"],
    outputsVi: ["Khả năng tự chủ hoàn toàn của một builder", "Cẩm nang Vibe Coding có thể tái sử dụng", "Sự tự tin biến mọi ý tưởng thành sản phẩm"],
  },
];

export const personalWorkflowSteps: WorkflowStep[] = [
  {
    step: "01",
    number: "Step 1",
    numberVi: "Bước 1",
    title: "Idea & Curiosity Spark",
    titleVi: "Ý Tưởng & Tia Sáng Đam Mê",
    subtitle: "Identify a real problem, friction point, or emerging technology",
    subtitleVi: "Xác định một vấn đề thực tế, điểm nghẽn hàng ngày hoặc công nghệ mới",
    description:
      "Every personal project starts with curiosity: testing a new open-weight LLM, solving a daily developer bottleneck, or creating an accessible tool for the community.",
    descriptionVi:
      "Mọi dự án cá nhân đều bắt nguồn từ sự tò mò: thử nghiệm một mô hình AI mã nguồn mở mới, giải quyết điểm nghẽn lập trình hàng ngày hoặc tạo ra công cụ hữu ích cho cộng đồng.",
    outputs: ["Core problem hypothesis", "Initial mental model", "Target outcome"],
    outputsVi: ["Giả thuyết vấn đề cốt lõi", "Mô hình tư duy ban đầu", "Kết quả đầu ra kỳ vọng"],
  },
  {
    step: "02",
    number: "Step 2",
    numberVi: "Bước 2",
    title: "Rapid Experimentation",
    titleVi: "Thử Nghiệm Nhanh",
    subtitle: "Build small prototypes to test feasibility and model limits",
    subtitleVi: "Xây dựng bản mẫu nhỏ để kiểm chứng tính khả thi và giới hạn mô hình",
    description:
      "Quick, experiential exploration. I test APIs, measure token latencies, experiment with prompt structures, and prove the core technical concept before full architecture.",
    descriptionVi:
      "Khám phá qua thực hành nhanh chóng. Mình kiểm thử các API, đo đạc độ trễ token, thử nghiệm cấu trúc prompt và chứng minh tính khả thi kỹ thuật trước khi xây dựng toàn diện.",
    outputs: ["Minimal viable experiment", "Feasibility proof", "Key architectural findings"],
    outputsVi: ["Bản thử nghiệm tối thiểu", "Chứng minh tính khả thi", "Các phát hiện kiến trúc quan trọng"],
  },
  {
    step: "03",
    number: "Step 3",
    numberVi: "Bước 3",
    title: "Spec & System Build",
    titleVi: "Đặc Tả & Xây Dựng Hệ Thống",
    subtitle: "Architect clean schemas and assemble the full system",
    subtitleVi: "Thiết kế schema dữ liệu sạch và lắp ráp toàn bộ hệ thống",
    description:
      "Transforming the prototype into a structured system with TypeScript interfaces, modular components, and automated state management using AI agent orchestration.",
    descriptionVi:
      "Chuyển hóa bản mẫu thành hệ thống chuẩn mực với interface TypeScript, component dạng module và quản lý trạng thái tự động thông qua điều phối tác tử AI.",
    outputs: ["Modular repository architecture", "Typed interface schemas", "Automated deployment pipeline"],
    outputsVi: ["Cấu trúc repository dạng module", "Schema interface chuẩn kiểu dữ liệu", "Quy trình triển khai tự động"],
  },
  {
    step: "04",
    number: "Step 4",
    numberVi: "Bước 4",
    title: "Ship, Test & Iterate",
    titleVi: "Xuất Bản, Kiểm Thử & Hoàn Thiện",
    subtitle: "Deploy live, gather telemetry, and continually improve",
    subtitleVi: "Triển khai chạy thật, thu thập thông số và liên tục nâng cấp",
    description:
      "Releasing the project publicly, observing real user interactions, analyzing performance, and pushing updates continuously.",
    descriptionVi:
      "Xuất bản dự án công khai, theo dõi trải nghiệm người dùng thực tế, phân tích hiệu năng và liên tục cập nhật phiên bản mới.",
    outputs: ["Live public system", "Telemetry metrics & logs", "Continuous enhancement cycle"],
    outputsVi: ["Hệ thống chạy thật trên internet", "Bảng theo dõi thông số & nhật ký", "Chu kỳ nâng cấp sản phẩm liên tục"],
  },
];
