import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { PageLayout } from "@/components/site/PageLayout";
import { jobPostings } from "@/data/jobs";
import { Link, createFileRoute } from "@tanstack/react-router";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={`transform transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers | ISurfGlobal" },
      {
        name: "description",
        content:
          "Explore current opportunities with ISurf Global Services Limited and find your next role.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl motion-safe:animate-pulse-slow" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 size-80 rounded-full bg-white/10 blur-3xl motion-safe:animate-float" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Careers
              </p>
            </ScrollReveal>
            <ScrollReveal delay={90}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Find your next opportunity
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                Join a team helping organisations build better, more reliable operations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-page">
          <ScrollReveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Open position
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">Make your next move</h2>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                {jobPostings.length} role available
              </span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl space-y-4">
            {jobPostings.map((job, index) => (
              <ScrollReveal key={job.slug} delay={index * 80}>
                <Link
                  to="/careers/$slug"
                  params={{ slug: job.slug }}
                  className="group flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft md:flex-row md:items-center md:justify-between md:p-8"
                >
                  <div>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {job.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <BriefcaseBusiness className="size-4 text-primary" />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="size-4 text-primary" />
                        {job.location}
                      </span>
                      <span>{job.jobType}</span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
                    View details
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
