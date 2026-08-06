import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContactButton } from './Buttons';
import { AnimatedText, FadeIn } from './MotionUtils';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const paragraphText =
    "Artificial Intelligence and Data Science undergraduate with a versatile foundation spanning cybersecurity and SOC operations, Microsoft Azure cloud infrastructure, DevOps automation, and Generative AI application engineering. I've analyzed security logs and led incident response through the Deloitte Cybersecurity Job Simulation, provisioned Azure resources with Terraform, and built CI/CD pipelines with GitHub Actions and Docker. Let's build something secure and intelligent together!";

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-[#0C0C0C] min-h-screen w-full flex flex-col items-center justify-between relative px-6 md:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* 4 Corner Technical 3D Glass Assets */}
      
      {/* 1. Top-Left: 3D Glossy Cloud (Azure / Oracle Cloud) */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10"
      >
        <motion.img
          src="/3d_tech_cloud.png"
          alt="3D Cloud Icon"
          className="w-full h-auto drop-shadow-2xl mix-blend-screen"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-30, 30]),
            rotate: useTransform(scrollYProgress, [0, 1], [-15, 15]),
          }}
        />
      </FadeIn>

      {/* 2. Top-Right: 3D Glossy Shield (Cybersecurity / SOC) */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10"
      >
        <motion.img
          src="/3d_tech_shield.png"
          alt="3D Shield Icon"
          className="w-full h-auto drop-shadow-2xl mix-blend-screen"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [30, -30]),
            rotate: useTransform(scrollYProgress, [0, 1], [15, -15]),
          }}
        />
      </FadeIn>

      {/* 3. Bottom-Left: 3D Code Brackets (Python / DevOps Automation) */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10"
      >
        <motion.img
          src="/3d_tech_code.png"
          alt="3D Code Brackets Icon"
          className="w-full h-auto drop-shadow-2xl mix-blend-screen"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [30, -30]),
            rotate: useTransform(scrollYProgress, [0, 1], [-20, 20]),
          }}
        />
      </FadeIn>

      {/* 4. Bottom-Right: 3D Microchip / CPU (AI / GenAI) */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10"
      >
        <motion.img
          src="/3d_tech_chip.png"
          alt="3D Microchip Icon"
          className="w-full h-auto drop-shadow-2xl mix-blend-screen"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-30, 30]),
            rotate: useTransform(scrollYProgress, [0, 1], [20, -20]),
          }}
        />
      </FadeIn>

      {/* Center Top: Giant "ABOUT ME" Heading */}
      <div className="w-full text-center z-20 pt-4 sm:pt-8">
        <h2 className="hero-heading font-black uppercase tracking-tight text-[6vw] sm:text-[5.5vw] md:text-[5vw] lg:text-[4.5vw] leading-none select-none">
          ABOUT ME
        </h2>
      </div>

      {/* Center Middle: Content Paragraph */}
      <div className="max-w-3xl w-full text-center z-20 my-6 sm:my-8 px-4 flex justify-center">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#D7E2EA] leading-relaxed tracking-wide text-center">
          <AnimatedText text={paragraphText} />
        </div>
      </div>

      {/* Center Bottom: Contact Me Pill Button */}
      <div className="z-20 pt-4 sm:pt-6 pb-6 sm:pb-12">
        <ContactButton label="Contact Me" onClick={scrollToContact} />
      </div>
    </section>
  );
};
