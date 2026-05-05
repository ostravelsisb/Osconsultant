import { ArrowUpRight, MapPin, PlaneTakeoff } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CountryCard({
  name,
  short,
  image,
  accent,
  slug,
}: {
  name: string;
  short: string;
  image: string;
  accent?: string;
  slug: string;
}) {
  return (
    <Link 
      to="/countries/$slug" 
      params={{ slug }} 
      className="group block relative card-3d rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
    >
      {/* Glowing Shadow Effect */}
      <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-br from-[#00B4D8] to-[#FF7F11] opacity-0 blur-2xl group-hover:opacity-40 group-hover:blur-3xl group-hover:translate-y-6 group-hover:scale-[0.95] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] -z-10" />

      {/* The Wing Silhouette Container */}
      <article className="relative h-[340px] rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] border border-white/10 shadow-soft bg-slate-900 z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden isolate">
        
        {/* Inner wrapper for perfect border-radius clipping */}
        <div className="absolute inset-0 rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] overflow-hidden [transform:translateZ(0)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          {/* Glassmorphism Overlay (The "Cabin Window" feel) */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/20 to-transparent transition-opacity duration-500" />
        </div>

        {/* Hover Gradient Border matching the changing radius */}
        <div 
          className="absolute inset-0 rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none z-20"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(to bottom right, #00B4D8, #FF7F11) border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />

        {/* Top Right Arrow */}
        <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white opacity-0 -translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_15px_rgba(255,255,255,0.3)] z-20">
          <ArrowUpRight size={18} />
        </span>

        {/* Content Positioning */}
        <div className="absolute bottom-0 left-0 p-6 w-full text-white z-20 transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
          {accent && (
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} className="text-[#FF7F11]" />
              <span className="text-xs uppercase tracking-widest font-semibold opacity-90">{accent}</span>
            </div>
          )}
          <h3 className="text-2xl font-bold mb-2 tracking-wide">{name}</h3>
          <p className="mt-1 text-xs text-white/85 leading-relaxed line-clamp-2 font-medium">{short}</p>
          
          {/* Animated Flight Path Line */}
          <div className="relative h-[2px] w-0 bg-[#FF7F11] transition-all duration-700 group-hover:w-full mt-4">
            <PlaneTakeoff 
              size={16} 
              className="absolute -top-2 right-0 text-[#FF7F11] opacity-0 group-hover:opacity-100 transition-opacity delay-300" 
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
