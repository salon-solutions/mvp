'use client';

import { LandingHero } from './LandingHero';
import { LandingFeatures } from './LandingFeatures';
import { LandingStats } from './LandingStats';
import { LandingCTA } from './LandingCTA';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingHero />
      <LandingFeatures />
      <LandingStats />
      <LandingCTA />
    </div>
  );
}
