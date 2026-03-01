import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discover", desc: "We analyze your business processes and identify optimization opportunities." },
  { num: "02", title: "Configure", desc: "Customize modules and workflows to match your exact requirements." },
  { num: "03", title: "Integrate", desc: "Connect with your existing tools and migrate data seamlessly." },
  { num: "04", title: "Launch", desc: "Go live with full support and training for your team." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="how-it-works" className="py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
            How it works
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            From setup to
            <br />
            success.
          </h2>
        </motion.div>

        <motion.div style={{ x }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="relative p-8 rounded-2xl border border-border bg-card hover:shadow-2xl transition-shadow duration-500 cursor-pointer group"
            >
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.15 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 200 }}
                className="block text-7xl font-display font-extrabold select-none text-foreground"
              >
                {step.num}
              </motion.span>
              <h3 className="font-display text-2xl font-bold mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
