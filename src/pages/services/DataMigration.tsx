import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  ArrowRight, CheckCircle, RefreshCw, Database,
  Zap, Shield, BarChart3, Clock, AlertTriangle, FileText,
} from "lucide-react";

const sources = ["Informatica PowerCenter", "SSIS / SSDT", "SAP BW / SAP ECC", "Oracle GoldenGate", "Talend", "IBM DataStage", "Pentaho", "Custom ETL scripts"];
const targets = ["Microsoft Fabric / OneLake", "Snowflake", "Databricks Lakehouse", "Azure Synapse", "Google BigQuery", "AWS Redshift"];

const phases = [
  {
    phase: "01", title: "Source Profiling",
    desc: "Automated scanning of every source system — schema discovery, row counts, data quality scoring, and dependency mapping.",
    icon: Database, color: "text-blue-400", bg: "bg-blue-500/10",
  },
  {
    phase: "02", title: "Mapping & Rules",
    desc: "Business rules are captured as code in a version-controlled mapping repository. Every transformation is reviewable and auditable.",
    icon: FileText, color: "text-violet-400", bg: "bg-violet-500/10",
  },
  {
    phase: "03", title: "Parallel Validation",
    desc: "Source and target run simultaneously. Automated reconciliation reports compare row counts, checksums, and business KPIs.",
    icon: BarChart3, color: "text-emerald-400", bg: "bg-emerald-500/10",
  },
  {
    phase: "04", title: "Cutover & Freeze",
    desc: "Change-data-capture brings the target up to the second. We freeze source writes for minutes, not days.",
    icon: Clock, color: "text-orange-400", bg: "bg-orange-500/10",
  },
  {
    phase: "05", title: "Hypercare",
    desc: "30 days of 24/7 support post-cutover. Issues are escalated and resolved in under 2 hours.",
    icon: Shield, color: "text-cyan-400", bg: "bg-cyan-500/10",
  },
];

const risks = [
  { risk: "Data loss", mitigation: "Triple-verified checksums at every stage + rollback snapshots" },
  { risk: "Downtime", mitigation: "CDC-based near-zero-downtime cutover — tested on 10TB+ datasets" },
  { risk: "Schema drift", mitigation: "Automated drift detection alerts 48 hrs before cutover" },
  { risk: "Compliance gaps", mitigation: "PII masking and encryption applied during transformation layer" },
];

export default function DataMigration() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ShaderAnimation className="w-full h-full" opacity={0.14} variant="neural" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)/0.2) 0%, hsl(var(--background)/0.6) 60%, hsl(var(--background)) 100%)" }} />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Data Migration</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Move your data. <span className="text-primary">Lose nothing.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Informatica, SSIS, SAP — modernised to Microsoft Fabric, Snowflake, or Databricks with zero data loss and near-zero downtime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
                <Link to="/contact">Start Migration Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/case-studies">See Results</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Source → Target */}
      <section className="py-20 border-y border-border bg-card/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">We migrate FROM</p>
              <div className="grid grid-cols-2 gap-2">
                {sources.map((s, i) => (
                  <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card text-sm">
                    <RefreshCw className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                    {s}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">We migrate TO</p>
              <div className="grid grid-cols-2 gap-2">
                {targets.map((t, i) => (
                  <motion.div key={t} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 p-3 rounded-lg border border-primary/20 bg-primary/5 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {t}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration phases */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Methodology</p>
            <h2 className="text-4xl font-bold tracking-tight">Five-phase migration playbook</h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {phases.map((p, i) => (
              <motion.div key={p.phase} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`flex items-start gap-5 p-6 rounded-2xl border border-border ${p.bg}`}>
                <div className={`p-2.5 rounded-xl bg-background/60 border border-border flex-shrink-0`}>
                  <p.icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-mono font-bold ${p.color}`}>Phase {p.phase}</span>
                    <span className="font-bold">{p.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk mitigation */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Risk Management</p>
            <h2 className="text-3xl font-bold tracking-tight">Every concern, addressed upfront</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((r, i) => (
              <motion.div key={r.risk} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl border border-border bg-card flex gap-4">
                <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">{r.risk}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.mitigation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Get a migration risk assessment — free</h2>
            <p className="text-muted-foreground text-lg mb-8">We'll analyse your source systems and estimate effort, risk, and timeline at no cost.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
                <Link to="/contact">Request Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link to="/pricing">See Packages</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
