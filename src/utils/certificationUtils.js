import {
  certificationCategories,
  certificationProviders,
  certifications,
} from '../data/certifications.js';
import { careers } from '../data/careersData.js';
import { roadmapsData } from '../data/roadmapsData.js';
import { isSafeHttpsUrl } from './contentUtils.js';

const careerIdAliases = {
  'android-developer': 'mobile-developer',
  'backend-dev': 'backend-developer',
  'cybersecurity': 'cybersecurity-analyst',
  'data-science': 'data-scientist',
  'devops': 'devops-engineer',
  'frontend-dev': 'frontend-developer',
  'fullstack-dev': 'fullstack-developer',
  'game-dev': 'game-developer',
  'mobile-development': 'mobile-developer',
  'ml-engineer': 'ai-engineer',
  'network-technician': 'network-engineer',
};

const careerById = new Map(careers.map((career) => [career.id, career]));
const roadmapIds = new Set(roadmapsData.map((roadmap) => roadmap.id));
const certificationsById = new Map(certifications.map((certification) => [certification.id, certification]));

export function getRoadmapIdsForCareerPath(pathId) {
  if (typeof pathId !== 'string' || !pathId) {
    return [];
  }

  const canonicalId = careerIdAliases[pathId] ?? pathId;
  const career = careerById.get(canonicalId);

  if (career) {
    return roadmapIds.has(career.roadmapId) ? [career.roadmapId] : [];
  }

  return roadmapIds.has(pathId) ? [pathId] : [];
}

function getMatchingCertifications(roadmapId, preferredCareerId) {
  const matches = certifications
    .map((certification, index) => {
      const recommendedRoadmaps = new Set(
        (certification.recommendedCareerPaths ?? []).flatMap(getRoadmapIdsForCareerPath),
      );
      if (!recommendedRoadmaps.has(roadmapId)) {
        return null;
      }

      const exactMatch = (certification.recommendedCareerPaths ?? []).includes(preferredCareerId);
      return { certification, index, score: exactMatch ? 2 : 1 };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score || left.index - right.index);

  return matches.map(({ certification }) => certification);
}

export function getCertificationsByCareerId(careerId, limit = 6) {
  const career = careerById.get(careerId);
  if (!career || !roadmapIds.has(career.roadmapId)) {
    return [];
  }

  return getMatchingCertifications(career.roadmapId, careerId).slice(0, limit);
}

export function getCertificationsByRoadmapId(roadmapId, limit = 6) {
  if (!roadmapIds.has(roadmapId)) {
    return [];
  }

  return getMatchingCertifications(roadmapId, roadmapId).slice(0, limit);
}

export function getCertificationsByCategory(category) {
  return certifications.filter((certification) => certification.category === category);
}

export function getCertificationsByProvider(provider) {
  return certifications.filter((certification) => certification.provider === provider);
}

export function getCertificationsByDifficulty(difficulty) {
  return certifications.filter((certification) => certification.difficulty === difficulty);
}

export function getCertificationById(certificationId) {
  return certificationsById.get(certificationId) ?? null;
}

export function validateCareerAndRoadmapReferences() {
  const errors = [];
  const seenCertificationIds = new Set();
  certifications.forEach((certification) => {
    if (seenCertificationIds.has(certification.id)) {
      errors.push(`Duplicate certification ID: ${certification.id}`);
    }
    seenCertificationIds.add(certification.id);

    if (!certification.name || !certification.provider || !certificationProviders[certification.provider]) {
      errors.push(`Missing name or provider for certification: ${certification.id}`);
    }
    if (!isSafeHttpsUrl(certification.officialUrl)) {
      errors.push(`Invalid official HTTPS URL for certification: ${certification.id}`);
    }
    if (!Object.hasOwn(certificationCategories, certification.category)) {
      errors.push(`Unknown category "${certification.category}" for certification: ${certification.id}`);
    }
    (certification.recommendedCareerPaths ?? []).forEach((pathId) => {
      if (!getRoadmapIdsForCareerPath(pathId).length) {
        errors.push(`Unknown career or roadmap "${pathId}" for certification: ${certification.id}`);
      }
    });
  });

  careers.forEach((career) => {
    if (!roadmapIds.has(career.roadmapId)) {
      errors.push(`Career "${career.id}" points to missing roadmap "${career.roadmapId}"`);
    }
  });

  return { isValid: errors.length === 0, errors };
}
