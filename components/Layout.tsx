import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, Outlet, Link } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Twitter, Phone, ArrowRight } from 'lucide-react';
import { BRAND_NAME, NAV_ITEMS } from '../constants';
import { Loading } from './Loading';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Mouse Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Scroll Reveal Observer for all pages - Robust Implementation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
        const elements = document.querySelectorAll('.reveal-on-scroll:not(.animate-reveal)');
        elements.forEach((el) => observer.observe(el));
    };

    // Initial check
    observeElements();

    // Use MutationObserver to detect when Suspense resolves and content mounts
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          shouldUpdate = true;
        }
      });
      if (shouldUpdate) {
        observeElements();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Fallback timer just in case
    const timeout = setTimeout(observeElements, 500);

    return () => {
        observer.disconnect();
        mutationObserver.disconnect();
        clearTimeout(timeout);
    };
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-emerald-950 text-white selection:bg-gold-500 selection:text-emerald-950 overflow-x-hidden relative">
      {/* GLOBAL STYLES & ANIMATIONS */}
      <style>
        {`
          @keyframes reveal {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-reveal {
            animation: reveal 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards;
          }
          .reveal-on-scroll {
            opacity: 0;
            will-change: opacity, transform;
          }
          .global-spotlight {
            background: radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.1), rgba(197, 160, 89, 0.05) 25%, transparent 60%);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 30; /* Behind header and menu, above content */
            mix-blend-mode: screen;
          }
          .noise-bg {
             background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             pointer-events: none;
             z-index: 1;
             opacity: 0.3;
          }
          .glow-text:hover {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(197, 160, 89, 0.8);
            transition: text-shadow 0.4s ease;
          }
           /* Refined Elegant Buttons */
          .glow-button {
             box-shadow: 0 0 0 rgba(197, 160, 89, 0);
             transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glow-button:hover {
             box-shadow: 0 10px 30px -5px rgba(197, 160, 89, 0.3), 0 0 15px rgba(197, 160, 89, 0.2);
             transform: translateY(-2px);
          }
          
          /* Mobile Menu Animations */
          .mobile-menu-enter {
            opacity: 0;
            transform: translateX(100%);
          }
          .mobile-menu-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: opacity 300ms, transform 400ms cubic-bezier(0.2, 1, 0.3, 1);
          }
          .mobile-menu-exit {
            opacity: 1;
            transform: translateX(0);
          }
          .mobile-menu-exit-active {
            opacity: 0;
            transform: translateX(100%);
            transition: opacity 300ms, transform 400ms cubic-bezier(0.2, 1, 0.3, 1);
          }
          
          .mobile-link-enter {
             opacity: 0;
             transform: translateY(20px);
          }
          .mobile-link-active {
             opacity: 1;
             transform: translateY(0);
             transition: all 0.5s ease-out;
          }
        `}
      </style>

      {/* FIXED BACKGROUNDS */}
      <div className="noise-bg"></div>
      <div 
        className="global-spotlight" 
        style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` } as React.CSSProperties}
      ></div>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen ? 'bg-emerald-950/90 backdrop-blur-md border-emerald-900 py-4 shadow-lg' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl md:text-3xl font-serif font-bold text-white tracking-widest hover:text-gold-400 transition-colors relative z-50"
          >
            {BRAND_NAME}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                    isActive ? 'text-gold-400 font-bold' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 w-full h-px bg-gold-400 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-6 px-6 py-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-emerald-950 transition-all duration-300 uppercase text-xs tracking-widest font-bold"
            >
              Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-gold-400 transition-colors relative z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-emerald-950 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
           {/* Decorative Elements for Mobile Menu */}
           <div className={`absolute top-0 right-0 w-[50vh] h-[50vh] bg-gold-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
           <div className={`absolute bottom-0 left-0 w-[40vh] h-[40vh] bg-emerald-800/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>

           <div className="flex flex-col items-center space-y-8 relative z-10 w-full px-6">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl md:text-4xl font-serif tracking-wider hover:text-gold-400 transition-all duration-500 transform ${
                   isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${location.pathname === item.path ? 'text-gold-400 italic' : 'text-white'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            
            <div 
               className={`w-16 h-px bg-emerald-800 my-4 transition-all duration-700 ${isMobileMenuOpen ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}
               style={{ transitionDelay: '600ms' }}
            ></div>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-8 py-4 border border-gold-500 text-gold-400 uppercase tracking-widest font-bold hover:bg-gold-500 hover:text-emerald-950 transition-all duration-500 transform ${
                 isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              Start Project <ArrowRight size={16} />
            </Link>

            <div 
               className={`flex gap-8 mt-8 transition-all duration-500 transform ${
                 isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
               }`}
               style={{ transitionDelay: '800ms' }}
            >
               <a href="#" className="text-stone-400 hover:text-gold-400"><Linkedin size={24} /></a>
               <a href="#" className="text-stone-400 hover:text-gold-400"><Instagram size={24} /></a>
               <a href="#" className="text-stone-400 hover:text-gold-400"><Twitter size={24} /></a>
            </div>
           </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white pt-20 pb-10 border-t border-emerald-900 relative z-10">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif font-bold mb-6 tracking-widest">{BRAND_NAME}</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Where disciplined execution meets artistic thinking. Bridging global standards with Indian emotion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Explore</h3>
            <ul className="space-y-4 text-stone-300 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/verticals" className="hover:text-white transition-colors">Business Verticals</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Our Process</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Expertise</h3>
            <ul className="space-y-4 text-stone-300 text-sm">
              <li>Film Production</li>
              <li>Corporate Events</li>
              <li>Data Consulting</li>
              <li>Real Estate Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
            <ul className="space-y-4 text-stone-300 text-sm">
              <li className="flex items-start">
                <span className="block w-full">Hyderabad, India</span>
              </li>
              <li>
                <a href="mailto:contact@tassk.in" className="hover:text-white transition-colors">contact@tassk.in</a>
              </li>
              <li className="flex items-center gap-2">
                 <Phone size={14} className="text-gold-500" />
                 <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-emerald-900 text-center md:text-left flex flex-col md:flex-row justify-between text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} TASSK. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};