import React from 'react';
import { VERTICALS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Verticals: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white min-h-screen pt-20">
       <div className="py-24 text-center border-b border-emerald-900/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="animate-reveal text-5xl md:text-7xl font-serif font-bold mb-6">Our Verticals</h1>
            <p className="animate-reveal text-xl text-stone-300 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
               Four distinct domains. One unified standard of excellence.
            </p>
          </div>
       </div>

       <div className="space-y-0">
         {VERTICALS.map((vertical, index) => (
           <div key={vertical.id} className="group relative min-h-screen flex items-center border-b border-emerald-900/30 overflow-hidden sticky top-0 bg-emerald-950 z-0">
             
             {/* Background Image with Parallax-like opacity */}
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                <img src={vertical.image} alt={vertical.title} className="w-full h-full object-cover grayscale" />
             </div>
             <div className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/30"></div>

             <div className="container mx-auto px-6 md:px-12 relative z-20 w-full">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                   
                   {/* Number & Title */}
                   <div className="md:w-1/2 reveal-on-scroll">
                      <span className="text-9xl font-serif font-bold text-emerald-800/50 block -mb-16 -ml-4">0{index+1}</span>
                      <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 relative">{vertical.title}</h2>
                      <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed mb-10">
                        {vertical.description}
                      </p>
                      
                      <Link to="/contact" className="inline-flex items-center gap-4 text-gold-500 uppercase tracking-widest font-bold hover:gap-6 transition-all">
                         {vertical.cta} <ArrowRight />
                      </Link>
                   </div>

                   {/* Features Card */}
                   <div className="md:w-1/2 reveal-on-scroll delay-100">
                      <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-700/30 p-10 md:p-14 hover:border-gold-500/50 transition-colors duration-500">
                         <h3 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-8 border-b border-emerald-800 pb-4">Key Capabilities</h3>
                         <ul className="space-y-6">
                           {vertical.features.map(feature => (
                             <li key={feature} className="flex items-center text-white text-lg">
                               <span className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center mr-4 text-gold-500">
                                 <Check size={16} />
                               </span>
                               {feature}
                             </li>
                           ))}
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};

export default Verticals;