import Link from 'next/link';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'About Zynex — Our Story, Mission & the Team Behind It',
  description: 'Founded in India, Zynex is on a mission to make enterprise-grade AI software accessible to every team. Meet the people, principles, and journey shaping our platform.',
  alternates: { canonical: 'https://zynex.ai/about' },
  openGraph: {
    title: 'About Zynex — Our Story, Mission & the Team Behind It',
    description: 'Founded in India, Zynex is on a mission to make enterprise-grade AI software accessible to every team. Meet the people, principles, and journey shaping our platform.',
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
      {/* ═══ HERO — Bold statement, left-aligned ═══ */}
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
              We started with one question: why is business software so hard?
            </h1>
            <p className="text-[1.2rem] text-[#555555] leading-[1.8] max-w-[580px] max-md:text-base">
              Most teams juggle 10+ disconnected tools and still can&apos;t get their CRM to talk to their invoicing. We thought that was broken. So we built Zynex — from scratch, with AI at the foundation.
            </p>
            <div className="flex gap-12 mt-14 max-sm:gap-8 max-sm:mt-10 max-sm:flex-wrap">
              {[{ value: '2023', label: 'Founded' }, { value: '8', label: 'Products' }, { value: '16+', label: 'AI Agents' }].map((s, i) => (
                <div key={i}>
                  <div className="text-[1.8rem] font-extrabold text-[#111111] tracking-tight max-sm:text-[1.4rem]">{s.value}</div>
                  <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[#999999] font-semibold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ORIGIN STORY — Asymmetric editorial ═══ */}
      <section className="bg-[#FAFAFA] border-y border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div data-animate="fade-up">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Our Origin</span>
              <h2 className="text-[2.2rem] font-extrabold text-[#111111] leading-[1.12] tracking-[-0.03em] mt-4 max-md:text-[1.8rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
                Born from frustration. Built with conviction.
              </h2>
              <div className="w-[50px] h-[4px] bg-[#056CB8] mt-6 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-6" data-animate="fade-up" data-delay="1">
              <p className="text-[1.1rem] text-[#333333] leading-[1.85] font-medium">
                In 2023, our founder Sudharsan R watched small businesses around him struggle with the same problem: enterprise software was either too expensive, too complex, or too fragmented.
              </p>
              <p className="text-[1rem] text-[#555555] leading-[1.85]">
                He assembled a small team of engineers and AI researchers in India with one goal — build a single platform where every business module talks to every other module natively, with AI woven into every interaction. Not bolted on. Not an upsell. Just... built in from line one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE — Horizontal milestone strip ═══ */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-24 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
          <div className="grid grid-cols-4 gap-0 max-md:grid-cols-2 max-md:gap-10 max-sm:grid-cols-1 max-sm:gap-8" data-animate="fade-up">
            {[
              { year: '2023', title: 'Day Zero', desc: 'First lines of code. A 3-person team in India with one idea.' },
              { year: '2024', title: 'Full Launch', desc: '8 integrated products shipped — CRM, Finance, HR, Projects, and AI.' },
              { year: '2025', title: 'AI Breakthrough', desc: 'YenAI and IVA released — AI that understands business context.' },
              { year: '2026', title: 'Global Scale', desc: 'Enterprise partnerships, expanded research, and rapid growth.' },
            ].map((item, i) => (
              <div key={i} className="relative px-8 max-md:px-0">
                {i > 0 && <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#eaeaea] max-md:hidden" aria-hidden="true"></div>}
                <div className="text-[2.5rem] font-extrabold text-[#111111]/[0.06] tracking-tight leading-none mb-3 max-sm:text-[2rem]">{item.year}</div>
                <h3 className="text-[0.95rem] font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-[0.82rem] text-[#777777] leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION & VISION — Large statement blocks ═══ */}
      <section className="bg-white border-t border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="max-w-[850px] mb-24 max-md:mb-16" data-animate="fade-up">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Mission</span>
            <h2 className="text-[2rem] font-extrabold text-[#111111] leading-[1.3] tracking-[-0.02em] mt-4 mb-5 max-md:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              Eliminate the gap between what large enterprises can afford and what growing businesses can access.
            </h2>
            <p className="text-[1.05rem] text-[#555555] leading-[1.85] max-w-[680px]">
              A 10-person team deserves the same AI-powered workflows, real-time analytics, and integrated operations that a Fortune 500 company gets — without hiring consultants or signing 3-year contracts.
            </p>
          </div>
          <div className="max-w-[850px] ml-auto text-right max-lg:text-left max-lg:ml-0" data-animate="fade-up">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#8b5cf6]">Vision</span>
            <h2 className="text-[2rem] font-extrabold text-[#111111] leading-[1.3] tracking-[-0.02em] mt-4 mb-5 max-md:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              Business software that disappears into the background.
            </h2>
            <p className="text-[1.05rem] text-[#555555] leading-[1.85] max-w-[680px] ml-auto max-lg:ml-0">
              Your invoices reconcile themselves. Your CRM reminds you before a deal goes cold. Your HR system spots burnout before people resign. Software you don&apos;t &quot;use&quot; — it just works.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES — Numbered cards ═══ */}
      <section className="bg-[#FAFAFA] border-y border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="mb-16 max-sm:mb-10" data-animate="fade-up">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">How We Think</span>
            <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mt-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              Engineering principles.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1" data-animate="fade-up" data-delay="1">
            {[
              { num: '01', title: 'Ship fast, ship often', desc: 'Weekly releases. Every feature ships because a real customer needed it, not because a product manager imagined it on a whiteboard.' },
              { num: '02', title: 'Native integration', desc: 'Our modules share the same database, AI layer, and user context. Integration isn\'t a feature — it\'s the architecture itself.' },
              { num: '03', title: 'Earn trust', desc: 'No lock-in contracts. No dark patterns. No selling your data. We make money when you choose to stay — so we make the product worth staying for.' },
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

      {/* ═══ ROADMAP — Where we're headed ═══ */}
      <section className="bg-[#FAFAFA] border-y border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="grid grid-cols-[1fr_1.6fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
            <div data-animate="fade-up">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#056CB8]">Roadmap</span>
              <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mt-4 leading-[1.15] max-md:text-[1.8rem] max-sm:text-[1.5rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
                Where we&apos;re headed next.
              </h2>
              <p className="text-[1rem] text-[#555555] leading-[1.75] mt-5 max-sm:text-[0.9rem]">
                Building the operating system for modern businesses — where AI handles the repetitive work and teams spend time on decisions, not data entry.
              </p>
            </div>
            <div className="flex flex-col gap-5" data-animate="fade-up" data-delay="1">
              {[
                { label: 'Intelligence', title: 'Deeper AI in every module', desc: 'Predictive capabilities across CRM, Finance, and HR — not just automation, but anticipation.', color: '#056CB8' },
                { label: 'Ecosystem', title: 'Open platform for developers', desc: 'Public APIs, SDKs, and a marketplace so third-party developers can build on Zynex.', color: '#8b5cf6' },
                { label: 'Expansion', title: 'Global infrastructure', desc: 'Multi-region data residency, local compliance, and language support for every market.', color: '#09983A' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-7 rounded-xl bg-white border border-[#eaeaea] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 max-sm:p-5 max-sm:flex-col max-sm:gap-4">
                  <div className="shrink-0 max-sm:hidden">
                    <div className="w-[3px] h-12 rounded-full" style={{ backgroundColor: item.color }}></div>
                  </div>
                  <div>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.15em] mb-2 block" style={{ color: item.color }}>{item.label}</span>
                    <h3 className="text-[1.05rem] font-bold text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-[0.88rem] text-[#666666] leading-[1.7] m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BY THE NUMBERS ═══ */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
          <div className="grid grid-cols-4 gap-0 max-lg:grid-cols-2 max-sm:grid-cols-1" data-animate="fade-up">
            {[
              { value: '3', label: 'Years building', suffix: 'yrs' },
              { value: '8', label: 'Integrated modules', suffix: '' },
              { value: '16', label: 'AI assistants shipped', suffix: '+' },
              { value: '1M', label: 'Lines of code written', suffix: '+' },
            ].map((stat, i) => (
              <div key={i} className={`text-center py-12 px-6 ${i > 0 ? 'border-l border-[#eaeaea] max-lg:border-l-0' : ''} ${i >= 2 ? 'max-lg:border-t max-lg:border-[#eaeaea]' : ''} ${i > 0 ? 'max-sm:border-l-0 max-sm:border-t max-sm:border-[#eaeaea]' : ''}`}>
                <div className="text-[3.5rem] font-extrabold text-[#111111] leading-none tracking-[-0.04em] max-md:text-[2.8rem]">
                  <CountUp value={stat.value} /><span className="text-[#056CB8]">{stat.suffix}</span>
                </div>
                <div className="text-[0.8rem] text-[#999999] font-medium mt-3 uppercase tracking-[0.1em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #056CB8 0%, #0847a0 50%, #0a2d5e 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true"></div>
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14 relative z-10">
          <div className="max-w-[600px]" data-animate="fade-up">
            <h2 className="text-[2.5rem] font-extrabold text-white m-0 leading-[1.12] tracking-[-0.03em] mb-6 max-md:text-[2rem] max-sm:text-[1.6rem]" style={{ fontFamily: 'var(--font-outfit)' }}>
              Want to be part of this story?
            </h2>
            <p className="text-[1.05rem] text-white/50 leading-[1.75] m-0 mb-10 max-sm:text-[0.9rem]">
              Whether you&apos;re looking for a better platform or you want to help build one.
            </p>
            <div className="flex gap-4 max-sm:flex-col">
              <Link href="/contact" className="bg-white text-[#056CB8] py-4 px-10 rounded-none border-none text-[0.9rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.06em] no-underline group max-sm:px-8 max-sm:py-3.5 max-sm:text-[0.82rem] max-sm:justify-center">
                Get in Touch <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
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
