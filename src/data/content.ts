// All site copy lives here so content can be updated without touching
// component/layout code. Every claim below is drawn directly from
// Ihab's CV / brief. Nothing here is invented (no fabricated metrics,
// teams, clients, or production claims).

export const personal = {
  name: "Ihab Hachem",
  role: "Senior Backend & Software Engineer",
  tagline: "Java & Spring Boot · Microservices · Distributed Systems",
  location: "Zahle, Lebanon",
  email: "ihab-hachem@outlook.com",
  phone: "+961 70 871 687",
  linkedin: "https://www.linkedin.com/in/ihab-hachem",
  github: "https://github.com/ihab-hachem",
  // Place the exported CV PDF at this exact path, see /public/resume/README.txt
  // Uses Vite's BASE_URL so this resolves correctly whether the site is
  // deployed at a domain root or under a GitHub Pages project path like
  // /portfolio/ — a hardcoded absolute path would 404 on project pages.
  resumePath: `${import.meta.env.BASE_URL}resume/Ihab-Hachem-CV.pdf`,
};

export const hero = {
  eyebrow: "Backend Engineering & System Design",
  heading: "Ihab Hachem",
  role: "Senior Backend & Software Engineer",
  sub: "Java · Spring Boot · Microservices · Distributed Systems",
  description:
    "I design and build production backend systems, microservices, and distributed applications, from API and database architecture to containerized deployment. Currently leading backend development on a Spring Boot annuity platform while modernizing a legacy codebase, with AI/LLM engineering as an added capability.",
  facts: [
    { label: "Based in", value: "Zahle, Lebanon" },
    { label: "Currently", value: "Backend Engineer @ Moobitek" },
    { label: "Leading", value: "Annuity platform (Spring Boot 4 / Java 21)" },
    { label: "Core stack", value: "Java · Spring Boot · Redis · MySQL" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "Backend-first, systems-minded",
  paragraphs: [
    "I design and build production-grade backend systems: REST APIs, microservices, and the databases and infrastructure underneath them. At Moobitek I lead backend architecture for an annuity platform and drive the migration of a legacy Laravel codebase to Spring Boot, taking ownership of system design rather than just implementing tickets.",
    "Alongside that, I apply the same engineering discipline to AI: self-hosted RAG assistants and MCP-based tooling built as backend infrastructure, not research experiments.",
  ],
  tags: ["Backend Architecture", "Microservices", "Distributed Systems", "System Modernization", "AI Engineering"],
};

export const expertise = [
  {
    category: "Backend Engineering",
    items: ["Java", "Spring Boot", "Laravel", "Python", "REST APIs", "Microservices"],
  },
  {
    category: "Distributed Systems",
    items: ["Redis", "RabbitMQ", "Docker", "Nginx", "Async Processing"],
  },
  {
    category: "Data",
    items: ["MySQL", "MariaDB", "SQL Server", "MyBatis"],
  },
  {
    category: "Integrations",
    items: ["Payment APIs", "External APIs", "Twilio", "Drools"],
  },
  {
    category: "AI Engineering",
    items: ["LLMs", "RAG", "MCP", "AI Agents", "Vector Search"],
  },
  {
    category: "DevOps & Security",
    items: ["Docker Compose", "Linux", "Spring Security", "JWT"],
  },
];

export const experience = [
  {
    company: "Moobitek",
    role: "Backend Engineer",
    location: "Beirut, Lebanon",
    period: "April 2024 – Present",
    featured: true,
    summary:
      "Leading backend architecture for a Spring Boot annuity platform while driving the migration of a legacy Laravel codebase to Spring Boot.",
    points: [
      "Design and build REST APIs in Laravel and Spring Boot, restructuring legacy business logic into a maintainable service layer.",
      "Design relational database schemas and use MyBatis alongside views and stored procedures to keep heavy operations out of the application layer.",
      "Own containerized deployment with Docker and Nginx, and handle testing and delivery on Linux servers.",
      "Write API documentation supporting handoff between backend, frontend, and integration teams.",
    ],
    tech: ["Java", "Spring Boot", "PHP", "Laravel", "MySQL", "Redis", "Docker", "MCP"],
  },
  {
    company: "Auto4Utos",
    role: "Python Backend Developer",
    location: "United Kingdom (Remote)",
    period: "November 2022 – August 2023",
    featured: false,
    summary:
      "Built and maintained REST APIs for a new application using FastAPI, with responsibility for testing, deployment, and supporting infrastructure.",
    points: [
      "Built and maintained REST APIs using FastAPI, validating each endpoint with Postman before release.",
      "Integrated Docker microservices and deployed them to a Linux server for the wider team.",
      "Set up Elasticsearch, Kibana, and Logstash for centralized application logging and monitoring.",
    ],
    tech: ["Python", "FastAPI", "Docker", "Elasticsearch"],
  },
];

export const teaching = {
  label: "Also teaches & mentors",
  items: [
    { org: "CIS College", role: "Full Stack Instructor", period: "2022" },
    { org: "AUB", role: "Full Stack Instructor", period: "2021" },
    { org: "Private Instruction", role: "Advanced Java Instructor", period: "2018" },
  ],
};

// Selected projects — the core of the portfolio. Kept to a small, strong
// set rather than a full project history; otherProjects below covers
// the rest in a single compact list.
export type Project = {
  title: string;
  tag: string;
  period: string;
  proprietary: boolean;
  description: string;
  role: string;
  tech: string[];
  points: string[];
  /** Optional compact architecture flow, shown only for projects that have one. */
  flow?: string[];
  /** Optional public repo link, shown only for open-source projects. */
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Annuity Platform",
    tag: "Production Platform · Leading Development",
    period: "2025 – Present",
    proprietary: true,
    description:
      "Backend platform for annuity processing built and led at Moobitek, handling business-rule–driven calculations and workflows.",
    role: "Backend Engineer / Technical Lead",
    tech: ["Java 21", "Spring Boot 4", "Redis", "MySQL", "RabbitMQ", "Docker", "Nginx", "Drools"],
    points: [
      "Own backend architecture and API design end-to-end, from schema to deployment.",
      "Implemented Redis caching and asynchronous RabbitMQ workflows for high-volume processing.",
      "Integrated Drools for business-rule processing on top of Spring Boot services.",
      "Containerized the platform with Docker and Nginx for repeatable deployment.",
    ],
    flow: ["Client", "API", "Spring Boot", "Redis / MySQL", "RabbitMQ", "External Services"],
  },
  {
    title: "MCP Gateway & AI Tooling",
    tag: "Professional Project · Moobitek",
    period: "2024 – Present",
    proprietary: true,
    description:
      "A modular MCP Gateway in Spring Boot that hosts multiple independent MCP modules under shared infrastructure, exposing internal tools to AI clients like Claude Desktop.",
    role: "Backend Engineer",
    tech: ["Java 21", "Spring Boot 4", "MCP"],
    points: [
      "Designed a shared-infrastructure gateway so new MCP modules can be added without touching the core.",
      "Implemented per-developer API keys and systemd-managed deployment.",
      "Connected retrieval, database access, and Jira integration into a single AI-tool surface.",
    ],
  },
  {
    title: "RAG AI Assistant",
    tag: "Personal Project · Open Source",
    period: "2023",
    proprietary: false,
    github: "https://github.com/ihab-hachem/rag_ai_agent",
    description:
      "A self-hosted retrieval-augmented generation assistant that brings document-based question answering to business applications without a third-party AI platform.",
    role: "Backend Engineer",
    tech: ["Java", "Spring Boot 3", "LangChain", "Vector Database", "MySQL", "Docker"],
    points: [
      "Built document ingestion, embeddings, and vector search behind a REST API.",
      "Used MCP to let the assistant retrieve context from documents, a codebase, and databases.",
      "Fully self-hosted and containerized with Docker Compose and Nginx.",
    ],
  },
  {
    title: "Multi-Service & E-Commerce Platforms",
    tag: "Freelance",
    period: "2023",
    proprietary: false,
    description:
      "Mobile-first backends for a multi-service marketplace, a multivendor e-commerce app, and a standalone e-commerce backend, each with admin tooling.",
    role: "Backend Engineer",
    tech: ["PHP", "Laravel", "MySQL", "REST APIs"],
    points: [
      "Built REST APIs for mobile and admin clients covering users, products, inventory, and orders.",
      "Integrated Sanctum authentication, payment gateways, and SMS/email services.",
      "Handled server configuration, SSL, and subdomain deployment for production.",
    ],
  },
];

export const otherProjects = [
  {
    title: "Multivendor E-Commerce Admin Dashboard",
    description: "React/TypeScript admin panel for categories, vendors, users, and homepage banners.",
  },
  {
    title: "Restaurant Delivery App",
    description: "React Native client and driver apps with live order tracking.",
  },
  {
    title: "Digital Menu",
    description: "QR-based restaurant menu with an admin side for items and pricing.",
  },
  {
    title: "Car Management System",
    description: "Inventory system with a full API layer, built in C#/.NET.",
  },
  {
    title: "Tulip POS",
    description: "Point-of-sale system covering stock, sales, and transactions.",
  },
  {
    title: "Library Management System",
    description: "Library inventory and ordering system with a companion Android app.",
  },
];

export const education = {
  degree: "M.S. Computer & Communication Engineering",
  school: "AUL",
  period: "2023",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
