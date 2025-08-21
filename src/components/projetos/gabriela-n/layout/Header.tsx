'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200'>
      <div className='container-custom px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link
            href='/projetos/gabriela-n'
            className='flex items-center space-x-3'
          >
            <Image
              src='/images/gabriela-n/logo.webp'
              alt='Gabriela N - Colorist Hair'
              width={120}
              height={40}
              className='h-10 w-auto rounded-full border-2 border-yellow-400 shadow-lg'
            />
            <div className='hidden md:block'>
              <h1 className='text-xl font-playfair font-bold text-gray-800'>
                Gabriela N
              </h1>
              <p className='text-sm text-gray-600'>Colorist Hair</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            <Link
              href='/projetos/gabriela-n#principal'
              className='text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
            >
              Principal
            </Link>
            <Link
              href='/projetos/gabriela-n#sobre'
              className='text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
            >
              Sobre
            </Link>
            <Link
              href='/projetos/gabriela-n#portfolio'
              className='text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
            >
              Portfólio
            </Link>
            <Link
              href='/projetos/gabriela-n#productos'
              className='text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
            >
              Productos
            </Link>
            <Link
              href='/projetos/gabriela-n#contato'
              className='text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium'
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className='hidden lg:block'>
            <a
              href='https://wa.me/543755698271'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-salon-pink text-white px-6 py-3 rounded-lg hover:bg-salon-darkPink transition-colors duration-300 font-medium'
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='lg:hidden p-2 text-gray-700 hover:text-salon-pink transition-colors duration-300'
            aria-label='Abrir Menu'
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden border-t border-gray-200'>
            <nav className='py-4 space-y-2'>
              <Link
                href='/projetos/gabriela-n#principal'
                onClick={closeMenu}
                className='block px-4 py-3 text-gray-700 hover:text-salon-pink hover:bg-salon-lightPink transition-colors duration-300 font-medium'
              >
                Principal
              </Link>
              <Link
                href='/projetos/gabriela-n#sobre'
                onClick={closeMenu}
                className='block px-4 py-3 text-gray-700 hover:text-salon-pink hover:bg-salon-lightPink transition-colors duration-300 font-medium'
              >
                Sobre
              </Link>
              <Link
                href='/projetos/gabriela-n#portfolio'
                onClick={closeMenu}
                className='block px-4 py-3 text-gray-700 hover:text-salon-pink hover:bg-salon-lightPink transition-colors duration-300 font-medium'
              >
                Portfólio
              </Link>
              <Link
                href='/projetos/gabriela-n#productos'
                onClick={closeMenu}
                className='block px-4 py-3 text-gray-700 hover:text-salon-pink hover:bg-salon-lightPink transition-colors duration-300 font-medium'
              >
                Productos
              </Link>
              <Link
                href='/projetos/gabriela-n#contato'
                onClick={closeMenu}
                className='block px-4 py-3 text-gray-700 hover:text-salon-pink hover:bg-salon-lightPink transition-colors duration-300 font-medium'
              >
                Contacto
              </Link>
              <div className='px-4 py-3'>
                <a
                  href='https://wa.me/543755698271'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full bg-salon-pink text-white text-center py-3 rounded-lg hover:bg-salon-darkPink transition-colors duration-300 font-medium'
                >
                  Agendar Cita
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
