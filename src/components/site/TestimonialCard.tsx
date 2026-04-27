import { Quote, Star } from "lucide-react";

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="card-3d relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
      <Quote className="absolute right-5 top-5 text-primary/15" size={42} />
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
          {name
            .split(" ")
            .map((s) => s[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
