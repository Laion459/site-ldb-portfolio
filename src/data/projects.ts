import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Keyring - Sistema de Licenciamento Enterprise',
    description:
      'Sistema definitivo de gerenciamento de licenças que combina poder empresarial com simplicidade extrema',
    problem:
      'Falta de controle total sobre distribuição, ativação e monetização de licenças de software',
    solution:
      'Desenvolvimento completo de plataforma com Laravel 11, Filament 3, API RESTful e dashboard administrativo intuitivo',
    impact:
      'Redução de 80% no tempo de gestão de licenças, aumento de 60% na eficiência de monetização e controle total sobre produtos digitais',
    image: '/images/projects/keyring.webp',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    technologies: [
      'Laravel 11',
      'Filament 3',
      'PostgreSQL 16',
      'Docker',
      'JWT Authentication',
      'OpenAPI/Swagger',
      'PHP 8.2+',
      'RESTful API',
      'Dashboard Admin',
      'Gestão de Licenças',
    ],
    achievements: [
      'Sistema em produção gerenciando centenas de licenças',
      'API documentada com Swagger para integração seamless',
      'Interface administrativa moderna com Filament 3',
      'Controle granular de permissões e planos customizáveis',
      'Relatórios em tempo real de uso e performance',
      'Arquitetura escalável para empresas de software',
    ],
    role: 'Desenvolvedor Full Stack',
    company: 'Eleven Soft',
    period: '2024 - 2025',
  },
  {
    id: '2',
    title: 'ESH - Eleven Shell Hub',
    description:
      'Solução completa de gerenciamento SSH empresarial com interface web moderna, CLI robusto e sistema de licenciamento integrado',
    problem:
      'Falta de controle centralizado sobre acesso SSH corporativo, ausência de auditoria e dificuldade de gerenciar múltiplos servidores',
    solution:
      'Desenvolvimento de plataforma híbrida com interface web React + TypeScript, CLI nativo e sistema de licenciamento do Keyring integrado',
    impact:
      'Redução de 50-70% no tempo de acesso aos servidores, 80% menos tempo em troubleshooting e 100% visibilidade de atividades SSH',
    technologies: [
      'Laravel 11',
      'React 18',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'SSH Management',
      'CLI Development',
      'Keyring Integration',
      'RBAC Security',
      'Audit Logging',
    ],
    image: '/images/projects/esh-dashboard.png',
    githubUrl: undefined,
    liveUrl: 'https://esh.elevensoft.dev/',
    featured: true,
    achievements: [
      'Implementação da CLI do Keyring para controle de licenciamento',
      'Interface web moderna com React + TypeScript para gerenciamento SSH',
      'Sistema de auditoria completa para compliance regulatório',
      'Arquitetura híbrida (CLI + Web + API) para máxima flexibilidade',
      'Controle granular de permissões com RBAC avançado',
      'Integração seamless com infraestrutura existente',
    ],
    role: 'Desenvolvedor Full Stack & CLI',
    company: 'Eleven Soft',
    period: '2024 - 2025',
  },
  {
    id: '3',
    title: 'Eleven Soft - Site Institucional',
    description:
      'Refatoração completa do site corporativo com foco em conversão, SEO e integração com produtos internos',
    problem:
      'Site institucional legado com baixa performance, design desatualizado e falta de integração com produtos ESH e Keyring',
    solution:
      'Reestruturação completa com React, Tailwind CSS, otimizações de SEO, performance e integração seamless com produtos internos',
    impact:
      'Melhoria de 80% na velocidade de carregamento, aumento de 150% no engajamento e integração completa com portfólio de produtos',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'SEO',
      'Performance',
      'Product Integration',
      'Modern UI/UX',
      'Responsive Design',
    ],
    image: '/images/projects/eleven-soft.png',
    githubUrl: undefined,
    liveUrl: 'https://elevensoft.dev/',
    featured: true,
    achievements: [
      'Refatoração completa do site institucional corporativo',
      'Integração seamless com produtos ESH e Keyring',
      'Otimizações de performance e SEO para melhor ranking',
      'Interface moderna focada em conversão de leads',
      'Sistema de design consistente com a marca Eleven Soft',
      'Redução significativa no tempo de manutenção e atualizações',
    ],
    role: 'Desenvolvedor Full Stack & Product Manager',
    company: 'Eleven Soft',
    period: '2024 - 2025',
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
    title: 'Conversor de Moedas - API Externa',
    description:
      'Aplicação web moderna para conversão de moedas em tempo real com integração a API externa de câmbio',
    problem:
      'Necessidade de ferramenta simples e eficiente para conversão de moedas com taxas atualizadas em tempo real',
    solution:
      'Desenvolvimento de interface moderna com React, TypeScript e integração a API de câmbio para conversões precisas',
    impact:
      'Ferramenta prática para usuários que precisam converter moedas rapidamente com interface intuitiva e responsiva',
    image: '/images/projects/conversor-moedas.webp',
    githubUrl: undefined,
    liveUrl: '/projetos/conversor-moedas',
    featured: true,
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'API REST',
      'Responsivo',
      'Hooks Customizados',
    ],
  },
  {
    id: '7',
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
    id: '8',
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
    id: '9',
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
