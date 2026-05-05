import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const airlines = [
  { name: "Emirates", logo: "/images/airlines/emirates.png" },
  { name: "Qatar Airways", logo: "/images/airlines/qatar.png" },
  { name: "Turkish Airlines", logo: "/images/airlines/turkish.png" },
  { name: "Etihad Airways", logo: "/images/airlines/etihad.png" },
  { name: "Lufthansa", logo: "/images/airlines/lufthansa.png" },
  { name: "British Airways", logo: "/images/airlines/british.png" },
  { name: "KLM", logo: "/images/airlines/klm.png" },
  { name: "Air France", logo: "/images/airlines/airfrance.png" },
  { name: "FlyDubai", logo: "/images/airlines/flydubai.png" },
  { name: "Oman Air", logo: "/images/airlines/omanair.png" },
  { name: "Gulf Air", logo: "/images/airlines/gulfair.png" },
  { name: "Air Arabia", logo: "/images/airlines/airarabia.png" },
  { name: "PIA", logo: "/images/airlines/pia.png" },
  { name: "AirBlue", logo: "/images/airlines/airblue.png" },
];

// Duplicate the list multiple times to ensure zero gaps on any screen width
const duplicatedAirlines = [...airlines, ...airlines, ...airlines, ...airlines];

export function AirlineSlider() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Aviation Decorative Background (Light Flight Paths) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,200 Q250,150 500,200 T1000,200" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,500 Q250,550 500,500 T1000,500" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,800 Q250,750 500,800 T1000,800" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M200,0 Q150,250 200,500 T200,1000" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M800,0 Q850,250 800,500 T800,1000" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-px mx-auto max-w-7xl mb-16 relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-[#002d62]">
              Book Tickets with Top Airlines
            </h2>
            <div className="mt-4 h-1 w-24 bg-[#ff6b00] rounded-full" />
            <p className="mt-6 text-slate-600 max-w-2xl font-medium">
              Official ticketing partner for 300+ global carriers. 
              Enjoy direct issuance, real-time seat selection, and 24/7 travel support.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-12">
        <motion.div
          className="flex gap-8 px-8"
          animate={{
            x: ["0%", "-25%"],
          }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }}
          drag="x"
          dragConstraints={{ left: -20000, right: 0 }}
        >
          {duplicatedAirlines.map((airline, index) => (
            <div
              key={`${airline.name}-${index}`}
              className="group relative flex h-36 w-56 shrink-0 items-center justify-center rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(255,107,0,0.12)] hover:border-[#ff6b00]/20"
            >
              {/* Subtle Glass Glow on Hover */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={airline.logo}
                  alt={airline.name}
                  loading="lazy"
                  className="max-h-[80%] max-w-[85%] object-contain transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Status Indicator Dot */}
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#ff6b00]" />
            </div>
          ))}
        </motion.div>

        {/* Premium Soft Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/70 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/70 to-transparent z-20" />
      </div>

      <div className="container-px mx-auto max-w-7xl mt-12 relative z-10">
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["IATA Accredited", "Direct Issuance", "24/7 GDS Support", "Group Bookings"].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#002d62] opacity-80">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
