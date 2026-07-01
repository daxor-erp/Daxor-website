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
import {
  BarChart3,
  TrendingUp,
  PieChart as PieIcon,
  Activity,
  Sparkles,
  X,
  Loader2,
  LayoutDashboard,
} from "lucide-react";
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
  { name: "Other", value: 8, color: "oklch(0.6 0.2 20)" },
];

const npsData = [
  { mo: "Jun", nps: 42 },
  { mo: "Jul", nps: 45 },
  { mo: "Aug", nps: 41 },
  { mo: "Sep", nps: 48 },
  { mo: "Oct", nps: 52 },
  { mo: "Nov", nps: 55 },
];

interface Widget {
  id: string;
  prompt: string;
  title: string;
  subtitle: string;
  type: string;
  icon: typeof BarChart3;
  color: string;
  bg: string;
  insight: string;
  chart: React.ReactNode;
}

const widgets: Widget[] = [
  {
    id: "rev-region",
    prompt: "Show revenue breakdown by region for this month",
    title: "Revenue by Region",
    subtitle: "Current month · ₹ Lakhs",
    type: "Bar chart",
    icon: BarChart3,
    color: "text-[color:var(--teal-deep)]",
    bg: "bg-[color:var(--teal-soft)]/50",
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
    prompt: "Compare cash inflows and outflows over the last 6 months",
    title: "Cash Inflow vs Outflow",
    subtitle: "Last 6 months · ₹ Lakhs",
    type: "Area chart",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
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
    prompt: "Break down spend by category this quarter",
    title: "Spend by Category",
    subtitle: "This quarter · % of total",
    type: "Pie chart",
    icon: PieIcon,
    color: "text-violet-600",
    bg: "bg-violet-500/10",
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
    prompt: "How has our NPS trended over the last 6 months?",
    title: "Customer NPS Trend",
    subtitle: "Last 6 months",
    type: "Line chart",
    icon: Activity,
    color: "text-orange-600",
    bg: "bg-orange-500/10",
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
  const [addedIds, setAddedIds] = useState<string[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleAsk = (id: string) => {
    if (addedIds.includes(id) || loadingId) return;
    setLoadingId(id);
    setTimeout(() => {
      setAddedIds((prev) => [...prev, id]);
      setLoadingId(null);
    }, 650);
  };

  const removeWidget = (id: string) => {
    setAddedIds((prev) => prev.filter((w) => w !== id));
  };

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
              Describe the widget you want in plain English and watch it appear — live from your own
              ERP data.
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

      {/* BUILDER */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Widget builder
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Ask, and it appears.
            </h2>
            <p className="text-muted-foreground mt-3">
              Click a question below — Daxor picks the right chart and adds it to your dashboard.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background shadow-[var(--shadow-card)] overflow-hidden">
            {/* toolbar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">Your dashboard</span>
              {addedIds.length > 0 && (
                <button
                  onClick={() => setAddedIds([])}
                  className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* ask bar */}
            <div className="p-5 border-b border-border">
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-3 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-[color:var(--teal-mid)] shrink-0" />
                <span>Ask Daxor to build a widget — try one of the prompts below</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {widgets.map((w) => {
                  const added = addedIds.includes(w.id);
                  const loading = loadingId === w.id;
                  return (
                    <button
                      key={w.id}
                      onClick={() => handleAsk(w.id)}
                      disabled={added || loading}
                      className={`inline-flex items-center gap-2 text-left px-4 py-2.5 rounded-full text-sm border transition-colors ${
                        added
                          ? "border-[color:var(--teal-mid)]/40 bg-[color:var(--teal-soft)]/40 text-[color:var(--teal-deep)] cursor-default"
                          : "border-border text-muted-foreground hover:text-foreground hover:border-[color:var(--teal-mid)]/40"
                      }`}
                    >
                      {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                      {added && !loading && (
                        <svg width="14" height="14" viewBox="0 0 16 16" className="shrink-0">
                          <path
                            d="M13 4 L6 12 L3 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {w.prompt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* canvas */}
            <div className="p-5">
              {addedIds.length === 0 && !loadingId ? (
                <div className="flex flex-col items-center justify-center gap-3 text-center py-16 rounded-2xl border border-dashed border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium">No widgets yet</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Click a prompt above to ask Daxor for your first widget.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-5">
                  {addedIds.map((id) => {
                    const w = widgets.find((x) => x.id === id)!;
                    return (
                      <div
                        key={id}
                        className="rounded-2xl border border-border bg-background overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300"
                      >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${w.bg}`}
                            >
                              <w.icon className={`w-4 h-4 ${w.color}`} />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{w.title}</p>
                              <p className="text-xs text-muted-foreground">{w.subtitle}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeWidget(w.id)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Remove widget"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="p-4">{w.chart}</div>
                        <div className="mx-4 mb-4 flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                          <span className="text-xs font-mono font-bold text-[color:var(--teal-mid)] shrink-0">
                            Insight
                          </span>
                          <p className="text-xs text-foreground/70">{w.insight}</p>
                        </div>
                      </div>
                    );
                  })}
                  {loadingId && (
                    <div className="rounded-2xl border border-dashed border-border flex items-center justify-center gap-2 min-h-[220px] text-muted-foreground">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Building widget…</span>
                    </div>
                  )}
                </div>
              )}
            </div>
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
