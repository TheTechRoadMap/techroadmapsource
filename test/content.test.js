import assert from 'node:assert/strict';
import test from 'node:test';
import {
  certificationVideos,
  certifications,
} from '../src/certifications.js';
import {
  filterCertifications,
  filterNews,
  getYouTubeVideoId,
  isSafeHttpsUrl,
  isSafeYouTubeUrl,
} from '../src/contentUtils.js';
import {
  calculatePathRecommendations,
  findPathQuestions,
} from '../src/findPathData.js';
import { languages } from '../src/languages.js';
import { roadmaps } from '../src/roadmaps.js';
import { SAMPLE_TECH_NEWS } from '../src/techNews.js';
import {
  categorizeTechStory,
  loadTechNews,
  mapHackerNewsStory,
} from '../src/techNews.js';
import { technologyConnections } from '../src/technologyConnections.js';
import {
  getRoadmapLearningPlan,
  roadmapPhaseTracks,
  stepProjectsByRoadmap,
} from '../src/roadmapLearningPlans.js';

test('certification catalog contains at least ten additive entries', () => {
  assert.ok(certifications.length >= 10);
  assert.equal(new Set(certifications.map((item) => item.id)).size, certifications.length);
});

test('new certification names do not duplicate existing roadmap credentials', () => {
  const normalize = (value) =>
    value
      .toLowerCase()
      .replace(/\([^)]*\)/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  const existingNames = new Set(
    [...roadmaps, ...languages].flatMap((item) =>
      (item.certifications ?? []).map((certification) => normalize(certification.label)),
    ),
  );

  certifications.forEach((certification) => {
    assert.equal(existingNames.has(normalize(certification.name)), false, certification.name);
  });
});

test('certification search and filters return expected entries', () => {
  assert.ok(filterCertifications(certifications, { search: 'cybersecurity' }).length >= 2);
  assert.ok(
    filterCertifications(certifications, {
      provider: 'Microsoft',
      category: 'security',
      difficulty: 'Beginner',
      costType: 'Paid',
    }).some((item) => item.id === 'microsoft-security-compliance-identity-fundamentals'),
  );
  assert.equal(filterCertifications(certifications, { search: 'does-not-exist' }).length, 0);
});

test('all certification links are secure external URLs', () => {
  certifications.forEach((certification) => {
    assert.equal(isSafeHttpsUrl(certification.officialUrl), true, certification.officialUrl);
  });
});

test('valid videos connect to certifications and invalid videos are rejected', () => {
  const certificationIds = new Set(certifications.map((item) => item.id));
  const validVideos = certificationVideos.filter((video) => isSafeYouTubeUrl(video.youtubeUrl));

  assert.ok(validVideos.length >= certifications.length);
  validVideos.forEach((video) => {
    assert.ok(certificationIds.has(video.certificationId));
    assert.ok(getYouTubeVideoId(video.youtubeUrl));
  });
  assert.equal(isSafeYouTubeUrl(''), false);
  assert.equal(isSafeYouTubeUrl('javascript:alert(1)'), false);
});

test('news search, category filtering, sorting, and URLs are valid', () => {
  SAMPLE_TECH_NEWS.forEach((article) => assert.equal(isSafeHttpsUrl(article.articleUrl), true));
  const aiNews = filterNews(SAMPLE_TECH_NEWS, {
    category: 'Artificial Intelligence',
    sort: 'newest',
  });
  assert.ok(aiNews.length >= 1);
  assert.equal(filterNews(SAMPLE_TECH_NEWS, { search: 'prompt tuning' })[0].id, 'vscode-prompt-tuning');
  const oldestFirst = filterNews(SAMPLE_TECH_NEWS, { sort: 'oldest' });
  assert.ok(new Date(oldestFirst[0].publishedAt) <= new Date(oldestFirst.at(-1).publishedAt));
});

