import {
  Award,
  CheckCircle,
  FileText,
  Globe2,
  Lock,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — ISurfGlobal" },
      {
        name: "description",
        content:
          "ISurfGlobal's certifications and compliance posture: SOC 2, ISO 27001, GDPR, CCPA.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
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
                <Shield className="size-3.5" /> Compliance
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100} threshold={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Our Compliance & Security Posture
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200} threshold={0.1}>
              <p className="text-white/80 text-lg max-w-2xl mt-3">
                ISurfGlobal maintains enterprise-grade security certifications and compliance
                frameworks to protect your data.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300} threshold={0.1}>
              <div className="flex items-center gap-2 mt-4 text-sm text-white/70">
                <span>Updated: June 1, 2026</span>
                <span className="size-1 rounded-full bg-white/30" />
                <span className="inline-flex items-center gap-1">
                  <CheckCircle className="size-3.5 text-green-400" />
                  <span className="text-white/90">All certifications active</span>
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Compliance Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: ShieldCheck, label: "SOC 2 Type II", color: "text-blue-400" },
            { icon: Award, label: "ISO 27001", color: "text-green-400" },
            { icon: Globe2, label: "GDPR Compliant", color: "text-purple-400" },
            { icon: Lock, label: "CCPA/CPRA", color: "text-amber-400" },
          ].map((cert, index) => (
            <ScrollReveal key={cert.label} direction="scale" delay={index * 100} threshold={0.1}>
              <div className="group bg-background border border-border rounded-xl p-4 text-center hover:shadow-card hover:border-primary/30 transition-all duration-300">
                <cert.icon
                  className={`size-8 mx-auto mb-2 ${cert.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="font-semibold text-sm">{cert.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Certified</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Main Content - Direct rendering without complex child manipulation */}
        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal direction="up" threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              ISurfGlobal is committed to maintaining a strong compliance program. This page
              summarizes the certifications and frameworks we adhere to.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} threshold={0.1}>
            <div className="bg-accent-soft/30 rounded-xl p-6 border border-border">
              <ul className="space-y-3">
                {["SOC 2 Type II", "ISO 27001", "GDPR (EU/UK)", "CCPA / CPRA (California)"].map(
                  (cert, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="size-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">{cert}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Data processing</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              We offer a Data Processing Addendum (DPA) and Standard Contractual Clauses for
              customers transferring personal data internationally.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Subprocessors</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              A current list of subprocessors is available upon request. We provide advance notice
              of changes via the in-product notification center.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Reporting</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={450} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              Report a vulnerability or compliance concern to{" "}
              <a
                href="mailto:security@isurfglobal.com"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors duration-300"
              >
                security@isurfglobal.com
              </a>
              .
            </p>
          </ScrollReveal>
        </div>

        {/* Security Commitment Section */}
        <ScrollReveal direction="up" delay={200} threshold={0.1}>
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-soft/50 to-background border border-border">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                <Shield className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Commitment to Security</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We maintain a comprehensive security program that includes regular third-party
                  audits, penetration testing, and continuous monitoring. Our team is dedicated to
                  protecting your data with the highest industry standards.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                    <CheckCircle className="size-3" /> 99.9% Uptime
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    <Lock className="size-3" /> AES-256 Encryption
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">
                    <Users className="size-3" /> 24/7 Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact for Compliance Concerns */}
        <ScrollReveal direction="up" delay={300} threshold={0.1}>
          <div className="mt-8 p-6 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                  <FileText className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">Report a security concern</p>
                  <p className="text-sm text-muted-foreground">
                    We take security seriously. Report vulnerabilities or compliance concerns.
                  </p>
                </div>
              </div>
              <a
                href="mailto:security@isurfglobal.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
              >
                <Shield className="size-4" />
                security@isurfglobal.com
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageLayout>
  ),
});
