import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CountryCard({ name, short, image, accent, slug }: { name: string; short: string; image: string; accent?: string; slug: string }) {
  return (
    <Link to="/countries/$slug" params={{ slug }} className="block">
      <article className="group relative h-80 overflow-hidden rounded-2xl border border-border shadow-soft card-3d">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        {accent && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white border border-white/20">
            <MapPin size={11} /> {accent}
          </span>
        )}
        <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur border border-white/20 text-white opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight size={16} />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-1 text-sm text-white/85 leading-relaxed line-clamp-2">{short}</p>
        </div>
      </article>
    </Link>
  );
}