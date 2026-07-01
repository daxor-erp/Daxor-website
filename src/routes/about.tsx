import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Daxor" },
      {
        name: "description",
        content:
          "Built by people who got tired of bad ERP. Daxor's mission, values, timeline, and the enterprises we serve.",
      },
      { property: "og:title", content: "About — Daxor" },
      { property: "og:description", content: "Our story, team, and mission." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const stats = [
  { v: "50+", l: "enterprise clients" },
  { v: "2", l: "offices" },
  { v: "30+", l: "team members" },
  { v: "6 yrs", l: "in business" },
];

const timeline = [
  {
    year: "2018",
    event: "Founded in Mumbai as a data consultancy, serving two mid-market manufacturing firms.",
  },
  {
    year: "2020",
    event: "Launched the first version of Daxor ERP on Azure. First enterprise customer goes live.",
  },
  {
    year: "2021",
    event: "Expanded to 20+ clients across India. AI Assistant beta shipped to design partners.",
  },
  { year: "2022", event: "Series A funding. Onboarded first international clients." },
  {
    year: "2023",
    event:
      "Released Daxor AI Platform with six ML engines. Microsoft Fabric partnership announced.",
  },
  { year: "2024", event: "50+ enterprise clients. Opened second office. ISO 27001 certified." },
];

const values = [
  {
    title: "Outcomes over outputs",
    desc: "We measure success by business results — reduced costs, faster closes, fewer stockouts — not lines of code or slide decks delivered.",
  },
  {
    title: "Radical transparency",
    desc: "Every AI decision is explainable. Every migration step is documented. Every engagement is priced without hidden costs.",
  },
  {
    title: "Speed without shortcuts",
    desc: "We prototype fast because we've solved these problems before — but we never skip security reviews, testing, or documentation.",
  },
  {
    title: "Customer-first culture",
    desc: "Our support team is staffed by the engineers who built the product. Tickets get responses from people who understand the code.",
  },
];

const clients = [
  { name: "Tata Steel", industry: "Manufacturing" },
  { name: "Reliance Retail", industry: "Retail & FMCG" },
  { name: "Mahindra Logistics", industry: "Logistics" },
  { name: "HDFC Bank", industry: "Financial Services" },
  { name: "Infosys BPM", industry: "IT Services" },
  { name: "Apollo Hospitals", industry: "Healthcare" },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              About Daxor
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Built by people who got tired of bad ERP.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              We spent years implementing legacy ERP that was slow, expensive, and dumb. We knew we
              could do better.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Get in touch
              </Link>
              <Link
                to="/case-studies"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                Our work
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/14-team-meeting.png"
              alt="Illustration of the Daxor team discussing a project"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-14 border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-medium tracking-tight">{s.v}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Our mission
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6 leading-snug">
              Make enterprise-grade AI accessible to every business, not just the Fortune 500.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Mid-market and growth-stage companies deserve the same intelligence layer that the
              world's largest enterprises have — without the 18-month implementation timelines or
              the enormous price tags.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Timeline
            </p>
            <div className="flex flex-col gap-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-4 pb-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[color:var(--teal-mid)] mt-1" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-1">
                    <span className="text-xs font-mono font-bold text-[color:var(--teal-mid)]">
                      {t.year}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                      {t.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Values
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">What we believe in.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-border bg-background">
                <h3 className="font-medium mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Clients
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em]">
              Trusted by leading enterprises.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {clients.map((c) => (
              <div
                key={c.name}
                className="p-6 rounded-2xl border border-border bg-background flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-lg font-medium text-[color:var(--teal-mid)]">
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-page max-w-xl">
          <h2 className="text-3xl font-medium mb-4">Want to work with us?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for partners, clients, and talent to grow with.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition inline-flex"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
