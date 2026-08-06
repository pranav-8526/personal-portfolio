import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);

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
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      console.error('Email send error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Initiate Collaboration
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mt-4 text-base font-light">
            Have an ambitious project or want to build next-generation agentic AI software? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Direct communication lines are open. I respond to all business & architecture inquiries within 24 hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                    <a href="mailto:pranavprp08@gmail.com?subject=Portfolio%20Inquiry%20-%20Pranav" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                      pranavprp08@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone / Signal</span>
                    <span className="text-sm font-semibold text-white">+1 (800) 555-AGENT</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-pink-600/10 border border-pink-500/20 text-pink-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">San Francisco, CA / Remote</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors font-mono text-xs"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pranavr/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors font-mono text-xs"
                >
                  LinkedIn
                </a>
                <a
                  href="https://personal-portfolio-green-five.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors font-mono text-xs"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out! Your inquiry has been routed to my agentic inbox. Expect a response shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-700 mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Your Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@techcorp.io"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Agentic Platform Architecture Request"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Project Overview / Message *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, timeline, or technical requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="text-sm font-mono animate-pulse">Transmitting Signal...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
