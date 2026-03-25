import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HelpCircle, ChevronDown, ArrowRight, MessageSquare, FileText, Zap, Shield } from "lucide-react";

const categories = [
  {
    id: "getting-started",
    icon: Zap,
    label: "Getting Started",
    color: "text-primary",
    bg: "bg-primary/10",
    faqs: [
      { q: "How long does it take to go live with Daxor ERP?", a: "Most customers are fully live within 6–10 weeks. The timeline depends on the number of modules, data migration complexity, and your team's availability for testing. Our fastest go-live was 3 weeks for a single-module rollout." },
      { q: "Do I need to replace my existing systems to use Daxor?", a: "No. Daxor connects to your existing stack via APIs, data connectors, and migration tools. You can run Daxor alongside legacy systems during transition, or use it as a standalone ERP from day one." },
      { q: "What data do I need to provide during onboarding?", a: "Typically: chart of accounts, opening balances, master data (customers, suppliers, products), and historical transaction data for AI model training. Our onboarding team provides data templates and guides your team through the process." },
      { q: "Is there a free trial available?", a: "Yes — we offer a 30-day sandbox environment with sample data. Contact us to request access. For enterprises, we can load a subset of your own data into the sandbox for a more realistic evaluation." },
    ],
  },
  {
    id: "ai-features",
    icon: MessageSquare,
    label: "AI Features",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    faqs: [
      { q: "How does the AI Assistant get trained on my business?", a: "The AI Assistant learns from your ERP data (transactions, products, users) using a retrieval-augmented generation (RAG) pipeline. No fine-tuning of base models is required — it's contextualised to your business within hours of go-live." },
      { q: "Can the AI Assistant access data it shouldn't?", a: "No. The AI Assistant respects the exact same RBAC permissions as the rest of the platform. A sales executive asking about payroll data will be told they don't have access — the same way the UI would block them." },
      { q: "How accurate is the demand forecasting?", a: "Average MAPE (Mean Absolute Percentage Error) across our customer base is 6.2%. Accuracy improves over time as more of your data is incorporated. We recommend a minimum of 12 months of historical sales data for best results." },
      { q: "What languages does the NLP Report Generator support?", a: "Currently English, Hindi, Tamil, Telugu, Marathi, and Gujarati. Arabic and Bahasa Indonesia are on the roadmap for Q3 2025. The financial data in reports is always displayed in your configured currency." },
    ],
  },
  {
    id: "data-security",
    icon: Shield,
    label: "Data & Security",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    faqs: [
      { q: "Where is my data stored?", a: "Your data is stored in your own Azure subscription (or AWS if preferred). Daxor deploys into your tenant — we never copy or store your business data in Daxor-managed infrastructure." },
      { q: "Can Daxor staff read my business data?", a: "No. By design, Daxor engineers cannot access customer data. All operations are performed through automated pipelines. Any break-glass access for incident response requires customer approval and is fully audited." },
      { q: "What happens to my data if I cancel?", a: "You retain full ownership and access. We provide a 90-day data export window after cancellation. Data is permanently deleted from all Daxor systems within 30 days of your confirmed export." },
      { q: "Is Daxor compliant with India's DPDPA 2023?", a: "Yes. Daxor is compliant with the Digital Personal Data Protection Act 2023. We serve as a Data Processor, your organisation remains the Data Fiduciary. Full DPA documentation is available on request." },
    ],
  },
  {
    id: "billing",
    icon: FileText,
    label: "Billing & Plans",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    faqs: [
      { q: "How is Daxor priced?", a: "Daxor is priced per active user per month, with module-based add-ons. Visit our Pricing page for current plans, or contact sales for a custom enterprise quote." },
      { q: "Can I change plans mid-contract?", a: "Yes. You can upgrade at any time — additional charges are prorated. Downgrades take effect at the next renewal date." },
      { q: "What payment methods do you accept?", a: "Bank transfer, credit/debit card, and UPI for Indian customers. International customers can pay via wire transfer or card. Annual billing is available at a 15% discount." },
      { q: "Is there a setup or onboarding fee?", a: "Implementation is charged separately from SaaS subscription. The cost depends on modules, migration complexity, and training requirements. We provide a fixed-price implementation quote before any commitment." },
    ],
  },
];

export default function Help() {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const cat = categories.find(c => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
              How can we help?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions or reach out to our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-[240px_1fr] gap-10">
          {/* Category sidebar */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-1">
            {categories.map(c => (
              <button key={c.id} onClick={() => { setActiveCategory(c.id); setOpenFaq(null); }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-left transition-all ${activeCategory === c.id ? `${c.bg} ${c.color} font-medium` : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                <c.icon className="w-4 h-4 flex-shrink-0" />
                {c.label}
              </button>
            ))}
            <div className="mt-6 p-4 rounded-xl border border-border bg-card">
              <HelpCircle className="w-5 h-5 text-primary mb-2" />
              <p className="text-sm font-medium mb-1">Still stuck?</p>
              <p className="text-xs text-muted-foreground mb-3">Our support team replies within 4 hours on business days.</p>
              <Button size="sm" className="w-full rounded-full text-xs" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>

          {/* FAQs */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-2">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{cat.label}</p>
                {cat.faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="rounded-xl border border-border overflow-hidden">
                    <button className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-accent/30 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className="font-medium text-sm leading-relaxed">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                          className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 border-t border-border bg-card/20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Didn't find your answer?</h2>
            <p className="text-muted-foreground mb-6 text-sm">Our team of engineers (not chatbots) will respond within 4 business hours.</p>
            <div className="flex gap-3 flex-wrap">
              <Button className="rounded-full gap-2 group" asChild>
                <Link to="/contact">Open a Support Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
