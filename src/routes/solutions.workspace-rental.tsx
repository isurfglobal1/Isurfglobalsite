import { Building2, Monitor, Rocket, Shield, Target, Users } from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/workspace-rental")({
  head: () => ({
    meta: [
      { title: "Workspace Rental — ISurfGlobal" },
      {
        name: "description",
        content:
          "Fully-equipped, secure workspaces for your teams. Flexible terms, premium amenities, prime locations.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="Workspace Rental"
        title="Premium workspaces, ready when you are"
        description="Move-in-ready offices for teams of any size. Enterprise-grade security, gigabit connectivity, and premium amenities included."
        bullets={[
          "Private offices and team rooms",
          "Meeting and conference rooms",
          "Gigabit internet and IT support",
          "24/7 secure access",
        ]}
        heroImage="/workspace-rental.webp"
        heroImageAlt="Modern, fully-equipped office workspace with professional environment and collaborative setup"

        // 2. STATS
        stats={[
          { value: "24/7", label: "Secure access" },
          { value: "1GB", label: "Internet speed" },
          { value: "100%", label: "Uptime guaranteed" },
          { value: "4+", label: "Prime locations" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why Premium Workspace Solutions Matter"
        writeUpDescription=""
        writeUpContent={[
          "At ISurfGlobal, we provide premium facility rental services, ensuring convenience, efficiency, and seamless space management. Our facility rental solutions cover everything from office space leasing to conference room rentals, allowing you to focus on business growth while we handle your workspace needs.",
          "Whether you're a growing startup, an established enterprise, or a team in transition, we offer flexible workspaces that adapt to your requirements. Our fully equipped offices come with high-speed internet, ergonomic furniture, and state-of-the-art meeting facilities to support your operations.",
          "We understand that every business has unique workspace needs. That's why we offer flexible leasing options - choose from short-term and long-term rental plans tailored to your business requirements. Our spaces are designed to enhance productivity, collaboration, and employee well-being.",
          "Our commitment to excellence extends beyond just providing space. We ensure a clean, well-maintained, and secure environment for your operations with professional facility management services. From housekeeping to maintenance, we handle it all so you can focus on what matters most - growing your business.",
          "Reduce overhead costs, improve operational efficiency, and maintain a professional business environment by utilizing our top-tier rental spaces. Let ISurfGlobal provide the ideal workspace solutions while you focus on scaling your business.",
        ]}
        writeUpHighlights={[
          { icon: Building2, label: "Flexible leasing options" },
          { icon: Shield, label: "24/7 security & upkeep" },
          { icon: Users, label: "All business sizes welcome" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Key Benefits of Partnering with ISurfGlobal"
        benefitsDescription="We combine premium facilities, flexible terms, and professional management to deliver exceptional workspace solutions."
        benefits={[
          {
            icon: Target,
            title: "Cost-Effective Rental Plans",
            desc: "Optimize your budget with affordable and competitive rental options that deliver maximum value.",
          },
          {
            icon: Rocket,
            title: "Flexible Lease Terms",
            desc: "Adapt your office space as per your business needs without long-term commitments or penalties.",
          },
          {
            icon: Monitor,
            title: "State of the Art Technology",
            desc: "Access prime business locations equipped with cutting-edge technology and high-speed connectivity.",
          },
          {
            icon: Building2,
            title: "Fully Equipped Offices",
            desc: "Enjoy high-quality office infrastructure, ergonomic furniture, and modern amenities ready for immediate use.",
          },
          {
            icon: Users,
            title: "On-Site Management Services",
            desc: "Reduce operational burdens with dedicated administrative support and professional facility management.",
          },
          {
            icon: Shield,
            title: "24/7 Security & Facility Upkeep",
            desc: "Ensure a safe and well-maintained workspace for your employees and clients with round-the-clock security.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "What types of workspaces do you offer?",
            a: "We offer private offices, team rooms, meeting and conference rooms, event spaces, and customizable office solutions to fit your specific needs.",
          },
          {
            q: "What are your lease terms?",
            a: "We offer flexible leasing options including short-term and long-term plans tailored to your business requirements.",
          },
          {
            q: "What amenities are included?",
            a: "Our workspaces come with high-speed internet, ergonomic furniture, meeting facilities, stocked kitchens, lounges, and wellness rooms.",
          },
          {
            q: "How do you ensure security?",
            a: "We provide 24/7 security with badge access, CCTV surveillance, and on-site security staff for your peace of mind.",
          },
          {
            q: "Can I customize my workspace?",
            a: "Yes — we offer customizable office solutions to fit your brand identity and functional requirements.",
          },
          {
            q: "Do you offer facility management services?",
            a: "Yes — we provide comprehensive facility management including housekeeping, maintenance, and administrative support.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to find your ideal workspace?"
        ctaDescription="Let's discuss how our premium workspace solutions can help your business thrive."
      />
    </PageLayout>
  ),
});
