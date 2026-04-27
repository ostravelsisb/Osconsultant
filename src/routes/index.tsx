import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CountryCard } from "@/components/site/CountryCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { DESTINATIONS } from "@/data/destinations";
import {
  COMPANY,
  COUNTRIES,
  FAQS,
  TESTIMONIALS,
  TRAVEL_SERVICES,
  VISA_SERVICES,
} from "@/data/site";
import {
  Plane,
  Hotel,
  ShieldCheck,
  BookUser,
  Globe2,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  Map,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Clock4,
  ThumbsUp,
  FileCheck2,
  MessageSquare,
  Stamp,
  Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OS Consultants — Best Visa Consultant in Islamabad, Pakistan" },
      {
        name: "description",
        content:
          "Expert visa consultancy in Islamabad. Specializing in Schengen, UK, USA, Canada, & Australia visas. 15+ years experience, IATA authorized ticketing & travel insurance.",
      },
      {
        name: "keywords",
        content:
          "visa consultant islamabad, best visa agency pakistan, schengen visa islamabad, uk visit visa pakistan, usa visa consultant islamabad, canada pr islamabad, australia visa agent pakistan, travel agency blue area islamabad",
      },
      {
        property: "og:title",
        content: "OS Consultants — Best Visa & Travel Consultancy in Islamabad",
      },
      {
        property: "og:description",
        content:
          "Pakistan's trusted visa & travel consultancy. 15+ years experience, 98% approval rate for Schengen, UK, USA, and Canada.",
      },
      { property: "og:image", content: "/src/assets/hero-travel.jpg" },
      {
        name: "twitter:title",
        content: "OS Consultants — Best Visa & Travel Consultancy in Islamabad",
      },
      {
        name: "twitter:description",
        content:
          "Expert visa services for Schengen, UK, USA, Canada, and Australia. 15+ years experience in Islamabad.",
      },
    ],
  }),
  component: Home,
});

const VISA_ICONS = [Plane, Heart, Users, Globe2, GraduationCap, Briefcase];
const TRAVEL_ICONS = [Plane, Hotel, ShieldCheck, BookUser];
const PROCESS = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us your travel goal and we'll map the right visa pathway.",
  },
  {
    icon: FileCheck2,
    title: "Document Prep",
    desc: "We curate, review and validate every required document.",
  },
  {
    icon: Stamp,
    title: "Application & Submission",
    desc: "Forms, appointments and submission handled end-to-end.",
  },
  {
    icon: ThumbsUp,
    title: "Approval & Travel",
    desc: "Receive your visa, then we handle tickets, hotels and insurance.",
  },
];

function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <Hero />

      {/* Visa Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Visa Services"
          title="Visas to anywhere you want to go"
          subtitle="Hand-crafted documentation, embassy expertise and dedicated case officers for every application."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VISA_SERVICES.map((s: { title: string; desc: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard
                icon={VISA_ICONS[i % VISA_ICONS.length]}
                title={s.title}
                desc={s.desc}
                to="/visa-services"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Destinations"
            title="Iconic destinations, simplified"
            subtitle="From Schengen Europe to North America, Oceania, Middle East, and beyond."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DESTINATIONS.slice(0, 8).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <CountryCard
                  slug={c.slug}
                  name={c.name}
                  short={c.shortDesc}
                  image={c.image}
                  accent="View Details"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-5 py-3 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5"
            >
              Browse All Destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Why Choose Us"
              title="A premium consultancy you can trust"
              subtitle="We combine deep embassy expertise with a personal, transparent process — so your application stands out."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  t: "98% Approval Rate",
                  d: "Proven track record across major embassies.",
                },
                { icon: Clock4, t: "Fast Turnaround", d: "Most files prepared within 48 hours." },
                {
                  icon: ShieldCheck,
                  t: "Transparent Pricing",
                  d: "No surprises — clear upfront quotes.",
                },
                {
                  icon: Sparkles,
                  t: "Personal Case Officer",
                  d: "Dedicated expert for every client.",
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft hover-lift"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                    <b.icon size={18} />
                  </span>
                  <p className="mt-3 text-sm font-semibold">{b.t}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-card p-8 shadow-elevated">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Approval Rate
                    </p>
                    <p className="mt-1 text-5xl font-bold gradient-text">98%</p>
                  </div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground shadow-glow">
                    <Award size={26} />
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: "15+", l: "Years" },
                    { n: "20K+", l: "Travelers" },
                    { n: "50+", l: "Countries" },
                  ].map((s: { n: string; l: string }) => (
                    <div key={s.l} className="rounded-xl bg-secondary/60 p-3">
                      <p className="text-xl font-bold">{s.n}</p>
                      <p className="text-[11px] text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  Backed by a meticulous review process and embassy-aligned documentation, our case
                  officers maximize approval chances for every application.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.32_0.16_258)] py-20 text-white md:py-28">
        <div className="absolute inset-0 mesh-bg opacity-25" />
        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              From idea to boarding pass — in 4 steps
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur card-3d">
                  <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-glow text-sm font-bold text-accent-foreground shadow-glow">
                    0{i + 1}
                  </span>
                  <p.icon size={22} className="text-accent-glow" />
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Travel Services"
          title="Beyond visas — your complete travel partner"
          subtitle="One team for every travel need: tickets, hotels, insurance and passports."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TRAVEL_SERVICES.map((s: { title: string; desc: string; to: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard icon={TRAVEL_ICONS[i]} title={s.title} desc={s.desc} to={s.to} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="Loved by travelers across Pakistan" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader eyebrow="FAQ" title="Quick answers to common questions" />
        <FAQAccordion items={FAQS.slice(0, 5)} />
      </section>

      {/* Contact */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Contact"
              title="Let's plan your journey"
              subtitle="Drop us a message and our team will respond within 1 business hour."
            />
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-0.5" size={18} /> Blue Area, Islamabad, Pakistan
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Facebook className="text-primary mt-0.5" size={18} />{" "}
                <a
                  className="hover:text-primary"
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Blue%20Area%2C%20Islamabad&output=embed"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
