import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Hotel, Crown, Wallet, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Best Hotel Booking Agent in Islamabad — Cheap Reservations" },
      {
        name: "description",
        content:
          "OS Consultants is your trusted hotel booking agent in Islamabad providing cheap hotel reservations for visas, luxury stays, and budget accommodations globally.",
      },
      {
        name: "keywords",
        content:
          "hotel booking agent Islamabad, cheap hotel reservations for visa ISB, Schengen visa hotel booking Islamabad, best travel agent for hotels Blue Area, Dubai hotel booking ISB, international hotel reservations Pakistan",
      },
      { property: "og:title", content: "Hotel Booking — Luxury & Budget Stays Worldwide" },
      {
        property: "og:description",
        content: "Global hotel partners. Best rates guaranteed for visa applications and holidays.",
      },
    ],
  }),
  component: HotelBooking,
});

function HotelBooking() {
  return (
    <>
      <PageHero
        eyebrow="Hotels"
        title="Stay where you love, save where it matters"
        subtitle="From 5-star icons to boutique gems and value stays — we book it all."
      />

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Crown, t: "Luxury Stays", d: "5-star resorts, suites and exclusive properties." },
          { icon: Hotel, t: "Mid-range Comfort", d: "Trusted brands and great locations." },
          { icon: Wallet, t: "Budget Friendly", d: "Verified value stays for smart travelers." },
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

      <section className="bg-secondary/40 py-16">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Globe2 size={36} className="mx-auto text-accent" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Global hotel partners</h2>
          <p className="mt-3 text-muted-foreground">
            Direct contracts with leading chains across Europe, the Americas, Middle East, and Asia.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            Book a Hotel <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="space-y-8 border-t border-border pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Expert Hotel Booking Agent in Islamabad
            </h2>
          </div>
          <div className="grid gap-8 text-muted-foreground leading-relaxed md:grid-cols-2">
            <p>
              Securing the right accommodation is critical, especially when applying for visas. As
              the premier <strong>hotel booking agent in Islamabad</strong>, OS Consultants offers
              verifiable and <strong>cheap hotel reservations for visa</strong> applications.
              Embassies, particularly for Schengen and the US, require confirmed hotel bookings; we
              ensure your documentation is flawless to prevent visa rejections.
            </p>
            <p>
              Beyond visa compliance, we offer exceptional deals for holidaymakers and corporate
              travelers. Whether you need a luxury 5-star resort in Dubai, a boutique hotel in
              Paris, or a budget-friendly stay in London, our international partnerships guarantee
              the best rates. Stop searching endlessly online; let the best travel agent for hotels
              in Blue Area handle your itinerary seamlessly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
