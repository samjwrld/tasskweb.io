import React from 'react';
import { Award, Target, Users, Gem } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white min-h-screen pt-20">
      <style>
        {`
           @keyframes slideUp {
             from { transform: translateY(50px); opacity: 0; }
             to { transform: translateY(0); opacity: 1; }
           }
           .animate-slide-up {
             animation: slideUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
           }
           .bg-texture-grid {
             background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
             background-size: 50px 50px;
           }
        `}
      </style>

      {/* Hero */}
      <div className="relative py-32 md:py-48 overflow-hidden bg-texture-grid">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/40 to-transparent"></div>
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <span className="block animate-slide-up text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-6">Since 2020</span>
            <h1 className="animate-slide-up text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight" style={{ animationDelay: '0.1s' }}>
              The Architect of <br/> <span className="text-emerald-400 italic">Excellence.</span>
            </h1>
            <p className="animate-slide-up text-xl text-stone-300 max-w-2xl font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
               TASSK was founded on a singular, unwavering belief: that the gap between artistic vision and commercial success is bridged only by discipline.
            </p>
         </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-20 border-t border-emerald-900/50">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="reveal-on-scroll">
                 <h2 className="text-3xl font-serif font-bold mb-6 text-gold-400">Our Philosophy</h2>
                 <p className="text-stone-300 text-lg leading-relaxed mb-6">
                    In a world obsessed with speed, we prioritize precision. In an industry often driven by chaos, we introduce structure. Thangallapelly Sai Surakshith established TASSK to bring the rigorous operational standards of global conglomerates to the creative sectors of India.
                 </p>
                 <p className="text-stone-300 text-lg leading-relaxed">
                    We do not just execute projects; we engineer experiences. From the frame of a film to the blueprint of a marketing strategy, every detail is intentional.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-6 reveal-on-scroll">
                 <div className="space-y-6 mt-12">
                    <img src="https://picsum.photos/400/500?grayscale&random=10" className="w-full rounded-sm border border-emerald-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700" alt="Office" />
                 </div>
                 <div className="space-y-6">
                    <img src="https://picsum.photos/400/500?grayscale&random=11" className="w-full rounded-sm border border-emerald-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700" alt="Meeting" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 bg-emerald-900/20">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="reveal-on-scroll p-10 border border-emerald-800/50 bg-emerald-950/50 hover:border-gold-500/50 hover:bg-emerald-900/40 transition-all duration-500 group">
                  <Target className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white">Precision</h3>
                  <p className="text-stone-400">We measure success in microns. Every timeline, budget, and deliverable is calculated with absolute accuracy.</p>
               </div>
               <div className="reveal-on-scroll p-10 border border-emerald-800/50 bg-emerald-950/50 hover:border-gold-500/50 hover:bg-emerald-900/40 transition-all duration-500 group" style={{ transitionDelay: '0.1s' }}>
                  <Gem className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white">Quality</h3>
                  <p className="text-stone-400">Good is the enemy of great. We strive for a standard that defines the market, rather than follows it.</p>
               </div>
               <div className="reveal-on-scroll p-10 border border-emerald-800/50 bg-emerald-950/50 hover:border-gold-500/50 hover:bg-emerald-900/40 transition-all duration-500 group" style={{ transitionDelay: '0.2s' }}>
                  <Users className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white">Integrity</h3>
                  <p className="text-stone-400">Transparent dealings, honest feedback, and a commitment to the long-term success of our partners.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;