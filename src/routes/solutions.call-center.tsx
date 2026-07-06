import { Award, Clock, Globe2, Headset, Mic, Shield, Users } from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/call-center")({
  head: () => ({
    meta: [
      { title: "Call Center Services — ISurfGlobal" },
      {
        name: "description",
        content:
          "24/7 multilingual call center services for inbound, outbound, sales and customer support.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="Call Center"
        title="24/7 customer support that delights your customers"
        description=""
        bullets={[
          "Inbound and outbound calls",
          "Live chat and email support",
          "Sales and lead qualification",
          "Tier 1-3 technical support",
        ]}
        heroImage={"/cs.webp"}
        heroImageAlt="Professional background verification and identity check"

        // 2. STATS
        stats={[
          { value: "24/7", label: "Always on" },
          { value: "3+", label: "Languages" },
          { value: "95%", label: "CSAT score" },
          { value: "<20s", label: "Avg answer time" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why Call Center Outsourcing Matters"
        writeUpDescription=""
        writeUpContent={[
          "Running a call center demands significant time, money, and manpower, which can take focus away from key business priorities like lead generation, marketing, and client relationships. By outsourcing call center operations, businesses can enhance customer service, improve efficiency, and allocate resources more effectively, ensuring they stay on track toward growth and success.",
          "As a premier business process outsourcing provider, we at ISurfGlobal offer world-class call center outsourcing services to businesses of all sizes, including multinational corporations, mid-sized enterprises, start-ups, and government agencies. Our expertise extends to inbound and outbound call handling, customer support, telemarketing, technical support, and online reputation management.",
          "With our experienced and skilled call center professionals, we provide client-centric, strategic call center solutions tailored to meet the diverse needs of organizations across Nigeria, West Africa, and beyond. We recognize the critical role effective customer communication plays in business success, and we are committed to delivering exceptional customer interactions that strengthen brand loyalty and satisfaction.",
          "Our proficient call center outsourcing team empowers businesses by reducing operational costs, improving service efficiency, and scaling operations seamlessly. We continuously integrate advanced technologies such as AI-powered chatbots, big data analytics, and CRM systems to ensure our clients remain ahead in the highly competitive business landscape.",
          "As a leading provider of call center solutions, we offer a comprehensive suite of services supported by cutting-edge technology. From customer support and order processing to technical assistance and quality assurance, we handle it all with expertise and efficiency.",
          "Our deep domain expertise in call center outsourcing enables us to select and train the best professionals to represent your brand effectively. Our dedicated recruitment specialists conduct thorough assessments of potential agents, ensuring they possess the right communication and technical skills. Additionally, our background verification team performs meticulous pre-employment screening, guaranteeing reliability and professionalism in every interaction.",
        ]}
        writeUpHighlights={[
          { icon: Globe2, label: "Nigeria, West Africa & beyond" },
          { icon: Users, label: "All business sizes supported" },
          { icon: Shield, label: "Regulatory compliance & data security" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Key Benefits of Partnering with ISurfGlobal"
        benefitsDescription="We combine deep expertise, technology, and a customer-first approach to deliver exceptional call center services."
        benefits={[
          {
            icon: Clock,
            title: "24/7 Customer Support",
            desc: "Round-the-clock support to ensure your customers always have access to assistance when they need it.",
          },
          {
            icon: Users,
            title: "Scalable Support Teams",
            desc: "Easily scale your support team up or down based on business needs without compromising quality.",
          },
          {
            icon: Mic,
            title: "Optimized Call Handling",
            desc: "Efficient call routing, reduced wait times, and professional handling of every customer interaction.",
          },
          {
            icon: Headset,
            title: "Access to Skilled Agents",
            desc: "Trained, experienced agents who understand your brand and deliver exceptional customer experiences.",
          },
          {
            icon: Shield,
            title: "Regulatory Compliance & Data Security",
            desc: "Stay compliant with industry regulations while ensuring customer data is protected with enterprise-grade security.",
          },
          {
            icon: Award,
            title: "Seamless Customer Experience",
            desc: "Delight your customers with consistent, professional, and personalized support across all channels.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "What types of call center services do you offer?",
            a: "We offer inbound and outbound call handling, customer support, telemarketing, technical support, live chat, email support, and online reputation management.",
          },
          {
            q: "How do you ensure quality assurance?",
            a: "We implement rigorous quality monitoring, call recording, real-time analytics, and regular agent training to maintain high service standards.",
          },
          {
            q: "Can you handle multilingual support?",
            a: "Yes — we provide native-level support in 20+ languages to serve your global customer base effectively.",
          },
          {
            q: "What technology do you use?",
            a: "We leverage AI-powered chatbots, big data analytics, advanced CRM systems, and omnichannel platforms for seamless customer interactions.",
          },
          {
            q: "How quickly can you scale our team?",
            a: "We can scale your support team within days based on your requirements, ensuring minimal disruption to your operations.",
          },
          {
            q: "Do you offer technical support?",
            a: "Yes — we provide Tier 1-3 technical support with trained agents who can handle complex technical issues.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to delight your customers 24/7?"
        ctaDescription="Let's discuss how our call center solutions can help you deliver exceptional customer experiences."
      />
    </PageLayout>
  ),
});
