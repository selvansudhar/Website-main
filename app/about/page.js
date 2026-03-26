import Link from 'next/link';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'About Zynex — AI-Powered Enterprise Platform Built in India',
  description: 'Zynex delivers AI-native business software to enterprises across 5+ industries. One platform for CRM, finance, HR, and projects — trusted by 30+ clients with 99.9% uptime.',
  alternates: { canonical: 'https://zynex.ai/about' },
  openGraph: {
    title: 'About Zynex — AI-Powered Enterprise Platform Built in India',
    description: 'Zynex delivers AI-native business software to enterprises across 5+ industries. One platform for CRM, finance, HR, and projects — trusted by 30+ clients with 99.9% uptime.',
  },
};

export default function About() {
  const leadership = [
    { name: 'Sudharsan R', role: 'Founder & CEO', bio: 'Visionary technologist driving Zynex\'s mission to democratize enterprise software through AI innovation.' },
    { name: 'Engineering Team', role: 'Core Development', bio: 'A passionate team of full-stack engineers, AI researchers, and product designers building the future of business software.' },
    { name: 'AI Research Lab', role: 'Intelligence Division', bio: 'Dedicated AI specialists developing IVA, YenAI, and the 16+ intelligent assistants powering the Zynex platform.' },
  ];

  return (
    <div className="text-[#111111]">
      {/* ═══ HERO — Company positioning ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true"></div>
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#056CB8]/[0.04] blur-[120px] max-md:hidden" aria-hidden="true"></div>

        <div className="max-w-[1400px] mx-auto px-12 pt-40 pb-28 max-md:px-6 max-md:pt-28 max-md:pb-20 max-sm:px-4 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-10 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-6">
            <span className="text-[#555555]">Zynex AI</span>
            <span className="text-[#e0e0e0]">/</span>
            <span className="text-[#056CB8] uppercase">About</span>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
              { "@type": "ListItem", "position": 2, "name": "About" }
            ]
          }) }} />

          <div className="max-w-[800px]" data-animate="fade-up">
            <h1 className="text-[3.5rem] font-extrabold leading-[1.06] text-[#111111] tracking-[-0.04em] mb-8 max-md:text-[2.5rem] max-sm:text-[2rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              One platform to run your entire business — with AI built in.
            </h1>
            <p className="text-[1.2rem] text-[#555555] leading-[1.8] max-w-[600px] max-md:text-base">
              Zynex replaces your disconnected CRM, invoicing, HR, and project tools with a single AI-powered platform. Serving enterprises across healthcare, finance, manufacturing, retail, and education — from India to the world.
            </p>
            <div className="flex gap-6 mt-10 max-sm:flex-col max-sm:gap-4">
              <Link href="/contact" className="bg-[#056CB8] text-white py-4 px-10 rounded-none border-none text-[0.9rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.06em] no-underline group max-sm:px-8 max-sm:py-3.5 max-sm:text-[0.82rem] max-sm:justify-center">
                Request a Demo <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
              </Link>
              <Link href="/solutions" className="bg-transparent text-[#111111] py-4 px-10 rounded-none border-2 border-[#e0e0e0] text-[0.9rem] font-semibold cursor-pointer inline-flex items-center gap-3 no-underline transition-all duration-200 hover:border-[#111111] max-sm:px-8 max-sm:py-3.5 max-sm:text-[0.82rem] max-sm:justify-center">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST METRICS — Business credibility ═══ */}
      <section className="bg-[#111111] text-white">
        <div className="max-w-[1400px] mx-auto px-12 py-16 grid grid-cols-5 gap-8 max-lg:grid-cols-3 max-md:px-6 max-md:py-12 max-sm:px-4 max-sm:grid-cols-2 max-sm:gap-6" data-animate="fade-in">
          {[
            { value: '30+', label: 'Enterprise Clients' },
            { value: '5+', label: 'Industries Served' },
            { value: '99.9%', label: 'Platform Uptime' },
            { value: '8', label: 'Integrated Modules' },
            { value: '16+', label: 'AI Assistants' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[2.2rem] font-extrabold leading-none tracking-tight max-sm:text-[1.8rem]">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[0.78rem] text-white/50 font-medium mt-2 uppercase tracking-[0.08em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHAT WE DO — Company overview for buyers ═══ */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div data-animate="fade-up">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">What We Do</span>
              <h2 className="text-[2.2rem] font-extrabold text-[#111111] leading-[1.12] tracking-[-0.03em] mt-4 max-md:text-[1.8rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
                Enterprise software that works as one system.
              </h2>
              <div className="w-[50px] h-[4px] bg-[#056CB8] mt-6 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-6" data-animate="fade-up" data-delay="1">
              <p className="text-[1.1rem] text-[#333333] leading-[1.85] font-medium">
                Zynex is an AI-powered business platform that combines CRM, finance, HR, project management, knowledge base, and marketing automation into one unified system.
              </p>
              <p className="text-[1rem] text-[#555555] leading-[1.85]">
                Unlike traditional tools that require separate subscriptions, complex integrations, and months of setup — Zynex modules share the same database, the same AI layer, and the same user context. Your sales data flows into your invoicing. Your HR syncs with payroll. Your AI assistant accesses everything — natively.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['CRM', 'Finance', 'HR', 'Projects', 'Knowledge Base', 'Marketing', 'AI Assistants', 'Analytics'].map((tag) => (
                  <span key={tag} className="text-[0.72rem] font-semibold py-1.5 px-4 rounded-full bg-white text-[#111111] border border-[#e0e0e0]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY ZYNEX — Competitive differentiators ═══ */}
      <section className="bg-[#FAFAFA] border-y border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="mb-16 max-sm:mb-10" data-animate="fade-up">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Why Zynex</span>
            <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mt-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              What makes us different.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1" data-animate="fade-up" data-delay="1">
            {[
              { num: '01', title: 'AI-native, not AI-added', desc: 'Every module has intelligence built in from day one — predictive lead scoring in CRM, anomaly detection in finance, burnout forecasting in HR. Not a chatbot bolted on after launch.' },
              { num: '02', title: 'One platform, zero integration', desc: 'Your CRM, invoicing, HR, and projects share the same database. No Zapier, no webhooks, no syncing failures. Data flows between modules automatically.' },
              { num: '03', title: 'Deploy in days, not months', desc: 'No consultants, no 6-month implementation. Set up your workspace, configure modules, and onboard your team in under a week. Start free, scale when ready.' },
            ].map((p, i) => (
              <div key={i} className="group bg-white border border-[#eaeaea] rounded-2xl p-9 flex flex-col gap-4 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] max-sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[#056CB8]"></div>
                <span className="text-[2.5rem] font-extrabold text-[#111111]/[0.05] leading-none tracking-tighter">{p.num}</span>
                <h3 className="text-[1.15rem] font-bold text-[#111111]">{p.title}</h3>
                <p className="text-[0.9rem] text-[#666666] leading-[1.75] m-0">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES — Who we serve ═══ */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="grid grid-cols-[1fr_1.8fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div data-animate="fade-up">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Industries</span>
              <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mt-4 leading-[1.15] max-md:text-[1.8rem] max-sm:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
                Built for the industries that need it most.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1" data-animate="fade-up" data-delay="1">
              {[
                { name: 'Healthcare', desc: 'HIPAA-compliant workflows, patient management, and clinical automation.', href: '/industries/healthcare', icon: 'bi-heart-pulse' },
                { name: 'Financial Services', desc: 'Risk analysis, compliance reporting, and secure transaction processing.', href: '/industries/financial-services', icon: 'bi-bank' },
                { name: 'Manufacturing', desc: 'Production scheduling, supply chain visibility, and quality control.', href: '/industries/manufacturing', icon: 'bi-gear' },
                { name: 'Retail', desc: 'Inventory sync, omnichannel commerce, and customer analytics.', href: '/industries/retail', icon: 'bi-shop' },
              ].map((ind) => (
                <Link key={ind.name} href={ind.href} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAFA] border border-[#eaeaea] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:border-[#056CB8]">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#056CB8]/[0.08] flex items-center justify-center mt-0.5">
                    <i className={`bi ${ind.icon} text-[#056CB8] text-base`}></i>
                  </div>
                  <div>
                    <h3 className="text-[0.92rem] font-bold text-[#111111] mb-1">{ind.name}</h3>
                    <p className="text-[0.8rem] text-[#777777] leading-relaxed m-0">{ind.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPANY TIMELINE — Growth story with business milestones ═══ */}
      <section className="bg-[#FAFAFA] border-y border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-24 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
          <div className="mb-14 max-sm:mb-10" data-animate="fade-up">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Our Journey</span>
            <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mt-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              From idea to enterprise platform.
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-0 max-md:grid-cols-2 max-md:gap-10 max-sm:grid-cols-1 max-sm:gap-8" data-animate="fade-up" data-delay="1">
            {[
              { year: '2023', title: 'Founded', desc: 'Company established in India. Core platform architecture designed and first modules built.' },
              { year: '2024', title: '8 Products Launched', desc: 'CRM Lite, Finance Plus, HR, Project Plus, Knowledge Base, Marketing Automation, and AI assistants shipped.' },
              { year: '2025', title: 'YenAI & IVA Released', desc: 'AI engine launched — contextual business intelligence across all modules. 30+ enterprise clients onboarded.' },
              { year: '2026', title: 'Scaling Operations', desc: 'Enterprise partnerships, expanded industry coverage, and investment in global infrastructure.' },
            ].map((item, i) => (
              <div key={i} className="relative px-8 max-md:px-0">
                {i > 0 && <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#e0e0e0] max-md:hidden" aria-hidden="true"></div>}
                <div className="text-[2.5rem] font-extrabold text-[#111111]/[0.06] tracking-tight leading-none mb-3 max-sm:text-[2rem]">{item.year}</div>
                <h3 className="text-[0.95rem] font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-[0.82rem] text-[#777777] leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP — Kept exactly as user wants ═══ */}
      <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
        <div className="text-center mb-20 max-sm:mb-12" data-animate="fade-up">
          <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
            The People Behind Zynex
          </h2>
          <p className="text-[1.05rem] text-[#555555] max-w-[550px] mx-auto max-sm:text-[0.9rem]">
            A passionate team of engineers, designers, and AI researchers building from India for the world.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1 max-lg:max-w-[500px] max-lg:mx-auto" data-animate="fade-up" data-delay="2">
          {leadership.map((person, i) => (
            <div key={i} className="text-center flex flex-col items-center gap-5 p-8 rounded-md border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#056CB8]">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div>
                <h3 className="text-[1.1rem] font-bold text-[#111111] mb-1">{person.name}</h3>
                <span className="text-[0.8rem] font-semibold text-[#056CB8] uppercase tracking-[0.1em]">{person.role}</span>
              </div>
              <p className="text-[0.88rem] text-[#555555] leading-relaxed m-0">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SECURITY & COMPLIANCE — Trust signals ═══ */}
      <section className="bg-[#FAFAFA] border-y border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="grid grid-cols-[1fr_1.5fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div data-animate="fade-up">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Security</span>
              <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mt-4 leading-[1.15] max-md:text-[1.8rem] max-sm:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
                Enterprise-grade security. No compromises.
              </h2>
              <p className="text-[1rem] text-[#555555] leading-[1.75] mt-5">
                Your data is yours. We don&apos;t sell it, we don&apos;t show ads, and we don&apos;t let third parties access your business information.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1" data-animate="fade-up" data-delay="1">
              {[
                { title: 'End-to-End Encryption', desc: 'All data encrypted in transit and at rest using industry-standard protocols.' },
                { title: 'SOC 2 Compliant', desc: 'Infrastructure designed to meet SOC 2 Type II security and availability standards.' },
                { title: 'GDPR & CCPA Ready', desc: 'Built-in data privacy controls for global regulatory compliance.' },
                { title: '99.9% Uptime SLA', desc: 'Redundant infrastructure with automated failover and real-time monitoring.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-[#eaeaea]">
                  <span className="text-[#056CB8] font-bold text-lg mt-0.5">&#10003;</span>
                  <div>
                    <h3 className="text-[0.9rem] font-bold text-[#111111] mb-1">{item.title}</h3>
                    <p className="text-[0.8rem] text-[#777777] leading-relaxed m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — Clear business action ═══ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #056CB8 0%, #0847a0 50%, #0a2d5e 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true"></div>
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14 relative z-10">
          <div className="max-w-[600px]" data-animate="fade-up">
            <h2 className="text-[2.5rem] font-extrabold text-white m-0 leading-[1.12] tracking-[-0.03em] mb-6 max-md:text-[2rem] max-sm:text-[1.6rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              See how Zynex can simplify your operations.
            </h2>
            <p className="text-[1.05rem] text-white/50 leading-[1.75] m-0 mb-10 max-sm:text-[0.9rem]">
              Our team will walk you through the platform, understand your needs, and create a tailored implementation plan — no commitment required.
            </p>
            <div className="flex gap-4 max-sm:flex-col">
              <Link href="/contact" className="bg-white text-[#056CB8] py-4 px-10 rounded-none border-none text-[0.9rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.06em] no-underline group max-sm:px-8 max-sm:py-3.5 max-sm:text-[0.82rem] max-sm:justify-center">
                Schedule a Demo <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
              </Link>
              <Link href="/resources/concierge" className="bg-transparent text-white/70 py-4 px-10 rounded-none border border-white/20 text-[0.9rem] font-semibold cursor-pointer inline-flex items-center gap-3 no-underline transition-all duration-300 hover:text-white hover:border-white/40 max-sm:px-8 max-sm:py-3.5 max-sm:text-[0.82rem] max-sm:justify-center">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
