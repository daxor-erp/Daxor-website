import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CalendarScheduler } from "@/components/ui/calendar-scheduler";
import { LocationMap } from "@/components/ui/location-map";

const CTASection = () => {
  const [showScheduler, setShowScheduler] = useState(false);
  const [confirmed, setConfirmed] = useState<{ date?: Date; time?: string } | null>(null);

  return (
    <section id="contact" className="py-24">
      <AnimatedSection variant="scale">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-surface-dark text-surface-dark-foreground p-10 md:p-16 overflow-hidden"
          >
            {/* Background rings */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                {[...Array(10)].map((_, i) => (
                  <circle key={i} cx={400} cy={200} r={50 + i * 40} fill="none" stroke="currentColor" strokeWidth="0.5" />
                ))}
              </svg>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-14 items-start">
              {/* Left col */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Let's build your future together
                </h2>
                <p className="text-surface-dark-foreground/60 text-lg mb-8">
                  Ready to experience AI-driven ERP and expert transformation services? Our team in Bengaluru is ready to help.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full px-8 gap-2"
                    onClick={() => setShowScheduler((v) => !v)}
                  >
                    <CalendarDays className="w-4 h-4" />
                    {showScheduler ? "Hide Scheduler" : "Book Personalised Demo"}
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-full px-8 text-surface-dark-foreground hover:bg-surface-dark-foreground/10">
                    Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Inline scheduler */}
                <AnimatePresence>
                  {showScheduler && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-2xl bg-background/10 backdrop-blur-sm border border-surface-dark-foreground/10 p-4">
                        {confirmed ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-8 text-center"
                          >
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                              <CalendarDays className="w-6 h-6 text-emerald-400" />
                            </div>
                            <p className="font-semibold text-lg mb-1">Demo Scheduled</p>
                            <p className="text-surface-dark-foreground/60 text-sm">
                              {confirmed.date?.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" })} at {confirmed.time} IST
                            </p>
                            <p className="text-surface-dark-foreground/40 text-xs mt-2">We'll send a confirmation to your email.</p>
                            <Button variant="ghost" size="sm" className="mt-4 text-surface-dark-foreground/60" onClick={() => { setConfirmed(null); }}>
                              Schedule another
                            </Button>
                          </motion.div>
                        ) : (
                          <CalendarScheduler
                            onConfirm={(val) => {
                              setConfirmed(val);
                            }}
                          />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right col — contact info + location map */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest opacity-50 mb-3">Daxor Technologies Pvt. Ltd.</p>
                  <div className="flex items-start gap-3 text-sm opacity-70 mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm opacity-70 mb-3">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>hello@daxorai.in</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm opacity-70">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>demo@daxorai.in</span>
                  </div>
                </div>

                {/* Location map card */}
                <LocationMap
                  location="Bengaluru, Karnataka"
                  coordinates="12.9716° N, 77.5946° E"
                />

                <div className="pt-4 border-t border-surface-dark-foreground/10">
                  <p className="text-xs opacity-40 mb-3 uppercase tracking-widest">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {["Daxor ERP", "Consulting", "Migration", "Training"].map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full border border-surface-dark-foreground/20 text-xs opacity-70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
