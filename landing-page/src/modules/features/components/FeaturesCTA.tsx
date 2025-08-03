import Link from 'next/link';
import { featuresConfig } from '../data';

export function FeaturesCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {featuresConfig.cta.title}
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          {featuresConfig.cta.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            {featuresConfig.cta.primaryButton}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200"
          >
            {featuresConfig.cta.secondaryButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
