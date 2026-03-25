import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  BarChart3, ArrowRight, TrendingUp, TrendingDown, Activity,
  Zap, RefreshCw, Bell, Eye, Filter, Download, CheckCircle,
  Layers, Globe, Lock,
} from "lucide-react";

// ── Colour tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: "hsl(201,68%,60%)",
  emerald: "#10b981",
  violet: "#8b5cf6",
  orange: "#f59e0b",
  cyan: "#06b6d4",
  rose: "#f43f5e",
};

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "", prefix = "", decimals = 0 }: { to: number; suffix?: string; prefix?: string; decimals?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(parseFloat((e * to).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, to, decimals]);
  return <span ref={ref}>{prefix}{v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

// ── Fake real-time data hook ───────────────────────────────────────────────────
function useLiveData(base: number, variance: number) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => setVal(base + (Math.random() - 0.5) * variance), 1800);
    return () => clearInterval(t);
  }, [base, variance]);
  return val;
}

// ── Months of revenue data ─────────────────────────────────────────────────────
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

const inventoryTrend = Array.from({ length: 12 }, (_, i) => ({
  week: `W${i + 1}`,
  stock: Math.max(20, 80 - i * 3 + (Math.random() * 10)),
  reorder: 30,
}));

// ── Tooltip style ─────────────────────────────────────────────────────────────
const tooltipStyle = {
  contentStyle: { background: "#0d1117", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 11 },
  labelStyle: { color: "#999" },
};

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  const liveQueries = useLiveData(2847, 400);
  const liveAlerts  = useLiveData(3, 4);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ShaderAnimation className="w-full h-full" opacity={0.18} variant="neural" />
      </div>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, hsl(var(--background)/0.15) 0%, hsl(var(--background)/0.55) 55%, hsl(var(--background)) 100%)" }} />

      <div className="container relative grid lg:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Analytics</span>
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.04] mb-6">
            Every metric.<br /><span className="text-primary">Always live.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Real-time dashboards, predictive trend lines, drill-down exploration, and AI-surfaced anomalies — all in one unified analytics layer embedded in Daxor ERP.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
              <Link to="/dashboards">Try AI Dashboards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>
        </motion.div>

        {/* Live mini-stats panel */}
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex flex-col gap-3">
          {/* Live bar */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border bg-card/80 backdrop-blur">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Live — queries right now</span>
            <span className="ml-auto font-mono font-bold text-emerald-400">{Math.round(liveQueries).toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border bg-card/80 backdrop-blur">
            <Bell className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Active alerts</span>
            <span className="ml-auto font-mono font-bold text-orange-400">{Math.max(0, Math.round(liveAlerts))}</span>
          </div>

          {/* Mini revenue chart */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted-foreground">Revenue vs Target (₹ Cr)</span>
              <span className="text-xs font-mono text-emerald-400">+8.7% MoM</span>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.primary} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={C.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#666" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#666" }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Area type="monotone" dataKey="revenue" stroke={C.primary} strokeWidth={2} fill="url(#rev-grad)" />
                <Line type="monotone" dataKey="target" stroke={C.orange} strokeWidth={1.5} strokeDasharray="4 3" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ── KPI Strip ─────────────────────────────────────────────────────────────────
const kpis = [
  { label: "Revenue MTD", value: 2.84, prefix: "₹", suffix: " Cr", delta: "+8.7%", up: true, color: C.primary },
  { label: "EBITDA Margin", value: 16.5, suffix: "%", delta: "+1.2pp", up: true, color: C.emerald },
  { label: "Inventory Turns", value: 8.3, suffix: "×", delta: "-0.4×", up: false, color: C.orange },
  { label: "Order Fill Rate", value: 94.2, suffix: "%", delta: "+2.1%", up: true, color: C.cyan },
];

const KPIStrip = () => (
  <section className="py-14 border-y border-border bg-card/20">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
      {kpis.map((k, i) => (
        <motion.div key={k.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
          className="flex flex-col gap-1.5">
          <span className="text-xs font-mono text-muted-foreground">{k.label}</span>
          <span className="text-3xl font-bold tracking-tight" style={{ color: k.color }}>
            <Counter to={k.value} prefix={k.prefix} suffix={k.suffix} decimals={k.suffix === "×" ? 1 : k.suffix === "%" ? 1 : 2} />
          </span>
          <span className={`flex items-center gap-1 text-xs font-mono ${k.up ? "text-emerald-400" : "text-rose-400"}`}>
            {k.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {k.delta} vs last month
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

// ── Interactive chart explorer ────────────────────────────────────────────────
const chartTabs = [
  {
    id: "revenue",
    label: "Revenue",
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
    chart: (
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="rev-full" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.primary} stopOpacity={0.4} />
              <stop offset="100%" stopColor={C.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v} Cr`]} />
          <Area type="monotone" dataKey="revenue" stroke={C.primary} strokeWidth={2.5} fill="url(#rev-full)" name="Revenue" />
          <Line type="monotone" dataKey="target" stroke={C.orange} strokeWidth={2} strokeDasharray="5 4" dot={false} name="Target" />
        </AreaChart>
      </ResponsiveContainer>
    ),
    insight: "Revenue is 9.2% above target for November. Growth driven by Manufacturing and Retail segments.",
  },
  {
    id: "spend",
    label: "Dept Spend",
    icon: BarChart3,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    chart: (
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={departmentData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="dept" tick={{ fontSize: 11, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v}L`]} />
          <Bar dataKey="budget" fill="rgba(139,92,246,0.2)" name="Budget" radius={[4, 4, 0, 0]} />
          <Bar dataKey="spend" fill={C.violet} name="Actual Spend" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    ),
    insight: "Operations and Manufacturing are over budget this month. AI flagged a ₹6L anomaly in Ops on 14 Nov.",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Activity,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    chart: (
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={inventoryTrend} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`${v.toFixed(0)} units`]} />
          <Line type="monotone" dataKey="stock" stroke={C.orange} strokeWidth={2.5} dot={false} name="Stock Level" />
          <Line type="monotone" dataKey="reorder" stroke={C.rose} strokeWidth={1.5} strokeDasharray="5 4" dot={false} name="Reorder Point" />
        </LineChart>
      </ResponsiveContainer>
    ),
    insight: "3 SKUs are projected to cross the reorder threshold in the next 9 days. Purchase orders recommended.",
  },
];

const ChartExplorer = () => {
  const [active, setActive] = useState("revenue");
  const tab = chartTabs.find(t => t.id === active)!;

  return (
    <section className="py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Live Charts</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Explore your numbers</h2>
          <p className="text-muted-foreground mt-3">Click a tab — charts update in real time from your ERP data.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {chartTabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${active === t.id ? `${t.bg} border-current ${t.color}` : "border-border text-muted-foreground hover:text-foreground"}`}>
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Chart header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <tab.icon className={`w-4 h-4 ${tab.color}`} />
                <span className="font-semibold text-sm">{tab.label} Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <Filter className="w-3 h-3" /> Filter
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <Download className="w-3 h-3" /> Export
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <RefreshCw className="w-3 h-3" /> Refresh
                </button>
              </div>
            </div>

            <div className="p-6">
              {tab.chart}
            </div>

            {/* AI insight strip */}
            <div className={`mx-6 mb-6 flex items-start gap-3 p-4 rounded-xl ${tab.bg} border border-current/10`}>
              <Zap className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tab.color}`} />
              <div>
                <span className={`text-xs font-mono font-bold ${tab.color}`}>AI Insight</span>
                <p className="text-sm text-foreground/80 mt-0.5">{tab.insight}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ── Features grid ─────────────────────────────────────────────────────────────
const features = [
  { icon: Activity, color: "text-primary", bg: "bg-primary/10", title: "Real-time streaming", desc: "Data refreshes every second from live ERP transactions via Kafka connectors. No manual refresh, no stale numbers." },
  { icon: Eye, color: "text-violet-400", bg: "bg-violet-500/10", title: "Drill-down exploration", desc: "Click any metric to drill from company → division → cost centre → individual transaction in one click." },
  { icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "Predictive trend lines", desc: "AI-powered forecasted extensions on every time-series chart. Toggle between actuals and projected values." },
  { icon: Bell, color: "text-orange-400", bg: "bg-orange-500/10", title: "Threshold alerts", desc: "Set alert rules in plain English: 'notify me when EBITDA drops below 15% for 3 consecutive days'." },
  { icon: Globe, color: "text-cyan-400", bg: "bg-cyan-500/10", title: "Cross-module stitching", desc: "One chart can pull from Finance, Supply Chain, and HR simultaneously — no manual JOIN queries." },
  { icon: Layers, color: "text-blue-400", bg: "bg-blue-500/10", title: "Shareable snapshots", desc: "Publish any dashboard view as a read-only link, embed in Notion or Confluence, or push to Slack on schedule." },
  { icon: Filter, color: "text-rose-400", bg: "bg-rose-500/10", title: "Dynamic segmentation", desc: "Filter by region, product line, entity, or date range — all charts update simultaneously with sub-second latency." },
  { icon: Lock, color: "text-yellow-400", bg: "bg-yellow-500/10", title: "Row-level security", desc: "Finance sees company-wide. Regional managers see their geographies. Sales reps see their accounts only. Zero config." },
];

const Features = () => (
  <section className="py-24 bg-card/20 border-y border-border">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Capabilities</p>
        <h2 className="text-4xl font-bold tracking-tight">Everything you'd expect. And more.</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className={`p-5 rounded-2xl border border-border ${f.bg} flex flex-col gap-3`}>
            <f.icon className={`w-5 h-5 ${f.color}`} />
            <h3 className="font-bold text-sm leading-snug">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Comparison ────────────────────────────────────────────────────────────────
const rows = [
  { feature: "Real-time data refresh", daxor: true, powerbi: false, tableau: false },
  { feature: "AI anomaly overlay on charts", daxor: true, powerbi: false, tableau: false },
  { feature: "Drill-through to source transaction", daxor: true, powerbi: true, tableau: true },
  { feature: "Natural language filter input", daxor: true, powerbi: false, tableau: false },
  { feature: "ERP-native (no connector needed)", daxor: true, powerbi: false, tableau: false },
  { feature: "AI-generated widget builder", daxor: true, powerbi: false, tableau: false },
  { feature: "Row-level security from ERP roles", daxor: true, powerbi: true, tableau: false },
  { feature: "Embedded in ERP workflow", daxor: true, powerbi: false, tableau: false },
];

const Comparison = () => (
  <section className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Why Daxor Analytics</p>
        <h2 className="text-4xl font-bold tracking-tight">Built into your ERP, not bolted on</h2>
      </motion.div>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="text-left px-6 py-4 font-medium text-muted-foreground">Feature</th>
              <th className="px-6 py-4 font-bold text-primary">Daxor</th>
              <th className="px-6 py-4 text-muted-foreground font-medium">Power BI</th>
              <th className="px-6 py-4 text-muted-foreground font-medium">Tableau</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr key={r.feature} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="border-b border-border/40 hover:bg-card/50 transition-colors">
                <td className="px-6 py-3.5 text-foreground/80">{r.feature}</td>
                <td className="px-6 py-3.5 text-center">
                  {r.daxor ? <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-muted-foreground/30 text-lg mx-auto block text-center">—</span>}
                </td>
                <td className="px-6 py-3.5 text-center">
                  {r.powerbi ? <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-muted-foreground/30 text-lg mx-auto block text-center">—</span>}
                </td>
                <td className="px-6 py-3.5 text-center">
                  {r.tableau ? <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-muted-foreground/30 text-lg mx-auto block text-center">—</span>}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ── CTA ───────────────────────────────────────────────────────────────────────
const CTA = () => (
  <section className="py-24 border-t border-border">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">See your data come alive</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Book a 30-minute live demo and we'll load your own data into a sandbox dashboard.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-full px-10 gap-2 group" asChild>
            <Link to="/contact">Book Live Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10" asChild>
            <Link to="/dashboards">Try AI Dashboards →</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <KPIStrip />
      <ChartExplorer />
      <Features />
      <Comparison />
      <CTA />
      <Footer />
    </div>
  );
}
