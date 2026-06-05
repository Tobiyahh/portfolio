/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Users, 
  Columns, 
  Image as ImageIcon, 
  CheckCircle2, 
  AppWindow, 
  ArrowUpRight,
  RefreshCw,
  AlertCircle,
  ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function SocialCards() {
  return (
    <section 
      id="socials" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col mb-16 gap-3">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[var(--color-accent-secondary)]">
            04 / Connected
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[var(--color-text-main)]">
            Relational Handprints
          </h2>
          <div className="h-0.5 bg-[var(--color-accent-secondary)] w-12 rounded mt-2 opacity-30" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <InstagramCard />
          <LinkedInCard />
        </div>
      </div>
    </section>
  );
}

// 1. Instagram Card
function InstagramCard() {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const counts = {
    username: 'nakula_hari21',
    name: 'Nakula Hari'
  };

  // Mouse coords relative to card centering
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  const springConfig = { damping: 20, stiffness: 150 };
  const cardRotateX = useSpring(rotateX, springConfig);
  const cardRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={`https://www.instagram.com/${counts.username}`}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: cardRotateX,
        rotateY: cardRotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: hovered ? 1.03 : 1,
        boxShadow: hovered 
          ? '0 30px 60px rgba(91, 70, 54, 0.08), 0 5px 15px rgba(0,0,0,0.03)'
          : '0 4px 12px rgba(91, 70, 54, 0.02)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] flex flex-col justify-between h-[450px] overflow-hidden relative cursor-pointer group shadow-sm transition-all hover:border-[rgba(255,255,255,0.1)]"
    >
      {/* Background soft glowing blur in custom Instagram colors */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[20%] w-48 h-48 bg-gradient-to-tr from-yellow-500/30 via-pink-500/20 to-purple-600/30 rounded-full filter blur-[60px]" />
      </div>

      {/* Header Block */}
      <div style={{ transform: 'translateZ(15px)' }} className="flex justify-between items-center z-10 z-index-1 flex-row">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center text-[var(--color-text-main)] shadow-sm">
            <Instagram size={20} />
          </div>
          <div>
            <h4 className="font-display font-medium text-sm text-[var(--color-text-main)] flex items-center gap-1.5">
              <span>Instagram</span>
            </h4>
            <p className="text-xs font-sans text-[var(--color-accent-secondary)]">@{counts.username}</p>
          </div>
        </div>
      </div>

      {/* Large Centered Profile Photo & User Badge */}
      <div style={{ transform: 'translateZ(30px)' }} className="my-auto z-10 w-full flex flex-col items-center justify-center text-center">
        {/* Animated Custom Story Ring of Instagram */}
        <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-md group-hover:scale-105 transition-transform duration-300">
          <div className="p-1 rounded-full bg-[var(--color-bg-secondary)]">
            <div className="w-24 h-24 rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center overflow-hidden border border-dashed border-[var(--color-accent-secondary)]/30 group-hover:border-pink-500/30 transition-colors">
              <img 
                src="https://unavatar.io/instagram/nakula_hari21?fallback=https://ui-avatars.com/api/?name=Nakula+Hari&background=191715&color=E6DCD2" 
                alt="Nakula Hari" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* User Details */}
        <h3 className="text-lg font-display font-bold text-[var(--color-text-main)] mt-4 leading-none flex items-center gap-1 justify-center">
          <span>{counts.name}</span>
          <CheckCircle2 size={14} className="text-blue-500 fill-blue-500/10" />
        </h3>
        
        <p className="text-xs font-mono text-[var(--color-accent-primary)] mt-1.5">@{counts.username}</p>
        
        <span className="text-[11px] text-[var(--color-text-main)]/65 max-w-xs mt-3.5 italic block leading-relaxed font-sans">
          "Documenting the journey of studying."
        </span>
      </div>

      {/* Footer Block */}
      <div style={{ transform: 'translateZ(10px)' }} className="z-10 mt-auto flex justify-between items-center text-xs">
        <span className="text-[10px] font-sans text-[var(--color-accent-secondary)] group-hover:text-[var(--color-text-main)] transition-colors">
          View Profile
        </span>
        <div className="text-xs font-sans text-[var(--color-text-main)] font-medium flex items-center gap-1 group-hover:underline">
          <span>Open Link</span>
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

// 2. LinkedIn Card
function LinkedInCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse coords
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  const springConfig = { damping: 20, stiffness: 150 };
  const cardRotateX = useSpring(rotateX, springConfig);
  const cardRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: cardRotateX,
        rotateY: cardRotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: hovered ? 1.03 : 1,
        boxShadow: hovered 
          ? '0 30px 60px rgba(91, 70, 54, 0.08), 0 5px 15px rgba(0,0,0,0.03)'
          : '0 4px 12px rgba(91, 70, 54, 0.02)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] flex flex-col justify-between h-[450px] overflow-hidden relative shadow-sm"
    >
      {/* Background shadow glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[10%] right-[20%] w-32 h-32 bg-[var(--color-accent-primary)] rounded-full filter blur-[60px]" />
      </div>

      {/* Header Block */}
      <div style={{ transform: 'translateZ(15px)' }} className="flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center text-[#0A66C2] shadow-sm">
            <Linkedin size={20} />
          </div>
          <div>
            <h4 className="font-display font-medium text-sm text-[var(--color-text-main)]">LinkedIn</h4>
            <p className="text-xs font-sans text-[var(--color-accent-secondary)]">Professional Profile</p>
          </div>
        </div>
      </div>

      {/* Profile summary wrapper */}
      <div style={{ transform: 'translateZ(30px)' }} className="my-auto z-10 space-y-4">
        
        {/* Core details & Identity */}
        <div className="space-y-2">
          {/* Mock premium profile cover photo visual */}
          <div className="h-14 bg-gradient-to-r from-[var(--color-bg-primary)] to-[var(--color-bg-primary)] rounded-lg flex items-center px-4 relative overflow-hidden border border-[rgba(255,255,255,0.05)]">
            <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[var(--color-accent-secondary)] opacity-50">
              Computer Engineering
            </span>
          </div>

          <div className="flex gap-4 items-end mt-[-24px] px-2 relative z-20">
            {/* Round Avatar Icon with badge */}
            <div className="w-14 h-14 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-bg-secondary)] shadow flex items-center justify-center text-[var(--color-text-main)] font-display font-bold">
              NH
            </div>

            <div className="pb-1.5">
              <h3 className="font-display font-semibold text-base text-[var(--color-text-main)] leading-none">
                Nakula Hari
              </h3>
              <p className="text-xs text-[var(--color-accent-secondary)] mt-1 tracking-tight leading-none">
                Software Engineering Student
              </p>
            </div>
          </div>
        </div>

        {/* Quick bio preview */}
        <div className="text-xs text-[var(--color-text-main)]/80 leading-relaxed bg-[var(--color-bg-primary)]/50 p-4 rounded-xl border border-[rgba(255,255,255,0.02)]">
          Dedicated to resolving complex system logic through scalable, pragmatic programming. Always expanding my horizons in Web and System engineering.
        </div>

        {/* Profile competencies / skill caps tags */}
        <div className="flex flex-wrap gap-1.5">
          {['Software Engineering', 'Fullstack Web', 'Systems'].map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded bg-[var(--color-bg-primary)] border border-[rgba(255,255,255,0.05)] text-[9px] font-sans text-[var(--color-text-main)] font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ transform: 'translateZ(10px)' }} className="z-10 mt-auto flex justify-between items-center text-xs">
        <span className="text-[10px] font-sans text-[var(--color-accent-secondary)]">
          Connect
        </span>
        <a 
          href={PERSONAL_INFO.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-sans text-[var(--color-text-main)] font-medium flex items-center gap-1 hover:underline"
        >
          <span>Connect with Nakula</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  );
}
