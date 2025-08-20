"use client";

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations';

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            O Que Dizem Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Depoimentos de colegas, clientes e parceiros que confiaram em meu trabalho.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={scaleIn}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-4xl text-blue-200 dark:text-blue-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: (index * 0.1) + (i * 0.1) }}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Summary */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🤝 Confiança Construída com Resultados
            </h3>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-6">
              Cada depoimento representa um projeto bem-sucedido e uma relação de confiança 
              estabelecida através de entregas consistentes e de alta qualidade.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200">100%</div>
                <div className="text-sm text-green-100">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">50+</div>
                <div className="text-sm text-blue-100">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200">8+</div>
                <div className="text-sm text-green-100">Anos</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 