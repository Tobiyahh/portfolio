/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TIMELINE } from '../data';
import { Award, GraduationCap, Compass, CheckCircle } from 'lucide-react';

export default function Timeline() {
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Award size={18} className="text-[var(--color-accent-primary)]" />;
      case 'education':
        return <GraduationCap size={18} className="text-[var(--color-accent-primary)]" />;
      case 'activity':
        return <Compass size={18} className="text-[var(--color-accent-primary)]" />;
      default:
        return <CheckCircle size={18} className="text-[var(--color-accent-primary)]" />;
    }
  };

  return (
    <section 
      id="timeline" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 gap-3 text-center items-center">
          <span className="text-sm font-sans tracking-[0.05em] text-[var(--color-accent-secondary)]">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-[var(--color-text-main)]">
            Timeline
          </h2>
          <div className="h-0.5 bg-[var(--color-accent-secondary)] w-12 rounded mt-2 opacity-30" />
        </div>

        {/* Timeline main tree */}
        <div className="relative border-l-2 border-[rgba(91,70,54,0.12)] pl-8 sm:pl-12 ml-4 sm:ml-6 space-y-12">
          {TIMELINE.map((entry, index) => {
            return (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="relative"
              >
                {/* Visual node bullets */}
                <span className="absolute -left-[45px] sm:-left-[61px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent-primary)] shadow-sm z-10 hover:scale-110 transition-transform">
                  {getIcon(entry.type)}
                </span>

                {/* Card Item holding descriptive achievements details */}
                <div className="p-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] hover:border-[rgba(255,255,255,0.15)] transition-all shadow-sm group">
                  {/* Title and Badge */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                    <h3 className="font-display font-medium text-[17px] tracking-tight text-[var(--color-text-main)] transition-colors">
                      {entry.title}
                    </h3>
                    <span className="font-sans text-xs px-2.5 py-1 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-main)] border border-[rgba(255,255,255,0.05)]">
                      {entry.year}
                    </span>
                  </div>

                  {/* Subtitle institution */}
                  <h4 className="font-sans font-medium text-xs text-[var(--color-accent-secondary)] mb-3">
                    {entry.subtitle}
                  </h4>

                  {/* Descriptive narrative body text */}
                  <p className="text-xs sm:text-[13px] text-[var(--color-text-main)]/75 leading-relaxed font-sans">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
