import {
  Headphones,
  Monitor,
  Package,
  Plane,
  Search,
  ShieldCheck,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { PageLayout } from "@/components/site/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

// 📦 All data in one place - easy to update, no services needed
const helpData = {
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Set up your account and onboard your team.",
      icon: Users,
      articles: [
        { id: "gs1", title: "How do I create an account?", slug: "create-account" },
        { id: "gs2", title: "How do I add a new employee?", slug: "add-employee" },
        { id: "gs3", title: "Setting up your company profile", slug: "company-profile" },
        { id: "gs4", title: "Inviting team members", slug: "invite-team" },
        { id: "gs5", title: "Understanding user roles", slug: "user-roles" },
      ],
    },
    {
      id: "payroll",
      title: "Payroll",
      description: "Run payroll, taxes, and benefits.",
      icon: Wallet,
      articles: [
        { id: "p1", title: "When does payroll run each month?", slug: "payroll-schedule" },
        { id: "p2", title: "How to run payroll", slug: "run-payroll" },
        { id: "p3", title: "Setting up payroll deductions", slug: "payroll-deductions" },
        { id: "p4", title: "Payroll tax compliance", slug: "payroll-tax" },
        { id: "p5", title: "Managing employee benefits", slug: "employee-benefits" },
      ],
    },
    {
      id: "compliance",
      title: "Compliance",
      description: "Stay compliant with local laws.",
      icon: ShieldCheck,
      articles: [
        {
          id: "c1",
          title: "How long does a background check take?",
          slug: "background-check-timeline",
        },
        { id: "c2", title: "Which countries support equity grants?", slug: "equity-grants" },
        { id: "c3", title: "GDPR compliance guide", slug: "gdpr-compliance" },
        { id: "c4", title: "Local labor law requirements", slug: "labor-laws" },
      ],
    },
    {
      id: "equipment",
      title: "Equipment",
      description: "Order, ship, and recover devices.",
      icon: Package,
      articles: [
        { id: "e1", title: "How to order equipment", slug: "order-equipment" },
        { id: "e2", title: "Shipping and tracking", slug: "shipping-tracking" },
        { id: "e3", title: "Equipment recovery process", slug: "equipment-recovery" },
      ],
    },
    {
      id: "call-center",
      title: "Call Center",
      description: "Everything you need to know about our 3CX-powered call center solutions.",
      icon: Headphones,
      articles: [
        { id: "cc1", title: "What is 3CX?", slug: "what-is-3cx" },
        { id: "cc2", title: "How does 3CX call center work?", slug: "how-3cx-works" },
        { id: "cc3", title: "Setting up 3CX for your business", slug: "setup-3cx" },
        { id: "cc4", title: "3CX features and capabilities", slug: "3cx-features" },
        { id: "cc5", title: "Call routing and IVR setup", slug: "call-routing-ivr" },
        { id: "cc6", title: "3CX integration with CRM", slug: "3cx-crm-integration" },
        { id: "cc7", title: "Reporting and analytics in 3CX", slug: "3cx-reporting" },
      ],
    },
    {
      id: "247hr",
      title: "247HR Platform",
      description: "Everything you need to know about the 247HR HR Management Platform.",
      icon: Monitor,
      articles: [
        { id: "247hr-1", title: "What is 247HR?", slug: "what-is-247hr" },
        { id: "247hr-2", title: "What modules are available?", slug: "247hr-modules" },
        { id: "247hr-3", title: "How does the payroll engine work?", slug: "payroll-engine" },
        { id: "247hr-4", title: "What is the Account Validator?", slug: "account-validator" },
        { id: "247hr-5", title: "How does the Super Admin module work?", slug: "super-admin" },
        { id: "247hr-6", title: "What is the Validation Portal?", slug: "validation-portal" },
        {
          id: "247hr-7",
          title: "What is the Nigeria Tax Act 2025 compliance?",
          slug: "tax-act-2025",
        },
        { id: "247hr-8", title: "How does staff management work?", slug: "staff-management" },
        {
          id: "247hr-9",
          title: "What is the training & certifications module?",
          slug: "training-certifications",
        },
        { id: "247hr-10", title: "What user roles are available?", slug: "user-roles" },
      ],
    },
  ],
};

