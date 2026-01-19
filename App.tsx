
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up-init');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#c5a059] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Elegant WhatsApp Button */}
      <a 
        href="https://wa.me/11987654321" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[60] bg-white text-slate-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-slate-100 group overflow-hidden"
        aria-label="Fale conosco via WhatsApp"
      >
        <div className="absolute inset-0 bg-[#0f172a] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="relative z-10 text-green-600 group-hover:text-white transition-colors duration-300"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-1.5 6.5z"></path>
        </svg>
      </a>

      <style>{`
        .fade-up-init {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        ::selection {
          background-color: #c5a059;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default App;
