export const metadata = {
  title: 'Enterprise Solutions — Custom Software for Complex Business Needs',
  description: 'Tailored enterprise software solutions built for scale. From legacy modernization to custom integrations, we architect systems that grow with your business.',
  alternates: { canonical: 'https://zenvict.com/solutions/enterprise-solutions' },
  openGraph: {
    title: 'Enterprise Solutions — Custom Software for Complex Business Needs',
    description: 'Tailored enterprise software solutions built for scale. From legacy modernization to custom integrations, we architect systems that grow with your business.',
  },
};

export default function EnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://zenvict.com/solutions" },
          { "@type": "ListItem", "position": 3, "name": "Enterprise Solutions" }
        ]
      }) }} />

      {/* ===== HERO WITH METRIC CARDS ===== */}
      <section className="bg-white pt-40 max-md:pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#555555] mb-8">Home / Solutions / Enterprise Solutions</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-6" data-animate="fade-up">
              <span className="inline-block bg-[#056CB8]/10 text-[#056CB8] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 w-fit">
                ENTERPRISE SOLUTIONS
              </span>
              <h1 className="text-[3rem] font-bold text-[#111111] leading-[1.1] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
                Software That Scales With Ambition
              </h1>
              <p className="text-[#555555] text-lg leading-relaxed">
                Purpose-built enterprise platforms that unify operations, accelerate
                decision-making, and give your organization the agility to outperform.
                From ERP to CRM to BI — one integrated ecosystem.
              </p>
              <div className="flex gap-4 flex-wrap mt-2">
                <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                  Talk to an Expert <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                </a>
                <a href="/resources/partners" className="inline-flex items-center justify-center px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#f5f5f5] transition-colors">
                  View Case Studies
                </a>
              </div>
              <p className="text-xs text-[#555555] mt-2">Trusted by Fortune 500 companies</p>
            </div>

            {/* Stacked Metric Cards */}
            <div className="flex flex-col gap-4 max-lg:max-w-md" data-animate="fade-right">
              {[
                { icon: 'bi-graph-up-arrow', label: 'Revenue Growth', value: '+34%' },
                { icon: 'bi-clock-history', label: 'Time Saved', value: '120h/mo', indent: true },
                { icon: 'bi-shield-fill-check', label: 'Uptime', value: '99.99%' },
              ].map((card, i) => (
                <div key={i} className={`bg-white border border-[#e0e0e0] p-5 flex items-center gap-4 hover:border-[#056CB8] transition-colors ${card.indent ? 'ml-6 max-md:ml-0' : ''}`}>
                  <div className="w-11 h-11 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`bi ${card.icon} text-lg text-[#056CB8]`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-[#555555] mb-0.5">{card.label}</p>
                    <p className="text-2xl font-bold text-[#111111]">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="bg-[#f5f5f5] py-6 px-6 text-center">
        <p className="text-[10px] font-bold tracking-[0.15em] text-[#555555] uppercase mb-4">
          Trusted by Industry Leaders
        </p>
        <div className="flex justify-center flex-wrap gap-10">
          {['Fortune 500 Companies', 'Global Banks', 'Healthcare Systems', 'Manufacturing Giants', 'Logistics Leaders'].map((name, i) => (
            <span key={i} className="text-sm font-semibold text-[#555555]/50">{name}</span>
          ))}
        </div>
      </section>

      {/* ===== SOLUTIONS GRID ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              End-to-End Enterprise Platforms
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Every solution is modular, extensible, and designed to integrate with your existing landscape.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { icon: 'bi-diagram-3', title: 'ERP Systems', desc: 'Unified resource planning connecting finance, operations, HR, and supply chain.', modules: ['Financial Management', 'Supply Chain', 'Procurement'] },
              { icon: 'bi-people-fill', title: 'CRM Platforms', desc: 'Customer relationship management for complex sales cycles and multi-channel engagement.', modules: ['Lead Scoring', 'Pipeline Intelligence', 'Account Management'] },
              { icon: 'bi-bar-chart-fill', title: 'Business Intelligence', desc: 'Transform raw data into strategic decisions with real-time dashboards and predictive analytics.', modules: ['Data Visualization', 'KPI Tracking', 'Predictive Models'] },
              { icon: 'bi-shield-fill-check', title: 'Compliance & Security', desc: 'Enterprise-grade security with SOC 2, GDPR, HIPAA compliance built into every layer.', modules: ['Access Control', 'Audit Trails', 'Data Encryption'] },
              { icon: 'bi-sliders', title: 'Workflow Automation', desc: 'Eliminate manual bottlenecks with intelligent process automation that learns and adapts.', modules: ['Process Designer', 'Rule Engine', 'API Orchestration'] },
              { icon: 'bi-arrow-left-right', title: 'System Integration', desc: 'Connect legacy systems with modern platforms through 500+ enterprise connectors.', modules: ['API Gateway', 'Data Sync', 'Legacy Migration'] },
            ].map((sol, i) => (
              <div key={i} className="border border-[#e0e0e0] p-8 hover:border-[#056CB8] transition-colors">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mb-4">
                  <i className={`bi ${sol.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{sol.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-4">{sol.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sol.modules.map((mod, j) => (
                    <span key={j} className="bg-[#f5f5f5] text-xs px-3 py-1 text-[#056CB8] font-semibold">{mod}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-5 max-md:grid-cols-1 gap-12">
          <div className="col-span-2 max-md:col-span-1" data-animate="fade-left">
            <h2 className="text-[2rem] font-bold text-[#111111] mb-4 max-md:text-[1.5rem]">
              Built Different. Delivered Faster.
            </h2>
            <p className="text-[#555555] leading-relaxed">
              We combine deep domain expertise with agile engineering to deliver
              enterprise solutions that do not just meet specifications — they
              redefine what is possible for your operations.
            </p>
          </div>
          <div className="col-span-3 max-md:col-span-1 grid grid-cols-2 max-sm:grid-cols-1 gap-4" data-animate="fade-right">
            {[
              { num: '01', title: 'Discovery & Architecture', desc: 'Deep-dive into your processes, pain points, and growth targets to architect the perfect solution.' },
              { num: '02', title: 'Agile Development', desc: 'Two-week sprint cycles with continuous stakeholder demos. You see progress, not just promises.' },
              { num: '03', title: 'Migration & Integration', desc: 'Zero-downtime migration strategies. We bring your legacy data forward without disrupting operations.' },
              { num: '04', title: 'Continuous Optimization', desc: 'Post-launch support with performance monitoring, feature evolution, and proactive scaling.' },
            ].map((step, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6">
                <p className="text-3xl font-bold text-[#e0e0e0] mb-3">{step.num}</p>
                <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES IMPACT ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem]">
              Proven Impact Across Sectors
            </h2>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { stat: '45%', label: 'Reduction in production waste', industry: 'Manufacturing' },
              { stat: '3x', label: 'Faster regulatory reporting', industry: 'Financial Services' },
              { stat: '60%', label: 'Improvement in patient flow', industry: 'Healthcare' },
              { stat: '28%', label: 'Decrease in operational costs', industry: 'Logistics' },
            ].map((ind, i) => (
              <div key={i} className="border border-[#e0e0e0] p-8 text-center">
                <p className="text-4xl font-bold text-[#056CB8] mb-2">{ind.stat}</p>
                <p className="text-sm text-[#555555] mb-4">{ind.label}</p>
                <div className="border-t border-[#e0e0e0] pt-4">
                  <p className="text-sm font-bold text-[#111111]">{ind.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Ready to modernize your enterprise systems?
          </h2>
          <p className="text-white/60 mb-8">
            Our solutions architects will assess your current infrastructure and design a roadmap for digital transformation.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Schedule a Discovery Call <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/" className="text-white/50 text-sm hover:text-white transition-colors">
              Back to home &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
