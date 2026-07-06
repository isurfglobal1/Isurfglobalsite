import {
  ArrowRight,
  Award,
  BadgeCheck,
  Clock,
  Database,
  FileCheck,
  Fingerprint,
  Globe2,
  Lock,
  Rocket,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

// Hero image for Background Check page
const heroImage =
  "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=1600&h=900&fit=crop";

export const Route = createFileRoute("/solutions/background-check")({
  head: () => ({
    meta: [
      { title: "Background Check — ISurfGlobal" },
      {
        name: "description",
        content:
          "Fast, accurate background checks and screening services for confident hiring decisions worldwide.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="Background Check"
        title="Hire with confidence, anywhere in the world"
        description="Accurate, compliant background checks delivered in days, not weeks. Built for global hiring teams."
        bullets={[
          "Criminal history checks",
          "Employment and education verification",
          "Reference checks",
          "Identity and credential verification",
        ]}
        heroImage={"/background-check.webp"}
        heroImageAlt="Professional HR conducting thorough background verification and candidate screening"

        // 2. STATS
        stats={[
          { value: "48hrs", label: "Average turnaround" },
          { value: "3+", label: "Countries covered" },
          { value: "FCRA", label: "Compliant" },
          { value: "98%", label: "Pass rate accuracy" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why Background Verification Matters"
        writeUpDescription=""
        writeUpContent={[
          "Managing employee verification in-house can be a complex and resource-intensive task, requiring significant time, money, and effort. This often diverts attention from core business functions such as growth strategies, marketing initiatives, and client relationship management. Outsourcing background checks streamlines the hiring process, allowing businesses to focus on their primary objectives while ensuring a trustworthy and compliant workforce.",
          "As a premier business process outsourcing provider, ISurfGlobal offers world-class background verification services to businesses of all sizes, including multinational corporations, mid-sized enterprises, start-ups, and government agencies. Our expertise extends to pre-employment screening, criminal record checks, educational verification, employment history validation, and identity authentication.",
          "With our experienced and skilled verification professionals, we provide client-centric, strategic background check solutions tailored to meet the diverse needs of organizations across Nigeria, West Africa, and beyond. We recognize the critical role that integrity and compliance play in business success, and we are committed to delivering thorough and accurate verifications that strengthen workforce reliability and organizational security.",
          "Our proficient background verification team empowers businesses by reducing hiring risks, ensuring regulatory compliance, and maintaining a safe and credible work environment. We leverage cutting-edge technology, including AI-driven identity verification, automated database cross-checks, and biometric screening, to enhance accuracy and efficiency in the hiring process.",
          "As a leading provider of background check solutions, we offer a comprehensive suite of verification services backed by industry-leading technology. From criminal record assessments and reference checks to credit history analysis and document authentication, we handle it all with precision and expertise.",
        ]}
        writeUpHighlights={[
          { icon: Globe2, label: "200+ Countries covered" },
          { icon: Users, label: "All business sizes supported" },
          { icon: Shield, label: "FCRA & GDPR compliant" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Key Benefits of Partnering with ISurfGlobal"
        benefitsDescription="We combine deep expertise, technology, and a commitment to accuracy to deliver exceptional background verification services."
        benefits={[
          {
            icon: Target,
            title: "Comprehensive Employee Screening",
            desc: "Thorough pre-employment screening including criminal records, education verification, and employment history validation.",
          },
          {
            icon: Rocket,
            title: "Scalable Verification Services",
            desc: "Effortlessly scale your screening operations based on hiring volume without compromising quality.",
          },
          {
            icon: Fingerprint,
            title: "Thorough Background Investigations",
            desc: "Meticulous cross-referencing of records ensuring reliability and professionalism in every hire.",
          },
          {
            icon: Users,
            title: "Access to Verified Candidates",
            desc: "Make confident hiring decisions with verified candidate information you can trust.",
          },
          {
            icon: Shield,
            title: "Regulatory Compliance & Data Security",
            desc: "Stay compliant with FCRA, GDPR, and EEOC regulations while protecting sensitive candidate data.",
          },
          {
            icon: Award,
            title: "Risk Mitigation & Quality Assurance",
            desc: "Reduce hiring risks, safeguard your reputation, and build a secure workforce with our expert verification.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "How quickly can I get results?",
            a: "Most background checks are completed within 48 hours, with expedited options available for urgent requirements.",
          },
          {
            q: "Which countries do you cover?",
            a: "We provide background verification services in 200+ countries with local expertise and compliance knowledge.",
          },
          {
            q: "Are your services FCRA compliant?",
            a: "Yes — our background check processes are fully FCRA, GDPR, and EEOC compliant by design.",
          },
          {
            q: "What types of checks do you offer?",
            a: "We offer criminal record checks, employment verification, education verification, reference checks, identity authentication, and credit history analysis.",
          },
          {
            q: "How do you ensure data security?",
            a: "We implement enterprise-grade security measures including encryption, access controls, and regular audits to protect candidate data.",
          },
          {
            q: "Can you handle high-volume screening?",
            a: "Absolutely — our scalable verification services can handle any volume of background checks, from startups to enterprise-level organizations.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to build a trustworthy workforce?"
        ctaDescription="Let's discuss how our background verification solutions can help you hire with confidence."
      />
    </PageLayout>
  ),
});
