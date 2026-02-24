import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Companies" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "Integrations" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.15, duration: 0.5 },
  }),
};

const HeroSection = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    {/* Animated grid bg */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-6"
        >
          Welcome to erpflow
        </motion.span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block"
          >
            STREAMLINE YOUR
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="block text-muted-foreground"
          >
            BUSINESS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block"
          >
            OPERATIONS
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
        >
          Manage inventory, finances, HR and more — all from one powerful platform designed to scale with your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Button size="lg" className="gap-2 rounded-full px-8 group" asChild>
            <Link to="/pricing">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
            Book a Demo
          </Button>
        </motion.div>
      </motion.div>

      {/* Stats row with count-up feel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap gap-8 mt-8"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
            className="flex items-center gap-3"
          >
            <span className="text-3xl font-display font-bold">{s.value}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature cards with staggered entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        {[
          { icon: BarChart3, title: "Financial Management", desc: "Real-time reporting and analytics" },
          { icon: Users, title: "HR & Payroll", desc: "Manage your entire workforce" },
          { icon: Boxes, title: "Inventory Control", desc: "Track stock across locations" },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            className="group p-6 rounded-2xl border border-border bg-card hover:bg-surface-dark hover:text-surface-dark-foreground transition-all duration-300 cursor-pointer"
          >
            <card.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-surface-dark-foreground/70 transition-colors" />
            <h3 className="font-display font-semibold text-lg mb-1">{card.title}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-surface-dark-foreground/60 transition-colors">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
