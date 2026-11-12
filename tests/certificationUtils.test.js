import assert from 'node:assert/strict';
import test from 'node:test';
import { careers } from '../src/data/careersData.js';
import { certifications } from '../src/data/certifications.js';
import { calculatePathRecommendations } from '../src/data/findPathData.js';
import { roadmapsData } from '../src/data/roadmapsData.js';
import { filterCertifications } from '../src/utils/contentUtils.js';
import {
  getCertificationById,
  getCertificationsByCareerId,
  getCertificationsByCategory,
  getCertificationsByDifficulty,
  getCertificationsByProvider,
  getCertificationsByRoadmapId,
  validateCareerAndRoadmapReferences,
} from '../src/utils/certificationUtils.js';

test('catalog identifiers, providers, categories, and roadmap references are valid', () => {
  const validation = validateCareerAndRoadmapReferences();
  assert.equal(validation.isValid, true, validation.errors.join('\n'));
});

test('all active roadmaps and career profiles resolve recommendations from the catalog', () => {
  assert.equal(roadmapsData.length, 11);
  for (const roadmap of roadmapsData) {
    assert.ok(getCertificationsByRoadmapId(roadmap.id).length > 0, roadmap.id);
  }
  for (const career of careers) {
    assert.ok(getCertificationsByCareerId(career.id).length > 0, career.id);
  }
});

test('catalog lookup helpers filter records by ID, category, provider, and difficulty', () => {
  const certification = certifications[0];
  assert.equal(getCertificationById(certification.id), certification);
  assert.ok(getCertificationsByCategory(certification.category).includes(certification));
  assert.ok(getCertificationsByProvider(certification.provider).includes(certification));
  assert.ok(getCertificationsByDifficulty(certification.difficulty).includes(certification));
});

test('catalog search includes skills and filters credential type', () => {
  const result = filterCertifications(certifications, {
    search: 'Flutter widgets',
    credentialType: 'Free learning path',
  });
  assert.deepEqual(result.map((certification) => certification.id), ['flutter-developer-certificate']);
});

test('quiz recommendations use only active roadmap routes', () => {
  const recommendations = calculatePathRecommendations(
    {
      interest: 'products',
      strength: 'logic',
      work: 'interface',
      'starting-point': 'new',
    },
    roadmapsData,
  );
  const activeRoadmapIds = new Set(roadmapsData.map((roadmap) => roadmap.id));
  assert.equal(recommendations.length, 3);
  assert.ok(recommendations.every((roadmap) => activeRoadmapIds.has(roadmap.id)));
});

test('retired credentials are not present in active recommendations', () => {
  const retiredIds = [
    'google-associate-android-developer',
    'tensorflow-developer',
    'microsoft-csharp-certification',
    'aws-machine-learning-specialty',
    'aws-database-specialty',
    'microsoft-365-fundamentals',
  ];
  assert.ok(retiredIds.every((id) => !getCertificationById(id)));
  assert.ok(getCertificationById('aws-machine-learning-engineer-associate'));
  assert.ok(getCertificationById('aws-data-engineer-associate'));
});
