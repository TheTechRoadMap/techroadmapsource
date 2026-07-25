import { languages } from './languages.js'; //Language Meta import
import { roadmaps } from './roadmaps.js';   //Roadmap Meta import

const roadmapPages = import.meta.glob('../../../roadmaps/*.html', { //Roadmap Meta import 
  eager: true,
  import: 'default',
  query: '?raw',
});

const languagePages = import.meta.glob('../../../languages/*.html', { //import of language pages for parsing
  eager: true,
  import: 'default',
  query: '?raw',
});

const MOJIBAKE_PATTERN = /(?:\u00F0|\u00E2|\u00C3|\u00EF)/;

const sharedSignals = {
  roadmap: {
    engineering: [
      'TypeScript, Git-based workflows, testing, and CI are baseline expectations on many product teams.',
      'Production work increasingly rewards API integration, performance tuning, and strong debugging habits.',
      'A portfolio with shipped projects matters more than course completion alone.',
    ],
    cloud: [
      'Infrastructure as code, observability, and security controls are core parts of the role now.',
      'Container platforms, CI/CD, and cost awareness are common hiring signals alongside cloud certifications.',
      'Platform fluency matters less than the ability to automate reliable systems end to end.',
    ],
    security: [
      'Security teams increasingly expect hands-on familiarity with cloud identity, logging, and response workflows.',
      'Threat modeling, secure configuration, and practical incident handling are stronger signals than theory alone.',
      'Documentation and communication matter because security work crosses engineering, operations, and compliance.',
    ],
    infrastructure: [
      'Modern infrastructure roles mix classic networking with cloud connectivity, automation, and monitoring.',
      'Scripting, configuration management, and vendor-neutral troubleshooting remain high-value skills.',
      'Employers look for people who can explain root cause clearly, not only fix outages quickly.',
    ],
    support: [
      'Endpoint management, identity tooling, and SaaS administration are part of modern support work.',
      'Ticket quality, communication, and repeatable troubleshooting processes are key career accelerators.',
      'Automation and documentation increasingly separate senior support staff from purely reactive roles.',
    ],
    data: [
      'SQL, data modeling, and clear stakeholder communication are non-negotiable in real teams.',
      'Teams expect analysts and scientists to work comfortably with version control and reproducible workflows.',
      'Business context matters: the best technical work still needs to drive a decision or measurable outcome.',
    ],
    ai: [
      'Shipping AI today means evaluation, observability, data quality, and cost control, not just model selection.',
      'MLOps, prompt engineering, retrieval, and guardrails are now practical product skills rather than edge topics.',
      'Responsible use, security, and measurement are essential for teams moving AI into production.',
    ],
    design: [
      'Design systems, accessibility, and research-backed decisions are now standard expectations for mature teams.',
      'Strong designers show their process, tradeoffs, and collaboration with product and engineering.',
      'Figma fluency is common, but information architecture and usability still decide the quality of the work.',
    ],
  },
  language: {
    language: [
      'Current teams value maintainability, testing, and tooling fluency as much as syntax knowledge.',
      'A language becomes more employable when you can pair it with frameworks, deployment, and debugging workflows.',
      'Reading official docs and release notes is part of staying current in fast-moving ecosystems.',
    ],
    framework: [
      'Modern framework work usually includes routing, testing, component reuse, and build tooling.',
      'Production teams expect accessibility, performance, and version upgrade discipline around framework usage.',
      'Official documentation should be your source of truth because ecosystem advice gets stale quickly.',
    ],
    tooling: [
      'Tooling expertise matters most when you can apply it inside repeatable delivery and operations workflows.',
      'Versioning, automation, and observability are what make container and orchestration knowledge production-ready.',
      'Hands-on projects matter more than memorizing commands without context.',
    ],
    cloud: [
      'Cloud platform skill is strongest when paired with IAM, networking, cost controls, and automation.',
      'Most teams hire for use-case judgment across services, not for memorizing a product catalog.',
      'Official docs and certification blueprints are the best way to keep pace with platform changes.',
    ],
    platform: [
      'Runtime knowledge matters most when you can deploy, monitor, and troubleshoot real workloads.',
      'Ecosystem tools, package management, and dependency hygiene are part of professional platform work.',
      'Release cadence is fast, so official docs and LTS guidance should drive your learning plan.',
    ],
  },
};

