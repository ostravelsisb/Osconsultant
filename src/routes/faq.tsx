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
    </>
  );
}
