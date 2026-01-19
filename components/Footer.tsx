
import React from 'react';
import { ChevronUp, Scale } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">Jeni Santos</span>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#c5a059]">Advocacia de Excelência</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm font-light">
              Escritório dedicado a prover soluções jurídicas sólidas, combinando tradição com uma visão moderna do direito para garantir a melhor defesa dos seus interesses.
            </p>
            <div className="flex items-center space-x-3 text-slate-300">
               <Scale size={20} />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{CONTACT_INFO.oab}</span>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">Links Úteis</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
              <li><a href="#home" className="hover:text-[#c5a059] transition-colors">Início</a></li>
              <li><a href="#quem-sou" className="hover:text-[#c5a059] transition-colors">Sobre a Advogada</a></li>
              <li><a href="#areas" className="hover:text-[#c5a059] transition-colors">Áreas de Atuação</a></li>
              <li><a href="#blog" className="hover:text-[#c5a059] transition-colors">Conteúdo</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">Jurídico</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Aviso de Cookies</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Ética Profissional</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} Jeni Santos Advocacia. Desenvolvido com excelência técnica.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center hover:bg-[#0f172a] hover:text-white transition-all shadow-sm"
            aria-label="Back to top"
          >
            <ChevronUp size={20} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
        
        <div className="mt-16 text-center border-t border-slate-50 pt-10">
          <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] leading-relaxed max-w-4xl mx-auto">
            Este site tem caráter meramente informativo e educativo sobre a atuação profissional, respeitando integralmente as diretrizes do Provimento 205/2021 do Conselho Federal da OAB. Não constitui publicidade mercantil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
