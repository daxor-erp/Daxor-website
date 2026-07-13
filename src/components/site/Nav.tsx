import { Link } from "@tanstack/react-router";
import { useState, type ReactElement } from "react";

interface NavProps {
  variant?: "dark" | "light";
}

// ── Icons ────────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const icons: Record<string, ReactElement> = {
  ai: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" strokeLinejoin="round" />
    </svg>
  ),
  analytics: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 17l4-8 4 5 4-10 4 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dashboards: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  finance: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 7H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-4M9 7V5a2 2 0 014 0v2M9 7h6" strokeLinecap="round" />
    </svg>
  ),
  inventory: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cloud: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M17.5 19H9a7 7 0 110-14 7 7 0 016.71 5H17.5a4.5 4.5 0 010 9z" strokeLinejoin="round" />
    </svg>
  ),
  migration: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  training: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinejoin="round" />
      <path d="M12 14l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z" strokeLinejoin="round" />
    </svg>
  ),
  mlai: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
    </svg>
  ),
  about: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  ),
  cases: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2M9 4h6a1 1 0 010 2H9a1 1 0 010-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  security: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2l7 4v6c0 4.5-3 8.5-7 10C8 20.5 5 16.5 5 12V6l7-4z" strokeLinejoin="round" />
    </svg>
  ),
  contact: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinejoin="round" />
    </svg>
  ),
};

// ── Mega-menu data ────────────────────────────────────────────────────────────
const productSections = [
  {
    heading: "INTELLIGENCE",
    items: [
      { name: "Daxor AI", desc: "Intelligent ERP copilot powered by AI", href: "/ai", icon: "ai" },
      { name: "Analytics", desc: "Real-time business insights", href: "/analytics", icon: "analytics" },
      { name: "Dashboards", desc: "Live operational views", href: "/dashboards", icon: "dashboards" },
    ],
  },
  {
    heading: "ERP MODULES",
    items: [
      { name: "Finance & Accounting", desc: "GST · TDS · e-Invoice automation", href: "/product", icon: "finance" },
      { name: "Inventory & Orders", desc: "End-to-end supply chain visibility", href: "/product", icon: "inventory" },
      { name: "Platform Overview", desc: "See every module in one place", href: "/product", icon: "dashboards" },
    ],
  },
];

const serviceSections = [
  {
    heading: "SERVICES",
    items: [
      { name: "Cloud Consulting", desc: "Move to cloud, faster", href: "/services/cloud-consulting", icon: "cloud" },
      { name: "Data Migration", desc: "Migrate from legacy systems", href: "/services/data-migration", icon: "migration" },
      { name: "Corporate Training", desc: "Upskill your teams on modern data", href: "/services/training", icon: "training" },
      { name: "AI/ML Integration", desc: "Embed AI across your ERP workflows", href: "/services/ai-ml", icon: "mlai" },
    ],
  },
];

const companyItems = [
  { name: "About Us", desc: "Our story, mission, and team", href: "/about", icon: "about" },
  { name: "Case Studies", desc: "How customers use Daxor", href: "/case-studies", icon: "cases" },
  { name: "Internship", desc: "Join India's AI-native ERP team", href: "/internship", icon: "training" },
  { name: "Security", desc: "ISO 27001 · VPC-isolated", href: "/security", icon: "security" },
  { name: "Contact Sales", desc: "Talk to us about your roadmap", href: "/contact", icon: "contact" },
];

