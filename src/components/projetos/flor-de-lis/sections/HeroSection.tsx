'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { carouselImages } from '@/data/flor-de-lis/carousel';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className='relative h-screen overflow-hidden'>
      {/* Carousel */}
      <div className='relative w-full h-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className='absolute inset-0'
          >
            <Image
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              fill
              className='object-cover'
              priority
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-30' />

            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center text-white z-10'
              >
                <h1 className='font-playfair text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg'>
                  {carouselImages[currentSlide].title}
                </h1>
                <p className='text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto'>
                  Mais de 25 anos de experiência em beleza e bem-estar
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn-primary text-lg px-8 py-4'
                >
                  Agende seu Horário
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110'
        >
          <ChevronRight className='w-6 h-6' />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className='absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110'
        >
          {isPlaying ? (
            <Pause className='w-5 h-5' />
          ) : (
            <Play className='w-5 h-5' />
          )}
        </button>

        {/* Dots Indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3'>
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className='absolute bottom-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm'>
          {currentSlide + 1} / {carouselImages.length}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white'
      >
        <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-3 bg-white rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  );
}
