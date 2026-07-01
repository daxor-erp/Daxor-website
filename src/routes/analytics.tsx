import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/analytics")({
  component: Analytics,
  head: () => ({
    meta: [
      { title: "Analytics — Daxor" },
      {
        name: "description",
        content:
          "Real-time dashboards, predictive trend lines, drill-down exploration, and AI-surfaced anomalies — all in one unified analytics layer embedded in Daxor ERP.",
      },
      { property: "og:title", content: "Analytics — Daxor" },
      { property: "og:description", content: "Every metric. Always live." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/analytics" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/analytics" }],
  }),
});

const TEAL = "oklch(0.42 0.08 195)";
const ORANGE = "oklch(0.65 0.18 55)";
const VIOLET = "oklch(0.55 0.18 300)";

const revenueData = [
  { month: "May", revenue: 2.1, target: 2.0 },
  { month: "Jun", revenue: 2.4, target: 2.2 },
  { month: "Jul", revenue: 2.2, target: 2.3 },
  { month: "Aug", revenue: 2.7, target: 2.4 },
  { month: "Sep", revenue: 2.6, target: 2.5 },
  { month: "Oct", revenue: 2.84, target: 2.6 },
  { month: "Nov", revenue: 3.1, target: 2.7 },
];

const departmentData = [
  { dept: "Finance", spend: 38, budget: 42 },
  { dept: "Ops", spend: 61, budget: 55 },
  { dept: "HR", spend: 22, budget: 24 },
  { dept: "Sales", spend: 45, budget: 48 },
  { dept: "IT", spend: 29, budget: 30 },
  { dept: "Mfg", spend: 74, budget: 70 },
];

const inventoryTrend = [
  { week: "W1", stock: 80, reorder: 30 },
  { week: "W2", stock: 74, reorder: 30 },
  { week: "W3", stock: 69, reorder: 30 },
  { week: "W4", stock: 63, reorder: 30 },
  { week: "W5", stock: 58, reorder: 30 },
  { week: "W6", stock: 52, reorder: 30 },
  { week: "W7", stock: 47, reorder: 30 },
  { week: "W8", stock: 43, reorder: 30 },
];

const tooltipStyle = {
  contentStyle: {
    background: "oklch(0.2 0.02 210)",
    border: "1px solid oklch(1 0 0 / 0.1)",
    borderRadius: 8,
    fontSize: 11,
  },
  labelStyle: { color: "oklch(0.7 0 0)" },
};

const kpis = [
  {
    label: "Revenue MTD",
    value: 2.84,
    prefix: "₹",
    suffix: " Cr",
    delta: "+8.7%",
    up: true,
    decimals: 2,
  },
  { label: "EBITDA margin", value: 16.5, suffix: "%", delta: "+1.2pp", up: true, decimals: 1 },
  { label: "Inventory turns", value: 8.3, suffix: "×", delta: "-0.4×", up: false, decimals: 1 },
  { label: "Order fill rate", value: 94.2, suffix: "%", delta: "+2.1%", up: true, decimals: 1 },
];

const chartTabs = [
  {
    id: "revenue",
    label: "Revenue",
    insight:
      "Revenue is 9.2% above target for November. Growth driven by Manufacturing and Retail segments.",
  },
  {
    id: "spend",
    label: "Dept spend",
    insight:
      "Operations and Manufacturing are over budget this month. AI flagged a ₹6L anomaly in Ops on 14 Nov.",
  },
  {
    id: "inventory",
    label: "Inventory",
    insight:
      "3 SKUs are projected to cross the reorder threshold in the next 9 days. Purchase orders recommended.",
  },
];

const features = [
  {
    title: "Real-time streaming",
    desc: "Data refreshes from live ERP transactions via Kafka connectors. No manual refresh, no stale numbers.",
  },
  {
    title: "Drill-down exploration",
    desc: "Click any metric to drill from company → division → cost centre → individual transaction.",
  },
  {
    title: "Predictive trend lines",
    desc: "AI-powered forecasted extensions on every time-series chart. Toggle between actuals and projected values.",
  },
  {
    title: "Threshold alerts",
    desc: "Set alert rules in plain English: 'notify me when EBITDA drops below 15% for 3 consecutive days'.",
  },
  {
    title: "Cross-module stitching",
    desc: "One chart can pull from Finance, Supply Chain, and HR simultaneously — no manual joins.",
  },
  {
    title: "Row-level security",
    desc: "Finance sees company-wide. Regional managers see their geographies. Sales reps see their accounts only.",
  },
];

const compareRows = [
  { feature: "Real-time data refresh", daxor: true, powerbi: false, tableau: false },
  { feature: "AI anomaly overlay on charts", daxor: true, powerbi: false, tableau: false },
  { feature: "Natural language filter input", daxor: true, powerbi: false, tableau: false },
  { feature: "ERP-native (no connector needed)", daxor: true, powerbi: false, tableau: false },
  { feature: "Row-level security from ERP roles", daxor: true, powerbi: true, tableau: false },
];

