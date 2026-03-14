import Image from 'next/image';

export const metadata = {
    title: 'Human Resources — Modern Workforce Management',
    description: 'Modern HRMS for recruitment, onboarding, payroll, and employee management with AI-driven workforce analytics.',
    alternates: { canonical: 'https://zynex.ai/products/human-resources' },
    openGraph: {
        title: 'Human Resources — Modern Workforce Management',
        description: 'Modern HRMS for recruitment, onboarding, payroll, and employee management with AI-driven workforce analytics.',
    },
};

export default function HumanResources() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Human Resources</span>
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
                    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://zynex.ai/products" },
                    { "@type": "ListItem", "position": 3, "name": "Human Resources" }
                  ]
                }) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "name": "Zynex Human Resources",
                  "description": "Modern HRMS for recruitment, onboarding, payroll, and employee management with AI-driven workforce analytics.",
                  "url": "https://zynex.ai/products/human-resources",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "provider": {
                    "@type": "Organization",
                    "name": "Zynex AI",
                    "url": "https://zynex.ai"
                  }
                }) }} />
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                    {/* Left — Text */}
                    <div className="flex flex-col gap-6" data-animate="fade-up">
                        <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-[#555555]">Modern HRMS</span>
                        </div>
                        <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                            Streamline your<br />workforce management.
                        </h1>
                        <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[520px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Empower your HR team with comprehensive tools to manage employees, track attendance, handle leave requests, and conduct performance reviews — all from one integrated platform.
                        </p>
                        <div className="flex gap-4 mt-2 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                            <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                                Talk Sales
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                            <button className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                                See demo
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                        </div>
                        <p className="text-[0.78rem] text-[#888888] m-0">
                            Automate HR workflows &nbsp;&bull;&nbsp; Employee self-service &nbsp;&bull;&nbsp; Go live in days
                        </p>
                    </div>

                    {/* Right — HR Dashboard Mockup */}
                    <div className="max-lg:mt-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">HR — Team Overview</span>
                            </div>

                            <div className="p-5 max-sm:p-4">
                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-3 mb-4 max-sm:gap-2 max-sm:mb-3">
                                    {[
                                        { label: 'Total Employees', value: '248', icon: 'bi-people-fill' },
                                        { label: 'On Leave', value: '12', icon: 'bi-calendar-x-fill' },
                                        { label: 'Open Positions', value: '7', icon: 'bi-bullseye' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-3 max-sm:p-2">
                                            <div className="flex items-center gap-1.5 mb-1">
                                                <i className={`bi ${stat.icon} text-[#056CB8] text-[0.65rem]`}></i>
                                                <span className="text-[0.55rem] font-semibold text-[#555555] uppercase tracking-wider">{stat.label}</span>
                                            </div>
                                            <div className="text-[1.1rem] font-extrabold text-[#111111] max-sm:text-[0.9rem]">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Employee List */}
                                <div className="mb-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">Recent Activity</span>
                                    </div>
                                    {[
                                        { name: 'Priya Sharma', action: 'Leave approved', dept: 'Engineering', color: '#22c55e' },
                                        { name: 'Raj Patel', action: 'Onboarding started', dept: 'Design', color: '#056CB8' },
                                        { name: 'Anita Desai', action: 'Review scheduled', dept: 'Marketing', color: '#f59e0b' },
                                        { name: 'Vikram Singh', action: 'Attendance flagged', dept: 'Sales', color: '#F60014' },
                                    ].map((emp) => (
                                        <div key={emp.name} className="flex items-center justify-between py-2 border-b border-[#e0e0e0] last:border-0">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-6 h-6 rounded-full bg-[#e0e0e0] flex items-center justify-center">
                                                    <span className="text-[0.5rem] font-bold text-[#555555]">{emp.name.split(' ').map(n => n[0]).join('')}</span>
                                                </div>
                                                <div>
                                                    <div className="text-[0.72rem] font-semibold text-[#111111] max-sm:text-[0.65rem]">{emp.name}</div>
                                                    <div className="text-[0.58rem] text-[#555555]">{emp.dept}</div>
                                                </div>
                                            </div>
                                            <span className="text-[0.6rem] font-semibold px-2 py-0.5 rounded" style={{ color: emp.color, backgroundColor: `${emp.color}15` }}>
                                                {emp.action}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Lifecycle — Horizontal Flow */}
            <section className="border-y border-[#e0e0e0] bg-[#f5f5f5]">
                <div className="max-w-[1400px] mx-auto px-12 py-20 max-md:px-6 max-md:py-14 max-sm:px-4 max-sm:py-10">
                    <h2 className="text-[1.8rem] font-extrabold text-[#111111] tracking-[-0.02em] text-center mb-14 max-md:text-[1.5rem] max-sm:text-[1.3rem] max-sm:mb-10" data-animate="fade-up">
                        The complete employee lifecycle — in one platform
                    </h2>
                    <div className="grid grid-cols-5 gap-0 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
                        {[
                            { step: '01', title: 'Recruit', desc: 'Post jobs, screen applicants, schedule interviews', icon: 'bi-bullseye' },
                            { step: '02', title: 'Onboard', desc: 'Automate document collection, training, and setup', icon: 'bi-person-check' },
                            { step: '03', title: 'Manage', desc: 'Attendance, leave, shifts, and daily operations', icon: 'bi-calendar-check-fill' },
                            { step: '04', title: 'Grow', desc: 'Performance reviews, goals, learning paths', icon: 'bi-graph-up-arrow' },
                            { step: '05', title: 'Retain', desc: 'Engagement surveys, benefits, recognition', icon: 'bi-star-fill' },
                        ].map((phase, idx) => (
                            <div key={phase.step} className="relative flex flex-col items-center text-center px-6 max-sm:px-0 max-sm:flex-row max-sm:text-left max-sm:items-start max-sm:gap-4">
                                {/* Connector line */}
                                {idx < 4 && (
                                    <div className="absolute top-7 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[1px] bg-[#d1d5db] max-lg:hidden"></div>
                                )}
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#056CB8] flex items-center justify-center mb-4 relative z-10 shrink-0 max-sm:mb-0">
                                    <i className={`bi ${phase.icon} text-[#056CB8] text-lg`}></i>
                                </div>
                                <div>
                                    <span className="text-[0.65rem] font-bold text-[#056CB8] uppercase tracking-widest">{phase.step}</span>
                                    <h3 className="text-[1rem] font-bold text-[#111111] mt-1 mb-1.5">{phase.title}</h3>
                                    <p className="text-[0.82rem] text-[#555555] leading-relaxed m-0 max-w-[180px] mx-auto max-sm:mx-0">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capabilities — Cards with Image Placeholder */}
            <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Everything you need to manage your workforce
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] max-w-[580px] mx-auto max-sm:text-[0.9rem]">
                        Four powerful modules working together to cover every HR need.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1" data-animate="fade-up">
                    {[
                        {
                            icon: 'bi-people-fill',
                            color: '#056CB8',
                            bg: '#056CB8',
                            num: '01',
                            title: 'Employee Management',
                            desc: 'Maintain comprehensive employee records, track organizational hierarchy, and manage onboarding and offboarding processes seamlessly.',
                        },
                        {
                            icon: 'bi-calendar-check-fill',
                            color: '#09983A',
                            bg: '#09983A',
                            num: '02',
                            title: 'Attendance Tracking',
                            desc: 'Monitor employee attendance in real-time with automated clock-in/out systems, shift management, and overtime calculations.',
                        },
                        {
                            icon: 'bi-calendar-x-fill',
                            color: '#F60014',
                            bg: '#F60014',
                            num: '03',
                            title: 'Leave Management',
                            desc: 'Streamline leave requests and approvals with automated workflows, balance tracking, and comprehensive leave policy management.',
                        },
                        {
                            icon: 'bi-graph-up-arrow',
                            color: '#8b5cf6',
                            bg: '#8b5cf6',
                            num: '04',
                            title: 'Performance Reviews',
                            desc: 'Conduct structured evaluations, set goals, track progress, and provide continuous feedback to drive employee growth.',
                        },
                    ].map((cap, i) => (
                        <div key={cap.title} className="relative border border-[#e0e0e0] rounded-md p-8 bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 max-sm:p-6" data-animate="fade-up" data-delay={i + 1}>
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${cap.bg}10` }}>
                                    <i className={`bi ${cap.icon} text-2xl`} style={{ color: cap.color }}></i>
                                </div>
                                <div className="flex-1">
                                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-2 block" style={{ color: cap.color }}>{cap.num}</span>
                                    <h3 className="text-[1.15rem] font-bold text-[#111111] mb-3">{cap.title}</h3>
                                    <p className="text-[0.9rem] text-[#555555] leading-[1.7] m-0">{cap.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits — Offset Grid */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Why businesses choose Zynex HR
                        </h2>
                        <p className="text-[1.05rem] text-white/50 max-w-[520px] mx-auto max-sm:text-[0.9rem]">
                            Built to save time, improve experience, and scale with you.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1" data-animate="fade-up">
                        {[
                            {
                                icon: 'bi-lightning-charge-fill',
                                title: 'Save 70% Admin Time',
                                desc: 'Automate repetitive HR processes and reduce manual paperwork. Focus your team on strategic initiatives that drive growth.',
                            },
                            {
                                icon: 'bi-people-fill',
                                title: 'Better Employee Experience',
                                desc: 'Self-service portals for leave requests, attendance tracking, and document access. Boost satisfaction across your organization.',
                            },
                            {
                                icon: 'bi-shield-fill-check',
                                title: 'Ensure Compliance',
                                desc: 'Stay compliant with labor laws and regulations. Automated audit trails and comprehensive reporting keep you covered.',
                            },
                            {
                                icon: 'bi-graph-up',
                                title: 'Scale with Your Business',
                                desc: 'From startups to enterprises — add users, customize workflows, and expand functionality as your needs evolve.',
                            },
                            {
                                icon: 'bi-diagram-3',
                                title: 'Seamless Integration',
                                desc: 'Connect with Zynex Finance Plus for payroll and other enterprise modules. Data flows smoothly across your entire ecosystem.',
                            },
                            {
                                icon: 'bi-bar-chart-fill',
                                title: 'Data-Driven Insights',
                                desc: 'Powerful analytics and customizable reports. Track key HR metrics, identify trends, and optimize your workforce strategy.',
                            },
                        ].map((benefit) => (
                            <div key={benefit.title} className="bg-white/5 border border-white/10 rounded-md p-6 max-sm:p-5">
                                <i className={`bi ${benefit.icon} text-[#056CB8] text-xl mb-4 block`}></i>
                                <h3 className="text-[1rem] font-bold mb-2">{benefit.title}</h3>
                                <p className="text-[0.85rem] text-white/50 leading-relaxed m-0">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full-Width Image Section */}
            <section className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
                    {/* Image Placeholder */}
                    <div className="w-full" data-animate="fade-left">
                        <Image src="/images/hr-dashboard.webp" alt="HR Dashboard across devices" width={1536} height={1024} className="w-full h-auto object-contain rounded-md" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>

                    {/* Text */}
                    <div data-animate="fade-right">
                        <h2 className="text-[2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-6 max-md:text-[1.6rem] max-sm:text-[1.4rem]">
                            One dashboard for your entire workforce
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] leading-relaxed mb-8 max-sm:text-[0.9rem] max-sm:mb-6">
                            Get a bird&apos;s-eye view of your organization. Monitor headcount, attendance patterns, leave balances, and performance metrics — all updating in real time.
                        </p>
                        <div className="flex flex-col gap-4">
                            {[
                                'Real-time attendance and shift monitoring',
                                'Automated leave balance calculations',
                                'Department-wise headcount analytics',
                                'Performance review cycle tracking',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <i className="bi bi-check-circle-fill text-[#22c55e] text-sm shrink-0"></i>
                                    <span className="text-[0.92rem] text-[#111111] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-12 bg-white flex justify-center items-center w-full border-t border-[#e0e0e0] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[680px] w-full text-center flex flex-col items-center gap-6 max-sm:gap-4" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Modern HR starts here
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] leading-relaxed max-sm:text-[0.9rem]">
                        Simplify attendance, leave management, and performance reviews — so your HR team can focus on people, not paperwork.
                    </p>
                    <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 mt-4 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Explore Zynex HR
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
