/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  html_url: string;
  forks_count: number;
}

export interface SkillItem {
  name: string;
  level: number; // 1-5 or simple category
  category: 'language' | 'framework' | 'database' | 'tool';
  iconName?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'award' | 'education' | 'activity';
}
