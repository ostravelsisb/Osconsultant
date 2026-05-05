import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import {
  Award,
  Target,
  Eye,
  Users,
  Globe2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OS Consultants — Pakistan's #1 Visa & Travel Agency Since 2009 | Islamabad" },
      {
        name: "description",
        content:
          "OS Consultants is Pakistan's most trusted visa & travel agency since 2009. 15+ years experience, 20,000+ happy clients, 98% approval rate. IATA-accredited office in Blue Area, Islamabad. Expert team for Schengen, USA, UK, Canada & Australia visas.",
      },
      {
        name: "keywords",
        content:
          "about os consultants, best visa consultancy islamabad history, top immigration agency pakistan, trusted visa company since 2009, IATA accredited travel company islamabad, 98 percent visa approval rate pakistan, most experienced visa consultant islamabad, top rated travel agency pakistan, os consultants team, blue area visa agency",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "OS Consultants" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      {
        property: "og:title",
        content: "About OS Consultants — Pakistan's Leading Visa & Travel Agency Since 2009",
      },
      {
        property: "og:description",
        content:
          "15+ years of excellence. 20,000+ happy clients. 98% approval rate. Learn about Pakistan's most trusted visa consultancy.",
      },
      { property: "og:image", content: "/images/img_5f78d2f1fc.jpg" },
      { property: "og:url", content: "https://osconsultants.pk/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About OS Consultants | Pakistan's #1 Since 2009" },
      {
        name: "twitter:description",
        content:
          "15+ years, 20K+ clients, 98% approval rate. The story of Pakistan's top visa agency.",
      },
    ],
    links: [{ rel: "canonical", href: "https://osconsultants.pk/about" }],
  }),
  component: About,
});

