import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Monitor, Cloud, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const programmes = [
  {
    icon: Monitor,
    title: "Microsoft Fabric End-to-End",
    desc: "Data Factory, Lakehouse, Power BI, and AI — from fundamentals to advanced architecture.",
    tag: "Most Popular",
  },
  {
    icon: Cloud,
    title: "AWS / Azure Cloud & Data Engineering",
    desc: "Cloud strategy, data platform design, and hands-on engineering on AWS and Azure.",
    tag: null,
  },
  {
    icon: BookOpen,
    title: "Snowflake Architecture & Analytics",
    desc: "Advanced Snowflake patterns, performance tuning, and modern analytics workflows.",
    tag: null,
  },
  {
    icon: Users,
    title: "AI for Business Users",
    desc: "ChatGPT, Copilot, and custom AI assistants — practical AI for non-technical teams.",
    tag: "New",
  },
];

const deliveryModes = [
  { label: "Classroom", detail: "Bengaluru & client premises" },
  { label: "Live Virtual", detail: "Instructor-led online sessions" },
  { label: "Self-Paced", detail: "With hands-on labs" },
  { label: "Custom", detail: "1-day to 12-week programmes" },
];

const TestimonialsSection = () => (
  <section id="training" className="py-24">
    <AnimatedSection variant="fadeUp" delay={0.1}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
            Corporate Training
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Training programmes that
            <br />
            deliver real results
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Empower your teams with industry-leading training on the exact technologies we implement. Every participant receives certification and hands-on project experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {programmes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-shadow duration-300 relative"
            >
              {p.tag && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
                  {p.tag}
                </span>
              )}
              <div className="p-3 rounded-xl bg-muted w-fit mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Delivery modes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl border border-border bg-card"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">Delivery modes</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {deliveryModes.map((mode) => (
              <div key={mode.label}>
                <p className="font-semibold text-sm mb-1">{mode.label}</p>
                <p className="text-xs text-muted-foreground">{mode.detail}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-6">View Training Calendar</Button>
            <Button variant="outline" className="rounded-full px-6">Request Corporate Proposal</Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  </section>
);

export default TestimonialsSection;
