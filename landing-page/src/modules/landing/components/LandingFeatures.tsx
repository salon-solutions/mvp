'use client';

import { useState } from 'react';
import { featuresData, landingConfig } from '../data';

export function LandingFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-gray-900">
            {landingConfig.features.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {landingConfig.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Feature Cards */}
          <div className="space-y-6">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-3xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-white shadow-xl ring-2 ring-purple-200 scale-[1.02]'
                    : 'bg-white/60 hover:bg-white/80 hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold border border-green-200">
                      <i className="iconify solar:check-circle-bold text-green-500"></i>
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Visual */}
          <div className="">
            <div className="bg-gradient-rainbow p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">
                  {featuresData[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  {featuresData[activeFeature].title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {featuresData[activeFeature].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
