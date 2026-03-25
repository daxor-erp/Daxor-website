import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  Cloud, Server, Database, ArrowRight, CheckCircle,
  Layers, Shield, Zap, BarChart3, RefreshCw, Globe, Lock,
} from "lucide-react";

const platforms = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: Cloud,
    services: ["EC2 & EKS architecture", "RDS & Redshift strategy", "S3 data lake design", "IAM & security hardening", "Cost optimisation reviews"],
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: Server,
    services: ["Azure Fabric & OneLake", "AKS & Container Apps", "Azure SQL & Synapse", "Active Directory & SSO", "DevOps pipelines"],
  },
  {
    name: "Snowflake",
    short: "Snowflake",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: Database,
    services: ["Data warehouse design", "Snowpipe ingestion", "Role-based access control", "Cost & compute optimisation", "dbt integration"],
  },
];

const steps = [
  { icon: BarChart3, title: "Discovery & Assessment", desc: "We audit your current infrastructure, workloads, and spend to identify gaps and opportunities." },
  { icon: Layers, title: "Architecture Design", desc: "A tailored reference architecture covering compute, storage, networking, and security." },
  { icon: Zap, title: "Proof of Concept", desc: "Two-week PoC on a real workload to validate the design and de-risk the migration." },
  { icon: RefreshCw, title: "Migration & Cutover", desc: "Zero-downtime migration with rollback plans and 24/7 support during cutover." },
  { icon: Shield, title: "Optimise & Govern", desc: "Ongoing cost reviews, security audits, and performance tuning post-go-live." },
];

const outcomes = [
  { metric: "35%", label: "avg cloud cost reduction", icon: BarChart3 },
  { metric: "99.99%", label: "uptime after migration", icon: Zap },
  { metric: "< 2 wks", label: "PoC to decision", icon: Globe },
  { metric: "ISO 27001", label: "security baseline", icon: Lock },
];

export default function CloudConsulting() {
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Cloud Consulting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Cloud strategy that <span className="text-primary">actually delivers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              AWS, Azure, and Snowflake expertise from architecture design through live migration and beyond. We own outcomes — not just slide decks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
                <Link to="/contact">Talk to an Architect <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 border-y border-border bg-card/20">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {outcomes.map((o, i) => (
            <motion.div key={o.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <o.icon className="w-5 h-5 text-primary mb-2 opacity-70" />
              <p className="text-3xl font-bold tracking-tight">{o.metric}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{o.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Deep expertise across the big three</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.div key={p.short} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border ${p.border} ${p.bg} p-7 flex flex-col gap-5`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg bg-background/60 border border-border`}>
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-mono font-bold uppercase tracking-widest ${p.color}`}>{p.short}</p>
                    <p className="text-sm font-semibold">{p.name}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.services.map(s => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.color}`} />
                      <span className="text-foreground/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card/20 border-y border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Our Process</p>
            <h2 className="text-4xl font-bold tracking-tight">From chaos to clarity in five steps</h2>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-bold leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to modernise your cloud?</h2>
            <p className="text-muted-foreground text-lg mb-8">Start with a free 1-hour architecture review. No commitment, no sales pitch.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
                <Link to="/contact">Book a Free Review <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
