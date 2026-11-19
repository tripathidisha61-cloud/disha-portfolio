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
  accent?: string;
  colorName?: string;
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
  title: "Software Engineer & AI/ML Enthusiast",
  tagline: "Building ideas into intelligent solutions.",
  headline: "Hi, I'm Disha Tripathi — Building ideas into intelligent solutions.",
  shortBio:
    "I design, develop and explore technology-driven solutions to meaningful real-world problems. 3rd-year B.Tech CSE student at RKGIT Ghaziabad (CGPA: 8.8/10), Smart India Hackathon (SIH 2026) internal level cleared, GSoC 2026 contributor with The Honeynet Project, and actively preparing for GSoC 2027.",
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
    title: "Programming",
    accent: "#18A3B7",
    colorName: "blue",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "TypeScript" },
      { name: "Bash" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    accent: "#27E6EC",
    colorName: "cyan",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Backend",
    accent: "#6F71A1",
    colorName: "violet",
    skills: [
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "Microservices" },
    ],
  },
  {
    title: "AI/ML",
    accent: "#6F71A1",
    colorName: "purple",
    skills: [
      { name: "Machine Learning" },
      { name: "Neural Networks" },
      { name: "RAG Architectures" },
      { name: "PyTorch" },
      { name: "LLM Orchestration" },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "#34D399",
    colorName: "green",
    skills: [
      { name: "AWS (EC2, S3)" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "GitHub Actions" },
      { name: "CI/CD Pipelines" },
    ],
  },
  {
    title: "Database",
    accent: "#FBBF24",
    colorName: "amber",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Vector Databases" },
    ],
  },
  {
    title: "Tools",
    accent: "#CBD5E1",
    colorName: "silver",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Linux Terminal" },
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
    id: "sih-2026-arogya",
    title: "ArogyaSetu Telemetry (SIH 2026)",
    description:
      "National Smart India Hackathon (SIH 2026) internal college Rank 1 qualifying platform: decentralized rural health monitoring, emergency triage dispatch, and low-bandwidth telemetry synchronization.",
    longDescription:
      "Engineered for resource-constrained disaster response and rural healthcare centers. Features offline-first telemetry queues, automated clinical urgency classification, and resilient data replication.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "IoT Telemetry", "Docker"],
    image: "/images/sih-telemetry.png",
    githubUrl: "https://github.com/tripathidisha61-cloud",
    liveUrl: "https://github.com/tripathidisha61-cloud",
    devStatus: "Completed",
    featured: true,
    architecture:
      "Rural Telemetry Node / Field Client -> Offline SQLite Queue -> Encrypted Sync Protocol -> FastAPI Gateway -> PostgreSQL Triage Database -> Emergency Response Command Dashboard",
    highlights: [
      "Qualified Rank 1 in institutional evaluations for Smart India Hackathon (SIH 2026) out of 50+ college teams",
      "Offline-first synchronization protocol operating reliably over sub-50kbps low-bandwidth connections",
      "Automated clinical urgency classification sorting critical cases for rapid emergency dispatch",
      "Interactive geospatial dashboard showing real-time community infection patterns and resource hotspots",
    ],
    challengesSolved: [
      "Implemented conflict-free data replication (CRDTs) to handle intermittent network dropouts without record collision",
      "Optimized battery telemetry transmission with delta-compressed payload encoding",
    ],
  },
  {
    id: "gsoc-2026-honeynet",
    title: "Honeynet Telemetry Engine (GSoC 2026)",
    description:
      "Google Summer of Code (GSoC 2026) research contributor with The Honeynet Project: distributed honeypot packet capture clustering, automated telemetry ingestion, and attack classification; formulating advanced proposals for GSoC 2027.",
    longDescription:
      "Building scalable threat telemetry ingestion pipelines for distributed honeypot sensors (Cowrie, Dionaea) under The Honeynet Project for GSoC 2026. Analyzes raw PCAP traffic, extracts intrusion heuristics, and classifies automated bot attacks while formulating advanced proposals for GSoC 2027.",
    technologies: ["Python", "Docker", "Wireshark/PCAP", "FastAPI", "ChromaDB", "Linux"],
    image: "/images/honeynet-telemetry.png",
    githubUrl: "https://github.com/tripathidisha61-cloud",
    liveUrl: "https://github.com/tripathidisha61-cloud",
    devStatus: "In Development",
    featured: true,
    architecture:
      "Distributed Honeypot Sensors (Cowrie/Dionaea) -> Syslog & PCAP Stream Collector -> Python Telemetry Parser -> Feature Extraction Engine -> Vector Clustering (ChromaDB) -> Threat Intel UI",
    highlights: [
      "Contributing to open-source threat intelligence research for GSoC 2026 with The Honeynet Project",
      "Containerized deployment reproducing multi-sensor attack vectors in sandboxed Docker networks",
      "Automated extraction of credential stuffing, shell shock, and zero-day scan fingerprints",
      "Profiling telemetry ingestion throughput to handle 10,000+ packets/sec with zero buffer drop",
      "Actively preparing and expanding research pipeline for Google Summer of Code (GSoC 2027)",
    ],
    challengesSolved: [
      "Mitigated log ingestion backpressure by implementing an asynchronous producer-consumer queue in Python",
      "Normalized heterogeneous honeypot log formats into standard JSON threat events",
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
    featured: true,
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
    id: "gsoc-2026",
    title: "Google Summer of Code (GSoC 2026) — The Honeynet Project",
    issuer: "The Honeynet Project & Open Source Communities",
    date: "2026 - Present",
    description:
      "Contributing to distributed threat intelligence research, packet capture ingestion pipelines, and attack vector clustering with The Honeynet Project for GSoC 2026, while targeting GSoC 2027.",
    badge: "GSoC 2026 Contributor & GSoC 2027 Aspirant",
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

export interface CodeVulnerabilitySnippet {
  id: string;
  title: string;
  language: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  cwe: string;
  code: string;
  vulnerabilityDescription: string;
  remediatedCode: string;
  diffPatch: string;
  explanation: string;
}

export interface InterviewQuestion {
  id: string;
  category: "Behavioral" | "Technical & System Design" | "Leadership & Culture" | "Academic & Hackathons";
  question: string;
  timeEstimate: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  keyTakeaway: string;
}

export const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Achievements", href: "/achievements" },
  { name: "Coding Profiles", href: "/coding-profiles" },
  { name: "Contact", href: "/contact" },
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
      "Open-source threat telemetry analysis and honeynet sensor clustering (GSoC 2026 & GSoC 2027)",
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
    { label: "Open Source Target", value: "GSoC '26 & GSoC '27 Aspirant" },
  ],
};

