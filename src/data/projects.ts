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
    image: '/images/projects/keyring.webp',
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: true,
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
      'Stripe',
      'JWT',
      'TypeScript',
      'Tailwind CSS',
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
    image: '/images/flor-de-lis/White and Black Minimalist Salon Logo 1.png', // Usando imagem existente temporariamente
    githubUrl: undefined,
    liveUrl: '/projetos/flor-de-lis',
    featured: true,
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'Responsivo',
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
    image: '/images/gabriela-n/logo.webp', // Usando imagem existente temporariamente
    githubUrl: undefined,
    liveUrl: '/projetos/gabriela-n',
    featured: true,
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'Responsivo',
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
    image: '/images/projects/integracoes-pagamentos.jpg',
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: false,
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Redis',
      'JavaScript',
      'CSS',
      'API REST',
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
    image: '/images/projects/keyring.webp', // Usando imagem existente temporariamente
    githubUrl: 'https://github.com/Laion459',
    liveUrl: undefined,
    featured: false,
    technologies: [
      'React',
      'JavaScript',
      'Chart.js',
      'D3.js',
      'API REST',
      'WebSocket',
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
  },
];
