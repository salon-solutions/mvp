import { FeaturesHero } from './FeaturesHero';
import { FeaturesGrid } from './FeaturesGrid';
import { FeaturesIntegrations } from './FeaturesIntegrations';
import { FeaturesCTA } from './FeaturesCTA';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesIntegrations />
      <FeaturesCTA />
    </div>
  );
}
