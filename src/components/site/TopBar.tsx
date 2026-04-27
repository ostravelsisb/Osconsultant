import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/data/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-xs">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-2">
        <div className="flex items-center gap-5 opacity-95">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <MapPin size={13} />
            Blue Area, Islamabad, Pakistan
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} />
            {COMPANY.hours}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-glow transition-colors"
          >
            <Phone size={13} />
            {COMPANY.mobile}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-glow transition-colors"
          >
            <Mail size={13} />
            {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  );
}
