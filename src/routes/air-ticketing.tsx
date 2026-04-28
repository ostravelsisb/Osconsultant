import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Plane, Globe2, BadgeCheck, Banknote, Clock4, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/air-ticketing")({
  head: () => ({
    meta: [
      { title: "Best Air Ticketing Agency in Islamabad — Cheap Flights & IATA Deals" },
      {
        name: "description",
        content:
          "OS Consultants is the premier IATA-authorized travel agent in Islamabad. We offer cheap international flights, group bookings, and 24/7 ticketing support from our Blue Area office.",
      },
      {
        name: "keywords",
        content:
          "best air ticketing agency Islamabad, cheap flights from Islamabad, IATA authorized travel agent ISB, international flight booking Pakistan, cheap tickets to UK from Islamabad, USA flight booking ISB, airline reservation Islamabad, last minute flights Pakistan, group flight booking Islamabad, student discount tickets Islamabad, business class deals ISB, IATA travel agency Blue Area",
      },
      { property: "og:title", content: "Air Ticketing ISB — IATA Authorized Excellence" },
      {
        property: "og:description",
        content: "Secure the best airline fares with instant confirmation and 24/7 expert support.",
      },
    ],
  }),
  component: AirTicketing,
});

function AirTicketing() {
  return (
    <>
      <PageHero
        eyebrow="Air Ticketing"
        title="IATA-authorized tickets at the best fares"
        subtitle="Instant booking on every major airline — domestic and international — backed by 24/7 support."
      />

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          { icon: BadgeCheck, t: "IATA Authorized", d: "Officially accredited ticketing agency." },
          { icon: Globe2, t: "International Routes", d: "All major airlines worldwide." },
          { icon: Banknote, t: "Best Fares", d: "Lowest available pricing, transparent fees." },
          { icon: Clock4, t: "24/7 Support", d: "Booking changes anytime, anywhere." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 0.05}>
            <div className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                <b.icon size={20} />
              </span>
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
          <p className="mt-3 text-muted-foreground">
            Send us your route and dates — we'll quote the best fare within minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923325500377?text=Hi%20Hammad%2C%20I%20need%20a%20fare%20quote%20for%20a%20flight."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              Contact Hammad Ahmed
            </a>
            <a
              href="https://wa.me/923315500177?text=Hi%20Noor%2C%20I%20need%20a%20fare%20quote%20for%20a%20flight."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              Contact Noor Ul Huda
            </a>
          </div>
        </div>
      </section>

      {/* Premium Visual Section */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-elevated">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto overflow-hidden">
              <img
                src="/air_ticketing_hero_1777294022698.png"
                alt="Modern Aviation"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-6">
                  <Plane size={14} /> Global Network
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
                  Seamless connections to over 200+ destinations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  As an <strong>IATA-certified agency</strong>, we bridge the gap between you and
                  the world's leading airlines. Our direct integration with global distribution
                  systems (GDS) ensures that you see real-time availability and "web-only" fares
                  that aren't available to the general public.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Instant E-Tickets
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Group Discounts
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Student Fares
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Multi-city Routes
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Long Content SEO Section */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl mb-6">
                Why Choose OS Consultants for Your Flight Bookings?
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Finding the <strong>best air ticketing agency in Islamabad</strong> can be
                  overwhelming with so many options in Blue Area. However, OS Consultants stands out
                  as a premier <strong>IATA-authorized travel agent</strong>. This status is not
                  just a badge; it signifies our commitment to professional standards, financial
                  security, and direct relationships with over 300 airlines worldwide.
                </p>
                <p>
                  Our team specializes in finding <strong>cheap flights from Islamabad</strong> to
                  major hubs including London, New York, Toronto, Dubai, and Melbourne. We don't
                  just use automated tools; our expert ticketing officers manually audit routes to
                  find hidden savings, such as "split-ticketing" or choosing alternative hubs that
                  can save you thousands of rupees on <strong>international flight bookings</strong>
                  .
                </p>
                <h3 className="text-xl font-bold text-foreground">Global Airline Partnerships</h3>
                <p>
                  We are proud partners with the world's leading carriers. Whether you prefer the
                  luxury of <strong>Emirates</strong> and <strong>Qatar Airways</strong>, the
                  extensive network of <strong>Turkish Airlines</strong>, or the convenience of
                  <strong>PIA</strong>, we provide seamless reservations. Our clients often enjoy
                  exclusive <strong>business class deals in ISB</strong> and early-access to
                  promotional fares for summer and winter holidays.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl bg-muted/30 p-8 border border-border/50">
                <h4 className="text-lg font-bold mb-4">Corporate & Group Travel</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Managing travel for a large group or a corporate team requires precision. We offer
                  specialized <strong>group flight booking in Islamabad</strong>, allowing you to
                  block seats with minimal deposits and manage name changes flexibly. Perfect for
                  weddings, sports teams, and religious groups.
                </p>
              </div>
              <div className="rounded-3xl bg-muted/30 p-8 border border-border/50">
                <h4 className="text-lg font-bold mb-4">Special Student Discounts</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Traveling for studies? We assist students in securing
                  <strong>discounted tickets from Islamabad</strong> with extra baggage allowances
                  on major airlines like Virgin Atlantic, Etihad, and British Airways. Bring your
                  university offer letter and save on your first journey abroad.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl bg-primary/5 p-8 border border-primary/10">
              <h4 className="font-bold text-lg mb-6">Ticketing Checklist</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-0.5 text-primary shrink-0" />
                  <span>Passport validity must be at least 6 months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-0.5 text-primary shrink-0" />
                  <span>Check transit visa requirements for layovers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-0.5 text-primary shrink-0" />
                  <span>Ensure your name matches your passport exactly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-0.5 text-primary shrink-0" />
                  <span>Verify baggage allowance (2PC vs 30KG).</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-accent/5 p-8 border border-accent/10">
              <h4 className="font-bold text-lg mb-4">24/7 Urgent Support</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Flight cancelled? Need an urgent date change? Our "Human-Powered" support is
                available around the clock to handle emergencies.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Avg Response Time</span>
                  <span className="text-primary">15 Mins</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-primary" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
