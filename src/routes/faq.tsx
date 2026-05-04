import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pakistan's #1 Visa & Travel Agency | OS Consultants Islamabad" },
      {
        name: "description",
        content:
          "Frequently asked questions about visa processing, documentation, fees, air ticketing & Umrah packages. Get instant answers from Pakistan's top visa consultancy.",
      },
      {
        name: "keywords",
        content: "visa FAQ pakistan, visa processing questions islamabad, how to apply schengen visa pakistan, visa consultant FAQ, travel agency questions islamabad, os consultants FAQ",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "FAQ — OS Consultants | Pakistan's #1 Travel Agency" },
      { property: "og:description", content: "Quick answers about visa processing, fees, documentation & travel services." },
      { property: "og:url", content: "https://osconsultants.pk/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://osconsultants.pk/faq" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
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
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Quick, honest answers to the questions our clients ask most."
      />
      <section className="container-px mx-auto max-w-7xl py-20">
        <FAQAccordion items={FAQS} />
      </section>

      {/* NEW EXTENSIVE READABLE FAQ CONTENT */}
      <section className="container-px mx-auto max-w-7xl pb-20 border-t border-border/50 pt-16">
        <div className="prose max-w-none prose-lg">
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">Relatable Guidance on Visa Applications & Travel</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Navigating the details of international travel and visa submissions can seem overwhelming at first. At OS Consultants, we believe that clear communication is the key to a stress-free process. By breaking down complex embassy requirements, we help you understand exactly what to expect from your application journey.
          </p>
          <h3 className="text-2xl font-bold text-foreground mt-8">Extensive Document Preparation & Processing Times</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The most common reason for visa refusals is incomplete or inconsistent documentation. Our experienced team works with you to review every file, including financial statements, proof of ties, travel insurance, and itineraries. We ensure that every piece of information directly matches the exact regulations of the embassy where you are applying.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Processing times vary based on the country and visa type. While some regional or tourist visas can take only a few days, more complex pathways for the UK, US, Canada, or Schengen states can take several weeks. We suggest initiating your process well ahead of your intended travel date to ensure your journey begins exactly as planned.
          </p>
        </div>
      </section>
    </>
  );
}
