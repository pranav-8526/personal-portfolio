import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface SkillItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const skillsList: SkillItem[] = [
  {
    number: '01',
    title: 'Security & SOC',
    description:
      'Log analysis, incident response, threat detection, vulnerability assessment, and SIEM concepts using Splunk and Wazuh.',
    tags: ['Splunk', 'Wazuh', 'Wireshark', 'SIEM Logs'],
  },
  {
    number: '02',
    title: 'Cloud Platforms',
    description:
      'Provisioning and managing Microsoft Azure (VMs, Storage, VNet, NSGs, Load Balancers) and Oracle Cloud Infrastructure (Compute, VCN, IAM).',
    tags: ['Azure', 'Oracle Cloud', 'VNet', 'Terraform', 'IAM'],
  },
  {
    number: '03',
    title: 'CI/CD & Automation',
    description:
      'Building automated pipelines with Azure DevOps, GitHub Actions, Docker, Terraform, and Git-based workflows.',
    tags: ['Azure DevOps', 'GitHub Actions', 'Git', 'Docker'],
  },
  {
    number: '04',
    title: 'Containers & Orchestration',
    description:
      'Containerizing and deploying applications with Docker and Kubernetes fundamentals.',
    tags: ['Docker', 'Kubernetes', 'OKE', 'Microservices'],
  },
  {
    number: '05',
    title: 'AI / Generative AI',
    description:
      'Prompt engineering and LLM fundamentals applied to building AI-native, agentic applications.',
    tags: ['Prompt Engineering', 'Gemini API', 'LLM Security', 'MCP'],
  },
  {
    number: '06',
    title: 'Programming & Networking',
    description:
      'Python, SQL, HTML/CSS, TCP/IP, DNS, HTTP/HTTPS, Wireshark, Linux, and Windows administration.',
    tags: ['Python', 'SQL', 'Linux', 'TCP/IP', 'TypeScript'],
  },
];

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Coordinated wave entrance parent container variants with springy bounce
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, scale: shouldReduceMotion ? 1 : 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.4 }
              : { type: 'spring', stiffness: 120, damping: 14 }
          }
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
          viewport={{ once: true, amount: 0.15 }}
          className="w-full flex flex-col border-t border-[#0C0C0C]/15"
        >
          {skillsList.map((item, index) => (
            <SkillCard key={item.number} item={item} index={index} shouldReduceMotion={!!shouldReduceMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{
  item: SkillItem;
  index: number;
  shouldReduceMotion: boolean;
}> = ({ item, index, shouldReduceMotion }) => {
  // Dramatic entrance variant: opacity (0 -> 1), y (60 -> 0), scale (0.85 -> 1), rotate (-4deg -> 0deg) with spring
  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 60, scale: 0.85, rotate: -4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: shouldReduceMotion
        ? { duration: 0.4 }
        : {
            type: 'spring',
            stiffness: 120,
            damping: 14,
          },
    },
  };

  const tagVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              y: {
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -12,
              scale: 1.03,
              transition: { type: 'spring', stiffness: 300, damping: 18 },
            }
      }
      style={{ willChange: 'transform' }}
      className="group relative flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 rounded-2xl px-6 -mx-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF3B3B]/10 hover:via-[#3B82F6]/5 hover:to-[#FF3B3B]/10 hover:border-transparent hover:shadow-[0_15px_40px_-10px_rgba(255,59,59,0.2),0_0_20px_0_rgba(59,130,246,0.15)]"
    >
      {/* Animated gradient border glow highlight on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#FF3B3B]/30 group-hover:shadow-[inset_0_0_15px_rgba(255,59,59,0.08)] pointer-events-none transition-all duration-300" />

      {/* Number with inner scale spring on hover */}
      <motion.span
        whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#FF3B3B] group-hover:to-[#3B82F6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 inline-block"
      >
        {item.number}
      </motion.span>

      {/* Name + Description + Staggered Pills */}
      <div className="flex flex-col gap-3">
        <motion.h3
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] group-hover:text-[#0C0C0C] transition-colors"
        >
          {item.title}
        </motion.h3>
        <p className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
          {item.description}
        </p>

        {/* Staggered Tag Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {item.tags.map((tag, i) => (
            <motion.span
              key={tag}
              custom={i}
              variants={tagVariants}
              className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-[#0C0C0C]/80 group-hover:border-[#FF3B3B]/30 group-hover:bg-[#FF3B3B]/5 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
