import React from 'react';
import { InteractiveCanvas } from './InteractiveCanvas';
import { ArrowRight, Bot, Cpu, Sparkles, Terminal, Code2, ShieldCheck, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#818cf8', '#c084fc', '#38bdf8']
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic WebGL/Canvas Particle Mesh Background */}
      <InteractiveCanvas />

      {/* Radial Gradient Accent Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Antigravity Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-xs sm:text-sm font-mono text-indigo-300 mb-8 animate-bounce">
          <Bot className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Powered by Google Antigravity Agentic Platform</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Main Kinetic Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
          Architecting <span className="text-gradient">Agentic AI</span> & Modern Digital Experiences
        </h1>

        {/* Subtitle / Bio Blurb */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-light mb-10">
          Hi, I'm <strong className="text-white font-semibold">Vrookx</strong> — Senior Design Engineer & Full-Stack Architect. 
          I bridge the gap between creative visual engineering, scalable cloud microservices, and 
          autonomous multi-agent AI systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="#projects"
            onClick={triggerConfetti}
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl glass-panel text-slate-200 font-semibold text-base hover:text-white hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2"
          >
            <Terminal className="w-5 h-5 text-indigo-400" />
            Get In Touch
          </a>
        </div>

        {/* Key Competency Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/60">
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Bot className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-100 text-sm">Agentic Workflows</span>
            <span className="text-xs text-slate-400 font-mono">Gemini 3 & Claude</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-100 text-sm">Full-Stack React</span>
            <span className="text-xs text-slate-400 font-mono">Next.js & TypeScript</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-100 text-sm">Interactive UI/UX</span>
            <span className="text-xs text-slate-400 font-mono">Glassmorphism & Motion</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-100 text-sm">API Security</span>
            <span className="text-xs text-slate-400 font-mono">FastAPI & Redis Gateways</span>
          </div>
        </div>
      </div>
    </section>
  );
};
