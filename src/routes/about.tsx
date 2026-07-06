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
import { useRef, useState } from "react";

// Import assets
import mission from "@/assets/mission.webp";
import aboutUsVideo from "@/assets/video/about-us.mp4";
import vision from "@/assets/vision.webp";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

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
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/20 mb-4">
              <Sparkles className="size-3.5" /> About ISurfGlobal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              A creative BPO partner, headquartered in Lagos
            </h1>
            <p className="text-lg text-white/80 mt-5 max-w-2xl">
              ISurfGlobal is a leading global technology, consulting and outsourcing service
              provider company specializing in customer engagement and improving business
              performance for some of the best brands.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Get in touch <ChevronRight className="size-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                Our services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story with Video */}
      <section className="my-[70px] py-16 bg-background border-b border-border">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                <Sparkles className="size-3.5" /> Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                A Wish! A Hope! A Dream!
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                This is where all good things start. Hence, the start of ISurfGlobal, a small group
                of young and enthusiastic professionals with a strong desire to stand apart and earn
                recognition for positive and creative work.
              </p>
              <p>
                ISurfGlobal is a leading global technology, consulting and outsourcing service
                provider company specializing in customer engagement and improving business
                performance for some of the best brands. We offer an extensive range of business
                solutions to clients with highly-trained staff, state-of-the-art technology and
                trusted cost-cutting methods.
              </p>
              <p>
                Based out of Nigeria with its headquarters in Lagos, we have a dedicated workforce
                comprising native speakers (English, Yoruba, Igbo and Hausa) who can decode the
                needs of customers effectively and provide quick resolutions to their problems.
              </p>
              <p>
                ISurfGlobal manages a wide range of Outsourcing functions, including Customer
                Support, HR Outsourcing, RPO (Recruitment Process Outsourcing), and Payroll
                Processing.
              </p>
            </div>

            {/* Video Section */}
            <VideoPlayer videoSrc={aboutUsVideo} />

            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify mt-8">
              <p>
                As your trusted partner, our goal is to create inspired customer experiences through
                our services to you and your customers. We build our solutions around your client's
                bespoke needs, delivering a professional outsourced customer service solution built
                upon a partnership approach.
              </p>
              <p>
                We develop all our processes keeping in mind the core needs and expectations of our
                clients to ensure the reduction of costs, increased revenues, optimization of
                workflow and reliable infrastructure.
              </p>
              <div className="bg-accent-soft/50 rounded-2xl p-6 border border-border">
                <p className="text-foreground font-medium text-justify italic">
                  "As our client, you can look forward to a proactive and innovative BPO partner in
                  ISurfGlobal, where exceptional customer service, innovation and continuous
                  improvement are entrenched philosophies."
                </p>
              </div>
              <p className="">
                Now more than ever, businesses face the pressures of shrinking budgets and
                increasing demands. More importance has to be placed and money spent on marketing
                efforts to keep things afloat. With competition rising, businesses also need to
                focus on what will keep the customer satisfied. ISurfGlobal understands this and can
                help you balance all these demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="my-[70px] py-16 bg-accent-soft/30">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
              Obsessed by Commitment, grown by performance and now aiming to be Global Leader.
            </p>
          </div>
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
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow"
              >
                <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4">
                  <v.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="my-[70px] py-16 bg-background">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <Target className="size-3.5" /> Our Mission
              </div>
              <h3 className="text-2xl font-bold">
                Delivering service excellence and great customer experience
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={mission}
                  alt="ISurfGlobal mission"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify">
                ISurf Global is passionate about delivering service excellence and great customer
                experience. We create innovative solutions, which deliver compelling outsourcing
                services, creating value for shareholders, clients and employees, whilst maintaining
                a broad commitment to the environment and society.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    To offer the most comprehensive and highest quality data customer experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    We create innovative solutions, which deliver compelling outsourcing services.
                  </span>
                </li>
              </ul>
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 inline-block">
                <p className="text-sm font-semibold text-success">
                  The success level of our service delivery has been 99.95%
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <Globe2 className="size-3.5" /> Our Vision
              </div>
              <h3 className="text-2xl font-bold">Obsessed by Commitment, grown by performance</h3>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={vision}
                  alt="ISurf Global vision"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify">
                A Wish! A Hope! A Dream! This is where all good things start. Hence, the start of
                ISurfGlobal, a small group of young and enthusiastic professionals with a strong
                desire to stand apart and to earn recognition for positive and creative work.
              </p>
              <div className="bg-accent-soft/50 rounded-xl p-6 border border-border">
                <p className="text-foreground font-medium italic">"Aiming to be a Global Leader"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="my-[70px] p-16 bg-primary text-primary-foreground">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Monitor, value: "20+", label: "Systems" },
              { icon: ChevronRight, value: "40+", label: "Systems capacity" },
              { icon: Server, value: "20+", label: "Operators" },
              { icon: Users, value: "1+", label: "Shift" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="my-[70px] py-16 bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <Award className="size-3.5" /> Our Commitment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Commitment to Excellence in BPO Services
              </h2>
              <p className="text-muted-foreground text-justify">
                We provide products and services that can be purchased by individuals and other
                companies. Businesses range in size from small to large and operate in many
                different industries.
              </p>
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
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-accent-soft/30 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="ISurfGlobal team collaborating"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Achieve Excellence */}
      <section className="my-[70px] py-16 bg-accent-soft/30">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="ISurf Global team working"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" /> Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                We try to achieve this through
              </h2>
              <p className="text-muted-foreground">
                You might find that although you're doing all the heavy lifting, there is
                satisfaction in a job well done.
              </p>
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
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-[70px] py-16 bg-background">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-brand-700 text-white p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_50%_50%,white,transparent_60%)]" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors shadow-lg"
                >
                  Get in touch <ChevronRight className="size-4" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  Explore our services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  ),
});

// Video Player Component
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
    <div className="mt-10 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-900/5 via-primary/5 to-brand-700/5 border border-border p-6 md:p-8">
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
              className="size-20 rounded-full bg-primary/90 text-white grid place-items-center hover:bg-primary transition-colors group"
            >
              <Play className="size-8 ml-1 group-hover:scale-110 transition-transform" />
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
