import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Loved by teams
          <br />
          everywhere
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 text-[15px]">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-dark text-surface-dark-foreground flex items-center justify-center text-xs font-bold font-display">
                {t.initials}
              </div>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
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

export default TestimonialsSection;
