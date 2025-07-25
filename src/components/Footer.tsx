'use client';

export default function FooterHome() {
  const productLinks = [
    { name: 'Agendamento', href: '#agendamento' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Pagamentos', href: '#pagamentos' },
  ];

  const companyLinks = [
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Carreiras', href: '#carreiras' },
    { name: 'Blog', href: '#blog' },
    { name: 'Imprensa', href: '#imprensa' },
  ];

  const supportLinks = [
    { name: 'Central de Ajuda', href: '#ajuda' },
    { name: 'Tutoriais', href: '#tutoriais' },
    { name: 'API Docs', href: '#api' },
    { name: 'Status', href: '#status' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'solar:instagram-bold', href: '#' },
    { name: 'Facebook', icon: 'solar:facebook-bold', href: '#' },
    { name: 'Twitter', icon: 'solar:twitter-bold', href: '#' },
    { name: 'LinkedIn', icon: 'solar:linkedin-bold', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-rainbow rounded-xl flex items-center justify-center">
                <i className="iconify solar:magic-stick-3-bold text-white text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-inter uppercase">SALLA</span>
                <span className="text-sm text-gray-400 -mt-1">
                  Assistente Inteligente
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transformamos salões de beleza em experiências extraordinárias 
              através da tecnologia mais avançada do mercado.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-rainbow transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={`iconify ${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Suporte
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Receba dicas e novidades do mundo da beleza.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
              <button className="bg-gradient-rainbow text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                <i className="iconify solar:letter-bold"></i>
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 SALLA. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <a
                href="#privacidade"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacidade
              </a>
              <a
                href="#termos"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <i className="iconify solar:shield-check-bold text-green-400"></i>
                <span>Seguro & Confiável</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
