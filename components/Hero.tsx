
import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#fdfdfd]">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f5f2] -z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-[1.1]">
              Experiência que <br />
              <span className="italic text-[#c5a059]">Protege</span> seus <br />
              Direitos.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-light">
              Mais de 13 anos de atuação sólida em Direito Imobiliário, Família e Previdenciário. Atendimento técnico de excelência com foco na sua segurança jurídica.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#contato"
              className="w-full sm:w-auto bg-[#0f172a] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 text-center"
            >
              Agende uma conversa
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all text-center"
            >
              <MessageCircle size={20} className="text-green-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center space-x-4 pt-4">
             <div className="w-12 h-1 bg-[#c5a059]"></div>
             <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">
               {CONTACT_INFO.oab} • Advocacia Ética
             </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-sm overflow-hidden shadow-2xl border-[16px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Dra. Jeni Santos" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            {/* Overlay detail */}
            <div className="absolute bottom-10 -left-10 bg-[#0f172a] text-white p-8 hidden xl:block shadow-2xl">
               <p className="text-4xl font-serif text-[#c5a059] mb-1">13+</p>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed opacity-80">Anos de atuação no <br />mercado jurídico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
