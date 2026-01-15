
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h3 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm md:text-base">
          Unleash the spice
        </h3>
        <h1 className="text-5xl md:text-8xl font-brand italic font-black text-white">
          Too Hot <span className="text-red-600">Too Spicy</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto">
          Taste that burns in all the right ways. Lahore's premium destination for bold flavors.
        </p>
        <div className="pt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollTo('menu')}
            className="px-8 py-4 spicy-gradient rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 text-white"
          >
            ORDER NOW <i className="fa fa-chevron-right text-sm"></i>
          </button>
          <button 
            onClick={() => scrollTo('about')}
            className="px-8 py-4 border border-zinc-700 hover:border-zinc-400 rounded-full font-bold text-lg transition-colors text-white"
          >
            OUR STORY
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <i className="fa fa-chevron-down text-2xl text-white"></i>
      </div>
    </div>
  );
};

export default Hero;
