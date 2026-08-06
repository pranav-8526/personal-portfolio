export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: 'AI Systems' | 'Full Stack' | 'Cloud & DevOps' | 'Creative WebGL';
  tags: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'antigravity-crm-suite',
    title: 'Google Antigravity CRM Suite',
    subtitle: 'Agentic Workflow Orchestrator & Portfolio Engine',
    description: 'An enterprise-grade CRM dashboard built with agentic multi-model orchestration (Gemini 3 + Claude Sonnet 4.5). Features automated spec verification, real-time metrics, and AI workflow visualization.',
    fullDescription: 'Architected a cutting-edge web application powered by Google Antigravity autonomous coding agents. Implemented an interactive execution graph, automated CI/CD checks, and responsive dark glassmorphism styling designed to achieve top-tier Web Vitals scores.',
    category: 'AI Systems',
    tags: ['Google Antigravity', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metrics: '99.8% Code Accuracy • <1.2s LCP',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'runtime-integrity-guard',
    title: 'Runtime Integrity Guard (RIG)',
    subtitle: 'High-Throughput API Gateway & Security Data Plane',
    description: 'A zero-trust ML API security proxy capable of intercepting, analyzing, and mitigating prompt injections and contract risk flags with sub-10ms latency.',
    fullDescription: 'Engineered a multi-service architecture migrating from serverless to decoupled microservices on Render. Integrated FastAPI backend security guards with Celery background task processing and dynamic model evaluation pipelines.',
    category: 'Cloud & DevOps',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker', 'Next.js'],
    metrics: '<8ms Latency • 100k Req/min',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'kinetic-contract-analytics',
    title: 'Contract Risk-Flagging Dashboard',
    subtitle: 'Interactive Analytics & Risk Visualization System',
    description: 'Modernized legal contract analysis frontend with interactive risk-severity donut charts, ECE calibration curves, and slate-indigo modern aesthetic.',
    fullDescription: 'Replaced legacy static metrics with high-performance SVG visualizations and real-time backend synchronization. Enhanced overall developer UX with granular calibration diagnostics and zero layout shifts.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'FastAPI'],
    metrics: '40% UX Efficiency Boost',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'generative-particle-matrix',
    title: 'Generative WebGL Audio Visualizer',
    subtitle: '3D Kinetic Particle Simulation & Spatial Audio',
    description: 'An immersive interactive 3D WebGL experiment combining GPU particle physics with real-time frequency spectrum analysis and procedural shaders.',
    fullDescription: 'Built using Three.js and custom GLSL fragment shaders to simulate 50,000 active particles responding dynamically to user mouse coordinates and microphone frequency spectrum inputs.',
    category: 'Creative WebGL',
    tags: ['Three.js', 'WebGL', 'GLSL', 'Web Audio API'],
    metrics: '60 FPS Ultra-Smooth',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'AI & Machine Learning Engineering',
    skills: [
      { name: 'Google Antigravity Agentic Workflows', level: 95, icon: 'Bot' },
      { name: 'Gemini 3 & Claude API Orchestration', level: 92, icon: 'Cpu' },
      { name: 'PyTorch & Scikit-Learn', level: 85, icon: 'BrainCircuit' },
      { name: 'Prompt Security & Risk Mitigation', level: 90, icon: 'ShieldCheck' }
    ]
  },
  {
    title: 'Frontend Architecture & Creative Web',
    skills: [
      { name: 'React 19 / Next.js 14+', level: 96, icon: 'Code' },
      { name: 'TypeScript & State Engines', level: 94, icon: 'FileCode' },
      { name: 'Tailwind CSS v4 & Glassmorphism UI', level: 98, icon: 'Palette' },
      { name: 'HTML5 Canvas & Motion FX', level: 88, icon: 'Sparkles' }
    ]
  },
  {
    title: 'Backend Systems & Cloud Infrastructure',
    skills: [
      { name: 'Python FastAPI & Node.js', level: 92, icon: 'Server' },
      { name: 'PostgreSQL, Redis & Vector DBs', level: 88, icon: 'Database' },
      { name: 'Docker, CI/CD & Cloudflare/Vercel', level: 90, icon: 'Cloud' },
      { name: 'REST APIs & GraphQL', level: 91, icon: 'Layers' }
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    period: '2025 - Present',
    role: 'Lead AI Design Engineer',
    company: 'Antigravity Innovation Labs',
    description: 'Pioneering autonomous multi-agent development workflows and next-generation interactive web platforms powered by Gemini 3.',
    highlights: ['Built enterprise agentic pipelines reducing development cycle times by 65%', 'Architected award-nominated WebGL & React visual web applications']
  },
  {
    period: '2023 - 2025',
    role: 'Senior Full Stack & Security Engineer',
    company: 'Cloud Integrity Systems',
    description: 'Designed zero-trust microservice API proxies and high-throughput real-time security analytical dashboards.',
    highlights: ['Scaled API gateway data plane to handle over 100k requests/minute', 'Led frontend overhaul of high-risk legal analytics platform']
  },
  {
    period: '2021 - 2023',
    role: 'Creative Web Developer',
    company: 'Nexus Interactive Agency',
    description: 'Crafted bespoke digital experiences and brand websites for Fortune 500 tech clients.',
    highlights: ['Won 3 Awwwards SOTD honors for interactive motion design', 'Integrated headless CMS systems with zero-bundle-bloat frameworks']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'building-award-winning-portfolios-with-google-antigravity',
    title: 'Building Award-Winning Portfolios with Google Antigravity Agentic AI',
    excerpt: 'How autonomous AI coding agents, multi-model selection (Gemini 3 + Claude), and structured CIP specs transform personal brand engineering.',
    date: 'Aug 04, 2026',
    readTime: '6 min read',
    category: 'AI Engineering',
    tags: ['Google Antigravity', 'Gemini 3', 'Web Dev']
  },
  {
    id: '2',
    slug: 'mastering-glassmorphism-tailwind-v4-modern-web',
    title: 'Mastering Dark Mode Glassmorphism with Tailwind CSS v4',
    excerpt: 'Deep dive into JIT CSS variables, backdrop filters, micro-interactions, and hardware-accelerated animations for ultra-sleek UI design.',
    date: 'Jul 28, 2026',
    readTime: '5 min read',
    category: 'UI/UX Design',
    tags: ['Tailwind CSS', 'CSS Glassmorphism', 'Design System']
  },
  {
    id: '3',
    slug: 'sub-10ms-security-gateway-python-fastapi-redis',
    title: 'Architecting Sub-10ms Security Gateways with FastAPI & Redis',
    excerpt: 'Lessons learned building the Runtime Integrity Guard (RIG) proxy data plane to intercept LLM injection attempts in real-time.',
    date: 'Jul 15, 2026',
    readTime: '8 min read',
    category: 'Backend & Cloud',
    tags: ['FastAPI', 'Redis', 'Python', 'Security']
  }
];
