import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Daxor ERP — AI-Native ERP Platform" },
      {
        name: "description",
        content: "AI-native ERP, plus consulting, migration, and training — all in one platform.",
      },
      { property: "og:title", content: "Daxor ERP — AI-Native ERP Platform" },
      {
        property: "og:description",
        content: "AI-native ERP, consulting, migration, and training — built in Bengaluru, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const stats = [
  { value: "50+", label: "Enterprises served" },
  { value: "98%", label: "Customer retention" },
  { value: "40%", label: "Faster reporting" },
];

const pillars = [
  { title: "Daxor ERP", desc: "AI-powered intelligent ERP platform" },
  { title: "Consulting", desc: "AWS, Azure, Snowflake & next-gen strategy" },
  { title: "Migration", desc: "Informatica → Microsoft Fabric & beyond" },
  { title: "Training", desc: "Corporate capability building programmes" },
];

const platforms = [
  "Microsoft Fabric",
  "Informatica",
  "Snowflake",
  "AWS",
  "Azure",
  "Databricks",
  "SAP",
  "Oracle",
  "Power BI",
  "Zoho",
];

const modules = [
  {
    name: "Finance & Accounting",
    desc: "Multi-entity consolidation and India GST/TDS compliance, built in.",
    img: "/illustrations/03-financial-report.png",
  },
  {
    name: "Supply Chain & Inventory",
    desc: "End-to-end traceability with real-time stock visibility.",
    img: "/illustrations/06-server-inventory.png",
  },
  {
    name: "HR & Payroll",
    desc: "Hire-to-retire workflows and statutory compliance, automated.",
    img: "/illustrations/09-hr-mobile.png",
  },
  {
    name: "Manufacturing & Production",
    desc: "AI production planning that reschedules around disruptions.",
    img: "/illustrations/07-production-dashboard.png",
  },
  {
    name: "Sales, CRM & Billing",
    desc: "Quote-to-cash automation with AI-powered deal scoring.",
    img: "/illustrations/04-crm-dashboard.png",
  },
  {
    name: "Spend & Procurement",
    desc: "3-way PO matching and AI anomaly detection on spend.",
    img: "/illustrations/10-procurement-tablet.png",
  },
  {
    name: "Built-in Chatbot",
    desc: "Natural language queries and workflow approvals via chat.",
    img: "/illustrations/13-chatbot-support.png",
  },
  {
    name: "AI Assistant",
    desc: "Forecasting and anomaly detection on your own data.",
    img: "/illustrations/12-ai-brain.png",
  },
];

const moduleStats = [
  { k: "60–70%", v: "Faster implementation" },
  { k: "1 platform", v: "No bolt-on tools" },
  { k: "Zero", v: "Hidden setup fees" },
  { k: "100%", v: "India GST compliant" },
];

const deliverables = [
  {
    title: "Technology Roadmap",
    desc: "Proof-of-concept and future-state architecture tailored to your business goals.",
  },
  {
    title: "Cloud Strategy",
    desc: "AWS, Microsoft Azure, and Google Cloud — we help you choose and implement the right stack.",
  },
  {
    title: "Data Platform Architecture",
    desc: "Snowflake, Databricks, and Microsoft Fabric — modern data platforms designed for scale.",
  },
  {
    title: "AI/ML Integration",
    desc: "End-to-end AI strategy from model selection to production deployment and monitoring.",
  },
];

const stack = [
  {
    tag: "Data Platform",
    title: "Microsoft Fabric & OneLake at the core",
    desc: "Daxor ERP is built on Microsoft Fabric's unified analytics platform — data lake, warehouse, and real-time intelligence in a single governed environment.",
  },
  {
    tag: "AI Layer",
    title: "Six AI engines. One intelligent platform.",
    desc: "AI Assistant, demand forecasting, anomaly detection, and NLP report generation — sharing a common feature store across every module.",
  },
  {
    tag: "ERP Core",
    title: "Seven modules. One unified workflow.",
    desc: "Finance, HR, Supply Chain, Manufacturing, Sales & CRM, Procurement, and a built-in chatbot — no integration tax.",
  },
  {
    tag: "Compliance",
    title: "India-first compliance. Global standards.",
    desc: "GST, TDS, e-Invoicing, Ind AS, and IFRS built into the transaction layer — with an immutable audit trail.",
  },
  {
    tag: "Integration",
    title: "Connect everything. Break nothing.",
    desc: "REST & GraphQL APIs, Power BI connector, and native chat integrations with WhatsApp, Slack, and Microsoft Teams.",
  },
  {
    tag: "Migration",
    title: "From legacy ETL to modern Fabric pipelines",
    desc: "Our automated migration engine translates Informatica and DataStage pipelines into Microsoft Fabric with zero-downtime cutover.",
  },
];

