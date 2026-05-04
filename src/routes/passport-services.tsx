import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { BookingWidget } from "@/components/site/BookingWidget";
import {
  BookUser,
  RefreshCcw,
  Flag,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  FileText,
  AlertCircle,
  Clock,
  ShieldCheck,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/passport-services")({
  head: () => ({
    meta: [
      {
        title:
          "Passport Services Islamabad 2026 — Fast Renewals & New Applications | OS Consultants",
      },
      {
        name: "description",
        content:
          "Expert passport services in Islamabad by Pakistan's #1 travel agency. Fast passport applications, reliable renewals, urgent processing & USA passport services. OS Consultants Blue Area.",
      },
      {
        name: "keywords",
        content:
          "passport services islamabad, fast passport renewal ISB, USA passport application pakistan, passport processing agency blue area, apply for new passport islamabad, urgent passport renewal islamabad, passport agent near me islamabad, overseas passport processing pakistan, passport renewal fees pakistan 2026, best passport agent islamabad",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      {
        property: "og:title",
        content: "Passport Services Islamabad — Fast Processing | OS Consultants",
      },
      {
        property: "og:description",
        content: "New applications, renewals & USA passport processing from Blue Area, Islamabad.",
      },
      { property: "og:url", content: "https://osconsultants.pk/passport-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Passport Services Islamabad | OS Consultants" },
    ],
    links: [{ rel: "canonical", href: "https://osconsultants.pk/passport-services" }],
  }),
  component: PassportServices,
});

