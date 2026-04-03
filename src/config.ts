/**
 * Site-wide configuration
 */
export const SITE_CONFIG = {
  resumeUrl: '/documents/resume.pdf',
  github: 'https://github.com/sabellius',
  linkedin: 'https://linkedin.com/in/saveliy-shiryaev',
  email: 'mailto:saveliy.dev@pm.me',
} as const;

interface Tag {
  icon: string;
  label: string;
  strokeWidth?: number;
  stroke?: string;
}

interface Project {
  title: string;
  description: string;
  tags: Tag[];
  github: string;
  demo: string | null;
  image: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

interface TimelineEntry {
  title: string;
  organization: string;
  description: string;
  period: string;
}

interface TimelineSection {
  label: string;
  entries: TimelineEntry[];
}

export const TIMELINE: TimelineSection[] = [
  {
    label: 'Work Experience',
    entries: [
      {
        title: 'Full-Stack Web Developer',
        organization: 'Biodata',
        period: '2020 – 2022',
        description:
          'Built new features and maintained an Electronic Lab Notebook (ELN) platform for biotech research workflows. Contributed to architectural planning, led code reviews, and expanded test coverage.',
      },
      {
        title: 'Military Police (Reserves)',
        organization: 'Israel Defense Forces',
        period: '2023 – 2024',
        description:
          'Volunteered for reserve service following the outbreak of the war on October 7th, serving through early 2024.',
      },
    ],
  },
  {
    label: 'Education',
    entries: [
      {
        title: 'Full-Stack Developer Bootcamp',
        organization: 'Coding Academy',
        period: '2025',
        description:
          'Intensive 14-week program for experienced developers, covering modern full-stack technologies through project-based learning.',
      },
      {
        title: 'Full-Stack Developer Program',
        organization: 'WeCode — Reichman University',
        period: '2019 – 2020',
        description:
          'Professional full-stack web development training in partnership with Experis Software R&D.',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Kanbox',
    description:
      'A full-stack Kanban board application for task management and project tracking. Built with React, Redux, Express, and MongoDB, featuring drag-and-drop functionality, task labeling, and user authentication.',
    tags: [
      { icon: 'mdi:react', label: 'React' },
      { icon: 'simple-icons:redux', label: 'Redux' },
      { icon: 'simple-icons:mui', label: 'MUI' },
      {
        icon: 'simple-icons:express',
        label: 'Express',
        strokeWidth: 1,
        stroke: 'currentColor',
      },
      { icon: 'simple-icons:mongodb', label: 'MongoDB' },
    ],
    github: 'https://github.com/sabellius/kanbox',
    demo: null,
    image: '/images/projects/kanbox.png',
  },
  {
    title: 'Agalapp',
    description:
      'A website for finding and reviewing coffee trucks in Israel. Currently in development.',
    tags: [
      { icon: 'simple-icons:nextdotjs', label: 'Next.js' },
      { icon: 'mdi:tailwind', label: 'Tailwind' },
      { icon: 'simple-icons:prisma', label: 'Prisma' },
      {
        icon: 'lineicons:mysql',
        label: 'MySQL',
        strokeWidth: 1,
        stroke: 'currentColor',
      },
    ],
    github: 'https://github.com/sabellius/agalapp',
    demo: null,
    image: '/images/coming_soon_placeholder.svg',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Redux',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'Sass/SCSS',
      'Astro',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Ruby on Rails',
      'Python',
      'Flask',
      'SQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Prisma',
    ],
  },
  {
    category: 'Testing',
    skills: [
      'Jest',
      'React Testing Library',
      'Playwright',
      'RSpec',
      'TDD',
    ],
  },
  {
    category: 'DevOps & Tooling',
    skills: [
      'Git',
      'Docker',
      'AWS',
      'Jenkins',
      'GitHub Actions',
      'Vite',
    ],
  },
];
