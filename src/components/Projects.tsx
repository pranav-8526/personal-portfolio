import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ExternalLink, Sparkles, X, Check, ArrowUpRight, Code2, Play, Eye } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [livePreviewUrl, setLivePreviewUrl] = useState<string | null>(null);

  const categories = ['All', 'AI Systems', 'Full Stack', 'Cloud & DevOps', 'Creative WebGL'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Award-Winning Project Showcase
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mt-4 text-base font-light">
            Explore a curated selection of autonomous AI systems, zero-trust cloud microservices, and interactive web applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border border-slate-800 relative overflow-hidden"
            >
              {/* Card Header & Content */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-1 flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>
                <p className="text-sm font-mono text-purple-400 mb-4">{project.subtitle}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              {/* Tags & Actions */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group/btn"
                  >
                    View Specs
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <button
                        onClick={() => setLivePreviewUrl(project.liveUrl || '#')}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all text-xs font-mono flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Preview
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Project Interactive Sandbox Modal */}
        {livePreviewUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel w-full max-w-5xl h-[85vh] rounded-3xl border border-slate-700 shadow-2xl flex flex-col relative overflow-hidden">
              {/* Modal Control Bar */}
              <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-3">
                    Interactive Live Sandbox Preview
                  </span>
                </div>
                <button
                  onClick={() => setLivePreviewUrl(null)}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Embedded Interactive Frame */}
              <div className="flex-1 bg-slate-950 p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto animate-pulse">
                  <Play className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Live Project Demo Active</h4>
                <p className="text-slate-400 text-sm max-w-md">
                  This project sandbox displays real-time agent metrics and interactive user interfaces.
                </p>
                <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => setLivePreviewUrl(null)}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500"
                  >
                    Return to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Spec Drawer */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
                  {activeModalProject.category}
                </span>
              </div>

              <h3 className="text-3xl font-black text-white mb-2">{activeModalProject.title}</h3>
              <p className="text-sm font-mono text-purple-400 mb-6">{activeModalProject.subtitle}</p>

              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-mono uppercase text-slate-400 tracking-wider">Architecture Breakdown</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeModalProject.fullDescription}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono text-slate-200">
                    Performance Benchmark: <strong className="text-emerald-400">{activeModalProject.metrics}</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Close Spec
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
