import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, ArrowUpRight, Target, Award, Phone, Mail, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VERTICALS, PORTFOLIO, SERVICES, PROCESS_STEPS } from '../constants';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Effect Logic
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Mouse Tracking for Pattern Reveal
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        document.body.style.setProperty('--home-mouse-x', `${x}px`);
        document.body.style.setProperty('--home-mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.style.removeProperty('--home-mouse-x');
        document.body.style.removeProperty('--home-mouse-y');
    };
  }, []);

  const portfolioCategories = ['All', ...Array.from(new Set(PORTFOLIO.map(item => item.category)))];
  const filteredPortfolio = activeCategory === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <div className="relative text-white min-h-screen">
      <style>
        {`
          /* Home Specific Animations */
          @keyframes beam {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-beam {
            background: linear-gradient(to bottom, transparent, rgba(197, 160, 89, 0.4), transparent);
            width: 1px;
            height: 40%;
            position: absolute;
            top: 0;
            left: 0;
            animation: beam 12s infinite linear;
          }
          @keyframes fog {
            0% { transform: translate(0, 0) scale(1); opacity: 0.02; }
            25% { transform: translate(20px, -10px) scale(1.05); opacity: 0.05; }
            50% { transform: translate(0px, 15px) scale(0.95); opacity: 0.03; }
            75% { transform: translate(-15px, 5px) scale(1.02); opacity: 0.05; }
            100% { transform: translate(0, 0) scale(1); opacity: 0.02; }
          }
          .animate-fog {
             animation: fog 60s infinite ease-in-out;
             will-change: transform, opacity;
             filter: blur(80px);
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          
          /* Global Geometric Pattern Reveal - Isometric Hexagonal Lattice */
          .global-pattern-reveal {
            position: fixed;
            inset: 0;
            /* Premium Isometric Grid SVG Pattern - Reduced opacity (0.15) and stroke width (1) */
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.3v34.6L30 69.2 0 51.9V17.3zM30 104V69.2' stroke='%23C5A059' stroke-width='1' fill='none' opacity='0.15'/%3E%3Cpath d='M30 52L0 34.6m30 17.4l30-17.4' stroke='%23C5A059' stroke-width='1' fill='none' opacity='0.15'/%3E%3C/svg%3E");
            background-size: 60px 104px;
            
            /* Flashlight Reveal Mask - Slightly smaller radius for subtlety */
            mask-image: radial-gradient(circle 350px at var(--home-mouse-x, -500px) var(--home-mouse-y, -500px), black 0%, transparent 60%);
            -webkit-mask-image: radial-gradient(circle 350px at var(--home-mouse-x, -500px) var(--home-mouse-y, -500px), black 0%, transparent 60%);
            
            pointer-events: none;
            z-index: 2; /* Background layer: Above noise (z-1), below content (z-10) */
            mix-blend-mode: screen;
          }
        `}
      </style>

      {/* Global Pattern Layer */}
      <div className="global-pattern-reveal"></div>

      {/* 1. HERO SECTION */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Animated Background Fog - Low Z to stay behind text */}
         <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-emerald-900/30 rounded-full animate-fog"></div>
            <div 
              className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-emerald-800/20 rounded-full animate-fog" 
              style={{ animationDelay: '-15s', animationDirection: 'reverse', animationDuration: '70s' }}
            ></div>
             <div 
              className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] bg-gold-500/5 rounded-full animate-fog" 
              style={{ animationDelay: '-30s', animationDuration: '80s' }}
            ></div>
         </div>

        {/* Decorative Lines with Beams */}
        <div className="absolute top-0 left-8 md:left-24 w-px h-full bg-emerald-900/20 hidden lg:block z-0 overflow-hidden">
          <div className="animate-beam"></div>
        </div>
        <div className="absolute top-0 right-8 md:right-24 w-px h-full bg-emerald-900/20 hidden lg:block z-0 overflow-hidden">
          <div className="animate-beam" style={{ animationDelay: '5s' }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Pre-title */}
            <div className="reveal-on-scroll flex items-center gap-6 mb-10 md:mb-12">
               <div className="h-px w-16 bg-gradient-to-r from-gold-500 to-transparent"></div>
               <span className="uppercase tracking-[0.4em] text-gold-400/90 text-xs font-medium">The Art of Sai Surakshith Keshava</span>
            </div>
            
            {/* Main Title */}
            <h1 className="reveal-on-scroll font-serif font-medium text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] tracking-tight mb-16 text-white cursor-default">
              <span className="block hover:text-emerald-100 transition-colors duration-500 glow-text">Discipline.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200 italic font-light pr-4 glow-text">Design.</span>
              <span className="block text-gold-500 font-bold glow-text">Delivery.</span>
            </h1>
            
            {/* Subtext Grid */}
            <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-emerald-900/30 pt-10">
                <div className="md:col-span-7">
                  <p className="text-lg md:text-xl text-stone-300/80 font-light leading-relaxed tracking-wide">
                    Bridging the gap between <span className="text-white font-normal">artistic vision</span> and <span className="text-white font-normal">rigorous execution</span> across Film, Events, IT, and Real Estate.
                  </p>
                </div>
                
                {/* CTAs */}
                <div className="md:col-span-5 flex flex-col sm:flex-row gap-6 justify-start md:justify-end">
                  <Link
                    to="/contact"
                    className="glow-button group relative px-8 py-4 bg-gold-500/90 text-emerald-950 font-bold tracking-[0.2em] uppercase text-xs overflow-hidden text-center"
                  >
                    <span className="relative z-10 group-hover:text-emerald-950 transition-colors duration-300">Start Project</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                  </Link>
                  
                  <Link 
                    to="/about" 
                    className="glow-button-outline group flex items-center justify-center gap-3 px-8 py-4 border border-white/10 transition-all cursor-pointer"
                  >
                    <span className="uppercase tracking-[0.2em] text-xs font-bold text-stone-300 group-hover:text-gold-400 transition-colors">About Us</span>
                  </Link>
                </div>
            </div>
          </div>
        </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 -rotate-90 origin-center translate-y-8">Scroll</span>
          <div className="w-px h-24 bg-gradient-to-b from-stone-500/0 via-stone-500/50 to-stone-500/0 animate-pulse"></div>
        </div>
      </section>

      {/* MARQUEE SEPARATOR */}
      <div className="bg-emerald-900/50 border-y border-emerald-800 py-6 overflow-hidden flex relative z-20 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-emerald-100/30 font-serif text-2xl md:text-4xl italic">
          <span className="hover:text-emerald-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all cursor-default">Film Production</span> <span className="text-gold-500">•</span>
          <span className="hover:text-emerald-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all cursor-default">Event Management</span> <span className="text-gold-500">•</span>
          <span className="hover:text-emerald-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all cursor-default">Data Consulting</span> <span className="text-gold-500">•</span>
          <span className="hover:text-emerald-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all cursor-default">Real Estate Strategy</span> <span className="text-gold-500">•</span>
          <span className="hover:text-emerald-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all cursor-default">Brand Development</span> <span className="text-gold-500">•</span>
          <span className="hover:text-emerald-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all cursor-default">Digital Transformation</span> <span className="text-gold-500">•</span>
        </div>
      </div>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-32 relative z-10 border-b border-emerald-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="reveal-on-scroll">
               <h4 className="text-gold-400 uppercase tracking-widest font-bold mb-6 text-xs flex items-center gap-2 drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]">
                 <Star size={12} className="fill-gold-400" /> The Philosophy
               </h4>
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight glow-text">
                 Structure Enables <br/><span className="italic text-emerald-400">Creativity.</span>
               </h2>
               <p className="text-stone-300 mb-8 leading-relaxed text-lg font-light">
                 TASSK was born from a powerful realization: creativity without discipline is chaos. We bridge the gap between artistic vision and rigorous execution.
               </p>
               
               <div className="grid grid-cols-2 gap-8 mt-12 mb-12">
                  <div className="border-l border-gold-500/30 pl-6 hover:border-gold-500 hover:shadow-[inset_10px_0_20px_-10px_rgba(197,160,89,0.2)] transition-all duration-500 bg-emerald-900/20 p-4 rounded-sm backdrop-blur-sm">
                    <Target className="text-gold-500 mb-4 drop-shadow-[0_0_8px_rgba(197,160,89,0.6)]" size={32} />
                    <h3 className="text-lg font-serif font-bold mb-2 text-white">Precision</h3>
                    <p className="text-sm text-stone-400">Detailed planning down to the micro-second and rupee.</p>
                  </div>
                  <div className="border-l border-gold-500/30 pl-6 hover:border-gold-500 hover:shadow-[inset_10px_0_20px_-10px_rgba(197,160,89,0.2)] transition-all duration-500 bg-emerald-900/20 p-4 rounded-sm backdrop-blur-sm">
                    <Award className="text-gold-500 mb-4 drop-shadow-[0_0_8px_rgba(197,160,89,0.6)]" size={32} />
                    <h3 className="text-lg font-serif font-bold mb-2 text-white">Excellence</h3>
                    <p className="text-sm text-stone-400">Global standards delivered with local nuance.</p>
                  </div>
               </div>
               
               <Link to="/about" className="inline-flex items-center gap-3 text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors group">
                  Read Full Vision <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
               </Link>
             </div>

             <div className="reveal-on-scroll relative group">
                <div className="aspect-[4/5] bg-emerald-900/30 relative overflow-hidden rounded-sm border border-emerald-800 group-hover:border-gold-500/50 group-hover:shadow-[0_0_50px_rgba(197,160,89,0.15)] transition-all duration-700">
                   <img src="https://picsum.photos/800/1000?grayscale" alt="Philosophy" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
                   <div className="absolute bottom-10 left-10 right-10">
                      <p className="font-serif text-2xl italic text-white/90 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-all">"We do not compromise. From the smallest detail to the grandest vision, quality is non-negotiable."</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. VERTICALS SECTION */}
      <section id="verticals" className="py-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-end">
           <div>
               <h2 className="reveal-on-scroll text-5xl md:text-7xl font-serif font-bold text-white mb-6 glow-text">Our Verticals</h2>
               <p className="reveal-on-scroll text-emerald-200/60 text-lg max-w-2xl">Four distinct domains. One unified standard of excellence.</p>
           </div>
           <Link to="/verticals" className="reveal-on-scroll glow-button-outline px-6 py-3 border border-emerald-800 text-gold-400 uppercase tracking-widest text-xs font-bold mt-8 md:mt-0 hover:bg-gold-500 hover:text-emerald-950 transition-all">
             View All Domains
           </Link>
        </div>

        <div className="space-y-0">
          {VERTICALS.map((vertical, index) => (
            <div key={vertical.id} className="group relative grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-t border-emerald-900/30">
              {/* Image Side */}
              <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                 <div className="absolute inset-0 bg-emerald-950/60 group-hover:bg-emerald-950/20 transition-colors duration-700 z-10 mix-blend-multiply"></div>
                 <img 
                   src={vertical.image} 
                   alt={vertical.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent lg:hidden z-10"></div>
                 <div className="absolute bottom-10 left-10 z-20 lg:hidden">
                    <h3 className="text-3xl font-serif font-bold text-white drop-shadow-md">{vertical.title}</h3>
                 </div>
              </div>
              
              {/* Content Side - Added backdrop blur and semi-transparent bg to let pattern show but ensure readability */}
              <div className={`flex flex-col justify-center p-12 md:p-24 bg-emerald-950/80 backdrop-blur-md relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                   <span className="text-[8rem] font-serif font-bold text-white leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">0{index + 1}</span>
                </div>

                <div className="max-w-lg relative z-10">
                  <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]">Vertical 0{index + 1}</span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 hidden lg:block group-hover:text-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">{vertical.title}</h3>
                  <p className="text-stone-300 text-xl mb-10 leading-relaxed font-light">{vertical.description}</p>
                  
                  <div className="space-y-4 mb-12">
                    {vertical.features.map(f => (
                      <div key={f} className="flex items-center gap-4 group/item">
                        <CheckCircle2 size={18} className="text-gold-500/50 group-hover/item:text-gold-500 group-hover/item:drop-shadow-[0_0_5px_#C5A059] transition-all" />
                        <span className="text-emerald-100 uppercase tracking-widest text-xs font-bold group-hover/item:text-white transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/verticals" 
                    className="inline-flex items-center gap-3 border-b border-gold-500 pb-2 text-gold-400 font-bold uppercase tracking-widest hover:text-white hover:border-white hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] transition-all duration-300"
                  >
                    {vertical.cta} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES SECTION (Glass Grid) */}
      <section id="services" className="py-32 relative z-10 border-t border-emerald-900/50">
        <div className="container mx-auto px-6 md:px-12">
           <div className="text-center mb-20">
              <h2 className="reveal-on-scroll text-4xl md:text-5xl font-serif font-bold mb-4 glow-text">Core Capabilities</h2>
              <p className="reveal-on-scroll text-emerald-200/60 mb-8">Holistic solutions for complex challenges.</p>
              <Link to="/services" className="reveal-on-scroll inline-block text-gold-400 border-b border-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white hover:border-white transition-colors">
                View All Services
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, index) => (
                <div 
                  key={index} 
                  className="reveal-on-scroll glow-box group p-8 border border-emerald-800/30 bg-emerald-900/40 backdrop-blur-sm cursor-default"
                >
                  <div className="w-12 h-12 bg-emerald-950 rounded border border-emerald-800 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] transition-all duration-300">
                    <service.icon className="text-gold-500 group-hover:scale-110 transition-transform duration-300" size={20} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 group-hover:drop-shadow-[0_0_5px_rgba(197,160,89,0.5)] transition-all">{service.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed group-hover:text-emerald-100 transition-colors">{service.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 relative z-10 overflow-hidden">
        {/* Parallax Background */}
        <div 
           className="absolute inset-0 w-full z-0"
           style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               height: '140%', 
               top: '-20%',
               transform: `translateY(${scrollY * 0.1}px)`
           }}
        ></div>
        <div className="absolute inset-0 bg-emerald-950/90 z-10"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="reveal-on-scroll">
              <span className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4 block drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]">Selected Works</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold glow-text">Excellence in Action</h2>
            </div>
            
            <div className="reveal-on-scroll flex flex-col items-end gap-6 mt-8 md:mt-0">
               <div className="flex flex-wrap gap-2">
                 {portfolioCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 uppercase tracking-widest text-xs font-bold border transition-all duration-300 ${
                        activeCategory === cat 
                          ? 'bg-gold-500 border-gold-500 text-emerald-950 shadow-[0_0_20px_rgba(197,160,89,0.4)]' 
                          : 'bg-transparent border-emerald-800 text-stone-400 hover:border-gold-500 hover:text-gold-400 hover:shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                      }`}
                    >
                      {cat}
                    </button>
                 ))}
               </div>
               <Link to="/portfolio" className="text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white flex items-center gap-2">
                  View Full Portfolio <ArrowRight size={14} />
               </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredPortfolio.map((item, index) => (
              <div 
                key={`${item.id}-${activeCategory}`}
                className="group cursor-pointer reveal-on-scroll relative hover:z-20 transition-all duration-500 ease-out hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden w-full aspect-video border border-emerald-900/50 group-hover:border-gold-400 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-500">
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
                
                {/* External Details */}
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
      </section>

      {/* 6. PROCESS SECTION (Timeline) */}
      <section id="process" className="py-32 relative z-10 border-t border-emerald-900/50">
        <div className="container mx-auto px-6 md:px-12">
           <div className="text-center mb-20">
              <h2 className="reveal-on-scroll text-4xl md:text-5xl font-serif font-bold mb-4 glow-text">The Methodology</h2>
              <p className="reveal-on-scroll text-emerald-200/60 mb-8">How we consistently deliver excellence.</p>
              <Link to="/process" className="reveal-on-scroll text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white border-b border-gold-400 inline-block pb-1">
                 Learn More About Our Process
              </Link>
           </div>

           <div className="max-w-5xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-emerald-800 -translate-x-1/2 md:translate-x-0 shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>

              <div className="space-y-16">
                 {PROCESS_STEPS.map((step, index) => (
                    <div key={step.number} className={`reveal-on-scroll flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                       <div className="flex-1 text-left md:text-right pl-12 md:pl-0 md:pr-12 group hover:translate-x-2 md:hover:-translate-x-2 transition-transform duration-300">
                          {index % 2 === 0 ? (
                             <>
                                <h3 className="text-2xl font-serif font-bold text-gold-400 mb-2 group-hover:drop-shadow-[0_0_5px_rgba(197,160,89,0.6)] transition-all">{step.title}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-200 transition-colors bg-emerald-950/50 p-4 rounded-sm backdrop-blur-sm inline-block">{step.description}</p>
                             </>
                          ) : (
                             <div className="hidden md:block text-emerald-900 font-serif text-8xl opacity-50 font-bold select-none group-hover:text-emerald-800 group-hover:opacity-100 transition-all duration-500">{step.number}</div>
                          )}
                       </div>

                       <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-emerald-950 border-2 border-gold-500 -translate-x-1/2 md:translate-x-[-1px] z-10 box-content shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>

                       <div className="flex-1 text-left pl-12 md:pl-12 group hover:translate-x-2 transition-transform duration-300">
                          {index % 2 !== 0 ? (
                             <>
                                <h3 className="text-2xl font-serif font-bold text-gold-400 mb-2 group-hover:drop-shadow-[0_0_5px_rgba(197,160,89,0.6)] transition-all">{step.title}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-200 transition-colors bg-emerald-950/50 p-4 rounded-sm backdrop-blur-sm inline-block">{step.description}</p>
                             </>
                          ) : (
                             <div className="hidden md:block text-emerald-900 font-serif text-8xl opacity-50 font-bold select-none group-hover:text-emerald-800 group-hover:opacity-100 transition-all duration-500">{step.number}</div>
                          )}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-32 relative z-10 border-t border-emerald-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="reveal-on-scroll text-5xl md:text-7xl font-serif font-bold mb-6 glow-text">Let's Build.</h2>
            <p className="reveal-on-scroll text-stone-400 max-w-2xl mx-auto mb-8">
               Ready to bring structure to your vision? Reach out to us.
            </p>
             <Link to="/contact" className="reveal-on-scroll glow-button inline-flex bg-gold-500 text-emerald-950 px-10 py-5 font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors duration-300">
               Start A Project
             </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <div className="reveal-on-scroll bg-emerald-900/20 p-10 border border-emerald-800/50 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500">
               <h3 className="text-2xl font-serif font-bold mb-8 text-white">Contact Information</h3>
               <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                     <Phone className="text-gold-500 mt-1 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.8)] transition-all" size={20} />
                     <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-1">Call Us</p>
                        <p className="text-xl text-white group-hover:text-gold-400 transition-colors">+91 98765 43210</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <Mail className="text-gold-500 mt-1 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.8)] transition-all" size={20} />
                     <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-1">Email Us</p>
                        <p className="text-xl text-white group-hover:text-gold-400 transition-colors">contact@tassk.co.in</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <MapPin className="text-gold-500 mt-1 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.8)] transition-all" size={20} />
                     <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-1">Visit Us</p>
                        <p className="text-lg text-stone-300 group-hover:text-white transition-colors">Jubilee Hills, Hyderabad, India</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="reveal-on-scroll bg-emerald-900/10 p-8 rounded-sm backdrop-blur-sm border border-emerald-800/30">
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-2">First Name</label>
                        <input type="text" className="w-full bg-emerald-900/40 border-b border-emerald-700 p-3 focus:outline-none focus:border-gold-500 focus:shadow-[0_0_15px_rgba(197,160,89,0.3)] text-white transition-all placeholder-emerald-800" placeholder="John" />
                     </div>
                     <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-2">Last Name</label>
                        <input type="text" className="w-full bg-emerald-900/40 border-b border-emerald-700 p-3 focus:outline-none focus:border-gold-500 focus:shadow-[0_0_15px_rgba(197,160,89,0.3)] text-white transition-all placeholder-emerald-800" placeholder="Doe" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-2">Email</label>
                     <input type="email" className="w-full bg-emerald-900/40 border-b border-emerald-700 p-3 focus:outline-none focus:border-gold-500 focus:shadow-[0_0_15px_rgba(197,160,89,0.3)] text-white transition-all placeholder-emerald-800" placeholder="john@example.com" />
                  </div>
                  <div>
                     <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-2">Message</label>
                     <textarea className="w-full bg-emerald-900/40 border-b border-emerald-700 p-3 h-32 focus:outline-none focus:border-gold-500 focus:shadow-[0_0_15px_rgba(197,160,89,0.3)] text-white transition-all placeholder-emerald-800" placeholder="Tell us about your vision..."></textarea>
                  </div>
                  <button type="submit" className="glow-button w-full bg-gold-500 text-emerald-950 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-emerald-950 transition-all duration-300">
                     Send Request
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
