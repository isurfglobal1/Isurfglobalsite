import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="py-16 lg:py-24">
      <div className="container-page max-w-3xl">
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">{title}</h1>
        <div className="prose prose-slate mt-10 space-y-6 text-foreground/80 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </div>
    </article>
  );
}