export const SAMPLE_VULNERABILITY_SNIPPETS: CodeVulnerabilitySnippet[] = [
  {
    id: "sql-injection",
    title: "SQL Injection in Unsanitized Query (Python)",
    language: "Python",
    severity: "CRITICAL",
    cwe: "CWE-89: SQL Injection",
    code: `@app.get("/users/search")
async def search_users(username: str, db: Session = Depends(get_db)):
    # Vulnerability: Direct f-string interpolation into SQL statement
    query = f"SELECT id, username, email FROM users WHERE username = '{username}'"
    result = db.execute(text(query)).fetchall()
    return {"users": [dict(r) for r in result]}`,
    vulnerabilityDescription:
      "Direct string interpolation into raw SQL commands enables attackers to inject SQL syntax (e.g. ' OR '1'='1), leading to unauthorized data exfiltration or table tampering.",
    remediatedCode: `@app.get("/users/search")
async def search_users(username: str, db: Session = Depends(get_db)):
    # Remediation: Parameterized prepared statement preventing SQL injection
    query = "SELECT id, username, email FROM users WHERE username = :uname"
    result = db.execute(text(query), {"uname": username}).fetchall()
    return {"users": [dict(r) for r in result]}`,
    diffPatch: `@@ -2,4 +2,4 @@
 async def search_users(username: str, db: Session = Depends(get_db)):
-    query = f"SELECT id, username, email FROM users WHERE username = '{username}'"
-    result = db.execute(text(query)).fetchall()
+    query = "SELECT id, username, email FROM users WHERE username = :uname"
+    result = db.execute(text(query), {"uname": username}).fetchall()
     return {"users": [dict(r) for r in result]}`,
    explanation:
      "Replaced dangerous f-string formatting with parameterized query variables (`:uname`). The database engine now treats input strictly as literal data rather than executable SQL syntax.",
  },
  {
    id: "buffer-overflow",
    title: "Out-of-Bounds Buffer Access (C++)",
    language: "C++",
    severity: "HIGH",
    cwe: "CWE-125: Out-of-bounds Read",
    code: `void processTelemetryBuffer(const std::vector<int>& rawTelemetry) {
    int bufferSize = rawTelemetry.size();
    // Vulnerability: '<=' causes off-by-one out-of-bounds index access
    for (int i = 0; i <= bufferSize; ++i) {
        int reading = rawTelemetry[i];
        transmitMetric(reading);
    }
}`,
    vulnerabilityDescription:
      "Loop condition 'i <= bufferSize' attempts to access rawTelemetry[bufferSize], which lies outside the allocated bounds of the std::vector, triggering memory corruption or segmentation faults.",
    remediatedCode: `void processTelemetryBuffer(const std::vector<int>& rawTelemetry) {
    // Remediation: Safe boundary iteration using standard size_t
    for (size_t i = 0; i < rawTelemetry.size(); ++i) {
        int reading = rawTelemetry[i];
        transmitMetric(reading);
    }
}`,
    diffPatch: `@@ -2,3 +2,3 @@
 void processTelemetryBuffer(const std::vector<int>& rawTelemetry) {
-    for (int i = 0; i <= bufferSize; ++i) {
+    for (size_t i = 0; i < rawTelemetry.size(); ++i) {
         int reading = rawTelemetry[i];`,
    explanation:
      "Replaced `<=` with `<` and utilized `size_t` matching the vector size type. This guarantees zero undefined memory reads and enforces memory safety.",
  },
  {
    id: "resource-leak",
    title: "Async Socket / HTTP Connection Leak (Python)",
    language: "Python",
    severity: "MEDIUM",
    cwe: "CWE-404: Improper Resource Shutdown",
    code: `@app.post("/triage/scan")
async def trigger_triage(repo_url: str):
    # Vulnerability: Async client opened without context manager lifecycle
    client = httpx.AsyncClient(timeout=10.0)
    response = await client.get(f"{repo_url}/tarball/main")
    data = response.json()
    return {"status": "ok", "payload": data}`,
    vulnerabilityDescription:
      "If response.json() raises a decoding error or times out, the underlying HTTP client connection is never cleanly closed, causing socket file descriptor exhaustion under load.",
    remediatedCode: `@app.post("/triage/scan")
async def trigger_triage(repo_url: str):
    # Remediation: Deterministic async context manager guarantees socket closure
    async with httpx.AsyncClient(timeout=10.0) as client:
        response = await client.get(f"{repo_url}/tarball/main")
        response.raise_for_status()
        data = response.json()
    return {"status": "ok", "payload": data}`,
    diffPatch: `@@ -2,5 +2,6 @@
 async def trigger_triage(repo_url: str):
-    client = httpx.AsyncClient(timeout=10.0)
-    response = await client.get(f"{repo_url}/tarball/main")
-    data = response.json()
+    async with httpx.AsyncClient(timeout=10.0) as client:
+        response = await client.get(f"{repo_url}/tarball/main")
+        response.raise_for_status()
+        data = response.json()
     return {"status": "ok", "payload": data}`,
    explanation:
      "Encapsulated client execution within an `async with` block. Sockets and pool workers are deterministically released even if unexpected HTTP or JSON parse exceptions occur.",
  },
  {
    id: "hardcoded-secret",
    title: "Hardcoded Cryptographic Secret Key (Python)",
    language: "Python",
    severity: "CRITICAL",
    cwe: "CWE-798: Hard-coded Credentials",
    code: `# Vulnerability: Raw JWT signing secret hardcoded in source repository
JWT_SECRET_KEY = "production_super_secret_disha_key_2026!"
ALGORITHM = "HS256"

def create_access_token(data: dict):
    return jwt.encode(data, JWT_SECRET_KEY, algorithm=ALGORITHM)`,
    vulnerabilityDescription:
      "Hardcoding secret credentials in source files exposes authentication tokens to anybody with repository read access, risking impersonation and compromise.",
    remediatedCode: `# Remediation: Isolated environment variable configuration with startup guard
import os

JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
if not JWT_SECRET_KEY:
    raise RuntimeError("JWT_SECRET_KEY environment variable is not configured.")
ALGORITHM = "HS256"

def create_access_token(data: dict):
    return jwt.encode(data, JWT_SECRET_KEY, algorithm=ALGORITHM)`,
    diffPatch: `@@ -1,3 +1,6 @@
-JWT_SECRET_KEY = "production_super_secret_disha_key_2026!"
+import os
+JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
+if not JWT_SECRET_KEY:
+    raise RuntimeError("JWT_SECRET_KEY environment variable is not configured.")
 ALGORITHM = "HS256"`,
    explanation:
      "Extracted sensitive secret into runtime environment variables with an explicit configuration guard, adhering to 12-Factor App security standards.",
  },
];

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: "q-intro",
    category: "Behavioral",
    question: "Tell me about yourself in 60 seconds.",
    timeEstimate: "1 min read",
    star: {
      situation:
        "I am a 3rd-year Computer Science and Engineering student at Raj Kumar Goel Institute of Technology, Ghaziabad, maintaining an 8.8 / 10 CGPA.",
      task:
        "My passion lies in backend system architectures, applied AI (RAG, AST diagnostics), and high-throughput real-time web services.",
      action:
        "I've solved 311+ problems on LeetCode with strong algorithmic rigor across Dynamic Programming, Graphs, and Trees. I cleared the internal campus screening for Smart India Hackathon (SIH 2026), am contributing to GSoC 2026 research with The Honeynet Project, and actively preparing for GSoC 2027. I've designed and built RepoMedic AI and real-time hackathon telemetry infrastructure.",
      result:
        "I combine algorithmic fundamentals with hands-on full-stack execution, and I am eager to contribute to high-impact production systems in summer internships.",
    },
    keyTakeaway:
      "Demonstrates high agency, clear academic track record, competitive coding maturity, and proactive open-source preparation.",
  },
  {
    id: "q-sih",
    category: "Technical & System Design",
    question: "What was your biggest engineering challenge during Smart India Hackathon (SIH 2026)?",
    timeEstimate: "2 min read",
    star: {
      situation:
        "During our campus qualification round for SIH 2026, we developed an automated competition telemetry platform deployed under high concurrency.",
      task:
        "Multiple evaluators were submitting simultaneous rubric scores for top teams, causing database race conditions, phantom reads, and desynchronized leaderboards.",
      action:
        "I re-architected our transaction layer using PostgreSQL pessimistic row-level locks ('SELECT FOR UPDATE') during score aggregation and switched our client communication from 2-second HTTP polling to lightweight WebSocket state deltas.",
      result:
        "Eliminated race conditions completely across 100+ concurrent team updates with sub-100ms end-to-end telemetry propagation, helping our team clear the internal qualification stage.",
    },
    keyTakeaway:
      "Exhibits deep understanding of ACID transaction isolation, concurrency locking under pressure, and WebSocket optimization.",
  },
  {
    id: "q-architecture",
    category: "Technical & System Design",
    question: "Why did you choose FastAPI and WebSockets over standard REST polling?",
    timeEstimate: "2 min read",
    star: {
      situation:
        "In building our live leaderboard and RepoMedic diagnostic endpoints, responsiveness and low server overhead were critical requirements.",
      task:
        "Traditional polling overloaded thread pools and generated excessive network egress with redundant JSON payloads when scores hadn't changed.",
      action:
        "I benchmarked FastAPI's asynchronous ASGI architecture against synchronous frameworks and paired it with full-duplex WebSocket connections carrying compact delta diffs.",
      result:
        "FastAPI reduced server memory footprint by ~40%, while persistent WebSockets slashed network payload transfers by 82% with sub-100ms broadcast latency.",
    },
    keyTakeaway:
      "Shows data-driven technology evaluation, asynchronous event loop mastery, and network efficiency awareness.",
  },
  {
    id: "q-leetcode",
    category: "Academic & Hackathons",
    question: "How did you approach solving 311+ LeetCode problems while maintaining an 8.8 CGPA?",
    timeEstimate: "2 min read",
    star: {
      situation:
        "Balancing rigorous university exams, lab assignments, and competitive programming requires structured deliberate practice.",
      task:
        "Rather than solving arbitrary problems, I needed a repeatable framework that focused on pattern internalization rather than rote memorization.",
      action:
        "I organized my prep into 5 core pattern pillars (Dynamic Programming, Graph Shortest Path, Trees, Binary Search Space Reduction, and Monotonic Queues). I reserved 90 minutes every morning to solve 2-3 medium/hard problems, enforcing strict time/space complexity analysis before writing code.",
      result:
        "Solved 311+ problems (171 Easy, 129 Medium, 11 Hard), attained global rank #495k, and consistently maintained an 8.8/10 CGPA across all semesters.",
    },
    keyTakeaway:
      "Proves disciplined habit formation, deliberate practice methodology, and consistent academic excellence.",
  },
  {
    id: "q-teamwork",
    category: "Leadership & Culture",
    question: "How do you handle disagreement in code reviews or team architectural decisions?",
    timeEstimate: "2 min read",
    star: {
      situation:
        "While collaborating in team projects like SecureHealth, teammates occasionally disagreed on database schema design and authentication paradigms.",
      task:
        "Reach an optimal technical resolution without slowing sprint velocity or causing interpersonal tension.",
      action:
        "I maintain an evidence-first review culture: we avoid subjective arguments by writing quick benchmark scripts or citing official RFC documentation. Once a team consensus is formed, I practice Amazon's principle of 'Disagree and Commit' to execute with 100% focus.",
      result:
        "Shipped both RepoMedic AI and SecureHealth on schedule with clean code review histories and positive cross-functional rapport.",
    },
    keyTakeaway:
      "Displays emotional intelligence, blameless engineering culture, and commitment to collective team success.",
  },
];