// Article content mapping
const articleContent: Record<string, string> = {
  // 247HR Articles
  "what-is-247hr":
    "247HR is a comprehensive Human Resource Management Platform built by ISurfGlobal. It automates the entire employee lifecycle - from onboarding to final settlement - with a modular architecture that allows companies to activate only the features they need.",

  "247hr-modules": `247HR includes the following modules:
  • Core Setup - Companies, Departments, Business Units, Designations, Grade Levels, Staff Management
  • Recruitment - Jobs Dashboard, Interviews, Onboarding, Command Center
  • Task Management - Task Dashboard, My Assigned Tasks
  • Attendance - Attendance Dashboard, My Attendance
  • Leave Management - Leave Dashboard, Leave Policy, Manager Assignment
  • Finance & Payroll - Payroll Dashboard, Payslips, Account Validator, Salary Reports
  • Training & Certifications - Training Programs, Assessments, Certification Records, Compliance Dashboard
  • Offboarding - Offboarding Dashboard, Clearance Checklists
  • Super Admin - Module Access Control for platform administrators`,

  "payroll-engine": `The 247HR payroll engine natively supports the Nigeria Tax Act 2025 and processes payroll in the following sequence:
  1. Calculate Total Gross Income (Basic + Housing + Transport + Allowances + Bonuses)
  2. Apply Statutory Deductions (Pension: 8%, NHF: 2.5%, NHIS: 5%)
  3. Apply Personal Reliefs (Rent Relief: lower of 20% of annual rent or N500,000)
  4. Calculate Chargeable Income (Gross Income - Statutory Deductions - Reliefs)
  5. Apply progressive tax bands (0% on first N800,000, 15% on next N2,200,000, etc.)
  6. Monthly PAYE is annual tax divided by 12`,

  "account-validator": `The Account Validator prevents ghost worker payments and bank errors through automated KYC verification:
  • When bank details are added, the system calls a Bank Inquiry API to verify the account
  • A fuzzy matching engine compares the API-returned account name with the staff profile name
  • Verified accounts appear with a green "Verified" indicator
  • Unverified accounts are flagged red and blocked from payment
  • HR can manually review and override unverified accounts with a documented reason`,

  "super-admin": `The Super Admin module is accessible exclusively to ISurfGlobal Technology Administrators and provides:
  • A central dashboard showing all modules across all client companies
  • One-click toggles to enable or disable modules per company
  • Confirmation modals before disabling modules to prevent accidental deactivation
  • Full access matrix - rows = client companies, columns = platform modules`,

  "validation-portal": `The Validation Portal is a monthly 'Gatekeeper' exercise conducted between the 14th and 16th of each month:
  • Supervisors validate team members for payment eligibility
  • "Yes for Payment" - staff receives salary
  • "No for Payment" - staff is excluded from payment
  • HR can upload a 'Staff Validation' Excel template for bulk updates
  • Portal is locked (read-only) outside the 14th-16th window`,

  "tax-act-2025": `The 247HR payroll engine is built to comply with the Nigeria Tax Act 2025 (effective January 1, 2026):
  • The Consolidated Relief Allowance (CRA) is abolished and replaced with Rent Relief
  • Rent Relief = lower of: (20% of Annual Rent) OR N500,000 (legal cap)
  • Tax calculation follows a specific sequence that must be executed in order
  • Multi-state tax routing for companies with staff in multiple Nigerian states
  • Automatic generation of state-specific PAYE schedules and Form H1 annual returns`,

  "staff-management": `The Staff Management module is the central hub for managing all employee records:
  • Register individual staff members with complete bio-data, employment, and compensation details
  • Bulk upload staff data via Excel template
  • Search and filter existing records in real-time
  • Track all upload activity in the Staff Upload History
  • Key fields: Staff ID (must be unique), Email (must be unique), Department, Designation, Grade Level
  • Failed upload records can be downloaded, corrected, and re-uploaded`,

  "training-certifications": `The Training & Certifications module includes:
  • Training Programs - Create, import, publish, and assign programs
  • Assessments - Create and link assessments to training programs
  • Certification Records - Track employee certifications, expiry, and renewal
  • Compliance Dashboard - Organization-wide compliance score and risk heatmap
  • Audit Trail - Full activity tracking for compliance reviews
  • Templates - Create reusable certification templates
  • Reports - Compliance Trend, Department, Risk Detail, and Expiry reports`,

  "user-roles": `247HR supports the following user roles:
  • SUPER_ADMIN - Full platform-wide access (ISurfGlobal administrators only)
  • HR Admin - Full access to all modules enabled for their company
  • Manager - Read access to team data, can approve leaves and validate payments
  • Staff - Access to personal dashboard, payslips, attendance, leave requests, and tasks
  • Finance - Access to payroll processing, payslip generation, and financial reports
  • Recruiter - Access to job management, candidate pipelines, and onboarding
  • Trainer - Access to manage training programs, sessions, and participant progress
  • Auditor - Read-only access to compliance dashboards and audit trails`,

  // Getting Started Articles
  "create-account":
    "To create an account, visit the ISurfGlobal website and click on the 'Get Started' button. Fill in your company details, verify your email, and you'll be ready to set up your organization profile.",
  "add-employee":
    "To add a new employee, go to the Staff Management module, click 'Register User', and fill in the required information including bio-data, employment details, compensation, and banking information.",
  "company-profile":
    "Your company profile can be set up in the Core Setup module. Add your company logo, legal name, registration number, industry, and contact details.",
  "invite-team":
    "To invite team members, navigate to Staff Management, click 'Register User', and enter their details. They will receive an email invitation to join the platform.",

  // Payroll Articles
  "payroll-schedule":
    "Payroll typically runs monthly. The schedule includes data entry (1st-5th), supervisor validation (14th-16th), HR uploads (17th-20th), and final approval with payslip generation.",
  "run-payroll":
    "To run payroll, go to the Payroll Dashboard, review the data, click 'Run Payroll', and the system will calculate taxes, deductions, and generate payslips automatically.",
  "payroll-deductions":
    "Common deductions include Pension (8% of Basic + Housing + Transport), NHF (2.5% of Basic), NHIS (5% of Basic), and other union/cooperative deductions.",
  "payroll-tax":
    "The Nigeria Tax Act 2025 applies progressive tax bands: 0% on first N800,000, 15% on next N2,200,000, 18% on next N9,000,000, and higher rates for larger incomes.",
  "employee-benefits":
    "Employee benefits can be configured in the Payroll module. This includes housing allowance, transport allowance, bonuses, and other compensation elements.",

  // Compliance Articles
  "background-check-timeline":
    "Background checks typically take 48 hours to complete, depending on the complexity and the country where the verification is being conducted.",
  "equity-grants":
    "Equity grants are supported in countries where local regulations allow. Contact your HR administrator for specific country eligibility.",
  "gdpr-compliance":
    "247HR is GDPR compliant with enterprise-grade security measures including encryption, access controls, and regular security audits.",
  "labor-laws":
    "The platform automatically applies local labor law requirements based on the employee's country of residence and employment type.",

  // Equipment Articles
  "order-equipment":
    "To order equipment, go to the Equipment module, select the items needed, specify the employee and shipping address, and submit the request for approval.",
  "shipping-tracking":
    "Equipment shipments can be tracked in real-time through the Equipment module. You'll receive updates on delivery status and estimated arrival dates.",
  "equipment-recovery":
    "When an employee leaves, initiate the equipment recovery process in the Offboarding module. The system will generate a checklist for asset return.",

  // Add to articleContent mapping
  // Call Center Articles - 3CX Focus
  "what-is-3cx": `3CX is a powerful, enterprise-grade communication platform that powers our call center solutions. It's a software-based PBX system that replaces traditional phone systems with a modern, flexible, and feature-rich solution.

Key benefits of 3CX:
• Cost-effective - No per-user licensing fees
• Flexible deployment - On-premise or cloud
• Anywhere access - Mobile and desktop apps
• Easy management - Web-based admin console
• Scalable - Grows with your business`,

  "how-3cx-works": `3CX works by converting your internet connection into a fully-featured phone system. Here's how it operates:

1. VoIP Technology: Voice calls are transmitted over your internet connection (VoIP)
2. Central Management: All calls are routed through the 3CX server
3. WebRTC Integration: Enables click-to-call from your browser
4. SIP Trunking: Connects to external phone networks
5. Softphones: Staff can make and receive calls from their computer or mobile app

The system handles call routing, voicemail, conferencing, and integrates with your existing business tools.`,

  "setup-3cx": `Setting up 3CX for your business is straightforward with our team:

1. Assessment: We evaluate your business needs and call volume
2. Deployment: 3CX is installed on your preferred infrastructure (cloud or on-premise)
3. Configuration: We set up extensions, call routing, and IVR
4. Integration: Connect with your CRM and business tools
5. Training: Your team receives comprehensive training
6. Go-Live: We support your launch and provide ongoing maintenance

Our team handles the entire setup process so you can focus on your business.`,

  "3cx-features": `3CX offers a comprehensive suite of call center features:

• Auto Attendant (IVR) - Automated call routing with voice menus
• Call Queuing - Manage high call volumes efficiently
• Call Recording - Record calls for quality and compliance
• Real-time Dashboards - Monitor call center performance
• Live Chat - Web chat integration for omnichannel support
• Video Conferencing - Integrated video meetings
• Mobile Apps - iOS and Android apps for remote work
• WhatsApp Integration - Connect WhatsApp to your call center
• SMS Capabilities - Two-way SMS messaging
• Call Analytics - Detailed call reports and analytics`,

  "call-routing-ivr": `Call routing and IVR (Interactive Voice Response) are key features of 3CX:

IVR Setup:
• Create voice menus to guide callers
• Set up time-based routing (business hours vs. after hours)
• Configure holiday schedules
• Design call flows for different departments

Call Routing Options:
• Ring groups - Calls ring multiple agents simultaneously
• Queue - Calls wait in line for the next available agent
• Auto-attendant - Automated system directs callers
• Direct dial - Staff have direct extensions
• Skills-based routing - Route calls to the most qualified agent

Our team designs efficient call flows that improve customer experience.`,

  "3cx-crm-integration": `3CX seamlessly integrates with popular CRM platforms to enhance agent productivity:

Supported CRMs:
• Salesforce
• Microsoft Dynamics
• Zoho CRM
• HubSpot
• Freshdesk
• Zendesk

Integration Benefits:
• Screen pop - Customer info appears on answer
• Click-to-dial - Call directly from CRM
• Call logging - Automatically log calls
• History tracking - View customer interaction history
• Lead management - Manage leads efficiently

Custom integrations are also available for your specific CRM.`,

  "3cx-reporting": `3CX provides comprehensive reporting and analytics to help you optimize your call center:

Available Reports:
• Call Summary - Overview of all calls
• Agent Performance - Individual agent statistics
• Queue Performance - Queue efficiency metrics
• Call Detail Records - Detailed call logs
• Abandoned Calls - Missed call analysis
• Service Level - SLA compliance
• Answer Speed - Average response time
• Peak Call Times - Identify peak periods

These insights help you make data-driven decisions to improve customer satisfaction and agent performance.`,
};

