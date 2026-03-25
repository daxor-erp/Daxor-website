import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

const reasons = [
  "Request a product demo",
  "Get a pricing quote",
  "Discuss a migration project",
  "Ask about training",
  "Security / compliance questions",
  "General enquiry",
];

const offices = [
  { city: "Bengaluru", address: "Bengaluru, Karnataka, India", phone: "+91 94453 31669" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ShaderAnimation className="w-full h-full" opacity={0.12} variant="neural" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)/0.2) 0%, hsl(var(--background)/0.7) 60%, hsl(var(--background)) 100%)" }} />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/80">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
              Let's talk <span className="text-primary">about your data</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're evaluating Daxor, planning a migration, or need a quick question answered — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-24">
        <div className="container grid lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-5">
                <h2 className="text-xl font-bold">Send us a message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Full name *</label>
                    <input required className={inputCls} placeholder="Rahul Sharma"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Work email *</label>
                    <input required type="email" className={inputCls} placeholder="rahul@company.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Company *</label>
                  <input required className={inputCls} placeholder="Acme Corp"
                    value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Reason for contact</label>
                  <select className={inputCls} value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })}>
                    <option value="">Select a reason…</option>
                    {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Message *</label>
                  <textarea required rows={4} className={inputCls + " resize-none"} placeholder="Tell us about your project or question…"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <Button type="submit" size="lg" className="rounded-full gap-2 group w-full sm:w-auto">
                  Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground">We respond to all enquiries within 4 business hours.</p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-primary/30 bg-primary/5 p-12 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Message received!</h2>
                <p className="text-muted-foreground max-w-xs">
                  Thanks {form.name.split(" ")[0]}. Someone from our team will reply to <strong>{form.email}</strong> within 4 business hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
              <h3 className="font-bold text-sm">Direct contact</h3>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">contactus@daxor.in</p>
                  <p className="text-xs text-muted-foreground">General enquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">+91 94453 31669</p>
                  <p className="text-xs text-muted-foreground">Sales & support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Mon–Fri, 9 AM–7 PM IST</p>
                  <p className="text-xs text-muted-foreground">Support hours (24/7 for critical)</p>
                </div>
              </div>
            </div>

            {offices.map((o, i) => (
              <motion.div key={o.city} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-5 flex flex-col gap-2">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">{o.city}</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-snug">{o.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <p className="text-sm">{o.phone}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
