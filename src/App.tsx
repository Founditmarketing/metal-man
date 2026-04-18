import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/garage.png",
    "/barn.png",
    "/carport.png",
    "/gallery8.png",
    "/gallery5.png",
  ];

  return (
    <section id="gallery" className="py-24 bg-industrial-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-black text-construction-yellow tracking-[0.3em] mb-4">OUR WORK</h2>
          <h3 className="text-4xl sm:text-6xl font-black text-white uppercase">Field Operations</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-square group overflow-hidden industrial-border border-black cursor-zoom-in"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-500 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-construction-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                <span className="text-white font-black uppercase text-[10px] tracking-widest bg-black/60 px-3 py-1 scale-90 group-hover:scale-100 transition-transform">Enlarge View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-construction-yellow transition-colors inline-flex items-center gap-2 uppercase text-xs font-black tracking-widest"
              >
                Close <X size={24} />
              </button>
              
              <div className="industrial-border border-construction-yellow/40 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img 
                  src={selectedImage} 
                  alt="Enlarged Project View" 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              
              <div className="absolute -bottom-10 left-0">
                <p className="text-construction-yellow font-black uppercase tracking-widest text-[10px]">Project Specification</p>
                <p className="text-white font-black text-xl uppercase">Industrial Structure Detail</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Services Section Preview */}
      <section id="services" className="bg-industrial-navy pt-24">
        <div className="max-w-7xl mx-auto px-10 mb-12 text-center md:text-left">
          <h2 className="text-sm font-black text-white/40 tracking-[0.3em] mb-4 uppercase">SYSTEM SOLUTIONS</h2>
          <h3 className="text-5xl sm:text-6xl font-black text-construction-yellow uppercase leading-none">Industrial Strength Categories</h3>
        </div>
        <Services />
      </section>

      {/* About Section */}
      <About />

      <Gallery />
      <LeadForm standalone={true} />
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-10 right-6 z-40">
        <a 
          href="#contact"
          className="btn-primary-industrial p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <span className="font-black uppercase text-xs">Request Info</span>
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-industrial-navy selection:bg-construction-yellow selection:text-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}
