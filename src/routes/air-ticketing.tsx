import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Plane, Globe2, BadgeCheck, Banknote, Clock4, ArrowRight, Star } from "lucide-react";
import { BookingWidget } from "@/components/site/BookingWidget";
import { FAQAccordion } from "@/components/site/FAQAccordion";

const TICKETING_FAQS = [
  { q: "Is OS Consultants an IATA-authorized travel agency?", a: "Yes. OS Consultants holds full IATA accreditation, allowing us to issue tickets directly on 300+ airlines worldwide with guaranteed fare accuracy and instant e-ticket confirmation." },
  { q: "How do I get cheap flights from Islamabad to London?", a: "Contact our ticketing desk via WhatsApp or visit our Blue Area office. We compare fares across Emirates, Turkish Airlines, PIA, Qatar Airways and more to find the lowest price with the best route for ISB to LHR flights." },
  { q: "Can I book group flights for Umrah or Hajj from Islamabad?", a: "Absolutely. We specialize in group bookings for religious travel, weddings, and corporate teams. We can block seats with minimal deposits and offer flexible name-change policies." },
  { q: "Do you offer student discount flights from Pakistan?", a: "Yes. We partner with airlines like British Airways, Etihad, and Virgin Atlantic that offer special student fares with extra baggage allowance. Bring your university offer letter for eligibility." },
  { q: "What airlines can I book through OS Consultants?", a: "We issue tickets on all major carriers including PIA, Emirates, Qatar Airways, Turkish Airlines, Etihad, Saudi Airlines, British Airways, Air Canada, Lufthansa, Singapore Airlines, Thai Airways, and 290+ more." },
  { q: "How fast can I get my e-ticket after booking?", a: "Instant. Once payment is confirmed, your e-ticket is issued within minutes and sent directly to your email and WhatsApp." },
  { q: "Do you handle flight cancellations and date changes?", a: "Yes, our 24/7 support team handles all post-booking changes including cancellations, date changes, and name corrections as per airline policy." },
  { q: "Where is your office located in Islamabad?", a: "Office #3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area, Islamabad 44000. We are open Monday to Saturday, 10 AM – 7 PM." },
];

