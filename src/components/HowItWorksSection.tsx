import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Database, ArrowRight, Layers, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const migrationBenefits = [
  {
    num: "01",
    title: "Unified Data Estate",
    desc: "Eliminate silos forever. All your data lives in OneLake — no more copying between systems.",
  },
  {
    num: "02",
    title: "AI-Powered Speed & Insights",
    desc: "Built-in generative AI and real-time intelligence give you answers in minutes instead of days.",
  },
  {
    num: "03",
    title: "Dramatic Cost Savings",
    desc: "Pay only for what you use, reduce licensing costs by up to 60%, and retire expensive on-premise hardware.",
  },
];

const migrationSources = [
  "Informatica PowerCenter",
  "SSIS / DataStage",
  "Oracle / SQL Server",
  "SAP / Oracle EBS",
  "Legacy Data Warehouses",
  "Ab Initio",
];

const HowItWorksSection = () => (
  <section id="migration" className="py-24">
    <AnimatedSection variant="fadeUp">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
            Migration Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Seamless migration to
            <br />
            Microsoft Fabric
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            We specialise in risk-free migration projects — moving your data and processes from legacy systems to cutting-edge platforms without business disruption.
          </p>
        </motion.div>

        {/* Migration flow visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 p-8 rounded-2xl border border-border bg-card"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="p-4 rounded-xl bg-muted">
              <Database className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="font-semibold text-sm">Legacy Systems</p>
            <p className="text-xs text-muted-foreground">Informatica, SSIS, Oracle</p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="hidden md:flex items-center gap-1">
              <div className="w-12 h-px bg-border" />
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono bg-muted px-3 py-1.5 rounded-full">95% automated</span>
            <div className="hidden md:flex items-center gap-1">
              <div className="w-12 h-px bg-border" />
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="p-4 rounded-xl bg-blue-500/10">
              <Layers className="w-8 h-8 text-blue-500" />
            </div>
            <p className="font-semibold text-sm">Microsoft Fabric</p>
            <p className="text-xs text-muted-foreground">OneLake · Lakehouse · Power BI</p>
          </div>
        </motion.div>

        {/* Three key benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {migrationBenefits.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-shadow cursor-pointer"
            >
              <span className="block text-5xl font-bold select-none mb-3 font-mono" style={{ color: "#3b82f6" }}>{step.num}</span>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Migration sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl border border-border bg-card"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
            We migrate from
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {migrationSources.map((src) => (
              <div key={src} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{src}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="rounded-full px-6">Book Free Migration Assessment</Button>
            <Button variant="outline" className="rounded-full px-6">Download Migration Guide</Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  </section>
);

export default HowItWorksSection;
