export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { num: "5+", label: "Completed Projects" },
  { num: "2+", label: "Years Learning & Building" },
  { num: "3+", label: "Real World Experiences" },
  { num: "10+", label: "Technologies Used" },
];

export const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Laravel",
  "Flutter", "Python", "PostgreSQL", "AI Integration",
];

export const EXPERIENCES = [
  {
    role: "Founder & Software Developer",
    company: "MCBDK — Freelance Software Development",
    period: "Jan 2023 — Present",
    current: true,
    bullets: [
      "Developed websites, applications, and information systems for business and academic clients.",
      "Built custom software solutions covering database design, application development, and deployment.",
      "Worked independently across the full development process — from requirement analysis and UI implementation to system delivery.",
    ],
    tags: ["Next.js", "React", "Laravel", "PHP", "MySQL", "PostgreSQL"],
  },
  {
    role: "Network Support Intern",
    company: "PT Telkom Indonesia",
    period: "Aug 2019 — 2020",
    current: false,
    bullets: [
      "Assisted installation and maintenance of customer internet network infrastructure.",
      "Performed network troubleshooting and device checking to ensure stable connectivity.",
      "Gained hands-on experience with networking fundamentals and technical support processes.",
    ],
    tags: ["Networking", "Troubleshooting", "Technical Support"],
  },
];

export type Project = {
  name: string;
  category: string;
  filter: string[];
  description: string;
  image: string | null;
  icon: string;
  tags: string[];
  featuredTag?: string;
  github?: string;
  live?: string;
  colab?: string;
  isLocal?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Dompetku — Personal Finance Tracker",
    category: "Full-stack Web Application + AI",
    filter: ["web", "ai"],
    description:
      "Personal finance tracker with transaction management, CSV import, interactive dashboard, and AI-powered financial insights.",
    image: "/projects/dompetku.jpg",
    icon: "ti-wallet",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Railway"],
    featuredTag: "Gemini AI",
    github: "https://github.com/BANYUss",
    live: "https://dompetku-gkbj.vercel.app/",
  },
  {
    name: "DocChat — AI PDF Assistant",
    category: "AI SaaS Application",
    filter: ["ai", "web"],
    description:
      "AI-powered document assistant that allows users to upload PDF files and interact with document content through conversational AI.",
    image: "/projects/docchat.jpg",
    icon: "ti-message-chatbot",
    tags: ["Next.js", "TypeScript", "Vector DB", "AI API"],
    featuredTag: "RAG",
    isLocal: true,
  },
  {
    name: "Scheduling SaaS App",
    category: "SaaS Application",
    filter: ["web"],
    description:
      "Scheduling platform inspired by Calendly with timezone-safe booking system and availability management.",
    image: "/projects/scheduling.jpg",
    icon: "ti-calendar",
    tags: ["Next.js", "TypeScript", "Prisma", "Auth.js v5", "Luxon", "Vitest"],
    live: "https://scheduling-app-sand.vercel.app",
  },
  {
    name: "AM Management",
    category: "Management System",
    filter: ["web"],
    description:
      "Human resource management platform for event organizers to manage talent data, activities, and operational workflows.",
    image: "/projects/am-management.jpg",
    icon: "ti-users",
    tags: ["Next.js", "Laravel", "Supabase", "Figma"],
    live: "https://ammanagement.netlify.app/",
  },
  {
    name: "BE FRESH — Vegetable Store System",
    category: "E-Commerce Web Application",
    filter: ["web"],
    description:
      "Vegetable store web application with admin dashboard, product management, and user management features.",
    image: "/projects/befresh.jpg",
    icon: "ti-shopping-bag",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
    isLocal: true,
  },
  {
    name: "Fruit Care — AI Freshness Detection",
    category: "AI Web Application",
    filter: ["ai", "web"],
    description:
      "Progressive Web App for detecting fruit freshness using AI-based image classification with multilingual support.",
    image: "/projects/fruitcare.jpg",
    icon: "ti-leaf",
    tags: ["Teachable Machine", "Supabase", "PWA"],
    featuredTag: "TensorFlow.js",
    live: "https://fruitcare-app.netlify.app",
  },
  {
    name: "MusikKampus — Digital Music Magazine",
    category: "Content Platform",
    filter: ["web"],
    description:
      "Responsive digital music magazine platform for publishing music articles, news, and entertainment content.",
    image: "/projects/musikkampus.jpg",
    icon: "ti-music",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
    isLocal: true,
  },
  {
    name: "IoT CCTV Monitoring System",
    category: "Computer Vision / IoT",
    filter: ["ai"],
    description:
      "Camera monitoring system using smartphone camera with motion detection and automatic Telegram notifications.",
    image: "/projects/iot-cctv.jpeg",
    icon: "ti-camera",
    tags: ["Python", "OpenCV", "Flask", "Telegram Bot", "Google Colab"],
    colab:
      "https://colab.research.google.com/drive/1niHCoCKBlfeY78c3jzD5QxMlLrpD_TVz?usp=sharing",
  },
  {
    name: "Cloud Segmentation — Deep Learning",
    category: "Machine Learning",
    filter: ["ml"],
    description:
      "Deep learning project for cloud segmentation on satellite images using U-Net architecture with ResNet-34 encoder.",
    image: "/projects/cloud-segmentation.jpg",
    icon: "ti-cloud",
    tags: ["TensorFlow", "Python", "Google Colab"],
    featuredTag: "U-Net · ResNet-34",
    colab:
      "https://colab.research.google.com/drive/1A905h-NLKtTNZ6XOY7OC6Gcz4SSRln54?usp=sharing",
  },
];

