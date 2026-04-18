import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import LeadForm from './LeadForm';
import { BRAND } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/gallery1.png" 
          alt="Industrial Steel Structure" 
          className="w-full h-full object-cover brightness-[0.2] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-industrial-navy via-industrial-navy/80 to-transparent" />
      </div>

      {/* Caution Bar at top */}
      <div className="absolute top-0 left-0 w-full h-[12px] bg-caution-stripes z-10" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-20 py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-content"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-[64px] font-black text-white leading-[0.9] mb-6 uppercase [text-shadow:3px_3px_0px_#000]">
              Built to Last.<br />
              Engineered to<br />
              Protect.
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-[500px] font-normal leading-relaxed">
              Custom Metal Buildings, Barns, and RV Protection across the continental U.S. Over 300 crews standing by.
            </p>

            <div className="flex flex-wrap gap-10 mb-10">
              <div className="about-item">
                <h6 className="text-[10px] text-construction-yellow font-black uppercase mb-1">The Mission</h6>
                <p className="text-xs font-normal opacity-90">{BRAND.mission}</p>
              </div>
              <div className="about-item">
                <h6 className="text-[10px] text-construction-yellow font-black uppercase mb-1">The Scope</h6>
                <p className="text-xs font-normal opacity-90">{BRAND.scope}</p>
              </div>
              <div className="about-item">
                <h6 className="text-[10px] text-construction-yellow font-black uppercase mb-1">The Promise</h6>
                <p className="text-xs font-normal opacity-90">{BRAND.promise}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary-industrial px-10 py-5 text-lg inline-flex items-center group"
              >
                Get a Free Quote
              </a>
              
              <a 
                href="#gallery" 
                className="btn-ghost-industrial px-10 py-5 text-lg inline-flex items-center"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Services bar simulation for mobile or alignment */}
    </section>
  );
}
