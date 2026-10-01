export const roadmapCategories = [
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
  },
  {
    "id": "database",
    "label": "Database"
  },
  {
    "id": "support",
    "label": "IT Support"
  }
];

export const roadmapsData = [
  {
    "id": "software-developer",
    "title": "Software Developer",
    "category": "software",
    "categoryLabel": "Software Development",
    "blurb": "Designs, builds, tests and maintains applications that power businesses and everyday life.",
    "stepCount": 10,
    "stepsPreview": [
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Version Control (Git)",
      "Databases"
    ],
    "relatedCertifications": [
      {
        "id": "oracle-java-programmer-oca",
        "name": "Oracle Java Programmer (OCA)",
        "provider": "Oracle",
        "url": "https://education.oracle.com/"
      },
      {
        "id": "coursera-meta-front-end-developer",
        "name": "Meta Front-End Developer",
        "provider": "Meta",
        "url": "https://www.coursera.org/"
      },
      {
        "id": "microsoft-csharp-certification",
        "name": "Microsoft Certified: C# Developer",
        "provider": "Microsoft",
        "url": "https://learn.microsoft.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Programming Fundamentals",
        "description": "Master core concepts: variables, loops, functions, data types, and logic using Python or JavaScript.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Automate the Boring Stuff with Python",
            "author": "Al Sweigart",
            "description": "Essential reading for mastering programming fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Python for Beginners - Full Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=eWRfhZUzrAc"
          }
        ]
      },
      {
        "number": 2,
        "title": "Data Structures & Algorithms",
        "description": "Understand arrays, linked lists, trees, graphs, sorting, searching, and Big-O notation.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Grokking Algorithms",
            "author": "Aditya Bhargava",
            "description": "Essential reading for mastering data structures & algorithms.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Data Structures and Algorithms for Beginners",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=8hly31xKli0"
          }
        ]
      },
      {
        "number": 3,
        "title": "Version Control (Git)",
        "description": "Learn branching, merging, pull requests, resolving conflicts, and collaborating on GitHub.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Pro Git (Free Edition)",
            "author": "Scott Chacon & Ben Straub",
            "description": "Essential reading for mastering version control (git).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Git and GitHub for Beginners",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=mAFoROnOfHs"
          }
        ]
      },
      {
        "number": 4,
        "title": "Databases",
        "description": "Learn relational database design, SQL querying, indexing, and normalization.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "SQL in 10 Minutes a Day",
            "author": "Ben Forta",
            "description": "Essential reading for mastering databases.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SQL Tutorial - Full Database Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
          }
        ]
      },
      {
        "number": 5,
        "title": "APIs",
        "description": "Understand RESTful API architecture, JSON, HTTP status codes, and Postman API testing.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "RESTful Web APIs",
            "author": "Leonard Richardson",
            "description": "Essential reading for mastering apis.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "REST APIs for Beginners",
            "channel": "Academind",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=0oXYLzuucwE"
          }
        ]
      },
      {
        "number": 6,
        "title": "Testing",
        "description": "Write unit tests, integration tests, and automated test suites.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "The Art of Unit Testing",
            "author": "Roy Osherove",
            "description": "Essential reading for mastering testing.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Unit Testing Course",
            "channel": "Fireship",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=u6QfIXgjwGQ"
          }
        ]
      },
      {
        "number": 7,
        "title": "Framework Specialisation",
        "description": "Master a modern web framework (React, Vue, Node.js, or Django).",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Learning React (2nd Edition)",
            "author": "Alex Banks",
            "description": "Essential reading for mastering framework specialisation.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "React Course 2024",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=DLX62G4lc44"
          }
        ]
      },
      {
        "number": 8,
        "title": "System Design",
        "description": "Learn microservices, caching (Redis), message queues, load balancing, and scalability.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Designing Data-Intensive Applications",
            "author": "Martin Kleppmann",
            "description": "Essential reading for mastering system design.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "System Design Primer",
            "channel": "ByteByteGo",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=lX4CrbXMsNQ"
          }
        ]
      },
      {
        "number": 9,
        "title": "Portfolio",
        "description": "Build portfolio applications and document architectural decisions.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Clean Architecture",
            "author": "Robert C. Martin",
            "description": "Essential reading for mastering portfolio.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "How to Build a Developer Portfolio",
            "channel": "Traversy Media",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=gYzHS-n2gqU"
          }
        ]
      },
      {
        "number": 10,
        "title": "Internship Preparation",
        "description": "Practice coding interview questions, behavioral scenarios, and resume building.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Cracking the Coding Interview",
            "author": "Gayle Laakmann McDowell",
            "description": "Essential reading for mastering internship preparation.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Coding Interview Prep",
            "channel": "CS Dojo",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=qli-JCrSwuk"
          }
        ]
      }
    ]
  },
  {
    "id": "cybersecurity-analyst",
    "title": "Cybersecurity Analyst",
    "category": "security",
    "categoryLabel": "Cybersecurity",
    "blurb": "Protects systems and data from threats by monitoring, analysing and responding to security incidents.",
    "stepCount": 10,
    "stepsPreview": [
      "Computer Fundamentals",
      "Networking",
      "Linux",
      "Python"
    ],
    "relatedCertifications": [
      {
        "id": "comptia-security-plus",
        "name": "CompTIA Security+",
        "provider": "CompTIA",
        "url": "https://www.comptia.org/"
      },
      {
        "id": "isc2-certified-in-cybersecurity",
        "name": "(ISC)Â² CC",
        "provider": "ISC2",
        "url": "https://www.isc2.org/"
      },
      {
        "id": "google-cybersecurity-professional",
        "name": "Google Cybersecurity Certificate",
        "provider": "Google",
        "url": "https://grow.google/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Computer Fundamentals",
        "description": "Understand OS architecture, memory, file systems, and hardware peripherals.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "CompTIA A+ Exam Guide",
            "author": "Mike Meyers",
            "description": "Essential reading for mastering computer fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "CompTIA A+ Full Course",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=87t6P5ZHTP0"
          }
        ]
      },
      {
        "number": 2,
        "title": "Networking",
        "description": "Master OSI model, TCP/IP, IP addressing, DNS, DHCP, firewalls, and Wireshark.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Computer Networking: A Top-Down Approach",
            "author": "Kurose & Ross",
            "description": "Essential reading for mastering networking.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Network Fundamentals Course",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=S7MNX_UD7vY"
          }
        ]
      },
      {
        "number": 3,
        "title": "Linux",
        "description": "Learn Linux CLI, file permissions, user administration, and Bash scripting.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "The Linux Command Line",
            "author": "William Shotts",
            "description": "Essential reading for mastering linux.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Linux for Ethical Hackers",
            "channel": "The Cyber Mentor",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=U1w4T03B30I"
          }
        ]
      },
      {
        "number": 4,
        "title": "Python",
        "description": "Automate security tasks, write port scanners, process log files, and interact with APIs.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Black Hat Python",
            "author": "Justin Seitz",
            "description": "Essential reading for mastering python.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Python for Cybersecurity",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=3Kq1MIfTWCE"
          }
        ]
      },
      {
        "number": 5,
        "title": "Threats & Vulnerabilities",
        "description": "Understand malware, social engineering, OWASP Top 10, and vulnerability scanners.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Web Application Hacker Handbook",
            "author": "Dafydd Stuttard",
            "description": "Essential reading for mastering threats & vulnerabilities.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "OWASP Top 10 Explained",
            "channel": "HackerSploit",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=U_tsCjOrcK4"
          }
        ]
      },
      {
        "number": 6,
        "title": "SIEM & SOC Operations",
        "description": "Monitor and analyze security events using Splunk, Microsoft Sentinel, or Elastic.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Blue Team Handbook",
            "author": "Don Murdoch",
            "description": "Essential reading for mastering siem & soc operations.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SOC Analyst Fundamentals",
            "channel": "CyberFrenz",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=CEKfFnHgQHw"
          }
        ]
      },
      {
        "number": 7,
        "title": "Incident Response",
        "description": "Learn incident containment, root cause analysis, memory forensics, and report writing.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Incident Response & Computer Forensics",
            "author": "Jason Luttgens",
            "description": "Essential reading for mastering incident response.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Digital Forensics Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=giv0DQDSsjQ"
          }
        ]
      },
      {
        "number": 8,
        "title": "Identity & Access Management",
        "description": "Understand MFA, Active Directory, SSO, OAuth2, and Zero Trust security.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Zero Trust Networks",
            "author": "Evan Gilman",
            "description": "Essential reading for mastering identity & access management.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Active Directory for Beginners",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=OfXJlmuoc20"
          }
        ]
      },
      {
        "number": 9,
        "title": "Cloud Security",
        "description": "Configure Security Groups, IAM roles, KMS encryption, and cloud compliance.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "AWS Certified Security Guide",
            "author": "Marcelle Lee",
            "description": "Essential reading for mastering cloud security.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "AWS Cloud Security Tutorial",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=3hLmDS179YE"
          }
        ]
      },
      {
        "number": 10,
        "title": "Security Certifications",
        "description": "Prepare for Security+, CySA+, or CISSP certifications and interview scenarios.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "CompTIA Security+ Study Guide",
            "author": "David Seidl",
            "description": "Essential reading for mastering security certifications.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SOC Analyst Interview Questions",
            "channel": "Cyber Insecurity",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=mC2dBS1F8Nw"
          }
        ]
      }
    ]
  },
  {
    "id": "cloud-engineer",
    "title": "Cloud Engineer",
    "category": "cloud",
    "categoryLabel": "Cloud Computing",
    "blurb": "Designs, deploys and manages cloud infrastructure and services at scale.",
    "stepCount": 10,
    "stepsPreview": [
      "Linux Fundamentals",
      "Networking",
      "Cloud Basics",
      "Scripting (Python/Bash)"
    ],
    "relatedCertifications": [
      {
        "id": "aws-cloud-practitioner",
        "name": "AWS Certified Cloud Practitioner",
        "provider": "AWS",
        "url": "https://aws.amazon.com/"
      },
      {
        "id": "aws-solutions-architect-associate",
        "name": "AWS Solutions Architect â€“ Associate",
        "provider": "AWS",
        "url": "https://aws.amazon.com/"
      },
      {
        "id": "microsoft-azure-fundamentals",
        "name": "Microsoft Azure Fundamentals (AZ-900)",
        "provider": "Microsoft",
        "url": "https://learn.microsoft.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Linux Fundamentals",
        "description": "Master Linux administration and shell CLI.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Linux Administration Handbook",
            "author": "Evi Nemeth",
            "description": "Essential reading for mastering linux fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Linux Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=sWbUDq4S6Y8"
          }
        ]
      },
      {
        "number": 2,
        "title": "Networking",
        "description": "Understand Subnets, VPCs, VPNs, and DNS.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Cloud Networking",
            "author": "Dinesh Dutt",
            "description": "Essential reading for mastering networking.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "AWS VPC Deep Dive",
            "channel": "TechWorld with Nana",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=xj_GjnD4uyI"
          }
        ]
      },
      {
        "number": 3,
        "title": "Cloud Basics",
        "description": "Learn core AWS/Azure services: EC2, S3, IAM, RDS.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "AWS Certified Solutions Architect",
            "author": "Joe Baron",
            "description": "Essential reading for mastering cloud basics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "AWS Cloud Practitioner Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=7HKot-brXFE"
          }
        ]
      },
      {
        "number": 4,
        "title": "Scripting (Python/Bash)",
        "description": "Automate cloud tasks with Boto3 and shell scripts.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Python for Sysadmins",
            "author": "Noah Gift",
            "description": "Essential reading for mastering scripting (python/bash).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Bash Scripting Tutorial",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=tK9Oc6AEnR4"
          }
        ]
      },
      {
        "number": 5,
        "title": "Infrastructure as Code",
        "description": "Automate cloud setups with Terraform.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Terraform Up & Running",
            "author": "Yevgeniy Brikman",
            "description": "Essential reading for mastering infrastructure as code.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Terraform Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=SLB_c_ayRMo"
          }
        ]
      },
      {
        "number": 6,
        "title": "Containers (Docker)",
        "description": "Containerise applications with Docker.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Docker Deep Dive",
            "author": "Nigel Poulton",
            "description": "Essential reading for mastering containers (docker).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Docker Tutorial",
            "channel": "TechWorld with Nana",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=3c-iBn73dDE"
          }
        ]
      },
      {
        "number": 7,
        "title": "Orchestration (Kubernetes)",
        "description": "Manage container clusters with Kubernetes.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Kubernetes Up & Running",
            "author": "Brendan Burns",
            "description": "Essential reading for mastering orchestration (kubernetes).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Kubernetes Tutorial",
            "channel": "TechWorld with Nana",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=VnvRFRk_51k"
          }
        ]
      },
      {
        "number": 8,
        "title": "CI/CD Pipelines",
        "description": "Automate build and deployment with GitHub Actions.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Continuous Delivery",
            "author": "Jez Humble",
            "description": "Essential reading for mastering ci/cd pipelines.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "GitHub Actions Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=Tz7FsunBbfQ"
          }
        ]
      },
      {
        "number": 9,
        "title": "Monitoring & Logs",
        "description": "Track health with Prometheus and Grafana.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Prometheus Up & Running",
            "author": "Brian Brazil",
            "description": "Essential reading for mastering monitoring & logs.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Prometheus Course",
            "channel": "TechWorld with Nana",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=h4Sl21AKiDg"
          }
        ]
      },
      {
        "number": 10,
        "title": "Cloud Architecture & FinOps",
        "description": "Optimize cloud performance, costs, and availability.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Cloud FinOps",
            "author": "J.R. Storment",
            "description": "Essential reading for mastering cloud architecture & finops.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "AWS Well-Architected Framework",
            "channel": "Amazon Web Services",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=MpDJ6TCWKjk"
          }
        ]
      }
    ]
  },
  {
    "id": "data-analyst",
    "title": "Data Analyst",
    "category": "data",
    "categoryLabel": "Data Science",
    "blurb": "Turns raw data into insights that drive better business decisions.",
    "stepCount": 10,
    "stepsPreview": [
      "Statistics Fundamentals",
      "Excel & Spreadsheets",
      "SQL",
      "Python for Data"
    ],
    "relatedCertifications": [
      {
        "id": "google-data-analytics",
        "name": "Google Data Analytics",
        "provider": "Google",
        "url": "https://grow.google/"
      },
      {
        "id": "microsoft-power-bi",
        "name": "Microsoft Power BI (PL-300)",
        "provider": "Microsoft",
        "url": "https://learn.microsoft.com/"
      },
      {
        "id": "tableau-data-analyst",
        "name": "Tableau Certified Data Analyst",
        "provider": "Tableau",
        "url": "https://www.tableau.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Statistics Fundamentals",
        "description": "Learn probability, distributions, and hypothesis tests.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Naked Statistics",
            "author": "Charles Wheelan",
            "description": "Essential reading for mastering statistics fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Statistics Full Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=xxpc-HPKN28"
          }
        ]
      },
      {
        "number": 2,
        "title": "Excel & Spreadsheets",
        "description": "Master Pivot Tables, VLOOKUP, and functions.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Excel Bible",
            "author": "Michael Alexander",
            "description": "Essential reading for mastering excel & spreadsheets.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Excel Course for Beginners",
            "channel": "Kevin Stratvert",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=LgXzzu68j7M"
          }
        ]
      },
      {
        "number": 3,
        "title": "SQL",
        "description": "Extract and aggregate data with SQL queries.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "SQL for Data Analysis",
            "author": "Cathy Tanimura",
            "description": "Essential reading for mastering sql.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SQL for Analytics Course",
            "channel": "Alex The Analyst",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=OT1RErkfLNQ"
          }
        ]
      },
      {
        "number": 4,
        "title": "Python for Data",
        "description": "Data wrangling with Pandas and NumPy.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Python for Data Analysis",
            "author": "Wes McKinney",
            "description": "Essential reading for mastering python for data.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Pandas Data Analysis Tutorial",
            "channel": "Keith Galli",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=2uvysYbKdjM"
          }
        ]
      },
      {
        "number": 5,
        "title": "Data Visualisation",
        "description": "Create charts with Matplotlib and Seaborn.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Storytelling with Data",
            "author": "Cole Nussbaumer Knaflic",
            "description": "Essential reading for mastering data visualisation.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Data Viz in Python",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=EsDFiZPljYo"
          }
        ]
      },
      {
        "number": 6,
        "title": "Power BI & Tableau",
        "description": "Build interactive BI dashboards.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Supercharging Power BI",
            "author": "Matt Allington",
            "description": "Essential reading for mastering power bi & tableau.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Power BI Full Course",
            "channel": "edureka!",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=3u7MQz1EyPY"
          }
        ]
      },
      {
        "number": 7,
        "title": "Data Cleaning",
        "description": "Handle missing data and outliers.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Bad Data Handbook",
            "author": "Q. Ethan McCallum",
            "description": "Essential reading for mastering data cleaning.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Data Cleaning Python Project",
            "channel": "Alex The Analyst",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=bDhvCp3_lYw"
          }
        ]
      },
      {
        "number": 8,
        "title": "Exploratory Data Analysis",
        "description": "Uncover patterns and test assumptions.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Practical Statistics for Data Scientists",
            "author": "Peter Bruce",
            "description": "Essential reading for mastering exploratory data analysis.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "EDA Python Project",
            "channel": "Luke Barousse",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=wUSDVGivd-8"
          }
        ]
      },
      {
        "number": 9,
        "title": "A/B Testing & Metrics",
        "description": "Run online controlled experiments.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Trustworthy Online Experiments",
            "author": "Ron Kohavi",
            "description": "Essential reading for mastering a/b testing & metrics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "A/B Testing Tutorial",
            "channel": "Udacity",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=8H6QmMQWPEI"
          }
        ]
      },
      {
        "number": 10,
        "title": "Portfolio & Reporting",
        "description": "Publish dashboards and interview prep.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Analytical Skills for AI",
            "author": "Daniel Vaughan",
            "description": "Essential reading for mastering portfolio & reporting.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Build Data Analyst Portfolio",
            "channel": "Alex The Analyst",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=qfyynHBFOsM"
          }
        ]
      }
    ]
  },
  {
    "id": "data-scientist",
    "title": "Data Scientist",
    "category": "data",
    "categoryLabel": "Data Science",
    "blurb": "Builds machine learning models to solve complex problems and predict outcomes.",
    "stepCount": 10,
    "stepsPreview": [
      "Maths & Statistics",
      "Python",
      "Data Wrangling",
      "Machine Learning Basics"
    ],
    "relatedCertifications": [
      {
        "id": "ibm-data-science-professional",
        "name": "IBM Data Science Professional",
        "provider": "IBM",
        "url": "https://www.coursera.org/"
      },
      {
        "id": "tensorflow-developer",
        "name": "TensorFlow Developer Certificate",
        "provider": "Google",
        "url": "https://www.tensorflow.org/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Maths & Statistics",
        "description": "Linear algebra, calculus, and probability.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Mathematics for Machine Learning",
            "author": "Marc Deisenroth",
            "description": "Essential reading for mastering maths & statistics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Linear Algebra Course",
            "channel": "3Blue1Brown",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=fNk_zzaMoSs"
          }
        ]
      },
      {
        "number": 2,
        "title": "Python",
        "description": "Python data science stack: NumPy, Pandas, Scipy.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Python Data Science Handbook",
            "author": "Jake VanderPlas",
            "description": "Essential reading for mastering python.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Python for Data Science",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        "number": 3,
        "title": "Data Wrangling",
        "description": "Feature engineering, cleaning, and preprocessing.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Feature Engineering for ML",
            "author": "Alice Zheng",
            "description": "Essential reading for mastering data wrangling.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Feature Engineering Course",
            "channel": "Kaggle",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=h6PDGutoeWc"
          }
        ]
      },
      {
        "number": 4,
        "title": "Machine Learning Basics",
        "description": "Linear regression, classification, decision trees.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Hands-On Machine Learning",
            "author": "AurÃ©lien GÃ©ron",
            "description": "Essential reading for mastering machine learning basics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Machine Learning Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=i_LwzRVP7bg"
          }
        ]
      },
      {
        "number": 5,
        "title": "Model Evaluation",
        "description": "Cross-validation, precision, recall, ROC-AUC.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Evaluating Machine Learning Models",
            "author": "Alice Zheng",
            "description": "Essential reading for mastering model evaluation.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "ML Metrics Tutorial",
            "channel": "StatQuest",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=Kdsp6soqA7o"
          }
        ]
      },
      {
        "number": 6,
        "title": "Deep Learning",
        "description": "Neural networks, PyTorch, and TensorFlow.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Deep Learning with Python",
            "author": "FranÃ§ois Chollet",
            "description": "Essential reading for mastering deep learning.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "PyTorch for Beginners",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=V_xro1bcAuA"
          }
        ]
      },
      {
        "number": 7,
        "title": "NLP & Computer Vision",
        "description": "Text processing, transformers, CNNs.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "NLP with Transformers",
            "author": "Lewis Tunstall",
            "description": "Essential reading for mastering nlp & computer vision.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "NLP Course with Python",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=dIUTsFT2MeQ"
          }
        ]
      },
      {
        "number": 8,
        "title": "MLOps & Model Deployment",
        "description": "Deploy models with FastAPI, Docker, MLflow.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Designing Machine Learning Systems",
            "author": "Chip Huyen",
            "description": "Essential reading for mastering mlops & model deployment.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "MLOps Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=-dJPoLm_gtE"
          }
        ]
      },
      {
        "number": 9,
        "title": "Big Data (Spark)",
        "description": "Process large datasets with PySpark.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Learning Spark",
            "author": "Jules Damji",
            "description": "Essential reading for mastering big data (spark).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "PySpark Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=_C8kWso4ne4"
          }
        ]
      },
      {
        "number": 10,
        "title": "Kaggle & Portfolio",
        "description": "Compete on Kaggle and build ML applications.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Approaching Machine Learning",
            "author": "Abhishek Thakur",
            "description": "Essential reading for mastering kaggle & portfolio.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Kaggle Grandmaster Secrets",
            "channel": "Ken Jee",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=I3FBJdiExcg"
          }
        ]
      }
    ]
  },
  {
    "id": "network-engineer",
    "title": "Network Engineer",
    "category": "networking",
    "categoryLabel": "Networking",
    "blurb": "Designs, configures and maintains the networks that connect systems and people.",
    "stepCount": 10,
    "stepsPreview": [
      "Computer Fundamentals",
      "Networking Basics",
      "Routing & Switching",
      "Linux"
    ],
    "relatedCertifications": [
      {
        "id": "cisco-ccna",
        "name": "Cisco CCNA",
        "provider": "Cisco Networking Academy",
        "url": "https://www.cisco.com/"
      },
      {
        "id": "cisco-ccnp-enterprise",
        "name": "Cisco CCNP Enterprise",
        "provider": "Cisco Networking Academy",
        "url": "https://www.cisco.com/"
      },
      {
        "id": "comptia-network-plus",
        "name": "CompTIA Network+",
        "provider": "CompTIA",
        "url": "https://www.comptia.org/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Computer Fundamentals",
        "description": "Operating systems and PC hardware basics.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "CompTIA A+ Guide",
            "author": "Mike Meyers",
            "description": "Essential reading for mastering computer fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "A+ Full Course",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=87t6P5ZHTP0"
          }
        ]
      },
      {
        "number": 2,
        "title": "Networking Basics",
        "description": "OSI 7-layer model, IPv4/IPv6, subnetting.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "CCNA 200-301 Official Cert Guide",
            "author": "Wendell Odom",
            "description": "Essential reading for mastering networking basics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Network Fundamentals",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=S7MNX_UD7vY"
          }
        ]
      },
      {
        "number": 3,
        "title": "Routing & Switching",
        "description": "VLANs, Trunking, OSPF, BGP, Spanning Tree.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Cisco Networks",
            "author": "Chris Carthern",
            "description": "Essential reading for mastering routing & switching.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "CCNA Full Course",
            "channel": "Jeremy's IT Lab",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=H8W9oMNSuwo"
          }
        ]
      },
      {
        "number": 4,
        "title": "Linux Networking",
        "description": "Linux networking tools: ip, netstat, iptables.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Linux Network Administrator Guide",
            "author": "Olaf Kirch",
            "description": "Essential reading for mastering linux networking.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Linux Networking Tutorial",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=VbEx7B_PTOE"
          }
        ]
      },
      {
        "number": 5,
        "title": "Network Security",
        "description": "ACLs, VPNs, IPSec, NAT, Cisco ASA, Firewalls.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Network Security Essentials",
            "author": "William Stallings",
            "description": "Essential reading for mastering network security.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Firewall Configuration Basics",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=5q2XM2tqiaU"
          }
        ]
      },
      {
        "number": 6,
        "title": "Wireless Networking",
        "description": "Wi-Fi standards (802.11ax), WPA3, wireless controllers.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "CWNA Wireless Admin",
            "author": "David Coleman",
            "description": "Essential reading for mastering wireless networking.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Wireless Fundamentals",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=KaqKoKNEKnE"
          }
        ]
      },
      {
        "number": 7,
        "title": "Network Automation",
        "description": "Automate router configs using Python & Netmiko.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Network Programmability",
            "author": "Jason Edelman",
            "description": "Essential reading for mastering network automation.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Python for Network Engineers",
            "channel": "David Bombal",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=-1Z6ygHO--8"
          }
        ]
      },
      {
        "number": 8,
        "title": "SD-WAN & Cloud",
        "description": "Software-Defined Networking & AWS Cloud WAN.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "SD-WAN Architecture",
            "author": "Cisco Systems",
            "description": "Essential reading for mastering sd-wan & cloud.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SD-WAN Explained",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=isMnWZqAh0k"
          }
        ]
      },
      {
        "number": 9,
        "title": "Network Monitoring",
        "description": "Configure Wireshark, SNMP, Syslog, SolarWinds.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Practical Packet Analysis",
            "author": "Chris Sanders",
            "description": "Essential reading for mastering network monitoring.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Wireshark Tutorial",
            "channel": "David Bombal",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=4_7A8Ikp5Cc"
          }
        ]
      },
      {
        "number": 10,
        "title": "CCNA Cert & Labs",
        "description": "Cisco Packet Tracer / GNS3 lab practice.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "31 Days Before Your CCNA Exam",
            "author": "Allan Johnson",
            "description": "Essential reading for mastering ccna cert & labs.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Packet Tracer Practice Labs",
            "channel": "Jeremy's IT Lab",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=XgcGcrLKu1A"
          }
        ]
      }
    ]
  },
  {
    "id": "database-administrator",
    "title": "Database Administrator",
    "category": "database",
    "categoryLabel": "Database",
    "blurb": "Keeps databases fast, secure and available for the apps that depend on them.",
    "stepCount": 10,
    "stepsPreview": [
      "SQL Fundamentals",
      "Relational Design",
      "Linux",
      "Database Administration"
    ],
    "relatedCertifications": [
      {
        "id": "oracle-database-administration",
        "name": "Oracle DB Admin Associate",
        "provider": "Oracle",
        "url": "https://education.oracle.com/"
      },
      {
        "id": "microsoft-sql-server",
        "name": "Microsoft SQL Server Admin",
        "provider": "Microsoft",
        "url": "https://learn.microsoft.com/"
      },
      {
        "id": "mongodb-developer",
        "name": "MongoDB Developer",
        "provider": "MongoDB",
        "url": "https://learn.mongodb.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "SQL Fundamentals",
        "description": "SELECT, JOINs, GROUP BY, subqueries.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "SQL in 10 Minutes",
            "author": "Ben Forta",
            "description": "Essential reading for mastering sql fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SQL Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
          }
        ]
      },
      {
        "number": 2,
        "title": "Relational Design",
        "description": "Normalization (1NF-3NF), ER diagrams.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Database System Concepts",
            "author": "Abraham Silberschatz",
            "description": "Essential reading for mastering relational design.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Relational DB Design",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=26ls5lNiijk"
          }
        ]
      },
      {
        "number": 3,
        "title": "Linux Administration",
        "description": "Linux OS, filesystems, and shell.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Linux Administration",
            "author": "Evi Nemeth",
            "description": "Essential reading for mastering linux administration.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Linux Course",
            "channel": "The Cyber Mentor",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=lZAoFs75_cs"
          }
        ]
      },
      {
        "number": 4,
        "title": "Database Administration",
        "description": "Installation, configuration, and security.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "PostgreSQL Administration",
            "author": "Simon Riggs",
            "description": "Essential reading for mastering database administration.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Postgres Admin Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=qw--VYLpxG4"
          }
        ]
      },
      {
        "number": 5,
        "title": "Query Performance Tuning",
        "description": "Indexes, execution plans, query optimization.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Database Performance Tuning",
            "author": "Guy Harrison",
            "description": "Essential reading for mastering query performance tuning.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "SQL Tuning Tutorial",
            "channel": "Use The Index, Luke",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=XAV_7s4k--E"
          }
        ]
      },
      {
        "number": 6,
        "title": "Backup & Disaster Recovery",
        "description": "RMAN, pg_dump, WAL archiving, replication.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Database Backup & Recovery",
            "author": "Sam Alapati",
            "description": "Essential reading for mastering backup & disaster recovery.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Backup & Restore Guide",
            "channel": "Caleb Curry",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=hG_3UHepr_M"
          }
        ]
      },
      {
        "number": 7,
        "title": "High Availability & Clustering",
        "description": "PostgreSQL Patroni, MySQL Galera, SQL Server AlwaysOn.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "High Availability MySQL",
            "author": "Charles Bell",
            "description": "Essential reading for mastering high availability & clustering.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "DB Clustering Course",
            "channel": "TechWorld with Nana",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=dtNeuZRcyB8"
          }
        ]
      },
      {
        "number": 8,
        "title": "NoSQL Databases",
        "description": "MongoDB, Redis, Cassandra administration.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "MongoDB Applied Design Patterns",
            "author": "Rick Copeland",
            "description": "Essential reading for mastering nosql databases.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "MongoDB Tutorial",
            "channel": "Academind",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=ZS_kXvOeQ5Y"
          }
        ]
      },
      {
        "number": 9,
        "title": "Cloud Databases",
        "description": "AWS RDS, Aurora, Azure SQL management.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Cloud Database Design",
            "author": "Gopalakrishnan",
            "description": "Essential reading for mastering cloud databases.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "AWS RDS Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=NhDYbskXRgc"
          }
        ]
      },
      {
        "number": 10,
        "title": "DBA Automation & Security",
        "description": "Automating backups, auditing, patch management.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Automating Database Admin",
            "author": "Rajesh Kumar",
            "description": "Essential reading for mastering dba automation & security.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "DBA Automation Course",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=m4-HM_HHiV4"
          }
        ]
      }
    ]
  },
  {
    "id": "it-support-specialist",
    "title": "IT Support Specialist",
    "category": "support",
    "categoryLabel": "IT Support",
    "blurb": "Helps people and organisations solve their technology problems every day.",
    "stepCount": 10,
    "stepsPreview": [
      "Computer Fundamentals",
      "Operating Systems",
      "Networking Basics",
      "Hardware"
    ],
    "relatedCertifications": [
      {
        "id": "comptia-a-plus",
        "name": "CompTIA A+",
        "provider": "CompTIA",
        "url": "https://www.comptia.org/"
      },
      {
        "id": "microsoft-365-fundamentals",
        "name": "Microsoft 365 Fundamentals",
        "provider": "Microsoft",
        "url": "https://learn.microsoft.com/"
      },
      {
        "id": "cisco-ccst-it-support",
        "name": "Cisco CCST IT Support",
        "provider": "Cisco Networking Academy",
        "url": "https://www.cisco.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Computer Fundamentals",
        "description": "PC hardware, CPUs, RAM, storage, power supplies.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "CompTIA A+ Exam Guide",
            "author": "Mike Meyers",
            "description": "Essential reading for mastering computer fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "A+ Core 1 Course",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=87t6P5ZHTP0"
          }
        ]
      },
      {
        "number": 2,
        "title": "Operating Systems",
        "description": "Windows 11, macOS, and Linux setup and troubleshooting.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Windows 11 Inside Out",
            "author": "Ed Bott",
            "description": "Essential reading for mastering operating systems.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "A+ Core 2 Course",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=IhcZqUs1IF8"
          }
        ]
      },
      {
        "number": 3,
        "title": "Networking Basics",
        "description": "IP addresses, Routers, Switches, Wi-Fi, Cable crimping.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Network+ Study Guide",
            "author": "Todd Lammle",
            "description": "Essential reading for mastering networking basics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Network Fundamentals",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=S7MNX_UD7vY"
          }
        ]
      },
      {
        "number": 4,
        "title": "Hardware & Peripherals",
        "description": "Printers, monitors, docking stations, BIOS/UEFI.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Upgrading and Repairing PCs",
            "author": "Scott Mueller",
            "description": "Essential reading for mastering hardware & peripherals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Hardware Troubleshooting",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=HgeURynWn_w"
          }
        ]
      },
      {
        "number": 5,
        "title": "Active Directory & M365",
        "description": "User creation, password resets, Group Policy, Teams admin.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Active Directory Administration",
            "author": "Ian Wace",
            "description": "Essential reading for mastering active directory & m365.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Active Directory Tutorial",
            "channel": "Kevtech IT Tech",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=Dm5zqejLaoM"
          }
        ]
      },
      {
        "number": 6,
        "title": "Ticketing Systems & Help Desk",
        "description": "Jira Service Management, ServiceNow, SLA management.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "IT Help Desk Handbook",
            "author": "J.R. Smith",
            "description": "Essential reading for mastering ticketing systems & help desk.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Help Desk Fundamentals",
            "channel": "Kevtech IT Tech",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=h7XwFtM938I"
          }
        ]
      },
      {
        "number": 7,
        "title": "Remote Support & Tools",
        "description": "VPN setup, Remote Desktop, RMM tools.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Remote IT Support",
            "author": "David Johnson",
            "description": "Essential reading for mastering remote support & tools.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Remote Troubleshooting",
            "channel": "Kevtech IT Tech",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=vCchWdl7gwk"
          }
        ]
      },
      {
        "number": 8,
        "title": "IT Security Awareness",
        "description": "Antivirus, phishing prevention, malware removal.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Cybersecurity for End Users",
            "author": "Ernie Hayden",
            "description": "Essential reading for mastering it security awareness.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "IT Support Security",
            "channel": "Professor Messer",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=exKf0cCWssM"
          }
        ]
      },
      {
        "number": 9,
        "title": "Mobile Device Management",
        "description": "iOS & Android enterprise deployment, Intune.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "MDM for Enterprise",
            "author": "Paul Harrison",
            "description": "Essential reading for mastering mobile device management.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Microsoft Intune Tutorial",
            "channel": "MobileDev",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=56Ihv5MF4_U"
          }
        ]
      },
      {
        "number": 10,
        "title": "ITIL & Customer Service",
        "description": "ITIL 4 principles, clear communication, escalation.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "ITIL 4 Foundation",
            "author": "Axelos",
            "description": "Essential reading for mastering itil & customer service.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Customer Service for IT",
            "channel": "Skillsoft",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=r4umJJ4BRyI"
          }
        ]
      }
    ]
  },
  {
    "id": "mobile-developer",
    "title": "Mobile Developer",
    "category": "software",
    "categoryLabel": "Mobile Development",
    "blurb": "Builds apps for iOS and Android that millions of people use every day.",
    "stepCount": 10,
    "stepsPreview": [
      "Programming Fundamentals",
      "Mobile UI Basics",
      "APIs & Networking",
      "State Management"
    ],
    "relatedCertifications": [
      {
        "id": "flutter-developer-certificate",
        "name": "Flutter Developer Certificate",
        "provider": "Google",
        "url": "https://developers.google.com/"
      },
      {
        "id": "google-associate-android-developer",
        "name": "Associate Android Developer",
        "provider": "Google",
        "url": "https://developers.google.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Programming Fundamentals",
        "description": "Dart or Kotlin/Swift syntax, loops, and OOP.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Atomic Kotlin",
            "author": "Bruce Eckel",
            "description": "Essential reading for mastering programming fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Kotlin for Beginners",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=F9UC9DY-vIU"
          }
        ]
      },
      {
        "number": 2,
        "title": "Mobile UI Basics",
        "description": "Layouts, widgets, views, and responsive screens.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Flutter Complete Reference",
            "author": "Alberto Miola",
            "description": "Essential reading for mastering mobile ui basics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Flutter Course for Beginners",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=VPvVD8t02U8"
          }
        ]
      },
      {
        "number": 3,
        "title": "APIs & Networking",
        "description": "Fetching REST data, JSON parsing, HTTP clients.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Mobile API Design",
            "author": "Maximiliano Firtman",
            "description": "Essential reading for mastering apis & networking.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Flutter REST API Tutorial",
            "channel": "Mitch Koko",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=ExPFnu8Dm40"
          }
        ]
      },
      {
        "number": 4,
        "title": "State Management",
        "description": "Provider, Riverpod, Bloc, or Redux.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Flutter State Management",
            "author": "Mauricio Pastorini",
            "description": "Essential reading for mastering state management.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Flutter State Management Guide",
            "channel": "Mitch Koko",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=rF6eq1oru-Y"
          }
        ]
      },
      {
        "number": 5,
        "title": "Local Storage & Databases",
        "description": "SQLite, Room, Hive, or SharedPreferences.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Mobile Data Persistence",
            "author": "Alex Attard",
            "description": "Essential reading for mastering local storage & databases.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Flutter Hive & SQLite",
            "channel": "CodeX",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=xN_OTO5EYKY"
          }
        ]
      },
      {
        "number": 6,
        "title": "Native Device Features",
        "description": "Camera, GPS, Bluetooth, Push Notifications.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Native Mobile Features",
            "author": "John Horton",
            "description": "Essential reading for mastering native device features.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Push Notifications Flutter",
            "channel": "Firebase",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=k0zGEbiDJcQ"
          }
        ]
      },
      {
        "number": 7,
        "title": "Firebase Integration",
        "description": "Authentication, Firestore, Storage, Cloud Messaging.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Firebase for Mobile",
            "author": "Robin Wieruch",
            "description": "Essential reading for mastering firebase integration.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Firebase Flutter Course",
            "channel": "Fireship",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=1xipg02Wu8s"
          }
        ]
      },
      {
        "number": 8,
        "title": "Testing & CI/CD",
        "description": "Unit tests, Widget tests, Fastlane, GitHub Actions.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Mobile Testing Guide",
            "author": "Lars Vogel",
            "description": "Essential reading for mastering testing & ci/cd.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Flutter Testing Tutorial",
            "channel": "Reso Coder",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=hUAUAkIZmX0"
          }
        ]
      },
      {
        "number": 9,
        "title": "App Store Deployment",
        "description": "App Store Connect, Google Play Console signing.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "App Store Publishing Guide",
            "author": "Steve Hannah",
            "description": "Essential reading for mastering app store deployment.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Publish App to Play Store",
            "channel": "Mitch Koko",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=itY1VXp9pkc"
          }
        ]
      },
      {
        "number": 10,
        "title": "Mobile Performance",
        "description": "Memory profiling, battery usage, startup optimization.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Optimizing Mobile Apps",
            "author": "Doug Sillars",
            "description": "Essential reading for mastering mobile performance.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Flutter Performance Tips",
            "channel": "Flutter",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=71oitvt3z4k"
          }
        ]
      }
    ]
  },
  {
    "id": "game-developer",
    "title": "Game Developer",
    "category": "software",
    "categoryLabel": "Game Development",
    "blurb": "Creates interactive games and immersive experiences across platforms.",
    "stepCount": 10,
    "stepsPreview": [
      "Programming Fundamentals",
      "Maths for Games",
      "Unity / Unreal",
      "Game Physics"
    ],
    "relatedCertifications": [
      {
        "id": "unity-certified-developer",
        "name": "Unity Certified Associate",
        "provider": "Unity",
        "url": "https://unity.com/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Programming Fundamentals",
        "description": "C# or C++ variables, classes, game loops.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Players Guide to C#",
            "author": "RB Whitaker",
            "description": "Essential reading for mastering programming fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "C# for Beginners",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=GhQdlIFylQ8"
          }
        ]
      },
      {
        "number": 2,
        "title": "Maths for Games",
        "description": "Vectors, matrices, trigonometry, 3D math.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Essential Mathematics for Games",
            "author": "Eric Lengyel",
            "description": "Essential reading for mastering maths for games.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Math for Game Devs",
            "channel": "Freya HolmÃ©r",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=fjOdtSu4Lm4"
          }
        ]
      },
      {
        "number": 3,
        "title": "Game Engine (Unity/Unreal)",
        "description": "Scenes, GameObjects, Prefabs, Transforms.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Unity in Action",
            "author": "Joseph Hocking",
            "description": "Essential reading for mastering game engine (unity/unreal).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Unity Full Course",
            "channel": "Brackeys",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=j48LtUkZRjU"
          }
        ]
      },
      {
        "number": 4,
        "title": "Game Physics & Collisions",
        "description": "Rigidbodies, Colliders, Raycasting, Forces.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Game Physics Cookbook",
            "author": "Gabor Szauer",
            "description": "Essential reading for mastering game physics & collisions.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Unity Physics Tutorial",
            "channel": "Brackeys",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=IlKaB1etrik"
          }
        ]
      },
      {
        "number": 5,
        "title": "Game UI & HUD",
        "description": "Canvas, Health bars, Menus, Inventory UI.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Designing Game UI",
            "author": "David Candland",
            "description": "Essential reading for mastering game ui & hud.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Unity UI Tutorial",
            "channel": "Brackeys",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=TAGzxRMloyU"
          }
        ]
      },
      {
        "number": 6,
        "title": "Animation & Audio",
        "description": "Animator Controllers, Blend trees, AudioSources.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Game Audio Programming",
            "author": "Guy Somberg",
            "description": "Essential reading for mastering animation & audio.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Unity Animation Course",
            "channel": "Brackeys",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=hkaysu1Z-N8"
          }
        ]
      },
      {
        "number": 7,
        "title": "Game AI & Pathfinding",
        "description": "NavMesh, State Machines, Behavior Trees.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Artificial Intelligence for Games",
            "author": "Ian Millington",
            "description": "Essential reading for mastering game ai & pathfinding.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "NavMesh AI Tutorial",
            "channel": "Brackeys",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=CHV1ymlw-P8"
          }
        ]
      },
      {
        "number": 8,
        "title": "Multiplayer Networking",
        "description": "Photon, Mirror, Unity Netcode for GameObjects.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Multiplayer Game Programming",
            "author": "Joshua Glazer",
            "description": "Essential reading for mastering multiplayer networking.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Unity Multiplayer Course",
            "channel": "Code Monkey",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=7glCsF9fv3s"
          }
        ]
      },
      {
        "number": 9,
        "title": "Shaders & Graphics",
        "description": "HLSL, Shader Graph, lighting, particle systems.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Unity Shader Graph",
            "author": "Daniel Ilett",
            "description": "Essential reading for mastering shaders & graphics.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Shader Graph for Beginners",
            "channel": "Brackeys",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=Ar9eIn4z6XE"
          }
        ]
      },
      {
        "number": 10,
        "title": "Game Build & Steam Release",
        "description": "Optimization, memory profiling, publishing on Steam/Itch.io.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Game Architecture",
            "author": "Robert Nystrom",
            "description": "Essential reading for mastering game build & steam release.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Publish Game on Steam",
            "channel": "Code Monkey",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=CAQsIDxI7rU"
          }
        ]
      }
    ]
  },
  {
    "id": "systems-administrator",
    "title": "Systems Administrator",
    "category": "devops",
    "categoryLabel": "IT Support",
    "blurb": "Keeps servers and IT systems running smoothly and securely.",
    "stepCount": 10,
    "stepsPreview": [
      "Linux Fundamentals",
      "Windows Server",
      "Active Directory",
      "Scripting"
    ],
    "relatedCertifications": [
      {
        "id": "redhat-rhcsa",
        "name": "Red Hat RHCSA",
        "provider": "Red Hat",
        "url": "https://www.redhat.com/"
      },
      {
        "id": "linux-foundation-lfcs",
        "name": "LFCS Sysadmin",
        "provider": "Linux Foundation",
        "url": "https://training.linuxfoundation.org/"
      },
      {
        "id": "comptia-server-plus",
        "name": "CompTIA Server+",
        "provider": "CompTIA",
        "url": "https://www.comptia.org/"
      }
    ],
    "steps": [
      {
        "number": 1,
        "title": "Linux Fundamentals",
        "description": "Linux CLI, user permissions, filesystems.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "The Linux Command Line",
            "author": "William Shotts",
            "description": "Essential reading for mastering linux fundamentals.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Linux Administration Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=WMy3OzvBWc0"
          }
        ]
      },
      {
        "number": 2,
        "title": "Windows Server",
        "description": "Windows Server install, roles, storage, Hyper-V.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Windows Server 2022 Inside Out",
            "author": "Orin Thomas",
            "description": "Essential reading for mastering windows server.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Windows Server Tutorial",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=kLVV3FVKQHE"
          }
        ]
      },
      {
        "number": 3,
        "title": "Active Directory & DNS",
        "description": "AD DS, Group Policy (GPO), DNS, DHCP.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Active Directory Administration",
            "author": "Ian Wace",
            "description": "Essential reading for mastering active directory & dns.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Active Directory Course",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=zJg13bQ5bvo"
          }
        ]
      },
      {
        "number": 4,
        "title": "Scripting (PowerShell/Bash)",
        "description": "Automating sysadmin tasks with PowerShell.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Learn PowerShell in a Month of Lunches",
            "author": "Don Jones",
            "description": "Essential reading for mastering scripting (powershell/bash).",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "PowerShell Tutorial",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=ZOoCaWyifmI"
          }
        ]
      },
      {
        "number": 5,
        "title": "Virtualisation",
        "description": "VMware ESXi, vCenter, Proxmox, Hyper-V.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Mastering VMware vSphere",
            "author": "Nick Marshall",
            "description": "Essential reading for mastering virtualisation.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "VMware ESXi Course",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=apC1bOLbzbY"
          }
        ]
      },
      {
        "number": 6,
        "title": "Backup & Disaster Recovery",
        "description": "Veeam Backup, snapshot management, offsite backups.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Veeam Backup Guide",
            "author": "Veeam",
            "description": "Essential reading for mastering backup & disaster recovery.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Veeam Backup Tutorial",
            "channel": "Veeam",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=3Gof5dQxNBI"
          }
        ]
      },
      {
        "number": 7,
        "title": "Storage Management",
        "description": "SAN, NAS, RAID, LVM, NFS, iSCSI.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Storage Area Networks",
            "author": "Jon Tate",
            "description": "Essential reading for mastering storage management.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Storage & RAID Explained",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=U-OCdTeZLac"
          }
        ]
      },
      {
        "number": 8,
        "title": "Network Services",
        "description": "SSH, FTP, Web servers (Nginx/Apache), Mail servers.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Nginx HTTP Server",
            "author": "Clement Nedelcu",
            "description": "Essential reading for mastering network services.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Nginx Web Server Course",
            "channel": "freeCodeCamp.org",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=9t9Mp0BGnyI"
          }
        ]
      },
      {
        "number": 9,
        "title": "Security Hardening",
        "description": "SELinux, Firewalls, Patch management, BitLocker.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Linux Security Hardening",
            "author": "Sameer Tyagi",
            "description": "Essential reading for mastering security hardening.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Server Hardening Guide",
            "channel": "CyberFrenz",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=XDdLpZA4vCo"
          }
        ]
      },
      {
        "number": 10,
        "title": "Monitoring & Syslog",
        "description": "Nagios, Zabbix, Syslog servers, SNMP.",
        "resources": [
          {
            "type": "book",
            "label": "ðŸ“– Book",
            "title": "Monitoring with Zabbix",
            "author": "Rihards Olups",
            "description": "Essential reading for mastering monitoring & syslog.",
            "url": "https://www.amazon.com/"
          },
          {
            "type": "video",
            "label": "ðŸŽ¥ YouTube Video",
            "title": "Zabbix Tutorial",
            "channel": "NetworkChuck",
            "duration": "Comprehensive Tutorial",
            "url": "https://www.youtube.com/watch?v=-2yzXSIuC8o"
          }
        ]
      }
    ]
  }
];

const roadmapAliases = {
  'frontend-dev': 'software-developer',
  'backend-dev': 'software-developer',
  'fullstack-dev': 'software-developer',
  'cybersecurity': 'cybersecurity-analyst',
  'security': 'cybersecurity-analyst',
  'data-science': 'data-scientist',
  'ai-engineer': 'data-scientist',
  'ml-engineer': 'data-scientist',
  'devops': 'cloud-engineer',
  'cloud': 'cloud-engineer',
  'ux-ui-designer': 'software-developer',
  'mobile': 'mobile-developer',
  'mobile-development': 'mobile-developer',
  'game-dev': 'game-developer',
  'network-technician': 'network-engineer',
};

export function getRoadmapById(id) {
  const targetId = roadmapAliases[id] || id;
  return roadmapsData.find((r) => r.id === targetId) || roadmapsData.find((r) => r.id === id) || roadmapsData[0];
}

