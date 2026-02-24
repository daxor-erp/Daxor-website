import { motion } from "framer-motion";
import { Shield, Zap, Globe, LineChart, Layers, Clock } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second response times across all modules." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption." },
  { icon: Globe, title: "Multi-location", desc: "Manage operations across multiple sites seamlessly." },
  { icon: LineChart, title: "Advanced Analytics", desc: "Custom dashboards and real-time reporting." },
  { icon: Layers, title: "Modular Design", desc: "Pick only the modules you need." },
  { icon: Clock, title: "24/7 Support", desc: "Dedicated support team always available." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-surface-dark text-surface-dark-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 border border-surface-dark-foreground/20 rounded-full text-xs font-medium opacity-60 mb-4">
          What we offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Everything you need to
          <br />
          run your business
        </h2>
        <p className="text-surface-dark-foreground/60 max-w-lg mx-auto">
          A complete suite of tools built for modern enterprises.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-surface-dark-foreground/10 hover:border-surface-dark-foreground/25 transition-colors"
          >
            <f.icon className="w-8 h-8 mb-4 opacity-70" />
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm opacity-60 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
