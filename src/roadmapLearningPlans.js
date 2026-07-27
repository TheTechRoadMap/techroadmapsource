const stepProjectsByRoadmap = {
  'frontend-dev': [
    ['Semantic profile page', 'Build a one-page profile with semantic HTML, responsive CSS, and a keyboard-friendly navigation.'],
    ['JavaScript expense tracker', 'Add, filter, and persist transactions while practising modules, validation, and DOM state.'],
    ['Accessible API dashboard', 'Use a frontend framework to fetch data and handle loading, empty, and error states accessibly.'],
    ['Release-quality UI sprint', 'Add tests, performance checks, documentation, and a live deployment to an existing interface.'],
  ],
  'backend-dev': [
    ['Health-check API', 'Create a small service with routing, structured errors, environment configuration, and request logging.'],
    ['Relational notes service', 'Model users and notes in SQL, then expose validated CRUD endpoints with automated tests.'],
    ['Authenticated queue worker', 'Protect endpoints, enqueue background work, and track retry and failure states.'],
    ['Production readiness review', 'Containerize a service and add API documentation, monitoring, security checks, and CI.'],
  ],
  'fullstack-dev': [
    ['Responsive form flow', 'Build a validated multi-step interface and store its state locally.'],
    ['Database-backed directory', 'Connect a searchable frontend to an API and relational database.'],
    ['Team feature slice', 'Ship authentication, roles, tests, and one complete collaborative workflow.'],
    ['Full-stack release sprint', 'Deploy the app with CI, monitoring, seeded demo data, and a polished README.'],
  ],
  'mobile-development': [
    ['Multi-screen mobile prototype', 'Create an accessible navigation flow with reusable components and responsive layouts.'],
    ['Offline-first tracker', 'Store, edit, and sync records while handling connectivity changes cleanly.'],
    ['Device feature demo', 'Integrate one native capability such as location, camera, or notifications with permission states.'],
    ['Release candidate build', 'Add tests, crash reporting, store assets, privacy notes, and a signed test build.'],
  ],
  'game-dev': [
    ['Playable movement sandbox', 'Implement input, collisions, camera movement, and a restartable gameplay loop.'],
    ['Systems prototype', 'Add scoring, UI, audio, save state, and reusable object behaviours.'],
    ['Polished vertical slice', 'Create one complete level with lighting, feedback, difficulty tuning, and playtesting.'],
    ['Optimisation and release pass', 'Profile performance, fix bottlenecks, package a build, and publish design notes.'],
  ],
  blockchain: [
    ['Local smart-contract sandbox', 'Write, deploy, and test a small contract locally with clear state transitions.'],
    ['Token-gated interface', 'Connect a web interface to a test wallet and explain every transaction state.'],
    ['Secure contract workflow', 'Add permissions, events, failure cases, static analysis, and automated contract tests.'],
    ['Auditable testnet release', 'Deploy to a testnet with verified source, threat notes, and reproducible setup instructions.'],
  ],
  'cloud-engineer': [
    ['Secure cloud sandbox', 'Provision a small network, compute workload, and least-privilege identity configuration.'],
    ['Infrastructure-as-code environment', 'Create repeatable development infrastructure with variables, outputs, and state guidance.'],
    ['Resilient service deployment', 'Add load balancing, scaling, backups, health checks, and observable failure scenarios.'],
    ['Cost and recovery review', 'Document budget alerts, security findings, recovery objectives, and a tested restore exercise.'],
  ],
  devops: [
    ['Containerised development environment', 'Package a small application with health checks and a dependable local workflow.'],
    ['Continuous integration pipeline', 'Automate formatting, tests, security checks, and build artefacts on every change.'],
    ['Observable deployment', 'Release to a test environment with metrics, logs, dashboards, and rollback instructions.'],
    ['Reliability game day', 'Simulate a failure, recover the service, and publish an incident review with improvements.'],
  ],
  cybersecurity: [
    ['Hardened workstation lab', 'Secure an isolated system, record the baseline, and verify changes with safe local tools.'],
    ['Threat investigation exercise', 'Analyse sample logs, build a timeline, and document indicators and containment steps.'],
    ['Web security assessment', 'Test an intentionally vulnerable local app and write reproducible findings and remediations.'],
    ['Incident response simulation', 'Run a tabletop scenario and produce an executive summary, evidence log, and lessons learned.'],
  ],
  'network-engineer': [
    ['Subnetting and VLAN lab', 'Design an address plan and validate segmented traffic in a network simulator.'],
    ['Redundant routed network', 'Configure dynamic routing, failover, access controls, and structured troubleshooting checks.'],
    ['Automated configuration audit', 'Use a script to collect device state and flag configuration drift.'],
    ['Multi-site design review', 'Present topology, capacity, security, monitoring, failure testing, and migration decisions.'],
  ],
  'network-technician': [
    ['Cable and port map', 'Document a small physical network with labels, device inventory, and verification results.'],
    ['Wireless coverage survey', 'Measure signal quality, identify interference, and recommend access-point placement.'],
    ['Layer-by-layer troubleshooting lab', 'Diagnose a set of safe simulated faults and record the checks that found each cause.'],
    ['Maintenance handover pack', 'Create a topology, inventory, change log, backup plan, and practical support runbook.'],
  ],
  'it-support-specialist': [
    ['Troubleshooting decision tree', 'Turn a common user issue into a repeatable diagnostic flow with escalation points.'],
    ['Account lifecycle lab', 'Document safe onboarding, role changes, access reviews, and offboarding in a test environment.'],
    ['Endpoint automation task', 'Script a repeatable setup or health check with logs and safe failure handling.'],
    ['Support improvement sprint', 'Measure a ticket problem, improve the workflow, and publish the before-and-after result.'],
  ],
  'data-analyst': [
    ['Messy dataset cleanup', 'Create a repeatable cleaning workflow and a short data-quality report.'],
    ['SQL business question set', 'Answer practical stakeholder questions with readable queries and validation checks.'],
    ['Interactive insight dashboard', 'Build a focused dashboard with useful filters, definitions, and accessible visuals.'],
    ['Executive data story', 'Present a recommendation with methods, limitations, evidence, and an actionable next step.'],
  ],
  'data-science': [
    ['Exploratory analysis notebook', 'Investigate a dataset with clear questions, quality checks, visualisations, and findings.'],
    ['Baseline prediction model', 'Build a reproducible baseline and compare it against a simple business rule.'],
    ['Experiment and evaluation report', 'Compare models with suitable metrics, error analysis, and bias considerations.'],
    ['Reproducible model demo', 'Package inference, documentation, model limitations, and an interactive demonstration.'],
  ],
  'data-engineer': [
    ['Validated ingestion job', 'Load source data into a local store with schemas, logging, and failure handling.'],
    ['Tested transformation project', 'Model raw data into useful tables with lineage notes and automated quality tests.'],
    ['Scheduled data pipeline', 'Orchestrate dependent jobs with retries, alerts, backfills, and idempotent behaviour.'],
    ['Production data platform review', 'Document architecture, SLAs, cost, governance, monitoring, and a recovery drill.'],
  ],
  'ml-engineer': [
    ['Tracked training pipeline', 'Train a baseline model with versioned data, parameters, metrics, and reproducible runs.'],
    ['Containerised inference API', 'Serve predictions with validation, tests, latency measurements, and clear errors.'],
    ['Model monitoring exercise', 'Track quality and drift signals, then define alerts and a retraining trigger.'],
    ['MLOps release workflow', 'Automate tests, model approval, deployment, rollback, and a model-card update.'],
  ],
  'ai-engineer': [
    ['Prompt evaluation harness', 'Create test cases, scoring criteria, and repeatable comparisons for an AI feature.'],
    ['Grounded question-answering demo', 'Build retrieval with citations, empty-result handling, and basic quality measurements.'],
    ['Guardrailed tool workflow', 'Add structured outputs, permissions, failure recovery, and an audit trail to a tool-using assistant.'],
    ['Production AI review', 'Measure quality, latency, cost, safety, and observability, then document release trade-offs.'],
  ],
  'ux-ui-designer': [
    ['Usability teardown', 'Evaluate an existing flow, identify friction, and propose evidence-based improvements.'],
    ['Research-to-wireframe sprint', 'Run lightweight research and turn findings into annotated low-fidelity flows.'],
    ['Accessible interactive prototype', 'Build and test a high-fidelity flow with clear states and keyboard considerations.'],
    ['Portfolio case-study edit', 'Shape the problem, process, trade-offs, evidence, and outcomes into a concise narrative.'],
  ],
};

