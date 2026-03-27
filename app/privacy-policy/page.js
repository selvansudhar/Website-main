export const metadata = {
  title: 'Privacy Policy | Zenvict',
  description: 'Zenvict privacy policy — how we collect, use, store, and protect your personal information and service data.',
  alternates: { canonical: 'https://zenvict.com/privacy-policy' },
};

export default function PrivacyPolicy() {
  const lastUpdated = 'March 1, 2026';

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Privacy Policy</p>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-4 max-md:text-[2.2rem]">Privacy Policy</h1>
          <p className="text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Summary */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-8 mb-12">
            <h2 className="text-lg font-bold text-[#111111] mb-4">Summary of Our Privacy Commitment</h2>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">
              At Zenvict, your privacy is fundamental to how we build and operate our platform. Here's what you should know:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'We never sell your personal data to third parties.',
                'Your service data belongs to you — always.',
                'We collect only what is necessary to deliver and improve our services.',
                'You can export or delete your data at any time.',
                'We comply with GDPR, CCPA, and applicable data protection regulations.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-[#22c55e] text-xs mt-0.5 flex-shrink-0"></i>
                  <span className="text-sm text-[#111111]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Part I */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#111111] mb-2">Part I — Information Zenvict Collects and Controls</h2>
            <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">1. Information You Provide to Us</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">
              When you sign up for a Zenvict account, request a demo, contact sales, or use our Concierge service, we may collect:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
              <li>Name, email address, phone number, and company name</li>
              <li>Billing information and payment details (processed by our payment provider)</li>
              <li>Job title, department, and industry</li>
              <li>Any information you voluntarily provide in support tickets, forms, or communications</li>
            </ul>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">2. Information We Collect Automatically</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">
              When you use the Zenvict platform or visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
              <li>Device information (browser type, operating system, device identifiers)</li>
              <li>IP address, approximate location, and timezone</li>
              <li>Pages visited, features used, and interaction patterns</li>
              <li>Referral source and session duration</li>
              <li>Cookies and similar tracking technologies (see our <a href="/cookie-policy" className="text-[#056CB8] underline">Cookie Policy</a>)</li>
            </ul>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">3. Information from Third Parties</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              We may receive information from integration partners (e.g., when you connect Salesforce, Slack, or Google Workspace to Zenvict), single sign-on providers, or publicly available business directories. This is used solely to enhance your experience and enable integrations you have authorized.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">4. How We Use Your Information</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
              <li>To provide, maintain, and improve the Zenvict platform and its modules (Finance Plus, CRM Lite, YenAI, etc.)</li>
              <li>To process transactions and send billing-related communications</li>
              <li>To respond to your inquiries, support requests, and Concierge consultations</li>
              <li>To send product updates, security alerts, and administrative messages</li>
              <li>To analyze usage trends and improve user experience</li>
              <li>To detect, prevent, and address security issues and fraud</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">5. Who We Share Your Information With</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
              <li><strong>Service providers</strong> — Hosting, payment processing, analytics, and customer support tools that operate under strict data processing agreements</li>
              <li><strong>Integration partners</strong> — Only when you explicitly connect a third-party service to your Zenvict account</li>
              <li><strong>Legal authorities</strong> — When required by law, subpoena, or to protect our rights and safety</li>
              <li><strong>Business transfers</strong> — In the event of a merger, acquisition, or asset sale, with prior notice to affected users</li>
            </ul>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">6. Your Rights</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
              <li>Access, correct, or delete your personal data</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent for optional data processing</li>
              <li>Object to processing based on legitimate interests</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="text-sm text-[#555555] leading-relaxed">
              To exercise any of these rights, contact us at <strong>privacy@zenvict.com</strong>.
            </p>
          </div>

          {/* Part II */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#111111] mb-2">Part II — Information Zenvict Processes on Your Behalf</h2>
            <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">1. Service Data</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              Information that you or your users submit to the Zenvict platform — such as customer records in CRM Lite, financial data in Finance Plus, employee records in Human Resources, documents in Knowledge Base, or conversations with YenAI — is your <strong>service data</strong>. You own it. We process it solely to deliver the service you have subscribed to.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">2. Ownership and Control</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              You retain full ownership of all service data. We do not access, use, or share your service data except as necessary to provide the service, troubleshoot issues you report, or comply with legal obligations. We do not use your service data to train AI models or for any purpose outside your account.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">3. Data Retention</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              We retain your service data for the duration of your subscription. Upon account termination, your data is retained for 30 days to allow for recovery, after which it is permanently deleted from all systems including backups within 90 days.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">4. YenAI and AI Processing</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              YenAI and other AI features within Zenvict process your data within the boundaries of your account. Your data is not used to train models for other customers. AI responses are generated using retrieval-augmented generation (RAG) from your Knowledge Base and configured data sources — your data stays within your tenant.
            </p>
          </div>

          {/* Part III */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#111111] mb-2">Part III — General</h2>
            <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">Security</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 encryption in transit, regular penetration testing, SOC 2 Type II compliance, and role-based access controls. Enterprise plans support customer-managed encryption keys (CMEK) and dedicated data residency.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">Children's Privacy</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              Zenvict services are not directed to individuals under 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it promptly.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">International Data Transfers</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              Zenvict operates data centers in multiple regions. When data is transferred across borders, we rely on Standard Contractual Clauses (SCCs), adequacy decisions, or other lawful transfer mechanisms to ensure your data is protected to the same standard regardless of location.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">Changes to This Policy</h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              We may update this policy from time to time. When we make material changes, we will notify you via email or a prominent notice on our platform at least 30 days before the changes take effect. Continued use of Zenvict after changes constitutes acceptance of the updated policy.
            </p>

            <h3 className="text-base font-bold text-[#111111] mt-8 mb-3">Contact Our Privacy Team</h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              If you have questions about this policy or our data practices, contact our Data Protection Officer at <strong>privacy@zenvict.com</strong> or write to us at: Zenvict Technologies, Tech Park, Whitefield, Bangalore, India.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
