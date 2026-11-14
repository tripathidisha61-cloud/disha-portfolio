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

export interface CoreCSConcept {
  subject: string;
  iconName: string;
  topics: {
    name: string;
    description: string;
    keyPrerequisites: string[];
  }[];
}

export interface DsaPattern {
  name: string;
  solvedCount: string;
  complexity: string;
  description: string;
  canonicalProblems: string[];
  keyStrategies: string[];
}

export interface RoleAlignment {
  roleId: string;
  roleTitle: string;
  targetMNCs: string[];
  matchRate: string;
  coreCompetencies: string[];
  relevantProjects: {
    name: string;
    contribution: string;
    metrics: string;
  }[];
  interviewReadiness: string[];
}

export interface EngineeringDoc {
  id: string;
  title: string;
  type: "System Design Document" | "Architecture Deep-Dive" | "Algorithmic Analysis";
  readTime: string;
  summary: string;
  problemStatement: string;
  architectureDiagram?: string[];
  designDecisions: {
    choice: string;
    alternativeConsidered: string;
    tradeoffReasoning: string;
  }[];
  metricsImpact: string[];
  tags: string[];
}

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "CS Rigor", href: "#cs-fundamentals" },
  { name: "Design Docs", href: "#design-docs" },
  { name: "MNC Fit", href: "#mnc-alignment" },
  { name: "GitHub", href: "#github" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const DSA_PATTERNS: DsaPattern[] = [
  {
    name: "Dynamic Programming & Memoization",
    solvedCount: "48+ Problems",
    complexity: "O(N) / O(N·W) Time, O(N) Space",
    description:
      "Formulating optimal substructure and overlapping subproblems across state-transition arrays, bitmask DP, and grid paths.",
    canonicalProblems: [
      "0/1 Knapsack & Subset Sum",
      "Longest Common Subsequence",
      "Coin Change (Unbounded DP)",
      "Maximum Product Subarray",
    ],
    keyStrategies: [
      "Top-down recursion with memoization hash tables",
      "Bottom-up iterative tabulation with space compression to O(1) or O(W)",
      "State-transition formulation with boundary edge-case handling",
    ],
  },
  {
    name: "Graph Algorithms & Shortest Path",
    solvedCount: "42+ Problems",
    complexity: "O(V + E) / O(E log V) Time",
    description:
      "Traversing directed, undirected, and weighted cyclic graphs with cycle detection, topological ordering, and path minimization.",
    canonicalProblems: [
      "Dijkstra's Shortest Path Algorithm",
      "Course Schedule (Topological Sort / Kahn's)",
      "Number of Connected Islands (BFS/DFS)",
      "Redundant Connection (Disjoint Set Union)",
    ],
    keyStrategies: [
      "Adjacency lists over adjacency matrices for sparse graph efficiency",
      "Priority Queue (Min-Heap) for greedy shortest-path edge relaxation",
      "Path compression & union-by-rank in Disjoint Set Union (DSU)",
    ],
  },
  {
    name: "Trees & Binary Search Trees (BST)",
    solvedCount: "65+ Problems",
    complexity: "O(N) Time, O(H) Auxiliary Space",
    description:
      "Hierarchical tree traversals, lowest common ancestor queries, validation of BST invariants, and diameter calculations.",
    canonicalProblems: [
      "Lowest Common Ancestor in Binary Tree",
      "Validate Binary Search Tree (BST Invariant)",
      "Binary Tree Level Order Traversal (BFS)",
      "Diameter of Binary Tree (Post-order DFS)",
    ],
    keyStrategies: [
      "Bottom-up divide and conquer passing subtree heights and states",
      "In-order traversal properties of BSTs yielding sorted sequences",
      "Morris Traversal for O(1) extra space tree inspections",
    ],
  },
  {
    name: "Two Pointers, Sliding Window & Monotonic Queue",
    solvedCount: "54+ Problems",
    complexity: "O(N) Time, O(1) / O(K) Space",
    description:
      "Linear time scanning techniques for subarray optimizations, duplicate elimination, and sliding window maximums.",
    canonicalProblems: [
      "3Sum / Container With Most Water",
      "Sliding Window Maximum (Monotonic Deque)",
      "Longest Substring Without Repeating Characters",
      "Trapping Rain Water",
    ],
    keyStrategies: [
      "Shrinking and expanding window boundaries with frequency maps",
      "Monotonic increasing/decreasing deques for amortized O(1) local extrema",
      "Opposite-end pointer convergence on sorted arrays",
    ],
  },
  {
    name: "Binary Search & Search Space Reduction",
    solvedCount: "38+ Problems",
    complexity: "O(log N) Time, O(1) Space",
    description:
      "Predicate-based binary searching over sorted arrays and monotonic solution spaces (search on answer).",
    canonicalProblems: [
      "Search in Rotated Sorted Array",
      "Find Minimum in Rotated Sorted Array",
      "Koko Eating Bananas (Search on Answer)",
      "Median of Two Sorted Arrays",
    ],
    keyStrategies: [
      "Precise midpoint calculation preventing 32-bit integer overflow",
      "Monotonic predicate formulation: check(mid) boolean boundary search",
      "Strict loop termination invariants: while (low <= high)",
    ],
  },
];

export const CORE_CS_TOPICS: CoreCSConcept[] = [
  {
    subject: "Operating Systems & Concurrency",
    iconName: "Cpu",
    topics: [
      {
        name: "Process Scheduling & IPC",
        description:
          "Context switching, CPU scheduling algorithms (Round Robin, CFS), pipes, shared memory, and message queues.",
        keyPrerequisites: ["Context Switching", "CFS Scheduler", "Pipes & Sockets"],
      },
      {
        name: "Concurrency, Deadlocks & Synchronization",
        description:
          "Race conditions, mutual exclusion (Mutexes, Semaphores), Coffman's conditions, and deadlock prevention algorithms.",
        keyPrerequisites: ["Mutexes & Semaphores", "Dining Philosophers", "Deadlock Detection"],
      },
      {
        name: "Memory Management & Virtual Memory",
        description:
          "Paging, page replacement policies (LRU, Clock), TLB caches, fragmentation, and virtual address translation.",
        keyPrerequisites: ["Virtual Memory", "TLB Caching", "LRU Page Replacement"],
      },
    ],
  },
  {
    subject: "Database Management Systems (DBMS)",
    iconName: "Database",
    topics: [
      {
        name: "ACID Properties & Transaction Isolation",
        description:
          "Atomicity, Consistency, Isolation levels (Read Committed, Repeatable Read, Serializable), and 2-Phase Locking (2PL).",
        keyPrerequisites: ["ACID Compliance", "Isolation Levels", "MVCC (Multi-Version)"],
      },
      {
        name: "Indexing & Query Optimization",
        description:
          "B-Trees vs B+ Trees, clustered vs non-clustered indexing, execution plans, and query cost estimation.",
        keyPrerequisites: ["B+ Tree Indexing", "Hash Indexes", "EXPLAIN ANALYZE"],
      },
      {
        name: "Normalization & Schema Design",
        description:
          "1NF through BCNF normalization, functional dependency closures, and deliberate denormalization for read scaling.",
        keyPrerequisites: ["3NF / BCNF Normalization", "Foreign Key Constraints", "Denormalization Trade-offs"],
      },
    ],
  },
  {
    subject: "Computer Networks & Distributed Systems",
    iconName: "Network",
    topics: [
      {
        name: "Transport Protocols (TCP vs UDP)",
        description:
          "3-Way Handshake, flow control (Sliding Window), congestion control (AIMD), and UDP low-latency streaming.",
        keyPrerequisites: ["TCP 3-Way Handshake", "Sliding Window", "SYN/ACK Lifecycle"],
      },
      {
        name: "Application Layer & Modern Web Protocols",
        description:
          "HTTP/1.1 pipelining, HTTP/2 multiplexing, HTTP/3 (QUIC), persistent WebSockets, and DNS resolution caches.",
        keyPrerequisites: ["HTTP/2 & HTTP/3", "WebSocket Telemetry", "DNS Lookup Hierarchy"],
      },
      {
        name: "Network Security & Encryption",
        description:
          "TLS 1.3 cryptographic handshake, symmetric vs asymmetric encryption, RSA/AES, and CORS policies.",
        keyPrerequisites: ["TLS 1.3 Handshake", "Asymmetric Encryption", "CORS & SOP"],
      },
    ],
  },
];

export const MNC_ROLES: RoleAlignment[] = [
  {
    roleId: "sde-backend",
    roleTitle: "Software Development Engineer (SDE) Intern — Backend & Distributed Systems",
    targetMNCs: ["Google", "Amazon", "Microsoft", "Uber", "Goldman Sachs"],
    matchRate: "96% Match",
    coreCompetencies: [
      "Clean asynchronous backend service engineering in Python (FastAPI) and modern C++",
      "Relational schema modeling and ACID transaction isolation with PostgreSQL & MySQL",
      "Containerized microservice packaging with multi-stage Docker builds and Linux tooling",
      "Deep problem-solving acumen verified across 311+ LeetCode algorithmic challenges",
    ],
    relevantProjects: [
      {
        name: "RepoMedic AI",
        contribution: "Engineered async static code diagnostic pipelines with AST parsers and LangChain RAG.",
        metrics: "Sub-200ms AST scanning latency, isolated Docker execution sandbox.",
      },
      {
        name: "Live Hackathon Leaderboard",
        contribution: "Designed high-concurrency scoring database locks preventing double-evaluations.",
        metrics: "Zero race conditions across 100+ concurrent team score updates.",
      },
    ],
    interviewReadiness: [
      "Rigorous Time & Space Complexity analysis on all algorithmic solutions",
      "Object-Oriented Design (SOLID principles) and concurrency thread safety",
      "Deep understanding of database indexes, query plans, and connection pooling",
    ],
  },
  {
    roleId: "full-stack",
    roleTitle: "Full-Stack Software Engineering Intern",
    targetMNCs: ["Atlassian", "Adobe", "Microsoft", "Cisco", "Salesforce"],
    matchRate: "94% Match",
    coreCompetencies: [
      "Production Next.js 14 App Router, React 18, and TypeScript component architecture",
      "Real-time event streaming and low-latency bidirectional WebSockets",
      "Responsive, accessible, and high-performance UI engineering with Tailwind CSS and Framer Motion",
      "End-to-end REST API integration, client-side caching, and optimistic state updates",
    ],
    relevantProjects: [
      {
        name: "Live Hackathon Leaderboard",
        contribution: "Built real-time telemetry dashboard with WebSocket state broadcasting.",
        metrics: "Sub-100ms score propagation, smooth 60fps layout animations.",
      },
      {
        name: "SecureHealth Platform",
        contribution: "Architected clinical symptom triage flow with physician scheduling engine.",
        metrics: "Role-based access control (RBAC), multi-step responsive care workflows.",
      },
    ],
    interviewReadiness: [
      "Clean separation of concerns between client components and server actions",
      "State management, custom hooks, and memoization optimization (useMemo, useCallback)",
      "Web performance fundamentals (LCP, FID, CLS, Core Web Vitals)",
    ],
  },
  {
    roleId: "applied-ai",
    roleTitle: "Applied AI / Machine Learning Software Intern",
    targetMNCs: ["Google", "Microsoft", "Amazon", "NVIDIA", "AI Research Labs"],
    matchRate: "92% Match",
    coreCompetencies: [
      "Retrieval-Augmented Generation (RAG) system design with vector embeddings and ChromaDB",
      "LLM orchestration with LangChain, structured prompting, and deterministic output validation",
      "Open-source threat telemetry analysis and honeynet sensor clustering (GSoC 2027)",
      "Applied data analytics, feature processing, and statistical machine learning workflows",
    ],
    relevantProjects: [
      {
        name: "RepoMedic AI",
        contribution: "Constructed context-aware code remediation agent with AST pruning and vector search.",
        metrics: "Reduced LLM prompt token bloat by 65%, generating strict unified git diffs.",
      },
      {
        name: "CampusPilot AI",
        contribution: "Vectorized academic curricula across 500+ pages with semantic chunking.",
        metrics: "Zero-hallucination guardrails with precise syllabus page citations.",
      },
    ],
    interviewReadiness: [
      "Vector similarity metrics (Cosine, Dot Product, Euclidean Distance) and indexing algorithms",
      "Prompt engineering safeguards against prompt injection and arbitrary execution",
      "Evaluation methodologies for RAG pipelines (Retrieval Precision, Recall, Faithfulness)",
    ],
  },
];

export const ENGINEERING_DOCS: EngineeringDoc[] = [
  {
    id: "doc-telemetry-locking",
    title: "High-Throughput Scoring: Managing WebSocket Telemetry & ACID Locks Under Pressure",
    type: "System Design Document",
    readTime: "4 min read",
    summary:
      "How we eliminated race conditions and achieved sub-100ms leaderboard score propagation during collegiate hackathons with 100+ active teams.",
    problemStatement:
      "During peak judging sessions, multiple judges evaluate the same team submissions simultaneously. Naive database updates caused phantom reads, lost score increments, and lagging UI state updates across participant displays.",
    architectureDiagram: [
      "Judge Client Submit",
      "Next.js API Gateway (Auth & Rubric Validation)",
      "PostgreSQL Transaction (SELECT ... FOR UPDATE Row Lock)",
      "Commit & Event Dispatch",
      "WebSocket Telemetry Hub",
      "Participant Live Scoreboard (Optimistic 60fps)",
    ],
    designDecisions: [
      {
        choice: "Pessimistic Row-Level Locks ('SELECT FOR UPDATE') during score aggregation",
        alternativeConsidered: "Optimistic Concurrency Control (Version fields)",
        tradeoffReasoning:
          "High write contention on the top 10 leaderboard teams caused repeated optimistic retry storms. Pessimistic row locks serialized updates cleanly with negligible lock duration (<15ms).",
      },
      {
        choice: "WebSocket State Deltas over Full-Table Re-fetching",
        alternativeConsidered: "Polling HTTP GET /api/leaderboard every 2 seconds",
        tradeoffReasoning:
          "HTTP polling incurred unnecessary server load and duplicate payload transfers. Lightweight WebSocket deltas reduced network egress by 82%.",
      },
    ],
    metricsImpact: [
      "Zero lost score updates across 500+ judge grading events",
      "Sub-100ms end-to-end score propagation latency from judge click to screen render",
      "Graceful degradation to HTTP long-polling when client firewalls restrict WebSockets",
    ],
    tags: ["Distributed Systems", "WebSockets", "PostgreSQL", "Concurrency", "ACID"],
  },
  {
    id: "doc-rag-ast-pruning",
    title: "Reducing LLM Hallucinations & Token Bloat: AST Pruning in Automated Code Triage",
    type: "Architecture Deep-Dive",
    readTime: "5 min read",
    summary:
      "Why naive text chunking fails on codebases, and how abstract syntax tree (AST) tree-pruning delivered deterministic git diff remediation with 65% lower token costs.",
    problemStatement:
      "When automated tools scan large source files for vulnerabilities, feeding entire files into LLMs consumes excessive context tokens and causes the model to hallucinate unrelated lines in generated patches.",
    architectureDiagram: [
      "Source Code File",
      "AST Parser (Tree-Sitter / Python AST)",
      "Syntactic Pruner (Isolate Target Function Scope)",
      "Vector Embedding & ChromaDB Retrieval",
      "Few-Shot LLM Remediation Prompt",
      "Unified Git Diff Validator & Unit Test Gate",
    ],
    designDecisions: [
      {
        choice: "Syntactic AST Chunking by function/class boundaries",
        alternativeConsidered: "Fixed 500-token sliding window text splitting",
        tradeoffReasoning:
          "Fixed windows split functions mid-expression, destroying semantic context and syntax validity. AST parsing preserves complete logical scopes.",
      },
      {
        choice: "Strict Unified Git Diff Format Output Parsing",
        alternativeConsidered: "Full file regeneration by the model",
        tradeoffReasoning:
          "Full file regeneration is slow, expensive, and risks introducing silent syntax regressions. Unified diffs isolate exact patches and can be programmatically tested with 'git apply --check'.",
      },
    ],
    metricsImpact: [
      "65% reduction in average prompt token consumption per diagnostic query",
      "94% first-pass syntax validity rate on generated pull request patches",
      "Sub-200ms static AST parsing before invoking external AI endpoints",
    ],
    tags: ["LLM Orchestration", "AST Parsing", "RAG", "Software Security", "Python"],
  },
  {
    id: "doc-rbac-telehealth",
    title: "Zero-Leakage Telehealth Architecture: Schema-Partitioned RBAC & Triage Decision Engines",
    type: "System Design Document",
    readTime: "4 min read",
    summary:
      "Architecting patient health record security, role-based access control, and automated clinical triage decision trees.",
    problemStatement:
      "Telehealth applications require strict compliance where sensitive patient symptom histories must be completely isolated from public physician booking directories while supporting automated triage prioritization.",
    architectureDiagram: [
      "Patient Intake Client",
      "FastAPI Auth Middleware (JWT + Scoped Claims)",
      "Clinical Triage Decision Tree (Rule-based Trajectories)",
      "Schema-Partitioned PostgreSQL Health Vault",
      "Encrypted Consultation Dispatch Queue",
    ],
    designDecisions: [
      {
        choice: "Deterministic Rule-based Clinical Triage Trees for Initial Screening",
        alternativeConsidered: "Unconstrained LLM chat assistant for medical diagnosis",
        tradeoffReasoning:
          "Medical liability and patient safety dictate zero tolerance for hallucinated medical advice. Deterministic decision trees ensure emergency red flags immediately prompt emergency helplines.",
      },
      {
        choice: "Database Schema-Level Tenant Segregation",
        alternativeConsidered: "Single table with 'role' column filtering",
        tradeoffReasoning:
          "Row-level filtering is vulnerable to developer query omission bugs. Schema segregation provides defense-in-depth isolation for sensitive health telemetry.",
      },
    ],
    metricsImpact: [
      "Zero patient metadata leaks between provider and public directory queries",
      "100% deterministic routing on high-risk symptom classifications",
      "Modular physician consultation scheduling with zero slot collisions",
    ],
    tags: ["System Security", "RBAC", "Healthcare Architecture", "FastAPI", "Database Design"],
  },
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