function About() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://osconsultants.pk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://osconsultants.pk/about",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <PageHero
        eyebrow="Our Story"
        title="Premium visa consultancy from the heart of Islamabad"
        subtitle="Since 2009, OS Consultants has helped over 20,000 travelers secure visas, flights and travel solutions to 50+ destinations worldwide."
        backTo="/"
        backLabel="Back to Home"
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Trusted advisors for life-changing journeys
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              OS Consultants began with a simple promise — make global travel accessible to every
              Pakistani family, student and professional. Today we&apos;re recognized as one of
              Islamabad&apos;s leading consultancies, with a reputation built on transparency,
              expertise and an unwavering commitment to client success.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From Schengen and US visitor visas to complex family reunification and IATA-authorized
              ticketing, our team delivers premium service at every step.
            </p>
            <Link
              to="/consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              Book a Free Consultation <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "15+", l: "Years of experience" },
                { n: "20K+", l: "Happy travelers" },
                { n: "98%", l: "Approval rate" },
                { n: "50+", l: "Countries covered" },
              ].map((s: { n: string; l: string }) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft text-center hover-lift"
                >
                  <p className="text-4xl font-bold gradient-text">{s.n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 border-t border-border/50">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              t: "Our Mission",
              d: "Empower every traveler with transparent, expert visa and travel guidance — no shortcuts, no surprises.",
            },
            {
              icon: Eye,
              t: "Our Vision",
              d: "Be South Asia&apos;s most trusted name in visa consultancy by setting new standards in service and integrity.",
            },
            {
              icon: Sparkles,
              t: "Our Values",
              d: "Honesty, expertise, accountability, and an obsessive focus on the client experience.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="card-3d h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                  <b.icon size={20} />
                </span>
                <h3 className="mt-5 text-xl font-bold">{b.t}</h3>
                <p
                  className="mt-2 text-sm text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b.d }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border/50">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Why OS Consultants
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Top Visa Consultancy in Pakistan
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                With over a decade of continuous presence in Blue Area, Islamabad, we've set
                industry benchmarks for transparency, validation, and processing accuracy.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Official IATA-accredited agency ensuring authentic reservations.",
                  "Personalized case officers dedicated to your visa file.",
                  "Verified, direct ties with multiple global consulates.",
                  "Transparent tracking of your document status at every single step.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm font-medium">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Founded Year", count: "Since 2009" },
                { label: "Visa Approved Rate", count: "98% Validated" },
                { label: "Travel Insurance Partner", count: "100% Compliant" },
                { label: "Total Successful Visas", count: "12,500+" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="p-6 bg-card border border-border rounded-2xl shadow-soft"
                >
                  <p className="text-sm font-bold text-foreground">{d.label}</p>
                  <p className="text-xl font-extrabold gradient-text mt-2">{d.count}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEW EXTENSIVE READABLE CONTENT FOR SEO */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border/50">
        <Reveal>
          <div className="prose max-w-none prose-lg">
            <h2 className="text-3xl font-bold md:text-4xl text-foreground">
              Our Story & Extensive Industry Expertise
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For more than 15 years, OS Consultants has maintained its status as the most
              comprehensive travel agency and trusted visa consultant in Islamabad. We provide
              reliable guidance across a variety of pathways for individuals seeking to travel
              abroad, study internationally, or move overseas. Operating from our central office in
              Blue Area, Islamabad, we understand that submitting visa applications can be a
              stressful experience, which is why we handle all aspects of the process from end to
              end.
            </p>
            <h3 className="text-2xl font-bold text-foreground mt-8">
              Extensive Focus on Schengen, US, UK & Canada Visas
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in preparing detailed documentation for Schengen visa applications
              across all 29 member countries. Our thorough document verification ensures your bank
              statements, travel insurance, flight reservations, and hotel itineraries meet the
              exacting requirements of various embassies. Furthermore, we help you draft
              personalized cover letters that clearly present the purpose of your trip to entry
              clearance officers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When applying for a UK, USA, or Canada visa, small errors can lead to immediate
              rejections. Our case officers review every single document to confirm full compliance
              with immigration rules. We offer end-to-end support for business visits, family
              visits, tourism, and study permits. Our goal is to maintain our strong 98% approval
              rate by providing you with premium, specialized advice.
            </p>
            <h3 className="text-2xl font-bold text-foreground mt-8">
              IATA-Accredited Services & Reliable Booking
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In addition to offering visa consultancy, OS Consultants is a fully IATA-accredited
              travel agency. This accreditation allows us to book flights on major airlines at
              highly competitive prices. We also offer affordable Umrah packages, flexible hotel
              bookings, and comprehensive travel insurance. By combining these services into one
              reliable travel agency, we save you time and money while making your journey much
              smoother.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Specialized About FAQ Section */}
      <section className="container-px mx-auto max-w-7xl py-20 bg-secondary/10 border-t border-border/50">
        <SectionHeader
          eyebrow="Quick Answers"
          title="About OS Consultants FAQs"
          subtitle="Explore the most common questions regarding our company profile, operations, and services."
        />
        <FAQAccordion
          items={[
            {
              q: "When was OS Consultants established?",
              a: "We were founded in 2009 in Islamabad. For over 15 years, we have continuously operated in Blue Area, Islamabad, providing transparent, secure, and authentic travel and visa consultancy.",
            },
            {
              q: "Are you an IATA accredited agency?",
              a: "Yes. OS Consultants is fully IATA-certified. This ensures direct access to all major airlines and enables us to secure the most competitive wholesale rates for our clients.",
            },
            {
              q: "What makes your visa approval rate so high?",
              a: "We achieve a 98% approval rate by manually auditing each document, creating perfectly accurate cover letters, and conducting thorough 1-on-1 interview preparation for all applicants.",
            },
            {
              q: "Do you offer physical consultations at your office?",
              a: "Yes. You can visit our main office at Office #3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area, Islamabad to meet directly with our expert case advisors.",
            },
          ]}
        />
      </section>
    </>
  );
}
