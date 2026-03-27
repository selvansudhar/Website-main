export const metadata = {
  title: 'Terms of Service | Zenvict',
  description: 'Zenvict terms of service — the agreement governing your use of Zenvict platform, modules, and services.',
  alternates: { canonical: 'https://zenvict.com/terms-of-service' },
};

export default function TermsOfService() {
  const lastUpdated = 'March 1, 2026';

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Terms of Service</p>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-4 max-md:text-[2.2rem]">Terms of Service</h1>
          <p className="text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-8 mb-12">
            <p className="text-sm text-[#555555] leading-relaxed">
              This agreement ("Terms") governs your access to and use of the Zenvict platform, including all modules, services, and websites operated by Zenvict Technologies ("Zenvict", "we", "us"). By creating an account, accessing, or using any Zenvict service, you agree to be bound by these Terms. If you are using Zenvict on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">1. Acceptance of Agreement</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            By signing up for a Zenvict account, clicking "I Agree," or otherwise accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy" className="text-[#056CB8] underline">Privacy Policy</a>. You must be at least 18 years of age (or the age of legal majority in your jurisdiction) to use our services.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">2. Description of Service</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">
            Zenvict provides a cloud-based enterprise platform comprising multiple modules including, but not limited to, YenAI, Assistant Hub, Knowledge Base, CRM Lite, Finance Plus, Human Resources, Project Plus, and Marketing Automation. We also offer custom development services including SaaS development, B2B web development, enterprise solutions, AI solutions, and e-commerce development.
          </p>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            We reserve the right to modify, update, or discontinue any feature or module with reasonable prior notice. New modules or features may be subject to additional terms.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">3. User Accounts</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">You are responsible for:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
            <li>Providing accurate and complete registration information</li>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized access or security breach</li>
          </ul>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            Organization administrators are responsible for managing user access, permissions, and module assignments within their workspace.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">4. Acceptable Use</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
            <li>Use Zenvict services for any unlawful or fraudulent purpose</li>
            <li>Upload, transmit, or store content that is harmful, threatening, defamatory, or infringes intellectual property rights</li>
            <li>Attempt to gain unauthorized access to other accounts, servers, or networks connected to Zenvict</li>
            <li>Reverse-engineer, decompile, or disassemble any part of the platform</li>
            <li>Use the service to send unsolicited messages (spam) or distribute malware</li>
            <li>Interfere with or disrupt the integrity or performance of the platform</li>
            <li>Resell, sublicense, or redistribute Zenvict services without prior written consent</li>
            <li>Use automated tools to scrape data or overload our systems beyond reasonable usage</li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">5. Fees and Payments</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">
            Certain Zenvict modules and services require paid subscriptions. By subscribing, you agree to:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
            <li>Pay all applicable fees based on the plan you select</li>
            <li>Subscriptions renew automatically at the end of each billing cycle unless cancelled before the renewal date</li>
            <li>Price changes will be communicated at least 30 days before taking effect</li>
            <li>You are responsible for all applicable taxes and duties</li>
            <li>Refunds are handled on a case-by-case basis. Contact billing@zenvict.com for assistance</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">6. Data Ownership</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            You retain full ownership of all data you submit to the Zenvict platform ("Service Data"), including customer records, financial data, employee records, documents, and AI training content. We do not claim any intellectual property rights over your data. We access your data only to provide the services, troubleshoot issues, or comply with legal requirements.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">7. Intellectual Property</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            The Zenvict platform, including its design, code, features, documentation, logos, and trademarks, is the exclusive property of Zenvict Technologies and is protected by intellectual property laws. These Terms do not grant you any right to use Zenvict branding or trademarks without prior written consent.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">8. Third-Party Integrations</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            Zenvict integrates with third-party services such as Salesforce, Slack, Microsoft Teams, and others. These integrations are subject to the third party's own terms and privacy policies. Zenvict is not responsible for the availability, accuracy, or practices of third-party services. You connect these services at your own discretion.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">9. Disclaimer of Warranties</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            ZENVICT SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">10. Limitation of Liability</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZENVICT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID TO ZENVICT IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>

          {/* Section 11 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">11. Indemnification</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            You agree to indemnify and hold harmless Zenvict, its officers, employees, and partners from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your violation of these Terms, misuse of the service, or infringement of any third-party rights.
          </p>

          {/* Section 12 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">12. Suspension and Termination</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">
            We may suspend or terminate your access if:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
            <li>You violate these Terms or any applicable law</li>
            <li>Your account remains inactive for more than 120 consecutive days (free plans)</li>
            <li>Non-payment of fees after reasonable notice</li>
            <li>Required by law enforcement or legal proceedings</li>
          </ul>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            You may terminate your account at any time from Settings. Upon termination, your data is retained for 30 days for recovery, then permanently deleted within 90 days.
          </p>

          {/* Section 13 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">13. Governing Law</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            These Terms are governed by the laws of India. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
          </p>

          {/* Section 14 */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">14. Changes to These Terms</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            We may revise these Terms from time to time. Material changes will be communicated via email or an in-app notification at least 30 days before they take effect. Continued use of the service after changes become effective constitutes your acceptance of the updated Terms.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">15. Contact</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed">
            If you have questions about these Terms, contact us at <strong>legal@zenvict.com</strong> or write to: Zenvict Technologies, Tech Park, Whitefield, Bangalore, India.
          </p>

        </div>
      </section>
    </div>
  );
}
