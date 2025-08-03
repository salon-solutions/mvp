interface ContactHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function ContactHero({ badge, title, subtitle }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-primary opacity-15 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 shadow-sm transition-all duration-500 hover:scale-[1.02] animate-fade-in">
            <span className="text-lg">👋</span>
            {badge}
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900 animate-slide-up">
            <span className="text-gradient-rainbow hover:scale-[1.02] transition-transform duration-500">
              {title.split(' ')[0]}
            </span>
            <span className="block mt-2 text-gray-800">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-500 animate-slide-up animate-stagger-2">
            <strong className="text-gray-700">{subtitle.split(' ').slice(0, 3).join(' ')}</strong> {subtitle.split(' ').slice(3).join(' ')}
          </p>
        </div>
      </div>
    </section>
  );
}
