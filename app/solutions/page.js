import Link from 'next/link';

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
    tag: 'Artificial Intelligence',
    color: '#056CB8',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Enterprise Solutions',
    desc: 'Purpose-built enterprise platforms that unify operations, accelerate decision-making, and give your organization the agility to outperform. ERP, CRM, and BI in one ecosystem.',
    href: '/solutions/enterprise-solutions',
    tag: 'Enterprise Software',
    color: '#22c55e',
  },
  {
    icon: 'bi-diagram-3',
    title: 'SaaS Development',
    desc: 'From zero-to-one MVP to enterprise-scale platform — we design, build, and launch cloud-native SaaS applications with multi-tenant architecture and subscription billing.',
    href: '/solutions/saas-development',
    tag: 'Cloud Platforms',
    color: '#8b5cf6',
  },
  {
    icon: 'bi-people-fill',
    title: 'B2B Web Development',
    desc: 'Custom portals, dashboards, automation platforms, and integration hubs purpose-built for complex B2B workflows and enterprise-grade security.',
    href: '/solutions/b2b-development',
    tag: 'Web Applications',
    color: '#f59e0b',
  },
  {
    icon: 'bi-inbox-fill',
    title: 'E-Commerce Solutions',
    desc: 'End-to-end e-commerce development — headless storefronts, omnichannel platforms, payment integrations, and AI-powered personalization that converts.',
    href: '/solutions/ecommerce',
    tag: 'Digital Commerce',
    color: '#F60014',
  },
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare', icon: 'bi-star-fill', color: '#F60014' },
  { name: 'Financial Services', href: '/industries/financial-services', icon: 'bi-diagram-3', color: '#056CB8' },
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: 'bi-sliders', color: '#f59e0b' },
  { name: 'Higher Education', href: '/industries/higher-education', icon: 'bi-people-fill', color: '#8b5cf6' },
  { name: 'Retail', href: '/industries/retail', icon: 'bi-inbox-fill', color: '#22c55e' },
];

