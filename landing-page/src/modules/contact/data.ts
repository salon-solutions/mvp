export interface ContactOption {
  title: string;
  description: string;
  icon: string;
  response: string;
  channels: string[];
}

export interface ContactInfo {
  title: string;
  info: string;
  description: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  salon: string;
  message: string;
  type: string;
}

export const contactOptionsData: ContactOption[] = [
  {
    title: 'Suporte Técnico',
    description: 'Precisa de ajuda com o sistema? Nossa equipe está aqui para você.',
    icon: '⚙️',
    response: 'Resposta em até 2 horas',
    channels: ['Chat ao vivo', 'Email', 'WhatsApp'],
  },
  {
    title: 'Vendas',
    description: 'Quer conhecer melhor o ParlorHub? Fale com nossos especialistas.',
    icon: '📞',
    response: 'Resposta imediata',
    channels: ['Chamada agendada', 'WhatsApp', 'Email'],
  },
  {
    title: 'Parcerias',
    description: 'Interessado em se tornar um parceiro oficial do ParlorHub?',
    icon: '🤝',
    response: 'Resposta em 24h',
    channels: ['Email dedicado', 'Reunião virtual'],
  },
];

export const contactInfoData: ContactInfo[] = [
  {
    title: 'WhatsApp',
    info: '(11) 99999-9999',
    description: 'Suporte instantâneo',
    icon: '📱',
  },
  {
    title: 'Email',
    info: 'contato@parlorhub.com.br',
    description: 'Resposta em até 2h',
    icon: '📧',
  },
  {
    title: 'Horário',
    info: 'Seg-Sex: 8h-18h',
    description: 'Suporte especializado',
    icon: '🕒',
  },
];

export const contactFormTypes = [
  { value: 'suporte', label: 'Suporte', icon: '⚙️' },
  { value: 'vendas', label: 'Vendas', icon: '📞' },
  { value: 'parceria', label: 'Parceria', icon: '🤝' },
];

export const contactConfig = {
  hero: {
    badge: 'Estamos aqui para ajudar',
    title: 'Fale conosco',
    subtitle: 'Nossa equipe especializada está pronta para ajudar você a transformar seu salão.',
  },
  form: {
    title: 'Envie sua mensagem',
    subtitle: 'Preencha o formulário e nossa equipe entrará em contato rapidamente',
  },
};
