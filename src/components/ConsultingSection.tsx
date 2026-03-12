import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Cloud, Map, Brain, GitBranch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const deliverables = [
  { icon: Map, title: "Technology Roadmap", desc: "Proof-of-concept and future-state architecture tailored to your business goals." },
  { icon: Cloud, title: "Cloud Strategy", desc: "AWS, Microsoft Azure, and Google Cloud — we help you choose and implement the right stack." },
  { icon: GitBranch, title: "Data Platform Architecture", desc: "Snowflake, Databricks, and Microsoft Fabric — modern data platforms designed for scale." },
  { icon: Brain, title: "AI/ML Integration", desc: "End-to-end AI strategy from model selection to production deployment and monitoring." },
];

const ConsultingSection = () => (
  <section id="services" className="py-24 bg-surface-dark text-surface-dark-foreground">
    <AnimatedSection variant="fadeUp">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 border border-surface-dark-foreground/20 rounded-full text-xs font-medium opacity-60 mb-4">
              Consulting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Strategic consulting for your next technology leap
            </h2>
            <p className="text-surface-dark-foreground/60 text-lg mb-8 leading-relaxed">
              Not sure whether to choose AWS, Azure, Snowflake, or a hybrid approach? Our expert consultants have executed 100+ projects across manufacturing, retail, logistics, and fintech. We don't just recommend — we implement alongside your team.
            </p>
            <Button variant="secondary" size="lg" className="rounded-full px-8 gap-2">
              Get a Free 2-Hour Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl border border-surface-dark-foreground/10 hover:border-surface-dark-foreground/25 transition-colors cursor-pointer"
              >
                <d.icon className="w-6 h-6 mb-3 opacity-70" />
                <h3 className="font-semibold text-sm mb-1.5">{d.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default ConsultingSection;
