import { CookieBanner } from "@/components/site/CookieBanner";
import { HomePage } from "@/components/site/HomePage";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISurfGlobal — Borderless BPO solutions for global teams" },
      {
        name: "description",
        content:
          "End-to-end BPO services: HR outsourcing, back-office, compliance, call center and training. Run your global operations with ISurfGlobal.",
      },
      { property: "og:title", content: "ISurfGlobal — Borderless BPO solutions" },
      {
        property: "og:description",
        content:
          "End-to-end BPO services: HR, back-office, compliance, call center and training for global teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HomePage />
      <SiteFooter />
      <CookieBanner />
    </div>
  );
}
