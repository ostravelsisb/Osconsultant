import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Success Stories — Pakistan's #1 Visa Agency | OS Consultants" },
      {
        name: "description",
        content:
          "Read 1500+ real client reviews and visa approval success stories. OS Consultants Islamabad has a 98% approval rate for Schengen, USA, UK, Canada & Australia visas. Trusted by 20,000+ travelers.",
      },
      {
        name: "keywords",
        content: "os consultants reviews, visa approval stories pakistan, best visa consultant reviews islamabad, travel agency testimonials pakistan, visa success stories islamabad, trusted visa agent reviews",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Client Reviews — OS Consultants | 98% Approval Rate" },
      { property: "og:description", content: "Real approval stories from 20,000+ happy travelers. Pakistan's most trusted visa agency." },
      { property: "og:url", content: "https://osconsultants.pk/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://osconsultants.pk/testimonials" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our clients say"
        subtitle="Approval stories and honest reviews from travelers we've helped reach the world."
      />
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) * 0.05}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEW EXTENSIVE READABLE TESTIMONIAL CONTENT */}
      <section className="container-px mx-auto max-w-7xl pb-20 border-t border-border/50 pt-16">
        <Reveal>
          <div className="prose max-w-none prose-lg">
            <h2 className="text-3xl font-bold md:text-4xl text-foreground">Why 20,000+ Pakistani Travelers Choose OS Consultants</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When it comes to planning trips abroad or securing visa approvals, nothing is more reassuring than reading actual success stories from other travelers. For 15 years, our team at OS Consultants has prioritized honesty and transparency. This focus has enabled us to achieve a 98% visa success rate for applicants from all major cities across Pakistan, including Islamabad, Rawalpindi, Lahore, and Karachi.
            </p>
            <h3 className="text-2xl font-bold text-foreground mt-8">Real Success Stories for Schengen, UK, US & Canada Visas</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Applying for a Schengen visa involves meticulously matching your documentation to strict embassy guidelines. Many of our clients come to us after experiencing rejections through other agencies. Our experienced case officers review every file down to the last detail. This approach turns difficult cases into success stories, allowing our clients to explore countries like Germany, France, Italy, and Spain with confidence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Similarly, obtaining a visitor visa or study permit for the UK, USA, or Canada requires presenting a highly coherent application. Our clients regularly praise the clear, personalized advice they receive throughout the entire process. We help you present a strong case that reflects your specific circumstances, ensuring every detail aligns with immigration requirements.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
