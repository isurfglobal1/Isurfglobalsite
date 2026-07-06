import {
  AlertCircle,
  Building2,
  Check,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useRef, useState } from "react";

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
      <section className="py-16 lg:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-sm font-semibold text-primary">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Let's talk</h1>
            <p className="text-muted-foreground mt-3 max-w-md">
              Tell us about your team and what you're hoping to achieve. We'll get back within one
              business day.
            </p>

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
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-accent-soft text-primary grid place-items-center shrink-0">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    {c.link ? (
                      <button
                        onClick={c.onClick}
                        className="font-medium hover:text-primary transition-colors text-left"
                      >
                        {c.value}
                      </button>
                    ) : (
                      <div className="font-medium">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            {sent ? (
              // Success State
              <div className="text-center py-12">
                <div className="size-12 rounded-full bg-accent-soft text-primary grid place-items-center mx-auto">
                  <Check className="size-6" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight mt-4">
                  Thanks — we'll be in touch!
                </h2>
                <p className="text-muted-foreground mt-2">
                  A member of our team will reach out within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-primary font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              // Form State
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Get a personalized demo</h2>

                {submitError && (
                  <div className="flex items-start gap-3 bg-error/10 border border-error/20 rounded-lg p-3">
                    <AlertCircle className="size-5 text-error shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-error">Something went wrong</p>
                      <p className="text-xs text-error/80 mt-0.5">{submitError}</p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    icon={<User className="size-4 text-muted-foreground" />}
                    required
                  />
                  <Field
                    label="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    icon={<User className="size-4 text-muted-foreground" />}
                    required
                  />
                </div>

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

                <Field
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                  icon={<Building2 className="size-4 text-muted-foreground" />}
                  required
                />

                <div>
                  <label className="text-sm font-medium">Team size</label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                </div>

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
                      } bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  {errors.message && <p className="text-xs text-error mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-brand-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By clicking send, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// Field Component
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
    <div>
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
          } bg-background ${icon ? "pl-9" : "pl-3"} pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors`}
        />
      </div>
      {error && <p className="text-xs text-error mt-1">{error}</p>}
    </div>
  );
}
