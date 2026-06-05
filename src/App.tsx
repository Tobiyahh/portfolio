/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import GitHubRepos from './components/GitHubRepos';
import SocialCards from './components/SocialCards';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { Copyright, Heart, Shield } from 'lucide-react';
import { PERSONAL_INFO } from './data';

export default function App() {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-main)] font-sans antialiased selection:bg-[var(--color-accent-secondary)] selection:text-white min-h-screen relative flex flex-col">
      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <GitHubRepos />
        <SocialCards />
        <Timeline />
        <Contact />
      </main>

      {/* 3. Sleek, Premium Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-[rgba(91,70,54,0.08)] bg-[var(--color-bg-secondary)] relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[var(--color-accent-secondary)] font-mono">
          
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-display font-bold text-sm text-[var(--color-accent-primary)] mb-1">
              Nakula Hari
            </span>
            <div className="flex items-center gap-1.5 justify-center md:justify-start">
              <span>Computer Engineering Student & Developer</span>
            </div>
            <div className="flex items-center gap-1 justify-center md:justify-start mt-1 text-[10px] opacity-75">
              <span>Crafted with</span>
              <Heart size={10} className="fill-[var(--color-text-main)] text-[var(--color-text-main)]" />
              <span>for the web.</span>
            </div>
          </div>

          <div className="flex gap-6 items-center flex-wrap justify-center">
            <a 
              href="https://github.com/Tobiyahh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent-primary)] transition-colors py-1"
            >
              GitHub
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent-primary)] transition-colors py-1"
            >
              LinkedIn
            </a>
            <a 
              href={`https://www.instagram.com/${PERSONAL_INFO.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent-primary)] transition-colors py-1"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-1 text-[10px]">
            <Copyright size={11} />
            <span>2026 {PERSONAL_INFO.name}. All Rights Deserved.</span>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
