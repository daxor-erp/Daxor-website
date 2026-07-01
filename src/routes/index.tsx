import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Daxor — Migrate & modernize on Microsoft Fabric" },
      {
        name: "description",
        content:
          "Daxor helps enterprises plan, migrate, and scale on Microsoft Fabric. From strategic roadmap to AI enablement — modernize securely, at scale.",
      },
      { property: "og:title", content: "Daxor — Migrate & modernize on Microsoft Fabric" },
      {
        property: "og:description",
        content:
          "Fabric planning, migration, platform operations, and AI enablement — delivered by a Microsoft Fabric Featured Partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const logos = [
  "ACC",
  "CSL-Behring",
  "Motion",
  "Herbalife",
  "Lord Abbett",
  "Waystar",
  "Springboard",
  "Sargento",
];

const solutions = [
  {
    name: "Fabric Foundations",
    tag: "Start right",
    href: "/products/fabric-foundations",
    desc: "Launch your Fabric environment with confidence. We configure Lakehouse, Data Warehouse, and pipelines with best-practice security, governance, and cost control.",
    for: "Getting ready to implement Fabric",
  },
  {
    name: "Fabric Jumpstart",
    tag: "Accelerate",
    href: "/products/fabric-jumpstart",
    desc: "A fast-tracked deployment that equips your internal team to take over — ingest, transform, store, and visualize your data on Fabric.",
    for: "Ready to accelerate deployment",
  },
  {
    name: "Platform Operations",
    tag: "Run & optimize",
    href: "/products/platform-operations",
    desc: "Proactive monitoring, issue resolution, and AI-powered insights that keep performance high and Fabric costs in check.",
    for: "Running Fabric at scale",
  },
  {
    name: "AI Enablement",
    tag: "Unlock GenAI",
    href: "/products/ai-enablement",
    desc: "Connect Microsoft's AI stack — Copilot Studio, Azure AI Foundry, and beyond — to make your Fabric estate truly AI-ready.",
    for: "Bringing AI into Fabric",
  },
];

