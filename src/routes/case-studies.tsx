import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudies,
  head: () => ({
    meta: [
      { title: "Case Studies — Daxor" },
      {
        name: "description",
        content:
          "How enterprises across manufacturing, finance, retail, and logistics use Daxor to cut costs, close faster, and compete smarter.",
      },
      { property: "og:title", content: "Case Studies — Daxor" },
      { property: "og:description", content: "Real results, real companies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
});

const cases = [
  {
    id: "mfg",
    tag: "Manufacturing",
    company: "Mid-size auto-components manufacturer",
    location: "Pune, India · 1,200 employees",
    challenge:
      "Running SAP ECC with a 3-day month-end close, no demand forecasting, and frequent stockouts costing ₹40L/month.",
    solution:
      "Migrated to Daxor ERP with AI demand forecasting on Microsoft Fabric. Automated GST/TDS compliance and real-time inventory dashboards.",
    results: [
      { metric: "3 days → 6 hrs", label: "month-end close" },
      { metric: "₹38L/mo", label: "stockout cost eliminated" },
      { metric: "94%", label: "forecast accuracy" },
      { metric: "18 months", label: "full payback" },
    ],
    quote:
      "Daxor gave us a demand forecasting engine that our SAP vendor quoted ₹2.5 Cr to build. It was live in 8 weeks.",
    author: "VP Supply Chain",
  },
  {
    id: "finserv",
    tag: "Financial Services",
    company: "NBFC with ₹500 Cr AUM",
    location: "Mumbai, India · 340 employees",
    challenge:
      "Manual reconciliation of 50,000+ daily transactions, audit failures due to missing trails, and no anomaly detection on disbursements.",
    solution:
      "Deployed Daxor AI Anomaly Detection on live transaction streams + automated Ind AS financial reporting.",
    results: [
      { metric: "99.2%", label: "auto-reconciliation rate" },
      { metric: "Zero", label: "audit findings post go-live" },
      { metric: "4 hrs → 12 min", label: "daily reconciliation time" },
      { metric: "₹1.2 Cr/yr", label: "compliance cost saved" },
    ],
    quote:
      "The anomaly engine caught a ₹14L duplicate disbursement in the first week. ROI was instant.",
    author: "CFO",
  },
  {
    id: "retail",
    tag: "Retail & D2C",
    company: "D2C apparel brand, 200+ SKUs",
    location: "Bengaluru, India · 180 employees",
    challenge:
      "No visibility into margin by SKU, manual reorder processes, and customer service team unable to access live order status.",
    solution:
      "Daxor ERP with Data Assistant for NL queries, chatbot for CS team, and recommendation engine for reorder and upsell.",
    results: [
      { metric: "23%", label: "increase in gross margin" },
      { metric: "40%", label: "reduction in analyst time" },
      { metric: "< 30 sec", label: "avg CS query resolution" },
      { metric: "₹28L/yr", label: "analyst headcount savings" },
    ],
    quote:
      "Our head of operations now asks the AI 'what are our top 10 SKUs by margin this week' instead of waiting 2 days for a report.",
    author: "CEO & Co-founder",
  },
  {
    id: "logistics",
    tag: "Logistics",
    company: "3PL logistics provider, 50+ warehouses",
    location: "Pan-India · 2,800 employees",
    challenge:
      "Disparate WMS systems across 54 locations, no consolidated P&L view, and 18% of invoices disputed monthly due to billing errors.",
    solution:
      "Daxor migration from Informatica to Fabric, unified data model across all sites, AI-assisted invoice validation.",
    results: [
      { metric: "18% → 2%", label: "invoice dispute rate" },
      { metric: "Unified", label: "P&L across all 54 sites" },
      { metric: "6 months", label: "migration timeline" },
      { metric: "₹4.2 Cr", label: "annual billing recovery" },
    ],
    quote:
      "We had data in 14 different systems. Daxor gave us a single source of truth without replacing a single WMS.",
    author: "Head of Technology",
  },
];

const tags = ["All", "Manufacturing", "Financial Services", "Retail & D2C", "Logistics"];

function CaseStudies() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.tag === active);

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-24 md:pt-48 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              Case Studies
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Real results, real companies.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              How enterprises across manufacturing, finance, retail, and logistics use Daxor to cut
              costs, close faster, and compete smarter.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-elegant)] bg-white/95 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2026/01/21/11/28/financial-analytics-10079927_1280.png"
              alt="Illustration of financial analytics and growth"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-8 border-b border-border sticky top-0 z-30 bg-background/95 backdrop-blur-sm">
        <div className="container-page flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page flex flex-col gap-8">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="rounded-2xl border border-border bg-background overflow-hidden p-7 md:p-8"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[color:var(--teal-soft)] text-[color:var(--teal-deep)] mb-2">
                  {c.tag}
                </span>
                <h2 className="text-xl font-medium">{c.company}</h2>
                <p className="text-sm text-muted-foreground mt-0.5">{c.location}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{c.solution}</p>
                  </div>
                  <blockquote className="border-l-2 border-[color:var(--teal-mid)] pl-4 italic text-sm text-muted-foreground">
                    "{c.quote}"
                    <p className="not-italic font-semibold mt-1 text-xs text-[color:var(--teal-deep)]">
                      — {c.author}
                    </p>
                  </blockquote>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Results
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {c.results.map((r) => (
                      <div
                        key={r.label}
                        className="p-4 rounded-xl border border-border bg-secondary/40"
                      >
                        <p className="text-xl font-medium tracking-tight">{r.metric}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-page max-w-xl">
          <h2 className="text-3xl font-medium mb-4">Could your business be next?</h2>
          <p className="text-muted-foreground mb-6">
            Book a 30-minute discovery call and we'll show you what Daxor can do for your specific
            industry.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
            >
              Book discovery call
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
