'use client';

import { useState } from 'react';
import HeaderHome from '@/components/HeaderHome';
import FooterHome from '@/components/FooterHome';

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Agendamento Inteligente',
      description:
        'IA que entende seus clientes e otimiza sua agenda automaticamente',
      icon: '📅',
      benefit: 'Menos faltas',
    },
    {
      title: 'Análise Preditiva',
      description:
        'Prevê tendências e sugere estratégias para maximizar sua receita',
      icon: '📊',
      benefit: 'Mais lucro',
    },
    {
      title: 'Experiência Premium',
      description:
        'Cada cliente se sente especial com atendimento personalizado',
      icon: '⭐',
      benefit: 'Satisfação total',
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
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-primary opacity-15 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 shadow-sm animate-fade-in hover-glow">
              <i className="iconify solar:magic-stick-3-bold text-lg text-purple-500 animate-bounce-gentle"></i>
              IA para salões de beleza
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900 animate-slide-up">
              <span className="hover:scale-105 transition-transform duration-300">
                Faça o seu <span className="text-gradient-rainbow">cliente</span>
              </span>
              <span className="block mt-2 text-gray-800">
                um fã
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up animate-stagger-2 px-2">
              <strong className="text-gray-700">ParlorHub é o sistema mais rápido do mercado.</strong> Assistente inteligente que transforma seu salão em uma máquina de lucro, otimizando cada processo com tecnologia de ponta.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center mb-8 sm:mb-12 animate-slide-up animate-stagger-3 px-4">
              <button className="group relative bg-gradient-rainbow text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl overflow-hidden">
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <i className="iconify solar:rocket-bold text-lg sm:text-xl relative z-10"></i>
                <span className="relative z-10">Começar grátis</span>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                <i className="iconify solar:play-bold text-lg sm:text-xl"></i>
                Ver demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900 px-2">
              Tecnologia que <span className="text-gradient-rainbow">acelera</span> resultados
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Cada funcionalidade foi desenvolvida para eliminar tarefas manuais e maximizar o potencial do seu salão
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 ${
                  activeFeature === index ? 'border-purple-200 bg-gradient-to-br from-purple-50/50 to-blue-50/50' : 'border-transparent'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-white shadow-lg border-2 border-gray-100">
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-rainbow relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white/15 rounded-full blur-2xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 drop-shadow-sm">
            Transforme seu salão hoje
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-95 drop-shadow-sm px-2">
            Junte-se à revolução tecnológica que está acelerando o sucesso de salões em todo o Brasil
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center px-4">
            <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
              <i className="iconify solar:rocket-bold text-lg sm:text-xl text-indigo-600"></i>
              Começar agora
            </button>
            <button className="border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
              <i className="iconify solar:phone-bold text-lg sm:text-xl"></i>
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
