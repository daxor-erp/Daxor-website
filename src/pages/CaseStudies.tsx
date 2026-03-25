import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, TrendingUp, Clock, BarChart3, ChevronRight } from "lucide-react";

const cases = [
  {
    id: "mfg",
    tag: "Manufacturing",
    tagColor: "text-orange-400",
    tagBg: "bg-orange-500/10",
    company: "Mid-size auto-components manufacturer",
    location: "Pune, India · 1,200 employees",
    challenge: "Running SAP ECC with a 3-day month-end close, no demand forecasting, and frequent stockouts costing ₹40L/month.",
    solution: "Migrated to Daxor ERP with AI demand forecasting on Microsoft Fabric. Automated GST/TDS compliance and real-time inventory dashboards.",
    results: [
      { icon: Clock, metric: "3 days → 6 hrs", label: "month-end close" },
      { icon: TrendingDown, metric: "₹38L/mo", label: "stockout cost eliminated" },
      { icon: TrendingUp, metric: "94%", label: "forecast accuracy" },
      { icon: BarChart3, metric: "18 months", label: "full payback" },
    ],
    quote: "Daxor gave us a demand forecasting engine that our SAP vendor quoted ₹2.5 Cr to build. It was live in 8 weeks.",
    author: "VP Supply Chain",
  },
  {
    id: "finserv",
    tag: "Financial Services",
    tagColor: "text-blue-400",
    tagBg: "bg-blue-500/10",
    company: "NBFC with ₹500 Cr AUM",
    location: "Mumbai, India · 340 employees",
    challenge: "Manual reconciliation of 50,000+ daily transactions, audit failures due to missing trails, and no anomaly detection on disbursements.",
    solution: "Deployed Daxor AI Anomaly Detection on live transaction streams + automated Ind AS financial reporting.",
    results: [
      { icon: TrendingDown, metric: "99.2%", label: "auto-reconciliation rate" },
      { icon: BarChart3, metric: "Zero", label: "audit findings post go-live" },
      { icon: Clock, metric: "4 hrs → 12 min", label: "daily reconciliation time" },
      { icon: TrendingUp, metric: "₹1.2 Cr/yr", label: "compliance cost saved" },
    ],
    quote: "The anomaly engine caught a ₹14L duplicate disbursement in the first week. ROI was instant.",
    author: "CFO",
  },
  {
    id: "retail",
    tag: "Retail & D2C",
    tagColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10",
    company: "D2C apparel brand, 200+ SKUs",
    location: "Bengaluru, India · 180 employees",
    challenge: "No visibility into margin by SKU, manual reorder processes, and customer service team unable to access live order status.",
    solution: "Daxor ERP with Data Assistant for NL queries, chatbot for CS team, and recommendation engine for reorder and upsell.",
    results: [
      { icon: TrendingUp, metric: "23%", label: "increase in gross margin" },
      { icon: BarChart3, metric: "40%", label: "reduction in analyst time" },
      { icon: Clock, metric: "< 30 sec", label: "avg CS query resolution" },
      { icon: TrendingDown, metric: "₹28L/yr", label: "analyst headcount savings" },
    ],
    quote: "Our head of operations now asks the AI 'what are our top 10 SKUs by margin this week' instead of waiting 2 days for a report.",
    author: "CEO & Co-founder",
  },
  {
    id: "logistics",
    tag: "Logistics",
    tagColor: "text-violet-400",
    tagBg: "bg-violet-500/10",
    company: "3PL logistics provider, 50+ warehouses",
    location: "Pan-India · 2,800 employees",
    challenge: "Disparate WMS systems across 54 locations, no consolidated P&L view, and 18% of invoices disputed monthly due to billing errors.",
    solution: "Daxor migration from Informatica to Fabric, unified data model across all sites, AI-assisted invoice validation.",
    results: [
      { icon: TrendingDown, metric: "18% → 2%", label: "invoice dispute rate" },
      { icon: BarChart3, metric: "Unified", label: "P&L across all 54 sites" },
      { icon: Clock, metric: "6 months", label: "migration timeline" },
      { icon: TrendingUp, metric: "₹4.2 Cr", label: "annual billing recovery" },
    ],
    quote: "We had data in 14 different systems. Daxor gave us a single source of truth without replacing a single WMS.",
    author: "Head of Technology",
  },
];

const tags = ["All", "Manufacturing", "Financial Services", "Retail & D2C", "Logistics"];

export default function CaseStudies() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cases : cases.filter(c => c.tag === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Case Studies</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Real results, <span className="text-primary">real companies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              How enterprises across manufacturing, finance, retail, and logistics use Daxor to cut costs, close faster, and compete smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-14 z-30 bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-wrap gap-2">
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${active === t ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="py-16">
        <div className="container flex flex-col gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((c, i) => (
              <motion.div key={c.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="p-7 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${c.tagBg} ${c.tagColor} mb-2`}>{c.tag}</span>
                      <h2 className="text-xl font-bold">{c.company}</h2>
                      <p className="text-sm text-muted-foreground mt-0.5">{c.location}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Challenge</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Solution</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{c.solution}</p>
                      </div>
                      <blockquote className={`border-l-2 pl-4 italic text-sm text-muted-foreground ${c.tagColor.replace("text-", "border-")}`}>
                        "{c.quote}"
                        <p className={`not-italic font-semibold mt-1 text-xs ${c.tagColor}`}>— {c.author}</p>
                      </blockquote>
                    </div>

                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Results</p>
                      <div className="grid grid-cols-2 gap-3">
                        {c.results.map(r => (
                          <div key={r.label} className={`p-4 rounded-xl border border-border ${c.tagBg}`}>
                            <r.icon className={`w-4 h-4 ${c.tagColor} mb-2`} />
                            <p className="text-xl font-bold tracking-tight">{r.metric}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Could your business be next?</h2>
            <p className="text-muted-foreground mb-6">Book a 30-minute discovery call and we'll show you what Daxor can do for your specific industry.</p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
                <Link to="/contact">Book Discovery Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
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
