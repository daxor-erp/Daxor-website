import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCards } from "@/components/ui/pricing-cards";
import type { PricingPlan } from "@/components/ui/pricing-cards";
import { BookingModal } from "@/components/ui/booking-modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹29,999",
    period: "/ month",
    description: "For small businesses ready to move beyond spreadsheets and fragmented tools.",
    features: [
      { title: "Up to 10 users", description: "Ideal for lean teams getting started." },
      { title: "Finance & Inventory modules", description: "Core ERP functionality out of the box." },
      { title: "Basic AI dashboards", description: "Pre-built KPIs and reporting views." },
      { title: "Email support", description: "Response within 1 business day." },
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Professional",
    price: "₹89,999",
    period: "/ month",
    description: "For growing enterprises that need the full Daxor ERP suite with advanced AI capabilities.",
    features: [
      { title: "Up to 50 users", description: "Scale your team without limits." },
      { title: "All 7 ERP modules", description: "Finance, HR, Supply Chain, Manufacturing & more." },
      { title: "AI Assistant (CFO · COO · Analyst)", description: "Your 24×7 intelligent business advisor." },
      { title: "GST · TDS · e-Invoice compliance", description: "India-ready out of the box." },
      { title: "Priority support + SLA", description: "Dedicated response within 4 hours." },
    ],
    highlighted: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organisations needing custom modules, on-premise deployment, or dedicated infrastructure.",
    features: [
      { title: "Unlimited users", description: "No per-seat restrictions." },
      { title: "Custom ERP modules", description: "Built to your exact business workflows." },
      { title: "On-premise or private cloud", description: "Full control over your data." },
      { title: "Dedicated account manager", description: "A single point of contact for everything." },
    ],
    buttonText: "Book a Meeting",
    buttonIcon: "phone",
    buttonVariant: "outline",
  },
];

const Pricing = () => {
  const [bookingPlan, setBookingPlan] = useState<string | null>(null);

  const plansWithAction: PricingPlan[] = plans.map(p => ({
    ...p,
    onButtonClick: () => setBookingPlan(p.name),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PricingCards
          plans={plansWithAction}
          badge="Pricing"
          title="Transparent pricing, no surprises"
          subtitle="From ERP subscriptions to enterprise deployments — pick what fits your business. All plans include India compliance built-in."
        />

        {/* Migration & Training add-ons */}
        <section className="pb-24">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="rounded-2xl border bg-card p-8">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Add-on Service</p>
                <h3 className="text-xl font-semibold mb-2">Data Migration</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Migrate from Informatica, SSIS, or DataStage to Microsoft Fabric — fully managed by our engineers. Includes free assessment.
                </p>
                <Button variant="outline" className="gap-2 rounded-full" onClick={() => setBookingPlan("Data Migration")}>
                  Book Free Assessment <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="rounded-2xl border bg-card p-8">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Add-on Service</p>
                <h3 className="text-xl font-semibold mb-2">Corporate Training</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Hands-on training for your data teams — Microsoft Fabric, Snowflake, AWS, Azure. ₹49,999 per cohort (up to 20 seats).
                </p>
                <Button variant="outline" className="gap-2 rounded-full" onClick={() => setBookingPlan("Corporate Training")}>
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <BookingModal
        open={bookingPlan !== null}
        onClose={() => setBookingPlan(null)}
        plan={bookingPlan ?? undefined}
      />

      <Footer />
    </div>
  );
};

export default Pricing;
