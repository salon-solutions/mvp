import { Value } from '../data';

interface AboutValuesProps {
  title: string;
  subtitle: string;
  values: Value[];
}

export default function AboutValues({ title, subtitle, values }: AboutValuesProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
            Nossos <span className="text-gradient-rainbow">valores</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl mb-3 sm:mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-r ${value.gradient} shadow-lg mx-auto`}>
                <span className="text-lg sm:text-xl md:text-2xl text-white">{value.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
