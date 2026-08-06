import React from 'react';
import { FadeIn, Magnet } from './MotionUtils';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="h-screen w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C]">

      {/* Hero Main Center Container */}
      <div className="w-full flex-1 flex flex-col items-center justify-center relative z-10 px-4 text-center">
        {/* Main H1 Heading */}
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center justify-center text-center z-20 relative">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.88] text-center text-[7vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] select-none drop-shadow-md">
            HI, I&apos;M
          </h1>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.88] text-center text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[8vw] select-none drop-shadow-md">
            PRANAV
          </h1>
        </FadeIn>

        {/* Centered Subtext directly below the main heading */}
        <FadeIn delay={0.35} y={20} className="w-full flex justify-center z-20 relative mt-4 sm:mt-6">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed text-[clamp(0.85rem,1.4vw,1.4rem)] text-center max-w-[90vw] sm:max-w-[650px] md:max-w-[780px]">
            an AI & Data Science engineer driven by securing systems, automating clouds, and building intelligent applications
          </p>
        </FadeIn>

        {/* Hero Portrait with Magnet effect */}
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/hero-portrait.png"
              alt="Pranav portrait"
              className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl opacity-85"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Spacer */}
      <div className="w-full pb-7 sm:pb-8 md:pb-10 z-30" />
    </section>
  );
};
