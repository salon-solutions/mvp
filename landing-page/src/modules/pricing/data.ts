export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonLink: string;
  badge?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'R$ 97',
    period: '/mês',
    description: 'Perfeito para salões que estão começando a digitalizar',
    features: [
      'Agenda inteligente',
      'Lembretes automáticos',
      'Até 2 profissionais',
      'Relatórios básicos',
      'Suporte por email',
      'App mobile',
    ],
    buttonText: 'Começar agora',
    buttonLink: '/contact',
  },
  {
    name: 'Professional',
    price: 'R$ 197',
    period: '/mês',
    description: 'Para salões que querem crescer com inteligência',
    features: [
      'Tudo do Starter',
      'IA de análise preditiva',
      'Até 10 profissionais',
      'Marketing automático',
      'Sistema de fidelidade',
      'Integração WhatsApp',
      'Relatórios avançados',
      'Suporte prioritário',
    ],
    highlighted: true,
    badge: 'Mais popular',
    buttonText: 'Escolher Professional',
    buttonLink: '/contact',
  },
  {
    name: 'Enterprise',
    price: 'R$ 397',
    period: '/mês',
    description: 'Para redes e salões de alto volume',
    features: [
      'Tudo do Professional',
      'Profissionais ilimitados',
      'Multi-unidades',
      'API personalizada',
      'Treinamento dedicado',
      'Suporte 24/7',
      'Customizações',
      'Gerente de conta',
    ],
    buttonText: 'Falar com vendas',
    buttonLink: '/contact',
  },
];

export const faqData: FAQ[] = [
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Você pode cancelar sua assinatura a qualquer momento. Não há multas ou taxas de cancelamento. Seu acesso permanece ativo até o final do período pago.',
  },
  {
    question: 'Existe período de teste gratuito?',
    answer: 'Sim! Oferecemos 14 dias completamente grátis para você testar todas as funcionalidades do ParlorHub. Não é necessário cartão de crédito para começar.',
  },
  {
    question: 'Posso migrar meus dados de outro sistema?',
    answer: 'Claro! Nossa equipe ajuda na migração dos seus dados sem custo adicional. Fazemos todo o processo para que você não perca nenhuma informação importante.',
  },
  {
    question: 'O que acontece se eu exceder o limite de profissionais?',
    answer: 'Você pode facilmente fazer upgrade do seu plano a qualquer momento. A cobrança é proporcional e você só paga a diferença pelo período restante.',
  },
  {
    question: 'Vocês oferecem treinamento?',
    answer: 'Sim! Todos os planos incluem materiais de treinamento e suporte. O plano Enterprise inclui treinamento personalizado com nossa equipe.',
  },
  {
    question: 'Os dados ficam seguros?',
    answer: 'Absolutamente! Usamos criptografia de nível bancário e nossos servidores são hospedados na AWS com backup automático diário.',
  },
];

export const pricingConfig = {
  hero: {
    badge: 'Preços transparentes',
    title: 'Invista no crescimento',
    subtitle: 'Escolha o plano ideal para seu salão e comece a ver resultados em dias, não meses.',
  },
  guarantee: {
    title: 'Garantia de 30 dias',
    description: 'Se não ficar 100% satisfeito, devolvemos seu dinheiro.',
  },
  cta: {
    title: 'Pronto para transformar seu salão?',
    subtitle: 'Junte-se a mais de 5.000 salões que já confiam no ParlorHub',
    buttonText: 'Começar teste grátis',
  },
};
