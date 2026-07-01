import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/security")({
  component: Security,
  head: () => ({
    meta: [
      { title: "Security — Daxor" },
      {
        name: "description",
        content:
          "Enterprise security with no compromises. Data encryption, access control, audit & compliance, and infrastructure security at Daxor.",
      },
      { property: "og:title", content: "Security — Daxor" },
      { property: "og:description", content: "Your data stays in your cloud tenant." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/security" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
});

const pillars = [
  {
    title: "Data Encryption",
    desc: "All data encrypted at rest (AES-256) and in transit (TLS 1.3). Encryption keys are managed in your Azure Key Vault or AWS KMS — Daxor staff have zero access.",
    points: [
      "AES-256 at rest",
      "TLS 1.3 in transit",
      "Customer-managed keys (BYOK)",
      "Database-level column encryption for PII",
    ],
  },
  {
    title: "Access Control",
    desc: "Role-based access control enforced at every layer. SSO via Azure AD, Okta, or Google Workspace. MFA mandatory for all privileged accounts.",
    points: [
      "RBAC + attribute-based policies",
      "SSO with SAML 2.0 / OIDC",
      "MFA enforced for admin roles",
      "Session timeout & IP allowlisting",
    ],
  },
  {
    title: "Audit & Compliance",
    desc: "Immutable audit logs for every action — who read what, when, and from where. Tamper-proof, stored separately from operational data.",
    points: [
      "Immutable audit trail (all actions)",
      "SOC 2 Type II (in progress)",
      "ISO 27001 certified",
      "GDPR & DPDPA compliant",
    ],
  },
  {
    title: "Infrastructure Security",
    desc: "Deployed in your cloud tenant — your data never leaves your VPC. Regular penetration tests by independent third parties.",
    points: [
      "Single-tenant deployment",
      "VPC / private networking only",
      "Annual third-party pen tests",
      "Vulnerability scanning (weekly)",
    ],
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Information Security Management", status: "Certified" },
  { name: "SOC 2 Type II", desc: "Security & Availability", status: "In Progress" },
  { name: "GDPR", desc: "EU Data Protection", status: "Compliant" },
  { name: "DPDPA 2023", desc: "India Data Protection Act", status: "Compliant" },
  { name: "GST / TDS", desc: "India Tax Compliance", status: "Compliant" },
  { name: "Ind AS / IFRS", desc: "Accounting Standards", status: "Compliant" },
];

const responseMatrix = [
  { severity: "Critical", sla: "< 1 hour", examples: "Data breach, complete outage" },
  { severity: "High", sla: "< 4 hours", examples: "Partial outage, auth failure" },
  { severity: "Medium", sla: "< 24 hours", examples: "Performance degradation" },
  { severity: "Low", sla: "< 72 hours", examples: "UI bugs, minor feature issues" },
];

const trustBar = [
  "ISO 27001 Certified",
  "Zero-access architecture",
  "Immutable audit logs",
  "Single-tenant deployment",
];

function Security() {
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
              Security
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Enterprise security, no compromises.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Your data stays in your cloud tenant — by architecture, not just policy.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition inline-flex"
              >
                Request security documentation
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-elegant)] bg-white/95 p-10">
            <img
              src="https://cdn.pixabay.com/photo/2025/06/09/09/54/engineers-9649554_1280.png"
              alt="Illustration of engineers monitoring systems"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-12 border-b border-border">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          {trustBar.map((t) => (
            <div key={t} className="flex items-center gap-2.5 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--teal-mid)]" />
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Security model
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Four-layer defence in depth.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-2xl border border-border bg-secondary/40 flex flex-col gap-4"
              >
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm">
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
                      <span className="text-foreground/80">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-secondary/50">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Compliance
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">Certifications & standards.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="p-5 rounded-xl border border-border bg-background">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium">{c.name}</p>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                      c.status === "Certified" || c.status === "Compliant"
                        ? "bg-[color:var(--teal-soft)] text-[color:var(--teal-deep)]"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Incident response
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">SLA-backed response times.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-mono text-xs uppercase text-muted-foreground">
                    Severity
                  </th>
                  <th className="text-left py-3 pr-6 font-mono text-xs uppercase text-muted-foreground">
                    Response SLA
                  </th>
                  <th className="text-left py-3 font-mono text-xs uppercase text-muted-foreground">
                    Examples
                  </th>
                </tr>
              </thead>
              <tbody>
                {responseMatrix.map((r) => (
                  <tr key={r.severity} className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium">{r.severity}</td>
                    <td className="py-4 pr-6 font-mono text-[color:var(--teal-deep)] font-bold">
                      {r.sla}
                    </td>
                    <td className="py-4 text-muted-foreground">{r.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-page max-w-xl">
          <h2 className="text-3xl font-medium mb-4">Need our security documentation?</h2>
          <p className="text-muted-foreground mb-6">
            We provide a full security pack including pen test reports, ISO certificate, and data
            processing agreements on request.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition inline-flex"
          >
            Request security pack
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
