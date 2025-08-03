'use client';

import { useState } from 'react';
import HeaderHome from '@/components/HeaderHome';
import FooterHome from '@/components/FooterHome';

export default function ContactPage() {
  const [formData, setFormData] = useState({
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactOptions = [
    {
      title: 'Suporte Técnico',
      description: 'Precisa de ajuda com o sistema? Nossa equipe está aqui para você.',
      icon: '⚙️',
      response: 'Resposta em até 2 horas',
      channels: ['Chat ao vivo', 'Email', 'WhatsApp'],
    },
    {
      title: 'Vendas',
      description: 'Quer conhecer melhor o ParlorHub? Fale com nossos especialistas.',
      icon: '📞',
      response: 'Resposta imediata',
      channels: ['Chamada agendada', 'WhatsApp', 'Email'],
    },
    {
      title: 'Parcerias',
      description: 'Interessado em se tornar um parceiro oficial do ParlorHub?',
      icon: '🤝',
      response: 'Resposta em 24h',
      channels: ['Email dedicado', 'Reunião virtual'],
    },
  ];

  return (
    <>
      <HeaderHome />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-primary opacity-15 rounded-full blur-2xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-100 shadow-sm transition-all duration-500 hover:scale-[1.02] animate-fade-in">
                <span className="text-lg">👋</span>
                Estamos aqui para ajudar
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900 animate-slide-up">
                <span className="text-gradient-rainbow hover:scale-[1.02] transition-transform duration-500">
                  Fale
                </span>
                <span className="block mt-2 text-gray-800">
                  conosco
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-500 animate-slide-up animate-stagger-2">
                <strong className="text-gray-700">Nossa equipe especializada</strong> está pronta para ajudar você a transformar seu salão.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-20 animate-slide-up animate-stagger-3">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white shadow-lg border-2 border-gray-100">
                    <span className="text-3xl">{option.icon}</span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 text-gray-900">{option.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>

                  {/* Response Time */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⏰</span>
                      <span className="font-bold text-green-700">{option.response}</span>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="space-y-2">
                    {option.channels.map((channel, channelIndex) => (
                      <div key={channelIndex} className="flex items-center gap-2">
                        <span className="text-sm">✅</span>
                        <span className="text-gray-600 text-sm">{channel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                Envie sua <span className="text-gradient-rainbow">mensagem</span>
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário e nossa equipe entrará em contato rapidamente
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up animate-stagger-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Type */}
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    Como podemos ajudar?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'suporte', label: 'Suporte', icon: '⚙️' },
                      { value: 'vendas', label: 'Vendas', icon: '📞' },
                      { value: 'parceria', label: 'Parceria', icon: '🤝' },
                    ].map((type) => (
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
                    <span className="text-xl">✈️</span>
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 animate-slide-up animate-stagger-4">
              {[
                {
                  title: 'WhatsApp',
                  info: '(11) 99999-9999',
                  description: 'Suporte instantâneo',
                  icon: '📱',
                },
                {
                  title: 'Email',
                  info: 'contato@parlorhub.com.br',
                  description: 'Resposta em até 2h',
                  icon: '📧',
                },
                {
                  title: 'Horário',
                  info: 'Seg-Sex: 8h-18h',
                  description: 'Suporte especializado',
                  icon: '🕒',
                },
              ].map((contact, index) => (
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
      </div>
      <FooterHome />
    </>
  );
}
