import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing — Daxor ERP" },
      {
        name: "description",
        content:
          "Transparent pricing for Daxor ERP — from Starter to Enterprise. All plans include India GST/TDS compliance built in.",
      },
      { property: "og:title", content: "Pricing — Daxor ERP" },
      {
        property: "og:description",
        content: "From ERP subscriptions to enterprise deployments — pick what fits your business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const tiers = [
  {
    name: "Starter",
    price: "₹29,999",
    period: "/ month",
    highlighted: false,
    tagline: "For small businesses ready to move beyond spreadsheets and fragmented tools.",
    features: [
      "Up to 10 users",
      "Finance & Inventory modules",
      "Basic AI dashboards",
      "Email support (1 business day)",
    ],
  },
  {
    name: "Professional",
    price: "₹89,999",
    period: "/ month",
    highlighted: true,
    tagline:
      "For growing enterprises that need the full Daxor ERP suite with advanced AI capabilities.",
    features: [
      "Up to 50 users",
      "All 7 ERP modules",
      "AI Assistant (CFO · COO · Analyst)",
      "GST · TDS · e-Invoice compliance",
      "Priority support + 4-hour SLA",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    highlighted: false,
    tagline:
      "For large organisations needing custom modules, on-premise deployment, or dedicated infrastructure.",
    features: [
      "Unlimited users",
      "Custom ERP modules",
      "On-premise or private cloud",
      "Dedicated account manager",
    ],
  },
];

const addOns = [
  {
    name: "Data Migration",
    desc: "Migrate from Informatica, SSIS, or DataStage to Microsoft Fabric — fully managed by our engineers. Includes free assessment.",
    cta: "Book free assessment",
    href: "/services/data-migration",
  },
  {
    name: "Corporate Training",
    desc: "Hands-on training for your data teams — Microsoft Fabric, Snowflake, AWS, Azure. ₹49,999 per cohort (up to 20 seats).",
    cta: "Enquire now",
    href: "/services/training",
  },
];

const faqs = [
  {
    q: "Is implementation included in the price?",
    a: "Core onboarding is included in every plan; custom Enterprise work is scoped separately.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, at any time. Contact your Daxor account manager and we'll adjust your plan for the next billing cycle.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Professional plans include a free trial period. Starter and Enterprise plans include a guided pilot on a single workflow instead.",
  },
  {
    q: "Is Daxor ERP GST and TDS compliant out of the box?",
    a: "Yes. Automated GST returns (GSTR-1, 3B, 9), TDS/TCS computation, and e-invoicing with IRN/QR generation are built into every plan.",
  },
  {
    q: "How does Data Migration pricing work?",
    a: "Quoted after a free assessment. Most mid-market migrations complete in 6–12 weeks.",
  },
  {
    q: "What does Corporate Training cost?",
    a: "₹49,999 per cohort of up to 20 seats for a standard track (Microsoft Fabric, Snowflake, AWS/Azure, or Applied AI/ML). Custom programmes are quoted separately.",
  },
  {
    q: "How is our data secured?",
    a: "Deployed inside your cloud tenant — your data never leaves your VPC. ISO 27001 certified.",
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative pb-8"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.28 0.05 200) 0%, oklch(0.28 0.05 200) 40%, oklch(1 0 0) 100%)",
        }}
      >
        <Nav variant="dark" />
        <div className="container-page pt-40 pb-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[0.95] max-w-3xl mx-auto">
            Transparent pricing, no surprises.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Pick what fits your business — India compliance built into every plan.
          </p>
        </div>
      </div>

      {/* TIERS */}
      <section className="pb-24 -mt-6">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`relative rounded-3xl border p-8 bg-background flex flex-col ${
                  t.highlighted
                    ? "border-[color:var(--teal-mid)] shadow-[var(--shadow-elegant)] md:-translate-y-4"
                    : "border-border"
                }`}
              >
                {t.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[color:var(--mint)] text-[color:var(--teal-deep)] text-xs font-medium">
                    Most popular
                  </div>
                )}
                <div className="text-2xl md:text-3xl font-medium tracking-tight">
                  Daxor {t.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-medium tracking-tight">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground min-h-[3rem]">{t.tagline}</p>

                <Link
                  to="/contact"
                  className={`mt-6 rounded-full px-4 py-3 text-sm font-medium text-center transition ${
                    t.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {t.name === "Enterprise" ? "Book a meeting" : "Get started"}
                </Link>

                <ul className="mt-8 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="mt-0.5 text-[color:var(--teal-mid)] shrink-0"
                      >
                        <path
                          d="M13 4 L6 12 L3 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-24 border-t border-border">
        <div className="container-page max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-10">
            Add-on services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border p-8 bg-background">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  Add-on service
                </p>
                <h3 className="text-xl font-medium mb-2">{a.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{a.desc}</p>
                <Link
                  to={a.href}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition"
                >
                  {a.cta}
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-10">Pricing FAQ</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-6">
      <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
        <span className="font-medium tracking-tight text-lg">{q}</span>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="shrink-0 transition-transform group-open:rotate-45"
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </summary>
      <p className="pt-4 text-muted-foreground leading-relaxed">{a}</p>
    </details>
  );
}
