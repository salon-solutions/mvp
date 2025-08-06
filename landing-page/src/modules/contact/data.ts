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
    response: 'Resposta em 1 dia útil',
    channels: ['Email', 'WhatsApp'],
  },
  {
    title: 'Vendas',
    description: 'Quer conhecer melhor o ParlorHub? Fale conosco.',
    icon: '📞',
    response: 'Resposta em até 4 horas',
    channels: ['WhatsApp', 'Email'],
  },
  {
    title: 'Parcerias',
    description: 'Interessado em trabalhar conosco?',
    icon: '🤝',
    response: 'Resposta em 2 dias úteis',
    channels: ['Email dedicado'],
  },
];

export const contactInfoData: ContactInfo[] = [
  {
    title: 'WhatsApp',
    info: '(11) 99999-9999',
    description: 'Atendimento rápido',
    icon: '📱',
  },
  {
    title: 'Email',
    info: 'contato@parlorhub.com.br',
    description: 'Resposta em 1 dia útil',
    icon: '📧',
  },
  {
    title: 'Horário',
    info: 'Seg-Sex: 9h-17h',
    description: 'Horário comercial',
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
    subtitle: 'Nossa equipe está pronta para ajudar você com o ParlorHub.',
  },
  form: {
    title: 'Envie sua mensagem',
    subtitle: 'Preencha o formulário e nossa equipe entrará em contato',
  },
};
