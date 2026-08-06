import React, { useState, useEffect, useRef } from 'react';

interface TechCard {
  name: string;
  category: string;
  logo: string;
  isDarkLogo?: boolean;
}

const techCardsRow1: TechCard[] = [
  { name: 'Python', category: 'Language', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Azure', category: 'Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', category: 'Container', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', category: 'Orchestration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Linux', category: 'OS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Splunk', category: 'SIEM / SOC', logo: 'https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg' },
  { name: 'GitHub Actions', category: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', isDarkLogo: true },
  { name: 'Oracle Cloud', category: 'Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
];

const techCardsRow2: TechCard[] = [
  { name: 'Linux', category: 'OS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Wireshark', category: 'SOC / Network', logo: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg', isDarkLogo: true },
  { name: 'SQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'HTML5', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', category: 'Version Control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Windows', category: 'OS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
  { name: 'OpenAI / LLMs', category: 'GenAI', logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg', isDarkLogo: true },
  { name: 'Wazuh SIEM', category: 'Security', logo: 'https://wazuh.com/uploads/2022/07/wazuh_avatar.png' },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tripledRow1 = [...techCardsRow1, ...techCardsRow1, ...techCardsRow1];
  const tripledRow2 = [...techCardsRow2, ...techCardsRow2, ...techCardsRow2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-32 pb-12 overflow-hidden w-full relative"
    >
      <div className="flex flex-col gap-6">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-5 w-max"
          style={{
            transform: `translateX(${scrollOffset - 300}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((item, i) => (
            <div
              key={`row1-${i}`}
              className="w-[200px] h-[160px] sm:w-[240px] sm:h-[180px] rounded-3xl bg-[#141414] border border-[#262626] p-6 flex flex-col items-center justify-center gap-3 shrink-0 transition-all duration-300 hover:border-[#D7E2EA]/40 hover:bg-[#1A1A1A] group shadow-xl"
            >
              {/* Top Official Tech Brand Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className={`max-w-full max-h-full object-contain filter drop-shadow-md ${
                    item.isDarkLogo ? 'invert brightness-200' : ''
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Bottom Label Text */}
              <div className="text-center flex flex-col items-center">
                <span className="text-sm sm:text-base font-bold text-[#D7E2EA] uppercase tracking-wide">
                  {item.name}
                </span>
                <span className="text-[10px] sm:text-xs text-[#8FA3AE] font-light uppercase tracking-widest mt-0.5">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-5 w-max"
          style={{
            transform: `translateX(${-scrollOffset - 50}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((item, i) => (
            <div
              key={`row2-${i}`}
              className="w-[200px] h-[160px] sm:w-[240px] sm:h-[180px] rounded-3xl bg-[#141414] border border-[#262626] p-6 flex flex-col items-center justify-center gap-3 shrink-0 transition-all duration-300 hover:border-[#D7E2EA]/40 hover:bg-[#1A1A1A] group shadow-xl"
            >
              {/* Top Official Tech Brand Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className={`max-w-full max-h-full object-contain filter drop-shadow-md ${
                    item.isDarkLogo ? 'invert brightness-200' : ''
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Bottom Label Text */}
              <div className="text-center flex flex-col items-center">
                <span className="text-sm sm:text-base font-bold text-[#D7E2EA] uppercase tracking-wide">
                  {item.name}
                </span>
                <span className="text-[10px] sm:text-xs text-[#8FA3AE] font-light uppercase tracking-widest mt-0.5">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
