import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3x", label: "FASTER WORKFLOWS", sublabel: "Average speed improvement" },
  { value: "150+", label: "SMES TRANSFORMED", sublabel: "Across 12 industries" },
  { value: "40%", label: "COST REDUCTION", sublabel: "Average operational savings" },
  { value: "98%", label: "CLIENT RETENTION", sublabel: "Long-term partnerships" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-28 border-y border-border overflow-hidden">
      <motion.div style={{ y }} className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left"
            >
              <motion.span
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                className="block text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gradient"
              >
                {stat.value}
              </motion.span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground mt-3">
                {stat.label}
              </span>
              <span className="block text-xs text-muted-foreground mt-1">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
