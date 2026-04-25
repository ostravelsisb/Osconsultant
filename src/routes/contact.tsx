import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OS Consultants — Visa Office in Islamabad" },
      { name: "description", content: "Contact the best visa consultant in Blue Area, Islamabad. Visit, call, or WhatsApp OS Consultants for fast visa processing and expert immigration services." },
      { name: "keywords", content: "visa office in Islamabad, contact visa consultant ISB, Blue Area travel agency, immigration office Islamabad, OS Consultants contact number, WhatsApp visa consultant Pakistan" },
      { property: "og:title", content: "Contact OS Consultants" },
      { property: "og:description", content: "We're here to help — phone, email, WhatsApp or in-person." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" subtitle="Walk in, call, email or message us on WhatsApp. We typically reply within 1 business hour." />
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: MapPin, t: "Office", d: COMPANY.address },
              { icon: Phone, t: "Phone", d: COMPANY.phone, href: `tel:${COMPANY.phone}` },
              { icon: Mail, t: "Email", d: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: Clock, t: "Hours", d: COMPANY.hours },
              { icon: MessageCircle, t: "WhatsApp", d: COMPANY.whatsapp, href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}` },
            ].map((b) => (
              <a key={b.t} href={b.href || "#"} className="card-3d flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover-lift">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"><b.icon size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{b.t}</p>
                  <p className="mt-1 text-sm font-semibold">{b.d}</p>
                </div>
              </a>
            ))}
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe title="OS Consultants office in Blue Area, Islamabad" src="https://www.google.com/maps?q=Office%20%23%203%2C%20Aaly%20Plaza%2C%20Fazal-e-Haq%20Road%2C%20Block%20E%20G%206%2F2%20Blue%20Area%2C%20Islamabad%2C%2044000&output=embed" loading="lazy" className="h-72 w-full" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}