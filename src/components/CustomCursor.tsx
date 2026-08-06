import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for liquid lag feel
  const springConfig = { stiffness: 180, damping: 18 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    // Hide default cursor on desktop
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest('a, button, input, textarea, [role="button"], [data-cursor-hover]');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovered ? 1.6 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
    >
      {/* Outer Liquid Glass Ring */}
      <div
        className={`w-10 h-10 rounded-full transition-all duration-300 ${
          isHovered
            ? 'bg-white/15 border-white/70 shadow-[0_0_25px_rgba(255,255,255,0.35)] backdrop-blur-md'
            : 'bg-white/[0.08] border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-sm'
        }`}
        style={{
          borderWidth: '1.5px',
          borderStyle: 'solid',
          backdropFilter: isHovered ? 'blur(10px) saturate(180%)' : 'blur(8px) saturate(150%)',
          WebkitBackdropFilter: isHovered ? 'blur(10px) saturate(180%)' : 'blur(8px) saturate(150%)',
        }}
      >
        {/* Inner Liquid Core Dot */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            isHovered ? 'w-2.5 h-2.5 bg-white/80 shadow-[0_0_10px_#1E90FF]' : 'w-1.5 h-1.5 bg-white/50'
          }`}
        />
      </div>
    </motion.div>
  );
};
