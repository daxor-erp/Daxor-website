import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/ai-ml")({
  component: AiMlIntegration,
  head: () => ({
    meta: [
      { title: "AI/ML Integration — Daxor" },
      {
        name: "description",
        content:
          "We design, build, and deploy AI/ML models directly into your existing ERP, CRM, and data workflows — without ripping anything out.",
      },
      { property: "og:title", content: "AI/ML Integration — Daxor" },
      { property: "og:description", content: "Embed AI into what you already have." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/ai-ml" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-ml" }],
  }),
});

const agentUseCases = [
  {
    icon: "💼",
    title: "Procurement Agent",
    desc: "Autonomously raises purchase orders, checks vendor SLAs, flags anomalies, and escalates for approval — all without manual intervention. Runs end-to-end across your ERP.",
  },
  {
    icon: "📊",
    title: "Finance & CFO Agent",
    desc: "Monitors cash flow, generates variance commentary, flags GST discrepancies, and prepares draft MIS reports by pulling data from your ledger and Fabric warehouse.",
  },
  {
    icon: "🛠️",
    title: "IT Helpdesk Agent",
    desc: "Triages support tickets, resolves common issues autonomously (password resets, access requests), escalates with context, and logs everything — reducing L1 ticket volume by 60%+.",
  },
  {
    icon: "📦",
    title: "Supply Chain Agent",
    desc: "Tracks inventory levels across locations, triggers replenishment workflows, reroutes shipments on delay detection, and sends real-time alerts to ops teams via Teams or WhatsApp.",
  },
  {
    icon: "🧾",
    title: "Invoice & Compliance Agent",
    desc: "Reads invoices from email or Drive, validates GST/TDS fields, cross-checks against POs, posts to the ERP, and flags exceptions — processing hundreds of documents per hour.",
  },
  {
    icon: "🎯",
    title: "Sales & CRM Agent",
    desc: "Qualifies inbound leads, drafts personalised follow-up emails, updates CRM records, surfaces deal risks, and nudges reps with next-best-action recommendations.",
  },
];

const agentCapabilities = [
  {
    title: "Multi-step reasoning",
    desc: "Agents plan, break tasks into steps, and self-correct when a step fails — without you writing a single if-else rule.",
  },
  {
    title: "Tool & API use",
    desc: "Agents call your ERP APIs, run SQL queries, read documents, send messages, and interact with external services as tools.",
  },
  {
    title: "Memory & context",
    desc: "Short-term conversation memory and long-term knowledge retrieval (RAG) — agents remember what matters and forget what doesn't.",
  },
  {
    title: "Human-in-the-loop",
    desc: "For high-stakes actions, agents pause and ask for approval — with full context — before proceeding. You control the guardrails.",
  },
];

const agentStack = [
  "Azure AI Foundry",
  "Copilot Studio",
  "LangChain / LangGraph",
  "Azure AI Search (RAG)",
  "Semantic Kernel",
  "OpenAI GPT-4o",
  "Azure Logic Apps",
  "Power Automate",
];

const useCases = [
  {
    title: "Demand Forecasting",
    desc: "LSTM and Prophet models trained on your ERP data, deployed as microservices feeding directly into procurement workflows.",
  },
  {
    title: "Conversational Interfaces",
    desc: "Natural language query layers over SQL, Spark, or REST APIs — embed a ChatGPT-style interface inside any internal tool.",
  },
  {
    title: "LLM-Powered Automation",
    desc: "Document classification, NLP report generation, invoice extraction, and contract analysis — all running on your private data.",
  },
  {
    title: "Anomaly Detection",
    desc: "Real-time unsupervised models monitoring transactions, logistics, and operational KPIs — alerting via Slack, Teams, or webhook.",
  },
  {
    title: "Recommendation Engines",
    desc: "Collaborative filtering and content-based models surfacing upsell opportunities, cost savings, and workflow improvements.",
  },
  {
    title: "Predictive Maintenance",
    desc: "IoT sensor data + ML models predicting equipment failure before it happens — reducing unplanned downtime by up to 60%.",
  },
];

const stack = [
  "Azure OpenAI / OpenAI API",
  "LangChain / LlamaIndex",
  "MLflow",
  "Databricks Feature Store",
  "Microsoft Fabric",
  "Snowflake Cortex",
  "Hugging Face",
  "Scikit-learn / XGBoost",
];

