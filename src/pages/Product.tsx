import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  Brain, Zap, Database, BarChart3, ArrowRight,
  MessageSquare, TrendingUp, AlertTriangle, FileText,
  Layers, RefreshCw, CheckCircle, Cpu, Globe, Lock,
} from "lucide-react";

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative pt-32 pb-24 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <ShaderAnimation className="w-full h-full" opacity={0.18} />
    </div>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--background)/0.2) 0%, hsl(var(--background)/0.5) 60%, hsl(var(--background)) 100%)",
      }}
    />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-6">
          Daxor AI — Intelligent ERP Layer
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          The AI brain behind
          <span className="block text-primary"> Daxor ERP</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
          Six AI modules working in concert — forecasting demand, detecting anomalies, answering questions in plain English, and generating board-ready reports. All embedded natively into your ERP.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
            <Link to="/pricing">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <Link to="/">See the Platform</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── AI Modules ────────────────────────────────────────────────────────────────
const modules = [
  {
    icon: Brain,
    tag: "AI Assistant",
    title: "Your 24×7 virtual CFO & COO",
    desc: "Ask anything about your business in plain language. Get instant answers on cash flow, headcount, inventory levels, and more — no SQL, no dashboards, no waiting.",
    bullets: [
      "Natural language interface across all ERP modules",
      "Synthesises insights from forecasting, anomaly & NLP engines",
      "Role-aware responses for Finance, Ops, HR, and Sales",
      "Escalation to human experts when confidence is low",
    ],
    color: "from-primary/10 to-primary/5",
    accent: "text-primary",
  },
  {
    icon: TrendingUp,
    tag: "Demand Forecasting",
    title: "Predict what's coming before it arrives",
    desc: "ML models trained on your historical sales, seasonality, and external signals produce accurate demand forecasts — feeding directly into procurement and production planning.",
    bullets: [
      "Time-series models on Microsoft Fabric / Databricks",
      "Automatic retraining as new data arrives",
      "Feeds Supply Chain, Manufacturing & Procurement modules",
      "Confidence intervals and scenario planning built-in",
    ],
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-500",
  },
  {
    icon: AlertTriangle,
    tag: "Anomaly Detection",
    title: "Catch problems before they become crises",
    desc: "Continuous monitoring of transactions, spend patterns, and operational metrics. Unusual activity triggers instant alerts to the right people via Slack, Teams, or WhatsApp.",
    bullets: [
      "Unsupervised anomaly detection on live transaction streams",
      "Spend, payroll, and inventory deviation alerts",
      "Configurable thresholds per department or cost centre",
      "Full audit trail for every flagged event",
    ],
    color: "from-orange-500/10 to-orange-500/5",
    accent: "text-orange-500",
  },
  {
    icon: FileText,
    tag: "NLP Report Generator",
    title: "Board-ready reports written by AI",
    desc: "Turn raw financial and operational data into polished narrative reports. Monthly MIS, board packs, and investor updates — generated in minutes, not days.",
    bullets: [
      "Structured data → narrative prose via LLM pipeline",
      "Customisable templates per report type",
      "Export to PDF, Word, or push to email/Slack",
      "Supports English, Hindi, and regional languages",
    ],
    color: "from-violet-500/10 to-violet-500/5",
    accent: "text-violet-500",
  },
  {
    icon: Database,
    tag: "Data Assistant",
    title: "Query your entire data estate in plain English",
    desc: "Connect to OneLake, Snowflake, or Databricks and ask questions like 'What were our top 10 SKUs by margin last quarter?' — get results in seconds, no analyst required.",
    bullets: [
      "Natural language → SQL / Spark query translation",
      "Works across all connected data sources",
      "Results returned as tables, charts, or summaries",
      "Query history and saved views for teams",
    ],
    color: "from-cyan-500/10 to-cyan-500/5",
    accent: "text-cyan-500",
  },
  {
    icon: BarChart3,
    tag: "Analytics & Recommendations",
    title: "Proactive insights, not just reactive reports",
    desc: "The recommendation engine surfaces upsell opportunities, cost-saving actions, and operational improvements — pushed to the right person at the right time.",
    bullets: [
      "Collaborative filtering for upsell & cross-sell signals",
      "Cost optimisation recommendations from spend data",
      "Personalised insights per user role",
      "Integrates with CRM, Sales, and Procurement modules",
    ],
    color: "from-blue-500/10 to-blue-500/5",
    accent: "text-blue-500",
  },
];

const AIModules = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-16"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">AI Modules</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Six AI engines, one unified platform</h2>
        <p className="text-muted-foreground text-lg">Each module is purpose-built for enterprise ERP workflows and works together through a shared intelligence layer.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.tag}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className={`rounded-2xl border border-border bg-gradient-to-br ${mod.color} p-7 flex flex-col gap-4`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background/60 border border-border">
                <mod.icon className={`w-5 h-5 ${mod.accent}`} />
              </div>
              <span className={`text-xs font-mono font-bold uppercase tracking-widest ${mod.accent}`}>{mod.tag}</span>
            </div>
            <h3 className="text-xl font-bold leading-snug">{mod.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
            <ul className="space-y-2 mt-1">
              {mod.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${mod.accent}`} />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Architecture strip ────────────────────────────────────────────────────────
const archLayers = [
  { icon: Globe, label: "Inputs", desc: "Browser, Mobile, APIs, IoT, Legacy ERP" },
  { icon: RefreshCw, label: "Ingestion", desc: "Migration Engine, API Gateway, Kafka" },
  { icon: Layers, label: "Data Platform", desc: "OneLake, Snowflake, Databricks, ADLS" },
  { icon: Cpu, label: "AI / ML Layer", desc: "6 AI engines on shared feature store" },
  { icon: Brain, label: "ERP Core", desc: "7 modules — Finance, HR, Supply Chain…" },
  { icon: Lock, label: "Compliance", desc: "GST, TDS, Ind AS, IFRS, Audit Trail" },
];

const ArchStrip = () => (
  <section className="py-20 bg-surface-dark text-surface-dark-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mb-12"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest opacity-50 mb-3">Architecture</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built on a modern data stack</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {archLayers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col gap-3 p-5 rounded-xl border border-white/10 bg-white/5"
          >
            <layer.icon className="w-5 h-5 opacity-70" />
            <p className="font-semibold text-sm">{layer.label}</p>
            <p className="text-xs opacity-50 leading-relaxed">{layer.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Integration callouts ──────────────────────────────────────────────────────
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

const Integrations = () => (
  <section className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mb-12"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Integrations</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Connects to your existing stack</h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {integrations.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
          >
            <p className="font-semibold text-sm mb-1">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── CTA ───────────────────────────────────────────────────────────────────────
const CTA = () => (
  <section className="py-24 bg-surface-dark text-surface-dark-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to put AI at the core of your ERP?
        </h2>
        <p className="text-lg opacity-70 mb-8">
          Book a 30-minute demo and see the AI Assistant, Data Assistant, and Anomaly Detection live on your own data.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2 group" asChild>
            <Link to="/pricing">
              View Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <AIModules />
    <ArchStrip />
    <Integrations />
    <CTA />
    <Footer />
  </div>
);

export default Product;
