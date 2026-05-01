import { COMPANY } from "@/data/site";
import { motion } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.1l-4.4-7.1c-18.5-29.7-28.2-64.2-28.2-100.4 0-103.5 84.3-187.8 187.9-187.8 50.1 0 97.3 19.5 132.8 55 35.5 35.5 55 82.7 55 132.8 0 103.5-84.3 187.8-187.8 187.8zM326.6 276.5c-5.6-2.8-33.3-16.5-38.5-18.4-5.2-1.9-9-2.8-12.8 2.8-3.8 5.6-14.6 18.4-17.9 22.2-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.7-8.8-45.2-28-16.7-14.9-28-33.3-31.3-38.9-3.3-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.9-17.6-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-20.4 19.9-20.4 48.4s20.9 56.1 23.8 60c2.8 3.8 40.9 62.4 99.1 87.5 13.8 5.9 24.6 9.4 33 12 13.9 4.4 26.6 3.8 36.6 2.3 11.2-1.7 34.3-14 39.1-27.5 4.8-13.5 4.8-25 3.3-27.5-1.5-2.5-5.3-3.9-10.9-6.7z" />
  </svg>
);

export function WhatsAppButton() {
  const href = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=Hi%20OS%20Consultants%2C%20I%20need%20help%20with%20a%20visa%20enquiry.`;
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-[100] group inline-flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 active:scale-95"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping duration-[3000ms]" />
      <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:rotate-12" />
      <span className="pointer-events-none absolute right-full mr-3 sm:mr-4 whitespace-nowrap rounded-xl bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white opacity-0 shadow-xl transition-all duration-300 ease-out translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hidden sm:block">
        Chat with us
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-r-0 border-transparent border-l-slate-900" />
      </span>
    </motion.a>
  );
}
