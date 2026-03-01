import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] mb-4">
              LET'S TALK
              <br />
              <span className="text-muted-foreground">AI.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Book a free discovery call or send us a message. No commitments, no jargon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-2xl border border-primary/20 bg-card text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 text-2xl font-black">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Name</label>
                      <Input placeholder="John Doe" className="rounded-xl bg-card border-border focus:border-primary/40" required />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Email</label>
                      <Input type="email" placeholder="john@company.com" className="rounded-xl bg-card border-border focus:border-primary/40" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Company</label>
                    <Input placeholder="Your company" className="rounded-xl bg-card border-border focus:border-primary/40" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={5} className="rounded-xl bg-card border-border focus:border-primary/40" required />
                  </div>
                  <Button type="submit" size="lg" className="rounded-full px-10 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@efficia.ai" },
                { icon: Phone, label: "Phone", value: "+91 80 1234 5678" },
                { icon: MapPin, label: "Office", value: "Bengaluru, India" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card"
                >
                  <item.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              <div className="p-8 rounded-2xl border border-primary/20 bg-card">
                <h3 className="font-bold text-lg mb-2">Book a Free Discovery Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  30-minute session to understand your business and identify AI opportunities.
                </p>
                <Button variant="outline" className="rounded-full px-6 border-primary/30 text-primary hover:bg-primary/10">
                  Schedule Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
