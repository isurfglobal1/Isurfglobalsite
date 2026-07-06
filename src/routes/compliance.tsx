import { LegalPage } from "@/components/site/LegalPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — ISurfGlobal" },
      {
        name: "description",
        content:
          "ISurfGlobal's certifications and compliance posture: SOC 2, ISO 27001, GDPR, CCPA.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <LegalPage title="Compliance" updated="June 1, 2026">
        <p>
          ISurfGlobal is committed to maintaining a strong compliance program. This page summarizes
          the certifications and frameworks we adhere to.
        </p>
        <h2>Certifications</h2>
        <ul>
          <li>SOC 2 Type II</li>
          <li>ISO 27001</li>
          <li>GDPR (EU/UK)</li>
          <li>CCPA / CPRA (California)</li>
        </ul>
        <h2>Data processing</h2>
        <p>
          We offer a Data Processing Addendum (DPA) and Standard Contractual Clauses for customers
          transferring personal data internationally.
        </p>
        <h2>Subprocessors</h2>
        <p>
          A current list of subprocessors is available upon request. We provide advance notice of
          changes via the in-product notification center.
        </p>
        <h2>Reporting</h2>
        <p>
          Report a vulnerability or compliance concern to{" "}
          <a href="mailto:security@isurfglobal.com">security@isurfglobal.com</a>.
        </p>
      </LegalPage>
    </PageLayout>
  ),
});