// ── Mega menu panel ───────────────────────────────────────────────────────────
function MegaMenuProduct() {
  return (
    <div className="absolute top-full left-0 right-0 z-50 border-b border-border bg-white shadow-lg">
      <div className="container-page py-8">
        <div className="grid grid-cols-[1fr_260px] gap-8">
          <div className="grid grid-cols-2 gap-8">
            {productSections.map((sec) => (
              <div key={sec.heading}>
                <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                  {sec.heading}
                </p>
                <div className="space-y-1">
                  {sec.items.map((item) => (
                    <Link
                      key={item.href + item.name}
                      to={item.href}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:border-[color:var(--teal-mid)] group-hover:text-[color:var(--teal-mid)] transition-colors">
                        {icons[item.icon]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right panel */}
          <div className="rounded-2xl border border-border bg-gray-50 p-5 flex flex-col">
            <div className="rounded-xl border border-border bg-white overflow-hidden mb-4 flex-1 flex items-center justify-center min-h-[100px]">
              <div className="w-full px-4 py-3 text-center">
                <div className="flex items-center justify-between border-b border-border pb-2 mb-2 text-[10px] text-muted-foreground">
                  <span>Daxor ERP</span>
                  <span>Dashboard</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {["₹56,209", "₹42,051", "₹82,051"].map((v) => (
                    <div key={v} className="rounded bg-[color:var(--teal-deep)]/10 p-1.5">
                      <p className="text-[8px] text-muted-foreground">Revenue</p>
                      <p className="text-[10px] font-medium text-[color:var(--teal-deep)]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">What's new on Daxor</p>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              See Daxor in action and discover how AI insights can elevate your team's work.
            </p>
            <Link
              to="/contact"
              className="text-xs font-medium text-[color:var(--teal-mid)] underline underline-offset-2 hover:text-[color:var(--teal-deep)]"
            >
              Request demo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaMenuServices() {
  return (
    <div className="absolute top-full left-0 right-0 z-50 border-b border-border bg-white shadow-lg">
      <div className="container-page py-8">
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          {serviceSections[0].items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-gray-50 transition-colors group"
            >
              <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:border-[color:var(--teal-mid)] group-hover:text-[color:var(--teal-mid)] transition-colors">
                {icons[item.icon]}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaMenuCompany() {
  return (
    <div className="absolute top-full left-0 right-0 z-50 border-b border-border bg-white shadow-lg">
      <div className="container-page py-8">
        <div className="grid grid-cols-2 gap-4 max-w-xl">
          {companyItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-gray-50 transition-colors group"
            >
              <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:border-[color:var(--teal-mid)] group-hover:text-[color:var(--teal-mid)] transition-colors">
                {icons[item.icon]}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Nav ──────────────────────────────────────────────────────────────────
export function Nav({ variant = "dark" }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<"product" | "services" | "company" | null>(null);
  const isDark = variant === "dark";

  const linkClass = isDark
    ? "text-white/80 hover:text-white transition-colors text-sm"
    : "text-foreground/70 hover:text-foreground transition-colors text-sm";

  const brandClass = isDark ? "text-white" : "text-foreground";

  const headerClass = isDark
    ? "absolute inset-x-0 top-0 z-40"
    : "sticky top-0 z-40 bg-white border-b border-border";

  return (
    <header
      className={headerClass}
      onMouseLeave={() => setActive(null)}
    >
      {isDark && (
        <div className="bg-black/30 backdrop-blur-sm border-b border-white/5">
          <div className="container-page py-2.5 text-center text-xs text-white/80 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--mint)] animate-pulse" />
            Daxor ERP — AI-native ERP, founded 2024 · built in Bengaluru
            <Link to="/about" className="underline underline-offset-2 hover:text-white ml-1">
              Learn more
            </Link>
          </div>
        </div>
      )}

      <div className="container-page flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-2 shrink-0 ${brandClass}`}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path d="M13 2 L23 8 V18 L13 24 L3 18 V8 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 8 L18 11 V15 L13 18 L8 15 V11 Z" fill="currentColor" />
          </svg>
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Daxor
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { key: "product", label: "Product" },
            { key: "services", label: "Services" },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`${linkClass} inline-flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors`}
              onMouseEnter={() => setActive(key as typeof active)}
            >
              {label}
              <span className={`transition-transform duration-150 ${active === key ? "rotate-180" : ""}`}>
                <ChevronDown />
              </span>
            </button>
          ))}

          <Link
            to="/case-studies"
            className={`${linkClass} px-3 py-2 rounded-lg hover:bg-black/5 transition-colors`}
            onMouseEnter={() => setActive(null)}
          >
            Customers
          </Link>

          <button
            className={`${linkClass} inline-flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors`}
            onMouseEnter={() => setActive("company")}
          >
            Company
            <span className={`transition-transform duration-150 ${active === "company" ? "rotate-180" : ""}`}>
              <ChevronDown />
            </span>
          </button>

          <Link
            to="/pricing"
            className={`${linkClass} px-3 py-2 rounded-lg hover:bg-black/5 transition-colors`}
            onMouseEnter={() => setActive(null)}
          >
            Pricing
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/" className={`${linkClass} inline-flex items-center gap-1.5 px-2 py-2`}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
            </svg>
            Log in
          </Link>
          <Link
            to="/contact"
            className={
              isDark
                ? "inline-flex items-center rounded-lg bg-white text-[color:var(--teal-deep)] px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
                : "inline-flex items-center rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/85 transition"
            }
          >
            Request demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${brandClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mega menus (desktop) */}
      {active === "product" && <MegaMenuProduct />}
      {active === "services" && <MegaMenuServices />}
      {active === "company" && <MegaMenuCompany />}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white text-foreground border-t border-border">
          <div className="container-page py-4 flex flex-col gap-3 text-sm">
            <p className="font-medium text-xs uppercase tracking-widest text-muted-foreground mt-1">Product</p>
            {productSections.flatMap((s) => s.items).map((p) => (
              <Link key={p.href + p.name} to={p.href} onClick={() => setMobileOpen(false)} className="pl-3 text-foreground/80">
                {p.name}
              </Link>
            ))}
            <p className="font-medium text-xs uppercase tracking-widest text-muted-foreground mt-2">Services</p>
            {serviceSections[0].items.map((s) => (
              <Link key={s.href} to={s.href} onClick={() => setMobileOpen(false)} className="pl-3 text-foreground/80">
                {s.name}
              </Link>
            ))}
            <Link to="/case-studies" onClick={() => setMobileOpen(false)} className="font-medium mt-1">Customers</Link>
            <p className="font-medium text-xs uppercase tracking-widest text-muted-foreground mt-2">Company</p>
            {companyItems.map((c) => (
              <Link key={c.href} to={c.href} onClick={() => setMobileOpen(false)} className="pl-3 text-foreground/80">
                {c.name}
              </Link>
            ))}
            <Link to="/internship" onClick={() => setMobileOpen(false)} className="pl-3 text-foreground/80">Internship</Link>
            <Link to="/pricing" onClick={() => setMobileOpen(false)} className="mt-2 font-medium">Pricing</Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center rounded-lg bg-foreground text-background px-4 py-2 font-medium w-fit mt-2"
            >
              Request demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
