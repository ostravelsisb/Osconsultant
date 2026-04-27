import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  to,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  to?: string;
}) {
  const inner = (
    <div className="card-3d relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft shine">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
        <Icon size={22} />
      </span>
      <h3 className="relative mt-5 text-lg font-bold">{title}</h3>
      <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      {to && (
        <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Learn more{" "}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </div>
  );
  return to ? (
    <Link to={to} className="group block h-full">
      {inner}
    </Link>
  ) : (
    <div className="group h-full">{inner}</div>
  );
}
