import { TeamMember } from '../data';

interface AboutTeamProps {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

export default function AboutTeam({ title, subtitle, team }: AboutTeamProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
            Conheça os <span className="text-gradient-rainbow">fundadores</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg flex items-center justify-center ${
                index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
              }`}>
                <span className="text-lg sm:text-xl md:text-3xl font-black text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-2 text-gray-900">{member.name}</h3>
              <div className="text-purple-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</div>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
