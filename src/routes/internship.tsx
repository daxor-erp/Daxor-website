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
          "Daxor's paid internship program — real ERP, AI, and data projects with expert mentorship, verified certification, and placement support. Bengaluru · Online · Hybrid.",
      },
      { property: "og:title", content: "Internship Program — Daxor" },
      { property: "og:description", content: "Intern, Innovate, and Inspire — The Daxor Way." },
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
    location: "Bengaluru",
    duration: "1, 2, or 3–4 Months",
    mode: "On-site / Online / Hybrid",
    desc: "Build real Lakehouse and Data Warehouse pipelines on Microsoft Fabric. Learn ingestion, transformation, and governance while contributing to live migration projects alongside our delivery engineers.",
  },
  {
    name: "Business Intelligence & Power BI",
    location: "Bengaluru",
    duration: "1, 2, or 3–4 Months",
    mode: "On-site / Online / Hybrid",
    desc: "Design semantic models, DAX measures, and production dashboards. Work on real reporting migrations from legacy BI tools to Power BI on Fabric alongside the Daxor analytics team.",
  },
  {
    name: "Cloud & DevOps (Azure)",
    location: "Bengaluru",
    duration: "1, 2, or 3–4 Months",
    mode: "On-site / Online / Hybrid",
    desc: "Provision and automate Azure infrastructure for client Fabric environments — CI/CD pipelines, Infrastructure as Code, monitoring, and cost governance on real enterprise accounts.",
  },
  {
    name: "AI & Machine Learning",
    location: "Bengaluru",
    duration: "1, 2, or 3–4 Months",
    mode: "On-site / Online / Hybrid",
    desc: "Apply Copilot Studio, Azure AI Foundry, and RAG techniques to real client use cases — from anomaly detection in ERP data to self-service data chat powered by your own LLM pipeline.",
  },
  {
    name: "AI & Generative AI (Non-Technical)",
    location: "Bengaluru",
    duration: "1, 2, or 3–4 Months",
    mode: "On-site / Online / Hybrid",
    desc: "For non-technical students — master AI tools like ChatGPT, Copilot, and Gemini. Learn prompt engineering, automation, and business use-cases that can be applied immediately in real roles.",
  },
  {
    name: "Full Stack Development",
    location: "Bengaluru",
    duration: "1, 2, or 3–4 Months",
    mode: "On-site / Online / Hybrid",
    desc: "Contribute to internal tooling and client-facing dashboards using React, TypeScript, and Node. Work directly with Daxor's product engineering team on features that ship to real customers.",
  },
];

const steps = [
  {
    t: "Apply online",
    d: "Submit your application on this page. Our team reviews your background and confirms eligibility within 3–5 business days.",
  },
  {
    t: "Receive offer letter",
    d: "A short conversation with a Daxor mentor, followed by an official internship offer letter accepted by most colleges for academic credit.",
  },
  {
    t: "Start your internship",
    d: "Begin structured training and real project work under expert guidance — weekly mentor check-ins, live sessions, and progress reviews.",
  },
  {
    t: "Get certified",
    d: "Complete your project, present your final report, and receive a verified Daxor Internship Completion Certificate.",
  },
];

const certBenefits = [
  {
    title: "Demonstrate Expertise",
    desc: "A credible proof of your hands-on experience and technical skills. Validates your expertise to employers and academic institutions, showing you meet professional standards and are job-ready.",
  },
  {
    title: "National Recognition",
    desc: "Daxor certificates are accepted by companies and universities across India. This recognition enhances your professional credibility and opens doors in education and employment.",
  },
  {
    title: "Enhanced Career Opportunities",
    desc: "Certified interns gain a strong competitive edge in placements and career advancement. Employers prefer candidates with verified, practical experience — your certificate makes you stand out.",
  },
  {
    title: "Increased Earning Potential",
    desc: "Certified professionals are often offered higher salaries and faster career growth. Your Daxor certificate highlights specialised technical expertise employers actively seek.",
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Data Engineering Intern → Associate Data Engineer",
    text: "I went in knowing basic SQL and came out having shipped a real Fabric pipeline for a live client. My mentor treated my work like it mattered — because it did.",
  },
  {
    name: "Lavanya D",
    role: "BI & Power BI Intern",
    text: "Very helpful and supportive team. I learned a lot during my internship, and the project exposure gave me the confidence to take on real-world challenges right after college.",
  },
  {
    name: "Aarav Sharma",
    role: "AI & ML Intern",
    text: "Daxor provided the perfect blend of practical learning and real-time project exposure. The mentors helped me gain clarity about my career path. Best decision I made in my final year.",
  },
  {
    name: "Sahana R",
    role: "Cloud & DevOps Intern",
    text: "My internship in Azure and DevOps was an incredible experience. The trainers explained every concept in detail and guided me through deploying real infrastructure. I feel much more confident now.",
  },
  {
    name: "Manoj Kumar",
    role: "Full Stack Intern",
    text: "The teaching methodology at Daxor is industry-oriented. Sessions were interactive, and mentors ensured we understood every concept before moving on. Highly recommend to all engineering students.",
  },
  {
    name: "Neha Joshi",
    role: "Generative AI Intern",
    text: "Amazing learning environment. The project exposure I received was extremely valuable, and the structured training made the entire experience truly worthwhile. I landed a job within a month of completing it.",
  },
];

