// All site copy lives here so content can be updated without touching
// component/layout code. Every claim below is drawn directly from
// Ihab's CV. Nothing here is invented (no fabricated metrics, teams,
// clients, or production claims).

export const personal = {
  name: "Ihab Hachem",
  role: "Senior Backend & Software Engineer",
  tagline: "Java & Spring Boot · PHP & Laravel · Distributed Systems · AI Engineering",
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
  sub: "Java & Spring Boot · PHP & Laravel · Distributed Systems · AI Engineering",
  description:
    "I design and build backend systems: APIs, services, and the databases underneath them. I've spent the last few years moving a production codebase from Laravel to Spring Boot without breaking what already worked. Lately that same instinct for clean architecture has carried into AI: retrieval-augmented systems, self-hosted assistants, and MCP-based tooling built as backend infrastructure, not experiments.",
  facts: [
    { label: "Based in", value: "Zahle, Lebanon" },
    { label: "Currently", value: "Backend Engineer @ Moobitek" },
    { label: "Core stack", value: "Java · Spring Boot · PHP · Laravel" },
    { label: "Also building", value: "RAG systems & MCP tooling" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "Backend-first, systems-minded",
  paragraphs: [
    "My work sits mostly below the interface. REST APIs, service boundaries, database schemas, and the deployment pipeline that gets all of it onto a server reliably. At Moobitek I work inside a Laravel codebase while leading its migration to Spring Boot, which means spending as much time reading and documenting existing systems as writing new ones.",
    "I like taking a requirement that's really a business problem and turning it into something a database can enforce and an API can expose cleanly. Schemas with proper relations, views and stored procedures where they earn their place, containers that make deployment repeatable instead of manual. The same approach has carried over into AI work: treating retrieval and language models as another backend component to integrate carefully, not a black box bolted on top.",
  ],
  tags: [
    "API Development",
    "Backend Architecture",
    "Microservices",
    "System Modernization",
    "Database Design",
    "AI-Powered Applications",
  ],
};

export const focusAreas = [
  {
    title: "Backend Engineering",
    description:
      "REST API design and implementation across Java/Spring Boot and PHP/Laravel, from new endpoints to maintaining and extending existing ones.",
  },
  {
    title: "System Architecture",
    description:
      "Structuring services, documenting legacy systems, and drawing flow diagrams so complex processes stay understandable as they grow.",
  },
  {
    title: "Distributed Systems",
    description:
      "Working with services that need to communicate reliably, API boundaries, containerized deployments, and predictable service behavior.",
  },
  {
    title: "API Design",
    description:
      "Designing endpoints around real consumers, mobile apps, admin dashboards, and internal tools, with documentation that keeps teams unblocked.",
  },
  {
    title: "Database Engineering",
    description:
      "Relational schema design, MyBatis mapping, and using views and stored procedures to keep expensive logic close to the data.",
  },
  {
    title: "AI Engineering",
    description:
      "Building RAG pipelines and AI assistants as backend systems: document ingestion, vector search, and LLM integration behind a REST API.",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Docker and Docker Compose for service packaging, Linux server deployment, and systemd-managed services for internal tooling.",
  },
  {
    title: "Security",
    description:
      "Spring Security and token-based authentication (Sanctum, JWT), hashed API keys, and per-developer credentials for internal service access.",
  },
];

export const techStack = {
  dominant: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "PHP", "Laravel", "Python", "FastAPI"],
    },
    {
      category: "Architecture",
      items: [
        "Microservices",
        "Distributed Systems",
        "REST APIs",
        "System Design",
        "API Design",
        "API Documentation",
      ],
    },
    {
      category: "AI Engineering",
      items: [
        "RAG",
        "AI Assistants",
        "LLM Integration",
        "MCP",
        "Vector Databases",
        "Vector Search",
        "LangChain",
        "Hugging Face Transformers",
      ],
    },
  ],
  secondary: [
    {
      category: "Databases & Persistence",
      items: ["MySQL", "MariaDB", "SQL Server", "SQLite", "MyBatis", "Views & Stored Procedures"],
    },
    {
      category: "Caching & Messaging",
      items: ["Redis", "RabbitMQ", "Kafka", "Solr"],
    },
    {
      category: "Security & Integrations",
      items: [
        "Spring Security",
        "JWT",
        "Laravel Sanctum",
        "Twilio",
        "Payment Gateways",
        "SMS & Email",
        "Drools",
      ],
    },
    {
      category: "DevOps & Observability",
      items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub", "Elasticsearch", "Kibana", "Logstash"],
    },
    {
      category: "Frontend & Tools",
      items: ["React", "React Native", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Postman", "Jira"],
    },
  ],
};

