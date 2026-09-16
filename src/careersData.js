export const careerCategories = [
  {
    "id": "all",
    "label": "All"
  },
  {
    "id": "software",
    "label": "Software Development"
  },
  {
    "id": "security",
    "label": "Cybersecurity"
  },
  {
    "id": "cloud",
    "label": "Cloud Computing"
  },
  {
    "id": "data",
    "label": "Data Science"
  },
  {
    "id": "networking",
    "label": "Networking"
  },
  {
    "id": "devops",
    "label": "DevOps"
  },
  {
    "id": "design",
    "label": "Design"
  },
  {
    "id": "ai",
    "label": "Artificial Intelligence"
  }
];

export const defaultCareerDetails = {
  "salary": {
    "entry": "R180,000",
    "mid": "R420,000",
    "senior": "R750,000+"
  },
  "workEnvironments": [
    "Tech companies",
    "Startups",
    "Agencies",
    "Remote",
    "Enterprise IT"
  ],
  "technologies": [
    "JavaScript",
    "Python",
    "Java",
    "Git",
    "Docker",
    "PostgreSQL",
    "React",
    "Node.js"
  ],
  "whatTheyDo": "Write code, review peers' code, debug issues, design system architecture, and collaborate with product managers and designers to deliver features.",
  "responsibilities": [
    "Write clean, maintainable code",
    "Participate in code reviews",
    "Debug and fix defects",
    "Design application architecture",
    "Collaborate with cross-functional teams",
    "Write automated tests"
  ],
  "skillsByLevel": {
    "beginner": [
      "Git & GitHub",
      "HTML, CSS, JavaScript",
      "Problem solving",
      "Command line basics"
    ],
    "intermediate": [
      "Data structures & algorithms",
      "REST APIs",
      "Databases (SQL)",
      "Testing & debugging"
    ],
    "advanced": [
      "System design",
      "Distributed systems",
      "CI/CD pipelines",
      "Performance optimisation"
    ]
  },
  "careerProgression": [
    "Junior Specialist",
    "Mid-Level Engineer",
    "Senior Engineer",
    "Lead Architect",
    "Engineering Manager / Director"
  ]
};

