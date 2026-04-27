import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Plane, Award, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import { SEOBlock } from "./SEOBlock";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.05_260)] via-[oklch(0.22_0.08_258)] to-[oklch(0.30_0.14_30)]" />
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary-glow/30 blur-3xl animate-blob" />
      <div
        className="absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-accent/30 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
            <Sparkles size={12} className="text-accent-glow" /> Pakistan&apos;s Trusted Visa
            Consultancy · Islamabad
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Your Gateway to <span className="gradient-text-accent">the World</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg leading-relaxed">
            From Schengen to the USA, UK, Canada, Australia and beyond — OS Consultants delivers
            premium visa, ticketing, hotel and insurance services backed by 15+ years of expertise.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/consultation"
              className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-glow px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 shine"
            >
              Book Free Consultation{" "}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/visa-services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore Visa Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "15+", l: "Years experience" },
              { v: "98%", l: "Approval rate" },
              { v: "20K+", l: "Happy travelers" },
            ].map((s: { v: string; l: string }) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur text-center"
              >
                <p className="text-xl font-bold text-white md:text-2xl">{s.v}</p>
                <p className="mt-0.5 text-[11px] text-white/70 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>

          {/* SEO Content Block */}
          <SEOBlock />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-accent/40 to-primary-glow/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-elevated">
            <img
              src={heroImg}
              alt="OS Consultants traveler at airport with passport and tickets"
              width={1920}
              height={1080}
              className="h-[400px] w-full object-cover md:h-[500px] lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-5 top-5 glass rounded-2xl p-3 shadow-soft"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white">
                  <ShieldCheck size={16} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-foreground/70">IATA Authorized</p>
                  <p className="text-xs font-bold text-foreground">Trusted Agency</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-5 bottom-5 glass rounded-2xl p-3 shadow-soft"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground">
                  <Plane size={16} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-foreground/70">Flights worldwide</p>
                  <p className="text-xs font-bold text-foreground">Best Fares Guaranteed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-5 top-1/3 glass rounded-2xl p-3 shadow-soft"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 text-white">
                  <Award size={16} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-foreground/70">Approval rate</p>
                  <p className="text-xs font-bold text-foreground">98% success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
