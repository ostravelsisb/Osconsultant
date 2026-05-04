import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageSquare, Flame } from "lucide-react";

interface QueryNotification {
  name: string;
  city: string;
  service: string;
  time: string;
}

const mockNames = [
  "Hammad",
  "Ayesha",
  "Muhammad",
  "Sana",
  "Kamran",
  "Zoya",
  "Zain",
  "Farhan",
  "Maria",
  "Bilal",
];
const mockCities = [
  "Islamabad",
  "Rawalpindi",
  "Lahore",
  "Karachi",
  "Faisalabad",
  "Peshawar",
  "Multan",
];
const mockServices = [
  "Schengen Visa Consultation",
  "UK Standard Visitor Visa",
  "Return Flight to London",
  "Dubai 5-Star Hotel Booking",
  "Umrah 15-Day Package Inquired",
  "Canada Visa Appointment",
  "USA B1/B2 Application Review",
  "Travel Medical Insurance Policy",
];

export function LiveNotification() {
  const [current, setCurrent] = useState<QueryNotification | null>(null);

  useEffect(() => {
    // Generate a new random query notification every 15 to 25 seconds
    const interval = setInterval(() => {
      const randName = mockNames[Math.floor(Math.random() * mockNames.length)];
      const randCity = mockCities[Math.floor(Math.random() * mockCities.length)];
      const randService = mockServices[Math.floor(Math.random() * mockServices.length)];

      setCurrent({
        name: randName,
        city: randCity,
        service: randService,
        time: "Just now",
      });

      // Clear the notification after 5 seconds
      setTimeout(() => {
        setCurrent(null);
      }, 5500);
    }, 18000);

    // Show initial notification after 3 seconds
    const timeout = setTimeout(() => {
      setCurrent({
        name: "Ali",
        city: "Islamabad",
        service: "Schengen Visa Consultation",
        time: "Just now",
      });
      setTimeout(() => setCurrent(null), 5500);
    }, 3000);

    // Listen for custom events triggered by any query submission on the page
    const handleInquiry = (e: any) => {
      const { name, city, service } = e.detail || {};
      setCurrent({
        name: name || "Someone",
        city: city || "Islamabad",
        service: service || "New Inquiry",
        time: "Just now",
      });
      setTimeout(() => setCurrent(null), 6000);
    };

    window.addEventListener("live-inquiry", handleInquiry);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("live-inquiry", handleInquiry);
    };
  }, []);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 20 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="fixed bottom-6 left-6 z-[9999] bg-card/95 backdrop-blur-md border border-border shadow-elevated rounded-2xl p-4 max-w-xs flex items-start gap-3.5 select-none hover:border-primary/40 transition-colors"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
            <Flame className="animate-pulse" size={18} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold tracking-tight text-foreground/90">Live Query</p>
              <span className="flex items-center gap-1 text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                <CheckCircle2 size={10} /> Verified
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground leading-normal">
              <strong className="text-foreground">{current.name}</strong> from {current.city} just
              inquired about{" "}
              <strong className="text-primary font-semibold">{current.service}</strong>.
            </p>
            <p className="mt-1.5 text-[10px] text-muted-foreground/75 font-medium">
              {current.time}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Global helper to trigger the live notification directly from anywhere on the page
export function triggerLiveNotification(name: string, city: string, service: string) {
  const event = new CustomEvent("live-inquiry", {
    detail: { name, city, service },
  });
  window.dispatchEvent(event);
}
