import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  Brain, ArrowRight, CheckCircle, Zap, Database, BarChart3,
  TrendingUp, MessageSquare, Cpu, Shield, RefreshCw,
} from "lucide-react";

const useCases = [
  { icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "Demand Forecasting", desc: "LSTM and Prophet models trained on your ERP data, deployed as microservices feeding directly into procurement workflows." },
  { icon: MessageSquare, color: "text-primary", bg: "bg-primary/10", title: "Conversational Interfaces", desc: "Natural language query layers over SQL, Spark, or REST APIs — embed a ChatGPT-style interface inside any internal tool." },
  { icon: Brain, color: "text-violet-400", bg: "bg-violet-500/10", title: "LLM-Powered Automation", desc: "Document classification, NLP report generation, invoice extraction, and contract analysis — all running on your private data." },
  { icon: BarChart3, color: "text-orange-400", bg: "bg-orange-500/10", title: "Anomaly Detection", desc: "Real-time unsupervised models monitoring transactions, logistics, and operational KPIs — alerting via Slack, Teams, or webhook." },
  { icon: Database, color: "text-cyan-400", bg: "bg-cyan-500/10", title: "Recommendation Engines", desc: "Collaborative filtering and content-based models surfacing upsell opportunities, cost savings, and workflow improvements." },
  { icon: Cpu, color: "text-blue-400", bg: "bg-blue-500/10", title: "Predictive Maintenance", desc: "IoT sensor data + ML models predicting equipment failure before it happens — reducing unplanned downtime by up to 60%." },
];

const stack = [
  "Azure OpenAI / OpenAI API", "LangChain / LlamaIndex", "MLflow", "Databricks Feature Store",
  "Microsoft Fabric", "Snowflake Cortex", "Hugging Face", "Scikit-learn / XGBoost",
];

const deliveryModel = [
  { step: "01", title: "Use-case scoping", desc: "We shortlist 2–3 AI use cases with the highest ROI potential for your business." },
  { step: "02", title: "Data readiness audit", desc: "We assess your data quality, labelling needs, and infrastructure gaps." },
  { step: "03", title: "Prototype in 2 weeks", desc: "Working model serving predictions — not slides — within the first fortnight." },
  { step: "04", title: "Production deployment", desc: "CI/CD pipeline, monitoring, drift detection, and retraining triggers included." },
  { step: "05", title: "Knowledge transfer", desc: "Your team owns and operates the models after handover — no vendor lock-in." },
];

export default function AIMLIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ShaderAnimation className="w-full h-full" opacity={0.18} variant="neural" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)/0.2) 0%, hsl(var(--background)/0.6) 60%, hsl(var(--background)) 100%)" }} />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">AI/ML Integration</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Embed AI into <span className="text-primary">what you already have</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              We design, build, and deploy AI/ML models directly into your existing ERP, CRM, and data workflows — without ripping anything out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
                <Link to="/contact">Book a Use-case Workshop <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/ai">See Daxor AI Platform</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Use Cases</p>
            <h2 className="text-4xl font-bold tracking-tight">Six AI capabilities ready to plug in</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <motion.div key={u.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`p-6 rounded-2xl border border-border ${u.bg} flex flex-col gap-3`}>
                <u.icon className={`w-6 h-6 ${u.color}`} />
                <h3 className="font-bold">{u.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 border-y border-border bg-card/20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Technology</p>
            <h2 className="text-3xl font-bold tracking-tight">Best-in-class open stack, no lock-in</h2>
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {stack.map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-3 py-1.5 rounded-full border border-border bg-card text-sm font-mono">
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">How We Work</p>
            <h2 className="text-4xl font-bold tracking-tight">Prototype in 2 weeks, production in 6</h2>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {deliveryModel.map((d, i) => (
              <motion.div key={d.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-mono font-bold text-primary">
                  {d.step}
                </div>
                <h3 className="font-bold leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Private by default", desc: "Your data never leaves your cloud tenant. All models run inside your VPC / subscription." },
              { icon: RefreshCw, title: "Auto-retraining", desc: "Models retrain on schedule or when drift is detected — no manual intervention needed." },
              { icon: Zap, title: "Explainable AI", desc: "Every prediction comes with a confidence score and feature attribution. Auditable from day one." },
            ].map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card flex flex-col gap-3">
                <p.icon className="w-6 h-6 text-primary" />
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Start with one use case. Scale from there.</h2>
            <p className="text-muted-foreground text-lg mb-8">A focused 2-week use-case workshop identifies where AI delivers the most value in your business — at no risk.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
                <Link to="/contact">Book Workshop <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link to="/case-studies">See What We've Built</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
