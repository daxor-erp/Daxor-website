import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface NavProps {
  variant?: "dark" | "light";
}

const serviceLinks = [
  { name: "Cloud Consulting", href: "/services/cloud-consulting" },
  { name: "Data Migration", href: "/services/data-migration" },
  { name: "Corporate Training", href: "/services/training" },
  { name: "AI/ML Integration", href: "/services/ai-ml" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Security", href: "/security" },
  { name: "Contact Sales", href: "/contact" },
];

export function Nav({ variant = "dark" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const isDark = variant === "dark";

  const linkClass = isDark
    ? "text-white/80 hover:text-white transition-colors text-sm"
    : "text-foreground/70 hover:text-foreground transition-colors text-sm";

  const brandClass = isDark ? "text-white" : "text-foreground";

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      {isDark && (
        <div className="bg-black/30 backdrop-blur-sm border-b border-white/5">
          <div className="container-page py-2.5 text-center text-xs text-white/80 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--mint)] animate-pulse" />
            Daxor ERP — AI-native ERP, built in Bengaluru
            <Link to="/about" className="underline underline-offset-2 hover:text-white ml-1">
              Learn more
            </Link>
          </div>
        </div>
      )}
      <div className="container-page flex items-center justify-between py-5">
        <Link to="/" className={`flex items-center gap-2 ${brandClass}`}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path d="M13 2 L23 8 V18 L13 24 L3 18 V8 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 8 L18 11 V15 L13 18 L8 15 V11 Z" fill="currentColor" />
          </svg>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Daxor
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/product" className={linkClass}>
            Product
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className={`${linkClass} inline-flex items-center gap-1`}>
              Services
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3 w-60">
                <div className="rounded-2xl bg-background text-foreground border border-border shadow-[var(--shadow-elegant)] p-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block rounded-xl px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button className={`${linkClass} inline-flex items-center gap-1`}>
              Company
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 pt-3 w-56">
                <div className="rounded-2xl bg-background text-foreground border border-border shadow-[var(--shadow-elegant)] p-2">
                  {companyLinks.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      className="block rounded-xl px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/pricing" className={linkClass}>
            Pricing
          </Link>
          <Link to="/internship" className={linkClass}>
            Internship
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/" className={linkClass}>
            Log in
          </Link>
          <Link
            to="/contact"
            className={
              isDark
                ? "inline-flex items-center rounded-full bg-white text-[color:var(--teal-deep)] px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
                : "inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition"
            }
          >
            Request demo
          </Link>
        </div>

        <button
          className={`md:hidden ${brandClass}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background text-foreground border-t border-border">
          <div className="container-page py-4 flex flex-col gap-3 text-sm">
            <Link to="/product" onClick={() => setOpen(false)} className="font-medium">
              Product
            </Link>
            <Link to="/services" onClick={() => setOpen(false)} className="font-medium mt-2">
              Services
            </Link>
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setOpen(false)}
                className="pl-4 text-muted-foreground"
              >
                {s.name}
              </Link>
            ))}
            <p className="font-medium mt-2">Company</p>
            {companyLinks.map((c) => (
              <Link
                key={c.href}
                to={c.href}
                onClick={() => setOpen(false)}
                className="pl-4 text-muted-foreground"
              >
                {c.name}
              </Link>
            ))}
            <Link to="/pricing" onClick={() => setOpen(false)} className="mt-2">
              Pricing
            </Link>
            <Link to="/internship" onClick={() => setOpen(false)}>
              Internship
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 font-medium w-fit mt-1"
            >
              Request demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
