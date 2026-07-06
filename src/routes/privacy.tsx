import { LegalPage } from "@/components/site/LegalPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ISurfGlobal" },
      {
        name: "description",
        content: "How ISurfGlobal collects, uses, and protects your personal information.",
      },
    ],
  }),
  component: () => (
    <PageLayout>
      <LegalPage title="Privacy Policy" updated="June 1, 2026">
        <p>
          This Privacy Policy describes how ISurfGlobal Service Limited ("ISurfGlobal", "we", "us")
          collects, uses, and shares information when you use our website and services.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect information you provide directly, information collected automatically when you
          use our services, and information from third parties such as identity verification
          providers.
        </p>
        <ul>
          <li>Account information: name, email, employer, and role.</li>
          <li>Service data: information you submit when using the platform.</li>
          <li>Usage data: device, browser, and interaction information.</li>
        </ul>
        <h2>How we use information</h2>
        <p>
          We use information to provide and improve our services, to communicate with you, to comply
          with legal obligations, and to protect against fraud.
        </p>
        <h2>Sharing</h2>
        <p>
          We share information with service providers, payment processors, and where required by
          law. We never sell personal information.
        </p>
        <h2>Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, delete, or
          restrict processing of your personal information. Contact{" "}
          <a href="mailto:privacy@isurfglobal.com">privacy@isurfglobal.com</a> to exercise these
          rights.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be directed to{" "}
          <a href="mailto:privacy@isurfglobal.com">privacy@isurfglobal.com</a>.
        </p>
      </LegalPage>
    </PageLayout>
  ),
});
