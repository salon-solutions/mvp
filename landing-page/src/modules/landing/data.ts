export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const featuresData: Feature[] = [
  {
    title: 'Agendamento Inteligente',
    description: 'IA que entende seus clientes e otimiza sua agenda automaticamente',
    icon: '📅',
    benefit: 'Menos faltas',
  },
  {
    title: 'Análise Preditiva',
    description: 'Prevê tendências e sugere estratégias para maximizar sua receita',
    icon: '📊',
    benefit: 'Mais lucro',
  },
  {
    title: 'Experiência Premium',
    description: 'Cada cliente se sente especial com atendimento personalizado',
    icon: '⭐',
    benefit: 'Satisfação total',
  },
];

export const statsData: Stat[] = [
  {
    value: '5.000+',
    label: 'Salões usando',
    icon: '💼',
  },
  {
    value: '300%',
    label: 'Aumento médio na receita',
    icon: '📈',
  },
  {
    value: '95%',
    label: 'Redução em faltas',
    icon: '✅',
  },
  {
    value: '24/7',
    label: 'Suporte disponível',
    icon: '🔧',
  },
];

export const landingConfig = {
  hero: {
    badge: 'IA para salões de beleza',
    title: 'Transforme seu salão',
    subtitle: 'com inteligência artificial',
    description: 'A primeira plataforma de gestão com IA que realmente entende seu negócio. Aumente sua receita em até 300% e reduza faltas em 95%.',
    primaryButton: 'Começar teste grátis',
    secondaryButton: 'Ver demonstração',
  },
  features: {
    title: 'Por que o ParlorHub é diferente?',
    subtitle: 'Não é só um sistema. É seu parceiro inteligente.',
  },
  stats: {
    title: 'Resultados que falam por si',
    subtitle: 'Mais de 5.000 salões já confiam no ParlorHub',
  },
  cta: {
    title: 'Pronto para transformar seu salão?',
    subtitle: 'Junte-se a milhares de salões que já descobriram o poder da IA',
    primaryButton: 'Começar agora - Grátis',
    secondaryButton: 'Falar com especialista',
    guarantee: '14 dias grátis • Sem cartão de crédito • Suporte completo',
  },
};
