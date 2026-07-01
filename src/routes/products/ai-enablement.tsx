import { createFileRoute } from "@tanstack/react-router";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/ai-enablement")({
  component: AiEnablement,
  head: () => ({
    meta: [
      { title: "AI Enablement — Daxor" },
      {
        name: "description",
        content:
          "Connect Microsoft's AI stack — Copilot Studio, Azure AI Foundry, and beyond — to make your Fabric estate truly AI-ready.",
      },
      { property: "og:title", content: "AI Enablement — Daxor" },
      {
        property: "og:description",
        content:
          "Unlock conversational analytics, RAG integrations, and self-service data chat on Microsoft Fabric.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/ai-enablement" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products/ai-enablement" }],
  }),
});

function AiEnablement() {
  return (
    <ProductTemplate
      kicker="Unlock GenAI"
      title="Make your Fabric estate truly AI-ready."
      tagline="Looking to integrate AI technologies into your Fabric environment? Daxor connects Microsoft's AI ecosystem — from Copilot Studio to Azure AI Foundry and beyond — to unlock the full value of your data with GenAI."
      challengeBody="Most enterprises have the data to power AI, but it's scattered across disconnected systems with no governance layer to make it safely usable by an LLM. Bolting on a chatbot without that foundation just produces confident wrong answers."
      solutionBody="We connect the right tools and engineering — Copilot Studio, Azure AI Foundry, RAG pipelines — on top of a governed Fabric foundation, so your AI features are grounded in accurate, permissioned data from day one."
      features={[
        "Copilot Studio integration",
        "Azure AI Foundry connectivity",
        "Conversational analytics embedding",
        "RAG-enabled integrations",
        "Self-service data chat",
        "AI-powered anomaly detection",
      ]}
      stats={[
        { k: "13,000+", v: "Native integrations available as AI data sources" },
        { k: "4–6 wks", v: "Typical time to a working AI enablement pilot" },
        { k: "100%", v: "Governed by your existing Fabric security model" },
      ]}
      faqs={[
        {
          q: "Do we need Fabric Foundations or Jumpstart before AI Enablement?",
          a: "We recommend a governed Fabric foundation first — AI Enablement builds on top of it. If you're starting from scratch, we typically bundle Foundations with your AI Enablement engagement.",
        },
        {
          q: "What is 'RAG-enabled integration' in practice?",
          a: "Retrieval-augmented generation connects an LLM to your governed Fabric data at query time, so answers are grounded in your actual numbers rather than the model's general training data.",
        },
        {
          q: "Is our data secure when connected to Copilot or Azure AI Foundry?",
          a: "Yes. AI Enablement operates within your existing Microsoft tenant and inherits your Fabric security model — least-privilege access, encryption, and full audit trails carry through.",
        },
      ]}
      relatedSolutions={[
        { name: "Fabric Foundations", href: "/products/fabric-foundations" },
        { name: "Fabric Jumpstart", href: "/products/fabric-jumpstart" },
        { name: "Platform Operations", href: "/products/platform-operations" },
      ]}
    />
  );
}
