export const metadata = {
  title: 'Solutions | Zynex',
  description: 'Explore Zynex solutions — AI solutions, enterprise software, SaaS development, B2B web applications, and e-commerce platforms.',
  alternates: { canonical: 'https://zynex.ai/solutions' },
  openGraph: {
    title: 'Solutions | Zynex',
    description: 'Explore Zynex solutions — AI solutions, enterprise software, SaaS development, B2B web applications, and e-commerce platforms.',
  },
};

const solutions = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'AI Solutions',
    desc: 'Deploy production-ready AI in weeks. Generative models, predictive analytics, NLP engines, and intelligent automation tailored to your industry and workflows.',
    href: '/solutions/ai-solutions',
    stats: '300+ enterprise teams',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Enterprise Solutions',
    desc: 'Purpose-built enterprise platforms that unify operations, accelerate decision-making, and give your organization the agility to outperform. ERP, CRM, and BI in one ecosystem.',
    href: '/solutions/enterprise-solutions',
    stats: 'Fortune 500 trusted',
  },
  {
    icon: 'bi-bar-chart-fill',
    title: 'SaaS Development',
    desc: 'From zero-to-one MVP to enterprise-scale platform — we design, build, and launch cloud-native SaaS applications with multi-tenant architecture and subscription billing.',
    href: '/solutions/saas-development',
    stats: '50+ products launched',
  },
  {
    icon: 'bi-people-fill',
    title: 'B2B Web Development',
    desc: 'Custom portals, dashboards, automation platforms, and integration hubs purpose-built for complex B2B workflows and enterprise-grade security.',
    href: '/solutions/b2b-development',
    stats: '200+ apps delivered',
  },
  {
    icon: 'bi-star-fill',
    title: 'E-Commerce Solutions',
    desc: 'End-to-end e-commerce development — headless storefronts, omnichannel platforms, payment integrations, and AI-powered personalization that converts.',
    href: '/solutions/ecommerce',
    stats: '150+ stores launched',
  },
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare', icon: 'bi-activity' },
  { name: 'Financial Services', href: '/industries/financial-services', icon: 'bi-bar-chart-line-fill' },
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: 'bi-sliders' },
  { name: 'Higher Education', href: '/industries/higher-education', icon: 'bi-people' },
  { name: 'Retail', href: '/industries/retail', icon: 'bi-star-fill' },
];

export default function SolutionsIndex() {
  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Solutions</p>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            SOLUTIONS
          </span>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-6 max-md:text-[2.2rem]">
            The Right Solution for<br />Every Challenge
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            From AI-powered automation to custom software development — Zynex delivers end-to-end solutions that transform how businesses operate, compete, and grow.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Talk to an Expert
            </a>
            <a href="/resources/concierge" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS GRID ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
            What We Do
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Five core solution areas, each backed by deep expertise and proven delivery.
          </p>

          <div className="flex flex-col gap-6">
            {solutions.map((sol, i) => (
              <a
                key={i}
                href={sol.href}
                className="group grid grid-cols-[auto_1fr_auto] max-md:grid-cols-1 gap-6 items-center border border-[#e0e0e0] p-8 hover:border-[#056CB8] transition-colors"
              >
                <div className="w-14 h-14 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                  <i className={`bi ${sol.icon} text-2xl text-[#056CB8]`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#056CB8] transition-colors">{sol.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{sol.desc}</p>
                </div>
                <div className="flex flex-col items-end max-md:items-start gap-2">
                  <span className="text-xs text-[#555555] font-medium">{sol.stats}</span>
                  <span className="text-sm font-semibold text-[#056CB8]">Learn more &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
            Industries We Serve
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Deep domain expertise across five key verticals.
          </p>

          <div className="grid grid-cols-5 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
            {industries.map((ind, i) => (
              <a key={i} href={ind.href} className="group bg-white border border-[#e0e0e0] p-6 text-center hover:border-[#056CB8] transition-colors">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mx-auto mb-3">
                  <i className={`bi ${ind.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <p className="text-sm font-bold text-[#111111] group-hover:text-[#056CB8] transition-colors">{ind.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ZYNEX ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
          <div>
            <h2 className="text-[2.25rem] font-bold text-[#111111] mb-6 max-md:text-[1.75rem]">
              Why Businesses Choose Zynex
            </h2>
            <p className="text-[#555555] leading-relaxed mb-8">
              We don't just build software — we become your technology partner. Every solution is designed around your business logic, compliance requirements, and growth trajectory.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Start a Conversation
            </a>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: '500+', label: 'Businesses powered globally' },
              { num: '16', label: 'Data centers worldwide' },
              { num: '150+', label: 'Countries served' },
              { num: '99.99%', label: 'Platform uptime SLA' },
            ].map((stat, i) => (
              <div key={i} className="border border-[#e0e0e0] p-5 flex items-center gap-5">
                <span className="text-2xl font-bold text-[#056CB8] min-w-[80px]">{stat.num}</span>
                <span className="text-sm text-[#555555]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-white/60 mb-8">
            Our Concierge team will map your needs to the right solution — free, no commitment.
          </p>
          <a href="/resources/concierge" className="inline-flex items-center justify-center px-10 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
