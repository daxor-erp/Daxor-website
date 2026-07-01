import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing — Daxor" },
      {
        name: "description",
        content:
          "Powerful plans for every enterprise. From Fabric Foundations to Enterprise-scale — transparent pricing with implementation included.",
      },
      { property: "og:title", content: "Pricing — Daxor" },
      {
        property: "og:description",
        content: "Three plans built for teams migrating and scaling on Microsoft Fabric.",
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
    name: "Foundations",
    tagline: "For teams launching Fabric with a solid, right-sized foundation.",
    highlighted: false,
    features: [
      "Lakehouse & Data Warehouse setup",
      "Up to 3 core pipelines",
      "Security & governance baseline",
      "First use case delivered",
    ],
  },
  {
    name: "Jumpstart",
    tagline: "For growing teams accelerating deployment across business units.",
    highlighted: true,
    features: [
      "Everything in Foundations",
      "Up to 20 pipelines & data sources",
      "Team enablement & training",
      "Multi-workspace governance",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For larger orgs consolidating legacy stacks and preparing for AI.",
    highlighted: false,
    features: [
      "Everything in Jumpstart",
      "Unlimited pipelines & sources",
      "AI enablement (Copilot, RAG)",
      "24/7 Platform Operations",
      "SAML SSO & advanced controls",
    ],
  },
];

const compareRows: {
  section: string;
  rows: [string, string | boolean, string | boolean, string | boolean][];
}[] = [
  {
    section: "Fabric setup",
    rows: [
      ["Lakehouse & Data Warehouse", true, true, true],
      ["Workspaces", "Up to 3", "Up to 20", "Unlimited"],
      ["Governance baseline", true, true, true],
      ["Multi-region deployment", false, true, true],
    ],
  },
  {
    section: "Data & pipelines",
    rows: [
      ["Data pipelines", "Up to 3", "Up to 20", "Unlimited"],
      ["Bank & tech integrations", "Core", "13,000+", "13,000+"],
      ["Real-time streaming", false, true, true],
      ["Multi-book / multi-currency", false, true, true],
    ],
  },
  {
    section: "AI enablement",
    rows: [
      ["Copilot setup", false, "Basic", "Advanced"],
      ["RAG-enabled integrations", false, false, true],
      ["Anomaly detection", false, true, true],
      ["Self-service data chat", false, false, true],
    ],
  },
  {
    section: "Security & support",
    rows: [
      ["Authentication", "SSO", "SSO", "SAML SSO"],
      ["SOC 1, SOC 2", true, true, true],
      ["Implementation & training", true, true, true],
      ["Support", "Business hours", "Priority", "24/7 dedicated"],
    ],
  },
];

const faqs = [
  {
    q: "Do I have to pay for implementation?",
    a: "No. Implementation is included in every plan. We don't believe in charging by the hour and making money through implementation — we're as eager to get you to success as you are.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, at any time. Contact your Daxor engagement lead and we'll adjust your plan for the next billing cycle.",
  },
  {
    q: "How long does a typical Fabric migration take?",
    a: "First data ingested in 24 hours. Live on Fabric in 4–6 weeks for most Foundations engagements. Enterprise migrations range 12–20 weeks depending on legacy scope.",
  },
  {
    q: "Do you offer a free trial?",
    a: "No. We invest substantial resources into our Fabric-certified engineering teams to get your enterprise set up correctly the first time. We're happy to run a paid pilot on a single workload.",
  },
  {
    q: "How do I know if I need Jumpstart or Enterprise?",
    a: "Jumpstart gives you the tools to consolidate data across up to 20 workspaces and enable your internal team. Enterprise supports unlimited scale, advanced AI enablement, and 24/7 Platform Operations.",
  },
  {
    q: "How do you protect our data?",
    a: "Daxor operates within your Microsoft tenant. We're SOC 2 audited, and every engagement follows least-privilege access, encryption at rest and in transit, and full audit trails.",
  },
  {
    q: "Can I integrate Fabric with our existing stack?",
    a: "Yes. Fabric supports 13,000+ native integrations. If you have something bespoke, our open connector framework offers full extendability.",
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
            Powerful plans for every enterprise.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Scale to enterprise and beyond with 13,000+ integrations, direct Fabric expert support,
            and best-in-class security.
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
                  Daxor <span className="text-[color:var(--teal-mid)]">{t.name}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground min-h-[3rem]">{t.tagline}</p>

                <Link
                  to="/"
                  hash="contact"
                  className={`mt-6 rounded-full px-4 py-3 text-sm font-medium text-center transition ${
                    t.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  Schedule demo
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

                <a
                  href="#compare"
                  className="mt-8 text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  Compare all features
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="py-24 border-t border-border">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-12">
            Compare plans
          </h2>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 text-sm text-muted-foreground font-normal w-1/3">
                    Features
                  </th>
                  {tiers.map((t) => (
                    <th key={t.name} className="text-left py-4 pl-4 text-sm font-medium">
                      Daxor <span className="text-[color:var(--teal-mid)]">{t.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((section) => (
                  <Fragment key={section.section}>
                    <tr className="bg-secondary/40">
                      <td
                        colSpan={4}
                        className="py-3 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        {section.section}
                      </td>
                    </tr>
                    {section.rows.map((row, i) => (
                      <tr key={`${section.section}-${i}`} className="border-b border-border/60">
                        <td className="py-4 text-sm">{row[0]}</td>
                        {[row[1], row[2], row[3]].map((cell, j) => (
                          <td key={j} className="py-4 pl-4 text-sm">
                            {typeof cell === "boolean" ? (
                              cell ? (
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 16 16"
                                  className="text-[color:var(--teal-mid)]"
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
                              ) : (
                                <span className="text-muted-foreground/40">—</span>
                              )
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="py-24 bg-[color:var(--teal-deep)] text-white text-center">
        <div className="container-page">
          <p className="text-sm uppercase tracking-wider text-white/60">We've moved more than</p>
          <div
            className="mt-4 text-6xl md:text-8xl font-medium tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            8.1PB
          </div>
          <p className="mt-4 text-white/70">
            of enterprise data onto Microsoft Fabric — and we're just getting started.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            Schedule demo
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
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
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between gap-6 text-left"
      >
        <span className="font-medium tracking-tight text-lg">{q}</span>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className={`shrink-0 transition-transform ${open ? "rotate-45" : ""}`}
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </button>
      {open && <p className="pb-6 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}
