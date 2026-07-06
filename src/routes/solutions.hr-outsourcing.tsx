import { Award, Globe, Rocket, Shield, Target, Users } from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/hr-outsourcing")({
  head: () => ({
    meta: [
      { title: "HR Outsourcing — ISurfGlobal" },
      {
        name: "description",
        content:
          "End-to-end HR outsourcing: recruitment, onboarding, payroll, compliance, and benefits administration for global teams.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="HR Outsourcing"
        title="Run your entire HR function with one global partner"
        description="From recruitment and onboarding to benefits, payroll and compliance — we handle every aspect of your people operations so you can focus on growth."
        bullets={[
          "Talent acquisition and onboarding workflows",
          "Payroll and benefits administration in 90+ countries",
          "Compliance with local labor laws",
          "Performance management and engagement tools",
        ]}
        heroImage={"/hr-outsourcing.webp"}
        heroImageAlt="Professional HR team collaborating on talent acquisition and employee management"
        heroImagePosition="center 15%"

        // 2. STATS
        stats={[
          { value: "92%", label: "Faster onboarding" },
          { value: "4+", label: "Countries supported" },
          { value: "24/7", label: "HR support" },
          { value: "99.9%", label: "Compliance accuracy" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why HR Outsourcing Matters"
        writeUpDescription=""
        writeUpContent={[
          "Human resource management is a stressful business function; it takes enormous time, money, and other resources to manage human resources in-house. This hampers the execution of critical business functions, be it generating new leads, marketing existing products and/or services, and communicating with clients. Human resource and call center outsourcing ease the burden on businesses and allow them to concentrate on their core operations, leading to enhanced productivity and improved returns.",
          "As an eminent business process and call center outsourcing provider, we at ISurfGlobal offer top-of-the-line human resource outsourcing services to establishments ranging from global conglomerates and mid-size enterprises to flourishing start-ups and government agencies.",
          "Through our seasoned and proficient HRM experts, we deliver client-focused strategic human resources management services to clients of diverse sizes across Nigeria, West Africa, and beyond. We understand how important people are to the survival and growth of your companies or organizations; hence, we support you in attracting and retaining choice talents that work happily to achieve your corporate vision.",
          "Our proficient HR outsourcing team empowers the human resource functions of our clientele to achieve cost savings, build efficiencies, scale up or down, and better the quality of service delivery. We continually strive to integrate our human resource services with AI-based chatbots and big data to create future-ready services that provide our clients with the edge needed to thrive in this fiercely competitive business world.",
        ]}
        writeUpHighlights={[
          { icon: Globe, label: "Nigeria, West Africa & beyond" },
          { icon: Users, label: "All business sizes supported" },
          { icon: Shield, label: "Comprehensive compliance" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Key Benefits of Partnering with ISurfGlobal"
        benefitsDescription="We combine deep expertise, technology, and a people-first approach to deliver exceptional HR services."
        benefits={[
          {
            icon: Target,
            title: "Efficient Cost Management",
            desc: "Significantly reduce HR operational costs while improving service quality and employee satisfaction.",
          },
          {
            icon: Rocket,
            title: "Enhanced Productivity",
            desc: "Free your leadership team to focus on core business functions while we handle all HR complexities.",
          },
          {
            icon: Globe,
            title: "Access to Elite Expertise",
            desc: "Tap into our pool of seasoned HR professionals with deep experience across industries and geographies.",
          },
          {
            icon: Users,
            title: "Scalable Workforce Management",
            desc: "Effortlessly scale your workforce up or down based on business needs without administrative burden.",
          },
          {
            icon: Shield,
            title: "Compliance & Risk Mitigation",
            desc: "Stay compliant with local labor laws and regulations across all jurisdictions with our expert guidance.",
          },
          {
            icon: Award,
            title: "Streamlined Employee Experience",
            desc: "Delight your employees with seamless onboarding, payroll, benefits, and ongoing HR support.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "Which countries do you support?",
            a: "We support HR operations in 90+ countries across the Americas, EMEA, and APAC.",
          },
          {
            q: "How quickly can we onboard?",
            a: "Most customers go live within 2-4 weeks depending on scope and complexity.",
          },
          {
            q: "Can you integrate with our existing HRIS?",
            a: "Yes — we integrate with all major HRIS, ATS and payroll platforms.",
          },
          {
            q: "Do you handle payroll taxes and compliance?",
            a: "Absolutely. We manage all local tax filings, statutory deductions, and compliance requirements.",
          },
          {
            q: "What about employee benefits?",
            a: "We help you design and administer competitive benefits packages tailored to each country's market standards.",
          },
          {
            q: "How do you ensure data security?",
            a: "We implement enterprise-grade security measures including encryption, access controls, and regular audits.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to transform your HR operations?"
        ctaDescription="Let's discuss how our HR outsourcing solutions can help you build a world-class workforce."
      />
    </PageLayout>
  ),
});
