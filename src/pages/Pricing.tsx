import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    monthly: 2499,
    yearly: 1999,
    desc: "For SMEs exploring AI for the first time.",
    features: [
      "AI Readiness Audit",
      "Custom AI Roadmap",
      "1 Workflow Automation",
      "Email Support",
      "Monthly Check-in",
    ],
    popular: false,
  },
  {
    name: "Growth",
    monthly: 5999,
    yearly: 4799,
    desc: "For businesses ready to scale with AI.",
    features: [
      "Everything in Starter",
      "3 Workflow Automations",
      "Custom AI Chatbot",
      "Data Analytics Dashboard",
      "Priority Support",
      "Weekly Strategy Calls",
      "Team Training Sessions",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 0,
    yearly: 0,
    desc: "For organizations with complex AI needs.",
    features: [
      "Everything in Growth",
      "Unlimited Automations",
      "Custom ML Models",
      "Dedicated AI Strategist",
      "24/7 Support",
      "On-premise Deployment",
      "SLA Guarantee",
      "AI Governance Framework",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] mb-4">
              INVEST IN
              <br />
              <span className="text-muted-foreground">YOUR FUTURE.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? "bg-primary" : "bg-muted"}`}
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-1 w-5 h-5 rounded-full ${annual ? "left-8 bg-primary-foreground" : "left-1 bg-foreground"}`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-xs text-primary">(save 20%)</span>
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-500 ${
                  plan.popular
                    ? "bg-surface-dark text-surface-dark-foreground border-2 border-primary/30 glow-teal"
                    : "bg-card border border-border hover:border-primary/20"
                }`}
              >
                {plan.popular && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full"
                  >
                    Most Popular
                  </motion.span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? "yearly" : "monthly"}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-5xl font-black inline-block tracking-tight"
                    >
                      {plan.monthly === 0 ? "Custom" : `$${annual ? plan.yearly : plan.monthly}`}
                    </motion.span>
                  </AnimatePresence>
                  {plan.monthly > 0 && (
                    <span className={`text-sm ${plan.popular ? "opacity-50" : "text-muted-foreground"}`}>
                      /mo
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? "opacity-50" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-primary/60"}`} />
                      <span className={plan.popular ? "opacity-80" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full gap-2 ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link to="/contact">
                    {plan.monthly === 0 ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
