import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, Users, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Companies" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "Integrations" },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-start">
      {/* Animated grid bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <motion.div className="container relative" style={{ scale, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-6"
          >
            Welcome to erpflow
          </motion.span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              A CLEAR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-muted-foreground"
            >
              PATH TO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              GROWTH.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Manage inventory, finances, HR and more — all from one powerful platform designed to scale with your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button size="lg" className="gap-2 rounded-full px-8 group text-base" asChild>
              <Link to="/pricing">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform text-base">
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-12 mt-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <span className="text-4xl md:text-5xl font-display font-extrabold">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          {[
            { icon: BarChart3, title: "Financial Management", desc: "Real-time reporting and analytics" },
            { icon: Users, title: "HR & Payroll", desc: "Manage your entire workforce" },
            { icon: Boxes, title: "Inventory Control", desc: "Track stock across locations" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              className="group p-8 rounded-2xl border border-border bg-card hover:bg-surface-dark hover:text-surface-dark-foreground transition-all duration-500 cursor-pointer"
            >
              <card.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-surface-dark-foreground/70 transition-colors duration-500" />
              <h3 className="font-display font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-surface-dark-foreground/60 transition-colors duration-500">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
