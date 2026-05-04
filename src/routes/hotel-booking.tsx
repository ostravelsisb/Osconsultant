import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookingWidget } from "@/components/site/BookingWidget";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import {
  Hotel,
  Crown,
  Wallet,
  Globe2,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Plane,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Best Hotel Booking Agent in Islamabad 2026 — Cheap International Reservations | OS Consultants" },
      {
        name: "description",
        content:
          "Pakistan's trusted hotel booking agent in Islamabad. Cheap hotel reservations worldwide for visa applications, luxury stays & budget travel. Schengen, UK, USA visa hotel bookings. Best rates guaranteed from Blue Area.",
      },
      {
        name: "keywords",
        content:
          "best hotel booking agent islamabad, cheap hotel reservations for visa ISB, schengen visa hotel booking islamabad, uk visa hotel booking pakistan, best travel agent for hotels blue area, dubai hotel booking islamabad, international hotel reservations pakistan, luxury hotel booking islamabad, budget hotel booking pakistan, visa compliant hotel reservation, makkah hotel booking pakistan, europe hotel booking agent",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Best Hotel Booking Agent Islamabad — Worldwide Reservations | OS Consultants" },
      {
        property: "og:description",
        content: "Global hotel partners. Best rates for visa applications & holidays. Luxury to budget worldwide.",
      },
      { property: "og:url", content: "https://osconsultants.pk/hotel-booking" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hotel Booking Agent Islamabad | OS Consultants" },
      { name: "twitter:description", content: "Cheapest hotel reservations for visas & holidays from Islamabad." },
    ],
    links: [
      { rel: "canonical", href: "https://osconsultants.pk/hotel-booking" },
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

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <BookingWidget initialTab="hotel" />
        </Reveal>
      </div>

      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Accommodation Tiers"
          title="Curated Hotel Choices"
          subtitle="Discover premium, mid-range, and value accommodations anywhere in the world tailored exactly to your budget and travel purpose."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Crown,
              t: "Luxury & Ultra-Resorts",
              d: "5-star luxury resorts, private villas, suites and iconic global properties.",
            },
            {
              icon: Hotel,
              t: "Mid-range & Boutique",
              d: "Trusted brand hotels, local gems, and prime downtown locations.",
            },
            {
              icon: Wallet,
              t: "Budget & Value Stays",
              d: "Verified budget-friendly properties with exceptional comfort for smart travelers.",
            },
            {
              icon: ClipboardList,
              t: "Visa-Compliant Bookings",
              d: "Pre-approved, easily verifiable hotel reservations for Schengen, UK, and USA visa cases.",
            },
            {
              icon: Globe2,
              t: "Long-Term & Serviced Stays",
              d: "Ideal for extended family vacations, business travel, and temporary corporate relocations.",
            },
            {
              icon: Award,
              t: "Corporate Travel Blocks",
              d: "Special corporate volume discounts for team retreats, trade shows, and conferences.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                    <b.icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking Procedure Pathway */}
      <section className="bg-secondary/20 py-20 border-t border-border/50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Simple Process"
            title="Our Booking & Reservation Pathway"
            subtitle="Secure, verifiable, and fast reservation procedures that save you both time and money."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Requirements Inquiry",
                desc: "We collect your travel dates, preferred location, tier, and whether it's for holiday or a visa application.",
              },
              {
                step: "02",
                title: "Compare & Source",
                desc: "We scan direct GDS connections and exclusive wholesale hotel rates to extract the best possible pricing.",
              },
              {
                step: "03",
                title: "Confirm Selection",
                desc: "We verify the booking policies (refundable, breakfast, check-in details) and secure the room for you.",
              },
              {
                step: "04",
                title: "Voucher Delivery",
                desc: "Receive your valid, confirmed booking voucher via email and WhatsApp instantly.",
              },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative p-6 bg-card border border-border rounded-2xl shadow-soft h-full hover:border-primary/40 transition-colors">
                  <span className="absolute top-4 right-4 text-4xl font-extrabold text-primary/10 tracking-wider">
                    {p.step}
                  </span>
                  <h3 className="text-xl font-bold mt-4">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global network section */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border/50">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Worldwide Network
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Global Hotel Partners & Direct Contracts
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Our direct partnerships with global distribution systems and premium hotel chains enable us to provide verified, cheap hotel bookings for any location worldwide.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Specialized rates for UK, Schengen, USA, and Gulf properties.",
                  "Guaranteed verifiable hotel bookings that meet strict visa requirements.",
                  "Full-service itinerary customization with complimentary airport transfers.",
                  "Direct access to 'agent-only' rates unavailable on the public web.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm font-medium">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
              >
                Inquire on WhatsApp <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Dubai & Gulf", count: "500+ Partner Hotels" },
                { label: "Europe & Schengen", count: "1200+ Partner Hotels" },
                { label: "United Kingdom", count: "400+ Partner Hotels" },
                { label: "USA & Canada", count: "800+ Partner Hotels" },
              ].map(d => (
                <div key={d.label} className="p-6 bg-card border border-border rounded-2xl shadow-soft">
                  <p className="text-sm font-bold text-foreground">{d.label}</p>
                  <p className="text-xl font-extrabold gradient-text mt-2">{d.count}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Informational CTA Section */}
      <section className="bg-secondary/40 py-16 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <Globe2 size={36} className="mx-auto text-accent" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Plan your luxury vacation today</h2>
          <p className="mt-3 text-muted-foreground">
            Get premium rates and flawless reservations tailored for holiday or visa applications.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            Book a Hotel <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Extensive Hotel Booking FAQ Section */}
      <section className="container-px mx-auto max-w-7xl py-20 bg-secondary/10 border-t border-border/50">
        <SectionHeader
          eyebrow="Quick Answers"
          title="Frequently Asked Questions"
          subtitle="Explore the most common inquiries regarding hotel booking, visa compliance, and cancellation terms."
        />
        <FAQAccordion
          items={[
            {
              q: "Can I use your hotel booking for a Schengen visa application?",
              a: "Yes. We offer fully verifiable hotel reservations that are strictly compliant with the requirements of European embassies. They contain complete booking IDs and hotel contacts.",
            },
            {
              q: "Are the hotel booking prices inclusive of taxes?",
              a: "Yes. Unless explicitly stated otherwise, we calculate total rates inclusive of local and tourism taxes to avoid unexpected charges upon your check-in.",
            },
            {
              q: "Can I amend or cancel my hotel booking?",
              a: "Cancellation and amendment policies depend entirely on the selected property and rate. We provide highly flexible options and clearly state cancellation deadlines beforehand.",
            },
            {
              q: "Do you offer airport transfers alongside hotel bookings?",
              a: "Absolutely. We provide end-to-end travel solutions including private or shared airport transfers to ensure a completely seamless arrival.",
            },
          ]}
        />
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-5xl py-20 border-t border-border/50">
        <div className="space-y-8">
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
