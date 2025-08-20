export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: 'Avançado' | 'Intermediário' | 'Básico';
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Tools';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Theme {
  mode: 'light' | 'dark';
} 