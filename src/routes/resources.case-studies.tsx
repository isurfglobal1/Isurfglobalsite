import {
  ArrowRight,
  Building2,
  ChevronRight,
  Monitor,
  Package,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

// ScrollReveal Component
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

const cases = [
  {
    company: "African Steel",
    industry: "Manufacturing",
    result: "Streamlined procurement",
    summary:
      "ISurfGlobal manages end-to-end procurement operations for African Steel, ensuring timely delivery of raw materials and optimized supply chain efficiency across their manufacturing facilities.",
    href: "#",
    icon: Package,
  },
  {
    company: "KBL",
    industry: "Logistics",
    result: "Complete HR transformation",
    summary:
      "KPL partnered with ISurfGlobal for comprehensive HR outsourcing, from talent acquisition and onboarding to payroll processing and compliance management across their logistics operations.",
    href: "#",
    icon: Users,
  },
  {
    company: "OPay",
    industry: "Fintech",
    result: "Scalable HR operations",
    summary:
      "ISurfGlobal provides end-to-end HR outsourcing for OPay, supporting their rapid growth with recruitment, payroll, and employee management solutions across multiple regions.",
    href: "#",
    icon: Users,
  },
  {
    company: "Blueridge",
    industry: "Fintech",
    result: "Efficient workforce management",
    summary:
      "Blueridge leverages ISurfGlobal's HR outsourcing expertise to streamline their people operations, from hiring to retention, enabling them to focus on financial innovation.",
    href: "#",
    icon: Users,
  },
  {
    company: "Edge Recovery",
    industry: "Technology",
    result: "IT & Technology outsourcing",
    summary:
      "As a subsidiary of ISurfGlobal, Edge Recovery delivers specialized technology and IT outsourcing solutions, helping clients with software development, infrastructure management, and technical support.",
    href: "#",
    icon: Monitor,
  },
  {
    company: "Olam Agri",
    industry: "Retail",
    result: "Contact center excellence",
    summary:
      "ISurfGlobal powers Olam Agri's customer engagement with a dedicated contact center solution, delivering 24/7 professional support and seamless communication across all channels.",
    href: "#",
    icon: Building2,
  },
];

// Get industry color
const getIndustryColor = (industry: string) => {
  const colors: Record<string, string> = {
    Manufacturing: "bg-blue-500/10 text-blue-600",
    Logistics: "bg-amber-500/10 text-amber-600",
    Fintech: "bg-green-500/10 text-green-600",
    Technology: "bg-purple-500/10 text-purple-600",
    Retail: "bg-pink-500/10 text-pink-600",
  };
  return colors[industry] || "bg-primary/10 text-primary";
};

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-soft/60 via-background to-accent-soft/30 border-b border-border py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative">
          <ScrollReveal direction="fade" threshold={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              <Sparkles className="size-3.5" /> Case Studies
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Customer stories</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              Real results from companies running their operations on ISurfGlobal across
              manufacturing, logistics, fintech, technology, and retail.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium">{cases.length} case studies</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="text-sm font-medium">5 industries</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full bg-amber-500 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span className="text-sm font-medium">100% success rate</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, index) => (
              <ScrollReveal key={c.company} direction="up" delay={index * 75} threshold={0.1}>
                <a
                  href={c.href}
                  className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
                >
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Industry badge with icon */}
                  <div className="relative">
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${getIndustryColor(c.industry)}`}
                    >
                      <c.icon className="size-3.5" />
                      {c.industry}
                    </div>
                  </div>

                  <h2 className="font-semibold text-xl mt-3 group-hover:text-primary transition-colors duration-300 relative">
                    {c.company}
                  </h2>

                  <div className="inline-flex items-center gap-1.5 mt-3 rounded-full bg-accent-soft text-primary px-3 py-1 text-sm font-semibold relative">
                    <TrendingUp className="size-3.5" /> {c.result}
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed relative">
                    {c.summary}
                  </p>

                  {/* Read more indicator */}
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2 relative">
                    Read case study{" "}
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-accent-soft/50 to-background border border-border text-center">
              <h3 className="text-xl font-semibold">Ready to be our next success story?</h3>
              <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                Join these companies and transform your operations with ISurfGlobal's expertise.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-6 py-2.5 text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start your journey <ChevronRight className="size-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  ),
});
