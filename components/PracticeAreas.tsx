
import React from 'react';
import { Home, Users, Landmark, Scale, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';

const iconMap: Record<string, any> = {
  Home,
  Users,
  Landmark,
  Scale,
};

const PracticeAreas: React.FC = () => {
  return (
    <section id="areas" className="py-32 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <h4 className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase">Especialidades</h4>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-[#c5a059] mx-auto"></div>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Consultoria e advocacia contenciosa focada em resultados práticos e segurança patrimonial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = iconMap[area.icon];
            return (
              <div 
                key={area.id}
                className="group bg-white p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-sm flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-[#f8f5f2] text-[#c5a059] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#0f172a] group-hover:text-white transition-colors duration-500">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#c5a059] transition-colors">{area.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light flex-grow">
                  {area.description}
                </p>
                <a 
                  href="#contato" 
                  className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#0f172a] transition-colors"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="mt-24 bg-[#0f172a] p-12 md:p-20 rounded-sm text-center md:text-left flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
           <div className="relative z-10 space-y-4">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Necessita de uma consultoria personalizada?</h3>
              <p className="text-slate-400 text-lg font-light">Entre em contato para uma análise técnica detalhada do seu caso.</p>
           </div>
           <a 
            href="#contato"
            className="relative z-10 whitespace-nowrap bg-[#c5a059] text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[#b59049] transition-all shadow-xl shadow-black/20"
           >
             Solicitar atendimento
           </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
