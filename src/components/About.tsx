import { motion } from 'motion/react';
import { BRAND } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden px-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 font-sans"
          >
            <div>
              <h2 className="text-sm font-black text-construction-yellow tracking-[0.3em] mb-4">ESTABLISHED LEGACY</h2>
              <h3 className="text-4xl sm:text-6xl font-black leading-[1.1] uppercase text-white mb-6 [text-shadow:2px_2px_0px_#001A33]">
                About The<br />
                <span className="text-construction-yellow">Metal Man</span>
              </h3>
              <div className="h-2 w-24 bg-caution-stripes" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p className="font-bold text-white text-xl border-l-4 border-construction-yellow pl-6">
                Founded on the principles of integrity and master-level engineering, The Metal Man (StCyr Industries LLC) has grown into a nationwide leader in structural steel solutions.
              </p>
              
              <p>
                From the drawing board to the final weld, our mission is to provide {BRAND.mission} We understand that every building we erect represents a significant investment for our clients. That’s why we employ over {BRAND.scope.split('serving')[0]} dedicated professionals across the country to ensure your project is completed with precision.
              </p>

              <p>
                Our promise is simple: {BRAND.promise} Whether you are planning a custom barndominium shell, a high-value RV protection unit, or a heavy-duty agricultural building, we bring the same level of industrial-grade quality to every square foot.
              </p>

              <p>
                Headquartered in Cartersville, GA, we coordinate complex logistics to serve a client base stretching from Florida to New Mexico. We aren't just selling metal structures; we are building the infrastructure that protects your life's work.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <div>
                <p className="text-construction-yellow font-black uppercase text-[10px] mb-2 tracking-widest">Operation Base</p>
                <p className="font-bold text-white uppercase text-sm">{BRAND.address}</p>
              </div>
              <div>
                <p className="text-construction-yellow font-black uppercase text-[10px] mb-2 tracking-widest">Response Rate</p>
                <p className="font-bold text-white uppercase text-sm">24 Hour Contact</p>
              </div>
              <div>
                <p className="text-construction-yellow font-black uppercase text-[10px] mb-2 tracking-widest">Material</p>
                <p className="font-bold text-white uppercase text-sm">American Steel</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="industrial-border border-construction-yellow/30 overflow-hidden relative shadow-2xl rounded-none">
              <img 
                src="/metal building.png" 
                alt="The Metal Man Infrastructure" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-caution-stripes opacity-40" />
            </div>
            
            {/* Visual Offset Accent */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-construction-yellow/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
