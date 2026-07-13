import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/training")({
  component: Training,
  head: () => ({
    meta: [
      { title: "Corporate Training — Daxor" },
      {
        name: "description",
        content:
          "Hands-on training programmes for Microsoft Fabric, Snowflake, Databricks, and Applied AI/ML — delivered by practitioners, not theorists.",
      },
      { property: "og:title", content: "Corporate Training — Daxor" },
      { property: "og:description", content: "Build a team that owns the data stack." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/training" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/training" }],
  }),
});

const courses = [
  {
    title: "Microsoft Fabric & OneLake",
    duration: "3 days",
    level: "Intermediate",
    desc: "Hands-on programme covering Lakehouses, Data Factory pipelines, Spark notebooks, and Direct Lake Power BI integration.",
    topics: [
      "OneLake architecture & shortcuts",
      "Data Factory pipeline authoring",
      "Spark & SQL endpoints",
      "Real-time analytics with Eventhouse",
      "Row-level security & governance",
    ],
  },
  {
    title: "Snowflake for Engineers",
    duration: "2 days",
    level: "Beginner–Intermediate",
    desc: "From Snowflake basics to advanced cost optimisation, clustering, and Snowpipe streaming — all with real enterprise datasets.",
    topics: [
      "Virtual warehouses & credits",
      "Snowpipe & Kafka connector",
      "Time Travel & Fail-safe",
      "dbt on Snowflake",
      "Cost monitoring & budgets",
    ],
  },
  {
    title: "Databricks & Apache Spark",
    duration: "4 days",
    level: "Intermediate–Advanced",
    desc: "End-to-end training on Delta Lake, MLflow, Feature Store, and Unity Catalog. Build production ML pipelines from scratch.",
    topics: [
      "Delta Lake ACID transactions",
      "Structured Streaming",
      "MLflow tracking & registry",
      "Unity Catalog data governance",
      "Databricks Asset Bundles (CI/CD)",
    ],
  },
  {
    title: "Applied AI/ML for Enterprise",
    duration: "3 days",
    level: "Intermediate",
    desc: "LLMs, RAG pipelines, anomaly detection, and time-series forecasting — all applied to ERP and supply chain problems.",
    topics: [
      "LLM prompt engineering & fine-tuning",
      "RAG with Azure OpenAI",
      "Time-series forecasting (Prophet, LSTM)",
      "Anomaly detection at scale",
      "Productionising ML models",
    ],
  },
];

const formats = [
  { label: "On-site cohort", desc: "Your team, your office, your schedule. Min 5 participants." },
  { label: "Virtual instructor-led", desc: "Live sessions over Zoom with breakout labs and Q&A." },
  {
    label: "Self-paced portal",
    desc: "Recorded labs + quizzes with 90-day access and certification.",
  },
];

const stats = [
  { v: "400+", l: "engineers trained" },
  { v: "4", l: "specialised tracks" },
  { v: "95%", l: "satisfaction score" },
  { v: "3 formats", l: "on-site · virtual · self-paced" },
];

function Training() {
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
              Corporate Training
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Build a team that owns the data stack.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Hands-on training programmes for Microsoft Fabric, Snowflake, Databricks, and Applied
              AI/ML — delivered by practitioners, not theorists.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Enquire about training
              </Link>
              <Link
                to="/pricing"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                See pricing
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/21-training-checklist.png"
              alt="Illustration of a completed training checklist"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain illus"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-20">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-medium tracking-tight">{s.v}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Courses
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Four intensive tracks.
            </h2>
          </div>
          <div className="flex flex-col gap-3 max-w-3xl">
            {courses.map((c) => (
              <details
                key={c.title}
                className="group rounded-2xl border border-border bg-background overflow-hidden"
              >
                <summary className="w-full flex items-center gap-4 p-5 text-left cursor-pointer list-none">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium leading-snug">{c.title}</p>
                    <div className="flex gap-3 mt-0.5 text-xs text-muted-foreground">
                      <span>{c.duration}</span>
                      <span>{c.level}</span>
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="p-5 pt-0 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Topics covered
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {c.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          className="mt-0.5 text-[color:var(--teal-mid)] shrink-0"
                        >
                          <path
                            d="M13 4 L6 12 L3 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-foreground/80">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition"
                  >
                    Enquire
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Delivery formats
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">
              Training that fits your team.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div
                key={f.label}
                className="p-6 rounded-2xl border border-border bg-background flex flex-col gap-3"
              >
                <h3 className="font-medium">{f.label}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            Upskill your team in weeks, not years.
          </h2>
          <p className="text-lg opacity-70 mb-8">
            Contact us with your team size, current stack, and goals — we'll design a custom
            programme.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition inline-flex"
          >
            Design a custom programme
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