const itemSignals = {
  roadmap: {
    'mobile-development': [
      'Jetpack Compose, SwiftUI, and reliable release workflows are the current mobile baseline.',
      'Google retired the Associate Android Developer exam, so practical Android training is a better anchor now.',
      'Mobile teams increasingly expect analytics, crash monitoring, and CI-ready delivery pipelines.',
    ],
    'frontend-dev': [
      'TypeScript, accessibility, and design-system consistency are standard frontend expectations.',
      'Modern teams look for component testing, browser profiling, and API-driven UI experience.',
      'Framework choice matters less than being able to ship maintainable interfaces with good UX discipline.',
    ],
    'ai-engineer': [
      'Current AI engineering work often includes RAG pipelines, evaluation harnesses, and safety checks.',
      'You need model orchestration, data governance, and observability alongside prompt quality.',
      'Latency, cost, and failure handling are now part of the core application design surface.',
    ],
  },
  language: {
    react: [
      "React's official learning material now lives on react.dev, not the old reactjs.org docs.",
      'Current React work typically pairs components with TypeScript, routing, tests, and structured state management.',
      'Frameworks like Next.js are common in production, but the React fundamentals still need to be solid first.',
    ],
    angular: [
      'Angular moved its official documentation to angular.dev and modern Angular emphasizes standalone APIs.',
      'Signals and improved template ergonomics are part of the current Angular development model.',
      'Enterprise teams still expect testing, architecture consistency, and disciplined upgrade workflows.',
    ],
    flutter: [
      'Flutter documentation now centers on docs.flutter.dev, including the current codelab material.',
      'Production Flutter work usually includes platform integrations, testing, and release automation.',
      'Cross-platform speed is a strength, but teams still expect platform-specific UX judgment when needed.',
    ],
  },
};

const linkOverrides = [
  {
    match: /https?:\/\/reactjs\.org\/docs\/getting-started\.html/i,
    href: 'https://react.dev/learn',
    text: 'React Documentation',
  },
  {
    match: /https?:\/\/reactjs\.org\/blog\/2020\/10\/20\/react-v17\.html/i,
    href: 'https://react.dev/blog',
    text: 'React Blog',
  },
  {
    match: /https?:\/\/angular\.io\/start/i,
    href: 'https://angular.dev/tutorials/learn-angular',
    text: 'Angular Tutorial',
  },
  {
    match: /https?:\/\/angular\.io\/guide/i,
    href: 'https://angular.dev/overview',
    text: 'Angular Overview',
  },
  {
    match: /https?:\/\/flutter\.dev\/docs\/codelabs/i,
    href: 'https://docs.flutter.dev/codelabs',
    text: 'Flutter Codelabs',
  },
  {
    match: /https?:\/\/flutter\.dev\/docs\/?$/i,
    href: 'https://docs.flutter.dev/',
    text: 'Flutter Documentation',
  },
  {
    match: /https?:\/\/developers\.google\.com\/certification\/associate-android-developer/i,
    href: 'https://developer.android.com/courses/android-basics-compose/course',
    text: 'Android Basics with Compose',
  },
];

function buildFileMap(rawFiles) {
  return Object.entries(rawFiles).reduce((accumulator, [path, content]) => {
    const slug = path.split('/').pop().replace('.html', '');
    accumulator[slug] = content;
    return accumulator;
  }, {});
}

function maybeDecodeMojibake(text) {
  if (!text || !MOJIBAKE_PATTERN.test(text)) {
    return text;
  }

  try {
    const bytes = Uint8Array.from(text, (character) => character.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return text;
  }
}

function cleanText(text) {
  const collapsed = (text ?? '').replace(/\s+/g, ' ').trim();
  return maybeDecodeMojibake(collapsed);
}

function stripDecorativePrefix(text) {
  return cleanText(text).replace(/^[^A-Za-z0-9]+/u, '').trim();
}

function normalizeLink(href, text) {
  const normalizedText = cleanText(text)
    .replace(/\b(2020|2021|2022|2023|2024|2025|2026)\b/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([):])/g, '$1')
    .replace(/\(\s*\)/g, '')
    .trim();

  if (!href) {
    return { href: '', text: normalizedText };
  }

  for (const override of linkOverrides) {
    if (override.match.test(href)) {
      return {
        href: override.href,
        text: override.text ?? normalizedText,
      };
    }
  }

  return { href, text: normalizedText };
}

