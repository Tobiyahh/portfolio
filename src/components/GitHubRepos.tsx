/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitHubRepo } from '../types';
import { Github, Star, GitFork, Calendar, Search, ArrowUpRight, ShieldCheck, Cpu, Code2 } from 'lucide-react';

// Hardcoded premium backups in case of API rate limit, offline work space, or fail safe
const BACKUP_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'cyberrecon-scanner',
    description: 'A Python-powered automated network scanner and port identification tool built with secure raw sockets, prioritizing speed and safe scanning patterns.',
    stargazers_count: 3,
    language: 'Python',
    updated_at: '2026-05-18T12:00:00Z',
    html_url: 'https://github.com/Tobiyahh/cyberrecon-scanner',
    forks_count: 1
  },
  {
    id: 102,
    name: 'django-hardened-api',
    description: 'Robust and standard boilerplate structure for scalable backend systems. Pre-configured with secure JWT auth, rate limit rules, helmet-style headers, and SQLi filters.',
    stargazers_count: 5,
    language: 'Python',
    updated_at: '2026-06-01T09:30:00Z',
    html_url: 'https://github.com/Tobiyahh/django-hardened-api',
    forks_count: 0
  },
  {
    id: 103,
    name: 'security-pcap-analyzer',
    description: 'C++ utility that opens offline .pcap logs to parse ethernet, IP, and TCP headers, listing potential malformations, spoof attacks, and scanning footprints.',
    stargazers_count: 4,
    language: 'C++',
    updated_at: '2026-03-10T15:45:00Z',
    html_url: 'https://github.com/Tobiyahh/security-pcap-analyzer',
    forks_count: 2
  },
  {
    id: 104,
    name: 'react-premium-terminal',
    description: 'A responsive visual terminal simulation website rendering file-systems and cyber security sandboxes interface for tech portfolios.',
    stargazers_count: 6,
    language: 'TypeScript',
    updated_at: '2026-06-04T18:20:00Z',
    html_url: 'https://github.com/Tobiyahh/react-premium-terminal',
    forks_count: 1
  }
];

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>(BACKUP_REPOS);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'stars' | 'updated'>('updated');
  const [activeLanguage, setActiveLanguage] = useState<string>('All');

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/Tobiyahh/repos?sort=updated&per_page=30');
        if (!response.ok) {
          throw new Error('API Rate limit or network down');
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          // Map to match type structure
          const formatted: GitHubRepo[] = data.map((item: any) => ({
            id: item.id,
            name: item.name,
            description: item.description || 'No description provided, check project repository for deep technical reports.',
            stargazers_count: item.stargazers_count,
            language: item.language || 'Documentation',
            updated_at: item.updated_at,
            html_url: item.html_url,
            forks_count: item.forks_count
          }));
          setRepos(formatted);
        }
      } catch (err) {
        console.warn('Using backup repo structures:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  // Filter and sort computation
  const languagesList = ['All', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean)))];

  const filteredRepos = repos
    .filter((repo) => {
      const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            repo.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage = activeLanguage === 'All' || repo.language === activeLanguage;
      return matchesSearch && matchesLanguage;
    })
    .sort((a, b) => {
      if (sortBy === 'stars') {
        return b.stargazers_count - a.stargazers_count;
      } else {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
    });

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return isoString;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-secondary)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block / Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-sans tracking-[0.05em] text-[var(--color-accent-secondary)]">
              Open Source
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-[var(--color-text-main)]">
              GitHub Projects
            </h2>
            <div className="h-0.5 bg-[var(--color-accent-secondary)] w-12 rounded mt-2 opacity-30" />
            <p className="text-sm text-[var(--color-accent-secondary)] max-w-lg mt-1 font-sans">
              A selection of my recent open-source projects, experiments, and technical contributions.
            </p>
          </div>

          <a 
            href="https://github.com/Tobiyahh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] transition-all text-xs font-sans tracking-wide cursor-pointer group"
          >
            <Github size={14} className="group-hover:rotate-12 transition-transform" />
            <span>Profile on GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8 bg-[var(--color-bg-primary)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)] shadow-sm">
          {/* Query input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-accent-secondary)]" size={15} />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[var(--color-bg-secondary)] rounded-lg text-xs font-sans text-[var(--color-text-main)] outline-none border border-[rgba(255,255,255,0.05)] focus:border-[var(--color-accent-secondary)] transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Language filter dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-[var(--color-accent-secondary)]">Language:</span>
              <select
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value)}
                className="px-3 py-1.5 bg-[var(--color-bg-secondary)] text-xs font-sans rounded-lg outline-none border border-[rgba(255,255,255,0.05)] text-[var(--color-text-main)] cursor-pointer"
              >
                {languagesList.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-[var(--color-accent-secondary)]">Sort:</span>
              <button
                onClick={() => setSortBy(sortBy === 'stars' ? 'updated' : 'stars')}
                className="px-3 py-1.5 bg-[var(--color-bg-secondary)] hover:bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-lg text-xs font-sans text-[var(--color-text-main)] transition-all cursor-pointer flex items-center gap-1.5"
              >
                {sortBy === 'stars' ? (
                  <>
                    <Star size={11} className="fill-[var(--color-text-main)] text-[var(--color-text-main)]" />
                    <span>Most Stars</span>
                  </>
                ) : (
                  <>
                    <Calendar size={11} />
                    <span>Recently Active</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-accent-primary)]"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-[var(--color-accent-secondary)] uppercase">
              Loading code namespaces...
            </span>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredRepos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] flex flex-col justify-between h-56 hover:border-[rgba(255,255,255,0.15)] transition-all shadow-sm cursor-pointer"
                >
                  <div>
                    {/* Header: Icons and Stars */}
                    <div className="flex justify-between items-start mb-4">
                      {/* Brand indicator based on language */}
                      <span className="text-xs text-[var(--color-accent-secondary)] font-sans flex items-center gap-1.5 font-medium">
                        <Code2 size={13} className="text-[var(--color-text-main)]" />
                        <span>{repo.language}</span>
                      </span>

                      {/* Stars indicator */}
                      <div className="flex items-center gap-1 font-sans text-xs text-[var(--color-text-main)]">
                        <Star size={13} className="text-[var(--color-accent-secondary)] opacity-80" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>

                    {/* Repository title */}
                    <h3 className="font-display font-medium text-lg text-[var(--color-text-main)] group-hover:text-[var(--color-text-main)] transition-colors line-clamp-1">
                      {repo.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-sm text-[var(--color-text-main)]/70 line-clamp-3 mt-2 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  {/* Footer details */}
                  <div className="border-t border-[rgba(255,255,255,0.05)] pt-4 mt-4 flex justify-between items-center text-xs text-[var(--color-accent-secondary)] font-sans">
                    <span className="flex items-center gap-1.5">
                      <GitFork size={13} />
                      <span>{repo.forks_count} forks</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>{formatDate(repo.updated_at)}</span>
                    </span>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute right-4 bottom-4 text-[var(--color-text-main)] opacity-0 group-hover:opacity-100 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>

            {filteredRepos.length === 0 && (
              <div className="col-span-full py-16 text-center text-xs font-mono text-[var(--color-accent-secondary)]">
                No configurations found matching search filters.
              </div>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
}
