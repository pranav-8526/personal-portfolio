import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Cpu, Bot, Code, FileCode, Palette, Sparkles, Server, Database, Cloud, Layers, ShieldCheck, BrainCircuit } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-pink-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Code: <Code className="w-5 h-5 text-cyan-400" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-400" />,
  Palette: <Palette className="w-5 h-5 text-violet-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  Server: <Server className="w-5 h-5 text-teal-400" />,
  Database: <Database className="w-5 h-5 text-indigo-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  Layers: <Layers className="w-5 h-5 text-rose-400" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Core Technology & Skill Matrix
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mt-4 text-base font-light">
            A comprehensive breakdown of tools, frameworks, and architectural domains I utilize to build modern award-winning applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    Domain {idx + 1}
                  </span>
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          {iconMap[skill.icon] || <Code className="w-5 h-5 text-indigo-400" />}
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-400">{skill.level}%</span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs text-slate-400 font-mono flex items-center justify-between">
                <span>Verified Expertise</span>
                <span className="text-emerald-400">100% Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
