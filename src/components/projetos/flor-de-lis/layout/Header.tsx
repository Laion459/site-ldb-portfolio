'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/flor-de-lis/services';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const navigation = [
    { name: 'Início', href: '/projetos/flor-de-lis' },
    { name: 'História', href: '/projetos/flor-de-lis/historico' },
    { name: 'Serviços', href: '/projetos/flor-de-lis/servicos' },
    { name: 'Blog', href: '/projetos/flor-de-lis/blog' },
    { name: 'Contato', href: '/projetos/flor-de-lis/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link
            href='/projetos/flor-de-lis'
            className='flex items-center space-x-3'
          >
            <Image
              src='/images/flor-de-lis/White and Black Minimalist Salon Logo 1.webp'
              alt='Estética Flor de Lis'
              width={180}
              height={60}
              className='h-12 w-auto rounded-full border-2 border-yellow-400 shadow-lg'
            />
            <div className='hidden md:block'>
              <h1 className='text-xl font-playfair font-bold text-salon-darkPink'>
                Estética Flor de Lis
              </h1>
              <p className='text-sm text-gray-600'>Beleza & Bem-estar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className='relative'>
              <button
                onClick={toggleServices}
                className='flex items-center space-x-1 text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4'
                  >
                    <div className='grid grid-cols-2 gap-2 px-4'>
                      {services.slice(0, 8).map(service => (
                        <Link
                          key={service.id}
                          href={`/projetos/flor-de-lis/servicos#${service.id}`}
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-salon-lightPink transition-colors duration-300'
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={40}
                            height={40}
                            className='w-10 h-10 rounded-lg object-cover'
                          />
                          <div>
                            <p className='font-medium text-gray-800 text-sm'>
                              {service.title}
                            </p>
                            <p className='text-xs text-gray-500'>
                              {service.duration}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className='mt-4 pt-4 border-t border-gray-100 px-4'>
                      <Link
                        href='/projetos/flor-de-lis/servicos'
                        className='block text-center text-salon-pink hover:text-salon-darkPink font-medium transition-colors duration-300'
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Ver todos os serviços →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href='/projetos/flor-de-lis/contato'
              className='bg-salon-pink text-white px-6 py-3 rounded-lg hover:bg-salon-darkPink transition-colors duration-300 font-medium'
            >
              Agendar Horário
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='lg:hidden p-2 text-gray-700 hover:text-salon-pink transition-colors duration-300'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-white border-t border-gray-100'
            >
              <nav className='py-6 space-y-4'>
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='block px-4 py-3 text-gray-700 hover:text-salon-pink hover:bg-salon-lightPink transition-colors duration-300 font-medium'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className='px-4 py-3'>
                  <h3 className='font-medium text-gray-800 mb-3'>Serviços</h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {services.slice(0, 6).map(service => (
                      <Link
                        key={service.id}
                        href={`/projetos/flor-de-lis/servicos#${service.id}`}
                        className='flex items-center space-x-2 p-2 rounded-lg hover:bg-salon-lightPink transition-colors duration-300'
                        onClick={() => setIsOpen(false)}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={32}
                          height={32}
                          className='w-8 h-8 rounded object-cover'
                        />
                        <span className='text-sm text-gray-700'>
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className='px-4 pt-4'>
                  <Link
                    href='/projetos/flor-de-lis/contato'
                    className='block w-full bg-salon-pink text-white text-center py-3 rounded-lg hover:bg-salon-darkPink transition-colors duration-300 font-medium'
                    onClick={() => setIsOpen(false)}
                  >
                    Agendar Horário
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
