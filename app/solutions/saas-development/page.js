import Link from 'next/link';

export const metadata = {
  title: 'SaaS Development | Zenvict',
  description: 'Full-stack SaaS development services from product architecture and multi-tenant design to launch and scale.',
  alternates: { canonical: 'https://zenvict.com/solutions/saas-development' },
  openGraph: {
    title: 'SaaS Development | Zenvict',
    description: 'Full-stack SaaS development services from product architecture and multi-tenant design to launch and scale.',
  },
};

export default function SaasDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://zenvict.com/solutions" },
          { "@type": "ListItem", "position": 3, "name": "SaaS Development" }
        ]
      }) }} />

      {/* ===== HERO WITH BROWSER MOCKUP ===== */}
      <section className="bg-[#f5f5f5] pt-40 max-md:pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#555555] mb-8">Home / Solutions / SaaS Development</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-6" data-animate="fade-up">
              <span className="inline-block bg-[#056CB8]/10 text-[#056CB8] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 w-fit">
                SAAS DEVELOPMENT
              </span>
              <h1 className="text-[3rem] font-bold text-[#111111] leading-[1.1] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
                Build SaaS Products That Users Love
              </h1>
              <p className="text-[#555555] text-lg leading-relaxed">
                From zero-to-one MVP to enterprise-scale platform — we design, build,
                and launch cloud-native SaaS applications that acquire users, retain them,
                and grow revenue on autopilot.
              </p>
              <div className="flex gap-4 flex-wrap mt-2">
                <Link href="/contact" className="no-underline group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                  Start Your Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                </Link>
              </div>
              <p className="text-xs text-[#555555] mt-2">SaaS products launched successfully</p>
            </div>

            {/* Browser Window Mockup */}
            <div className="bg-white border border-[#e0e0e0] overflow-hidden max-lg:max-w-lg" data-animate="fade-right">
              {/* Toolbar */}
              <div className="bg-[#f5f5f5] border-b border-[#e0e0e0] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F60014]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
                </div>
                <div className="bg-white border border-[#e0e0e0] px-4 py-1 text-xs text-[#555555] flex-1 text-center">
                  app.yourproduct.com
                </div>
              </div>
              {/* Body */}
              <div className="flex min-h-[220px]">
                {/* Sidebar */}
                <div className="w-12 bg-[#f5f5f5] py-4 flex flex-col items-center gap-2">
                  <div className="w-7 h-7 bg-[#056CB8]"></div>
                  <div className="w-7 h-7 bg-[#e0e0e0]"></div>
                  <div className="w-7 h-7 bg-[#e0e0e0]"></div>
                  <div className="w-7 h-7 bg-[#e0e0e0]"></div>
                </div>
                {/* Chart area */}
                <div className="flex-1 p-6 flex items-end gap-3">
                  {[60, 85, 45, 95, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#056CB8] rounded-t-sm"
                      style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== METRICS BAR ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-8 text-center" data-animate="fade-in">
          {[
            { value: 'Multiple', label: 'SaaS Products Launched' },
            { value: 'High', label: 'Uptime' },
            { value: 'Faster', label: 'Time-to-Market' },
            { value: 'Growing', label: 'Client Success' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/80 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUR PHASES ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              From Concept to Scale in Four Phases
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              A proven methodology that takes your idea from napkin sketch to production-ready product.
            </p>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              {
                phase: 'STRATEGY', num: '01', title: 'Product Architecture',
                desc: 'Define your SaaS blueprint — multi-tenancy, pricing tiers, API-first architecture, and scalability patterns.',
                items: ['Market-fit analysis', 'Technical architecture', 'Monetization strategy', 'Roadmap planning'],
              },
              {
                phase: 'BUILD', num: '02', title: 'Full-Stack Development',
                desc: 'Cloud-native SaaS built with modern frameworks, CI/CD pipelines, and automated testing.',
                items: ['Cloud-native architecture', 'Microservices & APIs', 'Real-time features', 'Mobile-responsive UI'],
              },
              {
                phase: 'LAUNCH', num: '03', title: 'Deployment & DevOps',
                desc: 'Production-ready on AWS, Azure, or GCP with auto-scaling and zero-downtime releases.',
                items: ['Container orchestration', 'Auto-scaling', 'CI/CD pipeline', 'Performance monitoring'],
              },
              {
                phase: 'GROW', num: '04', title: 'Iteration & Scale',
                desc: 'Post-launch support with feature velocity, A/B testing, and infrastructure optimization.',
                items: ['Feature iteration', 'A/B testing', 'Cost optimization', 'Security audits'],
              },
            ].map((card, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8]">{card.phase}</span>
                  <span className="text-3xl font-bold text-[#e0e0e0]">{card.num}</span>
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{card.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-4">{card.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-[#111111]">
                      <i className="bi bi-check-circle-fill text-[#22c55e] text-[10px]"></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ZENVICT FOR SAAS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              The SaaS Expertise Your Product Needs
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Deep SaaS experience baked into every decision, from architecture to pricing.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { num: '01', title: 'Multi-Tenant Architecture', desc: 'Purpose-built with isolated tenant data, shared infrastructure, and flexible deployment models.' },
              { num: '02', title: 'Subscription Billing', desc: 'Freemium, usage-based, per-seat, and enterprise pricing models supported out of the box.' },
              { num: '03', title: 'API-First Design', desc: 'Every feature exposed as a documented API. Enable integrations and developer ecosystems from day one.' },
              { num: '04', title: 'Security & Compliance', desc: 'SOC 2 Type II, GDPR, HIPAA-ready with role-based access, audit logging, and encryption.' },
              { num: '05', title: 'Analytics Built-In', desc: 'Product analytics, cohort analysis, funnel tracking, and revenue metrics in the application layer.' },
              { num: '06', title: 'Global CDN & Edge', desc: 'Fast load times with edge computing, CDN distribution, and intelligent caching.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6">
                <p className="text-2xl font-bold text-[#e0e0e0] mb-3">{item.num}</p>
                <h3 className="text-base font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Modern Stack, Battle-Tested Tools
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              We use the best tools for the job — proven at scale.
            </p>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { category: 'FRONTEND', items: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
              { category: 'BACKEND', items: ['Node.js', 'Python', 'Go', 'Java'] },
              { category: 'CLOUD', items: ['AWS', 'Azure', 'GCP', 'Vercel'] },
              { category: 'DATA', items: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch'] },
            ].map((group, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-4 pb-3 border-b border-[#e0e0e0]">
                  {group.category}
                </p>
                <div className="flex flex-col gap-2.5">
                  {group.items.map((item, j) => (
                    <p key={j} className="text-sm font-semibold text-[#111111] py-1 border-b border-[#f5f5f5] last:border-b-0">
                      {item}
                    </p>
                  ))}
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
            Turn your SaaS idea into a market-ready product
          </h2>
          <p className="text-white/60 mb-8">
            From MVP to scale — our team builds robust, cloud-native SaaS platforms with multi-tenancy, billing, and analytics built in.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="/contact" className="no-underline group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Start Your SaaS Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </Link>
            <a href="/" className="text-white/50 text-sm hover:text-white transition-colors">
              Explore the platform &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
