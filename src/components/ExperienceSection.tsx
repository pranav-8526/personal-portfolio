import React from 'react';
import { FadeIn } from './MotionUtils';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 w-full relative z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
            Experience
          </h2>
        </FadeIn>

        {/* Deloitte Job Simulation Card */}
        <FadeIn delay={0.1} y={30} className="w-full">
          <div className="w-full border-2 border-[#D7E2EA]/30 rounded-[30px] p-8 bg-[#141414]/40 flex flex-col gap-6">
            <h3 className="font-medium uppercase text-xl md:text-2xl text-[#D7E2EA]">
              Cybersecurity Virtual Job Simulation — Deloitte
            </h3>

            <ul className="flex flex-col gap-4 text-[#D7E2EA]/70 font-light leading-relaxed text-base sm:text-lg list-disc list-inside">
              <li>
                Investigated simulated security alerts using SIEM concepts and performed log analysis to identify suspicious activity.
              </li>
              <li>
                Conducted initial incident triage, followed incident response workflows and best practices, and documented findings.
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
