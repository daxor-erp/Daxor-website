import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      <motion.div className="container relative pt-32 pb-20" style={{ scale, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full text-xs font-medium text-primary mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            #AIConsulting #WorkflowAutomation
          </motion.div>

          {/* Main headline */}
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 50, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              A CLEAR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-gradient"
            >
              AI PLAN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block text-muted-foreground"
            >
              FOR YOUR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              BUSINESS.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Practical AI consulting and workflow automation for SMEs.
            We help you implement AI without the hype — just real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="gap-2 rounded-full px-8 group text-base bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 hover:border-primary/40 transition-all text-base border-glow">
              See Our Work
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
