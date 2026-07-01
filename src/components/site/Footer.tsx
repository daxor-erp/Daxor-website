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
              AI-native ERP platform and digital transformation partner. Bengaluru, India.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/product" className="hover:text-white">
                  Daxor AI
                </Link>
              </li>
              <li>
                <Link to="/" hash="product" className="hover:text-white">
                  ERP Modules
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/cloud-consulting" className="hover:text-white">
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/data-migration" className="hover:text-white">
                  Data Migration
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="hover:text-white">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link to="/services/ai-ml" className="hover:text-white">
                  AI/ML Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-white">
                  Internship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">Get started</h4>
            <p className="text-sm text-white/60 mb-4">Talk to us about your data and AI roadmap.</p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white text-[color:var(--teal-deep)] px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Request demo
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Daxor Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
