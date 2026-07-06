import { ArrowRight, Check, Sparkles } from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface MarketingFeature {
  icon?: LucideIcon;
  title: string;
  desc: string;
}

export interface MarketingFaq {
  q: string;
  a: string;
}

export interface MarketingPageProps {
  // Hero Section
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  heroImage?: string; // Optional hero background image
  heroImageAlt?: string; // Alt text for the hero image
  heroImagePosition?: string; // Object position for the hero image

  // Stats Section
  stats?: { value: string; label: string }[];

  // Write-up Section
  writeUpTitle?: string;
  writeUpDescription?: string;
  writeUpContent?: string[];
  writeUpHighlights?: { icon: LucideIcon; label: string }[];

  // Benefits Section
  benefitsTitle?: string;
  benefitsDescription?: string;
  benefits?: MarketingFeature[];

  // FAQ Section
  faqs?: MarketingFaq[];

  // CTA Section
  ctaTitle?: string;
  ctaDescription?: string;
}

export function MarketingPage({
  // Hero
  eyebrow = "ISurfGlobal",
  title,
  description,
  bullets = [],
  heroImage,
  heroImageAlt = "Hero background",
  heroImagePosition = "center 40%", // Default fallback

  // Stats
  stats = [],

  // Write-up
  writeUpTitle = "Understanding Our Services",
  writeUpDescription = "We help you navigate the complexities.",
  writeUpContent = [],
  writeUpHighlights = [],

  // Benefits
  benefitsTitle = "Key Benefits",
  benefitsDescription = "We deliver exceptional value.",
  benefits = [],

  // FAQ
  faqs = [],

  // CTA
  ctaTitle = "Ready to get started?",
  ctaDescription = "Book a demo and see how ISurfGlobal can support your team.",
}: MarketingPageProps) {
  return (
    <>
      {/* 1. HERO: Hook the visitor with the value proposition */}
      <section className="relative overflow-hidden text-white">
        {/* Background */}
        <div className="absolute inset-0">
          {heroImage ? (
            <>
              <img
                src={heroImage}
                alt={heroImageAlt}
                style={{ objectPosition: heroImagePosition }}
                className="size-full object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/35" />
            </>
          ) : (
            // Fallback gradient background
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-primary to-brand-700" />
              <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_20%,white,transparent_45%),radial-gradient(circle_at_85%_85%,white,transparent_40%)]" />
            </>
          )}
        </div>

        {/* Content - panoramic height */}
        <div className="container-page relative z-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/20">
              <Sparkles className="size-3.5" /> {eyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg text-white/90 max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Book a demo <ArrowRight className="size-4" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
          {bullets.length > 0 && (
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-6 space-y-3">
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                  What's included
                </p>
                <ul className="space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <Check className="size-4 mt-0.5 text-accent-soft shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. STATS: Show credibility with numbers */}
      {stats.length > 0 && (
        <section className="border-b border-border bg-background">
          <div className="container-page py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. WRITE-UP: Educate on the "why" and "how" */}
      {writeUpContent.length > 0 && (
        <section className="py-16 bg-background border-y border-border">
          <div className="container-page">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                  <Sparkles className="size-3.5" /> Understanding {eyebrow}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{writeUpTitle}</h2>
                <p className="text-muted-foreground mt-3 text-lg text-justify">
                  {writeUpDescription}
                </p>
              </div>

              <div className="mt-4 space-y-6 text-muted-foreground leading-relaxed">
                {writeUpContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {writeUpHighlights.length > 0 && (
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  {writeUpHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-accent-soft/50 rounded-xl p-4"
                    >
                      <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                        <item.icon className="size-5" />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. BENEFITS: Reinforce the value */}
      {benefits.length > 0 && (
        <section className="py-16 bg-accent-soft/30">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{benefitsTitle}</h2>
              <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
                {benefitsDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-border bg-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {benefit.icon && (
                    <div className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <benefit.icon className="size-6" />
                    </div>
                  )}
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ: Address objections */}
      {faqs.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container-page max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-2">
                Everything you need to know about our services.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors"
                >
                  <summary className="cursor-pointer font-semibold flex items-center justify-between">
                    <span className="pr-4">{f.q}</span>
                    <span className="ml-4 text-primary group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 pt-3 border-t border-border">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CTA: Drive action */}
      <section className="py-16 bg-accent-soft/30">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-brand-700 text-white p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_50%_50%,white,transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
                {ctaTitle}
              </h2>
              <p className="text-white/80 mt-4 max-w-xl mx-auto">{ctaDescription}</p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors shadow-lg"
                >
                  Book a demo <ArrowRight className="size-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