const migrationBenefits = [
  {
    num: "01",
    title: "Unified Data Estate",
    desc: "Eliminate silos forever. All your data lives in OneLake — no more copying between systems.",
  },
  {
    num: "02",
    title: "AI-Powered Speed & Insights",
    desc: "Built-in generative AI and real-time intelligence give you answers in minutes instead of days.",
  },
  {
    num: "03",
    title: "Dramatic Cost Savings",
    desc: "Reduce licensing costs by up to 60% and retire expensive on-premise hardware.",
  },
];

const trainingProgrammes = [
  {
    title: "Microsoft Fabric End-to-End",
    desc: "Data Factory, Lakehouse, Power BI, and AI — from fundamentals to advanced architecture.",
    tag: "Most popular",
  },
  {
    title: "AWS / Azure Cloud & Data Engineering",
    desc: "Cloud strategy, data platform design, and hands-on engineering on AWS and Azure.",
    tag: null,
  },
  {
    title: "Snowflake Architecture & Analytics",
    desc: "Advanced Snowflake patterns, performance tuning, and modern analytics workflows.",
    tag: null,
  },
  {
    title: "AI for Business Users",
    desc: "ChatGPT, Copilot, and custom AI assistants — practical AI for non-technical teams.",
    tag: "New",
  },
];

const scalabilityCards = [
  { title: "Second", desc: "Real-time payment processing at any scale" },
  { title: "Minute", desc: "Invoices generated and dispatched automatically" },
  { title: "Weekly", desc: "Payroll runs without manual intervention" },
  { title: "Monthly", desc: "Financial planning, forecasting & reconciliation" },
];

