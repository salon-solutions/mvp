import Link from 'next/link';
import { pricingConfig } from '../data';

export function PricingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white font-medium">{pricingConfig.guarantee.title}</span>
          </div>
          <p className="text-purple-100 text-lg">{pricingConfig.guarantee.description}</p>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {pricingConfig.cta.title}
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          {pricingConfig.cta.subtitle}
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-50 transition-colors duration-200"
        >
          {pricingConfig.cta.buttonText}
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
