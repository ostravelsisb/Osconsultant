import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { BookingWidget } from "@/components/site/BookingWidget";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import {
  Briefcase,
  GraduationCap,
  Globe2,
  Heart,
  Plane,
  Users,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  ShieldCheck,
  Award,
  BookOpen,
} from "lucide-react";
import { VISA_SERVICES } from "@/data/site";

export const Route = createFileRoute("/visa-services")({
  head: () => ({
    meta: [
      {
        title:
          "#1 Visa Consultant in Islamabad 2026 | Best Visa Services in Pakistan | OS Consultants",
      },
      {
        name: "description",
        content:
          "OS Consultants: Pakistan's #1 visa consultant in Islamabad. 98% approval rate for UK, USA, Canada, Schengen, Australia, Dubai & Turkey visas. IATA-accredited, Blue Area office. Expert documentation, interview prep & fast processing.",
      },
      {
        name: "keywords",
        content:
          "best visa consultant islamabad 2026, #1 visa agency pakistan, uk visit visa islamabad, usa B1/B2 visa consultant islamabad, canada immigration agent islamabad, schengen visa consultant islamabad blue area, australia student visa islamabad, dubai visa agent pakistan, turkey visa consultant ISB, student visa islamabad, work visa consultant pakistan, business visa islamabad, family visa consultant pakistan, visa rejection help islamabad, visa refusal appeal pakistan, best visa approval rate pakistan, trusted visa company islamabad, affordable visa services pakistan, express visa processing islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "OS Consultants" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      {
        property: "og:title",
        content:
          "Pakistan's #1 Visa Consultant 2026 — 98% Approval Rate | OS Consultants Islamabad",
      },
      {
        property: "og:description",
        content:
          "Expert visa consultancy for UK, USA, Canada, Schengen, Australia & 50+ countries. High approval rates and professional documentation from Blue Area, Islamabad.",
      },
      { property: "og:image", content: "/images/img_5f78d2f1fc.jpg" },
      { property: "og:url", content: "https://osconsultants.pk/visa-services" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "#1 Visa Consultant Islamabad | OS Consultants" },
      {
        name: "twitter:description",
        content: "98% approval rate. UK, USA, Canada, Schengen & Australia visas from Islamabad.",
      },
    ],
    links: [{ rel: "canonical", href: "https://osconsultants.pk/visa-services" }],
  }),
  component: VisaServices,
});

const ICONS = [Plane, Heart, Users, Globe2, GraduationCap, Briefcase];

