import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Globe, LineChart, Layers, Clock } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second response times across all modules." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption." },
  { icon: Globe, title: "Multi-location", desc: "Manage operations across multiple sites seamlessly." },
  { icon: LineChart, title: "Advanced Analytics", desc: "Custom dashboards and real-time reporting." },
  { icon: Layers, title: "Modular Design", desc: "Pick only the modules you need." },
  { icon: Clock, title: "24/7 Support", desc: "Dedicated support team always available." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} id="features" className="py-28 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 border border-surface-dark-foreground/20 rounded-full text-xs font-medium opacity-60 mb-4">
            What we offer
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            Everything you need
          </h2>
          <p className="text-surface-dark-foreground/50 max-w-lg mx-auto text-lg">
            A complete suite of tools built for modern enterprises.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                borderColor: "rgba(255,255,255,0.25)",
                transition: { duration: 0.25 },
              }}
              className="p-8 rounded-2xl border border-surface-dark-foreground/10 transition-colors cursor-pointer group"
            >
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring" }}>
                <f.icon className="w-8 h-8 mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <h3 className="font-display font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-sm opacity-50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
