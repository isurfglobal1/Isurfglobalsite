import "@fontsource-variable/inter";

import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Logo from "@/assets/ISurf_logo.webp";
import { Link } from "@tanstack/react-router";

import { Clock } from "../ui/Clock"; // Import the Clock component
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

type NavLink = { label: string; href: string; external?: true };
type NavGroup = { label: string; href?: string; items: NavLink[] };

const navItems: NavGroup[] = [
  {
    label: "Solutions",
    items: [
      { label: "HR Outsourcing", href: "/solutions/hr-outsourcing" },
      { label: "Back-Office Services", href: "/solutions/back-office" },
      { label: "Background Check", href: "/solutions/background-check" },
      { label: "Call Center", href: "/solutions/call-center" },
      { label: "Learning & Development", href: "/solutions/training" },
      { label: "Workspace Rental", href: "/solutions/workspace-rental" },
    ],
  },
  // {
  //   label: "Use cases",
  //   items: [{ label: "Overview", href: "/use-cases/overview" }],
  // },
  {
    label: "Our Products",
    items: [{ label: "247HR", href: "https://247hr.co.uk", external: true }],
  },
  {
    label: "Resources",
    items: [
      { label: "Case studies", href: "/resources/case-studies" },
      { label: "Help center", href: "/resources/help-center" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border" : "bg-background"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0 rounded-full">
          <img src={Logo} alt="ISurfGlobal" className="h-[65px] w-auto object-contain" />
        </Link>

        <nav
          className="hidden lg:grid grid-cols-5 items-center gap-1"
          onMouseLeave={() => setOpen(null)}
        >
          {/* Empty div to push first item to column 2 */}
          <div />
          <div />

          {navItems.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)}>
              {item.items.length === 0 && item.href ? (
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md inline-block"
                >
                  {item.label}
                </a>
              ) : (
                <>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md">
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-60" />
                  </button>
                  {open === item.label && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 animate-float-in">
                      <div className="w-72 rounded-2xl border border-border bg-popover shadow-card p-3">
                        {item.items.map((sub) => {
                          const subWithExternal = sub as NavLink & { external?: boolean };
                          return subWithExternal.external ? (
                            <a
                              key={subWithExternal.href}
                              href={subWithExternal.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {subWithExternal.label} <span className="text-xs opacity-50">↗</span>
                            </a>
                          ) : (
                            <Link
                              key={subWithExternal.href}
                              to={subWithExternal.href}
                              className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {subWithExternal.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Clock before LanguageSwitcher */}
          <Clock />
          <div className="w-px h-5 bg-border" />
          <LanguageSwitcher />
          <a
            href="/contact"
            className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-brand-600 transition-colors"
          >
            Contact us
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-float-in">
          <div className="container-page py-4 space-y-2">
            {navItems.map((item) =>
              item.items.length === 0 && item.href ? (
                <a key={item.label} href={item.href} className="block py-2 text-sm font-medium">
                  {item.label}
                </a>
              ) : (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between py-2 text-sm font-medium cursor-pointer">
                    {item.label}
                    <ChevronDown className="size-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-3 py-1 space-y-1">
                    {item.items.map((sub) => {
                      const subWithExternal = sub as NavLink & { external?: boolean };
                      return subWithExternal.external ? (
                        <a
                          key={subWithExternal.href}
                          href={subWithExternal.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {subWithExternal.label} <span className="text-xs opacity-50">↗</span>
                        </a>
                      ) : (
                        <Link
                          key={subWithExternal.href}
                          to={subWithExternal.href}
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {subWithExternal.label}
                        </Link>
                      );
                    })}
                  </div>
                </details>
              ),
            )}
            <div className="pt-2 border-t border-border">
              <LanguageSwitcher />
            </div>
            <a
              href="/contact"
              className="block text-center mt-3 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
