import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, Fragment } from "react";
import { Menu, X, ChevronDown, ChevronRight, Plane } from "lucide-react";
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

  return (
    <>
      <header
        className={`z-[100] transition-all duration-500 ${
          scrolled
            ? "fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl rounded-full bg-sky-100/70 dark:bg-blue-950/70 backdrop-blur-xl border border-sky-400/50 shadow-elevated h-16 w-[96%] px-1 duration-300 ease-in-out"
            : "sticky top-0 w-full bg-sky-500/10 backdrop-blur-md border-b border-sky-400/20 shadow-sm h-20"
        }`}
      >
        <div
          className={`container-px mx-auto flex items-center justify-between gap-2 lg:gap-4 xl:gap-8 transition-all duration-300 h-full max-w-7xl px-4 ${scrolled ? "px-6" : ""}`}
        >
          <Link to="/" className="group flex flex-shrink-0 items-center gap-3">
            <img
              src={logo}
              alt={COMPANY.name}
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block border-l border-border h-6 mx-1" />
            <span className="hidden sm:block leading-tight">
              <span
                className="block text-sm md:text-base xl:text-lg font-bold italic tracking-tight whitespace-nowrap uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                OS <span className="gradient-text-accent">Consultants</span>
              </span>
            </span>
          </Link>

          {/* Ultra-Clean Desktop Dropdown Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {DESKTOP_LINKS.map((l) =>
              l.children ? (
                <div
                  key={l.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(l.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-foreground/80 hover:text-primary transition-all rounded-full hover:bg-primary/5 select-none whitespace-nowrap">
                    {l.label}
                    <ChevronDown
                      size={14}
                      className="opacity-60 transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === l.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.12 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl border border-sky-200/50 p-2 shadow-elevated z-50 flex flex-col gap-1"
                      >
                        {l.children.map((c, idx) => (
                          <Fragment key={c.to}>
                            {idx > 0 && (
                              <div className="mx-2 my-1 h-[1.5px] bg-gradient-to-r from-blue-500 to-orange-500 opacity-70" />
                            )}
                            <Link
                              to={c.to}
                              activeOptions={{ exact: c.to === "/" }}
                              activeProps={{ className: "bg-primary/5 text-primary" }}
                              className="px-4 py-2.5 text-xs font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all flex items-center justify-between whitespace-nowrap"
                            >
                              {c.label}
                              <ChevronRight
                                size={14}
                                className="opacity-0 group-hover:opacity-40 transition-opacity"
                              />
                            </Link>
                          </Fragment>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-3 py-2 text-sm font-bold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-all whitespace-nowrap"
                  activeProps={{ className: "text-primary bg-primary/5" }}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              to="/consultation"
              className="relative inline-flex items-center gap-1 overflow-hidden rounded-full bg-primary px-4 py-2 text-[11px] xl:text-xs font-bold text-primary-foreground shadow-soft transition-all hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 shine whitespace-nowrap"
            >
              <span className="relative z-10">
                <span>Free Consultation</span>
              </span>
              <ChevronRight size={14} className="relative z-10" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-border bg-background/50 text-foreground shadow-sm transition-colors hover:bg-muted active:scale-95"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

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
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background shadow-elevated z-[151]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="OS Consultants Logo" className="h-8 w-auto" />
                    <span
                      className="font-bold italic tracking-tight text-lg uppercase"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      OS <span className="text-accent">Consultants</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-muted transition-colors"
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
                          activeProps={{ className: "bg-primary/5 text-primary" }}
                          className="flex items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
                        >
                          {l.label}
                          <ChevronRight size={18} className="opacity-40" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t border-border bg-muted/30">
                  <Link
                    to="/consultation"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform active:scale-[0.98]"
                  >
                    Free Consultation <ChevronRight size={18} />
                  </Link>
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" /> {COMPANY.address}
                    </div>
                    <p className="text-[10px] text-muted-foreground/60 text-center uppercase tracking-widest font-bold">
                      &copy; {new Date().getFullYear()} {COMPANY.name}
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
