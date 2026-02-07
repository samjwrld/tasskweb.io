import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(PORTFOLIO.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <div className="bg-emerald-950 text-white min-h-screen pt-20">
      <div className="py-24 text-center">
        <h1 className="animate-reveal text-4xl md:text-6xl font-serif font-bold">Selected Works</h1>
        <p className="animate-reveal mt-4 text-stone-300 text-lg" style={{ animationDelay: '0.1s' }}>A showcase of disciplined execution.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 reveal-on-scroll">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-gold-500 border-gold-500 text-emerald-950' 
                  : 'bg-transparent text-stone-400 border-emerald-800 hover:border-gold-500 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredItems.map((item, index) => (
            <div 
                key={`${item.id}-${activeCategory}`}
                className="group cursor-pointer reveal-on-scroll relative hover:z-20 transition-all duration-500 ease-out hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden w-full aspect-video border border-emerald-800/50 group-hover:border-gold-400 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-emerald-950/60 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Hover Overlay Details */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                     <h3 className="text-3xl font-serif font-bold text-white drop-shadow-md">{item.title}</h3>
                     <p className="text-gold-500 uppercase tracking-widest text-xs font-bold mt-2">{item.category}</p>
                  </div>
                </div>
                
                {/* External Details for cleaner look */}
                <div className="mt-4 flex justify-between items-center border-t border-emerald-900/50 pt-4 group-hover:border-gold-500/30 transition-colors">
                   <div>
                     <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-400 group-hover:drop-shadow-[0_0_5px_rgba(197,160,89,0.5)] transition-all">{item.title}</h3>
                     <p className="text-stone-500 text-xs uppercase tracking-widest mt-1 group-hover:text-emerald-200 transition-colors">{item.category} • {item.year}</p>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-emerald-950 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.6)] transition-all">
                      <ArrowUpRight size={18} />
                   </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;