'use client';

import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects } from '@/data/projects';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id='projects'
      className='py-20 gradient-bg-card dark:gradient-bg-card-dark relative overflow-hidden'
    >
      {/* Background elements com parallax */}
      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl'
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold gradient-text-accent mb-6'>
            Projetos em Destaque
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto'>
            Produtos completos e soluções reais que demonstram minha capacidade
            de transformar ideias em sistemas funcionais, desde a concepção até
            a implementação, sempre com visão de produto e foco no usuário.
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mx-auto rounded-full mt-6 shadow-lg' />
        </motion.div>

        {/* Projects Grid com efeitos de energia */}
        <motion.div
          variants={staggerContainer}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              initial='initial'
              animate={isVisible ? 'animate' : 'initial'}
              transition={{ delay: index * 0.1 }}
              className='group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-accent'
              whileHover={{
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25)',
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Efeito de energia ao hover */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-sm z-10'
                />
              )}

              {/* Partículas de energia */}
              <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                <motion.div
                  animate={{
                    x: [0, 20, -20, 0],
                    y: [0, -20, 20, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute top-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-60'
                />
                <motion.div
                  animate={{
                    x: [0, -15, 15, 0],
                    y: [0, 15, -15, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute top-6 right-6 w-1 h-1 bg-pink-400 rounded-full opacity-60'
                />
              </div>

              {/* Project Image */}
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-contain transition-transform duration-500 group-hover:scale-110'
                  style={{
                    objectPosition: 'center',
                    padding: '8px',
                  }}
                />
                {/* Fallback placeholder */}
                <div className='hidden absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-rose-100 dark:from-blue-900 dark:via-purple-900 dark:to-rose-900 flex items-center justify-center text-6xl text-gray-400 dark:text-gray-600'>
                  📱
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

                {/* Featured Badge com animação */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
                    className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    ⭐ Destaque
                  </motion.div>
                )}

                {/* Botões de ação com efeitos */}
                <div className='absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => openProjectModal(project)}
                    className='w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg'
                  >
                    <Eye size={16} />
                  </motion.button>

                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-lg'
                    >
                      <Github size={16} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className='p-6 relative z-20'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200'>
                  {project.title}
                </h3>

                <p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                  {project.description}
                </p>

                {/* Technologies com efeitos */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className='px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700'
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Button */}
                {project.liveUrl ? (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                  >
                    <ExternalLink size={16} />
                    Ver Site
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openProjectModal(project)}
                    className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl'
                  >
                    Ver Detalhes
                  </motion.button>
                )}
              </div>

              {/* Hover Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className='relative p-6 border-b border-gray-200 dark:border-gray-700'>
                <button
                  onClick={closeProjectModal}
                  className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200'
                >
                  <X className='h-6 w-6' />
                </button>
                <h2 className='text-3xl font-bold gradient-text-accent mb-2'>
                  {selectedProject.title}
                </h2>
                <p className='text-gray-600 dark:text-gray-400'>
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Content */}
              <div className='p-6'>
                {/* Project Image */}
                <div className='mb-6'>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={256}
                    className='w-full h-64 object-cover rounded-lg'
                  />
                </div>

                {/* Project Details */}
                <div className='grid md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                      Tecnologias Utilizadas
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.technologies.map(tech => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                      Tecnologias
                    </h3>
                    <ul className='space-y-2 text-gray-600 dark:text-gray-400'>
                      {selectedProject.technologies?.map(tech => (
                        <li
                          key={`${selectedProject.title}-tech-${tech}`}
                          className='flex items-center'
                        >
                          <span className='w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3' />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Links */}
                <div className='flex gap-4'>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2'
                    >
                      <Github className='h-5 w-5' />
                      Ver Código
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent flex items-center justify-center gap-2'
                    >
                      <ExternalLink className='h-5 w-5' />
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
