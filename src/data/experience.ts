import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "independent-ai-builder",
    role: "Independent AI Developer & Systems Builder",
    roleVi: "Kỹ Sư AI & Lập Trình Viên Hệ Thống Độc Lập",
    organizationOrProject: "Self-Directed / Tyson Builds",
    organizationOrProjectVi: "Dự Án Cá Nhân / Tyson Builds",
    category: "AI Systems",
    categoryVi: "Hệ Thống AI",
    period: "2024 — PRESENT",
    periodVi: "2024 — HIỆN TẠI",
    summary:
      "Architecting autonomous AI agent coordination systems, self-hosted LLM infrastructure, full-stack web applications, and developer tooling with high-velocity spec-driven vibe coding.",
    summaryVi:
      "Kiến trúc các hệ thống điều phối tác tử AI tự hành, hạ tầng máy chủ LLM riêng biệt, ứng dụng web full-stack và công cụ phát triển phần mềm với phương pháp Vibe Coding theo đặc tả.",
    responsibilities: [
      "Conceived and architected Chief of Agents, an AI-native project coordination framework for parallel multi-agent software engineering",
      "Created Not Limited, an initiative focused on removing technical and financial barriers for non-traditional builders and Vietnamese creators",
      "Authored open-source GPU Rental Kit (github.com/TysonTranThai/gpu-rental-kit) to automate bare-metal GPU provisioning for vLLM inference",
      "Deploying self-hosted open-weight LLMs (DeepSeek, Llama 3, Qwen) on private Linux VPS clusters with automated SSL and Nginx routing",
    ],
    responsibilitiesVi: [
      "Khởi xướng và kiến trúc Chief of Agents, hệ thống điều phối đa tác tử AI chạy song song phục vụ phát triển phần mềm chuẩn mực",
      "Sáng lập Not Limited, dự án giúp xóa bỏ rào cản tài chính và kỹ thuật cho các creator và người mới học lập trình tại Việt Nam",
      "Tác giả bộ công cụ mã nguồn mở GPU Rental Kit (github.com/TysonTranThai/gpu-rental-kit) tự động hóa cấu hình máy chủ GPU cho vLLM",
      "Triển khai các mô hình AI mã nguồn mở (DeepSeek, Llama 3, Qwen) trên máy chủ Linux VPS riêng với chứng chỉ SSL và điều phối Nginx",
    ],
    technologies: ["TypeScript", "Next.js", "vLLM", "Linux", "Docker", "Python", "Multi-Agent AI", "Git"],
    results: [
      "Built and deployed multiple production-ready systems independently",
      "Engineered automated workflows reducing manual dev setup from hours to minutes",
    ],
    resultsVi: [
      "Tự tay xây dựng và triển khai thành công nhiều hệ thống hoàn chỉnh đạt chuẩn vận hành",
      "Xây dựng các quy trình tự động hóa rút ngắn thời gian thiết lập môi trường từ nhiều giờ xuống vài phút",
    ],
  },
  {
    id: "ai-client-consulting",
    role: "AI Consultant & Client Solutions Engineer",
    roleVi: "Cố Vấn & Kỹ Sư Giải Pháp AI Cho Doanh Nghiệp",
    organizationOrProject: "Client Engagements & Small Business Automation",
    organizationOrProjectVi: "Dự Án Doanh Nghiệp & Tự Động Hóa",
    category: "Client Work",
    categoryVi: "Dự Án Khách Hàng",
    period: "2024 — PRESENT",
    periodVi: "2024 — HIỆN TẠI",
    summary:
      "Partnering directly with small business owners, solo founders, and operators to design and implement customized AI workflows, support bots, and internal automation tools.",
    summaryVi:
      "Đồng hành cùng chủ doanh nghiệp vừa và nhỏ, solo founder để thiết kế và triển khai quy trình AI may đo, chatbot hỗ trợ khách hàng và công cụ tự động hóa nội bộ.",
    responsibilities: [
      "Audited client operational workflows to identify high-ROI automation and AI integration opportunities",
      "Built custom 24/7 AI customer support bots and knowledge retrieval systems (RAG) integrated with company documentation",
      "Automated cross-platform data synchronization between CRMs, messaging platforms (Telegram/Slack), and spreadsheets",
      "Trained non-technical client teams on practical prompt engineering and daily AI tool adoption",
    ],
    responsibilitiesVi: [
      "Khảo sát quy trình vận hành của khách hàng để tìm ra các điểm nghẽn mang lại ROI cao nhất khi tự động hóa",
      "Xây dựng bot chăm sóc khách hàng AI 24/7 và hệ thống tra cứu tài liệu nội bộ (RAG) chính xác",
      "Tự động hóa đồng bộ dữ liệu đa kênh giữa CRM, ứng dụng chat (Telegram/Slack) và bảng tính",
      "Đào tạo đội ngũ nhân sự không chuyên cách viết câu lệnh prompt thực tế và áp dụng AI vào công việc",
    ],
    technologies: ["Node.js", "OpenAI API", "Claude API", "Webhooks", "PostgreSQL", "Supabase", "Make.com"],
    results: [
      "Delivered customized systems adapted to each client's specific operational workflow",
      "Eliminated repetitive manual data-entry bottlenecks for partner businesses",
    ],
    resultsVi: [
      "Bàn giao các giải pháp may đo chuẩn xác theo quy trình vận hành riêng của từng đối tác",
      "Xóa bỏ hoàn toàn các điểm nghẽn nhập liệu thủ công tốn thời gian cho doanh nghiệp",
    ],
  },
  {
    id: "ai-mentorship-code-journey",
    role: "Founder & Technical Mentor",
    roleVi: "Người Sáng Lập & Cố Vấn Kỹ Thuật",
    organizationOrProject: "Code Journey & 1-on-1 Builder Mentorship",
    organizationOrProjectVi: "Code Journey & Chương Trình Cố Vấn 1-on-1",
    category: "Teaching & Mentorship",
    categoryVi: "Đào Tạo & Cố Vấn",
    period: "2024 — PRESENT",
    periodVi: "2024 — HIỆN TẠI",
    summary:
      "Mentoring students, founders, and aspiring builders in spec-driven vibe coding, full-stack web development, and AI agent orchestration through project-first hands-on sessions.",
    summaryVi:
      "Cố vấn cho học sinh, sinh viên và người khởi nghiệp về phương pháp Vibe Coding theo đặc tả, lập trình web full-stack và điều phối AI Agent qua các buổi thực hành dự án thực tế.",
    responsibilities: [
      "Designed a 7-step independence learning roadmap: Goal → Understand → Learn → Build → Debug → Deploy → Build Independently",
      "Guided complete beginners and students from zero coding knowledge to shipping their first live web applications on Vercel",
      "Taught practical context engineering, `.cursorrules` creation, and terminal CLI navigation for high-velocity AI pair programming",
      "Created collaborative community learning environments centered on figuring things out through real execution",
    ],
    responsibilitiesVi: [
      "Thiết kế lộ trình đào tạo 7 bước hướng tới sự tự chủ: Mục Tiêu → Hiểu Bản Chất → Nắm Quy Trình → Cùng Làm → Gỡ Lỗi → Xuất Bản → Tự Chủ",
      "Đồng hành cùng người mới từ chưa biết gì về code đến khi tự tay đưa ứng dụng web hoàn chỉnh lên Vercel",
      "Hướng dẫn quản lý ngữ cảnh prompt, tạo file `.cursorrules` và sử dụng dòng lệnh terminal để lập trình tốc độ cao cùng AI",
      "Xây dựng môi trường học tập cộng đồng tương tác, tập trung vào việc tự tìm giải pháp qua thực hành thực tế",
    ],
    technologies: ["Vibe Coding", "Claude Code", "Cursor", "Next.js", "React", "Git / GitHub", "Vercel"],
    results: [
      "Helped learners achieve self-sufficiency in building real software projects independently",
      "Refined an adaptive 1-on-1 teaching style customized to individual student learning speeds",
    ],
    resultsVi: [
      "Giúp nhiều học viên đạt được sự tự chủ hoàn toàn để tự làm các dự án phần mềm tiếp theo",
      "Hoàn thiện phương pháp cố vấn 1-on-1 linh hoạt, tùy biến theo tốc độ tiếp thu của từng người",
    ],
  },
  {
    id: "ecommerce-business-ventures",
    role: "Founder & E-Commerce Operator",
    roleVi: "Người Sáng Lập & Vận Hành Kinh Doanh",
    organizationOrProject: "Athletics & Digital Storefront Ventures",
    organizationOrProjectVi: "Dự Án Đồ Thể Thao & Cửa Hàng Trực Tuyến",
    category: "Product & Startup",
    categoryVi: "Khởi Nghiệp & Sản Phẩm",
    period: "2023 — 2024",
    periodVi: "2023 — 2024",
    summary:
      "Founded and operated basketball merchandise and athletic equipment e-commerce projects, developing commercial intuition in sourcing, branding, and customer communication.",
    summaryVi:
      "Sáng lập và vận hành các dự án kinh doanh phụ kiện bóng rổ và đồ thể thao, rèn luyện tư duy thương mại về nguồn hàng, thương hiệu và giao tiếp khách hàng.",
    responsibilities: [
      "Managed end-to-end product sourcing, supplier evaluation, and international inventory logistics",
      "Designed digital storefronts, brand visual identities, and social marketing campaigns",
      "Handled customer inquiries, order fulfillment, refund policies, and margin calculations",
      "Gained foundational entrepreneurial experience that now directly shapes practical software architecture decisions",
    ],
    responsibilitiesVi: [
      "Trực tiếp quản lý tìm nguồn hàng, đàm phán nhà cung cấp và vận chuyển kho bãi",
      "Thiết kế giao diện cửa hàng trực tuyến, bộ nhận diện thương hiệu và chiến dịch truyền thông",
      "Xử lý đơn hàng, chăm sóc khách hàng, quản lý chính sách đổi trả và tính toán biên lợi nhuận",
      "Tích lũy kinh nghiệm kinh doanh thực tế giúp định hình trực giác thiết kế phần mềm phục vụ đúng nhu cầu người dùng",
    ],
    technologies: ["E-Commerce", "Product Sourcing", "Brand Design", "Customer Service", "Business Operations"],
    results: [
      "Built hands-on commercial experience taking business initiatives from zero to revenue",
      "Developed competitive stamina, discipline, and customer-first thinking",
    ],
    resultsVi: [
      "Có trải nghiệm kinh doanh thực tế đưa một dự án từ con số không đến khi có doanh thu thật",
      "Rèn luyện sự bền bỉ, tính kỷ luật và tư duy luôn đặt trải nghiệm khách hàng lên hàng đầu",
    ],
  },
];
