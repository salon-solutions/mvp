interface AboutCTAProps {
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
}

export default function AboutCTA({ title, subtitle, primaryButton, secondaryButton }: AboutCTAProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-rainbow relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white/15 rounded-full blur-2xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 drop-shadow-sm">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-95 drop-shadow-sm px-2">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center px-4">
          <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-xl">
            {primaryButton}
          </button>
          <button className="border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/15 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
            {secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
}
