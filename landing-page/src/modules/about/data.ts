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
    description: 'Desenvolvedor com experiência em criar soluções tecnológicas para pequenos negócios.',
  },
  {
    name: 'Natan',
    role: 'CTO & Fundador',
    description: 'Co-fundador responsável pela arquitetura técnica e desenvolvimento do ParlorHub.',
  },
];

export const valuesData: Value[] = [
  {
    title: 'Simplicidade',
    description: 'Desenvolvemos soluções com interface simples e intuitiva.',
    icon: '🪄',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Parceria',
    description: 'Trabalhamos junto com nossos clientes para o sucesso mútuo.',
    icon: '🤝',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Evolução',
    description: 'Sempre melhorando e adicionando novas funcionalidades.',
    icon: '🚀',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Resultados',
    description: 'Focamos em métricas que realmente importam para o negócio.',
    icon: '📈',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export const timelineData: TimelineItem[] = [
  {
    title: 'Início do projeto',
    description: 'Daniel e Natan começaram a desenvolver o ParlorHub para atender às necessidades específicas de salões de beleza.',
  },
  {
    title: 'Primeira versão',
    description: 'Lançamento da primeira versão do ParlorHub com funcionalidades essenciais de agendamento e gestão.',
  },
];

export const goalsData: Goal[] = [
  { title: 'Simplicidade', description: 'Interface intuitiva e fácil de usar' },
  { title: 'Confiabilidade', description: 'Sistema estável e seguro' },
  { title: 'Crescimento', description: 'Ajudar salões a crescer sustentavelmente' },
];

export const aboutConfig = {
  hero: {
    badge: 'Nossa história',
    title: 'Criado por quem entende',
    subtitle: 'ParlorHub nasceu da experiência real de Daniel e Natan no desenvolvimento de soluções para salões de beleza.',
  },
  mission: {
    title: 'Nossa missão',
    headline: 'Simplificar a gestão de salões de beleza',
    description: 'Com experiência em desenvolvimento e gestão, Daniel e Natan criaram o ParlorHub para oferecer uma solução moderna e eficiente para salões.',
    extraDescription: 'Focamos em criar uma plataforma intuitiva que realmente atenda às necessidades diárias de proprietários e profissionais de salões de beleza.',
    goal: 'Desenvolver uma plataforma confiável e eficiente para salões de beleza, simplificando a gestão diária.',
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
    subtitle: 'Quem está por trás do desenvolvimento do ParlorHub',
  },
  cta: {
    title: 'Faça parte da nossa jornada',
    subtitle: 'Experimente o ParlorHub e veja como podemos ajudar seu salão a crescer',
    primaryButton: 'Começar agora',
    secondaryButton: 'Falar com a equipe',
  },
};
