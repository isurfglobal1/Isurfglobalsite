import { LegalPage } from "@/components/site/LegalPage";
import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ISurfGlobal" },
      { name: "description", content: "Terms governing your use of ISurfGlobal services." },
    ],
  }),
  component: () => (
    <PageLayout>
      <LegalPage title="Terms of Service" updated="June 1, 2026">
        <p>
          These Terms of Service ("Terms") govern your access to and use of services provided by
          ISurfGlobal Service Limited. By using our services you agree to these Terms.
        </p>
        <h2>Use of services</h2>
        <p>
          You may use our services only as permitted by law and these Terms. You are responsible for
          any activity that occurs under your account.
        </p>
        <h2>Subscription and billing</h2>
        <p>
          Paid plans are billed in advance on a monthly or yearly basis. Fees are non-refundable
          except as required by law.
        </p>
        <h2>Customer data</h2>
        <p>
          You retain all rights to data you submit. You grant us a limited license to process this
          data solely to provide the services.
        </p>
        <h2>Termination</h2>
        <p>
          Either party may terminate the agreement with notice. Upon termination, your right to use
          the services ends and we will delete or return your data per our Data Processing Addendum.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, ISurfGlobal's aggregate liability is limited to
          the amounts paid in the twelve months preceding the claim.
        </p>
        <h2>Contact</h2>
        <p>
          Questions can be sent to <a href="mailto:legal@isurfglobal.com">legal@isurfglobal.com</a>.
        </p>
      </LegalPage>
    </PageLayout>
  ),
});
