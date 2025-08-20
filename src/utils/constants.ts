export const SITE_CONFIG = {
  name: 'Leonardo',
  title: 'Backend Engineer | APIs escaláveis e seguras',
  description: 'Desenvolvedor backend especializado em criar APIs escaláveis, seguras e de alta performance. Experiência em Node.js, Laravel, PostgreSQL e arquiteturas distribuídas.',
  url: 'https://leonardo-portfolio.com',
  github: 'https://github.com/Laion459',
  linkedin: 'https://www.linkedin.com/in/borgesleonardod/',
  email: 'laion459@gmail.com',
  cvUrl: '/cv-leonardo.pdf',
  // Imagens do site
  images: {
    profile: '/images/profile/leonardo.JPG',
    avatar: '/images/profile/avatar.jpg',
    logo: {
      light: '/images/logo/logo.png',
      dark: '/images/logo/logo-dark.png',
    },
    ogImage: '/og-image.jpg',
    favicon: '/favicon.ico',
  },
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