import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { DESTINATIONS } from "@/data/destinations";
import { PageHero } from "@/components/site/PageHero";
import { BookingWidget } from "@/components/site/BookingWidget";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, FileText, ArrowRight, BookOpen, Globe2, ArrowUpRight, MapPin, PlaneTakeoff } from "lucide-react";
import { COMPANY } from "@/data/site";
import {
  SCHENGEN_COUNTRIES,
  SOUTH_ASIA_COUNTRIES,
  CENTRAL_ASIA_COUNTRIES,
  NORTH_AFRICA_COUNTRIES,
  SOUTHERN_AFRICA_COUNTRIES,
  MIDDLE_EAST_COUNTRIES,
  EAST_ASIA_COUNTRIES,
  AMERICAS_COUNTRIES,
  EUROPE_OTHERS_COUNTRIES,
  SOUTH_AMERICA_COUNTRIES,
  OCEANIA_COUNTRIES,
} from "@/data/site";

const REGION_COUNTRIES: Record<string, any[]> = {
  "schengen": SCHENGEN_COUNTRIES,
  "south-asia": SOUTH_ASIA_COUNTRIES,
  "central-asia": CENTRAL_ASIA_COUNTRIES,
  "north-africa": NORTH_AFRICA_COUNTRIES,
  "southern-africa": SOUTHERN_AFRICA_COUNTRIES,
  "middle-east": MIDDLE_EAST_COUNTRIES,
  "east-asia": EAST_ASIA_COUNTRIES,
  "americas": AMERICAS_COUNTRIES,
  "europe-others": EUROPE_OTHERS_COUNTRIES,
  "south-america": SOUTH_AMERICA_COUNTRIES,
  "oceania": OCEANIA_COUNTRIES,
};

const FAMOUS_PLACES: Record<string, string[]> = {
  germany: ["Berlin Wall", "Neuschwanstein"],
  france: ["Eiffel Tower", "Louvre Museum"],
  italy: ["Colosseum", "Venice Canals"],
  spain: ["Sagrada Familia", "Alhambra"],
  switzerland: ["Swiss Alps", "Lake Geneva"],
  netherlands: ["Amsterdam Canals", "Keukenhof"],
  greece: ["Acropolis", "Santorini"],
  austria: ["Schönbrunn Palace", "Hallstatt"],
  portugal: ["Belem Tower", "Sintra"],
  sweden: ["Vasa Museum", "Icehotel"],
  norway: ["Geirangerfjord", "Northern Lights"],
  denmark: ["Tivoli Gardens", "Nyhavn"],
  finland: ["Santa Claus Village", "Suomenlinna"],
  turkey: ["Hagia Sophia", "Cappadocia"],
  uae: ["Burj Khalifa", "Palm Jumeirah"],
  "saudi-arabia": ["Mecca", "AlUla"],
  malaysia: ["Petronas Towers", "Batu Caves"],
  thailand: ["Grand Palace", "Phi Phi Islands"],
  singapore: ["Marina Bay Sands", "Gardens by the Bay"],
  srilanka: ["Sigiriya", "Temple of the Tooth"],
  maldives: ["Maafushi", "Banana Reef"],
  egypt: ["Pyramids of Giza", "Luxor Temple"],
  morocco: ["Jemaa el-Fnaa", "Chefchaouen"],
  southafrica: ["Kruger Park", "Table Mountain"],
  kenya: ["Maasai Mara", "Mount Kenya"],
  japan: ["Mount Fuji", "Kyoto Temples"],
  china: ["Great Wall", "Forbidden City"],
  southkorea: ["Gyeongbokgung", "N Seoul Tower"],
  brazil: ["Christ the Redeemer", "Copacabana"],
  argentina: ["Iguazu Falls", "Perito Moreno"],
  australia: ["Sydney Opera House", "Barrier Reef"],
  newzealand: ["Milford Sound", "Hobbiton"],
  usa: ["Statue of Liberty", "Grand Canyon"],
  canada: ["Niagara Falls", "Banff Park"],
  uk: ["Big Ben", "Stonehenge"]
};

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const destination = DESTINATIONS.find((d) => d.slug === params.slug);
    if (!destination) {
      throw notFound();
    }
    return destination;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.seoTitle} | OS Consultants` },
        { name: "description", content: loaderData.seoDescription },
        { name: "keywords", content: loaderData.keywords },
        { property: "og:title", content: loaderData.seoTitle },
        { property: "og:description", content: loaderData.seoDescription },
        { property: "og:image", content: `https://osconsultants.pk${loaderData.image}` },
        { property: "og:url", content: `https://osconsultants.pk/countries/${loaderData.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.seoTitle },
        { name: "twitter:description", content: loaderData.seoDescription },
        { name: "twitter:image", content: `https://osconsultants.pk${loaderData.image}` },
      ],
      links: [{ rel: "canonical", href: `https://osconsultants.pk/countries/${loaderData.slug}` }],
    };
  },
  component: DestinationRegionPage,
});

