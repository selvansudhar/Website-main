"use client";

import { useState } from 'react';

const cookieCategories = [
  {
    name: 'Strictly Necessary',
    description: 'These cookies are essential for the Zenvict platform to function. They enable core features like authentication, session management, security, and load balancing. Without these cookies, the service cannot operate. They cannot be disabled.',
    cookies: [
      { name: 'zenvict_session', purpose: 'Maintains your authenticated session', duration: 'Session' },
      { name: 'zenvict_csrf', purpose: 'Prevents cross-site request forgery attacks', duration: 'Session' },
      { name: 'zenvict_lb', purpose: 'Distributes traffic across servers for optimal performance', duration: '1 hour' },
      { name: 'zenvict_consent', purpose: 'Stores your cookie consent preferences', duration: '12 months' },
      { name: 'zenvict_auth', purpose: 'Authenticates your identity across modules', duration: '30 days' },
    ],
    required: true,
  },
  {
    name: 'Functional',
    description: 'Functional cookies remember your preferences and settings — such as language, timezone, dashboard layout, and chat widget state. Disabling these may affect personalization features but will not prevent core platform use.',
    cookies: [
      { name: 'zenvict_lang', purpose: 'Remembers your preferred language', duration: '12 months' },
      { name: 'zenvict_tz', purpose: 'Stores your timezone preference', duration: '12 months' },
      { name: 'zenvict_theme', purpose: 'Remembers your light/dark theme selection', duration: '12 months' },
      { name: 'zenvict_chat', purpose: 'Preserves live chat widget state and history', duration: '30 days' },
      { name: 'zenvict_layout', purpose: 'Saves your dashboard layout preferences', duration: '12 months' },
    ],
    required: false,
  },
  {
    name: 'Analytics',
    description: 'Analytics cookies help us understand how visitors interact with our website and platform. This data is aggregated and anonymized — we use it to improve user experience, identify popular features, and optimize performance. We do not use analytics data for advertising.',
    cookies: [
      { name: 'zenvict_analytics', purpose: 'Tracks page views and feature usage (anonymized)', duration: '12 months' },
      { name: 'zenvict_perf', purpose: 'Measures page load times and performance metrics', duration: '30 days' },
      { name: 'zenvict_ref', purpose: 'Identifies the source that referred you to our site', duration: 'Session' },
      { name: 'zenvict_ab', purpose: 'Assigns you to A/B test groups for feature improvements', duration: '90 days' },
    ],
    required: false,
  },
];

export default function CookiePolicy() {
  const lastUpdated = 'March 1, 2026';
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Cookie Policy</p>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-4 max-md:text-[2.2rem]">Cookie Policy</h1>
          <p className="text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* What is a cookie */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">What Is a Cookie?</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">
            A cookie is a small text file placed on your device (computer, phone, or tablet) when you visit a website. Cookies help the site remember your actions and preferences over a period of time, so you don't have to re-enter them each time you visit or navigate between pages.
          </p>
          <p className="text-sm text-[#555555] leading-relaxed mb-12">
            Zenvict uses cookies and similar technologies (local storage, session storage) to operate the platform, remember your preferences, and improve your experience. This policy explains what cookies we use, why we use them, and how you can manage them.
          </p>

          {/* Cookie categories */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">What Cookies Does Zenvict Use?</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-8">
            We organize our cookies into three categories. Click each category to see the specific cookies, their purpose, and how long they last.
          </p>

          <div className="flex flex-col gap-0 mb-12">
            {cookieCategories.map((cat, i) => (
              <div
                key={i}
                className={`border border-[#e0e0e0] border-t-0 first:border-t overflow-hidden transition-colors ${openCategory === i ? 'bg-[#f5f5f5]' : 'bg-white'}`}
              >
                <button
                  onClick={() => setOpenCategory(openCategory === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#111111]">{cat.name}</span>
                    {cat.required && (
                      <span className="text-[10px] font-bold text-[#056CB8] bg-[#056CB8]/10 px-2.5 py-0.5 uppercase tracking-wider">Always Active</span>
                    )}
                  </div>
                  <span className={`text-[#555555] text-xl flex-shrink-0 transition-transform duration-300 ${openCategory === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openCategory === i ? '600px' : '0', opacity: openCategory === i ? 1 : 0 }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-sm text-[#555555] leading-relaxed mb-6">{cat.description}</p>

                    {/* Cookie table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#e0e0e0]">
                            <th className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.1em] py-3 pr-4">Cookie Name</th>
                            <th className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.1em] py-3 pr-4">Purpose</th>
                            <th className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.1em] py-3">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.cookies.map((cookie, j) => (
                            <tr key={j} className="border-b border-[#e0e0e0] last:border-b-0">
                              <td className="py-3 pr-4 text-xs text-[#056CB8] font-mono font-semibold">{cookie.name}</td>
                              <td className="py-3 pr-4 text-xs text-[#555555]">{cookie.purpose}</td>
                              <td className="py-3 text-xs text-[#555555] whitespace-nowrap">{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third party cookies */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">Third-Party Cookies</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">
            Zenvict does not allow third-party advertising cookies on our platform. However, in limited cases, embedded content or integrations may set their own cookies:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-sm text-[#555555] leading-relaxed mb-6">
            <li><strong>YouTube</strong> — If embedded video tutorials are present on help pages</li>
            <li><strong>Google Fonts</strong> — For loading web fonts used across the website</li>
            <li><strong>Payment providers</strong> — Stripe or Razorpay may set cookies during checkout</li>
          </ul>
          <p className="text-sm text-[#555555] leading-relaxed mb-12">
            These third-party cookies are governed by the respective provider's cookie and privacy policies. We have no control over how these cookies are set or used.
          </p>

          {/* How to manage */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">How to Manage Cookies</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed mb-4">
            You have several options for managing cookies:
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6">
              <h3 className="text-sm font-bold text-[#111111] mb-2">Cookie Consent Banner</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                When you first visit Zenvict, you'll see a cookie consent banner where you can accept or reject optional cookies (functional and analytics). You can change your preferences at any time from the footer "Cookie Settings" link.
              </p>
            </div>

            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6">
              <h3 className="text-sm font-bold text-[#111111] mb-2">Browser Settings</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Most browsers allow you to block or delete cookies through their settings. Note that blocking strictly necessary cookies will prevent the Zenvict platform from functioning. Refer to your browser's help documentation for instructions.
              </p>
            </div>

            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6">
              <h3 className="text-sm font-bold text-[#111111] mb-2">Do Not Track (DNT)</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                There is no universal standard for how websites should respond to DNT signals. Currently, Zenvict does not alter its data collection practices in response to DNT browser settings. We recommend using our cookie consent banner for granular control.
              </p>
            </div>
          </div>

          {/* Contact */}
          <h2 className="text-2xl font-bold text-[#111111] mb-2">Questions?</h2>
          <div className="w-12 h-0.5 bg-[#056CB8] mb-6"></div>
          <p className="text-sm text-[#555555] leading-relaxed">
            If you have questions about our use of cookies, contact us at <strong>privacy@zenvict.com</strong> or visit our <a href="/privacy-policy" className="text-[#056CB8] underline">Privacy Policy</a> for full details on how we handle your data.
          </p>

        </div>
      </section>
    </div>
  );
}