function PassportServices() {
  return (
    <>
      <PageHero
        eyebrow="Passport Services"
        title="Your passport, our priority"
        subtitle="From new applications to renewals and USA passports — we handle the paperwork so you don't have to."
      />

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <BookingWidget initialTab="visa" />
        </Reveal>
      </div>

      {/* Expanded grid of services */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Passport Categories"
          title="Full-Spectrum Passport Assistance"
          subtitle="Explore our comprehensive passport services to quickly and legally obtain or renew your official travel documents."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BookUser,
              t: "First-Time Applications",
              d: "Complete guidance through the initial application process, document collection, and fee submission.",
            },
            {
              icon: RefreshCcw,
              t: "Passport Renewals",
              d: "Fast, secure, and hassle-free renewal processing for both normal and urgent requirements.",
            },
            {
              icon: Flag,
              t: "USA Passport Services",
              d: "Exclusive, direct assistance for US citizens living in Pakistan with complete paperwork review.",
            },
            {
              icon: FileText,
              t: "Urgent & Executive Processing",
              d: "Accelerated booking and tracking solutions to handle time-sensitive travel and business emergencies.",
            },
            {
              icon: ClipboardList,
              t: "Data Amendments",
              d: "Expert help with name corrections, date of birth adjustments, and updating relevant personal info.",
            },
            {
              icon: AlertCircle,
              t: "Lost or Damaged Passports",
              d: "Step-by-step assistance to report and recover or replace lost, stolen, or damaged passports.",
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

      {/* Processing Pathway */}
      <section className="bg-secondary/20 py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Simple & Efficient"
            title="Step-by-Step Processing Pathway"
            subtitle="We break down complex bureaucratic tasks into simple, transparent steps."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Document Review",
                desc: "We analyze your existing identification (CNIC, old passport) to guarantee exact match and correctness.",
              },
              {
                step: "02",
                title: "File Preparation",
                desc: "Our experts fill out forms perfectly to prevent any rejection due to errors or omissions.",
              },
              {
                step: "03",
                title: "Submission & Tracking",
                desc: "Your files are submitted via appropriate authorized channels, and we track status changes daily.",
              },
              {
                step: "04",
                title: "Safe Collection",
                desc: "Collect your newly processed passport securely at our Blue Area office or get it delivered safely.",
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

      {/* Trust factors and Stats Section */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Why OS Consultants
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Trusted Name in Blue Area, Islamabad
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                We handle each case with meticulous precision. Our physical presence in Blue Area
                provides you with secure document submission and complete peace of mind.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Official and authentic application tracking",
                  "10+ Years of direct expertise in passport and visa consultancy",
                  "Direct concierge support for executive clients & frequent flyers",
                  "Expert USA passport services for American citizens in Pakistan",
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
                Book Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft text-center sm:text-left flex flex-col justify-between h-full">
                <Clock className="text-primary mx-auto sm:mx-0" size={32} />
                <div>
                  <h4 className="text-3xl font-black mt-4 gradient-text">24/7</h4>
                  <p className="text-xs text-muted-foreground mt-1">Status Support & Guidance</p>
                </div>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft text-center sm:text-left flex flex-col justify-between h-full">
                <ShieldCheck className="text-primary mx-auto sm:mx-0" size={32} />
                <div>
                  <h4 className="text-3xl font-black mt-4 gradient-text">100%</h4>
                  <p className="text-xs text-muted-foreground mt-1">Legitimate Secure Workflows</p>
                </div>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft text-center sm:text-left flex flex-col justify-between h-full">
                <Award className="text-primary mx-auto sm:mx-0" size={32} />
                <div>
                  <h4 className="text-3xl font-black mt-4 gradient-text">#1</h4>
                  <p className="text-xs text-muted-foreground mt-1">Islamabad Agency Rating</p>
                </div>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft text-center sm:text-left flex flex-col justify-between h-full">
                <BookUser className="text-primary mx-auto sm:mx-0" size={32} />
                <div>
                  <h4 className="text-3xl font-black mt-4 gradient-text">12k+</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Passports Handled Successfully
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/40 py-16 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Need a passport in time for your trip?</h2>
          <p className="mt-3 text-muted-foreground">
            Talk to our team — we'll guide you through the fastest legitimate route.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            Get Help Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Extensive FAQ Section */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Quick Answers"
          title="Frequently Asked Questions"
          subtitle="Discover clear, precise answers to common queries regarding passport processing in Islamabad."
        />
        <FAQAccordion
          items={[
            {
              q: "What documents are required for first-time applicants?",
              a: "For first-time applications in Pakistan, you need your original valid CNIC or NICOP, old CNIC if any, educational certificates (if applicable), and a valid fee payment receipt. We help you review every document before submission.",
            },
            {
              q: "How long does the passport renewal take in Islamabad?",
              a: "Standard passport renewals take about 10–15 business days, while urgent or executive processing can take as little as 4–6 business days depending on exact government timelines.",
            },
            {
              q: "Does OS Consultants assist with US Citizen passport renewals?",
              a: "Yes. We offer specialized US Citizen services. We help gather appropriate documents, verify embassy checklists, and confirm all relevant requirements so that your US passport is processed securely.",
            },
            {
              q: "Can I correct my name or date of birth on my current passport?",
              a: "Yes. We guide you through the official process for data amendment, ensuring that corrections on your passport perfectly align with your current CNIC or birth records.",
            },
          ]}
        />
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-4xl py-20 border-t border-border/50">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Reliable Passport Processing Agency in Blue Area
            </h2>
          </div>
          <div className="grid gap-8 text-muted-foreground leading-relaxed md:grid-cols-2">
            <p>
              An expired or missing passport can derail your travel plans. At OS Consultants, we
              offer dedicated <strong>passport services in Islamabad</strong> to ensure your
              documentation is always ready for your next visa application. Whether you need to{" "}
              <strong>apply for a new passport in Islamabad</strong> or require an urgent renewal,
              our experienced team guides you through the bureaucratic processes to avoid
              unnecessary delays.
            </p>
            <p>
              In addition to standard Pakistani passport services, we provide a highly specialized{" "}
              <strong>USA passport application</strong> service. Navigating the US consulate
              requirements in Pakistan can be daunting; our experts manage the paperwork, schedule
              appointments, and review all documents for US citizens residing in Pakistan. Trust the
              top processing agency in Blue Area for secure, confidential, and fast passport
              handling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
