import { pricingConfig } from '../data';

export function PricingHero() {
  return (
    <section className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 shadow-sm transition-all duration-500 hover:scale-[1.02]">
            <i className="iconify solar:dollar-minimalistic-bold text-lg text-purple-500"></i>
            {pricingConfig.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="hover:scale-[1.02] transition-transform duration-500">
              {pricingConfig.hero.title}
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-[1.02] transition-transform duration-500">
              {' '}do seu salão
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {pricingConfig.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
