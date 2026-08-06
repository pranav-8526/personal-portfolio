import React from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300 shadow-md shadow-indigo-500/50" />

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 group-hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <p className="text-sm font-mono text-purple-400 mb-4">{item.company}</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
