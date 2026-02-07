import React from 'react';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white min-h-screen pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-20">
          <h1 className="animate-reveal text-4xl md:text-6xl font-serif font-bold mb-4">Start the Conversation</h1>
          <p className="animate-reveal text-stone-300 max-w-2xl mx-auto text-lg" style={{ animationDelay: '0.1s' }}>Whether you have a specific project in mind or want to explore possibilities, we are ready to listen.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="reveal-on-scroll bg-emerald-900/20 p-12 md:p-16 border border-emerald-800 backdrop-blur-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/20 transition-colors duration-1000"></div>
             
             <h3 className="text-3xl font-serif font-bold mb-12 relative z-10 text-white">Contact Information</h3>
             
             <div className="space-y-12 relative z-10">
               <div className="flex items-start gap-8">
                 <div className="w-14 h-14 bg-emerald-950 border border-gold-500/30 rounded-full flex items-center justify-center shrink-0">
                   <Phone className="text-gold-400" size={24} />
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-bold">Call Us</p>
                   <p className="text-2xl font-serif text-white">+91 98765 43210</p>
                   <p className="text-stone-500 text-sm mt-2">Mon-Fri, 9am - 6pm IST</p>
                 </div>
               </div>

               <div className="flex items-start gap-8">
                 <div className="w-14 h-14 bg-emerald-950 border border-gold-500/30 rounded-full flex items-center justify-center shrink-0">
                   <Mail className="text-gold-400" size={24} />
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-bold">Email Us</p>
                   <p className="text-2xl font-serif text-white">contact@tassk.in</p>
                   <p className="text-stone-500 text-sm mt-2">We typically reply within 24 hours.</p>
                 </div>
               </div>

               <div className="flex items-start gap-8">
                 <div className="w-14 h-14 bg-emerald-950 border border-gold-500/30 rounded-full flex items-center justify-center shrink-0">
                   <MapPin className="text-gold-400" size={24} />
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-bold">Visit Us</p>
                   <p className="text-xl leading-snug text-stone-300">
                     TASSK HQ<br/>
                     Jubilee Hills, Hyderabad<br/>
                     Telangana, India 500033
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-on-scroll delay-100 bg-emerald-900/10 p-12 md:p-16 border border-emerald-800/50 flex flex-col">
            <h3 className="text-3xl font-serif font-bold text-white mb-10">Send a Message</h3>
            <form className="space-y-8 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">First Name</label>
                  <input type="text" className="w-full bg-emerald-950/50 border-b border-emerald-700 p-4 focus:outline-none focus:border-gold-500 transition-all text-white placeholder-emerald-900" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">Last Name</label>
                  <input type="text" className="w-full bg-emerald-950/50 border-b border-emerald-700 p-4 focus:outline-none focus:border-gold-500 transition-all text-white placeholder-emerald-900" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">Email Address</label>
                <input type="email" className="w-full bg-emerald-950/50 border-b border-emerald-700 p-4 focus:outline-none focus:border-gold-500 transition-all text-white placeholder-emerald-900" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">Service Interest</label>
                <select className="w-full bg-emerald-950/50 border-b border-emerald-700 p-4 focus:outline-none focus:border-gold-500 transition-all text-white">
                  <option className="bg-emerald-950">Select a service</option>
                  <option className="bg-emerald-950">Studios (Film)</option>
                  <option className="bg-emerald-950">Events</option>
                  <option className="bg-emerald-950">Labs (IT)</option>
                  <option className="bg-emerald-950">Realty</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">Message</label>
                <textarea className="w-full bg-emerald-950/50 border-b border-emerald-700 p-4 h-40 focus:outline-none focus:border-gold-500 transition-all text-white placeholder-emerald-900" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="glow-button w-full bg-gold-500 text-emerald-950 py-5 font-bold tracking-widest uppercase hover:bg-white hover:text-emerald-950 transition-all duration-300 text-sm">
                Submit Request
              </button>
            </form>
            <div className="mt-8 text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-gold-400 uppercase tracking-widest text-xs font-bold transition-all hover:gap-3">
                 <ArrowLeft size={14} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;