import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-3">DaxorAI<span className="opacity-50">.</span></h3>
          <p className="text-sm opacity-60 leading-relaxed">
            AI-native ERP platform and digital transformation partner. Bengaluru, India.
          </p>
        </div>
        {[
          {
            title: "Product",
            links: ["Daxor ERP", "AI Assistant", "Data Assistant", "Modules", "Pricing"],
          },
          {
            title: "Services",
            links: ["Consulting", "Migration", "Corporate Training", "Microsoft Fabric", "Snowflake"],
          },
          {
            title: "Company",
            links: ["About", "Careers", "Contact", "Privacy", "Terms"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-surface-dark-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-40">
          © 2026 Daxor Technologies Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-xs opacity-40 font-mono">
          Bengaluru, Karnataka, India
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
