import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  ArrowRight, Sparkles, Bot, Send, BarChart3, TrendingUp,
  PieChart as PieIcon, Activity, LayoutDashboard, Zap,
  RefreshCw, Lock, Globe, CheckCircle, X, Plus, GripVertical,
} from "lucide-react";

// ── Colours ───────────────────────────────────────────────────────────────────
const C = {
  primary: "hsl(201,68%,60%)",
  emerald: "#10b981",
  violet: "#8b5cf6",
  orange: "#f59e0b",
  cyan: "#06b6d4",
  rose: "#f43f5e",
  blue: "#3b82f6",
};

const tooltipStyle = {
  contentStyle: { background: "#0d1117", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 11 },
  labelStyle: { color: "#999" },
};

// ── Sample chart data ─────────────────────────────────────────────────────────
const revenueByRegion = [
  { region: "North", revenue: 84 }, { region: "South", revenue: 62 },
  { region: "East", revenue: 51 }, { region: "West", revenue: 73 },
  { region: "Export", revenue: 34 },
];

const cashflowData = [
  { mo: "Jun", in: 280, out: 240 }, { mo: "Jul", in: 310, out: 275 },
  { mo: "Aug", in: 295, out: 260 }, { mo: "Sep", in: 330, out: 290 },
  { mo: "Oct", in: 360, out: 310 }, { mo: "Nov", in: 384, out: 328 },
];

const skuData = [
  { sku: "BRG-M8", margin: 42 }, { sku: "DRV-14", margin: 38 },
  { sku: "SHF-22", margin: 56 }, { sku: "BLT-06", margin: 29 },
  { sku: "GRK-11", margin: 61 }, { sku: "PIN-03", margin: 33 },
];

const categorySpend = [
  { name: "Raw Materials", value: 38, color: C.primary },
  { name: "Logistics", value: 22, color: C.violet },
  { name: "Labour", value: 19, color: C.orange },
  { name: "Overhead", value: 13, color: C.cyan },
  { name: "Other", value: 8, color: C.rose },
];

const headcountTrend = Array.from({ length: 8 }, (_, i) => ({
  qtr: `Q${(i % 4) + 1}'${23 + Math.floor(i / 4)}`,
  headcount: 88 + i * 4 + Math.floor(Math.random() * 4),
}));

const npsData = [
  { mo: "Jun", nps: 42 }, { mo: "Jul", nps: 45 }, { mo: "Aug", nps: 41 },
  { mo: "Sep", nps: 48 }, { mo: "Oct", nps: 52 }, { mo: "Nov", nps: 55 },
];

// ── Widget definitions ────────────────────────────────────────────────────────
interface WidgetDef {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
  icon: typeof BarChart3;
  iconColor: string;
  badge: string;
  badgeColor: string;
  chart: React.ReactNode;
  insight: string;
}

