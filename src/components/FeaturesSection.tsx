import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExpandableCard } from "@/components/ui/expandable-card";

const modules = [
  {
    title: "Finance & Accounting",
    description: "ERP Module",
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "Multi-entity Consolidation", p: "Manage multiple legal entities, subsidiaries, and cost centres from a single chart of accounts. Real-time consolidation with intercompany eliminations and automated currency revaluation." },
      { h: "India Compliance Built-in", p: "Automated GST returns (GSTR-1, 3B, 9), TDS/TCS computation, e-invoicing with IRN/QR generation, and seamless integration with the GSTN portal — zero manual filing." },
      { h: "AI-Powered Budgeting", p: "Predictive cash flow forecasting, variance analysis with natural language explanations, and anomaly alerts that flag unusual spend before it becomes a problem." },
    ],
  },
  {
    title: "Supply Chain & Inventory",
    description: "ERP Module",
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "End-to-End Traceability", p: "Track every item from purchase order to customer delivery with lot/serial number tracking, expiry management, and full audit trail across all warehouse locations." },
      { h: "Predictive Replenishment", p: "AI-driven demand forecasting analyses historical patterns, seasonality, and market signals to automatically generate purchase orders before stockouts occur." },
      { h: "Multi-Warehouse Operations", p: "Manage unlimited warehouses, bins, and zones. Optimise pick-pack-ship workflows with barcode scanning, mobile WMS, and real-time stock visibility." },
    ],
  },
  {
    title: "HR & Payroll",
    description: "ERP Module",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "Hire-to-Retire Workflows", p: "From job postings and onboarding to performance reviews and offboarding — every HR process in one place with configurable approval workflows and digital document management." },
      { h: "Statutory Compliance", p: "Automated PF, ESI, PT, TDS, and gratuity calculations. Generate Form 16, Form 24Q, and all statutory reports with one click. Always up-to-date with regulatory changes." },
      { h: "Employee Self-Service", p: "Mobile-first portal for leave applications, payslip downloads, expense claims, and performance check-ins — reducing HR team workload by up to 60%." },
    ],
  },
  {
    title: "Manufacturing & Production",
    description: "ERP Module",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "Multi-Level BOM", p: "Define complex bill of materials with phantom assemblies, co-products, and by-products. Version control ensures production always uses the correct specification." },
      { h: "Shop-Floor Execution", p: "Real-time work order tracking, machine utilisation dashboards, quality checkpoints at each operation, and OEE reporting to identify bottlenecks instantly." },
      { h: "AI Production Planning", p: "Capacity-aware scheduling that balances machine availability, material constraints, and delivery deadlines — automatically rescheduling when disruptions occur." },
    ],
  },
  {
    title: "Sales, CRM & Billing",
    description: "ERP Module",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "Quote-to-Cash Automation", p: "From lead capture to invoice collection — CPQ, contract management, subscription billing, and revenue recognition all connected in a single pipeline." },
      { h: "Omni-Channel Commerce", p: "Sell across direct sales, e-commerce, marketplaces, and distribution channels with unified inventory, pricing, and customer data." },
      { h: "Revenue Intelligence", p: "AI-powered deal scoring, churn prediction, and upsell recommendations give your sales team the insights to close faster and retain longer." },
    ],
  },
  {
    title: "Spend & Procurement",
    description: "ERP Module",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "3-Way PO Matching", p: "Automated matching of purchase orders, goods receipts, and vendor invoices eliminates manual reconciliation and prevents duplicate or fraudulent payments." },
      { h: "Vendor Management", p: "Centralised vendor onboarding, performance scorecards, contract repository, and automated renewal alerts keep supplier relationships healthy and compliant." },
      { h: "AI Anomaly Detection", p: "Machine learning models flag unusual spend patterns, policy violations, and potential fraud in real time — before approvals are granted." },
    ],
  },
  {
    title: "Built-in Chatbot",
    description: "AI Feature",
    src: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "Natural Language Queries", p: "Ask questions like 'What is our outstanding receivables this month?' or 'Show me top 5 vendors by spend' and get instant answers — no SQL, no reports." },
      { h: "Workflow Approvals via Chat", p: "Approve purchase orders, leave requests, and expense claims directly from the chat interface. Integrated with WhatsApp, Slack, and Microsoft Teams." },
      { h: "Zero-Training Onboarding", p: "New users get up to speed in hours, not weeks. The chatbot guides them through processes, answers questions, and escalates to HR or IT when needed." },
    ],
  },
  {
    title: "AI Assistant",
    description: "AI Feature",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80",
    detail: [
      { h: "Predictive Analytics", p: "Demand forecasting, revenue projections, and risk scoring powered by models trained on your own business data — not generic benchmarks." },
      { h: "Anomaly Detection", p: "Continuous monitoring across all modules flags deviations from expected patterns: unusual transactions, inventory discrepancies, payroll anomalies, and more." },
      { h: "NLP Report Generation", p: "Generate board-ready reports, MIS summaries, and variance analyses in natural language. Export to PDF, Excel, or share directly in your BI tool." },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FeaturesSection = () => (
  <section id="product" className="py-24 bg-surface-dark text-surface-dark-foreground">
    <AnimatedSection variant="fadeUp">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-surface-dark-foreground/20 rounded-full text-xs font-medium opacity-60 mb-4">
            Daxor ERP Modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Enterprise sophistication.
            <br />
            For everyone.
          </h2>
          <p className="text-surface-dark-foreground/60 max-w-xl mx-auto">
            One unified platform replacing multiple tools — with contextual AI that actually understands your business. Click any module to explore.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {modules.map((m) => (
            <motion.div key={m.title} variants={item}>
              <ExpandableCard
                title={m.title}
                src={m.src}
                description={m.description}
                classNameExpanded="[&_h4]:text-surface-dark-foreground [&_h4]:font-semibold [&_h4]:text-base [&_h4]:mt-2"
              >
                {m.detail.map((d) => (
                  <div key={d.h}>
                    <h4>{d.h}</h4>
                    <p>{d.p}</p>
                  </div>
                ))}
              </ExpandableCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-surface-dark-foreground/10 pt-12"
        >
          {[
            { value: "60–70%", label: "Faster implementation" },
            { value: "1 platform", label: "No bolt-on tools" },
            { value: "Zero", label: "Hidden setup fees" },
            { value: "100%", label: "India GST compliant" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm opacity-50">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  </section>
);

export default FeaturesSection;
