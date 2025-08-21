'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/testimonials';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  return (
    <section className='py-20 bg-white dark:bg-gray-900 relative overflow-hidden'>
      {/* Background elements com parallax */}
      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl'
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            O Que Dizem Sobre Mim
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            Depoimentos de colegas, clientes e parceiros que confiaram em meu
            trabalho.
          </p>
          <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6' />
        </motion.div>

        {/* Carousel 3D Container */}
        <div className='relative max-w-5xl mx-auto'>
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700'
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700'
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonials Carousel */}
          <div className='relative h-96 overflow-hidden'>
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;

              return (
                <motion.div
                  key={testimonial.id}
                  className='absolute inset-0 flex items-center justify-center'
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : isPrev || isNext ? 0.8 : 0.6,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.6 : 0.3,
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    zIndex: isActive ? 10 : isPrev || isNext ? 5 : 1,
                    rotateY: isActive ? 0 : isPrev ? -15 : isNext ? 15 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <motion.div
                    className='w-full max-w-2xl mx-auto'
                    whileHover={{
                      scale: isActive ? 1.02 : 1,
                      y: isActive ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative group'>
                      {/* Efeito de brilho no hover */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        whileHover={{ opacity: 1 }}
                      />

                      {/* Quote Icon com animação */}
                      <motion.div
                        className='absolute top-6 right-6 text-4xl text-blue-200 dark:text-blue-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300'
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        &ldquo;
                      </motion.div>

                      {/* Content */}
                      <div className='relative z-10'>
                        <motion.p
                          className='text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          &ldquo;{testimonial.content}&rdquo;
                        </motion.p>

                        {/* Author com efeitos 3D */}
                        <div className='flex items-center gap-4'>
                          <motion.div
                            className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg'
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {testimonial.name.charAt(0)}
                          </motion.div>
                          <div>
                            <h4 className='font-semibold text-gray-900 dark:text-white'>
                              {testimonial.name}
                            </h4>
                            <p className='text-blue-600 dark:text-blue-400 font-medium'>
                              {testimonial.role}
                            </p>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                              {testimonial.company}
                            </p>
                          </div>
                        </div>

                        {/* Rating com estrelas animadas */}
                        <div className='flex items-center gap-1 mt-4'>
                          {[1, 2, 3, 4, 5].map(starNumber => (
                            <motion.div
                              key={`star-${starNumber}`}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: 0.3 + starNumber * 0.1,
                                type: 'spring',
                                stiffness: 200,
                              }}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              className='w-4 h-4 text-yellow-400'
                            >
                              <Star className='w-full h-full fill-current' />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className='flex justify-center mt-8 space-x-2'>
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={`dot-${testimonial.name}`}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <motion.div
            className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400'
            animate={{ opacity: isAutoPlaying ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}
            />
            <span>
              {isAutoPlaying ? 'Auto-play ativo' : 'Auto-play pausado'}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
