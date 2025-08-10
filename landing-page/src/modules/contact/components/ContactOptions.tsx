import { ContactOption } from '../data';

interface ContactOptionsProps {
  options: ContactOption[];
}

export default function ContactOptions({ options }: ContactOptionsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white shadow-lg border-2 border-gray-100">
                <span className="text-3xl">{option.icon}</span>
              </div>

              <h3 className="text-2xl font-black mb-4 text-gray-900">{option.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⏰</span>
                  <span className="font-bold text-green-700">{option.response}</span>
                </div>
              </div>

              {/* Channels */}
              <div className="space-y-2">
                {option.channels.map((channel, channelIndex) => (
                  <div key={channelIndex} className="flex items-center gap-2">
                    <span className="text-sm">✅</span>
                    <span className="text-gray-600 text-sm">{channel}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