const roadmap = [
  {
    t: "Migration Roadmap",
    d: "A step-by-step guide to migrating your legacy data and apps to Fabric.",
  },
  {
    t: "Technology Blueprint",
    d: "A tailored plan identifying the specific Fabric services you'll need to integrate.",
  },
  {
    t: "Capacity Planning",
    d: "Right-sized compute and storage recommendations to optimize performance and cost.",
  },
  {
    t: "Legacy Savings Analysis",
    d: "Quantified net cost savings from retiring or consolidating legacy technology.",
  },
  {
    t: "Implementation Timeline",
    d: "A realistic, phased project plan with resource and timing estimates.",
  },
  {
    t: "Total Cost Analysis",
    d: "Complete financial breakdown covering migration and ongoing operations.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />

        <div className="container-page relative pt-40 pb-32 md:pt-48 md:pb-40 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 border border-white/10 mb-8">
              <span className="text-[color:var(--mint)]">★ 4.9</span>
              <span>Microsoft Fabric Featured Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[0.95]">
              The Fabric partner
              <br />
              that just works.
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-lg">
              From Fabric planning to optimizing performance — we meet you where you are and take
              you further.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="flex-1 rounded-full bg-white/10 backdrop-blur border border-white/15 px-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition inline-flex items-center justify-center gap-1"
              >
                Schedule demo
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50 max-w-md">
              By clicking "Schedule demo" you agree to the use of your data in accordance with
              Daxor's privacy notice.
            </p>
          </div>

          {/* Hero visual — abstract Fabric card */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm shadow-[var(--shadow-elegant)]">
              <div className="absolute inset-6 rounded-2xl bg-white/95 text-foreground p-6 shadow-2xl">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Fabric workspace</span>
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <MetricCard label="Ingested" value="4.2TB" trend="+18%" />
                  <MetricCard label="Pipelines" value="87" trend="live" />
                  <MetricCard label="Cost/day" value="$312" trend="-24%" />
                </div>
                <div className="mt-4 h-32 rounded-xl bg-gradient-to-b from-[color:var(--teal-soft)] to-transparent relative overflow-hidden">
                  <svg viewBox="0 0 300 120" className="absolute inset-0 w-full h-full">
                    <path
                      d="M0 90 C 40 70 60 40 100 45 S 180 95 220 60 T 300 30"
                      fill="none"
                      stroke="oklch(0.42 0.08 195)"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 90 C 40 70 60 40 100 45 S 180 95 220 60 T 300 30 L 300 120 L 0 120 Z"
                      fill="oklch(0.42 0.08 195 / 0.15)"
                    />
                  </svg>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--teal-mid)] animate-pulse" />
                  Live from Lakehouse · updated 2s ago
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-white text-foreground rounded-2xl p-4 shadow-2xl border border-border w-56">
              <div className="text-xs text-muted-foreground">Migration savings</div>
              <div className="text-2xl font-medium tracking-tight mt-1">
                $1.4M<span className="text-sm text-muted-foreground font-normal">/yr</span>
              </div>
              <div className="mt-2 text-xs text-[color:var(--teal-mid)]">
                Legacy retirement complete
              </div>
            </div>
          </div>
        </div>

        {/* Fade to white */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* LOGOS */}
      <section className="border-b border-border">
        <div className="container-page py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm text-muted-foreground max-w-xs">
              Trusted by technical leaders at Fortune 500 enterprises and fast-scaling teams.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {logos.map((l) => (
                <span
                  key={l}
                  className="text-lg tracking-tight text-muted-foreground/70 font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM HEADLINE */}
      <section id="platform" className="py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-4xl">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Modernize where it matters
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              A Fabric practice that runs while you lead.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Many organizations see the need to modernize but remain overwhelmed by years of
              technical debt. Daxor connects the disconnected pieces — so your teams shift from
              maintaining the past to driving future innovation.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <StatCard k="13,000+" v="Native integrations across bank and enterprise data" />
            <StatCard k="4–6 wks" v="Typical time to first Fabric go-live" />
            <StatCard k="24 hrs" v="Data ingested from your first source system" />
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-24">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              The roadmap
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Start your Fabric journey with a strategic roadmap.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Most organizations recognize the power of Microsoft Fabric but struggle with the
              complexity of getting there. We turn uncertainty into actionable steps.
            </p>
            <Link
              to="/"
              hash="contact"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal-deep)] hover:gap-2 transition-all"
            >
              Get started with your Fabric roadmap
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-3">
            {roadmap.map((r, i) => (
              <div
                key={r.t}
                className="group rounded-2xl bg-background border border-border p-6 hover:border-[color:var(--teal-mid)]/50 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-xs font-mono text-muted-foreground mt-1 w-6 shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="font-medium tracking-tight">{r.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{r.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-3xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Featured solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Wherever you are on Fabric, we move you forward.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                className="group relative rounded-3xl border border-border p-8 md:p-10 bg-background overflow-hidden hover:border-[color:var(--teal-mid)]/40 transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, oklch(0.9 0.09 170 / 0.15), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="text-xs font-medium text-[color:var(--teal-mid)] uppercase tracking-wider">
                    {s.tag}
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-sm italic text-muted-foreground">{s.for}</p>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal-deep)]">
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS / QUOTE */}
      <section id="customers" className="py-24 md:py-32 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page">
          <div className="max-w-4xl">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-6">
              Customer story
            </div>
            <blockquote className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.15]">
              "Daxor got us from Qlik to Power BI on Fabric in six weeks — and cut our legacy
              analytics spend by 40%. It's the migration we'd been putting off for three years."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 font-medium">
                VC
              </div>
              <div>
                <div className="font-medium">Victor Cardenas</div>
                <div className="text-sm text-white/60">VP Data Platform, Ascend Retail</div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <BigStat k="$140M" v="Revenue business now running on a 3-person data team" />
            <BigStat k="40%" v="Reduction in legacy analytics spend post-migration" />
            <BigStat k="6 wks" v="From roadmap to first Fabric workload in production" />
          </div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="rounded-3xl border border-border p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-secondary to-background">
            <div>
              <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
                Migration calculator
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
                See exactly what your migration will take.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our BI Migration Calculator analyzes your apps, complexity, and goals to reveal
                exactly what your Qlik-to-Power BI journey will look like — and where Daxor can
                help.
              </p>
              <p className="mt-2 text-sm text-muted-foreground italic">
                Get your results in 5 minutes.
              </p>
              <Link
                to="/"
                hash="contact"
                className="mt-6 inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
              >
                Calculate my savings
              </Link>
            </div>
            <div className="rounded-2xl bg-background border border-border shadow-[var(--shadow-card)] p-6">
              <div className="text-xs text-muted-foreground">Estimated results</div>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-medium tracking-tight">$820K</div>
                  <div className="text-xs text-muted-foreground">Annual savings</div>
                </div>
                <div>
                  <div className="text-3xl font-medium tracking-tight">14 wks</div>
                  <div className="text-xs text-muted-foreground">Migration duration</div>
                </div>
                <div>
                  <div className="text-3xl font-medium tracking-tight">62</div>
                  <div className="text-xs text-muted-foreground">Apps assessed</div>
                </div>
                <div>
                  <div className="text-3xl font-medium tracking-tight">98%</div>
                  <div className="text-xs text-muted-foreground">Automation coverage</div>
                </div>
              </div>
              <div className="mt-6 h-24 rounded-xl bg-[color:var(--teal-soft)]/40 relative overflow-hidden">
                <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
                  <path
                    d="M0 70 L 50 65 L 100 45 L 150 50 L 200 25 L 250 30 L 300 10"
                    fill="none"
                    stroke="oklch(0.42 0.08 195)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-secondary/50 border-t border-border">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
            The last migration decision you'll ever make.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Talk to a Fabric expert. Data ingested in 24 hours. Live in 4–6 weeks.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="flex-1 rounded-full bg-background border border-border px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40"
            />
            <button
              type="submit"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition"
            >
              Schedule demo
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function MetricCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-lg bg-secondary/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-lg font-medium tracking-tight mt-0.5">{value}</div>
      <div className="text-[10px] text-[color:var(--teal-mid)] mt-0.5">{trend}</div>
    </div>
  );
}

function StatCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-border p-8 bg-background">
      <div
        className="text-4xl md:text-5xl font-medium tracking-[-0.03em]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {k}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{v}</div>
    </div>
  );
}

function BigStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <div className="text-4xl font-medium tracking-[-0.03em] text-white">{k}</div>
      <div className="mt-2 text-sm text-white/60">{v}</div>
    </div>
  );
}
