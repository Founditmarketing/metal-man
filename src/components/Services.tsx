import { Link } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../constants';
import { HardHat, Truck, Warehouse, Home, Umbrella } from 'lucide-react';

// Simplified icon component using lucide-react icons
function CategoryIcon({ id, className }: { id: string; className?: string }) {
  if (id === 'buildings') return <Warehouse className={className} />;
  if (id === 'barns') return <Home className={className} />;
  if (id === 'carports') return <Truck className={className} />;
  if (id === 'garages') return <HardHat className={className} />;
  return <Umbrella className={className} />;
}

export default function Services() {
  return (
    <div className="services-bar grid grid-cols-2 md:grid-cols-5 bg-black border-y-2 border-construction-yellow">
      {SERVICE_CATEGORIES.map((cat, idx) => (
        <Link 
          key={cat.id} 
          to={`/services/${cat.id}`}
          className={`service-card p-10 text-center transition-all duration-300 hover:bg-white/[0.08] hover:scale-[1.03] active:scale-95 cursor-pointer group relative overflow-hidden ${idx !== SERVICE_CATEGORIES.length - 1 ? 'md:border-r border-construction-yellow/20' : ''}`}
        >
          {/* Hover highlight line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-construction-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          
          <h4 className="text-[14px] text-construction-yellow font-black uppercase mb-1 tracking-widest transition-colors group-hover:text-white">
            {cat.title.split(' & ')[0]}
          </h4>
          <p className="text-[10px] text-white/50 font-sans uppercase transition-all duration-300 group-hover:text-white/90">
            {cat.description.split('.')[0]}
          </p>
        </Link>
      ))}
    </div>
  );
}
