import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl bg-surface-dark text-surface-dark-foreground p-12 md:p-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            {[...Array(10)].map((_, i) => (
              <circle key={i} cx={400} cy={200} r={50 + i * 40} fill="none" stroke="currentColor" strokeWidth="0.5" />
            ))}
          </svg>
        </div>
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-surface-dark-foreground/60 max-w-md mx-auto mb-8">
            Join 500+ companies that trust erpflow to run their operations.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 gap-2"
            asChild
          >
            <Link to="/pricing">
              View Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
