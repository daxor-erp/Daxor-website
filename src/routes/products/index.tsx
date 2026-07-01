import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "Products — Daxor" },
      {
        name: "description",
        content:
          "Fabric Foundations, Fabric Jumpstart, Platform Operations, and AI Enablement — Daxor's solutions for every stage of your Microsoft Fabric journey.",
      },
      { property: "og:title", content: "Products — Daxor" },
      {
        property: "og:description",
        content: "Wherever you are on Fabric, Daxor moves you forward.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const products = [
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

function ProductsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Nav variant="dark" />
        <div className="container-page relative pt-40 pb-28 md:pt-48 md:pb-32">
          <div className="max-w-3xl">
            <div className="text-sm text-[color:var(--mint)] font-medium uppercase tracking-wider mb-4">
              Products
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02]">
              Wherever you are on Fabric, we move you forward.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              From first Fabric workspace to full AI enablement — four solutions built to meet you
              where you are.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {products.map((s) => (
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
                <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">{s.name}</h2>
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
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
