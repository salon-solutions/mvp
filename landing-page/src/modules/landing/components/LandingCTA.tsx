import Link from 'next/link';
import { landingConfig } from '../data';

export function LandingCTA() {
  return (
    <section className="py-20 bg-gradient-rainbow relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/15 rounded-full blur-2xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 drop-shadow-sm">
          {landingConfig.cta.title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 opacity-95 drop-shadow-sm">
          {landingConfig.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-black text-lg sm:text-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center shadow-xl"
          >
            <i className="iconify solar:rocket-bold mr-2 text-xl text-purple-600"></i>
            {landingConfig.cta.primaryButton}
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/15 transition-all duration-500 flex items-center justify-center backdrop-blur-sm hover:scale-[1.02]"
          >
            <i className="iconify solar:phone-bold mr-2 text-xl"></i>
            {landingConfig.cta.secondaryButton}
          </Link>
        </div>

        <p className="text-sm text-white/80">
          {landingConfig.cta.guarantee}
        </p>
      </div>
    </section>
  );
}
