import CountUp from '@/components/CountUp';

export const metadata = {
    title: 'CRM Lite — Smart Sales Pipeline for Growing Teams',
    description: 'Lightweight yet powerful CRM to manage contacts, deals, and customer relationships with intelligent pipeline automation.',
    alternates: { canonical: 'https://zynex.ai/products/crm-lite' },
    openGraph: {
        title: 'CRM Lite — Smart Sales Pipeline for Growing Teams',
        description: 'Lightweight yet powerful CRM to manage contacts, deals, and customer relationships with intelligent pipeline automation.',
    },
};

export default function CRMLite() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">CRM Lite</span>
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
                    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://zynex.ai/products" },
                    { "@type": "ListItem", "position": 3, "name": "CRM Lite" }
                  ]
                }) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "name": "Zynex CRM Lite",
                  "description": "Lightweight yet powerful CRM to manage contacts, deals, and customer relationships with intelligent pipeline automation.",
                  "url": "https://zynex.ai/products/crm-lite",
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
                            <span className="text-[0.82rem] font-medium text-[#555555]">Smart Sales Pipeline</span>
                        </div>
                        <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                            Close more deals.<br />Without the complexity.
                        </h1>
                        <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[520px] max-md:text-base max-sm:text-[0.9rem]">
                            Transform raw inquiries into closed deals. Track leads, qualify opportunities, and drive revenue through an intuitive pipeline — built for teams that want results, not bloat.
                        </p>
                        <div className="flex gap-4 mt-2 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                            <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                                Start free
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                            <button className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                                See demo
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                        </div>
                        <p className="text-[0.78rem] text-[#888888] m-0">
                            Close deals faster &nbsp;&bull;&nbsp; Visual pipeline &nbsp;&bull;&nbsp; Setup in minutes
                        </p>
                    </div>

                    {/* Right — Pipeline Kanban Mockup */}
                    <div className="max-lg:mt-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">CRM Lite — Pipeline</span>
                            </div>

                            <div className="p-5 max-sm:p-4">
                                {/* Pipeline Columns */}
                                <div className="grid grid-cols-3 gap-3 max-sm:gap-2">
                                    {/* New Leads */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 max-sm:mb-2">
                                            <span className="w-2 h-2 rounded-full bg-[#056CB8]"></span>
                                            <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">New</span>
                                            <span className="text-[0.6rem] font-semibold text-[#555555] bg-[#f5f5f5] px-1.5 py-0.5 rounded">4</span>
                                        </div>
                                        {[
                                            { name: 'Acme Corp', value: '$12,000', hot: true },
                                            { name: 'TechFlow', value: '$8,500', hot: false },
                                        ].map((deal) => (
                                            <div key={deal.name} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-3 mb-2 max-sm:p-2 max-sm:mb-1.5">
                                                <div className="text-[0.75rem] font-semibold text-[#111111] mb-1 max-sm:text-[0.68rem]">{deal.name}</div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[0.68rem] font-bold text-[#056CB8] max-sm:text-[0.6rem]">{deal.value}</span>
                                                    {deal.hot && <span className="text-[0.55rem] font-bold text-[#F60014] bg-[#F60014]/10 px-1.5 py-0.5 rounded">Hot</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* In Progress */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 max-sm:mb-2">
                                            <span className="w-2 h-2 rounded-full bg-[#fbbf24]"></span>
                                            <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">Progress</span>
                                            <span className="text-[0.6rem] font-semibold text-[#555555] bg-[#f5f5f5] px-1.5 py-0.5 rounded">3</span>
                                        </div>
                                        {[
                                            { name: 'GlobalFin', value: '$24,000' },
                                            { name: 'MedFirst', value: '$18,200' },
                                        ].map((deal) => (
                                            <div key={deal.name} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-3 mb-2 max-sm:p-2 max-sm:mb-1.5">
                                                <div className="text-[0.75rem] font-semibold text-[#111111] mb-1 max-sm:text-[0.68rem]">{deal.name}</div>
                                                <span className="text-[0.68rem] font-bold text-[#056CB8] max-sm:text-[0.6rem]">{deal.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Won */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 max-sm:mb-2">
                                            <span className="w-2 h-2 rounded-full bg-[#09983A]"></span>
                                            <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">Won</span>
                                            <span className="text-[0.6rem] font-semibold text-[#555555] bg-[#f5f5f5] px-1.5 py-0.5 rounded">7</span>
                                        </div>
                                        {[
                                            { name: 'RetailPro', value: '$32,400' },
                                            { name: 'DataSync', value: '$15,800' },
                                        ].map((deal) => (
                                            <div key={deal.name} className="bg-[#09983A]/5 border border-[#09983A]/20 rounded-md p-3 mb-2 max-sm:p-2 max-sm:mb-1.5">
                                                <div className="flex items-center gap-1.5 mb-1">
                                                    <i className="bi bi-check-circle-fill text-[#09983A] text-[0.6rem]"></i>
                                                    <span className="text-[0.75rem] font-semibold text-[#111111] max-sm:text-[0.68rem]">{deal.name}</span>
                                                </div>
                                                <span className="text-[0.68rem] font-bold text-[#09983A] max-sm:text-[0.6rem]">{deal.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom stats bar */}
                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#e0e0e0] max-sm:mt-3">
                                    <div className="flex items-center gap-2">
                                        <i className="bi bi-graph-up text-[#056CB8] text-xs"></i>
                                        <span className="text-[0.72rem] text-[#555555]">Pipeline value: <strong className="text-[#111111]">$110,900</strong></span>
                                    </div>
                                    <span className="text-[0.65rem] font-bold text-[#09983A]">68% win rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities — Bento Grid */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                    Everything you need to close deals faster
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[700px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12" data-animate="fade-up">
                    From first contact to signed contract — manage your entire sales cycle in one place
                </p>

                <div className="grid grid-cols-3 grid-rows-[auto_auto] gap-6 max-w-[1200px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1" data-animate="fade-up">
                    {/* Hero Card — Pipeline (spans 2 cols) */}
                    <div className="col-span-2 bg-white border border-[#e0e0e0] rounded-md p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-lg:col-span-2 max-md:col-span-1 max-sm:p-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-11 h-11 bg-[#111111] rounded-lg flex items-center justify-center">
                                    <i className="bi bi-bar-chart-fill text-lg text-white"></i>
                                </div>
                                <span className="text-[0.65rem] font-bold text-[#111111] bg-[#f5f5f5] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#e0e0e0]">Core</span>
                            </div>
                            <h3 className="text-[1.4rem] font-bold text-[#111111] mb-3 max-sm:text-[1.15rem]">Visual Pipeline Management</h3>
                            <p className="text-[0.95rem] text-[#555555] leading-[1.7] max-w-[520px] max-sm:text-[0.85rem]">
                                Drag-and-drop Kanban boards let you see every deal at a glance. Custom stages, probability scoring, and expected close dates — all in one view.
                            </p>
                        </div>
                        {/* Mini pipeline illustration */}
                        <div className="mt-8 flex items-center gap-3 max-sm:mt-6 max-sm:gap-2">
                            {['New Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won'].map((stage, i) => (
                                <div key={stage} className="flex items-center gap-3 max-sm:gap-2">
                                    <div className={`px-3 py-1.5 rounded text-[0.68rem] font-semibold border max-sm:px-2 max-sm:py-1 max-sm:text-[0.6rem] ${i === 4 ? 'bg-[#09983A]/10 border-[#09983A]/20 text-[#09983A]' : 'bg-[#f5f5f5] border-[#e0e0e0] text-[#555555]'}`}>
                                        {stage}
                                    </div>
                                    {i < 4 && <span className="text-[#e0e0e0] text-xs max-sm:text-[0.6rem]">&rarr;</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Smaller Cards */}
                    {[
                        {
                            icon: 'bi-inbox-fill',
                            title: 'Lead Capture',
                            desc: 'Auto-capture from website forms, emails, and imports. Score and assign leads instantly.',
                            tag: 'Leads',
                        },
                        {
                            icon: 'bi-calendar-event-fill',
                            title: 'Activity Tracking',
                            desc: 'Schedule calls, meetings, and follow-ups with automated reminders. Never miss a touchpoint.',
                            tag: 'Activities',
                        },
                        {
                            icon: 'bi-people-fill',
                            title: 'Contact Management',
                            desc: 'Complete customer profiles with interaction history, notes, and deal associations.',
                            tag: 'Contacts',
                        },
                        {
                            icon: 'bi-graph-up-arrow',
                            title: 'Sales Forecasting',
                            desc: 'Win/loss ratios, conversion rates, and revenue forecasts powered by real-time data.',
                            tag: 'Insights',
                        },
                        {
                            icon: 'bi-lightning-charge-fill',
                            title: 'Smart Automation',
                            desc: 'Auto-assign leads, trigger follow-ups, and move deals through stages based on rules.',
                            tag: 'Automation',
                        },
                    ].map((cap) => (
                        <div key={cap.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center text-[#111111]">
                                    <i className={`bi ${cap.icon} text-base`}></i>
                                </div>
                                <span className="text-[0.6rem] font-bold text-[#111111] bg-[#f5f5f5] px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#e0e0e0]">{cap.tag}</span>
                            </div>
                            <h3 className="text-[1rem] font-bold text-[#111111] mb-2 max-sm:text-[0.95rem]">{cap.title}</h3>
                            <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Before / After — Why Switch */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[900px] mx-auto mb-20 max-sm:mb-12" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-4">
                        Spreadsheets are costing you deals
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                        See how CRM Lite transforms your sales process
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 max-w-[1100px] mx-auto max-md:grid-cols-1 max-sm:gap-6" data-animate="fade-up">
                    {/* Without */}
                    <div className="bg-white border border-[#e0e0e0] rounded-md p-8 max-sm:p-6">
                        <div className="flex items-center gap-3 mb-8 max-sm:mb-6">
                            <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                                <i className="bi bi-exclamation-triangle text-[#F60014] text-sm font-bold"></i>
                            </div>
                            <h3 className="text-[1.1rem] font-bold text-[#111111] max-sm:text-[1rem]">Without CRM Lite</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            {[
                                'Leads lost in spreadsheets and email threads',
                                'No visibility into pipeline value or deal stage',
                                'Follow-ups forgotten — deals go cold',
                                'Manual data entry wastes 5+ hours per week',
                                'No way to forecast revenue accurately',
                            ].map((pain) => (
                                <div key={pain} className="flex gap-3 items-start">
                                    <span className="text-[#F60014] font-bold text-sm mt-0.5 shrink-0">&times;</span>
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
                            <h3 className="text-[1.1rem] font-bold text-[#111111] max-sm:text-[1rem]">With CRM Lite</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            {[
                                'Every lead captured, scored, and assigned automatically',
                                'Visual pipeline shows every deal and its probability',
                                'Automated reminders ensure zero missed follow-ups',
                                'One-click data entry with smart field suggestions',
                                'Real-time forecasts based on pipeline data',
                            ].map((benefit) => (
                                <div key={benefit} className="flex gap-3 items-start">
                                    <i className="bi bi-check-circle-fill text-[#09983A] text-sm mt-0.5 shrink-0"></i>
                                    <p className="text-[0.9rem] text-[#555555] leading-[1.6] max-sm:text-[0.85rem]">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-24 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        Works with your Zynex ecosystem
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        CRM Lite connects to every Zynex module for a seamless workflow
                    </p>

                    <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-3" data-animate="fade-up">
                        {[
                            { name: 'Finance Plus', icon: 'bi-bar-chart-line-fill', desc: 'Sync invoices and payment status' },
                            { name: 'Assistant Hub', icon: 'bi-lightning-charge-fill', desc: 'AI assistants for sales tasks' },
                            { name: 'Human Resources', icon: 'bi-people-fill', desc: 'Team performance tracking' },
                            { name: 'Marketing', icon: 'bi-bullseye', desc: 'Campaign-to-lead attribution' },
                            { name: 'Knowledge Base', icon: 'bi-file-earmark-text', desc: 'Sales playbooks and scripts' },
                            { name: 'Project Plus', icon: 'bi-calendar-check-fill', desc: 'Deal-to-project handoff' },
                            { name: 'YenAI', icon: 'bi-person-check', desc: 'AI-powered client follow-ups' },
                            { name: 'Analytics', icon: 'bi-graph-up', desc: 'Cross-module reporting' },
                        ].map((mod) => (
                            <div key={mod.name} className="bg-white border border-[#e0e0e0] rounded-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-sm:p-4">
                                <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center mb-3 text-[#111111]">
                                    <i className={`bi ${mod.icon} text-base`}></i>
                                </div>
                                <h4 className="text-[0.85rem] font-bold text-[#111111] mb-1">{mod.name}</h4>
                                <p className="text-[0.75rem] text-[#555555] leading-[1.5]">{mod.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-12 bg-[#111111] max-md:py-14 max-md:px-6 max-sm:py-10 max-sm:px-4">
                <div className="grid grid-cols-4 gap-12 max-w-[1000px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-8">
                    {[
                        { number: '68%', label: 'Average win rate increase' },
                        { number: '3x', label: 'Faster deal progression' },
                        { number: '< 5 min', label: 'Setup time' },
                        { number: '0', label: 'Lines of code needed' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-[2.4rem] font-extrabold text-white mb-1 max-sm:text-[1.8rem]"><CountUp value={stat.number} /></div>
                            <div className="text-[0.85rem] text-white/60 font-semibold max-sm:text-[0.8rem]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[800px] mx-auto" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Stop letting deals slip through the cracks
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem]">
                        See how CRM Lite helps you track every lead, automate follow-ups, and close more deals — all from one simple dashboard.
                    </p>
                    <button className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Try CRM Lite Free
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
