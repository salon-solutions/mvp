export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface FeatureCategory {
  name: string;
  icon: string;
  color: string;
  features: Feature[];
}

export interface Integration {
  name: string;
  icon: string;
}

export const featuresData: FeatureCategory[] = [
  {
    name: 'Agendamento',
    icon: '📅',
    color: 'from-blue-500 to-cyan-500',
    features: [
      {
        title: 'IA de Agendamento',
        description: 'Algoritmo inteligente que otimiza sua agenda automaticamente, reduzindo gaps e maximizando ocupação.',
        icon: '🪄',
        benefit: 'Aumento de 35% na ocupação da agenda',
      },
      {
        title: 'Lembretes Automáticos',
        description: 'Sistema multicanal de lembretes via WhatsApp, SMS e email para reduzir faltas drasticamente.',
        icon: '🔔',
        benefit: '95% de redução em faltas',
      },
      {
        title: 'Reagendamento Inteligente',
        description: 'Clientes podem reagendar facilmente, e o sistema sugere horários otimizados automaticamente.',
        icon: '🔄',
        benefit: 'Flexibilidade total para clientes',
      },
    ],
  },
  {
    name: 'Análise & IA',
    icon: '📊',
    color: 'from-purple-500 to-pink-500',
    features: [
      {
        title: 'Análise Preditiva',
        description: 'IA que prevê tendências de demanda, sugere preços otimizados e identifica oportunidades de crescimento.',
        icon: '📈',
        benefit: 'Aumento médio de 3x no lucro',
      },
      {
        title: 'Insights de Cliente',
        description: 'Perfil completo de cada cliente com histórico, preferências e sugestões personalizadas de serviços.',
        icon: '💝',
        benefit: '98% de satisfação do cliente',
      },
      {
        title: 'Relatórios Inteligentes',
        description: 'Dashboards em tempo real com métricas que realmente importam para seu negócio.',
        icon: '📄',
        benefit: 'Decisões baseadas em dados',
      },
    ],
  },
  {
    name: 'Marketing',
    icon: '📢',
    color: 'from-orange-500 to-red-500',
    features: [
      {
        title: 'Campanhas Automáticas',
        description: 'Marketing por WhatsApp e email totalmente automatizado baseado no comportamento do cliente.',
        icon: '🚀',
        benefit: 'ROI 400% maior em campanhas',
      },
      {
        title: 'Sistema de Fidelidade',
        description: 'Programa de pontos e recompensas que aumenta a retenção e o ticket médio.',
        icon: '🎁',
        benefit: 'Aumento de 60% na retenção',
      },
      {
        title: 'Reviews Automáticos',
        description: 'Coleta automática de avaliações e gestão da reputação online do seu salão.',
        icon: '⭐',
        benefit: 'Melhora contínua da reputação',
      },
    ],
  },
  {
    name: 'Gestão',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-500',
    features: [
      {
        title: 'Controle Financeiro',
        description: 'Gestão completa de receitas, despesas e fluxo de caixa com projeções inteligentes.',
        icon: '💰',
        benefit: 'Controle total das finanças',
      },
      {
        title: 'Gestão de Estoque',
        description: 'Controle automático de produtos com alertas de reposição e sugestões de compra.',
        icon: '📦',
        benefit: 'Zero desperdício de produtos',
      },
      {
        title: 'Multi-usuário',
        description: 'Sistema colaborativo com diferentes níveis de acesso para toda sua equipe.',
        icon: '👥',
        benefit: 'Equipe sempre sincronizada',
      },
    ],
  },
];

export const integrationsData: Integration[] = [
  { name: 'WhatsApp', icon: '💬' },
  { name: 'Instagram', icon: '📸' },
  { name: 'Google', icon: '🔍' },
  { name: 'Mercado Pago', icon: '💳' },
  { name: 'PagSeguro', icon: '🔒' },
  { name: 'Pix', icon: '⚡' },
];

export const featuresConfig = {
  hero: {
    badge: 'Recursos revolucionários',
    title: 'Tecnologia que transforma',
    subtitle: 'Cada recurso do ParlorHub foi desenvolvido para resolver problemas reais dos salões de beleza.',
  },
  integrations: {
    title: 'Integração com tudo que você usa',
    subtitle: 'ParlorHub se conecta com suas ferramentas favoritas para uma experiência perfeita',
  },
  cta: {
    title: 'Pronto para transformar seu salão?',
    subtitle: 'Junte-se aos salões que já descobriram o poder da tecnologia',
    primaryButton: 'Começar agora - Grátis',
    secondaryButton: 'Falar com especialista',
    guarantee: '14 dias grátis • Sem cartão de crédito • Suporte completo',
  },
};
