
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve a Dra. Jeni Santos entrará em contato.');
  };

  return (
    <section id="contato" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-24">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h4 className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase">Canais Diretos</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">Vamos iniciar uma <br />conversa?</h2>
              <div className="w-16 h-1 bg-[#c5a059]"></div>
              <p className="text-slate-500 font-light text-lg leading-relaxed">
                Escolha o canal mais conveniente para você. Garantimos absoluto sigilo profissional e atenção técnica ao seu caso.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#f8f5f2] text-[#c5a059] flex items-center justify-center rounded-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Telefone / WhatsApp</h5>
                  <p className="text-slate-500 font-light text-lg">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#f8f5f2] text-[#c5a059] flex items-center justify-center rounded-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">E-mail Profissional</h5>
                  <p className="text-slate-500 font-light text-lg">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#f8f5f2] text-[#c5a059] flex items-center justify-center rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Localização</h5>
                  <p className="text-slate-500 font-light text-lg leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
               <a href="#" className="w-12 h-12 border border-slate-100 flex items-center justify-center rounded-full text-slate-400 hover:bg-[#0f172a] hover:text-white transition-all">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-12 h-12 border border-slate-100 flex items-center justify-center rounded-full text-slate-400 hover:bg-[#0f172a] hover:text-white transition-all">
                 <Linkedin size={20} />
               </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#fcfcfc] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Seu Nome</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Identificação completa"
                      className="w-full bg-white border-b border-slate-200 py-4 px-0 rounded-none focus:outline-none focus:border-[#c5a059] transition-all placeholder:text-slate-300 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Seu E-mail</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@exemplo.com"
                      className="w-full bg-white border-b border-slate-200 py-4 px-0 rounded-none focus:outline-none focus:border-[#c5a059] transition-all placeholder:text-slate-300 font-light"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Resumo da sua necessidade</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Como podemos ajudar no seu caso?"
                    className="w-full bg-white border-b border-slate-200 py-4 px-0 rounded-none focus:outline-none focus:border-[#c5a059] transition-all resize-none placeholder:text-slate-300 font-light"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#0f172a] text-white py-6 px-12 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center space-x-4 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group"
                >
                  <span>Enviar Solicitação</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-[9px] text-center text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
                  As informações enviadas são protegidas pelo sigilo profissional advogado-cliente.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
