'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import TouchGestures from '@/components/ui/TouchGestures';
import AdvancedLoading from '@/components/ui/AdvancedLoading';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [showMorphing, setShowMorphing] = useState(false);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Ativar sistemas avançados após carregamento
      setTimeout(() => setShowParticles(true), 500);
      setTimeout(() => setShowMorphing(true), 1000);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <main className='min-h-screen overflow-x-hidden relative'>
        {/* Navbar com glassmorphism avançado */}
        <Navbar />

        {/* Loading Avançado */}
        <AdvancedLoading
          isLoading={isLoading}
          skeleton={
            <div className='min-h-screen flex items-center justify-center'>
              <div className='text-center space-y-6'>
                <div className='w-24 h-24 mx-auto'>
                  <div className='w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse' />
                </div>
                <div className='space-y-3'>
                  <div className='w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                  <div className='w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                </div>
              </div>
            </div>
          }
        >
          {/* Hero Section com Touch Gestures */}
          <TouchGestures
            onSwipe={direction => {
              // Navegar para seções baseado no swipe
              if (direction === 'down') {
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' });
              } else if (direction === 'up') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            onDoubleTap={() => {
              // Ação especial no double tap
            }}
          >
            <HeroSection
              showParticles={showParticles}
              showMorphing={showMorphing}
            />
          </TouchGestures>

          {/* About Section */}
          <AboutSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Contact Section */}
          <ContactSection />
        </AdvancedLoading>

        {/* Footer com ícones SVG reais */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
