import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Home, ChevronRight, ArrowLeft } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  backgroundImage,
  backTo,
  backLabel,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  backgroundImage?: string;
  backTo?: string;
  backLabel?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${!backgroundImage ? "bg-gradient-to-br from-primary via-[oklch(0.32_0.16_258)] to-[oklch(0.45_0.18_30)]" : "bg-black"} text-white`}
    >
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 mesh-bg opacity-40" />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-blob" />
          <div
            className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </div>
      )}

      <div className="container-px relative z-10 mx-auto max-w-7xl pt-28 pb-20 md:pt-36 md:pb-28">
        <Reveal>
          <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            {backTo && (
              <Link
                to={backTo}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20 hover:border-white/40 active:scale-[0.98] group w-fit order-1 sm:order-2 shadow-md sm:shadow-none sm:text-xs sm:px-4 sm:py-2"
              >
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1 sm:w-4 sm:h-4" />
                <span>{backLabel || "Back to Menu"}</span>
              </Link>
            )}
            
            <nav className="flex items-center gap-1.5 text-[10px] sm:text-xs text-white/50 order-2 sm:order-1 px-1 sm:px-0">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <Home size={12} /> Home
              </Link>
              <ChevronRight size={10} className="opacity-40" />
              <span className="text-white/80 truncate max-w-[200px] sm:max-w-none">
                {breadcrumb || title}
              </span>
            </nav>
          </div>
        </Reveal>
        {eyebrow && (
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
