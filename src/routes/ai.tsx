import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/ai")({
  component: AIPage,
  head: () => ({
    meta: [
      { title: "Daxor AI — AI that thinks like your CFO" },
      {
        name: "description",
        content:
          "Six specialised AI engines embedded natively into Daxor ERP — forecasting, anomaly detection, NLP queries, and real-time recommendations.",
      },
      { property: "og:title", content: "Daxor AI — AI that thinks like your CFO" },
      { property: "og:description", content: "The AI platform behind Daxor ERP." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai" }],
  }),
});

const liveStats = [
  { label: "AI queries / day", value: 2400000, suffix: "+" },
  { label: "Anomalies caught", value: 98, suffix: "%" },
  { label: "Forecast accuracy", value: 94, suffix: "%" },
  { label: "Avg response time", value: 320, suffix: "ms" },
];

const demoPrompts = [
  {
    q: "What's our cash runway at current burn rate?",
    a: "Based on your latest balance sheet (₹4.2 Cr in current assets) and average monthly burn of ₹38L, your runway is approximately 11 months. Three cost centres have increased spend >15% MoM — Finance, Logistics, and Cloud infra.",
  },
  {
    q: "Which SKUs are at risk of stockout in the next 2 weeks?",
    a: "My demand model flags SKU-1042 (Ball Bearings M8) and SKU-2219 (Drive Shaft Assembly) as high-risk. Current stock covers ~9 days at forecast consumption. Recommend issuing a PO to Supplier #14 by Thursday.",
  },
  {
    q: "Summarise last month's P&L for the board deck.",
    a: "October MIS Summary — Revenue ₹2.84 Cr (+6.3% MoM), EBITDA ₹47L (margin 16.5%). Key variance: raw material costs +₹12L due to a commodity spike. NPS dropped 4 points, linked to delayed deliveries in Week 3.",
  },
];

const engines = [
  {
    tag: "Demand Forecasting",
    title: "Know what's needed before it's needed",
    body: "Time-series ML models trained on your historical data, seasonality patterns, and external signals generate rolling 90-day demand forecasts — feeding directly into procurement and production scheduling.",
    points: [
      "Auto-retraining on new data",
      "Confidence intervals & scenarios",
      "Direct feed to procurement module",
      "MAPE under 6% on average",
    ],
    bars: [72, 58, 84, 66, 91],
  },
  {
    tag: "Anomaly Detection",
    title: "Catch problems in milliseconds, not months",
    body: "Continuous unsupervised monitoring of every transaction, payroll run, and operational metric. Deviations are scored by severity and routed instantly via Slack, Teams, or WhatsApp.",
    points: [
      "Live transaction stream analysis",
      "Configurable per cost centre",
      "Full audit trail for every alert",
      "< 0.4% false positive rate",
    ],
    bars: [30, 82, 45, 20, 60],
  },
  {
    tag: "NLP Reports",
    title: "Board decks written by AI in minutes",
    body: "The NLP Report Generator turns raw ERP data into polished narrative — monthly MIS packs, board presentations, investor updates. Customisable templates with multilingual support.",
    points: [
      "Structured data → narrative prose",
      "PDF, Word & email export",
      "English, Hindi, and regional languages",
      "One-click regeneration with new data",
    ],
    bars: [88, 75, 90, 80, 95],
  },
  {
    tag: "Data Assistant",
    title: "Ask your data lake anything",
    body: "Connect to OneLake, Snowflake, or Databricks and run complex queries in plain English. The Data Assistant translates your question to SQL or Spark and returns charts, tables, or summaries.",
    points: [
      "Natural language → SQL / Spark",
      "Results as tables, charts, or text",
      "Works across all data sources",
      "Query history & saved views",
    ],
    bars: [55, 68, 74, 62, 80],
  },
];

const steps = [
  {
    title: "Connect your data",
    desc: "Plug Daxor into your existing stack — OneLake, Snowflake, Databricks, SAP, or legacy ERPs. Zero-copy ingestion.",
  },
  {
    title: "AI learns your business",
    desc: "Six ML models initialise on your historical data. First forecasts and baselines are ready within 48 hours.",
  },
  {
    title: "Insights surface automatically",
    desc: "Anomalies, forecasts, and recommendations are pushed to the right people via chat, email, or in-app notifications.",
  },
  {
    title: "You stay in control",
    desc: "Every AI decision is explainable and auditable. Approve, reject, or override any recommendation with a single click.",
  },
];

function AIPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeEngine, setActiveEngine] = useState(0);
  const current = demoPrompts[activeIdx];
  const engine = engines[activeEngine];

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              Daxor AI Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              AI that thinks like your CFO, COO, and analyst.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Six specialised AI engines embedded natively into Daxor ERP — forecasting, anomaly
              detection, NLP queries, and real-time recommendations. All talking to each other.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Start free trial
              </Link>
              <Link
                to="/product"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                See AI modules
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/19-ai-people.png"
              alt="Illustration of people collaborating with an AI assistant"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* LIVE STATS */}
      <section className="py-16 border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {liveStats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-medium tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Live demo
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
              Ask your AI anything.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Daxor AI Assistant understands your entire business context — financial data,
              operations, inventory, HR — and answers in plain English.
            </p>
            <div className="flex flex-col gap-3">
              {demoPrompts.map((p, i) => (
                <button
                  key={p.q}
                  onClick={() => setActiveIdx(i)}
                  className={`text-left p-4 rounded-xl border transition-colors text-sm ${
                    activeIdx === i
                      ? "border-[color:var(--teal-mid)]/50 bg-[color:var(--teal-soft)]/30 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.q}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                Daxor AI Assistant
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-[color:var(--teal-mid)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--teal-mid)] animate-pulse" />
                Online
              </span>
            </div>
            <div className="p-5 flex flex-col gap-4 min-h-[260px]">
              <div className="self-end max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                {current.q}
              </div>
              <div className="self-start max-w-sm bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-muted-foreground leading-relaxed">
                <div className="flex items-center gap-1.5 mb-2 text-[color:var(--teal-mid)]">
                  <span className="text-xs font-medium">Daxor AI</span>
                </div>
                {current.a}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINES */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              AI engines
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Purpose-built for ERP workflows.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {engines.map((e, i) => (
              <button
                key={e.tag}
                onClick={() => setActiveEngine(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeEngine === i
                    ? "bg-[color:var(--teal-soft)] border-[color:var(--teal-mid)]/50 text-[color:var(--teal-deep)]"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {e.tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 leading-snug">{engine.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{engine.body}</p>
              <ul className="space-y-2.5">
                {engine.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
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
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 min-h-[220px] flex items-center">
              <div className="w-full space-y-3">
                {engine.bars.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-10 font-mono">
                      {["Mon", "Tue", "Wed", "Thu", "Fri"][i]}
                    </span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[color:var(--teal-mid)] transition-all duration-700 ease-out"
                        style={{ width: `${h}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-[color:var(--teal-mid)] w-8 text-right">
                      {h}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              From zero to AI-powered in 48 hours.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3">
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                <h3 className="font-medium text-lg leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[color:var(--teal-deep)] text-white text-center">
        <div className="container-page max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] mb-6 leading-tight">
            Put AI at the core of your enterprise.
          </h2>
          <p className="text-lg opacity-70 mb-10">
            Start with a 30-minute live demo on your own data. No setup required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/pricing"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-8 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              View plans
            </Link>
            <Link
              to="/product"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Explore AI modules
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