export const experience = [
  {
    company: "Moobitek",
    role: "Backend Engineer",
    location: "Beirut, Lebanon",
    period: "April 2024 – Present",
    featured: true,
    summary:
      "Working inside an existing PHP Laravel codebase while contributing to the migration of core services to Java Spring Boot, building new API versions with a cleaner structure.",
    points: [
      "Design and build new REST APIs in both Laravel and Spring Boot, and maintain existing endpoints as requirements evolve.",
      "Contribute to the migration of legacy Laravel modules to Spring Boot, restructuring business logic into a maintainable service layer.",
      "Analyze and document the legacy system's structure, including database schema and API flow diagrams for complex processes.",
      "Design relational database schemas and use MyBatis alongside views and stored procedures to move heavy operations out of the application layer.",
      "Build and manage Docker containers for services, and handle deployment and testing on Linux servers.",
      "Write API documentation to support handoff between backend, frontend, and integration teams.",
      "Built and deployed an internal MCP Gateway in Spring Boot 4 / Java 21, a modular service hosting multiple independent MCP modules under shared infrastructure, with per-developer API keys and systemd-managed deployment.",
      "Lead the development of an annuity application using Spring Boot 4 and Java 21, driving backend architecture and API design while integrating MySQL for persistence, Redis for caching, and Docker/Nginx for containerized deployment.",
    ],
    tech: ["Java", "Spring Boot", "PHP", "Laravel", "MyBatis", "MySQL", "Redis", "Docker", "Linux", "MCP"],
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
      "Wrote automated unit tests to cover API behavior and reduce regressions during ongoing development.",
      "Integrated Docker microservices into the application and deployed them to a Linux server for the wider team.",
      "Set up Elasticsearch, Kibana, and Logstash for centralized application logging and monitoring.",
    ],
    tech: ["Python", "FastAPI", "Docker", "Linux", "Elasticsearch", "Kibana", "Logstash"],
  },
];

export const teaching = [
  {
    org: "CIS College",
    role: "Full Stack Instructor",
    period: "2022",
  },
  {
    org: "AUB",
    role: "Full Stack Instructor",
    period: "2021",
  },
  {
    org: "Private Instruction",
    role: "Advanced Java Instructor",
    period: "2018",
  },
];

export const aiEngineering = {
  eyebrow: "AI Engineering",
  title: "AI Engineering & Intelligent Systems",
  description:
    "My AI work is backend work. Treating retrieval, embeddings, and language models as components that need clean integration, not a separate track from the rest of the system. That means self-hosted deployments, document-based knowledge, and REST APIs in front of the AI layer, the same way I'd approach any other service.",
  capabilities: [
    "Retrieval-Augmented Generation (RAG)",
    "AI assistants",
    "Document-based knowledge systems",
    "LLM integration",
    "Embeddings & vector search",
    "Self-hosted AI deployment",
    "MCP (Model Context Protocol)",
    "AI-powered developer tooling",
  ],
};

export const featuredProject = {
  eyebrow: "Personal Project · Open Source",
  title: "RAG AI Assistant",
  github: "https://github.com/ihab-hachem/rag_ai_agent",
  description:
    "A self-hosted retrieval-augmented generation assistant built in Java and Spring Boot to bring document-based question answering to business applications without depending on a third-party AI platform. It uses LangChain and Hugging Face Transformers for embeddings, a vector database for semantic search, and MCP to let the assistant retrieve context from documents, a codebase, and databases before generating a response, all served behind a REST API.",
  capabilities: [
    "Document ingestion & indexing",
    "Vector search over embedded content",
    "Codebase & database retrieval via MCP",
    "Context-grounded question answering",
    "REST API for application integration",
    "Fully self-hosted, containerized deployment",
  ],
  tech: [
    "Java",
    "Spring Boot 3",
    "JDK 17",
    "LangChain",
    "Hugging Face Transformers",
    "Vector Database",
    "MySQL",
    "Docker",
    "Docker Compose",
    "Nginx",
    "MCP",
  ],
  note: "A personal, open-source project, shared here to demonstrate the architecture, not as a claim of production usage.",
};

export const mcpArchitecture = {
  eyebrow: "Professional Context · Architecture Concept",
  title: "MCP Gateway & AI Tooling",
  description:
    "Alongside the RAG project above, I've worked on AI assistant architecture in a professional setting, connecting retrieval, database access, codebase access, Jira, and MCP-based tools so an assistant can act on real systems rather than just answer questions in isolation. The MCP Gateway built at Moobitek is the infrastructure piece: a modular Spring Boot service that hosts multiple independent MCP modules behind shared authentication, letting tools be exposed to AI clients like Claude Desktop, and letting new MCP modules be added without changing the core infrastructure.",
  note: "This describes an architectural pattern from professional work at Moobitek, not a public repository. It's kept separate from the open-source RAG project above.",
  flow: ["RAG Layer", "Database Access", "Codebase Access", "Jira Integration", "MCP Tools", "AI Assistant"],
};

