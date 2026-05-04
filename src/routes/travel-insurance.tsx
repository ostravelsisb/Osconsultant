import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { BookingWidget } from "@/components/site/BookingWidget";
import {
  ShieldCheck,
  HeartPulse,
  CalendarX2,
  Globe2,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/travel-insurance")({
  head: () => ({
    meta: [
      {
        title:
          "Best Travel Insurance in Pakistan 2026 — Schengen Compliant | OS Consultants Islamabad",
      },
      {
        name: "description",
        content:
          "Get the cheapest Schengen-compliant travel insurance in Pakistan. €30,000+ medical cover, trip cancellation protection & worldwide coverage. Instant policy from OS Consultants Islamabad.",
      },
      {
        name: "keywords",
        content:
          "best travel insurance pakistan 2026, schengen approved travel insurance islamabad, cheapest travel insurance pakistan, travel medical insurance ISB, trip cancellation cover pakistan, buy travel insurance blue area, europe visa insurance islamabad, worldwide travel insurance pakistan, instant travel insurance policy islamabad, travel insurance for USA visa pakistan, travel insurance for UK visa islamabad",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      {
        property: "og:title",
        content: "Best Travel Insurance Pakistan — Schengen Compliant | OS Consultants",
      },
      {
        property: "og:description",
        content:
          "Instant Schengen-compliant travel insurance. €30,000+ medical cover from Islamabad.",
      },
      { property: "og:url", content: "https://osconsultants.pk/travel-insurance" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Travel Insurance Pakistan | OS Consultants" },
    ],
    links: [{ rel: "canonical", href: "https://osconsultants.pk/travel-insurance" }],
  }),
  component: TravelInsurance,
});

function TravelInsurance() {
  return (
    <>
      <PageHero
        eyebrow="Travel Insurance"
        title="Travel covered. Mind at ease."
        subtitle="Schengen-compliant policies, global medical cover and trip cancellation protection."
      />

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <BookingWidget initialTab="visa" />
        </Reveal>
      </div>

      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Coverage Categories"
          title="Extensive Insurance Plans"
          subtitle="Explore the best-fit policy to protect your upcoming journey from unexpected delays, losses, and medical emergencies."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: HeartPulse,
              t: "Worldwide Medical Cover",
              d: "Up to €50,000+ emergency healthcare coverage anywhere on the globe.",
            },
            {
              icon: CalendarX2,
              t: "Trip Cancellations & Changes",
              d: "Secure refunds for non-refundable flights, hotels, and tours.",
            },
            {
              icon: ShieldCheck,
              t: "Schengen Compliant Plans",
              d: "Pre-approved, guaranteed policies accepted across all 29 Schengen states.",
            },
            {
              icon: ClipboardList,
              t: "Baggage & Belongings Loss",
              d: "Reimbursements for checked baggage loss, theft, and delays.",
            },
            {
              icon: Globe2,
              t: "USA, UK, & Global Coverage",
              d: "Highly protective international medical coverage for long and short visits.",
            },
            {
              icon: AlertCircle,
              t: "24/7 Support Hotline",
              d: "Immediate, responsive emergency travel and claim assistance from anywhere.",
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

      {/* Workflow Step-by-Step Pathway */}
      <section className="bg-secondary/20 py-20 border-t border-border/50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fast & Secure"
            title="Step-by-Step Activation Pathway"
            subtitle="Secure your valid travel insurance policy in minutes with zero bureaucratic friction."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Inquire & Profile",
                desc: "We collect your basic identity information, travel destination, and exact departure/arrival dates.",
              },
              {
                step: "02",
                title: "Plan Selection",
                desc: "Our experts suggest the most affordable and completely compliant insurance tier for your destination.",
              },
              {
                step: "03",
                title: "Secure Processing",
                desc: "Your policy is drafted instantly through direct digital connection with leading global underwriters.",
              },
              {
                step: "04",
                title: "Instant Voucher",
                desc: "Walk away with your valid, printable, soft/hard copy policy immediately ready for embassy use.",
              },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative p-6 bg-card border border-border rounded-2xl shadow-soft h-full hover:border-primary/40 transition-colors">
                  <span className="absolute top-4 right-4 text-4xl font-extrabold text-primary/10 tracking-wider">
                    {p.step}
                  </span>
                  <h3 className="text-xl font-bold mt-4">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value factors and Checkmarks Section */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border/50">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Maximum Trust
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Top Travel Insurance Agent in Blue Area
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                An exact match of dates and policy parameters is crucial to prevent visa rejection.
                We eliminate risk by cross-verifying your dates with your flight ticket.
              </p>
              <ul className="space-y-3.5">
                {[
                  "100% Acceptable Schengen-approved travel insurance.",
                  "Zero paperwork errors with precise date alignment.",
                  "Affordable plans with high-value medical cover limits.",
                  "Immediate digital activation and soft-copy transmission.",
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
                { label: "Minimum Medical Coverage", limit: "€30,000+" },
                { label: "Processing Speed", limit: "Under 5 Mins" },
                { label: "Age Limits Supported", limit: "Up to 85 Yrs" },
                { label: "Visa Approval Rate Link", limit: "98% Validated" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="p-6 bg-card border border-border rounded-2xl shadow-soft"
                >
                  <p className="text-sm font-bold text-foreground">{d.label}</p>
                  <p className="text-xl font-extrabold gradient-text mt-2">{d.limit}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mid CTA section */}
      <section className="bg-secondary/40 py-16 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <Globe2 size={36} className="mx-auto text-accent" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Insure your journey today</h2>
          <p className="mt-3 text-muted-foreground">
            Schengen-approved, high-limit medical policies issued instantly in Blue Area.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            Get Insurance Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Travel Insurance FAQ Section */}
      <section className="container-px mx-auto max-w-7xl py-20 bg-secondary/10 border-t border-border/50">
        <SectionHeader
          eyebrow="Quick Answers"
          title="Insurance FAQs"
          subtitle="Clear, precise answers to common questions about your travel medical insurance policy."
        />
        <FAQAccordion
          items={[
            {
              q: "Does this insurance cover all Schengen countries?",
              a: "Yes. Our Schengen-approved plans meet the strict €30,000 minimum cover requirement and are unconditionally accepted by all Schengen member states.",
            },
            {
              q: "How fast can I get the insurance printout?",
              a: "We process and print your travel insurance policy in less than 5 minutes. You can also receive a valid soft-copy PDF on your WhatsApp immediately.",
            },
            {
              q: "Is there an age limit for travel insurance in Pakistan?",
              a: "Yes, but we have flexible plans supporting travelers up to 85 years of age with highly customized coverage limits.",
            },
            {
              q: "Does the insurance cover COVID-19 or emergency medical treatment?",
              a: "Yes. All our medical plans offer extensive coverage for sudden illnesses, hospital stays, and emergency treatments including COVID-19 related care.",
            },
          ]}
        />
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-5xl py-20 border-t border-border/50">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl text-foreground">
              Comprehensive Travel & Medical Insurance in Pakistan
            </h2>
          </div>
          <div className="grid gap-8 text-muted-foreground leading-relaxed md:grid-cols-2">
            <p>
              Applying for a visa to Europe? Securing{" "}
              <strong>Schengen approved travel insurance in Islamabad</strong> is a mandatory step
              in your application process. At OS Consultants, we provide compliant policies that
              meet the strict minimum €30,000 medical emergency coverage required by all Schengen
              embassies, ensuring your visa application is processed without delays.
            </p>
            <p>
              We don't just cater to visa requirements; we offer the{" "}
              <strong>cheapest travel insurance in Pakistan</strong> without compromising on
              quality. Whether you need coverage for trip cancellations, lost baggage, or unexpected
              medical emergencies abroad, our customized plans provide complete peace of mind.
              Protect yourself and your family with trusted global coverage right from our office in
              Blue Area.
            </p>
          </div>

          <div className="prose max-w-none prose-lg mt-10 border-t border-border pt-10">
            <h3 className="text-2xl font-bold text-foreground">
              Relatable Insurance Coverage for Worldwide Journeys
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When planning an international trip, it is critical to protect yourself against
              unexpected circumstances. Travel emergencies can happen anywhere, and overseas medical
              costs can quickly escalate. With OS Consultants by your side, you can obtain
              high-quality policies tailored to your budget.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you are going on a short vacation to the UAE, a multi-city tour through
              Europe, or a student program in Canada or Australia, our plans are designed to match
              your itinerary exactly. We handle all paperwork instantly so you walk away with a
              ready-to-use printout or soft copy immediately.
            </p>
            <h4 className="text-xl font-bold text-foreground mt-6">
              Why It's Vital for Schengen, USA & Canada Visas
            </h4>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Consulates and embassies explicitly look for clear travel insurance validity dates
              that completely cover your journey. Having even a one-day gap can lead to visa
              refusal. We verify your dates to match your flights exactly, eliminating any risk of
              rejection. Trust OS Consultants to keep your travel fully covered from takeoff to
              landing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
