import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, HardHat, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import { BRAND } from '../constants';

export default function ContactPage() {
  return (
    <div className="bg-industrial-navy min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Header Section */}
        <section className="py-24 px-10 border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm font-black text-construction-yellow tracking-[0.3em] mb-4 uppercase"
                >
                  TECHNICAL CONSULTATION
                </motion.h2>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl sm:text-7xl font-black uppercase leading-none mb-8"
                >
                  Contact The <span className="text-construction-yellow">Metal Man</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/60 font-sans leading-relaxed max-w-xl"
                >
                  Ready to deploy your next structural steel project? Reach out to our technical team for custom engineering, site-specific quotes, and coordination across the United States.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-black/40 border border-white/10 space-y-4">
                  <TrendingUp className="text-construction-yellow" size={32} />
                  <p className="font-black text-2xl uppercase leading-none">300+ Crews</p>
                  <p className="text-white/40 text-xs font-sans">Ready for Deployment</p>
                </div>
                <div className="p-8 bg-black/40 border border-white/10 space-y-4">
                  <ShieldCheck className="text-construction-yellow" size={32} />
                  <p className="font-black text-2xl uppercase leading-none">Direct Log</p>
                  <p className="text-white/40 text-xs font-sans">Project Transparency</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-caution-stripes opacity-5 -skew-x-12 translate-x-1/2" />
        </section>

        {/* Contact UI Section */}
        <section id="contact" className="py-24 px-10 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1fr] gap-20 items-start">
              
              {/* Contact Info Sidebar */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-construction-yellow p-4 text-black">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest text-construction-yellow mb-2">Technical Sales</h4>
                      <p className="text-2xl font-black">{BRAND.phone}</p>
                      <p className="text-white/40 text-sm font-sans">Direct Line to Lead Engineer</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-construction-yellow p-4 text-black">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest text-construction-yellow mb-2">Email Correspondence</h4>
                      <p className="text-2xl font-black">{BRAND.email}</p>
                      <p className="text-white/40 text-sm font-sans">24h Response Guarantee</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-construction-yellow p-4 text-black">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest text-construction-yellow mb-2">Central Operations</h4>
                      <p className="text-2xl font-black">{BRAND.address}</p>
                      <p className="text-white/40 text-sm font-sans">Georgia HQ & Logistics Hub</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 border-l-8 border-construction-yellow bg-industrial-navy space-y-6">
                  <h3 className="text-xl font-black uppercase flex items-center gap-3">
                    <Clock size={24} className="text-construction-yellow" />
                    Business Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                    <p className="text-white/60 uppercase tracking-widest">Monday - Friday</p>
                    <p className="text-right font-bold text-white uppercase">8:00 AM - 6:00 PM</p>
                    <p className="text-white/60 uppercase tracking-widest">Saturday</p>
                    <p className="text-right font-bold text-white uppercase">By Appointment</p>
                    <p className="text-white/60 uppercase tracking-widest">Sunday</p>
                    <p className="text-right font-bold text-white uppercase">Closed</p>
                  </div>
                </div>

                <div className="hidden lg:block relative industrial-border border-white/5 overflow-hidden group h-64">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    title="The Metal Man HQ Map"
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Cartersville,%20GA+(The%20Metal%20Man)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    className="grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-x-0 bottom-4 text-center pointer-events-none">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-construction-yellow bg-black/60 py-1 inline-block px-3">
                      North America Headquarters
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="industrial-border border-construction-yellow/20 p-px">
                <LeadForm standalone={true} />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
