import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — OS Consultants Visa & Travel" },
      {
        name: "description",
        content:
          "Common questions about visa processing times, documentation, fees, ticketing and more.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Everything you need to know about our services." },
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
