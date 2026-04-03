/**
 * Site-wide configuration
 */
export const SITE_CONFIG = {
  resumeUrl: '/documents/resume.pdf',
  github: 'https://github.com/sabellius',
  linkedin: 'https://linkedin.com/in/saveliy-shiryaev',
  email: 'mailto:saveliy.dev@gmail.com',
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
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Ruby',
      'React',
      'Redux',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'MongoDB',
      'MySQL',
      'Ruby on Rails',
      'REST APIs',
      'Authentication & Authorization',
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      'Git',
      'GitHub',
      'Gitlab',
      'AWS',
      'Docker',
      'Jenkins',
      'Responsive Design',
      'CI/CD pipelines',
      'Database Migrations',
    ],
  },
];
