import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Layers, RefreshCw, ShieldCheck,
  BarChart3, Cpu, Database, Globe, Zap, Lock,
  Building2, TrendingUp, type LucideIcon,
} from "lucide-react";

type Slide = {
  label: string;
  icon: LucideIcon;
  accent: string;
  bg: string;
  tag: string;
  title: string;
  paragraphs: string[];
  points: string[];
};

const slides: Slide[] = [
  {
    label: "Data Platform",
    icon: Database,
    accent: "#3b82f6",
    bg: "from-blue-600 to-blue-900",
    tag: "Data Platform",
    title: "Microsoft Fabric & OneLake at the core.",
    paragraphs: [
      "Daxor ERP is built on Microsoft Fabric's unified analytics platform — combining data lake, warehouse, and real-time intelligence in a single governed environment.",
      "OneLake acts as the single source of truth, syncing with Snowflake and Databricks for analytical workloads and ML training pipelines.",
    ],
    points: [
      "Unified data lakehouse — no silos",
      "Real-time ingestion via Kafka & Event Hub",
      "Automatic schema evolution and lineage",
    ],
  },
  {
    label: "AI Layer",
    icon: Brain,
    accent: "#a855f7",
    bg: "from-violet-600 to-violet-900",
    tag: "AI Layer",
    title: "Six AI engines. One intelligent platform.",
    paragraphs: [
      "The AI layer sits between your data platform and ERP core — continuously learning from transactions, forecasting demand, detecting anomalies, and generating board-ready reports.",
      "Every module shares a common feature store so insights compound across Finance, HR, Supply Chain, and Sales simultaneously.",
    ],
    points: [
      "AI Assistant — natural language CFO/COO",
      "Demand Forecasting — ML on your history",
      "Anomaly Detection — real-time spend alerts",
      "NLP Report Generator — board packs in minutes",
    ],
  },
  {
    label: "ERP Core",
    icon: Building2,
    accent: "#ec4899",
    bg: "from-pink-600 to-pink-900",
    tag: "ERP Core",
    title: "Seven modules. One unified workflow.",
    paragraphs: [
      "Finance, HR & Payroll, Supply Chain, Manufacturing, Sales & CRM, Procurement, and a built-in AI Chatbot — all sharing the same data model with no integration tax.",
      "Solve whole-business problems end-to-end: order to cash, procure to pay, hire to retire.",
    ],
    points: [
      "No-code workflow automation engine",
      "Role-aware dashboards per department",
      "Built-in chatbot for approvals & queries",
    ],
  },
  {
    label: "Compliance",
    icon: ShieldCheck,
    accent: "#f43f5e",
    bg: "from-rose-600 to-rose-900",
    tag: "Compliance",
    title: "India-first compliance. Global standards.",
    paragraphs: [
      "GST, TDS, e-Invoicing, Ind AS, and IFRS are built into the transaction layer — not bolted on as an afterthought.",
      "Every financial event generates an immutable audit trail with full access control, satisfying both Indian regulators and international auditors.",
    ],
    points: [
      "GST · TDS · e-Invoice auto-filing",
      "Ind AS & IFRS accounting standards",
      "Immutable audit trail & RBAC",
    ],
  },
  {
    label: "Integration",
    icon: Layers,
    accent: "#10b981",
    bg: "from-emerald-500 to-emerald-900",
    tag: "Integration",
    title: "Connect everything. Break nothing.",
    paragraphs: [
      "REST & GraphQL APIs, webhooks, Power BI connector, and native chat integrations with WhatsApp, Slack, and Microsoft Teams.",
      "The workflow automation engine orchestrates cross-module events — approvals, escalations, and scheduled exports — without custom code.",
    ],
    points: [
      "Open REST / GraphQL API layer",
      "WhatsApp · Slack · Teams connectors",
      "Power BI & scheduled PDF/Excel exports",
    ],
  },
  {
    label: "Migration",
    icon: RefreshCw,
    accent: "#14b8a6",
    bg: "from-teal-500 to-teal-900",
    tag: "Migration",
    title: "From legacy ETL to modern Fabric pipelines.",
    paragraphs: [
      "Our automated migration engine translates Informatica and DataStage pipelines into Microsoft Fabric — preserving business logic while eliminating licence costs.",
      "Executed by the same team that built the platform, with zero-downtime cutover and full rollback capability.",
    ],
    points: [
      "Informatica → Microsoft Fabric",
      "SSIS · DataStage · Oracle ODI supported",
      "Zero-downtime cutover strategy",
    ],
  },
  {
    label: "Infrastructure",
    icon: Globe,
    accent: "#8b5cf6",
    bg: "from-indigo-500 to-indigo-900",
    tag: "Infrastructure",
    title: "Multi-cloud. Your rules.",
    paragraphs: [
      "Deploy on AWS, Microsoft Azure, Google Cloud, or your own private infrastructure — Daxor ERP is cloud-agnostic by design.",
      "Data residency, sovereignty, and latency requirements are met without compromising on performance or feature parity.",
    ],
    points: [
      "AWS · Azure · GCP · Private Cloud",
      "Data residency & sovereignty controls",
      "99.99% SLA with global CDN",
    ],
  },
];

// ── Card visual ───────────────────────────────────────────────────────────────
function StackCard({ slide }: { slide: Slide; isActive: boolean }) {
  return (
    <div
      className={`bg-gradient-to-br ${slide.bg} rounded-3xl p-8 flex flex-col gap-5 w-full h-full`}
      style={{ minHeight: 320 }}
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-white/15 border border-white/25">
          <slide.icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60">
          {slide.tag}
        </span>
      </div>

      <h3 className="text-white font-bold text-2xl leading-snug">{slide.title}</h3>

      {slide.points.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {slide.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2 text-sm text-white/75">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/60" />
              {pt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
const ERPStackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrolled < 0 || scrollableDistance <= 0) { setActiveIndex(0); return; }
      const progress = Math.max(0, Math.min(0.9999, scrolled / scrollableDistance));
      setActiveIndex(Math.min(slides.length - 1, Math.floor(progress * slides.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = slides[activeIndex];

  return (
    <div ref={sectionRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex items-center bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

            {/* ── Left: text ── */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-6">
                The ERP Stack
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                    {active.title}
                  </h2>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-10">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIndex ? 24 : 8,
                      height: 8,
                      backgroundColor: i === activeIndex ? active.accent : "hsl(var(--border))",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: stacked cards ── */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div
                className="relative w-full h-[420px]"
                style={{ perspective: "1200px", perspectiveOrigin: "50% 30%" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ rotateX: -75, y: -60, opacity: 0, scale: 0.9 }}
                    animate={{ rotateX: 0,  y: 0,   opacity: 1, scale: 1   }}
                    exit={{    rotateX: 30,  y: 40,  opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 right-0"
                    style={{
                      top: "50%",
                      marginTop: -160,
                      transformStyle: "preserve-3d",
                      transformOrigin: "50% 0%",
                    }}
                  >
                    <StackCard slide={slides[activeIndex]} isActive />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPStackSection;
