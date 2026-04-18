import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../constants';

export default function LeadForm({ standalone = false }: { standalone?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formContent = (
    <div className={`lead-form bg-black/40 p-[30px] border border-construction-yellow/30 relative ${standalone ? 'max-w-4xl mx-auto shadow-2xl' : ''}`}>
      <h3 className="text-construction-yellow font-black uppercase text-base border-l-4 border-construction-yellow pl-[10px] mb-5 tracking-widest text-left">
        Get In Touch
      </h3>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
            <input 
              required
              type="text" 
              placeholder="Full Name"
              className="form-input-industrial p-[10px] text-xs"
            />
            <input 
              required
              type="tel" 
              placeholder="Phone"
              className="form-input-industrial p-[10px] text-xs"
            />
          </div>

          <input 
            required
            type="email" 
            placeholder="Email Address"
            className="form-input-industrial w-full p-[10px] text-xs mb-[10px]"
          />

          <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
            <select className="form-input-industrial p-[10px] text-xs appearance-none">
              <option disabled selected>Project Type</option>
              {SERVICE_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.title}</option>
              ))}
            </select>
            <input 
              required
              type="text" 
              placeholder="Zip Code"
              className="form-input-industrial p-[10px] text-xs"
            />
          </div>

          <select className="form-input-industrial w-full p-[10px] text-xs mb-5 appearance-none">
            <option disabled selected>Project Urgency</option>
            <option value="immediate">Immediate</option>
            <option value="1-3-months">1-3 Months</option>
            <option value="planning">Planning Phase</option>
          </select>

          <button 
            type="submit" 
            className="btn-primary-industrial w-full py-4 text-sm tracking-widest"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="py-10 text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
          <h4 className="text-xl font-black uppercase text-white">Specs Received</h4>
          <p className="text-gray-400 text-xs">An engineer will contact you shortly.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-construction-yellow font-black uppercase tracking-widest text-[10px] hover:underline"
          >
            Submit another
          </button>
        </div>
      )}

      <div className="mt-5 text-center">
        <a 
          href="https://www.google.com/search?q=CabinMaster.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#888] italic text-[10px] hover:text-construction-yellow transition-colors font-serif"
        >
          Looking for wood structures? Visit CabinMaster.com
        </a>
      </div>
    </div>
  );

  if (standalone) {
    return (
      <section id="contact" className="py-24 px-4 bg-industrial-navy/50">
        {formContent}
      </section>
    );
  }

  return formContent;
}
