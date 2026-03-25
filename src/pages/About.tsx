import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ArrowRight, Users, Target, Globe, Zap } from "lucide-react";

const timeline = [
  { year: "2018", event: "Founded in Mumbai as a data consultancy, serving two mid-market manufacturing firms." },
  { year: "2020", event: "Launched the first version of Daxor ERP on Azure. First enterprise customer goes live." },
  { year: "2021", event: "Expanded to 20+ clients across India. AI Assistant beta shipped to design partners." },
  { year: "2022", event: "Series A funding. Onboarded first international clients." },
  { year: "2023", event: "Released Daxor AI Platform with six ML engines. Microsoft Fabric partnership announced." },
  { year: "2024", event: "50+ enterprise clients. Opened second office. ISO 27001 certified." },
];

const values = [
  { icon: Target, title: "Outcomes over outputs", desc: "We measure success by business results — reduced costs, faster closes, fewer stockouts — not lines of code or slide decks delivered." },
  { icon: Globe, title: "Radical transparency", desc: "Every AI decision is explainable. Every migration step is documented. Every engagement is priced without hidden costs." },
  { icon: Zap, title: "Speed without shortcuts", desc: "We prototype fast because we've solved these problems before — but we never skip security reviews, testing, or documentation." },
  { icon: Users, title: "Customer-first culture", desc: "Our support team is staffed by the engineers who built the product. Tickets get responses from people who understand the code." },
];

const clients = [
  { name: "Tata Steel", industry: "Manufacturing", bg: "from-primary/20 to-primary/5" },
  { name: "Reliance Retail", industry: "Retail & FMCG", bg: "from-violet-500/20 to-violet-500/5" },
  { name: "Mahindra Logistics", industry: "Logistics", bg: "from-emerald-500/20 to-emerald-500/5" },
  { name: "HDFC Bank", industry: "Financial Services", bg: "from-orange-500/20 to-orange-500/5" },
  { name: "Infosys BPM", industry: "IT Services", bg: "from-cyan-500/20 to-cyan-500/5" },
  { name: "Apollo Hospitals", industry: "Healthcare", bg: "from-blue-500/20 to-blue-500/5" },
];

export default function About() {
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">About Daxor</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Built by people who <span className="text-primary">got tired of bad ERP</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              We started Daxor because we spent years implementing legacy ERP systems that were too slow, too expensive, and too dumb. We knew we could do better.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
                <Link to="/contact">Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/case-studies">Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-border bg-card/20">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "50+", l: "enterprise clients" },
            { v: "2", l: "offices" },
            { v: "30+", l: "team members" },
            { v: "6 yrs", l: "in business" },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <p className="text-3xl font-bold tracking-tight">{s.v}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Mission</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6 leading-snug">
              Make enterprise-grade AI accessible to every business, not just the Fortune 500.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Mid-market and growth-stage companies deserve the same intelligence layer that the world's largest enterprises have — without the 18-month implementation timelines or the $10M price tags.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Timeline</p>
            <div className="flex flex-col gap-0">
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex gap-4 pb-5 relative">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-1">
                    <span className="text-xs font-mono font-bold text-primary">{t.year}</span>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{t.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Values</p>
            <h2 className="text-3xl font-bold tracking-tight">What we believe in</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-card flex gap-4">
                <v.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">Clients</p>
            <h2 className="text-3xl font-bold tracking-tight">Trusted by leading enterprises</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {clients.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`p-6 rounded-2xl border border-border bg-gradient-to-br ${c.bg} flex flex-col gap-3`}>
                <div className="w-12 h-12 rounded-full bg-background/60 border border-border flex items-center justify-center text-lg font-bold text-primary">
                  {c.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold">{c.name}</p>
                  <p className="text-sm font-medium text-muted-foreground">{c.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
            <p className="text-muted-foreground font-medium mb-6">We're always looking for partners, clients, and talent to grow with.</p>
            <Button size="lg" className="rounded-full px-8 gap-2 group font-semibold" asChild>
              <Link to="/contact">Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
