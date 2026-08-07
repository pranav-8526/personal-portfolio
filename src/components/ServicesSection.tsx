import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  SiSplunk,
  SiWireshark,
  SiGithubactions,
  SiGit,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiPostgresql,
  SiLinux,
  SiGoogle,
} from 'react-icons/si';
import { Shield, Server, Terminal as TerminalIcon, Cloud, Cpu, Lock, Check } from 'lucide-react';

interface ToolChipItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillItem {
  number: string;
  name: string;
  accentColor: string;
  explainer: string;
  description: string;
  heroIcon: string;
  highlights: string[];
  tools: ToolChipItem[];
  appliedIn: string;
}

const skillsList: SkillItem[] = [
  {
    number: '01',
    name: 'Security & SOC',
    accentColor: '#38BDF8',
    explainer:
      'I monitor systems for threats and walk through the full incident response lifecycle — from spotting suspicious activity to documenting what happened and why.',
    description:
      'Log analysis, incident response, threat detection, vulnerability assessment, and SIEM concepts using Splunk and Wazuh.',
    heroIcon: '/3d_hero_security.png',
    highlights: [
      'Practiced log analysis and alert triage through the Deloitte Cybersecurity Job Simulation',
      'Comfortable with SIEM fundamentals using Splunk and Wazuh',
      'Followed structured incident-response workflows from detection to documentation',
    ],
    tools: [
      { name: 'Splunk', icon: <SiSplunk className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Wazuh', icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Wireshark', icon: <SiWireshark className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'SIEM Logs', icon: <TerminalIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
    ],
    appliedIn: 'Deloitte Cybersecurity Simulation & Local SOC Lab',
  },
  {
    number: '02',
    name: 'Cloud Platforms',
    accentColor: '#818CF8',
    explainer:
      'I design and provision cloud infrastructure end-to-end, from networking and compute to access control, across both Azure and Oracle Cloud.',
    description:
      'Provisioning and managing Microsoft Azure (VMs, Storage, VNet, NSGs, Load Balancers) and Oracle Cloud Infrastructure (Compute, VCN, IAM).',
    heroIcon: '/3d_hero_cloud.png',
    highlights: [
      'Provisioned VMs, Storage Accounts, VNet, and NAT/public IP gateways with Terraform',
      'Configured NSGs for tier-to-tier traffic control across a multi-tier deployment',
      'Applied least-privilege Azure AD/RBAC scoped to a dedicated resource group',
    ],
    tools: [
      { name: 'Azure', icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Oracle Cloud', icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'VNet / Compute', icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
    ],
    appliedIn: 'Automated Multi-Tier Cloud Deployment (Terraform)',
  },
  {
    number: '03',
    name: 'CI/CD & Automation',
    accentColor: '#10B981',
    explainer:
      'I build pipelines that take code from commit to deployment automatically, so releases are fast, repeatable, and low-risk.',
    description:
      'Building automated pipelines with Azure DevOps, GitHub Actions, Docker, Terraform, and Git-based workflows.',
    heroIcon: '/3d_hero_cicd.png',
    highlights: [
      'Built CI/CD pipelines with GitHub Actions and Azure DevOps concepts',
      'Managed infrastructure changes through version-controlled Terraform workflows',
      'Automated deployment steps to remove manual, error-prone release work',
    ],
    tools: [
      { name: 'Azure DevOps', icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Git', icon: <SiGit className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Terraform', icon: <SiTerraform className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
    ],
    appliedIn: 'GitHub Actions CI/CD Pipeline & Automated Workflows',
  },
  {
    number: '04',
    name: 'Containers & Orchestration',
    accentColor: '#06B6D4',
    explainer:
      'I package applications into containers and understand how to run and scale them reliably with Kubernetes.',
    description:
      'Containerizing and deploying applications with Docker and Kubernetes fundamentals.',
    heroIcon: '/3d_hero_containers.png',
    highlights: [
      'Containerized applications with Docker for consistent multi-environment runs',
      'Learned Kubernetes fundamentals — pods, deployments, and services',
      'Understood orchestration trade-offs when scaling beyond a handful of containers',
    ],
    tools: [
      { name: 'Docker', icon: <SiDocker className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
    ],
    appliedIn: 'Production Containerization & Microservice Deployment',
  },
  {
    number: '05',
    name: 'AI / Generative AI',
    accentColor: '#A855F7',
    explainer:
      'I design prompts and understand how large language models work under the hood, so I can build applications that use AI effectively and safely.',
    description:
      'Prompt engineering and LLM fundamentals applied to building AI-native, agentic applications.',
    heroIcon: '/3d_hero_ai.png',
    highlights: [
      'Designed a 4-layer runtime security proxy for AI agent tool traffic',
      'Combined deterministic checks (hash-pinning, regex) with an AI-semantic layer via Gemini API',
      'Validated the system against 30+ synthetic attack scenarios across 6 attack classes',
    ],
    tools: [
      { name: 'Gemini AI', icon: <SiGoogle className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'LLM & Prompts', icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Python AI', icon: <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
    ],
    appliedIn: 'Runtime Integrity Guard (RIG) for AI Agents',
  },
  {
    number: '06',
    name: 'Programming & Networking',
    accentColor: '#F43F5E',
    explainer:
      'I write the code and understand the networks that everything above runs on — from Python scripts to how packets actually move across the wire.',
    description:
      'Python, SQL, HTML/CSS, TCP/IP, DNS, HTTP/HTTPS, Wireshark, Linux, and Windows administration.',
    heroIcon: '/3d_hero_programming.png',
    highlights: [
      'Built backend logic in Python for real, working security tooling',
      'Comfortable with SQL for data-driven application work',
      'Can read TCP/IP, DNS, and HTTP/HTTPS traffic in a Wireshark capture',
    ],
    tools: [
      { name: 'Python', icon: <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'SQL', icon: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Wireshark', icon: <SiWireshark className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
      { name: 'Linux', icon: <SiLinux className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" /> },
    ],
    appliedIn: 'Backend Security Microservices & Packet Analysis Labs',
  },
];

export const ServicesSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        Math.max(Math.floor(latest * skillsList.length), 0),
        skillsList.length - 1
      );
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentSkill = skillsList[activeIndex];

  return (
    <section
      id="services"
      className="bg-[#0C0C0C] text-[#D7E2EA] w-full relative z-10"
    >
      {/* Giant "SKILLS" Heading at top of section */}
      <div className="w-full text-center z-20 pt-16 sm:pt-24 pb-6">
        <h2 className="hero-heading font-black uppercase tracking-tight text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-[9.5vw] leading-none select-none">
          SKILLS
        </h2>
      </div>

      {/* Sticky Full-Viewport Panel Track */}
      <div ref={targetRef} className="h-[450vh] sm:h-[600vh] relative">
        {/* Sticky Container */}
        <div className="sticky top-0 left-0 w-full min-h-screen flex flex-col justify-between items-center px-6 md:px-16 py-6 sm:py-8 overflow-y-auto lg:overflow-visible bg-[#0C0C0C]">
          {/* Top Bar: Section Eyebrow */}
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center shrink-0 pt-2 sm:pt-4">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#8FA3AE] font-light">
              Skills &middot; 6 areas
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#8FA3AE] font-light">
              {currentSkill.number} / 06
            </span>
          </div>

          {/* Center Main Content Container */}
          <div className="max-w-7xl mx-auto w-full flex-1 flex items-center justify-center my-auto py-4 sm:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSkill.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full my-auto"
              >
                {/* Left Column (7 cols): Text Info, Highlights, Tool Chips & Applied In */}
                <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 order-2 lg:order-1 my-auto">
                  
                  {/* 1. Eyebrow Label, Heading, Explainer & Description */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#8FA3AE]">
                      {currentSkill.number} / 06 &middot; Skill
                    </span>

                    <h3 className="font-bold text-[#D7E2EA] text-[clamp(1.8rem,4.2vw,3.5rem)] leading-tight tracking-tight">
                      {currentSkill.name}
                    </h3>

                    <p className="font-normal leading-relaxed text-[#D7E2EA]/85 text-[clamp(1.1rem,1.8vw,1.4rem)] max-w-3xl">
                      {currentSkill.explainer}
                    </p>

                    <p className="font-light leading-relaxed text-[#D7E2EA]/50 text-[clamp(0.9rem,1.4vw,1.1rem)] max-w-2xl">
                      {currentSkill.description}
                    </p>
                  </div>

                  {/* 2. Key Highlights List (3 short bullets) */}
                  <div className="flex flex-col gap-2 max-w-xl pt-1">
                    {currentSkill.highlights.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/75">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentSkill.accentColor }} />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* 3. Tool-chip Row */}
                  <div className="flex flex-wrap gap-3 items-center pt-1">
                    {currentSkill.tools.map((tool, i) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.25 }}
                        className="bg-[#141414] border border-[#D7E2EA]/15 rounded-xl px-4 py-2.5 h-12 flex items-center gap-3 shrink-0 shadow-lg group hover:border-[#D7E2EA]/40 transition-all duration-300"
                      >
                        <div className="flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                          {tool.icon}
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wider text-[#8FA3AE] group-hover:text-[#D7E2EA] transition-colors">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* 4. Applied-in Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                    <span className="uppercase font-semibold tracking-wider text-[#8FA3AE]">Applied in:</span>
                    <span className="text-xs sm:text-sm font-normal text-[#D7E2EA]/80">{currentSkill.appliedIn}</span>
                  </div>

                </div>

                {/* Right Column (5 cols): 3D Hero Visual */}
                <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 my-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative flex items-center justify-center"
                  >
                    <img
                      src={currentSkill.heroIcon}
                      alt={`${currentSkill.name} 3D Hero Icon`}
                      className="w-[200px] sm:w-[280px] lg:w-[340px] xl:w-[400px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] mix-blend-screen select-none pointer-events-none"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar Footer */}
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center shrink-0 border-t border-[#D7E2EA]/10 pt-4 sm:pt-6 pb-2 sm:pb-4">
            <span className="text-xs sm:text-sm tracking-wider text-[#8FA3AE] font-light">
              Scroll to explore skills
            </span>
            <span className="text-xs sm:text-sm tracking-wider text-[#8FA3AE] font-light">
              0{activeIndex + 1} / 06
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
