import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[color:var(--teal-deep)] text-white/80">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
                <path
                  d="M13 2 L23 8 V18 L13 24 L3 18 V8 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M13 8 L18 11 V15 L13 18 L8 15 V11 Z" fill="currentColor" />
              </svg>
              <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                Daxor
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              The modernization partner for teams migrating to Microsoft Fabric — securely, at
              scale.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/fabric-foundations" className="hover:text-white">
                  Fabric Foundations
                </Link>
              </li>
              <li>
                <Link to="/products/fabric-jumpstart" className="hover:text-white">
                  Fabric Jumpstart
                </Link>
              </li>
              <li>
                <Link to="/products/platform-operations" className="hover:text-white">
                  Platform Operations
                </Link>
              </li>
              <li>
                <Link to="/products/ai-enablement" className="hover:text-white">
                  AI Enablement
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" hash="customers" className="hover:text-white">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" hash="platform" className="hover:text-white">
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/" hash="contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Careers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/internship" className="hover:text-white">
                  Internship program
                </Link>
              </li>
              <li>
                <Link to="/internship" hash="tracks" className="hover:text-white">
                  Internship tracks
                </Link>
              </li>
              <li>
                <Link to="/internship" hash="apply" className="hover:text-white">
                  Apply now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Get started</h4>
            <p className="text-sm text-white/60 mb-4">
              Talk to a Fabric expert about your migration roadmap.
            </p>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center rounded-full bg-white text-[color:var(--teal-deep)] px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Schedule demo
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Daxor. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
