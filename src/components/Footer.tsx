import React from 'react';
import { Terminal, Heart, Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-base">VROOKX</span>
              <span className="text-xs text-slate-500 font-mono block">© {new Date().getFullYear()} All Rights Reserved.</span>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono text-center flex items-center gap-1">
            Built with Google Antigravity <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> & React 19
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors flex items-center gap-2 text-xs font-mono"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
