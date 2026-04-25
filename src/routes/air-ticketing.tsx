import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Plane, Globe2, BadgeCheck, Banknote, Clock4, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/air-ticketing")({
  head: () => ({
    meta: [
      { title: "Best Air Ticketing Agency in Islamabad — Cheap Flights" },
      { name: "description", content: "OS Consultants is an IATA-authorized travel agent in Islamabad offering cheap international flights, fast booking, and 24/7 ticketing support." },
      { name: "keywords", content: "best air ticketing agency Islamabad, cheap flights from Islamabad, IATA authorized travel agent ISB, international flight booking Pakistan, cheap tickets to UK from Islamabad, USA flight booking ISB, travel agency in Blue Area" },
      { property: "og:title", content: "Air Ticketing — IATA Authorized" },
      { property: "og:description", content: "Best fares, instant confirmation, all major airlines." },
    ],
  }),
  component: AirTicketing,
});

function AirTicketing() {
  return (
    <>
      <PageHero eyebrow="Air Ticketing" title="IATA-authorized tickets at the best fares" subtitle="Instant booking on every major airline — domestic and international — backed by 24/7 support." />
      
      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: BadgeCheck, t: "IATA Authorized", d: "Officially accredited ticketing agency." },
          { icon: Globe2, t: "International Routes", d: "All major airlines worldwide." },
          { icon: Banknote, t: "Best Fares", d: "Lowest available pricing, transparent fees." },
          { icon: Clock4, t: "24/7 Support", d: "Booking changes anytime, anywhere." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 0.05}>
            <div className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft"><b.icon size={20} /></span>
              <h3 className="mt-5 text-lg font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Plane size={36} className="mx-auto text-accent" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Ready to fly?</h2>
          <p className="mt-3 text-muted-foreground">Send us your route and dates — we'll quote the best fare within minutes.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform">Get a Fare Quote <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="space-y-8 border-t border-border pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Your Trusted IATA Authorized Travel Agent in ISB</h2>
          </div>
          <div className="grid gap-8 text-muted-foreground leading-relaxed md:grid-cols-2">
            <p>
              Finding the <strong>best air ticketing agency in Islamabad</strong> is essential for stress-free international travel. At OS Consultants, we are proud to be an officially IATA-authorized travel agent based in Blue Area. This accreditation guarantees that we have direct access to all major global airlines, allowing us to provide you with secure, authentic, and instantly confirmed flight tickets.
            </p>
            <p>
              Whether you are looking for <strong>cheap flights from Islamabad</strong> for a family vacation, or last-minute business class seats for corporate travel, our dedicated ticketing team ensures you get the most competitive rates. We specialize in complex itineraries, including multi-city routes, layover optimizations, and securing cheap tickets to the UK, USA, Europe, and the Middle East. Let us handle your flight booking in ISB with complete transparency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}