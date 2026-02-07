import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white min-h-screen pt-20">
      {/* Header */}
      <div className="bg-emerald-900/50 text-white py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <h1 className="animate-reveal text-4xl md:text-6xl font-serif font-bold relative z-10">Core Capabilities</h1>
        <p className="animate-reveal mt-4 text-emerald-200 text-lg relative z-10" style={{ animationDelay: '0.1s' }}>Holistic solutions for complex challenges.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-10 border border-emerald-800/30 bg-emerald-900/10 hover:bg-emerald-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 reveal-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 bg-emerald-950 border border-emerald-800 rounded-lg flex items-center justify-center mb-8 group-hover:border-gold-500 group-hover:shadow-[0_0_35px_rgba(197,160,89,0.5)] transition-all duration-500 relative z-10 group-hover:scale-105">
                <service.icon className="text-emerald-400 group-hover:text-gold-400 transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110" size={28} />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors relative z-10">{service.title}</h3>
              <p className="text-stone-400 leading-relaxed group-hover:text-emerald-100 transition-colors relative z-10">{service.description}</p>
              
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                 <service.icon size={140} className="text-gold-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;