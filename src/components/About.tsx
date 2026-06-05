/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Terminal, ShieldAlert, Cpu, Layers } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-secondary)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 gap-3">
          <span className="text-sm font-sans text-[var(--color-accent-secondary)]">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-[var(--color-text-main)]">
            Engineering solid software.
          </h2>
          <div className="h-0.5 bg-[var(--color-accent-secondary)] w-12 rounded mt-2 opacity-30" />
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: The Mindset Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-display text-[var(--color-text-main)] leading-snug"
            >
              Hi, I'm Nakula. A passionate developer focused on building secure, scalable applications.
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-sm sm:text-base text-[var(--color-text-main)]/85 leading-relaxed font-sans"
            >
              <p>
                My entry into computer engineering wasn't marked by a simple hobby, but rather by an insatiable urge to understand system internals. I hold a strong conviction that good software engineering is about understanding the full stack, from user interfaces down to network protocols.
              </p>
              <p>
                As a third-year computer engineering student, my journey consists of active, intensive code experimentation. I approach systems with a healthy skepticism—inspecting how they work, understanding why they fail, and engineering reliable layers from the ground up.
              </p>
              <p>
                Whether it is assembling clean backend routes, constructing responsive client architectures in React, or studying core algorithms, my approach is consistent: continuous learning, clean execution, and precision.
              </p>
            </motion.div>

            {/* Core Values / Traits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              
              <div className="p-5 rounded-lg bg-[var(--color-bg-primary)] flex items-start gap-4 transition-all">
                <div className="p-2.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-main)]">
                  <Terminal size={18} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-sm text-[var(--color-text-main)]">
                    Systems architecture
                  </h4>
                  <p className="text-xs text-[var(--color-accent-secondary)] mt-1">
                    Understanding compilers, memory structures, and protocol standards.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[var(--color-bg-primary)] flex items-start gap-4 transition-all">
                <div className="p-2.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-main)]">
                  <ShieldAlert size={18} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-sm text-[var(--color-text-main)]">
                    Secure by design
                  </h4>
                  <p className="text-xs text-[var(--color-accent-secondary)] mt-1">
                    Viewing the software development lifecycle through a security lens.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Specific Engineering Background Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Vision Slate */}
            <div className="p-8 rounded-xl bg-[var(--color-bg-primary)] text-[var(--color-text-main)] space-y-6 shadow-sm relative overflow-hidden group border border-[rgba(255,255,255,0.05)]">
              <div>
                <span className="text-xs font-sans text-[var(--color-accent-secondary)]">
                  Current Focus
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium mt-1 leading-snug">
                  Full-Stack Development
                </h3>
              </div>

              <p className="text-sm text-[var(--color-accent-secondary)] leading-relaxed font-sans font-light">
                Aiming to architect secure environments, build intuitive user interfaces, and develop robust, scalable backends.
              </p>

              <div className="border-t border-[rgba(255,255,255,0.05)] pt-4 flex justify-between text-xs font-sans">
                <div>
                  <div className="text-[var(--color-accent-secondary)]">Primary Role</div>
                  <div className="font-medium text-[var(--color-text-main)] mt-0.5">Software Engineer</div>
                </div>
                <div>
                  <div className="text-[var(--color-accent-secondary)]">Interests</div>
                  <div className="font-medium text-[var(--color-text-main)] mt-0.5">Web / Security</div>
                </div>
              </div>
            </div>

            {/* Academic Detail & Credentials Frame */}
            <div className="p-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] space-y-4">
              <span className="text-xs font-sans text-[var(--color-accent-secondary)]">
                Education
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[var(--color-text-main)]">
                    <Layers size={15} />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-sm text-[var(--color-text-main)]">
                      {PERSONAL_INFO.education.degree}
                    </h4>
                    <span className="text-xs font-sans text-[var(--color-accent-secondary)]">
                      {PERSONAL_INFO.education.institution}
                    </span>
                    <p className="text-sm text-[var(--color-accent-secondary)] mt-2">
                      Immersion in operating systems, core algorithms, and networking engineering.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[rgba(255,255,255,0.05)] text-sm text-[var(--color-text-main)] font-sans">
                  <span>Current Year:</span>
                  <span className="font-medium text-[var(--color-text-main)]">
                    3rd Year
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 text-[var(--color-accent-secondary)] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    In Progress
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
