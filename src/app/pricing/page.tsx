'use client';

import { useState } from 'react';
import HeaderHome from '@/components/HeaderHome';
import FooterHome from '@/components/FooterHome';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfeito para salões pequenos que estão começando',
      monthlyPrice: 127,
      annualPrice: 97,
      popular: false,
      features: [
        'Até 100 agendamentos/mês',
        'Agenda inteligente',
        'Notificações por WhatsApp',
        'Relatórios básicos',
        'Suporte via email',
        '1 usuário',
      ],
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500',
      ctaText: 'Começar grátis',
    },
    {
      name: 'Pro',
      description: 'Ideal para salões em crescimento com múltiplos serviços',
      monthlyPrice: 247,
      annualPrice: 197,
      popular: true,
      features: [
        'Agendamentos ilimitados',
        'IA de análise preditiva',
        'Marketing automatizado',
        'Relatórios avançados',
        'Integração com redes sociais',
        'Até 5 usuários',
        'Suporte prioritário',
      ],
      icon: '⭐',
      gradient: 'from-purple-500 to-pink-500',
      ctaText: 'Começar teste grátis',
    },
    {
      name: 'Premium',
      description: 'Para salões estabelecidos que querem maximizar resultados',
      monthlyPrice: 497,
      annualPrice: 397,
      popular: false,
      features: [
        'Tudo do Pro',
        'IA de recomendação de produtos',
        'Sistema de fidelidade',
        'App personalizado',
        'Relatórios em tempo real',
        'Usuários ilimitados',
        'Suporte 24/7',
        'Treinamento personalizado',
      ],
      icon: '👑',
      gradient: 'from-orange-500 to-red-500',
      ctaText: 'Começar teste grátis',
    },
    {
      name: 'Enterprise',
      description: 'Solução enterprise para redes de salões e franquias',
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      features: [
        'Tudo do Premium',
        'Multi-unidades',
        'API personalizada',
        'Integração ERP/CRM',
        'Onboarding dedicado',
        'Account manager',
        'SLA garantido',
        'Customizações exclusivas',
      ],
      icon: '🏢',
      gradient: 'from-gray-700 to-gray-900',
      ctaText: 'Falar com especialista',
    },
  ];

  const calculateSavings = (monthly: number | null, annual: number | null): number => {
    if (!monthly || !annual) return 0;
    return Math.round(((monthly - annual) / monthly) * 100);
  };

  const getCurrentPrice = (plan: typeof plans[0]): string | number => {
    if (!plan.monthlyPrice) return 'Personalizado';
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getOriginalPrice = (plan: typeof plans[0]): number | null => {
    if (!plan.monthlyPrice || !isAnnual) return null;
    return plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]): number => {
    return calculateSavings(plan.monthlyPrice, plan.annualPrice);
  };

  const getPeriod = (plan: typeof plans[0]): string => {
    if (!plan.monthlyPrice) return '';
    return isAnnual ? '/mês (anual)' : '/mês';
  };

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
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 shadow-sm animate-fade-in hover-glow">
                <span className="text-lg">💰</span>
                Planos transparentes
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900 animate-slide-up">
                <span className="text-gradient-rainbow hover:scale-105 transition-transform duration-300">
                  Escolha seu
                </span>
                <span className="block mt-2 text-gray-800">
                  plano perfeito
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animate-stagger-2">
                <strong className="text-gray-700">Comece grátis</strong> e escale conforme seu salão cresce. Sem surpresas, sem taxas ocultas.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex flex-col items-center gap-6 mb-16 animate-slide-up animate-stagger-3">
              <div className="flex items-center justify-center gap-4">
                <span className={`font-semibold transition-colors duration-300 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Mensal
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isAnnual ? 'bg-gradient-rainbow' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md ${
                      isAnnual ? 'left-9' : 'left-1'
                    }`}
                  ></div>
                </button>
                <span className={`font-semibold transition-colors duration-300 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Anual
                </span>
              </div>
              {isAnnual && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm animate-bounce-gentle">
                  <span className="text-lg">📊</span>
                  Economize até 23% pagando anualmente
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => {
                const currentPrice = getCurrentPrice(plan);
                const originalPrice = getOriginalPrice(plan);
                const savings = getSavings(plan);
                const period = getPeriod(plan);

                return (
                  <div
                    key={plan.name}
                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 group hover:scale-[1.02] ${
                      plan.popular
                        ? 'border-purple-200 ring-4 ring-purple-100'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-gentle">
                          Mais Popular
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <span className="text-2xl text-white">{plan.icon}</span>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                      </div>

                      {/* Pricing */}
                      <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          {originalPrice && isAnnual && (
                            <span className="text-gray-400 line-through text-lg">
                              R$ {originalPrice}
                            </span>
                          )}
                          {savings > 0 && isAnnual && (
                            <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                              -{savings}%
                            </div>
                          )}
                        </div>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-black text-gray-900">
                            {currentPrice === 'Personalizado' ? 'Custom' : `R$ ${currentPrice}`}
                          </span>
                          <span className="text-gray-500 ml-1">{period}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <span className="text-lg text-green-500 mt-0.5 flex-shrink-0">✅</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 text-center ${
                          plan.popular
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                        }`}
                      >
                        {plan.ctaText}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                Dúvidas <span className="text-gradient-rainbow">frequentes</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tudo que você precisa saber sobre nossos planos
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Posso trocar de plano a qualquer momento?',
                  answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente.',
                },
                {
                  question: 'Existe período de teste gratuito?',
                  answer: 'Sim, oferecemos 14 dias de teste gratuito em todos os planos pagos. Não é necessário cartão de crédito.',
                },
                {
                  question: 'O que acontece se eu cancelar?',
                  answer: 'Você pode cancelar a qualquer momento. Seus dados ficam seguros por 90 dias caso queira reativar.',
                },
                {
                  question: 'Vocês oferecem suporte técnico?',
                  answer: 'Sim! Oferecemos suporte via email, chat e WhatsApp. Planos Premium e Enterprise têm suporte prioritário.',
                },
                {
                  question: 'Há limite de clientes ou agendamentos?',
                  answer: 'O plano Starter tem limite de 100 agendamentos/mês. Os demais planos são ilimitados.',
                },
                {
                  question: 'Como funciona o pagamento anual?',
                  answer: 'No pagamento anual, você economiza até 23% e o valor é cobrado uma vez por ano. Pode cancelar a qualquer momento.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                Compare <span className="text-gradient-rainbow">todos os planos</span>
              </h2>
              <p className="text-xl text-gray-600">
                Encontre o plano ideal para o seu negócio
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-6 font-bold text-gray-900">Recursos</th>
                      <th className="text-center p-6 font-bold text-gray-900">Starter</th>
                      <th className="text-center p-6 font-bold text-purple-600 bg-purple-50">Pro</th>
                      <th className="text-center p-6 font-bold text-gray-900">Premium</th>
                      <th className="text-center p-6 font-bold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Agendamentos/mês', '100', 'Ilimitado', 'Ilimitado', 'Ilimitado'],
                      ['Usuários', '1', '5', 'Ilimitado', 'Ilimitado'],
                      ['Agenda inteligente', '✓', '✓', '✓', '✓'],
                      ['IA de análise', '✗', '✓', '✓', '✓'],
                      ['Marketing automatizado', '✗', '✓', '✓', '✓'],
                      ['App personalizado', '✗', '✗', '✓', '✓'],
                      ['Multi-unidades', '✗', '✗', '✗', '✓'],
                      ['API personalizada', '✗', '✗', '✗', '✓'],
                      ['Suporte', 'Email', 'Prioritário', '24/7', 'Dedicado'],
                    ].map((row, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="p-6 font-semibold text-gray-900">{row[0]}</td>
                        <td className="p-6 text-center text-gray-700">{row[1]}</td>
                        <td className="p-6 text-center text-gray-700 bg-purple-50/50">{row[2]}</td>
                        <td className="p-6 text-center text-gray-700">{row[3]}</td>
                        <td className="p-6 text-center text-gray-700">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-rainbow relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/30 rounded-full blur-2xl"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-sm">
              Comece sua transformação hoje
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-95 drop-shadow-sm">
              Junte-se aos profissionais que já descobriram o futuro da gestão de salões
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-xl">
                Começar teste grátis
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-black text-xl hover:bg-white hover:text-gray-800 transition-all duration-300 inline-flex items-center justify-center">
                Falar com especialista
              </button>
            </div>
          </div>
        </section>
      </div>
      <FooterHome />
    </>
  );
}
