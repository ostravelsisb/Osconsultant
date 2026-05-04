import { Link } from "@tanstack/react-router";
import { Globe2, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/data/site";
import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-[#0c142b] via-[#080d1e] to-[#0a1128] border-t border-white/10 text-white/85">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF7F11] via-[#FF7F11]/80 to-[#00B4D8] z-20" />
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      <div className="container-px mx-auto max-w-7xl py-16 relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2 pr-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt={COMPANY.name} loading="lazy" className="h-10 w-auto brightness-0 invert" />
              <span className="text-lg font-bold text-white uppercase tracking-tight">
                OS <span className="text-accent-glow">Consultants</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed">
              Pakistan's trusted visa and travel consultancy. IATA-authorized ticketing, premium
              support, and a proven track record of approvals.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Facebook, href: COMPANY.socials.facebook, label: "Facebook" },
                { Icon: Instagram, href: COMPANY.socials.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 backdrop-blur transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Top Destinations
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { n: "USA", s: "united-states" },
                { n: "UK", s: "united-kingdom" },
                { n: "Schengen", s: "schengen" },
                { n: "Canada", s: "canada" },
                { n: "Australia", s: "australia" },
                { n: "Middle East", s: "middle-east" },
              ].map((d) => (
                <li key={d.s}>
                  <Link
                    to="/countries/$slug"
                    params={{ slug: d.s }}
                    className="text-white/70 hover:text-accent-glow transition-colors"
                  >
                    {d.n} Visa Guide
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/countries"
                  className="text-accent font-semibold hover:underline mt-2 inline-block"
                >
                  View All Destinations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-white/70 hover:text-accent-glow">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/countries" className="text-white/70 hover:text-accent-glow">
                  Countries
                </Link>
              </li>
              <li>
                <Link to="/pakistan-visa" className="text-accent hover:text-accent-glow font-medium">
                  Pakistan Visa
                </Link>
              </li>
              <li>
                <Link to="/air-ticketing" className="text-white/70 hover:text-accent-glow">
                  Air Ticketing
                </Link>
              </li>
              <li>
                <Link to="/hotel-booking" className="text-white/70 hover:text-accent-glow">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link to="/travel-insurance" className="text-white/70 hover:text-accent-glow">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link to="/passport-services" className="text-white/70 hover:text-accent-glow">
                  Passport Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-accent-glow">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/70 hover:text-accent-glow">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 text-accent-glow shrink-0" />
                <span className="text-white/70">{COMPANY.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 text-accent-glow shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-white/70 hover:text-white"
                >
                  {COMPANY.phone} (Landline)
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 text-accent-glow shrink-0" />
                <a
                  href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}
                  className="text-white/70 hover:text-white"
                >
                  {COMPANY.mobile} (Mobile)
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 text-accent-glow shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              {COMPANY.websites?.map((site, i) => (
                <li key={i} className="flex gap-2.5">
                  <Globe2 size={16} className="mt-0.5 text-accent-glow shrink-0" />
                  <a
                    href={`https://${site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    {site}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/consultation"
              className="mt-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent-glow px-4 py-2 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Crafted with care in Islamabad · IATA Authorized Agent</p>
        </div>
      </div>
    </footer>
  );
}
