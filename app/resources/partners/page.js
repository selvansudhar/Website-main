"use client";

import { useState } from 'react';

const partnerTypes = [
  {
    icon: 'bi-diagram-3',
    title: 'Technology Partners',
    desc: 'Integrate your platform with Zenvict to deliver joint solutions. Co-build products, share APIs, and unlock new markets together across healthcare, manufacturing, and financial services.',
    benefits: ['Joint product development', 'Shared API access & sandbox', 'Co-marketing programs', 'Technical integration support', 'Early access to new modules'],
  },
  {
    icon: 'bi-people-fill',
    title: 'Solutions Partners',
    desc: 'Help businesses implement and customize Zenvict. Earn revenue by delivering consulting, integration, and managed services for Finance Plus, CRM Lite, HR, and the full product suite.',
    benefits: ['Certified training programs', 'Lead referral pipeline', 'Revenue sharing model', 'Dedicated partner manager', 'Implementation playbooks'],
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Reseller Partners',
    desc: 'Distribute Zenvict products to your customer base. Access wholesale pricing, sales enablement tools, deal registration, and co-sell support from our partnerships team.',
    benefits: ['Wholesale pricing tiers', 'Deal registration protection', 'Sales enablement kit', 'Quarterly business reviews', 'Demo environment access'],
  },
];

const tiers = [
  {
    name: 'Starter',
    revenue: 'Getting Started',
    benefits: ['Partner portal access', 'Basic training & certification', 'Co-branded materials', 'Email support'],
  },
  {
    name: 'Growth',
    revenue: 'Scaling Together',
    benefits: ['Everything in Starter', 'Dedicated partner manager', 'Lead referral program', 'Priority support', 'Joint marketing support'],
    popular: true,
  },
  {
    name: 'Strategic',
    revenue: 'Long-term Partnership',
    benefits: ['Everything in Growth', 'Executive sponsorship', 'Custom integration support', 'Event co-sponsorship', 'Strategic planning sessions', 'Early access to product roadmap'],
  },
];

const stats = [
  { value: '3', label: 'Partner Types' },
  { value: '5+', label: 'Industries Covered' },
  { value: '5+', label: 'Products to Resell' },
  { value: '24/7', label: 'Partner Support' },
];

const testimonials = [];

export default function Partners() {
  const [activeType, setActiveType] = useState(0);

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://zenvict.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Partners" }
        ]
      }) }} />

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto" data-animate="fade-up">
          <p className="text-sm text-white/50 mb-8">Home / Resources / Partners</p>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            PARTNER PROGRAM
          </span>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-6 max-md:text-[2.2rem]">
            Grow Together. Win Together.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Join the Zenvict Partner Program and unlock new revenue streams, co-selling opportunities, and world-class support to accelerate your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Become a Partner <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Partner Login
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-8 text-center" data-animate="fade-in">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/80 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNER TYPES ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Find Your Path
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Three partnership models designed for different business types and growth strategies.
            </p>
          </div>

          {/* Type selector tabs */}
          <div className="flex gap-3 justify-center mb-12 max-md:flex-col max-md:items-center">
            {partnerTypes.map((type, i) => (
              <button
                key={i}
                onClick={() => setActiveType(i)}
                className={`flex items-center gap-2 px-6 py-3 border cursor-pointer transition-colors text-sm font-semibold ${
                  activeType === i
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#111111] border-[#e0e0e0] hover:border-[#111111]'
                }`}
              >
                <i className={`bi ${type.icon} text-base`}></i>
                {type.title}
              </button>
            ))}
          </div>

          {/* Active type details */}
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-start">
            <div data-animate="fade-left">
              <div className="w-14 h-14 bg-[#056CB8]/10 flex items-center justify-center mb-6">
                <i className={`bi ${partnerTypes[activeType].icon} text-2xl text-[#056CB8]`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">{partnerTypes[activeType].title}</h3>
              <p className="text-[#555555] leading-relaxed text-base mb-8">{partnerTypes[activeType].desc}</p>
              <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                Apply Now <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
              </a>
            </div>

            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-8" data-animate="fade-right">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-6 pb-3 border-b border-[#e0e0e0]">
                Key Benefits
              </h4>
              <div className="flex flex-col gap-4">
                {partnerTypes[activeType].benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className="bi bi-check-circle-fill text-[#22c55e] text-sm flex-shrink-0"></i>
                    <span className="text-sm text-[#111111] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER TIERS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Partner Tiers
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Grow your partnership and unlock more value at every level.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative bg-white border p-8 ${
                  tier.popular ? 'border-[#056CB8]' : 'border-[#e0e0e0]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-6 bg-[#056CB8] text-white text-[10px] font-bold px-4 py-1 uppercase tracking-[0.1em]">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#111111] mb-1">{tier.name}</h3>
                <p className="text-sm text-[#555555] mb-6">{tier.revenue}</p>

                <div className="flex flex-col gap-3">
                  {tier.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <i className="bi bi-check-circle-fill text-[#22c55e] text-xs mt-0.5 flex-shrink-0"></i>
                      <span className="text-sm text-[#555555]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (hidden until real partner stories are available) ===== */}

      {/* ===== INDUSTRY FOCUS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Industries We Serve Together
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Our partners help Zenvict deliver industry-specific solutions across five key verticals.
            </p>
          </div>

          <div className="grid grid-cols-5 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-4" data-animate="fade-up" data-delay="2">
            {[
              { icon: 'bi-activity', name: 'Healthcare' },
              { icon: 'bi-bar-chart-line-fill', name: 'Financial Services' },
              { icon: 'bi-sliders', name: 'Manufacturing' },
              { icon: 'bi-people', name: 'Higher Education' },
              { icon: 'bi-star-fill', name: 'Retail' },
            ].map((ind, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 text-center">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mx-auto mb-3">
                  <i className={`bi ${ind.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <p className="text-sm font-bold text-[#111111]">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Grow your business as a Zenvict partner
          </h2>
          <p className="text-white/60 mb-8">
            Join our partner ecosystem and unlock co-selling opportunities, technical training, and dedicated partner support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Apply to Partner Program <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Download Partner Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
