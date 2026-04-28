import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
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
    "@type": ["TravelAgency", "LocalBusiness"],
    name: COMPANY.name,
    description:
      "Ranked as the No.1 Travel Agency and Best Visa Consultant in Pakistan. Expert in cheap flight tickets, hotel bookings, and Schengen, UK, USA visas.",
    image: "https://osconsultants.pk/src/assets/hero-travel.jpg",
    "@id": "https://osconsultants.pk",
    url: "https://osconsultants.pk",
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6/2 Blue Area",
      addressLocality: "Islamabad",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7135,
      longitude: 73.0673,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <HeadContent />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
