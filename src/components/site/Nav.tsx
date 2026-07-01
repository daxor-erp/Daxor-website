import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface NavProps {
  variant?: "dark" | "light";
}

export function Nav({ variant = "dark" }: NavProps) {
  const [open, setOpen] = useState(false);
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
            Daxor named Microsoft Fabric Featured Partner
            <Link to="/" className="underline underline-offset-2 hover:text-white ml-1">
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
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Daxor
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" hash="solutions" className={linkClass}>Solutions</Link>
          <Link to="/" hash="platform" className={linkClass}>Platform</Link>
          <Link to="/" hash="customers" className={linkClass}>Customers</Link>
          <Link to="/pricing" className={linkClass}>Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/" className={linkClass}>Sign in</Link>
          <Link
            to="/"
            hash="contact"
            className={
              isDark
                ? "inline-flex items-center rounded-full bg-white text-[color:var(--teal-deep)] px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
                : "inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition"
            }
          >
            Schedule demo
          </Link>
        </div>

        <button
          className={`md:hidden ${brandClass}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background text-foreground border-t border-border">
          <div className="container-page py-4 flex flex-col gap-3 text-sm">
            <Link to="/" hash="solutions" onClick={() => setOpen(false)}>Solutions</Link>
            <Link to="/" hash="platform" onClick={() => setOpen(false)}>Platform</Link>
            <Link to="/" hash="customers" onClick={() => setOpen(false)}>Customers</Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link to="/" hash="contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 font-medium w-fit">
              Schedule demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
