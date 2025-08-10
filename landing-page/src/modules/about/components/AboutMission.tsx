interface AboutMissionProps {
  title: string;
  headline: string;
  description: string;
  extraDescription: string;
  goal: string;
}

export default function AboutMission({ 
  title, 
  headline, 
  description, 
  extraDescription, 
  goal 
}: AboutMissionProps) {
  return (
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
              {headline}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              {description}
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              {extraDescription}
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
                {goal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