function DestinationRegionPage() {
  const dest = Route.useLoaderData();
  const subCountries = REGION_COUNTRIES[dest.slug] || [];

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
        name: "Destinations",
        item: "https://osconsultants.pk/countries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dest.name,
        item: `https://osconsultants.pk/countries/${dest.slug}`,
      },
    ],
  };

  const faqJsonLd = dest.faqs && dest.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dest.faqs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      <PageHero
        eyebrow="Region Overview"
        title={`${dest.name} Visa Consultant in Islamabad`}
        subtitle={dest.shortDesc}
        backgroundImage={dest.image}
        backTo="/countries"
        backLabel="Back to Destinations"
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <BookingWidget initialTab="visa" />
      </div>

      {subCountries.length > 0 && (
        <section className="container-px mx-auto max-w-7xl pt-20">
          <SectionHeader
            eyebrow="Destinations"
            title={`${dest.name} Visa Services from Pakistan`}
            subtitle={`Select a specific country in ${dest.name} to view detailed visa requirements and processing times.`}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {subCountries.map((country, idx) => {
              const places = FAMOUS_PLACES[country.slug] || [];
              return (
                <Reveal key={country.slug} delay={(idx % 8) * 0.04}>
                  <Link 
                    to={`/countries/${dest.slug}/${country.slug}`} 
                    className="block group relative card-3d rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  >
                    {/* Glowing Shadow Effect */}
                    <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-br from-[#00B4D8] to-[#FF7F11] opacity-0 blur-2xl group-hover:opacity-40 group-hover:blur-3xl group-hover:translate-y-6 group-hover:scale-[0.95] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] -z-10" />

                    <article className="relative h-[340px] rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] border border-white/10 shadow-elevated bg-slate-900 z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden isolate">
                      
                      {/* Inner wrapper for perfect border-radius clipping */}
                      <div className="absolute inset-0 rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] overflow-hidden [transform:translateZ(0)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        <img
                          src={country.image}
                          alt={country.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/20 to-transparent transition-opacity duration-500" />
                      </div>

                      {/* Hover Gradient Border */}
                      <div 
                        className="absolute inset-0 rounded-[60px_15px_100px_15px] group-hover:rounded-[15px_60px_15px_100px] opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none z-20"
                        style={{
                          border: '2px solid transparent',
                          background: 'linear-gradient(to bottom right, #00B4D8, #FF7F11) border-box',
                          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude'
                        }}
                      />
                      
                      {country.code && (
                        <div className="absolute left-5 top-5 flex items-center gap-2 z-20">
                          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 shadow-lg backdrop-blur-md">
                            <img src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`} alt={country.name} className="h-full w-full object-cover" />
                          </span>
                        </div>
                      )}

                      <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white opacity-0 -translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_15px_rgba(255,255,255,0.3)] z-20">
                        <ArrowUpRight size={18} />
                      </span>
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0 z-20">
                        <h3 className="text-2xl font-black tracking-wide drop-shadow-md">{country.name}</h3>
                        <p className="mt-2 text-xs text-white/85 leading-relaxed line-clamp-2 drop-shadow-sm font-medium">
                          {country.description || country.intro}
                        </p>

                        {/* Animated Flight Path Line */}
                        <div className="relative h-[2px] w-0 bg-[#FF7F11] transition-all duration-700 group-hover:w-full mt-4">
                          <PlaneTakeoff 
                            size={16} 
                            className="absolute -top-2 right-0 text-[#FF7F11] opacity-0 group-hover:opacity-100 transition-opacity delay-300" 
                          />
                        </div>

                        {/* Famous Places Tags */}
                        {places.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {places.map(place => (
                              <span key={place} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md border border-white/20 shadow-sm">
                                <MapPin size={10} className="text-accent-glow" /> {place}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 lg:grid-cols-2 mb-20 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                About {dest.name}
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">Expert Visa Services</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{dest.intro}</p>
              
              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
                >
                  WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold shadow-soft hover:-translate-y-0.5 transition-transform hover:border-primary"
                >
                  Book Assessment <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <FileText size={20} />
                </span>
                <h3 className="text-xl font-bold">General Requirements</h3>
              </div>
              <ul className="space-y-4">
                {dest.generalRequirements.map((req: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <CheckCircle2 size={14} />
                    </span>
                    <span className="text-muted-foreground leading-relaxed font-medium text-sm">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Available Visas Section */}
      <section className="bg-secondary/20 py-20 border-t border-border/50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Visa Categories"
            title="Choose Your Pathway"
            subtitle={`We offer specialized services for multiple visa types in ${dest.name}.`}
          />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {dest.visas.map((visa: any, idx: number) => (
              <Reveal key={visa.slug} delay={idx * 0.05}>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft h-full flex flex-col hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold mb-2">{visa.name}</h4>
                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {visa.heroText}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Processing:</span>
                      <span>{visa.processingTime}</span>
                    </div>
                  </div>
                  <Link
                    to="/consultation"
                    className="mt-auto flex items-center justify-center gap-2 w-full rounded-xl bg-secondary/50 py-2.5 text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container-px mx-auto max-w-7xl py-20 border-t border-border/50">
        <SectionHeader
          eyebrow="Workflow"
          title="How to Apply"
          subtitle="Our streamlined process ensures maximum approval chances."
        />
        <div className="grid gap-6 md:grid-cols-4 mt-12">
          {dest.stepByStep.map((step: any, idx: number) => (
            <Reveal key={step.title} delay={idx * 0.1}>
              <div className="relative p-6 bg-card border border-border rounded-2xl shadow-soft h-full hover:-translate-y-1 transition-transform">
                <span className="absolute top-4 right-4 text-4xl font-extrabold text-primary/10 tracking-wider">
                  0{idx + 1}
                </span>
                <h4 className="text-xl font-bold mt-4 mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {dest.faqs && dest.faqs.length > 0 && (
        <section className="bg-secondary/10 py-20 border-t border-border/50">
          <div className="container-px mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="Quick Answers"
              title="Frequently Asked Questions"
            />
            <div className="mt-10">
              <FAQAccordion items={dest.faqs} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
