import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We analyze your business processes and identify optimization opportunities." },
  { num: "02", title: "Configure", desc: "Customize modules and workflows to match your exact requirements." },
  { num: "03", title: "Integrate", desc: "Connect with your existing tools and migrate data seamlessly." },
  { num: "04", title: "Launch", desc: "Go live with full support and training for your team." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
          How it works
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          From setup to success
          <br />
          in four steps
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <span className="text-5xl font-display font-bold text-muted/80 select-none">
              {step.num}
            </span>
            <h3 className="font-display text-xl font-bold mt-3 mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
