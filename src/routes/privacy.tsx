import { CheckCircle, Eye, FileText, Lock, Mail, Shield, Sparkles } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { LegalPage } from "@/components/site/LegalPage";
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

// Staggered children wrapper for lists
function StaggerReveal({
  children,
  className = "",
  delay = 50,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal key={index} direction={direction} delay={index * delay} threshold={0.1}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

// Animated Privacy Policy Page
function AnimatedPrivacyPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-page py-16 md:py-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white p-8 md:p-12 mb-12">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10">
          <ScrollReveal direction="fade" threshold={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/20 mb-4">
              <Shield className="size-3.5" /> Privacy
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <p className="text-white/80 text-lg max-w-2xl mt-3">
              How we collect, use, and protect your personal information.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="flex items-center gap-2 mt-4 text-sm text-white/70">
              <span>Updated: {updated}</span>
              <span className="size-1 rounded-full bg-white/30" />
              <span className="inline-flex items-center gap-1">
                <CheckCircle className="size-3.5 text-green-400" />
                <span className="text-white/90">Your privacy matters</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Privacy Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {[
          {
            icon: Lock,
            label: "Data Protection",
            color: "text-blue-400",
            desc: "Encrypted & secure",
          },
          { icon: Eye, label: "Transparency", color: "text-green-400", desc: "Clear policies" },
          {
            icon: FileText,
            label: "Your Rights",
            color: "text-purple-400",
            desc: "Access & control",
          },
          { icon: Shield, label: "Compliance", color: "text-amber-400", desc: "GDPR & CCPA" },
        ].map((item, index) => (
          <ScrollReveal key={item.label} direction="scale" delay={index * 100} threshold={0.1}>
            <div className="group bg-background border border-border rounded-xl p-4 text-center hover:shadow-card hover:border-primary/30 transition-all duration-300">
              <item.icon
                className={`size-8 mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform duration-300`}
              />
              <div className="font-semibold text-sm">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* First paragraph */}
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="p-6 rounded-xl bg-accent-soft/30 border border-border">
            <p className="text-foreground leading-relaxed">
              This Privacy Policy describes how ISurfGlobal Service Limited ("ISurfGlobal", "we",
              "us") collects, uses, and shares information when you use our website and services.
            </p>
          </div>
        </ScrollReveal>

        {/* Information we collect */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Information we collect</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly, information collected automatically when
              you use our services, and information from third parties such as identity verification
              providers.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <div className="bg-background rounded-xl p-6 border border-border space-y-3">
              {[
                "Account information: name, email, employer, and role.",
                "Service data: information you submit when using the platform.",
                "Usage data: device, browser, and interaction information.",
              ].map((item, index) => (
                <ScrollReveal key={index} direction="left" delay={250 + index * 50} threshold={0.1}>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="size-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* How we use information */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">How we use information</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              We use information to provide and improve our services, to communicate with you, to
              comply with legal obligations, and to protect against fraud.
            </p>
          </ScrollReveal>
        </div>

        {/* Sharing */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={400} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Sharing</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={450} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              We share information with service providers, payment processors, and where required by
              law. We never sell personal information.
            </p>
          </ScrollReveal>
        </div>

        {/* Your rights */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={500} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Your rights</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={550} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your jurisdiction, you may have rights to access, correct, delete, or
              restrict processing of your personal information. Contact{" "}
              <a
                href="mailto:privacy@isurfglobal.com"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors duration-300"
              >
                privacy@isurfglobal.com
              </a>{" "}
              to exercise these rights.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={600} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={650} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              Questions about this policy can be directed to{" "}
              <a
                href="mailto:privacy@isurfglobal.com"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors duration-300"
              >
                privacy@isurfglobal.com
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Privacy Commitment Section */}
      <ScrollReveal direction="up" delay={200} threshold={0.1}>
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-soft/50 to-background border border-border">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
              <Shield className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Commitment to Privacy</h3>
              <p className="text-sm text-muted-foreground mt-1">
                We are committed to protecting your privacy and handling your personal information
                with care. We continuously review and update our practices to ensure compliance with
                evolving privacy laws and regulations.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  <CheckCircle className="size-3" /> GDPR Compliant
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  <Lock className="size-3" /> Data Encryption
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">
                  <Shield className="size-3" /> Regular Audits
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Contact for Privacy Concerns */}
      <ScrollReveal direction="up" delay={300} threshold={0.1}>
        <div className="mt-8 p-6 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="size-10 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="font-semibold">Privacy Questions?</p>
                <p className="text-sm text-muted-foreground">
                  Our privacy team is here to help with any questions or concerns.
                </p>
              </div>
            </div>
            <a
              href="mailto:privacy@isurfglobal.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <Mail className="size-4" />
              privacy@isurfglobal.com
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ISurfGlobal" },
      {
        name: "description",
        content: "How ISurfGlobal collects, uses, and protects your personal information.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <AnimatedPrivacyPage title="Privacy Policy" updated="June 1, 2026">
        <LegalPage title="Privacy Policy" updated="June 1, 2026">
          <p>
            This Privacy Policy describes how ISurfGlobal Service Limited ("ISurfGlobal", "we",
            "us") collects, uses, and shares information when you use our website and services.
          </p>
          <h2>Information we collect</h2>
          <p>
            We collect information you provide directly, information collected automatically when
            you use our services, and information from third parties such as identity verification
            providers.
          </p>
          <ul>
            <li>Account information: name, email, employer, and role.</li>
            <li>Service data: information you submit when using the platform.</li>
            <li>Usage data: device, browser, and interaction information.</li>
          </ul>
          <h2>How we use information</h2>
          <p>
            We use information to provide and improve our services, to communicate with you, to
            comply with legal obligations, and to protect against fraud.
          </p>
          <h2>Sharing</h2>
          <p>
            We share information with service providers, payment processors, and where required by
            law. We never sell personal information.
          </p>
          <h2>Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or
            restrict processing of your personal information. Contact{" "}
            <a href="mailto:privacy@isurfglobal.com">privacy@isurfglobal.com</a> to exercise these
            rights.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be directed to{" "}
            <a href="mailto:privacy@isurfglobal.com">privacy@isurfglobal.com</a>.
          </p>
        </LegalPage>
      </AnimatedPrivacyPage>
    </PageLayout>
  ),
});
