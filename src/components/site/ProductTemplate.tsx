import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export interface ProductPackage {
  name: string;
  desc: string;
}

export interface ProductStat {
  k: string;
  v: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductTemplateProps {
  kicker: string;
  title: string;
  tagline: string;
  challengeTitle?: string;
  challengeBody: string;
  solutionTitle?: string;
  solutionBody: string;
  features: string[];
  packages?: ProductPackage[];
  stats: ProductStat[];
  faqs?: ProductFaq[];
  relatedSolutions: { name: string; href: string }[];
}

export function ProductTemplate({
  kicker,
  title,
  tagline,
  challengeTitle = "Is your data architecture holding you back?",
  challengeBody,
  solutionTitle = "The Daxor advantage",
  solutionBody,
  features,
  packages,
  stats,
  faqs,
  relatedSolutions,
}: ProductTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32">
          <div className="max-w-3xl">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              {kicker}
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              {title}
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">{tagline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                className="rounded-full bg-white text-[color:var(--teal-deep)] px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition inline-flex items-center gap-1"
              >
                Talk to a Fabric expert
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
              <Link
                to="/pricing"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition inline-flex items-center"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.k} className="rounded-2xl border border-border p-8 bg-background">
              <div
                className="text-4xl md:text-5xl font-medium tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.k}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE / SOLUTION */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              The challenge
            </div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
              {challengeTitle}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{challengeBody}</p>
          </div>
          <div>
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              The Daxor advantage
            </div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
              {solutionTitle}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{solutionBody}</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-[color:var(--teal-mid)] font-medium uppercase tracking-wider mb-4">
              What's included
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
              Everything you need, nothing you don't.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-2xl border border-border p-5 bg-background"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  className="mt-0.5 text-[color:var(--teal-mid)] shrink-0"
                >
                  <path
                    d="M13 4 L6 12 L3 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      {packages && packages.length > 0 && (
        <section className="py-24 bg-[color:var(--teal-deep)] text-white">
          <div className="container-page">
            <div className="max-w-2xl mb-14">
              <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
                Choose your scale
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight">
                Three packages. One right fit.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((p) => (
                <div key={p.name} className="rounded-2xl bg-white/5 border border-white/10 p-7">
                  <div className="text-xl font-medium tracking-tight">{p.name}</div>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-24">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-10">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                    <span className="font-medium tracking-tight text-lg">{f.q}</span>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="shrink-0 transition-transform group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="pt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SOLUTIONS */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-8">
            Wherever you are on Fabric, we move you forward.
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedSolutions.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-[color:var(--teal-mid)] hover:text-[color:var(--teal-deep)] transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
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
