import { pricingConfig } from '../data';

export function PricingHero() {
  return (
    <section className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-sm font-medium mb-6">
            💰 {pricingConfig.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {pricingConfig.hero.title}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
