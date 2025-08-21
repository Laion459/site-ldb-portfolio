import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Keyring - App Web de Licenças',
    description:
      'Sistema completo de gerenciamento de licenças com interface moderna e funcionalidades avançadas',
    problem:
      'Necessidade de um sistema robusto para controle e distribuição de licenças de software',
    solution:
      'Desenvolvimento completo de aplicação web com Laravel, React e integração de pagamentos',
    impact:
      'Sistema em produção gerenciando centenas de licenças com interface intuitiva e relatórios detalhados',
    technologies: [
      'Laravel',
      'PHP',
      'React',
      'JavaScript',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    image: '/images/projects/keyring.webp',
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: true,
    features: [
      'Sistema de autenticação e autorização',
      'Gerenciamento completo de licenças',
      'Integração com gateway de pagamentos',
      'Dashboard administrativo',
      'Relatórios e métricas',
      'API REST para integrações',
    ],
  },
  {
    id: '2',
    title: 'ESH - Sistema de Monitoramento',
    description:
      'Sistema robusto de monitoramento e alertas para infraestrutura crítica em databases com controle granular de acesso',
    problem:
      'Falta de visibilidade em tempo real sobre o estado da infraestrutura critica e serviços',
    solution:
      'Desenvolvimento de sistema de monitoramento com dashboards, alertas e notificações',
    impact:
      'Redução significativa no tempo de resposta a incidentes e maior estabilidade dos serviços',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'JavaScript', 'CSS'],
    image: '/images/projects/esh-dashboard.png', // Usando imagem existente temporariamente
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: true,
    features: [
      'Monitoramento em tempo real',
      'Sistema de alertas inteligentes',
      'Dashboards personalizáveis',
      'Histórico de eventos',
      'Notificações por email/SMS',
      'API para integrações externas',
    ],
  },
  {
    id: '3',
    title: 'Sites Eleven Soft - Refatoração Completa',
    description:
      'Refatoração total de sites corporativos com frontend moderno e otimizações de performance',
    problem:
      'Sites legados com baixa performance, design desatualizado e dificuldade de manutenção',
    solution:
      'Reestruturação completa com React, Tailwind CSS e otimizações de SEO e performance',
    impact:
      'Melhoria de 80% na velocidade de carregamento e aumento de 150% no engajamento dos usuários',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'SEO'],
    image: '/images/projects/eleven-soft.png', // Usando imagem existente temporariamente
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: true,
    features: [
      'Design responsivo e moderno',
      'Otimização de performance',
      'SEO aprimorado',
      'Interface intuitiva',
      'Código limpo e manutenível',
      'Integração com analytics',
    ],
  },
  {
    id: '4',
    title: 'Estética Flor de Lis - Site Moderno',
    description:
      'Refatoração completa de site de salão de beleza com tecnologias modernas e design responsivo',
    problem:
      'Site legado em HTML/CSS/JS com baixa performance, design desatualizado e não responsivo',
    solution:
      'Reestruturação completa usando Next.js 15, React 19, TypeScript e Tailwind CSS 4',
    impact:
      'Site 10x mais rápido, totalmente responsivo, com SEO otimizado e interface moderna que aumenta conversões',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'Responsivo',
    ],
    image: '/images/flor-de-lis/White and Black Minimalist Salon Logo 1.png', // Usando imagem existente temporariamente
    githubUrl: undefined,
    liveUrl: '/projetos/flor-de-lis',
    featured: true,
    features: [
      'Refatoração completa para stack moderna',
      'Design responsivo mobile-first',
      'Carrossel de imagens interativo',
      'Navegação com dropdown de serviços',
      'Integração com Google Maps',
      'Performance e SEO otimizados',
    ],
  },
  {
    id: '5',
    title: 'Gabriela N - Colorist Hair',
    description:
      'Site moderno para especialista em colorimetria com formação internacional',
    problem:
      'Site legado em HTML/CSS/JS com design desatualizado e não responsivo',
    solution:
      'Refatoração completa usando Next.js 15, React 19, TypeScript e Tailwind CSS 4',
    impact:
      'Site totalmente responsivo, com SEO otimizado e interface moderna que destaca a especialização em colorimetria',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'Responsivo',
    ],
    image: '/images/gabriela-n/logo.webp', // Usando imagem existente temporariamente
    githubUrl: undefined,
    liveUrl: '/projetos/gabriela-n',
    featured: true,
    features: [
      'Refatoração completa para stack moderna',
      'Design responsivo mobile-first',
      'Galeria de portfólio interativa',
      'Seção de marcas de produtos',
      'Integração com Google Maps',
      'Performance e SEO otimizados',
    ],
  },
  {
    id: '6',
    title: 'Sistema de Integração de Pagamentos e ERP',
    description:
      'Solução completa para processamento de pagamentos online com múltiplas formas de pagamento e integração com ERP',
    problem:
      'Necessidade de sistema seguro e confiável para processar pagamentos de clientes e integração com ERP',
    solution:
      'Implementação de gateway de pagamentos com autenticação, criptografia e auditoria completa e integração com ERP',
    impact:
      'Processamento seguro de milhares de transações com 99.9% de sucesso e compliance PCI e integração com ERP',
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Redis',
      'JavaScript',
      'APIs REST',
    ],
    image: '/images/projects/integracoes-pagamentos.jpg',
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: false,
    features: [
      'Múltiplas formas de pagamento',
      'Autenticação segura',
      'Criptografia de dados',
      'Auditoria completa',
      'Relatórios financeiros',
      'Integração com sistemas externos',
    ],
  },
  {
    id: '7',
    title: 'Painéis de Métricas e Dashboards',
    description:
      'Sistema de visualização de dados em tempo real com gráficos interativos e relatórios',
    problem:
      'Falta de visibilidade sobre métricas críticas do negócio e performance dos sistemas',
    solution:
      'Desenvolvimento de dashboards personalizados com gráficos, filtros e exportação de dados',
    impact:
      'Tomada de decisão baseada em dados em tempo real, melhorando eficiência operacional',
    technologies: [
      'React',
      'JavaScript',
      'Chart.js',
      'CSS',
      'APIs REST',
      'WebSockets',
    ],
    image: '/images/projects/keyring.webp', // Usando imagem existente temporariamente
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: false,
    features: [
      'Gráficos interativos',
      'Filtros avançados',
      'Exportação de dados',
      'Atualização em tempo real',
      'Métricas personalizáveis',
      'Responsivo para mobile',
    ],
  },
  {
    id: '8',
    title: 'CLI e Ferramentas de Desenvolvimento',
    description:
      'Ferramentas de linha de comando para automação de tarefas de desenvolvimento',
    problem:
      'Processos manuais repetitivos que consumiam tempo da equipe de desenvolvimento',
    solution:
      'Criação de CLI tools para automação de deploy, testes e tarefas administrativas',
    impact:
      'Redução de 70% no tempo de tarefas repetitivas e padronização de processos',
    technologies: ['PHP', 'Laravel', 'CLI', 'Shell Scripts', 'Docker', 'Git'],
    image: '/images/projects/keyring.webp', // Usando imagem existente temporariamente
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: false,
    features: [
      'Automação de deploy',
      'Execução de testes',
      'Geração de código',
      'Migração de bancos',
      'Backup automático',
      'Integração com CI/CD',
    ],
  },
];
