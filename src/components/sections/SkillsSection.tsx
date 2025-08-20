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
        return 'bg-green-500 text-white';
      case 'Intermediário':
        return 'bg-yellow-500 text-white';
      case 'Básico':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
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

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
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
              animate={isVisible ? "animate" : "initial"}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{getCategoryIcon(category)}</span>
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
                      className="group relative bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      {/* Skill Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon === 'react' && '⚛️'}
                        {skill.icon === 'nextjs' && '▲'}
                        {skill.icon === 'typescript' && '📘'}
                        {skill.icon === 'tailwind' && '🎨'}
                        {skill.icon === 'vue' && '💚'}
                        {skill.icon === 'nodejs' && '🟢'}
                        {skill.icon === 'laravel' && '🔴'}
                        {skill.icon === 'python' && '🐍'}
                        {skill.icon === 'java' && '☕'}
                        {skill.icon === 'golang' && '🔵'}
                        {skill.icon === 'postgresql' && '🐘'}
                        {skill.icon === 'mysql' && '🐬'}
                        {skill.icon === 'mongodb' && '🍃'}
                        {skill.icon === 'redis' && '🔴'}
                        {skill.icon === 'docker' && '🐳'}
                        {skill.icon === 'kubernetes' && '☸️'}
                        {skill.icon === 'aws' && '☁️'}
                        {skill.icon === 'cicd' && '🔄'}
                        {skill.icon === 'git' && '📚'}
                        {skill.icon === 'linux' && '🐧'}
                        {skill.icon === 'postman' && '📮'}
                        {skill.icon === 'vscode' && '💻'}
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {skill.name}
                      </h4>

                      {/* Skill Level */}
                      <div className="flex items-center justify-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Foco em Resultados
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Cada tecnologia é escolhida estrategicamente para resolver problemas específicos. 
              Minha abordagem combina ferramentas consolidadas com inovações para entregar 
              soluções que realmente funcionam em produção.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 