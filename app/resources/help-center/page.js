"use client";

import { useState } from 'react';

const categories = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Getting Started',
    desc: 'Set up your Zynex workspace, configure your first modules, and onboard your team in minutes.',
    articles: 14,
  },
  {
    icon: 'bi-bar-chart-fill',
    title: 'Finance Plus',
    desc: 'Invoicing, reconciliation, AI-powered forecasting, and financial reporting guides.',
    articles: 22,
  },
  {
    icon: 'bi-people-fill',
    title: 'Human Resources',
    desc: 'Employee onboarding, payroll setup, leave management, and performance reviews.',
    articles: 19,
  },
  {
    icon: 'bi-bullseye',
    title: 'CRM Lite & Marketing',
    desc: 'Pipeline management, lead scoring, campaign automation, and customer engagement.',
    articles: 26,
  },
  {
    icon: 'bi-shield-fill-check',
    title: 'Security & Compliance',
    desc: 'SSO configuration, role-based access, encryption policies, SOC 2, GDPR, and HIPAA.',
    articles: 15,
  },
  {
    icon: 'bi-diagram-3',
    title: 'Integrations & API',
    desc: 'Connect Zynex with Slack, Teams, Salesforce, and 100+ tools via REST APIs and webhooks.',
    articles: 21,
  },
];

const popularArticles = [
  { title: 'How to configure YenAI assistant for your department', category: 'Getting Started', views: '14.2k' },
  { title: 'Setting up SSO with SAML 2.0 for your organization', category: 'Security & Compliance', views: '9.1k' },
  { title: 'Connecting Finance Plus to your bank accounts', category: 'Finance Plus', views: '8.4k' },
  { title: 'Building automated campaign workflows in Marketing Automation', category: 'CRM Lite & Marketing', views: '7.6k' },
  { title: 'Configuring Knowledge Base with your company documents', category: 'Getting Started', views: '6.9k' },
  { title: 'Setting up webhook notifications for Project Plus events', category: 'Integrations & API', views: '5.8k' },
];

const faqs = [
  {
    q: 'How do I reset my password?',
    a: 'Go to Settings > Account > Security and click "Change Password." You will receive a verification email to confirm the change. If you are locked out, use the "Forgot Password" link on the login page.',
  },
  {
    q: 'Can I upgrade or downgrade my plan anytime?',
    a: 'Yes. You can change your plan at any time from the Billing section. Upgrades take effect immediately with prorated charges. Downgrades apply at the end of your current billing cycle.',
  },
  {
    q: 'How do I add new modules like Finance Plus or Project Plus?',
    a: 'Navigate to Settings > Modules > Marketplace. Browse available modules, click "Add to Workspace," and configure permissions. Enterprise plans include all modules by default.',
  },
  {
    q: 'Is my data encrypted?',
    a: 'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Enterprise plans also support customer-managed encryption keys (CMEK) and dedicated data residency.',
  },
  {
    q: 'How does YenAI learn from our company data?',
    a: 'YenAI uses retrieval-augmented generation (RAG) to reference your Knowledge Base documents. Your data never leaves your tenant and is not used to train external models. You control exactly which documents YenAI can access.',
  },
  {
    q: 'What are the API rate limits?',
    a: 'Starter plans: 100 requests/minute. Professional plans: 1,000 requests/minute. Enterprise plans: Custom limits with burst allowances. All plans include rate limit headers in API responses.',
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-[#056CB8] text-white pt-40 max-md:pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-white/50 mb-8">Home / Resources / Help Center</p>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            HELP CENTER
          </span>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-6 max-md:text-[2.2rem]">
            How can we help you?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Search our knowledge base or browse categories to find answers, guides, and best practices for every Zynex product.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <i className="bi bi-bullseye text-[#056CB8]"></i>
            </div>
            <input
              type="text"
              placeholder="Search articles, guides, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 pl-14 pr-6 border border-[#e0e0e0] bg-white text-[#111111] text-base font-medium rounded-none outline-none transition-colors focus:border-[#056CB8] placeholder:text-[#555555]"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
            <span className="text-xs text-white/50 font-medium">Popular:</span>
            {['SSO setup', 'YenAI', 'Finance Plus', 'Webhooks', 'Knowledge Base'].map((tag, i) => (
              <span key={i} className="text-xs font-semibold text-white bg-white/10 border border-white/20 px-3 py-1 cursor-pointer hover:bg-white/20 transition-colors">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
            Browse by Category
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Find help organized by product, feature, or topic.
          </p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group border border-[#e0e0e0] p-8 cursor-pointer hover:border-[#056CB8] transition-colors"
              >
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mb-5">
                  <i className={`bi ${cat.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{cat.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-5">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#555555] font-medium">{cat.articles} articles</span>
                  <span className="text-sm text-[#056CB8] font-semibold group-hover:translate-x-1 transition-transform">
                    Browse &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR ARTICLES ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex max-md:flex-col justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-[2.25rem] font-bold text-[#111111] max-md:text-[1.75rem]">Popular Articles</h2>
              <p className="text-[#555555] mt-2">Most read by the Zynex community this month</p>
            </div>
            <a href="/contact" className="text-sm text-[#056CB8] font-semibold">View all articles &rarr;</a>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {popularArticles.map((article, i) => (
              <div
                key={i}
                className="group bg-white border border-[#e0e0e0] p-6 flex items-start gap-5 cursor-pointer hover:border-[#056CB8] transition-colors"
              >
                <div className="w-10 h-10 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#056CB8]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#111111] mb-2 leading-snug group-hover:text-[#056CB8] transition-colors">{article.title}</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#555555] font-medium">{article.category}</span>
                    <span className="text-xs text-[#555555]">{article.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[2.25rem] font-bold text-[#111111] mb-4 max-md:text-[1.75rem]">Frequently Asked Questions</h2>
            <p className="text-[#555555]">Quick answers to the most common questions</p>
          </div>

          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border border-[#e0e0e0] border-t-0 first:border-t overflow-hidden transition-colors ${openFaq === i ? 'bg-[#f5f5f5]' : 'bg-white'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="text-sm font-bold text-[#111111] pr-4">{faq.q}</span>
                  <span className={`text-[#555555] text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="px-6 pb-6 text-sm text-[#555555] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SUPPORT ===== */}
      <section className="bg-[#111111] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-center mb-4 max-md:text-[1.75rem]">Still Need Help?</h2>
          <p className="text-white/60 text-center mb-16">Our support team is here for you — pick the channel that works best.</p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
            {[
              {
                icon: 'bi-headset',
                title: 'Live Chat',
                desc: 'Get instant help from our team. Average response time under 2 minutes during business hours.',
                cta: 'Start a conversation',
              },
              {
                icon: 'bi-inbox-fill',
                title: 'Email Support',
                desc: 'Send us a detailed message at support@zynex.ai. We respond within 4 business hours.',
                cta: 'Send an email',
              },
              {
                icon: 'bi-people-fill',
                title: 'Community Forum',
                desc: 'Join 12,000+ Zynex users sharing tips, solutions, and product feedback.',
                cta: 'Join the community',
              },
            ].map((channel, i) => (
              <a
                key={i}
                href="/contact"
                className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-[#056CB8]/20 flex items-center justify-center mb-5">
                  <i className={`bi ${channel.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">{channel.desc}</p>
                <span className="text-sm font-semibold text-[#056CB8]">
                  {channel.cta} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
