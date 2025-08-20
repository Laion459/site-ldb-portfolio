import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Backend Engineer',
    period: '2022 - Presente',
    description: 'Liderando desenvolvimento de APIs escaláveis e sistemas distribuídos para clientes enterprise',
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Kubernetes'],
    achievements: [
      'Reduziu tempo de resposta das APIs em 70% através de otimizações de banco e cache',
      'Implementou arquitetura de microserviços que suporta 1M+ usuários simultâneos',
      'Mentorou 5 desenvolvedores juniores, elevando qualidade do código da equipe',
    ],
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Desenvolveu MVP para startup de fintech, focando em segurança e escalabilidade',
    technologies: ['Laravel', 'MySQL', 'Redis', 'Vue.js', 'Docker', 'AWS'],
    achievements: [
      'Construiu sistema de pagamentos PCI DSS compliant em 6 meses',
      'Implementou autenticação multi-fator que eliminou 100% dos ataques de força bruta',
      'Otimizou queries de banco reduzindo tempo de carregamento em 80%',
    ],
  },
  {
    id: '3',
    company: 'Digital Agency ABC',
    position: 'Backend Developer',
    period: '2018 - 2020',
    description: 'Desenvolveu APIs REST e sistemas de backend para clientes de diversos setores',
    technologies: ['PHP', 'MySQL', 'Laravel', 'Redis', 'Docker'],
    achievements: [
      'Desenvolveu 15+ APIs REST para diferentes clientes',
      'Implementou sistema de cache que melhorou performance em 60%',
      'Criou documentação técnica que reduziu tempo de onboarding em 40%',
    ],
  },
  {
    id: '4',
    company: 'Freelance',
    position: 'Full Stack Developer',
    period: '2016 - 2018',
    description: 'Projetos independentes focados em e-commerce e sistemas de gestão',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'jQuery'],
    achievements: [
      'Desenvolveu 8 sistemas de e-commerce para pequenas empresas',
      'Implementou soluções de pagamento online para 5 clientes',
      'Criou sistema de gestão de estoque que automatizou 90% dos processos',
    ],
  },
]; 