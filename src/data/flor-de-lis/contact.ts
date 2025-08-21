export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  workingHours: {
    day: string;
    hours: string;
    isOpen: boolean;
  }[];
}

export const contactInfo: ContactInfo = {
  address: 'Estrada Vereador Onildo Lemos, 256, Sala 1',
  phone: '(48) 3365-2178',
  whatsapp: '(48) 99131-9135',
  email: 'pbbruninha@hotmail.com',
  instagram: 'https://www.instagram.com/esteticaflordelissantinho',
  facebook:
    'https://www.facebook.com/profile.php?id=100068844317427&mibextid=LQQJ4d',
  workingHours: [
    { day: 'Segunda-feira', hours: 'Fechado', isOpen: false },
    { day: 'Terça-feira', hours: '9:00 - 19:00', isOpen: true },
    { day: 'Quarta-feira', hours: '9:00 - 19:00', isOpen: true },
    { day: 'Quinta-feira', hours: '9:00 - 19:00', isOpen: true },
    { day: 'Sexta-feira', hours: '9:00 - 19:00', isOpen: true },
    { day: 'Sábado', hours: '9:00 - 18:00', isOpen: true },
    { day: 'Domingo', hours: 'Fechado', isOpen: false },
  ],
};
