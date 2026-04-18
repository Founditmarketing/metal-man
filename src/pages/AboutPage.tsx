import { motion } from 'motion/react';
import { BRAND } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-industrial-navy min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Page Hero */}
        <section className="py-24 bg-industrial-navy text-white relative overflow-hidden px-10">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl font-black uppercase mb-6"
            >
              The <span className="text-construction-yellow">Metal Man</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-sans tracking-[0.2em] uppercase"
            >
              Structural Integrity Since Day One
            </motion.p>
          </div>
          <div className="absolute inset-0 bg-caution-stripes opacity-5 -z-10 skew-y-6" />
        </section>

        {/* Industrial Section Divider */}
        <div className="h-8 bg-caution-stripes opacity-20 border-y border-construction-yellow/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-navy via-transparent to-industrial-navy" />
        </div>

        {/* Narrative Section */}
        <section className="py-24 px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1fr] gap-20 items-start">
              <div className="space-y-8">
                <div className="industrial-border border-black overflow-hidden relative shadow-2xl skew-x-1">
                  <img 
                    src="/gallery1.png" 
                    alt="The Metal Man Legacy" 
                    className="w-full h-[600px] object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-10">
                    <p className="text-construction-yellow font-black uppercase tracking-widest text-xs mb-2">Since Foundation</p>
                    <p className="text-white font-black text-4xl uppercase leading-none">StCyr Industries</p>
                  </div>
                </div>
                
                <div className="p-8 bg-black/30 border-l-8 border-construction-yellow">
                  <h3 className="text-xl font-black uppercase text-white mb-4">A Professional Standard</h3>
                  <p className="text-white/60 font-sans leading-relaxed">
                    Based in Cartersville, GA, we oversee a network of 300+ crews that translate engineering blueprints into physical reality. Our operation is specialized for the high-demand environments of the American South and Southwest.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-6 text-xl leading-relaxed text-white/80 font-sans">
                  <h2 className="text-3xl font-black text-white uppercase mb-8">Our Foundation</h2>
                  
                  <p className="font-bold text-white text-2xl">
                    "We don't just sell metal buildings. We build the infrastructure that protects your life's work and most valuable possessions."
                  </p>
                  
                  <p>
                    Founded on the principles of integrity and master-level engineering, The Metal Man (StCyr Industries LLC) has grown into a nationwide leader in structural steel solutions. From the drawing board to the final weld, our mission is to provide {BRAND.mission}
                  </p>

                  <p>
                    We understand that every building we erect represents a significant investment for our clients. That’s why we employ over {BRAND.scope.split('serving')[0]} dedicated professionals across the country to ensure your project is completed with precision.
                  </p>

                  <p>
                    Our promise is simple: {BRAND.promise} Whether you are planning a custom barndominium shell, a high-value RV protection unit, or a heavy-duty agricultural building, we bring the same level of industrial-grade quality to every square foot.
                  </p>

                  <p>
                    Headquartered in Georgia, we coordinate complex logistics to serve a client base stretching from Florida to New Mexico. We aren't just selling metal structures; we are building the infrastructure that protects your life's work.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-12 pt-10 border-t border-white/10">
                  <div className="space-y-4">
                    <h4 className="text-construction-yellow font-black uppercase text-sm tracking-widest">Our Mission</h4>
                    <p className="font-bold text-white text-xl leading-tight">{BRAND.mission}</p>
                    <p className="text-white/40 text-sm">Every beam we set is a commitment to the long-term safety of your assets.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-construction-yellow font-black uppercase text-sm tracking-widest">Our Promise</h4>
                    <p className="font-bold text-white text-xl leading-tight">{BRAND.promise}</p>
                    <p className="text-white/40 text-sm">No shortcuts. No compromises. Just pure industrial-grade execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
