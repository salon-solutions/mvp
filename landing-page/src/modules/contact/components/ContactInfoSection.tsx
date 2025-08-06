import { ContactInfo } from '../data';

interface ContactInfoSectionProps {
  contactInfo: ContactInfo[];
}

export default function ContactInfoSection({ contactInfo }: ContactInfoSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 text-center hover:scale-[1.02]"
            >
              <span className="text-4xl mb-4 block">{contact.icon}</span>
              <h3 className="text-xl font-black mb-2 text-gray-900">{contact.title}</h3>
              <p className="text-lg font-bold text-purple-600 mb-2">{contact.info}</p>
              <p className="text-gray-600">{contact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
