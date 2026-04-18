import { BRAND } from '../constants';
import { Phone, Mail, MapPin, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="bg-black text-white px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="footer-info space-y-4">
            <h5 className="text-construction-yellow font-black uppercase text-base tracking-widest">{BRAND.legalName}</h5>
            <p className="text-[11px] font-sans opacity-60 leading-relaxed max-w-sm uppercase font-bold">
              {BRAND.phone} | {BRAND.email}<br />
              {BRAND.address} | Serving the Continental U.S.
            </p>
          </div>

          <div className="text-right space-y-2">
            <p className="text-construction-yellow font-black uppercase text-[10px] tracking-widest">
              METAL GARAGES GEORGIA • CUSTOM RV COVERS • BARNDOMINIUMS
            </p>
            <p className="opacity-40 font-black uppercase text-[9px] tracking-[0.2em]">
              © {currentYear} THE METAL MAN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[12px] bg-caution-stripes w-full" />
    </footer>
  );
}
