'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION, SOCIAL_LINKS } from '@/utils/constants';
import { useTheme } from '@/components/ui/ThemeProvider';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
          </svg>
        );
      case 'instagram':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
          </svg>
        );
      case 'mail':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z' />
          </svg>
        );
      default:
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16l-4-4 1.414-1.414L10 14.172l7.586-7.586L19 8l-9 8z' />
          </svg>
        );
    }
  };

  return (
    <footer className='bg-gray-900 dark:bg-black text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-6'
            >
              <h3 className='text-2xl font-bold text-blue-400 mb-4'>
                {SITE_CONFIG.name}
              </h3>
              <p className='text-gray-300 leading-relaxed max-w-md'>
                {SITE_CONFIG.description}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='flex gap-4'
            >
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 group'
                >
                  <span className='text-lg group-hover:scale-110 transition-transform duration-200'>
                    {getSocialIcon(social.icon)}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className='text-lg font-semibold text-white mb-4'>Navegação</h4>
            <ul className='space-y-3'>
              {NAVIGATION.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className='text-lg font-semibold text-white mb-4'>Contato</h4>
            <div className='space-y-3'>
              <p className='text-gray-300'>
                <span className='text-blue-400'>Email:</span>
                <br />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className='text-gray-300'>
                <span className='text-blue-400'>Localização:</span>
                <br />
                Florianópolis - SC, Brasil
              </p>
              <p className='text-gray-300'>
                <span className='text-blue-400'>Disponibilidade:</span>
                <br />
                Remoto / Presencial
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='border-t border-gray-800 pt-8'
        >
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            {/* Copyright */}
            <div className='text-center md:text-left'>
              <p className='text-gray-400 text-sm'>
                © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os
                direitos reservados.
              </p>
              <p className='text-gray-500 text-xs mt-1'>
                Feito com <Heart className='inline w-3 h-3 text-red-500' /> e
                muito código
              </p>
            </div>

            {/* Theme Toggle & Back to Top */}
            <div className='flex items-center gap-4'>
              <button
                onClick={toggleTheme}
                className='p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200'
                aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>

              <button
                onClick={scrollToTop}
                className='p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-200 hover:scale-110'
                aria-label='Voltar ao topo'
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className='absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl' />
      <div className='absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl' />
    </footer>
  );
};

export default Footer;