function parseSection(sectionNode) {
  const title = stripDecorativePrefix(
    sectionNode.querySelector('.section-title')?.textContent ??
      sectionNode.querySelector('h2')?.textContent ??
      '',
  );
  const paragraphs = [];
  const items = [];

  for (const child of Array.from(sectionNode.children)) {
    if (/^H[1-6]$/.test(child.tagName)) {
      continue;
    }

    if (child.tagName === 'P') {
      paragraphs.push(cleanText(child.textContent));
      continue;
    }

    if (child.tagName === 'UL' || child.tagName === 'OL') {
      for (const listItem of Array.from(child.querySelectorAll(':scope > li'))) {
        const anchor = listItem.querySelector('a');
        if (anchor) {
          const normalized = normalizeLink(anchor.href, cleanText(anchor.textContent));
          items.push({
            text: normalized.text,
            href: normalized.href,
          });
        } else {
          items.push({
            text: cleanText(listItem.textContent),
          });
        }
      }
    }
  }

  return {
    title,
    paragraphs,
    items,
  };
}

function parseDetailPage(rawHtml) {
  const documentNode = new DOMParser().parseFromString(rawHtml, 'text/html');
  const metaDescription = cleanText(
    documentNode.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
  );
  const sections = Array.from(documentNode.querySelectorAll('.roadmap-section'))
    .map(parseSection)
    .filter((section) => section.title && (section.paragraphs.length || section.items.length));

  return {
    metaDescription,
    sections,
  };
}

function buildCollection(kind, catalog, pagesBySlug) {
  return catalog.map((item) => {
    const parsed = parseDetailPage(pagesBySlug[item.id] ?? '');
    const dynamicSections = [];

    // Dynamically inject Focus Areas
    if (item.focusAreas?.length) {
      dynamicSections.push({
        title: 'Focus Areas',
        paragraphs: [],
        items: item.focusAreas.map((text) => ({ text })),
      });
    }

    // Dynamically inject Prerequisites
    if (item.prerequisites?.length) {
      dynamicSections.push({
        title: 'Prerequisites',
        paragraphs: [
          kind === 'roadmap'
            ? 'Before diving into this roadmap, ensure you have a solid grasp of the following foundational concepts and skills:'
            : 'Before learning this technology, ensure you have a solid grasp of the following foundational concepts and skills:',
        ],
        items: item.prerequisites.map((prereq) => ({ text: prereq })),
      });
    }

    // Dynamically inject Core Skills
    if (item.skills?.length) {
      dynamicSections.push({
        title: kind === 'roadmap' ? 'Core Skills' : 'Key Skills',
        paragraphs: [],
        items: item.skills.map((text) => ({ text })),
      });
    }

    // Dynamically inject Career Progression from roadmaps.js
    if (item.careerPath?.length) {
      dynamicSections.push({
        title: 'Career Progression',
        paragraphs: [],
        items: item.careerPath.map((path) => ({
          text: `${path.title}: ${path.description}`,
        })),
      });
    }

    // Dynamically inject Certifications
    if (item.certifications?.length) {
      dynamicSections.push({
        title: 'Recommended Certifications',
        paragraphs: [],
        items: item.certifications.map((cert) => {
          const normalized = normalizeLink(cert.href, cert.label);
          return { text: normalized.text, href: normalized.href };
        }),
      });
    }

    // Dynamically inject Learning Resources
    if (item.courses?.length) {
      dynamicSections.push({
        title: 'Learning Resources',
        paragraphs: [],
        items: item.courses.map((course) => {
          const normalized = normalizeLink(course.href, course.label);
          return { text: normalized.text, href: normalized.href };
        }),
      });
    }

    // Dynamically inject Youtube Channels
    if (item.youtubeChannels?.length) {
      dynamicSections.push({
        title: 'YouTube Channels',
        paragraphs: [],
        items: item.youtubeChannels.map((channel) => ({ text: channel.label, href: channel.href })),
      });
    }

    // Dynamically inject Recommended Books
    if (item.books?.length) {
      dynamicSections.push({
        title: 'Recommended Books',
        paragraphs: [],
        items: item.books.map((book) => ({ text: book.label, href: book.href })),
      });
    }

    // Dynamically inject Projects
    if (item.projects?.length) {
      dynamicSections.push({
        title: 'Beginner Projects',
        paragraphs: ['Practical experience is the best way to learn. Try building these projects to solidify your understanding.'],
        items: item.projects.map((project) => ({ text: `${project.title}: ${project.description}` })),
      });
    }

    // Extract industry signals or specific highlights
    const highlights = 
      itemSignals[kind]?.[item.id] ?? 
      sharedSignals[kind]?.[item.category] ?? 
      [];

    return {
      ...item,
      description: parsed.metaDescription || item.blurb,
      highlights,
      // Combine the structured metadata sections with the parsed HTML sections
      sections: [...dynamicSections, ...parsed.sections],
    };
  });
}

