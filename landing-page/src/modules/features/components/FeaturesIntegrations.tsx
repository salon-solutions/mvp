import { integrationsData, featuresConfig } from '../data';

export function FeaturesIntegrations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {featuresConfig.integrations.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {featuresConfig.integrations.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrationsData.map((integration, index) => (
            <div 
              key={integration.name}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h3 className="text-gray-700 font-medium">{integration.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500">+ Muitas outras integrações disponíveis</p>
        </div>
      </div>
    </section>
  );
}
