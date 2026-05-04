import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { triggerLiveNotification } from "@/components/site/LiveNotification";
import {
  Plane,
  Moon,
  Stamp,
  Hotel,
  Smartphone,
  Search,
  MapPin,
  Calendar,
  Phone,
  Users,
  ChevronDown,
  ArrowRightLeft,
  MessageCircle,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, startOfToday, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ALL_COUNTRIES } from "@/data/all-countries";
import {
  COMPANY,
  SCHENGEN_COUNTRIES,
  SOUTH_ASIA_COUNTRIES,
  CENTRAL_ASIA_COUNTRIES,
  NORTH_AFRICA_COUNTRIES,
  SOUTHERN_AFRICA_COUNTRIES,
  MIDDLE_EAST_COUNTRIES,
  AMERICAS_COUNTRIES,
  EAST_ASIA_COUNTRIES,
  EUROPE_OTHERS_COUNTRIES,
  SOUTH_AMERICA_COUNTRIES
} from "@/data/site";
import { DESTINATIONS } from "@/data/destinations";
import logo from "@/assets/logo.png";

type TripType = "round-trip" | "one-way" | "multi-city";

export function BookingWidget({ initialTab = "flights" }: { initialTab?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHero = location.pathname === "/" || location.pathname === "";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0 });
  const [multiCityLegs, setMultiCityLegs] = useState([
    { id: 1, from: "", to: "", date: undefined },
    { id: 2, from: "", to: "", date: undefined },
  ]);

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [visaSearch, setVisaSearch] = useState("");
  const [umrahDuration, setUmrahDuration] = useState("15");

  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [showVisaSuggestions, setShowVisaSuggestions] = useState(false);

  const [hotelSearch, setHotelSearch] = useState("");
  const [showHotelSuggestions, setShowHotelSuggestions] = useState(false);
  const [hotelRange, setHotelRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: startOfToday(),
    to: addDays(startOfToday(), 3),
  });
  const [hotelRooms, setHotelRooms] = useState(1);
  const [hotelGuests, setHotelGuests] = useState({ adults: 2, children: 0 });
  const [hotelCategory, setHotelCategory] = useState("4-star");
  const [hotelBudget, setHotelBudget] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  // New states to fix controlled/uncontrolled warnings
  const [cabinClass, setCabinClass] = useState("economy");
  const [currency, setCurrency] = useState("PKR");
  const [umrahPackage, setUmrahPackage] = useState("economy");
  const [flightStops, setFlightStops] = useState("direct");
  const [visaType, setVisaType] = useState("tourist");

  const [flightDepOpen, setFlightDepOpen] = useState(false);
  const [flightRetOpen, setFlightRetOpen] = useState(false);
  const [umrahDateOpen, setUmrahDateOpen] = useState(false);
  const [multiDateOpen, setMultiDateOpen] = useState<number | null>(null);

  const [airports, setAirports] = useState<any[]>([]);
  const [isLoadingAirports, setIsLoadingAirports] = useState(true);

  useEffect(() => {
    fetch('/data/airports.json')
      .then(res => res.json())
      .then(data => {
        setAirports(data);
        setIsLoadingAirports(false);
      })
      .catch(err => {
        console.error("Failed to load airports:", err);
        setIsLoadingAirports(false);
      });
  }, []);

  const [debouncedFromSearch, setDebouncedFromSearch] = useState("");
  const [debouncedToSearch, setDebouncedToSearch] = useState("");
  const [debouncedVisaSearch, setDebouncedVisaSearch] = useState("");
  const [debouncedHotelSearch, setDebouncedHotelSearch] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedFromSearch(fromSearch), 200);
    return () => clearTimeout(t);
  }, [fromSearch]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedToSearch(toSearch), 200);
    return () => clearTimeout(t);
  }, [toSearch]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedVisaSearch(visaSearch), 200);
    return () => clearTimeout(t);
  }, [visaSearch]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedHotelSearch(hotelSearch), 200);
    return () => clearTimeout(t);
  }, [hotelSearch]);

  const getFilteredAirports = (search: string) => {
    if (!search || search.length < 2) return [];
    const s = search.toLowerCase();

    // Check for exact IATA match first (3 letters)
    if (s.length === 3) {
      const exactIATA = airports.find(d => d.i?.toLowerCase() === s);
      if (exactIATA) return [exactIATA];
    }

    return airports
      .filter(d =>
        (d.i && d.i.toLowerCase().includes(s)) ||
        (d.n && d.n.toLowerCase().includes(s)) ||
        (d.m && d.m.toLowerCase().includes(s)) ||
        (d.c && d.c.toLowerCase().includes(s))
      )
      .sort((a, b) => {
        if (a.i?.toLowerCase().startsWith(s)) return -1;
        if (b.i?.toLowerCase().startsWith(s)) return 1;
        if (a.m?.toLowerCase().startsWith(s)) return -1;
        if (b.m?.toLowerCase().startsWith(s)) return 1;
        return 0;
      })
      .slice(0, 40);
  };

  const filteredFrom = useMemo(() => getFilteredAirports(debouncedFromSearch), [debouncedFromSearch, airports]);
  const filteredTo = useMemo(() => getFilteredAirports(debouncedToSearch), [debouncedToSearch, airports]);

  const filteredVisaCountries = useMemo(() => {
    const s = debouncedVisaSearch.toLowerCase();

    // Explicit list of top individual countries from the website
    const featuredDestinations = [
      { name: "United Kingdom", code: "gb" },
      { name: "United States", code: "us" },
      { name: "Canada", code: "ca" },
      { name: "Australia", code: "au" },
      { name: "Germany", code: "de" },
      { name: "France", code: "fr" },
      { name: "Italy", code: "it" },
      { name: "Spain", code: "es" },
      { name: "United Arab Emirates", code: "ae" },
      { name: "Saudi Arabia", code: "sa" },
      { name: "Turkey", code: "tr" },
      { name: "Qatar", code: "qa" },
      { name: "Azerbaijan", code: "az" },
      { name: "Thailand", code: "th" },
      { name: "Malaysia", code: "my" },
      { name: "Egypt", code: "eg" },
    ];

    if (!debouncedVisaSearch || debouncedVisaSearch.length < 1) {
      return featuredDestinations;
    }

    // Combine with all countries, prioritizing featured
    const combined = [
      ...featuredDestinations,
      ...ALL_COUNTRIES.filter(c => !featuredDestinations.some(fd => fd.name === c.name))
    ];

    return combined.filter(c => c.name.toLowerCase().includes(s)).slice(0, 40);
  }, [debouncedVisaSearch]);

  const filteredHotelDestinations = useMemo(() => {
    if (!debouncedHotelSearch || debouncedHotelSearch.length < 2) return [];
    const s = debouncedHotelSearch.toLowerCase();
    return airports
      .filter(a => a.m?.toLowerCase().includes(s) || a.n?.toLowerCase().includes(s))
      .slice(0, 10);
  }, [debouncedHotelSearch, airports]);

  const [activeMultiSearch, setActiveMultiSearch] = useState<{ id: number, field: 'from' | 'to' } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const addLeg = () => {
    setMultiCityLegs([...multiCityLegs, { id: Date.now(), from: "", to: "", date: undefined }]);
  };

  const removeLeg = (id: number) => {
    if (multiCityLegs.length > 2) {
      setMultiCityLegs(multiCityLegs.filter((leg) => leg.id !== id));
    }
  };

  const navigateToCountry = (country: { name: string, code?: string }) => {
    const name = country.name;
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    // 1. Direct Hubs
    const primary = DESTINATIONS.find(d => d.name.toLowerCase() === name.toLowerCase() || d.slug === slug);
    if (primary) {
      navigate({ to: "/countries/$slug", params: { slug: primary.slug } });
      return;
    }

    // 2. Regional Mappings
    const regions = [
      { list: SCHENGEN_COUNTRIES, path: "schengen" },
      { list: SOUTH_ASIA_COUNTRIES, path: "south-asia" },
      { list: CENTRAL_ASIA_COUNTRIES, path: "central-asia" },
      { list: NORTH_AFRICA_COUNTRIES, path: "north-africa" },
      { list: SOUTHERN_AFRICA_COUNTRIES, path: "southern-africa" },
      { list: MIDDLE_EAST_COUNTRIES, path: "middle-east" },
      { list: AMERICAS_COUNTRIES, path: "americas" },
      { list: EAST_ASIA_COUNTRIES, path: "east-asia" },
      { list: EUROPE_OTHERS_COUNTRIES, path: "europe-others" },
    ];

    for (const r of regions) {
      const c = r.list.find(item => item.name.toLowerCase() === name.toLowerCase() || item.slug === slug);
      if (c) {
        navigate({ to: `/countries/${r.path}/$country`, params: { country: c.slug } });
        return;
      }
    }

    // 3. Fallback: If not found in primary or regions, we can still try a generic slug
    // But since the user wants it in a specific region, and we've covered the main ones,
    // we'll default to the general assessment if no specific page is found.
  };

  const updateLeg = (id: number, field: 'from' | 'to' | 'date', value: any) => {
    setMultiCityLegs(prev => prev.map(leg =>
      leg.id === id ? { ...leg, [field]: value } : leg
    ));
  };

  const tabs = [
    { id: "flights", label: "Flights", icon: Plane, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "umrah", label: "Umrah", icon: Moon, color: "text-red-500", bg: "bg-red-50" },
    { id: "visa", label: "Visa", icon: Stamp, color: "text-sky-400", bg: "bg-sky-50" },
    { id: "hotel", label: "Hotel", icon: Hotel, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  const totalTravellers = travellers.adults + travellers.children + travellers.infants;

  const getInquiryMessage = (phone: string) => {
    let msg = `Hello ${COMPANY.name}! I would like to inquire about:\n\n`;

    if (activeTab === 'flights') {
      if (tripType === 'multi-city') {
        msg += `✈️ *Multi-City Flight Inquiry*\n`;
        multiCityLegs.forEach((leg, i) => {
          msg += `Leg ${i + 1}: ${leg.from || 'TBA'} to ${leg.to || 'TBA'} (${leg.date ? format(leg.date, 'dd MMM') : 'TBA'})\n`;
        });
      } else {
        msg += `✈️ *${tripType === 'round-trip' ? 'Round-Trip' : 'One-Way'} Flight Inquiry*\n`;
        msg += `From: ${fromSearch || 'TBA'}\nTo: ${toSearch || 'TBA'}\n`;
        msg += `Departure: ${departureDate ? format(departureDate, 'dd MMM yyyy') : 'TBA'}\n`;
        if (tripType === 'round-trip') msg += `Return: ${returnDate ? format(returnDate, 'dd MMM yyyy') : 'TBA'}\n`;
      }
      msg += `Travellers: ${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants\n`;
    } else if (activeTab === 'umrah') {
      msg += `🕋 *Umrah Inquiry*\n`;
      msg += `Stay Duration: ${umrahDuration} Days\n`;
      msg += `Departure: ${departureDate ? format(departureDate, 'dd MMM yyyy') : 'TBA'}\n`;
      msg += `Travellers: ${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants\n`;
    } else if (activeTab === 'visa') {
      msg += `🛂 *Visa Assistance Inquiry*\n`;
      msg += `Destination: ${visaSearch || 'TBA'}\n`;
    } else if (activeTab === 'hotel') {
      msg += `🏨 *Hotel Booking Inquiry*\n`;
      msg += `Destination: ${hotelSearch || 'TBA'}\n`;
      msg += `Dates: ${hotelRange?.from ? format(hotelRange.from, 'dd MMM') : 'TBA'} - ${hotelRange?.to ? format(hotelRange.to, 'dd MMM') : 'TBA'}\n`;
      msg += `Category: ${hotelCategory.replace('-', ' ')}\n`;
      if (hotelBudget) msg += `Budget: PKR ${hotelBudget}\n`;
      msg += `Rooms: ${hotelRooms}, Guests: ${hotelGuests.adults + hotelGuests.children}\n`;
    }

    if (userPhone) msg += `\nMy Contact: ${userPhone}\n`;

    msg += `\nPlease provide the best rates and details.`;
    return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
  };

  const handleVisaInquiry = () => {
    triggerLiveNotification("You", "Your Location", `Visa Services for ${visaSearch}`);
    window.open(`https://wa.me/923365500477?text=${encodeURIComponent(`Hello Mujtaba! I would like to inquire about visa services for ${visaSearch}.`)}`, "_blank");
  };

  const handleGeneralInquiry = () => {
    let serviceLabel = "Custom Query";
    if (activeTab === "flights") serviceLabel = `${fromSearch || "Lahore"} to ${toSearch || "London"} Flight`;
    if (activeTab === "umrah") serviceLabel = "Umrah 15-Day Package";
    if (activeTab === "hotel") serviceLabel = `${hotelSearch || "Dubai"} Hotel Booking`;

    triggerLiveNotification("You", "Your Location", serviceLabel);
    window.open(getInquiryMessage("+923365500477"), "_blank");
  };


  const isFlightValid = () => {
    if (tripType === 'multi-city') {
      return multiCityLegs.every(leg => leg.from && leg.to && leg.date);
    }
    const base = fromSearch && toSearch && departureDate;
    if (tripType === 'round-trip') return base && returnDate;
    return base;
  };

  const isUmrahValid = () => !!departureDate;
  const isVisaValid = () => !!visaSearch;
  const isHotelValid = () => !!hotelSearch && !!hotelRange?.from && !!hotelRange?.to;


  // Sync tab with URL search params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['flights', 'umrah', 'visa', 'hotel'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    const paths: Record<string, string> = {
      flights: '/air-ticketing',
      umrah: '/umrah',
      visa: '/visa-services',
      hotel: '/hotel-booking'
    };

    const targetPath = paths[tabId];
    if (targetPath) {
      navigate({ to: `${targetPath}?tab=${tabId}` as any });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-50">
      {/* Expanded Scrolling Actual Size Cards Behind Widget */}
      {isHero && (
        <div className="absolute inset-x-[-15vw] top-[-3.5rem] bottom-[-3.5rem] z-0 opacity-15 pointer-events-none select-none overflow-hidden flex flex-col justify-around py-4">
          <motion.div 
            className="flex gap-16 shrink-0 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
          >
            {[...SCHENGEN_COUNTRIES, ...SCHENGEN_COUNTRIES].map((c, i) => (
              <div key={c.slug + i + "-ext-1"} className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/30 shrink-0 bg-slate-900/40 backdrop-blur-sm group select-none">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-primary border border-white/10 mb-2">Schengen Area</span>
                  <h4 className="text-lg font-black text-white tracking-wide">{c.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div 
            className="flex gap-16 shrink-0 min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          >
            {[...SCHENGEN_COUNTRIES.slice().reverse(), ...SCHENGEN_COUNTRIES.slice().reverse()].map((c, i) => (
              <div key={c.slug + i + "-ext-2"} className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/30 shrink-0 bg-slate-900/40 backdrop-blur-sm group select-none">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-primary border border-white/10 mb-2">Schengen Area</span>
                  <h4 className="text-lg font-black text-white tracking-wide">{c.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      <div className="bg-sky-50/75 rounded-3xl shadow-glow border border-sky-200/50 backdrop-blur-xl relative overflow-visible z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] rounded-b-full overflow-hidden pointer-events-none z-50">
          <div className="w-full h-full bg-gradient-to-r from-[#FF7F11] via-[#FF7F11]/80 to-[#00B4D8]" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-border/50 bg-secondary/5 pr-2 sm:pr-8 rounded-t-3xl overflow-visible w-full select-none pt-[2px]">
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth w-full lg:w-auto flex-nowrap shrink-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      "flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 md:px-6 py-3.5 transition-all duration-300 relative min-w-max",
                      isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <div className={cn("p-1.5 rounded-lg transition-colors", isActive ? tab.bg : "bg-transparent")}>
                      <Icon size={18} className={cn(isActive ? tab.color : "text-muted-foreground")} />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base">{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Middle Branding - Pakistan's No. 1 Consultancy */}
            <div className="hidden xl:flex items-center flex-1 justify-center px-4 overflow-hidden border-x border-border/30 mx-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="whitespace-nowrap"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary/70 flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-primary/40" />
                  Pakistan&apos;s No. 1 Consultancy
                  <span className="h-1 w-1 rounded-full bg-primary/40" />
                </span>
              </motion.div>
            </div>

            <div className="hidden xl:flex items-center gap-3 py-2 pr-6">
              <div className="h-8 w-px bg-border/50 mx-2" />
              <img src={logo} alt={COMPANY.name} className="h-8 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-tighter text-muted-foreground font-black leading-none mb-0.5">Travel Portal</span>
                <span className="text-[11px] font-black text-primary leading-tight">{COMPANY.name}</span>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {activeTab === "flights" && (
                <motion.div
                  key="flights"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Trip Type & Quick Filters */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex bg-secondary/50 p-1 rounded-xl">
                      {(["round-trip", "one-way", "multi-city"] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => setTripType(type)}
                          className={cn(
                            "px-4 py-2 text-sm font-semibold rounded-lg transition-all",
                            tripType === type
                              ? "bg-[#FF7F11] text-white shadow-md font-bold"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {type === "round-trip" ? "Round Trip" : type === "one-way" ? "One Way" : "Multi-City"}
                        </button>
                      ))}
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-2 md:gap-3">
                      <Select value={cabinClass || "economy"} onValueChange={setCabinClass}>
                        <SelectTrigger aria-label="Select Cabin Class" className={cn("w-full sm:w-[130px] h-11 rounded-xl focus:ring-0 transition-all font-semibold", cabinClass !== "economy" ? "bg-blue-100/60 backdrop-blur-md border border-blue-200/50 text-blue-800" : "bg-secondary/50 border-none text-foreground")}>
                          <SelectValue placeholder="Class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="premium-economy">Premium Economy</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="first-class">First Class</SelectItem>
                        </SelectContent>
                      </Select>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button aria-label="Select Travellers" variant="ghost" className={cn("h-11 px-4 rounded-xl w-full sm:w-auto justify-between sm:justify-start transition-all font-semibold", totalTravellers > 1 ? "bg-blue-100/60 backdrop-blur-md border border-blue-200/50 text-blue-800 hover:bg-blue-200/50" : "bg-secondary/50 border-none hover:bg-secondary/70")}>
                            <div className="flex items-center">
                              <Users size={16} className="mr-2 text-muted-foreground" />
                              <span className="text-sm font-semibold">{totalTravellers} Traveller{totalTravellers > 1 ? 's' : ''}</span>
                            </div>
                            <ChevronDown size={14} className="ml-2 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-4 rounded-2xl" align="end">
                          <div className="space-y-4">
                            <p className="font-bold text-sm">Select Travellers</p>
                            {[
                              { label: "Adults", sub: "12+ yrs", key: "adults" },
                              { label: "Children", sub: "2-12 yrs", key: "children" },
                              { label: "Infants", sub: "Below 2 yrs", key: "infants" },
                            ].map((item) => (
                              <div key={item.key} className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-semibold">{item.label}</p>
                                  <p className="text-[11px] text-muted-foreground">{item.sub}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => setTravellers(prev => ({ ...prev, [item.key]: Math.max(0, (prev as any)[item.key] - 1) }))}
                                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm font-bold w-4 text-center">{(travellers as any)[item.key]}</span>
                                  <button
                                    onClick={() => setTravellers(prev => ({ ...prev, [item.key]: (prev as any)[item.key] + 1 }))}
                                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>

                      <Select value={flightStops || "direct"} onValueChange={setFlightStops}>
                        <SelectTrigger aria-label="Select Flight Stops" className={cn("w-full sm:w-[145px] h-11 rounded-xl focus:ring-0 flex-1 sm:flex-none transition-all font-semibold", flightStops !== "direct" ? "bg-blue-100/60 backdrop-blur-md border border-blue-200/50 text-blue-800" : "bg-secondary/50 border-none text-foreground")}>
                          <SelectValue placeholder="Flight Stops" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="direct">Direct Flights</SelectItem>
                          <SelectItem value="1-stop">1 Stop</SelectItem>
                          <SelectItem value="2-stops">2+ Stops</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={currency || "PKR"} onValueChange={setCurrency}>
                        <SelectTrigger aria-label="Select Currency" className={cn("w-[90px] h-11 rounded-xl focus:ring-0 flex-1 sm:flex-none transition-all font-semibold", currency !== "PKR" ? "bg-blue-100/60 backdrop-blur-md border border-blue-200/50 text-blue-800" : "bg-secondary/50 border-none text-foreground")}>
                          <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PKR">PKR</SelectItem>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="AED">AED</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {tripType !== "multi-city" ? (
                      <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 relative">
                        {/* Destination Group */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-6 lg:gap-10 relative">
                          {/* Origin */}
                          <div className="relative group">
                            <Label htmlFor="origin-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">From</Label>
                            <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform" size={18} />
                              <Input
                                id="origin-input"
                                name="origin"
                                autoComplete="off"
                                placeholder={isLoadingAirports ? "Loading..." : "Leaving from"}
                                value={fromSearch}
                                onChange={(e) => {
                                  setFromSearch(e.target.value);
                                  setShowFromSuggestions(true);
                                }}
                                onFocus={() => setShowFromSuggestions(true)}
                                className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border focus-visible:ring-primary/20 transition-all text-sm font-medium pr-12"
                              />
                              {fromSearch && (
                                <button
                                  onClick={() => {
                                    setFromSearch("");
                                    setShowFromSuggestions(false);
                                  }}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors"
                                >
                                  <X size={16} />
                                </button>
                              )}
                              {showFromSuggestions && filteredFrom.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-border z-[100] overflow-hidden py-2 animate-in fade-in zoom-in duration-200 max-h-[400px] overflow-y-auto custom-scrollbar">
                                  {filteredFrom.map((d) => (
                                    <button
                                      key={`${d.i}-${d.n}`}
                                      onClick={() => {
                                        setFromSearch(`${d.i} (${d.m || d.n})`);
                                        setShowFromSuggestions(false);
                                      }}
                                      className="w-full px-4 py-2 text-left hover:bg-secondary/50 flex items-center justify-between group/item"
                                    >
                                      <div className="min-w-0">
                                        <p className="text-sm font-bold group-hover/item:text-primary transition-colors truncate">{d.i} - {d.n}</p>
                                        <p className="text-[11px] text-muted-foreground truncate">{d.m}, {d.c}</p>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Swap Button - Perfectly centered with input fields (offset for labels) */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-[76px] md:top-[76px] lg:top-1/2 lg:-translate-y-1/2 lg:mt-[11px] z-10">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const temp = fromSearch;
                                setFromSearch(toSearch);
                                setToSearch(temp);
                              }}
                              className="rounded-full bg-white shadow-elevated hover:bg-primary hover:text-white transition-all border-border w-9 h-9 lg:w-10 lg:h-10 hover:rotate-180 duration-500 scale-90 lg:scale-100"
                            >
                              <ArrowRightLeft size={16} className="rotate-90 lg:rotate-0" />
                            </Button>
                          </div>

                          {/* Destination */}
                          <div className="relative group">
                            <Label htmlFor="destination-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">To</Label>
                            <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform" size={18} />
                              <Input
                                id="destination-input"
                                name="destination"
                                autoComplete="off"
                                placeholder={isLoadingAirports ? "Loading..." : "Going to"}
                                value={toSearch}
                                onChange={(e) => {
                                  setToSearch(e.target.value);
                                  setShowToSuggestions(true);
                                }}
                                onFocus={() => setShowToSuggestions(true)}
                                className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border focus-visible:ring-primary/20 transition-all text-sm font-medium pr-12"
                              />
                              {toSearch && (
                                <button
                                  onClick={() => {
                                    setToSearch("");
                                    setShowToSuggestions(false);
                                  }}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors"
                                >
                                  <X size={16} />
                                </button>
                              )}
                              {showToSuggestions && filteredTo.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-border z-[100] overflow-hidden py-2 animate-in fade-in zoom-in duration-200 max-h-[400px] overflow-y-auto custom-scrollbar">
                                  {filteredTo.map((d) => (
                                    <button
                                      key={`${d.i}-${d.n}`}
                                      onClick={() => {
                                        setToSearch(`${d.i} (${d.m || d.n})`);
                                        setShowToSuggestions(false);
                                      }}
                                      className="w-full px-4 py-2 text-left hover:bg-secondary/50 flex items-center justify-between group/item"
                                    >
                                      <div className="min-w-0">
                                        <p className="text-sm font-bold group-hover/item:text-primary transition-colors truncate">{d.i} - {d.n}</p>
                                        <p className="text-[11px] text-muted-foreground truncate">{d.m}, {d.c}</p>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Date Pickers */}
                        <div className={cn("grid gap-2", tripType === "round-trip" ? "lg:col-span-2 grid-cols-2" : "grid-cols-1")}>
                          <div className="relative group">
                            <Label htmlFor="flight-departure-btn" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Departure</Label>
                            <Popover open={flightDepOpen} onOpenChange={setFlightDepOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  id="flight-departure-btn"
                                  variant="outline"
                                  className={cn(
                                    "w-full h-14 pl-10 md:pl-12 justify-start text-left font-medium rounded-2xl bg-secondary/20 border-border hover:bg-secondary/30 text-xs md:text-sm",
                                    !departureDate && "text-muted-foreground"
                                  )}
                                >
                                  <Calendar className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform" size={16} />
                                  <span className="truncate">{departureDate ? format(departureDate, "MMM dd, yyyy") : "Select date"}</span>
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={departureDate}
                                  onSelect={(date) => { setDepartureDate(date); setFlightDepOpen(false); }}
                                  initialFocus
                                  disabled={(date) => date < startOfToday()}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {tripType === "round-trip" && (
                            <div className="relative group">
                              <Label htmlFor="flight-return-btn" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Return</Label>
                              <Popover open={flightRetOpen} onOpenChange={setFlightRetOpen}>
                                <PopoverTrigger asChild>
                                  <Button
                                    id="flight-return-btn"
                                    variant="outline"
                                    className={cn(
                                      "w-full h-14 pl-10 md:pl-12 justify-start text-left font-medium rounded-2xl bg-secondary/20 border-border hover:bg-secondary/30 text-xs md:text-sm",
                                      !returnDate && "text-muted-foreground"
                                    )}
                                  >
                                    <Calendar className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform" size={16} />
                                    <span className="truncate">{returnDate ? format(returnDate, "MMM dd, yyyy") : "Select date"}</span>
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                                  <CalendarComponent
                                    mode="single"
                                    selected={returnDate}
                                    onSelect={(date) => { setReturnDate(date); setFlightRetOpen(false); }}
                                    initialFocus
                                    disabled={(date) => date < startOfToday() || (!!departureDate && date < departureDate)}
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          )}
                        </div>

                        {/* Contact Info */}
                        <div className="relative group">
                          <Label htmlFor="flight-contact-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Contact No.</Label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform" size={18} />
                            <Input
                              id="flight-contact-input"
                              name="phone"
                              autoComplete="tel"
                              placeholder="+92 300 1234567"
                              type="tel"
                              value={userPhone}
                              onChange={(e) => setUserPhone(e.target.value)}
                              className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border focus-visible:ring-primary/20 transition-all text-sm font-medium"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Multi-City Legs */}
                        {multiCityLegs.map((leg, i) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={leg.id}
                            className="grid gap-3 lg:grid-cols-12 md:grid-cols-2 p-4 rounded-2xl bg-secondary/10 border border-border/50 relative"
                          >
                            <div className="lg:col-span-4 relative">
                              <Label htmlFor={`multi-from-${leg.id}`} className="text-[10px] uppercase text-muted-foreground ml-1">Flight {i + 1} From</Label>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 z-10" size={16} />
                                <Input
                                  id={`multi-from-${leg.id}`}
                                  name={`multi-from-${i}`}
                                  autoComplete="off"
                                  placeholder="Origin"
                                  value={leg.from}
                                  onChange={(e) => {
                                    updateLeg(leg.id, 'from', e.target.value);
                                    setActiveMultiSearch({ id: leg.id, field: 'from' });
                                  }}
                                  className="pl-10 h-12 rounded-xl bg-white pr-10"
                                />
                                {leg.from && (
                                  <button
                                    onClick={() => updateLeg(leg.id, 'from', "")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors z-10"
                                  >
                                    <X size={14} />
                                  </button>
                                )}
                                {activeMultiSearch?.id === leg.id && activeMultiSearch?.field === 'from' && getFilteredAirports(leg.from).length > 0 && (
                                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-border z-[100] overflow-hidden py-2 animate-in fade-in zoom-in duration-200 max-h-[300px] overflow-y-auto custom-scrollbar">
                                    {getFilteredAirports(leg.from).map((d) => (
                                      <button
                                        key={`${d.i}-${d.n}`}
                                        onClick={() => {
                                          updateLeg(leg.id, 'from', `${d.i} (${d.m || d.n})`);
                                          setActiveMultiSearch(null);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-secondary/50 flex items-center justify-between group/item"
                                      >
                                        <div className="min-w-0">
                                          <p className="text-sm font-bold group-hover/item:text-primary transition-colors truncate">{d.i} - {d.n}</p>
                                          <p className="text-[11px] text-muted-foreground truncate">{d.m}, {d.c}</p>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="lg:col-span-4 relative">
                              <Label htmlFor={`multi-to-${leg.id}`} className="text-[10px] uppercase text-muted-foreground ml-1">To</Label>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 z-10" size={16} />
                                <Input
                                  id={`multi-to-${leg.id}`}
                                  name={`multi-to-${i}`}
                                  autoComplete="off"
                                  placeholder="Destination"
                                  value={leg.to}
                                  onChange={(e) => {
                                    updateLeg(leg.id, 'to', e.target.value);
                                    setActiveMultiSearch({ id: leg.id, field: 'to' });
                                  }}
                                  className="pl-10 h-12 rounded-xl bg-white pr-10"
                                />
                                {leg.to && (
                                  <button
                                    onClick={() => updateLeg(leg.id, 'to', "")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors z-10"
                                  >
                                    <X size={14} />
                                  </button>
                                )}
                                {activeMultiSearch?.id === leg.id && activeMultiSearch?.field === 'to' && getFilteredAirports(leg.to).length > 0 && (
                                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-border z-[100] overflow-hidden py-2 animate-in fade-in zoom-in duration-200 max-h-[300px] overflow-y-auto custom-scrollbar">
                                    {getFilteredAirports(leg.to).map((d) => (
                                      <button
                                        key={`${d.i}-${d.n}`}
                                        onClick={() => {
                                          updateLeg(leg.id, 'to', `${d.i} (${d.m || d.n})`);
                                          setActiveMultiSearch(null);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-secondary/50 flex items-center justify-between group/item"
                                      >
                                        <div className="min-w-0">
                                          <p className="text-sm font-bold group-hover/item:text-primary transition-colors truncate">{d.i} - {d.n}</p>
                                          <p className="text-[11px] text-muted-foreground truncate">{d.m}, {d.c}</p>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="lg:col-span-3 relative">
                              <Label htmlFor={`multi-date-${leg.id}`} className="text-[10px] uppercase text-muted-foreground ml-1">Departure</Label>
                              <Popover open={multiDateOpen === leg.id} onOpenChange={(isOpen) => setMultiDateOpen(isOpen ? leg.id : null)}>
                                <PopoverTrigger asChild>
                                  <Button
                                    id={`multi-date-${leg.id}`}
                                    variant="outline"
                                    className={cn(
                                      "w-full h-12 justify-start pl-10 rounded-xl bg-white text-xs font-medium",
                                      !leg.date && "text-muted-foreground"
                                    )}
                                  >
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" size={16} />
                                    {leg.date ? format(leg.date, "MMM dd, yyyy") : "Select Date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                                  <CalendarComponent
                                    mode="single"
                                    selected={leg.date}
                                    onSelect={(date) => { updateLeg(leg.id, 'date', date); setMultiDateOpen(null); }}
                                    initialFocus
                                    disabled={(date) => date < startOfToday()}
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div className="lg:col-span-1 flex items-end justify-center pb-1">
                              <Button
                                onClick={() => removeLeg(leg.id)}
                                disabled={multiCityLegs.length <= 2}
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10 text-muted-foreground hover:text-destructive disabled:opacity-30"
                              >
                                <X size={18} />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                        <div className="mt-6">
                          <Button
                            variant="outline"
                            onClick={addLeg}
                            className="w-full sm:w-auto rounded-xl border-dashed border-primary/50 text-primary hover:bg-primary/5"
                          >
                            <Plus className="mr-2" size={16} /> Add Another City
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action */}
                  <div className="flex items-center justify-end mt-4">
                    <Button
                      onClick={() => setShowInquiryModal(true)}
                      disabled={!isFlightValid()}
                      className="w-full md:w-auto h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-glow hover:scale-[1.02] transition-all shine border-none disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      <Search className="mr-2" size={20} />
                      Search Flights
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === "umrah" && (
                <motion.div
                  key="umrah"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2">
                    <div className="relative group">
                      <Label htmlFor="umrah-package-select" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Package Type</Label>
                      <Select value={umrahPackage || "economy"} onValueChange={setUmrahPackage}>
                        <SelectTrigger id="umrah-package-select" className="w-full h-14 rounded-2xl bg-secondary/20 border-border focus:ring-primary/20">
                          <SelectValue placeholder="Select Package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy Package</SelectItem>
                          <SelectItem value="star-3">3 Star Package</SelectItem>
                          <SelectItem value="star-4">4 Star Package</SelectItem>
                          <SelectItem value="star-5">5 Star Premium</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="umrah-duration-select" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Stay Duration</Label>
                      <Select value={umrahDuration || "15"} onValueChange={setUmrahDuration}>
                        <SelectTrigger id="umrah-duration-select" className="w-full h-14 rounded-2xl bg-secondary/20 border-border focus:ring-primary/20">
                          <SelectValue placeholder="Select Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 Days</SelectItem>
                          <SelectItem value="10">10 Days</SelectItem>
                          <SelectItem value="15">15 Days</SelectItem>
                          <SelectItem value="30">30 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="umrah-travel-date-btn" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Travel Date</Label>
                      <Popover open={umrahDateOpen} onOpenChange={setUmrahDateOpen}>
                        <PopoverTrigger asChild>
                          <Button id="umrah-travel-date-btn" variant="outline" className="w-full h-14 pl-12 justify-start text-left font-medium rounded-2xl bg-secondary/20 border-border hover:bg-secondary/30">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                            {departureDate ? format(departureDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={departureDate}
                            onSelect={(date) => { setDepartureDate(date); setUmrahDateOpen(false); }}
                            initialFocus
                            disabled={(date) => date < addDays(startOfToday(), 7)}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="umrah-travellers-btn" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Travellers</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button id="umrah-travellers-btn" variant="outline" className="w-full h-14 pl-12 justify-start text-left font-medium rounded-2xl bg-secondary/20 border-border hover:bg-secondary/30">
                            <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                            <span className="text-sm">{totalTravellers} Traveller{totalTravellers > 1 ? 's' : ''}</span>
                            <ChevronDown size={14} className="ml-auto opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-4 rounded-2xl" align="end">
                          <div className="space-y-4">
                            <p className="font-bold text-sm">Select Travellers</p>
                            {[
                              { label: "Adults", sub: "12+ yrs", key: "adults" },
                              { label: "Children", sub: "2-12 yrs", key: "children" },
                              { label: "Infants", sub: "Below 2 yrs", key: "infants" },
                            ].map((item) => (
                              <div key={item.key} className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-semibold">{item.label}</p>
                                  <p className="text-[11px] text-muted-foreground">{item.sub}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => setTravellers(prev => ({ ...prev, [item.key]: Math.max(item.key === 'adults' ? 1 : 0, (prev as any)[item.key] - 1) }))}
                                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm font-bold w-4 text-center">{(travellers as any)[item.key]}</span>
                                  <button
                                    onClick={() => setTravellers(prev => ({ ...prev, [item.key]: (prev as any)[item.key] + 1 }))}
                                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="umrah-contact-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Contact No.</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <Input id="umrah-contact-input" name="phone" autoComplete="tel" placeholder="+92 300 1234567" type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border focus-visible:ring-primary/20 transition-all text-sm font-medium" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-4">
                    <Button
                      onClick={() => setShowInquiryModal(true)}
                      disabled={!isUmrahValid()}
                      className="w-full md:w-auto h-14 px-10 rounded-2xl bg-red-600 hover:bg-red-700 text-white shadow-glow hover:scale-[1.02] transition-all shine border-none disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      <Moon className="mr-2" size={18} />
                      Check Package Details
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === "visa" && (
                <motion.div
                  key="visa"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                    <div className="relative group lg:col-span-2">
                      <Label htmlFor="visa-destination-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Destination Country</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <Input
                          id="visa-destination-input"
                          name="destination"
                          autoComplete="off"
                          placeholder="Where do you want to go? (e.g. UK, USA, Canada)"
                          value={visaSearch}
                          onChange={(e) => {
                            setVisaSearch(e.target.value);
                            setShowVisaSuggestions(true);
                          }}
                          onFocus={() => setShowVisaSuggestions(true)}
                          className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border pr-10"
                        />
                        {visaSearch && (
                          <button
                            onClick={() => {
                              setVisaSearch("");
                              setShowVisaSuggestions(false);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X size={16} />
                          </button>
                        )}
                        {showVisaSuggestions && filteredVisaCountries.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-border z-[110] overflow-hidden py-2 animate-in fade-in zoom-in duration-200 max-h-[300px] overflow-y-auto custom-scrollbar">
                            {filteredVisaCountries.map((country) => (
                              <button
                                key={`${country.code}-${country.name}`}
                                onClick={() => {
                                  setVisaSearch(country.name);
                                  setShowVisaSuggestions(false);
                                  navigateToCountry(country);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-secondary/50 flex items-center gap-3 group/item transition-all duration-300"
                              >
                                <img
                                  src={`https://flagcdn.com/w40/${country.code}.png`}
                                  alt={country.name}
                                  className="w-6 h-4 object-cover rounded-sm shadow-sm border border-border/50 shrink-0"
                                />
                                <span className="text-sm font-bold group-hover/item:text-primary transition-colors">{country.name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="visa-type-select" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Visa Type</Label>
                      <Select value={visaType || "tourist"} onValueChange={setVisaType}>
                        <SelectTrigger id="visa-type-select" className="w-full h-14 rounded-2xl bg-secondary/20 border-border focus:ring-primary/20">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tourist">Tourist Visa</SelectItem>
                          <SelectItem value="business">Business Visa</SelectItem>
                          <SelectItem value="student">Student Visa</SelectItem>
                          <SelectItem value="work">Work Visa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="visa-contact-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Contact No.</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <Input id="visa-contact-input" name="phone" autoComplete="tel" placeholder="+92 300 1234567" type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-4 mt-6">
                    <Button
                      onClick={handleVisaInquiry}
                      disabled={!isVisaValid()}
                      className={cn(
                        "w-full md:w-auto h-14 px-8 rounded-2xl font-bold transition-all flex items-center gap-2 border-none",
                        isVisaValid()
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-glow hover:scale-[1.02]"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      )}
                    >
                      <MessageCircle size={18} />
                      Connect to Representative
                    </Button>
                    <Button
                      onClick={() => navigate({ to: "/profile-assessment" })}
                      disabled={!isVisaValid()}
                      className="w-full md:w-auto h-14 px-10 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white shadow-glow hover:scale-[1.02] transition-all shine border-none disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      <Stamp className="mr-2" size={18} />
                      Check Visa Eligibility
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === "hotel" && (
                <motion.div
                  key="hotel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                    <div className="relative group lg:col-span-2">
                      <Label htmlFor="hotel-destination-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Destination or Hotel Name</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <Input
                          id="hotel-destination-input"
                          name="hotel-search"
                          autoComplete="off"
                          placeholder="City, Area or Specific Hotel"
                          value={hotelSearch}
                          onChange={(e) => {
                            setHotelSearch(e.target.value);
                            setShowHotelSuggestions(true);
                          }}
                          onFocus={() => setShowHotelSuggestions(true)}
                          className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border pr-10"
                        />
                        {hotelSearch && (
                          <button
                            onClick={() => {
                              setHotelSearch("");
                              setShowHotelSuggestions(false);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X size={16} />
                          </button>
                        )}
                        {showHotelSuggestions && filteredHotelDestinations.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-border z-[110] overflow-hidden py-2 animate-in fade-in zoom-in duration-200 max-h-[300px] overflow-y-auto custom-scrollbar">
                            {filteredHotelDestinations.map((d) => (
                              <button
                                key={`${d.i}-${d.n}`}
                                onClick={() => {
                                  setHotelSearch(d.m || d.n);
                                  setShowHotelSuggestions(false);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-secondary/50 flex items-center gap-3 group/item transition-colors"
                              >
                                <div className="min-w-0">
                                  <p className="text-sm font-bold group-hover/item:text-primary transition-colors truncate">{d.m || d.n}</p>
                                  <p className="text-[11px] text-muted-foreground truncate">{d.c}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="hotel-dates-btn" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Check-in / Check-out</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button id="hotel-dates-btn" variant="outline" className="w-full h-14 pl-12 justify-start text-left font-medium rounded-2xl bg-secondary/20 border-border hover:bg-secondary/30">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                            <span className="text-xs">
                              {hotelRange?.from ? (
                                hotelRange.to ? `${format(hotelRange.from, "MMM dd")} - ${format(hotelRange.to, "MMM dd")}` : format(hotelRange.from, "MMM dd")
                              ) : "Select Dates"}
                            </span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-border" align="start">
                          <CalendarComponent
                            initialFocus
                            mode="range"
                            defaultMonth={hotelRange?.from}
                            selected={hotelRange as any}
                            onSelect={setHotelRange as any}
                            numberOfMonths={1}
                            disabled={(date) => date < startOfToday()}
                            className="rounded-2xl"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="hotel-guests-btn" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Guests & Rooms</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button id="hotel-guests-btn" variant="outline" className="w-full h-14 pl-12 justify-start text-left font-medium rounded-2xl bg-secondary/20 border-border hover:bg-secondary/30">
                            <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                            <span className="text-sm">
                              {hotelGuests.adults + hotelGuests.children} Guests, {hotelRooms} Room{hotelRooms > 1 ? 's' : ''}
                            </span>
                            <ChevronDown size={14} className="ml-auto opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-4 rounded-2xl bg-white shadow-2xl border-border" align="end">
                          <div className="space-y-4">
                            <p className="font-bold text-sm">Select Guests & Rooms</p>

                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold">Rooms</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => setHotelRooms(prev => Math.max(1, prev - 1))}
                                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                >
                                  -
                                </button>
                                <span className="text-sm font-bold w-4 text-center">{hotelRooms}</span>
                                <button
                                  onClick={() => setHotelRooms(prev => prev + 1)}
                                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {[
                              { label: "Adults", sub: "12+ yrs", key: "adults" },
                              { label: "Children", sub: "2-12 yrs", key: "children" },
                            ].map((item) => (
                              <div key={item.key} className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-semibold">{item.label}</p>
                                  <p className="text-[11px] text-muted-foreground">{item.sub}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => setHotelGuests(prev => ({ ...prev, [item.key]: Math.max(item.key === 'adults' ? 1 : 0, (prev as any)[item.key] - 1) }))}
                                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm font-bold w-4 text-center">{(hotelGuests as any)[item.key]}</span>
                                  <button
                                    onClick={() => setHotelGuests(prev => ({ ...prev, [item.key]: (prev as any)[item.key] + 1 }))}
                                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 mt-4">
                    <div className="relative group">
                      <Label htmlFor="hotel-category-select" className="text-[11px] uppercase tracking-wider text-muted-foreground  mb-1 block">Hotel Category</Label>
                      <Select value={hotelCategory || "4-star"} onValueChange={setHotelCategory}>
                        <SelectTrigger id="hotel-category-select" className="w-full h-14 rounded-2xl bg-secondary/20 border-border focus:ring-primary/20">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hostel">Hostel / Shared</SelectItem>
                          <SelectItem value="2-star">2 Star Hotel</SelectItem>
                          <SelectItem value="3-star">3 Star Hotel</SelectItem>
                          <SelectItem value="4-star">4 Star Hotel</SelectItem>
                          <SelectItem value="5-star">5 Star Luxury</SelectItem>
                          <SelectItem value="boutique">Boutique / Guest House</SelectItem>
                          <SelectItem value="apartment">Hotel Apartment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="hotel-budget-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Budget (Optional)</Label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold text-sm">PKR</div>
                        <Input
                          id="hotel-budget-input"
                          placeholder="e.g. 50,000"
                          value={hotelBudget}
                          onChange={(e) => setHotelBudget(e.target.value)}
                          className="pl-14 h-14 rounded-2xl bg-secondary/20 border-border focus-visible:ring-primary/20 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <Label htmlFor="hotel-contact-input" className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 block">Contact No.</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <Input id="hotel-contact-input" name="phone" autoComplete="tel" placeholder="+92 300 1234567" type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="pl-12 h-14 rounded-2xl bg-secondary/20 border-border" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-4">
                    <Button
                      onClick={handleGeneralInquiry}
                      disabled={!isHotelValid()}
                      className="w-full md:w-auto h-14 px-10 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-glow hover:scale-[1.02] transition-all shine border-none disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      <Search className="mr-2" size={18} />
                      Find Best Hotels
                    </Button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-12 transition-all duration-500 px-4 pb-4">
        <div className="flex items-center gap-4 sm:gap-6 bg-slate-900 px-5 sm:px-8 py-4 sm:py-5 rounded-[2rem] border border-white/10 shadow-glow group hover:bg-slate-800 transition-all cursor-default">
          <img
            src="https://developer.iata.org/globalassets/iata/general/brand_icons/white_iata_logo_rgb.png"
            alt="IATA Authorized Agent"
            className="h-10 w-auto opacity-100 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 leading-none mb-1.5">Accredited Agent</span>
            <span className="text-lg font-bold text-white tracking-tight leading-none">IATA Member</span>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-[calc(100vw-24px)] sm:w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="bg-primary p-5 sm:p-6 text-white relative shrink-0">
                <button
                  onClick={() => setShowInquiryModal(false)}
                  className="absolute right-4 top-4 text-white/70 hover:text-white p-1"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
                <h3 className="text-xl sm:text-2xl font-black mb-1 pr-6">Travel Inquiry</h3>
                <p className="text-white/80 text-xs sm:text-sm">Send your details to our expert via WhatsApp</p>
              </div>

              <div className="p-4 sm:p-8 space-y-4 overflow-y-auto custom-scrollbar">
                <div className="bg-secondary/30 rounded-2xl p-3 sm:p-4 border border-border mb-2">
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold mb-3">
                    Choose Your Travel Expert
                  </p>
                  <div className="space-y-3">
                    {(activeTab === 'umrah' ? [
                      { name: "Hammad Ahmed", role: "Umrah Specialist", phone: "+923325500377" }
                    ] : activeTab === 'flights' ? [
                      { name: "Hammad Ahmed", role: "Ticketing Officer", phone: "+923325500377" },
                      { name: "Noor Ul Huda", role: "Ticketing Officer", phone: "+923315500177" }
                    ] : [
                      { name: "Hammad Ahmed", role: "Travel Specialist", phone: "+923325500377" },
                      { name: "Noor Ul Huda", role: "Visa Expert", phone: "+923315500177" },
                      { name: "Mujtaba", role: "Visa Representative", phone: "+923365500477" }
                    ]).map((rep) => (
                      <a
                        key={rep.name}
                        href={getInquiryMessage(rep.phone)}
                        onClick={() => {
                          setShowInquiryModal(false);
                          triggerLiveNotification("You", "Your Location", activeTab === "umrah" ? "Umrah 15-Day Package" : activeTab === "flights" ? `${fromSearch || "Lahore"} to ${toSearch || "London"} Flight` : "New Query");
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 bg-white border border-border hover:border-emerald-500 rounded-2xl transition-all group/wa"
                      >
                        <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-emerald-50 flex items-center justify-center group-hover/wa:bg-emerald-500 group-hover/wa:text-white transition-colors">
                          <MessageCircle size={20} className="text-emerald-600 group-hover/wa:text-white sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <p className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-tighter truncate">{rep.role}</p>
                          <p className="text-[15px] sm:text-lg font-black text-foreground truncate">{rep.name}</p>
                        </div>
                        <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest font-bold opacity-50">
                  Your journey starts with {COMPANY.name}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
