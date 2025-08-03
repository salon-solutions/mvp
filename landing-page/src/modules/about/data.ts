export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface Goal {
  title: string;
  description: string;
}

export const teamData: TeamMember[] = [
  {
    name: 'Daniel',
    role: 'CEO & Fundador',
    description: 'Criou o ParlorHub para revolucionar a velocidade das soluções para salões.',
  },
  {
    name: 'N',
    role: 'CTO & Fundador',
    description: 'Co-fundador focado na arquitetura técnica e operações do ParlorHub.',
  },
];

export const valuesData: Value[] = [
  {
    title: 'Simplicidade',
    description: 'Tecnologia avançada com interface simples e intuitiva.',
    icon: '🪄',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Parceria',
    description: 'Não somos apenas fornecedores, somos parceiros do seu sucesso.',
    icon: '🤝',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Inovação',
    description: 'Sempre evoluindo para trazer o melhor da tecnologia para salões.',
    icon: '🚀',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Resultados',
    description: 'Focamos em métricas que realmente importam para seu negócio.',
    icon: '📈',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export const timelineData: TimelineItem[] = [
  {
    title: 'Fundação da dupla',
    description: 'Daniel e Natan, frustrados com a lentidão das soluções existentes para salão, decidiram criar algo revolucionário.',
  },
  {
    title: 'MVP lançado',
    description: 'Lançamento do primeiro MVP do ParlorHub pelos co-fundadores, com funcionalidades essenciais e foco na velocidade.',
  },
];

export const goalsData: Goal[] = [
  { title: 'Velocidade', description: 'Sistema mais rápido do mercado' },
  { title: 'Simplicidade', description: 'Interface intuitiva e fácil' },
  { title: 'Resultados', description: 'Foco no crescimento do salão' },
];

export const aboutConfig = {
  hero: {
    badge: 'Nossa história',
    title: 'Criado por quem entende',
    subtitle: 'ParlorHub nasceu da frustração real de Daniel e Natan com a lentidão das soluções existentes para salões de beleza.',
  },
  mission: {
    title: 'Nossa missão',
    headline: 'Revolucionar a velocidade das soluções para salões',
    description: 'Cansados da lentidão das soluções existentes, Daniel e Natan criaram o ParlorHub para ser a plataforma mais rápida e eficiente do mercado de beleza.',
    extraDescription: 'Com expertise em desenvolvimento, marketing, gerenciamento e finanças, os co-fundadores eliminam a frustração com sistemas lentos, oferecendo uma experiência fluida na velocidade do seu negócio.',
    goal: 'Criar a plataforma mais rápida e eficiente para salões de beleza no Brasil, eliminando a frustração com sistemas lentos.',
  },
  values: {
    title: 'Nossos valores',
    subtitle: 'Princípios que guiam cada decisão e funcionalidade do ParlorHub',
  },
  timeline: {
    title: 'Nossa jornada',
    subtitle: 'A evolução do ParlorHub desde a primeira ideia até hoje',
  },
  team: {
    title: 'Conheça os fundadores',
    subtitle: 'Quem está por trás da revolução do ParlorHub',
  },
  cta: {
    title: 'Junte-se à nossa história',
    subtitle: 'Seja parte da revolução tecnológica que está transformando salões em todo o Brasil',
    primaryButton: 'Começar agora',
    secondaryButton: 'Conheça nossa equipe',
  },
};
