import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin, Check, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/pranavprp08@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _captcha: 'false',
          _replyto: formData.email,
          Greeting: `Hi Pranav, you have received a new message from ${formData.name} who viewed your portfolio.`,
          "Sender Email": formData.email,
          "Message": formData.message,
        }),
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error('Email send failed:', err);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setCharCount(0);
      }, 6000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] relative z-10 py-24 sm:py-32 px-5 sm:px-8 md:px-10 border-t border-[#D7E2EA]/10 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
        {/* Standalone Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center items-center text-center mx-auto pb-4 sm:pb-8 translate-x-8 sm:translate-x-16 lg:translate-x-24"
        >
          <h2 className="hero-heading font-black uppercase tracking-[0.08em] text-[10vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[8vw] leading-none select-none text-center">
            CONTACT
          </h2>
        </motion.div>

        {/* Two-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 items-start w-full">
        {/* LEFT COLUMN (~60% width = 7 cols in lg) */}
        <div className="lg:col-span-7 flex flex-col gap-10 text-left">
          {/* Eyebrow tracker */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-mono text-[#D7E2EA]/60"
          >
            05 / 06 · CONTACT
          </motion.span>

          {/* Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-[clamp(1.8rem,4.5vw,3.2rem)] leading-tight max-w-[600px] text-left tracking-tight"
          >
            Have a{' '}
            <span className="italic font-bold text-[#1E90FF]">
              role
            </span>{' '}
            or a brief? Send the details.
          </motion.h2>

          {/* Minimal Underline-Only Form */}
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 border-b border-[#D7E2EA]/20 flex flex-col gap-3 text-left"
            >
              <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm font-semibold uppercase tracking-wider">
                <Check className="w-5 h-5" />
                <span>Message Received</span>
              </div>
              <p className="text-base text-[#D7E2EA]/80 font-light">
                Thank you for reaching out. I'll review your details and respond within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 pt-4">
              {/* Name & Email side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="flex flex-col gap-2 border-b border-[#D7E2EA]/20 focus-within:border-[#1E90FF] transition-colors py-2"
                >
                  <label className="text-xs uppercase font-mono tracking-widest text-[#8FA3AE]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent py-2 text-base text-[#D7E2EA] focus:outline-none font-sans"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="flex flex-col gap-2 border-b border-[#D7E2EA]/20 focus-within:border-[#1E90FF] transition-colors py-2"
                >
                  <label className="text-xs uppercase font-mono tracking-widest text-[#8FA3AE]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent py-2 text-base text-[#D7E2EA] focus:outline-none font-sans"
                  />
                </motion.div>
              </div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex flex-col gap-2 border-b border-[#D7E2EA]/20 focus-within:border-[#1E90FF] transition-colors py-2"
              >
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase font-mono tracking-widest text-[#8FA3AE]">
                    Message
                  </label>
                  <span className="text-[11px] font-mono text-[#8FA3AE]/60">
                    {charCount} / 2000 chars max
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setCharCount(e.target.value.length);
                  }}
                  className="bg-transparent py-2 text-base text-[#D7E2EA] focus:outline-none resize-none font-sans"
                />
              </motion.div>

              {/* Submit Pill Button (not full width) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit rounded-full px-8 py-3.5 bg-[#1E90FF] hover:brightness-110 disabled:opacity-50 text-white font-mono text-sm font-semibold tracking-wider flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN (~40% width = 5 cols in lg) — Stacked blocks with dividers */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left w-full pt-4">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between font-mono text-xs text-[#8FA3AE] uppercase tracking-widest"
          >
            <span>DIRECT CHANNEL</span>
            <span>REPLY WITHIN 48 HOURS</span>
          </motion.div>

          {/* Block 1: Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#8FA3AE]">
              OR, JUST EMAIL
            </span>
            <a
              href="mailto:pranavprp08@gmail.com?subject=Portfolio%20Inquiry%20-%20Pranav"
              className="flex items-center gap-3 text-lg sm:text-xl font-mono text-[#D7E2EA] hover:text-[#1E90FF] transition-colors font-medium group"
            >
              <Mail className="w-5 h-5 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors shrink-0" />
              <span className="break-all">pranavprp08@gmail.com</span>
            </a>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#D7E2EA]/15 w-full"></div>

          {/* Block 2: Find Me Elsewhere */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#8FA3AE]">
              FIND ME ELSEWHERE
            </span>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a
                href="https://github.com/pranav-8526"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center justify-between text-[#D7E2EA] hover:text-[#1E90FF] transition-colors py-1 group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/pranavr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-between text-[#D7E2EA] hover:text-[#1E90FF] transition-colors py-1 group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors" />
              </a>

              <a
                href="https://personal-portfolio-green-five.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Site"
                className="flex items-center justify-between text-[#D7E2EA] hover:text-[#1E90FF] transition-colors py-1 group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors" />
                  <span>Portfolio</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8FA3AE] group-hover:text-[#1E90FF] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#D7E2EA]/15 w-full"></div>

          {/* Block 3: Status Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 font-mono text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left">
              <span className="text-[#8FA3AE] uppercase tracking-widest shrink-0">Status</span>
              <span className="text-[#D7E2EA] font-medium text-right sm:text-left">
                Open to SOC Analyst, Cloud/DevOps & AI Engineering roles
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[#8FA3AE] uppercase tracking-widest shrink-0">Location</span>
              <span className="text-[#D7E2EA]">Coimbatore, Tamil Nadu, India</span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[#8FA3AE] uppercase tracking-widest shrink-0">Reply window</span>
              <span className="text-[#D7E2EA]">≤ 48 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
};
