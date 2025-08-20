"use client";

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
        return '🐙';
      case 'linkedin':
        return '💼';
      case 'mail':
        return '📧';
      default:
        return '🔗';
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                {SITE_CONFIG.description}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4"
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
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
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
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
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="text-blue-400">Email:</span><br />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-blue-400">Localização:</span><br />
                São Paulo, Brasil
              </p>
              <p className="text-gray-300">
                <span className="text-blue-400">Disponibilidade:</span><br />
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
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Feito com <Heart className="inline w-3 h-3 text-red-500" /> e muito código
              </p>
            </div>

            {/* Theme Toggle & Back to Top */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
                aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-200 hover:scale-110"
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer; 