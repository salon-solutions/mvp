export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefit: string;
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

export const landingConfig = {
  hero: {
    badge: 'Plataforma para salões de beleza',
    title: 'Transforme seu salão',
    subtitle: 'com gerenciamento inteligente',
    description: 'Uma plataforma de gestão moderna que realmente entende seu negócio. Aumente sua receita e reduza faltas com tecnologia inteligente.',
    primaryButton: 'Começar teste grátis',
    secondaryButton: 'Ver demonstração',
  },
  features: {
    title: 'Por que o ParlorHub é diferente?',
    subtitle: 'Não é só um sistema. É seu parceiro inteligente.',
  },

  cta: {
    title: 'Pronto para transformar seu salão?',
    subtitle: 'Junte-se aos salões que já descobriram o poder da tecnologia',
    primaryButton: 'Começar agora - Grátis',
    secondaryButton: 'Falar com especialista',
    guarantee: '14 dias grátis • Sem cartão de crédito • Suporte completo',
  },
};
