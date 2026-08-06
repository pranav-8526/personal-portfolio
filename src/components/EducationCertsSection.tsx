import React from 'react';
import { FadeIn } from './MotionUtils';

const certifications = [
  'Oracle Cloud Infrastructure Foundations',
  'Deloitte Cybersecurity Job Simulation',
  'Cisco Ethical Hacking',
  'Cisco Cybersecurity Essentials',
  'Cisco Cybersecurity Basics',
  'Cisco Networking Basics',
  'PrepInsta Cybersecurity Essentials',
];

export const EducationCertsSection: React.FC = () => {
  return (
    <section
      id="education"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 w-full relative z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-14">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(3rem,10vw,120px)] leading-none tracking-tight select-none">
            Education
          </h2>
        </FadeIn>

        {/* Education Block */}
        <FadeIn delay={0.15} y={30} className="w-full text-center flex flex-col gap-2">
          <h3 className="font-medium uppercase text-xl md:text-2xl text-[#0C0C0C]">
            B.Tech — Artificial Intelligence & Data Science
          </h3>
          <p className="font-light text-[#0C0C0C] opacity-70 text-base sm:text-lg">
            SNS College of Engineering, Coimbatore | 2023–2027 | CGPA: 7.5/10
          </p>
        </FadeIn>

        {/* Certifications Block */}
        <FadeIn delay={0.3} y={30} className="w-full flex flex-col items-center gap-6 pt-6 border-t border-[#0C0C0C]/15">
          <h4 className="font-semibold uppercase tracking-widest text-sm text-[#0C0C0C]/60">
            Certifications
          </h4>

          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-[#0C0C0C]/20 px-5 py-2 text-sm uppercase tracking-wide text-[#0C0C0C] font-medium hover:bg-[#0C0C0C]/5 transition-colors duration-200"
              >
                {cert}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
