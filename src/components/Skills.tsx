/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { SkillItem } from '../types';
import { 
  Sparkles, 
  Terminal, 
  Code2, 
  Database, 
  Wrench, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  ShieldAlert, 
  Settings2,
  Lock,
  Compass
} from 'lucide-react';

// Selected core defining skills to highlight on load
const CORE_SPOTLIGHTS = [
  {
    name: 'Cybersecurity & Python',
    tag: 'Primary Directive',
    level: 5,
    description: 'Developing automated network scanners, raw socket analysis tools, and security auditing scripts to inspect low-level protocols.',
    icon: ShieldAlert,
    metrics: 'Active Audits • Threat Detection'
  },
  {
    name: 'Django Backends',
    tag: 'Web Security',
    level: 5,
    description: 'Constructing secure backend APIs pre-hardened against SQLi, XSS, and CSRF with custom JWT auth and standard middleware rules.',
    icon: Cpu,
    metrics: 'Secure API design • Scalable DB'
  },
  {
    name: 'React Ecosystem',
    tag: 'Interactive Clients',
    level: 4,
    description: 'Crafting responsive, low-overhead visual client apps with smooth transitions, strict modular separation, and custom hooks.',
    icon: Code2,
    metrics: 'Client state engines • 3D Motion'
  },
  {
    name: 'Container Sandboxes',
    tag: 'Git, Docker & Linux',
    level: 4,
    description: 'Isolating operational dependencies, packaging microservices, and deploying micro-architectures across multiple platforms.',
    icon: Settings2,
    metrics: 'CI/CD pipeline • Micro-routing'
  }
];

