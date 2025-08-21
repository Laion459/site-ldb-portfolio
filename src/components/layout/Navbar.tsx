'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { NAVIGATION, SITE_CONFIG } from '@/utils/constants';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: scrolled
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          : 'none',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo com efeito de brilho */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='relative flex items-center cursor-pointer group'
            onClick={() => scrollToSection('#home')}
          >
            {/* Efeito de brilho no logo */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100'
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <Image
              src={
                theme === 'light'
                  ? SITE_CONFIG.images.logo.light
                  : SITE_CONFIG.images.logo.dark
              }
              alt='Leonardo Portfolio'
              width={40}
              height={40}
              className='relative z-10 h-10 w-10 rounded-full object-cover transition-all duration-300 group-hover:drop-shadow-lg'
            />
            {/* Fallback para texto */}
            <span className='hidden text-2xl font-bold text-blue-600 dark:text-blue-400'>
              Leonardo
            </span>
          </motion.div>

          {/* Desktop Navigation com efeitos avançados */}
          <div className='hidden md:flex items-center space-x-8'>
            {NAVIGATION.map(item => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                className='relative text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 font-medium group'
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                {/* Linha de destaque animada */}
                <motion.div
                  className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                {/* Efeito de brilho no hover */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg'
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button com efeitos glassmorphism */}
          <div className='flex items-center space-x-4'>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className='relative p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 shadow-lg hover:shadow-xl'
              style={{
                boxShadow:
                  '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Efeito de brilho no botão */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl opacity-0 hover:opacity-100'
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className='relative z-10'>
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='md:hidden p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 shadow-lg'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'
          >
            <div className='px-4 py-4 space-y-4'>
              {NAVIGATION.map(item => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  className='block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2'
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
