import {
  contactOptionsData,
  contactInfoData,
  contactConfig,
} from '../data';
import ContactHero from './ContactHero';
import ContactOptions from './ContactOptions';
import ContactForm from './ContactForm';
import ContactInfoSection from './ContactInfoSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero
        badge={contactConfig.hero.badge}
        title={contactConfig.hero.title}
        subtitle={contactConfig.hero.subtitle}
      />

      <ContactOptions options={contactOptionsData} />

      <ContactForm
        title={contactConfig.form.title}
        subtitle={contactConfig.form.subtitle}
      />

      <ContactInfoSection contactInfo={contactInfoData} />
    </div>
  );
}
