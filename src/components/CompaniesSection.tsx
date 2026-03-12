import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const companies = [
  "Microsoft Fabric", "Informatica", "Snowflake", "AWS", "Azure",
  "Databricks", "SAP", "Oracle", "Power BI", "Zoho",
];

const CompaniesSection = () => (
  <section className="py-16 border-y border-border overflow-hidden">
    <AnimatedSection variant="fadeIn">
      <div className="container mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground font-medium uppercase tracking-widest"
        >
          Technologies & platforms we work with
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...companies, ...companies].map((name, i) => (
            <div key={`${name}-${i}`} className="flex-shrink-0 mx-10 flex items-center justify-center">
              <span className="font-display text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default CompaniesSection;
