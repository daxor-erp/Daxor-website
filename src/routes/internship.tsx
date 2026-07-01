import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/internship")({
  component: Internship,
  head: () => ({
    meta: [
      { title: "Internship Program — Daxor" },
      {
        name: "description",
        content:
          "Daxor's paid internship program for engineering students — hands-on training on Daxor ERP, Microsoft Fabric, data engineering, BI, cloud, and applied AI, with certification and placement support.",
      },
      { property: "og:title", content: "Internship Program — Daxor" },
      {
        property: "og:description",
        content:
          "Learn, build, and ship real ERP, data, and AI projects with mentor-led internships at Daxor.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/internship" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/internship" }],
  }),
});

const tracks = [
  {
    name: "Data Engineering & Microsoft Fabric",
    duration: "2–3 months",
    mode: "Hybrid / Remote",
    desc: "Build real Lakehouse and Data Warehouse pipelines on Microsoft Fabric. Learn ingestion, transformation, and governance while working on live migration projects alongside our delivery team.",
  },
  {
    name: "Business Intelligence & Power BI",
    duration: "2–3 months",
    mode: "Hybrid / Remote",
    desc: "Design semantic models, DAX measures, and production dashboards. Work on real reporting migrations from legacy BI tools to Power BI on Fabric.",
  },
  {
    name: "Cloud & DevOps (Azure)",
    duration: "2–3 months",
    mode: "Hybrid / Remote",
    desc: "Provision and automate Azure infrastructure supporting client Fabric environments — CI/CD pipelines, IaC, monitoring, and cost governance.",
  },
  {
    name: "AI & Machine Learning",
    duration: "3–4 months",
    mode: "Hybrid / Remote",
    desc: "Apply Copilot Studio, Azure AI Foundry, and RAG techniques to real client use cases — from anomaly detection to self-service data chat.",
  },
  {
    name: "Data Governance & Security",
    duration: "2 months",
    mode: "Hybrid / Remote",
    desc: "Work on access controls, audit trails, and compliance frameworks that keep enterprise Fabric environments secure and SOC 2 ready.",
  },
  {
    name: "Full Stack Development",
    duration: "2–3 months",
    mode: "Hybrid / Remote",
    desc: "Contribute to internal tooling and client-facing dashboards using modern React and TypeScript, working directly with our product engineering team.",
  },
];

const steps = [
  {
    t: "Apply online",
    d: "Submit your application through this page. Our team reviews your background and confirms eligibility within 3–5 business days.",
  },
  {
    t: "Interview & offer letter",
    d: "A short technical conversation with a Daxor mentor, followed by an official internship offer letter you can share with your college.",
  },
  {
    t: "Start your internship",
    d: "Begin structured training and real project work under expert guidance, with weekly mentor check-ins and progress reviews.",
  },
  {
    t: "Get certified",
    d: "Complete your project, present your final report, and receive a verified Daxor Internship Completion Certificate.",
  },
];

const benefits = [
  {
    t: "Real client work",
    d: "You'll contribute to actual Fabric migration and modernization projects — not simulated exercises — under the guidance of senior engineers.",
  },
  {
    t: "Verified certification",
    d: "A Daxor Internship Completion Certificate that documents your specific contributions, recognized by employers and accepted for academic credit at partner institutions.",
  },
  {
    t: "Mentor-led growth",
    d: "Every intern is paired with a senior Fabric or data engineer for weekly 1:1s, code reviews, and career guidance throughout the program.",
  },
  {
    t: "Placement support",
    d: "Top-performing interns get interview preparation, referrals to our partner network, and priority consideration for full-time roles at Daxor.",
  },
];

