import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OS Consultants — Pakistan's #1 Visa Office in Blue Area, Islamabad" },
      {
        name: "description",
        content:
          "Contact Pakistan's best visa consultancy. Visit OS Consultants in Blue Area, Islamabad or reach us via phone +92 51 2021700, WhatsApp, or email. Open Mon-Sat 10AM-7PM. Expert visa & travel guidance.",
      },
      {
        name: "keywords",
        content:
          "contact os consultants, visa office islamabad blue area, best visa agency address islamabad, immigration office near me islamabad, OS Consultants phone number, WhatsApp visa agent pakistan, travel agency contact islamabad, visa consultant near me pakistan, os consultants email, os consultants whatsapp number",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      {
        property: "og:title",
        content: "Contact OS Consultants — Pakistan's #1 Visa & Travel Office",
      },
      {
        property: "og:description",
        content:
          "Visit us at Blue Area, Islamabad. Expert help for Schengen, UK, USA, Canada & Australia visas. WhatsApp, phone & walk-in available.",
      },
      { property: "og:image", content: "/images/img_5f78d2f1fc.jpg" },
      { property: "og:url", content: "https://osconsultants.pk/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Pakistan's #1 Visa Agency | OS Consultants" },
      {
        name: "twitter:description",
        content: "Blue Area, Islamabad. Phone, WhatsApp & walk-in consultations available.",
      },
    ],
    links: [{ rel: "canonical", href: "https://osconsultants.pk/contact" }],
  }),
  component: Contact,
});

function Contact() {
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
        name: "Contact",
        item: "https://osconsultants.pk/contact",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <PageHero
        title="Get in Touch"
        subtitle="Our team is ready to assist you with your global travel and visa needs. Contact us today for expert guidance."
        backTo="/"
        backLabel="Back to Home"
      />
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: MapPin, t: "Office", d: COMPANY.address },
              {
                icon: Phone,
                t: "Phone",
                d: COMPANY.phone,
                href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Phone,
                t: "Mobile",
                d: COMPANY.mobile,
                href: `tel:${COMPANY.mobile.replace(/\s/g, "")}`,
              },
              { icon: Mail, t: "Email", d: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: Clock, t: "Hours", d: COMPANY.hours },
              {
                icon: MessageCircle,
                t: "WhatsApp",
                d: COMPANY.whatsapp,
                href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`,
              },
              {
                icon: Facebook,
                t: "Facebook",
                d: "Follow us on Facebook",
                href: COMPANY.socials.facebook,
              },
            ].map((b) => (
              <a
                key={b.t}
                href={b.href || (b.t === "Office" ? "https://maps.app.goo.gl/Yyv9M5uR2VzJjYwV9" : "#")}
                target={b.t === "Office" ? "_blank" : undefined}
                rel={b.t === "Office" ? "noopener noreferrer" : undefined}
                className="card-3d flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover-lift"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <b.icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{b.t}</p>
                  <p className="mt-1 text-sm font-semibold">{b.d}</p>
                </div>
              </a>
            ))}
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="OS Consultants office in Blue Area, Islamabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.6560234251097!2d73.0732239!3d33.717848599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9b090fffff:0xf2f8c892ac3fd679!2sOs%20Consultant!5e0!3m2!1sen!2s!4v1777971120345!5m2!1sen!2s"
                loading="lazy"
                className="h-72 w-full"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
