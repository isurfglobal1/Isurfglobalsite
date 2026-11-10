export interface JobPosting {
  slug: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  workSchedule: string;
  salary: string;
  benefits: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applicationEmail: string;
  applicationSubject: string;
}

export const jobPostings: JobPosting[] = [
  {
    slug: "finance-assistant",
    title: "Finance Assistant",
    company: "Betterlending Company Limited",
    location: "Ikeja, Lagos",
    jobType: "Full-time (onsite)",
    workSchedule: "Monday-Friday, 9:00 AM-5:30 PM",
    salary: "₦120,000 monthly",
    benefits: "Transport allowance, food allowance and punctuality bonus",
    summary:
      "Isurf Global Services Limited is recruiting on behalf of Betterlending Company Limited, a fintech company, for a Finance Assistant.",
    responsibilities: [
      "Record daily receipts and payments accurately in the financial system.",
      "Reconcile financial records with bank statements and cash balances.",
      "Verify invoices, receipts and payment documents before entry and filing.",
      "Organise and maintain financial records for easy retrieval.",
      "Provide documentation support during audits and tax inspections.",
      "Assist with other finance tasks assigned by the supervisor.",
    ],
    requirements: [
      "Diploma or Bachelor's degree in Accounting, Finance, Auditing or a related field.",
      "Good understanding of basic accounting principles and financial documentation.",
      "Proficiency in Microsoft Office; familiarity with accounting software is an advantage.",
      "Previous experience as a Finance Assistant or in document management is preferred.",
      "Strong attention to detail, organisational skills, integrity and confidentiality.",
    ],
    applicationEmail: "jobs@isurfglobal.com",
    applicationSubject: "Finance Assistant - Ikeja",
  },
];

export const financeAssistant = jobPostings[0];
