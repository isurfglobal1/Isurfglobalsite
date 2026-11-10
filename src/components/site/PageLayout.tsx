import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CookieBanner } from "./CookieBanner";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-1 pt-16">{children}</main>
      <SiteFooter />
      <CookieBanner />
    </div>
  );
}
