import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/product")({
  component: Product,
  head: () => ({
    meta: [
      { title: "Daxor AI — The intelligent ERP layer" },
      {
        name: "description",
        content:
          "Six AI modules working in concert — forecasting demand, detecting anomalies, answering questions in plain English, and generating board-ready reports. All embedded natively into Daxor ERP.",
      },
      { property: "og:title", content: "Daxor AI — The intelligent ERP layer" },
      { property: "og:description", content: "The AI brain behind Daxor ERP." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
});

const modules = [
  {
    tag: "AI Assistant",
    title: "Your 24×7 virtual CFO & COO",
    desc: "Ask anything about your business in plain language. Get instant answers on cash flow, headcount, inventory levels, and more — no SQL, no dashboards, no waiting.",
    bullets: [
      "Natural language interface across all ERP modules",
      "Synthesises insights from forecasting, anomaly & NLP engines",
      "Role-aware responses for Finance, Ops, HR, and Sales",
      "Escalation to human experts when confidence is low",
    ],
  },
  {
    tag: "Demand Forecasting",
    title: "Predict what's coming before it arrives",
    desc: "ML models trained on your historical sales, seasonality, and external signals produce accurate demand forecasts — feeding directly into procurement and production planning.",
    bullets: [
      "Time-series models on Microsoft Fabric / Databricks",
      "Automatic retraining as new data arrives",
      "Feeds Supply Chain, Manufacturing & Procurement modules",
      "Confidence intervals and scenario planning built in",
    ],
  },
  {
    tag: "Anomaly Detection",
    title: "Catch problems before they become crises",
    desc: "Continuous monitoring of transactions, spend patterns, and operational metrics. Unusual activity triggers instant alerts via Slack, Teams, or WhatsApp.",
    bullets: [
      "Unsupervised anomaly detection on live transaction streams",
      "Spend, payroll, and inventory deviation alerts",
      "Configurable thresholds per department or cost centre",
      "Full audit trail for every flagged event",
    ],
  },
  {
    tag: "NLP Report Generator",
    title: "Board-ready reports written by AI",
    desc: "Turn raw financial and operational data into polished narrative reports. Monthly MIS, board packs, and investor updates — generated in minutes, not days.",
    bullets: [
      "Structured data → narrative prose via LLM pipeline",
      "Customisable templates per report type",
      "Export to PDF, Word, or push to email/Slack",
      "Supports English, Hindi, and regional languages",
    ],
  },
  {
    tag: "Data Assistant",
    title: "Query your entire data estate in plain English",
    desc: "Connect to OneLake, Snowflake, or Databricks and ask questions like 'What were our top 10 SKUs by margin last quarter?' — get results in seconds.",
    bullets: [
      "Natural language → SQL / Spark query translation",
      "Works across all connected data sources",
      "Results returned as tables, charts, or summaries",
      "Query history and saved views for teams",
    ],
  },
  {
    tag: "Analytics & Recommendations",
    title: "Proactive insights, not just reactive reports",
    desc: "The recommendation engine surfaces upsell opportunities, cost-saving actions, and operational improvements — pushed to the right person at the right time.",
    bullets: [
      "Collaborative filtering for upsell & cross-sell signals",
      "Cost optimisation recommendations from spend data",
      "Personalised insights per user role",
      "Integrates with CRM, Sales, and Procurement modules",
    ],
  },
];

const archLayers = [
  { label: "Inputs", desc: "Browser, mobile, APIs, IoT, legacy ERP" },
  { label: "Ingestion", desc: "Migration engine, API gateway, Kafka" },
  { label: "Data Platform", desc: "OneLake, Snowflake, Databricks, ADLS" },
  { label: "AI / ML Layer", desc: "6 AI engines on shared feature store" },
  { label: "ERP Core", desc: "7 modules — Finance, HR, Supply Chain…" },
  { label: "Compliance", desc: "GST, TDS, Ind AS, IFRS, audit trail" },
];

const integrations = [
  { name: "Microsoft Fabric / OneLake", desc: "Primary data lakehouse" },
  { name: "Snowflake", desc: "Analytical warehouse" },
  { name: "Databricks", desc: "ML training & Spark" },
  { name: "Azure Data Lake", desc: "Raw storage layer" },
  { name: "Power BI", desc: "BI connector" },
  { name: "WhatsApp / Slack / Teams", desc: "Chat-based approvals" },
  { name: "AWS & GCP", desc: "Multi-cloud hosting" },
  { name: "REST / GraphQL", desc: "Open API layer" },
];

function Product() {
  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32">
          <div className="max-w-2xl">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              Daxor AI — Intelligent ERP layer
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              The AI brain behind Daxor ERP.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Six AI modules working in concert — forecasting demand, detecting anomalies, answering
              questions in plain English, and generating board-ready reports. All embedded natively
              into your ERP.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Get started
              </Link>
              <Link
                to="/"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                See the platform
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* AI MODULES */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              AI Modules
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Ask your AI Assistant anything.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each module is purpose-built for enterprise ERP workflows and works together through a
              shared intelligence layer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((m) => (
              <div
                key={m.tag}
                className="rounded-2xl border border-border p-7 bg-background flex flex-col gap-4"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[color:var(--teal-mid)]">
                  {m.tag}
                </span>
                <h3 className="text-xl font-medium leading-snug">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                <ul className="space-y-2 mt-1">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        className="mt-1 text-[color:var(--teal-mid)] shrink-0"
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
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-20 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest opacity-50 mb-3">
              Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Built on a modern data stack.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {archLayers.map((l) => (
              <div
                key={l.label}
                className="flex flex-col gap-2 p-5 rounded-xl border border-white/10 bg-white/5"
              >
                <p className="font-medium text-sm">{l.label}</p>
                <p className="text-xs opacity-50 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Integrations
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Connects to your existing stack.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-xl border border-border bg-background hover:border-[color:var(--teal-mid)]/40 transition-colors"
              >
                <p className="font-medium text-sm mb-1">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] mb-6 leading-tight">
            Ready to put AI at the core of your ERP?
          </h2>
          <p className="text-lg opacity-70 mb-8">
            Book a 30-minute demo and see the AI Assistant, Data Assistant, and Anomaly Detection
            live on your own data.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/pricing"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              View pricing
            </Link>
            <Link
              to="/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
