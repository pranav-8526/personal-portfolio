import React from 'react';
import { User, Award, Code, Zap, CheckCircle2, FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pioneering the Intersection of <span className="text-gradient-cyan">Design & Intelligence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar / Visual Design Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-4 rounded-3xl relative overflow-hidden group">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 p-8 flex flex-col justify-between relative border border-slate-800">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                    <Zap className="w-8 h-8 animate-pulse" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    AVAILABLE FOR HIRE
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Vrookx</h3>
                  <p className="text-indigo-400 text-sm font-mono mb-4">Senior AI Design Engineer</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Specialized in Google Antigravity Agentic development, responsive visual systems, and ultra-low latency API architectures.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>Based in Global Remote</span>
                  <span>7+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500" />
          </div>

          {/* Bio Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Crafting scalable software that combines visual beauty with autonomous agent capability.
            </h3>

            <p className="text-slate-300 leading-relaxed font-light">
              Over the past 7 years, I’ve led engineering projects spanning full-stack web platforms, machine learning security gateways, and modern design systems. My focus is on leveraging modern agentic AI tooling—such as <strong className="text-indigo-400">Google Antigravity</strong>—to accelerate development without sacrificing code reliability or accessibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <h4 className="font-semibold text-white text-base">Agentic First Approach</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Integrating Gemini 3 and Claude Sonnet multi-agent pipelines for automated planning, testing, and continuous delivery.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  <h4 className="font-semibold text-white text-base">Award-Quality UX</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Building dark glassmorphic layouts, zero-layout-shift UI components, and accessible WCAG AA compliant web standards.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white text-base">High-Performance Code</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Engineered sub-10ms API data planes and lightweight bundle outputs achieving 95+ Lighthouse Web Vitals scores.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  <h4 className="font-semibold text-white text-base">Full Stack Mastery</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Proficient across React 19, TypeScript, Python FastAPI, PostgreSQL, Docker, Redis, and Vercel/Render deployments.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