test('live Hacker News stories are safely normalized and categorized', () => {
  const article = mapHackerNewsStory({
    id: 123,
    type: 'story',
    by: 'tester',
    time: 1785100000,
    title: 'A new &amp; secure Kubernetes platform',
    url: 'https://example.com/cloud-platform',
    score: 42,
    descendants: 7,
  });

  assert.equal(article.title, 'A new & secure Kubernetes platform');
  assert.equal(article.category, 'Cloud Computing');
  assert.equal(article.source, 'example.com');
  assert.equal(isSafeHttpsUrl(article.articleUrl), true);
  assert.equal(mapHackerNewsStory({ id: 1, type: 'story', title: 'Unsafe', url: 'javascript:alert(1)', time: 1 }), null);
  assert.equal(categorizeTechStory('Critical ransomware vulnerability'), 'Cybersecurity');
});

test('live news loader uses the API and falls back safely when it is unavailable', async () => {
  const stories = new Map([
    [11, { id: 11, type: 'story', time: 1785100000, title: 'Modern JavaScript runtimes', url: 'https://example.com/js', score: 20 }],
    [12, { id: 12, type: 'story', time: 1785100001, title: 'New database engine', url: 'https://example.org/data', score: 15 }],
  ]);
  const fetchImpl = async (url) => ({
    ok: true,
    json: async () =>
      url.endsWith('/topstories.json')
        ? [11, 12]
        : stories.get(Number(url.match(/\/item\/(\d+)\.json$/)?.[1])),
  });
  const live = await loadTechNews({
    fetchImpl,
    forceRefresh: true,
    now: 1785101000000,
    storage: null,
    storyLimit: 2,
  });
  assert.equal(live.mode, 'live');
  assert.equal(live.items.length, 2);

  const fallback = await loadTechNews({
    fetchImpl: async () => {
      throw new Error('offline');
    },
    forceRefresh: true,
    storage: null,
  });
  assert.equal(fallback.mode, 'fallback');
  assert.equal(fallback.items, SAMPLE_TECH_NEWS);
});

test('quiz returns three ranked roadmap recommendations', () => {
  const answers = Object.fromEntries(
    findPathQuestions.map((question) => [question.id, question.options[0].id]),
  );
  const results = calculatePathRecommendations(answers, roadmaps);
  assert.equal(results.length, 3);
  assert.ok(results[0].matchScore >= results[1].matchScore);
});

test('technology connections point to real roadmap and technology records', () => {
  const roadmapIds = new Set(roadmaps.map((item) => item.id));
  const technologyIds = new Set(languages.map((item) => item.id));

  Object.entries(technologyConnections).forEach(([roadmapId, connections]) => {
    assert.ok(roadmapIds.has(roadmapId), roadmapId);
    connections.forEach((connection) => assert.ok(technologyIds.has(connection.id), connection.id));
  });
});

test('every roadmap has four phases, checkpoint projects, and portfolio-ready work', () => {
  const phaseTitleSets = new Set();

  roadmaps.forEach((roadmap) => {
    const plan = getRoadmapLearningPlan(roadmap);

    assert.equal(plan.phases.length, 4, roadmap.id);
    assert.equal(plan.planTitle, `${roadmap.title} learning roadmap`);
    assert.match(plan.estimatedDuration, /^\d+–\d+ weeks$/);
    assert.equal(roadmapPhaseTracks[roadmap.id].length, 4, roadmap.id);
    assert.equal(stepProjectsByRoadmap[roadmap.id].length, 4, roadmap.id);
    phaseTitleSets.add(plan.phases.map((phase) => phase.title).join('|'));
    plan.phases.forEach((phase) => {
      assert.equal(phase.milestones.length, 3, `${roadmap.id} phase ${phase.number}`);
      assert.ok(phase.project[0]);
      assert.ok(phase.project[1]);
    });
    assert.ok(plan.portfolioProjects.length >= 3, roadmap.id);
    plan.portfolioProjects.forEach((project) => {
      assert.ok(project.title);
      assert.ok(project.description);
      assert.equal(project.deliverables.length, 3);
    });
  });

  assert.equal(phaseTitleSets.size, roadmaps.length);
});
