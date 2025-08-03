'use client';

import { useState } from 'react';
import HeaderHome from '@/components/HeaderHome';
import FooterHome from '@/components/FooterHome';

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
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

  return (
    <>
      <HeaderHome />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-primary opacity-15 rounded-full blur-2xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 shadow-sm transition-all duration-500 hover:scale-[1.02] animate-fade-in">
                <span className="text-lg">⭐</span>
                Recursos revolucionários
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900 animate-slide-up">
                <span className="text-gradient-rainbow hover:scale-[1.02] transition-transform duration-500">
                  Tecnologia
                </span>
                <span className="block mt-2 text-gray-800">
                  que transforma
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-500 animate-slide-up animate-stagger-2">
                <strong className="text-gray-700">Cada recurso do ParlorHub</strong> foi desenvolvido para resolver problemas reais dos salões de beleza.
              </p>

            </div>
          </div>
        </section>

        {/* Features Categories */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up animate-stagger-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                    activeCategory === index
                      ? 'bg-white shadow-xl scale-105 text-gray-900 ring-2 ring-purple-200'
                      : 'bg-white/60 hover:bg-white/80 text-gray-600 hover:scale-[1.02]'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Active Category Features */}
            <div className="grid md:grid-cols-3 gap-8 animate-slide-up animate-stagger-5">
              {categories[activeCategory].features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${categories[activeCategory].color} shadow-lg`}>
                    <span className="text-2xl text-white">{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                  {/* Benefit */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      <span className="font-bold text-green-700">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                Integração com <span className="text-gradient-rainbow">tudo</span> que você usa
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                ParlorHub se conecta com suas ferramentas favoritas para uma experiência perfeita
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-slide-up animate-stagger-2">
              {[
                { name: 'WhatsApp', icon: '💬' },
                { name: 'Instagram', icon: '📸' },
                { name: 'Google', icon: '🔍' },
                { name: 'Mercado Pago', icon: '💳' },
                { name: 'PagSeguro', icon: '🔒' },
                { name: 'Pix', icon: '⚡' },
              ].map((integration, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center"
                >
                  <span className="text-4xl mb-3 block">{integration.icon}</span>
                  <div className="font-semibold text-gray-700">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-rainbow relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/15 rounded-full blur-2xl"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center text-white animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-sm">
              Experimente todos os recursos
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-95 drop-shadow-sm">
              14 dias grátis para descobrir como o ParlorHub pode transformar seu salão
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center animate-slide-up animate-stagger-2">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center shadow-xl">
                Começar teste grátis
              </button>
              <button className="border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white/15 transition-all duration-500 flex items-center justify-center backdrop-blur-sm hover:scale-[1.02]">
                Ver demonstração
              </button>
            </div>
          </div>
        </section>
      </div>
      <FooterHome />
    </>
  );
}
