import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "THEY DIDN'T OVERWHELM US WITH JARGON. EFFICIA GAVE US A CLEAR, PRACTICAL AI ROADMAP THAT WE ACTUALLY IMPLEMENTED.",
    name: "Rajesh Kumar",
    role: "CEO",
    company: "NovaTech Solutions",
    date: "MAR 2025",
  },
  {
    quote: "OUR CUSTOMER SUPPORT COSTS DROPPED 45% AFTER IMPLEMENTING THEIR AI CHATBOT. THE ROI WAS VISIBLE IN WEEKS.",
    name: "Sarah Mitchell",
    role: "COO",
    company: "Greenfield Logistics",
    date: "FEB 2025",
  },
  {
    quote: "FINALLY, AN AI CONSULTING FIRM THAT SPEAKS BUSINESS, NOT JUST TECH. THEY UNDERSTOOD OUR INDUSTRY INSIDE OUT.",
    name: "Marcus Chen",
    role: "Managing Director",
    company: "Pacific Trade Group",
    date: "JAN 2025",
  },
  {
    quote: "WE AUTOMATED 60% OF OUR MANUAL REPORTING. THE TEAM NOW FOCUSES ON STRATEGY INSTEAD OF SPREADSHEETS.",
    name: "Priya Patel",
    role: "VP Operations",
    company: "Meridian Finance",
    date: "DEC 2024",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} id="results" className="py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Client Results
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
            REAL RESULTS,
            <br />
            <span className="text-muted-foreground">NOT PROMISES.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-500"
            >
              <p className="text-foreground/80 font-semibold text-sm md:text-base leading-relaxed mb-8 tracking-wide">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                  {t.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
