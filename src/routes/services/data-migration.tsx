import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/data-migration")({
  component: DataMigration,
  head: () => ({
    meta: [
      { title: "Data Migration — Daxor" },
      {
        name: "description",
        content:
          "Informatica, SSIS, SAP — modernised to Microsoft Fabric, Snowflake, or Databricks with zero data loss and near-zero downtime.",
      },
      { property: "og:title", content: "Data Migration — Daxor" },
      { property: "og:description", content: "Move your data. Lose nothing." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/data-migration" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/data-migration" }],
  }),
});

const sources = [
  "Informatica PowerCenter",
  "SSIS / SSDT",
  "SAP BW / SAP ECC",
  "Oracle GoldenGate",
  "Talend",
  "IBM DataStage",
  "Pentaho",
  "Custom ETL scripts",
];
const targets = [
  "Microsoft Fabric / OneLake",
  "Snowflake",
  "Databricks Lakehouse",
  "Azure Synapse",
  "Google BigQuery",
  "AWS Redshift",
];

const phases = [
  {
    phase: "01",
    title: "Source Profiling",
    desc: "Automated scanning of every source system — schema discovery, row counts, data quality scoring, and dependency mapping.",
  },
  {
    phase: "02",
    title: "Mapping & Rules",
    desc: "Business rules are captured as code in a version-controlled mapping repository. Every transformation is reviewable and auditable.",
  },
  {
    phase: "03",
    title: "Parallel Validation",
    desc: "Source and target run simultaneously. Automated reconciliation reports compare row counts, checksums, and business KPIs.",
  },
  {
    phase: "04",
    title: "Cutover & Freeze",
    desc: "Change-data-capture brings the target up to the second. We freeze source writes for minutes, not days.",
  },
  {
    phase: "05",
    title: "Hypercare",
    desc: "30 days of 24/7 support post-cutover. Issues are escalated and resolved in under 2 hours.",
  },
];

const risks = [
  {
    risk: "Data loss",
    mitigation: "Triple-verified checksums at every stage + rollback snapshots",
  },
  {
    risk: "Downtime",
    mitigation: "CDC-based near-zero-downtime cutover — tested on 10TB+ datasets",
  },
  { risk: "Schema drift", mitigation: "Automated drift detection alerts 48 hrs before cutover" },
  {
    risk: "Compliance gaps",
    mitigation: "PII masking and encryption applied during the transformation layer",
  },
];

function DataMigration() {
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
              Data Migration
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Move your data. Lose nothing.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Informatica, SSIS, SAP — modernised to Microsoft Fabric, Snowflake, or Databricks with
              zero data loss and near-zero downtime.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Start migration assessment
              </Link>
              <Link
                to="/case-studies"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                See results
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/20-data-migration.png"
              alt="Illustration of data files moving between systems"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain illus"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">
              We migrate FROM
            </p>
            <div className="grid grid-cols-2 gap-2">
              {sources.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-background text-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">
              We migrate TO
            </p>
            <div className="grid grid-cols-2 gap-2">
              {targets.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 p-3 rounded-lg border border-[color:var(--teal-mid)]/30 bg-[color:var(--teal-soft)]/30 text-sm"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    className="text-[color:var(--teal-mid)] shrink-0"
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
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Five-phase migration playbook.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-background"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[color:var(--teal-mid)]">
                      Phase {p.phase}
                    </span>
                    <span className="font-medium">{p.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Risk management
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">
              Every concern, addressed upfront.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((r) => (
              <div key={r.risk} className="p-5 rounded-xl border border-border bg-background">
                <p className="font-medium text-sm mb-1">{r.risk}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            Get a migration risk assessment — free.
          </h2>
          <p className="text-lg opacity-70 mb-8">
            We'll analyse your source systems and estimate effort, risk, and timeline at no cost.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Request assessment
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              See packages
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
