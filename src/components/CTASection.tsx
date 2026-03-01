import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-28">
      <div className="container">
        <motion.div
          style={{ scale, opacity }}
          className="relative rounded-3xl bg-surface-dark text-surface-dark-foreground p-14 md:p-24 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {[...Array(12)].map((_, i) => (
                <circle key={i} cx={400} cy={200} r={40 + i * 35} fill="none" stroke="currentColor" strokeWidth="0.5" />
              ))}
            </svg>
          </div>
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-5"
            >
              START SMART.
              <br />
              START SMALL.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-surface-dark-foreground/50 max-w-md mx-auto mb-10 text-lg"
            >
              Join 500+ companies that trust erpflow to run their operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-10 gap-2 text-base"
                asChild
              >
                <Link to="/pricing">
                  View Pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
