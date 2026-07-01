import { createFileRoute } from "@tanstack/react-router";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/fabric-foundations")({
  component: FabricFoundations,
  head: () => ({
    meta: [
      { title: "Fabric Foundations — Daxor" },
      {
        name: "description",
        content:
          "Launch your Microsoft Fabric environment with confidence. Daxor configures Lakehouse, Data Warehouse, and pipelines with best-practice security, governance, and cost control.",
      },
      { property: "og:title", content: "Fabric Foundations — Daxor" },
      {
        property: "og:description",
        content:
          "Three Fabric Foundations packages — Startup, Mid-Market, Enterprise — to launch Fabric right.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/fabric-foundations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products/fabric-foundations" }],
  }),
});

function FabricFoundations() {
  return (
    <ProductTemplate
      kicker="Start right"
      title="Launch Fabric with a foundation built to last."
      tagline="Getting ready to implement Microsoft Fabric and build the right foundation? Daxor configures your Lakehouse, Data Warehouse, and pipelines with best-practice security, governance, and cost control from day one."
      challengeBody="Many organizations see the need to modernize but remain overwhelmed by the prospect of untangling years of technical debt. Standing up Fabric without a plan for security, governance, and cost control just moves the mess somewhere new."
      solutionBody="Daxor configures your platform the right way the first time — Lakehouse, Data Warehouse, and pipelines, backed by best-practice security and cost governance. Whether you're just starting or scaling, you're set up for success from the first workload."
      features={[
        "Lakehouse & Data Warehouse setup",
        "Up to 3 core pipelines",
        "Security & governance baseline",
        "Right-sized capacity planning",
        "Cost control configuration",
        "First use case delivered on your data",
      ]}
      packages={[
        {
          name: "Startup",
          desc: "A lean, right-sized Fabric setup for teams standing up their first workspace — core Lakehouse, one pipeline, and governance basics.",
        },
        {
          name: "Mid-Market",
          desc: "Multi-workspace Fabric foundation with up to 3 pipelines, expanded governance, and a delivered first use case for growing data teams.",
        },
        {
          name: "Enterprise",
          desc: "Full-scale Fabric foundation with advanced security, multi-region readiness, and a roadmap for scaling across business units.",
        },
      ]}
      stats={[
        { k: "24 hrs", v: "Data ingested from your first source system" },
        { k: "4–6 wks", v: "Typical time to first Fabric go-live" },
        { k: "13,000+", v: "Native integrations available from day one" },
      ]}
      faqs={[
        {
          q: "How is Fabric Foundations different from just turning on Fabric myself?",
          a: "Fabric gives you the platform — Foundations gives you the configuration, security baseline, and first working use case, so you're not learning governance and cost control by trial and error in production.",
        },
        {
          q: "Which package is right for us?",
          a: "Startup suits teams standing up a first workspace. Mid-Market fits teams consolidating a few data sources across a growing team. Enterprise suits organizations planning a multi-region, multi-business-unit rollout.",
        },
        {
          q: "Can we upgrade to Jumpstart or Platform Operations later?",
          a: "Yes. Foundations is designed as the entry point — most customers move to Jumpstart once their team is ready to accelerate, or to Platform Operations once they're running Fabric at scale.",
        },
      ]}
      relatedSolutions={[
        { name: "Fabric Jumpstart", href: "/products/fabric-jumpstart" },
        { name: "Platform Operations", href: "/products/platform-operations" },
        { name: "AI Enablement", href: "/products/ai-enablement" },
      ]}
    />
  );
}
