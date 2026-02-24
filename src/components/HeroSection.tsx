import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Companies" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "Integrations" },
];

const HeroSection = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    {/* Decorative lines */}
    <div className="absolute inset-0 pointer-events-none">
      <svg className="absolute top-0 right-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600">
        <path d="M0 100 Q400 50 800 200" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 200 Q400 150 800 300" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 300 Q400 250 800 400" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-6">
          Welcome to erpflow
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          STREAMLINE YOUR
          <br />
          <span className="text-muted-foreground">BUSINESS</span>
          <br />
          OPERATIONS
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Manage inventory, finances, HR and more — all from one powerful platform designed to scale with your business.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button size="lg" className="gap-2 rounded-full px-8" asChild>
            <Link to="/pricing">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Book a Demo
          </Button>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap gap-8 mt-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="text-3xl font-display font-bold">{s.value}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Feature cards preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
      >
        {[
          { icon: BarChart3, title: "Financial Management", desc: "Real-time reporting and analytics" },
          { icon: Users, title: "HR & Payroll", desc: "Manage your entire workforce" },
          { icon: Boxes, title: "Inventory Control", desc: "Track stock across locations" },
        ].map((card) => (
          <div
            key={card.title}
            className="group p-6 rounded-2xl border border-border bg-card hover:bg-surface-dark hover:text-surface-dark-foreground transition-all duration-300 cursor-pointer"
          >
            <card.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-surface-dark-foreground/70 transition-colors" />
            <h3 className="font-display font-semibold text-lg mb-1">{card.title}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-surface-dark-foreground/60 transition-colors">
              {card.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