const portfolioDeliverablesByCategory = {
  engineering: ['Working demo or downloadable build', 'Public repository with setup guide and tests', 'Case study covering architecture, trade-offs, and improvements'],
  cloud: ['Architecture diagram and infrastructure code', 'Deployment, rollback, and recovery runbook', 'Security, observability, reliability, and cost evidence'],
  security: ['Clearly authorised lab scope and methodology', 'Reproducible technical findings with evidence', 'Risk-ranked remediation and executive summary'],
  infrastructure: ['Topology, addressing, and configuration evidence', 'Operations and troubleshooting runbook', 'Failure test results and improvement recommendations'],
  support: ['Repeatable support workflow or automation', 'User-friendly knowledge article and handover notes', 'Before-and-after service or time-saving evidence'],
  data: ['Reproducible data preparation and analysis', 'Dashboard, notebook, or pipeline with clear definitions', 'Business-facing findings, limitations, and recommendation'],
  ai: ['Reproducible evaluation results and test cases', 'Working model or AI feature demonstration', 'Limitations, safety, monitoring, latency, and cost notes'],
  design: ['Research evidence and problem definition', 'Annotated flows and accessible interactive prototype', 'Case study explaining decisions, testing, and iterations'],
};

const phaseBlueprints = [
  {
    title: 'Foundations',
    duration: '2–3 weeks',
    summary: 'Learn the vocabulary, core concepts, and essential tools before increasing complexity.',
    skillStart: 0,
    focusStart: 0,
  },
  {
    title: 'Core Skills',
    duration: '3–5 weeks',
    summary: 'Practise the main workflows repeatedly until you can build without following a tutorial line by line.',
    skillStart: 2,
    focusStart: 2,
  },
  {
    title: 'Real-World Practice',
    duration: '4–6 weeks',
    summary: 'Combine skills, handle failure states, and make the trade-offs expected in practical work.',
    skillStart: 4,
    focusStart: 4,
  },
  {
    title: 'Career Launch',
    duration: '3–5 weeks',
    summary: 'Polish your proof of work, explain your decisions, and prepare to demonstrate your ability.',
    skillStart: 6,
    focusStart: 5,
  },
];

