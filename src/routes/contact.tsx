import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Daxor" },
      {
        name: "description",
        content:
          "Talk to Daxor about a demo, pricing, migration project, training, or security questions. We respond within 4 business hours.",
      },
      { property: "og:title", content: "Contact — Daxor" },
      { property: "og:description", content: "Let's talk about your data." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const reasons = [
  "Request a product demo",
  "Get a pricing quote",
  "Discuss a migration project",
  "Ask about training",
  "Security / compliance questions",
  "General enquiry",
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const inputCls =
    "w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[color:var(--teal-mid)]/50 focus:border-[color:var(--teal-mid)]/50 transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-24 md:pt-48 md:pb-28">
          <div className="max-w-2xl">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Let's talk about your data.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Whether you're evaluating Daxor, planning a migration, or need a quick question
              answered — we'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-2xl border border-border bg-background p-8 flex flex-col gap-5"
              >
                <h2 className="text-xl font-medium">Send us a message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Full name *</label>
                    <input
                      required
                      className={inputCls}
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground">
                      Work email *
                    </label>
                    <input
                      required
                      type="email"
                      className={inputCls}
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Company *</label>
                  <input
                    required
                    className={inputCls}
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Reason for contact
                  </label>
                  <select
                    className={inputCls}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  >
                    <option value="">Select a reason…</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className={inputCls + " resize-none"}
                    placeholder="Tell us about your project or question…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition w-fit"
                >
                  Send message
                </button>

                <p className="text-xs text-muted-foreground">
                  We respond to all enquiries within 4 business hours.
                </p>
              </form>
            ) : (
              <div className="rounded-2xl border border-[color:var(--teal-mid)]/30 bg-[color:var(--teal-soft)]/30 p-12 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[color:var(--teal-mid)]/10 border border-[color:var(--teal-mid)]/30 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[color:var(--teal-mid)]"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium">Message received!</h2>
                <p className="text-muted-foreground max-w-xs">
                  Thanks {form.name.split(" ")[0]}. Someone from our team will reply to{" "}
                  <strong>{form.email}</strong> within 4 business hours.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-4">
              <h3 className="font-medium text-sm">Direct contact</h3>
              <div>
                <p className="text-sm font-medium">contactus@daxor.in</p>
                <p className="text-xs text-muted-foreground">General enquiries</p>
              </div>
              <div>
                <p className="text-sm font-medium">+91 94453 31669</p>
                <p className="text-xs text-muted-foreground">Sales & support</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mon–Fri, 9 AM–7 PM IST</p>
                <p className="text-xs text-muted-foreground">Support hours (24/7 for critical)</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 flex flex-col gap-2">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
                Bengaluru
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                Bengaluru, Karnataka, India
              </p>
              <p className="text-sm">+91 94453 31669</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
