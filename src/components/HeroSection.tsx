import { motion } from "framer-motion";
import { ArrowRight, Brain, Layers, RefreshCw, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const stats = [
  { value: "50+", label: "Enterprises Served" },
  { value: "98%", label: "Customer Retention" },
  { value: "40%", label: "Faster Reporting" },
];

const pillars = [
  { icon: Brain, title: "Daxor ERP", desc: "AI-powered intelligent ERP platform" },
  { icon: Layers, title: "Consulting", desc: "AWS, Azure, Snowflake & next-gen strategy" },
  { icon: RefreshCw, title: "Migration", desc: "Informatica → Microsoft Fabric & beyond" },
  { icon: GraduationCap, title: "Training", desc: "Corporate capability building programmes" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.12, duration: 0.5 },
  }),
};

const HeroSection = () => {
  const { ref, opacity, y, scale } = useScrollAnimation();

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ opacity, y, scale }}
      className="relative pt-32 pb-20 overflow-hidden"
    >
      {/* Shader background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <ShaderAnimation className="w-full h-full" opacity={0.60} />
      </motion.div>
      {/* Gradient overlay so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background)/0.25) 0%, hsl(var(--background)/0.45) 60%, hsl(var(--background)) 100%)",
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-6"
          >
            Bengaluru, India · AI-Native ERP Platform
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
            >
              A NEW ERA OF
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            className="block text-muted-foreground italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, letterSpacing: "0.02em" }}
            >
              Intelligent
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              ERP
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Daxor ERP combines enterprise-grade ERP with powerful AI intelligence — plus expert consulting, seamless data migrations, and corporate training. Operate faster, smarter, and future-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg" className="gap-2 rounded-full px-8 group">
              Request a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-8 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <span className="text-3xl font-bold">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((card, i) => (
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
              <h3 className="font-semibold text-base mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-surface-dark-foreground/60 transition-colors">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