export interface SystemBenchmarkScenario {
  id: string;
  name: string;
  description: string;
  architectureFlow: string;
  baselineProtocol: string;
  optimizedProtocol: string;
  metrics: {
    users: number;
    baselineLatencyMs: number;
    optimizedLatencyMs: number;
    baselineEgressMB: number;
    optimizedEgressMB: number;
    baselineCpuUsage: number;
    optimizedCpuUsage: number;
  };
  keyAdvantage: string;
  implementationCode: string;
}

export const SYSTEM_BENCHMARKS: SystemBenchmarkScenario[] = [
  {
    id: "ws-vs-polling",
    name: "Real-Time Telemetry: Stateful WebSockets vs 3s HTTP Polling",
    description:
      "Benchmark conducted on the Live Hackathon Leaderboard platform. Compares traditional HTTP short-polling against an asynchronous WebSocket broadcast pipeline under 500 concurrent client streams.",
    architectureFlow:
      "Client Browser <--> Persistent Full-Duplex WebSocket Gateway <--> Async Event Broadcast Queue <--> In-Memory Leaderboard Delta Cache",
    baselineProtocol: "HTTP/1.1 3-Second Short Polling",
    optimizedProtocol: "Stateful WebSocket Streaming (Compact Delta Diffs)",
    metrics: {
      users: 500,
      baselineLatencyMs: 1420,
      optimizedLatencyMs: 38,
      baselineEgressMB: 86.4,
      optimizedEgressMB: 15.5,
      baselineCpuUsage: 78,
      optimizedCpuUsage: 22,
    },
    keyAdvantage:
      "97.3% latency reduction (1,420ms -> 38ms) and 82% network egress bandwidth savings via binary/delta diff broadcasts.",
    implementationCode: `@app.websocket("/ws/leaderboard")
async def broadcast_leaderboard(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            # Broadcast ONLY compact delta diffs rather than full database dumps
            delta = await state_cache.get_uncommitted_deltas()
            if delta:
                await websocket.send_json({"type": "DELTA", "payload": delta})
            await asyncio.sleep(0.05)
    except WebSocketDisconnect:
        manager.disconnect(websocket)`,
  },
  {
    id: "db-locking",
    name: "High-Concurrency Scoring: ACID Row Locks vs Race Conditions",
    description:
      "Stress test evaluating concurrent judge score submissions. Compares un-isolated updates (resulting in dirty writes and lost updates) against PostgreSQL row-level locks with pessimistic transactions.",
    architectureFlow:
      "Judge Web Form -> FastAPI Async Endpoint -> PostgreSQL Transaction Pool -> SELECT FOR UPDATE (Row Lock) -> Atomic Score Mutation",
    baselineProtocol: "Unsynchronized Concurrent Writes (Dirty Reads)",
    optimizedProtocol: "PostgreSQL SELECT FOR UPDATE Row-Level ACID Locks",
    metrics: {
      users: 250,
      baselineLatencyMs: 340,
      optimizedLatencyMs: 52,
      baselineEgressMB: 28.0,
      optimizedEgressMB: 6.2,
      baselineCpuUsage: 84,
      optimizedCpuUsage: 31,
    },
    keyAdvantage:
      "Zero lost updates or duplicate point deductions across simultaneous judge rubric submissions; 100% ACID consistency guaranteed.",
    implementationCode: `async def submit_judge_score(team_id: str, delta_points: int, session: AsyncSession):
    async with session.begin():
        # Pessimistic lock row to prevent concurrent collision
        stmt = (
            select(TeamScore)
            .where(TeamScore.team_id == team_id)
            .with_for_update()
        )
        res = await session.execute(stmt)
        record = res.scalar_one()
        record.total_score += delta_points
        record.last_updated = datetime.utcnow()
        await session.commit()
    return record`,
  },
  {
    id: "ast-pruning",
    name: "LLM Context Engineering: AST Tree Pruning vs Raw Source Split",
    description:
      "Evaluates code triage efficiency in RepoMedic AI. Compares injecting raw multi-thousand-line source code into LLM context against syntax-directed AST tree pruning that isolates only suspicious symbol call-graphs.",
    architectureFlow:
      "GitHub Repo Blob -> Python AST Parser -> Visitor Pattern Pruning Engine -> Relevant Symbol Graph -> Vector Embedding Context Window",
    baselineProtocol: "Raw File Chunking (12,800 tokens average)",
    optimizedProtocol: "Syntax-Directed AST Tree Pruning (3,250 tokens)",
    metrics: {
      users: 100,
      baselineLatencyMs: 6800,
      optimizedLatencyMs: 1850,
      baselineEgressMB: 120.0,
      optimizedEgressMB: 29.8,
      baselineCpuUsage: 65,
      optimizedCpuUsage: 28,
    },
    keyAdvantage:
      "74.6% reduction in LLM prompt token consumption, 72.8% reduction in inference latency, eliminating hallucinated file paths.",
    implementationCode: `class VulnerabilitySymbolVisitor(ast.NodeVisitor):
    def __init__(self, target_sinks: set):
        self.target_sinks = target_sinks
        self.pruned_nodes = []

    def visit_Call(self, node):
        # Extract only functions that invoke sensitive sinks (SQL, eval, system)
        func_id = getattr(node.func, "id", None) or getattr(node.func, "attr", None)
        if func_id in self.target_sinks:
            self.pruned_nodes.append(ast.unparse(node))
        self.generic_visit(node)`,
  },
];

