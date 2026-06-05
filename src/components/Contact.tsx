/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Mail, Send, Eye, EyeOff, Lock, Unlock, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Cyber secrecy & visibility states
  const [maskEmailInput, setMaskEmailInput] = useState(true);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [decrypting, setDecrypting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    // Simulate premium encrypted dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      // Reset state success after 5s
      setTimeout(() => setSubmitted(false), 5000);
    }, 1800);
  };

  // Self email decryption trigger
  const handleDecryptEmail = () => {
    if (emailRevealed) return;
    setDecrypting(true);
    setTimeout(() => {
      setDecrypting(false);
      setEmailRevealed(true);
    }, 1500);
  };

  const handleCopyEmail = () => {
    if (!emailRevealed) return;
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Partially masked email placeholder
  const MASKED_EMAIL_TEXT = "h•••••••••3@gmail.com";

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-primary)] relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16 gap-3">
          <span className="text-sm font-sans tracking-[0.05em] text-[var(--color-accent-secondary)]">
            Contact Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-[var(--color-text-main)]">
            Get in touch.
          </h2>
          <div className="h-0.5 bg-[var(--color-accent-secondary)] w-12 rounded mt-2 opacity-30" />
        </div>

        {/* Form and Contact Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Encrypted dispatch form */}
          <div className="lg:col-span-7 bg-[var(--color-bg-primary)] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] relative overflow-hidden shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[var(--color-accent-secondary)]" />
                <span className="text-sm font-sans text-[var(--color-text-main)] font-medium">
                  Send a Message
                </span>
              </div>
            </div>

            {/* Success notification overlay banner */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.1)] text-[var(--color-text-main)] rounded-lg text-sm flex items-center gap-2.5"
                >
                  <Check size={16} className="text-[var(--color-text-main)] flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2 relative">
                <label className="block text-[11px] uppercase tracking-wider font-sans text-[var(--color-accent-secondary)] font-medium">
                  Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-sm font-sans text-[var(--color-text-main)] outline-none focus:border-[var(--color-text-main)] transition-all"
                  />
                </div>
              </div>

              {/* Email Field with Toggleable Encryption Masking */}
              <div className="space-y-2 relative">
                <label className="block text-[11px] uppercase tracking-wider font-sans text-[var(--color-accent-secondary)] font-medium">
                  Email
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-sm font-sans text-[var(--color-text-main)] outline-none focus:border-[var(--color-text-main)] transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2 relative">
                <label className="block text-[11px] uppercase tracking-wider font-sans text-[var(--color-accent-secondary)] font-medium">
                  Message
                </label>
                <div className="relative group">
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello, I would like to talk about..."
                    className="w-full bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-sm font-sans text-[var(--color-text-main)] outline-none focus:border-[var(--color-text-main)] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-text-main)] hover:opacity-90 text-[var(--color-bg-primary)] py-3.5 rounded-lg text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75 z-20 relative"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-[var(--color-bg-primary)] border-t-transparent animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Column 2: Nakula's Protected Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Decryptable Email Card - fulfills "Email (should be hidden)" requirements dynamically */}
            <div className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] space-y-6 shadow-sm">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[var(--color-accent-secondary)]">
                  Contact Details
                </span>
                <h3 className="text-xl font-display font-medium text-[var(--color-text-main)] mt-1">
                  Connect Directly
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.02)] flex flex-col items-center text-center justify-center relative min-h-[120px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {!emailRevealed && !decrypting && (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3 flex flex-col items-center"
                    >
                      <span className="text-sm font-sans text-[var(--color-text-main)] select-all tracking-widest">
                        {MASKED_EMAIL_TEXT}
                      </span>
                      <button
                        onClick={handleDecryptEmail}
                        className="py-1.5 px-4 bg-[var(--color-bg-primary)] hover:bg-[rgba(255,255,255,0.05)] rounded-full text-xs font-sans text-[var(--color-text-main)] flex items-center gap-1.5 transition-all outline-none cursor-pointer"
                      >
                        <Unlock size={13} />
                        <span>Reveal Email</span>
                      </button>
                    </motion.div>
                  )}

                  {decrypting && (
                    <motion.div
                      key="decrypting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center space-y-2.5"
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-[var(--color-text-main)] border-t-transparent animate-spin" />
                    </motion.div>
                  )}

                  {emailRevealed && (
                    <motion.div
                      key="revealed"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center space-y-3"
                    >
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-sans text-[var(--color-text-main)] font-medium hover:underline flex items-center gap-1.5"
                      >
                        <Mail size={14} />
                        <span>{PERSONAL_INFO.email}</span>
                      </a>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={handleCopyEmail}
                          className="py-1 px-3 bg-[var(--color-bg-primary)] hover:bg-[rgba(255,255,255,0.05)] rounded-lg text-xs font-sans text-[var(--color-text-main)] flex items-center gap-1 transition-all cursor-pointer"
                        >
                          {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                          <span>{copied ? "Copied" : "Copy"}</span>
                        </button>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="py-1 px-3 bg-[var(--color-text-main)] text-[var(--color-bg-primary)] rounded-lg text-xs font-sans font-medium flex items-center gap-1 transition-all"
                        >
                          <span>Email Me</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="text-[12px] font-sans text-[var(--color-accent-secondary)] leading-relaxed text-center">
                Spam protection is enabled. Please click "Reveal Email" to view the address.
              </div>
            </div>

            {/* Quick response stats */}
            <div className="p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-primary)] shadow-sm flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-text-main)]">
                <Send size={16} />
              </div>
              <div>
                <h4 className="font-display font-medium text-sm text-[var(--color-text-main)]">
                  Response Time
                </h4>
                <p className="text-xs text-[var(--color-accent-secondary)] mt-1">
                  I typically reply within a day or two.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
