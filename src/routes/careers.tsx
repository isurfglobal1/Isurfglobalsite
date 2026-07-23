import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  threshold?: number;
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, threshold]);

  const getAnimationClass = () => {
    if (!visible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-12";
        case "down":
          return "opacity-0 -translate-y-12";
        case "left":
          return "opacity-0 translate-x-12";
        case "right":
          return "opacity-0 -translate-x-12";
        case "scale":
          return "opacity-0 scale-95";
        case "fade":
          return "opacity-0";
        default:
          return "opacity-0 translate-y-12";
      }
    }
    switch (direction) {
      case "up":
        return "opacity-100 translate-y-0";
      case "down":
        return "opacity-100 -translate-y-0";
      case "left":
        return "opacity-100 translate-x-0";
      case "right":
        return "opacity-100 -translate-x-0";
      case "scale":
        return "opacity-100 scale-100";
      case "fade":
        return "opacity-100";
      default:
        return "opacity-100 translate-y-0";
    }
  };

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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

// Add decorative shapes for visual interest
const DecorativeShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
    <div
      className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "1s" }}
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
  </div>
);

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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white py-20 md:py-28">
        <DecorativeShapes />
        <div className="container-page max-w-3xl relative z-10">
          <ScrollReveal direction="fade" threshold={0.1}>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Careers</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-3">
              Build the future of global work
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <p className="text-lg text-white/80 mt-5 max-w-2xl">
              Join 1,200+ teammates in 12 countries solving the hardest problems in global
              operations.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/10">
                <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span>12 Countries</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/10">
                <span
                  className="size-2 rounded-full bg-blue-400 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span>1,200+ Team Members</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/10">
                <span
                  className="size-2 rounded-full bg-purple-400 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span>Remote-First</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-page">
          <ScrollReveal direction="up" threshold={0.1}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Open roles</h2>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {jobs.length} positions
              </span>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {jobs.map((j, index) => (
              <ScrollReveal key={j.title} direction="up" delay={index * 50} threshold={0.1}>
                <a
                  href="#"
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {j.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-1.5">
                      <span className="inline-flex items-center gap-1 hover:text-primary transition-colors duration-200">
                        <Briefcase className="size-3.5" /> {j.team}
                      </span>
                      <span className="inline-flex items-center gap-1 hover:text-primary transition-colors duration-200">
                        <MapPin className="size-3.5" /> {j.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-muted-foreground/80 text-[10px] font-medium">
                        {j.type}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                    Apply{" "}
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA - Join Talent Pool */}
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-accent to-background border border-border text-center">
              <h3 className="text-xl font-semibold">Don't see the right role?</h3>
              <p className="text-muted-foreground mt-2">
                Join our talent pool and we'll reach out when a position matches your skills.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-6 py-2.5 text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Join Talent Pool <ArrowRight className="size-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  ),
});
