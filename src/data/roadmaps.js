export const roadmapCategories = {
  engineering: 'Engineering',
  cloud: 'Cloud',
  security: 'Security',
  data: 'Data',
  ai: 'AI',
  infrastructure: 'Infrastructure',
  design: 'Design',
  support: 'Support',
};

export const roadmaps = [

  // Frontend Developer Roadmap
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    category: 'engineering',
    blurb: 'Build accessible, performant, and maintainable interfaces for the web.',
    focusAreas: [
      'HTML, CSS, and JavaScript: The core technologies of the web.',
      'Frontend Frameworks: Proficiency in frameworks like React, Angular, or Vue.js.',
      'Responsive Design: Creating web pages that work on any device.',
      'Version Control: Using Git and GitHub for code management.',
      'Web Performance: Optimizing loading times and rendering performance.',
      'APIs: Consuming RESTful and GraphQL APIs.',
    ],

    // Skills
    skills: [
      'HTML/CSS',
      'JavaScript/TypeScript',
      'React/Vue/Angular',
      'State Management',
      'Web Performance',
      'Accessibility',
      'Testing/Debugging',
      'Build Tools',
    ],

    // Career Paths
    careerPath: [
      {
        title: 'Junior Frontend Developer',
        description: 'Contribute to frontend codebases, fix bugs, and build simple features.',
      },
      {
        title: 'Mid-Level Frontend Developer',
        description: 'Own feature development, collaborate on architecture, and mentor juniors.',
      },
      {
        title: 'Senior Frontend Developer',
        description: 'Lead frontend projects, design systems, and drive technical strategy.',
      },
      {
        title: 'Javascript Developer',
        description: 'Specialize in JavaScript frameworks, tooling, and ecosystem best practices.',
      },
      {
        title: 'UI Engineer',
        description: 'Focus on building reusable UI components, design systems, and frontend infrastructure.',
      }
    ],

    // Certifications
    certifications: [
      {
        label: 'Meta Front-End Developer Professional Certificate',
        href: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
      },
      {
        label: 'freeCodeCamp Responsive Web Design',
        href: 'https://www.freecodecamp.org/certification/fcc/responsive-web-design',
      },
      {
        label: 'W3Schools Front-End Developer Certificate',
        href: 'https://www.w3schools.com/cert/cert_frontend.asp',
      },
      {
        label: 'JS Institute JavaScript Certificate',
        href: 'https://jsinstitute.org/jse-certification',
      },
    ],
    
    // Online Course
    courses: [
      {
        label: 'The Web Developer Bootcamp 2024',
        href: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
      },
      {
        label: 'HTML, CSS, and Javascript for Web Developers (Coursera)',
        href: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
      },
      {
        label: 'Full Stack Open',
        href: 'https://fullstackopen.com/en/',
      },
      {
        label: 'Frontend Masters - Complete Intro to React',
        href: 'https://frontendmasters.com/courses/complete-react-v8/',
      },

    ],

    //Youtube Channels
    youtubeChannels: [
      {
        label: 'Traversy Media',
        href: 'https://www.youtube.com/c/TraversyMedia',
      },
      {
        label: 'The Net Ninja',
        href: 'https://www.youtube.com/c/TheNetNinja',
      },
      {
        label: 'Academind',
        href: 'https://www.youtube.com/c/Academind',
      },
      {
        label: 'freeCodeCamp',
        href: 'https://www.youtube.com/c/Freecodecamp',
      },
    ],

    // Books
    books: [
      {
        label: 'Eloquent JavaScript by Marijn Haverbeke',
        href: 'https://eloquentjavascript.net/',
      },
      {
        label: 'You Don\'t Know JS by Kyle Simpson',
        href: 'https://github.com/getify/You-Dont-Know-JS',
      },
      {
        label: 'JavaScript: The Good Parts by Douglas Crockford',
        href: 'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/',
      },
    ],

    // Projects
    projects: [
      { title: 'Personal Portfolio', description: 'Build a responsive site showcasing your skills and bio using semantic HTML and CSS Grid.' },
      { title: 'Weather Dashboard', description: 'Create an app that fetches and displays real-time weather data using the OpenWeather API and React hooks.' },
      { title: 'Interactive Task Manager', description: 'Build a drag-and-drop Kanban board using a state management library like Redux or Zustand.' },
    ],

    // Prerequisites
    prerequisites: [
      'Basic understanding of HTML, CSS, and JavaScript.',
      'Familiarity with command line and text editors.',
      'Understanding of how the internet works (HTTP, browsers).',
    ],

  },

  // Backend Developer Roadmap
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    category: 'engineering',
    blurb: 'Design APIs, business logic, and distributed systems that support production apps.',
    focusAreas: [
      'Server-side Programming: Mastering languages like Python, Java, or Node.js.',
      'Databases: Relational (PostgreSQL) and NoSQL (MongoDB) data modeling.',
      'API Design: Building RESTful and GraphQL services.',
      'Security: Implementing authentication, authorization, and data encryption.',
      'Scalability: Designing distributed systems and microservices.',
      'Caching & Performance: Implementing Redis and optimizing query performance.',
      'Message Brokers: Using RabbitMQ or Kafka for asynchronous processing.',
    ],

    // Career Paths
    careerPath: [
      { title: 'Junior Backend Developer', description: 'Write server-side logic, maintain databases, and build basic API endpoints.' },
      { title: 'Mid-Level Backend Developer', description: 'Design complex database schemas and optimize system performance.' },
      { title: 'Senior Backend Developer', description: 'Architect distributed systems and lead technical decisions for the backend.' },
      { title: 'Software Architect', description: 'Define high-level structures for complex software systems and ensure scalability.' },
      { title: 'CTO / Engineering VP', description: 'Lead the entire technical organization and define long-term technology roadmaps.' },
    ],

    // Online Courses
    courses: [
      {
        label: 'The Complete Node.js Developer Course',
        href: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/',
      },
      {
        label: 'Python for Everybody Specialization (Coursera)',
        href: 'https://www.coursera.org/specializations/python',
      },
      {
        label: 'Java Programming Fundamentals (Coursera)',
        href: 'https://www.coursera.org/specializations/java-programming',
      },
      {
        label: 'Backend Masters (Frontend Masters)',
        href: 'https://frontendmasters.com/courses/back-end/',
      },
      {
        label: 'Back End Development and APIs (freeCodeCamp)',
        href: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
      }
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Hussein Nasser', href: 'https://www.youtube.com/@HusseinNasser' },
      { label: 'Traversy Media', href: 'https://www.youtube.com/c/TraversyMedia' },
      { label: 'Programming with Mosh', href: 'https://www.youtube.com/user/programmingwithmosh' },
      { label: 'ArjanCodes', href: 'https://www.youtube.com/@ArjanCodes' },
      { label: 'freeCodeCamp.org', href: 'https://www.youtube.com/@freecodecamp' },
    ],

    // Books
    books: [
      { label: 'Clean Code by Robert C. Martin', href: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/' },
      { label: 'Designing Data-Intensive Applications by Martin Kleppmann', href: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/' },
      { label: 'Introduction to Algorithms (CLRS)', href: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/' },
      { label: 'The Art of Scalability by Martin L. Abbott', href: 'https://www.oreilly.com/library/view/the-art-of/9780134032801/' },
    ],

    // Skills
    skills: [
      'Programming Languages',
      'API Design',
      'Database Design',
      'System Architecture',
      'Cloud Services',
      'Docker & Kubernetes',
      'Unit/Integration Testing',
      'Message Brokers (Kafka/RabbitMQ)',
    ],
    // Certifications
    certifications: [
      { label: 'AWS Certified Developer - Associate', href: 'https://aws.amazon.com/certification/certified-developer-associate/' },
      { label: 'Microsoft Certified: Azure Developer Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/' },
      { label: 'MongoDB Certified Developer Associate', href: 'https://university.mongodb.com/certification' },
      { label: 'Oracle Certified Professional: Java SE', href: 'https://education.oracle.com/java-se-11-developer/pexam_1Z0-819' },
      { label: 'Python Institute PCEP – Certified Entry-Level Python Programmer', href: 'https://pythoninstitute.org/certification/pcep-certification-entry-level-python-programmer/' },
    ],
    // Projects
    projects: [
      { title: 'RESTful Task API', description: 'Develop a CRUD API for a task manager using Node.js/Express with JWT authentication and MongoDB.' },
      { title: 'URL Shortener', description: 'Build a service that generates short aliases for long URLs and tracks click analytics using Redis.' },
      { title: 'Real-time Log Monitor', description: 'Create a system that processes and displays server logs in real-time using Kafka and WebSockets.' },
    ],
    // Prerequisites
    prerequisites: [
      'Proficiency in at least one programming language (Python, Java, Node.js).',
      'Basic understanding of data structures and algorithms.',
      'Familiarity with databases (SQL or NoSQL concepts).',
    ],
  },

  // Full-stack Developer
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    category: 'engineering',
    blurb: 'Own product delivery across frontend, backend, data, and deployment workflows.',
    focusAreas: [
      'Client-side & Server-side: Proficiency in both frontend and backend technologies.',
      'Database Integration: Connecting UI components to persistent data stores.',
      'DevOps Basics: Containerization and deployment of full-stack apps.',
      'System Integration: Managing communication between different parts of the stack.',
      'Testing: Implementing end-to-end testing with Cypress or Playwright.',
      'Cloud Hosting: Deploying applications to Vercel, AWS, or Heroku.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior Full Stack Developer', description: 'Contribute to both the user interface and the supporting server-side logic.' },
      { title: 'Full Stack Engineer', description: 'Independently build and deploy end-to-end features for web applications.' },
      { title: 'Senior Full Stack Engineer', description: 'Lead end-to-end product architecture and mentor cross-functional teams.' },
      { title: 'Technical Product Manager', description: 'Bridge the gap between business requirements and technical implementation.' },
      { title: 'Lead Product Engineer', description: 'Oversee the development of core product features and technical strategy.' },
    ],
    // Online Courses
    courses: [
      { label: 'The Complete 2024 Web Development Bootcamp', href: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/' },
      { label: 'Full Stack Open', href: 'https://fullstackopen.com/en/' },
      { label: 'The Odin Project', href: 'https://www.theodinproject.com/' },
      { label: 'Meta Full-Stack Developer Professional Certificate', href: 'https://www.coursera.org/professional-certificates/meta-full-stack-developer' },
      { label: 'IBM Full Stack Software Developer Professional Certificate', href: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'freeCodeCamp', href: 'https://www.youtube.com/c/Freecodecamp' },
      { label: 'The Net Ninja', href: 'https://www.youtube.com/c/TheNetNinja' },
      { label: 'Web Dev Simplified', href: 'https://www.youtube.com/@WebDevSimplified' },
      { label: 'Fireship', href: 'https://www.youtube.com/@Fireship' },
    ],
    // Books
    books: [
      { label: 'The Pragmatic Programmer by Andrew Hunt', href: 'https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/' },
      { label: 'Refactoring by Martin Fowler', href: 'https://martinfowler.com/books/refactoring.html' },
      { label: 'Clean Architecture by Robert C. Martin', href: 'https://www.oreilly.com/library/view/clean-architecture-a/9780134408392/' },
    ],
    // Skills
    skills: [
      'Frontend Frameworks',
      'Backend Runtimes',
      'Database Management',
      'API Integration',
      'Cloud Deployment',
      'Next.js / Nuxt.js',
      'CI/CD Pipelines',
      'Testing (Jest/Cypress)',
      'GraphQL',
    ],
    // Certifications
    certifications: [
      { label: 'Meta Full-Stack Developer Professional Certificate', href: 'https://www.coursera.org/professional-certificates/meta-full-stack-developer' },
      { label: 'IBM Full Stack Software Developer Professional Certificate', href: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer' },
      { label: 'AWS Certified Cloud Practitioner', href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
    ],
    // Projects
    projects: [
      { title: 'Community Forum Platform', description: 'A full-stack app where users can create posts, comment, and upvote content using Next.js and PostgreSQL.' },
      { title: 'E-commerce MVP', description: 'Build a product catalog with a shopping cart and integrated Stripe checkout functionality.' },
      { title: 'Multi-user Collaborative Notes', description: 'Create a shared note-taking app with real-time editing and presence indicators using Socket.io.' },
    ],
    // Prerequisites
    prerequisites: [
      'Solid understanding of frontend development (HTML, CSS, JavaScript, a framework).',
      'Solid understanding of backend development (a language, API concepts, databases).',
      'Familiarity with version control (Git).',
    ],
  },

  // Mobile Developer Roadmap
  {
    id: 'mobile-development',
    title: 'Mobile Developer',
    category: 'engineering',
    blurb: 'Ship native and cross-platform experiences for iOS and Android devices.',
    focusAreas: [
      'Native Development: Swift for iOS or Kotlin/Java for Android.',
      'Cross-Platform: Flutter or React Native frameworks.',
      'Mobile UI/UX: Designing interfaces specifically for small touch screens.',
      'Mobile Performance: Optimizing for battery life and intermittent connectivity.',
      'Offline Sync: Managing local data persistence and remote synchronization.',
      'Push Notifications: Implementing user engagement through platform notifications.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior Mobile Developer', description: 'Build simple screens and bug fixes for native or cross-platform apps.' },
      { title: 'Mobile Engineer', description: 'Develop complex features and integrate mobile apps with backend APIs.' },
      { title: 'Senior Mobile Engineer', description: 'Lead app architecture, performance tuning, and release management.' },
      { title: 'Mobile Architect', description: 'Design high-level mobile systems and define technical standards for apps.' },
    ],
    // Online Courses
    courses: [
      { label: 'Android Basics with Compose', href: 'https://developer.android.com/courses/android-basics-compose/course' },
      { label: 'iOS & Swift - The Complete iOS App Development Bootcamp', href: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
      { label: 'Flutter & Dart - The Complete Guide', href: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Sean Allen', href: 'https://www.youtube.com/@seanallen' },
      { label: 'Philipp Lackner', href: 'https://www.youtube.com/@PhilippLackner' },
      { label: 'Kavsoft', href: 'https://www.youtube.com/@Kavsoft' },
      { label: 'Firebase', href: 'https://www.youtube.com/@Firebase' },
    ],
    // Books
    books: [
      { label: 'Swift Programming: The Big Nerd Ranch Guide', href: 'https://www.bignerdranch.com/books/swift-programming/' },
      { label: 'Android Programming: The Big Nerd Ranch Guide', href: 'https://www.bignerdranch.com/books/android-programming/' },
      { label: 'App Store Optimization (ASO) Strategy', href: 'https://aso-book.com/' },
    ],
    // Skills
    skills: [
      'Swift/Kotlin',
      'React Native/Flutter',
      'Mobile UI Design',
      'Offline Data Storage',
      'App Store Deployment',
      'State Management (Riverpod/Redux)',
      'Push Notifications',
    ],
    // Certifications
    certifications: [
      { label: 'Google Associate Android Developer', href: 'https://grow.google/androiddev/' },
      { label: 'Meta iOS Developer Professional Certificate', href: 'https://www.coursera.org/professional-certificates/meta-ios-developer' },
      { label: 'Flutter Certified Application Developer', href: 'https://androidatc.com/_training.php?exam=AND-401' },
    ],
    // Projects
    projects: [
      { title: 'Daily Habit Tracker', description: 'Develop a mobile app with local data persistence (SQLite) and progress visualization charts.' },
      { title: 'Recipe Discovery App', description: 'Build a cross-platform app that allows users to search recipes and save favorites using a third-party API.' },
      { title: 'Location-based Meetup Tool', description: 'Create an app that uses Google Maps/MapKit to help users find local points of interest.' },
    ],
    // Prerequisites
    prerequisites: [
      'Basic programming knowledge (e.g., Python, Java, Swift/Kotlin basics).',
      'Understanding of object-oriented programming concepts.',
      'Familiarity with mobile operating systems (iOS/Android basics).',
    ],
  },

  // Game Developer Roadmap
  {
    id: 'game-dev',
    title: 'Game Developer',
    category: 'engineering',
    blurb: 'Create gameplay systems, tooling, and performant interactive experiences.',
    focusAreas: [
      'Game Engines: Mastery of Unity (C#) or Unreal Engine (C++).',
      'Game Physics: Implementing realistic movement and collision detection.',
      'Computer Graphics: Understanding shaders, lighting, and rendering pipelines.',
      'Multiplayer Systems: Network synchronization and server-side game logic.',
      'AI in Games: Pathfinding, decision trees, and state machines.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior Game Developer', description: 'Implement game mechanics and UI elements under supervision.' },
      { title: 'Game Programmer', description: 'Develop core gameplay systems and optimize engine performance.' },
      { title: 'Lead Game Developer', description: 'Direct technical vision for game titles and manage engineering teams.' },
      { title: 'Engine Developer', description: 'Focus on low-level engine architecture and graphics optimization.' },
    ],
    // Online Courses
    courses: [
      { label: 'Unity Game Development Specialization (Coursera)', href: 'https://www.coursera.org/specializations/unity-game-development' },
      { label: 'Unreal Engine 5 C++ Developer', href: 'https://www.udemy.com/course/unrealcourse/' },
      { label: 'Game Design Specialization (Coursera)', href: 'https://www.coursera.org/specializations/game-design' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Brackeys', href: 'https://www.youtube.com/@Brackeys' },
      { label: 'Game Maker\'s Toolkit', href: 'https://www.youtube.com/@GameMakersToolkit' },
      { label: 'Sebastian Lague', href: 'https://www.youtube.com/@SebastianLague' },
    ],
    // Books
    books: [
      { label: 'Game Programming Patterns by Robert Nystrom', href: 'https://gameprogrammingpatterns.com/' },
      { label: 'The Art of Game Design by Jesse Schell', href: 'https://www.schellgames.com/art-of-game-design' },
      { label: 'Real-Time Rendering by Tomas Akenine-Möller', href: 'http://www.realtimerendering.com/' },
    ],
    // Skills
    skills: [
      'C#/C++',
      'Unity/Unreal Engine',
      'Mathematics for Games',
      'Shaders & Rendering',
      'Game Design Patterns',
      'Optimization & Profiling',
    ],
    // Certifications
    certifications: [
      { label: 'Unity Certified User: Programmer', href: 'https://unity.com/products/unity-certifications/user-programmer' },
      { label: 'Unreal Engine Certification', href: 'https://www.unrealengine.com/en-US/training' },
      { label: 'C++ Certified Associate Programmer (CLA)', href: 'https://cppinstitute.org/cla-c-certified-associate-programmer-certification' },
    ],
    // Projects
    projects: [
      { title: '2D Endless Runner', description: 'Develop a simple 2D game in Unity focusing on procedural generation and object pooling.' },
      { title: 'First-Person Puzzle Room', description: 'Build a 3D environment in Unreal Engine with interactive objects and physics-based puzzles.' },
      { title: 'Turn-based Strategy Prototype', description: 'Implement a grid-based movement and combat system using C# and Unity state machines.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong programming fundamentals (C++ or C# recommended).',
      'Basic understanding of linear algebra and physics concepts.',
      'Familiarity with game engines (Unity/Unreal basics).',
    ],
  },

  // Blockchain Developer Roadmap
  {
    id: 'blockchain',
    title: 'Blockchain Developer',
    category: 'engineering',
    blurb: 'Build distributed applications, smart contracts, and secure blockchain integrations.',
    focusAreas: [
      'Smart Contracts: Writing secure code in Solidity or Rust.',
      'Decentralized Apps (dApps): Building frontend interfaces that interact with chains.',
      'Cryptography: Understanding hashing, signatures, and zero-knowledge proofs.',
      'Consensus Mechanisms: Studying Proof of Work vs. Proof of Stake.',
      'Tokenomics: Designing economic models for decentralized systems.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Blockchain Intern', description: 'Research protocols and write basic smart contracts.' },
      { title: 'Smart Contract Developer', description: 'Audit and deploy production-grade smart contracts.' },
      { title: 'Blockchain Architect', description: 'Design custom blockchain protocols or complex Layer-2 solutions.' },
      { title: 'Crypto Research Lead', description: 'Conduct deep research into new consensus and cryptographic techniques.' },
    ],
    // Online Courses
    courses: [
      { label: 'Blockchain Specialization (Coursera)', href: 'https://www.coursera.org/specializations/blockchain' },
      { label: 'Ethereum and Solidity: The Complete Guide', href: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/' },
      { label: 'Solana Development Bootcamp', href: 'https://www.solana.com/developers' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Patrick Collins', href: 'https://www.youtube.com/@PatrickCollins' },
      { label: 'EatTheBlocks', href: 'https://www.youtube.com/@EatTheBlocks' },
      { label: 'Whiteboard Crypto', href: 'https://www.youtube.com/@WhiteboardCrypto' },
    ],
    // Books
    books: [
      { label: 'Mastering Ethereum by Andreas M. Antonopoulos', href: 'https://github.com/ethereumbook/ethereumbook' },
      { label: 'Mastering Bitcoin by Andreas M. Antonopoulos', href: 'https://github.com/bitcoinbook/bitcoinbook' },
      { label: 'The Bitcoin Standard by Saifedean Ammous', href: 'https://saifedean.com/the-bitcoin-standard/' },
    ],
    // Skills
    skills: [
      'Solidity/Rust',
      'Web3.js/Ethers.js',
      'Ethereum/Solana Protocols',
      'Smart Contract Security',
      'Distributed Ledgers',
      'IPFS / Filecoin',
    ],
    // Certifications
    certifications: [
      { label: 'Certified Blockchain Developer (CBD)', href: 'https://www.blockchain-council.org/certifications/certified-blockchain-developer/' },
      { label: 'Certified Blockchain Solutions Architect (CBSA)', href: 'https://www.blockchain-council.org/certifications/certified-blockchain-architect/' },
      { label: 'ConsenSys Academy Blockchain Developer Bootcamp', href: 'https://consensys.net/academy/bootcamp/' },
    ],
    // Projects
    projects: [
      { title: 'Custom ERC-20 Token', description: 'Write and deploy a custom cryptocurrency token on an Ethereum testnet using Solidity and Hardhat.' },
      { title: 'Decentralized Voting System', description: 'Build a dApp that allows transparent, verifiable voting for community proposals.' },
      { title: 'NFT Minting Page', description: 'Create a frontend that connects to Metamask and allows users to mint unique digital assets.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong programming fundamentals (e.g., JavaScript, Python, Go).',
      'Basic understanding of cryptography and distributed systems.',
      'Familiarity with command line and developer tools.',
    ],
  },

  // Cloud Engineer Roadmap
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    category: 'cloud',
    blurb: 'Architect and operate scalable infrastructure across modern cloud platforms.',
    focusAreas: [
      'Cloud Infrastructure: Computing, storage, and networking on AWS, Azure, or GCP.',
      'Identity Management: Implementing secure IAM roles and policies.',
      'Cost Optimization: Monitoring and reducing cloud spend.',
      'Disaster Recovery: Designing resilient, multi-region architectures.',
      'Serverless: Building event-driven architectures with Lambda or Cloud Functions.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Cloud Administrator', description: 'Manage user access and monitor cloud resource health.' },
      { title: 'Cloud Engineer', description: 'Build and automate cloud infrastructure using IaC.' },
      { title: 'Cloud Architect', description: 'Design high-level cloud strategies for enterprise migrations.' },
      { title: 'Cloud Security Engineer', description: 'Specialize in securing cloud resources and compliance.' },
    ],
    // Online Courses
    courses: [
      { label: 'AWS Certified Solutions Architect Associate', href: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/' },
      { label: 'Google Associate Cloud Engineer', href: 'https://www.coursera.org/learn/preparing-cloud-engineer-exam' },
      { label: 'Azure Fundamentals (AZ-900) Microsoft Learn', href: 'https://learn.microsoft.com/en-us/training/paths/az-900-microsoft-azure-fundamentals/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'AWS Online Tech Talks', href: 'https://www.youtube.com/@AWSOnlineTechTalks' },
      { label: 'Google Cloud Tech', href: 'https://www.youtube.com/@googlecloudtech' },
      { label: 'Cloud Academy', href: 'https://www.youtube.com/@CloudAcademy' },
    ],
    // Books
    books: [
      { label: 'Cloud Architecture Patterns by Bill Wilder', href: 'https://www.oreilly.com/library/view/cloud-architecture-patterns/9781449357979/' },
      { label: 'The Cloud Strategy by Gregor Hohpe', href: 'https://architectelevator.com/cloud/' },
      { label: 'Architecting for the Cloud by AWS', href: 'https://d1.awsstatic.com/whitepapers/architecture/AWS_Cloud_Best_Practices.pdf' },
    ],
    // Skills
    skills: [
      'AWS/Azure/GCP',
      'Terraform/CloudFormation',
      'IAM & Security',
      'Cloud Networking',
      'Serverless Architectures',
      'FinOps (Cost Management)',
    ],
    // Certifications
    certifications: [
      { label: 'AWS Solutions Architect - Associate', href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
      { label: 'Google Associate Cloud Engineer', href: 'https://cloud.google.com/learn/certification/cloud-engineer' },
      { label: 'Microsoft Certified: Azure Solutions Architect Expert', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/' },
    ],
    // Projects
    projects: [
      { title: 'Highly Available Web Cluster', description: 'Provision a load-balanced auto-scaling group of web servers using Terraform on AWS or Azure.' },
      { title: 'Serverless Data Processor', description: 'Build a pipeline that automatically resizes images uploaded to an S3 bucket using AWS Lambda.' },
      { title: 'Cloud-native Monitoring Stack', description: 'Deploy and configure a centralized logging and monitoring dashboard using managed Prometheus and Grafana.' },
    ],
    // Prerequisites
    prerequisites: [
      'Basic understanding of networking (TCP/IP, DNS).',
      'Familiarity with Linux command line.',
      'Basic scripting skills (Bash or Python).',
    ],
  },

  // DevOps Engineer Roadmap
  {
    id: 'devops',
    title: 'DevOps Engineer',
    category: 'cloud',
    blurb: 'Automate delivery, infrastructure, observability, and operational excellence.',
    focusAreas: [
      'CI/CD: Automating software building, testing, and deployment.',
      'Infrastructure as Code (IaC): Provisioning servers using code (Terraform).',
      'Containerization: Orchestrating workloads with Docker and Kubernetes.',
      'Observability: Monitoring system performance and logging errors.',
      'Site Reliability: Implementing SRE principles and SLIs/SLOs.',
    ],
    // Career Paths
    careerPath: [
      { title: 'DevOps Engineer', description: 'Manage pipelines and automate environment setups.' },
      { title: 'Site Reliability Engineer (SRE)', description: 'Ensure system uptime and reliability through engineering practices.' },
      { title: 'Platform Engineer', description: 'Build internal tools and platforms for developer self-service.' },
      { title: 'Head of Infrastructure', description: 'Lead global infra strategy and manage engineering ops.' },
    ],
    // Online Courses
    courses: [
      { label: 'DevOps Specialization (Coursera)', href: 'https://www.coursera.org/specializations/devops' },
      { label: 'Docker and Kubernetes: The Complete Guide', href: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' },
      { label: 'SRE Fundamentals (Google)', href: 'https://sre.google/resources/training/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'TechWorld with Nana', href: 'https://www.youtube.com/@TechWorldwithNana' },
      { label: 'DevOps Directive', href: 'https://www.youtube.com/@DevOpsDirective' },
      { label: 'The Digital Life', href: 'https://www.youtube.com/@TheDigitalLife' },
    ],
    // Books
    books: [
      { label: 'The Phoenix Project by Gene Kim', href: 'https://itrevolution.com/book/the-phoenix-project/' },
      { label: 'Site Reliability Engineering by Google', href: 'https://sre.google/sre-book/table-of-contents/' },
      { label: 'Continuous Delivery by Jez Humble', href: 'https://martinfowler.com/books/continuousDelivery.html' },
    ],
    // Skills
    skills: [
      'Kubernetes/Docker',
      'CI/CD (GitHub Actions/Jenkins)',
      'Terraform/Ansible',
      'Prometheus/Grafana',
      'Scripting (Bash/Python)',
      'Helm & Kustomize',
    ],
    // Certifications
    certifications: [
      { label: 'Certified Kubernetes Administrator (CKA)', href: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' },
      { label: 'HashiCorp Certified: Terraform Associate', href: 'https://www.hashicorp.com/certification/terraform-associate' },
      { label: 'AWS Certified DevOps Engineer Professional', href: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/' },
    ],
    // Projects
    projects: [
      { title: 'Multi-stage CI/CD Pipeline', description: 'Create a GitHub Actions workflow that automates linting, testing, and container deployment to a staging environment.' },
      { title: 'Kubernetes Microservices Cluster', description: 'Orchestrate a multi-service application with service discovery and secret management using Helm.' },
      { title: 'Self-healing Infrastructure', description: 'Implement automated health checks and recovery scripts for a cloud environment using Ansible.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong Linux command line skills.',
      'Basic understanding of networking and system administration.',
      'Familiarity with scripting (Bash, Python).',
    ],
  },

  // Cybersecurity Specialist Roadmap
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Specialist',
    category: 'security',
    blurb: 'Protect systems through secure design, detection, response, and governance.',
    focusAreas: [
      'Network Security: Protecting infrastructure from unauthorized access.',
      'Penetration Testing: Proactively finding vulnerabilities in systems.',
      'Incident Response: Responding to and recovering from security breaches.',
      'Governance & Risk: Ensuring compliance with security standards like ISO 27001.',
      'Cloud Security: Securing multi-cloud environments and identity.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Security Analyst', description: 'Monitor logs and investigate security alerts.' },
      { title: 'Penetration Tester', description: 'Perform ethical hacking to secure applications.' },
      { title: 'Chief Information Security Officer (CISO)', description: 'Lead global security strategy and compliance.' },
      { title: 'Security Architect', description: 'Design secure enterprise-wide systems and defense layers.' },
    ],
    // Online Courses
    courses: [
      { label: 'Google Cybersecurity Professional Certificate', href: 'https://www.coursera.org/professional-certificates/google-cybersecurity' },
      { label: 'CompTIA Security+ (SY0-701) Exam Prep', href: 'https://www.udemy.com/course/securityplus/' },
      { label: 'Offensive Security Certified Professional (PWK)', href: 'https://www.offsec.com/courses/pen-200/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'John Hammond', href: 'https://www.youtube.com/@JohnHammond010' },
      { label: 'The Cyber Mentor', href: 'https://www.youtube.com/@TheCyberMentor' },
      { label: 'IppSec', href: 'https://www.youtube.com/@IppSec' },
    ],
    // Books
    books: [
      { label: 'The Web Application Hacker\'s Handbook', href: 'https://www.wiley.com/en-us/The+Web+Application+Hacker\'s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472' },
      { label: 'Hacking: The Art of Exploitation by Jon Erickson', href: 'https://nostarch.com/hacking2.htm' },
      { label: 'Practical Malware Analysis', href: 'https://nostarch.com/malware' },
    ],
    // Skills
    skills: [
      'Ethical Hacking',
      'Network Defense',
      'Cryptography',
      'Security Auditing',
      'Incident Management',
      'Wireshark / Burp Suite',
      'Linux Systems Security',
    ],
    // Certifications
    certifications: [
      { label: 'CompTIA Security+', href: 'https://www.comptia.org/certifications/security' },
      { label: 'Certified Information Systems Security Professional (CISSP)', href: 'https://www.isc2.org/Certifications/CISSP' },
      { label: 'eLearnSecurity Junior Penetration Tester (eJPT)', href: 'https://ine.com/learning/paths/elearnsecurity-junior-penetration-tester-v2' },
    ],
    // Projects
    projects: [
      { title: 'Vulnerability Scanner Lab', description: 'Setup an isolated environment to perform vulnerability assessments using tools like Nessus or Nmap.' },
      { title: 'Secure Credential Vault', description: 'Develop a CLI tool that securely encrypts and stores local secrets using AES-256 and salt.' },
      { title: 'Intrusion Detection Dashboard', description: 'Configure Snort or Suricata to monitor network traffic and generate alerts for suspicious activity.' },
    ],
    // Prerequisites
    prerequisites: [
      'Basic understanding of computer networks and operating systems.',
      'Familiarity with Linux command line.',
      'Understanding of common security concepts (e.g., firewalls, encryption).',
    ],
  },

  // Network Engineer Roadmap
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    category: 'infrastructure',
    blurb: 'Design and troubleshoot resilient enterprise networks and connectivity layers.',
    focusAreas: [
      'Routing and Switching: Configuring hardware for efficient data flow.',
      'Network Protocols: Deep understanding of TCP/IP, DNS, and BGP.',
      'Wireless Networking: Designing and securing enterprise Wi-Fi systems.',
      'Network Automation: Using Python or Ansible to manage large networks.',
      'Network Monitoring: Using SNMP and NetFlow for traffic analysis.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior Network Engineer', description: 'Install network hardware and perform basic troubleshooting.' },
      { title: 'Network Engineer', description: 'Design network topologies and manage core infrastructure.' },
      { title: 'Senior Network Architect', description: 'Design complex wide-area networks and high-level connectivity strategies.' },
      { title: 'NOC Manager', description: 'Lead the Network Operations Center and manage incident response.' },
    ],
    // Online Courses
    courses: [
      { label: 'Cisco CCNA 200-301 Complete Course', href: 'https://www.udemy.com/course/ccna-complete/' },
      { label: 'CompTIA Network+ (N10-008)', href: 'https://www.udemy.com/course/new-comptia-network-n10-008/' },
      { label: 'Network Programmability and Automation (Cisco)', href: 'https://learningnetwork.cisco.com/s/topic/0TO3i0000008jXmGAI/network-programmability-and-automation' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'NetworkChuck', href: 'https://www.youtube.com/@NetworkChuck' },
      { label: 'David Bombal', href: 'https://www.youtube.com/@davidbombal' },
      { label: 'Keith Barker', href: 'https://www.youtube.com/@keithbarker' },
    ],
    // Books
    books: [
      { label: 'Computer Networking: A Top-Down Approach', href: 'https://www.pearson.com/en-us/subject-catalog/p/computer-networking-a-top-down-approach/P200000003310' },
      { label: 'TCP/IP Illustrated, Vol. 1', href: 'https://www.pearson.com/en-us/subject-catalog/p/tcp-ip-illustrated-volume-1-the-protocols/P200000003291' },
      { label: 'Network Warrior by Gary A. Donahue', href: 'https://www.oreilly.com/library/view/network-warrior-2nd/9781449307479/' },
    ],
    // Skills
    skills: [
      'TCP/IP Networking',
      'Router Configuration',
      'Firewall Management',
      'VPN Setup',
      'Network Monitoring',
      'Python for Automation',
      'Subnetting & IP Planning',
    ],
    // Certifications
    certifications: [
      { label: 'Cisco Certified Network Associate (CCNA)', href: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html' },
      { label: 'CompTIA Network+', href: 'https://www.comptia.org/certifications/network' },
      { label: 'Cisco Certified Network Professional (CCNP)', href: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html' },
    ],
    // Projects
    projects: [
      { title: 'Enterprise Network Simulation', description: 'Design and simulate a multi-site corporate network with VLANs and OSPF routing using Packet Tracer.' },
      { title: 'Python Network Auditor', description: 'Build a script that connects to multiple routers via SSH to pull configuration and check for security compliance.' },
      { title: 'Secure Site-to-Site VPN', description: 'Configure a secure tunnel between two virtual private clouds to enable private communication.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong understanding of TCP/IP fundamentals.',
      'Familiarity with network hardware (routers, switches).',
      'Basic command line skills (e.g., Cisco IOS, Linux).',
    ],
  },

  // Network Technician Roadmap
  {
    id: 'network-technician',
    title: 'Network Technician',
    category: 'infrastructure',
    blurb: 'Support, maintain, and diagnose physical and logical network environments.',
    focusAreas: [
      'Hardware Installation: Setting up racks, cables, and access points.',
      'Troubleshooting: Diagnosing connectivity issues at the physical layer.',
      'Maintenance: Performing firmware updates and hardware replacements.',
      'Site Surveys: Assessing wireless and physical coverage requirements.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Field Technician', description: 'Perform on-site hardware installations and repairs.' },
      { title: 'Network Support Specialist', description: 'Provide remote support for network connectivity issues.' },
      { title: 'Fiber Optic Technician', description: 'Specialize in splicing and testing high-speed fiber networks.' },
    ],
    // Online Courses
    courses: [
      { label: 'Google IT Support Professional Certificate', href: 'https://www.coursera.org/professional-certificates/google-it-support' },
      { label: 'Cisco Certified Support Technician (CCST) Networking', href: 'https://www.skillsforall.com/career-path/networking' },
      { label: 'Fiber Optic Installation and Splicing', href: 'https://www.thefoa.org/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'PowerCert Animated Videos', href: 'https://www.youtube.com/@PowerCertAnimatedVideos' },
      { label: 'Professor Messer', href: 'https://www.youtube.com/@professormesser' },
      { label: 'NetworkChuck', href: 'https://www.youtube.com/@NetworkChuck' },
    ],
    // Books
    books: [
      { label: 'CompTIA Network+ Certification All-in-One Exam Guide', href: 'https://www.mheducation.com/highered/product/comptia-network-certification-all-one-exam-guide-eighth-edition-exam-n10-008-meyers/9781264269051.html' },
      { label: 'Networking for Dummies', href: 'https://www.wiley.com/en-us/Networking+For+Dummies%2C+12th+Edition-p-9781119648994' },
      { label: 'The Practice of System and Network Administration', href: 'https://the-practice-of-sysadmin.com/' },
    ],
    // Skills
    skills: [
      'Cable Management',
      'Hardware Troubleshooting',
      'Basic Subnetting',
      'Wireless AP Setup',
    ],
    // Certifications
    certifications: [
      { label: 'CompTIA A+', href: 'https://www.comptia.org/certifications/a' },
      { label: 'CompTIA Network+', href: 'https://www.comptia.org/certifications/network' },
      { label: 'Cisco Certified Support Technician (CCST)', href: 'https://www.skillsforall.com/career-path/networking' },
    ],
    // Projects
    projects: [
      { title: 'Home Lab Setup', description: 'Configure a personal home network with separate VLANs for IoT and personal devices.' },
      { title: 'Small Office Network Installation Plan', description: 'Design a complete installation pack with equipment choices, cable schedule, Wi-Fi plan, testing checklist, and handover notes.' },
      { title: 'Network Fault Casebook', description: 'Document several simulated connectivity incidents with symptoms, diagnostic evidence, root causes, fixes, and prevention steps.' },
    ],
    // Prerequisites
    prerequisites: [
      'Basic interest in computer hardware.',
      'Familiarity with setting up home routers.',
    ],
  },
  // IT Support Specialist Roadmap
  {
    id: 'it-support-specialist',
    title: 'IT Support Specialist',
    category: 'support',
    blurb: 'Resolve user issues, manage endpoints, and improve operational reliability.',
    focusAreas: [
      'Endpoint Management: Maintaining laptops, desktops, and mobile devices.',
      'Technical Troubleshooting: Resolving software and hardware issues for users.',
      'Identity & Access: Managing user accounts in Active Directory or Okta.',
      'Customer Service: Communicating technical solutions to non-technical users.',
      'Security Fundamentals: Protecting endpoints from malware and unauthorized access.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Help Desk Technician', description: 'Act as the first point of contact for technical support requests.' },
      { title: 'IT Support Engineer', description: 'Resolve complex technical issues and manage internal IT projects.' },
      { title: 'IT Manager', description: 'Oversee IT operations and support teams for the organization.' },
      { title: 'Systems Administrator', description: 'Manage and maintain the entire server and endpoint infrastructure.' },
    ],
    // Online Courses
    courses: [
      { label: 'Google IT Support Professional Certificate', href: 'https://grow.google/certificates/it-support/' },
      { label: 'Microsoft 365 Certified: Endpoint Administrator', href: 'https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop-administrator/' },
      { label: 'ITIL 4 Foundation (Axelos)', href: 'https://www.axelos.com/certifications/itil-service-management/itil-4-foundation' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'PowerCert Animated Videos', href: 'https://www.youtube.com/@PowerCertAnimatedVideos' },
      { label: 'Eli the Computer Guy', href: 'https://www.youtube.com/@elithecomputerguy' },
      { label: 'CBT Nuggets', href: 'https://www.youtube.com/@cbtnuggets' },
    ],
    // Books
    books: [
      { label: 'CompTIA A+ Certification All-in-One Exam Guide', href: 'https://www.mheducation.com/highered/product/comptia-certification-all-one-exam-guide-eleventh-edition-exams-220-1101-220-1102-meyers-jernigan/9781264285761.html' },
      { label: 'The Practice of System and Network Administration', href: 'https://the-practice-of-sysadmin.com/' },
      { label: 'The IT Support Handbook by Allan Irvine', href: 'https://www.apress.com/gp/book/9781484255155' },
    ],
    // Skills
    skills: [
      'Windows/macOS Support',
      'Active Directory',
      'Troubleshooting',
      'Customer Service',
      'Office 365/SaaS Admin',
      'PowerShell/Bash Scripting',
      'MDM (Intune/Jamf)',
    ],
    // Certifications
    certifications: [
      { label: 'Google IT Support Professional Certificate', href: 'https://grow.google/certificates/it-support/' },
      { label: 'CompTIA A+', href: 'https://www.comptia.org/certifications/a' },
      { label: 'Microsoft 365 Certified: Endpoint Administrator Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop-administrator/' },
    ],
    // Projects
    projects: [
      { title: 'Automated Workstation Setup', description: 'Create a script that installs standard corporate software and security patches on new Windows/macOS machines.' },
      { title: 'IT Support Knowledge Base', description: 'Build a searchable wiki or documentation site for common internal troubleshooting steps.' },
      { title: 'Ticketing Workflow Optimization', description: 'Configure an automated help desk workflow that routes tickets based on priority and category.' },
    ],
    // Prerequisites
    prerequisites: [
      'Basic computer hardware and software knowledge.',
      'Good communication and problem-solving skills.',
      'Familiarity with common office applications.',
    ],
  },

  // Data Analyst Roadmap
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'data',
    blurb: 'Turn raw data into reporting, dashboards, and decisions stakeholders can use.',
    focusAreas: [
      'Data Cleaning: Preparing raw data for analysis using SQL or Python.',
      'Statistical Analysis: Interpreting trends and patterns in complex datasets.',
      'Data Visualization: Creating dashboards with tools like Tableau or Power BI.',
      'Reporting: Communicating insights to business stakeholders.',
      'ETL Processes: Moving and transforming data between systems.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior Data Analyst', description: 'Clean data and build basic reports for business units.' },
      { title: 'Data Analyst', description: 'Independent analysis of business trends and dashboard creation.' },
      { title: 'Senior Data Analyst', description: 'Drive strategic data decisions and optimize analytics workflows.' },
      { title: 'Analytics Manager', description: 'Manage teams of analysts and set the analytics strategy for the business.' },
    ],
    // Online Courses
    courses: [
      { label: 'Google Data Analytics Professional Certificate', href: 'https://grow.google/certificates/data-analytics/' },
      { label: 'Excel to MySQL: Analytic Techniques for Business', href: 'https://www.coursera.org/specializations/excel-mysql' },
      { label: 'Tableau Desktop Specialist', href: 'https://www.udemy.com/course/tableau-desktop-specialist-certification-guide/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Alex The Analyst', href: 'https://www.youtube.com/@AlexTheAnalyst' },
      { label: 'Luke Barousse', href: 'https://www.youtube.com/@LukeBarousse' },
      { label: 'Tina Huang', href: 'https://www.youtube.com/@TinaHuang1' },
    ],
    // Books
    books: [
      { label: 'Storytelling with Data by Cole Nussbaumer Knaflic', href: 'https://www.storytellingwithdata.com/books' },
      { label: 'Data Science for Business by Foster Provost', href: 'https://www.oreilly.com/library/view/data-science-for/9781449374273/' },
      { label: 'Naked Statistics by Charles Wheelan', href: 'https://wwnorton.com/books/9780393347777' },
    ],
    // Skills
    skills: [
      'SQL',
      'Python/R',
      'Tableau/Power BI',
      'Statistics',
      'Excel (Advanced)',
      'BigQuery / Snowflake',
      'Data Warehousing',
    ],
    // Certifications
    certifications: [
      { label: 'Google Data Analytics Professional Certificate', href: 'https://grow.google/certificates/data-analytics/' },
      { label: 'Microsoft Certified: Power BI Data Analyst Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/' },
      { label: 'Tableau Desktop Specialist', href: 'https://www.tableau.com/learn/certification/desktop-specialist' },
    ],
    // Projects
    projects: [
      { title: 'Sales Performance Dashboard', description: 'Analyze a retail dataset to create interactive visualizations showing revenue trends and product performance.' },
      { title: 'Customer Churn Analysis', description: 'Use SQL and Python to identify segments of users at risk of leaving a service based on activity patterns.' },
      { title: 'Public Data Story', description: 'Find a public dataset (e.g., world health or census) and create a narrative report explaining key findings.' },
    ],
    // Prerequisites
    prerequisites: [
      'Proficiency in Excel.',
      'Basic understanding of statistics.',
      'Familiarity with SQL.',
    ],
  },

  // Data Scientist Roadmap
  {
    id: 'data-science',
    title: 'Data Scientist',
    category: 'data',
    blurb: 'Model business problems using statistics, experimentation, and machine learning.',
    focusAreas: [
      'Predictive Modeling: Building algorithms to forecast future outcomes.',
      'Machine Learning: Training models on large historical datasets.',
      'A/B Testing: Running experiments to validate business hypotheses.',
      'Advanced Math: Deep knowledge of linear algebra and probability.',
      'Big Data: Using Spark or Hadoop for large-scale data processing.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Data Scientist', description: 'Build predictive models and conduct deep-dive research.' },
      { title: 'Senior Data Scientist', description: 'Lead research projects and design experimental frameworks.' },
      { title: 'Lead Data Scientist', description: 'Set data strategy and manage advanced science teams.' },
      { title: 'ML Researcher', description: 'Focus on advancing the state-of-the-art in machine learning algorithms.' },
    ],
    // Online Courses
    courses: [
      { label: 'IBM Data Science Professional Certificate', href: 'https://www.coursera.org/professional-certificates/ibm-data-science' },
      { label: 'Machine Learning Specialization by Andrew Ng', href: 'https://www.coursera.org/specializations/machine-learning-introduction' },
      { label: 'Data Science with Python (DataCamp)', href: 'https://www.datacamp.com/tracks/data-scientist-with-python' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'StatQuest with Josh Starmer', href: 'https://www.youtube.com/@statquest' },
      { label: 'Krish Naik', href: 'https://www.youtube.com/@krishnaik06' },
      { label: 'Ken Jee', href: 'https://www.youtube.com/@KenJee_ds' },
    ],
    // Books
    books: [
      { label: 'Python for Data Analysis by Wes McKinney', href: 'https://wesmckinney.com/book/' },
      { label: 'Hands-On Machine Learning (O\'Reilly)', href: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
      { label: 'The Elements of Statistical Learning', href: 'https://web.stanford.edu/~hastie/ElemStatLearn/' },
    ],
    // Skills
    skills: [
      'Python (Scikit-Learn/Pandas)',
      'Machine Learning Algorithms',
      'Experimental Design',
      'Data Storytelling',
      'Apache Spark / PySpark',
      'Linear Algebra & Calculus',
    ],
    // Certifications
    certifications: [
      { label: 'IBM Data Science Professional Certificate', href: 'https://www.coursera.org/professional-certificates/ibm-data-science' },
      { label: 'Google Professional Data Engineer', href: 'https://cloud.google.com/learn/certification/data-engineer' },
      { label: 'SAS Certified Data Scientist', href: 'https://www.sas.com/en_us/certification/credentials/data-science/data-scientist.html' },
    ],
    // Projects
    projects: [
      { title: 'House Price Predictor', description: 'Build a regression model to estimate property values based on features like location and size.' },
      { title: 'Sentiment Analysis Engine', description: 'Train a model to classify movie reviews or tweets as positive, negative, or neutral.' },
      { title: 'Market Basket Analysis', description: 'Analyze transaction data to discover associations between products using the Apriori algorithm.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong mathematical and statistical background.',
      'Proficiency in Python or R.',
      'Familiarity with data manipulation libraries (e.g., Pandas).',
    ],
  },

  // Data Engineer Roadmap
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    category: 'data',
    blurb: 'Build and maintain the data pipelines and infrastructure that power analytics and machine learning.',
    focusAreas: [
      'Data Pipelines: Building ETL/ELT workflows with tools like Airflow or dbt.',
      'Data Warehousing: Designing schemas and optimizing queries in Redshift or BigQuery.',
      'Streaming Data: Implementing real-time data processing with Kafka or Spark Streaming.',
      'Data Quality: Ensuring accuracy and reliability of data through testing and monitoring.',
      'Cloud Data Platforms: Managing data infrastructure on AWS, GCP, or Azure.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Data Engineer', description: 'Build and maintain data pipelines for analytics and ML.' },
      { title: 'Senior Data Engineer', description: 'Design complex data architectures and optimize performance.' },
      { title: 'Data Engineering Manager', description: 'Lead teams responsible for data infrastructure strategy.' },
      { title: 'Big Data Architect', description: 'Design large-scale data processing systems and cloud data platforms.' },
      { title: 'ML Data Engineer', description: 'Specialize in building data pipelines for machine learning applications.' },
    ],
    // Online Courses
    courses: [
      { label: 'Google Cloud Data Engineering Professional Certificate', href: 'https://www.coursera.org/professional-certificates/google-cloud-data-engineering' },
      { label: 'Data Engineering on Google Cloud (Coursera)', href: 'https://www.coursera.org/specializations/gcp-data-engineering' },
      { label: 'Data Engineering with AWS (Udemy)', href: 'https://www.udemy.com/course/aws-data-engineering/' },
      { label: 'Data Engineering with Azure (Udemy)', href: 'https://www.udemy.com/course/azure-data-engineering/' },
      { label: 'Data Engineering with Databricks (Udemy)', href: 'https://www.udemy.com/course/data-engineering-with-databricks/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Learn Data Engineering', href: 'https://www.youtube.com/@andreaskayy' },
      { label: 'Data Engineering Podcast', href: 'https://www.youtube.com/@dataengineeringpodcast' },
      { label: 'Data Engineering with Python', href: 'https://www.youtube.com/@dataengineeringwithpython' },
      { label: 'Google Cloud Platform', href: 'https://www.youtube.com/@GoogleCloudPlatform' },

    ],
    // Books
    books: [
      { label: 'Designing Data-Intensive Applications by Martin Kleppmann', href: 'https://dataintensive.net/' },
      { label: 'The Data Warehouse Toolkit by Ralph Kimball', href: 'https://www.wiley.com/en-us/The+Data+Warehouse+Toolkit%3A+The+Definitive+Guide+to+Dimensional+Modeling%2C+3rd+Edition-p-9781118530801' },
      { label: 'Streaming Systems by Tyler Akidau', href: 'https://streamingbook.net/' },
    ],
    // Skills
    skills: [
      'SQL & NoSQL Databases',
      'Python/Java/Scala',
      'Apache Airflow / dbt',
      'Cloud Data Platforms (AWS/GCP/Azure)',
      'Apache Spark / Hadoop',
      'Data Modeling & Warehousing',
      'Data Quality & Governance',
    ],
    // Certifications
    certifications: [
      { label: 'Google Cloud Data Engineering Professional Certificate', href: 'https://cloud.google.com/certification/data-engineer' },
      { label: 'AWS Certified Data Analytics - Specialty', href: 'https://aws.amazon.com/certification/certified-data-analytics-specialty/' },
      { label: 'Azure Data Engineer Associate', href: 'https://docs.microsoft.com/en-us/certification/azure-data-engineer/' },
      { label: 'Databricks Certified Data Engineer Associate', href: 'https://databricks.com/learn/certification/data-engineer-associate' },
    ],

    // Projects
    projects: [
      { title: 'ETL Pipeline with Airflow', description: 'Build a data pipeline that extracts data from an API, transforms it, and loads it into a data warehouse on a scheduled basis.' },
      { title: 'Real-time Data Processing', description: 'Implement a streaming data pipeline using Kafka and Spark Streaming to process and analyze real-time data.' },
      { title: 'Data Warehouse Design', description: 'Design and implement a dimensional data warehouse schema for a retail dataset and optimize query performance.' },
    ],
    // Prerequisites
    prerequisites: [
      'Proficiency in SQL.',
      'Experience with programming languages (Python, Java, or Scala).',
      'Familiarity with cloud platforms and data storage solutions.',
    ],
  },

  // Machine Learning Engineer Roadmap
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    category: 'ai',
    blurb: 'Deploy, monitor, and productionize machine learning systems at scale.',
    focusAreas: [
      'ML Pipelines: Automating model training and deployment cycles.',
      'Feature Engineering: Optimizing data inputs for model accuracy.',
      'Model Monitoring: Tracking model drift and performance in production.',
      'High Performance Computing: Optimizing models for inference speed.',
      'Infrastructure for ML: Provisioning GPUs and managing distributed training clusters.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior ML Engineer', description: 'Support data engineers and assist in model deployment.' },
      { title: 'ML Engineer', description: 'Build and maintain production-ready machine learning pipelines.' },
      { title: 'Senior ML Engineer', description: 'Design complex ML architectures and lead MLOps practices.' },
      { title: 'Head of AI', description: 'Lead AI strategy and manage cross-functional AI teams.' },
    ],
    // Online Courses
    courses: [
      { label: 'Machine Learning Engineering for Production (MLOps)', href: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops' },
      { label: 'Deep Learning Specialization (Coursera)', href: 'https://www.coursera.org/specializations/deep-learning' },
      { label: 'MLOps (DeepLearning.AI)', href: 'https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Sentdex', href: 'https://www.youtube.com/@sentdex' },
      { label: 'Yannic Kilcher', href: 'https://www.youtube.com/@YannicKilcher' },
      { label: 'DeepLearning.AI', href: 'https://www.youtube.com/@Deeplearningai' },
    ],
    // Books
    books: [
      { label: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', href: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
      { label: 'Machine Learning Engineering by Andriy Burkov', href: 'http://www.mlebook.com/' },
      { label: 'Deep Learning (Adaptive Computation and Machine Learning series) by Ian Goodfellow', href: 'https://www.deeplearningbook.org/' },
    ],
    // Skills
    skills: [
      'PyTorch/TensorFlow',
      'MLOps Tools (MLflow/Kubeflow)',
      'Data Engineering',
      'Model Deployment',
      'Nvidia CUDA / TensorRT',
      'Distributed Training',
    ],
    // Certifications
    certifications: [
      { label: 'Google Professional Machine Learning Engineer', href: 'https://cloud.google.com/learn/certification/machine-learning-engineer' },
      { label: 'AWS Certified Machine Learning - Specialty', href: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/' },
      { label: 'TensorFlow Developer Certificate (Retired - Now Google ML)', href: 'https://www.tensorflow.org/certificate' },
    ],
    // Projects
    projects: [
      { title: 'Productionized Image Classifier', description: 'Deploy a deep learning model behind a FastAPI endpoint containerized with Docker.' },
      { title: 'Automated Model Retraining', description: 'Build a pipeline that monitors model performance and triggers retraining when accuracy drops below a threshold.' },
      { title: 'Recommendation Engine Microservice', description: 'Create a scalable service that provides personalized product recommendations based on user history.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong programming skills (Python).',
      'Solid understanding of machine learning algorithms and statistics.',
      'Familiarity with data structures and algorithms.',
    ],
  },

  // AI Engineer Roadmap
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    category: 'ai',
    blurb: 'Build applied AI products with modern model orchestration, evaluation, and safety practices.',
    focusAreas: [
      'LLM Orchestration: Working with OpenAI, Anthropic, or Open Source models.',
      'RAG Pipelines: Connecting AI models to private knowledge bases.',
      'AI Safety & Bias: Implementing guardrails for responsible AI use.',
      'Prompt Engineering: Optimizing model outputs for specific tasks.',
      'Agentic Workflows: Building autonomous agents with tools and memory.',
    ],
    // Career Paths
    careerPath: [
      { title: 'AI Developer', description: 'Integrate LLMs into existing product workflows.' },
      { title: 'AI Engineer', description: 'Design and optimize generative AI systems and RAG pipelines.' },
      { title: 'AI Solutions Architect', description: 'Lead enterprise-wide AI strategy and infrastructure design.' },
      { title: 'AI Research Engineer', description: 'Bridge the gap between research models and production systems.' },
    ],
    // Online Courses
    courses: [
      { label: 'Generative AI with Large Language Models (Coursera)', href: 'https://www.coursera.org/learn/generative-ai-with-llms' },
      { label: 'LangChain for LLM Application Development (DeepLearning.AI)', href: 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/' },
      { label: 'Full Stack LLM Bootcamp', href: 'https://fullstackdeeplearning.com/llm-bootcamp/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'AI Explained', href: 'https://www.youtube.com/@ai-explained' },
      { label: 'Fireship', href: 'https://www.youtube.com/@Fireship' },
      { label: 'Two Minute Papers', href: 'https://www.youtube.com/@TwoMinutePapers' },
    ],
    // Books
    books: [
      { label: 'Natural Language Processing with Transformers', href: 'https://www.oreilly.com/library/view/natural-language-processing/9781098136789/' },
      { label: 'Artificial Intelligence: A Modern Approach', href: 'http://aima.cs.berkeley.edu/' },
      { label: 'Generative AI on AWS by Chris Fregly', href: 'https://www.oreilly.com/library/view/generative-ai-on/9781098159214/' },
    ],
    // Skills
    skills: [
      'LLM Frameworks (LangChain/LlamaIndex)',
      'Vector Databases',
      'Prompt Engineering',
      'API Orchestration',
      'Evaluation Frameworks (RAGAS)',
      'Agentic Systems',
    ],
    // Certifications
    certifications: [
      { label: 'Microsoft Certified: Azure AI Engineer Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/' },
      { label: 'NVIDIA Deep Learning Institute Certifications', href: 'https://www.nvidia.com/en-us/training/' },
      { label: 'AWS Certified Machine Learning - Specialty', href: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/' },
    ],
    // Projects
    projects: [
      { title: 'RAG-based Document Assistant', description: 'Build a chatbot that answers questions about a specific PDF or documentation set using LangChain and a Vector DB.' },
      { title: 'Personal AI Writing Coach', description: 'Create an app that provides feedback on writing style and clarity using fine-tuned LLM prompts.' },
      { title: 'Autonomous Task Agent', description: 'Develop an agent that can browse the web or perform local file operations to complete multi-step objectives.' },
    ],
    // Prerequisites
    prerequisites: [
      'Strong programming skills (Python).',
      'Understanding of machine learning fundamentals.',
      'Familiarity with data processing and APIs.',
    ],
  },

  // UX/UI Designer Roadmap
  {
    id: 'ux-ui-designer',
    title: 'UX/UI Designer',
    category: 'design',
    blurb: 'Design flows, systems, and interfaces that make digital products usable and clear.',
    focusAreas: [
      'User Research: Conducting interviews to understand user needs.',
      'Interaction Design: Crafting intuitive flows and transitions.',
      'Visual Design: Applying typography, color, and grid systems.',
      'Prototyping: Creating interactive mockups in Figma or Adobe XD.',
      'Design Systems: Building scalable component libraries and documentation.',
    ],
    // Career Paths
    careerPath: [
      { title: 'Junior UX Designer', description: 'Perform wireframing and assist in user research sessions.' },
      { title: 'Product Designer', description: 'Own the end-to-end design process for a product feature.' },
      { title: 'Senior UX Designer', description: 'Lead design systems and drive user-centric product strategy.' },
      { title: 'Design Manager', description: 'Lead design teams and define design culture and processes.' },
    ],
    // Online Courses
    courses: [
      { label: 'Google UX Design Professional Certificate', href: 'https://www.coursera.org/professional-certificates/google-ux-design' },
      { label: 'UX Design Institute Diploma', href: 'https://www.uxdesigninstitute.com/courses/ux-design' },
      { label: 'Interaction Design Foundation Courses', href: 'https://www.interaction-design.org/courses' },
      { label: 'Design Systems with Brad Frost (FrontEndMasters)', href: 'https://frontendmasters.com/courses/design-systems/' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Flux Academy', href: 'https://www.youtube.com/@FluxAcademy' },
      { label: 'Mizko', href: 'https://www.youtube.com/@Mizko' },
      { label: 'CharliMarieTV', href: 'https://www.youtube.com/@CharliMarieTV' },
      { label: 'DesignCourse', href: 'https://www.youtube.com/@DesignCourse' },
    ],
    // Books
    books: [
      { label: 'Don\'t Make Me Think by Steve Krug', href: 'https://sensible.com/dont-make-me-think/' },
      { label: 'The Design of Everyday Things by Don Norman', href: 'https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/' },
      { label: 'Refactoring UI by Adam Wathan & Steve Schoger', href: 'https://www.refactoringui.com/' },
    ],
    // Skills
    skills: [
      'Figma/Adobe XD',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Hierarchy',
      'Accessibility (WCAG)',
      'Design Systems',
    ],
    // Certifications
    certifications: [
      { label: 'Google UX Design Professional Certificate', href: 'https://grow.google/uxdesign/' },
      { label: 'NN/g UX Certification', href: 'https://www.nngroup.com/ux-certification/' },
      { label: 'Interaction Design Foundation Certificates', href: 'https://www.interaction-design.org/certificates' },
      { label: 'Adobe Certified Expert (ACE)', href: 'https://learning.adobe.com/certification.html' },
    ],
    // Projects
    projects: [
      { title: 'Comprehensive Design System', description: 'Build a library of reusable UI components in Figma with detailed documentation on usage and accessibility.' },
      { title: 'User Research Case Study', description: 'Conduct a complete UX research cycle including interviews, personas, and usability testing for a mobile app idea.' },
      { title: 'High-Fidelity Interactive Prototype', description: 'Create a complex, animated prototype in Adobe XD or Protopie that simulates a real product experience.' },
    ],
    // Prerequisites
    prerequisites: [
      'Basic understanding of design principles.',
      'Familiarity with design tools (e.g., Figma, Adobe XD).',
      'Empathy for users and problem-solving mindset.',
    ],
  },
];
