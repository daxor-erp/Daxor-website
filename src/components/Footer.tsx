import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-xl font-black mb-3">
            efficia<span className="text-primary">®</span>
          </h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Practical AI consulting and workflow automation for SMEs.
          </p>
        </div>
        {[
          {
            title: "Services",
            links: ["AI Strategy", "Workflow Automation", "Data Analytics", "Chatbot Development"],
          },
          {
            title: "Company",
            links: ["About", "Team", "Blog", "Contact"],
          },
          {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-[11px] mb-4 uppercase tracking-[0.15em] opacity-40">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
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
          © 2026 Efficia®. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] uppercase tracking-[0.15em] opacity-40 cursor-pointer hover:opacity-100 hover:text-primary transition-all">
            #AIConsulting
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] opacity-40 cursor-pointer hover:opacity-100 hover:text-primary transition-all">
            #WorkflowAutomation
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] opacity-40 cursor-pointer hover:opacity-100 hover:text-primary transition-all">
            #SMEs
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
