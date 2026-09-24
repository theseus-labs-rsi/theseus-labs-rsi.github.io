export type ResearchItem = {
  slug: string
  index: string
  kind: string
  date: string
  title: string
  summary: string
  image?: string
  status?: 'published' | 'placeholder'
}

export type ResearchDetailData = {
  contributions: { title: string; description: string }[]
  findings: { title: string; description: string; source: string; page: number }[]
}

export const researchItems: ResearchItem[] = [
  {
    slug: 'rsi-survey-2026',
    index: '01',
    kind: 'SURVEY · RESEARCH',
    date: '2026.09',
    title: 'The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement',
    summary:
      'An autonomy-centered survey of recursive self-improvement: capability gaps measured with the Headroom-Closed Index, five levels of improvement responsibility, and evidence from science, embodied intelligence, software engineering, healthcare, and industrial practice.',
    image: './research/roadmap.svg',
    status: 'published',
  },
  {
    slug: 'env-rethink-2026',
    index: '02',
    kind: 'RESEARCH · ENV-Rethink',
    date: '2026.09',
    title: 'Breaking the Environment Wall: Evolving LLM Agent Environments for Recursive Self-Improvement',
    summary:
      'Noisy, version-conflicted environments degrade state-of-the-art agents from 83.9% to 57.6%. Env-Rethink organizes environments with Collection Maps and Event Logs, learns a 27B file-verification model, and evolves environments into harder verifiable instances—raising downstream rubric pass rates to 72.7% across nine models.',
    image: './research/survey-cover-fig.png',
    status: 'published',
  },
  {
    slug: 'project-03',
    index: '03',
    kind: 'BLOG · COMING SOON',
    date: 'NEXT',
    title: 'New observations, coming soon',
    summary: 'Research notes and updates from Theseus Lab.',
    status: 'placeholder',
  },
]

// Source sections and evidence boundaries are recorded in docs/copy-sources.md.
export const surveyContributions = [
  {
    title: 'The improvement loop as the unit of analysis',
    description: 'Traces what triggers a change, who proposes and verifies it, what persists, and how later rounds use the retained change.',
  },
  {
    title: 'Five levels of improvement autonomy',
    description: 'Distinguishes responsibility for executing updates, selecting strategies, acquiring future experience, adapting during deployment, and revising the mechanisms of future improvement.',
  },
  {
    title: 'From research to practice',
    description: 'Connects the autonomy framework to science, embodied intelligence, software engineering, healthcare, and industrial systems, tracing how retained changes shape later improvement rounds.',
  },
]

export const surveyFindings = [
  {
    title: 'Interactive capabilities retain larger gaps',
    description: 'Across ten domains, the survey uses the Headroom-Closed Index (HCI) to trace uneven capability progress and highlight remaining headroom in software engineering and tool-using agents.',
    source: 'Section 2.1 · Capability analysis',
    page: 7,
  },
  {
    title: 'Better workspaces improve agent performance',
    description: 'Reconstructing agent workspaces improved aggregate rubric scores by 18.65–39.67 percentage points in the Theseus productivity study. The case study explores environment–data–model co-evolution as a direction for RSI.',
    source: 'Section 5.1 · Theseus',
    page: 44,
  },
  {
    title: 'Improvement mechanisms can be inherited',
    description: 'The survey traces how systems revise and pass on improvers, evaluators, and research policies, making the process of future improvement itself an object of change.',
    source: 'Sections 3.6–3.7 · Recursive meta-improvement',
    page: 31,
  },
]

export const envRethinkContributions = [
  {
    title: 'Evidence-linked environment organization',
    description: 'Collection Map regroups files beyond the directory layout, and Event Log synthesizes workflow histories whose evidence and relationships are reviewed against source files before inclusion.',
  },
  {
    title: 'A learned environment-preparation model',
    description: 'A 27B file-verification model trained on qualified teacher trajectories reads files, judges source authority and version validity, and hands a downstream agent selected files plus an evidence report.',
  },
  {
    title: 'Event-driven environment evolution',
    description: 'The Environment Evolver couples state changes with updated reference outcomes and evaluation checks, creating harder but verifiable task instances under an unchanged request for further agent learning.',
  },
]

export const envRethinkFindings = [
  {
    title: 'Noisy environments break SOTA agents',
    description: 'Across nine model–harness configurations on 30 tasks, mean rubric pass rate falls from 83.9% in clean environments to 57.6% in noisy ones—a 26.3 percentage-point drop from scattered, conflicting, and evolving evidence.',
    source: 'Section 2.3 · Motivating analysis',
    page: 4,
  },
  {
    title: 'Prepared environments lift all nine models',
    description: 'Environments prepared by Env-Rethink raise the mean pass rate to 72.7%, beating unadapted Qwen3.8-27B preparation by 13.3 points, with gains of 3.4–17.8 points across every downstream model.',
    source: 'Section 7.3 · Learned preparation',
    page: 12,
  },
  {
    title: 'Evolution creates harder, verifiable tasks',
    description: 'On Terminal-Bench 2.1, 32 of 55 retained tasks show lower success in at least three of four models after evolution, spanning ten task categories—new challenges generated under unchanged requests.',
    source: 'Section 7.4 · Environment evolution',
    page: 14,
  },
]

export const researchDetails: Record<string, ResearchDetailData> = {
  'rsi-survey-2026': {
    contributions: surveyContributions,
    findings: surveyFindings,
  },
  'env-rethink-2026': {
    contributions: envRethinkContributions,
    findings: envRethinkFindings,
  },
}
