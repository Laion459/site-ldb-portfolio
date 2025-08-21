'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import { experience } from '@/data/experience';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  floating3D,
} from '@/utils/animations';
import Image from 'next/image';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id='experience'
      className='py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden'
    >
      {/* Background elements com parallax */}
      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl'
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-green-500/10 rounded-full blur-3xl'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Experiência Profissional
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto'>
            Jornada focada em entregar produtos completos e impacto mensurável,
            combinando excelência técnica com visão de negócio e capacidade de
            entrega rápida em cada projeto.
          </p>
          <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6' />
        </motion.div>

        {/* Timeline 3D com elementos flutuantes */}
        <motion.div
          variants={staggerContainer}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='relative'
        >
          {/* Timeline Line 3D */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 dark:from-blue-800 dark:via-purple-800 dark:to-cyan-800 h-full hidden lg:block'>
            {/* Elementos flutuantes na timeline */}
            <motion.div
              variants={floating3D}
              initial='initial'
              animate={isVisible ? 'animate' : 'initial'}
              className='absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-lg'
            />
            <motion.div
              variants={floating3D}
              initial='initial'
              animate={isVisible ? 'animate' : 'initial'}
              transition={{ delay: 0.5 }}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg'
            />
            <motion.div
              variants={floating3D}
              initial='initial'
              animate={isVisible ? 'animate' : 'initial'}
              transition={{ delay: 1 }}
              className='absolute top-3/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg'
            />
          </div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              initial='initial'
              animate={isVisible ? 'animate' : 'initial'}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              {/* Timeline Dot 3D */}
              <motion.div
                className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden lg:block z-10'
                whileHover={{
                  scale: 1.5,
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                  rotate: 360,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Efeito de brilho interno */}
                <div className='absolute inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80' />
              </motion.div>

              {/* Content com efeito 3D */}
              <div
                className={`lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    rotateY: index % 2 === 0 ? 2 : -2,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                  className='relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700'
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  {/* Efeito de brilho no hover */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Header com logo 3D */}
                  <div className='mb-6 relative z-10'>
                    <div className='flex items-center gap-3 mb-3'>
                      <motion.div
                        className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg overflow-hidden shadow-lg'
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.company === 'Eleven Soft' ? (
                          <>
                            <Image
                              src='/images/icons/eleven-soft.png'
                              alt='Eleven Soft Logo'
                              fill
                              className='object-cover'
                            />
                            <span className='hidden font-bold text-lg'>E</span>
                          </>
                        ) : (
                          <span>{exp.company.charAt(0)}</span>
                        )}
                      </motion.div>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                          {exp.company}
                        </h3>
                        <p className='text-blue-600 dark:text-blue-400 font-semibold'>
                          {exp.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Period & Location com ícones animados */}
                  <div className='flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 relative z-10'>
                    <motion.div
                      className='flex items-center gap-2'
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className='w-4 h-4 text-blue-500' />
                      <span>{exp.period}</span>
                    </motion.div>
                    <motion.div
                      className='flex items-center gap-2'
                      whileHover={{ scale: 1.05 }}
                    >
                      <MapPin className='w-4 h-4 text-purple-500' />
                      <span>Remoto / Brasil</span>
                    </motion.div>
                  </div>

                  {/* Description com efeito de reveal */}
                  <motion.p
                    className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Technologies com efeitos de entrada */}
                  <div className='mb-6 relative z-10'>
                    <h4 className='font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <Award className='w-4 h-4 text-yellow-500' />
                      Tecnologias Utilizadas
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={`${exp.company}-${tech}`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: index * 0.2 + techIndex * 0.1,
                            type: 'spring',
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className='px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 shadow-sm'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements com efeitos de lista */}
                  <div className='relative z-10'>
                    <h4 className='font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2'>
                      <Award className='w-4 h-4 text-green-500' />
                      Principais Conquistas
                    </h4>
                    <ul className='space-y-2'>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={`${exp.company}-achievement-${achievement}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.2 + achievementIndex * 0.1 + 0.5,
                            type: 'spring',
                          }}
                          className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400'
                        >
                          <span className='w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0' />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          transition={{ delay: 0.8 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>
              🚀 Pronto para o Próximo Desafio
            </h3>
            <p className='text-lg text-blue-100 max-w-4xl mx-auto mb-6'>
              Com experiência comprovada em desenvolvimento Full Stack e visão
              de Product Manager, estou sempre buscando novos desafios que me
              permitam aplicar minhas habilidades técnicas e de gestão de
              produtos em projetos estratégicos de alto impacto.
            </p>
            <a
              href='#contact'
              className='inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl'
            >
              Vamos Conversar
              <span className='ml-2'>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