export const careers = [
  {
    "id": "software-developer",
    "title": "Software Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "blurb": "Software developers turn ideas into working software. They write clean, maintainable code, collaborate with teams, and ship products that solve real problems for users.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "code",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R180,000",
      "mid": "R420,000",
      "senior": "R750,000+"
    },
    "workEnvironments": [
      "Tech companies",
      "Startups",
      "Agencies",
      "Remote",
      "Enterprise IT"
    ],
    "technologies": [
      "JavaScript",
      "Python",
      "Java",
      "Git",
      "Docker",
      "PostgreSQL",
      "React",
      "Node.js"
    ],
    "whatTheyDo": "Write code, review peers' code, debug issues, design system architecture, and collaborate with product managers and designers to deliver features.",
    "responsibilities": [
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Debug and fix defects",
      "Design application architecture",
      "Collaborate with cross-functional teams",
      "Write automated tests"
    ],
    "skillsByLevel": {
      "beginner": [
        "Git & GitHub",
        "HTML, CSS, JavaScript",
        "Problem solving",
        "Command line basics"
      ],
      "intermediate": [
        "Data structures & algorithms",
        "REST APIs",
        "Databases (SQL)",
        "Testing & debugging"
      ],
      "advanced": [
        "System design",
        "Distributed systems",
        "CI/CD pipelines",
        "Performance optimisation"
      ]
    },
    "careerProgression": [
      "Junior Developer",
      "Mid-Level Developer",
      "Senior Developer",
      "Software Architect",
      "Engineering Manager / CTO"
    ]
  },
  {
    "id": "frontend-developer",
    "title": "Frontend Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "blurb": "Crafts interactive, accessible, and high-performance web user interfaces using modern frameworks.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "code",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R190,000",
      "mid": "R440,000",
      "senior": "R780,000+"
    },
    "workEnvironments": [
      "Digital agencies",
      "SaaS products",
      "Startups",
      "Remote teams"
    ],
    "technologies": [
      "HTML5",
      "CSS3/Sass",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Next.js",
      "Tailwind"
    ],
    "whatTheyDo": "Build visually engaging and responsive user interfaces, integrate API endpoints, optimize web performance, and uphold accessibility standards.",
    "responsibilities": [
      "Implement responsive UI layouts",
      "Integrate frontend with REST & GraphQL APIs",
      "Optimize application load speed & lighthouse scores",
      "Ensure WCAG web accessibility compliance",
      "Maintain component design systems"
    ],
    "skillsByLevel": {
      "beginner": [
        "HTML & CSS",
        "JavaScript Basics",
        "DOM Manipulation",
        "Git Version Control"
      ],
      "intermediate": [
        "React / Vue",
        "TypeScript",
        "State Management",
        "REST API Integration"
      ],
      "advanced": [
        "Next.js / SSR",
        "Web Performance",
        "Design Systems",
        "Micro-frontends"
      ]
    },
    "careerProgression": [
      "Junior Frontend Developer",
      "Mid Frontend Engineer",
      "Senior Frontend Engineer",
      "Principal UI Architect",
      "Head of Frontend"
    ]
  },
  {
    "id": "backend-developer",
    "title": "Backend Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "blurb": "Engineers server-side business logic, APIs, microservices, and database systems.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "server",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R200,000",
      "mid": "R460,000",
      "senior": "R820,000+"
    },
    "workEnvironments": [
      "Fintech",
      "Enterprise Cloud",
      "SaaS platforms",
      "E-commerce"
    ],
    "technologies": [
      "Node.js",
      "Python",
      "Java",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes"
    ],
    "whatTheyDo": "Build scalable backend services, design relational and NoSQL databases, manage authentication, and handle high-throughput server data processing.",
    "responsibilities": [
      "Design RESTful & gRPC microservices",
      "Optimize database queries & indexing",
      "Implement OAuth2 & JWT security",
      "Configure Redis caching layers",
      "Ensure API reliability & load balancing"
    ],
    "skillsByLevel": {
      "beginner": [
        "Node.js / Python",
        "SQL Basics",
        "HTTP Protocol",
        "Git"
      ],
      "intermediate": [
        "ORMs & SQL Tuning",
        "Authentication",
        "Docker Containerization",
        "Message Queues"
      ],
      "advanced": [
        "Distributed Systems",
        "Microservices",
        "Database Sharding",
        "Event-Driven Architecture"
      ]
    },
    "careerProgression": [
      "Junior Backend Dev",
      "Mid Backend Engineer",
      "Senior Backend Engineer",
      "Principal Backend Architect",
      "VP of Engineering"
    ]
  },
  {
    "id": "fullstack-developer",
    "title": "Full-Stack Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "blurb": "Develops both front-end client applications and back-end server architectures.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "stack",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R210,000",
      "mid": "R480,000",
      "senior": "R850,000+"
    },
    "workEnvironments": [
      "Startups",
      "Tech consultancies",
      "SaaS platforms",
      "Remote"
    ],
    "technologies": [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Tailwind"
    ],
    "whatTheyDo": "Own complete feature development across user interfaces, backend APIs, database schemas, and deployment pipelines.",
    "responsibilities": [
      "Build end-to-end web software features",
      "Design database models and API endpoints",
      "Implement responsive UI components",
      "Set up CI/CD build deployment pipelines",
      "Maintain system health & server logs"
    ],
    "skillsByLevel": {
      "beginner": [
        "HTML/CSS/JS",
        "Node.js Basics",
        "Git Basics",
        "SQL Fundamentals"
      ],
      "intermediate": [
        "React + Node stack",
        "TypeScript",
        "REST APIs & PostgreSQL",
        "Docker"
      ],
      "advanced": [
        "Cloud Deployment",
        "GraphQL",
        "Serverless",
        "Full-stack System Design"
      ]
    },
    "careerProgression": [
      "Junior Full-Stack Dev",
      "Mid Full-Stack Engineer",
      "Senior Full-Stack Lead",
      "Technical Lead",
      "CTO"
    ]
  },
  {
    "id": "cybersecurity-analyst",
    "title": "Cybersecurity Analyst",
    "category": "security",
    "categoryLabel": "Cybersecurity",
    "blurb": "Protects systems and data from threats by monitoring, analysing and responding to security incidents.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "shield",
    "roadmapId": "cybersecurity-analyst",
    "salary": {
      "entry": "R220,000",
      "mid": "R500,000",
      "senior": "R880,000+"
    },
    "workEnvironments": [
      "Security Operations Centers (SOC)",
      "Banking & Finance",
      "Healthcare",
      "Government"
    ],
    "technologies": [
      "Wireshark",
      "Splunk",
      "SIEM tools",
      "Linux",
      "Python",
      "Nmap",
      "Metasploit",
      "Firewalls"
    ],
    "whatTheyDo": "Monitor enterprise networks for suspicious activity, investigate security alerts, perform vulnerability scans, and implement incident response plans.",
    "responsibilities": [
      "Monitor Security Operations Center (SOC) dashboards",
      "Investigate security alerts & malware vectors",
      "Perform vulnerability audits & patch verifications",
      "Enforce Zero-Trust security policies",
      "Document security incident reports"
    ],
    "skillsByLevel": {
      "beginner": [
        "Network Security",
        "Linux Basics",
        "Security Essentials (CompTIA Security+)",
        "Log Analysis"
      ],
      "intermediate": [
        "SIEM / Splunk",
        "Incident Response",
        "Vulnerability Assessment",
        "Python Scripting"
      ],
      "advanced": [
        "Threat Hunting",
        "Digital Forensics",
        "Malware Analysis",
        "Zero Trust Architecture"
      ]
    },
    "careerProgression": [
      "Tier 1 SOC Analyst",
      "Tier 2 Incident Responder",
      "Senior Security Specialist",
      "Security Architect",
      "CISO"
    ]
  },
  {
    "id": "cloud-engineer",
    "title": "Cloud Engineer",
    "category": "cloud",
    "categoryLabel": "Cloud Computing",
    "blurb": "Designs, deploys and manages cloud infrastructure and services at scale.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "cloud",
    "roadmapId": "cloud-engineer",
    "salary": {
      "entry": "R230,000",
      "mid": "R520,000",
      "senior": "R900,000+"
    },
    "workEnvironments": [
      "Cloud providers",
      "Fintech",
      "Enterprise IT",
      "Consultancies"
    ],
    "technologies": [
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Python",
      "Bash",
      "Linux"
    ],
    "whatTheyDo": "Provision cloud servers, automate infrastructure with code (IaC), ensure cloud network security, and maintain multi-cloud availability.",
    "responsibilities": [
      "Deploy cloud infrastructure with Terraform",
      "Manage AWS / Azure Virtual Private Clouds (VPCs)",
      "Configure auto-scaling & load balancing",
      "Monitor cloud cost optimization & security compliance",
      "Automate backup & disaster recovery protocols"
    ],
    "skillsByLevel": {
      "beginner": [
        "AWS / Azure Fundamentals",
        "Linux Administration",
        "Networking Basics",
        "Bash Scripting"
      ],
      "intermediate": [
        "Infrastructure as Code (Terraform)",
        "Containerization (Docker)",
        "IAM Security",
        "Cloud Monitoring"
      ],
      "advanced": [
        "Kubernetes Orchestration",
        "Multi-cloud Architecture",
        "FinOps Cost Optimization",
        "Disaster Recovery"
      ]
    },
    "careerProgression": [
      "Junior Cloud Admin",
      "Cloud Systems Engineer",
      "Senior Cloud Architect",
      "Lead DevOps Architect",
      "Head of Cloud Infrastructure"
    ]
  },
  {
    "id": "data-analyst",
    "title": "Data Analyst",
    "category": "data",
    "categoryLabel": "Data Science",
    "blurb": "Turns raw data into insights that drive better business decisions.",
    "demand": "High",
    "workMode": "Remote-friendly",
    "iconType": "chart",
    "roadmapId": "data-analyst",
    "salary": {
      "entry": "R170,000",
      "mid": "R390,000",
      "senior": "R700,000+"
    },
    "workEnvironments": [
      "Corporate Strategy",
      "Marketing Agencies",
      "Fintech",
      "E-commerce"
    ],
    "technologies": [
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "Tableau",
      "Pandas",
      "Google Analytics"
    ],
    "whatTheyDo": "Query relational databases, clean unstructured datasets, build interactive visual dashboards, and report trends to executive stakeholders.",
    "responsibilities": [
      "Extract & transform data using complex SQL queries",
      "Build executive dashboards in Power BI & Tableau",
      "Perform exploratory data analysis with Python & Pandas",
      "Identify operational trends & revenue opportunities",
      "Present findings to non-technical stakeholders"
    ],
    "skillsByLevel": {
      "beginner": [
        "Advanced Excel",
        "SQL Fundamentals",
        "Data Visualization Basics",
        "Statistics"
      ],
      "intermediate": [
        "Python / Pandas",
        "Power BI / Tableau",
        "ETL Fundamentals",
        "A/B Testing"
      ],
      "advanced": [
        "Advanced SQL Analytics",
        "Predictive Modeling",
        "Data Warehousing",
        "Analytics Leadership"
      ]
    },
    "careerProgression": [
      "Junior Data Analyst",
      "Mid-Level Data Analyst",
      "Senior Business Intelligence Lead",
      "Data Analytics Manager",
      "Head of Data"
    ]
  },
  {
    "id": "data-scientist",
    "title": "Data Scientist",
    "category": "data",
    "categoryLabel": "Data Science",
    "blurb": "Builds machine learning models to solve complex problems and predict outcomes.",
    "demand": "High",
    "workMode": "Remote-friendly",
    "iconType": "brain",
    "roadmapId": "data-scientist",
    "salary": {
      "entry": "R240,000",
      "mid": "R550,000",
      "senior": "R950,000+"
    },
    "workEnvironments": [
      "AI Labs",
      "Biotech",
      "Finance",
      "E-commerce",
      "Tech Research"
    ],
    "technologies": [
      "Python",
      "R",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "SQL",
      "Jupyter",
      "Spark"
    ],
    "whatTheyDo": "Build statistical models, train predictive machine learning algorithms, extract features from massive datasets, and evaluate model performance.",
    "responsibilities": [
      "Train supervised & unsupervised ML models",
      "Engineers features from unstructured data sources",
      "Perform hypothesis testing & statistical validation",
      "Deploy machine learning models via REST APIs",
      "Research cutting-edge machine learning papers"
    ],
    "skillsByLevel": {
      "beginner": [
        "Python Programming",
        "Linear Algebra & Calculus",
        "Pandas & NumPy",
        "SQL"
      ],
      "intermediate": [
        "Scikit-Learn ML",
        "Feature Engineering",
        "Hypothesis Testing",
        "Data Wrangling"
      ],
      "advanced": [
        "Deep Learning (TensorFlow/PyTorch)",
        "NLP / Computer Vision",
        "Big Data (Spark)",
        "MLOps Deployment"
      ]
    },
    "careerProgression": [
      "Junior Data Scientist",
      "Data Scientist",
      "Senior ML Scientist",
      "Principal AI Researcher",
      "Chief Data Officer"
    ]
  },
  {
    "id": "network-engineer",
    "title": "Network Engineer",
    "category": "networking",
    "categoryLabel": "Networking",
    "blurb": "Designs, configures and maintains the networks that connect systems and people.",
    "demand": "High",
    "workMode": "Hybrid",
    "iconType": "network",
    "roadmapId": "network-engineer",
    "salary": {
      "entry": "R175,000",
      "mid": "R410,000",
      "senior": "R720,000+"
    },
    "workEnvironments": [
      "Telecoms",
      "Data Centers",
      "Corporate Enterprises",
      "ISP Networks"
    ],
    "technologies": [
      "Cisco iOS",
      "Juniper",
      "TCP/IP",
      "BGP",
      "OSPF",
      "VLANs",
      "Firewalls",
      "Wireshark"
    ],
    "whatTheyDo": "Configure core switches, enterprise routers, firewalls, and VPN connections to maintain high-availability network connectivity.",
    "responsibilities": [
      "Configure Cisco / Juniper routers & switches",
      "Implement BGP, OSPF, and VLAN routing",
      "Troubleshoot network latency & packet loss",
      "Manage corporate VPN access & firewall rules",
      "Design redundant WAN/LAN network topologies"
    ],
    "skillsByLevel": {
      "beginner": [
        "TCP/IP & OSI Model",
        "CCNA Fundamentals",
        "IPv4 / IPv6 Subnetting",
        "Basic Routing"
      ],
      "intermediate": [
        "VLANs & Trunking",
        "BGP & OSPF Routing",
        "Firewalls & VPNs",
        "Network Automation (Python)"
      ],
      "advanced": [
        "Enterprise Network Architecture",
        "SD-WAN",
        "Data Center Networking",
        "CCIE Level Engineering"
      ]
    },
    "careerProgression": [
      "Junior Network Admin",
      "Network Engineer",
      "Senior Network Specialist",
      "Network Architect",
      "VP of Network Operations"
    ]
  },
  {
    "id": "devops-engineer",
    "title": "DevOps Engineer",
    "category": "devops",
    "categoryLabel": "DevOps",
    "iconType": "gear",
    "blurb": "Automates software delivery pipelines and optimizes system reliability and infrastructure integration.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "roadmapId": "cloud-engineer",
    "salary": {
      "entry": "R220,000",
      "mid": "R510,000",
      "senior": "R900,000+"
    },
    "workEnvironments": [
      "SaaS companies",
      "Fintech",
      "Enterprise software",
      "Remote teams"
    ],
    "technologies": [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana"
    ],
    "whatTheyDo": "Bridge software development and IT operations by building automated CI/CD pipelines, container clusters, and continuous monitoring systems.",
    "responsibilities": [
      "Maintain GitHub Actions / Jenkins CI/CD pipelines",
      "Manage Kubernetes production clusters",
      "Write Ansible & Terraform automation scripts",
      "Configure Prometheus & Grafana alerting dashboards",
      "Ensure 99.99% system uptime & deployment safety"
    ],
    "skillsByLevel": {
      "beginner": [
        "Linux & Shell Scripting",
        "Git Version Control",
        "Docker Containers",
        "CI/CD Basics"
      ],
      "intermediate": [
        "Kubernetes",
        "Terraform (IaC)",
        "Ansible Automation",
        "Monitoring (Prometheus/Grafana)"
      ],
      "advanced": [
        "GitOps Architecture",
        "Multi-Region Kubernetes",
        "Zero-Downtime Deployments",
        "SRE Operations"
      ]
    },
    "careerProgression": [
      "Junior DevOps Engineer",
      "DevOps Specialist",
      "Senior DevOps Engineer",
      "Principal SRE",
      "Head of Infrastructure"
    ]
  },
  {
    "id": "ai-engineer",
    "title": "AI / Machine Learning Engineer",
    "category": "ai",
    "categoryLabel": "Artificial Intelligence",
    "blurb": "Researches, develops, and deploys scalable artificial intelligence models and generative systems.",
    "demand": "Very High",
    "workMode": "Remote-friendly",
    "iconType": "ai",
    "roadmapId": "data-scientist",
    "salary": {
      "entry": "R250,000",
      "mid": "R580,000",
      "senior": "R1,000,000+"
    },
    "workEnvironments": [
      "AI Research Labs",
      "Tech Enterprises",
      "AI Startups",
      "Remote"
    ],
    "technologies": [
      "PyTorch",
      "TensorFlow",
      "OpenAI API",
      "Hugging Face",
      "LangChain",
      "Python",
      "FastAPI",
      "Docker"
    ],
    "whatTheyDo": "Fine-tune Large Language Models (LLMs), build Retrieval-Augmented Generation (RAG) pipelines, and deploy AI models to production servers.",
    "responsibilities": [
      "Fine-tune open-source LLMs (Llama, Mistral)",
      "Build RAG pipelines with Vector Databases (Pinecone/Chroma)",
      "Deploy machine learning models with FastAPI & Docker",
      "Optimize AI inference latency & token cost",
      "Integrate Generative AI into web and mobile products"
    ],
    "skillsByLevel": {
      "beginner": [
        "Python & PyTorch",
        "Machine Learning Basics",
        "Prompt Engineering",
        "API Integration"
      ],
      "intermediate": [
        "Transformers & Hugging Face",
        "Vector Databases & RAG",
        "Model Fine-tuning",
        "FastAPI Serving"
      ],
      "advanced": [
        "Distributed LLM Training",
        "MLOps Infrastructure",
        "Custom AI Architectures",
        "Chief AI Officer"
      ]
    },
    "careerProgression": [
      "Junior AI Engineer",
      "AI/ML Engineer",
      "Senior AI Systems Lead",
      "Principal AI Architect",
      "Chief AI Officer"
    ]
  },
  {
    "id": "ui-ux-designer",
    "title": "UI/UX Designer",
    "category": "design",
    "categoryLabel": "Design",
    "blurb": "Creates intuitive, beautiful user interfaces and seamless digital user experiences.",
    "demand": "High",
    "workMode": "Remote-friendly",
    "iconType": "palette",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R160,000",
      "mid": "R380,000",
      "senior": "R680,000+"
    },
    "workEnvironments": [
      "Product Agencies",
      "SaaS Tech",
      "Startups",
      "E-commerce"
    ],
    "technologies": [
      "Figma",
      "Adobe XD",
      "Protopie",
      "Miro",
      "Design Systems",
      "HTML/CSS",
      "User Research"
    ],
    "whatTheyDo": "Conduct user research, design wireframes and high-fidelity interactive prototypes in Figma, and build cohesive component design systems.",
    "responsibilities": [
      "Conduct user interviews & usability testing",
      "Create wireframes & interactive Figma prototypes",
      "Build scalable UI design systems & component kits",
      "Collaborate with developers for design handoff",
      "Audit user flows for accessibility & conversion"
    ],
    "skillsByLevel": {
      "beginner": [
        "Figma Basics",
        "Design Principles & Typography",
        "User Wireframing",
        "Color Theory"
      ],
      "intermediate": [
        "User Research & Testing",
        "Interactive Prototyping",
        "Design Systems",
        "Micro-interactions"
      ],
      "advanced": [
        "Product UX Strategy",
        "Design Operations (DesignOps)",
        "Information Architecture",
        "Head of Design"
      ]
    },
    "careerProgression": [
      "Junior UI/UX Designer",
      "Product Designer",
      "Senior UX Lead",
      "Principal Design Architect",
      "Head of User Experience"
    ]
  },
  {
    "id": "mobile-developer",
    "title": "Mobile Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "mobile",
    "icon": "📱",
    "blurb": "Build native and cross-platform apps for iOS and Android devices.",
    "summary": "Build native and cross-platform apps for iOS and Android devices.",
    "demand": "High Demand",
    "workMode": "Remote / Hybrid",
    "roadmapId": "mobile-developer",
    "salary": {
      "entry": "R280,000",
      "mid": "R480,000",
      "senior": "R750,000+"
    },
    "workEnvironments": [
      "Tech startups",
      "Digital agencies",
      "Fintech",
      "Healthcare tech",
      "Remote teams"
    ],
    "technologies": [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Dart",
      "Firebase",
      "REST APIs",
      "Xcode",
      "Android Studio"
    ],
    "whatTheyDo": "Mobile developers design and build applications for smartphones and tablets. They work across iOS and Android ecosystems, creating intuitive user experiences and integrating with backend services.",
    "responsibilities": [
      "Design and develop mobile apps for iOS and/or Android",
      "Write clean, maintainable code in Swift, Kotlin, or cross-platform frameworks",
      "Integrate REST APIs and third-party libraries",
      "Optimise app performance and battery usage",
      "Submit apps to the App Store and Google Play",
      "Write unit and UI tests",
      "Collaborate with designers on pixel-perfect UI"
    ],
    "skillsByLevel": {
      "beginner": [
        "HTML/CSS basics",
        "JavaScript fundamentals",
        "Git",
        "React Native intro",
        "Flutter basics"
      ],
      "intermediate": [
        "State management (Redux, Provider)",
        "REST API integration",
        "Native modules",
        "Push notifications",
        "App Store deployment"
      ],
      "advanced": [
        "Performance profiling",
        "Native SDK bridging",
        "Offline-first architecture",
        "CI/CD for mobile",
        "Security best practices"
      ]
    },
    "careerProgression": [
      "Junior Mobile Developer",
      "Mobile Developer",
      "Senior Mobile Developer",
      "Lead Mobile Engineer",
      "Mobile Architect"
    ]
  },
  {
    "id": "game-developer",
    "title": "Game Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "game",
    "icon": "🎮",
    "blurb": "Create interactive games for PC, console, and mobile platforms using game engines and real-time graphics.",
    "summary": "Create interactive games for PC, console, and mobile platforms using game engines and real-time graphics.",
    "demand": "Growing",
    "workMode": "Hybrid / On-site",
    "roadmapId": "game-developer",
    "salary": {
      "entry": "R250,000",
      "mid": "R450,000",
      "senior": "R720,000+"
    },
    "workEnvironments": [
      "Game studios",
      "Indie teams",
      "Educational tech",
      "VR/AR companies",
      "Simulation companies"
    ],
    "technologies": [
      "Unity",
      "Unreal Engine",
      "C#",
      "C++",
      "Blender",
      "HLSL/GLSL",
      "Photon",
      "Steam SDK"
    ],
    "whatTheyDo": "Game developers build gameplay systems, graphics, physics, and audio using game engines. They collaborate with artists, designers, and writers to deliver polished, engaging player experiences.",
    "responsibilities": [
      "Implement gameplay mechanics and systems in Unity or Unreal",
      "Write performant C# or C++ game code",
      "Integrate physics, animation, and audio systems",
      "Build UI/HUD systems and game menus",
      "Optimise rendering and memory usage for target platforms",
      "Debug and fix gameplay bugs and crashes",
      "Implement multiplayer networking where applicable"
    ],
    "skillsByLevel": {
      "beginner": [
        "C# basics",
        "Unity editor basics",
        "Game loops",
        "2D sprites and physics",
        "Scene management"
      ],
      "intermediate": [
        "3D mathematics",
        "Shader basics",
        "AI pathfinding (NavMesh)",
        "Asset pipelines",
        "Version control with Git LFS"
      ],
      "advanced": [
        "Custom render pipelines",
        "GPU profiling",
        "Multiplayer networking",
        "Procedural generation",
        "Console certification"
      ]
    },
    "careerProgression": [
      "Junior Game Developer",
      "Game Developer",
      "Senior Game Developer",
      "Lead Game Programmer",
      "Technical Director"
    ]
  },
  {
    "id": "sre",
    "title": "Site Reliability Engineer (SRE)",
    "category": "devops",
    "categoryLabel": "DevOps",
    "iconType": "shield",
    "icon": "🛡️",
    "blurb": "Apply software engineering to operations problems, ensuring services are highly available, scalable, and efficient.",
    "summary": "Apply software engineering to operations problems, ensuring services are highly available, scalable, and efficient.",
    "demand": "High Demand",
    "workMode": "Remote / Hybrid",
    "roadmapId": "cloud-engineer",
    "salary": {
      "entry": "R350,000",
      "mid": "R600,000",
      "senior": "R900,000+"
    },
    "workEnvironments": [
      "Large tech companies",
      "Financial services",
      "Cloud providers",
      "E-commerce",
      "SaaS platforms"
    ],
    "technologies": [
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "PagerDuty",
      "Python/Go",
      "Terraform",
      "Istio",
      "OpenTelemetry"
    ],
    "whatTheyDo": "SREs own the reliability of production systems. They define SLOs/SLAs, build observability stacks, reduce toil through automation, and lead incident response. They apply engineering discipline to operations.",
    "responsibilities": [
      "Define and track SLOs, SLIs, and error budgets",
      "Build and maintain observability pipelines (metrics, traces, logs)",
      "Lead incident response, RCAs, and blameless post-mortems",
      "Reduce operational toil through automation",
      "Capacity planning and performance analysis",
      "Collaborate with developers on reliability requirements",
      "Maintain on-call rotations for critical production systems"
    ],
    "skillsByLevel": {
      "beginner": [
        "Linux fundamentals",
        "Networking basics",
        "Monitoring concepts",
        "Python scripting",
        "Git"
      ],
      "intermediate": [
        "Kubernetes operations",
        "Distributed tracing",
        "Chaos engineering basics",
        "On-call practices",
        "SLO design"
      ],
      "advanced": [
        "OpenTelemetry",
        "Platform reliability at scale",
        "Runbook automation",
        "Incident management systems",
        "Multi-region reliability"
      ]
    },
    "careerProgression": [
      "Junior SRE",
      "Site Reliability Engineer",
      "Senior SRE",
      "Staff SRE",
      "Principal SRE / Engineering Manager"
    ]
  },
  {
    "id": "cloud-architect",
    "title": "Cloud Architect",
    "category": "cloud",
    "categoryLabel": "Cloud Computing",
    "iconType": "cloud",
    "icon": "🏗️",
    "blurb": "Design enterprise-grade cloud architectures that are scalable, secure, cost-efficient, and resilient.",
    "summary": "Design enterprise-grade cloud architectures that are scalable, secure, cost-efficient, and resilient.",
    "demand": "Very High Demand",
    "workMode": "Remote / Hybrid",
    "roadmapId": "cloud-engineer",
    "salary": {
      "entry": "R480,000",
      "mid": "R720,000",
      "senior": "R1,100,000+"
    },
    "workEnvironments": [
      "Large enterprises",
      "Cloud consultancies",
      "Financial institutions",
      "Government tech",
      "Multi-national corporations"
    ],
    "technologies": [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "Kubernetes",
      "Microservices",
      "CDN",
      "WAF",
      "Service mesh"
    ],
    "whatTheyDo": "Cloud architects evaluate business requirements and design cloud-native or hybrid architectures. They define reference architectures, governance frameworks, and migration strategies for organizations moving to the cloud.",
    "responsibilities": [
      "Design scalable, resilient, multi-region cloud architectures",
      "Evaluate and select cloud services for business requirements",
      "Define cloud governance, cost management, and tagging policies",
      "Lead cloud migration strategies (lift-and-shift, re-platform, re-architect)",
      "Review and approve infrastructure designs from engineering teams",
      "Create reference architectures and architecture decision records",
      "Advise on security, compliance, and disaster recovery design"
    ],
    "skillsByLevel": {
      "beginner": [
        "Cloud fundamentals (AWS/Azure)",
        "Networking basics",
        "IaaS/PaaS/SaaS concepts",
        "Terraform basics",
        "Cloud pricing models"
      ],
      "intermediate": [
        "Multi-cloud strategy",
        "Well-Architected Framework",
        "Cost optimisation",
        "Security architecture",
        "Migration planning"
      ],
      "advanced": [
        "Enterprise architecture patterns",
        "FinOps",
        "Zero-trust design",
        "Multi-region disaster recovery",
        "Architecture governance"
      ]
    },
    "careerProgression": [
      "Cloud Engineer",
      "Senior Cloud Engineer",
      "Cloud Architect",
      "Principal Architect",
      "Chief Architect"
    ]
  },
  {
    "id": "solutions-architect",
    "title": "Solutions Architect",
    "category": "cloud",
    "categoryLabel": "Cloud Computing",
    "iconType": "cloud",
    "icon": "🗺️",
    "blurb": "Design end-to-end technical solutions that align business goals with technology strategies across systems and teams.",
    "summary": "Design end-to-end technical solutions that align business goals with technology strategies across systems and teams.",
    "demand": "High Demand",
    "workMode": "Hybrid / On-site",
    "roadmapId": "cloud-engineer",
    "salary": {
      "entry": "R440,000",
      "mid": "R680,000",
      "senior": "R1,000,000+"
    },
    "workEnvironments": [
      "Consulting firms",
      "SaaS vendors",
      "Enterprise IT",
      "System integrators",
      "Banking and finance"
    ],
    "technologies": [
      "AWS/Azure/GCP",
      "Microservices",
      "APIs",
      "Integration platforms",
      "Terraform",
      "Enterprise architecture tools"
    ],
    "whatTheyDo": "Solutions architects translate complex business requirements into actionable technical designs. They work across vendors, teams, and systems to ensure coherent, integrated, and future-proof solutions.",
    "responsibilities": [
      "Elicit and translate business requirements into technical designs",
      "Create solution architecture diagrams and documentation",
      "Evaluate technology options and make build-vs-buy recommendations",
      "Present technical solutions to stakeholders and executives",
      "Ensure solutions align with security, compliance, and performance goals",
      "Support pre-sales and RFP responses in vendor environments",
      "Coordinate implementation across multiple engineering teams"
    ],
    "skillsByLevel": {
      "beginner": [
        "System design basics",
        "Cloud fundamentals",
        "API design",
        "Diagramming tools",
        "Technical writing"
      ],
      "intermediate": [
        "Integration patterns",
        "Microservices architecture",
        "Cloud cost modelling",
        "Enterprise architecture frameworks (TOGAF)",
        "Stakeholder management"
      ],
      "advanced": [
        "Enterprise transformation",
        "Vendor negotiation",
        "Portfolio architecture",
        "Executive communication",
        "Architecture reviews"
      ]
    },
    "careerProgression": [
      "Software Engineer",
      "Senior Engineer",
      "Solutions Architect",
      "Principal Solutions Architect",
      "Enterprise Architect"
    ]
  },
  {
    "id": "security-engineer",
    "title": "Security Engineer",
    "category": "security",
    "categoryLabel": "Cybersecurity",
    "iconType": "shield",
    "icon": "🔐",
    "blurb": "Build and maintain security systems, tools, and controls that protect an organization's infrastructure and applications.",
    "summary": "Build and maintain security systems, tools, and controls that protect an organization's infrastructure and applications.",
    "demand": "Very High Demand",
    "workMode": "Hybrid / Remote",
    "roadmapId": "cybersecurity-analyst",
    "salary": {
      "entry": "R320,000",
      "mid": "R560,000",
      "senior": "R850,000+"
    },
    "workEnvironments": [
      "Enterprises",
      "Banks and fintech",
      "Government",
      "Consulting firms",
      "Tech companies"
    ],
    "technologies": [
      "SIEM (Splunk/Sentinel)",
      "IAM (Okta)",
      "Firewalls",
      "WAF",
      "Vulnerability scanners",
      "Python",
      "Terraform",
      "Zero Trust"
    ],
    "whatTheyDo": "Security engineers design, implement, and operate security solutions. Unlike analysts who monitor threats, engineers build the tools and systems that prevent and detect them — from IAM systems to SIEM pipelines.",
    "responsibilities": [
      "Design and implement security controls across infrastructure and applications",
      "Build and tune SIEM detection rules and alerting pipelines",
      "Conduct threat modelling and security architecture reviews",
      "Manage identity and access management (IAM) systems",
      "Automate vulnerability scanning and patching workflows",
      "Respond to and lead remediation of security incidents",
      "Ensure compliance with standards (ISO 27001, SOC 2, PCI-DSS)"
    ],
    "skillsByLevel": {
      "beginner": [
        "Networking fundamentals",
        "Linux security basics",
        "OWASP Top 10",
        "Cryptography concepts",
        "CompTIA Security+ basics"
      ],
      "intermediate": [
        "SIEM configuration",
        "IAM systems",
        "Penetration testing basics",
        "Cloud security",
        "Incident response"
      ],
      "advanced": [
        "Zero-trust architecture",
        "Red/Blue team operations",
        "Security automation (SOAR)",
        "Threat intelligence",
        "GRC frameworks"
      ]
    },
    "careerProgression": [
      "Security Analyst",
      "Security Engineer",
      "Senior Security Engineer",
      "Security Architect",
      "CISO"
    ]
  },
  {
    "id": "penetration-tester",
    "title": "Penetration Tester / Ethical Hacker",
    "category": "security",
    "categoryLabel": "Cybersecurity",
    "iconType": "shield",
    "icon": "🕵️",
    "blurb": "Legally probe systems, networks, and applications for vulnerabilities before attackers can exploit them.",
    "summary": "Legally probe systems, networks, and applications for vulnerabilities before attackers can exploit them.",
    "demand": "Growing",
    "workMode": "Hybrid / Remote",
    "roadmapId": "cybersecurity-analyst",
    "salary": {
      "entry": "R300,000",
      "mid": "R520,000",
      "senior": "R800,000+"
    },
    "workEnvironments": [
      "Security consultancies",
      "Red teams at enterprises",
      "Government defence",
      "Bug bounty programs"
    ],
    "technologies": [
      "Kali Linux",
      "Metasploit",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "John the Ripper",
      "Cobalt Strike",
      "Python",
      "Bash"
    ],
    "whatTheyDo": "Penetration testers simulate cyberattacks to find and report exploitable vulnerabilities. They produce detailed reports for clients covering discovered flaws, exploitation paths, and remediation guidance.",
    "responsibilities": [
      "Plan and execute authorised penetration tests (black/grey/white box)",
      "Enumerate targets: ports, services, users, and shares",
      "Exploit vulnerabilities in web apps, networks, and AD environments",
      "Conduct social engineering and phishing simulations",
      "Write detailed penetration test reports with risk ratings",
      "Present findings to technical and executive audiences",
      "Retest after remediation to confirm fixes"
    ],
    "skillsByLevel": {
      "beginner": [
        "Networking (TCP/IP)",
        "Linux CLI",
        "Kali Linux setup",
        "OWASP Top 10",
        "Nmap scanning basics"
      ],
      "intermediate": [
        "Metasploit framework",
        "Web app testing (Burp Suite)",
        "Active Directory attacks",
        "Privilege escalation",
        "Report writing"
      ],
      "advanced": [
        "Custom exploit development",
        "Red team operations (C2 frameworks)",
        "Physical security assessments",
        "Advanced evasion techniques",
        "CVE research"
      ]
    },
    "careerProgression": [
      "Junior Penetration Tester",
      "Penetration Tester",
      "Senior Penetration Tester",
      "Red Team Lead",
      "Principal Security Consultant"
    ]
  },
  {
    "id": "data-engineer",
    "title": "Data Engineer",
    "category": "data",
    "categoryLabel": "Data Science",
    "iconType": "chart",
    "icon": "🔧",
    "blurb": "Build and maintain data pipelines, warehouses, and infrastructure that power analytics and machine learning.",
    "summary": "Build and maintain data pipelines, warehouses, and infrastructure that power analytics and machine learning.",
    "demand": "Very High Demand",
    "workMode": "Remote / Hybrid",
    "roadmapId": "data-scientist",
    "salary": {
      "entry": "R310,000",
      "mid": "R540,000",
      "senior": "R820,000+"
    },
    "workEnvironments": [
      "Tech companies",
      "Data-driven enterprises",
      "Financial services",
      "Retail analytics",
      "Healthcare"
    ],
    "technologies": [
      "Python",
      "Apache Spark",
      "Airflow",
      "dbt",
      "Kafka",
      "BigQuery",
      "Snowflake",
      "Redshift",
      "Postgres",
      "Docker"
    ],
    "whatTheyDo": "Data engineers design and build the data infrastructure that organisations rely on. They extract, transform, and load data from various sources into data warehouses and lakes, ensuring data quality, availability, and performance.",
    "responsibilities": [
      "Design and build scalable ETL/ELT data pipelines",
      "Integrate data from APIs, databases, and streaming sources",
      "Maintain data warehouses and lakes (Snowflake, BigQuery, Redshift)",
      "Orchestrate pipeline workflows with Apache Airflow",
      "Enforce data quality checks and monitoring",
      "Collaborate with analysts and data scientists on data modelling",
      "Optimise query performance and storage costs"
    ],
    "skillsByLevel": {
      "beginner": [
        "Python/SQL basics",
        "Git",
        "Relational databases",
        "Data modelling concepts",
        "Cloud storage basics"
      ],
      "intermediate": [
        "Apache Spark",
        "Airflow orchestration",
        "dbt transformations",
        "Streaming with Kafka",
        "Data warehouse design"
      ],
      "advanced": [
        "Real-time data platforms",
        "Data mesh architecture",
        "DataOps",
        "Multi-cloud data lakes",
        "ML feature stores"
      ]
    },
    "careerProgression": [
      "Junior Data Engineer",
      "Data Engineer",
      "Senior Data Engineer",
      "Lead Data Engineer",
      "Data Architect"
    ]
  },
  {
    "id": "database-administrator",
    "title": "Database Administrator",
    "category": "data",
    "categoryLabel": "Data Science",
    "iconType": "chart",
    "icon": "🗄️",
    "blurb": "Manage, tune, and secure databases to ensure high availability, performance, and data integrity for applications.",
    "summary": "Manage, tune, and secure databases to ensure high availability, performance, and data integrity for applications.",
    "demand": "Stable",
    "workMode": "Hybrid / On-site",
    "roadmapId": "database-administrator",
    "salary": {
      "entry": "R270,000",
      "mid": "R450,000",
      "senior": "R680,000+"
    },
    "workEnvironments": [
      "Enterprises",
      "Government",
      "Banks",
      "Healthcare",
      "ERP vendors"
    ],
    "technologies": [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle DB",
      "MongoDB",
      "Redis",
      "Azure SQL",
      "DBA tools",
      "Backup solutions"
    ],
    "whatTheyDo": "DBAs manage an organization's databases end-to-end: installation, configuration, performance tuning, backups, recovery, and security. They ensure data is always available, consistent, and protected.",
    "responsibilities": [
      "Install, configure, and maintain database systems",
      "Monitor and tune query performance and indexing strategies",
      "Plan and implement backup and disaster recovery procedures",
      "Manage database users, roles, and access controls",
      "Apply patches and version upgrades safely",
      "Migrate databases across environments and platforms",
      "Collaborate with developers on schema design and optimisation"
    ],
    "skillsByLevel": {
      "beginner": [
        "SQL fundamentals",
        "Database concepts (ACID)",
        "Basic admin for PostgreSQL/MySQL",
        "Backup and restore basics",
        "Linux CLI"
      ],
      "intermediate": [
        "Query optimisation and indexing",
        "Replication and clustering",
        "User management and security",
        "Stored procedures",
        "Monitoring tools"
      ],
      "advanced": [
        "High-availability architectures",
        "Database migration at scale",
        "Oracle/SQL Server advanced tuning",
        "Cloud database management (RDS/Azure SQL)",
        "Capacity planning"
      ]
    },
    "careerProgression": [
      "Junior DBA",
      "Database Administrator",
      "Senior DBA",
      "Lead DBA / Data Architect",
      "Principal Database Architect"
    ]
  },
  {
    "id": "systems-administrator",
    "title": "Systems Administrator",
    "category": "devops",
    "categoryLabel": "DevOps",
    "iconType": "gear",
    "icon": "🖥️",
    "blurb": "Manage and maintain IT servers, operating systems, and internal infrastructure to keep organisations running smoothly.",
    "summary": "Manage and maintain IT servers, operating systems, and internal infrastructure to keep organisations running smoothly.",
    "demand": "Stable",
    "workMode": "Hybrid / On-site",
    "roadmapId": "systems-administrator",
    "salary": {
      "entry": "R240,000",
      "mid": "R400,000",
      "senior": "R620,000+"
    },
    "workEnvironments": [
      "Enterprises",
      "Government",
      "Universities",
      "Healthcare",
      "Managed service providers"
    ],
    "technologies": [
      "Linux",
      "Windows Server",
      "Active Directory",
      "VMware",
      "PowerShell",
      "Bash",
      "Ansible",
      "Nagios",
      "Backup solutions"
    ],
    "whatTheyDo": "Systems administrators keep servers and IT infrastructure operational. They manage user accounts, enforce group policies, perform maintenance, monitor system health, and troubleshoot hardware and software issues.",
    "responsibilities": [
      "Install, configure, and maintain Linux and Windows servers",
      "Manage Active Directory users, groups, and Group Policy Objects",
      "Monitor system performance and uptime",
      "Automate routine tasks with PowerShell and Bash scripts",
      "Implement and test backup and recovery procedures",
      "Manage virtualisation platforms (VMware, Hyper-V)",
      "Apply OS patches and security updates"
    ],
    "skillsByLevel": {
      "beginner": [
        "Linux CLI",
        "Windows Server basics",
        "Networking fundamentals",
        "Active Directory basics",
        "File system management"
      ],
      "intermediate": [
        "PowerShell / Bash scripting",
        "Virtualisation (VMware)",
        "Group Policy management",
        "DHCP/DNS management",
        "Monitoring tools"
      ],
      "advanced": [
        "Automation with Ansible",
        "Cloud integration (Azure AD)",
        "Capacity planning",
        "Disaster recovery architecture",
        "Infrastructure security hardening"
      ]
    },
    "careerProgression": [
      "IT Support Technician",
      "Junior SysAdmin",
      "Systems Administrator",
      "Senior SysAdmin",
      "Infrastructure Engineer"
    ]
  },
  {
    "id": "it-support-specialist",
    "title": "IT Support Specialist",
    "category": "devops",
    "categoryLabel": "DevOps",
    "iconType": "gear",
    "icon": "🛠️",
    "blurb": "Provide technical assistance to users and organisations, resolving hardware, software, and connectivity issues.",
    "summary": "Provide technical assistance to users and organisations, resolving hardware, software, and connectivity issues.",
    "demand": "Stable",
    "workMode": "On-site / Hybrid",
    "roadmapId": "it-support-specialist",
    "salary": {
      "entry": "R180,000",
      "mid": "R300,000",
      "senior": "R450,000+"
    },
    "workEnvironments": [
      "Corporate IT departments",
      "Managed service providers",
      "Retail businesses",
      "Schools and universities",
      "Government"
    ],
    "technologies": [
      "Windows/macOS/Linux",
      "Active Directory",
      "Microsoft 365",
      "Remote desktop tools",
      "Ticketing systems (Jira, ServiceNow)",
      "VPN"
    ],
    "whatTheyDo": "IT support specialists are the first point of contact for technical issues. They resolve hardware and software problems, support users via help desk tickets, configure devices, and maintain IT asset inventories.",
    "responsibilities": [
      "Respond to and resolve help desk tickets within SLA",
      "Troubleshoot hardware, software, and connectivity issues",
      "Set up and configure desktops, laptops, printers, and peripherals",
      "Manage user accounts in Active Directory and Microsoft 365",
      "Onboard and offboard employees with proper IT access",
      "Maintain IT asset registers and documentation",
      "Escalate complex issues to senior engineers"
    ],
    "skillsByLevel": {
      "beginner": [
        "Windows/macOS troubleshooting",
        "Hardware basics",
        "Microsoft 365 basics",
        "Customer communication",
        "Ticket logging"
      ],
      "intermediate": [
        "Active Directory management",
        "Network troubleshooting",
        "Remote support tools",
        "VPN configuration",
        "Imaging and deployment"
      ],
      "advanced": [
        "ITIL service management",
        "MDM solutions (Intune)",
        "Automation with PowerShell",
        "Security awareness training",
        "Infrastructure support"
      ]
    },
    "careerProgression": [
      "IT Support Technician",
      "IT Support Specialist",
      "Senior IT Support",
      "Systems Administrator",
      "IT Manager"
    ]
  },
  {
    "id": "blockchain-developer",
    "title": "Blockchain Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "code",
    "icon": "⛓️",
    "blurb": "Build decentralised applications, smart contracts, and blockchain infrastructure on distributed ledger platforms.",
    "summary": "Build decentralised applications, smart contracts, and blockchain infrastructure on distributed ledger platforms.",
    "demand": "Growing",
    "workMode": "Remote / Hybrid",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R380,000",
      "mid": "R650,000",
      "senior": "R1,000,000+"
    },
    "workEnvironments": [
      "DeFi protocols",
      "Fintech startups",
      "Web3 companies",
      "NFT platforms",
      "Financial institutions"
    ],
    "technologies": [
      "Solidity",
      "Ethereum",
      "Hardhat",
      "Truffle",
      "Web3.js",
      "Ethers.js",
      "IPFS",
      "Rust (Solana)",
      "MetaMask"
    ],
    "whatTheyDo": "Blockchain developers build and deploy smart contracts and decentralized applications (dApps) on blockchain networks. They work on both on-chain logic and the web3 frontends that interact with it.",
    "responsibilities": [
      "Write, test, and deploy smart contracts in Solidity or Rust",
      "Build dApp frontends using Web3.js or Ethers.js",
      "Conduct smart contract security audits",
      "Integrate decentralised storage (IPFS, Arweave)",
      "Work with DeFi protocols (AMMs, lending, staking)",
      "Optimise smart contract gas usage",
      "Design and deploy tokenomics models"
    ],
    "skillsByLevel": {
      "beginner": [
        "JavaScript/Python fundamentals",
        "Blockchain concepts",
        "Ethereum basics",
        "Solidity intro",
        "MetaMask setup"
      ],
      "intermediate": [
        "Smart contract testing (Hardhat)",
        "DeFi protocols",
        "NFT standards (ERC-721, ERC-1155)",
        "Gas optimisation",
        "Web3 frontend integration"
      ],
      "advanced": [
        "Security auditing",
        "Layer 2 solutions",
        "Cross-chain development",
        "MEV strategies",
        "Protocol design"
      ]
    },
    "careerProgression": [
      "Junior Blockchain Developer",
      "Blockchain Developer",
      "Senior Blockchain Developer",
      "Smart Contract Auditor",
      "Protocol Engineer"
    ]
  },
  {
    "id": "iot-engineer",
    "title": "IoT Engineer",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "code",
    "icon": "🌐",
    "blurb": "Design and build connected device systems that collect, transmit, and act on real-world data.",
    "summary": "Design and build connected device systems that collect, transmit, and act on real-world data.",
    "demand": "Growing",
    "workMode": "Hybrid / On-site",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R270,000",
      "mid": "R470,000",
      "senior": "R720,000+"
    },
    "workEnvironments": [
      "Manufacturing",
      "Smart home companies",
      "Agriculture tech",
      "Healthcare tech",
      "Industrial automation"
    ],
    "technologies": [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "C/C++",
      "Python",
      "AWS IoT",
      "Azure IoT Hub",
      "Node-RED",
      "Zigbee/LoRaWAN"
    ],
    "whatTheyDo": "IoT engineers design hardware-software systems where physical devices collect sensor data and communicate with cloud or edge systems. They work across firmware, connectivity protocols, and cloud integration.",
    "responsibilities": [
      "Design and prototype IoT hardware/firmware systems",
      "Write embedded C/C++ or MicroPython firmware",
      "Configure wireless communication protocols (MQTT, CoAP, LoRaWAN)",
      "Integrate devices with cloud IoT platforms (AWS IoT, Azure IoT Hub)",
      "Implement over-the-air (OTA) firmware update systems",
      "Build dashboards for real-time device monitoring",
      "Ensure device security and data encryption"
    ],
    "skillsByLevel": {
      "beginner": [
        "C/C++ basics",
        "Arduino/Raspberry Pi",
        "Electronics fundamentals",
        "Networking concepts",
        "MQTT basics"
      ],
      "intermediate": [
        "Embedded Linux",
        "RTOS systems",
        "Cloud IoT integration",
        "Sensor calibration",
        "Edge computing"
      ],
      "advanced": [
        "Custom PCB design",
        "Low-power optimisation",
        "Secure boot and HSM",
        "Large-scale device fleet management",
        "Industrial protocols (Modbus, OPC-UA)"
      ]
    },
    "careerProgression": [
      "Junior IoT Developer",
      "IoT Engineer",
      "Senior IoT Engineer",
      "Embedded Systems Architect",
      "IoT Solutions Architect"
    ]
  },
  {
    "id": "qa-engineer",
    "title": "QA / Test Engineer",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "code",
    "icon": "✅",
    "blurb": "Ensure software quality through manual and automated testing strategies, catching defects before they reach production.",
    "summary": "Ensure software quality through manual and automated testing strategies, catching defects before they reach production.",
    "demand": "Stable",
    "workMode": "Remote / Hybrid",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R240,000",
      "mid": "R420,000",
      "senior": "R650,000+"
    },
    "workEnvironments": [
      "Software companies",
      "Banks and fintech",
      "E-commerce",
      "Healthcare tech",
      "Agencies"
    ],
    "technologies": [
      "Selenium",
      "Cypress",
      "Playwright",
      "Jest",
      "Postman",
      "JIRA",
      "TestRail",
      "k6",
      "Python",
      "JavaScript"
    ],
    "whatTheyDo": "QA engineers design and execute test plans, automate regression suites, and ensure software meets functional and non-functional requirements. They work alongside developers throughout the SDLC to shift quality left.",
    "responsibilities": [
      "Write and execute manual test cases for features and regression",
      "Develop and maintain automated test suites (Cypress, Playwright, Selenium)",
      "Perform API testing with Postman and REST clients",
      "Run performance and load tests (k6, JMeter)",
      "Log, track, and retest defects in JIRA/TestRail",
      "Participate in sprint ceremonies and write acceptance criteria",
      "Collaborate with developers on testability and coverage"
    ],
    "skillsByLevel": {
      "beginner": [
        "Manual testing basics",
        "Test case writing",
        "Bug reporting",
        "JIRA basics",
        "SQL for data validation"
      ],
      "intermediate": [
        "Cypress or Playwright automation",
        "API testing (Postman)",
        "CI/CD test integration",
        "Test management tools",
        "Performance testing"
      ],
      "advanced": [
        "Test architecture and frameworks",
        "BDD (Cucumber)",
        "Shift-left testing strategy",
        "Load testing at scale",
        "Security testing basics"
      ]
    },
    "careerProgression": [
      "Junior QA Engineer",
      "QA Engineer",
      "Senior QA Engineer",
      "QA Lead",
      "QA Architect / SDET"
    ]
  },
  {
    "id": "technical-writer",
    "title": "Technical Writer",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "code",
    "icon": "✍️",
    "blurb": "Create clear, accurate technical documentation — from API references to user guides — that empowers developers and users.",
    "summary": "Create clear, accurate technical documentation — from API references to user guides — that empowers developers and users.",
    "demand": "Stable",
    "workMode": "Remote / Hybrid",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R220,000",
      "mid": "R380,000",
      "senior": "R580,000+"
    },
    "workEnvironments": [
      "Tech companies",
      "Developer tool vendors",
      "Open-source projects",
      "Healthcare tech",
      "Fintech"
    ],
    "technologies": [
      "Markdown",
      "Git",
      "Docusaurus",
      "Confluence",
      "Swagger/OpenAPI",
      "Notion",
      "Read the Docs",
      "Vale linter"
    ],
    "whatTheyDo": "Technical writers translate complex technical concepts into clear documentation. They collaborate with engineers, PMs, and designers to create API docs, user guides, tutorials, and release notes.",
    "responsibilities": [
      "Write, edit, and maintain developer documentation and user guides",
      "Document REST APIs using OpenAPI/Swagger standards",
      "Collaborate with engineering teams to understand features",
      "Maintain docs-as-code workflows using Git and CI",
      "Create tutorials, how-to guides, and conceptual explainers",
      "Manage a documentation portal (Docusaurus, GitBook)",
      "Ensure consistency using a documentation style guide"
    ],
    "skillsByLevel": {
      "beginner": [
        "Technical writing fundamentals",
        "Markdown",
        "Basic Git",
        "Reading code (Python/JS)",
        "Grammar and style"
      ],
      "intermediate": [
        "API documentation (OpenAPI)",
        "Docs-as-code workflows",
        "Diagramming (draw.io, Mermaid)",
        "Docs site management",
        "Information architecture"
      ],
      "advanced": [
        "Developer experience strategy",
        "Content engineering",
        "Docs toolchain setup",
        "Style guide authorship",
        "Localization management"
      ]
    },
    "careerProgression": [
      "Technical Writer",
      "Senior Technical Writer",
      "Lead Technical Writer",
      "Documentation Manager",
      "Head of Developer Experience"
    ]
  },
  {
    "id": "product-manager",
    "title": "Product Manager (Tech)",
    "category": "software",
    "categoryLabel": "Software Development",
    "iconType": "chart",
    "icon": "📋",
    "blurb": "Define product vision, prioritise features, and align engineering, design, and business teams to deliver impactful software products.",
    "summary": "Define product vision, prioritise features, and align engineering, design, and business teams to deliver impactful software products.",
    "demand": "High Demand",
    "workMode": "Hybrid / Remote",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R350,000",
      "mid": "R600,000",
      "senior": "R950,000+"
    },
    "workEnvironments": [
      "SaaS companies",
      "Fintech",
      "E-commerce",
      "Mobile app companies",
      "Enterprise software"
    ],
    "technologies": [
      "Jira",
      "Confluence",
      "Figma",
      "Mixpanel",
      "Amplitude",
      "Notion",
      "Roadmunk",
      "SQL basics",
      "A/B testing tools"
    ],
    "whatTheyDo": "Tech PMs are the bridge between business and engineering. They set product strategy, write specifications, manage the backlog, make prioritisation trade-offs, and ensure teams build the right things for users.",
    "responsibilities": [
      "Define product vision, goals, and OKRs aligned to business strategy",
      "Write detailed product requirement documents and user stories",
      "Manage and prioritise the product backlog using frameworks (RICE, MoSCoW)",
      "Conduct user research, interviews, and usability tests",
      "Analyse product metrics and user behaviour data",
      "Run A/B experiments and synthesise results",
      "Collaborate with engineering, design, and stakeholders in Agile ceremonies"
    ],
    "skillsByLevel": {
      "beginner": [
        "Agile/Scrum basics",
        "User story writing",
        "Wireframing (Figma)",
        "Stakeholder communication",
        "Market research"
      ],
      "intermediate": [
        "Product metrics and analytics",
        "A/B testing",
        "Roadmap planning",
        "Technical literacy (APIs, databases)",
        "OKR setting"
      ],
      "advanced": [
        "Product strategy and vision",
        "Go-to-market planning",
        "Portfolio management",
        "Data-driven experimentation",
        "P&L ownership"
      ]
    },
    "careerProgression": [
      "Associate Product Manager",
      "Product Manager",
      "Senior Product Manager",
      "Principal PM / Group PM",
      "VP of Product / CPO"
    ]
  },
  {
    "id": "scrum-master",
    "title": "Scrum Master",
    "category": "devops",
    "categoryLabel": "DevOps",
    "iconType": "gear",
    "icon": "🏃",
    "blurb": "Facilitate Agile Scrum ceremonies, remove blockers, and coach teams to continuously improve their delivery and collaboration.",
    "summary": "Facilitate Agile Scrum ceremonies, remove blockers, and coach teams to continuously improve their delivery and collaboration.",
    "demand": "Stable",
    "workMode": "Hybrid / Remote",
    "roadmapId": "software-developer",
    "salary": {
      "entry": "R280,000",
      "mid": "R470,000",
      "senior": "R700,000+"
    },
    "workEnvironments": [
      "Software companies",
      "Banks and fintech",
      "Large enterprises",
      "Consulting firms",
      "E-commerce"
    ],
    "technologies": [
      "Jira",
      "Confluence",
      "Trello",
      "Miro",
      "Azure DevOps",
      "Slack",
      "Retro tools"
    ],
    "whatTheyDo": "Scrum Masters serve teams by facilitating sprint ceremonies (planning, standups, reviews, retrospectives), coaching on Agile principles, removing impediments, and fostering a culture of continuous improvement.",
    "responsibilities": [
      "Facilitate daily standups, sprint planning, reviews, and retrospectives",
      "Remove impediments and protect the team from distractions",
      "Coach team members and stakeholders on Agile/Scrum practices",
      "Track sprint metrics (velocity, burndown, cycle time)",
      "Identify and address team dysfunction and communication gaps",
      "Support the Product Manager with backlog refinement",
      "Drive continuous improvement through retrospective action items"
    ],
    "skillsByLevel": {
      "beginner": [
        "Scrum framework basics",
        "Agile principles (Agile Manifesto)",
        "Facilitation skills",
        "Conflict resolution",
        "JIRA basics"
      ],
      "intermediate": [
        "Scaled Agile (SAFe basics)",
        "Coaching and mentoring",
        "Sprint metrics interpretation",
        "Stakeholder management",
        "Change management"
      ],
      "advanced": [
        "Enterprise Agile coaching",
        "SAFe/LeSS at scale",
        "Organisational transformation",
        "Team performance frameworks",
        "Executive alignment"
      ]
    },
    "careerProgression": [
      "Scrum Master",
      "Senior Scrum Master",
      "Agile Coach",
      "Enterprise Agile Coach",
      "Head of Delivery"
    ]
  }
];

export function getCareerById(id) {
  return careers.find((c) => c.id === id) || careers[0];
}
