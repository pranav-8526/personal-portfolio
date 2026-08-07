import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

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
  const shouldReduceMotion = useReducedMotion();

  // Coordinated wave entrance parent variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Card entrance variants (opacity, y-translate 30px -> 0, scale 0.95 -> 1)
  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="hero-heading font-black uppercase tracking-tight text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-[9.5vw] leading-none select-none text-center mb-16 sm:mb-20 md:mb-28">
            SKILLS
          </h2>
        </motion.div>

        {/* Skills Wave Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col border-t border-[#0C0C0C]/15"
        >
          {skillsList.map((item) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const },
                    }
              }
              className="group relative flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 rounded-2xl px-6 -mx-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF3B3B]/5 hover:to-[#3B82F6]/5 hover:border-transparent hover:shadow-[0_10px_30px_-10px_rgba(255,59,59,0.15)]"
            >
              {/* Number */}
              <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#FF3B3B] group-hover:to-[#3B82F6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {item.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] group-hover:text-[#0C0C0C] transition-colors">
                  {item.title}
                </h3>
                <p className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