function InternshipCard({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="w-72 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md text-white shadow-2xl overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[color:var(--mint)] via-white/30 to-transparent" />
      <div className="p-5">
        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 text-white/40 hover:text-white transition"
          aria-label="Dismiss"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
        <div className="flex items-center gap-2 mb-3">
          <span className="animate-pulse w-2 h-2 rounded-full bg-[color:var(--mint)]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[color:var(--mint)]">Limited seats</span>
        </div>
        <p className="text-sm font-semibold leading-snug tracking-tight">
          Hurry! Enroll for your internship today — Summer 2026 cohort filling fast.
        </p>
        <p className="mt-1.5 text-xs text-white/60">Real projects · Expert mentors · Verified cert</p>
        <Link
          to="/internship"
          className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-white text-[color:var(--teal-deep)] px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition"
        >
          Apply now
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const [cardDismissed, setCardDismissed] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        {!cardDismissed && (
          <div className="absolute top-24 right-6 md:right-10 z-30 hidden md:block">
            <InternshipCard onDismiss={() => setCardDismissed(true)} />
          </div>
        )}

        <div className="container-page relative pt-40 pb-24 md:pt-48 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 border border-white/10 mb-8">
            <span className="text-[color:var(--mint)]">●</span>
            Bengaluru, India · AI-Native ERP Platform
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[0.98] max-w-3xl">
            A new era of <span className="italic text-white/80">intelligent</span> ERP.
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl">
            AI-native ERP, plus consulting, migration, and training — all in one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition inline-flex items-center gap-1"
            >
              Request a demo
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition inline-flex items-center"
            >
              Explore services
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-3xl font-medium tracking-tight">{s.value}</span>
                <span className="text-sm text-white/60">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* PLATFORMS MARQUEE */}
      <section className="border-b border-border">
        <div className="container-page py-14">
          <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-widest mb-8">
            Technologies & platforms we work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {platforms.map((p) => (
              <span key={p} className="text-lg tracking-tight text-muted-foreground/70 font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ERP MODULES */}
      <section id="product" className="py-24 md:py-32 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              Daxor ERP modules
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Enterprise sophistication. For everyone.
            </h2>
            <p className="mt-4 text-white/60">
              One platform, replacing many tools — with AI that understands your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="aspect-[4/3] flex items-center justify-center p-6">
                  <img
                    src={m.img}
                    alt=""
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="font-medium tracking-tight">{m.name}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
            {moduleStats.map((s) => (
              <div key={s.v} className="text-center">
                <p className="text-2xl font-medium">{s.k}</p>
                <p className="text-sm text-white/50 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section id="services" className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Consulting
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Strategic consulting for your next technology leap.
            </h2>
            <p className="mt-6 text-muted-foreground">
              AWS, Azure, or Snowflake? 100+ projects across manufacturing, retail, and fintech. We
              implement alongside your team, not just recommend.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal-deep)] hover:gap-2 transition-all"
            >
              Get a free 2-hour consultation
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-border p-6 bg-background hover:border-[color:var(--teal-mid)]/40 transition-colors"
              >
                <h3 className="font-medium text-sm">{d.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STACK */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              The Daxor stack
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
              Built on a modern, governed data platform.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((s) => (
              <div key={s.tag} className="rounded-2xl bg-background border border-border p-6">
                <div className="text-xs font-medium text-[color:var(--teal-mid)] uppercase tracking-wider">
                  {s.tag}
                </div>
                <h3 className="mt-2 font-medium tracking-tight leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <section id="migration" className="py-24 md:py-32">
        <div className="container-page">
          <div className="mb-16">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Migration expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight max-w-2xl">
              Seamless migration to Microsoft Fabric.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              Risk-free migration from legacy systems to modern platforms, without business
              disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {migrationBenefits.map((b) => (
              <div key={b.num} className="rounded-2xl border border-border p-6 bg-background">
                <span className="block text-4xl font-mono font-medium text-[color:var(--teal-mid)] mb-3">
                  {b.num}
                </span>
                <h3 className="text-lg font-medium">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border p-8 bg-secondary/40 flex flex-wrap gap-4">
            <Link
              to="/services/data-migration"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
            >
              Book free migration assessment
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-background transition"
            >
              See migration results
            </Link>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Corporate training
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight max-w-xl">
              Training programmes that deliver real results.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingProgrammes.map((p) => (
              <div
                key={p.title}
                className="relative rounded-2xl border border-border p-8 bg-background"
              >
                {p.tag && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
                    {p.tag}
                  </span>
                )}
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services/training"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
            >
              View training tracks
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Request corporate proposal
            </Link>
          </div>
        </div>
      </section>

      {/* SCALABILITY */}
      <section className="py-24 md:py-32 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-lg">
            <p className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4">
              World class scalability
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6 leading-tight">
              A scalable infrastructure built for moments that count.
            </h2>
            <p className="text-white/70 leading-relaxed">
              Serving more customers, shipping more products, entering new markets — Daxor scales
              with you, without compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scalabilityCards.map((c) => (
              <div key={c.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm font-medium tracking-wider uppercase mb-2">{c.title}</p>
                <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-24">
        <div className="container-page">
          <div className="rounded-3xl bg-secondary/60 border border-border p-10 md:p-16 grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
                Let's build your future together.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-md">
                Our team in Bengaluru is ready to help.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
                >
                  Book a personalised demo
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-background transition"
                >
                  Explore services
                </Link>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="text-xs font-medium uppercase tracking-widest text-foreground mb-3">
                Daxor Technologies Pvt. Ltd.
              </p>
              <p>Bengaluru, Karnataka, India</p>
              <p>contactus@daxor.in</p>
              <p>+91 88676 44425</p>
              <div className="pt-4 flex flex-wrap gap-2">
                {["Daxor ERP", "Consulting", "Migration", "Training"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full border border-border text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
