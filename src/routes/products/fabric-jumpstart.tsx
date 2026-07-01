import { createFileRoute } from "@tanstack/react-router";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/fabric-jumpstart")({
  component: FabricJumpstart,
  head: () => ({
    meta: [
      { title: "Fabric Jumpstart — Daxor" },
      {
        name: "description",
        content:
          "A fast-tracked Microsoft Fabric deployment that equips your internal team to take over — ingest, transform, store, and visualize your data with confidence.",
      },
      { property: "og:title", content: "Fabric Jumpstart — Daxor" },
      {
        property: "og:description",
        content: "Accelerate Fabric deployment and build internal capability with Daxor Jumpstart.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/fabric-jumpstart" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products/fabric-jumpstart" }],
  }),
});

function FabricJumpstart() {
  return (
    <ProductTemplate
      kicker="Accelerate"
      title="Accelerate deployment. Build internal capability."
      tagline="Ready to accelerate Fabric deployment and build internal capability? Daxor delivers a fast-tracked rollout while equipping your team to take over — ingest, transform, store, and visualize data on Fabric with confidence."
      challengeBody="Teams that rush deployment often end up dependent on outside consultants indefinitely — governance never gets documented, and skill gaps never get closed. Speed without enablement just delays the real cost."
      solutionBody="Jumpstart goes beyond setup. We deploy governance best practices, identify skill gaps, and train your staff to operate the platform effectively — a low-risk, high-impact way to modernize while your team builds lasting expertise."
      features={[
        "Ingest, transform, store & visualize on Fabric",
        "Up to 20 pipelines & data sources",
        "Team enablement & structured training",
        "Multi-workspace governance",
        "Skill-gap assessment for your team",
        "Documented operating playbooks",
      ]}
      packages={[
        {
          name: "Startup",
          desc: "Fast-tracked deployment for a single team, with core training so your first analysts can operate Fabric independently.",
        },
        {
          name: "Mid-Market",
          desc: "Cross-team rollout covering up to 20 pipelines and sources, with governance deployment and hands-on staff training.",
        },
        {
          name: "Enterprise",
          desc: "Org-wide Jumpstart with multi-workspace governance, advanced training tracks, and a documented internal operating model.",
        },
      ]}
      stats={[
        { k: "20", v: "Pipelines & data sources supported" },
        { k: "4–6 wks", v: "From kickoff to your team operating independently" },
        { k: "100%", v: "Knowledge transfer — no black boxes" },
      ]}
      faqs={[
        {
          q: "Will our team actually be able to run Fabric on their own afterward?",
          a: "Yes — that's the point of Jumpstart. We pair every deployment task with structured training and documentation so your team owns the platform, not just the license.",
        },
        {
          q: "How is this different from Fabric Foundations?",
          a: "Foundations gets your environment configured correctly. Jumpstart goes further — connecting more sources, deploying governance across workspaces, and actively training your team to operate it.",
        },
        {
          q: "What happens after the engagement ends?",
          a: "Most teams either move to self-sufficient operation, or continue with Daxor Platform Operations for ongoing monitoring and optimization.",
        },
      ]}
      relatedSolutions={[
        { name: "Fabric Foundations", href: "/products/fabric-foundations" },
        { name: "Platform Operations", href: "/products/platform-operations" },
        { name: "AI Enablement", href: "/products/ai-enablement" },
      ]}
    />
  );
}
