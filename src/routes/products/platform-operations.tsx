import { createFileRoute } from "@tanstack/react-router";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/platform-operations")({
  component: PlatformOperations,
  head: () => ({
    meta: [
      { title: "Platform Operations — Daxor" },
      {
        name: "description",
        content:
          "Proactive monitoring, issue resolution, and AI-powered insights that keep your Microsoft Fabric environment performant and cost-controlled.",
      },
      { property: "og:title", content: "Platform Operations — Daxor" },
      {
        property: "og:description",
        content:
          "Keep Fabric monitored, optimized, and proactively managed with Daxor Platform Operations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/platform-operations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products/platform-operations" }],
  }),
});

function PlatformOperations() {
  return (
    <ProductTemplate
      kicker="Run & optimize"
      title="Keep Fabric performant, monitored, and in budget."
      tagline="Running Fabric and looking to enhance performance and oversight? Daxor's Platform Operations covers Fabric and related tools like Azure Data Factory and Power BI — with flexible engagement levels to meet your needs."
      challengeBody="Fabric environments drift over time — capacity gets over-provisioned, pipelines fail silently, and costs creep upward without anyone noticing until the invoice arrives. Most teams don't have the bandwidth to watch it all."
      solutionBody="We bring proactive monitoring, fast issue resolution, and AI-powered insights that keep performance high and costs in check — with 24/7 dedicated support for teams running Fabric at scale."
      features={[
        "Proactive monitoring across Fabric workloads",
        "Issue resolution & incident response",
        "AI-powered performance & anomaly insights",
        "Cost governance and capacity right-sizing",
        "Coverage for Azure Data Factory & Power BI",
        "Flexible engagement levels",
      ]}
      stats={[
        { k: "24/7", v: "Dedicated support for Enterprise plans" },
        { k: "-24%", v: "Typical reduction in Fabric compute cost/day" },
        { k: "87", v: "Pipelines monitored per environment, on average" },
      ]}
      faqs={[
        {
          q: "Do you monitor tools beyond Fabric itself?",
          a: "Yes — Platform Operations covers Fabric alongside connected tools like Azure Data Factory and Power BI, since performance issues rarely stay contained to one service.",
        },
        {
          q: "What does 'AI-powered insights' actually mean here?",
          a: "We use anomaly detection and usage-pattern analysis to flag runaway costs, failing pipelines, or capacity bottlenecks before they become incidents — not just after-the-fact dashboards.",
        },
        {
          q: "Can we start with a lighter engagement and scale up?",
          a: "Yes. Platform Operations offers flexible engagement levels, from business-hours monitoring to full 24/7 dedicated coverage, and you can move between them as your needs change.",
        },
      ]}
      relatedSolutions={[
        { name: "Fabric Foundations", href: "/products/fabric-foundations" },
        { name: "Fabric Jumpstart", href: "/products/fabric-jumpstart" },
        { name: "AI Enablement", href: "/products/ai-enablement" },
      ]}
    />
  );
}
