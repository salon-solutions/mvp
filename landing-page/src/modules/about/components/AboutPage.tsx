import {
  teamData,
  valuesData,
  timelineData,
  goalsData,
  aboutConfig,
} from '../data';
import AboutHero from './AboutHero';
import AboutMission from './AboutMission';
import AboutValues from './AboutValues';
import AboutTimeline from './AboutTimeline';
import AboutTeam from './AboutTeam';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero 
        badge={aboutConfig.hero.badge}
        title={aboutConfig.hero.title}
        subtitle={aboutConfig.hero.subtitle}
        goals={goalsData}
      />

      <AboutMission
        title={aboutConfig.mission.title}
        headline={aboutConfig.mission.headline}
        description={aboutConfig.mission.description}
        extraDescription={aboutConfig.mission.extraDescription}
        goal={aboutConfig.mission.goal}
      />

      <AboutValues
        title={aboutConfig.values.title}
        subtitle={aboutConfig.values.subtitle}
        values={valuesData}
      />

      <AboutTimeline
        title={aboutConfig.timeline.title}
        subtitle={aboutConfig.timeline.subtitle}
        timeline={timelineData}
      />

      <AboutTeam
        title={aboutConfig.team.title}
        subtitle={aboutConfig.team.subtitle}
        team={teamData}
      />

      <AboutCTA
        title={aboutConfig.cta.title}
        subtitle={aboutConfig.cta.subtitle}
        primaryButton={aboutConfig.cta.primaryButton}
        secondaryButton={aboutConfig.cta.secondaryButton}
      />
    </div>
  );
}