export const Route = createFileRoute("/air-ticketing")({
  head: () => ({
    meta: [
      { title: "Best Air Ticketing Agency in Islamabad 2026 — Cheap Flights, IATA Deals | OS Consultants" },
      { name: "description", content: "OS Consultants is Islamabad's #1 IATA-authorized air ticketing agency in Blue Area. Book cheap flights to UK, USA, Canada, Dubai, Turkey & Australia. Instant e-tickets, group bookings, student discounts & 24/7 WhatsApp support. Call +92 51 2021700." },
      { name: "keywords", content: "best air ticketing agency Islamabad, cheap flights from Islamabad, IATA authorized travel agent Islamabad, international flight booking Pakistan, cheap tickets to UK from Islamabad, USA flight booking ISB, airline reservation Islamabad Blue Area, last minute flights Pakistan, group flight booking Islamabad, student discount tickets Islamabad, business class deals ISB, Umrah flight booking Islamabad, cheap flights to Dubai from ISB, Toronto flight from Islamabad, PIA ticket agent Islamabad, Emirates ticket Islamabad, Qatar Airways booking Pakistan, Turkish Airlines Islamabad, flight booking near me Islamabad, travel agency Blue Area Islamabad, air ticket price Islamabad to London, Islamabad to Jeddah flight, best travel agent Pakistan 2026, OS Consultants air ticketing" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "OS Consultants" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "OS Consultants" },
      { property: "og:title", content: "Best Air Ticketing Agency in Islamabad — Cheap International Flights | OS Consultants" },
      { property: "og:description", content: "Book the cheapest international flights from Islamabad with IATA-certified OS Consultants. Instant e-tickets on 300+ airlines. 24/7 WhatsApp support." },
      { property: "og:url", content: "https://www.ostravels.com/air-ticketing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "#1 Air Ticketing Agency Islamabad — OS Consultants" },
      { name: "twitter:description", content: "IATA-authorized. Cheapest flights from ISB to London, Dubai, Toronto, New York & more. Instant booking." },
    ],
    links: [
      { rel: "canonical", href: "https://osconsultants.pk/air-ticketing" },
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

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <BookingWidget initialTab="flights" />
        </Reveal>
      </div>

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
                src="/air_ticketing_lounge.png"
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
                  can save you thousands of rupees on <strong>international flight bookings</strong>.
                </p>

                <h3 className="text-xl font-bold text-foreground">Complete Flight Ticket Booking & Pricing Guide in Pakistan</h3>
                <p>
                  When looking to book <strong>flight tickets online in Pakistan</strong>, timing and platform expertise are crucial. To lock in the most competitive <strong>flight ticket price in Pakistan to London</strong>, New York, or anywhere across the globe, our expert systems track live trends to secure flash discounts and unadvertised airline deals.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Book Direct via IATA Agent:</strong> Eliminate middleman markup fees. As an authorized IATA agency, OS Consultants books <strong>flight tickets</strong> directly with the airline, guaranteeing transparent pricing and easy change policies.</li>
                  <li><strong>Emirates and Qatar Airways Specials:</strong> Take advantage of our premium agreements to secure top-tier amenities and competitive rates on middle-east and international routes.</li>
                  <li><strong>Last Minute Airline Tickets:</strong> Need to fly urgently from Islamabad? Our ticketing desk specializes in urgent, last-minute seat confirmations at the best possible price.</li>
                  <li><strong>Discount Student Flight Tickets:</strong> We help students unlock special baggage allowances and reduced ticket rates to the UK, Canada, and Australia.</li>
                </ul>

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

      {/* Popular Routes SEO Section */}
      <section className="bg-secondary/40 py-16">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold md:text-3xl mb-8 text-center">Popular Flight Routes from Islamabad</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { route: "Islamabad → London", code: "ISB → LHR", airlines: "PIA, Emirates, Turkish" },
              { route: "Islamabad → Dubai", code: "ISB → DXB", airlines: "Emirates, flydubai, PIA" },
              { route: "Islamabad → Toronto", code: "ISB → YYZ", airlines: "Turkish, Emirates, Qatar" },
              { route: "Islamabad → Jeddah", code: "ISB → JED", airlines: "PIA, Saudi, flynas" },
              { route: "Islamabad → New York", code: "ISB → JFK", airlines: "Emirates, Turkish, Qatar" },
              { route: "Islamabad → Istanbul", code: "ISB → IST", airlines: "Turkish Airlines" },
              { route: "Islamabad → Melbourne", code: "ISB → MEL", airlines: "Emirates, Qatar, Thai" },
              { route: "Islamabad → Doha", code: "ISB → DOH", airlines: "Qatar Airways, PIA" },
            ].map(r => (
              <div key={r.code} className="rounded-2xl bg-card border border-border p-5 shadow-soft">
                <p className="font-bold text-base">{r.route}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.code}</p>
                <p className="text-xs text-primary font-medium mt-2">{r.airlines}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <h2 className="text-2xl font-bold md:text-3xl mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center mb-10">Everything you need to know about booking flights with OS Consultants</p>
        <FAQAccordion items={TICKETING_FAQS} />
      </section>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "TravelAgency",
            "name": "OS Consultants",
            "alternateName": "OS Consultants Air Ticketing",
            "url": "https://www.ostravels.com/air-ticketing",
            "logo": "https://www.ostravels.com/logo.png",
            "image": "https://www.ostravels.com/air_ticketing_lounge.png",
            "description": "Islamabad's #1 IATA-authorized air ticketing agency. Cheap international flights, group bookings, student discounts, Umrah packages, and 24/7 WhatsApp support from Blue Area.",
            "telephone": "+92-51-2021700",
            "email": "info@osconsultants.pk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office #3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area",
              "addressLocality": "Islamabad",
              "addressRegion": "Islamabad Capital Territory",
              "postalCode": "44000",
              "addressCountry": "PK"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": "33.7215", "longitude": "73.0433" },
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "19:00" },
            "priceRange": "$$",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "847", "bestRating": "5" },
            "sameAs": ["https://www.facebook.com/osconsultants01/","https://www.instagram.com/osconsultants.pk/","https://www.linkedin.com/company/os-consultants/"]
          },
          {
            "@type": "FAQPage",
            "mainEntity": TICKETING_FAQS.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ostravels.com" },
              { "@type": "ListItem", "position": 2, "name": "Air Ticketing", "item": "https://www.ostravels.com/air-ticketing" }
            ]
          }
        ]
      })}} />
    </>
  );
}
