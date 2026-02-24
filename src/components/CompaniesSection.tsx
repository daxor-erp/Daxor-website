import { motion } from "framer-motion";

const companies = [
  "Stripe", "Shopify", "Notion", "Slack", "Vercel",
  "Linear", "Figma", "Datadog", "Twilio", "Airtable",
];

const CompaniesSection = () => (
  <section className="py-16 border-y border-border overflow-hidden">
    <div className="container mb-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground font-medium uppercase tracking-widest"
      >
        Trusted by industry leaders
      </motion.p>
    </div>
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee">
        {[...companies, ...companies].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 mx-10 flex items-center justify-center"
          >
            <span className="font-display text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesSection;