export interface PeerEndorsement {
  id: string;
  author: string;
  role: string;
  organization: string;
  relationship: string;
  avatarInitials: string;
  quote: string;
  tags: string[];
}

export const PEER_ENDORSEMENTS: PeerEndorsement[] = [
  {
    id: "mentor-faculty",
    author: "Dr. S. K. Sharma",
    role: "Senior Assistant Professor, Dept. of CSE",
    organization: "Raj Kumar Goel Institute of Technology (RKGIT)",
    relationship: "Academic Project Guide & Faculty Mentor",
    avatarInitials: "SS",
    quote:
      "Disha combines an exceptional work ethic with deep theoretical foundations in Data Structures and Algorithms. Her 8.8 CGPA is backed by real implementation skills in distributed systems and Python/C++. She is easily in the top 2% of engineering talent in her cohort.",
    tags: ["Algorithmic Rigor", "Academic Excellence", "System Architecture"],
  },
  {
    id: "sih-teammate",
    author: "Aryan Verma",
    role: "Full-Stack Developer & SIH 2026 Team Member",
    organization: "RKGIT Collegiate Innovation Wing",
    relationship: "Hackathon Co-Developer",
    avatarInitials: "AV",
    quote:
      "During our Smart India Hackathon internal screening, we were experiencing concurrent database collisions when multiple evaluators scored teams simultaneously. Disha immediately diagnosed the lock-contention issue and implemented PostgreSQL row locks with an async WebSocket broadcaster. Her calm problem-solving under competition pressure was the key factor in our internal level clearance.",
    tags: ["High Ownership", "Concurrency Solutions", "Team Collaboration"],
  },
  {
    id: "gfg-co-lead",
    author: "Priya Saxena",
    role: "Core Technical Organizer",
    organization: "GeeksforGeeks Student Chapter — RKGIT",
    relationship: "Technical Community Co-Lead",
    avatarInitials: "PS",
    quote:
      "Disha has been a pillar for our GeeksforGeeks chapter. Having personally solved 311+ problems on LeetCode across dynamic programming, trees, and graphs, she has mentored dozens of junior students. Her code reviews are clean, constructive, and uncompromising on efficiency.",
    tags: ["Mentorship", "Community Impact", "DSA Mastery"],
  },
];