const WIDGETS: WidgetDef[] = [
  {
    id: "rev-region",
    title: "Revenue by Region",
    subtitle: "Current month · ₹ Lakhs",
    prompt: "Show revenue breakdown by region for this month",
    icon: BarChart3,
    iconColor: "text-primary",
    badge: "Bar Chart",
    badgeColor: "bg-primary/10 text-primary",
    insight: "North is leading (+18% vs last month). Export segment down 4% — flagged for review.",
    chart: (
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={revenueByRegion} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="region" tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v}L`]} />
          <Bar dataKey="revenue" fill={C.primary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "cashflow",
    title: "Cash Inflow vs Outflow",
    subtitle: "Last 6 months · ₹ Lakhs",
    prompt: "Compare cash inflows and outflows over the last 6 months",
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    badge: "Area Chart",
    badgeColor: "bg-emerald-500/10 text-emerald-400",
    insight: "Net cash position improved ₹56L MoM. Q4 runway is 14 months at current burn.",
    chart: (
      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={cashflowData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="in-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.emerald} stopOpacity={0.35} />
              <stop offset="100%" stopColor={C.emerald} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="out-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.rose} stopOpacity={0.25} />
              <stop offset="100%" stopColor={C.rose} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="mo" tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`₹${v}L`]} />
          <Area type="monotone" dataKey="in" stroke={C.emerald} fill="url(#in-g)" strokeWidth={2} name="Inflow" />
          <Area type="monotone" dataKey="out" stroke={C.rose} fill="url(#out-g)" strokeWidth={2} name="Outflow" />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "sku-margin",
    title: "Top SKU Margins",
    subtitle: "This quarter · %",
    prompt: "What are the top 6 SKUs by gross margin this quarter?",
    icon: BarChart3,
    iconColor: "text-violet-400",
    badge: "Bar Chart",
    badgeColor: "bg-violet-500/10 text-violet-400",
    insight: "SHF-22 and GRK-11 are high-margin outliers. Consider prioritising in next production run.",
    chart: (
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={skuData} layout="vertical" margin={{ top: 4, right: 4, left: 30, bottom: 0 }}>
          <XAxis type="number" tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="sku" tick={{ fontSize: 10, fill: "#999" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => [`${v}%`]} />
          <Bar dataKey="margin" fill={C.violet} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "spend-cat",
    title: "Spend by Category",
    subtitle: "Current month · % of total",
    prompt: "Break down total spend by cost category this month",
    icon: PieIcon,
    iconColor: "text-orange-400",
    badge: "Pie Chart",
    badgeColor: "bg-orange-500/10 text-orange-400",
    insight: "Raw materials at 38% — in line with target. Logistics creeping up 2pp vs last month.",
    chart: (
      <div className="flex items-center gap-4">
        <ResponsiveContainer width="50%" height={160}>
          <PieChart>
            <Pie data={categorySpend} dataKey="value" cx="50%" cy="50%" innerRadius={42} outerRadius={68} strokeWidth={0}>
              {categorySpend.map((c) => <Cell key={c.name} fill={c.color} />)}
            </Pie>
            <Tooltip {...tooltipStyle} formatter={(v: number) => [`${v}%`]} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-1.5 text-xs flex-1">
          {categorySpend.map(c => (
            <div key={c.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
              <span className="text-muted-foreground flex-1">{c.name}</span>
              <span className="font-mono font-bold" style={{ color: c.color }}>{c.value}%</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "headcount",
    title: "Headcount Growth",
    subtitle: "Last 8 quarters",
    prompt: "Show me headcount trend over the last 8 quarters",
    icon: Activity,
    iconColor: "text-cyan-400",
    badge: "Line Chart",
    badgeColor: "bg-cyan-500/10 text-cyan-400",
    insight: "Headcount up 36% over 2 years. Hiring pace accelerated in Q3 '24 with expansion to Dubai.",
    chart: (
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={headcountTrend} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="qtr" tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} />
          <Line type="monotone" dataKey="headcount" stroke={C.cyan} strokeWidth={2.5} dot={{ r: 3, fill: C.cyan }} name="Headcount" />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: "nps",
    title: "Customer NPS Trend",
    subtitle: "Last 6 months",
    prompt: "Plot customer NPS score over the past 6 months",
    icon: TrendingUp,
    iconColor: "text-rose-400",
    badge: "Line Chart",
    badgeColor: "bg-rose-500/10 text-rose-400",
    insight: "NPS improved 13 points over 6 months after the logistics overhaul in Q3.",
    chart: (
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={npsData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="nps-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.rose} stopOpacity={0.3} />
              <stop offset="100%" stopColor={C.rose} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="mo" tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#666" }} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} />
          <Area type="monotone" dataKey="nps" stroke={C.rose} fill="url(#nps-g)" strokeWidth={2.5} name="NPS" />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
];

// ── Widget card ───────────────────────────────────────────────────────────────
function WidgetCard({ w, onRemove }: { w: WidgetDef; onRemove: () => void }) {
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.88 }} transition={{ duration: 0.25 }}
      className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <GripVertical className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0 cursor-grab" />
          <w.icon className={`w-3.5 h-3.5 ${w.iconColor} flex-shrink-0`} />
          <span className="font-semibold text-sm truncate">{w.title}</span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${w.badgeColor}`}>{w.badge}</span>
          <button onClick={onRemove} className="w-5 h-5 rounded flex items-center justify-center text-muted-foreground/50 hover:text-foreground hover:bg-accent transition-colors">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-[10px] font-mono text-muted-foreground mb-2">{w.subtitle}</p>
        {w.chart}
      </div>

      {/* AI insight */}
      <div className="mx-3 mb-3 mt-1 flex items-start gap-2 p-2.5 rounded-lg bg-primary/5 border border-primary/10">
        <Zap className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-[10px] text-muted-foreground leading-relaxed">{w.insight}</p>
      </div>
    </motion.div>
  );
}

