import { Facebook, Globe, Instagram, Linkedin, Twitter, X } from "lucide-react";

import Logo from "@/assets/ISurf_logo.webp";
import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Services",
    links: [
      { label: "HR Outsourcing", href: "/solutions/hr-outsourcing" },
      { label: "Back-Office", href: "/solutions/back-office" },
      { label: "Background Check", href: "/solutions/background-check" },
      { label: "Call Center", href: "/solutions/call-center" },
      { label: "Learning & Development", href: "/solutions/training" },
      { label: "Workspace Rental", href: "/solutions/workspace-rental" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Help Center", href: "/resources/help-center" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-600 text-white">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={Logo}
                alt="ISurfGlobal"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/70 max-w-xs">
              Top-tier BPO solutions helping businesses streamline operations, enhance efficiency,
              and drive growth across borders.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              {/* <a
                href="https://in.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a> */}
              {/* Twitter/X */}
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a> */}
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/192fkLGTbp"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/isurfglobalng?igsh=MTZuYWVtbTM2Zzc0cA=="
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/2349167660003"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} ISurfGlobal Service Limited. All rights reserved.
          </p>
          <button className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
            <Globe className="size-3.5" /> English (Global)
          </button>
        </div>
      </div>
    </footer>
  );
}
