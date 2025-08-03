import { TimelineItem } from '../data';

interface AboutTimelineProps {
  title: string;
  subtitle: string;
  timeline: TimelineItem[];
}

export default function AboutTimeline({ title, subtitle, timeline }: AboutTimelineProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
            Nossa <span className="text-gradient-rainbow">jornada</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              {/* Timeline content - centered */}
              <div className="w-full">
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