// ── Typewriter for suggestion text ───────────────────────────────────────────
function TypewriterText({ text, speed = 28 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
  }, [text]);
  useEffect(() => {
    if (count >= text.length) return;
    const t = setTimeout(() => setCount(c => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, text, speed]);
  return <span>{text.slice(0, count)}{count < text.length && <span className="animate-pulse">|</span>}</span>;
}

// ── AI prompt builder ─────────────────────────────────────────────────────────
const SUGGESTIONS = [
  "Show revenue breakdown by region for this month",
  "Compare cash inflows and outflows over the last 6 months",
  "What are the top 6 SKUs by gross margin this quarter?",
  "Break down total spend by cost category this month",
  "Show me headcount trend over the last 8 quarters",
  "Plot customer NPS score over the past 6 months",
];

const PromptBuilder = ({ onAdd }: { onAdd: (id: string) => void }) => {
  const [input, setInput] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [suggIdx, setSuggIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cycle suggestion placeholder
  useEffect(() => {
    const t = setInterval(() => setSuggIdx(i => (i + 1) % SUGGESTIONS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const handleGenerate = (prompt?: string) => {
    const p = prompt ?? input;
    if (!p.trim()) return;
    setGenerating(true);
    setGeneratedId(null);

    // Match the prompt to a widget
    const match = WIDGETS.find(w => w.prompt.toLowerCase().includes(p.toLowerCase().split(" ").slice(0, 3).join(" ").toLowerCase()))
      ?? WIDGETS.find(w => p.toLowerCase().includes(w.id.split("-")[0]))
      ?? WIDGETS[Math.floor(Math.random() * WIDGETS.length)];

    setTimeout(() => {
      setGenerating(false);
      setGeneratedId(match.id);
      setInput("");
      setTimeout(() => {
        onAdd(match.id);
        setGeneratedId(null);
      }, 900);
    }, 1600);
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Prompt bar */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <Bot className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold">AI Widget Generator</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready
          </span>
        </div>
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleGenerate()}
            placeholder={`e.g. "${SUGGESTIONS[suggIdx]}"`}
            className="flex-1 bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
          />
          <Button size="sm" className="rounded-xl gap-1.5 px-4 flex-shrink-0" onClick={() => handleGenerate()} disabled={generating}>
            {generating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            {generating ? "Building…" : "Generate"}
          </Button>
        </div>
      </div>

      {/* Generation feedback */}
      <AnimatePresence>
        {generating && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="px-5 py-3 border-b border-border bg-primary/5">
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <TypewriterText text="Analysing your data schema → selecting chart type → generating widget…" />
            </div>
          </motion.div>
        )}
        {generatedId && !generating && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="px-5 py-3 border-b border-border bg-emerald-500/5">
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              Widget generated — adding to your dashboard…
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick suggestions */}
      <div className="p-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2.5">Try a suggestion</p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTIONS.slice(0, 4).map(s => (
            <button key={s} onClick={() => handleGenerate(s)} disabled={generating}
              className="px-2.5 py-1 rounded-full border border-border text-[11px] text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all disabled:opacity-40 text-left">
              {s.length > 42 ? s.slice(0, 42) + "…" : s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Dashboard canvas ──────────────────────────────────────────────────────────
const DashboardCanvas = () => {
  const [active, setActive] = useState<string[]>(["rev-region", "cashflow", "spend-cat"]);

  const addWidget = (id: string) => {
    setActive(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const removeWidget = (id: string) => {
    setActive(prev => prev.filter(i => i !== id));
  };

  const visibleWidgets = WIDGETS.filter(w => active.includes(w.id));

  return (
    <section className="py-16 bg-card/10">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-10">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Live Demo</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Your AI dashboard builder</h2>
          <p className="text-muted-foreground">Describe what you want to see in plain English — the AI agent picks the right chart and builds the widget instantly.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-6 items-start">
          {/* Left: prompt + widget library */}
          <div className="flex flex-col gap-4">
            <PromptBuilder onAdd={addWidget} />

            {/* Widget library */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">Widget Library</p>
              <div className="flex flex-col gap-1">
                {WIDGETS.map(w => (
                  <button key={w.id} onClick={() => active.includes(w.id) ? removeWidget(w.id) : addWidget(w.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left transition-all ${active.includes(w.id) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                    <w.icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="flex-1 truncate">{w.title}</span>
                    {active.includes(w.id)
                      ? <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                      : <Plus className="w-3.5 h-3.5 flex-shrink-0 opacity-40" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: live canvas */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{visibleWidgets.length} widget{visibleWidgets.length !== 1 ? "s" : ""} on canvas</span>
              </div>
              <span className="text-xs font-mono text-muted-foreground/50">Click × on any widget to remove</span>
            </div>

            {visibleWidgets.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="rounded-2xl border border-dashed border-border h-64 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <LayoutDashboard className="w-8 h-8 opacity-30" />
                <p className="text-sm">Type a prompt or pick a widget to get started</p>
              </motion.div>
            ) : (
              <motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <AnimatePresence>
                  {visibleWidgets.map(w => (
                    <WidgetCard key={w.id} w={w} onRemove={() => removeWidget(w.id)} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <ShaderAnimation className="w-full h-full" opacity={0.2} variant="neural" />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary)/0.1) 0%, transparent 70%), linear-gradient(to bottom, hsl(var(--background)/0.1) 0%, hsl(var(--background)/0.6) 55%, hsl(var(--background)) 100%)" }} />
    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 rounded-full text-xs font-mono text-primary mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Widget Builder
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.04] mb-6">
          Describe your chart.<br /><span className="text-primary">AI builds it.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Type what you want to see in plain English. The Daxor AI agent analyses your ERP data, picks the right visualisation, and adds a live widget to your dashboard — in seconds.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="gap-2 rounded-full px-8 group">
            <a href="#demo">Try the Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <Link to="/analytics">View Analytics</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── How it works ──────────────────────────────────────────────────────────────
const steps = [
  { icon: Bot, title: "You describe it", desc: "Type a natural language request: 'Show me revenue by region for Q4' or 'Compare headcount across departments'." },
  { icon: Zap, title: "AI understands intent", desc: "The agent parses your request, identifies the relevant ERP data sources, and determines the best chart type." },
  { icon: BarChart3, title: "Widget is generated", desc: "A live, data-connected chart widget appears on your canvas — pre-loaded with your actual ERP data." },
  { icon: LayoutDashboard, title: "Build your board", desc: "Arrange, resize, and save your widget collection as a named dashboard. Share with your team in one click." },
];

const HowItWorks = () => (
  <section className="py-24 border-y border-border bg-card/10" id="demo">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">How It Works</p>
        <h2 className="text-4xl font-bold tracking-tight">Four steps from question to chart</h2>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-border" />
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-3 relative">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10">
                <s.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="font-bold leading-snug">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Features ──────────────────────────────────────────────────────────────────
const features = [
  { icon: Globe, color: "text-primary", bg: "bg-primary/10", title: "Any ERP data source", desc: "Finance, Supply Chain, HR, Sales — the agent knows your entire data estate and can cross-join any module." },
  { icon: RefreshCw, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "Always live", desc: "Every widget auto-refreshes from live ERP data. No stale exports, no manual updates." },
  { icon: Sparkles, color: "text-violet-400", bg: "bg-violet-500/10", title: "AI chart selection", desc: "The agent chooses bar, line, area, or pie based on the data shape and your question — and explains why." },
  { icon: Zap, color: "text-orange-400", bg: "bg-orange-500/10", title: "Instant AI insights", desc: "Each widget comes with a one-line AI insight pointing out what's notable — anomalies, trends, outliers." },
  { icon: Lock, color: "text-cyan-400", bg: "bg-cyan-500/10", title: "Permission-aware", desc: "The agent only surfaces data the logged-in user is authorised to see. RBAC enforced at query time." },
  { icon: LayoutDashboard, color: "text-rose-400", bg: "bg-rose-500/10", title: "Save & share boards", desc: "Save any canvas as a named dashboard. Share as a link, schedule as an email, or push to Slack weekly." },
];

const Features = () => (
  <section className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Capabilities</p>
        <h2 className="text-4xl font-bold tracking-tight">A dashboard tool that thinks</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className={`p-6 rounded-2xl border border-border ${f.bg} flex flex-col gap-3`}>
            <f.icon className={`w-5 h-5 ${f.color}`} />
            <h3 className="font-bold">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── CTA ───────────────────────────────────────────────────────────────────────
const CTA = () => (
  <section className="py-24 border-t border-border relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <ShaderAnimation className="w-full h-full" opacity={0.1} variant="neural" />
    </div>
    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)/0.5) 50%, hsl(var(--background)) 100%)" }} />
    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Your entire business, on one canvas</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Start building AI dashboards on your own ERP data. No data scientist required.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-full px-10 gap-2 group" asChild>
            <Link to="/contact">Request a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10" asChild>
            <Link to="/pricing">See Pricing</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Dashboards() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <DashboardCanvas />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
