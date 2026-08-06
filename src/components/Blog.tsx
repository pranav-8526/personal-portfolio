import React from 'react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ARTICLES & INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Latest Thoughts & Technical Engineering Posts
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mt-4 text-base font-light">
            Sharing knowledge on Google Antigravity agent workflows, WebGL graphics, and API security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border border-slate-800"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-6 font-light">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{post.date}</span>
                  <a
                    href={`#blog/${post.slug}`}
                    className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 group/link"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