export const featuredEarlierProjects = [
  {
    title: "Multi-Service & E-Commerce Platforms",
    period: "2023",
    problem:
      "Several client businesses needed mobile-first backends: a multi-service marketplace, a multivendor e-commerce app, and a standalone e-commerce backend, each with admin tooling.",
    solution:
      "Built REST APIs in Laravel for mobile and admin clients, covering user, stock, and order modules, with the supporting infrastructure to take each one to production.",
    contribution: [
      "Sanctum token authentication and hashed API keys",
      "Payment and SMS/email gateway integration",
      "Notification flows and location-based filtering",
      "Server configuration, SSL, and subdomain deployment",
    ],
    tech: ["PHP", "Laravel", "MySQL", "REST APIs"],
  },
  {
    title: "Multivendor E-Commerce, Admin Dashboard",
    period: "2023",
    problem:
      "The multivendor platform's operators needed a way to manage categories, vendors, items, users, and homepage promotion without touching the database directly.",
    solution:
      "Built the business-facing admin panel as a standalone React/TypeScript application connected to the Laravel backend.",
    contribution: [
      "Category and sub-category management",
      "Vendor lifecycle: create, verify, restrict, activate",
      "Dynamic homepage banner management",
    ],
    tech: ["React", "TypeScript"],
  },
  {
    title: "Restaurant Delivery App",
    period: "2020 – 2021",
    problem:
      "A restaurant needed a mobile ordering experience covering both the customer side and the delivery driver side.",
    solution:
      "Built the React Native client, with separate client and driver portals sharing the same backend.",
    contribution: [
      "Catalog browsing with item customization",
      "Cart and order flow",
      "Live driver tracking and order-status updates",
    ],
    tech: ["React Native"],
  },
];

export const earlierProjects = [
  {
    title: "Digital Menu",
    description: "QR-based restaurant menu with an admin side for managing items, descriptions, and pricing.",
  },
  {
    title: "Car Management System",
    description: "Car accessories inventory system with a relational database and full API layer, built in C#/.NET.",
  },
  {
    title: "Tulip POS",
    description: "Point-of-sale system for a supermarket, covering stock, sales, and transaction history.",
  },
  {
    title: "Library Management System",
    description: "Library inventory and ordering system paired with an Android app for customers, built in Java.",
  },
];

export const systemsDiagram = {
  eyebrow: "Systems Thinking",
  title: "How I Think About Systems",
  description:
    "A conceptual view of how I lay out a backend system, not a diagram of one specific production system, but the shape most of my work follows: a client talks to an API layer, the API delegates to backend services, services own their data, and an AI/RAG layer sits alongside as another service rather than a special case. Hover a node for what I consider when I'm building it.",
  nodes: [
    {
      id: "client",
      label: "Client",
      detail: "Web, mobile, or admin dashboard. The API contract is designed around what each client actually needs.",
      x: 60,
      y: 190,
    },
    {
      id: "api",
      label: "API Layer",
      detail: "REST endpoints, request validation, and authentication. The boundary between clients and business logic.",
      x: 230,
      y: 90,
    },
    {
      id: "services",
      label: "Backend Services",
      detail: "Business logic organized into a service layer that stays testable independent of the framework around it.",
      x: 430,
      y: 190,
    },
    {
      id: "data",
      label: "Database & Cache",
      detail: "Relational schema as the source of truth, with views and stored procedures for logic that belongs close to the data.",
      x: 630,
      y: 90,
    },
    {
      id: "ai",
      label: "AI / RAG Layer",
      detail: "Retrieval and LLM calls treated as another backend dependency: embeddings, vector search, and a clear API boundary.",
      x: 630,
      y: 290,
    },
    {
      id: "observability",
      label: "Observability",
      detail: "Centralized logging so behavior in production is something you can actually look at, not guess about.",
      x: 830,
      y: 190,
    },
  ],
  edges: [
    ["client", "api"],
    ["api", "services"],
    ["services", "data"],
    ["services", "ai"],
    ["data", "observability"],
    ["ai", "observability"],
  ],
};

export const philosophy = {
  eyebrow: "Engineering Philosophy",
  title: "A few things I keep coming back to",
  principles: [
    {
      title: "Start simple, earn the complexity",
      description: "A system should only get more complex when the requirements actually demand it, not in anticipation of scale that hasn't arrived.",
    },
    {
      title: "APIs follow the business, not the database",
      description: "Endpoints should map to what the consumer needs to do, even when that means the API and the schema don't look the same shape.",
    },
    {
      title: "The database is architecture, not an afterthought",
      description: "Schema design, indexing, and where logic lives (application vs. views/stored procedures) are decisions, not defaults.",
    },
    {
      title: "Deployment should be boring",
      description: "Containers and repeatable deployment steps exist so shipping a change isn't an event.",
    },
    {
      title: "Use AI where it's actually useful",
      description: "RAG and LLM integration earn their place when they solve a real retrieval or knowledge problem, not because AI is available.",
    },
    {
      title: "If you can't observe it, you don't really know it works",
      description: "Logging and documentation aren't optional extras; they're how anyone (including future me) understands the system later.",
    },
  ],
};

export const education = {
  degree: "Master of Science in Computer and Communication Engineering",
  school: "AUL: Arts, Sciences and Technology University",
  location: "Beirut, Lebanon",
  period: "October 2021 – February 2023",
  note: "Thesis on a digital identity platform designed to replace physical ID documents.",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#ai", label: "AI Engineering" },
  { href: "#projects", label: "Projects" },
  { href: "#systems", label: "Systems" },
  { href: "#contact", label: "Contact" },
];
