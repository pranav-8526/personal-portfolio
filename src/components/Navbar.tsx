import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, Moon, Sun, Mail } from 'lucide-react';


interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-panel shadow-lg border-b border-slate-800/50' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
              VROOKX <Sparkles className="w-4 h-4 text-indigo-400 opacity-80 group-hover:rotate-12 transition-transform" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-mono font-medium">
              AI Design Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Controls & Social Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranavr/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-2">
              <div className="flex gap-4 text-xs font-mono">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/pranavr/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="mailto:vrookx@antigravity.dev" className="text-slate-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
