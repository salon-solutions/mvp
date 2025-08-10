'use client';

import { LandingHero } from './LandingHero';
import { LandingFeatures } from './LandingFeatures';
import { LandingCTA } from './LandingCTA';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingHero />
      <LandingFeatures />
      <LandingCTA />
    </div>
  );
}
