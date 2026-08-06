import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Get In Touch',
  onClick,
  href,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.getElementById(href.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const content = (
    <button
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-3 rounded-full px-8 py-3.5 sm:px-10 sm:py-4 bg-[#D7E2EA] hover:bg-[#1E90FF] text-[#0C0C0C] hover:text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#1E90FF]/25 hover:-translate-y-0.5 cursor-pointer ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );

  if (href && !href.startsWith('#')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  onClick,
  href,
  className = '',
}) => {
  const content = (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest px-7 py-3 hover:bg-[#1E90FF]/10 hover:border-[#1E90FF] hover:text-[#1E90FF] transition-all duration-300 cursor-pointer ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
