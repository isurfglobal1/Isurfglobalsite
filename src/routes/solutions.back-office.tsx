import {
  ArrowRight,
  Award,
  Briefcase,
  Calculator,
  Clock,
  Database,
  FileText,
  Globe,
  Mail,
  Rocket,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/back-office")({
  head: () => ({
    meta: [
      { title: "Back-Office Services — ISurfGlobal" },
      {
        name: "description",
        content:
          "Reliable back-office support: data entry, accounting, document processing, and administrative operations.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="Back-Office Services"
        title="Streamline your back-office, scale your business"
        description="Offload time-consuming administrative tasks to our experienced team and reclaim hours every week to focus on what matters most."
        bullets={[
          "Data entry and document processing",
          "Accounting and bookkeeping support",
          "Customer record management",
          "Reporting and analytics",
        ]}
        heroImage="/back-office.webp"
        heroImageAlt="Professional back-office team handling data entry, accounting, and administrative operations"

        // 2. STATS
        stats={[
          { value: "99.9%", label: "Data accuracy rate" },
          { value: "24/7", label: "Back-office support" },
          { value: "60%", label: "Cost reduction" },
          { value: "300+", label: "Projects completed" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why Back-Office Outsourcing Matters"
        writeUpDescription=""
        writeUpContent={[
          "Managing essential business operations in-house can be a complex and resource-intensive task, requiring significant time, money, and effort. Handling administrative processes internally often diverts attention from core business functions such as strategic growth, customer engagement, and revenue generation. Outsourcing back-office operations enables businesses to optimize efficiency, reduce costs, and maintain seamless workflows while focusing on their primary objectives.",
          "As a premier Business Process Outsourcing (BPO) provider, ISurfGlobal offers end-to-end back-office solutions, tailored to the needs of businesses of all sizes including multinational corporations, mid-sized enterprises, start-ups, and government agencies. Our expertise spans across multiple areas, ensuring businesses benefit from reliable, cost-effective, and streamlined operations.",
          "With a team of highly skilled professionals, we provide client-centric, strategic back-office solutions designed to enhance productivity and operational reliability. Our approach is tailored to meet the unique needs of organizations across Nigeria, West Africa, and beyond.",
          "By leveraging advanced technology, including automation, AI-driven data processing, and cloud-based solutions, we enhance speed, accuracy, and security in back-office operations. Our commitment to excellence ensures that businesses can scale efficiently, maintain compliance, and improve overall performance.",
        ]}
        writeUpHighlights={[
          { icon: Globe, label: "Nigeria, West Africa & beyond" },
          { icon: Users, label: "All business sizes supported" },
          { icon: Shield, label: "Enterprise-grade security" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Key Benefits of Partnering with ISurfGlobal"
        benefitsDescription="We combine deep expertise, technology, and a client-first approach to deliver exceptional back-office services."
        benefits={[
          {
            icon: Target,
            title: "Cost-Effective Solutions",
            desc: "Optimize your budget with affordable back-office solutions that deliver maximum value.",
          },
          {
            icon: Rocket,
            title: "Seamless Workflow Management",
            desc: "Streamline your operations with efficient processes that keep your business running smoothly.",
          },
          {
            icon: Globe,
            title: "Flexible Service Plans",
            desc: "Adapt our services to your business needs with flexible plans and scalable solutions.",
          },
          {
            icon: Users,
            title: "Cutting-Edge Technology",
            desc: "Leverage automation, AI-driven processing, and cloud-based solutions for optimal efficiency.",
          },
          {
            icon: Shield,
            title: "Enhanced Data Security",
            desc: "Enterprise-grade security measures to protect your sensitive business information.",
          },
          {
            icon: Award,
            title: "24/7 Back-Office Assistance",
            desc: "Round-the-clock support to ensure your operations never skip a beat.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "What turnaround times can we expect?",
            a: "Standard SLAs are 24 hours, with same-day rush options available for urgent tasks.",
          },
          {
            q: "Do you sign NDAs?",
            a: "Always — and we comply with SOC 2, GDPR, and HIPAA where applicable to ensure your data is protected.",
          },
          {
            q: "How do you ensure data accuracy?",
            a: "We implement rigorous quality control processes, automated validation, and regular audits to maintain 99.9% accuracy.",
          },
          {
            q: "Can you integrate with our existing systems?",
            a: "Yes — we seamlessly integrate with your current software stack including CRMs, ERPs, and accounting platforms.",
          },
          {
            q: "What industries do you serve?",
            a: "We serve businesses across all sectors including finance, healthcare, retail, technology, and government agencies.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to streamline your back-office operations?"
        ctaDescription="Let's discuss how our back-office solutions can help you reduce costs and improve efficiency."
      />
    </PageLayout>
  ),
});
