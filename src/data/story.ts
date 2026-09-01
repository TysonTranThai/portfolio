export interface StoryMilestone {
  era: string;
  eraVi: string;
  yearOrGrade: string;
  yearOrGradeVi: string;
  title: string;
  titleVi: string;
  subtitle: string;
  subtitleVi: string;
  description: string;
  descriptionVi: string;
  keyLearnings: string[];
  keyLearningsVi: string[];
  category: "Early Curiosity" | "Exploration" | "Detour" | "Reawakening" | "Missions";
  categoryVi: string;
}

export const storyData: StoryMilestone[] = [
  {
    era: "The Spark",
    eraVi: "Tia Sáng Đầu Tiên",
    yearOrGrade: "Grade 3",
    yearOrGradeVi: "Lớp 3",
    title: "Early Curiosity & The Magic of Computers",
    titleVi: "Niềm Đam Mê Sớm & Sự Kỳ Diệu Của Máy Tính",
    subtitle: "A fascination with how machines actually work beneath the surface",
    subtitleVi: "Sự tò mò về cách máy móc thực sự vận hành ẩn sau màn hình",
    description:
      "Tyson became interested in computers and programming around Grade 3. At that time, technology was not yet common among children his age. The computer was something entirely new, fascinating, and full of limitless potential. His natural curiosity immediately pulled him toward operating systems, browsers, networking, and the foundations of cybersecurity.",
    descriptionVi:
      "Mình bắt đầu hứng thú với máy tính và lập trình từ khoảng năm Lớp 3. Vào thời điểm đó, công nghệ chưa thực sự phổ biến với các bạn cùng trang lứa. Máy tính là một điều hoàn toàn mới lạ, hấp dẫn và chứa đựng tiềm năng vô hạn. Tính tò mò tự nhiên đã dẫn lối mình tìm hiểu về hệ điều hành, trình duyệt web, mạng máy tính và những khái niệm sơ khởi về an ninh mạng.",
    keyLearnings: [
      "Operating system mechanics & file systems",
      "Network routing and internet protocols",
      "Early cybersecurity awareness and curiosity",
    ],
    keyLearningsVi: [
      "Cơ chế hoạt động của hệ điều hành & hệ thống tập tin",
      "Định tuyến mạng và giao thức truyền thông internet",
      "Nhận thức ban đầu và tư duy về an ninh bảo mật",
    ],
    category: "Early Curiosity",
    categoryVi: "Khởi Đầu Đam Mê",
  },
  {
    era: "The Foundation",
    eraVi: "Xây Dựng Nền Tảng",
    yearOrGrade: "Grades 4–7",
    yearOrGradeVi: "Lớp 4 – 7",
    title: "First Lines of Code & Web Exploration",
    titleVi: "Những Dòng Code Đầu Tiên & Khám Phá Web",
    subtitle: "Building websites and diving deeper into programming",
    subtitleVi: "Tự tay dựng website và đi sâu hơn vào logic lập trình",
    description:
      "During Grades 4 to 7, Tyson started actively experimenting with web development, scripting, and cybersecurity concepts. Rather than playing games passively, he was drawn to breaking down web pages, understanding client-server architecture, and building small software experiments.",
    descriptionVi:
      "Trong giai đoạn từ Lớp 4 đến Lớp 7, mình chủ động thực hành phát triển web, viết mã kịch bản và thử nghiệm các khái niệm bảo mật. Thay vì chỉ chơi game thụ động, mình thích mổ xẻ cấu trúc trang web, tìm hiểu mô hình máy khách - máy chủ (client-server) và tự tay viết các đoạn mã thử nghiệm nhỏ.",
    keyLearnings: [
      "HTML, CSS, and fundamental JavaScript",
      "Basic programming logic and scripting",
      "Security thinking and system vulnerabilities",
    ],
    keyLearningsVi: [
      "HTML, CSS và nền tảng cốt lõi của JavaScript",
      "Tư duy logic lập trình và viết mã kịch bản tự động",
      "Tư duy bảo mật và nhận diện lỗ hổng hệ thống",
    ],
    category: "Exploration",
    categoryVi: "Khám Phá & Thực Hành",
  },
  {
    era: "The Sports & Business Detour",
    eraVi: "Giai Đoạn Thể Thao & Kinh Doanh",
    yearOrGrade: "Grade 8",
    yearOrGradeVi: "Lớp 8",
    title: "Athletics, Basketball & Commercial Instincts",
    titleVi: "Bóng Rổ, Kỷ Luật Thể Thao & Tư Duy Kinh Doanh",
    subtitle: "Stepping away from coding to learn business, discipline, and grit",
    subtitleVi: "Tạm gác lại dòng code để rèn luyện bản lĩnh, kỷ luật và bài học thương mại",
    description:
      "Around Grade 8, Tyson became heavily invested in basketball, athletics, and entrepreneurship. He temporarily stepped away from day-to-day programming to focus on athletic competition and explore real-world business: e-commerce, product sourcing, branding, and customer communication. This period built his competitive stamina and practical commercial intuition.",
    descriptionVi:
      "Đến khoảng Lớp 8, mình dành nhiều tâm huyết cho bộ môn bóng rổ, rèn luyện thể thao và kinh doanh. Mình tạm rời xa việc lập trình hàng ngày để tập trung thi đấu thể thao và trải nghiệm kinh doanh thực tế: thương mại điện tử, tìm nguồn cung ứng hàng hóa, xây dựng thương hiệu và chăm sóc khách hàng. Giai đoạn này đã rèn luyện sức bền cạnh tranh và tư duy thương mại thực tiễn quý giá cho mình.",
    keyLearnings: [
      "Athletic discipline and competitive focus",
      "E-commerce, product sourcing, and branding",
      "Understanding customer value and business viability",
    ],
    keyLearningsVi: [
      "Tính kỷ luật thể thao và sự tập trung cao độ khi cạnh tranh",
      "Kinh doanh thương mại điện tử, tìm nguồn hàng và thương hiệu",
      "Thấu hiểu giá trị khách hàng và tính khả thi tài chính",
    ],
    category: "Detour",
    categoryVi: "Rèn Luyện Thực Tế",
  },
  {
    era: "The AI Revolution",
    eraVi: "Làn Sóng Cách Mạng AI",
    yearOrGrade: "2024–2026",
    yearOrGradeVi: "2024 – 2026",
    title: "The Reawakening: AI-Assisted Vibe Coding",
    titleVi: "Sự Bừng Tỉnh: Lập Trình Vibe Coding Cùng AI",
    subtitle: "Discovering a radically new way to architect software",
    subtitleVi: "Khám phá phương thức hoàn toàn mới để kiến tạo phần mềm",
    description:
      "The rapid emergence of modern Large Language Models and AI coding agents during 2024–2026 reignited Tyson's passion for software. Instead of returning to programming through traditional, tedious syntax memorization, he discovered a paradigm shift: AI-assisted development and spec-driven vibe coding. He realized that by acting as the pilot and architect, a builder could ship production systems 10x faster.",
    descriptionVi:
      "Sự phát triển vũ bão của các Mô hình Ngôn ngữ Lớn (LLM) và tác tử lập trình AI trong giai đoạn 2024–2026 đã thắp lại ngọn lửa đam mê phần mềm trong mình. Thay vì quay lại với cách học vẹt cú pháp nhàm chán kiểu cũ, mình khám phá ra một bước chuyển dịch tư duy: lập trình cùng AI và Vibe Coding dựa trên đặc tả kỹ thuật. Mình nhận ra rằng khi đóng vai trò kiến trúc sư chỉ huy, một builder có thể xuất bản hệ thống nhanh hơn gấp 10 lần.",
    keyLearnings: [
      "Spec-driven AI coding agents & prompt engineering",
      "Multi-agent orchestration & deterministic tool use",
      "Full-stack Next.js, TypeScript, and modern API architectures",
    ],
    keyLearningsVi: [
      "Lập trình cùng AI theo đặc tả & kỹ nghệ prompt chuyên sâu",
      "Điều phối đa tác tử AI & tích hợp công cụ có kiểm soát",
      "Next.js full-stack, TypeScript và kiến trúc API hiện đại",
    ],
    category: "Reawakening",
    categoryVi: "Bước Chuyển Mình",
  },
  {
    era: "The Community Mission",
    eraVi: "Sứ Mệnh Vì Cộng Đồng",
    yearOrGrade: "Code Journey & Not Limited",
    yearOrGradeVi: "Code Journey & Not Limited",
    title: "Making Technology Accessible to Everyone",
    titleVi: "Mang Công Nghệ Đến Cho Tất Cả Mọi Người",
    subtitle: "Helping people learn and removing barriers to building",
    subtitleVi: "Đồng hành hướng dẫn mọi người và xóa bỏ mọi rào cản sáng tạo",
    description:
      "Tyson launched Code Journey to help people learn programming, AI, and technology together. Through this community, he discovered that while AI democratizes code, people still get stuck without a structured workflow. This inspired 'Not Limited' — a mission grounded in the belief that people shouldn't be prevented from building their dreams simply because they lack money or a computer science degree.",
    descriptionVi:
      "Mình khởi xướng Code Journey nhằm giúp mọi người cùng nhau học lập trình, AI và làm chủ công nghệ. Qua cộng đồng này, mình nhận thấy dù AI giúp việc viết code dễ dàng hơn, người học vẫn gặp bế tắc nếu thiếu một quy trình làm việc chuẩn mực. Điều này đã thôi thúc mình xây dựng 'Not Limited' — sứ mệnh dựa trên niềm tin rằng không ai bị tước đi cơ hội hiện thực hóa ước mơ chỉ vì thiếu kinh phí hay không có bằng cấp IT.",
    keyLearnings: [
      "Community teaching and collaborative learning",
      "Identifying where non-programmers get stuck with AI",
      "Building free and ultra-accessible software tools",
    ],
    keyLearningsVi: [
      "Phương pháp đào tạo cộng đồng và học tập tương tác",
      "Nhận diện chính xác điểm nghẽn của người mới khi dùng AI",
      "Xây dựng các công cụ phần mềm miễn phí và dễ tiếp cận nhất",
    ],
    category: "Missions",
    categoryVi: "Sứ Mệnh Cộng Đồng",
  },
  {
    era: "The Flagship Architecture",
    eraVi: "Kiến Trúc Tiêu Biểu",
    yearOrGrade: "Present",
    yearOrGradeVi: "Hiện Tại",
    title: "Chief of Agents & Beyond",
    titleVi: "Chief of Agents & Những Mục Tiêu Lớn Hơn",
    subtitle: "Translating real-world workflow into an AI-native project manager",
    subtitleVi: "Đóng gói quy trình thực chiến thành hệ thống quản lý dự án AI",
    description:
      "To solve the breakdown between simple vibe coding prototypes and production-grade software, Tyson architected 'Chief of Agents' — an AI-native coordination system that breaks down user goals into planned tasks, dispatches specialized agents in parallel, and verifies execution. Today, Tyson continues building software, private GPU infrastructure, helping businesses integrate AI, and mentoring the next generation of builders.",
    descriptionVi:
      "Để giải quyết khoảng cách giữa bản mẫu Vibe Coding đơn giản và phần mềm thực tế đạt chuẩn vận hành, mình đã kiến trúc nên 'Chief of Agents' — hệ thống điều phối đa tác tử AI giúp phân rã mục tiêu thành kế hoạch chi tiết, phân bổ tác tử chuyên biệt chạy song song và tự động xác thực chất lượng code. Hiện nay, mình tiếp tục phát triển phần mềm, hạ tầng GPU riêng, hỗ trợ doanh nghiệp ứng dụng AI và cố vấn cho thế hệ builder tiếp theo.",
    keyLearnings: [
      "Agent task decomposition & dependency resolution",
      "Self-hosted LLM infrastructure & private GPU clusters",
      "Guiding businesses and students to build real systems",
    ],
    keyLearningsVi: [
      "Phân rã tác vụ cho AI Agent & xử lý phụ thuộc tuần tự/song song",
      "Vận hành hạ tầng mô hình AI riêng biệt & cụm máy chủ GPU",
      "Đồng hành cùng doanh nghiệp và học viên làm ra sản phẩm thật",
    ],
    category: "Missions",
    categoryVi: "Kiến Trúc & Tương Lai",
  },
];
