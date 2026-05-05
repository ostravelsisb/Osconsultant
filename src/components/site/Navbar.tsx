import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, Fragment } from "react";
import { Menu, X, ChevronDown, ChevronRight, Instagram, Youtube, Twitter, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/data/site";
import logo from "@/assets/logo.png";

const DESKTOP_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Services",
    children: [
      { to: "/visa-services", label: "Visa Services" },
      { to: "/countries", label: "Countries" },
      { to: "/air-ticketing", label: "Air Ticketing" },
      { to: "/umrah", label: "Umrah" },
      { to: "/travel-insurance", label: "Insurance" },
      { to: "/passport-services", label: "Passport" },
    ],
  },
  { to: "/profile-assessment", label: "Free Assessment" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Determine active path for the flight path indicator
  // For links with children, check if current path starts with any of the children
  const isActive = (link: typeof DESKTOP_LINKS[0]) => {
    if (link.to) {
      if (link.to === "/") return location.pathname === "/";
      return location.pathname.startsWith(link.to);
    }
    if (link.children) {
      return link.children.some((c) => location.pathname.startsWith(c.to));
    }
    return false;
  };

  return (
    <>
      {/* Flight Themed Navbar */}
      <nav className={`fixed w-full z-[100] flex justify-center px-4 transition-[top] duration-300 ${scrolled ? "top-4" : "top-4 md:top-[48px]"} overflow-visible`}>
        <div
          className={`relative flex items-center justify-between w-full max-w-7xl h-16 sm:h-18 rounded-full md:rounded-[50px_120px_50px_120px] px-6 sm:px-8 lg:px-10 overflow-visible transition-all duration-300 transform-gpu ${
            scrolled 
              ? "bg-slate-100/98 backdrop-blur-xl border-slate-300/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]" 
              : "bg-slate-50/95 backdrop-blur-lg border-slate-200/30 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)]"
          }`}
          style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
        >

          {/* Logo - "The Cockpit" */}
          <Link to="/" className="flex items-center gap-2 z-10 group">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
              <img
                src={logo}
                alt="Logo"
                className="h-6 w-auto object-contain invert brightness-0"
              />
            </div>
            <span
              className={`font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap transition-colors duration-300 ${scrolled ? "text-blue-900" : "text-white"}`}
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                textShadow: scrolled ? "none" : "0 1px 2px rgba(15, 23, 42, 0.15), 0 0 1px rgba(15, 23, 42, 0.1)" 
              }}
            >
              OS <span className="text-orange-500">Consultants</span>
            </span>
          </Link>

          {/* Navigation - "The Cabin" */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 z-10">
            {DESKTOP_LINKS.map((item) => {
              const active = isActive(item);
              const label = item.label;

              return (
                <li
                  key={label}
                  className="relative group cursor-pointer py-4"
                  onMouseEnter={() => {
                    setHoveredPath(label);
                    if (item.children) setActiveDropdown(label);
                  }}
                  onMouseLeave={() => {
                    setHoveredPath(null);
                    setActiveDropdown(null);
                  }}
                >
                  {item.children ? (
                    <span
                      className={`text-sm font-bold transition-colors duration-300 flex items-center gap-1 ${active
                        ? (scrolled ? "text-blue-600" : "text-orange-400")
                        : (scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400")
                        }`}
                      style={{ textShadow: scrolled ? "none" : "0 1px 2px rgba(15, 23, 42, 0.1), 0 0 1px rgba(15, 23, 42, 0.1)" }}
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className="opacity-60 transition-transform group-hover:rotate-180"
                      />
                    </span>
                  ) : (
                    <Link
                      to={item.to!}
                      className={`text-sm font-bold transition-colors duration-300 ${active
                        ? (scrolled ? "text-blue-600" : "text-orange-400")
                        : (scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400")
                        }`}
                      style={{ textShadow: scrolled ? "none" : "0 1px 2px rgba(15, 23, 42, 0.1), 0 0 1px rgba(15, 23, 42, 0.1)" }}
                    >
                      {label}
                    </Link>
                  )}

                  {/* Flight Path Indicator (●────✈────●) */}
                  {active && (
                    <motion.div
                      layoutId="flightPath"
                      className={`absolute bottom-1 left-0 right-0 flex items-center justify-between text-[10px] ${scrolled ? "text-blue-600" : "text-blue-500"}`}
                    >
                      <span>●</span>
                      <div className={`h-[1px] w-full relative ${scrolled ? "bg-blue-300" : "bg-blue-200"}`}>
                        <motion.span
                          initial={{ left: 0 }}
                          animate={{ left: "100%" }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className={`absolute -top-[7px] text-[12px] ${scrolled ? "text-blue-600" : "text-orange-400"}`}
                        >
                          ✈
                        </motion.span>
                      </div>
                      <span>●</span>
                    </motion.div>
                  )}

                  {/* Hover Jet Trail */}
                  {hoveredPath === label && !active && (
                    <motion.div
                      className="absolute bottom-2 left-0 w-full h-[2px] bg-orange-400/50 blur-[1px]"
                      layoutId="hoverTrail"
                    />
                  )}

                  {/* Dropdown for Services */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 10, x: "-50%" }}
                          onMouseEnter={() => setActiveDropdown(label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 mt-2 w-64 bg-white/98 backdrop-blur-2xl rounded-2xl border border-blue-100 shadow-2xl p-2 z-[110] flex flex-col gap-1"
                        >
                          {item.children.map((c, idx) => (
                            <Fragment key={c.to}>
                              {idx > 0 && (
                                <div className="mx-2 my-1 h-[1px] bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-transparent" />
                              )}
                              <Link
                                to={c.to}
                                activeOptions={{ exact: c.to === "/" }}
                                activeProps={{ className: "bg-blue-50 text-blue-600" }}
                                className="px-5 py-3 text-sm font-semibold text-slate-900 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all flex items-center justify-between whitespace-nowrap group/link"
                              >
                                {c.label}
                                <Plane
                                  size={16}
                                  className="opacity-0 group-hover/link:opacity-80 transition-all -rotate-45 text-orange-500 group-hover/link:translate-x-1"
                                />
                              </Link>
                            </Fragment>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA - "Takeoff Button" and Mobile Menu Toggle */}
          <div className="flex items-center gap-3 z-10">
            <Link
              to="/consultation"
              className="hidden sm:flex items-center h-10 relative group overflow-hidden bg-blue-600 px-6 rounded-full text-white text-sm font-bold shadow-lg hover:shadow-orange-500/20 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 text-sm whitespace-nowrap">Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-white/50 text-blue-900 shadow-sm transition-colors hover:bg-white active:scale-95"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>


        </div>
    </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-elevated z-[151] rounded-l-[3.5rem] border-l border-white/20 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <img
                        src={logo}
                        alt="Logo"
                        className="h-4 w-auto object-contain invert brightness-0"
                      />
                    </div>
                    <span
                      className="font-bold text-blue-900 tracking-tight text-lg uppercase"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      OS <span className="text-orange-500">Consultants</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-100 transition-colors text-gray-500"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="space-y-1">
                    {NAV_LINKS.map((l, i) => (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 + 0.1 }}
                      >
                        <Link
                          to={l.to}
                          activeOptions={{ exact: l.to === "/" }}
                          activeProps={{ className: "text-blue-600 bg-blue-50/50" }}
                          className="group flex items-center justify-between px-6 py-4 transition-all rounded-2xl hover:bg-gray-50"
                        >
                          <div className="flex items-baseline gap-4">
                            <span className="text-[10px] font-bold text-blue-300 tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-lg font-bold tracking-tight text-gray-800 group-hover:text-blue-600 transition-colors">
                              {l.label}
                            </span>
                          </div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform group-hover:translate-x-1">
                            <ChevronRight size={16} />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                  <Link
                    to="/consultation"
                    className="block w-full text-center mb-6 relative group overflow-hidden bg-blue-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <span className="relative z-10">Free Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>

                  <div className="flex gap-3 mb-6 justify-center">
                    {[
                      { Icon: Instagram, href: COMPANY.socials.instagram },
                      { Icon: Youtube, href: "#" },
                      { Icon: Twitter, href: COMPANY.socials.twitter },
                    ].map(({ Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm transition-transform active:scale-95 hover:text-blue-600 hover:border-blue-200"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>

                  <div className="space-y-4 text-center">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="block text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                    <p className="text-[11px] font-medium text-gray-400">
                      © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
