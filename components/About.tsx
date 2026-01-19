
import React from 'react';
import { Award, ShieldCheck, Bookmark } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="quem-sou" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                 alt="Escritório Jeni Santos" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="absolute -top-10 -right-10 w-48 h-48 border-8 border-[#f8f5f2] -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <h4 className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase">Trajetória Profissional</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Dra. Jeni Santos: Compromisso com a sua Tranquilidade
              </h2>
              <div className="w-24 h-1 bg-[#c5a059]"></div>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
              <p>
                Com mais de 13 anos de experiência ininterrupta, minha missão é oferecer uma advocacia que une o rigor técnico à proximidade humana. Entendo que por trás de cada processo existe um patrimônio, uma família ou o futuro de um beneficiário.
              </p>
              <p>
                Minha atuação é pautada pela transparência absoluta e pelo planejamento estratégico, garantindo que cada cliente receba uma solução personalizada para seus desafios jurídicos mais complexos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 pt-6">
              <div className="flex items-start space-x-5">
                <div className="p-4 bg-slate-50 text-[#c5a059] rounded-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Especialista</h5>
                  <p className="text-sm text-slate-500 font-light">Pós-graduação e constante atualização jurídica.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-4 bg-slate-50 text-[#c5a059] rounded-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Ética e Sigilo</h5>
                  <p className="text-sm text-slate-500 font-light">Compliance total com as diretrizes da OAB.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
