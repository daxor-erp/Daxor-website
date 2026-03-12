import { motion } from "framer-motion";
import Testimonials from "@/components/ui/twitter-testimonial-cards";

const TwitterTestimonialsSection = () => (
  <section className="py-24 overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
          What people are saying
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Trusted by teams across industries
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          From enterprise ERP rollouts to data migrations and training — here's what our customers say.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <Testimonials />
      </motion.div>
    </div>
  </section>
);

export default TwitterTestimonialsSection;
