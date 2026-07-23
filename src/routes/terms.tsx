import { BookOpen, CheckCircle, FileText, Lock, Mail, Scale, Shield, Sparkles } from "lucide-react";
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

// Animated Terms of Service Page
function AnimatedTermsPage({
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
              <Scale className="size-3.5" /> Terms of Service
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <p className="text-white/80 text-lg max-w-2xl mt-3">
              Governing your access to and use of ISurfGlobal services.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="flex items-center gap-2 mt-4 text-sm text-white/70">
              <span>Updated: {updated}</span>
              <span className="size-1 rounded-full bg-white/30" />
              <span className="inline-flex items-center gap-1">
                <CheckCircle className="size-3.5 text-green-400" />
                <span className="text-white/90">Current version</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Terms Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {[
          {
            icon: Shield,
            label: "Legal Protection",
            color: "text-blue-400",
            desc: "Your rights & obligations",
          },
          {
            icon: BookOpen,
            label: "Clear Terms",
            color: "text-green-400",
            desc: "Transparent policies",
          },
          {
            icon: Lock,
            label: "Data Security",
            color: "text-purple-400",
            desc: "Your data is safe",
          },
          { icon: FileText, label: "Compliance", color: "text-amber-400", desc: "Legal standards" },
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
              These Terms of Service ("Terms") govern your access to and use of services provided by
              ISurfGlobal Service Limited. By using our services you agree to these Terms.
            </p>
          </div>
        </ScrollReveal>

        {/* Use of services */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={100} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Use of services</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              You may use our services only as permitted by law and these Terms. You are responsible
              for any activity that occurs under your account.
            </p>
          </ScrollReveal>
        </div>

        {/* Subscription and billing */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={200} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Subscription and billing</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              Paid plans are billed in advance on a monthly or yearly basis. Fees are non-refundable
              except as required by law.
            </p>
          </ScrollReveal>
        </div>

        {/* Customer data */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={300} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Customer data</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to data you submit. You grant us a limited license to process
              this data solely to provide the services.
            </p>
          </ScrollReveal>
        </div>

        {/* Termination */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={400} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Termination</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={450} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate the agreement with notice. Upon termination, your right to
              use the services ends and we will delete or return your data per our Data Processing
              Addendum.
            </p>
          </ScrollReveal>
        </div>

        {/* Limitation of liability */}
        <div className="space-y-4">
          <ScrollReveal direction="up" delay={500} threshold={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Limitation of liability</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={550} threshold={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, ISurfGlobal's aggregate liability is limited
              to the amounts paid in the twelve months preceding the claim.
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
              Questions can be sent to{" "}
              <a
                href="mailto:legal@isurfglobal.com"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors duration-300"
              >
                legal@isurfglobal.com
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Legal Commitment Section */}
      <ScrollReveal direction="up" delay={200} threshold={0.1}>
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-soft/50 to-background border border-border">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
              <Shield className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Commitment to Transparency</h3>
              <p className="text-sm text-muted-foreground mt-1">
                We believe in clear, fair, and transparent terms of service. Our legal team
                regularly reviews and updates these terms to ensure compliance with current laws and
                regulations, and to protect both your rights and ours.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  <CheckCircle className="size-3" /> Fair Practices
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  <Scale className="size-3" /> Legal Compliance
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">
                  <Shield className="size-3" /> User Protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Contact for Legal Questions */}
      <ScrollReveal direction="up" delay={300} threshold={0.1}>
        <div className="mt-8 p-6 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="size-10 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="font-semibold">Legal Questions?</p>
                <p className="text-sm text-muted-foreground">
                  Our legal team is available to answer any questions about our terms.
                </p>
              </div>
            </div>
            <a
              href="mailto:legal@isurfglobal.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <Mail className="size-4" />
              legal@isurfglobal.com
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ISurfGlobal" },
      { name: "description", content: "Terms governing your use of ISurfGlobal services." },
    ],
  }),
  component: () => (
    <PageLayout>
      <AnimatedTermsPage title="Terms of Service" updated="June 1, 2026">
        <LegalPage title="Terms of Service" updated="June 1, 2026">
          <p>
            These Terms of Service ("Terms") govern your access to and use of services provided by
            ISurfGlobal Service Limited. By using our services you agree to these Terms.
          </p>
          <h2>Use of services</h2>
          <p>
            You may use our services only as permitted by law and these Terms. You are responsible
            for any activity that occurs under your account.
          </p>
          <h2>Subscription and billing</h2>
          <p>
            Paid plans are billed in advance on a monthly or yearly basis. Fees are non-refundable
            except as required by law.
          </p>
          <h2>Customer data</h2>
          <p>
            You retain all rights to data you submit. You grant us a limited license to process this
            data solely to provide the services.
          </p>
          <h2>Termination</h2>
          <p>
            Either party may terminate the agreement with notice. Upon termination, your right to
            use the services ends and we will delete or return your data per our Data Processing
            Addendum.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, ISurfGlobal's aggregate liability is limited to
            the amounts paid in the twelve months preceding the claim.
          </p>
          <h2>Contact</h2>
          <p>
            Questions can be sent to{" "}
            <a href="mailto:legal@isurfglobal.com">legal@isurfglobal.com</a>.
          </p>
        </LegalPage>
      </AnimatedTermsPage>
    </PageLayout>
  ),
});
