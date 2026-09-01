import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "chief-of-agents",
    slug: "chief-of-agents",
    title: "Chief of Agents",
    titleVi: "Chief of Agents",
    tagline: "AI-native project manager and multi-agent coordination environment.",
    taglineVi: "Hệ thống quản lý dự án AI và môi trường điều phối đa tác tử song song.",
    description:
      "An intelligent orchestration system that bridges the gap between simple AI prototyping and production software engineering. Chief of Agents takes high-level user goals, generates structured implementation specs, breaks them down into isolated tasks, and coordinates specialized AI coding agents in parallel with automated review and revision loops.",
    descriptionVi:
      "Hệ thống điều phối thông minh thu hẹp khoảng cách giữa bản mẫu AI sơ khởi và phần mềm đạt chuẩn vận hành thực tế. Chief of Agents tiếp nhận mục tiêu của người dùng, tự động tạo đặc tả kỹ thuật, phân tách thành các tác vụ độc lập và điều phối các tác tử AI chuyên trách chạy song song với cơ chế tự động kiểm duyệt và sửa lỗi.",
    role: "Creator & Lead Architect",
    roleVi: "Tác Giả & Kiến Trúc Sư Trưởng",
    category: ["AI", "Software", "Infrastructure"],
    technologies: [
      "TypeScript",
      "Next.js",
      "Multi-Agent Orchestration",
      "LLM Tool Calling",
      "Task Graph Decomposition",
      "Tailwind CSS",
      "Node.js",
    ],
    featured: true,
    status: "Active",
    statusVi: "Đang Phát Triển",
    problem:
      "Vibe coding sounds easy, but building production systems is notoriously hard. People get stuck on architecture planning, file structures, agent coordination, testing, and debugging, often creating tangled, hallucinated code without a structured pipeline.",
    problemVi:
      "Lập trình Vibe coding nghe có vẻ đơn giản, nhưng để xây dựng được một hệ thống hoàn chỉnh chạy thực tế lại rất khó khăn. Người dùng thường bế tắc ở khâu lập kế hoạch kiến trúc, cấu trúc thư mục, điều phối tác tử, kiểm thử và gỡ lỗi, dễ dẫn đến mã nguồn rối rắm và AI bị ảo giác khi thiếu quy trình chuẩn.",
    solution:
      "Engineered an AI-native workflow where a central 'Chief' planner decomposes goals into strict task graphs, dispatches domain-specific agents, verifies output against schema contracts, and manages dependencies before commits.",
    solutionVi:
      "Xây dựng quy trình gốc AI chuẩn mực, trong đó tác tử 'Chief' trung tâm sẽ phân rã mục tiêu thành sơ đồ tác vụ có ràng buộc chặt chẽ, điều phối các sub-agent chuyên trách, xác thực kết quả đầu ra theo hợp đồng kiểu dữ liệu và quản lý sự phụ thuộc trước khi lưu mã nguồn.",
    results: [
      "Structured pipeline: Goal → Plan → Decompose → Parallel Agents → Review → Revise → Ship",
      "Designed specifically for Vietnamese creators and non-traditional developers to build production-grade software",
      "Eliminates infinite loops and context drift in autonomous agent sessions",
    ],
    resultsVi: [
      "Quy trình chuẩn: Mục Tiêu → Kế Hoạch → Phân Tách → Đa Tác Tử Song Song → Kiểm Duyệt → Sửa Lỗi → Xuất Bản",
      "Thiết kế riêng cho các creator và lập trình viên Việt Nam tự tin làm ra phần mềm chuẩn sản xuất",
      "Loại bỏ hoàn toàn hiện tượng AI lặp vô tận và trôi ngữ cảnh khi phát triển dự án lớn",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    demoUrl: undefined,
    caseStudyId: "chief-of-agents-case-study",
    highlights: [
      "Autonomous task decomposition & dependency resolution",
      "Multi-agent role specialization (Planner, Coder, Reviewer, Verifier)",
      "Designed around Tyson's battle-tested vibe coding methodology",
    ],
    highlightsVi: [
      "Tự động phân rã tác vụ & giải quyết sự phụ thuộc giữa các module",
      "Phân vai chuyên biệt cho từng Agent (Kế Hoạch, Viết Code, Kiểm Duyệt, Xác Thực)",
      "Được thiết kế dựa trên chính phương pháp Vibe Coding thực chiến của mình",
    ],
    year: "2026",
  },
  {
    id: "not-limited",
    slug: "not-limited",
    title: "Not Limited Platform",
    titleVi: "Nền Tảng Not Limited",
    tagline: "Empowering everyone to build software without financial or technical gatekeeping.",
    taglineVi: "Trao quyền cho mọi người tự tạo phần mềm mà không bị rào cản tài chính hay kỹ thuật.",
    description:
      "A personal mission and open ecosystem built on the conviction that no one should be prevented from building their ideas simply because they lack money or a formal computer science degree. Offers accessible tools, guidance, and free AI building resources.",
    descriptionVi:
      "Một sứ mệnh cá nhân và hệ sinh thái mở được xây dựng trên niềm tin rằng không ai bị giới hạn khả năng hiện thực hóa ý tưởng chỉ vì thiếu ngân sách hay không có bằng cấp CNTT. Cung cấp các công cụ dễ tiếp cận, hướng dẫn thực hành và tài nguyên xây dựng AI miễn phí.",
    role: "Founder & Architect",
    roleVi: "Người Sáng Lập & Kiến Trúc Sư",
    category: ["Education", "AI", "Software"],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Open Source AI",
      "API Gateways",
      "Community Tooling",
    ],
    featured: true,
    status: "Active",
    statusVi: "Đang Hoạt Động",
    problem:
      "Traditional software development carries massive barriers to entry: expensive API subscriptions, complex setup requirements, and steep learning curves that discourage creative beginners.",
    problemVi:
      "Phát triển phần mềm truyền thống có rào cản gia nhập rất lớn: chi phí đăng ký API đắt đỏ, cấu hình môi trường phức tạp và đường cong học tập dốc đứng khiến những người mới bắt đầu dễ nản lòng.",
    solution:
      "Created a free and accessible platform providing straightforward workflows, shared AI tools, and step-by-step guidance to help anyone turn an idea into working software.",
    solutionVi:
      "Tạo ra nền tảng mở và dễ tiếp cận, cung cấp quy trình tinh gọn, công cụ AI dùng chung và hướng dẫn từng bước giúp bất kỳ ai cũng có thể biến ý tưởng thành phần mềm hoạt động được.",
    results: [
      "Committed to remaining free for as long as possible, or ultra-affordable and accessible",
      "Empowered non-programmers to build their first functional AI applications",
      "Catalyzed the creation of specialized sub-tools (Router, Team)",
    ],
    resultsVi: [
      "Cam kết duy trì miễn phí lâu nhất có thể, hoặc đảm bảo mức chi phí dễ tiếp cận nhất",
      "Giúp nhiều người chưa từng học code tự tay làm ra ứng dụng AI đầu tiên",
      "Thúc đẩy sự ra đời của các công cụ bổ trợ chuyên sâu (Router, Team)",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    caseStudyId: "not-limited-case-study",
    highlights: [
      "Mission-driven accessibility for Vietnamese and global builders",
      "Eliminates paywalls and complex setup barriers for new builders",
      "Community-driven iterative feedback loop",
    ],
    highlightsVi: [
      "Sứ mệnh phổ cập công nghệ cho cộng đồng builder Việt Nam và quốc tế",
      "Xóa bỏ tường phí và rào cản cài đặt phức tạp cho người mới",
      "Vòng lặp đóng góp và cải tiến liên tục từ cộng đồng",
    ],
    year: "2026",
  },
  {
    id: "gpu-rental-kit",
    slug: "gpu-rental-kit",
    title: "GPU Rental Kit",
    titleVi: "Bộ Công Cụ GPU Rental Kit",
    tagline: "Automated provisioning, hardening, and deployment kit for bare-metal cloud GPUs.",
    taglineVi: "Bộ công cụ tự động khởi tạo, bảo mật và triển khai máy chủ GPU đám mây.",
    description:
      "A modular open-source toolkit and automated script suite designed to rapidly configure, secure, and deploy bare-metal cloud GPUs (RunPod, Vast.ai, Lambda Labs) for private LLM inference, vLLM acceleration, and model fine-tuning with zero manual boilerplate.",
    descriptionVi:
      "Bộ công cụ mã nguồn mở dạng module và kịch bản tự động hóa giúp cấu hình, bảo mật và triển khai nhanh chóng máy chủ GPU đám mây (RunPod, Vast.ai, Lambda Labs) phục vụ suy luận LLM riêng tư, tăng tốc vLLM và tinh chỉnh mô hình mà không cần thao tác thủ công tốn thời gian.",
    role: "Creator & Maintainer",
    roleVi: "Tác Giả & Quản Trị Viên",
    category: ["Infrastructure", "AI"],
    technologies: [
      "Bash / Shell",
      "Linux (Ubuntu)",
      "Docker",
      "CUDA",
      "vLLM",
      "Nginx",
      "SSL / Certbot",
      "Ollama",
    ],
    featured: true,
    status: "Active",
    statusVi: "Mã Nguồn Mở",
    problem:
      "Renting cloud GPUs typically requires repetitive, error-prone manual setup: installing CUDA drivers, configuring reverse proxies, setting up SSL certificates, securing SSH keys, and wiring token streaming endpoints.",
    problemVi:
      "Việc thuê GPU đám mây thường đòi hỏi quy trình cài đặt thủ công lặp đi lặp lại và dễ phát sinh lỗi: cài driver CUDA, cấu hình reverse proxy, xin chứng chỉ SSL, bảo mật SSH và thiết lập cổng API truyền dữ liệu dạng luồng.",
    solution:
      "Developed a one-command automated kit that provisions environments, installs optimized inference runtimes (vLLM/Ollama), configures firewall/SSL security, and exposes clean OpenAI-compatible API endpoints.",
    solutionVi:
      "Phát triển bộ công cụ tự động hóa chỉ bằng một câu lệnh: tự khởi tạo môi trường, cài đặt runtime suy luận tối ưu (vLLM/Ollama), thiết lập tường lửa/SSL và mở cổng API chuẩn tương thích OpenAI.",
    results: [
      "Reduces GPU instance setup time from 45 minutes to under 3 minutes",
      "Open-source repository available on GitHub",
      "Zero vendor lock-in across major GPU cloud providers",
    ],
    resultsVi: [
      "Rút ngắn thời gian thiết lập máy chủ GPU từ 45 phút xuống dưới 3 phút",
      "Mã nguồn mở công khai trên GitHub (github.com/TysonTranThai/gpu-rental-kit)",
      "Không bị phụ thuộc vào một nhà cung cấp đám mây cụ thể nào",
    ],
    githubUrl: "https://github.com/TysonTranThai/gpu-rental-kit.git",
    liveUrl: undefined,
    caseStudyId: undefined,
    highlights: [
      "One-liner setup for vLLM and OpenAI-compatible API endpoints",
      "Automated SSL certificates, firewall rules, and SSH security hardening",
      "Production-ready scripts tested across multiple GPU host providers",
    ],
    highlightsVi: [
      "Cài đặt một câu lệnh cho vLLM và cổng API tương thích OpenAI",
      "Tự động cấp chứng chỉ SSL, cấu hình tường lửa và gia cố bảo mật SSH",
      "Kịch bản đạt chuẩn vận hành đã được kiểm nghiệm qua nhiều nhà cung cấp GPU",
    ],
    year: "2026",
  },

  {
    id: "code-journey",
    slug: "code-journey",
    title: "Code Journey",
    titleVi: "Code Journey",
    tagline: "Educational project and builder community for learning programming and AI.",
    taglineVi: "Dự án giáo dục và cộng đồng builder cùng học lập trình & AI.",
    description:
      "A collaborative initiative created to help people learn programming, AI tools, and computer systems through hands-on project building. Through Code Journey, Tyson explored how people learn best with modern AI and refined his mentorship methodology.",
    descriptionVi:
      "Sáng kiến cộng đồng giúp mọi người học lập trình, công cụ AI và hệ thống máy tính qua việc trực tiếp xây dựng dự án. Thông qua Code Journey, mình đã nghiên cứu cách người học tiếp thu hiệu quả nhất với AI hiện đại và hoàn thiện phương pháp giảng dạy của mình.",
    role: "Initiator & Mentor",
    roleVi: "Người Khởi Xướng & Cố Vấn",
    category: ["Education", "Software"],
    technologies: [
      "Community Building",
      "Curriculum Design",
      "AI Coding Tools",
      "Web Development",
      "Interactive Workshops",
    ],
    featured: false,
    status: "Completed",
    statusVi: "Đã Hoàn Thành",
    problem:
      "Beginners often drop out of coding because traditional tutorials focus on boring syntax exercises rather than helping them experience the joy of building real, functional software.",
    problemVi:
      "Người mới bắt đầu thường bỏ cuộc vì các bài học truyền thống quá nặng về lý thuyết cú pháp khô khan thay vì cho họ trải nghiệm niềm vui khi tự tay tạo ra sản phẩm chạy thật.",
    solution:
      "Designed a project-first learning approach where students immediately start building meaningful applications, leveraging AI as a supportive coding assistant while learning core system concepts.",
    solutionVi:
      "Thiết kế phương pháp học qua dự án thực tế ngay từ đầu, trong đó học viên dùng AI làm trợ lý viết code đắc lực đồng thời nắm vững các khái niệm hệ thống nền tảng.",
    results: [
      "Guided learners through building their first live web applications",
      "Directly informed the founding principles of Not Limited and Chief of Agents",
      "Fostered a collaborative community of young tech enthusiasts",
    ],
    resultsVi: [
      "Đồng hành giúp nhiều bạn trẻ tự tay xây dựng và đưa ứng dụng web lên mạng",
      "Đặt nền móng tư duy thực tiễn cho sự ra đời của Not Limited và Chief of Agents",
      "Xây dựng cộng đồng gắn kết những bạn trẻ đam mê công nghệ",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    caseStudyId: undefined,
    highlights: [
      "Project-first pedagogy over syntax memorization",
      "Empowered students to build and deploy real web projects",
      "Formative foundation for Tyson's mentorship philosophy",
    ],
    highlightsVi: [
      "Phương pháp học qua dự án thay vì học vẹt lý thuyết",
      "Trao quyền cho học viên tự xây dựng và xuất bản sản phẩm thật",
      "Nền tảng định hình nên triết lý đào tạo của mình",
    ],
    year: "2024",
  },
  {
    id: "ecom-business-ventures",
    slug: "ecom-business-ventures",
    title: "Basketball & E-Commerce Ventures",
    titleVi: "Dự Án Bóng Rổ & Thương Mại Điện Tử",
    tagline: "Practical business, product sourcing, and digital storefront execution.",
    taglineVi: "Kinh nghiệm kinh doanh thực tế, tìm nguồn hàng và vận hành cửa hàng số.",
    description:
      "Entrepreneurial ventures in athletic equipment, basketball merchandise, and digital storefronts. Tyson managed end-to-end commercial operations including product sourcing, supplier communication, brand identity, customer service, and digital sales funnels.",
    descriptionVi:
      "Các dự án kinh doanh thực tế về dụng cụ thể thao, phụ kiện bóng rổ và cửa hàng trực tuyến. Mình trực tiếp quản lý toàn bộ quy trình thương mại từ tìm kiếm nguồn hàng, làm việc với nhà cung cấp, thiết kế thương hiệu đến chăm sóc khách hàng và tối ưu kênh bán lẻ.",
    role: "Founder & Operator",
    roleVi: "Người Sáng Lập & Vận Hành",
    category: ["Business"],
    technologies: [
      "E-Commerce",
      "Product Sourcing",
      "Brand Design",
      "Digital Marketing",
      "Customer Relations",
      "Supply Chain Basics",
    ],
    featured: false,
    status: "Completed",
    statusVi: "Đã Hoàn Thành",
    problem:
      "Building software without understanding commercial realities often leads to products nobody wants or uses.",
    problemVi:
      "Lập trình phần mềm mà không hiểu bản chất kinh doanh thường dẫn đến những sản phẩm thiếu tính thực tế và không ai sử dụng.",
    solution:
      "Ran hands-on physical and digital e-commerce operations to build direct intuition for customer demand, pricing psychology, margin structures, and real-world execution.",
    solutionVi:
      "Trực tiếp vận hành kinh doanh thực tế để tôi luyện trực giác nhạy bén về nhu cầu khách hàng, tâm lý định giá, biên lợi nhuận và khả năng thực thi trong đời thực.",
    results: [
      "Gained firsthand experience with inventory, sourcing, and customer satisfaction",
      "Developed an entrepreneurial mindset that now guides software architecture decisions",
      "Proven track record of taking initiatives from zero to sales",
    ],
    resultsVi: [
      "Tích lũy kinh nghiệm quý báu về quản lý tồn kho, đàm phán nguồn hàng và sự hài lòng của khách",
      "Hình thành tư duy kinh doanh sắc bén giúp định hướng kiến trúc phần mềm thực tế",
      "Kinh nghiệm thực tiễn đưa một dự án từ con số không đến khi có doanh thu thật",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    caseStudyId: undefined,
    highlights: [
      "Real-world experience in product sourcing and supply chains",
      "End-to-end storefront design, branding, and customer funnels",
      "Bridging the gap between software engineering and business economics",
    ],
    highlightsVi: [
      "Kinh nghiệm thực tế về nguồn cung ứng và chuỗi phân phối hàng hóa",
      "Thiết kế cửa hàng số, nhận diện thương hiệu và luồng mua sắm của khách",
      "Cầu nối quan trọng giữa kỹ thuật phần mềm và bài toán kinh tế thực tiễn",
    ],
    year: "2023–2024",
  },
];
