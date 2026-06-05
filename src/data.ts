/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillItem, TimelineEntry } from './types';

export const PERSONAL_INFO = {
  name: 'Nakula Hari',
  shortName: 'Nakula',
  tagline: 'Technically Advanced',
  statement: "Even though I don't know everything, I'm willing to study everything.",
  careerGoal: 'Become one of the world\'s leading cybersecurity engineers.',
  education: {
    degree: 'Diploma in Computer Engineering',
    institution: 'GPTC Chelakkara',
    period: '3rd Year | 2023 - 2026',
    status: 'In Progress'
  },
  experience: {
    role: 'Cybersecurity & Tech Explorer',
    company: 'Dcoode',
    type: 'Practical Learning & Projects'
  },
  githubUsername: 'Tobiyahh',
  email: 'harinakula3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nakula-hari-37a5033b8',
  instagram: 'nakula_hari21'
};

export const ROTATING_WORDS = [
  'Cybersecurity',
  'Web Development',
  'Open Source',
  'Problem Solving',
  'Engineering'
];

export const SKILLS: SkillItem[] = [
  // Languages
  { name: 'C', level: 4, category: 'language' },
  { name: 'C++', level: 4, category: 'language' },
  { name: 'Python', level: 5, category: 'language' },
  { name: 'JavaScript', level: 4, category: 'language' },
  { name: 'PHP', level: 4, category: 'language' },
  { name: 'SQL', level: 4, category: 'language' },
  { name: 'Rust', level: 3, category: 'language' },

  // Frameworks
  { name: 'Django', level: 5, category: 'framework' },
  { name: 'React', level: 4, category: 'framework' },

  // Databases
  { name: 'MySQL', level: 4, category: 'database' },
  { name: 'PostgreSQL', level: 4, category: 'database' },
  { name: 'Firebase', level: 4, category: 'database' },
  { name: 'Supabase', level: 4, category: 'database' },

  // Tools
  { name: 'Git', level: 5, category: 'tool' },
  { name: 'GitHub', level: 5, category: 'tool' },
  { name: 'Docker', level: 4, category: 'tool' },
  { name: 'VS Code', level: 5, category: 'tool' },
  { name: 'Claude Code', level: 4, category: 'tool' },
  { name: 'Vercel', level: 5, category: 'tool' },
  { name: 'Render', level: 4, category: 'tool' },
  { name: 'Hostinger', level: 4, category: 'tool' },
  { name: 'WordPress', level: 3, category: 'tool' }
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2025',
    title: '2nd Prize - Hackathon',
    subtitle: 'Conducted by Dcoode',
    description: 'Developed and demonstrated an innovative solution solving complex real-world security challenges in a high-intensity hackathon event.',
    type: 'award'
  },
  {
    year: '2024',
    title: 'HSS Computer Science',
    subtitle: 'Higher Secondary Education',
    description: 'Dived deep into computer systems, network basics, algorithmic programming, and foundations of database management.',
    type: 'education'
  },
  {
    year: '2022',
    title: 'Little Kites Certification',
    subtitle: 'State IT Initiative',
    description: 'Early high-school cyber club training on GNU/Linux administration, cyber security fundamentals, coding foundations, and vector animation.',
    type: 'activity'
  },
  {
    year: '2022',
    title: 'Secondary School Leaving Certificate (SSLC)',
    subtitle: 'Kerala State Board',
    description: 'Completed secondary education with top honors, laying the academic foundation for intense technical studies.',
    type: 'education'
  }
];
