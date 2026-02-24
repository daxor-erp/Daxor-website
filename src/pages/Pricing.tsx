import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    desc: "Perfect for small businesses getting started.",
    features: [
      "Up to 10 users",
      "Core modules (Finance, Inventory)",
      "Basic reporting",
      "Email support",
      "5 GB storage",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    desc: "For growing teams that need advanced tools.",
    features: [
      "Up to 50 users",
      "All modules included",
      "Advanced analytics & dashboards",
      "Priority support",
      "50 GB storage",
      "API access",
      "Custom workflows",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with complex needs.",
    features: [
      "Unlimited users",
      "All modules + custom development",
      "Dedicated account manager",
      "24/7 phone & chat support",
      "Unlimited storage",
      "On-premise deployment option",
      "SLA guarantee",
      "SSO & advanced security",
    ],
    popular: false,
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-surface-dark text-surface-dark-foreground border-2 border-surface-dark"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "opacity-60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.popular ? "opacity-60" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "opacity-70" : "text-muted-foreground"}`} />
                    <span className={plan.popular ? "opacity-80" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full gap-2 ${
                  plan.popular ? "" : ""
                }`}
                variant={plan.popular ? "secondary" : "outline"}
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Pricing;
