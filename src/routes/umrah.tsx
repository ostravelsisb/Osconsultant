import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookingWidget } from "@/components/site/BookingWidget";
import {
  Moon,
  Star,
  Hotel,
  Bus,
  Plane,
  Heart,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles
} from "lucide-react";
import umrahHero from "@/assets/umrah-hero.png";

export const Route = createFileRoute("/umrah")({
  head: () => ({
    meta: [
      { title: "Best Umrah Packages from Pakistan 2026 — Pakistan's #1 Umrah Travel Agency | OS Consultants" },
      {
        name: "description",
        content:
          "Pakistan's #1 Umrah travel agency. Book cheap Umrah packages from Islamabad 2026. Economy, 3-Star, 4-Star & 5-Star packages with visa, flights & hotels in Makkah & Madinah. Trusted by 5000+ families. OS Consultants Blue Area.",
      },
      {
        name: "keywords",
        content:
          "best umrah packages from pakistan 2026, cheapest umrah packages islamabad, #1 umrah travel agency pakistan, customized umrah packages 2026, economy umrah packages islamabad, luxury 5 star umrah packages pakistan, umrah visa processing islamabad, makkah madinah hotel booking pakistan, group umrah packages islamabad, family umrah packages 2026, umrah with flights from islamabad, umrah agents blue area islamabad, ramadan umrah packages pakistan, last minute umrah deals pakistan",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Pakistan's #1 Umrah Packages 2026 — Economy to 5-Star Luxury | OS Consultants" },
      {
        property: "og:description",
        content:
          "Trusted by 5000+ families. Economy to luxury Umrah packages from Islamabad with visa, flights & premium hotels near Haram.",
      },
      { property: "og:image", content: "/src/assets/umrah-hero.png" },
      { property: "og:url", content: "https://osconsultants.pk/umrah" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "#1 Umrah Packages Pakistan 2026 | OS Consultants" },
      { name: "twitter:description", content: "Economy to 5-Star luxury. Visa, flights & Haram-facing hotels from Islamabad." },
    ],
    links: [
      { rel: "canonical", href: "https://osconsultants.pk/umrah" },
    ],
  }),
  component: UmrahPage,
});

const UMRAH_PACKAGES = [
  {
    title: "Economy Package",
    price: "From PKR 185,000",
    rating: "3.5",
    features: ["15 Days Duration", "Standard Hotels (1km+)", "Shared Transport", "Visa Processing", "Return Flights"],
    icon: Moon,
    color: "text-slate-500",
    bg: "bg-slate-50"
  },
  {
    title: "3 Star Package",
    price: "From PKR 225,000",
    rating: "4.2",
    features: ["15 Days Duration", "3 Star Hotels (600m)", "Luxury Transport", "Visa Processing", "Breakfast Included"],
    icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "4 Star Package",
    price: "From PKR 285,000",
    rating: "4.8",
    features: ["10-15 Days Duration", "4 Star Hotels (Walking Distance)", "Private Transport", "Visa & Insurance", "Breakfast & Ziarat"],
    icon: Sparkles,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "5 Star Luxury",
    price: "From PKR 395,000",
    rating: "5.0",
    features: ["7-15 Days Duration", "Front-row 5 Star Hotels", "VIP Private Transport", "Full Board Options", "24/7 Ground Support"],
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
];

function UmrahPage() {
  return (
    <>
      <div className="relative">
        <PageHero
          eyebrow="Spiritual Journey"
          title="Umrah Packages Designed for Peace of Mind"
          subtitle="From budget-friendly economy stays to premium 5-star luxury experiences — we handle every detail of your sacred pilgrimage."
          backgroundImage={umrahHero}
        />
        
        {/* Integrated Booking Widget */}
        <div className="relative z-10 -mt-16 md:-mt-24 pb-20">
          <Reveal delay={0.2}>
            <BookingWidget initialTab="umrah" />
          </Reveal>
        </div>
      </div>

      <section className="container-px mx-auto max-w-7xl py-12 md:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Our Packages"
            title="Choose the package that fits your journey"
            subtitle="We offer a variety of pre-designed packages and fully customizable options to suit your preferences."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {UMRAH_PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 0.1} className="h-full">
              <div className="group relative h-full flex flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 transition-all duration-300 hover:shadow-elevated hover:-translate-y-2">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${pkg.bg} ${pkg.color} transition-transform group-hover:scale-110`}>
                  <pkg.icon size={28} />
                </div>
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <p className="mt-2 text-2xl font-black text-primary">{pkg.price}</p>
                
                <div className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/consultation"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary/50 py-4 text-sm font-bold transition-colors hover:bg-primary hover:text-white"
                >
                  Book Now <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Customized Umrah Planning
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Can't find exactly what you're looking for? Our <strong>Custom Umrah Selection</strong> allows you to build your own itinerary. Choose your preferred hotels, decide how many days you want to spend in Makkah and Madinah, and select the transport that suits your family.
                </p>
                <div className="grid gap-4 pt-4">
                  {[
                    { icon: Hotel, text: "Choice of 300+ Hotels in Makkah & Madinah" },
                    { icon: Bus, text: "Private GMC or Luxury Bus Transport" },
                    { 
                      icon: Calendar, 
                      text: "Stay Duration", 
                      extra: (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["7", "10", "15", "30"].map(d => (
                            <span key={d} className="px-3 py-1.5 rounded-xl bg-primary/5 text-primary text-[11px] font-black border border-primary/10 hover:bg-primary hover:text-white transition-all cursor-default">
                              {d} Days
                            </span>
                          ))}
                        </div>
                      )
                    },
                    { icon: Users, text: "Group or Private Family Packages" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-soft border border-border/50">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-sm block">{item.text}</span>
                        {item.extra}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/consultation"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-elevated transition-transform hover:-translate-y-1"
                >
                  Request Custom Quote <ArrowRight size={20} />
                </Link>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="relative group">
                {/* Decoration */}
                <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl isolate transform translate-z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000" 
                    alt="Pilgrims at Makkah" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <p className="text-2xl font-bold italic tracking-tight leading-snug">"Everything was handled perfectly, from the visa to the hotels right in front of the Haram."</p>
                    <p className="mt-6 font-semibold opacity-80 font-display uppercase tracking-widest text-xs flex items-center gap-2">
                      <span className="h-px w-8 bg-white/40" />
                      Hammad Ahmed, Islamabad
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEO BLOCK */}
      <section className="container-px mx-auto max-w-4xl py-24">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-center mb-12">Expert Umrah Travel Agency in Islamabad</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Finding the <strong>best Umrah packages from Pakistan 2026</strong> can be overwhelming. At OS Consultants, we simplify your spiritual journey. As a leading <strong>Umrah travel agency in Islamabad</strong>, we provide verified <strong>cheap Umrah packages</strong> that don't compromise on quality or proximity to the holy sites.
          </p>
          
          <div className="grid gap-10 md:grid-cols-2 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Economy & Budget Umrah 2026</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our <strong>economy Umrah packages 2026</strong> are perfect for families looking for affordability. We ensure clean, certified hotels with shuttle services, making it the most reliable <strong>budget Umrah Islamabad</strong> option.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Luxury 5-Star Umrah Experience</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For those seeking comfort, our <strong>luxury Umrah packages 2026</strong> feature stays in the Clock Tower or hotels directly facing the Haram. With private VIP transport and premium ground handling, your focus remains entirely on your prayers.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 md:p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={120} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-center relative z-10">Why Book Your Umrah with OS Consultants?</h3>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {[
                { t: "Authorized Umrah Visa Agent", d: "Directly processing in Blue Area, ISB" },
                { t: "Confirmed Hotel Bookings", d: "Makkah & Madinah proximity guaranteed" },
                { t: "Best Umrah Airfares", d: "Exclusive rates from Islamabad/Lahore" },
                { t: "24/7 Pilgrim Support", d: "Dedicated team on ground in KSA" }
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-white/50 shadow-sm hover:bg-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground leading-tight mb-1">{item.t}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
