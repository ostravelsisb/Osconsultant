import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Award, Target, Eye, Users, Globe2, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Top Visa Consultancy in Islamabad" },
      { name: "description", content: "Learn about OS Consultants — Pakistan's trusted visa & travel consultancy in Islamabad with 15+ years of experience and a 98% approval rate." },
      { name: "keywords", content: "top visa consultancy ISB, best immigration agency Islamabad, trusted visa company Islamabad, overseas consultancy Islamabad, visa experts Islamabad, reliable visa consultant ISB" },
      { property: "og:title", content: "About OS Consultants" },
      { property: "og:description", content: "Our mission, vision, team and track record." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="Premium visa consultancy from the heart of Islamabad" subtitle="Since 2009, OS Consultants has helped over 20,000 travelers secure visas, flights and travel solutions to 50+ destinations worldwide." />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Trusted advisors for life-changing journeys</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">OS Consultants began with a simple promise — make global travel accessible to every Pakistani family, student and professional. Today we&apos;re recognized as one of Islamabad&apos;s leading consultancies, with a reputation built on transparency, expertise and an unwavering commitment to client success.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">From Schengen and US visitor visas to complex family reunification and IATA-authorized ticketing, our team delivers premium service at every step.</p>
            <Link to="/consultation" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform">Book a Free Consultation <ArrowRight size={14} /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "15+", l: "Years of experience" },
                { n: "20K+", l: "Happy travelers" },
                { n: "98%", l: "Approval rate" },
                { n: "50+", l: "Countries covered" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-6 shadow-soft text-center hover-lift">
                  <p className="text-4xl font-bold gradient-text">{s.n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, t: "Our Mission", d: "Empower every traveler with transparent, expert visa and travel guidance — no shortcuts, no surprises." },
            { icon: Eye, t: "Our Vision", d: "Be South Asia&apos;s most trusted name in visa consultancy by setting new standards in service and integrity." },
            { icon: Sparkles, t: "Our Values", d: "Honesty, expertise, accountability, and an obsessive focus on the client experience." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="card-3d h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft"><b.icon size={20} /></span>
                <h3 className="mt-5 text-xl font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: b.d }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>


    </>
  );
}