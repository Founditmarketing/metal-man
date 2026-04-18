import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: "https://picsum.photos/seed/metal1/1200/1200", title: "Agricultural Complex", location: "Cartersville, GA" },
    { src: "https://picsum.photos/seed/metal2/1200/1200", title: "Custom Barndominium Shell", location: "Pensacola, FL" },
    { src: "https://picsum.photos/seed/metal3/1200/1200", title: "Triple-Wide RV Cover", location: "Albuquerque, NM" },
    { src: "https://picsum.photos/seed/metal4/1200/1200", title: "Industrial Storage Unit", location: "Jackson, MS" },
    { src: "https://picsum.photos/seed/metal5/1200/1200", title: "Steel Horse Barn", location: "Ocala, FL" },
    { src: "https://picsum.photos/seed/metal6/1200/1200", title: "Clear-Span Garage", location: "Mobile, AL" },
    { src: "https://picsum.photos/seed/metal7/1200/1200", title: "Commercial Equipment Shed", location: "Macon, GA" },
    { src: "https://picsum.photos/seed/metal8/1200/1200", title: "Metal Pergola Installation", location: "Tucson, AZ" },
    { src: "https://picsum.photos/seed/metal9/1200/1200", title: "Triple-Section Warehouse", location: "Savannah, GA" },
    { src: "https://picsum.photos/seed/metal10/1200/1200", title: "RV Luxury Garage", location: "Destin, FL" },
    { src: "https://picsum.photos/seed/metal11/1200/1200", title: "Open-Side Hay Storage", location: "Valdosta, GA" },
    { src: "https://picsum.photos/seed/metal12/1200/1200", title: "Custom Shop Frame-Out", location: "Lubbock, TX" },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <header className="max-w-7xl mx-auto px-10 mb-16 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="text-sm font-black text-construction-yellow tracking-[0.3em] mb-4 uppercase">PROJECT PORTFOLIO</h2>
              <h1 className="text-5xl sm:text-7xl font-black uppercase leading-none text-white">Field Operations</h1>
            </div>
            <div className="lg:max-w-md">
              <p className="text-white/60 font-sans leading-relaxed">
                A visual record of our industrial-grade structural steel installations across the country. Each project represents our commitment to durability and precision engineering.
              </p>
            </div>
          </div>
          <div className="h-2 w-full bg-caution-stripes mt-12 opacity-30" />
        </header>

        <section className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative aspect-square group overflow-hidden industrial-border border-white/5 cursor-zoom-in group"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Details Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-construction-yellow font-black uppercase text-[10px] tracking-widest mb-1">View Detail</p>
                  <p className="font-bold text-white text-lg uppercase leading-tight mb-1">{img.title}</p>
                  <p className="text-white/50 text-xs font-sans italic">{img.location}</p>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-construction-yellow p-2 rounded-full text-black">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center p-4 sm:p-20 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 text-white hover:text-construction-yellow transition-colors inline-flex items-center gap-2 uppercase text-xs font-black tracking-widest"
              >
                Close Gallery <X size={24} />
              </button>
              
              <div className="industrial-border border-construction-yellow/40 overflow-hidden shadow-2xl bg-industrial-navy/50">
                <img 
                  src={selectedImage} 
                  alt="Enlarged Project View" 
                  className="w-full h-auto max-h-[80vh] object-contain contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-end border-t border-white/10 pt-4">
                <div>
                  <p className="text-construction-yellow font-black uppercase tracking-widest text-[10px]">Project Specification</p>
                  <p className="text-white font-black text-2xl uppercase">Full Structural Detail</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="text-white/40 text-[10px] uppercase font-sans">Engineering</p>
                    <p className="text-white font-black text-sm">Industrial Grade</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-[10px] uppercase font-sans">Material</p>
                    <p className="text-white font-black text-sm">American Steel</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
