import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  GraduationCap, ArrowRight, CheckCircle, Clock, Users,
  BarChart3, Database, Cpu, Code, ChevronDown,
} from "lucide-react";

const courses = [
  {
    id: "fabric",
    icon: Database,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Microsoft Fabric & OneLake",
    duration: "3 days",
    level: "Intermediate",
    audience: "Data engineers, architects",
    desc: "Hands-on programme covering Lakehouses, Data Factory pipelines, Spark notebooks, and Direct Lake Power BI integration.",
    topics: ["OneLake architecture & shortcuts", "Data Factory pipeline authoring", "Spark & SQL endpoints", "Real-time analytics with Eventhouse", "Row-level security & governance"],
  },
  {
    id: "snowflake",
    icon: BarChart3,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "Snowflake for Engineers",
    duration: "2 days",
    level: "Beginner–Intermediate",
    audience: "Data engineers, analysts",
    desc: "From Snowflake basics to advanced cost optimisation, clustering, and Snowpipe streaming — all with real enterprise datasets.",
    topics: ["Virtual warehouses & credits", "Snowpipe & Kafka connector", "Time Travel & Fail-safe", "dbt on Snowflake", "Cost monitoring & budgets"],
  },
  {
    id: "databricks",
    icon: Cpu,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    title: "Databricks & Apache Spark",
    duration: "4 days",
    level: "Intermediate–Advanced",
    audience: "Data engineers, ML engineers",
    desc: "End-to-end training on Delta Lake, MLflow, Feature Store, and Unity Catalog. Build production ML pipelines from scratch.",
    topics: ["Delta Lake ACID transactions", "Structured Streaming", "MLflow tracking & registry", "Unity Catalog data governance", "Databricks Asset Bundles (CI/CD)"],
  },
  {
    id: "aiml",
    icon: Code,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Applied AI/ML for Enterprise",
    duration: "3 days",
    level: "Intermediate",
    audience: "Data scientists, analysts",
    desc: "LLMs, RAG pipelines, anomaly detection, and time-series forecasting — all applied to ERP and supply chain problems.",
    topics: ["LLM prompt engineering & fine-tuning", "RAG with Azure OpenAI", "Time-series forecasting (Prophet, LSTM)", "Anomaly detection at scale", "Productionising ML models"],
  },
];

const formats = [
  { icon: Users, label: "On-site cohort", desc: "Your team, your office, your schedule. Min 5 participants." },
  { icon: GraduationCap, label: "Virtual instructor-led", desc: "Live sessions over Zoom with breakout labs and Q&A." },
  { icon: BarChart3, label: "Self-paced portal", desc: "Recorded labs + quizzes with 90-day access and certification." },
];

export default function Training() {
  const [open, setOpen] = useState<string | null>("fabric");

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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Corporate Training</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Build a team that <span className="text-primary">owns the data stack</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Hands-on training programmes for Microsoft Fabric, Snowflake, Databricks, and Applied AI/ML — delivered by practitioners, not theorists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
                <Link to="/contact">Enquire About Training <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-border bg-card/20">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "400+", l: "engineers trained" },
            { v: "4", l: "specialised tracks" },
            { v: "95%", l: "satisfaction score" },
            { v: "3 formats", l: "on-site · virtual · self-paced" },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <p className="text-3xl font-bold tracking-tight">{s.v}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses accordion */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Courses</p>
            <h2 className="text-4xl font-bold tracking-tight">Four intensive tracks</h2>
          </motion.div>
          <div className="flex flex-col gap-3 max-w-3xl">
            {courses.map((c, i) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`rounded-2xl border ${c.border} overflow-hidden`}>
                <button className={`w-full flex items-center gap-4 p-5 text-left ${c.bg}`} onClick={() => setOpen(open === c.id ? null : c.id)}>
                  <div className="p-2 rounded-lg bg-background/60 border border-border flex-shrink-0">
                    <c.icon className={`w-4 h-4 ${c.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold leading-snug">{c.title}</p>
                    <div className="flex gap-3 mt-0.5">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{c.duration}</span>
                      <span className="text-xs text-muted-foreground">{c.level}</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${open === c.id ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === c.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
                      className="overflow-hidden">
                      <div className="p-5 pt-0 border-t border-border/50">
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Topics covered</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {c.topics.map(t => (
                            <li key={t} className="flex items-start gap-2 text-sm">
                              <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${c.color}`} />
                              <span className="text-foreground/80">{t}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex gap-3">
                          <Button size="sm" className="rounded-full" asChild>
                            <Link to="/contact">Enquire</Link>
                          </Button>
                          <span className="text-xs text-muted-foreground self-center">For: {c.audience}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Delivery Formats</p>
            <h2 className="text-3xl font-bold tracking-tight">Training that fits your team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card flex flex-col gap-3">
                <f.icon className="w-6 h-6 text-primary" />
                <h3 className="font-bold">{f.label}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Upskill your team in weeks, not years</h2>
            <p className="text-muted-foreground text-lg mb-8">Contact us with your team size, current stack, and goals — we'll design a custom programme.</p>
            <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
              <Link to="/contact">Design a Custom Programme <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
