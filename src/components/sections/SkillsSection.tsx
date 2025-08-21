'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skills } from '@/data/skills';
import { getTechIcon } from '@/utils/techIcons';
import { useState } from 'react';
import Image from 'next/image';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
      case 'Integrations':
        return '🔗';
      case 'Testing':
        return '🧪';
      case 'Management':
        return '📊';
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
      case 'Integrations':
        return 'from-indigo-500 to-blue-500';
      case 'Testing':
        return 'from-orange-500 to-red-500';
      case 'Management':
        return 'from-teal-500 to-green-500';
      case 'Tools':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section
      id='skills'
      className='py-20 gradient-bg-card dark:gradient-bg-card-dark relative overflow-hidden'
    >
      {/* Background elements com parallax */}
      <motion.div
        style={{ y: y1 }}
        className='absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl'
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-green-500/10 rounded-full blur-3xl'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold gradient-text-brand mb-6'>
            Habilidades Técnicas
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto'>
            Stack tecnológico completo para desenvolvimento Full Stack, desde
            backend robusto com Laravel até frontend moderno com React, sempre
            aliado a ferramentas de gestão de projetos e qualidade de código.
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-6 shadow-lg' />
        </motion.div>

        {/* Skills by Category com efeitos de partículas */}
        <motion.div
          variants={staggerContainer}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='space-y-12'
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              initial='initial'
              animate={isVisible ? 'animate' : 'animate'}
              transition={{ delay: categoryIndex * 0.1 }}
              className='relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 group'
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Partículas orbitais */}
              <div className='absolute inset-0 overflow-hidden rounded-2xl pointer-events-none'>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className='absolute top-1/2 left-1/2 w-32 h-32 border border-blue-400/20 rounded-full'
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full'
                    style={{
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className='absolute top-1/2 left-1/2 w-24 h-24 border border-purple-400/20 rounded-full'
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full'
                    style={{
                      transform: 'translate(50%, 50%)',
                    }}
                  />
                </motion.div>
              </div>

              <div className='flex items-center mb-8 relative z-10'>
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className='text-2xl'>{getCategoryIcon(category)}</span>
                </motion.div>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  {category}
                </h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10'>
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className='relative group/skill'
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      {/* Efeito de energia ao hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm'
                        />
                      )}

                      <div
                        className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300'
                        style={{ minHeight: '140px' }}
                      >
                        <div className='flex items-center justify-between mb-3'>
                          <div className='flex items-center gap-3 min-w-0'>
                            <div className='w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                              <Image
                                src={getTechIcon(skill.icon)}
                                alt={skill.name}
                                width={20}
                                height={20}
                                className='w-5 h-5 object-contain'
                              />
                              {/* Fallback icon */}
                              <span className='hidden text-lg text-gray-500'>
                                💻
                              </span>
                            </div>
                            <span className='font-semibold text-gray-900 dark:text-white text-sm truncate'>
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)} flex-shrink-0`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p className='text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2'>
                          {skill.description}
                        </p>

                        {/* Barra de progresso animada */}
                        <div className='mt-auto'>
                          <div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  skill.level === 'Avançado'
                                    ? '90%'
                                    : skill.level === 'Intermediário'
                                      ? '65%'
                                      : '40%',
                              }}
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.1,
                                ease: 'easeOut',
                              }}
                              className={`h-2 rounded-full ${
                                skill.level === 'Avançado'
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                                  : skill.level === 'Intermediário'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                    : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
