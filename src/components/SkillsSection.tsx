import React from 'react';
import { FadeIn } from './MotionUtils';

interface SkillItem {
  number: string;
  title: string;
  description: string;
}

const skillsList: SkillItem[] = [
  {
    number: '01',
    title: 'Security & SOC',
    description:
      'Log analysis, incident response, threat detection, vulnerability assessment, and SIEM concepts using Splunk and Wazuh.',
  },
  {
    number: '02',
    title: 'Cloud Platforms',
    description:
      'Provisioning and managing Microsoft Azure (VMs, Storage, VNet, NSGs, Load Balancers) and Oracle Cloud Infrastructure (Compute, VCN, IAM).',
  },
  {
    number: '03',
    title: 'CI/CD & Automation',
    description:
      'Building automated pipelines with Azure DevOps, GitHub Actions, Docker, Terraform, and Git-based workflows.',
  },
  {
    number: '04',
    title: 'Containers & Orchestration',
    description:
      'Containerizing and deploying applications with Docker and Kubernetes fundamentals.',
  },
  {
    number: '05',
    title: 'AI / Generative AI',
    description:
      'Prompt engineering and LLM fundamentals applied to building AI-native, agentic applications.',
  },
  {
    number: '06',
    title: 'Programming & Networking',
    description:
      'Python, SQL, HTML/CSS, TCP/IP, DNS, HTTP/HTTPS, Wireshark, Linux, and Windows administration.',
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase tracking-tight text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-[9.5vw] leading-none select-none text-center mb-16 sm:mb-20 md:mb-28">
            SKILLS
          </h2>
        </FadeIn>

        {/* Skills Vertical List */}
        <div className="w-full flex flex-col border-t border-[#0C0C0C]/15">
          {skillsList.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15">
                {/* Number */}
                <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none shrink-0">
                  {item.number}
                </span>

                {/* Name + Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                    {item.title}
                  </h3>
                  <p className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
