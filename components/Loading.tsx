import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-emerald-950/90 backdrop-blur-sm transition-all duration-500">
      <div className="flex flex-col items-center">
        {/* Animated Emblem */}
        <div className="relative w-20 h-20 mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 border-t-2 border-b-2 border-gold-500/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          {/* Inner ring */}
          <div className="absolute inset-2 border-r-2 border-l-2 border-gold-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          {/* Center pulsating dot */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(197,160,89,0.8)]"></div>
          </div>
        </div>
        
        {/* Text */}
        <div className="text-gold-500 font-serif tracking-[0.4em] text-xs font-bold animate-pulse">
          LOADING
        </div>
      </div>
    </div>
  );
};