export default function SolutionsIndex() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://zynex.ai/solutions" }
        ]
      }) }} />

      {/* ===== SECTION 1: GRADIENT HERO ===== */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#1a1a2e] to-[#111111] text-white pt-44 max-md:pt-28 pb-28 px-6 max-sm:px-4 text-center overflow-hidden">
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#056CB8]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto" data-animate="fade-up">
          <span className="inline-block border border-white/20 text-white/60 text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2 mb-7 rounded-full">
            ZYNEX SOLUTIONS
          </span>
          <h1 className="text-[3.25rem] max-lg:text-[2.5rem] max-md:text-[2rem] font-bold leading-[1.08] mb-7">
            The Right Solution for<br className="max-md:hidden" /> Every Challenge
          </h1>
          <p className="text-white/55 text-lg max-md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            From AI-powered automation to custom software development — Zynex delivers end-to-end solutions that transform how businesses operate, compete, and grow.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="group inline-flex items-center gap-3 px-9 py-4 bg-[#056CB8] text-white font-bold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              TALK TO AN EXPERT <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </Link>
            <Link href="/resources/concierge" className="inline-flex items-center gap-2 px-9 py-4 border border-white/30 text-white/70 font-bold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: ALTERNATING SOLUTION SHOWCASE ===== */}
      <section className="bg-white py-28 max-sm:py-14 px-6 max-sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20" data-animate="fade-up">
            <h2 className="text-[2.5rem] max-md:text-[1.75rem] max-sm:text-[1.4rem] font-bold text-[#111111] mb-4">
              What We Build
            </h2>
            <p className="text-[#555555] max-w-xl mx-auto">
              Five core solution areas, each backed by deep expertise and a relentless focus on results.
            </p>
          </div>

          <div className="flex flex-col">
            {solutions.map((sol, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={i}>
                  {i > 0 && <div className="border-t border-[#e0e0e0]" />}
                  <div
                    className={`grid grid-cols-[100px_1fr] max-md:grid-cols-1 gap-10 max-md:gap-6 items-center py-14 max-md:py-10 ${isEven ? 'md:grid-cols-[1fr_100px]' : 'md:grid-cols-[100px_1fr]'}`}
                    data-animate={isEven ? 'fade-left' : 'fade-right'}
                  >
                    {/* Icon box - comes first on odd, last on even (desktop) */}
                    <div className={`${isEven ? 'max-md:order-first md:order-last' : ''}`}>
                      <div
                        className="w-20 h-20 max-sm:w-14 max-sm:h-14 flex items-center justify-center rounded-none max-md:mx-0"
                        style={{ backgroundColor: `${sol.color}12` }}
                      >
                        <i className={`bi ${sol.icon} text-3xl`} style={{ color: sol.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? 'md:text-right max-md:text-left' : ''}>
                      <span
                        className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 mb-4 rounded-none"
                        style={{ backgroundColor: `${sol.color}12`, color: sol.color }}
                      >
                        {sol.tag}
                      </span>
                      <h3 className="text-xl font-bold text-[#111111] mb-3">{sol.title}</h3>
                      <p className="text-[#555555] text-sm leading-relaxed mb-5 max-w-lg" style={isEven ? { marginLeft: 'auto' } : {}}>
                        {sol.desc}
                      </p>
                      <Link
                        href={sol.href}
                        className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.05em] transition-colors"
                        style={{ color: sol.color }}
                      >
                        Learn more <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: INDUSTRIES - HORIZONTAL CARDS ===== */}
      <section className="bg-[#f5f5f5] py-28 max-sm:py-14 px-6 max-sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-[2.5rem] max-md:text-[1.75rem] max-sm:text-[1.4rem] font-bold text-[#111111] mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#555555] max-w-xl mx-auto">
              Deep domain expertise across key verticals, delivering solutions that understand your industry inside out.
            </p>
          </div>

          <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-5" data-animate="fade-up">
            {industries.map((ind, i) => (
              <Link
                key={i}
                href={ind.href}
                className="group bg-white border border-[#e0e0e0] p-7 max-sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mx-auto mb-4 rounded-none"
                  style={{ backgroundColor: `${ind.color}12` }}
                >
                  <i className={`bi ${ind.icon} text-2xl`} style={{ color: ind.color }} />
                </div>
                <p className="text-sm font-bold text-[#111111] mb-3">{ind.name}</p>
                <span className="text-xs font-bold uppercase tracking-[0.05em] transition-colors" style={{ color: ind.color }}>
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: WHY CHOOSE ZYNEX - SPLIT LAYOUT ===== */}
      <section className="bg-white py-28 max-sm:py-14 px-6 max-sm:px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-20 max-sm:gap-10 items-center">
          <div data-animate="fade-left">
            <h2 className="text-[2.5rem] max-md:text-[1.75rem] max-sm:text-[1.4rem] font-bold text-[#111111] mb-6 leading-[1.1]">
              Why businesses<br className="max-md:hidden" /> choose Zynex
            </h2>
            <p className="text-[#555555] leading-relaxed mb-10">
              We don&apos;t just build software — we become your technology partner. Every solution is designed around your business logic, compliance requirements, and growth trajectory. From first conversation to production launch, we stay aligned with your vision.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-3 px-9 py-4 bg-[#056CB8] text-white font-bold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              START A CONVERSATION <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </Link>
          </div>

          <div className="flex flex-col gap-5" data-animate="fade-right">
            {[
              { num: '10+', label: 'Products Built' },
              { num: '25+', label: 'Projects Delivered' },
              { num: '30+', label: 'Happy Clients' },
              { num: '5+', label: 'Industries Served' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 max-sm:p-4 flex items-center gap-6 border-l-[3px] border-l-[#056CB8]">
                <span className="text-3xl max-sm:text-2xl font-bold text-[#056CB8] min-w-[90px]">{stat.num}</span>
                <span className="text-sm text-[#555555] font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CTA ===== */}
      <section className="bg-[#111111] text-white py-28 max-sm:py-14 px-6 max-sm:px-4 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.5rem] max-md:text-[1.75rem] max-sm:text-[1.4rem] font-bold mb-5 leading-[1.1]">
            Not sure which solution fits?
          </h2>
          <p className="text-white/55 text-lg max-md:text-base mb-10 leading-relaxed">
            Tell us about your challenges and our team will recommend the right combination of products and services for your business.
          </p>
          <Link href="/resources/concierge" className="group inline-flex items-center gap-3 px-10 py-4 bg-[#056CB8] text-white font-bold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
            BOOK FREE CONSULTATION <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
