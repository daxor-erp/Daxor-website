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
