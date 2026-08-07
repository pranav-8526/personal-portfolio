import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  pageIndex: string;
  accentColor: string;
  category: string;
  shortTag: string;
  title: string;
  description: string;
  techTags: string[];
  diagramImg: string;
  frameSummary: string;
  githubUrl: string;
  liveDemoUrl: string;
}

const projectsData: Project[] = [
  {
    id: 'cloud-infra',
    number: '01',
    pageIndex: '01',
    accentColor: '#1E90FF', // Azure Blue accent
    category: 'CLOUD · DEVOPS · 2026',
    shortTag: 'CLOUD DEVOPS',
    title: 'Secure Multi-Tier Cloud Infrastructure',
    description:
      'A secure multi-tier deployment on Microsoft Azure — VMs, storage, and networking provisioned entirely through Terraform. NSGs enforce tier-to-tier traffic control, Azure AD/RBAC scopes access to least privilege, and Azure Monitor with automated backups keeps it observable and recoverable.',
    techTags: ['Azure', 'Terraform', 'NSG', 'Azure AD', 'Azure Monitor'],
    diagramImg: '/projects/cloud_main.png',
    frameSummary: 'MULTI-TIER · WEB / APP / DB',
    githubUrl: 'https://github.com/pranav-8526/OCI-MAPPED-AZURE',
    liveDemoUrl: 'https://oci-mapped-azure.vercel.app/',
  },
  {
    id: 'rig-security',
    number: '02',
    pageIndex: '02',
    accentColor: '#B600A8', // Neon Purple accent
    category: 'AI SECURITY · GENAI · 2026',
    shortTag: 'AI SECURITY',
    title: 'Runtime Integrity Guard (RIG)',
    description:
      'A 4-layer runtime security proxy that intercepts MCP traffic between AI agents and external tools — combining deterministic hash-pinning and regex detection with an AI-semantic layer via the Gemini API to catch tool-poisoning, rug-pull, and prompt-injection attempts, including zero-day patterns.',
    techTags: ['Python', 'Google Gemini API', 'Firebase', 'Vercel', 'MCP Security'],
    diagramImg: '/projects/rig_single.png',
    frameSummary: '4-LAYER DETECTION · GEMINI API',
    githubUrl: 'https://github.com/pranav-8526/runtime-integrity-guard',
    liveDemoUrl: 'https://poisoning.vercel.app/',
  },
  {
    id: 'contract-risk',
    number: '03',
    pageIndex: '03',
    accentColor: '#3FB950', // Emerald Green accent
    category: 'FULL-STACK ML · LEGAL NLP · 2026',
    shortTag: 'LEGAL NLP',
    title: 'Contract Risk-Flagging System',
    description:
      'An end-to-end NLP & Machine Learning platform that automatically parses legal contracts, extracts clauses, and flags high-risk liabilities using TF-IDF + Logistic Regression classifiers with an interactive FastAPI & React analytics dashboard.',
    techTags: ['Python', 'FastAPI', 'TF-IDF', 'React', 'PostgreSQL', 'Render'],
    diagramImg: '/projects/contract_main.png',
    frameSummary: 'RISK SCORING · CLAUSE PARSER',
    githubUrl: 'https://github.com/pranav-8526/_contract_risk_flagging',
    liveDemoUrl: 'https://contract-risk-frontend.onrender.com/',
  },
];

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 py-16 sm:py-24 w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full flex flex-col items-center justify-center gap-16 sm:gap-24">
        {/* Section Heading: Big Bold Hero Heading */}
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight"
        >
          Project
        </motion.h2>

        {/* Project Cards Stack */}
        <div className="w-full flex flex-col gap-20 sm:gap-28">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} totalProjects={projectsData.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  totalProjects: number;
}> = ({ project, totalProjects }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress for Parallax & Stacking Scale
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Spring Configuration for Fluid Smoothness
  const springConfig = { stiffness: 100, damping: 20 };

  // Parallax translation transforms (Right image translated faster than left column)
  const rawLeftY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const rawRightY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rawScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.97, 0.94]);

  const leftY = useSpring(rawLeftY, springConfig);
  const rightY = useSpring(rawRightY, springConfig);
  const targetScale = useSpring(rawScale, springConfig);

  // Entrance Variants for Top Row & Text Elements
  const numberVariant: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const textVariant: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: shouldReduceMotion ? 1 : targetScale,
      }}
      className="w-full border-b border-[#D7E2EA]/10 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
    >
      {/* Main Two-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        {/* Left Column (Text & Editorial Details with Parallax) */}
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : leftY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-6 flex flex-col gap-6 text-left"
        >
          {/* Row: Number, Horizontal Line, Category */}
          <div className="flex items-center gap-4 w-full">
            <motion.span
              variants={numberVariant}
              className="hero-heading font-black text-6xl md:text-7xl leading-none"
            >
              {project.number}
            </motion.span>
            <div className="flex-1 border-t border-[#D7E2EA]/20"></div>
            <motion.span
              custom={1}
              variants={textVariant}
              className="text-xs uppercase tracking-widest text-[#8FA3AE] font-mono font-semibold shrink-0"
            >
              {project.category}
            </motion.span>
          </div>

          {/* Elegant Display Title */}
          <motion.h3
            custom={2}
            variants={textVariant}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] text-[#D7E2EA] font-bold leading-[1.15] tracking-tight font-display"
          >
            {project.title}
          </motion.h3>

          {/* Description Paragraph */}
          <motion.p
            custom={3}
            variants={textVariant}
            className="font-light leading-relaxed text-[#D7E2EA]/85 text-base sm:text-lg md:text-xl max-w-xl font-sans"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div custom={4} variants={textVariant} className="flex flex-wrap gap-2.5 pt-2">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="border border-[#D7E2EA]/20 rounded-full px-4 py-1.5 text-xs sm:text-sm text-[#D7E2EA] font-mono tracking-wide bg-[#0C0C0C]"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Read Case Study Link */}
          <motion.div custom={5} variants={textVariant} className="pt-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base uppercase tracking-wider underline text-[#D7E2EA] hover:text-white transition-colors duration-200 font-mono font-medium"
            >
              Read case study <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (Framed Visual Architecture Diagram with Higher-Speed Parallax) */}
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : rightY }}
          className="lg:col-span-6 w-full flex flex-col justify-center gap-3"
        >
          <div className="w-full relative border border-[#D7E2EA]/15 rounded-2xl bg-[#0a0a0c] p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl min-h-[300px] sm:min-h-[360px] md:min-h-[420px] max-h-[480px]">
            {/* Top-Right Frame Overlay */}
            <div className="absolute top-4 right-4 z-10 text-[10px] sm:text-xs uppercase tracking-widest text-[#8FA3AE] font-mono bg-[#0C0C0C]/80 px-3 py-1 rounded-full border border-[#D7E2EA]/10 backdrop-blur-md">
              {project.pageIndex} / 0{totalProjects} · {project.shortTag}
            </div>

            {/* Architecture Diagram Image */}
            <div className="w-full flex-1 flex items-center justify-center py-6 my-auto">
              <img
                src={project.diagramImg}
                alt={`${project.title} architecture diagram`}
                className="w-full h-full max-h-[360px] object-contain mx-auto select-none"
              />
            </div>

            {/* Bottom-Left Frame Overlay */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-0.5 bg-[#0C0C0C]/90 px-4 py-2.5 rounded-xl border border-[#D7E2EA]/10 backdrop-blur-md max-w-[90%]">
              <span className="font-black text-base sm:text-lg md:text-xl text-[#D7E2EA] uppercase tracking-wide font-sans">
                {project.title}
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#8FA3AE] font-mono">
                {project.frameSummary}
              </span>
            </div>
          </div>

          {/* Live Demo Button right under Architecture Image */}
          {project.liveDemoUrl && (
            <motion.div custom={6} variants={textVariant} className="flex justify-end pt-1">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1E90FF] hover:bg-[#1C82E6] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-md shadow-[#1E90FF]/25 cursor-pointer"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
