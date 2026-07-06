import { ArrowRight, TrendingUp } from "lucide-react";

import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

const cases = [
  {
    company: "African Steel",
    industry: "Manufacturing",
    result: "Streamlined procurement",
    summary:
      "ISurfGlobal manages end-to-end procurement operations for African Steel, ensuring timely delivery of raw materials and optimized supply chain efficiency across their manufacturing facilities.",
    href: "#",
  },
  {
    company: "KBL",
    industry: "Logistics",
    result: "Complete HR transformation",
    summary:
      "KPL partnered with ISurfGlobal for comprehensive HR outsourcing, from talent acquisition and onboarding to payroll processing and compliance management across their logistics operations.",
    href: "#",
  },
  {
    company: "OPay",
    industry: "Fintech",
    result: "Scalable HR operations",
    summary:
      "ISurfGlobal provides end-to-end HR outsourcing for OPay, supporting their rapid growth with recruitment, payroll, and employee management solutions across multiple regions.",
    href: "#",
  },
  {
    company: "Blueridge",
    industry: "Fintech",
    result: "Efficient workforce management",
    summary:
      "Blueridge leverages ISurfGlobal's HR outsourcing expertise to streamline their people operations, from hiring to retention, enabling them to focus on financial innovation.",
    href: "#",
  },
  {
    company: "Edge Recovery",
    industry: "Technology",
    result: "IT & Technology outsourcing",
    summary:
      "As a subsidiary of ISurfGlobal, Edge Recovery delivers specialized technology and IT outsourcing solutions, helping clients with software development, infrastructure management, and technical support.",
    href: "#",
  },
  {
    company: "Olam Agri",
    industry: "Retail",
    result: "Contact center excellence",
    summary:
      "ISurfGlobal powers Olam Agri's customer engagement with a dedicated contact center solution, delivering 24/7 professional support and seamless communication across all channels.",
    href: "#",
  },
];

export const Route = createFileRoute("/resources/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — ISurfGlobal" },
      {
        name: "description",
        content:
          "See how global companies grow with ISurfGlobal. Real customer stories and measurable outcomes across manufacturing, logistics, fintech, technology, and retail.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <section className="bg-accent-soft/60 border-b border-border py-16">
        <div className="container-page">
          <p className="text-sm font-semibold text-primary">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Customer stories</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Real results from companies running their operations on ISurfGlobal across
            manufacturing, logistics, fintech, technology, and retail.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <a
              key={c.company}
              href={c.href}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow block"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {c.industry}
              </div>
              <h2 className="font-semibold text-xl mt-2 group-hover:text-primary transition-colors">
                {c.company}
              </h2>
              <div className="inline-flex items-center gap-1.5 mt-3 rounded-full bg-accent-soft text-primary px-3 py-1 text-sm font-semibold">
                <TrendingUp className="size-3.5" /> {c.result}
              </div>
              <p className="text-sm text-muted-foreground mt-4">{c.summary}</p>
              {/* <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4">
                Read case study <ArrowRight className="size-3.5" />
              </span> */}
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  ),
});
