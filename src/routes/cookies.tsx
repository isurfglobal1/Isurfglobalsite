import { LegalPage } from "@/components/site/LegalPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — ISurfGlobal" },
      {
        name: "description",
        content: "How ISurfGlobal uses cookies and similar tracking technologies.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <LegalPage title="Cookie Policy" updated="June 1, 2026">
        <p>
          This Cookie Policy explains how iSurf Global uses cookies and similar technologies when
          you visit our website.
        </p>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device that help websites function and collect
          information about your visit.
        </p>
        <h2>Types of cookies we use</h2>
        <ul>
          <li>
            <strong>Strictly necessary</strong> — required for the site to function.
          </li>
          <li>
            <strong>Analytics</strong> — help us understand how visitors use our site.
          </li>
          <li>
            <strong>Marketing</strong> — used to deliver relevant advertisements.
          </li>
          <li>
            <strong>Preferences</strong> — remember your choices like language and region.
          </li>
        </ul>
        <h2>Managing cookies</h2>
        <p>
          You can manage cookie preferences via the cookie banner or your browser settings.
          Disabling cookies may impact site functionality.
        </p>
        <h2>Contact</h2>
        <p>
          Email <a href="mailto:privacy@isurfglobal.com">privacy@isurfglobal.com</a> with any
          questions.
        </p>
      </LegalPage>
    </PageLayout>
  ),
});
