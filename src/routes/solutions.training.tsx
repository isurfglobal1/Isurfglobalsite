import { BarChart3, BookOpen, Globe2, Laptop, Shield, Target, Trophy, Users } from "lucide-react";

import { MarketingPage } from "@/components/site/MarketingPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/training")({
  head: () => ({
    meta: [
      { title: "Training Programs — ISurfGlobal" },
      {
        name: "description",
        content:
          "Expert-led training programs from call center operations to corporate development for high-performing teams.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <MarketingPage
        // 1. HERO
        eyebrow="Training Programs"
        title="Develop your teams, transform your business"
        description="Expert-led training programs designed to build high-performing teams. From call center operations to corporate leadership, we prepare your workforce for success."
        bullets={[
          "Call center operations training",
          "Corporate leadership development",
          "Technical skills enhancement",
          "Soft skills & communication",
        ]}
        heroImage={"/training.webp"}
        heroImageAlt="Professional learning and development training session"

        // 2. STATS
        stats={[
          { value: "95%", label: "Satisfaction rate" },
          { value: "50+", label: "Training programs" },
          { value: "10k+", label: "Professionals trained" },
          { value: "40+", label: "Expert trainers" },
        ]}

        // 3. WRITE-UP
        writeUpTitle="Why Training Programs Matter"
        writeUpDescription=""
        writeUpContent={[
          "In today's rapidly evolving business landscape, continuous learning and development are essential for organizational success. Companies that invest in employee training see improved productivity, higher retention rates, and a more engaged workforce. However, designing and delivering effective training programs requires specialized expertise and resources that many organizations lack internally.",
          "At ISurfGlobal, we provide comprehensive training programs tailored to your organization's needs. From call center operations and customer service excellence to corporate leadership and technical skills development, our expert trainers deliver practical, results-driven training that transforms teams.",
          "Our training approach combines proven methodologies with interactive learning experiences. We leverage modern training techniques including virtual classrooms, hands-on workshops, role-playing scenarios, and real-world case studies to ensure knowledge retention and practical application.",
          "We understand that every organization has unique training needs. That's why we offer customizable programs that can be delivered on-site, virtually, or in a hybrid format. Our flexible approach ensures your team receives the training they need, when and how they need it.",
          "With  Global as your training partner, you gain access to experienced trainers, cutting-edge training materials, and a commitment to excellence that ensures your team is prepared to meet today's challenges and tomorrow's opportunities.",
        ]}
        writeUpHighlights={[
          { icon: Globe2, label: "On-site & virtual training" },
          { icon: Users, label: "All team sizes supported" },
          { icon: Shield, label: "Industry-recognized certification" },
        ]}

        // 4. BENEFITS
        benefitsTitle="Key Benefits of Our Training Programs"
        benefitsDescription="We combine expert trainers, proven methodologies, and customizable content to deliver exceptional learning experiences."
        benefits={[
          {
            icon: Target,
            title: "Customized Learning Solutions",
            desc: "Training programs tailored to your organization's specific needs, industry, and team skill levels.",
          },
          {
            icon: BookOpen,
            title: "Expert-Led Instruction",
            desc: "Learn from experienced industry professionals who bring real-world insights and practical knowledge.",
          },
          {
            icon: Laptop,
            title: "Blended Learning Approach",
            desc: "Combine in-person workshops, virtual sessions, and self-paced modules for optimal learning outcomes.",
          },
          {
            icon: Users,
            title: "Team Development",
            desc: "Build stronger teams with training that enhances collaboration, communication, and collective performance.",
          },
          {
            icon: Trophy,
            title: "Industry Certification",
            desc: "Earn recognized certifications that validate skills and enhance career growth opportunities.",
          },
          {
            icon: BarChart3,
            title: "Measurable Results",
            desc: "Track progress and measure ROI with pre and post-training assessments and performance metrics.",
          },
        ]}

        // 5. FAQ
        faqs={[
          {
            q: "What types of training programs do you offer?",
            a: "We offer call center operations training, corporate leadership development, technical skills enhancement, soft skills & communication training, customer service excellence, and sales training.",
          },
          {
            q: "Can training be delivered remotely?",
            a: "Yes — we offer virtual training options using interactive platforms, live sessions, and self-paced modules to accommodate remote and distributed teams.",
          },
          {
            q: "How long are the training programs?",
            a: "Programs range from half-day workshops to multi-week comprehensive courses. We customize duration based on your specific needs and learning objectives.",
          },
          {
            q: "Do you provide training materials?",
            a: "Yes — we provide comprehensive training materials including workbooks, digital resources, and reference guides that participants can keep and use beyond the training.",
          },
          {
            q: "Can you train our existing trainers?",
            a: "Absolutely — we offer train-the-trainer programs that empower your internal team to deliver ongoing training and development.",
          },
          {
            q: "How do you measure training effectiveness?",
            a: "We use pre and post-training assessments, participant feedback surveys, practical evaluations, and follow-up performance tracking to measure effectiveness and ROI.",
          },
        ]}

        // 6. CTA
        ctaTitle="Ready to transform your team's performance?"
        ctaDescription="Let's discuss how our training programs can help your organization build a high-performing workforce."
      />
    </PageLayout>
  ),
});
