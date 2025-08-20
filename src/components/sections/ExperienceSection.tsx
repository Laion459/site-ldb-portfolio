"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import { experience } from '@/data/experience';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '@/utils/animations';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Jornada focada em entregar produtos completos e impacto mensurável, combinando excelência técnica 
            com visão de negócio e capacidade de entrega rápida em cada projeto.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-800 h-full hidden lg:block"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden lg:block z-10"></div>

              {/* Content */}
              <div className={`lg:w-5/12 ${
                index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Award size={16} />
                      Principais Conquistas
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Highlight */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Impacto Mensurável</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-300 mt-2">
                      Cada conquista foi medida e documentada, demonstrando valor real para o negócio.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Pronto para o Próximo Desafio
            </h3>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-6">
              Com experiência comprovada em desenvolvimento Full Stack e visão de Product Manager, estou sempre 
              buscando novos desafios que me permitam aplicar minhas habilidades técnicas e de gestão de produtos 
              em projetos estratégicos de alto impacto.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Vamos Conversar
              <span className="ml-2">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 