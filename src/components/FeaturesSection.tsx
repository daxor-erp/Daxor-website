import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Workflow, BarChart3, Bot, Sparkles, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: Brain, title: "AI Strategy", desc: "Custom AI roadmaps tailored to your business goals and industry." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive tasks and free your team for high-value work." },
  { icon: BarChart3, title: "Data Analytics", desc: "Turn your data into actionable insights with AI-powered dashboards." },
  { icon: Bot, title: "Chatbot Development", desc: "Custom AI assistants that handle customer support 24/7." },
  { icon: Sparkles, title: "Process Optimization", desc: "Identify bottlenecks and streamline operations with machine learning." },
  { icon: Shield, title: "AI Governance", desc: "Ethical, compliant, and secure AI implementations you can trust." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} id="services" className="py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            How we help
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] mb-4">
            AI WITHOUT
            <br />
            <span className="text-muted-foreground">THE HYPE.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg text-lg mt-6">
            We focus on practical, measurable AI solutions that deliver real business value — not buzzwords.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:glow-teal transition-all duration-500 cursor-pointer group"
            >
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring" }}>
                <f.icon className="w-8 h-8 mb-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <h3 className="font-bold text-xl mb-2 tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
