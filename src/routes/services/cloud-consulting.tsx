import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/cloud-consulting")({
  component: CloudConsulting,
  head: () => ({
    meta: [
      { title: "Cloud Consulting — Daxor" },
      {
        name: "description",
        content:
          "AWS, Azure, and Snowflake expertise from architecture design through live migration and beyond. Free 1-hour architecture review.",
      },
      { property: "og:title", content: "Cloud Consulting — Daxor" },
      { property: "og:description", content: "Cloud strategy that actually delivers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/cloud-consulting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/cloud-consulting" }],
  }),
});

const platforms = [
  {
    short: "AWS",
    name: "Amazon Web Services",
    services: [
      "EC2 & EKS architecture",
      "RDS & Redshift strategy",
      "S3 data lake design",
      "IAM & security hardening",
      "Cost optimisation reviews",
    ],
  },
  {
    short: "Azure",
    name: "Microsoft Azure",
    services: [
      "Azure Fabric & OneLake",
      "AKS & Container Apps",
      "Azure SQL & Synapse",
      "Active Directory & SSO",
      "DevOps pipelines",
    ],
  },
  {
    short: "Snowflake",
    name: "Snowflake",
    services: [
      "Data warehouse design",
      "Snowpipe ingestion",
      "Role-based access control",
      "Cost & compute optimisation",
      "dbt integration",
    ],
  },
];

const steps = [
  {
    title: "Discovery & Assessment",
    desc: "We audit your current infrastructure, workloads, and spend to identify gaps and opportunities.",
  },
  {
    title: "Architecture Design",
    desc: "A tailored reference architecture covering compute, storage, networking, and security.",
  },
  {
    title: "Proof of Concept",
    desc: "Two-week PoC on a real workload to validate the design and de-risk the migration.",
  },
  {
    title: "Migration & Cutover",
    desc: "Zero-downtime migration with rollback plans and 24/7 support during cutover.",
  },
  {
    title: "Optimise & Govern",
    desc: "Ongoing cost reviews, security audits, and performance tuning post-go-live.",
  },
];

const outcomes = [
  { k: "35%", v: "Avg cloud cost reduction" },
  { k: "99.99%", v: "Uptime after migration" },
  { k: "< 2 wks", v: "PoC to decision" },
  { k: "ISO 27001", v: "Security baseline" },
];

function CloudConsulting() {
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
              Cloud Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Cloud strategy that actually delivers.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              AWS, Azure, and Snowflake expertise from design through migration. We own outcomes,
              not slide decks.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Talk to an architect
              </Link>
              <Link
                to="/case-studies"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                View case studies
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/22-cloud-moving.png"
              alt="Illustration of moving infrastructure to the cloud"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-20">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {outcomes.map((o) => (
            <div key={o.k}>
              <p className="text-3xl font-medium tracking-tight">{o.k}</p>
              <p className="text-sm text-muted-foreground mt-1">{o.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Platforms
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Deep expertise across the big three.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div
                key={p.short}
                className="rounded-2xl border border-border bg-background p-7 flex flex-col gap-5"
              >
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-[color:var(--teal-mid)]">
                    {p.short}
                  </p>
                  <p className="text-sm font-medium">{p.name}</p>
                </div>
                <ul className="space-y-2">
                  {p.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
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
                      <span className="text-foreground/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Our process
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              From chaos to clarity in five steps.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3">
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                <h3 className="font-medium leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            Ready to modernise your cloud?
          </h2>
          <p className="text-lg opacity-70 mb-8">
            Start with a free 1-hour architecture review. No commitment, no sales pitch.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Book a free review
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
