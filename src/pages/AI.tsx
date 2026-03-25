import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  Brain, Zap, Database, BarChart3, ArrowRight, MessageSquare,
  TrendingUp, AlertTriangle, FileText, Cpu, Sparkles, Activity,
  CheckCircle, ChevronRight, Bot, Network, Shield, Clock,
} from "lucide-react";

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

// ── Typewriter ────────────────────────────────────────────────────────────────
function Typewriter({ texts, speed = 55 }: { texts: string[]; speed?: number }) {
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && charIdx > 0) {
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setTextIdx((i) => (i + 1) % texts.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, textIdx, texts, speed]);

  return (
    <span className="text-primary">
      {texts[textIdx].slice(0, charIdx)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// ── Pulse ring ────────────────────────────────────────────────────────────────
function PulseRing({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full border border-primary/30"
      initial={{ scale: 1, opacity: 0.6 }}
      animate={{ scale: 2.4, opacity: 0 }}
      transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeOut" }}
    />
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative pt-32 pb-28 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <ShaderAnimation className="w-full h-full" opacity={0.22} variant="neural" />
    </div>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--primary)/0.08) 0%, transparent 70%), linear-gradient(to bottom, hsl(var(--background)/0.1) 0%, hsl(var(--background)/0.6) 55%, hsl(var(--background)) 100%)",
      }}
    />
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">
              Daxor AI Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.04] mb-6">
            AI that thinks
            <span className="block">like your{" "}
              <Typewriter texts={["CFO", "COO", "Analyst", "Data Scientist"]} />
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Six specialised AI engines embedded natively into Daxor ERP — forecasting, anomaly detection, NLP queries, and real-time recommendations. All talking to each other.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
              <Link to="/pricing">
                Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <Link to="/product">See AI Modules</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: animated AI orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-72 h-72 flex items-center justify-center">
            <PulseRing delay={0} />
            <PulseRing delay={0.8} />
            <PulseRing delay={1.6} />
            <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center shadow-[0_0_60px_hsl(var(--primary)/0.25)]">
              <Brain className="w-12 h-12 text-primary" />
            </div>
            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={deg}
                className="absolute w-3 h-3 rounded-full bg-primary/60"
                style={{ originX: "50%", originY: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 9 + i * 1.2, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="w-3 h-3 rounded-full bg-primary/70"
                  style={{
                    transform: `translateX(${Math.cos((deg * Math.PI) / 180) * 110}px) translateY(${Math.sin((deg * Math.PI) / 180) * 110}px)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ── Live Stats ────────────────────────────────────────────────────────────────
const stats = [
  { label: "AI queries / day", value: 2400000, suffix: "+", icon: MessageSquare },
  { label: "Anomalies caught", value: 98, suffix: "%", icon: AlertTriangle },
  { label: "Forecast accuracy", value: 94, suffix: "%", icon: TrendingUp },
  { label: "Avg response time", value: 320, suffix: "ms", icon: Clock },
];

const LiveStats = () => (
  <section className="py-16 border-y border-border bg-card/30">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <s.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{s.label}</span>
            </div>
            <p className="text-4xl font-bold tracking-tight text-foreground">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Interactive AI Demo ───────────────────────────────────────────────────────
const demoPrompts = [
  { q: "What's our cash runway at current burn rate?", a: "Based on your latest balance sheet (₹4.2 Cr in current assets) and average monthly burn of ₹38L, your runway is approximately **11 months**. Three cost centres have increased spend >15% MoM — Finance, Logistics, and Cloud infra." },
  { q: "Which SKUs are at risk of stockout in the next 2 weeks?", a: "My demand model flags **SKU-1042 (Ball Bearings M8)** and **SKU-2219 (Drive Shaft Assembly)** as high-risk. Current stock covers ~9 days at forecast consumption. Recommend issuing PO to Supplier #14 by Thursday." },
  { q: "Summarise last month's P&L for the board deck.", a: "**October MIS Summary** — Revenue ₹2.84 Cr (+6.3% MoM), EBITDA ₹47L (margin 16.5%). Key variance: raw material costs +₹12L due to commodity spike. NPS dropped 4 points — linked to delayed deliveries in Week 3." },
];

const AIDemo = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [shown, setShown] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const current = demoPrompts[activeIdx];

  useEffect(() => {
    setShown(false);
    setCharCount(0);
    const t1 = setTimeout(() => {
      setShown(true);
    }, 300);
    return () => clearTimeout(t1);
  }, [activeIdx]);

  useEffect(() => {
    if (!shown) return;
    const t = setTimeout(() => {
      setCharCount((c) => {
        if (c < current.a.length) return c + 3;
        return c;
      });
    }, 18);
    return () => clearTimeout(t);
  }, [shown, charCount, current.a]);

  const renderAnswer = (text: string) =>
    text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
      part.startsWith("**") ? (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Live Demo
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ask your AI anything
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Daxor AI Assistant understands your entire business context — financial data, operations, inventory, HR — and answers in plain English.
            </p>
            <div className="flex flex-col gap-3">
              {demoPrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 text-sm ${
                    activeIdx === i
                      ? "border-primary/50 bg-primary/5 text-foreground"
                      : "border-border hover:border-border/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ChevronRight className={`inline w-3.5 h-3.5 mr-1.5 transition-transform ${activeIdx === i ? "text-primary rotate-90" : ""}`} />
                  {p.q}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl"
          >
            {/* Titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">Daxor AI Assistant</span>
              <div className="ml-auto flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400">Online</span>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-4 min-h-[280px]">
              {/* User message */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`q-${activeIdx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="self-end max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm"
                >
                  {current.q}
                </motion.div>
              </AnimatePresence>

              {/* AI thinking indicator */}
              {!shown && (
                <div className="self-start flex items-center gap-2 px-4 py-3 rounded-2xl rounded-tl-sm bg-muted text-muted-foreground text-sm">
                  <Bot className="w-4 h-4" />
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                      />
                    ))}
                  </span>
                </div>
              )}

              {/* AI answer */}
              {shown && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`a-${activeIdx}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-start max-w-sm bg-muted rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <Bot className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">Daxor AI</span>
                    </div>
                    {renderAnswer(current.a.slice(0, charCount))}
                    {charCount < current.a.length && (
                      <span className="animate-pulse text-primary">▌</span>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Feature tabs ──────────────────────────────────────────────────────────────
const features = [
  {
    id: "forecast",
    icon: TrendingUp,
    label: "Demand Forecasting",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Know what's needed before it's needed",
    body: "Time-series ML models trained on your historical data, seasonality patterns, and external signals generate rolling 90-day demand forecasts — feeding directly into procurement and production scheduling.",
    points: ["Auto-retraining on new data", "Confidence intervals & scenarios", "Direct feed to procurement module", "MAPE under 6% on average"],
  },
  {
    id: "anomaly",
    icon: AlertTriangle,
    label: "Anomaly Detection",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    title: "Catch problems in milliseconds, not months",
    body: "Continuous unsupervised monitoring of every transaction, payroll run, and operational metric. Deviations are scored by severity and routed instantly to the right stakeholder via Slack, Teams, or WhatsApp.",
    points: ["Live transaction stream analysis", "Configurable per cost centre", "Full audit trail for every alert", "< 0.4% false positive rate"],
  },
  {
    id: "nlp",
    icon: FileText,
    label: "NLP Reports",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Board decks written by AI in minutes",
    body: "The NLP Report Generator turns raw ERP data into polished narrative — monthly MIS packs, board presentations, investor updates. Customisable templates with multilingual support.",
    points: ["Structured data → narrative prose", "PDF, Word & email export", "English, Hindi, and regional langs", "One-click regeneration with new data"],
  },
  {
    id: "data",
    icon: Database,
    label: "Data Assistant",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    title: "Ask your data lake anything",
    body: "Connect to OneLake, Snowflake, or Databricks and run complex queries in plain English. The Data Assistant translates your question to SQL or Spark, runs it, and returns charts, tables, or summaries.",
    points: ["Natural language → SQL / Spark", "Results as tables, charts, or text", "Works across all data sources", "Query history & saved views"],
  },
];

const FeatureTabs = () => {
  const [active, setActive] = useState("forecast");
  const feat = features.find((f) => f.id === active)!;

  return (
    <section className="py-24 bg-card/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12"
        >
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">AI Engines</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Purpose-built for ERP workflows</h2>
        </motion.div>

        {/* Tab strip */}
        <div className="flex flex-wrap gap-2 mb-10">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === f.id
                  ? `${f.bg} border-current ${f.color}`
                  : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
              }`}
            >
              <f.icon className="w-3.5 h-3.5" />
              {f.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${feat.bg} ${feat.color} text-xs font-mono font-bold uppercase tracking-widest mb-4`}>
                <feat.icon className="w-3.5 h-3.5" />
                {feat.label}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">{feat.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{feat.body}</p>
              <ul className="space-y-2.5">
                {feat.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feat.color}`} />
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual placeholder with animated graph lines */}
            <div className={`rounded-2xl border border-border ${feat.bg} p-8 min-h-[240px] flex items-center justify-center relative overflow-hidden`}>
              <feat.icon className={`w-20 h-20 ${feat.color} opacity-10 absolute`} />
              <div className="w-full space-y-3 relative z-10">
                {[75, 45, 88, 62, 93].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="text-xs text-muted-foreground w-16 font-mono">
                      {["Mon", "Tue", "Wed", "Thu", "Fri"][i]}
                    </span>
                    <div className="flex-1 h-2 bg-background/40 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${feat.bg.replace("/10", "/60")}`}
                        style={{ backgroundColor: `hsl(var(--primary) / 0.5)` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${h}%` }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    <span className={`text-xs font-mono ${feat.color} w-8 text-right`}>{h}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ── How it works ──────────────────────────────────────────────────────────────
const steps = [
  { icon: Network, title: "Connect your data", desc: "Plug Daxor into your existing stack — OneLake, Snowflake, Databricks, SAP, or legacy ERPs. Zero-copy ingestion." },
  { icon: Cpu, title: "AI learns your business", desc: "Six ML models initialise on your historical data. First forecasts and baselines are ready within 48 hours." },
  { icon: Sparkles, title: "Insights surface automatically", desc: "Anomalies, forecasts, and recommendations are pushed to the right people via chat, email, or in-app notifications." },
  { icon: Shield, title: "You stay in control", desc: "Every AI decision is explainable and auditable. Approve, reject, or override any recommendation with a single click." },
];

const HowItWorks = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mb-16"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">How it works</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From zero to AI-powered in 48 hours</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-4 relative"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10">
                <s.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="font-bold text-lg leading-snug">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Social proof strip ────────────────────────────────────────────────────────
const proofs = [
  { metric: "11 months", label: "avg payback period", icon: TrendingUp },
  { metric: "40%", label: "reduction in analyst overhead", icon: BarChart3 },
  { metric: "3×", label: "faster month-end close", icon: Zap },
  { metric: "99.9%", label: "uptime SLA", icon: Shield },
];

const SocialProof = () => (
  <section className="py-20 border-y border-border bg-card/20">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {proofs.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-1"
          >
            <p.icon className="w-5 h-5 text-primary mb-2 opacity-70" />
            <p className="text-3xl md:text-4xl font-bold tracking-tight">{p.metric}</p>
            <p className="text-sm text-muted-foreground">{p.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── CTA ───────────────────────────────────────────────────────────────────────
const CTA = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <ShaderAnimation className="w-full h-full" opacity={0.12} variant="neural" />
    </div>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)/0.4) 50%, hsl(var(--background)) 100%)" }}
    />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 rounded-full text-xs font-mono text-primary mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Ready when you are
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Put AI at the core<br />of your enterprise
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
          Start with a 30-minute live demo on your own data. No setup required.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-full px-10 gap-2 group" asChild>
            <Link to="/pricing">
              View Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10" asChild>
            <Link to="/product">Explore AI Modules</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const AIPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <LiveStats />
    <AIDemo />
    <FeatureTabs />
    <HowItWorks />
    <SocialProof />
    <CTA />
    <Footer />
  </div>
);

export default AIPage;
