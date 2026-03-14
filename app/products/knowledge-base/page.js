export const metadata = {
    title: 'Knowledge Base — AI-Powered Intelligence Hub',
    description: 'Centralize your organization\'s knowledge. AI-powered search delivers instant, accurate answers from every document, system, and source — in seconds.',
    alternates: { canonical: 'https://zynex.ai/products/knowledge-base' },
    openGraph: {
        title: 'Knowledge Base — AI-Powered Intelligence Hub',
        description: 'Centralize your organization\'s knowledge. AI-powered search delivers instant answers from every source.',
    },
};

export default function KnowledgeBase() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero — Text Left + Search Demo Right */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Knowledge Base</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                {/* Left — Text */}
                <div data-animate="fade-up">
                    <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 mb-6 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                        <span className="text-[0.82rem] font-medium text-[#555555]">AI-Powered Knowledge</span>
                    </div>
                    <h1 className="text-[2.8rem] font-extrabold leading-[1.1] text-[#111111] tracking-[-0.02em] mb-6 max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                        Every answer your team needs. Instantly.
                    </h1>
                    <p className="text-[1.15rem] leading-relaxed text-[#555555] mb-10 max-w-[520px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                        Centralize documents, SOPs, policies, and tribal knowledge into one AI-powered hub. Ask anything — get precise answers with source citations, not 50 links to scroll through.
                    </p>
                    <div className="flex gap-4 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                        <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                            Start building <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                        </button>
                    </div>
                </div>

                {/* Right — Live Search Mockup */}
                <div>
                    <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                        {/* Window Chrome */}
                        <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                            <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">Knowledge Base</span>
                        </div>

                        <div className="p-6 max-sm:p-4">
                            {/* Search Bar */}
                            <div className="flex items-center gap-3 bg-[#f5f5f5] border border-[#e0e0e0] rounded-md px-4 py-3 mb-5">
                                <i className="bi bi-activity text-[#555555] text-sm"></i>
                                <span className="text-[0.9rem] text-[#111111] font-medium max-sm:text-[0.8rem]">What is our refund policy for enterprise clients?</span>
                                <span className="w-[2px] h-4 bg-[#056CB8] animate-pulse ml-0.5"></span>
                            </div>

                            {/* AI Answer Card */}
                            <div className="bg-white border border-[#e0e0e0] rounded-md p-5 max-sm:p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-5 h-5 bg-[#056CB8] rounded flex items-center justify-center">
                                        <i className="bi bi-lightning-charge-fill text-white text-[0.6rem]"></i>
                                    </div>
                                    <span className="text-[0.75rem] font-bold text-[#056CB8] uppercase tracking-wider">AI Answer</span>
                                    <span className="ml-auto text-[0.7rem] font-bold text-white bg-[#09983A] px-2.5 py-0.5 rounded-full">95% match</span>
                                </div>
                                <p className="text-[0.85rem] text-[#555555] leading-[1.7] mb-4">
                                    Enterprise clients on annual plans are eligible for a full refund within the first 30 days. After 30 days, refunds are prorated based on remaining contract months...
                                </p>
                                <div className="flex items-center gap-2 text-[0.7rem] text-[#555555]">
                                    <i className="bi bi-file-earmark-text text-xs"></i>
                                    <span className="font-semibold">Source:</span>
                                    <span className="text-[#056CB8] underline">Enterprise Terms of Service v4.2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Source Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        {['PDF', 'Excel', 'Word', 'CSV', 'PowerPoint', 'Text'].map((src, i) => (
                            <span
                                key={src}
                                className="bg-white border border-[#e0e0e0] rounded-md px-3.5 py-1.5 text-[0.75rem] font-semibold text-[#555555] shadow-[0_2px_8px_rgba(0,0,0,0.04)] animate-float"
                                style={{ animationDelay: `${i * 0.3}s` }}
                            >
                                {src}
                            </span>
                        ))}
                    </div>
                </div>
                </div>
            </section>

            {/* Before / After Comparison */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[900px] mx-auto mb-20 max-sm:mb-12" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-4">
                        The difference is night and day
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                        See how Knowledge Base transforms information access across your organization
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 max-w-[1100px] mx-auto max-md:grid-cols-1 max-sm:gap-6" data-animate="fade-up">
                    {/* Without */}
                    <div className="bg-white border border-[#e0e0e0] rounded-md p-8 max-sm:p-6">
                        <div className="flex items-center gap-3 mb-8 max-sm:mb-6">
                            <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                                <i className="bi bi-exclamation-triangle text-[#F60014] text-sm font-bold"></i>
                            </div>
                            <h3 className="text-[1.1rem] font-bold text-[#111111] max-sm:text-[1rem]">Without Knowledge Base</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            {[
                                'Employees waste 20% of their week searching for information',
                                'Critical knowledge walks out the door when people leave',
                                'Same questions answered repeatedly across departments',
                                'Documents scattered across 10+ tools with no single source of truth',
                                'New hires take months to become productive',
                            ].map((pain) => (
                                <div key={pain} className="flex gap-3 items-start">
                                    <span className="text-[#F60014] font-bold text-sm mt-0.5 shrink-0">✕</span>
                                    <p className="text-[0.9rem] text-[#555555] leading-[1.6] max-sm:text-[0.85rem]">{pain}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* With */}
                    <div className="bg-white border-2 border-[#056CB8] rounded-md p-8 max-sm:p-6">
                        <div className="flex items-center gap-3 mb-8 max-sm:mb-6">
                            <div className="w-10 h-10 bg-[#056CB8]/10 rounded-lg flex items-center justify-center">
                                <i className="bi bi-check-circle-fill text-[#056CB8] text-sm font-bold"></i>
                            </div>
                            <h3 className="text-[1.1rem] font-bold text-[#111111] max-sm:text-[1rem]">With Knowledge Base</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            {[
                                'Instant AI-powered answers with source citations in under 3 seconds',
                                'Institutional knowledge preserved and accessible forever',
                                'Self-service answers reduce repetitive questions by 80%',
                                'One unified hub that syncs with all your existing tools',
                                'New hires onboard in days with guided knowledge access',
                            ].map((benefit) => (
                                <div key={benefit} className="flex gap-3 items-start">
                                    <span className="text-[#09983A] font-bold text-sm mt-0.5 shrink-0">✓</span>
                                    <p className="text-[0.9rem] text-[#555555] leading-[1.6] max-sm:text-[0.85rem]">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                    Built for teams that hate searching
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[800px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12" data-animate="fade-up">
                    Every feature designed to get your team from question to answer in seconds
                </p>

                <div className="grid grid-cols-3 grid-rows-[auto_auto] gap-6 max-w-[1200px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1" data-animate="fade-up">
                    {/* Hero Card — Semantic Search (spans 2 cols, 2 rows) */}
                    <div className="col-span-2 row-span-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-lg:col-span-2 max-md:col-span-1 max-md:row-span-1 max-sm:p-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-11 h-11 bg-[#111111] rounded-lg flex items-center justify-center">
                                    <i className="bi bi-bullseye text-lg text-white"></i>
                                </div>
                                <span className="text-[0.65rem] font-bold text-[#111111] bg-white px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#e0e0e0]">AI-Powered</span>
                            </div>
                            <h3 className="text-[1.4rem] font-bold text-[#111111] mb-3 max-sm:text-[1.15rem]">Semantic Search</h3>
                            <p className="text-[0.95rem] text-[#555555] leading-[1.7] max-w-[520px] max-sm:text-[0.85rem]">
                                Understands intent, not just keywords. Ask &quot;what&apos;s our refund policy for enterprise clients?&quot; and get the exact paragraph — not every doc that mentions &quot;refund.&quot;
                            </p>
                        </div>

                        {/* Mini Search Illustration */}
                        <div className="mt-8 bg-white border border-[#e0e0e0] rounded-md p-4 max-w-[400px] max-sm:mt-6">
                            <div className="flex items-center gap-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded px-3 py-2 mb-3">
                                <i className="bi bi-activity text-[#555555] text-xs"></i>
                                <span className="text-[0.8rem] text-[#555555]">How do I reset MFA?</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#09983A]"></span>
                                <span className="text-[0.75rem] text-[#555555]">3 results · 0.8s</span>
                            </div>
                        </div>
                    </div>

                    {/* Smaller Cards */}
                    {[
                        {
                            icon: 'bi bi-arrow-left-right',
                            title: 'Multi-Format Upload',
                            desc: 'Upload PDFs, Excel sheets, Word docs, CSVs, PowerPoint decks, and more. Connects with your Zynex apps for a unified knowledge layer.',
                            tag: 'Uploads',
                        },
                        {
                            icon: 'bi bi-lock-fill',
                            title: 'Role-Based Access',
                            desc: 'Control who sees what. Department-level, team-level, or individual permissions keep sensitive data secure.',
                            tag: 'Security',
                        },
                        {
                            icon: 'bi bi-clock-history',
                            title: 'Version History',
                            desc: 'Every change tracked. Roll back to any version instantly. Full audit trail for compliance.',
                            tag: 'Compliance',
                        },
                        {
                            icon: 'bi bi-people-fill',
                            title: 'Team Collaboration',
                            desc: 'Comment on articles, suggest edits, flag outdated content. Built-in review workflows.',
                            tag: 'Collaboration',
                        },
                        {
                            icon: 'bi bi-bar-chart-fill',
                            title: 'Usage Analytics',
                            desc: 'See what your team searches for most and where knowledge gaps exist. Data-driven content strategy.',
                            tag: 'Insights',
                        },
                    ].map((cap) => (
                        <div key={cap.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center text-[#111111]">
                                    <i className={`${cap.icon} text-base`}></i>
                                </div>
                                <span className="text-[0.6rem] font-bold text-[#111111] bg-[#f5f5f5] px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#e0e0e0]">{cap.tag}</span>
                            </div>
                            <h3 className="text-[1rem] font-bold text-[#111111] mb-2 max-sm:text-[0.95rem]">{cap.title}</h3>
                            <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Works With Section */}
            <section className="py-24 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        Works with everything you use
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        Upload documents directly or connect with your Zynex apps
                    </p>

                    <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-6" data-animate="fade-up">
                        {/* Document Formats Card */}
                        <div className="bg-white border border-[#e0e0e0] rounded-md p-8 max-sm:p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                                    <i className="bi bi-file-earmark-text text-[#111111] text-base"></i>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-[#111111]">Document Formats</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {['PDF', 'Excel', 'Word', 'CSV', 'PowerPoint', 'Text', 'Markdown', 'HTML', 'JSON', 'Images'].map((item) => (
                                    <span
                                        key={item}
                                        className="bg-[#f5f5f5] border border-[#e0e0e0] rounded px-4 py-2 text-[0.8rem] font-semibold text-[#111111] max-sm:px-3 max-sm:py-1.5 max-sm:text-[0.7rem]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Zynex App Connections Card */}
                        <div className="bg-white border-2 border-[#056CB8] rounded-md p-8 max-sm:p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-[#056CB8]/10 rounded-lg flex items-center justify-center">
                                    <i className="bi bi-diagram-3 text-[#056CB8] text-base"></i>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-[#111111]">Zynex Apps</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {['CRM Lite', 'Finance Plus', 'Project Plus', 'Human Resources', 'Marketing Automation', 'YenAI', 'Assistant Hub', 'Knowledge Base'].map((app) => (
                                    <span
                                        key={app}
                                        className="bg-[#056CB8]/5 border border-[#056CB8]/20 rounded px-4 py-2 text-[0.8rem] font-semibold text-[#056CB8] max-sm:px-3 max-sm:py-1.5 max-sm:text-[0.7rem]"
                                    >
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dark Stats Section */}
            <section className="py-24 px-12 bg-[#111111] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="grid grid-cols-4 gap-12 max-w-[1000px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-8">
                    {[
                        { number: '95%', label: 'Faster answer discovery' },
                        { number: '20+', label: 'File formats supported' },
                        { number: '< 3s', label: 'Average query response' },
                        { number: '99.9%', label: 'Uptime SLA' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-[2.4rem] font-extrabold text-white mb-1 max-sm:text-[1.8rem]">{stat.number}</div>
                            <div className="text-[0.85rem] text-white/60 font-semibold max-sm:text-[0.8rem]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Block */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[800px] mx-auto" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Your team&apos;s knowledge deserves better than a shared drive.
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem]">
                        Stop losing institutional knowledge when people leave. Start building a living, searchable brain for your entire organization.
                    </p>
                    <button className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Get started <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
