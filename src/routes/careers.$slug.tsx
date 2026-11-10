import { ArrowLeft, BriefcaseBusiness, CheckCircle2, Clock3, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { PageLayout } from "@/components/site/PageLayout";
import { financeAssistant } from "@/data/jobs";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/careers/$slug")({
  beforeLoad: ({ params }) => {
    if (params.slug !== financeAssistant.slug) {
      throw notFound();
    }
  },
  head: () => ({
    meta: [
      { title: `${financeAssistant.title} | ISurfGlobal Careers` },
      {
        name: "description",
        content: `Apply for the ${financeAssistant.title} role at ${financeAssistant.company}.`,
      },
    ],
  }),
  component: JobDetailsPage,
});

function Reveal({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function JobDetailsPage() {
  const job = financeAssistant;

  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to careers
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {job.company}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {job.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness className="size-4" />
                {job.jobType}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="size-4" />
                {job.workSchedule}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">{job.summary}</p>
            </Reveal>

            <Reveal>
              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight">Key responsibilities</h2>
                <ul className="mt-6 grid gap-4">
                  {job.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight">Requirements</h2>
                <ul className="mt-6 grid gap-4">
                  {job.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </article>

          <aside className="h-fit rounded-2xl border border-border bg-accent p-6 md:p-8 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold">Role overview</h2>
            <dl className="mt-6 grid gap-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Monthly salary</dt>
                <dd className="mt-1 font-semibold">{job.salary}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Additional benefits</dt>
                <dd className="mt-1 font-semibold leading-relaxed">{job.benefits}</dd>
              </div>
            </dl>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-semibold">Ready to apply?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Send your CV with the role title in the email subject.
              </p>
              <a
                href={`mailto:${job.applicationEmail}?subject=${encodeURIComponent(job.applicationSubject)}&body=${encodeURIComponent(
                  `Hello ISurf Global team,\n\nI would like to apply for the ${job.title} position. Please find my CV attached.\n\nKind regards,`,
                )}`}
                aria-label={`Email your CV for the ${job.title} position`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-600 active:scale-[0.98]"
              >
                <Mail className="size-4" />
                Email your CV
              </a>
              <p className="mt-3 break-all text-center text-xs text-muted-foreground">
                {job.applicationEmail}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