export default function Skills() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'language' | 'framework' | 'database' | 'tool'>('all');
  const [activeCategoryLabel, setActiveCategoryLabel] = useState('All Supplementary Stack');

  const categories = [
    { id: 'all', label: 'All Supplementary Stack', icon: Sparkles },
    { id: 'language', label: 'Core Languages', icon: Terminal },
    { id: 'framework', label: 'Frameworks/Libraries', icon: Code2 },
    { id: 'database', label: 'Database Systems', icon: Database },
    { id: 'tool', label: 'Engineering Tools & Host platforms', icon: Wrench }
  ];

  // Helper to handle category selection
  const selectCat = (id: any, label: string) => {
    setSelectedCategory(id);
    setActiveCategoryLabel(label);
  };

  // Filter skills excluding those shown in core spotlight for better uniqueness if needed
  const filteredSkills = SKILLS.filter(
    (skill) => selectedCategory === 'all' || skill.category === selectedCategory
  );

  return (
    <section 
      id="skills" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-primary)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 gap-3">
          <span className="text-sm font-sans tracking-[0.05em] text-[var(--color-accent-secondary)]">
            Skills & Setup
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-[var(--color-text-main)]">
            Core Disciplines
          </h2>
          <div className="h-0.5 bg-[var(--color-accent-secondary)] w-12 rounded mt-2 opacity-30" />
        </div>

        {/* 1. CURATED SPOTLIGHT - Shows Top/Main Defining Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_SPOTLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] flex flex-col justify-between h-[300px] hover:border-[rgba(255,255,255,0.1)] hover:shadow-sm transition-all group select-none shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] font-mono text-[var(--color-accent-secondary)] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[rgba(91,70,54,0.04)]">
                      {item.tag}
                    </span>
                    <Icon size={18} className="text-[var(--color-accent-secondary)] ease-in-out group-hover:rotate-6 transition-transform" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[var(--color-accent-primary)] group-hover:text-[var(--color-text-main)] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[var(--color-text-main)]/75 mt-3 leading-relaxed font-sans line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(91,70,54,0.06)] mt-auto flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-xs font-sans text-[var(--color-accent-secondary)] tracking-wide">
                    <span>Proficiency</span>
                    <span className="font-semibold text-[var(--color-text-main)]">{item.level}/5</span>
                  </div>
                  
                  {/* Premium customized progress rule */}
                  <div className="w-full h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-[var(--color-accent-secondary)] rounded-full group-hover:bg-[var(--color-text-main)] transition-colors"
                    />
                  </div>

                  <span className="text-[10px] font-sans text-[var(--color-accent-secondary)] tracking-wide line-clamp-1 mt-1">
                    {item.metrics}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. THE MASTER EXPANDABLE DROPDOWN PANEL */}
        <div className="w-full max-w-4xl mx-auto mt-8">
          
          <div className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-secondary)] shadow-sm overflow-hidden">
            
            {/* Header / Main Trigger Button */}
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center cursor-pointer select-none py-2 px-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center text-[var(--color-text-main)] shadow-sm">
                  <Terminal size={14} />
                </div>
                <div>
                  <h3 className="font-sans text-sm tracking-wide text-[var(--color-text-main)] font-semibold flex items-center gap-1.5">
                    <span>Explore All Skills</span>
                  </h3>
                  <p className="text-xs text-[var(--color-accent-secondary)] font-sans mt-0.5">
                    {isDropdownOpen 
                      ? 'Select category or search active skills' 
                      : 'View 20+ additional frameworks, languages, and tools'
                    }
                  </p>
                </div>
              </div>

              {/* Angle trigger visual indicator */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans text-[var(--color-accent-secondary)] mr-1 hidden sm:inline-block">
                  {isDropdownOpen ? 'Close Menu' : 'Open Menu'}
                </span>
                <div className="w-6 h-6 rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center text-[var(--color-text-main)] border border-[rgba(255,255,255,0.05)]">
                  {isDropdownOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </div>
              </div>
            </div>

            {/* Dropdown Expandable Segment */}
            <AnimatePresence initial={false}>
              {isDropdownOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden border-t border-[rgba(91,70,54,0.08)] mt-4 pt-5"
                >
                  
                  {/* Category Filter Selector Inside Menu */}
                  <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[var(--color-bg-primary)] p-3 rounded-lg border border-[rgba(255,255,255,0.05)]">
                    
                    <div className="flex items-center gap-2">
                      <Settings2 size={13} className="text-[var(--color-accent-secondary)]" />
                      <span className="text-xs font-sans tracking-wide text-[var(--color-accent-secondary)]">
                        Select Category:
                      </span>
                    </div>

                    {/* Integrated mini selector dropdown list */}
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => {
                          const value = e.target.value as any;
                          const found = categories.find(c => c.id === value);
                          selectCat(value, found?.label || 'All Supplementary Stack');
                        }}
                        className="w-full sm:w-auto px-4 py-1.5 bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.05)] rounded text-xs font-sans text-[var(--color-text-main)] font-medium outline-none cursor-pointer"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Sub-filtered Interactive Skills Layout */}
                  <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[350px] overflow-y-auto px-1 py-1"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredSkills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="p-3.5 rounded-lg border border-[rgba(255,255,255,0.02)] bg-[var(--color-bg-primary)] hover:border-[rgba(255,255,255,0.1)] transition-all flex items-center justify-between group cursor-default"
                        >
                          <div className="flex items-center gap-3">
                            {/* Tiny dot index label */}
                            <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.1)] group-hover:bg-[var(--color-accent-secondary)] transition-colors" />
                            <div>
                              <h4 className="font-display font-medium text-sm text-[var(--color-text-main)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[10px] font-sans text-[var(--color-accent-secondary)] tracking-wider">
                                {skill.category}
                              </span>
                            </div>
                          </div>

                          {/* Simplified horizontal levels indicator */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <div 
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-sm ${
                                    i < skill.level 
                                      ? 'bg-[var(--color-accent-secondary)] group-hover:bg-[var(--color-text-main)]' 
                                      : 'bg-[rgba(255,255,255,0.05)]'
                                  } transition-colors`}
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-sans text-[var(--color-accent-secondary)] w-3 text-right">
                              {skill.level}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

