export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface BrandLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'hair' | 'color' | 'styling';
}
