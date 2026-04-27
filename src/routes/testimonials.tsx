import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Real Stories from Our Travelers" },
      {
        name: "description",
        content:
          "Read approval stories and reviews from clients who trusted OS Consultants for their visa journeys.",
      },
      { property: "og:title", content: "Client Testimonials — OS Consultants" },
      { property: "og:description", content: "Approval stories from real travelers." },
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
    </>
  );
}
