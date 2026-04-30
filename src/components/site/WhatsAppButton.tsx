import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=Hi%20OS%20Consultants%2C%20I%20need%20help%20with%20a%20visa%20enquiry.`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] group inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <MessageCircle size={24} className="relative" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
