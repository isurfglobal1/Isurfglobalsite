import {
  AlertCircle,
  Building2,
  Check,
  ChevronRight,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ISurfGlobal" },
      {
        name: "description",
        content: "Get in touch with ISurfGlobal. Talk to sales, request a demo, or get support.",
      },
    ],
  }),
  component: Contact,
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
}

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

function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    teamSize: "1-10",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission - creates a mailto link
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Build the email body
      const subject = `Contact Form: ${formData.firstName} ${formData.lastName} - ${formData.company}`;
      const body = `
        New Contact Form Submission

        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Company: ${formData.company}
        Team Size: ${formData.teamSize}

        Message:
        ${formData.message}

        ---
        This message was sent from the ISurfGlobal contact form.
      `;

      // Create mailto link
      const mailtoLink = `mailto:info@isurfglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Show success state
      setSent(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        teamSize: "1-10",
        message: "",
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(
        "Failed to send message. Please try again or email us directly at info@isurfglobal.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle direct email click
  const handleDirectEmail = () => {
    window.location.href = "mailto:info@isurfglobal.com";
  };

  return (
    <PageLayout>
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-page grid lg:grid-cols-2 gap-12 relative">
          {/* Left Column - Contact Info */}
          <div>
            <ScrollReveal direction="fade" threshold={0.1}>
              <p className="text-sm font-semibold text-primary">Contact</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100} threshold={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Let's talk</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200} threshold={0.1}>
              <p className="text-muted-foreground mt-3 max-w-md">
                Tell us about your team and what you're hoping to achieve. We'll get back within one
                business day.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@isurfglobal.com",
                  onClick: handleDirectEmail,
                  link: true,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+234 916 766 0003 · +234 812 958 0915",
                  link: true,
                  onClick: () => (window.location.href = "tel:+2349167660003"),
                },
                {
                  icon: MapPin,
                  label: "HQ",
                  value:
                    "Suite 17, 2nd Floor, Petrocam Filling Station Plaza, Elf Bus Stop, Lekki, Lagos, Nigeria",
                  link: false,
                },
              ].map((c, index) => (
                <ScrollReveal
                  key={c.label}
                  direction="left"
                  delay={300 + index * 100}
                  threshold={0.1}
                >
                  <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-accent-soft/50 transition-all duration-300">
                    <div className="size-10 rounded-lg bg-accent-soft text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <c.icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      {c.link ? (
                        <button
                          onClick={c.onClick}
                          className="font-medium hover:text-primary transition-colors text-left group-hover:text-primary"
                        >
                          {c.value}
                        </button>
                      ) : (
                        <div className="font-medium">{c.value}</div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Quick response badge */}
            <ScrollReveal direction="up" delay={600} threshold={0.1}>
              <div className="mt-8 inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2">
                <div className="size-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-success">
                  Typically responds within 24 hours
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Contact Form */}
          <ScrollReveal direction="right" delay={100} threshold={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-xl transition-shadow duration-500">
              {sent ? (
                // Success State
                <div className="text-center py-12">
                  <ScrollReveal direction="scale" threshold={0.1}>
                    <div className="size-12 rounded-full bg-accent-soft text-primary grid place-items-center mx-auto">
                      <Check className="size-6" />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={100} threshold={0.1}>
                    <h2 className="text-2xl font-bold tracking-tight mt-4">
                      Thanks — we'll be in touch!
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={200} threshold={0.1}>
                    <p className="text-muted-foreground mt-2">
                      A member of our team will reach out within one business day.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={300} threshold={0.1}>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-primary font-medium hover:underline inline-flex items-center gap-1 group"
                    >
                      Send another message{" "}
                      <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </ScrollReveal>
                </div>
              ) : (
                // Form State
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <ScrollReveal direction="up" threshold={0.1}>
                    <h2 className="text-2xl font-bold tracking-tight">Get a personalized demo</h2>
                  </ScrollReveal>

                  {submitError && (
                    <div className="flex items-start gap-3 bg-error/10 border border-error/20 rounded-lg p-3 animate-fade-in-up">
                      <AlertCircle className="size-5 text-error shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-error">Something went wrong</p>
                        <p className="text-xs text-error/80 mt-0.5">{submitError}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <ScrollReveal direction="up" delay={50} threshold={0.1}>
                      <Field
                        label="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        icon={<User className="size-4 text-muted-foreground" />}
                        required
                      />
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={100} threshold={0.1}>
                      <Field
                        label="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        icon={<User className="size-4 text-muted-foreground" />}
                        required
                      />
                    </ScrollReveal>
                  </div>

                  <ScrollReveal direction="up" delay={150} threshold={0.1}>
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      icon={<Mail className="size-4 text-muted-foreground" />}
                      required
                    />
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={200} threshold={0.1}>
                    <Field
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      error={errors.company}
                      icon={<Building2 className="size-4 text-muted-foreground" />}
                      required
                    />
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={250} threshold={0.1}>
                    <div>
                      <label className="text-sm font-medium">Team size</label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 focus:border-primary"
                      >
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>201-1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={300} threshold={0.1}>
                    <div>
                      <label className="text-sm font-medium">How can we help?</label>
                      <div className="relative mt-1.5">
                        <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full rounded-lg border ${
                            errors.message ? "border-error" : "border-input"
                          } bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all duration-300 focus:border-primary`}
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      {errors.message && (
                        <p className="text-xs text-error mt-1">{errors.message}</p>
                      )}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={350} threshold={0.1}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-brand-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Send message
                        </>
                      )}
                    </button>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={400} threshold={0.1}>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By clicking send, you agree to our{" "}
                      <a
                        href="#"
                        className="text-primary hover:underline transition-colors duration-300"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </ScrollReveal>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

// Field Component with animations
function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  error,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="group">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <div className="relative mt-1.5">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full rounded-lg border ${
            error ? "border-error" : "border-input"
          } bg-background ${icon ? "pl-9" : "pl-3"} pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 focus:border-primary group-hover:border-primary/50`}
        />
      </div>
      {error && <p className="text-xs text-error mt-1 animate-fade-in-up">{error}</p>}
    </div>
  );
}
