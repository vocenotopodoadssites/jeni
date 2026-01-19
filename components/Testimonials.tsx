
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#fdfdfd] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
           <Quote size={40} className="text-[#c5a059]/20 mx-auto mb-8" />
           <h2 className="text-3xl md:text-5xl font-serif text-slate-900 italic">O que nossos clientes dizem</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative group">
              <div className="absolute -top-4 -left-4 text-[#c5a059]/10">
                <Quote size={64} fill="currentColor" />
              </div>
              <div className="relative space-y-8">
                <p className="text-xl text-slate-600 leading-relaxed font-light italic">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-px bg-[#c5a059]"></div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">{t.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-24 text-center text-slate-400 text-[10px] italic uppercase tracking-[0.3em]">
          * Depoimentos voluntários. Preservamos o sigilo cliente-advogado conforme as normas éticas.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
