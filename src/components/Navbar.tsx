import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAV_LINKS, BRAND, SERVICE_CATEGORIES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const getLinkComponent = (link: { name: string; href: string }) => {
    const isAnchor = link.href.includes('#');

    if (isAnchor) {
      return (
        <a 
          href={link.href}
          className="text-white hover:text-construction-yellow font-bold uppercase text-[12px] tracking-widest transition-colors"
        >
          {link.name}
        </a>
      );
    }

    return (
      <Link 
        to={link.href}
        className="text-white hover:text-construction-yellow font-bold uppercase text-[12px] tracking-widest transition-colors"
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-black border-b-2 border-construction-yellow">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/The-Metal-Man-logo.png"
                alt="The Metal Man Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.name === "Services" ? (
                  <div className="relative">
                    <button 
                      onMouseEnter={() => setShowServices(true)}
                      className="flex items-center text-white hover:text-construction-yellow font-bold uppercase text-[12px] tracking-widest transition-colors"
                    >
                      {link.name} <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  getLinkComponent(link)
                )}
              </div>
            ))}

            {/* Call Button - Desktop */}
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-2 bg-construction-yellow text-black px-5 py-2.5 font-black uppercase text-[12px] tracking-widest border-b-4 border-black hover:bg-white transition-colors group"
            >
              <Phone size={14} className="group-hover:animate-bounce" />
              {BRAND.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-construction-yellow transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {showServices && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseLeave={() => setShowServices(false)}
            className="hidden md:block absolute w-full bg-industrial-navy border-b-4 border-construction-yellow shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-5 gap-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-4">
                  <Link 
                    to={`/services/${cat.id}`}
                    onClick={() => setShowServices(false)}
                    className="block text-construction-yellow font-black text-lg border-b-2 border-construction-yellow/30 pb-2 hover:border-construction-yellow transition-colors"
                  >
                    {cat.title}
                  </Link>
                  <ul className="space-y-2">
                    {cat.services.slice(0, 4).map((s) => (
                      <li key={s}>
                        <Link 
                          to={`/services/${cat.id}`}
                          onClick={() => setShowServices(false)}
                          className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                        >
                          <span className="w-1.5 h-1.5 bg-construction-yellow mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-industrial-navy border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isAnchor = link.href.includes('#');
                const linkClasses = "block text-white hover:text-construction-yellow font-bold uppercase tracking-widest text-lg transition-colors";
                
                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={linkClasses}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={linkClasses}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/10 space-y-3">
                {/* Call Button - Mobile */}
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center justify-center gap-3 w-full bg-construction-yellow text-black px-6 py-4 font-black uppercase tracking-widest border-b-4 border-black text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  {BRAND.phone}
                </a>
                <Link 
                  to="/contact"
                  className="block w-full text-center bg-transparent text-construction-yellow border-2 border-construction-yellow px-6 py-3 font-bold uppercase tracking-widest hover:bg-construction-yellow hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
