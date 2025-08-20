export const SITE_CONFIG = {
  name: 'Leonardo',
  title: 'Backend Engineer | APIs escaláveis e seguras',
  description: 'Desenvolvedor backend sênior especializado em criar APIs escaláveis, seguras e de alta performance. Experiência em Node.js, Laravel, PostgreSQL e arquiteturas distribuídas.',
  url: 'https://leonardo-portfolio.com',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  email: 'leonardo@email.com',
  cvUrl: '/cv-leonardo.pdf',
} as const;

export const NAVIGATION = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Contato', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: SITE_CONFIG.github, icon: 'github' },
  { name: 'LinkedIn', href: SITE_CONFIG.linkedin, icon: 'linkedin' },
  { name: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
] as const; 