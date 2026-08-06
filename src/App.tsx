import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollIndicator } from './components/ScrollIndicator';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip min-h-screen">
      <CustomCursor />
      <ScrollIndicator />
      <main className="w-full overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
