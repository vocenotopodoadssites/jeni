
import React from 'react';
import { Home, Users, Landmark, Scale } from 'lucide-react';
import { PracticeArea, BlogPost, Testimonial } from './types';

export const COLORS = {
  primary: '#0f172a', // Navy
  secondary: '#c5a059', // Gold/Brass
  accent: '#f8f5f2', // Light beige
  surface: '#ffffff',
  text: '#1e293b',
};

export const CONTACT_INFO = {
  phone: '(11) 98765-4321',
  phoneClean: '11987654321',
  email: 'contato@jeniadv.com.br',
  address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
  oab: 'OAB/SP 123.456',
  instagram: '@jeniadv',
  linkedin: 'jeni-santos-advogada',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário',
    description: 'Assessoria completa em transações imobiliárias, regularização de imóveis, contratos de compra e venda, locações e usucapião.',
    icon: 'Home',
  },
  {
    id: 'familia',
    title: 'Direito da Família',
    description: 'Atuação humanizada em divórcios, inventários, guarda de menores, pensão alimentícia e planejamento sucessório.',
    icon: 'Users',
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    description: 'Consultoria e acompanhamento de aposentadorias, benefícios por incapacidade e revisões de benefícios junto ao INSS.',
    icon: 'Landmark',
  },
  {
    id: 'outras',
    title: 'Consultoria Civil',
    description: 'Soluções jurídicas preventivas e contenciosas focadas na proteção de direitos fundamentais e patrimoniais.',
    icon: 'Scale',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Como funciona o processo de inventário extrajudicial?',
    excerpt: 'Entenda os requisitos e as vantagens de realizar o inventário em cartório de forma mais ágil.',
    date: '15 Mai 2024',
    category: 'Direito de Família',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Direitos na aposentadoria: o que mudou com a nova regra?',
    excerpt: 'Um guia completo sobre as principais alterações nas regras de transição da Previdência Social.',
    date: '02 Jun 2024',
    category: 'Direito Previdenciário',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73774586594?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'A importância da Due Diligence em transações imobiliárias',
    excerpt: 'Saiba por que a análise de riscos é essencial antes de assinar um contrato de compra de imóvel.',
    date: '20 Jul 2024',
    category: 'Direito Imobiliário',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'M. Silveira',
    text: 'A Dra. Jeni conduziu meu processo de inventário com extrema transparência e agilidade. Recomendo fortemente pela segurança que transmite.',
    location: 'São Paulo, SP',
  },
  {
    id: 2,
    name: 'R. Oliveira',
    text: 'Excelente profissional no Direito Imobiliário. Conseguiu resolver uma regularização de escritura que estava travada há anos.',
    location: 'Campinas, SP',
  },
];