// Flatten articles for search with content included
const allArticles = helpData.categories.flatMap((cat) =>
  cat.articles.map((article) => ({
    ...article,
    category: cat.title,
    categoryId: cat.id,
    content: articleContent[article.slug] || "Content coming soon...",
  })),
);

export const Route = createFileRoute("/resources/help-center")({
  head: () => ({
    meta: [
      { title: "Help Center — ISurfGlobal" },
      {
        name: "description",
        content: "Find answers, guides, and support for everything ISurfGlobal.",
      },
    ],
  }),
  component: HelpCenter,
});

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    content: string;
    category: string;
  } | null>(null);

  // Smart search with category filter and content search
  const filteredArticles = useMemo(() => {
    let results = allArticles;

    // Filter by category
    if (selectedCategory) {
      results = results.filter((a) => a.categoryId === selectedCategory);
    }

    // Filter by search query (title, category, and content)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query) ||
          a.content.toLowerCase().includes(query),
      );
    }

    return results;
  }, [searchQuery, selectedCategory]);

  // Get popular articles (top 6 by default)
  const popularArticles = allArticles.slice(0, 6);

  // Get current category for display
  const currentCategory = helpData.categories.find((c) => c.id === selectedCategory);

  const handleArticleClick = (article: (typeof allArticles)[0]) => {
    setSelectedArticle({
      title: article.title,
      content: article.content,
      category: article.category,
    });
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  // Clear search and category filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-primary to-brand-700 text-white py-20">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">How can we help?</h1>
          <p className="text-white/80 mt-3">Search guides, FAQs, and product docs.</p>
          <div className="mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full rounded-full bg-white text-foreground pl-12 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
          {/* Search results count */}
          {searchQuery && (
            <p className="text-white/70 text-sm mt-4">
              Found {filteredArticles.length} result{filteredArticles.length !== 1 ? "s" : ""} for "
              {searchQuery}"
            </p>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container-page">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              {searchQuery
                ? "Search results"
                : selectedCategory
                  ? currentCategory?.title
                  : "Browse by category"}
            </h2>
            <div className="flex items-center gap-3">
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm text-primary hover:underline"
                >
                  ← All categories
                </button>
              )}
              {searchQuery && (
                <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                  Clear search
                </button>
              )}
            </div>
          </div>

          {/* Show categories only when not searching */}
          {!searchQuery && !selectedCategory && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {helpData.categories.map((c) => {
                const Icon = c.icon;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className="text-left rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow"
                  >
                    <div className="size-10 rounded-lg bg-accent-soft text-primary grid place-items-center mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                    <p className="text-xs text-primary font-semibold mt-3">
                      {c.articles.length} articles
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Articles list when category selected, search active, or both */}
          {(selectedCategory || searchQuery) && (
            <div className="mt-6">
              {filteredArticles.length > 0 ? (
                <ul className="space-y-2">
                  {filteredArticles.map((article) => (
                    <li key={article.id}>
                      <button
                        onClick={() => handleArticleClick(article)}
                        className="w-full text-left block rounded-xl bg-card border border-border p-4 hover:border-primary transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{article.title}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground bg-accent-soft px-2 py-1 rounded-full">
                              {article.category}
                            </span>
                            {/* Show match indicator for search results */}
                            {searchQuery && (
                              <span className="text-xs text-primary/60">
                                {article.title.toLowerCase().includes(searchQuery.toLowerCase())
                                  ? "Title match"
                                  : article.content
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase())
                                    ? "Content match"
                                    : ""}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Show content preview for search results */}
                        {searchQuery && article.content.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                            {article.content.substring(0, 150)}...
                          </p>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg">No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-1">
                    Try adjusting your search terms or browse by category
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular Questions - only show when no search or category filter */}
      {!searchQuery && !selectedCategory && (
        <section className="py-16 bg-accent-soft/50">
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Popular questions</h2>
            <ul className="space-y-2">
              {popularArticles.map((article) => (
                <li key={article.id}>
                  <button
                    onClick={() => handleArticleClick(article)}
                    className="w-full text-left block rounded-xl bg-card border border-border p-4 hover:border-primary transition-colors text-sm font-medium"
                  >
                    {article.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-accent-soft/30">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl font-bold mt-1">{selectedArticle.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="size-10 rounded-full hover:bg-accent transition-colors grid place-items-center"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="prose prose-sm max-w-none">
                {selectedArticle.content.split("\n").map((paragraph, index) => {
                  if (paragraph.trim().startsWith("•")) {
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground mb-1"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{paragraph.trim().replace("•", "")}</span>
                      </div>
                    );
                  }
                  if (
                    paragraph.trim().startsWith("1.") ||
                    paragraph.trim().startsWith("2.") ||
                    paragraph.trim().startsWith("3.") ||
                    paragraph.trim().startsWith("4.") ||
                    paragraph.trim().startsWith("5.") ||
                    paragraph.trim().startsWith("6.")
                  ) {
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground mb-1"
                      >
                        <span className="text-primary font-medium">
                          {paragraph.trim().split(" ")[0]}
                        </span>
                        <span>{paragraph.trim().replace(/^\d+\.\s*/, "")}</span>
                      </div>
                    );
                  }
                  if (paragraph.trim() === "") return null;
                  return (
                    <p key={index} className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t border-border bg-accent-soft/30">
              <span className="text-xs text-muted-foreground">Was this helpful?</span>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  Yes
                </button>
                <button className="px-4 py-1.5 text-sm rounded-full bg-accent text-foreground hover:bg-accent/80 transition-colors">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
