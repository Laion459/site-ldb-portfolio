"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio de email (substitua pela integração real com EmailJS)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      reset();
      
      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos desafiadores. 
            Entre em contato e vamos discutir como posso ajudar!
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Prefere contato direto? Aqui estão minhas principais formas de comunicação. 
                Respondo rapidamente e estou sempre disponível para uma conversa.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Telefone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Disponível via WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Localização</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Remoto / Florianópolis - SC, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    <span className="text-xl">{getSocialIcon(social.icon)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🚀 Disponibilidade
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                Atualmente disponível para novos projetos e oportunidades. 
                Resposta garantida em até 24 horas.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.name
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                    errors.message
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
                >
                  <CheckCircle size={20} />
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
                >
                  <AlertCircle size={20} />
                  Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 