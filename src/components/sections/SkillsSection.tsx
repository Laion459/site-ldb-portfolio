"use client";

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avançado':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg';
      case 'Intermediário':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg';
      case 'Básico':
        return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return '🎨';
      case 'Backend':
        return '⚙️';
      case 'Database':
        return '🗄️';
      case 'DevOps':
        return '🚀';
      case 'Tools':
        return '🛠️';
      default:
        return '💻';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-pink-500 to-rose-500';
      case 'Backend':
        return 'from-blue-500 to-cyan-500';
      case 'Database':
        return 'from-green-500 to-emerald-500';
      case 'DevOps':
        return 'from-purple-500 to-violet-500';
      case 'Tools':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 gradient-bg-card dark:gradient-bg-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-brand mb-6">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-6 shadow-lg"></div>
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="space-y-12"
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              initial="initial"
              animate={isVisible ? "animate" : "animate"}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                  <span className="text-2xl">{getCategoryIcon(category)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id || skill.name}
                      variants={fadeInUp}
                      initial="initial"
                      animate={isVisible ? "animate" : "initial"}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                      }}
                      className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600"
                    >
                      {/* Skill Icon/Logo */}
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {skill.icon ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8"
                          />
                        ) : (
                          <span className="text-2xl">💻</span>
                        )}
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {skill.name}
                      </h4>

                      {/* Skill Level */}
                      <div className="mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill Description */}
                      {skill.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {skill.description}
                        </p>
                      )}

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
            <h3 className="text-2xl font-bold gradient-text-accent mb-4">
              Sempre Aprendendo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Estou constantemente explorando novas tecnologias e metodologias para manter-me atualizado 
              com as melhores práticas da indústria e entregar soluções de ponta.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                🚀 Em constante evolução
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                📚 Aprendizado contínuo
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                💡 Inovação constante
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 