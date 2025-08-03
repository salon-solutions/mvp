import Link from 'next/link';
import { landingConfig } from '../data';

export function LandingHero() {
  return (
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
            {landingConfig.hero.badge}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900 animate-slide-up">
            <span className="text-gradient-rainbow hover:scale-[1.02] transition-transform duration-500">
              {landingConfig.hero.title}
            </span>
            <span className="block mt-2 text-gray-800">
              {landingConfig.hero.subtitle}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-500 animate-slide-up animate-stagger-2">
            {landingConfig.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animate-stagger-3">
            <Link
              href="/contact"
              className="bg-gradient-rainbow text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center shadow-xl hover-glow"
            >
              <i className="iconify solar:rocket-bold mr-2 text-xl"></i>
              {landingConfig.hero.primaryButton}
            </Link>
            <Link
              href="/features"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-500 flex items-center justify-center hover:scale-[1.02]"
            >
              <i className="iconify solar:play-bold mr-2 text-xl"></i>
              {landingConfig.hero.secondaryButton}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 animate-fade-in animate-stagger-4">
            <div className="flex items-center gap-2">
              <i className="iconify solar:shield-check-bold text-green-500 text-lg"></i>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="iconify solar:clock-circle-bold text-blue-500 text-lg"></i>
              <span>Configuração em 5 min</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="iconify solar:users-group-two-rounded-bold text-purple-500 text-lg"></i>
              <span>5.000+ salões confiam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
