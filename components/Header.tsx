
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Quem sou', href: '#quem-sou' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3 border-b border-slate-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-slate-900">
            Jeni Santos
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-slate-500 group-hover:text-[#c5a059] transition-colors">
            Advogada
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-slate-600 hover:text-[#c5a059] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-8">
          <a 
            href={`tel:${CONTACT_INFO.phoneClean}`}
            className="flex items-center space-x-2 text-slate-700 hover:text-[#c5a059] transition-colors"
          >
            <Phone size={16} className="text-[#c5a059]" />
            <span className="text-sm font-bold">{CONTACT_INFO.phone}</span>
          </a>
          <a
            href="#contato"
            className="bg-[#0f172a] text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Fale com um Advogado
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 top-[76px] bg-white transition-all duration-500 transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <nav className="flex flex-col space-y-6 p-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-50 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 flex flex-col space-y-6">
             <a 
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="flex items-center space-x-3 text-slate-900 font-bold"
            >
              <Phone size={20} className="text-[#c5a059]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href="#contato"
              className="bg-[#0f172a] text-white text-center py-5 rounded-sm font-bold uppercase tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Conversa
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
