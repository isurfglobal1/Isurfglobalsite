import { ArrowRight, Briefcase, MapPin } from "lucide-react";

import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

const jobs = [
  {
    title: "Senior Product Designer",
    team: "Design",
    location: "Remote · Global",
    type: "Full-time",
  },
  {
    title: "Staff Engineer, Platform",
    team: "Engineering",
    location: "Lisbon, PT",
    type: "Full-time",
  },
  { title: "Account Executive, EMEA", team: "Sales", location: "London, UK", type: "Full-time" },
  {
    title: "Customer Success Manager",
    team: "Customer Success",
    location: "Remote · US",
    type: "Full-time",
  },
  { title: "People Partner", team: "People", location: "Singapore", type: "Full-time" },
  { title: "Compliance Analyst", team: "Legal", location: "Remote · EU", type: "Full-time" },
  {
    title: "Content Marketing Lead",
    team: "Marketing",
    location: "Remote · Americas",
    type: "Full-time",
  },
  { title: "Solutions Engineer", team: "Engineering", location: "New York, NY", type: "Full-time" },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — ISurfGlobal" },
      {
        name: "description",
        content:
          "Join ISurfGlobal. We're hiring across engineering, design, sales, and operations worldwide.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <section className="bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white py-20">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Careers</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-3">
            Build the future of global work
          </h1>
          <p className="text-lg text-white/80 mt-5">
            Join 1,200+ teammates in 12 countries solving the hardest problems in global operations.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Open roles</h2>
          <div className="space-y-3">
            {jobs.map((j) => (
              <a
                key={j.title}
                href="#"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors"
              >
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {j.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-1.5">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="size-3.5" /> {j.team}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" /> {j.location}
                    </span>
                    <span>{j.type}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Apply <ArrowRight className="size-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  ),
});