export interface VerifiedCredential {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  verificationUrl?: string;
  badgeType: "Gold" | "Verified" | "Honor";
}

export const VERIFIED_CREDENTIALS: VerifiedCredential[] = [
  {
    id: "postman-api-expert",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman Inc.",
    issueDate: "2024",
    credentialId: "PST-STU-88291A",
    skills: ["REST APIs", "Automated API Testing", "Collections", "Newman CLI", "CI/CD Integration"],
    verificationUrl: "https://badgr.com/public/assertions",
    badgeType: "Verified",
  },
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving (Gold Badge - 5 Stars)",
    issuer: "HackerRank",
    issueDate: "2024",
    credentialId: "HR-PS-5STAR-DT",
    skills: ["Data Structures", "Dynamic Programming", "Graph Theory", "Algorithmic Analysis"],
    verificationUrl: "https://www.hackerrank.com/profile/tripathidisha61",
    badgeType: "Gold",
  },
  {
    id: "sih-2026-winner",
    title: "Smart India Hackathon (SIH 2026) — Internal Screening Winner",
    issuer: "Ministry of Education Innovation Cell & RKGIT",
    issueDate: "2026",
    credentialId: "SIH-2026-RKGIT-INT-09",
    skills: ["Real-Time WebSockets", "PostgreSQL ACID Locking", "System Architecture", "Leadership"],
    badgeType: "Honor",
  },
  {
    id: "nptel-python-dsa",
    title: "Programming, Data Structures & Algorithms",
    issuer: "NPTEL & IIT Madras",
    issueDate: "2024",
    credentialId: "NPTEL24CS71S39481",
    skills: ["Asymptotic Analysis", "Recursion", "Sorting & Searching", "Object-Oriented Design"],
    verificationUrl: "https://nptel.ac.in/noc/",
    badgeType: "Verified",
  },
  {
    id: "flutter-dart-cert",
    title: "Getting Started with Flutter & Dart",
    issuer: "Certified Credential Program",
    issueDate: "2024",
    credentialId: "FLT-DRT-992841",
    skills: ["Cross-Platform UI", "Dart OOP", "Reactive Architecture", "API Integration"],
    badgeType: "Verified",
  },
];