function Analytics() {
  const [active, setActive] = useState("revenue");

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
              Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Every metric. Always live.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Real-time dashboards, predictive trend lines, drill-down exploration, and AI-surfaced
              anomalies — all in one unified analytics layer embedded in Daxor ERP.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/dashboards"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Try AI dashboards
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                Book a demo
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/08-growth-analytics.png"
              alt="Illustration of growth analytics"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* KPI STRIP */}
      <section className="py-14 border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-muted-foreground">{k.label}</span>
              <span className="text-3xl font-medium tracking-tight">
                <Counter to={k.value} prefix={k.prefix} suffix={k.suffix} decimals={k.decimals} />
              </span>
              <span
                className={`text-xs font-mono ${k.up ? "text-[color:var(--teal-mid)]" : "text-orange-500"}`}
              >
                {k.delta} vs last month
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CHART EXPLORER */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Live charts
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Explore your numbers.
            </h2>
            <p className="text-muted-foreground mt-3">
              Click a tab — charts update from your ERP data.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {chartTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  active === t.id
                    ? "bg-[color:var(--teal-soft)] border-[color:var(--teal-mid)]/50 text-[color:var(--teal-deep)]"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="p-6">
              {active === "revenue" && (
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={TEAL} stopOpacity={0.4} />
                        <stop offset="100%" stopColor={TEAL} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeOpacity={0.08} vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v} Cr`]} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke={TEAL}
                      strokeWidth={2.5}
                      fill="url(#rev-grad)"
                      name="Revenue"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke={ORANGE}
                      strokeWidth={2}
                      strokeDasharray="5 4"
                      dot={false}
                      name="Target"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              {active === "spend" && (
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart
                    data={departmentData}
                    margin={{ top: 8, right: 8, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid strokeOpacity={0.08} vertical={false} />
                    <XAxis
                      dataKey="dept"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v}L`]} />
                    <Bar
                      dataKey="budget"
                      fill={`${VIOLET}`}
                      fillOpacity={0.2}
                      name="Budget"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar dataKey="spend" fill={VIOLET} name="Actual spend" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
              {active === "inventory" && (
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart
                    data={inventoryTrend}
                    margin={{ top: 8, right: 8, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid strokeOpacity={0.08} vertical={false} />
                    <XAxis
                      dataKey="week"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip {...tooltipStyle} formatter={(v: number) => [`${v} units`]} />
                    <Line
                      type="monotone"
                      dataKey="stock"
                      stroke={ORANGE}
                      strokeWidth={2.5}
                      dot={false}
                      name="Stock level"
                    />
                    <Line
                      type="monotone"
                      dataKey="reorder"
                      stroke="oklch(0.6 0.2 20)"
                      strokeWidth={1.5}
                      strokeDasharray="5 4"
                      dot={false}
                      name="Reorder point"
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
            <div className="mx-6 mb-6 flex items-start gap-3 p-4 rounded-xl bg-[color:var(--teal-soft)]/40 border border-[color:var(--teal-mid)]/20">
              <span className="text-xs font-mono font-bold text-[color:var(--teal-deep)] shrink-0">
                AI insight
              </span>
              <p className="text-sm text-foreground/80">
                {chartTabs.find((t) => t.id === active)?.insight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">
              Everything you'd expect. And more.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 rounded-2xl border border-border bg-background flex flex-col gap-2"
              >
                <h3 className="font-medium text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Why Daxor Analytics
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">
              Built into your ERP, not bolted on.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="text-left px-6 py-4 font-medium text-muted-foreground">Feature</th>
                  <th className="px-6 py-4 font-medium text-[color:var(--teal-deep)]">Daxor</th>
                  <th className="px-6 py-4 text-muted-foreground font-medium">Power BI</th>
                  <th className="px-6 py-4 text-muted-foreground font-medium">Tableau</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.feature} className="border-b border-border/50">
                    <td className="px-6 py-3.5 text-foreground/80">{r.feature}</td>
                    {[r.daxor, r.powerbi, r.tableau].map((v, i) => (
                      <td key={i} className="px-6 py-3.5 text-center">
                        {v ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            className="text-[color:var(--teal-mid)] mx-auto"
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
                          <span className="text-muted-foreground/30">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--teal-deep)] text-white text-center">
        <div className="container-page max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            See your data come alive.
          </h2>
          <p className="opacity-70 mb-8">
            Book a 30-minute live demo and we'll load your own data into a sandbox dashboard.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-8 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Book live demo
            </Link>
            <Link
              to="/dashboards"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Try AI dashboards
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
