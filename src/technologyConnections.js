export const technologyConnections = {
  'frontend-dev': [
    { id: 'html-css', stage: 'Start here', reason: 'Build accessible page structure and responsive layouts.' },
    { id: 'javascript', stage: 'Core', reason: 'Add browser behaviour and application logic.' },
    { id: 'typescript', stage: 'Next', reason: 'Make larger interfaces safer to maintain.' },
    { id: 'react', stage: 'Specialise', reason: 'Build component-driven production interfaces.' },
  ],
  'backend-dev': [
    { id: 'python', stage: 'Choose one', reason: 'Build APIs and automation with a beginner-friendly language.' },
    { id: 'java', stage: 'Choose one', reason: 'Develop enterprise services and distributed systems.' },
    { id: 'nodejs', stage: 'Choose one', reason: 'Create APIs with JavaScript and TypeScript.' },
    { id: 'docker', stage: 'Ship', reason: 'Package services consistently for deployment.' },
  ],
  'fullstack-dev': [
    { id: 'html-css', stage: 'Start here', reason: 'Create the interface layer.' },
    { id: 'typescript', stage: 'Core', reason: 'Use one typed language across the stack.' },
    { id: 'react', stage: 'Frontend', reason: 'Build reusable application interfaces.' },
    { id: 'nodejs', stage: 'Backend', reason: 'Create APIs and server-side workflows.' },
  ],
  'mobile-development': [
    { id: 'swift', stage: 'Native iOS', reason: 'Build for Apple platforms.' },
    { id: 'java', stage: 'Android foundation', reason: 'Understand the Android ecosystem and JVM tooling.' },
    { id: 'flutter', stage: 'Cross-platform', reason: 'Ship Android and iOS apps from one codebase.' },
  ],
  'game-dev': [
    { id: 'csharp', stage: 'Core', reason: 'Build gameplay systems in Unity.' },
    { id: 'csharp', stage: 'Practice', reason: 'Strengthen object-oriented programming for games.' },
  ],
  blockchain: [
    { id: 'javascript', stage: 'Start here', reason: 'Build wallets, dashboards, and web integrations.' },
    { id: 'typescript', stage: 'Next', reason: 'Create safer client and service code.' },
    { id: 'rust', stage: 'Specialise', reason: 'Build high-performance protocols and smart-contract systems.' },
  ],
  'cloud-engineer': [
    { id: 'aws', stage: 'Choose a cloud', reason: 'Learn widely used cloud infrastructure services.' },
    { id: 'azure', stage: 'Choose a cloud', reason: 'Learn enterprise cloud and identity services.' },
    { id: 'gcp', stage: 'Choose a cloud', reason: 'Learn cloud data, containers, and AI services.' },
    { id: 'docker', stage: 'Core', reason: 'Package workloads for cloud environments.' },
  ],
  devops: [
    { id: 'docker', stage: 'Start here', reason: 'Create repeatable application environments.' },
    { id: 'kubernetes', stage: 'Next', reason: 'Operate containerised workloads at scale.' },
    { id: 'aws', stage: 'Apply', reason: 'Automate real cloud delivery pipelines.' },
  ],
  cybersecurity: [
    { id: 'python', stage: 'Automate', reason: 'Script analysis and repetitive security tasks.' },
    { id: 'docker', stage: 'Container security', reason: 'Understand container boundaries, images, and runtime risks.' },
    { id: 'aws', stage: 'Cloud security', reason: 'Practise identity and cloud security controls.' },
  ],
  'network-engineer': [
    { id: 'python', stage: 'Automate', reason: 'Automate network configuration and analysis.' },
    { id: 'aws', stage: 'Cloud networking', reason: 'Understand virtual networks and hybrid connectivity.' },
    { id: 'azure', stage: 'Cloud networking', reason: 'Work with enterprise identity and virtual networks.' },
  ],
  'network-technician': [
    { id: 'python', stage: 'Useful later', reason: 'Automate checks and small support tasks.' },
    { id: 'aws', stage: 'Cloud context', reason: 'Understand how traditional networking maps to cloud services.' },
  ],
  'it-support-specialist': [
    { id: 'html-css', stage: 'Web basics', reason: 'Understand the interfaces users work with.' },
    { id: 'python', stage: 'Automate', reason: 'Reduce repetitive endpoint and support work.' },
    { id: 'azure', stage: 'Enterprise tools', reason: 'Learn identity and cloud administration concepts.' },
  ],
  'data-analyst': [
    { id: 'python', stage: 'Core', reason: 'Clean, analyse, and visualise datasets.' },
    { id: 'gcp', stage: 'Cloud data', reason: 'Work with managed analytics platforms.' },
  ],
  'data-science': [
    { id: 'python', stage: 'Start here', reason: 'Use the dominant data-science ecosystem.' },
    { id: 'gcp', stage: 'Scale', reason: 'Train and deploy data workloads in the cloud.' },
  ],
  'data-engineer': [
    { id: 'python', stage: 'Core', reason: 'Build data pipelines and automation.' },
    { id: 'java', stage: 'Scale', reason: 'Work with JVM-based data platforms.' },
    { id: 'gcp', stage: 'Cloud data', reason: 'Use managed warehouse and pipeline services.' },
    { id: 'docker', stage: 'Ship', reason: 'Package reproducible data workloads.' },
  ],
  'ml-engineer': [
    { id: 'python', stage: 'Core', reason: 'Train models and build ML pipelines.' },
    { id: 'docker', stage: 'Ship', reason: 'Package models for reliable deployment.' },
    { id: 'kubernetes', stage: 'Scale', reason: 'Operate production inference workloads.' },
    { id: 'gcp', stage: 'MLOps', reason: 'Use managed model training and serving.' },
  ],
  'ai-engineer': [
    { id: 'python', stage: 'Core', reason: 'Build orchestration, evaluation, and retrieval pipelines.' },
    { id: 'typescript', stage: 'Product layer', reason: 'Integrate AI into production applications.' },
    { id: 'nextjs', stage: 'Interface', reason: 'Ship full-stack AI experiences.' },
    { id: 'docker', stage: 'Deploy', reason: 'Package AI services consistently.' },
  ],
  'ux-ui-designer': [
    { id: 'html-css', stage: 'Web literacy', reason: 'Design interfaces that translate well into code.' },
    { id: 'javascript', stage: 'Prototype', reason: 'Understand interaction constraints and possibilities.' },
    { id: 'react', stage: 'Design systems', reason: 'Collaborate on reusable component libraries.' },
  ],
};

export function getTechnologyConnections(roadmapId, technologies) {
  const technologyMap = new Map(technologies.map((item) => [item.id, item]));
  return (technologyConnections[roadmapId] ?? [])
    .map((connection) => ({
      ...connection,
      technology: technologyMap.get(connection.id),
    }))
    .filter((connection) => Boolean(connection.technology));
}

export function getRoadmapConnections(technologyId, roadmaps) {
  return roadmaps
    .filter((roadmap) => (technologyConnections[roadmap.id] ?? []).some((item) => item.id === technologyId))
    .map((roadmap) => ({
      roadmap,
      connection: technologyConnections[roadmap.id].find((item) => item.id === technologyId),
    }));
}
