export const SITE_CONFIG = {
  name: 'Leonardo D. Borges',
  title: 'Desenvolvedor Full Stack & Product Manager',
  description:
    'Desenvolvedor Full Stack especializado em Laravel, React e PHP. Product Manager com visão de dono e capacidade de entrega rápida. Criador de soluções completas e escaláveis.',
  url: 'https://laion459.github.io/LDB/',
  github: 'https://github.com/Laion459',
  linkedin: 'https://www.linkedin.com/in/borgesleonardod/',
  email: 'laion459@gmail.com',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=5551999092387&text&type=phone_number&app_absent=0',
  instagram: 'https://www.instagram.com/laionzzzz/#',
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
  { name: 'WhatsApp', href: SITE_CONFIG.whatsapp, icon: 'whatsapp' },
  { name: 'Instagram', href: SITE_CONFIG.instagram, icon: 'instagram' },
  { name: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
] as const;
