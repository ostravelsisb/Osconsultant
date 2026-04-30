import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, HeartPulse, CalendarX2, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/travel-insurance")({
  head: () => ({
    meta: [
      { title: "Best Travel Insurance in Pakistan 2026 — Schengen Compliant | OS Consultants Islamabad" },
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
      { property: "og:title", content: "Best Travel Insurance Pakistan — Schengen Compliant | OS Consultants" },
      { property: "og:description", content: "Instant Schengen-compliant travel insurance. €30,000+ medical cover from Islamabad." },
      { property: "og:url", content: "https://osconsultants.pk/travel-insurance" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Travel Insurance Pakistan | OS Consultants" },
    ],
    links: [
      { rel: "canonical", href: "https://osconsultants.pk/travel-insurance" },
    ],
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

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: HeartPulse,
            t: "Medical Coverage",
            d: "Up to €50,000+ for medical emergencies abroad.",
          },
          { icon: CalendarX2, t: "Trip Cancellation", d: "Refunds for unexpected trip changes." },
          {
            icon: ShieldCheck,
            t: "Schengen Compliant",
            d: "Meets all Schengen visa insurance requirements.",
          },
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
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Insure your journey today</h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            Get Insurance Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="space-y-8 border-t border-border pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
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
        </div>
      </section>
    </>
  );
}
