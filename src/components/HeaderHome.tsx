'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Recursos', href: '/features' },
    { name: 'Preços', href: '/pricing' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
  ];

  return (
    <header ref={headerRef} className="relative bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-rainbow rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <i className="iconify solar:magic-stick-3-bold text-white text-lg sm:text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-gradient transition-all duration-300 font-inter uppercase">
                SALLA
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block group-hover:text-gray-600 transition-colors duration-300">
                Assistente Inteligente
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-purple-600 font-bold' 
                      : 'text-gray-600 hover:text-gray-900 hover:text-gradient'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-rainbow transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 rounded-lg">
              Entrar
            </button>
            <button className="bg-gradient-rainbow text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center relative overflow-hidden group">
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
              <span className="relative z-10">Começar grátis</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-200 active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-6">
            <nav className="flex flex-col border-t border-gray-100 pt-4">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-between group ${
                      isActive 
                        ? 'text-purple-600 bg-purple-50 font-bold' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <i className={`iconify solar:arrow-right-linear transition-all duration-200 ${
                      isActive 
                        ? 'text-purple-600' 
                        : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                    }`}></i>
                  </Link>
                );
              })}
              
              <div className="border-t border-gray-200 mt-4 pt-4 pb-2 space-y-3">
                <button 
                  className="w-full text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Entrar</span>
                  <i className="iconify solar:login-3-linear text-gray-400 group-hover:text-gray-600 transition-colors duration-200"></i>
                </button>
                
                <button
                  className="w-full bg-gradient-rainbow text-white px-4 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Começar grátis
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
