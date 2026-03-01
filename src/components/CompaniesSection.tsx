import { motion } from "framer-motion";

const companies = [
  "Stripe", "Shopify", "Notion", "Slack", "Vercel",
  "Linear", "Figma", "Datadog", "Twilio", "Airtable",
];

const CompaniesSection = () => (
  <section className="py-16 border-y border-border overflow-hidden">
    <div className="container mb-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]"
      >
        Trusted by industry leaders
      </motion.p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee">
        {[...companies, ...companies].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 mx-12 flex items-center justify-center"
          >
            <span className="font-display text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-foreground transition-colors duration-500 whitespace-nowrap select-none cursor-default">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesSection;
