import {
  Award,
  BarChart3,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Globe2,
  Heart,
  Laptop,
  Monitor,
  Play,
  Server,
  Smile,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// Import assets
import mission from "@/assets/mission.webp";
import aboutUsVideo from "@/assets/video/about-us.mp4";
import vision from "@/assets/vision.webp";
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

// Staggered children wrapper for lists
function StaggerReveal({
  children,
  className = "",
  delay = 50,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal key={index} direction={direction} delay={index * delay} threshold={0.1}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ISurfGlobal" },
      {
        name: "description",
        content:
          "ISurfGlobal is on a mission to make global operations effortless for every business.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        <div className="container-page py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="fade" threshold={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/20 mb-4">
                <Sparkles className="size-3.5" /> About ISurfGlobal
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100} threshold={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                A creative BPO partner, headquartered in Lagos
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200} threshold={0.1}>
              <p className="text-lg text-white/80 mt-5 max-w-2xl">
                ISurfGlobal is a leading global technology, consulting and outsourcing service
                provider company specializing in customer engagement and improving business
                performance for some of the best brands.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300} threshold={0.1}>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get in touch{" "}
                  <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Our services
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story with Video */}
      <section className="my-[70px] py-5 md:py-16 bg-background border-b border-border">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up" threshold={0.1}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                  <Sparkles className="size-3.5" /> Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  A Wish! A Hope! A Dream!
                </h2>
              </div>
            </ScrollReveal>

            <StaggerReveal direction="up" delay={100}>
              <p className="text-muted-foreground leading-relaxed text-justify">
                This is where all good things start. Hence, the start of ISurfGlobal, a small group
                of young and enthusiastic professionals with a strong desire to stand apart and earn
                recognition for positive and creative work.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                ISurfGlobal is a leading global technology, consulting and outsourcing service
                provider company specializing in customer engagement and improving business
                performance for some of the best brands. We offer an extensive range of business
                solutions to clients with highly-trained staff, state-of-the-art technology and
                trusted cost-cutting methods.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Based out of Nigeria with its headquarters in Lagos, we have a dedicated workforce
                comprising native speakers (English, Yoruba, Igbo and Hausa) who can decode the
                needs of customers effectively and provide quick resolutions to their problems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                ISurfGlobal manages a wide range of Outsourcing functions, including Customer
                Support, HR Outsourcing, RPO (Recruitment Process Outsourcing), and Payroll
                Processing.
              </p>
            </StaggerReveal>

            {/* Video Section */}
            <ScrollReveal direction="scale" delay={200} threshold={0.1}>
              <VideoPlayer videoSrc={aboutUsVideo} />
            </ScrollReveal>

            <StaggerReveal direction="up" delay={100}>
              <p className="text-muted-foreground leading-relaxed text-justify mt-8">
                As your trusted partner, our goal is to create inspired customer experiences through
                our services to you and your customers. We build our solutions around your client's
                bespoke needs, delivering a professional outsourced customer service solution built
                upon a partnership approach.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                We develop all our processes keeping in mind the core needs and expectations of our
                clients to ensure the reduction of costs, increased revenues, optimization of
                workflow and reliable infrastructure.
              </p>
              <div className="bg-accent-soft/50 rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors duration-300">
                <p className="text-foreground font-medium text-justify italic">
                  "As our client, you can look forward to a proactive and innovative BPO partner in
                  ISurfGlobal, where exceptional customer service, innovation and continuous
                  improvement are entrenched philosophies."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Now more than ever, businesses face the pressures of shrinking budgets and
                increasing demands. More importance has to be placed and money spent on marketing
                efforts to keep things afloat. With competition rising, businesses also need to
                focus on what will keep the customer satisfied. ISurfGlobal understands this and can
                help you balance all these demands.
              </p>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="my-[70px] py-5 md:py-16 bg-accent-soft/30">
        <div className="container-page">
          <ScrollReveal direction="up" threshold={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
              <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
                Obsessed by Commitment, grown by performance and now aiming to be Global Leader.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe2,
                title: "Global Mindset",
                desc: "Serving clients across industries from our Lagos HQ with a global perspective.",
              },
              {
                icon: Users,
                title: "Multilingual Team",
                desc: "Native speakers in English, Yoruba, Igbo and Hausa for effective customer communication.",
              },
              {
                icon: Target,
                title: "Mission-Driven",
                desc: "Streamline operations, enhance efficiency, and drive growth for every client.",
              },
              {
                icon: Heart,
                title: "Partnership Approach",
                desc: "Solutions built around each client's bespoke needs with a partnership philosophy.",
              },
            ].map((v, index) => (
              <ScrollReveal key={v.title} direction="up" delay={index * 100} threshold={0.1}>
                <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="my-[70px] py-5 md:py-16 bg-background">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <ScrollReveal direction="left" threshold={0.1}>
              <div className="flex flex-col gap-4">
                <div className="order-2 md:order-none inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit">
                  <Target className="size-3.5" /> Our Mission
                </div>
                <h3 className="order-3 md:order-none text-2xl font-bold">
                  Delivering service excellence and great customer experience
                </h3>
                <div className="order-1 md:order-none rounded-2xl overflow-hidden shadow-card group">
                  <img
                    src={mission}
                    alt="ISurfGlobal mission"
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="order-4 md:order-none text-muted-foreground leading-relaxed text-justify">
                  ISurf Global is passionate about delivering service excellence and great customer
                  experience. We create innovative solutions, which deliver compelling outsourcing
                  services, creating value for shareholders, clients and employees, whilst
                  maintaining a broad commitment to the environment and society.
                </p>
                <ul className="order-5 md:order-none space-y-2">
                  <li className="flex items-start gap-2 group">
                    <CheckCircle className="size-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">
                      To offer the most comprehensive and highest quality data customer experience.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <CheckCircle className="size-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">
                      We create innovative solutions, which deliver compelling outsourcing services.
                    </span>
                  </li>
                </ul>
                <div className="order-6 md:order-none bg-success/10 border border-success/20 rounded-lg p-4 w-fit hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm font-semibold text-success">
                    The success level of our service delivery has been 99.95%
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal direction="right" delay={200} threshold={0.1}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  <Globe2 className="size-3.5" /> Our Vision
                </div>
                <h3 className="text-2xl font-bold">Obsessed by Commitment, grown by performance</h3>
                <div className="rounded-2xl overflow-hidden shadow-card group">
                  <img
                    src={vision}
                    alt="ISurf Global vision"
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  A Wish! A Hope! A Dream! This is where all good things start. Hence, the start of
                  ISurfGlobal, a small group of young and enthusiastic professionals with a strong
                  desire to stand apart and to earn recognition for positive and creative work.
                </p>
                <div className="bg-accent-soft/50 rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300">
                  <p className="text-foreground font-medium italic">
                    "Aiming to be a Global Leader"
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="my-[70px] py-5 md:py-16 bg-primary text-primary-foreground">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Monitor, value: "20+", label: "Systems" },
              { icon: ChevronRight, value: "40+", label: "Systems capacity" },
              { icon: Server, value: "20+", label: "Operators" },
              { icon: Users, value: "1+", label: "Shift" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} direction="scale" delay={index * 150} threshold={0.1}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80 mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="my-[70px] py-5 md:py-16 bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <ScrollReveal direction="up" threshold={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  <Award className="size-3.5" /> Our Commitment
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={100} threshold={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Our Commitment to Excellence in BPO Services
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200} threshold={0.1}>
                <p className="text-muted-foreground text-justify">
                  We provide products and services that can be purchased by individuals and other
                  companies. Businesses range in size from small to large and operate in many
                  different industries.
                </p>
              </ScrollReveal>
              <div className="space-y-4">
                {[
                  {
                    icon: CalendarCheck,
                    title: "Timely delivery",
                    desc: "Timely delivery is a condition precedent to acceptance of Shares for purchase pursuant to the Offer and to payment of the purchase amount.",
                  },
                  {
                    icon: BarChart3,
                    title: "End-to-End Business Solutions",
                    desc: "We specialize in delivering top-tier BPO solutions, offering a wide range of services tailored to meet the needs of businesses across industries.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Complete consultancy for database creation",
                    desc: "A database consultant is a skilled computer professional responsible for maintaining computer database management and information systems.",
                  },
                  {
                    icon: Smile,
                    title: "Excellent customer care/support",
                    desc: "Our customer support teams provide 24/7 assistance, ensuring a seamless experience through professional, responsive, and knowledgeable service.",
                  },
                ].map((item, index) => (
                  <ScrollReveal
                    key={item.title}
                    direction="left"
                    delay={index * 100}
                    threshold={0.1}
                  >
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-accent-soft/30 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                      <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal
              direction="right"
              delay={200}
              threshold={0.1}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-card group h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="ISurfGlobal team collaborating"
                  className="w-full h-full lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Achieve Excellence */}
      <section className="my-8 md:my-[70px] py-5 md:py-16 bg-accent-soft/30">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" threshold={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-card order-2 lg:order-1 group h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="ISurf Global team working"
                  className="w-full h-full lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <div className="space-y-6 order-1 lg:order-2">
              <ScrollReveal direction="up" threshold={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" /> Our Process
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={100} threshold={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  We try to achieve this through
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200} threshold={0.1}>
                <p className="text-muted-foreground">
                  You might find that although you're doing all the heavy lifting, there is
                  satisfaction in a job well done.
                </p>
              </ScrollReveal>
              <div className="space-y-4">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Understanding the requirements",
                    desc: "At the very outset we try to understand the client's requirements completely and start working towards fulfilling them.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Work / Testing",
                    desc: "Before we begin full production for a project, we undertake tests to ensure that the final results will be exactly what the customer wants.",
                  },
                  {
                    icon: Users,
                    title: "Training",
                    desc: "We constantly provide training to our employees with a view to achieving high accuracy.",
                  },
                ].map((item, index) => (
                  <ScrollReveal
                    key={item.title}
                    direction="right"
                    delay={index * 100}
                    threshold={0.1}
                  >
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                      <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-8 md:my-[70px] py-5 md:py-16 bg-background">
        <div className="container-page">
          <ScrollReveal direction="up" threshold={0.1}>
            <div className="rounded-3xl bg-gradient-to-br from-primary to-brand-700 text-white p-10 md:p-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_50%_50%,white,transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
                  Ready to work with a proactive BPO partner?
                </h2>
                <p className="text-white/80 mt-4 max-w-xl mx-auto">
                  Let's discuss how ISurfGlobal can help your business thrive with exceptional
                  customer service and innovative solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg group/btn"
                  >
                    Get in touch{" "}
                    <ChevronRight className="size-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Explore our services
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  ),
});

// Video Player Component with animations
function VideoPlayer({ videoSrc }: { videoSrc: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-10 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-900/5 via-primary/5 to-brand-700/5 border border-border p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
      <div className="aspect-video rounded-xl overflow-hidden bg-black/5 relative group">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          playsInline
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="size-20 rounded-full bg-primary/90 text-white grid place-items-center hover:bg-primary transition-all duration-300 group/btn hover:scale-110 active:scale-95"
            >
              <Play className="size-8 ml-1 group-hover/btn:scale-110 transition-transform duration-300" />
            </button>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-6 text-white pointer-events-none">
          <p className="text-sm font-medium">Watch our story</p>
          <p className="text-xs text-white/70">Learn more about ISurfGlobal</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4 text-center">
        Watch the video to learn more about our journey and commitment to excellence.
      </p>
    </div>
  );
}
