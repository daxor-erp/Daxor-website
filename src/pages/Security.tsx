import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ArrowRight, Shield, Lock, Eye, RefreshCw, Server, CheckCircle, AlertTriangle } from "lucide-react";

const pillars = [
  {
    icon: Lock, color: "text-primary", bg: "bg-primary/10",
    title: "Data Encryption",
    desc: "All data encrypted at rest (AES-256) and in transit (TLS 1.3). Encryption keys are managed in your Azure Key Vault or AWS KMS — Daxor staff have zero access.",
    points: ["AES-256 at rest", "TLS 1.3 in transit", "Customer-managed keys (BYOK)", "Database-level column encryption for PII"],
  },
  {
    icon: Eye, color: "text-violet-400", bg: "bg-violet-500/10",
    title: "Access Control",
    desc: "Role-based access control enforced at every layer. SSO via Azure AD, Okta, or Google Workspace. MFA mandatory for all privileged accounts.",
    points: ["RBAC + attribute-based policies", "SSO with SAML 2.0 / OIDC", "MFA enforced for admin roles", "Session timeout & IP allowlisting"],
  },
  {
    icon: RefreshCw, color: "text-emerald-400", bg: "bg-emerald-500/10",
    title: "Audit & Compliance",
    desc: "Immutable audit logs for every action — who read what, when, and from where. Tamper-proof, stored separately from operational data.",
    points: ["Immutable audit trail (all actions)", "SOC 2 Type II (in progress)", "ISO 27001 certified", "GDPR & DPDPA compliant"],
  },
  {
    icon: Server, color: "text-orange-400", bg: "bg-orange-500/10",
    title: "Infrastructure Security",
    desc: "Deployed in your cloud tenant — your data never leaves your VPC. Regular penetration tests by independent third parties.",
    points: ["Single-tenant deployment", "VPC / private networking only", "Annual third-party pen tests", "Vulnerability scanning (weekly)"],
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

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ShaderAnimation className="w-full h-full" opacity={0.12} variant="neural" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)/0.2) 0%, hsl(var(--background)/0.6) 60%, hsl(var(--background)) 100%)" }} />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Enterprise security, <span className="text-primary">no compromises</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Your data stays in your cloud tenant. Daxor is designed so that even our own engineers cannot read your business data — by architecture, not just policy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
                <Link to="/contact">Request Security Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 border-y border-border bg-card/20">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          {[
            { icon: Shield, text: "ISO 27001 Certified" },
            { icon: Lock, text: "Zero-access architecture" },
            { icon: Eye, text: "Immutable audit logs" },
            { icon: Server, text: "Single-tenant deployment" },
          ].map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Security Model</p>
            <h2 className="text-4xl font-bold tracking-tight">Four-layer defence in depth</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`p-7 rounded-2xl border border-border ${p.bg} flex flex-col gap-4`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-background/60 border border-border">
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.color}`} />
                      <span className="text-foreground/80">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 border-y border-border bg-card/20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Compliance</p>
            <h2 className="text-3xl font-bold tracking-tight">Certifications & standards</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl border border-border bg-card">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold">{c.name}</p>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${c.status === "Certified" || c.status === "Compliant" ? "bg-emerald-500/10 text-emerald-400" : "bg-orange-500/10 text-orange-400"}`}>
                    {c.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident response */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Incident Response</p>
            <h2 className="text-3xl font-bold tracking-tight">SLA-backed response times</h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 font-mono text-xs uppercase text-muted-foreground">Severity</th>
                  <th className="text-left py-3 pr-6 font-mono text-xs uppercase text-muted-foreground">Response SLA</th>
                  <th className="text-left py-3 font-mono text-xs uppercase text-muted-foreground">Examples</th>
                </tr>
              </thead>
              <tbody>
                {responseMatrix.map((r, i) => (
                  <motion.tr key={r.severity} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="border-b border-border/50">
                    <td className="py-4 pr-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`w-3.5 h-3.5 ${i === 0 ? "text-red-400" : i === 1 ? "text-orange-400" : i === 2 ? "text-yellow-400" : "text-muted-foreground"}`} />
                        <span className="font-semibold">{r.severity}</span>
                      </div>
                    </td>
                    <td className="py-4 pr-6 font-mono text-primary font-bold">{r.sla}</td>
                    <td className="py-4 text-muted-foreground">{r.examples}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Need our security documentation?</h2>
            <p className="text-muted-foreground mb-6">We provide a full security pack including pen test reports, ISO certificate, and data processing agreements on request.</p>
            <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
              <Link to="/contact">Request Security Pack <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
