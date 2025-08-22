export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const slideInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

// Novas animações avançadas
export const textReveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const morphing = {
  initial: { borderRadius: '0%', scale: 0.8 },
  animate: { borderRadius: '50%', scale: 1 },
  transition: { duration: 1, ease: 'easeInOut' },
};

export const floating3D = {
  initial: { y: 0, rotateX: 0, rotateY: 0 },
  animate: {
    y: [-10, 10, -10],
    rotateX: [0, 5, 0],
    rotateY: [0, -5, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const parallax = {
  initial: { y: 0, scale: 1 },
  animate: { y: -50, scale: 1.1 },
  transition: { duration: 1, ease: 'easeOut' },
};

export const glowPulse = {
  initial: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    scale: 1,
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(59, 130, 246, 0.3)',
      '0 0 40px rgba(59, 130, 246, 0.6)',
      '0 0 20px rgba(59, 130, 246, 0.3)',
    ],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -180, scale: 0.5 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3, y: 100 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.68, -0.55, 0.265, 1.55],
  },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};