const deliveryModel = [
  {
    step: "01",
    title: "Use-case scoping",
    desc: "We shortlist 2–3 AI use cases with the highest ROI potential for your business.",
  },
  {
    step: "02",
    title: "Data readiness audit",
    desc: "We assess your data quality, labelling needs, and infrastructure gaps.",
  },
  {
    step: "03",
    title: "Prototype in 2 weeks",
    desc: "Working model serving predictions — not slides — within the first fortnight.",
  },
  {
    step: "04",
    title: "Production deployment",
    desc: "CI/CD pipeline, monitoring, drift detection, and retraining triggers included.",
  },
  {
    step: "05",
    title: "Knowledge transfer",
    desc: "Your team owns and operates the models after handover — no vendor lock-in.",
  },
];

const principles = [
  {
    title: "Private by default",
    desc: "Your data never leaves your cloud tenant. All models run inside your VPC / subscription.",
  },
  {
    title: "Auto-retraining",
    desc: "Models retrain on schedule or when drift is detected — no manual intervention needed.",
  },
  {
    title: "Explainable AI",
    desc: "Every prediction comes with a confidence score and feature attribution. Auditable from day one.",
  },
];

function AiMlIntegration() {
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
              AI/ML Integration
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Embed AI into what you already have.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              We design, build, and deploy AI/ML models directly into your existing ERP, CRM, and
              data workflows — without ripping anything out.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Book a use-case workshop
              </Link>
              <Link
                to="/product"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                See Daxor AI platform
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/24-aiml-finance-app.png"
              alt="Illustration of AI embedded into an existing finance app"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Use cases
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Six AI capabilities ready to plug in.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="p-6 rounded-2xl border border-border bg-background flex flex-col gap-3"
              >
                <h3 className="font-medium">{u.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI AGENTS SECTION */}
      <section className="py-24 md:py-32 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">AI Agents</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] leading-tight">
                We build AI Agents that work for your specific use case.
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/70 leading-relaxed mt-2">
                Unlike a chatbot that only answers questions, an AI Agent takes action. It plans, uses tools, calls APIs, and executes multi-step workflows autonomously — built around your exact business process, not a generic template.
              </p>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Daxor designs and deploys production-grade AI Agents on Azure AI Foundry, LangChain, and Copilot Studio — integrated with your ERP, CRM, and data warehouse from day one.
              </p>
            </div>
          </div>

          {/* Agent use case cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {agentUseCases.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                <span className="text-2xl">{a.icon}</span>
                <h3 className="font-medium text-lg tracking-tight">{a.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* How agents work */}
          <div className="border-t border-white/10 pt-16">
            <div className="mb-10">
              <p className="text-xs font-mono uppercase tracking-widest text-[color:var(--mint)] mb-3">How agents work</p>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Four capabilities that make agents genuinely useful.</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {agentCapabilities.map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="font-medium mb-2">{c.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Agent stack */}
          <div className="border-t border-white/10 pt-12 mt-12 flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 shrink-0">Built with</p>
            <div className="flex flex-wrap gap-2">
              {agentStack.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm font-mono text-white/70">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-white/10 pt-12 mt-12 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <div>
              <p className="text-xl font-medium tracking-tight">Have a workflow in mind?</p>
              <p className="text-white/60 text-sm mt-1">We scope and prototype your custom AI Agent in 2 weeks.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition inline-flex items-center gap-2"
            >
              Book a scoping call
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Technology
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">
              Best-in-class open stack, no lock-in.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full border border-border bg-background text-sm font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              How we work
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Prototype in 2 weeks, production in 6.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {deliveryModel.map((d) => (
              <div key={d.step} className="flex flex-col gap-3">
                <span className="text-xs font-mono text-muted-foreground">{d.step}</span>
                <h3 className="font-medium leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl border border-border bg-background flex flex-col gap-3"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            Start with one use case. Scale from there.
          </h2>
          <p className="text-lg opacity-70 mb-8">
            A focused 2-week use-case workshop identifies where AI delivers the most value in your
            business — at no risk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Book workshop
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              See what we've built
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
