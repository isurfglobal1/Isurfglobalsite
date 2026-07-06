import { ReactNode, useEffect } from "react";

import { LanguageProvider } from "@/context/LanguageContext";
import { getLanguagePreference, loadLanguageToggle } from "@/utils/languageToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";

import { reportLovableError } from "../lib/lovable-error-reporting";
import appCss from "../styles.css?url";

// Check if we're in the browser
const isBrowser = typeof window !== "undefined";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1978E5" }, // Your primary color
      { name: "application-name", content: "ISurfGlobal" },
      { name: "apple-mobile-web-app-title", content: "ISurfGlobal" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },

      // SEO Meta Tags
      { title: "ISurfGlobal — Borderless BPO Solutions for Global Teams" },
      {
        name: "description",
        content:
          "End-to-end BPO services: HR outsourcing, back-office, compliance, call center and training. Run your global operations with ISurfGlobal.",
      },
      {
        name: "keywords",
        content:
          "BPO, HR outsourcing, back-office services, call center, compliance, workspace rental, Nigeria, Lagos",
      },
      { name: "author", content: "ISurfGlobal" },

      // Open Graph / Social Media
      { property: "og:title", content: "ISurfGlobal — Borderless BPO Solutions" },
      {
        property: "og:description",
        content:
          "End-to-end BPO services: HR, back-office, compliance, call center and training for global teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://isurfglobal.com" },
      { property: "og:image", content: "https://isurfglobal.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "ISurfGlobal" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ISurfGlobal — Borderless BPO Solutions" },
      {
        name: "twitter:description",
        content:
          "End-to-end BPO services: HR, back-office, compliance, call center and training for global teams.",
      },
      { name: "twitter:image", content: "https://isurfglobal.com/og-image.jpg" },
      { name: "twitter:site", content: "@ISurfGlobal" },

      // Robots
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },

      // Canonical URL
      { property: "og:url", content: "https://isurfglobal.com" },
    ],
    links: [
      // CSS
      { rel: "stylesheet", href: appCss },

      // Favicon
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#1978E5" },

      // Manifest
      { rel: "manifest", href: "/site.webmanifest" },

      // Preconnect for performance
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },

      // Canonical URL
      { rel: "canonical", href: "https://isurfglobal.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Only run language loading on the client side
  useEffect(() => {
    if (!isBrowser) return;

    loadLanguageToggle().then(() => {
      const savedLang = getLanguagePreference();
      if (savedLang && savedLang !== "en") {
        setTimeout(() => {
          const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
          if (select) {
            select.value = savedLang;
            select.dispatchEvent(new Event("change"));
          }
        }, 1000);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
