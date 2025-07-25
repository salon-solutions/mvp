'use client';

import HeaderHome from '@/components/HeaderHome';
import FooterHome from '@/components/FooterHome';

export default function AboutPage() {
  const team = [
    {
      name: 'Daniel',
      role: 'CEO & Fundador',
      description: 'Criou o SALLA para revolucionar a velocidade das soluções para salões.',
    },
    {
      name: 'N',
      role: 'CTO & Fundador',
      description: 'Co-fundador focado na arquitetura técnica e operações do SALLA.',
    },
  ];

  const values = [
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

  const timeline = [
    {
      title: 'Fundação da dupla',
      description: 'Daniel e Natan, frustrados com a lentidão das soluções existentes para salão, decidiram criar algo revolucionário.',
    },
    {
      title: 'MVP lançado',
      description: 'Lançamento do primeiro MVP do SALLA pelos co-fundadores, com funcionalidades essenciais e foco na velocidade.',
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold mb-6 sm:mb-8 border border-indigo-100 shadow-sm animate-fade-in hover-glow">
                <span className="text-base sm:text-lg">❤️</span>
                Nossa história
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] mb-4 sm:mb-6 text-gray-900 animate-slide-up">
                <span className="text-gradient-rainbow hover:scale-105 transition-transform duration-300">
                  Criado por
                </span>
                <span className="block mt-2 text-gray-800">
                  quem entende
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up animate-stagger-2 px-2">
                <strong className="text-gray-700">SALLA nasceu da frustração real</strong> de Daniel e Natan com a lentidão das soluções existentes para salões de beleza.
              </p>

              {/* Goals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 animate-slide-up animate-stagger-3">
                {[
                  { title: 'Velocidade', description: 'Sistema mais rápido do mercado' },
                  { title: 'Simplicidade', description: 'Interface intuitiva e fácil' },
                  { title: 'Resultados', description: 'Foco no crescimento do salão' },
                ].map((goal, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-gradient-rainbow mb-2">
                      {goal.title}
                    </div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">{goal.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                Nossa <span className="text-gradient-rainbow">missão</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900">
                  Revolucionar a velocidade das soluções para salões
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Cansados da lentidão das soluções existentes, Daniel e Natan criaram o SALLA para ser a plataforma 
                  mais rápida e eficiente do mercado de beleza.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Com expertise em desenvolvimento, marketing, gerenciamento e finanças, os co-fundadores eliminam 
                  a frustração com sistemas lentos, oferecendo uma experiência fluida na velocidade do seu negócio.
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-rainbow rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="iconify solar:rocket-bold text-lg sm:text-xl md:text-2xl text-white"></i>
                  </div>
                  <div>
                    <div className="font-black text-lg sm:text-xl text-gray-900">Nossa Missão</div>
                    <div className="text-sm sm:text-base text-gray-600">Revolucionar a velocidade das soluções para salões</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="text-center">
                  <i className="iconify solar:target-bold text-4xl sm:text-5xl md:text-6xl text-gradient-rainbow mb-4 sm:mb-6"></i>
                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Nossa Meta</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Criar a plataforma mais rápida e eficiente para salões de beleza no Brasil, 
                    eliminando a frustração com sistemas lentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                Nossos <span className="text-gradient-rainbow">valores</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Princípios que guiam cada decisão e funcionalidade do SALLA
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl mb-3 sm:mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-r ${value.gradient} shadow-lg mx-auto`}>
                    <span className="text-lg sm:text-xl md:text-2xl text-white">{value.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                Nossa <span className="text-gradient-rainbow">jornada</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                A evolução do SALLA desde a primeira ideia até hoje
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center"
                >
                  {/* Timeline content - centered */}
                  <div className="w-full">
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                Conheça os <span className="text-gradient-rainbow">fundadores</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Quem está por trás da revolução do SALLA
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg flex items-center justify-center ${
                    index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    <span className="text-lg sm:text-xl md:text-3xl font-black text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black mb-2 text-gray-900">{member.name}</h3>
                  <div className="text-purple-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-rainbow relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white/15 rounded-full blur-2xl"></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 drop-shadow-sm">
              Junte-se à nossa história
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-95 drop-shadow-sm px-2">
              Seja parte da revolução tecnológica que está transformando salões em todo o Brasil
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center px-4">
              <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-xl">
                Começar agora
              </button>
              <button className="border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/15 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Conheça nossa equipe
              </button>
            </div>
          </div>
        </section>
      </div>
      <FooterHome />
    </>
  );
}
