import { motion } from "framer-motion";

const companies = [
  "TechVault", "NovaStar", "Meridian", "Greenfield", "Pacific Trade",
  "Apex Logic", "Quantum", "FluxData", "OmniCore", "Prism AI",
];

const CompaniesSection = () => (
  <section className="py-16 border-y border-border overflow-hidden">
    <div className="container mb-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.25em]"
      >
        Trusted by forward-thinking companies
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
            <span className="text-2xl md:text-3xl font-black text-muted-foreground/20 hover:text-primary/60 transition-colors duration-500 whitespace-nowrap select-none cursor-default tracking-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesSection;
