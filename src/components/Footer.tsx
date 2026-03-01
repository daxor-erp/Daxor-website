import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-display text-xl font-bold mb-3">erpflow.</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Streamline your business operations with our modern ERP solution.
          </p>
        </div>
        {[
          {
            title: "Product",
            links: ["Features", "Pricing", "Integrations", "Changelog"],
          },
          {
            title: "Company",
            links: ["About", "Blog", "Careers", "Contact"],
          },
          {
            title: "Legal",
            links: ["Privacy", "Terms", "Security"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-surface-dark-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs opacity-40">
          © 2026 erpflow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