function countResourceLinks(collection) {
  return collection.reduce(
    (total, item) =>
      total +
      item.sections.reduce(
        (sectionTotal, section) =>
          sectionTotal + section.items.filter((entry) => Boolean(entry.href)).length,
        0,
      ),
    0,
  );
}

const roadmapPagesBySlug = buildFileMap(roadmapPages);
const languagePagesBySlug = buildFileMap(languagePages);

export const roadmapContent = buildCollection('roadmap', roadmaps, roadmapPagesBySlug);
export const languageContent = buildCollection('language', languages, languagePagesBySlug);

export const homeStats = {
  roadmapCount: roadmapContent.length,
  technologyCount: languageContent.length,
  learningResourceCount:
    countResourceLinks(roadmapContent) + countResourceLinks(languageContent),
};

export const aboutContent = {
  mission:
    'Tech Roadmaps exists to make tech career growth easier to navigate. The platform keeps the original goal of guiding beginners and working professionals, while organizing the journey into clearer paths, practical resources, and up-to-date technology signals.',
  team: [
    {
      name: 'Tumelo Kgware',
      role: 'Project Manager',
      badge: 'PM',
      accent: 'blue',
      description:
        'Computer Networking Graduate with experience in project coordination, planning, and delivery support.',
      links: [
        {
          href: 'https://www.linkedin.com/in/tumelo-kgware',
          label: 'LinkedIn',
        },
        {
          href: 'tel:+27721496260',
          label: 'Call',
        },
      ],
    },
    {
      name: 'Mosia Marate',
      role: 'Software Developer',
      badge: 'DEV',
      accent: 'green',
      description:
        'Computer Networking Graduate focused on web development, product delivery, and digital strategy.',
      links: [
        {
          href: 'https://github.com/mosiamarate',
          label: 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/mosiamarate',
          label: 'LinkedIn',
        },
      ],
    },
    {
      name: 'Molemo Rantsoareng',
      role: 'Software Tester',
      badge: 'QA',
      accent: 'purple',
      description:
        'Computer Networking Graduate with a focus on quality assurance, validation, and software reliability.',
      links: [
        {
          href: 'https://www.linkedin.com/in/molemo-rantsoareng',
          label: 'LinkedIn',
        },
        {
          href: 'tel:+27721499260',
          label: 'Call',
        },
      ],
    },
  ],
  contactEmail: 'mosiathedeveloper@gmail.com',
  socialLinks: [
    {
      href: 'https://github.com/mosiamarate',
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/mosiamarate',
      label: 'LinkedIn',
    },
    {
      href: 'tel:+27721496260',
      label: 'Phone',
    },
  ],
};

