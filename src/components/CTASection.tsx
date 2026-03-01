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
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.9] mb-6"
            >
              READY TO
              <br />
              <span className="text-gradient">TRANSFORM</span>
              <br />
              YOUR BUSINESS?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-surface-dark-foreground/50 max-w-md mx-auto mb-10 text-lg"
            >
              Book a free discovery call. No commitments, no jargon — just a clear conversation about AI for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-10 gap-2 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link to="/contact">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 text-base border-surface-dark-foreground/20 text-surface-dark-foreground hover:border-primary/40"
                asChild
              >
                <Link to="/pricing">
                  View Pricing
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
