import { isSafeHttpsUrl } from './contentUtils.js';

const HACKER_NEWS_API = 'https://hacker-news.firebaseio.com/v0';
const NEWS_CACHE_KEY = 'tech-roadmap:live-news:v1';
const NEWS_CACHE_VERSION = 1;
const NEWS_CACHE_TTL_MS = 15 * 60 * 1000;
const NEWS_REQUEST_TIMEOUT_MS = 8000;
const LIVE_STORY_COUNT = 12;
const STORY_CANDIDATE_COUNT = 30;

export const NEWS_REFRESH_INTERVAL_MS = NEWS_CACHE_TTL_MS;

// Curated fallback content keeps the page useful when the live service or the
// visitor's network is unavailable.
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

const categoryImages = {
  'Artificial Intelligence': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  Cybersecurity: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
  'Software Development': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  'Cloud Computing': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  'Data Science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'Mobile Development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  Networking: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  'Technology Careers': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
};

function cleanTitle(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#0*39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 220);
}

export function categorizeTechStory(title, url = '') {
  const text = `${title} ${url}`.toLowerCase();
  const categoryRules = [
    ['Artificial Intelligence', /\b(ai|llm|language model|machine learning|openai|anthropic|gemini|neural|inference)\b/],
    ['Cybersecurity', /\b(security|cyber|vulnerability|malware|ransomware|breach|encryption|privacy|exploit)\b/],
    ['Cloud Computing', /\b(cloud|aws|azure|gcp|kubernetes|docker|serverless|devops|terraform|infrastructure)\b/],
    ['Data Science', /\b(data|database|sql|analytics|dataset|postgres|spark|warehouse)\b/],
    ['Mobile Development', /\b(android|ios|mobile|iphone|swift|kotlin|flutter|react native)\b/],
    ['Networking', /\b(network|internet|dns|tcp|routing|router|wifi|wi-fi|protocol)\b/],
    ['Technology Careers', /\b(career|hiring|job|developer survey|engineering culture|workplace)\b/],
  ];

  return categoryRules.find(([, pattern]) => pattern.test(text))?.[0] ?? 'Software Development';
}

function getPublisherName(articleUrl) {
  const hostname = new URL(articleUrl).hostname.replace(/^www\./, '');
  const knownPublishers = {
    'github.com': 'GitHub',
    'microsoft.com': 'Microsoft',
    'google.com': 'Google',
    'openai.com': 'OpenAI',
    'arstechnica.com': 'Ars Technica',
    'techcrunch.com': 'TechCrunch',
    'theverge.com': 'The Verge',
  };

  return knownPublishers[hostname] ?? hostname;
}

export function mapHackerNewsStory(story) {
  const title = cleanTitle(story?.title);
  const articleUrl = story?.url;
  const publishedAt = new Date(Number(story?.time) * 1000);

  if (
    story?.type !== 'story' ||
    story.deleted ||
    story.dead ||
    !Number.isInteger(story.id) ||
    !title ||
    !isSafeHttpsUrl(articleUrl) ||
    Number.isNaN(publishedAt.getTime())
  ) {
    return null;
  }

  const category = categorizeTechStory(title, articleUrl);
  const source = getPublisherName(articleUrl);
  const score = Math.max(0, Number(story.score) || 0);
  const comments = Math.max(0, Number(story.descendants) || 0);

  return {
    id: `hn-${story.id}`,
    title,
    summary: `Trending on Hacker News with ${score} points and ${comments} comments. Continue to ${source} for the original article.`,
    imageUrl: categoryImages[category],
    articleUrl,
    source,
    category,
    publishedAt: publishedAt.toISOString(),
    readingTime: `${score} HN points`,
  };
}

function getBrowserStorage() {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null;
  } catch {
    return null;
  }
}

function validateCachedItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item.id === 'string' &&
          typeof item.title === 'string' &&
          newsCategories.includes(item.category) &&
          isSafeHttpsUrl(item.articleUrl),
      )
    : [];
}

function readNewsCache(storage) {
  if (!storage) {
    return null;
  }

  try {
    const cached = JSON.parse(storage.getItem(NEWS_CACHE_KEY));
    const items = validateCachedItems(cached?.items);
    if (cached?.version !== NEWS_CACHE_VERSION || !Number.isFinite(cached?.savedAt) || !items.length) {
      return null;
    }
    return { items, savedAt: cached.savedAt };
  } catch {
    return null;
  }
}

function writeNewsCache(storage, items, savedAt) {
  if (!storage) {
    return;
  }

  try {
    storage.setItem(
      NEWS_CACHE_KEY,
      JSON.stringify({ version: NEWS_CACHE_VERSION, savedAt, items }),
    );
  } catch {
    // Storage can be disabled or full; the live feed still works without it.
  }
}

async function requestJson(url, fetchImpl) {
  const controller = typeof AbortController === 'undefined' ? null : new AbortController();
  const timeout = controller
    ? setTimeout(() => controller.abort(), NEWS_REQUEST_TIMEOUT_MS)
    : null;

  try {
    const response = await fetchImpl(url, controller ? { signal: controller.signal } : undefined);
    if (!response?.ok) {
      throw new Error(`News request failed with status ${response?.status ?? 'unknown'}`);
    }
    return await response.json();
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}

async function fetchLiveStories(fetchImpl, storyLimit = LIVE_STORY_COUNT) {
  if (typeof fetchImpl !== 'function') {
    throw new Error('Fetch is unavailable');
  }

  const ids = await requestJson(`${HACKER_NEWS_API}/topstories.json`, fetchImpl);
  if (!Array.isArray(ids)) {
    throw new Error('The live news response was invalid');
  }

  const candidates = await Promise.allSettled(
    ids.slice(0, STORY_CANDIDATE_COUNT).map((id) =>
      requestJson(`${HACKER_NEWS_API}/item/${id}.json`, fetchImpl),
    ),
  );
  const items = candidates
    .filter((result) => result.status === 'fulfilled')
    .map((result) => mapHackerNewsStory(result.value))
    .filter(Boolean)
    .slice(0, storyLimit);

  if (!items.length) {
    throw new Error('The live feed contained no valid stories');
  }

  return items;
}

export async function loadTechNews(options = {}) {
  const {
    fetchImpl = globalThis.fetch,
    forceRefresh = false,
    now = Date.now(),
    storage = getBrowserStorage(),
    storyLimit = LIVE_STORY_COUNT,
  } = options;
  const cached = readNewsCache(storage);

  if (!forceRefresh && cached && now - cached.savedAt < NEWS_CACHE_TTL_MS) {
    return {
      items: cached.items,
      mode: 'cache',
      updatedAt: new Date(cached.savedAt).toISOString(),
    };
  }

  try {
    const items = await fetchLiveStories(fetchImpl, storyLimit);
    writeNewsCache(storage, items, now);
    return {
      items,
      mode: 'live',
      updatedAt: new Date(now).toISOString(),
    };
  } catch {
    if (cached?.items.length) {
      return {
        items: cached.items,
        mode: 'cache',
        stale: true,
        updatedAt: new Date(cached.savedAt).toISOString(),
      };
    }

    return {
      items: SAMPLE_TECH_NEWS,
      mode: 'fallback',
      stale: true,
      updatedAt: null,
    };
  }
}