function pick(values, index, fallback) {
  return values?.[index] ?? values?.[index % (values?.length || 1)] ?? fallback;
}

function buildMilestones(roadmap, phase, phaseIndex) {
  if (phaseIndex === 3) {
    return [
      `Polish and publish one ${roadmap.title.toLowerCase()} portfolio project`,
      'Write a concise case study explaining the problem, decisions, evidence, and next iteration',
      'Practise a five-minute walkthrough and answer questions about trade-offs and failures',
    ];
  }

  return [
    pick(roadmap.focusAreas, phase.focusStart, `Understand the essential ${roadmap.title.toLowerCase()} concepts`),
    `Practise ${pick(roadmap.skills, phase.skillStart, 'the core tools')} through focused exercises`,
    phaseIndex === 0
      ? 'Use version control and keep short learning notes from the first day'
      : `Apply ${pick(roadmap.skills, phase.skillStart + 1, 'testing and documentation')} in a complete workflow`,
  ];
}

export function getRoadmapLearningPlan(roadmap) {
  if (!roadmap) {
    return { phases: [], portfolioProjects: [] };
  }

  const stepProjects = stepProjectsByRoadmap[roadmap.id] ?? [];
  const phases = phaseBlueprints.map((phase, index) => ({
    number: index + 1,
    title: phase.title,
    duration: phase.duration,
    summary: phase.summary,
    milestones: buildMilestones(roadmap, phase, index),
    project: stepProjects[index] ?? [
      `${phase.title} checkpoint`,
      `Create a small ${roadmap.title.toLowerCase()} project that demonstrates the skills from this phase.`,
    ],
  }));

  const projectCatalog = (roadmap.projects ?? []).slice(0, 3);
  const deliverables =
    portfolioDeliverablesByCategory[roadmap.category] ??
    portfolioDeliverablesByCategory.engineering;

  return {
    phases,
    portfolioProjects: projectCatalog.map((project, index) => ({
      ...project,
      level: index === 0 ? 'Core portfolio' : index === 1 ? 'Intermediate' : 'Advanced',
      deliverables,
    })),
  };
}

export { stepProjectsByRoadmap };
