export const languageCategories = {
  language: 'Language',
  framework: 'Framework',
  tooling: 'Tooling',
  cloud: 'Cloud',
  platform: 'Platform',
};

export const languages = [
  // JavaScript Language
  {
    id: 'javascript',
    title: 'JavaScript',
    category: 'language',
    blurb: 'The core scripting language behind modern web applications and ecosystem tooling.',
    focusAreas: [
      'DOM Manipulation: Interacting with and updating the browser UI.',
      'Asynchronous Programming: Mastering Promises, Async/Await, and Event Loops.',
      'ES6+ Features: Using modern syntax like destructuring, arrow functions, and modules.',
      'Functional Programming: Understanding higher-order functions, map, filter, and reduce.',
      'Closures and Prototypes: Deep diving into JavaScript\'s inheritance and scoping models.',
      'Event Loop & Concurrency: Understanding how JS handles non-blocking I/O.',
      'Modules (ESM vs CJS): Navigating the modern landscape of package management.',
    ],

    // Skills
    skills: [
      'ES6+ JavaScript',
      'Asynchronous JS',
      'Functional Programming',
      'Fetch API / Ajax',
      'Debugging (Chrome DevTools)',
      'State Management Concepts',
      'Module Systems (ESM/CJS)',
    ],

    // Career Path
    careerPath: [
      { title: 'Junior Web Developer', description: 'Build interactive UIs and integrate basic frontend logic.' },
      { title: 'Frontend Engineer', description: 'Specialize in complex client-side applications and state management.' },
      { title: 'Node.js Developer', description: 'Use JavaScript on the server to build APIs and microservices.' },
      { title: 'Full Stack Engineer', description: 'Bridging the gap between the browser and the server using a unified language.' },
    ],

    // Certifications
    certifications: [
      { label: 'JS Institute JSE – Certified Entry-Level JavaScript Programmer', href: 'https://jsinstitute.org/jse-certification' },
      { label: 'W3Schools JavaScript Certificate', href: 'https://www.w3schools.com/cert/cert_javascript.asp' },
      { label: 'Meta Front-End Developer Certificate (Coursera)', href: 'https://www.coursera.org/professional-certificates/meta-front-end-developer' },
      { label: 'HackerRank JavaScript (Basic) Certification', href: 'https://www.hackerrank.com/certificates/javascript-basic' },
    ],

    // Courses
    courses: [
      { label: 'The Complete JavaScript Course (Udemy)', href: 'https://www.udemy.com/course/the-complete-javascript-course/' },
      { label: 'JavaScript Algorithms and Data Structures (freeCodeCamp)', href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
      { label: 'JavaScript: The Hard Parts (Frontend Masters)', href: 'https://frontendmasters.com/courses/javascript-hard-parts-v2/' },
      { label: 'Modern JavaScript from the Beginning (Traversy Media)', href: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/' },
    ],

    // YouTube Channels
    youtubeChannels: [
      { label: 'Web Dev Simplified', href: 'https://www.youtube.com/@WebDevSimplified' },
      { label: 'Fireship', href: 'https://www.youtube.com/@Fireship' },
      { label: 'Traversy Media', href: 'https://www.youtube.com/@traversymedia' },
      { label: 'The Net Ninja', href: 'https://www.youtube.com/@NetNinja' },
    ],

    // Books
    books: [
      { label: 'Eloquent JavaScript by Marijn Haverbeke', href: 'https://eloquentjavascript.net/' },
      { label: 'You Don\'t Know JS by Kyle Simpson', href: 'https://github.com/getify/You-Dont-Know-JS' },
      { label: 'JavaScript: The Good Parts by Douglas Crockford', href: 'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/' },
      { label: 'Deep JavaScript by Axel Rauschmayer', href: 'https://exploringjs.com/deep-js/' },
    ],

    // Projects
    projects: [
      { title: 'Interactive Weather App', description: 'Fetch data from a weather API and dynamically update the UI based on user search.' },
      { title: 'Task Manager with LocalStorage', description: 'Create a CRUD application that persists user data in the browser.' },
      { title: 'Real-time Chat App', description: 'Implement a basic messaging system using WebSockets (Socket.io).' },
    ],

    // Prerequisites
    prerequisites: [
      'Basic understanding of HTML and CSS.',
      'Familiarity with how browsers work.',
      'Understanding of core programming concepts like variables, loops, and functions.',
    ],
  },

  // TypeScript Language
  {
    id: 'typescript',
    title: 'TypeScript',
    category: 'language',
    blurb: 'JavaScript with static typing, now expected in many production frontend and backend teams.',
    focusAreas: [
      'Static Typing: Defining types for variables, functions, and objects.',
      'Interfaces & Types: Creating complex data structures and contracts.',
      'Generics: Building reusable and flexible components.',
      'TSConfig: Managing compiler options and project architecture.',
      'Type Assertion & Guards: Handling dynamic data safely with static types.',
    ],

    // Skills
    skills: [
      'Strict Typing',
      'Advanced Types (Union, Intersection)',
      'Type Guards',
      'Build Tool Integration',
    ],

    // Career Path
    careerPath: [
      { title: 'Software Engineer', description: 'Develop robust, type-safe applications for web or node environments.' },
      { title: 'Senior Frontend Developer', description: 'Architect large-scale frontend systems with strict type safety.' },
      { title: 'Full Stack TS Developer', description: 'Ensure end-to-end type safety from the database to the UI.' },
    ],
    certifications: [
      { label: 'Learn TypeScript (Codecademy)', href: 'https://www.codecademy.com/learn/learn-typescript' },
      { label: 'TypeScript (Basic) Skills Certification (HackerRank)', href: 'https://www.hackerrank.com/certificates/typescript-basic' },
      { label: 'TypeScript Certification (Udemy)', href: 'https://www.udemy.com/course/typescript-certification-course/' },
      { label: 'Microsoft Certified: TypeScript Developer Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/typescript-developer/'},
    ],

    // Courses
    courses: [
      { label: 'Understanding TypeScript (Udemy)', href: 'https://www.udemy.com/course/understanding-typescript/' },
      { label: 'Total TypeScript by Matt Pocock', href: 'https://www.totaltypescript.com/' },
      { label: 'TypeScript: The Big Picture (Pluralsight)', href: 'https://www.pluralsight.com/courses/typescript-big-picture' },
      { label: 'Execute Program - TypeScript Lessons', href: 'https://www.executeprogram.com/courses/typescript' },
    ],

    // Youtube Channels
    youtubeChannels: [
      { label: 'Jack Herrington', href: 'https://www.youtube.com/@jherrington' },
      { label: 'Matt Pocock', href: 'https://www.youtube.com/@mattpocock' },
      { label: 'The Net Ninja', href: 'https://www.youtube.com/@NetNinja' },
    ],

    // Books
    books: [
      { label: 'Effective TypeScript by Dan Vanderkam', href: 'https://effectivetypescript.com/' },
      { label: 'TypeScript Deep Dive by Basarat Ali Shah', href: 'https://basarat.gitbook.io/typescript/' },
      { label: 'Programming TypeScript by Boris Cherny', href: 'https://www.oreilly.com/library/view/programming-typescript/9781492037644/' },
    ],

    // Projects 
    projects: [
      { title: 'Type-safe Component Library', description: 'Build a set of UI components with exhaustive prop typing.' },
      { title: 'Inventory Management System', description: 'Create a system with complex interfaces to handle various product categories.' },
    ],
    prerequisites: [
      'Strong proficiency in modern JavaScript (ES6+).',
      'Familiarity with object-oriented and functional programming concepts.',
      'Experience with a JavaScript framework (React, Angular, or Vue) is helpful but not required.',
      'Understanding of core programming concepts.'
    ],
  },

  // Python Language
  {
    id: 'python',
    title: 'Python',
    category: 'language',
    blurb: 'A general-purpose language used across backend, automation, data, and AI workloads.',
    focusAreas: [
      'Data Analysis: Using libraries like Pandas and NumPy.',
      'Backend Web: Building APIs with Django or Flask.',
      'Automation: Writing scripts to handle repetitive tasks.',
      'Machine Learning: Implementing models with Scikit-learn.',
      'Data Visualization: Creating charts and insights with Matplotlib or Seaborn.',
    ],

    // Skills
    skills: [
      'Scripting',
      'Object-Oriented Programming',
      'Data Manipulation',
      'Environment Management (venv/pip)',
      'Web Scraping (BeautifulSoup/Scrapy)',
    ],

    // Career Path
    careerPath: [
      { title: 'Data Scientist', description: 'Analyze data and build predictive models.' },
      { title: 'Backend Developer', description: 'Build server-side logic and database integrations.' },
      { title: 'DevOps Engineer', description: 'Automate infrastructure and deployment pipelines.' },
    ],

    // Certifications
    certifications: [
      { label: 'PCEP – Certified Entry-Level Python Programmer', href: 'https://pythoninstitute.org/pcep' },
      { label: 'Google IT Automation with Python', href: 'https://www.coursera.org/professional-certificates/google-it-automation' },
      { label: 'Python for Everybody Specialization (Coursera)', href: 'https://www.coursera.org/specializations/python' },
      { label: 'Microsoft Certified: Azure Data Scientist Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/' },
    ],

    // Courses
    courses: [
      { label: '100 Days of Code: The Complete Python Pro Bootcamp', href: 'https://www.udemy.com/course/100-days-of-code/' },
      { label: 'Scientific Computing with Python (freeCodeCamp)', href: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/' },
      { label: 'Complete Python Developer (Zero To Mastery)', href: 'https://zerotomastery.io/courses/learn-python/' },
      { label: 'Python for Data Science and Machine Learning (Udemy)', href: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/' },
    ],

    // Youtube Channels
    youtubeChannels: [
      { label: 'Corey Schafer', href: 'https://www.youtube.com/user/schafer5' },
      { label: 'Programming with Mosh', href: 'https://www.youtube.com/user/programmingwithmosh' },
      { label: 'Sentdex', href: 'https://www.youtube.com/@sentdex' },
      { label: 'ArjanCodes', href: 'https://www.youtube.com/@ArjanCodes' },
    ],

    // Books
    books: [
      { label: 'Automate the Boring Stuff with Python', href: 'https://automatetheboringstuff.com/' },
      { label: 'Python Crash Course', href: 'https://nostarch.com/pythoncrashcourse2e' },
      { label: 'Fluent Python by Luciano Ramalho', href: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/' },
      { label: 'Python Tricks: A Buffet of Awesome Python Features', href: 'https://dbader.org/products/python-tricks-book/' },
    ],

    // Projects
    projects: [
      { title: 'Web Scraper', description: 'Build a tool that extracts information from websites and saves it to a CSV.' },
      { title: 'REST API', description: 'Develop a functional backend for a blog or store using Flask.' },
      { title: 'Machine Learning Classifier', description: 'Use Scikit-learn to build a model that classifies data points (e.g., Spam detection).' },
    ],

    // Prerequisites
    prerequisites: [
      'Basic logical thinking and problem-solving skills.',
      'Familiarity with using a command-line interface (CLI) is helpful but not required.',
      'Understanding of core programming concepts.',
      'No prior programming experience is necessary to start learning Python.',
    ],
  },
  
  // Java Language
  {
    id: 'java',
    title: 'Java',
    category: 'language',
    blurb: 'A mature language used heavily in enterprise, Android, and high-throughput backend systems.',
    focusAreas: [
      'Object-Oriented Design: Mastering classes, inheritance, and interfaces.',
      'JVM Internals: Understanding memory management and garbage collection.',
      'Enterprise Frameworks: Building apps with Spring Boot.',
      'Concurrency: Writing thread-safe code for high-performance systems.',
      'Microservices: Designing distributed systems using Spring Cloud.',
    ],

    // Skills
    skills: [
      'Java Syntax & Core APIs',
      'Maven/Gradle',
      'Unit Testing (JUnit)',
      'Multithreading',
      'Spring Boot / Spring MVC',
    ],
    
    // Career Path
    careerPath: [
      { title: 'Enterprise Developer', description: 'Maintain and build systems for large corporations.' },
      { title: 'Android Developer', description: 'Develop native mobile applications for the Android ecosystem.' },
      { title: 'Big Data Engineer', description: 'Process massive datasets using Java-based tools like Hadoop or Spark.' },
    ],
    // Certifications
    certifications: [
      { label: 'Oracle Certified Professional: Java SE', href: 'https://education.oracle.com/java-se-11-developer/pexam_1Z0-819' },
      { label: 'Spring Certified Professional', href: 'https://www.vmware.com/learning/certification/spring-certified-pro.html' },
      { label: 'HackerRank Java (Basic) Certification', href: 'https://www.hackerrank.com/certificates/java-basic' },
    ],
    // Courses
    courses: [
      { label: 'Java Programming and Software Engineering Fundamentals (Coursera)', href: 'https://www.coursera.org/specializations/java-programming' },
      { label: 'Java Programming Masterclass (Udemy)', href: 'https://www.udemy.com/course/java-the-complete-java-developer-course/' },
      { label: 'Spring Boot Fundamentals (Pluralsight)', href: 'https://www.pluralsight.com/courses/spring-boot-fundamentals' },
      { label: 'Java University (JetBrains)', href: 'https://hyperskill.org/tracks/1' },
    ],
    youtubeChannels: [
      { label: 'Amigoscode', href: 'https://www.youtube.com/@amigoscode' },
      { label: 'Java Brains', href: 'https://www.youtube.com/@JavaBrains' },
      { label: 'Telusko', href: 'https://www.youtube.com/@Telusko' },
      { label: 'Defog Tech', href: 'https://www.youtube.com/@DefogTech' },
    ],
    books: [
      { label: 'Effective Java by Joshua Bloch', href: 'https://www.oreilly.com/library/view/effective-java/9780134686097/' },
      { label: 'Head First Java', href: 'https://www.oreilly.com/library/view/head-first-java/9781492091615/' },
      { label: 'Java Concurrency in Practice', href: 'https://jcip.net/' },
    ],
    projects: [
      { title: 'Banking System Console App', description: 'Create a CLI tool to manage accounts, transactions, and user authentication.' },
      { title: 'E-commerce API', description: 'Build a secure backend for an online store using Spring Boot and Hibernate.' },
    ],
    prerequisites: [
      'Basic understanding of programming concepts.',
      'Familiarity with object-oriented programming principles.',
      'Understanding of core programming concepts.',
    ],
  },
  
  // C# Language
  {
    id: 'csharp',
    title: 'C#',
    category: 'language',
    blurb: 'A modern .NET language for backend systems, desktop apps, and game development.',
    focusAreas: [
      'ASP.NET Core: Building high-performance web APIs.',
      'Unity Engine: Developing 2D and 3D games.',
      'Entity Framework: Managing database interactions.',
      'LINQ: Querying data collections efficiently.',
      'WPF / MAUI: Creating modern cross-platform desktop applications.',
    ],
    skills: [
      '.NET Ecosystem',
      'LINQ',
      'Dependency Injection',
      'Asynchronous Programming',
      'Unit Testing (xUnit/NUnit)',
    ],
    careerPath: [
      { title: 'Backend Developer (.NET)', description: 'Build enterprise-grade web applications and services.' },
      { title: 'Game Developer', description: 'Create interactive experiences using Unity.' },
      { title: 'Desktop App Developer', description: 'Create rich client applications for Windows and cross-platform.' },
    ],
    certifications: [
      { label: 'Microsoft Certified: Azure Developer Associate', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/' },
      { label: 'Foundational C# Certificate (freeCodeCamp)', href: 'https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/' },
      { label: 'Unity Certified User: Programmer', href: 'https://unity.com/products/unity-certifications/user-programmer' },
    ],
    courses: [
      { label: 'C# Masterclass (Udemy)', href: 'https://www.udemy.com/course/complete-csharp-masterclass/' },
      { label: 'Foundational C# with Microsoft (freeCodeCamp)', href: 'https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/' },
      { label: 'Learn C# (Codecademy)', href: 'https://www.codecademy.com/learn/learn-c-sharp' },
      { label: '.NET 8 MVC - The Complete Guide (Udemy)', href: 'https://www.udemy.com/course/aspnet-core-mvc-up-and-running-part-1-of-2/' },
    ],
    youtubeChannels: [
      { label: 'Nick Chapsas', href: 'https://www.youtube.com/@nickchapsas' },
      { label: 'IAmTimCorey', href: 'https://www.youtube.com/@IAmTimCorey' },
      { label: 'C# Corner', href: 'https://www.youtube.com/@CSharpCorner' },
    ],
    books: [
      { label: 'C# 12 and .NET 8 – Modern Cross-Platform Development', href: 'https://www.packtpub.com/en-za/product/c-12-and-net-8-modern-cross-platform-development-fundamentals-9781837635870' },
      { label: 'C# in Depth by Jon Skeet', href: 'https://csharpindepth.com/' },
    ],
    projects: [
      { title: 'Inventory Management System', description: 'Build a web API with ASP.NET Core to track products and stock levels.' },
      { title: '2D Platformer in Unity', description: 'Create a complete 2D game with physics, levels, and enemy AI.' },
    ],
    prerequisites: [
      'Familiarity with object-oriented concepts.',
      'Basic understanding of programming logic and syntax.',
    ],
  },
  // Go Language
  {
    id: 'go',
    title: 'Go',
    category: 'language',
    blurb: 'A pragmatic language for cloud tooling, APIs, distributed systems, and infrastructure.',
    focusAreas: [
      'Concurrency: Using Goroutines and Channels.',
      'Microservices: Building scalable distributed systems.',
      'Systems Tooling: Writing performance-critical CLI tools.',
      'Testing in Go: Leveraging the built-in testing package for robust code.',
    ],
    skills: [
      'Goroutines',
      'Interface Design',
      'Error Handling',
      'Standard Library Proficiency',
    ],
    careerPath: [
      { title: 'Cloud Engineer', description: 'Build infrastructure tools and cloud-native services.' },
      { title: 'Systems Programmer', description: 'Write high-performance backend systems and networks.' },
    ],
    certifications: [
      { label: 'Professional Go Developer (Ardan Labs)', href: 'https://www.ardanlabs.com/training/go/' },
    ],
    courses: [
      { label: 'Go: The Complete Developer\'s Guide (Udemy)', href: 'https://www.udemy.com/course/go-the-complete-developers-guide/' },
      { label: 'Learn Go with Tests', href: 'https://quii.gitbook.io/learn-go-with-tests/' },
      { label: 'Gophercises - Free coding exercises for Gophers', href: 'https://gophercises.com/' },
    ],
    youtubeChannels: [
      { label: 'The Go Programming Language', href: 'https://www.youtube.com/@golang' },
      { label: 'Nic Jackson', href: 'https://www.youtube.com/@NicJackson' },
    ],
    books: [
      { label: 'The Go Programming Language by Donovan & Kernighan', href: 'https://www.gopl.io/' },
      { label: 'Go in Action', href: 'https://www.manning.com/books/go-in-action' },
    ],
    projects: [
      { title: 'High-Concurrency URL Checker', description: 'Build a tool that checks the status of thousands of URLs concurrently.' },
      { title: 'Distributed Key-Value Store', description: 'Implement a basic version of Redis or etcd using Go network primitives.' },
    ],
    prerequisites: [
      'Experience with at least one other programming language.',
      'Basic understanding of programming logic and syntax.',
      'Familiarity with object-oriented programming principles.',
      'Understanding of core programming concepts like variables, loops, and functions.',
      'Unit Testing (xUnit/NUnit)',
    ],
  },
  // Rust Language
  {
    id: 'rust',
    title: 'Rust',
    category: 'language',
    blurb: 'A systems language focused on performance, reliability, and memory safety.',
    focusAreas: [
      'Ownership & Borrowing: Mastering Rust\'s memory management model.',
      'WASM: Building high-performance web modules.',
      'Systems Programming: Writing low-level drivers and engines.',
      'Unsafe Rust: Understanding when and how to bypass the compiler checks.',
    ],
    skills: [
      'Memory Management',
      'Pattern Matching',
      'Trait-based Generics',
      'Cargo & Crates',
    ],
    careerPath: [
      { title: 'Systems Engineer', description: 'Develop memory-safe, high-performance low-level software.' },
      { title: 'Blockchain Developer', description: 'Build secure smart contracts and protocol infrastructure.' },
      { title: 'WebAssembly Engineer', description: 'Create high-performance web modules using Rust and WASM.' },

    ],
    certifications: [
      { label: 'Rust Programming Certificate (Codecademy)', href: 'https://www.codecademy.com/learn/learn-rust' },
      { label: 'Rust Essentials (Udemy)', href: 'https://www.udemy.com/course/rust-essentials/' },
      { label: 'Rust for Beginners (Coursera)', href: 'https://www.coursera.org/specializations/rust' },
    ],
    courses: [
      { label: 'Rust Fundamentals (Frontend Masters)', href: 'https://frontendmasters.com/courses/rust/' },
      { label: 'The Rust Programming Language (The Book)', href: 'https://doc.rust-lang.org/book/' },
      { label: 'Rustlings - Small exercises to get you used to Rust', href: 'https://github.com/rust-lang/rustlings' },
    ],
    youtubeChannels: [
      { label: 'No Boilerplate', href: 'https://www.youtube.com/@NoBoilerplate' },
      { label: 'ThePrimeagen', href: 'https://www.youtube.com/@ThePrimeagen' },
      { label: 'Let\'s Get Rusty', href: 'https://www.youtube.com/@LetsGetRusty' },
    ],
    books: [
      { label: 'Programming Rust by Blandy, Orendorff, and Jimblow', href: 'https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/' },
      { label: 'Zero to Production in Rust by Luca Palmieri', href: 'https://www.zero2prod.com/' },
    ],
    projects: [
      { title: 'Custom HTTP Server', description: 'Implement a basic web server from scratch using standard library primitives.' },
      { title: 'Command-Line Grep Clone', description: 'Build a fast file searching tool that replicates the functionality of grep.' },
    ],
    prerequisites: [
      'Strong understanding of programming fundamentals and memory concepts.',
    ],
  },

  // PHP Language
  {
    id: 'php',
    title: 'PHP',
    category: 'language',
    blurb: 'A web-first language still widely used for content systems, APIs, and Laravel apps.',
    focusAreas: [
      'Server-side Rendering: Generating dynamic HTML on the fly.',
      'Modern PHP: Using Composer, namespaces, and traits.',
      'CMS Development: Working with WordPress or Drupal.',
    ],
    skills: [
      'MySQL Integration',
      'Composer',
      'Template Engines (Blade/Twig)',
      'Security Best Practices',
    ],
    careerPath: [
      { title: 'Web Developer', description: 'Build and maintain dynamic websites and content platforms.' },
      { title: 'Laravel Developer', description: 'Build modern full-stack web applications with the Laravel framework.' },
    ],
    certifications: [
      { label: 'Zend Certified PHP Engineer', href: 'https://www.zend.com/training/php-certification-exam' },
      { label: 'Laravel Certification', href: 'https://certification.laravel.com/' },
    ],
    courses: [
      { label: 'PHP for Beginners (Laracasts)', href: 'https://laracasts.com/series/php-for-beginners-2023-edition' },
      { label: 'PHP with Laravel for Beginners (Udemy)', href: 'https://www.udemy.com/course/php-with-laravel-for-beginners-become-a-master-cms-project/' },
      { label: 'Symfony 6 Fundamentals', href: 'https://symfonycasts.com/screencast/symfony' },
    ],
    youtubeChannels: [
      { label: 'Program With Gio', href: 'https://www.youtube.com/@ProgramWithGio' },
      { label: 'Traversy Media', href: 'https://www.youtube.com/@traversymedia' },
      { label: 'Gary Clarke', href: 'https://www.youtube.com/@GaryClarke' },
    ],
    projects: [
      { title: 'Blogging Engine', description: 'Create a custom CMS with user registration, posts, and comments.' },
      { title: 'E-commerce Store (Laravel)', description: 'Build a full-featured store with shopping cart and payment integration.' },
    ],
    prerequisites: [
      'Understanding of HTML and web server basics.',
    ],
  },

  // Swift Language
  {
    id: 'swift',
    title: 'Swift',
    category: 'language',
    blurb: 'Apple\'s language for iOS, macOS, and modern native app development.',
    focusAreas: [
      'SwiftUI: Declarative UI development for Apple platforms.',
      'Combine: Reactive programming for event handling.',
      'Memory Management (ARC): Managing object lifecycles.',
      'Concurrency (Async/Await): Handling multi-threaded tasks safely in Swift.',
    ],
    skills: [
      'Swift Syntax',
      'Xcode IDE',
      'Protocol-Oriented Programming',
      'iOS App Lifecycle',
    ],
    careerPath: [
      { title: 'iOS Developer', description: 'Build native applications for iPhone and iPad.' },
      { title: 'Apple Platform Engineer', description: 'Develop cross-device software for Mac, Watch, and TV.' },
    ],
    certifications: [
      { label: 'App Development with Swift (Apple)', href: 'https://training.apple.com/it/en/recognition' },
    ],
    courses: [
      { label: '100 Days of SwiftUI', href: 'https://www.hackingwithswift.com/100/swiftui' },
      { label: 'Developing iOS 16 Apps with SwiftUI (Stanford)', href: 'https://cs193p.sites.stanford.edu/' },
      { label: 'iOS & Swift - The Complete iOS App Development Bootcamp', href: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
    ],
    youtubeChannels: [
      { label: 'Sean Allen', href: 'https://www.youtube.com/@seanallen' },
      { label: 'Swiftful Thinking', href: 'https://www.youtube.com/@SwiftfulThinking' },
      { label: 'Kavsoft', href: 'https://www.youtube.com/@Kavsoft' },
    ],
    projects: [
      { title: 'Habit Tracker App', description: 'Build a native iOS app using SwiftUI that tracks daily user goals.' },
      { title: 'Movie Discovery App', description: 'Create an app that fetches movie data from an API and displays it in a grid.' },
    ],
    prerequisites: [
      'Access to a Mac with Xcode installed.',
    ],
  },

  // HTML and CSS
  {
    id: 'html-css',
    title: 'HTML and CSS',
    category: 'language',
    blurb: 'The markup and styling foundation for every modern browser-based experience.',
    focusAreas: [
      'Semantic HTML: Writing accessible and SEO-friendly markup.',
      'Responsive Design: Using Flexbox and CSS Grid.',
      'CSS Architecture: Organizing styles with BEM or SASS.',
      'Animations: Creating smooth UI transitions.',
      'Accessibility: Ensuring web content is usable for people with disabilities (A11y).',
    ],
    skills: [
      'Layout Design',
      'Accessibility (WCAG)',
      'CSS Preprocessors',
      'Media Queries',
    ],
    careerPath: [
      { title: 'Junior Frontend Developer', description: 'Create responsive web pages from design mockups.' },
      { title: 'UI Engineer', description: 'Focus on design systems and advanced styling techniques.' },
    ],
    certifications: [
      { label: 'Responsive Web Design (freeCodeCamp)', href: 'https://www.freecodecamp.org/certification/fcc/responsive-web-design' },
    ],
    courses: [
      { label: 'Responsive Web Design (freeCodeCamp)', href: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
      { label: 'CSS - The Complete Guide (Udemy)', href: 'https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/' },
      { label: 'CSS for JavaScript Developers by Josh W. Comeau', href: 'https://css-for-js.dev/' },
    ],
    youtubeChannels: [
      { label: 'Kevin Powell', href: 'https://www.youtube.com/@KevinPowell' },
      { label: 'DesignCourse', href: 'https://www.youtube.com/@DesignCourse' },
      { label: 'Online Tutorials', href: 'https://www.youtube.com/@OnlineTutorialsYT' },
    ],
    books: [
      { label: 'HTML and CSS: Design and Build Websites', href: 'https://www.htmlandcssbook.com/' },
    ],
    projects: [
      { title: 'Multi-page Personal Site', description: 'Build a fully responsive portfolio with semantic markup and custom CSS.' },
      { title: 'Product Landing Page', description: 'Design an attractive, high-converting product page using CSS Flexbox and Grid.' },
    ],
    prerequisites: [
      'No prior programming experience required.',
    ],
  },
  // React Framework
  {
    id: 'react',
    title: 'React',
    category: 'framework',
    blurb: 'A component-driven UI library used across production web applications and design systems.',
    focusAreas: [
      'Hooks: Using useState, useEffect, and custom hooks.',
      'Component Pattern: Thinking in components and props.',
      'Context API & State: Managing global application data.',
      'React Router: Handling navigation in single-page apps.',
      'Server Components (RSC): Understanding the future of React rendering.',
    ],
    skills: [
      'JSX Syntax',
      'Virtual DOM',
      'State Management',
      'Functional Components',
    ],
    careerPath: [
      { title: 'Frontend Developer (React)', description: 'Develop complex, stateful user interfaces for the web.' },
    ],
    certifications: [
      { label: 'Meta React Native Specialization', href: 'https://www.coursera.org/specializations/meta-react-native' },
    ],
    courses: [
      { label: 'React.js Documentation (Official)', href: 'https://react.dev/learn' },
      { label: 'Complete Intro to React (Frontend Masters)', href: 'https://frontendmasters.com/courses/complete-react-v8/' },
      { label: 'Epic React by Kent C. Dodds', href: 'https://epicreact.dev/' },
    ],
    youtubeChannels: [
      { label: 'The Net Ninja', href: 'https://www.youtube.com/@NetNinja' },
      { label: 'Web Dev Simplified', href: 'https://www.youtube.com/@WebDevSimplified' },
    ],
    projects: [
      { title: 'Task Dashboard', description: 'Build a workspace manager with drag-and-drop features and global state.' },
      { title: 'Social Media Feed', description: 'Create a dynamic feed with nested comments and real-time like updates.' },
    ],
    prerequisites: [
      'Strong understanding of JavaScript (ES6+).',
    ],
  },
  // Angular Framework
  {
    id: 'angular',
    title: 'Angular',
    category: 'framework',
    blurb: 'A full-featured frontend framework used for structured enterprise web applications.',
    focusAreas: [
      'TypeScript Integration: Using strong typing in templates and logic.',
      'RxJS: Managing data streams and reactive programming.',
      'Dependency Injection: Building modular and testable services.',
      'Angular Signals: Leveraging the new fine-grained reactivity system.',
    ],
    skills: [
      'Components & Directives',
      'Angular CLI',
      'Observables',
      'Module System',
    ],
    careerPath: [
      { title: 'Angular Developer', description: 'Build robust, scalable enterprise web applications.' },
    ],
    certifications: [
      { label: 'Angular Core Certification', href: 'https://angular-training.com/angular-certification/' },
    ],
    courses: [
      { label: 'Angular - The Complete Guide (Udemy)', href: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/' },
      { label: 'Angular Learning Path (Official)', href: 'https://angular.dev/tutorials' },
      { label: 'Angular University Full Access Bundle', href: 'https://angular-university.io/' },
    ],
    youtubeChannels: [
      { label: 'Joshua Morony', href: 'https://www.youtube.com/@JoshuaMorony' },
      { label: 'Angular', href: 'https://www.youtube.com/@angular' },
    ],
    projects: [
      { title: 'Enterprise CRM Portal', description: 'Develop a data-heavy portal with complex forms and validation.' },
      { title: 'Real-time Stock Dashboard', description: 'Use RxJS and WebSockets to visualize live data streams.' },
    ],
    prerequisites: [
      'Strong understanding of JavaScript and TypeScript basics.',
    ],
  },
  // Vue.js Framework
  {
    id: 'vuejs',
    title: 'Vue.js',
    category: 'framework',
    blurb: 'A progressive frontend framework known for ergonomics, strong tooling, and adaptability.',
    focusAreas: [
      'Composition API: Modern way to build Vue components.',
      'Vue Router & Pinia: Official routing and state management.',
      'Single File Components (SFCs): Colocating logic, templates, and styles.',
      'Nuxt.js: Mastering the meta-framework for universal Vue apps.',
    ],
    skills: [
      'Reactive State',
      'Vue CLI / Vite',
      'Directives (v-if, v-for)',
      'Component Slots',
    ],
    certifications: [
      { label: 'Certified Vue Developer', href: 'https://certification.vuejs.org/' },
    ],
    courses: [
      { label: 'Vue - The Complete Guide (Udemy)', href: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/' },
      { label: 'Vue School', href: 'https://vueschool.io/' },
      { label: 'Vue Mastery', href: 'https://www.vuemastery.com/' },
    ],
    youtubeChannels: [
      { label: 'Program with Erik', href: 'https://www.youtube.com/@ProgramWithErik' },
      { label: 'The Net Ninja', href: 'https://www.youtube.com/@NetNinja' },
    ],
    projects: [
      { title: 'Real-time Chat App', description: 'Create a messaging UI using Vue 3 and Firebase.' },
      { title: 'Recipe App (Nuxt)', description: 'Build a high-performance, SEO-friendly recipe catalog using Nuxt.js.' },
    ],
    prerequisites: [
      'Proficiency in JavaScript, HTML, and CSS.',
    ],
  },
  // Django Framework
  {
    id: 'django',
    title: 'Django',
    category: 'framework',
    blurb: 'A batteries-included Python framework for secure and maintainable web applications.',
    focusAreas: [
      'ORM: Interacting with databases using Python objects.',
      'Admin Interface: Using Django\'s auto-generated admin site.',
      'Django Rest Framework (DRF): Building powerful web APIs.',
      'Deployment (Gunicorn/Nginx): Preparing Django for production environments.',
    ],
    skills: [
      'MVT Architecture',
      'Database Migrations',
      'Authentication',
      'Templating',
    ],
    careerPath: [
      { title: 'Full Stack Python Developer', description: 'Build end-to-end web applications with Django and React/Vue.' },
    ],
    certifications: [
      { label: 'Django for Everybody Specialization', href: 'https://www.coursera.org/specializations/django' },
    ],
    courses: [
      { label: 'Django for Beginners (Official Docs)', href: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/' },
      { label: 'Python and Django Full Stack Bootcamp (Udemy)', href: 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/' },
      { label: 'Test-Driven Development with Python, Django, and Docker', href: 'https://testdriven.io/courses/django-rest-framework/' },
    ],
    projects: [
      { title: 'Social Media MVP', description: 'Build a platform with user profiles, posts, and follows using Django ORM.' },
      { title: 'Job Board API', description: 'Develop a full-featured job board with complex searching and filtering via DRF.' },
    ],
    prerequisites: [
      'Strong understanding of Python.',
    ],
  },
  // Flask Framework
  {
    id: 'flask',
    title: 'Flask',
    category: 'framework',
    blurb: 'A lightweight Python framework suited to APIs, services, and smaller web applications.',
    focusAreas: [
      'Routing: Defining application endpoints.',
      'Extensions: Using Flask-SQLAlchemy and Flask-Migrate.',
      'RESTful Design: Creating lightweight microservices.',
      'Application Factory Pattern: Organizing code for scalable Flask apps.',
    ],
    skills: [
      'Request Handling',
      'Jinja2 Templates',
      'Blueprint Pattern',
      'Middleware Integration',
    ],
    certifications: [
      { label: 'Python for Web Development (Codecademy)', href: 'https://www.codecademy.com/learn/paths/web-development-with-python' },
    ],
    courses: [
      { label: 'The Flask Mega-Tutorial', href: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world' },
      { label: 'REST APIs with Flask and Python (Udemy)', href: 'https://www.udemy.com/course/rest-api-flask-python/' },
      { label: 'Flask Foundations', href: 'https://teamtreehouse.com/library/flask-foundations' },
    ],
    projects: [
      { title: 'Notes API', description: 'Create a secure JSON API for a note-taking application.' },
      { title: 'Microblogging Service', description: 'Build a simple Twitter clone focusing on user relationships and post feeds.' },
    ],
    prerequisites: [
      'Solid Python knowledge.',
    ],
  },
  // Laravel Framework
  {
    id: 'laravel',
    title: 'Laravel',
    category: 'framework',
    blurb: 'A modern PHP framework for full-stack web development with strong developer ergonomics.',
    focusAreas: [
      'Eloquent ORM: Advanced data modeling and relationships.',
      'Blade Templating: Building dynamic UIs with clean syntax.',
      'Artisan CLI: Automating development tasks.',
      'Laravel Security: Mastering CSRF, XSS prevention, and authentication.',
      'Laravel Ecosystem: Using Livewire, Inertia, or Forge.',
    ],
    skills: [
      'MVC Architecture',
      'Queue Management',
      'API Development',
      'Testing with Pest/PHPUnit',
    ],
    certifications: [
      { label: 'Laravel Certified Associate', href: 'https://certification.laravel.com/' },
    ],
    courses: [
      { label: 'Laravel from Scratch (Laracasts)', href: 'https://laracasts.com/series/laravel-8-from-scratch' },
      { label: 'Laravel Masterclass (Udemy)', href: 'https://www.udemy.com/course/laravel-6-php-framework-for-beginners-to-pro/' },
      { label: 'Laravel Bootcamp', href: 'https://bootcamp.laravel.com/' },
    ],
    youtubeChannels: [
      { label: 'Laravel Daily', href: 'https://www.youtube.com/@LaravelDaily' },
      { label: 'Bitfumes', href: 'https://www.youtube.com/@Bitfumes' },
      { label: 'The Codeholic', href: 'https://www.youtube.com/@TheCodeholic' },
    ],
    projects: [
      { title: 'Project Management Tool', description: 'Build a system to track tasks, deadlines, and team collaboration.' },
      { title: 'Ticketing System', description: 'Create a customer support platform with real-time notifications and email integration.' },
    ],
    prerequisites: [
      'Strong understanding of PHP.',
    ],
  },

  // Ruby on Rails Framework
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    category: 'framework',
    blurb: 'A convention-driven framework for shipping database-backed products quickly.',
    focusAreas: [
      // Focus Areas
      'Convention over Configuration: Learning Rails\' default patterns.',
      'Active Record: Managing database state and queries.',
      'Hotwire/Turbo: Building modern, fast UIs without much JS.',
      'Background Jobs (Sidekiq): Processing heavy tasks outside the request cycle.',
    ],
    // Skills
    skills: [
      'Ruby Syntax',
      'MVC Pattern',
      'Scaffolding',
      'Testing with RSpec',
    ],
    // Online Courses
    courses: [
      { label: 'Ruby on Rails Tutorial (Michael Hartl)', href: 'https://www.railstutorial.org/' },
      { label: 'The Odin Project - Rails Path', href: 'https://www.theodinproject.com/paths/full-stack-ruby-on-rails' },
      { label: 'Ruby on Rails 7 - The Complete Guide (Udemy)', href: 'https://www.udemy.com/course/ruby-on-rails-7-complete-guide/' },
    ],
    // Projects
    projects: [
      { title: 'Auction Platform', description: 'Build a real-time bidding application using ActionCable and Active Record.' },
      { title: 'Multi-tenant SaaS App', description: 'Design an application that serves multiple organizations with isolated data.' },
    ],
    // Prerequisites
    prerequisites: [
      'Familiarity with Ruby basics.',
      'Basic understanding of SQL.',
    ],
  },
  // Flutter Framework
  {
    id: 'flutter',
    title: 'Flutter',
    category: 'framework',
    blurb: 'A UI toolkit for shipping consistent cross-platform apps from one codebase.',
    focusAreas: [
      'Widget Tree: Mastering layout and composition.',
      'State Management: Using Riverpod, Bloc, or Provider.',
      'Native Interop: Accessing device features like GPS or camera.',
      'Flutter Web & Desktop: Expanding your app beyond mobile.',
    ],
    skills: [
      'Dart Language',
      'Material/Cupertino Design',
      'Animations',
      'Asynchronous Programming',
    ],
    courses: [
      { label: 'Flutter & Dart - The Complete Guide (Udemy)', href: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/' },
      { label: 'Flutter Codelabs (Official)', href: 'https://docs.flutter.dev/codelabs' },
      { label: 'Zero To Mastery - Learn Flutter', href: 'https://zerotomastery.io/courses/learn-flutter/' },
    ],
    youtubeChannels: [
      { label: 'Flutter', href: 'https://www.youtube.com/@FlutterDev' },
      { label: 'Reso Coder', href: 'https://www.youtube.com/@ResoCoder' },
      { label: 'The Flutter Way', href: 'https://www.youtube.com/@TheFlutterWay' },
    ],
    projects: [
      { title: 'Recipe App', description: 'Build a cross-platform mobile app with complex list views and image caching.' },
      { title: 'Crypto Tracker', description: 'Create a live price tracker with charts and historical data using Riverpod.' },
    ],
    prerequisites: [
      'Understanding of object-oriented programming.',
    ],
  },
  // Node.js Technology
  {
    id: 'nodejs',
    title: 'Node.js',
    category: 'platform',
    blurb: 'A JavaScript runtime used to build APIs, tooling, automation, and real-time services.',
    focusAreas: [
      'Event-Driven Architecture: Understanding how Node handles I/O.',
      'Express.js: Building server-side web applications.',
      'NPM Ecosystem: Managing packages and security.',
      'Node.js Security: Implementing best practices for API protection.',
    ],
    skills: [
      'Server-side JS',
      'REST API Design',
      'Streams & Buffers',
      'File System Access',
    ],
    courses: [
      { label: 'Node.js, Express, MongoDB & More (Udemy)', href: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/' },
      { label: 'Backend Masters (Frontend Masters)', href: 'https://frontendmasters.com/courses/back-end/' },
      { label: 'Node.js for Beginners (OpenJS Foundation)', href: 'https://openjsf.org/certification/' },
    ],
    youtubeChannels: [
      { label: 'Hussein Nasser', href: 'https://www.youtube.com/@HusseinNasser' },
      { label: 'Dave Gray', href: 'https://www.youtube.com/@DaveGrayTeachesCode' },
      { label: 'Traversy Media', href: 'https://www.youtube.com/@traversymedia' },
    ],
    books: [
      { label: 'Node.js Design Patterns by Mario Casciaro', href: 'https://www.nodejsdesignpatterns.com/' },
      { label: 'Distributed Systems with Node.js', href: 'https://www.oreilly.com/library/view/distributed-systems-with/9781492077282/' },
    ],
    projects: [
      { title: 'Real-time Chat Server', description: 'Develop a backend using Socket.io for instant messaging.' },
      { title: 'Automated Build Tool', description: 'Build a CLI tool that processes images and optimizes code for production.' },
    ],
    prerequisites: [
      'Strong JavaScript fundamentals.',
      'Basic understanding of HTTP and networking.',
    ],
  },
  // Docker Technology
  {
    id: 'docker',
    title: 'Docker',
    category: 'tooling',
    blurb: 'Container tooling for packaging applications consistently across environments.',
    focusAreas: [
      'Dockerfile Creation: Automating image builds.',
      'Docker Compose: Orchestrating multi-container apps.',
      'Volumes & Networking: Managing persistent data and communication.',
      'Multi-stage Builds: Reducing image sizes for production.',
    ],
    skills: [
      'Containerization',
      'Registry Management',
      'CI/CD Integration',
      'Resource Limiting',
    ],
    certifications: [
      { label: 'Docker Certified Associate (DCA)', href: 'https://training.mirantis.com/certification/dca-certification-exam/' },
    ],
    courses: [
      { label: 'Docker Mastery (Udemy)', href: 'https://www.udemy.com/course/docker-mastery/' },
      { label: 'Docker for Java Developers', href: 'https://www.udemy.com/course/docker-for-java-developers/' },
    ],
    youtubeChannels: [
      { label: 'Bret Fisher Docker and DevOps', href: 'https://www.youtube.com/@BretFisher' },
      { label: 'TechWorld with Nana', href: 'https://www.youtube.com/@TechWorldwithNana' },
    ],
    projects: [
      { title: 'Dockerized Full-stack App', description: 'Containerize a React/Node/Postgres application and deploy it locally.' },
      { title: 'CI/CD Pipeline Integration', description: 'Set up a GitHub Actions workflow to build and push Docker images to a registry.' },
    ],
    prerequisites: [
      'Basic Linux command line knowledge.',
    ],
  },
  // Kubernetes Technology
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    category: 'tooling',
    blurb: 'A container orchestration platform for managing workloads in distributed environments.',
    focusAreas: [
      'Cluster Architecture: Understanding control planes and nodes.',
      'Resource Management: Defining Pods, Deployments, and Services.',
      'Helm: Managing complex application manifests.',
      'Istio / Service Mesh: Managing microservices communication and security.',
    ],
    skills: [
      'Kubectl CLI',
      'YAML Configuration',
      'Auto-scaling',
      'Load Balancing',
    ],
    certifications: [
      { label: 'Certified Kubernetes Administrator (CKA)', href: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' },
    ],
    courses: [
      { label: 'Kubernetes for the Absolute Beginner', href: 'https://www.udemy.com/course/learn-kubernetes/' },
      { label: 'Certified Kubernetes Administrator (CKA) with Practice Tests', href: 'https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/' },
      { label: 'KubeAcademy by VMware', href: 'https://kube.academy/' },
    ],
    youtubeChannels: [
      { label: 'TechWorld with Nana', href: 'https://www.youtube.com/@TechWorldwithNana' },
      { label: 'KubeSimplified', href: 'https://www.youtube.com/@KubeSimplified' },
    ],
    projects: [
      { title: 'Highly Available Microservices', description: 'Deploy a microservices architecture to a cluster with rolling updates.' },
      { title: 'GitOps Implementation', description: 'Use ArgoCD to automate deployments to your Kubernetes cluster based on Git commits.' },
    ],
    prerequisites: [
      'Strong proficiency in Docker and Linux networking.',
      'Familiarity with YAML.',
    ],
  },
  // AWS Technology
  {
    id: 'aws',
    title: 'AWS',
    category: 'cloud',
    blurb: 'Amazon\'s cloud platform for compute, storage, networking, and managed services.',
    focusAreas: [
      'Compute: EC2, Lambda, and ECS.',
      'Storage: S3, RDS, and DynamoDB.',
      'Networking: VPC, CloudFront, and Route 53.',
      'Security & Identity: IAM, Cognito, and Secrets Manager.',
    ],
    skills: [
      'Cloud Infrastructure',
      'IAM Management',
      'Serverless Architecture',
      'Cost Optimization',
    ],
    certifications: [
      { label: 'AWS Certified Cloud Practitioner', href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
      { label: 'AWS Certified Solutions Architect – Associate', href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
      { label: 'AWS Certified Developer – Associate', href: 'https://aws.amazon.com/certification/certified-developer-associate/' },
      { label: 'AWS Certified Solutions Architect – Professional', href: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/' },
    ],
    courses: [
      { label: 'AWS Training and Certification (Official)', href: 'https://explore.skillbuilder.aws/' },
      { label: 'AWS Solutions Architect Associate (Stephane Maarek)', href: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/' },
      { label: 'AWS Certified Cloud Practitioner (A Cloud Guru)', href: 'https://www.pluralsight.com/cloud-guru/courses/aws-certified-cloud-practitioner-foundational-clf-c02' },
    ],
    youtubeChannels: [
      { label: 'AWS Online Tech Talks', href: 'https://www.youtube.com/@AWSOnlineTechTalks' },
      { label: 'Be A Better Dev', href: 'https://www.youtube.com/@beabetterdev' },
      { label: 'Digital Cloud Training', href: 'https://www.youtube.com/@DigitalCloudTraining' },
    ],
    projects: [
      { title: 'Serverless Image Resizer', description: 'Use S3 and Lambda to automatically process image uploads.' },
      { title: 'Static Website Hosting', description: 'Deploy a global, high-performance static site using S3, Route 53, and CloudFront.' },
    ],
    prerequisites: [
      'Basic understanding of networking and web architecture.',
    ],
  },
  // Azure Technology
  {
    id: 'azure',
    title: 'Azure',
    category: 'cloud',
    blurb: 'Microsoft\'s cloud platform for enterprise infrastructure, identity, and application delivery.',
    focusAreas: [
      'Identity: Microsoft Entra ID (Azure AD).',
      'Compute: Azure Virtual Machines and App Services.',
      'DevOps: Azure DevOps pipelines.',
      'Data & AI: Azure SQL, Synapse Analytics, and Cognitive Services.',
    ],
    skills: [
      'Enterprise Identity',
      'Azure CLI',
      'Cloud Security',
      'Hybrid Cloud Setup',
    ],
    certifications: [
      { label: 'Azure Fundamentals (AZ-900)', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/' },
      { label: 'Azure Developer Associate (AZ-204)', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/' },
      { label: 'Azure Solutions Architect Expert (AZ-305)', href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/' },
    ],
    courses: [
      { label: 'Microsoft Learn for Azure', href: 'https://learn.microsoft.com/en-us/training/azure/' },
      { label: 'Azure Administrator (AZ-104) (Scott Duffy)', href: 'https://www.udemy.com/course/70533-azure/' },
      { label: 'Azure Developer (AZ-204) (Alan Rodrigues)', href: 'https://www.udemy.com/course/az-204-developing-solutions-for-microsoft-azure/' },
    ],
    youtubeChannels: [
      { label: 'John Savill\'s Technical Training', href: 'https://www.youtube.com/@NTFAQGuy' },
      { label: 'Azure Academy', href: 'https://www.youtube.com/@AzureAcademy' },
      { label: 'Adam Marczak - Azure for Everyone', href: 'https://www.youtube.com/@AdamMarczakAzureForEveryone' },
    ],
    projects: [
      { title: 'Secure Virtual Network', description: 'Deploy a multi-tier network with firewall rules and private endpoints.' },
      { title: 'Auto-scaling Web App', description: 'Set up an App Service with auto-scaling and continuous deployment from GitHub.' },
    ],
    prerequisites: [
      'Familiarity with enterprise IT environments.',
    ],
  },

  // Next.Js Framework\
  // Finish this later
  {
    id: 'nextjs',
    title: 'Next.js',
    category: 'framework',
    blurb: 'A React framework for building server-side rendered and statically generated web applications.',
    focusAreas: [
      'Server-Side Rendering (SSR): Rendering pages on the server for better SEO and performance.',
      'Static Site Generation (SSG): Pre-rendering pages at build time for fast load times.',
      'API Routes: Building backend endpoints within a Next.js application.',
      'Image Optimization: Using the built-in Image component for responsive images.',
    ],
  },

  // Google Cloud Technology
  {
    id: 'gcp',
    title: 'Google Cloud',
    category: 'cloud',
    blurb: 'Google\'s cloud platform for data, ML, infrastructure, and scalable managed services.',
    focusAreas: [
      // Focus Areas
      'Data & AI: BigQuery, Vertex AI, and Looker.',
      'Modern Containers: Google Kubernetes Engine (GKE).',
      'Serverless: Cloud Functions and Cloud Run.',
      'Hybrid Cloud: Managing Anthos for on-prem and cloud consistency.',
    ],
    // Skills
    skills: [
      'Data Engineering',
      'Machine Learning Ops',
      'Container Orchestration',
      'Global Load Balancing',
    ],
    // Certifications
    certifications: [
      { label: 'Google Associate Cloud Engineer', href: 'https://cloud.google.com/learn/certification/cloud-engineer' },
      { label: 'Professional Cloud Architect', href: 'https://cloud.google.com/learn/certification/cloud-architect' },
      { label: 'Professional Data Engineer', href: 'https://cloud.google.com/learn/certification/data-engineer' },
    ],
    // Online Courses
    courses: [
      { label: 'Google Cloud Skills Boost', href: 'https://www.cloudskillsboost.google/' },
      { label: 'Preparing for the Google Cloud Associate Cloud Engineer Exam', href: 'https://www.coursera.org/learn/preparing-cloud-engineer-exam' },
    ],
    // Youtube Channels
    youtubeChannels: [
      { label: 'Google Cloud Tech', href: 'https://www.youtube.com/@googlecloudtech' },
      { label: 'Google Cloud Platform', href: 'https://www.youtube.com/@GoogleCloudPlatform' },
      { label: 'Google Cloud Platform - Data Analytics', href: 'https://www.youtube.com/@GoogleCloudPlatformDataAnalytics' },

    ],
    // Projects
    projects: [
      { title: 'Big Data Pipeline', description: 'Process millions of records using BigQuery and visualize with Looker.' },
      { title: 'ML Sentiment Analysis', description: 'Build and deploy a model that analyzes the sentiment of customer reviews using Vertex AI.' },
    ],
    // Prerequisites
    prerequisites: [
      'Interest in data analysis and scalable web architecture.',
    ],
  },
];
