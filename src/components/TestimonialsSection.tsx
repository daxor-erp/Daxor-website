import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "erpflow transformed how we manage our supply chain. We cut processing time by 60% in the first quarter.",
    name: "Sarah Chen",
    role: "COO",
    company: "TechVault Inc.",
    initials: "SC",
  },
  {
    quote: "The best ERP decision we ever made. Implementation was smooth and the ROI was visible within weeks.",
    name: "Marcus Wright",
    role: "CEO",
    company: "Nordic Manufacturing",
    initials: "MW",
  },
  {
    quote: "Finally, an ERP that doesn't feel like it was built in 2005. Our team actually enjoys using it.",
    name: "Priya Sharma",
    role: "VP Operations",
    company: "Meridian Group",
    initials: "PS",
  },
  {
    quote: "We consolidated 7 different tools into erpflow. The unified analytics alone justified the switch.",
    name: "James Okafor",
    role: "CTO",
    company: "Apex Logistics",
    initials: "JO",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            Loved by teams
            <br />
            everywhere.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 text-base">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface-dark text-surface-dark-foreground flex items-center justify-center text-xs font-bold font-display">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
