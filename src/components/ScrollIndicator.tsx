import React, { useEffect, useState } from 'react';

interface SectionItem {
  id: string;
  label: string;
  number: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'hero', label: 'HERO', number: '01' },
  { id: 'about', label: 'ABOUT', number: '02' },
  { id: 'services', label: 'SKILLS', number: '03' },
  { id: 'projects', label: 'PROJECTS', number: '04' },
  { id: 'contact', label: 'CONTACT', number: '05' },
];

export const ScrollIndicator: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeId);
  const activeSection = SECTIONS[activeIndex] || SECTIONS[0];

  return (
    <div
      className="hidden md:flex fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 flex-col items-end pointer-events-auto select-none"
      aria-label="Scroll section navigator"
    >
      {/* Indicator Card Container */}
      <div className="relative flex flex-col items-center py-4 px-2">
        {/* Background Connecting Line */}
        <div className="absolute top-6 bottom-6 w-[1px] bg-[#D7E2EA]/15 left-1/2 -translate-x-1/2 z-0" />

        {/* Section Dots List */}
        <div className="flex flex-col gap-6 relative z-10 items-center">
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            const isHovered = hoveredId === section.id;
            const showLabel = isActive || isHovered;

            return (
              <div
                key={section.id}
                className="relative flex items-center justify-end group cursor-pointer"
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredId(section.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor-hover
              >
                {/* Floating Label (Appears on Active or Hover) */}
                <div
                  className={`absolute right-8 flex items-center gap-2 px-2.5 py-1 rounded bg-[#141414]/80 backdrop-blur-md border border-white/10 transition-all duration-300 whitespace-nowrap pointer-events-none ${
                    showLabel
                      ? 'opacity-100 translate-x-0 scale-100'
                      : 'opacity-0 translate-x-2 scale-95'
                  }`}
                >
                  {/* Left Accent Tick for Active State */}
                  {isActive && (
                    <span className="w-2.5 h-[2px] bg-[#FF3B3B] rounded-full shadow-[0_0_6px_#FF3B3B]" />
                  )}
                  <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#D7E2EA]/90 uppercase">
                    {section.number} · {section.label}
                  </span>
                </div>

                {/* Outer Click Target & Dot Marker */}
                <button
                  type="button"
                  aria-label={`Scroll to ${section.label} section`}
                  className="w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-200"
                >
                  <span
                    className={`rounded-full transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'w-3 h-3 bg-[#FF3B3B] border-[#FF3B3B] shadow-[0_0_12px_rgba(255,59,59,0.7)] scale-110'
                        : isHovered
                        ? 'w-2.5 h-2.5 bg-white/40 border-white/70 scale-105'
                        : 'w-2 h-2 bg-transparent border border-[#D7E2EA]/40'
                    }`}
                    style={{
                      borderWidth: isActive ? '0px' : '1px',
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Counter (Current / Total) */}
      <div className="mt-2 pr-1 font-mono text-[10px] tracking-widest text-[#D7E2EA]/40 uppercase font-medium">
        {activeSection.number} / 0{SECTIONS.length}
      </div>
    </div>
  );
};
