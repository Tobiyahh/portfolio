/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import GradientText from './GradientText';

export default function Hero() {
  // Soft Parallax reactive variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Gentle offsets for background shapes
  const bgX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const bgY = useTransform(mouseY, [-500, 500], [-15, 15]);
  const circleX = useTransform(mouseX, [-500, 500], [20, -20]);
  const circleY = useTransform(mouseY, [-500, 500], [20, -20]);

  return (
    <section 
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-12 md:px-12 md:py-16 overflow-hidden bg-[var(--color-bg-primary)] select-none"
    >
      {/* Background Interactive Ambient Blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft elegant warm blob 1 */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] rounded-full filter blur-[100px] opacity-25 mix-blend-multiply bg-[var(--color-accent-secondary)]"
        />
        {/* Soft elegant beige-brown blob 2 */}
        <motion.div
          style={{ x: circleX, y: circleY }}
          className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full filter blur-[120px] opacity-20 mix-blend-multiply bg-[var(--color-accent-primary)]"
        />
        {/* Minimal mesh Grid lines - Subtle modern look */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0)_60%,var(--color-bg-primary)_100%] opacity-40 mix-blend-overlay" />
      </div>

      {/* Top Header - Navigation & Status */}
      <div className="w-full flex justify-between items-center z-10 max-w-7xl mx-auto">
        {/* Navigation jump-links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-4 md:gap-6 text-[11px] font-mono tracking-widest text-[var(--color-accent-secondary)] uppercase"
        >
          <a href="#about" className="hover:text-[var(--color-accent-primary)] transition-colors py-1">About</a>
          <a href="#skills" className="hover:text-[var(--color-accent-primary)] transition-colors py-1">Skills</a>
          <a href="#projects" className="hover:text-[var(--color-accent-primary)] transition-colors py-1 hidden sm:inline-block">Projects</a>
          <a href="#timeline" className="hover:text-[var(--color-accent-primary)] transition-colors py-1 hidden sm:inline-block">Timeline</a>
          <a href="#contact" className="hover:text-[var(--color-accent-primary)] transition-colors py-1 hidden sm:inline-block">Contact</a>
        </motion.div>
        
        {/* Status line */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-[var(--color-accent-secondary)] font-sans">
            Available for opportunities
          </span>
        </motion.div>
      </div>

      {/* Central Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 max-w-4xl px-4">
        {/* Subtitle / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="text-xl sm:text-2xl font-sans tracking-wide text-[var(--color-accent-secondary)]">
            Hi, I'm
          </span>
        </motion.div>

        {/* Big Name Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
        >
          <GradientText
            colors={["#ffffff", "#71717a", "#18181b", "#71717a", "#ffffff"]}
            animationSpeed={5}
            showBorder={false}
            mouseReactive={true}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight"
          >
            Nakula Hari
          </GradientText>
        </motion.div>

        {/* Sliding word list */}
        <div className="mt-6 flex items-center justify-center">
          <span className="text-base sm:text-lg font-sans text-[var(--color-accent-secondary)]">
            Computer Engineering Student
          </span>
        </div>

        {/* Minimal descriptive bullet line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-8 text-sm md:text-base text-[var(--color-accent-secondary)] max-w-md font-sans leading-relaxed"
        >
          "Even though I don't know everything, I'm willing to study everything."
        </motion.p>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center z-10 max-w-7xl mx-auto gap-4">
      </div>
    </section>
  );
}
