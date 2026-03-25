import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Layers, RefreshCw, ShieldCheck,
  Database, Globe, Building2, ChevronLeft, ChevronRight,
  type LucideIcon,
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

const AUTO_INTERVAL = 4000; // ms between auto-advances

// ── Card visual ───────────────────────────────────────────────────────────────
function StackCard({ slide }: { slide: Slide }) {
  return (
    <div className={`bg-gradient-to-br ${slide.bg} rounded-3xl p-8 flex flex-col gap-5 w-full`} style={{ minHeight: 320 }}>
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
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = forward, -1 = backward
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = slides[activeIndex];

  // Navigate with direction tracking + timer reset
  const goTo = useCallback((index: number, dir: 1 | -1) => {
    setDirection(dir);
    setActiveIndex(index);
    // Reset auto-play timer on manual interaction
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % slides.length);
    }, AUTO_INTERVAL);
  }, []);

  const prev = () => {
    const next = (activeIndex - 1 + slides.length) % slides.length;
    goTo(next, -1);
  };

  const next = () => {
    const next = (activeIndex + 1) % slides.length;
    goTo(next, 1);
  };

  // Auto-play on mount
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % slides.length);
    }, AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const cardVariants = {
    enter: (dir: number) => ({ rotateX: dir > 0 ? -60 : 60, y: dir > 0 ? -40 : 40, opacity: 0, scale: 0.92 }),
    center: { rotateX: 0, y: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ rotateX: dir > 0 ? 30 : -30, y: dir > 0 ? 30 : -30, opacity: 0, scale: 0.95 }),
  };

  const textVariants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 20 : -20 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -16 : 16 }),
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-6">
              The ERP Stack
            </p>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
                  {active.title}
                </h2>
                <div className="space-y-3">
                  {active.paragraphs.map((p) => (
                    <p key={p} className="text-muted-foreground leading-relaxed text-sm md:text-base">{p}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls row */}
            <div className="flex items-center gap-4 mt-10">
              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors flex-shrink-0"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dot pills */}
              <div className="flex items-center gap-1.5 flex-1">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="rounded-full transition-all duration-300 flex-shrink-0"
                    style={{
                      width: i === activeIndex ? 24 : 8,
                      height: 8,
                      backgroundColor: i === activeIndex ? active.accent : "hsl(var(--border))",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors flex-shrink-0"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Slide counter */}
              <span className="text-xs font-mono text-muted-foreground flex-shrink-0">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Right: card ── */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div
              className="relative w-full"
              style={{ perspective: "1200px", perspectiveOrigin: "50% 30%" }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "50% 0%" }}
                >
                  <StackCard slide={slides[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ERPStackSection;
