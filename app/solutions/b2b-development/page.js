export const metadata = {
  title: 'B2B Web Development | Zenvict',
  description: 'Custom B2B web portals, API platforms, and integration solutions built for enterprise-grade security and performance.',
  alternates: { canonical: 'https://zenvict.com/solutions/b2b-development' },
  openGraph: {
    title: 'B2B Web Development | Zenvict',
    description: 'Custom B2B web portals, API platforms, and integration solutions built for enterprise-grade security and performance.',
  },
};

export default function B2BDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://zenvict.com/solutions" },
          { "@type": "ListItem", "position": 3, "name": "B2B Development" }
        ]
      }) }} />

      {/* ===== HERO WITH ARCHITECTURE DIAGRAM ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Solutions / B2B Development</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-6" data-animate="fade-up">
              <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 w-fit">
                B2B WEB DEVELOPMENT
              </span>
              <h1 className="text-[3rem] font-bold leading-[1.1] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
                Web Applications That Mean Business
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                We build web applications for companies that sell to other companies.
                Portals, dashboards, automation platforms, and integration hubs —
                purpose-built for complex B2B workflows.
              </p>
              <div className="flex gap-4 flex-wrap mt-2">
                <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                  Discuss Your Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                </a>
                <a href="/resources/partners" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
                  View Case Studies
                </a>
              </div>
              <p className="text-white/40 text-sm mt-2">200+ B2B applications delivered</p>
            </div>

            {/* Architecture Diagram Mockup */}
            <div className="bg-white/5 border border-white/10 p-6 max-lg:max-w-lg" data-animate="fade-right">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-white/80">System Architecture</span>
                <span className="text-xs text-white/40">B2B Platform</span>
              </div>
              {/* API Gateway Layer */}
              <div className="bg-[#056CB8]/20 border border-[#056CB8]/30 p-3 text-center mb-3">
                <p className="text-xs font-bold text-[#056CB8]">API Gateway</p>
              </div>
              {/* Service Layer */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {['Auth Service', 'Data Service', 'Integration Hub'].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-2 text-center">
                    <p className="text-[10px] text-white/60">{s}</p>
                  </div>
                ))}
              </div>
              {/* App Layer */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {['Client Portal', 'Admin Dashboard', 'Vendor Portal', 'Analytics Engine'].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-2 text-center">
                    <p className="text-[10px] text-white/60">{s}</p>
                  </div>
                ))}
              </div>
              {/* Database Layer */}
              <div className="bg-white/5 border border-white/10 p-3 text-center">
                <p className="text-[10px] text-white/40">PostgreSQL &middot; Redis &middot; Elasticsearch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS RIBBON ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-8 text-center" data-animate="fade-in">
          {[
            { value: '200+', label: 'B2B Apps Delivered' },
            { value: '96%', label: 'Client Retention' },
            { value: '40%', label: 'Efficiency Gain' },
            { value: '< 4mo', label: 'Avg Time to MVP' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/80 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHAT WE BUILD — 6 SERVICE CARDS ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Applications Designed for Business Complexity
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Purpose-built B2B solutions that handle the complexity consumer apps never need to.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { icon: 'bi-people', title: 'Custom Web Portals', desc: 'Secure, role-based portals for partners, vendors, and enterprise clients with SSO and workflow automation.' },
              { icon: 'bi-arrow-left-right', title: 'API & Integration Platforms', desc: 'Robust API gateways, webhook systems, and integration hubs connecting your ecosystem of tools.' },
              { icon: 'bi-file-earmark-text', title: 'Document Management', desc: 'Enterprise DMS with version control, approval workflows, e-signatures, and audit trails.' },
              { icon: 'bi-bar-chart-fill', title: 'Analytics Dashboards', desc: 'Real-time BI dashboards with custom KPIs, data visualization, and automated reporting.' },
              { icon: 'bi-sliders', title: 'Workflow Automation', desc: 'Digitize complex processes with configurable workflows, rule engines, and SLA tracking.' },
              { icon: 'bi-diagram-3', title: 'Multi-Tenant Platforms', desc: 'White-label B2B platforms with tenant isolation, custom branding, and enterprise SSO.' },
            ].map((svc, i) => (
              <div key={i} className="border border-[#e0e0e0] p-8 hover:border-[#056CB8] transition-colors">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mb-4">
                  <i className={`bi ${svc.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{svc.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ZENVICT FOR B2B — Split Layout ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-5 max-md:grid-cols-1 gap-12">
          <div className="col-span-2 max-md:col-span-1" data-animate="fade-left">
            <h2 className="text-[2rem] font-bold text-[#111111] mb-4 max-md:text-[1.5rem]">
              We Understand B2B. That Changes Everything.
            </h2>
            <p className="text-[#555555] leading-relaxed">
              B2B applications need role-based access, complex data models, audit
              compliance, multi-org architectures, and enterprise system integrations.
              We have built hundreds of them.
            </p>
          </div>
          <div className="col-span-3 max-md:col-span-1 flex flex-col gap-4" data-animate="fade-right">
            {[
              { num: '01', title: 'Enterprise Security', desc: 'SOC 2, GDPR, HIPAA-ready. Role-based access, SSO, and encrypted data at rest and in transit.' },
              { num: '02', title: 'Complex Data Models', desc: 'Multi-entity relationships, hierarchical permissions, and polymorphic data structures — handled elegantly.' },
              { num: '03', title: 'Integration Ready', desc: 'REST/GraphQL APIs, webhook systems, and pre-built connectors for Salesforce, SAP, HubSpot, and more.' },
              { num: '04', title: 'Scale Architecture', desc: 'Microservices, event-driven design, and horizontal scaling for enterprise traffic patterns.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 flex gap-5">
                <span className="text-3xl font-bold text-[#e0e0e0] flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-base font-bold text-[#111111] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS — 4 Steps ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem]">
              Four Phases to Production-Ready
            </h2>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6" data-animate="fade-up">
            {[
              { step: '01', title: 'Discover', desc: 'Map business processes, user journeys, and technical landscape to define optimal architecture.' },
              { step: '02', title: 'Design', desc: 'UX-first prototyping with interactive wireframes. Stakeholder reviews at every milestone.' },
              { step: '03', title: 'Develop', desc: 'Agile sprints with continuous integration and comprehensive test coverage.' },
              { step: '04', title: 'Deploy', desc: 'Production deployment with monitoring, documentation, training, and post-launch support.' },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#056CB8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {p.step}
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{p.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Let&apos;s build something your clients will love
          </h2>
          <p className="text-white/60 mb-8">
            From complex B2B portals to custom integrations, our development team ships production-ready solutions on time and on budget.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Discuss Your Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
