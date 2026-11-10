import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Calendar,
  CreditCard,
  Database,
  FileCheck,
  GitBranch,
  Globe,
  RefreshCw,
  Rocket,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/overview")({
  head: () => ({
    meta: [
      { title: "Use Cases — ISurfGlobal" },
      {
        name: "description",
        content:
          "See how ISurfGlobal helps companies run their entire HR operations with 247HR - the complete HR outsourcing solution.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="Use Cases"
        title="Run your entire HR function with one partner"
        description="From recruitment to retirement, ISurfGlobal provides end-to-end HR outsourcing powered by 247HR - the single source of truth for your entire employee journey."
        bullets={[
          "Complete employee lifecycle management",
          "Automated payroll and compliance",
          "Real-time workforce analytics",
          "Enterprise-grade security",
        ]}

        // 2. STATS
        stats={[
          { value: "1,500+", label: "Enterprises served" },
          { value: "99.99%", label: "Uptime SLA" },
          { value: "100%", label: "Payroll accuracy" },
          { value: "24/7", label: "HR support" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="How We Transform Your HR Operations"
        writeUpDescription=""
        writeUpContent={[
          "A complete walkthrough of how ISurfGlobal and 247HR work together to streamline your entire HR function.",
          "Managing human resources across multiple departments and locations is a complex, resource-intensive challenge. From recruitment and onboarding to payroll and compliance, each step requires precision, coordination, and significant time investment. Fragmented tools and manual processes create data silos, increase errors, and slow down decision-making.",
          "ISurfGlobal solves this challenge with 247HR — the single, integrated platform that powers every aspect of your employee lifecycle. We combine our deep HR expertise with 247HR's enterprise-grade technology to deliver a seamless experience for your entire workforce.",
        ]}
        writeUpHighlights={[
          { icon: Globe, label: "4 Countries supported" },
          { icon: Users, label: "Complete lifecycle management" },
          { icon: Shield, label: "Enterprise-grade security" },
        ]}

        // 4. BENEFITS - Including the modules and lifecycle as benefits
        benefitsTitle="The Complete Employee Lifecycle & Modules"
        benefitsDescription="One seamless flow for every touchpoint of your human capital management, powered by comprehensive modules."
        benefits={
          [
            // {
            //   icon: Users,
            //   title: "Recruitment & ATS",
            //   desc: "Pipeline management, automated interview scheduling, and AI-powered candidate scoring all in one place.",
            // },
            // {
            //   icon: UserCheck,
            //   title: "Onboarding & Staff Management",
            //   desc: "Complete digital records and repository for all employee information from day one.",
            // },
            // {
            //   icon: Calendar,
            //   title: "Time & Attendance",
            //   desc: "Geo-fenced clock-ins and automated leave workflows for accurate tracking.",
            // },
            // {
            //   icon: GitBranch,
            //   title: "Task & Performance Management",
            //   desc: "Collaborative project tracking, daily tasks, and OKR monitoring for clear performance metrics.",
            // },
            // {
            //   icon: CreditCard,
            //   title: "Automated Payroll",
            //   desc: "One-click processing, multi-currency support, and direct bank integration with 100% accuracy.",
            // },
            // {
            //   icon: FileCheck,
            //   title: "Reporting & Compliance",
            //   desc: "Statutory reports, tax compliance, and audit-ready data export across all jurisdictions.",
            // },
            // {
            //   icon: RefreshCw,
            //   title: "Seamless Data Flow",
            //   desc: "Information captured during recruitment flows directly into payroll and staff records—zero manual re-entry.",
            // },
            // {
            //   icon: TrendingUp,
            //   title: "Real-time Analytics",
            //   desc: "Global dashboards provide instant insights into workforce trends, turnover rates, and financial impact.",
            // },
            // {
            //   icon: Shield,
            //   title: "Unified Compliance",
            //   desc: "Apply labor laws and tax regulations globally from a single control center with automatic updates.",
            // },
          ]
        }

        // 5. FAQ
        faqs={[
          {
            q: "How does 247HR integrate with our existing systems?",
            a: "247HR is API-first designed, allowing seamless integration with your existing HRIS, ATS, payroll platforms, and other enterprise tools.",
          },
          {
            q: "What countries do you support?",
            a: "We support HR operations in 4 countries across the Americas, EMEA, and APAC with local expertise and compliance knowledge.",
          },
          {
            q: "How quickly can we onboard?",
            a: "Most customers go live within 2-4 weeks depending on scope and complexity. We work with you to ensure a smooth transition.",
          },
          {
            q: "How do you ensure data security?",
            a: "We implement bank-grade security with end-to-end encryption, SOC 2 compliance, and annual third-party penetration testing.",
          },
          {
            q: "What about payroll and tax compliance?",
            a: "Our automated payroll system handles multi-currency processing, local tax filings, statutory deductions, and compliance requirements across all jurisdictions.",
          },
          {
            q: "Can you scale with our business?",
            a: "Yes — our multi-tenant architecture supports businesses of all sizes, from startups to enterprises, with 99.99% uptime SLA.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to transform your HR operations?"
        ctaDescription="Let's discuss how our HR outsourcing solutions powered by 247HR can help you build a world-class workforce."
      />
    </PageLayout>
  ),
});
