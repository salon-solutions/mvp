'use client';

import { useState } from 'react';
import { FormData, contactFormTypes } from '../data';

interface ContactFormProps {
  title: string;
  subtitle: string;
}

export default function ContactForm({ title, subtitle }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    salon: '',
    message: '',
    type: 'suporte',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Envie sua <span className="text-gradient-rainbow">mensagem</span>
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Type */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-4">
                Como podemos ajudar?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactFormTypes.map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                      formData.type === type.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={type.value}
                      checked={formData.type === type.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xl">{type.icon}</span>
                    <span className="font-semibold text-gray-700">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-purple-500 focus:outline-none transition-all duration-500 placeholder:text-gray-600 placeholder:font-medium text-gray-900"
                  placeholder="Ex: Maria Silva"
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-purple-500 focus:outline-none transition-all duration-500 placeholder:text-gray-600 placeholder:font-medium text-gray-900"
                  placeholder="maria@salaobeleza.com.br"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-purple-500 focus:outline-none transition-all duration-500 placeholder:text-gray-600 placeholder:font-medium text-gray-900"
                  placeholder="(11) 98765-4321"
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  Nome do salão
                </label>
                <input
                  type="text"
                  name="salon"
                  value={formData.salon}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-purple-500 focus:outline-none transition-all duration-500 placeholder:text-gray-600 placeholder:font-medium text-gray-900"
                  placeholder="Ex: Salão Beleza & Estilo"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                Mensagem *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-purple-500 focus:outline-none transition-all duration-500 resize-none placeholder:text-gray-600 placeholder:font-medium text-gray-900"
                placeholder="Ex: Preciso de um sistema para agendar clientes e controlar estoque. Meu salão tem 3 profissionais e atende cerca de 50 clientes por semana..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-rainbow text-white px-10 py-4 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-2 mx-auto shadow-xl"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
