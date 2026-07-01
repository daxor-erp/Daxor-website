import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Services — Daxor" },
      {
        name: "description",
        content:
          "Cloud Consulting, Data Migration, Corporate Training, and AI/ML Integration — Daxor's services for enterprises modernizing their data and ERP stack.",
      },
      { property: "og:title", content: "Services — Daxor" },
      {
        property: "og:description",
        content: "Expert consulting, migration, training, and AI integration services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    name: "Cloud Consulting",
    tag: "AWS · Azure · Snowflake",
    href: "/services/cloud-consulting",
    desc: "Cloud strategy that actually delivers. Architecture design, proof of concept, and zero-downtime migration across the big three platforms.",
  },
  {
    name: "Data Migration",
    tag: "Informatica → Fabric",
    href: "/services/data-migration",
    desc: "Move your data. Lose nothing. A five-phase migration playbook from legacy ETL to Microsoft Fabric, Snowflake, or Databricks.",
  },
  {
    name: "Corporate Training",
    tag: "Fabric · Snowflake · AI/ML",
    href: "/services/training",
    desc: "Build a team that owns the data stack. Hands-on programmes delivered by practitioners, not theorists.",
  },
  {
    name: "AI/ML Integration",
    tag: "LLMs · Forecasting · RAG",
    href: "/services/ai-ml",
    desc: "Embed AI into what you already have. We design, build, and deploy models directly into your existing ERP and data workflows.",
  },
];

function ServicesIndex() {
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
              Services
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Expert services for your next technology leap.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              From cloud strategy to data migration, training, and applied AI — we implement
              alongside your team, not just around it.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/23-services-options.png"
              alt="Illustration of selectable service options"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.name}
              to={s.href}
              className="group relative rounded-3xl border border-border p-8 md:p-10 bg-background overflow-hidden hover:border-[color:var(--teal-mid)]/40 transition-all"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, oklch(0.9 0.09 170 / 0.15), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="text-xs font-medium text-[color:var(--teal-mid)] uppercase tracking-wider">
                  {s.tag}
                </div>
                <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">{s.name}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal-deep)]">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
