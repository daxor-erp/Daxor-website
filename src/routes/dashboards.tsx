import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/dashboards")({
  component: Dashboards,
  head: () => ({
    meta: [
      { title: "Dashboards — Daxor" },
      {
        name: "description",
        content:
          "AI-generated widgets and live charts — build a dashboard by describing what you want to see, or start from a curated widget library.",
      },
      { property: "og:title", content: "Dashboards — Daxor" },
      { property: "og:description", content: "Dashboards that build themselves." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dashboards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dashboards" }],
  }),
});

const TEAL = "oklch(0.42 0.08 195)";
const VIOLET = "oklch(0.55 0.18 300)";
const ORANGE = "oklch(0.65 0.18 55)";
const CYAN = "oklch(0.6 0.12 220)";
const ROSE = "oklch(0.6 0.2 20)";

const tooltipStyle = {
  contentStyle: {
    background: "oklch(0.2 0.02 210)",
    border: "1px solid oklch(1 0 0 / 0.1)",
    borderRadius: 8,
    fontSize: 11,
  },
  labelStyle: { color: "oklch(0.7 0 0)" },
};

const revenueByRegion = [
  { region: "North", revenue: 84 },
  { region: "South", revenue: 62 },
  { region: "East", revenue: 51 },
  { region: "West", revenue: 73 },
  { region: "Export", revenue: 34 },
];

const cashflowData = [
  { mo: "Jun", in: 280, out: 240 },
  { mo: "Jul", in: 310, out: 275 },
  { mo: "Aug", in: 295, out: 260 },
  { mo: "Sep", in: 330, out: 290 },
  { mo: "Oct", in: 360, out: 310 },
  { mo: "Nov", in: 384, out: 328 },
];

const categorySpend = [
  { name: "Raw Materials", value: 38, color: TEAL },
  { name: "Logistics", value: 22, color: VIOLET },
  { name: "Labour", value: 19, color: ORANGE },
  { name: "Overhead", value: 13, color: CYAN },
  { name: "Other", value: 8, color: ROSE },
];

const npsData = [
  { mo: "Jun", nps: 42 },
  { mo: "Jul", nps: 45 },
  { mo: "Aug", nps: 41 },
  { mo: "Sep", nps: 48 },
  { mo: "Oct", nps: 52 },
  { mo: "Nov", nps: 55 },
];

const widgets = [
  {
    id: "rev-region",
    title: "Revenue by Region",
    subtitle: "Current month · ₹ Lakhs",
    insight: "North is leading (+18% vs last month). Export segment down 4% — flagged for review.",
    chart: (
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={revenueByRegion} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid strokeOpacity={0.08} vertical={false} />
          <XAxis dataKey="region" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v}L`]} />
          <Bar dataKey="revenue" fill={TEAL} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "cashflow",
    title: "Cash Inflow vs Outflow",
    subtitle: "Last 6 months · ₹ Lakhs",
    insight: "Net cash position improved ₹56L MoM. Q4 runway is 14 months at current burn.",
    chart: (
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={cashflowData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="in-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={TEAL} stopOpacity={0.35} />
              <stop offset="100%" stopColor={TEAL} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeOpacity={0.08} vertical={false} />
          <XAxis dataKey="mo" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v}L`]} />
          <Area
            type="monotone"
            dataKey="in"
            stroke={TEAL}
            strokeWidth={2}
            fill="url(#in-grad)"
            name="Inflow"
          />
          <Line
            type="monotone"
            dataKey="out"
            stroke={ORANGE}
            strokeWidth={1.5}
            dot={false}
            name="Outflow"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "category-spend",
    title: "Spend by Category",
    subtitle: "This quarter · % of total",
    insight:
      "Raw materials remain the largest cost driver. Logistics spend up 3pp vs last quarter.",
    chart: (
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`${v}%`]} />
          <Pie
            data={categorySpend}
            dataKey="value"
            nameKey="name"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={2}
          >
            {categorySpend.map((c) => (
              <Cell key={c.name} fill={c.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "nps",
    title: "Customer NPS Trend",
    subtitle: "Last 6 months",
    insight: "NPS climbing steadily since August, driven by faster support response times.",
    chart: (
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={npsData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid strokeOpacity={0.08} vertical={false} />
          <XAxis dataKey="mo" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} />
          <Line
            type="monotone"
            dataKey="nps"
            stroke={VIOLET}
            strokeWidth={2.5}
            dot={{ r: 3 }}
            name="NPS"
          />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
];

const prompts = [
  "Show revenue breakdown by region for this month",
  "Compare cash inflows and outflows over the last 6 months",
  "Break down spend by category this quarter",
  "How has our NPS trended over the last 6 months?",
];

const capabilities = [
  {
    title: "Describe, don't configure",
    desc: "Type what you want to see in plain English — Daxor picks the right chart type and data source automatically.",
  },
  {
    title: "Shareable snapshots",
    desc: "Publish any dashboard view as a read-only link, embed in Notion or Confluence, or push to Slack on schedule.",
  },
  {
    title: "Dynamic segmentation",
    desc: "Filter by region, product line, entity, or date range — every widget updates simultaneously.",
  },
];

function Dashboards() {
  const [selected, setSelected] = useState<string | null>(null);

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
              Dashboards
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Dashboards that build themselves.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Describe the widget you want in plain English, or start from a curated library of
              AI-generated charts — live from your own ERP data.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Start free trial
              </Link>
              <Link
                to="/analytics"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                See analytics
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* PROMPT ROW */}
      <section className="py-14 border-b border-border">
        <div className="container-page">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Try asking for a widget
          </p>
          <div className="flex flex-wrap gap-2">
            {prompts.map((p, i) => (
              <button
                key={p}
                onClick={() => setSelected(widgets[i]?.id ?? null)}
                className={`text-left px-4 py-2.5 rounded-full text-sm border transition-colors ${
                  selected === widgets[i]?.id
                    ? "bg-[color:var(--teal-soft)] border-[color:var(--teal-mid)]/50 text-[color:var(--teal-deep)]"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WIDGET GRID */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Widget library
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              A live dashboard, out of the box.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {widgets.map((w) => (
              <div
                key={w.id}
                className={`rounded-2xl border bg-background overflow-hidden transition-colors ${
                  selected === w.id ? "border-[color:var(--teal-mid)]/60" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                  <div>
                    <p className="font-medium text-sm">{w.title}</p>
                    <p className="text-xs text-muted-foreground">{w.subtitle}</p>
                  </div>
                </div>
                <div className="p-4">{w.chart}</div>
                <div className="mx-4 mb-4 flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                  <span className="text-xs font-mono font-bold text-[color:var(--teal-mid)] shrink-0">
                    Insight
                  </span>
                  <p className="text-xs text-foreground/70">{w.insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-border bg-background">
              <h3 className="font-medium mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[color:var(--teal-deep)] text-white text-center">
        <div className="container-page max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            Build your first dashboard today.
          </h2>
          <p className="opacity-70 mb-8">
            No setup required — connect your data and your first widgets are ready in minutes.
          </p>
          <Link
            to="/pricing"
            className="rounded-full bg-white text-[color:var(--teal-deep)] px-8 py-3 text-sm font-medium hover:bg-white/90 transition inline-flex"
          >
            Start free trial
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
