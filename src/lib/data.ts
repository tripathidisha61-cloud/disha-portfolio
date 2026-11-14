export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  devStatus: "Completed" | "In Development" | "Prototype";
  featured: boolean;
  architecture?: string;
  highlights?: string[];
  challengesSolved?: string[];
}

export interface RoadmapMilestone {
  phase: string;
  title: string;
  period: string;
  status: "Completed" | "In Progress" | "Upcoming";
  description: string;
  details: string[];
  tag: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge?: string;
  link?: string;
}

export const PERSONAL_INFO = {
  name: "Disha Tripathi",
  title: "Software Developer | AI/ML Enthusiast | Computer Science Student",
  shortBio:
    "3rd-year B.Tech CSE student at RKGIT Ghaziabad (CGPA: 8.8/10). Smart India Hackathon (SIH 2026) internal level cleared, actively preparing for Google Summer of Code (GSoC 2027). Passionate about software engineering, AI/ML systems, and resilient full-stack applications.",
  college: "Raj Kumar Goel Institute of Technology, Ghaziabad",
  degree: "B.Tech Computer Science and Engineering",
  year: "3rd Year",
  graduationYear: "2028",
  cgpa: "8.8 / 10",
  email: "tripathidisha61@gmail.com",
  phone: "+91-9120338372",
  location: "Ghaziabad, Uttar Pradesh, India",
  availability: "Open to Software Engineering & AI/ML Internships",
  socials: {
    github: {
      url: "https://github.com/tripathidisha61-cloud",
      username: "tripathidisha61-cloud",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/disha-tripathi-20a353328",
      username: "disha-tripathi-20a353328",
    },
    leetcode: {
      url: "https://leetcode.com/u/Disha_tripathi2006/",
      username: "Disha_tripathi2006",
    },
    email: "tripathidisha61@gmail.com",
  },
  resumeUrl: "/resume.pdf",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "C" },
      { name: "Bash" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Web & Backend Engineering",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "AI, ML & Data",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "RAG Architectures" },
      { name: "Data Analytics" },
      { name: "LLM Orchestration" },
      { name: "Vector Databases" },
    ],
  },
  {
    title: "Cloud & DevOps Tools",
    skills: [
      { name: "AWS (EC2, S3)" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Git & GitHub" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "Vercel" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "repomedic-ai",
    title: "RepoMedic AI",
    description:
      "Intelligent code health & diagnostic assistant that scans GitHub repositories for vulnerability hotspots, anti-patterns, and automates PR remediation with LLMs.",
    longDescription:
      "RepoMedic AI connects to GitHub repos to perform automated deep code triage, static security analysis, and intelligent automated refactoring proposals using Retrieval-Augmented Generation.",
    technologies: ["Python", "FastAPI", "Next.js", "Docker", "RAG", "GitHub API"],
    image: "/images/repomedic.png",
    githubUrl: "https://github.com/tripathidisha61-cloud",
    liveUrl: "https://github.com/tripathidisha61-cloud",
    devStatus: "In Development",
    featured: true,
    architecture:
      "GitHub Webhook / REST API -> FastAPI Async Pipeline -> AST Parser & Static Analysis Engine -> LangChain RAG with ChromaDB -> LLM Remediation Agent -> Automated Pull Request Patch",
    highlights: [
      "Sub-200ms AST scanning for syntax and security anti-patterns",
      "Automated contextual PR generation with unified git diff patch formats",
      "Dockerized isolated execution environment preventing arbitrary code execution",
      "Contextual code embeddings utilizing AST chunking over raw text splitting",
    ],
    challengesSolved: [
      "Mitigated LLM token bloat by using AST tree pruning before prompt embedding",
      "Enforced deterministic git patches with strict lint validation checks",
    ],
  },
  {
    id: "live-hackathon-leaderboard",
    title: "Live Hackathon Leaderboard",
    description:
      "Real-time dynamic competition tracking platform with live judging matrices, instant telemetry scoreboards, and automated participant rank syncing.",
    longDescription:
      "Engineered for high-concurrency hackathons and collegiate competitive events. Includes real-time rubric submissions, judge evaluation queues, and WebSocket telemetry updates.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "PostgreSQL"],
    image: "/images/leaderboard.png",
    githubUrl: "https://github.com/tripathidisha61-cloud",
    liveUrl: "https://github.com/tripathidisha61-cloud",
    devStatus: "Completed",
    featured: true,
    architecture:
      "Judge Evaluation Web Client -> Next.js Edge API -> PostgreSQL Transaction Queue -> WebSocket Broadcast Gateway -> Participant Live Dashboard",
    highlights: [
      "Real-time synchronized scorecards supporting 100+ concurrent participant teams",
      "Sub-100ms telemetry broadcasts via low-overhead WebSocket state streams",
      "ACID-compliant scoring transaction locks preventing race conditions during simultaneous judge submissions",
      "Dynamic rubric customization engine with category weighting",
    ],
    challengesSolved: [
      "Eliminated duplicate score submissions under high latency via optimistic UI locking and database transactions",
      "Maintained smooth 60fps leaderboard re-renders using lightweight Framer Motion layout animations",
    ],
  },
  {
    id: "securehealth-telehealth",
    title: "SecureHealth — Telehealth Platform",
    description:
      "Architected a comprehensive telehealth platform design featuring an intelligent symptom-checker triage flow, specialist consultations, and modular care pathways.",
    longDescription:
      "Led a 2-person engineering team formulating the product roadmap, symptom-checker decision trees, physician scheduling module, and subscription tiering.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "REST APIs"],
    image: "/images/securehealth.png",
    githubUrl: "https://github.com/tripathidisha61-cloud",
    devStatus: "Prototype",
    featured: true,
    architecture:
      "Patient React SPA -> Secure FastAPI Gateway -> Symptom Decision Engine & Rule Matrix -> Encrypted PostgreSQL Health Vault -> Doctor Consultation Scheduling Service",
    highlights: [
      "Guided clinical triage decision tree covering common acute symptom trajectories",
      "Role-based access control (RBAC) separating patient health records from public provider directories",
      "Automated appointment booking logic with slot collision detection",
      "Designed and led full product lifecycle with a 2-person development squad",
    ],
    challengesSolved: [
      "Architected zero-leakage patient metadata segregation with schema-level tenant partitioning",
      "Engineered robust fallback to emergency helplines for high-risk triage flags",
    ],
  },
  {
    id: "campuspilot-ai",
    title: "CampusPilot AI",
    description:
      "Context-aware student resource indexing and autonomous Q&A platform for academic curricula, timetables, and campus workflows.",
    longDescription:
      "Vector-indexed academic assistant providing contextual semantic search across engineering syllabi, circulars, and departmental resources.",
    technologies: ["Python", "LangChain", "FastAPI", "React", "ChromaDB"],
    image: "/images/campuspilot.png",
    githubUrl: "https://github.com/tripathidisha61-cloud",
    devStatus: "Prototype",
    featured: false,
    architecture:
      "Campus Documents / Syllabi -> PyPDF / Markdown Ingestion -> Semantic Chunking -> ChromaDB Vector Store -> FastAPI Query Router -> React Chatbot Interface",
    highlights: [
      "Fast semantic retrieval across 500+ pages of academic curricula and college circulars",
      "Strict citation attribution referencing exact academic calendar pages and circular numbers",
      "Low-latency response streaming via Server-Sent Events (SSE)",
    ],
    challengesSolved: [
      "Resolved hallucination issues by enforcing strict contextual boundaries and retrieval threshold scores",
    ],
  },
];

export const GSOC_ROADMAP: RoadmapMilestone[] = [
  {
    phase: "Phase 1",
    title: "Threat Intelligence & Honeynet Architecture Deep-Dive",
    period: "Q3 - Q4 2026",
    status: "Completed",
    description:
      "Conducted extensive analysis of distributed honeypot telemetry, sensor data capture mechanisms, and open-source threat analysis stacks.",
    details: [
      "Studied The Honeynet Project's core architectures and sensor pipelines",
      "Set up isolated Dockerized honeypot environments for behavioral packet inspection",
      "Documented attack vector classifications for automated telemetry triage",
    ],
    tag: "Telemetry Research",
  },
  {
    phase: "Phase 2",
    title: "Upstream Open-Source Contributions & Issue Triage",
    period: "Q1 2027",
    status: "In Progress",
    description:
      "Active engagement with target open-source repositories: fixing documentation gaps, resolving beginner-friendly issues, and testing sensor plugins.",
    details: [
      "Contributing bug fixes and unit test suites to open-source threat intelligence tools",
      "Participating in developer discussions and community triage channels",
      "Benchmarking log ingestion pipelines for performance bottlenecks",
    ],
    tag: "Active Contributions",
  },
  {
    phase: "Phase 3",
    title: "Formal Proposal Formulation & Mentor Alignment",
    period: "Q2 2027",
    status: "Upcoming",
    description:
      "Drafting a comprehensive, production-grade GSoC 2027 project specification focusing on automated telemetry clustering and sensor intelligence.",
    details: [
      "Iterating on system architecture blueprints and milestone timelines",
      "Soliciting feedback from community mentors and senior maintainers",
      "Refining deliverables, test harnesses, and documentation roadmaps",
    ],
    tag: "Proposal & Mentorship",
  },
  {
    phase: "Phase 4",
    title: "GSoC 2027 Project Execution & Upstream Release",
    period: "Summer 2027",
    status: "Upcoming",
    description:
      "Dedicated full-time summer implementation phase delivering production-ready, peer-reviewed open-source modules.",
    details: [
      "End-to-end coding, unit testing, and integration verification",
      "Mid-term and final project evaluations and documentation handoff",
      "Long-term maintenance and community adoption advocacy",
    ],
    tag: "Summer Execution",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "gfg-rkgit",
    role: "Student Member / Lead",
    organization: "GeeksforGeeks Student Chapter — RKGIT",
    period: "2023 - Present",
    location: "Ghaziabad, India",
    description: [
      "Mentored junior undergraduates in Data Structures, Algorithms, and foundational C++/Python programming.",
      "Shared high-quality technical resources, problem sheets, and event updates across collegiate student networks.",
      "Spearheaded promotion and execution of technical webinars, workshops, and competitive coding contests.",
    ],
    tags: ["DSA", "C++", "Mentorship", "Community Leadership"],
  },
  {
    id: "nss-coordinator",
    role: "Event Coordinator",
    organization: "National Service Scheme (NSS)",
    period: "2023 - 2024",
    location: "RKGIT Campus",
    description: [
      "Successfully coordinated a campus-wide academic quiz competition engaging 100+ active student participants.",
      "Managed scheduling, volunteer mobilization, venue logistics, and institutional administrative permissions.",
    ],
    tags: ["Event Leadership", "Logistics", "Operations", "Team Management"],
  },
  {
    id: "tech-communities",
    role: "Active Member & Contributor",
    organization: "College Technical Societies & Coding Bodies",
    period: "2023 - Present",
    location: "RKGIT Campus",
    description: [
      "Organized open-source awareness seminars and hands-on Git/GitHub onboarding sessions for 150+ students.",
      "Contributed to collegiate hackathon logistics, judging coordination, and automated scoring infrastructure.",
    ],
    tags: ["Open Source", "Hackathons", "Git/GitHub"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon (SIH 2026) — Internal Level Cleared",
    issuer: "Ministry of Education & RKGIT Campus Screening",
    date: "2026",
    description:
      "Cleared the rigorous internal college qualification round of Smart India Hackathon (SIH 2026), presenting technology-driven solutions for real-world impact.",
    badge: "SIH 2026 Cleared",
  },
  {
    id: "gsoc-2027",
    title: "Google Summer of Code (GSoC 2027) — Preparation & Open Source",
    issuer: "Open Source Organizations & The Honeynet Project",
    date: "2026 - 2027",
    description:
      "Actively analyzing threat intelligence telemetry and honeypot architectures to formulate a competitive Google Summer of Code (GSoC 2027) project proposal.",
    badge: "GSoC 2027 Aspirant",
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon (SIH 2025) — Participant",
    issuer: "National Hackathon Initiative",
    date: "2025",
    description:
      "Collaborated on technology-driven software concepts designed for community health monitoring and disaster preparedness.",
    badge: "National Participant",
  },
  {
    id: "flutter-dart",
    title: "Getting Started with Flutter & Dart Certification",
    issuer: "Certified Credential",
    date: "2024",
    description:
      "Demonstrated core competence in cross-platform mobile development, reactive UI architecture, and Dart object-oriented paradigms.",
    badge: "Certified",
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const RECRUITER_SUMMARY = {
  name: "Disha Tripathi",
  role: "Software Developer | AI/ML Enthusiast",
  education: "B.Tech Computer Science and Engineering (3rd Year)",
  institution: "Raj Kumar Goel Institute of Technology, Ghaziabad",
  cgpa: "8.8 / 10",
  graduating: "2028",
  status: "Actively seeking Software Engineering & AI/ML Summer 2025/2026 Internships",
  coreStrengths: [
    "High-Performance Python & C++ Algorithmic Problem Solving (311+ LeetCode problems)",
    "Full-Stack Web Engineering with Next.js 14, React, TypeScript & FastAPI",
    "Applied AI/ML: Retrieval-Augmented Generation (RAG), Vector Embeddings, LangChain",
    "Cloud & Systems: Docker, Linux, AWS (EC2, S3), GitHub Actions CI/CD",
  ],
  topProjects: [
    {
      name: "RepoMedic AI",
      focus: "Intelligent AST diagnostic assistant for automated PR remediation",
      stack: "FastAPI, Next.js, Docker, RAG, GitHub API",
    },
    {
      name: "Live Hackathon Leaderboard",
      focus: "Sub-100ms real-time scoring engine with WebSocket telemetry",
      stack: "Next.js, TypeScript, PostgreSQL, WebSockets",
    },
    {
      name: "SecureHealth",
      focus: "Telehealth clinical triage decision tree with RBAC health vault",
      stack: "FastAPI, React, PostgreSQL",
    },
  ],
  verifiedMetrics: [
    { label: "Academic CGPA", value: "8.8 / 10" },
    { label: "LeetCode Solved", value: "311+ Problems" },
    { label: "National Hackathon", value: "SIH 2026 (Internal Cleared)" },
    { label: "Open Source Target", value: "GSoC 2027 Aspirant" },
  ],
};