const faqs = [
  {
    q: "Do I need prior experience with Microsoft Fabric or Azure?",
    a: "No prior experience required. We provide preparatory training before you move into project work. Basic SQL, Python, or domain knowledge helps but is not mandatory.",
  },
  {
    q: "Is the internship paid?",
    a: "Our internships are training-based, with a nominal program fee covering training, real project work, report guidance, mentoring, and certification. Stipend details are shared at the offer stage.",
  },
  {
    q: "How long do internships run?",
    a: "Most tracks run 1–4 months, aligned with semester and summer/winter break schedules. Extensions are available for academic project requirements.",
  },
  {
    q: "Can I go for an interdisciplinary internship?",
    a: "Yes. Daxor encourages cross-domain projects — for example, combining AI with Data Engineering, or BI with Full Stack to build end-to-end analytics products.",
  },
  {
    q: "Will I get academic credit or a recommendation letter?",
    a: "We provide completion documentation suitable for academic credit at most engineering colleges. High-performing interns receive a Letter of Recommendation from Daxor.",
  },
  {
    q: "What kind of certification will I receive?",
    a: "You'll receive an Internship Completion Certificate, a Project Completion Certificate, and a Domain Training Certificate where applicable — all recognised by partner universities.",
  },
  {
    q: "Is this internship remote or in-person?",
    a: "We offer online, on-site (Bengaluru office), and hybrid options. Fully remote arrangements are available for candidates outside Bengaluru.",
  },
  {
    q: "What happens if I miss project deadlines?",
    a: "Extensions are available with prior approval for genuine academic or personal reasons. Speak to your mentor as early as possible so we can adjust your plan.",
  },
  {
    q: "Will I get placement support after my internship?",
    a: "Yes. Daxor provides placement guidance and interview preparation for top-performing interns, plus referrals to our partner company network.",
  },
  {
    q: "Can my internship convert into a full-time offer?",
    a: "Yes. Exceptional interns are regularly extended full-time offers or referred to our hiring partners as roles open up.",
  },
];

