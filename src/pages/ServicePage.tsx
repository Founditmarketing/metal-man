import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES, BRAND } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import { useEffect } from 'react';

export default function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICE_CATEGORIES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="bg-black min-h-screen text-white selection:bg-construction-yellow selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Breadcrumb / Back Link */}
        <div className="max-w-7xl mx-auto px-10 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-construction-yellow hover:text-white transition-colors gap-2 uppercase text-xs font-black tracking-widest"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] text-white mb-8 [text-shadow:3px_3px_0px_#001A33]">
                {service.title.split(' & ')[0]} <br />
                <span className="text-construction-yellow">{service.title.split(' & ')[1] || 'Expertise'}</span>
              </h1>

              <div className="h-2 w-32 bg-caution-stripes mb-10" />

              <p className="text-xl text-white/80 leading-relaxed mb-12 font-sans italic border-l-4 border-construction-yellow pl-8">
                {service.description}
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-sm font-black text-construction-yellow tracking-[0.3em] mb-6 uppercase">Specialized Solutions</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.services.map((s, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-4 bg-industrial-navy/50 border border-white/5 p-5 hover:border-construction-yellow/30 transition-colors group"
                      >
                        <CheckCircle2 className="text-construction-yellow group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-industrial-navy/30 border-l-8 border-construction-yellow">
                  <h3 className="text-xl font-black uppercase mb-4">Industrial Standards</h3>
                  <p className="text-white/60 font-sans leading-relaxed">
                    Every {service.id.slice(0, -1)} project we undertake is engineered to meet specific regional requirements and industrial safety standards. We use high-grade American steel and precision-welding techniques to ensure your structure outlasts the competition.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32 space-y-10"
            >
              <div className="industrial-border border-black overflow-hidden relative shadow-2xl">
                <img 
                  src={
                    service.id === 'buildings' ? '/metal building.png' :
                    service.id === 'barns' ? '/barn2.png' :
                    service.id === 'carports' ? '/carport2.png' :
                    service.id === 'garages' ? '/garage2.png' :
                    '/gallery5.png'
                  }
                  alt={service.title} 
                  className="w-full h-[400px] object-cover contrast-125 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-construction-yellow font-black uppercase tracking-widest text-xs mb-1">Project Category</p>
                  <p className="text-white font-black text-3xl uppercase leading-none">{service.id}</p>
                </div>
              </div>

              <div className="bg-industrial-navy p-8 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-caution-stripes opacity-10" />
                <h4 className="text-xl font-black uppercase mb-4 relative z-10">Request a Technical Quote</h4>
                <p className="text-white/60 mb-8 font-sans relative z-10">
                  Ready to start your project? Get a detailed quote based on your specific dimensions and location.
                </p>
                <Link 
                  to="/#contact" 
                  className="btn-primary-industrial w-full py-4 text-center inline-block group tracking-wide"
                >
                  Get a Quote <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
