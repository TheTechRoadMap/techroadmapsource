export const findPathQuestions = [
  {
    id: 'interest',
    prompt: 'What kind of problems would you enjoy solving?',
    options: [
      { id: 'products', label: 'Building websites and apps', scores: { 'frontend-dev': 4, 'fullstack-dev': 3, 'mobile-development': 3 } },
      { id: 'systems', label: 'Running reliable systems', scores: { devops: 4, 'cloud-engineer': 4, 'backend-dev': 2 } },
      { id: 'data', label: 'Finding patterns in data', scores: { 'data-analyst': 4, 'data-science': 4, 'ai-engineer': 3 } },
      { id: 'protect', label: 'Protecting and troubleshooting technology', scores: { cybersecurity: 4, 'network-engineer': 3, 'it-support-specialist': 3 } },
      { id: 'creative', label: 'Designing useful digital experiences', scores: { 'ux-ui-designer': 4, 'frontend-dev': 3, 'game-dev': 2 } },
    ],
  },
  {
    id: 'strength',
    prompt: 'Which strength sounds most like you?',
    options: [
      { id: 'visual', label: 'Visual thinking and communication', scores: { 'ux-ui-designer': 4, 'frontend-dev': 3, 'mobile-development': 2 } },
      { id: 'logic', label: 'Logic and structured problem solving', scores: { 'backend-dev': 4, 'fullstack-dev': 3, devops: 2 } },
      { id: 'numbers', label: 'Numbers, evidence, and experiments', scores: { 'data-science': 4, 'data-analyst': 3, 'ml-engineer': 4 } },
      { id: 'diagnosis', label: 'Diagnosing why things fail', scores: { cybersecurity: 3, 'network-technician': 4, 'it-support-specialist': 4 } },
    ],
  },
  {
    id: 'work',
    prompt: 'What would you most like to create?',
    options: [
      { id: 'interface', label: 'A polished product people can use', scores: { 'frontend-dev': 4, 'mobile-development': 3, 'ux-ui-designer': 3 } },
      { id: 'service', label: 'A fast, reliable service behind the scenes', scores: { 'backend-dev': 4, 'fullstack-dev': 2, 'cloud-engineer': 2 } },
      { id: 'insight', label: 'A model, dashboard, or useful insight', scores: { 'data-analyst': 4, 'data-science': 3, 'ai-engineer': 3 } },
      { id: 'platform', label: 'Infrastructure that keeps everything running', scores: { devops: 4, 'cloud-engineer': 4, 'network-engineer': 3 } },
      { id: 'defence', label: 'A safer system and an incident response plan', scores: { cybersecurity: 5, 'network-engineer': 2 } },
    ],
  },
  {
    id: 'starting-point',
    prompt: 'Where are you starting from?',
    options: [
      { id: 'new', label: 'I am completely new to tech', scores: { 'it-support-specialist': 2, 'data-analyst': 1, 'frontend-dev': 1 } },
      { id: 'coded', label: 'I have tried some coding', scores: { 'frontend-dev': 2, 'backend-dev': 2, 'fullstack-dev': 2 } },
      { id: 'systems', label: 'I have worked with computers or networks', scores: { 'network-technician': 2, 'cloud-engineer': 2, cybersecurity: 2 } },
      { id: 'creative', label: 'I come from a creative or communication background', scores: { 'ux-ui-designer': 3, 'frontend-dev': 1 } },
      { id: 'analytical', label: 'I am comfortable with maths or spreadsheets', scores: { 'data-analyst': 3, 'data-science': 2, 'ml-engineer': 1 } },
    ],
  },
];

export function calculatePathRecommendations(answers, roadmaps) {
  const scores = new Map(roadmaps.map((roadmap) => [roadmap.id, 0]));

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = findPathQuestions.find((item) => item.id === questionId);
    const option = question?.options.find((item) => item.id === optionId);
    Object.entries(option?.scores ?? {}).forEach(([roadmapId, score]) => {
      scores.set(roadmapId, (scores.get(roadmapId) ?? 0) + score);
    });
  });

  return roadmaps
    .map((roadmap) => ({ ...roadmap, matchScore: scores.get(roadmap.id) ?? 0 }))
    .sort((left, right) => right.matchScore - left.matchScore || left.title.localeCompare(right.title))
    .slice(0, 3);
}
