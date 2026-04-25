import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DESTINATIONS } from "@/data/destinations";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, ArrowRight, FileText, MapPin, Briefcase, GraduationCap, Plane, Building2, HelpCircle } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const destination = DESTINATIONS.find(c => c.slug === params.slug);
    if (!destination) throw notFound();
    return destination;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.seoTitle || "Visa Consultant Islamabad" },
      { name: "description", content: loaderData?.seoDescription || "" },
      { name: "keywords", content: loaderData?.keywords || "" },
    ],
  }),
  component: DestinationHub,
});

function getIconForVisa(slug: string) {
  if (slug.includes('study')) return <GraduationCap size={24} />;
  if (slug.includes('work')) return <Briefcase size={24} />;
  if (slug.includes('business')) return <Building2 size={24} />;
  return <Plane size={24} />;
}

function DestinationHub() {
  const dest = Route.useLoaderData();

  return (
    <>
      <PageHero 
        eyebrow="Destination Guide" 
        title={`${dest.name} Visa Services`} 
        subtitle={dest.shortDesc} 
      />

      {/* Main Content */}
      <section className="container-px mx-auto max-w-5xl py-20">
        
        {/* Intro */}
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">Expert Immigration Guidance for {dest.name}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{dest.intro}</p>
        </div>

        {/* Visa Types Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <FileText size={20} />
            </span>
            <h2 className="text-3xl font-bold">Select Your Visa Type</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {dest.visas.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.05}>
                <Link 
                  to="/countries/$slug/$visaType" 
                  params={{ slug: dest.slug, visaType: v.slug }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift transition-all hover:border-primary/50"
                >
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft mb-4">
                      {getIconForVisa(v.slug)}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{v.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.heroText}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent group-hover:underline">
                    View Requirements & Fees <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 mb-20">
          {/* General Requirements */}
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-6">General Requirements</h3>
            <ul className="space-y-4">
              {dest.generalRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-muted-foreground leading-relaxed text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step by Step */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Application Process</h3>
            <div className="space-y-6">
              {dest.stepByStep.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {idx + 1}
                    </span>
                    {idx !== dest.stepByStep.length - 1 && <div className="w-px h-full bg-border my-2" />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        {dest.faqs && dest.faqs.length > 0 && (
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="text-center mb-8">
               <HelpCircle size={36} className="mx-auto text-accent mb-4" />
               <h2 className="text-3xl font-bold">{dest.name} Visa FAQs</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {dest.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Individual Schengen Countries (Conditional) */}
        {dest.slug === 'schengen' && (
          <div className="mb-20 pt-10 border-t border-border">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Individual Schengen Countries</h2>
              <p className="text-muted-foreground mt-2">Detailed requirements for the most popular European destinations.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Germany", slug: "germany" },
                { name: "France", slug: "france" },
                { name: "Italy", slug: "italy" },
                { name: "Spain", slug: "spain" },
                { name: "Netherlands", slug: "netherlands" },
                { name: "Switzerland", slug: "switzerland" },
              ].map((c) => (
                <Link 
                  key={c.slug} 
                  to="/countries/schengen/$country"
                  params={{ country: c.slug }}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:bg-primary/5 hover:border-primary/30 transition-all group"
                >
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors">{c.name}</span>
                  <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Trust & Contact Section */}
      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Why Choose OS Consultants in Islamabad?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As an authorized and trusted visa consultant in Blue Area, Islamabad, we boast a 98% approval rate across global destinations. We provide transparent, end-to-end guidance without hidden fees or false promises.
              </p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18}/> 15+ Years of Proven Experience</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18}/> IATA Authorized Travel Agent</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18}/> Dedicated Case Officers</li>
              </ul>
              
              <div className="pt-6 flex flex-wrap gap-4">
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform">
                  WhatsApp Us
                </a>
                <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold shadow-soft hover:-translate-y-0.5 transition-transform hover:border-primary">
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>
            
            <div className="bg-card rounded-[2rem] border border-border p-8 shadow-elevated relative overflow-hidden">
               <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />
               <h3 className="text-2xl font-bold mb-2">Get a Free Evaluation</h3>
               <p className="text-sm text-muted-foreground mb-6">Enter your details and our {dest.name} visa experts will contact you.</p>
               <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