export const jobsContent = [
  {
    title: 'By Experience Level',
    columns: [
      {
        title: 'Internships',
        accent: 'blue',
        links: [
          {
            label: 'Tech Internships on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_E=1&geoId=104040325&keywords=tech%20internship&location=South%20Africa',
          },
          {
            label: 'Tech Internships on Indeed',
            href: 'https://za.indeed.com/q-tech-internship-jobs.html',
          },
          {
            label: 'IT Internships on Careers24',
            href: 'https://www.careers24.com/jobs/kw-it-internship/',
          },
          {
            label: 'IT Internships on Graduate24',
            href: 'https://www.graduate24.com/jobs/it-technology',
          },
        ],
      },
      {
        title: 'Junior Positions',
        accent: 'blue',
        links: [
          {
            label: 'Junior Developer on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_E=2&geoId=104040325&keywords=junior%20developer&location=South%20Africa',
          },
          {
            label: 'Junior Developer on Indeed',
            href: 'https://za.indeed.com/q-junior-developer-jobs.html',
          },
          {
            label: 'Junior Developer on OfferZen',
            href: 'https://www.offerzen.com/za/developer-jobs/junior',
          },
        ],
      },
      {
        title: 'Intermediate Positions',
        accent: 'blue',
        links: [
          {
            label: 'Intermediate Developer on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_E=3%2C4&geoId=104040325&keywords=intermediate%20developer&location=South%20Africa',
          },
          {
            label: 'Intermediate Developer on OfferZen',
            href: 'https://www.offerzen.com/za/developer-jobs/intermediate',
          },
          {
            label: 'Intermediate Developer on Indeed',
            href: 'https://za.indeed.com/q-intermediate-developer-jobs.html',
          },
        ],
      },
      {
        title: 'Senior Positions',
        accent: 'blue',
        links: [
          {
            label: 'Senior Developer on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_E=5%2C6&geoId=104040325&keywords=senior%20developer&location=South%20Africa',
          },
          {
            label: 'Senior Developer on OfferZen',
            href: 'https://www.offerzen.com/za/developer-jobs/senior',
          },
          {
            label: 'Senior Developer on Careers24',
            href: 'https://www.careers24.com/jobs/kw-senior-developer/',
          },
        ],
      },
    ],
  },
  {
    title: 'By Job Category',
    columns: [
      {
        title: 'Software Development',
        accent: 'purple',
        links: [
          {
            label: 'Junior Software Developer',
            href: 'https://www.linkedin.com/jobs/search/?keywords=Junior%20Software%20Developer&location=South%20Africa',
          },
          {
            label: 'Senior Software Developer',
            href: 'https://www.linkedin.com/jobs/search/?keywords=Senior%20Software%20Developer&location=South%20Africa',
          },
          {
            label: 'Full Stack Developer',
            href: 'https://za.indeed.com/jobs?q=Full+Stack+Developer&l=South+Africa',
          },
        ],
      },
      {
        title: 'IT Support and Networking',
        accent: 'purple',
        links: [
          {
            label: 'IT Assistant',
            href: 'https://za.indeed.com/jobs?q=IT+Assistant&l=South+Africa',
          },
          {
            label: 'IT Support Technician',
            href: 'https://www.careers24.com/jobs/kw-it-support-technician/',
          },
          {
            label: 'Network Engineer',
            href: 'https://www.linkedin.com/jobs/search/?keywords=Network%20Engineer&location=South%20Africa',
          },
        ],
      },
      {
        title: 'Data and Analytics',
        accent: 'purple',
        links: [
          {
            label: 'Junior Data Analyst',
            href: 'https://www.linkedin.com/jobs/search/?keywords=Junior%20Data%20Analyst&location=South%20Africa',
          },
          {
            label: 'Data Scientist',
            href: 'https://za.indeed.com/jobs?q=Data+Scientist&l=South+Africa',
          },
        ],
      },
      {
        title: 'Cybersecurity',
        accent: 'purple',
        links: [
          {
            label: 'Cyber Security Analyst',
            href: 'https://www.linkedin.com/jobs/search/?keywords=Cyber+Security+Analyst&location=South%20Africa',
          },
          {
            label: 'Security Engineer',
            href: 'https://www.careers24.com/jobs/kw-security-engineer/',
          },
        ],
      },
    ],
  },
  {
    title: 'By Work Model',
    columns: [
      {
        title: 'Remote',
        accent: 'green',
        links: [
          {
            label: 'Remote Tech Jobs on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_WT=2&geoId=104040325&keywords=tech&location=South%20Africa',
          },
          {
            label: 'Remote Tech Jobs on Indeed',
            href: 'https://za.indeed.com/q-remote-tech-jobs.html',
          },
        ],
      },
      {
        title: 'Hybrid',
        accent: 'green',
        links: [
          {
            label: 'Hybrid Tech Jobs on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_WT=3&geoId=104040325&keywords=tech&location=South%20Africa',
          },
          {
            label: 'Hybrid Tech Jobs on Indeed',
            href: 'https://za.indeed.com/q-hybrid-tech-jobs.html',
          },
          {
            label: 'Hybrid IT Jobs on Careers24',
            href: 'https://www.careers24.com/jobs/kw-hybrid-it/',
          },
        ],
      },
      {
        title: 'On-site',
        accent: 'green',
        links: [
          {
            label: 'On-site Tech Jobs on LinkedIn',
            href: 'https://www.linkedin.com/jobs/search/?f_WT=1&geoId=104040325&keywords=tech&location=South%20Africa',
          },
          {
            label: 'On-site Tech Jobs on Indeed',
            href: 'https://za.indeed.com/q-on-site-tech-jobs.html',
          },
          {
            label: 'On-site IT Jobs on PNet',
            href: 'https://www.pnet.co.za/jobs/it.html',
          },
        ],
      },
    ],
  },
];

export function getDetailItem(type, id) {
  const collection = type === 'roadmap' ? roadmapContent : languageContent;
  return collection.find((entry) => entry.id === id) ?? null;
}
