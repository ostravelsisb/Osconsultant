import { Outlet, Link, createRootRoute, HeadContent, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar } from "@/components/site/Navbar";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { LiveNotification } from "@/components/site/LiveNotification";
import { AIBotModel } from "@/components/site/AIBotModel";
import { COMPANY } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "ProfessionalService"],
    name: COMPANY.name,
    alternateName: ["OS Travels", "OS Consultants Islamabad", "OS Consultants Pakistan"],
    description:
      "Pakistan's No.1 Travel Agency & World-Class Visa Consultant. IATA-accredited, 15+ years of excellence, 98% approval rate. Expert in Schengen, USA, UK, Canada, Australia visas, cheap flights, Umrah packages & hotel bookings from Islamabad.",
    slogan: "Pakistan's No.1 Travel Agency — Your Gateway to the World",
    image: "https://osconsultants.pk/src/assets/hero-travel.jpg",
    logo: "https://osconsultants.pk/logo.png",
    "@id": "https://osconsultants.pk",
    url: "https://osconsultants.pk",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    currenciesAccepted: "PKR, USD, EUR, GBP",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, EasyPaisa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7135,
      longitude: 73.0673,
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Karachi" },
      { "@type": "Continent", name: "Asia" },
      { "@type": "Continent", name: "Europe" },
      { "@type": "Continent", name: "North America" },
      { "@type": "Continent", name: "Oceania" },
    ],
    sameAs: [
      COMPANY.socials.facebook,
      COMPANY.socials.instagram,
      COMPANY.socials.linkedin,
      COMPANY.socials.twitter,
      "https://osconsultants.pk",
      "https://ostravels.com",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "2847",
      reviewCount: "1523",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel & Visa Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Visa Consultancy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA B1/B2 & F1 Visa Processing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Standard Visitor Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada TRV & Study Permit" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Australia Subclass 600 Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IATA Air Ticketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah Packages 2026" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Hotel Bookings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Travel Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Passport Services" } },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    foundingDate: "2009",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "25+" },
    knowsAbout: ["Visa Processing", "Immigration Consultancy", "IATA Air Ticketing", "Umrah Packages", "Travel Insurance", "Hotel Bookings", "Passport Services"],
  };

  const location = useLocation();

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+C, Ctrl+U, Ctrl+Shift+I, F12
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "a")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C" || e.key === "i")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeyDown);

    // Dynamic High-Intent Keyword Injector for automatic Google SEO
    const routeKeywords: Record<string, string> = {
      "/": "best travel agency in pakistan 2026, top visa consultant pakistan, top rated travel agency islamabad, cheap international flights islamabad",
      "/about": "about os consultants, trusted visa agency islamabad, experienced tour operator pakistan, best visa company blue area islamabad",
      "/umrah": "best umrah packages pakistan 2026, cheap umrah deals islamabad, 5 star luxury umrah makkah madinah, trusted umrah visa agent",
      "/visa-services": "schengen visa consultant islamabad, uk student visa consultant, usa tourist visa agent pakistan, canada trv processing",
      "/countries": "schengen country visa requirements 2026, europe tourist visa agent, best travel and tours islamabad",
      "/air-ticketing": "cheap airline tickets islamabad, book online flights pakistan, iata accredited air travel agent, business class deals",
      "/contact": "contact os consultants, travel agency office blue area, visa office phone number islamabad, whatsapp os travel"
    };

    const activeKeywords = routeKeywords[location.pathname] || "best travel agency in pakistan 2026, no 1 visa consultant pakistan, leading travel agent islamabad";

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', activeKeywords);

    // Auto update page titles for maximum Google search relevance
    if (document.title && !document.title.includes("OS Consultants")) {
      document.title = `${document.title} | OS Consultants - #1 Travel Agency Pakistan`;
    }

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
      <HeadContent />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveNotification />
      <AIBotModel />
    </div>
  );
}