const faqs = [
  {
    q: "Do I need prior experience with Microsoft Fabric or Azure?",
    a: "No prior experience is required. We provide a two-week preparatory training covering the fundamentals before you move into project work. A basic understanding of SQL, Python, or your chosen domain helps but isn't mandatory.",
  },
  {
    q: "Is the internship paid?",
    a: "Yes. Daxor internships are paid, with a stipend structure tied to duration and track. Full details are shared during the offer stage.",
  },
  {
    q: "How long do internships run?",
    a: "Most tracks run 2–4 months, aligned with typical semester and summer/winter break schedules. Extensions are available for academic project requirements.",
  },
  {
    q: "Will I get academic credit or a recommendation letter?",
    a: "We provide completion documentation suitable for academic internship credit at most engineering colleges, and high-performing interns receive a Letter of Recommendation from Daxor.",
  },
  {
    q: "Is this internship remote or in-person?",
    a: "Most tracks run hybrid — a mix of remote work with periodic in-person sessions. Fully remote arrangements are available for candidates outside our primary locations.",
  },
  {
    q: "Can an internship convert into a full-time offer?",
    a: "Yes. Interns who perform strongly are regularly extended full-time offers or referred to our hiring partners as roles open up.",
  },
  {
    q: "What happens if I need to extend past my planned end date?",
    a: "Extensions are available with prior approval for genuine academic or personal reasons — talk to your mentor as early as possible.",
  },
];

function Internship() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 border border-white/10 mb-8">
              <span className="text-[color:var(--mint)]">●</span>
              Applications open for Summer & Winter 2026 cohorts
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Intern with the team building India's AI-native ERP platform.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Real projects, expert mentorship, and a verified certificate — get hired in ERP, data,
              cloud, or AI.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition inline-flex items-center gap-1"
              >
                Apply now
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
              </a>
              <a
                href="#tracks"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition inline-flex items-center"
              >
                View internship tracks
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="/illustrations/02-explore-analysis.png"
              alt="Illustration of exploring data and analytics"
              loading="lazy"
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">600+</div>
            <div className="mt-1 text-sm text-muted-foreground">Students interned to date</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">6</div>
            <div className="mt-1 text-sm text-muted-foreground">Active internship tracks</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">85%</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Complete real client project work
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">1-in-3</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Receive a full-time offer or referral
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Popular internships
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Choose the track that fits where you want to grow.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <article
                key={t.name}
                className="rounded-3xl border border-border p-8 bg-background hover:border-[color:var(--teal-mid)]/40 transition-all"
              >
                <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  Paid
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-medium tracking-tight">{t.name}</h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                  <span>Duration: {t.duration}</span>
                  <span>Mode: {t.mode}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal-deep)]"
                >
                  Enroll now
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
              Four steps from application to certificate.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.t} className="rounded-2xl bg-background border border-border p-6">
                <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                <div className="mt-3 font-medium tracking-tight">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              Why intern at Daxor
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
              Built for a stronger start to your career.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.t} className="rounded-2xl border border-border p-8 bg-background">
                <div className="font-medium tracking-tight text-lg">{b.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 bg-[color:var(--teal-deep)] text-white">
        <div className="container-page">
          <div className="max-w-4xl">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-6">
              Intern story
            </div>
            <blockquote className="text-2xl md:text-4xl font-medium tracking-[-0.02em] leading-[1.2]">
              "I went in knowing basic SQL and came out having shipped a real Fabric pipeline for a
              live client. My mentor treated my work like it mattered — because it did."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 font-medium">
                AS
              </div>
              <div>
                <div className="font-medium">Ananya Sharma</div>
                <div className="text-sm text-white/60">
                  Data Engineering Intern, now Associate Data Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-24 md:py-32">
        <div className="container-page max-w-2xl">
          <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4 text-center">
            Apply now
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight text-center">
            Start your application in under 2 minutes.
          </h2>
          <ApplyForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-10">
            Internship FAQ
          </h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
            Have a question before you apply?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Talk to our internship program team directly.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition"
          >
            Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-10 grid sm:grid-cols-2 gap-4 rounded-3xl border border-border p-8 bg-background"
    >
      <input
        type="text"
        required
        placeholder="Full name"
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40"
      />
      <input
        type="email"
        required
        placeholder="Email address"
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40"
      />
      <select
        required
        defaultValue=""
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40 sm:col-span-2"
      >
        <option value="" disabled>
          Select an internship track
        </option>
        {tracks.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="sm:col-span-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition"
      >
        {submitted ? "Application received ✓" : "Submit application"}
      </button>
      <p className="sm:col-span-2 text-xs text-muted-foreground text-center">
        By applying you agree to the use of your data in accordance with Daxor's privacy notice.
      </p>
    </form>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between gap-6 text-left"
      >
        <span className="font-medium tracking-tight text-lg">{q}</span>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className={`shrink-0 transition-transform ${open ? "rotate-45" : ""}`}
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </button>
      {open && <p className="pb-6 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}