export const SKILLS = [
  {
    icon: "ti-layout-2",
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces for modern web applications.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA", "Figma"],
  },
  {
    icon: "ti-server",
    title: "Backend Development",
    desc: "Developing application logic, authentication, APIs, and backend services.",
    tags: ["Next.js API Routes", "Laravel", "Flask", "REST API", "Auth.js", "Prisma ORM"],
  },
  {
    icon: "ti-database",
    title: "Database",
    desc: "Designing and managing databases for web applications.",
    tags: ["PostgreSQL", "Neon Database", "Supabase", "MySQL", "Database Design"],
  },
  {
    icon: "ti-brain",
    title: "AI & Machine Learning",
    desc: "Integrating artificial intelligence features and exploring machine learning models.",
    tags: ["Google Gemini API", "TensorFlow.js", "Teachable Machine", "Deep Learning", "U-Net", "ResNet-34", "RAG"],
  },
  {
    icon: "ti-camera",
    title: "IoT & Computer Vision",
    desc: "Building experimental computer vision and automation systems.",
    tags: ["Python", "OpenCV", "Flask", "Telegram Bot"],
  },
  {
    icon: "ti-tools",
    title: "Testing & Tools",
    desc: "Tools used for developing, testing, and deploying applications.",
    tags: ["Git", "GitHub", "Vercel", "Netlify", "Railway", "Vitest", "VS Code"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Database System Certification",
    issuer: "Universitas Bina Sarana Informatika",
    year: "2024",
    image: "/certificates/database-cert.jpg",
  },
  {
    name: "Network Support Internship Certificate",
    issuer: "PT Telkom Indonesia",
    year: "2018",
    image: "/certificates/telkom-cert.jpeg",
  },
  {
    name: "BNSP Certification",
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2020",
    image: "/certificates/bnsp-cert.jpeg",
  },
];

export const CONTACT_LINKS = [
  {
    icon: "ti-mail",
    label: "Email",
    value: "syahrularif007@gmail.com",
    href: "mailto:syahrularif007@gmail.com",
  },
  {
    icon: "ti-brand-github",
    label: "GitHub",
    value: "github.com/BANYUss",
    href: "https://github.com/BANYUss",
  },
  {
    icon: "ti-brand-whatsapp",
    label: "WhatsApp",
    value: "+62 878-2211-0310",
    href: "https://wa.me/6287822110310",
  },
  {
  icon: "ti-school",
  label: "GPA",
  value: "3.68 / 4.00 — Universitas BSI",
  href: "",
  },
  {
    icon: "ti-brand-x",
    label: "X / Twitter",
    value: "@waterheater__",
    href: "https://x.com/waterheater__",
  },
];
