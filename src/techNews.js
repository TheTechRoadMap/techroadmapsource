// Sample news feed used until a server-side news source or editorial dashboard
// is connected. Keep API keys on a backend and map future results to this shape.
export const SAMPLE_TECH_NEWS = [
  {
    id: 'google-symptom-ai',
    title: 'Google Research explores a conversational AI agent for symptom assessment',
    summary: 'SymptomAI investigates how conversational systems can support everyday symptom assessment with responsible AI safeguards.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
    articleUrl:
      'https://research.google/blog/symptomai-towards-a-conversational-ai-agent-for-everyday-symptom-assessment/',
    source: 'Google Research',
    category: 'Artificial Intelligence',
    publishedAt: '2026-07-22',
    readingTime: '8 min',
  },
  {
    id: 'android-galaxy-devices',
    title: 'Android developers prepare for the next generation of Galaxy devices',
    summary: 'Google outlines practical guidance for adaptive layouts across a growing range of foldable and wearable form factors.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    articleUrl:
      'https://developer.android.com/blog/posts/optimize-your-apps-for-the-next-generation-of-samsung-galaxy-devices',
    source: 'Android Developers',
    category: 'Mobile Development',
    publishedAt: '2026-07-23',
    readingTime: '3 min',
  },
  {
    id: 'ray-tpu-foundations',
    title: 'Ray adds first-class support for Google Cloud TPUs',
    summary: 'Ray 2.55 brings supported APIs and deployment patterns for distributed Python workloads on TPU infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    articleUrl: 'https://developers.googleblog.com/run-ray-on-tpu-part-1-the-foundations/',
    source: 'Google Developers Blog',
    category: 'Cloud Computing',
    publishedAt: '2026-07-20',
    readingTime: '9 min',
  },
  {
    id: 'vscode-prompt-tuning',
    title: 'How prompt tuning improved agent efficiency in VS Code',
    summary: 'The VS Code team shares results from an experiment designed to reduce unnecessary exploration, tool calls, and latency.',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    articleUrl:
      'https://code.visualstudio.com/blogs/2026/07/06/optimizing-vscode-coding-harness-model-providers/',
    source: 'Visual Studio Code',
    category: 'Software Development',
    publishedAt: '2026-07-06',
    readingTime: '11 min',
  },
  {
    id: 'apache-magpie',
    title: 'Apache Magpie becomes a top-level open-source project',
    summary: 'The Apache Software Foundation introduces platform infrastructure for agent-assisted repository maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    articleUrl: 'https://news.apache.org/foundation/entry/the-apache-software-foundation-announces-new-top-level-project-5',
    source: 'Apache Software Foundation',
    category: 'Software Development',
    publishedAt: '2026-06-30',
    readingTime: '4 min',
  },
  {
    id: 'turla-sanctions',
    title: 'France sanctions the Turla cyberespionage unit',
    summary: 'New sanctions target people and entities connected to offensive cyber operations against European organisations.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
    articleUrl:
      'https://www.lemonde.fr/en/pixels/article/2026/07/13/france-sanctions-russian-elite-cyberespionage-unit-turla_6755432_13.html',
    source: 'Le Monde',
    category: 'Cybersecurity',
    publishedAt: '2026-07-13',
    readingTime: '4 min',
  },
  {
    id: 'ai-certification-careers',
    title: 'How AI certification is changing career development',
    summary: 'Employers and training leaders discuss where foundational AI credentials can help—and where practical application still matters.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    articleUrl:
      'https://www.itpro.com/business/careers-and-training/how-ai-certification-can-help-employees-to-climb-the-career-ladder',
    source: 'ITPro',
    category: 'Technology Careers',
    publishedAt: '2026-07-22',
    readingTime: '7 min',
  },
  {
    id: 'tabfm-foundation-model',
    title: 'Google Research introduces a zero-shot foundation model for tabular data',
    summary: 'TabFM explores general-purpose modelling across tables, opening new possibilities for structured-data prediction.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    articleUrl: 'https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/',
    source: 'Google Research',
    category: 'Data Science',
    publishedAt: '2026-06-30',
    readingTime: '8 min',
  },
];

export const newsCategories = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Software Development',
  'Cloud Computing',
  'Data Science',
  'Mobile Development',
  'Networking',
  'Technology Careers',
];

export function loadTechNews() {
  // Replace this resolved sample with a backend request when a live feed exists.
  return Promise.resolve(SAMPLE_TECH_NEWS);
}
