"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Casos de estudo que demonstram minha capacidade de resolver problemas complexos 
            e entregar soluções escaláveis e seguras.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback para placeholder se a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-6xl text-gray-400 dark:text-gray-600">
                  📱
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Destaque
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <Eye className="mr-2" size={16} />
                    Ver Mais
                  </button>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeProjectModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🎯 Problema
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    💡 Solução
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    📈 Impacto
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🛠️ Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 font-medium"
                    >
                      <Github className="mr-2" size={20} />
                      Ver Código
                    </a>
                  )}
                  
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="mr-2" size={20} />
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