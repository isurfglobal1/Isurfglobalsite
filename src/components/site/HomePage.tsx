import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  Globe2,
  GraduationCap,
  Headphones,
  Layout,
  Loader2,
  MapPin,
  Monitor,
  Package,
  Shield,
  ShieldIcon,
  Sparkles,
  Star,
  Truck,
  UserCog,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import African_Steel from "@/assets/clienteles/African-Steel.jpg";
import Bestfin from "@/assets/clienteles/BESTFIN.jpeg";
import Blueridge from "@/assets/clienteles/blueridge.jpeg";
import Cadbury from "@/assets/clienteles/Cadbury.jpeg";
import Egatee from "@/assets/clienteles/EGATEE.png";
import FairMoney from "@/assets/clienteles/Fairmoney.png";
import MRS from "@/assets/clienteles/MRS.png";
import Opay from "@/assets/clienteles/OPAY.png";
import Palmpay from "@/assets/clienteles/palmpay.jpeg";
import PHEDC from "@/assets/clienteles/PHEDC.jpg";
import PremiumPension from "@/assets/clienteles/premium pension.jpeg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const services = [
  {
    icon: Users,
    title: "HR Outsourcing",
    desc: "Simplify your HR processes and focus on growth. From talent acquisition to compliance, we handle it all.",
    href: "/solutions/hr-outsourcing",
  },
  {
    icon: Monitor,
    title: "IT Services & Outsourcing",
    desc: "Comprehensive IT solutions including Contact Center infrastructure, CRM implementation, procurement, and custom software development to power your business.",
    href: "/solutions/it-services",
  },
  {
    icon: Briefcase,
    title: "Back-Office Services",
    desc: "Streamline operations with reliable back-office support so you can focus on what matters most.",
    href: "/solutions/back-office",
  },
  {
    icon: Headphones,
    title: "Contact Center",
    desc: "Boost customer satisfaction with 24/7 professional support and seamless communication across all channels.",
    href: "/solutions/call-center",
  },
  {
    icon: Building2,
    title: "Workspace Rental",
    desc: "Well-equipped, comfortable, and secure environments tailored to support your operations.",
    href: "/solutions/workspace-rental",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Expert-led L&D programs from contact center operations to corporate leadership for high-performing teams.",
    href: "/solutions/training",
  },
];

const clientLogos = [
  { name: "BESTFIN", logo: Bestfin },
  { name: "Blueridge", logo: Blueridge },
  { name: "Cadbury", logo: Cadbury },
  { name: "EGATEE", logo: Egatee },
  { name: "FairMoney", logo: FairMoney },
  { name: "MRS", logo: MRS },
  { name: "OPAY", logo: Opay },
  { name: "Palmpay", logo: Palmpay },
  { name: "Premium Pension", logo: PremiumPension },
  { name: "African Steel", logo: African_Steel },
  { name: "PHED", logo: PHEDC },
];

const metrics = [
  { value: 99.9, suffix: "%", label: "BPO success rate", decimals: 1 },
  { value: 24, suffix: "/7", label: "Customer support coverage" },
  { value: 4, suffix: "", label: "Countries served" },
];

const testimonials = [
  {
    quote:
      "ISurfGlobal transformed our back-office operations. The team is responsive, accurate, and feels like an extension of our own.",
    name: "Amelia Carter",
    role: "COO, Northwind Logistics",
    img: t1,
  },
  {
    quote:
      "Their compliance team helped us scale into three new regions without missing a beat. The expertise is unmatched.",
    name: "Daniel Okafor",
    role: "VP Operations, Acme Co.",
    img: t2,
  },
  {
    quote:
      "From recruitment to L&D, ISurfGlobal delivers consistently. Our employee onboarding time dropped by 60%.",
    name: "Priya Raman",
    role: "Director of HR, Globex",
    img: t3,
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);
  return <span ref={ref}>{n.toFixed(decimals)}</span>;
}

