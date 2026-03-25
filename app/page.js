import Link from 'next/link';
import Image from 'next/image';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'AI-Powered Business Platform for Growing Teams',
  description: 'Zynex combines ERP, AI intelligence, and intelligent assistants in one platform. Built for small teams that want enterprise tools without the complexity.',
  alternates: { canonical: 'https://zynex.ai/' },
  openGraph: { title: 'AI-Powered Business Platform for Growing Teams', description: 'Zynex combines ERP, AI intelligence, and intelligent assistants in one platform.' },
};

export default function Home() {
  const useCases = [
    { icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, title: 'Customer Support', description: 'AI-powered ticket resolution 24/7' },
    { icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>, title: 'Finance', description: 'Invoicing, accounting & payroll' },
    { icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, title: 'Sales', description: 'CRM pipeline & lead tracking' },
    { icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'Human Resources', description: 'Attendance, leave & performance' },
    { icon: <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>, title: 'IT Support', description: 'Automated issue resolution' },
  ];


  return (
    <div className="bg-white text-[#111111]">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-12 pt-20 pb-20 grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
      <div className="flex flex-col gap-6" data-animate="fade-up">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-[#e0e0e0] rounded-[100px] text-[0.82rem] font-medium text-[#555555] w-fit">
          <span className="w-1.5 h-1.5 bg-[#111111] rounded-full inline-block"></span>
          Innovation Experts
        </div>
        <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
          Run your entire business,<br />with AI built in
        </h1>
        <p className="text-[1.15rem] text-[#555555] leading-relaxed m-0 max-md:text-base">
          One platform for ERP, AI intelligence, and intelligent assistants — built for teams that want to move fast without the enterprise price tag.
        </p>
        <div className="flex gap-4 mt-2 max-sm:flex-col max-sm:items-start">
          <Link href="/enterprise" className="inline-flex items-center justify-center py-4 px-10 bg-[#056CB8] text-white font-bold text-[0.95rem] border-none rounded-none cursor-pointer no-underline uppercase tracking-[0.05em] max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem]">Start Free</Link>
          <Link href="/solutions/ai-solutions" className="inline-flex items-center justify-center py-3.5 px-8 bg-transparent text-[#111111] font-semibold text-[0.95rem] border-2 border-[#e0e0e0] rounded-none cursor-pointer no-underline transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">See How It Works</Link>
        </div>
        <p className="text-[0.78rem] text-[#888888] m-0">
          Trusted by growing teams &nbsp;&bull;&nbsp; Enterprise-grade AI &nbsp;&bull;&nbsp; Deploy in days, not months
        </p>
      </div>

      {/* Illustration Section */}
      <div className="relative h-[600px] flex items-center justify-center max-lg:h-[500px] max-md:h-[400px] max-[480px]:h-auto max-[480px]:py-10 overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 90% 0%, rgba(0,0,0,0.04) 0%, transparent 60%), radial-gradient(#f5f5f5 1.5px, transparent 1.5px)', backgroundSize: '100% 100%, 40px 40px' }}>
        {/* Desktop/tablet: absolute positioned layout */}
        <div className="relative w-full h-full max-[480px]:hidden">
          <svg aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0" viewBox="0 0 500 500">
            <path className="arc-path" d="M 250 250 m -120 0 a 120 120 0 1 1 240 0 a 120 120 0 1 1 -240 0" />
            <path className="arc-path" d="M 250 250 m -180 0 a 180 180 0 1 1 360 0 a 180 180 0 1 1 -360 0" />
          </svg>

          <div className="absolute top-[15%] right-[15%] bg-white rounded-md py-3 px-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-3 font-semibold text-sm text-[#111111] z-2 animate-fade-in-up-delay-1 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#f5f5f5] text-[#111111]">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="7" r="4" /><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /></svg>
            </div>
            <span>Zynex AI</span>
          </div>

          <div className="absolute top-[30%] right-[15%] w-[200px] h-[200px] flex items-center justify-center z-[4]">
            <Image src="/images/home-page-bot.webp" alt="Zynex AI Bot" width={484} height={515} className="w-full h-full object-contain animate-floating-bot" priority />
          </div>

          <div className="absolute bottom-[25%] right-[10%] bg-white rounded-md py-3 px-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-3 font-semibold text-sm text-[#111111] z-2 animate-fade-in-up-delay-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#f5f5f5] text-[#111111]">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8" /><path d="M8 13h6" /></svg>
            </div>
            <span>Zynex Assistant</span>
          </div>

          <div className="absolute top-[40%] left-[8%] bg-white/95 rounded-md py-3 px-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-3 font-semibold text-sm text-[#111111] z-2 animate-fade-in-up transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#f5f5f5] text-[#111111]">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M3 3v18h18" /><path d="M18 9l-6 6-2-2-4 4" /></svg>
            </div>
            <span>Zynex CRMOne</span>
          </div>

          <div className="absolute top-[55%] left-[5%] bg-white/60 backdrop-blur-[10px] rounded-2xl p-5 w-[280px] z-2 border border-[#e0e0e0] animate-fade-in-left transition-transform duration-300 hover:-translate-y-1 max-md:w-[240px]">
            <p className="text-sm text-[#111111] mb-3 font-medium">All in your hands!!</p>
            <div className="flex flex-col gap-2">
              {['Company knowledge intelligence', 'AI-powered business insights', 'Automated workflows & intelligence'].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[0.85rem] text-[#555555]">
                  <span className="text-[#111111] font-bold">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: clean stacked layout */}
        <div className="hidden max-[480px]:flex flex-col items-center gap-6 px-4">
          <div className="w-[180px] h-[180px]">
            <Image src="/images/home-page-bot.webp" alt="Zynex AI Bot" width={484} height={515} className="w-full h-full object-contain animate-floating-bot" priority />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['Zynex AI', 'Zynex CRMOne', 'Zynex Assistant'].map((label, i) => (
              <div key={i} className="bg-white rounded-md py-2 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-xs font-semibold text-[#111111] border border-[#e0e0e0]">
                {label}
              </div>
            ))}
          </div>
          <div className="bg-white/60 backdrop-blur-[10px] rounded-2xl p-4 w-full border border-[#e0e0e0]">
            <p className="text-sm text-[#111111] mb-2 font-medium">All in your hands!!</p>
            <div className="flex flex-col gap-1.5">
              {['Company knowledge intelligence', 'AI-powered business insights', 'Automated workflows & intelligence'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[0.8rem] text-[#555555]">
                  <span className="text-[#111111] font-bold">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-[1400px] mx-auto px-12 max-md:px-6 max-sm:px-4">
        <h2 className="sr-only">Use Cases</h2>
        <div className="grid grid-cols-5 gap-4 max-[1200px]:grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1" data-animate="fade-up" data-delay="1">
          {useCases.map((uc, i) => (
            <div key={i} className="bg-white border border-[#e0e0e0] rounded-md p-6 px-5 flex flex-row items-center gap-4 transition-all duration-300 cursor-pointer min-h-[110px] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[#f5f5f5] text-[#111111]">{uc.icon}</div>
              <div className="flex-1 flex flex-col justify-center gap-1.5">
                <h3 className="text-[0.85rem] font-bold text-[#111111] m-0 whitespace-nowrap max-[1400px]:text-[0.8rem]">{uc.title}</h3>
                <p className="text-xs text-[#555555] m-0">{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IVA Section */}
      <section className="relative py-20 px-8 text-center overflow-hidden bg-white max-md:py-16 max-md:px-6 max-[480px]:px-4 max-[480px]:py-12">
        <div className="relative z-2 max-w-[900px] mx-auto" data-animate="scale-up">
          <div className="mb-4 max-[480px]:mb-2">
            <Image src="/images/iva-logo.webp" alt="IVA Logo" width={549} height={455} className="w-[200px] h-auto object-contain inline-block max-[480px]:w-[160px]" loading="lazy" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1] max-[480px]:hidden">
            <div className="absolute top-[15%] left-[20%] animate-twinkle"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#f59e0b" /></svg></div>
            <div className="absolute top-[25%] right-[25%] animate-twinkle-delay-1"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#10b981" /></svg></div>
            <div className="absolute bottom-[10%] left-[25%] animate-twinkle-delay-2"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#ef4444" /></svg></div>
          </div>
          <h2 className="text-[1.8rem] font-extrabold text-[#111111] leading-[1.3] mb-4 max-md:text-2xl max-[480px]:text-xl">Meet IVA — your AI that knows your business</h2>
          <div className="w-[60px] h-[3px] bg-[#111111] mx-auto mb-6 rounded-sm"></div>
          <p className="text-lg text-[#555555] leading-relaxed mb-8 px-16 max-md:px-0 max-md:text-base max-[480px]:text-sm">IVA lives inside every Zynex tool. It reads your data, understands context, and gives you answers — not just search results. Ask it anything about your customers, finances, projects, or team.</p>
          <Link href="/products/assistant-hub" className="bg-[#056CB8] text-white py-4 px-10 rounded-none border-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.05em] no-underline group max-[480px]:py-3 max-[480px]:px-8 max-[480px]:text-[0.85rem]">EXPLORE IVA <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></Link>
        </div>
      </section>

      {/* Intelligence Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto rounded-[40px] p-4 flex items-center gap-8 text-white relative overflow-hidden max-lg:flex-col max-lg:p-8 max-lg:px-8 max-lg:gap-12 max-lg:text-center max-sm:rounded-[20px] max-sm:p-6 max-sm:mx-4" data-animate="fade-up" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #056CB8 100%)' }}>
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative w-[220px] h-[220px] flex justify-center items-center">
              {['-100px', '-50px', '0px', '50px', '100px'].map((tx, i) => (
                <div key={i} className="absolute w-[160px] h-[160px] border border-white/10 rounded-full bg-white/[0.03] backdrop-blur-[4px]" style={{ transform: `rotateY(60deg) translateX(${tx})` }}></div>
              ))}
              <div className="relative z-10 flex items-center gap-2 text-2xl font-extrabold">
                <span className="tracking-[-0.05em]">zynex</span>
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                <span className="tracking-[0.1em]">LIVE</span>
              </div>
            </div>
          </div>
          <div className="flex-[1.5]">
            <h2 className="text-[2rem] font-bold m-0 mb-4 text-white max-sm:text-[1.5rem]">Intelligence That <span className="italic">Transforms</span></h2>
            <p className="text-base text-white/70 leading-relaxed m-0 max-w-[450px] max-lg:mx-auto">AI-powered automation that handles repetitive work around the clock. Build custom workflows with our visual builder or deploy from 200+ pre-built solutions in minutes.</p>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 px-8 bg-white max-md:py-16 max-md:px-6 max-sm:px-4">
        <div className="max-w-[1200px] mx-auto rounded-3xl overflow-hidden bg-white">
          <div className="grid grid-cols-2 items-center max-lg:grid-cols-1">
            <div className="p-12 max-md:p-8 flex flex-col gap-6" data-animate="fade-up">
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[#09983A]">Zynex for Enterprise</span>
              <h2 className="text-[1.8rem] font-extrabold text-[#111111] leading-[1.15] tracking-[-0.02em] max-md:text-[1.5rem]">One connected platform that replaces your disconnected tools</h2>
              <p className="text-base text-[#555555] leading-[1.7]">Your CRM talks to your invoicing, your HR syncs with payroll, your AI accesses everything — natively. Stop juggling separate tools that don&apos;t talk to each other.</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['CRM', 'Finance', 'HR', 'Projects', 'AI Intelligence'].map((tag, i) => (
                  <span key={i} className="text-xs font-semibold py-1.5 px-4 rounded-full bg-white text-[#111111] border border-[#111111]/20">{tag}</span>
                ))}
              </div>
              <Link href="/enterprise" className="bg-[#F60014] text-white py-3.5 px-8 rounded-none border-none text-[0.9rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.05em] no-underline w-fit group mt-2">LEARN MORE <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></Link>
            </div>
            <div className="flex justify-center items-center p-8 max-lg:pb-12" data-animate="fade-up" data-delay="2">
              <Image src="/images/enterprise-section.webp" alt="Enterprise Data Platform" width={1233} height={1068} className="w-full h-auto object-contain" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Made in India Section */}
      <section className="py-24 bg-[#056CB8] text-white relative overflow-hidden max-md:py-16">
        <div className="max-w-[1200px] mx-auto px-12 max-md:px-6 relative">
          <div className="relative z-10">
            <h2 className="text-[2.2rem] font-extrabold leading-[1.2] mb-16 max-md:text-[1.8rem] max-md:mb-10">Made in India.<br />Build for the World.</h2>
            <div className="grid grid-cols-2 gap-x-20 gap-y-12 max-w-[600px] max-md:gap-x-10 max-md:gap-y-8">
              {[
                { value: '10+', label: 'Products\nBuilt' },
                { value: '25+', label: 'Projects\nDelivered' },
                { value: '30+', label: 'Happy\nClients' },
                { value: '99.9%', label: 'Uptime' },
                { value: '5+', label: 'Industries\nServed' },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="text-[2.2rem] font-extrabold leading-none whitespace-nowrap max-md:text-[1.8rem] min-w-[90px]"><CountUp value={stat.value} /></span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white/80 leading-tight whitespace-pre-line">{stat.label}</span>
                    <div className="w-full h-[2px] bg-white/30 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Globe illustration */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] max-lg:w-[350px] max-lg:h-[350px] max-md:hidden animate-globe-pulse" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
              <g className="animate-globe-spin">
                <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="60" ry="180" stroke="white" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="120" ry="180" stroke="white" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="180" ry="60" stroke="white" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="180" ry="120" stroke="white" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="180" ry="30" stroke="white" strokeWidth="1.5" />
              </g>
              <ellipse cx="200" cy="200" rx="195" ry="80" stroke="white" strokeWidth="1" transform="rotate(-25 200 200)" />
              <circle cx="175" cy="160" r="5" fill="white" />
              <circle cx="175" cy="160" r="5" fill="white" opacity="0.6" className="animate-dot-ping" />
              <circle cx="250" cy="180" r="4" fill="white" />
              <circle cx="250" cy="180" r="4" fill="white" opacity="0.6" className="animate-dot-ping-delay-1" />
              <circle cx="140" cy="220" r="3.5" fill="white" />
              <circle cx="140" cy="220" r="3.5" fill="white" opacity="0.6" className="animate-dot-ping-delay-2" />
              <circle cx="280" cy="140" r="3" fill="white" />
              <circle cx="230" cy="250" r="3.5" fill="white" />
              <circle cx="160" cy="130" r="2.5" fill="white" />
              <line x1="175" y1="160" x2="250" y2="180" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="175" y1="160" x2="140" y2="220" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="250" y1="180" x2="280" y2="140" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="250" y1="180" x2="230" y2="250" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 px-8 bg-white max-md:py-16 max-md:px-6 max-sm:px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1">
            <div className="flex flex-col gap-6" data-animate="fade-left">
              <h2 className="text-[1.8rem] font-extrabold text-[#111111] leading-[1.15] tracking-[-0.02em] max-md:text-[1.5rem]">Your privacy, our promise.</h2>
              <p className="text-base text-[#555555] leading-[1.7]">We don&apos;t sell your data. We don&apos;t show you ads. We don&apos;t let third parties peek at your business information. Our only revenue comes from the software you choose to pay for.</p>
              <div className="flex flex-col gap-4 mt-2">
                {['End-to-end encryption on all data', 'SOC 2 Type II compliant infrastructure', 'You own 100% of your data, always'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-[0.95rem] text-[#333333]">
                    <span className="text-[#111111] font-bold">&#10003;</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center" data-animate="fade-right">
              <Image src="/images/privacy-shield.webp" alt="Privacy and security illustration" width={520} height={520} className="w-full max-w-[420px] h-auto max-md:max-w-[320px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 bg-white col-span-full max-md:py-16 max-md:px-6 max-sm:px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-20 max-w-[800px] mx-auto leading-[1.2] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-12" data-animate="fade-up">What drives us</h2>
          <div className="grid grid-cols-3 gap-16 text-left max-lg:grid-cols-1 max-lg:max-w-[500px] max-lg:mx-auto max-lg:text-center">
            {[
              { img: '/images/value-commitment.webp', w: 95, h: 83, title: 'AI at the core', desc: 'Not an afterthought or add-on. Every tool in Zynex has intelligence built in from day one — from automated workflows to predictive insights that help you make better decisions faster.' },
              { img: '/images/value-research.webp', w: 96, h: 89, title: 'Made for small teams', desc: "Enterprise power without the enterprise bloat. Simple to set up, easy to use, and priced for growing businesses. You shouldn't need a dedicated IT team to run your business software." },
              { img: '/images/value-customer.webp', w: 107, h: 82, title: 'Customer-first, always', desc: 'We grow when you grow. No lock-in contracts, no hidden fees, no selling your data. Just straightforward software that earns your trust by being genuinely useful every single day.' },
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-6 group" data-animate="fade-up" data-delay={i + 1}>
                <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-md transition-all duration-300 overflow-hidden p-2 group-hover:-translate-y-1.5 max-lg:mx-auto">
                  <Image src={v.img} alt="" width={v.w} height={v.h} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] m-0 leading-[1.3]">{v.title}</h3>
                <p className="text-[1.05rem] text-[#555555] leading-[1.7] m-0">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white text-center max-md:py-20 max-md:px-6 max-sm:px-4">
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-6" data-animate="fade-up">
          <h2 className="text-[2.5rem] font-extrabold text-[#111111] m-0 leading-[1.2] tracking-[-0.02em] max-md:text-[2rem] max-sm:text-[1.6rem]">Ready to simplify your stack?</h2>
          <p className="text-lg text-[#555555] leading-relaxed m-0">Stop paying for 10 different tools. Get one platform that does it all — with AI that actually helps.</p>
          <div className="mt-2">
            <Link href="/solutions/enterprise-solutions" className="bg-[#EE0014] text-white py-4 px-10 rounded-none border-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 uppercase tracking-[0.05em] no-underline group">TALK TO US <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