function VisaServices() {
  return (
    <>
      <PageHero
        eyebrow="Visa Services"
        title="Visas tailored to your journey"
        subtitle="Whether you're visiting family, studying abroad or expanding your business — our expert team handles every detail."
      />

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <BookingWidget initialTab="visa" />
        </Reveal>
      </div>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VISA_SERVICES.map((s: { title: string; desc: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard
                icon={ICONS[i % ICONS.length]}
                title={s.title}
                desc={s.desc}
                to="/consultation"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-px mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeader
              center={false}
              eyebrow="What's included"
              title="End-to-end documentation & embassy support"
            />
            <ul className="space-y-3 text-sm">
              {[
                "Personalized visa pathway assessment",
                "Document checklist tailored to your case",
                "Form filling & application review",
                "Embassy appointment booking",
                "Interview preparation & coaching",
                "Real-time application tracking",
              ].map((it) => (
                <li key={it} className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} /> <span>{it}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
            >
              Start Your Application <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elevated">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Approval Rate
              </p>
              <p className="mt-2 text-6xl font-bold gradient-text">98%</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Across Schengen, UK, USA, Canada and Australia categories combined — based on the
                last 24 months of completed cases.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed Visa Application Procedure */}
      <section className="bg-secondary/20 py-20 border-t border-border/50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Application Workflow"
            title="Our Comprehensive Visa Procedure"
            subtitle="We break down each embassy's requirements into simple, transparent steps to ensure a flawless application."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                desc: "We analyze your profile, career background, financial standings, and intended travel to recommend the strongest visa category.",
              },
              {
                step: "02",
                title: "Document Compilation",
                desc: "Our experts compile, verify, and translate your files, from bank statements and tax records to travel insurance.",
              },
              {
                step: "03",
                title: "Form Filling & Submission",
                desc: "We complete the official visa applications perfectly to prevent errors, pay processing fees, and secure embassy slots.",
              },
              {
                step: "04",
                title: "Coaching & Interview Prep",
                desc: "We provide comprehensive 1-on-1 coaching for US, UK, and Schengen interviews to ensure maximum success.",
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

      {/* Additional Visa Categories & Procedures */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border/50">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Gulf & Middle East Visas
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Dubai, UAE & Saudi Arabia Visas From Pakistan
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Navigating middle east work or tourist requirements shouldn't be confusing. We
                provide express e-visa and direct embassy services for quick travel.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Complete Dubai E-Visas (30 & 60 days) with instant approvals.",
                  "Saudi Arabia Umrah and Tourist visas for individuals and groups.",
                  "Work & employment visa document attestation and embassy processing.",
                  "Qatar and Bahrain tourist and business visa assistance.",
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
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft">
                <BookOpen className="text-primary" size={32} />
                <h4 className="text-lg font-bold mt-4">Document Checklists</h4>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Exact checklists for all major embassies tailored to your employment and business
                  profile.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-2xl shadow-soft">
                <ShieldCheck className="text-primary" size={32} />
                <h4 className="text-lg font-bold mt-4">Safe Tracking</h4>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Direct end-to-end tracking of application status with direct embassy
                  notifications.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comprehensive Visa Information (SEO Optimized) */}
      <section className="container-px mx-auto max-w-5xl py-20 md:py-28 border-t border-border/50">
        <div className="space-y-16">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Expert Visa Consultants in Islamabad for Global Destinations
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              As the <strong>best visa consultant in Islamabad (ISB)</strong>, OS Consultants
              provides end-to-end immigration and travel solutions. Whether you are seeking a{" "}
              <strong>student visa consultant in Islamabad</strong>, planning a European tour, or
              navigating complex family reunification processes, our certified experts ensure a
              smooth, transparent, and successful application journey.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">Schengen Visa from Pakistan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Applying for a <strong>Schengen visa in Islamabad</strong> can be complex due to
                stringent documentation requirements. As a top{" "}
                <strong>Europe visa consultant in Islamabad</strong>, we specialize in tourist,
                business, and family visit visas for all 26 Schengen states, including Germany,
                France, Italy, and Spain. We handle your complete itinerary, hotel bookings, and
                travel insurance to maximize your approval chances.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">UK Visa Consultant Islamabad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a Tier 4 Student Visa, a Standard Visitor Visa, or a Skilled Worker
                Visa, our <strong>top visa agents in ISB</strong> provide comprehensive guidance. We
                assist with UKVI requirements, financial proof compilation, and interview
                preparation, making us the most <strong>reliable visa consultant ISB</strong> for
                United Kingdom immigration.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">
                USA Visa Processing (B1/B2, F1)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Securing a US visa requires meticulous preparation. Our{" "}
                <strong>USA visa consultant ISB</strong> team offers specialized interview coaching
                and DS-160 form filling services. From B1/B2 tourist visas to F1 student visas, we
                provide the <strong>best immigration guidance</strong> to confidently face the US
                embassy consular officers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">
                Canada & Australia Immigration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Looking for a <strong>study abroad consultant ISB</strong> or pathways for permanent
                residency? We offer expert assistance for <strong>Canada visa Islamabad</strong>{" "}
                (Study Permits, Visit Visas) and <strong>Australia visa consultant ISB</strong>{" "}
                services (Subclass 500, 600). Let our international visa experts simplify the
                process for you.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="rounded-[2.5rem] bg-gradient-to-br from-secondary/80 to-background border border-white/10 p-8 md:p-12 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">
                  Why Choose the Top Visa Consultancy in ISB?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  Located conveniently in Blue Area, OS Consultants is recognized as the{" "}
                  <strong>best immigration agency in Islamabad</strong>. We don't just fill out
                  forms; we provide strategic <strong>visa solutions ISB</strong> tailored to your
                  specific profile.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 text-sm text-foreground/80 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Authorized visa agent ISB
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Fast visa processing Islamabad
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Visa documentation Islamabad
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Embassy visa support Islamabad
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comprehensive Visa FAQ Section */}
      <section className="container-px mx-auto max-w-7xl py-20 bg-secondary/10 border-t border-border/50">
        <SectionHeader
          eyebrow="Quick Answers"
          title="Visa Processing FAQs"
          subtitle="Discover clear, precise answers to common queries regarding global visa applications and procedures."
        />
        <FAQAccordion
          items={[
            {
              q: "What is the average processing time for a Schengen visa in Islamabad?",
              a: "Standard processing times for Schengen visas generally take 15 to 20 calendar days from the date of appointment. We suggest beginning your application at least 1 month prior to departure.",
            },
            {
              q: "What documents are most important for visa approvals?",
              a: "Consular officers closely examine your financial standing (6-month bank statement), proof of employment or business ownership, valid ties to Pakistan, and exactly matching itineraries.",
            },
            {
              q: "Do I need travel insurance for a UK or US visa?",
              a: "While travel insurance is mandatory for Schengen visas, it is highly recommended for the UK and USA to show emergency financial coverage during the trip.",
            },
            {
              q: "How can OS Consultants help with previous visa rejections?",
              a: "We analyze the refusal letter to understand why the visa was denied, rebuild and strengthen the relevant areas of your profile, and craft a strong letter of explanation for your reapplication.",
            },
          ]}
        />
      </section>
    </>
  );
}
