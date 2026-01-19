
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-slate-100 pb-12">
          <div className="space-y-6">
            <h4 className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase">Conhecimento</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">Artigos e Informativos</h2>
          </div>
          <a 
            href="#" 
            className="text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center space-x-3 hover:text-[#c5a059] transition-all group"
          >
            <span>Acessar Blog Completo</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col h-full group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 shadow-md">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-white px-6 py-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">{post.category}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-xs mb-4 font-mono">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#c5a059] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">
                {post.excerpt}
              </p>
              <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:translate-x-1 transition-transform">
                <span>Continuar Lendo</span>
                <ArrowRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