function Internship() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 border border-white/10 mb-8">
              <span className="text-[color:var(--mint)]">●</span>
              Applications open for Summer &amp; Winter 2026 cohorts
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Intern, Innovate, and Inspire — The Daxor Way.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              High-quality internship programs curated for students to gain real-time ERP, AI, and data experience — with expert mentorship, verified certificates, and placement support.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#apply" className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition inline-flex items-center gap-1">
                Apply now
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#tracks" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition inline-flex items-center">
                View internship tracks
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-6">
            <img src="/illustrations/02-explore-analysis.png" alt="Internship at Daxor" loading="lazy" className="w-full h-auto max-h-[420px] object-contain" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { v: "600+", l: "Students interned to date" },
            { v: "6", l: "Active internship tracks" },
            { v: "85%", l: "Complete real client project work" },
            { v: "1-in-3", l: "Receive a full-time offer or referral" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">Popular internships</div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Choose the track that fits where you want to grow.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <article key={t.name} className="rounded-3xl border border-border p-8 bg-background hover:border-[color:var(--teal-mid)]/40 transition-all flex flex-col">
                <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground w-fit">Paid</div>
                <h3 className="mt-4 text-xl md:text-2xl font-medium tracking-tight">{t.name}</h3>
                <div className="mt-3 grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                  <span><span className="font-medium text-foreground/60">Location:</span> {t.location}</span>
                  <span><span className="font-medium text-foreground/60">Duration:</span> {t.duration}</span>
                  <span><span className="font-medium text-foreground/60">Work Mode:</span> {t.mode}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{t.desc}</p>
                <a href="#apply" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal-deep)]">
                  Enroll now
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">How it works</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
              Complete your Daxor internship in four simple steps.
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

      {/* CERTIFICATION BENEFITS */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="max-w-2xl mb-4">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">Daxor internship certification</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
              Nationally recognised certificates for a stronger career foundation.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            At Daxor, our internship certifications go beyond recognition — they validate your skills, knowledge, and practical experience. Designed to meet industry standards, these certificates empower you to stand out in the job market and achieve real credibility.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {certBenefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border p-8 bg-background flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[color:var(--teal-deep)]/10 border border-[color:var(--teal-mid)]/20 flex items-center justify-center">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[color:var(--teal-mid)]">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">Reviews</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">What students are saying.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-[color:var(--teal-deep)]/10 border border-[color:var(--teal-mid)]/20 flex items-center justify-center text-sm font-medium text-[color:var(--teal-mid)]">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP PRICING */}
      <section className="py-24 border-b border-border">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">Internship pricing</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">Choose your internship duration.</h2>
            <p className="mt-4 text-muted-foreground">One-time fee per intern. Includes mentorship, real project access, and completion certificate.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                duration: "1 Month", price: "₹999", desc: "Best for a quick project sprint or a single college credit requirement.",
                features: ["Mentor-led project", "Completion certificate", "Email support"],
              },
              {
                duration: "3 Months", price: "₹2,999", desc: "Our most popular duration — enough time for a full delivery cycle.", popular: true,
                features: ["Mentor-led project", "Completion certificate", "Weekly 1:1 check-ins", "Letter of recommendation"],
              },
              {
                duration: "6 Months", price: "₹4,999", desc: "Full semester immersion with real client work and placement support.",
                features: ["Mentor-led project", "Completion certificate", "Weekly 1:1 check-ins", "Letter of recommendation", "Placement support & referrals"],
              },
            ].map((plan) => (
              <div key={plan.duration} className={`relative rounded-3xl border p-8 bg-background flex flex-col ${plan.popular ? "border-[color:var(--teal-mid)] shadow-[var(--shadow-elegant)] md:-translate-y-3" : "border-border"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[color:var(--mint)] text-[color:var(--teal-deep)] text-xs font-medium">Most popular</div>
                )}
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{plan.duration}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-medium tracking-tight">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/ intern</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
                <a href="#apply" className={`mt-6 rounded-full px-4 py-3 text-sm font-medium text-center transition ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/70"}`}>
                  Apply now
                </a>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-[color:var(--teal-mid)] shrink-0">
                        <path d="M13 4 L6 12 L3 9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-24 md:py-32">
        <div className="container-page max-w-2xl">
          <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4 text-center">Apply now</div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight text-center">
            Start your application in under 2 minutes.
          </h2>
          <ApplyForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container-page max-w-3xl">
          <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-10">
            Frequently asked questions.
          </h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 text-center border-t border-border">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">Have a question before you apply?</h2>
          <p className="mt-4 text-muted-foreground">
            Share your details with us at{" "}
            <a href="mailto:info@daxor.in" className="underline underline-offset-2 hover:text-foreground transition">info@daxor.in</a>
            {" "}and our team will get in touch.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
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
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="mt-10 grid sm:grid-cols-2 gap-4 rounded-3xl border border-border p-8 bg-background"
    >
      <input type="text" required placeholder="Full name"
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40" />
      <input type="email" required placeholder="Email address"
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40" />
      <input type="tel" placeholder="Phone number"
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40" />
      <input type="text" placeholder="College / University"
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40" />
      <select required defaultValue=""
        className="rounded-full bg-background border border-border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-mid)]/40 sm:col-span-2">
        <option value="" disabled>Select an internship track</option>
        {tracks.map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
      </select>

      {/* Resume upload */}
      <div className="sm:col-span-2">
        <label className="block text-xs font-medium text-muted-foreground mb-2 pl-1">
          Resume / CV <span className="text-[color:var(--teal-mid)]">*</span>
        </label>
        <label className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-border hover:border-[color:var(--teal-mid)]/50 bg-secondary/30 px-5 py-5 cursor-pointer transition-colors group">
          <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-[color:var(--teal-mid)]/40 transition-colors">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-muted-foreground">
              <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12M8 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            {fileName ? (
              <p className="text-sm font-medium text-foreground truncate">{fileName}</p>
            ) : (
              <>
                <p className="text-sm font-medium text-foreground">Upload your resume</p>
                <p className="text-xs text-muted-foreground mt-0.5">PDF, DOC, DOCX — up to 5 MB</p>
              </>
            )}
          </div>
          <input type="file" required accept=".pdf,.doc,.docx" className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
        </label>
      </div>

      <button type="submit"
        className="sm:col-span-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition">
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
      <button onClick={() => setOpen(!open)} className="w-full py-6 flex items-center justify-between gap-6 text-left">
        <span className="font-medium tracking-tight text-lg">{q}</span>
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
          className={`shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </button>
      {open && <p className="pb-6 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}
