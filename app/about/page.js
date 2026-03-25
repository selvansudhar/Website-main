import Link from 'next/link';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'About Zynex — AI-Powered Innovation from India to the World',
  description: 'Zynex builds intelligent business software that combines ERP, AI, and automation. Learn about our mission, values, and the team behind the platform.',
  alternates: { canonical: 'https://zynex.ai/about' },
  openGraph: {
    title: 'About Zynex — AI-Powered Innovation from India to the World',
    description: 'Zynex builds intelligent business software that combines ERP, AI, and automation. Learn about our mission, values, and the team behind the platform.',
  },
};

export default function About() {
  const timeline = [
    { year: '2023', title: 'The Beginning', description: 'Zynex was founded with a clear mission — build enterprise-grade software that small and growing teams can actually afford and use.' },
    { year: '2024', title: 'Platform Launch', description: 'Launched the full Zynex platform with 8 integrated products including CRM Lite, Finance Plus, Project Plus, and the AI-powered YenAI assistant.' },
    { year: '2025', title: 'AI-First Evolution', description: 'Introduced IVA (Intelligent Virtual Assistant), Assistant Hub with 16+ specialized AI agents, and expanded to serve 5+ industries worldwide.' },
    { year: '2026', title: 'Scaling Globally', description: 'Expanding operations across 150+ countries with 16 data centers, enterprise partnerships, and continued investment in AI-driven automation.' },
  ];

  const values = [
    {
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 10 18.469V19a2 2 0 1 0 4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: 'Innovation First',
      description: 'We don\'t add AI as a checkbox feature. Every product is built with intelligence at its core — from predictive analytics to autonomous workflows.',
    },
    {
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      title: 'Privacy by Design',
      description: 'Your data is yours. We don\'t sell it, we don\'t show ads, and we don\'t let third parties access your business information. Ever.',
    },
    {
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
      title: 'Built for Real Teams',
      description: 'Enterprise power without the enterprise complexity. Our tools are designed so a 5-person startup gets the same capabilities as a 5,000-person company.',
    },
    {
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
      title: 'Made in India, Built for the World',
      description: 'Proudly built from India with world-class engineering. Our platform serves businesses across 150+ countries with 16 data centers globally.',
    },
  ];

  const leadership = [
    { name: 'Sudharsan R', role: 'Founder & CEO', bio: 'Visionary technologist driving Zynex\'s mission to democratize enterprise software through AI innovation.' },
    { name: 'Engineering Team', role: 'Core Development', bio: 'A passionate team of full-stack engineers, AI researchers, and product designers building the future of business software.' },
    { name: 'AI Research Lab', role: 'Intelligence Division', bio: 'Dedicated AI specialists developing IVA, YenAI, and the 16+ intelligent assistants powering the Zynex platform.' },
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#056CB8]/[0.03] blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/[0.03] blur-[100px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-12 pt-40 pb-24 max-md:px-6 max-md:pt-24 max-md:pb-16 max-sm:px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
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

          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-6 max-sm:gap-4" data-animate="fade-up">
            <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
              <span className="text-[0.82rem] font-medium text-[#555555]">Our Story</span>
            </div>
            <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
              We&apos;re building the future of<br />business software
            </h1>
            <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[680px] max-md:text-base max-sm:text-[0.9rem]">
              Zynex is an AI-powered business platform that combines ERP, intelligent assistants, and automation into one unified system — built for teams that want to move fast without the enterprise price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-[#111111] text-white">
        <div className="max-w-[1400px] mx-auto px-12 py-14 grid grid-cols-5 gap-8 max-lg:grid-cols-3 max-md:px-6 max-md:py-10 max-sm:px-4 max-sm:grid-cols-2 max-sm:gap-6" data-animate="fade-in">
          {[
            { value: '10+', label: 'Products Built' },
            { value: '25+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '99.9%', label: 'Uptime Guaranteed' },
            { value: '5+', label: 'Industries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[2.2rem] font-extrabold leading-none tracking-tight max-sm:text-[1.8rem]">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[0.82rem] text-white/60 font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-16">
          {/* Mission */}
          <div className="flex flex-col gap-6" data-animate="fade-up">
            <div className="w-14 h-14 rounded-md bg-[#056CB8]/10 flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#056CB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </div>
            <h2 className="text-[1.8rem] font-extrabold text-[#111111] leading-[1.15] tracking-[-0.02em] max-md:text-[1.5rem]">Our Mission</h2>
            <p className="text-[1.05rem] text-[#555555] leading-[1.8]">
              To democratize enterprise technology by making powerful, AI-native business tools accessible to every team — regardless of size or budget. We believe growing businesses deserve the same intelligent software that Fortune 500 companies use, without the complexity, cost, or 12-month implementation timelines.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-6" data-animate="fade-up" data-delay="2">
            <div className="w-14 h-14 rounded-md bg-[#8b5cf6]/10 flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            </div>
            <h2 className="text-[1.8rem] font-extrabold text-[#111111] leading-[1.15] tracking-[-0.02em] max-md:text-[1.5rem]">Our Vision</h2>
            <p className="text-[1.05rem] text-[#555555] leading-[1.8]">
              A world where every business runs on intelligent software that learns, adapts, and grows with them. We envision a future where AI isn&apos;t a premium feature — it&apos;s the foundation. Where your CRM predicts, your HR automates, and your finance tools think ahead, so you can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#f5f5f5] border-y border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
          <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
            <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
              What We Build
            </h2>
            <p className="text-[1.05rem] text-[#555555] max-w-[600px] mx-auto max-sm:text-[0.9rem]">
              A complete AI-powered business platform — 8 integrated products working together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1" data-animate="fade-up" data-delay="2">
            {[
              { name: 'YenAI', desc: 'Conversational AI engine that understands your business context', icon: 'bi-stars' },
              { name: 'Assistant Hub', desc: '16+ specialized AI agents for every department', icon: 'bi-grid-3x3-gap' },
              { name: 'CRM Lite', desc: 'Visual pipeline management with AI-powered lead scoring', icon: 'bi-people' },
              { name: 'Finance Plus', desc: 'Invoicing, accounting, and financial intelligence', icon: 'bi-credit-card' },
              { name: 'Project Plus', desc: 'Sprint boards, task tracking, and team collaboration', icon: 'bi-kanban' },
              { name: 'Knowledge Base', desc: 'Centralized intelligence hub for your organization', icon: 'bi-book' },
              { name: 'Human Resources', desc: 'Complete HR management from hiring to payroll', icon: 'bi-person-check' },
              { name: 'Marketing Automation', desc: '10-step campaign builder with AI optimization', icon: 'bi-megaphone' },
            ].map((product) => (
              <div key={product.name} className="bg-white border border-[#e0e0e0] rounded-md p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#056CB8]">
                <div className="w-10 h-10 rounded-md bg-[#056CB8]/10 flex items-center justify-center">
                  <i className={`bi ${product.icon} text-[#056CB8] text-lg`}></i>
                </div>
                <h3 className="text-[0.95rem] font-bold text-[#111111]">{product.name}</h3>
                <p className="text-[0.85rem] text-[#555555] leading-relaxed m-0">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-20 max-sm:px-4 max-sm:py-14">
        <div className="text-center mb-20 max-sm:mb-12" data-animate="fade-up">
          <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
            What We Stand For
          </h2>
          <p className="text-[1.05rem] text-[#555555] max-w-[550px] mx-auto max-sm:text-[0.9rem]">
            The principles that guide every product decision and line of code we write.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1" data-animate="fade-up" data-delay="1">
          {values.map((value, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-md border border-[#e0e0e0] bg-white transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 max-sm:p-6 max-sm:flex-col">
              <div className="w-14 h-14 shrink-0 rounded-md bg-[#f5f5f5] flex items-center justify-center text-[#111111]">
                {value.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.1rem] font-bold text-[#111111]">{value.title}</h3>
                <p className="text-[0.92rem] text-[#555555] leading-[1.7] m-0">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-[#111111] text-white">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
          <div className="text-center mb-20 max-sm:mb-12" data-animate="fade-up">
            <h2 className="text-[2.2rem] font-extrabold tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
              Our Journey
            </h2>
            <p className="text-[1.05rem] text-white/50 max-w-[500px] mx-auto max-sm:text-[0.9rem]">
              From an idea to a platform serving businesses worldwide.
            </p>
          </div>

          <div className="relative max-w-[800px] mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-white/10 max-sm:left-[16px]" aria-hidden="true"></div>

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-16 max-sm:pl-12" data-animate="fade-up" data-delay={i + 1}>
                  {/* Dot */}
                  <div className="absolute left-[12px] top-[6px] w-[18px] h-[18px] rounded-full border-[3px] border-[#056CB8] bg-[#111111] max-sm:left-[8px] max-sm:w-[16px] max-sm:h-[16px]"></div>
                  <span className="text-[0.75rem] font-bold text-[#056CB8] tracking-[0.15em] uppercase">{item.year}</span>
                  <h3 className="text-[1.2rem] font-bold mt-2 mb-2 max-sm:text-[1.05rem]">{item.title}</h3>
                  <p className="text-[0.92rem] text-white/50 leading-relaxed m-0">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
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

      {/* Tech Stack / Why Zynex */}
      <section className="bg-[#f5f5f5] border-y border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
          <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1">
            <div className="flex flex-col gap-6" data-animate="fade-up">
              <h2 className="text-[1.8rem] font-extrabold text-[#111111] leading-[1.15] tracking-[-0.02em] max-md:text-[1.5rem]">
                Why businesses choose Zynex
              </h2>
              <p className="text-[1.05rem] text-[#555555] leading-[1.7]">
                We&apos;re not another SaaS tool asking you to adapt your workflow. Zynex adapts to you — with AI that learns your business, modules that talk to each other natively, and pricing that doesn&apos;t punish growth.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                {[
                  'One platform replaces 10+ disconnected tools',
                  'AI built into every module, not bolted on',
                  'Deploy in days, not months',
                  'No per-seat pricing traps',
                  'End-to-end encryption & SOC 2 compliant',
                  'Dedicated support from real engineers',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[0.95rem] text-[#333333]">
                    <span className="text-[#056CB8] font-bold">&#10003;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element */}
            <div className="flex justify-center items-center" data-animate="fade-up" data-delay="2">
              <div className="relative w-[380px] h-[380px] max-md:w-[280px] max-md:h-[280px]">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#056CB8]/10 animate-globe-pulse" aria-hidden="true"></div>
                <div className="absolute inset-[30px] rounded-full border-2 border-[#056CB8]/15" aria-hidden="true"></div>
                <div className="absolute inset-[60px] rounded-full border-2 border-[#056CB8]/20" aria-hidden="true"></div>
                <div className="absolute inset-[90px] rounded-full bg-[#056CB8]/5 border-2 border-[#056CB8]/25 flex items-center justify-center" aria-hidden="true">
                  <div className="text-center">
                    <div className="text-[2rem] font-extrabold text-[#056CB8] max-md:text-[1.5rem]">Zynex</div>
                    <div className="text-[0.75rem] font-medium text-[#555555] mt-1">AI-Powered Platform</div>
                  </div>
                </div>
                {/* Floating nodes */}
                {[
                  { label: 'CRM', top: '5%', left: '50%', translate: '-translate-x-1/2' },
                  { label: 'Finance', top: '25%', right: '0%', translate: '' },
                  { label: 'HR', top: '70%', right: '2%', translate: '' },
                  { label: 'Projects', bottom: '5%', left: '50%', translate: '-translate-x-1/2' },
                  { label: 'AI', top: '70%', left: '2%', translate: '' },
                  { label: 'Analytics', top: '25%', left: '0%', translate: '' },
                ].map((node, i) => (
                  <div
                    key={i}
                    className={`absolute bg-white border border-[#e0e0e0] rounded-md px-3 py-1.5 text-[0.72rem] font-bold text-[#111111] shadow-sm ${node.translate}`}
                    style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }}
                  >
                    {node.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
        <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
          <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
            Industries We Serve
          </h2>
          <p className="text-[1.05rem] text-[#555555] max-w-[550px] mx-auto max-sm:text-[0.9rem]">
            Tailored solutions for the industries that need intelligent software the most.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1" data-animate="fade-up" data-delay="2">
          {[
            { name: 'Healthcare', icon: 'bi-heart-pulse', href: '/industries/healthcare' },
            { name: 'Financial Services', icon: 'bi-bank', href: '/industries/financial-services' },
            { name: 'Manufacturing', icon: 'bi-gear', href: '/industries/manufacturing' },
            { name: 'Higher Education', icon: 'bi-mortarboard', href: '/industries/higher-education' },
            { name: 'Retail', icon: 'bi-shop', href: '/industries/retail' },
          ].map((industry) => (
            <Link key={industry.name} href={industry.href} className="bg-white border border-[#e0e0e0] rounded-md p-6 flex flex-col items-center gap-3 text-center no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#056CB8] group">
              <div className="w-12 h-12 rounded-md bg-[#f5f5f5] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#056CB8]/10">
                <i className={`bi ${industry.icon} text-[#056CB8] text-xl`}></i>
              </div>
              <span className="text-[0.88rem] font-bold text-[#111111]">{industry.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-12 bg-[#056CB8] text-white text-center max-md:py-20 max-md:px-6 max-sm:py-14 max-sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-[80px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-white/[0.05] blur-[80px]"></div>
        </div>

        <div className="max-w-[700px] mx-auto flex flex-col items-center gap-6 relative z-10" data-animate="fade-up">
          <h2 className="text-[2.5rem] font-extrabold m-0 leading-[1.15] tracking-[-0.02em] max-md:text-[2rem] max-sm:text-[1.6rem]">
            Ready to transform how your team works?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed m-0 max-sm:text-base">
            Join the growing businesses that have replaced their entire software stack with one intelligent platform. Start free, scale when you&apos;re ready.
          </p>
          <div className="flex gap-4 mt-4 max-sm:flex-col max-sm:items-center">
            <Link href="/contact" className="bg-white text-[#056CB8] py-4 px-10 rounded-none border-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.05em] no-underline group max-sm:px-8 max-sm:py-3 max-sm:text-[0.85rem]">
              Get Started Free <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </Link>
            <Link href="/enterprise" className="bg-transparent text-white py-3.5 px-8 rounded-none border-2 border-white/30 text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 no-underline transition-all duration-200 hover:border-white max-sm:px-6 max-sm:py-3 max-sm:text-[0.85rem]">
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
