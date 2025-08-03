'use client';

import { PricingHero } from './PricingHero';
import { PricingPlans } from './PricingPlans';
import { PricingFAQ } from './PricingFAQ';
import { PricingCTA } from './PricingCTA';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
}
