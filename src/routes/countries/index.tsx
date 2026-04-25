import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CountryCard } from "@/components/site/CountryCard";
import { Reveal } from "@/components/site/Reveal";
import { DESTINATIONS } from "@/data/destinations";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { title: "Visa Destinations Worldwide — Apply from Islamabad" },
      { name: "description", content: "OS Consultants covers 50+ countries. Get expert visa assistance for USA, UK, Canada, Australia, Schengen, Middle East, and Asia from Islamabad." },
      { name: "keywords", content: "Schengen visa from Pakistan, USA visa from Islamabad, UK visa destinations ISB, Canada immigration Islamabad, Australia visit visa ISB, top visa destinations Pakistan, Europe visa consultancy Blue Area" },
      { property: "og:title", content: "Global Destinations — OS Consultants" },
      { property: "og:description", content: "Expert visa consultancy for North America, Europe, Oceania, Asia, and the Middle East." },
    ],
  }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <>
      <PageHero eyebrow="Destinations" title="Visa support across every continent" subtitle="From iconic European capitals to vibrant Middle Eastern hubs and Oceania's natural wonders." />
      
      <section className="container-px mx-auto max-w-7xl pt-20 pb-10">
        <div className="space-y-6 mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">Explore Our Global Destinations</h2>
          <p className="text-muted-foreground">Select a region or country to view detailed visa requirements, processing times, and required documentation.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DESTINATIONS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 8) * 0.04}>
              <CountryCard 
                slug={c.slug} 
                name={c.name} 
                short={c.shortDesc} 
                image={c.image} 
                accent="View Details" 
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEO Long Form Content Section */}
      <section className="bg-secondary/20 py-20 border-t border-border mt-10">
        <div className="container-px mx-auto max-w-4xl space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your Trusted Partner for Global Destinations in Islamabad</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Choosing the right destination requires the right guidance. As the top visa consultancy in Islamabad, OS Consultants simplifies the application process for over 50 countries. Our expertise spans across multiple continents, ensuring your travel dreams become a reality.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Schengen & European Visas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applying for a <strong>Schengen visa from Pakistan</strong> requires precision. We cover all 26 Schengen member states, including popular destinations like France, Germany, Italy, and Spain. Whether you are aiming for a summer tour or a business conference, our Islamabad-based experts handle your flight reservations, hotel bookings, and travel insurance to meet strict embassy standards.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">The Americas (USA & Canada)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Navigating the complex requirements for a <strong>USA visa from Islamabad</strong> (B1/B2, F1) or a Canadian study permit demands an experienced hand. We provide thorough DS-160 processing, interview coaching, and documentation review to maximize your chances of crossing the Atlantic successfully.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Oceania (Australia & New Zealand)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From the bustling streets of Sydney to the landscapes of Auckland, securing an <strong>Australia visit visa ISB</strong> or an NZeTA is seamless with our support. We assist students, tourists, and skilled workers with precise documentation alignment for Oceanic immigration authorities.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Middle East & Asia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Looking for a reliable <strong>Dubai visit visa consultant in Islamabad</strong>? We offer rapid processing for UAE, Qatar, Bahrain, and Saudi Arabia. Additionally, we facilitate visas for top Asian destinations like Malaysia, Thailand, and Singapore, ensuring fast turnarounds for your holiday or business trip.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}