export function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const formRef = useRef<HTMLFormElement>(null);

  // const useCases = [
  //   {
  //     label: "Hire anywhere",
  //     icon: Globe2,
  //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
  //     description: "Access global talent without borders",
  //   },
  //   {
  //     label: "Run payroll",
  //     icon: Wallet,
  //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  //     description: "Process global payroll in minutes",
  //   },
  //   {
  //     label: "Workspace Rental",
  //     icon: Building2,
  //     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  //     description: "Premium workspace solutions",
  //   },
  //   {
  //     label: "Manage HR & people",
  //     icon: UserCog,
  //     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
  //     description: "Centralize workforce management",
  //   },
  //   {
  //     label: "Procurement",
  //     icon: Package,
  //     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
  //     description: "Get equipment anywhere",
  //   },
  // ];

  const useCases = [
    {
      label: "IT Services",
      icon: Monitor,
      image: "/it-services.webp",
      description: "Comprehensive IT solutions, software development, and 3CX contact center",
    },
    {
      label: "HR Outsourcing",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
      description: "Talent acquisition, payroll, compliance, and people operations",
    },
    {
      label: "Procurement",
      icon: Package,
      image: "/procurement.webp",
      description: "Streamlined procurement and supply chain management",
    },
    {
      label: "Workspace Rental",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      description: "Premium workspace solutions for your team",
    },
    {
      label: "L&D",
      icon: Headphones,
      image: "/l&d.webp",
      description: "3CX-powered omnichannel customer support",
    },
  ];

  const [selected, setSelected] = useState("Hire anywhere");
  const activeUseCase = useCases.find((u) => u.label === selected) || useCases[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !company || !message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const subject = `Demo Request: ${name} - ${company}`;
      const body = `
      New Demo Request

      Name: ${name}
      Email: ${email}
      Company: ${company}

      Message:
      ${message}

      ---
      This message was sent from the ISurfGlobal demo request form.
    `;

      const mailtoLink = `mailto:info@isurfglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      setSubmitStatus({
        type: "success",
        message: "Thanks! We'll be in touch shortly.",
      });

      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly at info@isurfglobal.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the right content for each selection
  const getRightContent = (label: string) => {
    switch (label) {
      case "Hire anywhere":
        return {
          floatingCards: [
            { icon: Globe2, label: "Global Talent", sub: "150+ Countries" },
            { icon: Users, label: "Active Candidates", sub: "5,000+" },
            { icon: Shield, label: "Compliant", sub: "100% Local" },
          ],
          stat: "150+ Countries",
          badge: "Global Network",
          color: "from-blue-500/20 to-blue-600/10",
          testimonial: {
            quote: '"ISurfGlobal makes global hiring effortless."',
            author: "Amelia Carter, COO",
          },
          emoji: "🌐",
          title: "Global Talent",
        };
      case "Run payroll":
        return {
          floatingCards: [
            { icon: Wallet, label: "Total Payroll", sub: "$360,450" },
            { icon: CreditCard, label: "Currencies", sub: "42 Active" },
            { icon: Clock, label: "Processing", sub: "2 mins ago" },
          ],
          stat: "$360,450",
          badge: "Processing",
          color: "from-green-500/20 to-green-600/10",
          testimonial: {
            quote: '"Payroll runs like clockwork."',
            author: "Daniel Okafor, VP Ops",
          },
          emoji: "💰",
          title: "Payroll Complete",
        };
      case "Workspace Rental":
        return {
          floatingCards: [
            { icon: Layout, label: "Flexible Leases", sub: "Short & Long-term" },
            { icon: Wifi, label: "Fully Equipped", sub: "High-speed Internet" },
            { icon: ShieldIcon, label: "24/7 Security", sub: "Safe & Secure" },
          ],
          stat: "1,000 sq ft",
          badge: "Premium Spaces",
          color: "from-amber-500/20 to-amber-600/10",
          testimonial: {
            quote: '"The workspace solutions are top-notch."',
            author: "James Okafor, CEO",
          },
          emoji: "🏢",
          title: "Workspace Solutions",
        };
      case "Manage HR & people":
        return {
          floatingCards: [
            { icon: Users, label: "Active Employees", sub: "1,284" },
            { icon: UserCog, label: "Departments", sub: "12" },
            { icon: Star, label: "Engagement", sub: "4.8/5" },
          ],
          stat: "1,284 Active",
          badge: "Live",
          color: "from-orange-500/20 to-orange-600/10",
          testimonial: {
            quote: '"HR management is now seamless."',
            author: "James Chen, CHRO",
          },
          emoji: "👥",
          title: "Team Success",
        };
      case "Ship equipment":
        return {
          floatingCards: [
            { icon: Package, label: "Devices Shipped", sub: "3,847" },
            { icon: Truck, label: "Delivery Time", sub: "3-5 Days" },
            { icon: MapPin, label: "Tracking", sub: "Live" },
          ],
          stat: "3,847 Shipped",
          badge: "In Transit",
          color: "from-cyan-500/20 to-cyan-600/10",
          testimonial: {
            quote: '"Equipment arrives on time, every time."',
            author: "Sarah Johnson, Operations",
          },
          emoji: "📦",
          title: "Equipment Delivered",
        };
      default:
        return {
          floatingCards: [
            { icon: Globe2, label: "Global Talent", sub: "150+ Countries" },
            { icon: Users, label: "Active Candidates", sub: "5,000+" },
            { icon: Shield, label: "Compliant", sub: "100% Local" },
          ],
          stat: "150+ Countries",
          badge: "Global Network",
          color: "from-blue-500/20 to-blue-600/10",
          testimonial: {
            quote: '"ISurfGlobal makes global hiring effortless."',
            author: "Amelia Carter, COO",
          },
          emoji: "🌐",
          title: "Global Talent",
        };
    }
  };

  const rightContent = getRightContent(selected);

  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden bg-background lg:h-[105dvh] min-h-[500px] flex flex-col">
        <div className="flex-1 container-page py-4 md:py-6 lg:py-8 grid lg:grid-cols-2 gap-4 md:gap-6 items-stretch h-full">
          {/* LEFT: dark gradient panel with select options - Full height */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 via-primary to-brand-900 text-white p-6 md:p-8 lg:p-12 flex flex-col justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 h-full">
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_10%,white,transparent_45%),radial-gradient(circle_at_85%_85%,white,transparent_40%)]" />
            <div className="relative space-y-4 md:space-y-6 animate-float-in">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 pl-1.5 pr-3 py-1.5 text-xs font-medium hover:bg-white/15 transition-colors w-fit"
              >
                <span className="size-5 md:size-6 rounded-full bg-white grid place-items-center text-primary">
                  <Sparkles className="size-3 md:size-3.5" />
                </span>
                Skip the sales call. Start onboarding now.
                <ChevronRight className="size-3 md:size-3.5" />
              </a>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-[1.05] tracking-tight">
                Hire, manage, pay, &amp; equip anyone, anywhere.
              </h1>

              <div className="space-y-3">
                <p className="text-xs md:text-sm text-white/80">
                  What would you like to do with ISurfSGlobal?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 md:gap-2">
                  {useCases.map(({ label, icon: Icon }) => {
                    const active = selected === label;
                    return (
                      <button
                        key={label}
                        onClick={() => setSelected(label)}
                        className={`group inline-flex items-center gap-1.5 md:gap-2 rounded-xl md:rounded-2xl border px-2.5 py-2 md:px-3 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium transition-all ${
                          active
                            ? "bg-white/15 border-white/50 shadow-soft"
                            : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30"
                        }`}
                      >
                        <span
                          className={`size-3.5 sm:size-4 md:size-5 rounded-md border grid place-items-center transition-colors text-left ${
                            active ? "bg-white border-white text-primary" : "border-white/40"
                          }`}
                        >
                          {active ? (
                            <Check className="size-2.5 sm:size-3 md:size-3.5" strokeWidth={3} />
                          ) : (
                            <Icon className="size-2.5 sm:size-3 md:size-3.5" />
                          )}
                        </span>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <a
                href="#demo"
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] gap-2 rounded-full bg-white text-foreground font-semibold px-5 py-3 md:px-6 md:py-3.5 text-sm hover:bg-accent-soft transition-colors shadow-soft"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* RIGHT: Dynamic content based on selection - Full height */}
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 h-full">
            <img
              src={activeUseCase.image}
              alt={selected}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top stat card - changes based on selection */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-background/95 backdrop-blur text-foreground rounded-xl md:rounded-2xl shadow-card px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 max-w-[160px] sm:max-w-[200px] md:max-w-[260px]">
              <div className="flex items-center justify-between gap-1.5 sm:gap-2 md:gap-3">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-widest text-success uppercase">
                  {rightContent.badge}
                </span>
                <span className="size-3 sm:size-4 md:size-5 rounded-full bg-success grid place-items-center text-white">
                  <Check className="size-2 sm:size-2.5 md:size-3" strokeWidth={4} />
                </span>
              </div>
              <div className="mt-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
                {rightContent.stat}
              </div>
            </div>

            {/* Middle pill cards - changes based on selection */}
            <div className="absolute top-1/2 left-3 sm:left-4 md:left-6 -translate-y-1/2 space-y-1.5 sm:space-y-2 md:space-y-3 hidden sm:block">
              {rightContent.floatingCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 sm:gap-2 bg-background/95 backdrop-blur rounded-full shadow-card pl-1.5 sm:pl-2 pr-2 sm:pr-3 md:pr-4 py-1 sm:py-1.5 md:py-2"
                >
                  <span className="size-4 sm:size-5 md:size-7 rounded-full bg-accent text-primary grid place-items-center">
                    <card.icon className="size-2.5 sm:size-3 md:size-3.5" />
                  </span>
                  <span className="text-[9px] sm:text-xs md:text-sm font-medium text-foreground">
                    {card.label}
                  </span>
                  <span className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground">
                    {card.sub}
                  </span>
                  <ChevronRight className="size-2.5 sm:size-3 md:size-3.5 text-muted-foreground rotate-90" />
                </div>
              ))}
            </div>

            {/* Badge top-right - changes based on selection */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-6 bg-background/95 backdrop-blur text-foreground rounded-xl md:rounded-2xl shadow-card px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 hidden xs:block">
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[9px] sm:text-xs md:text-sm font-semibold">
                <span className="size-4 sm:size-5 md:size-6 rounded-full bg-accent grid place-items-center text-[8px] sm:text-[10px] md:text-xs">
                  {rightContent.emoji}
                </span>
                <span className="hidden xs:inline">{selected}</span>
              </div>
              <div className="mt-0.5 sm:mt-1 inline-flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] md:text-[11px] font-bold text-success border border-success/40 rounded-full px-1.5 sm:px-2 py-0.5">
                <Check className="size-2 sm:size-2.5 md:size-3" /> ACTIVE
              </div>
            </div>

            {/* Testimonial bottom-right - changes based on selection */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-background/95 backdrop-blur text-foreground rounded-xl md:rounded-2xl shadow-card p-2.5 sm:p-4 md:p-5 max-w-[150px] sm:max-w-[200px] md:max-w-[280px]">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[8px] sm:text-[10px] md:text-xs font-semibold mb-0.5 sm:mb-1 md:mb-2">
                <span className="size-3 sm:size-4 md:size-5 rounded-md bg-foreground grid place-items-center text-background">
                  <Star className="size-2 sm:size-2.5 md:size-3" />
                </span>
                <span className="hidden xs:inline">{rightContent.title}</span>
              </div>
              <p className="text-[9px] sm:text-xs md:text-sm font-semibold leading-snug">
                {rightContent.testimonial.quote}
              </p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5 sm:mt-1">
                — {rightContent.testimonial.author}
              </p>
            </div>
          </div>
        </div>

        {/* Logo marquee - at bottom of hero */}
        <div className="relative border-y border-border bg-accent shrink-0">
          <div className="container-page py-3 sm:py-4 md:py-6">
            <p className="text-center text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1.5 sm:mb-2 md:mb-4">
              Trusted by growing businesses across Nigeria and beyond
            </p>
            <div className="overflow-hidden">
              <div className="flex gap-8 sm:gap-10 md:gap-12 animate-marquee whitespace-nowrap items-center">
                {[...clientLogos, ...clientLogos].map((client, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                    />
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground/40 hidden sm:inline">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-accent">
        <div className="container-page py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              <span className="h-px w-8 bg-primary" /> What we do
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Accomplish more in less time
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive support across the enterprise including HR outsourcing, IT solutions,
              procurement, screenings and facility services, all under one roof.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl bg-background border border-border p-7 hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="size-12 rounded-xl bg-accent text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EFFICIENCY / PROCESS */}
      <section className="bg-background">
        <div className="container-page py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              <span className="h-px w-8 bg-primary" /> Our process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">How we deliver excellence</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From first conversation to ongoing operations, every step is designed to meet your
              requirements with accuracy, format, and deadline in mind.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Understanding requirements",
                  desc: "We start by mapping your goals completely, then build toward them.",
                },
                {
                  title: "Testing & validation",
                  desc: "Pilot runs ensure final results exactly match what you expect.",
                },
                {
                  title: "Continuous L&D",
                  desc: "Our team upskills continuously through ongoing learning and development to maintain industry-leading accuracy.",
                },
                {
                  title: "Quality assurance",
                  desc: "Finished work meets your standards for accuracy, format, and deadlines.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <div className="shrink-0 size-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{step.title}</div>
                    <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-accent to-background border border-border p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Operations Dashboard</div>
                <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success font-medium">
                  Live
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { l: "Active tickets", v: "1,284" },
                  { l: "Avg. handling", v: "2m 14s" },
                  { l: "CSAT score", v: "4.9 / 5" },
                  { l: "First-call resolution", v: "92%" },
                ].map((m) => (
                  <div key={m.l} className="rounded-xl bg-background border border-border p-4">
                    <div className="text-xs text-muted-foreground">{m.l}</div>
                    <div className="text-xl font-bold mt-1">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-background border border-border p-4">
                <div className="text-xs text-muted-foreground mb-3">Weekly throughput</div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 50, 78, 60, 90, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-primary/80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background">
        <div className="container-page py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              <span className="h-px w-8 bg-primary" /> Customer stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Hear it from the teams we serve</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Operations leaders trust ISurfGlobal to keep their global businesses running smoothly.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-background p-7 hover:shadow-card transition-shadow"
              >
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted globally. Delivered locally.</h2>
            <p className="mt-3 text-white/80">
              Numbers that reflect a decade of consistent service.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="text-center border-l border-white/15 first:border-l-0 lg:px-4"
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  <Counter value={m.value} decimals={m.decimals || 0} />
                  {m.suffix}
                </div>
                <div className="mt-2 text-sm text-white/80">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-accent">
        <div className="container-page py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Why teams choose iSurf Global</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We combine HR, IT, and workspace expertise to create lasting solutions for your
              business.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Users,
                title: "HR Excellence",
                desc: "From talent acquisition to compliance, we handle your entire HR lifecycle with precision and care.",
              },
              {
                icon: Monitor,
                title: "IT Solutions",
                desc: "Comprehensive IT services including CRM, call center infrastructure, procurement, and custom software development.",
              },
              {
                icon: Building2,
                title: "Workspace Solutions",
                desc: "Fully equipped, flexible workspaces with high-speed internet, modern amenities, and 24/7 security.",
              },
              {
                icon: GraduationCap,
                title: "Learning & Development",
                desc: "Expert-led L&D programs that develop high-performing teams across call center, HR, and corporate functions.",
              },
            ].map((w) => (
              <div
                key={w.title}
                className="rounded-2xl bg-background border border-border p-6 hover:shadow-card transition-shadow"
              >
                <div className="size-11 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                  <w.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="bg-background">
        <div className="container-page py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-brand-600 to-brand-700 text-white p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to streamline your operations?
              </h2>
              <p className="mt-3 text-white/85 max-w-md">
                Talk to our team about a tailored BPO plan for your business. No setup fees, no
                long-term lock-in.
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative grid gap-3 bg-background text-foreground p-6 rounded-2xl shadow-card"
            >
              {/* Status Messages */}
              {submitStatus.type === "success" && (
                <div className="flex items-start gap-3 bg-success/10 border border-success/20 rounded-lg p-3">
                  <Check className="size-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-success">Message Sent Successfully!</p>
                    <p className="text-xs text-success/80 mt-0.5">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {submitStatus.type === "error" && (
                <div className="flex items-start gap-3 bg-error/10 border border-error/20 rounded-lg p-3">
                  <AlertCircle className="size-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-error">Something went wrong</p>
                    <p className="text-xs text-error/80 mt-0.5">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <input
                    required
                    name="name"
                    placeholder="Full name"
                    className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Work email"
                    className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <input
                  required
                  name="company"
                  placeholder="Company"
                  className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <textarea
                  required
                  name="message"
                  placeholder="What can we help with?"
                  rows={3}
                  className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 rounded-full bg-primary text-primary-foreground font-semibold px-5 py-3 text-sm hover:bg-brand-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request a demo"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
