import {
  ArrowRight,
  Award,
  Cloud,
  Code,
  Database,
  Globe,
  Headphones,
  Laptop,
  Mic,
  Monitor,
  Network,
  Phone,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

// Hero image for IT Services - Technology focused
const heroImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop";

export const Route = createFileRoute("/solutions/it-services")({
  head: () => ({
    meta: [
      { title: "IT Services & Outsourcing — ISurfGlobal" },
      {
        name: "description",
        content:
          "Comprehensive IT solutions including 3CX Contact Center, software development (websites, web apps, mobile apps, CRMs), API middleware, and SIPS/DIDs procurement.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="IT Services & Outsourcing"
        title="Power your business with cutting-edge technology solutions"
        description="Comprehensive IT services including Contact Center infrastructure, custom software development, API middleware, and telecommunications solutions to drive your business forward."
        bullets={[
          "3CX Contact Center solutions",
          "Custom software & mobile app development",
          "CRM integration & API middleware",
          "SIPS & DIDs procurement",
        ]}
        heroImage={"/it-services.webp"}
        heroImageAlt="Technology professionals working on innovative IT solutions and software development"

        // 2. STATS
        stats={[
          { value: "3CX", label: "Expert" },
          { value: "50+", label: "Projects delivered" },
          { value: "24/7", label: "IT Support" },
          { value: "99.9%", label: "Uptime guarantee" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why IT Outsourcing Matters"
        writeUpDescription=""
        writeUpContent={[
          "In today's rapidly evolving digital landscape, businesses face increasing pressure to adopt innovative technologies while managing costs and maintaining security. IT outsourcing has become a strategic imperative for organizations looking to stay competitive, access specialized expertise, and focus on their core business functions.",
          "At ISurfGlobal, we deliver comprehensive IT solutions that transform your technology infrastructure. From implementing world-class communication systems with 3CX to developing custom software applications, we provide end-to-end technology services that power your business. Our expertise spans across Contact Center solutions, custom software development, API integrations, and telecommunications procurement.",
          "We understand that every business has unique technology needs. Whether you're looking to modernize your communication systems, build custom applications, or integrate disparate systems, our team of experienced IT professionals delivers solutions tailored to your specific requirements.",
          "As a certified 3CX expert, we bring deep expertise in unified communications and Contact Center solutions that enhance customer engagement and streamline operations. Combined with our software development capabilities and telecommunications infrastructure knowledge, we offer a complete technology ecosystem designed for the modern enterprise.",
          "Our commitment to excellence extends beyond implementation. We provide ongoing support, maintenance, and optimization to ensure your technology investments continue to deliver value long after deployment. With ISurfGlobal as your IT partner, you gain access to cutting-edge technology, expert guidance, and a reliable foundation for digital transformation.",
        ]}
        writeUpHighlights={[
          { icon: Globe, label: "Global technology solutions" },
          { icon: Users, label: "All business sizes supported" },
          { icon: Shield, label: "Enterprise-grade security" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Comprehensive IT Solutions"
        benefitsDescription="We combine deep technical expertise with business acumen to deliver technology solutions that drive real results."
        benefits={[
          {
            icon: Headphones,
            title: "3CX Contact Center Solutions",
            desc: "Deploy world-class contact center infrastructure with 3CX. Features include omnichannel support, IVR, call recording, real-time analytics, and seamless CRM integration for enhanced customer engagement.",
          },
          {
            icon: Code,
            title: "Custom Software Development",
            desc: "Build tailored solutions that address your unique business challenges. From web applications and mobile apps to enterprise CRMs and middleware, we deliver robust, scalable software.",
          },
          {
            icon: Smartphone,
            title: "Web & Mobile App Development",
            desc: "Create engaging, responsive web applications and native mobile apps that delight users and drive business growth. We leverage modern frameworks and best practices for optimal performance.",
          },
          {
            icon: Database,
            title: "CRM Integration & API Middleware",
            desc: "Connect your business systems with seamless CRM integration and custom API middleware. Ensure data flows smoothly across your organization for better decision-making and efficiency.",
          },
          {
            icon: Network,
            title: "SIPS & DIDs Procurement",
            desc: "Access high-quality telecommunications infrastructure with our SIPS (Session Initiation Protocol Services) and DIDs (Direct Inward Dialing) procurement services. Enhance your communication capabilities with reliable, cost-effective solutions.",
          },
          {
            icon: Monitor,
            title: "IT Infrastructure & Support",
            desc: "Build a robust technology foundation with our comprehensive IT infrastructure services. From network setup and cloud solutions to ongoing support and maintenance, we keep your systems running smoothly.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "What is 3CX and how can it benefit my business?",
            a: "3CX is a powerful, software-based communication platform that replaces traditional phone systems with a modern, flexible solution. It offers cost savings, anywhere access, easy management, and features like auto-attendant, call queuing, video conferencing, and CRM integration to enhance customer engagement and team collaboration.",
          },
          {
            q: "What software development services do you offer?",
            a: "We offer comprehensive software development services including custom web applications, mobile apps (iOS and Android), enterprise CRM systems, API middleware for system integration, and custom business software tailored to your specific needs.",
          },
          {
            q: "What are SIPS and DIDs?",
            a: "SIPS (Session Initiation Protocol Services) are SIP trunks that connect your business phone system to the public telephone network. DIDs (Direct Inward Dialing) are virtual phone numbers that allow customers to reach specific departments or individuals directly. We help you procure and manage these services cost-effectively.",
          },
          {
            q: "Can you integrate 3CX with our existing CRM?",
            a: "Yes — 3CX offers seamless integration with popular CRMs including Salesforce, Microsoft Dynamics, Zoho CRM, HubSpot, and more. We can also build custom API integrations for your specific CRM platform to ensure unified communication and data flow.",
          },
          {
            q: "How do you ensure data security?",
            a: "We implement enterprise-grade security measures including end-to-end encryption, secure access controls, regular security audits, and compliance with industry standards. Our solutions are designed with security as a fundamental principle, not an afterthought.",
          },
          {
            q: "Do you offer ongoing support and maintenance?",
            a: "Absolutely — we provide comprehensive ongoing support and maintenance services to ensure your technology investments continue to perform optimally. Our support packages include regular updates, security patches, performance monitoring, and expert technical assistance.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to transform your technology infrastructure?"
        ctaDescription="Let's discuss how our IT services and solutions can help your business thrive in the digital age."
      />
    </PageLayout>
  ),
});
