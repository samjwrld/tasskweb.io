import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white min-h-screen pt-20">
       <div className="py-24 text-center">
          <h1 className="animate-reveal text-4xl md:text-6xl font-serif font-bold">The TASSK Methodology</h1>
          <p className="animate-reveal mt-4 text-stone-300 text-lg" style={{ animationDelay: '0.1s' }}>How we consistently deliver excellence.</p>
       </div>
       
       <div className="container mx-auto px-6 md:px-12 py-20">
         <div className="max-w-5xl mx-auto relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-800 -translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>

           <div className="space-y-32">
             {PROCESS_STEPS.map((step, index) => (
               <div key={step.number} className={`reveal-on-scroll flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                 {/* Text Side */}
                 <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-3xl font-serif font-bold text-gold-400 mb-4">{step.title}</h3>
                    <p className="text-stone-300 text-lg leading-relaxed">{step.description}</p>
                 </div>
                 
                 {/* Center Node */}
                 <div className="relative z-10 w-24 h-24 rounded-full bg-emerald-950 border-4 border-gold-500 flex items-center justify-center text-white font-serif font-bold text-3xl shrink-0 shadow-[0_0_30px_rgba(197,160,89,0.4)]">
                   {index + 1}
                 </div>

                 {/* Empty Side for balance */}
                 <div className="flex-1 hidden md:block">
                     <div className={`text-9xl font-serif font-bold text-emerald-900/50 opacity-50 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                         {step.number}
                     </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
    </div>
  );
};

export default Process;