import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Founder & AI Strategist", initials: "AM" },
  { name: "Lisa Chen", role: "Head of Engineering", initials: "LC" },
  { name: "David Okafor", role: "ML Lead", initials: "DO" },
  { name: "Nina Petrova", role: "Automation Architect", initials: "NP" },
];

const TeamSection = () => (
  <section id="team" className="py-28 overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          Our Team
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
          THE PEOPLE
          <br />
          <span className="text-muted-foreground">BEHIND THE AI.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-500"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-primary/20 transition-colors duration-500">
              {member.initials}
            </div>
            <h3 className="font-bold text-lg tracking-tight">{member.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            <div className="flex gap-3 mt-4">
              <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
