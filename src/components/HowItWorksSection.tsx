import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "#01", title: "Discovery Call", desc: "We dive deep into your business, understand your pain points, and identify where AI can have the biggest impact." },
  { num: "#02", title: "AI Audit & Strategy", desc: "Our team audits your current workflows and builds a custom AI roadmap with clear ROI projections." },
  { num: "#03", title: "Implementation", desc: "We build, test, and deploy AI solutions — integrating seamlessly with your existing tools and processes." },
  { num: "#04", title: "Optimization & Scale", desc: "Continuous monitoring, optimization, and scaling as your business grows and evolves." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="process" className="py-28 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Our Process
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
            FROM CHAOS
            <br />
            <span className="text-surface-dark-foreground/40">TO CLARITY.</span>
          </h2>
        </motion.div>

        <motion.div style={{ x }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="relative p-8 rounded-2xl border border-surface-dark-foreground/10 hover:border-primary/30 transition-all duration-500 cursor-pointer group"
            >
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 200 }}
                className="block text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500 select-none mb-4"
              >
                {step.num}
              </motion.span>
              <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
              <p className="text-sm text-surface-dark-foreground/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
