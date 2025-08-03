import { Goal } from '../data';

interface AboutHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  goals: Goal[];
}

export default function AboutHero({ badge, title, subtitle, goals }: AboutHeroProps) {
  return (
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
            {badge}
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
            <strong className="text-gray-700">{subtitle.split(' ')[0]} {subtitle.split(' ')[1]} {subtitle.split(' ')[2]} {subtitle.split(' ')[3]}</strong> {subtitle.split(' ').slice(4).join(' ')}
          </p>

          {/* Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 animate-slide-up animate-stagger-3">
            {goals.map((goal, index) => (
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
  );
}
