import CountUp from '@/components/CountUp';

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
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://zynex.ai/products" },
                { "@type": "ListItem", "position": 3, "name": "Knowledge Base" }
              ]
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zynex Knowledge Base",
              "description": "Centralize your organization's knowledge. AI-powered search delivers instant, accurate answers from every document, system, and source.",
              "url": "https://zynex.ai/products/knowledge-base",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "provider": { "@type": "Organization", "name": "Zynex AI", "url": "https://zynex.ai" }
            }) }} />

            {/* ── Section 1: Dark Split Hero — Text Left + Search Demo Right ── */}
            <section className="w-full bg-[#111111]">
              <div className="max-w-[1400px] mx-auto px-12 max-md:px-6 max-sm:px-4 grid grid-cols-2 gap-16 items-center pt-40 pb-28 max-lg:grid-cols-1 max-lg:gap-12 max-md:pt-28 max-md:pb-16 max-sm:pt-24 max-sm:pb-12">
                {/* Left — Text Content */}
                <div data-animate="fade-right">
                    <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-5">
                        <span className="text-white/40">Zynex AI</span>
                        <span className="text-white/20">/</span>
                        <span className="text-[#056CB8] uppercase">Knowledge Base</span>
                    </div>

                    <div className="inline-flex items-center gap-2 border border-white/15 rounded-[100px] px-4 py-1.5 mb-8 max-sm:px-3 max-sm:py-1 max-sm:mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8] animate-pulse"></span>
                        <span className="text-[0.82rem] font-medium text-white/60">AI-Powered Knowledge</span>
                    </div>

                    <h1 className="text-[3.2rem] font-extrabold leading-[1.06] text-white tracking-[-0.03em] mb-6 max-md:text-[2.4rem] max-sm:text-[1.9rem]">
                        Every answer your<br />team needs. Instantly.
                    </h1>
                    <p className="text-[1.1rem] leading-relaxed text-white/50 max-w-[480px] mb-10 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-7">
                        Centralize documents, SOPs, policies, and tribal knowledge into one AI-powered hub. Ask anything — get precise answers with source citations.
                    </p>

                    <div className="flex gap-4 mb-8 max-sm:flex-col max-sm:items-start">
                        <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                            Get Started <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                        </button>
                        <button className="bg-transparent text-white border-2 border-white/20 px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 transition-all duration-200 hover:border-white/50 max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem] group">
                            See Demo <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                        </button>
                    </div>

                    {/* File format pills */}
                    <div className="flex flex-wrap gap-2">
                        {['PDF', 'Excel', 'Word', 'CSV', 'PPT', 'HTML', 'JSON', 'Markdown'].map((fmt) => (
                            <span key={fmt} className="bg-white/5 border border-white/10 px-3 py-1 text-[0.7rem] font-semibold text-white/40 uppercase tracking-wider">
                                {fmt}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right — Search Demo + AI Answer */}
                <div data-animate="fade-left">
                    {/* Search Bar */}
                    <div className="bg-white/5 border border-white/10 px-5 py-4 flex items-center gap-3 max-sm:px-4 max-sm:py-3">
                        <i className="bi bi-bullseye text-white/40 text-lg"></i>
                        <span className="text-[0.95rem] text-white/70 font-medium max-sm:text-[0.82rem]">What is our refund policy for enterprise clients?</span>
                        <span className="w-[2px] h-5 bg-[#056CB8] animate-pulse ml-auto shrink-0"></span>
                    </div>

                    {/* AI Answer Card */}
                    <div className="bg-white/[0.03] border border-white/10 border-t-0 p-6 max-sm:p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-[#056CB8] flex items-center justify-center">
                                <i className="bi bi-lightning-charge-fill text-white text-[0.7rem]"></i>
                            </div>
                            <span className="text-[0.75rem] font-bold text-[#056CB8] uppercase tracking-wider">AI Answer</span>
                            <span className="ml-auto text-[0.65rem] font-bold text-white bg-[#09983A] px-2.5 py-0.5">95% match</span>
                        </div>
                        <p className="text-[0.88rem] text-white/50 leading-[1.8] mb-4 max-sm:text-[0.8rem]">
                            Enterprise clients on annual plans are eligible for a full refund within the first 30 days. After 30 days, refunds are prorated based on remaining contract months...
                        </p>
                        <div className="flex items-center gap-2 text-[0.72rem] text-white/30 pt-3 border-t border-white/10">
                            <i className="bi bi-file-earmark-text text-xs"></i>
                            <span className="font-semibold">Source:</span>
                            <span className="text-[#056CB8]">Enterprise Terms of Service v4.2</span>
                        </div>
                    </div>

                    {/* Mini Stats Row under search */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                        {[
                            { icon: 'bi-file-earmark-text', value: '20+', label: 'Formats' },
                            { icon: 'bi-lightning-charge-fill', value: '< 3s', label: 'Avg Response' },
                            { icon: 'bi-shield-check', value: '100%', label: 'Private' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/5 border border-white/10 p-3 text-center">
                                <i className={`bi ${stat.icon} text-[#056CB8] text-sm mb-1 block`}></i>
                                <span className="text-white font-extrabold text-sm block">{stat.value}</span>
                                <span className="text-white/30 text-[0.6rem] font-semibold uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </section>

            {/* ── Section 2: Features as Horizontal Cards Row ── */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Built for teams that hate searching
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] leading-[1.7] max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Every feature designed to get your team from question to answer in seconds
                        </p>
                    </div>

                    <div className="flex flex-col gap-5" data-animate="fade-up">
                        {[
                            {
                                icon: 'bi-bullseye',
                                color: '#056CB8',
                                title: 'Semantic Search',
                                desc: 'Understands intent, not just keywords. Ask "what\'s our refund policy for enterprise clients?" and get the exact paragraph — not every document that mentions "refund." Powered by AI that reads and comprehends your entire knowledge library.',
                            },
                            {
                                icon: 'bi-arrow-left-right',
                                color: '#09983A',
                                title: 'Multi-Format Upload',
                                desc: 'Upload PDFs, Excel sheets, Word docs, CSVs, PowerPoint decks, Markdown, and more. Knowledge Base indexes everything instantly — no manual tagging, no folder hierarchies, no busywork. Just drop files and search.',
                            },
                            {
                                icon: 'bi-lock-fill',
                                color: '#F60014',
                                title: 'Role-Based Access',
                                desc: 'Control who sees what with granular permissions. Department-level, team-level, or individual access rules keep sensitive documents secure while making everything else freely discoverable.',
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white border border-[#e0e0e0] flex items-start gap-8 p-8 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] max-md:flex-col max-md:gap-4 max-sm:p-5"
                                style={{ borderLeft: `4px solid ${feature.color}` }}
                            >
                                <div className="flex items-center gap-4 shrink-0 max-md:w-full">
                                    <div
                                        className="w-12 h-12 flex items-center justify-center max-sm:w-10 max-sm:h-10"
                                        style={{ backgroundColor: `${feature.color}10` }}
                                    >
                                        <i className={`bi ${feature.icon} text-xl max-sm:text-lg`} style={{ color: feature.color }}></i>
                                    </div>
                                    <h3 className="text-[1.15rem] font-bold text-[#111111] min-w-[180px] max-sm:text-[1rem] max-sm:min-w-0">{feature.title}</h3>
                                </div>
                                <p className="text-[0.92rem] text-[#555555] leading-[1.8] max-sm:text-[0.85rem]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 3: How Knowledge Base Connects Everything ── */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-20 max-sm:mb-12" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            One hub. Every source.
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] leading-[1.7] max-w-[550px] mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Knowledge Base connects all your information streams into a single, searchable intelligence layer
                        </p>
                    </div>

                    {/* Hub Visualization — Radial Layout */}
                    <div className="relative w-full max-w-[720px] mx-auto aspect-square max-md:hidden" data-animate="fade-up">
                        {/* Center Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-[140px] h-[140px] rounded-full bg-[#056CB8] flex flex-col items-center justify-center shadow-[0_0_0_8px_rgba(5,108,184,0.1),0_0_0_16px_rgba(5,108,184,0.05),0_0_0_28px_rgba(5,108,184,0.03)]">
                                <i className="bi bi-lightning-charge-fill text-white text-3xl mb-1"></i>
                                <span className="text-white text-[0.7rem] font-bold uppercase tracking-wider">Knowledge</span>
                                <span className="text-white text-[0.7rem] font-bold uppercase tracking-wider">Base</span>
                            </div>
                        </div>

                        {/* Dashed ring connector */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#e0e0e0]/50"></div>

                        {/* Surrounding Cards — positioned radially */}
                        {[
                            { icon: 'bi-file-earmark-text', label: 'Docs', color: '#056CB8', top: '2%', left: '50%', tx: '-50%', ty: '0' },
                            { icon: 'bi-shield-check', label: 'Policies', color: '#09983A', top: '14%', left: '85%', tx: '-50%', ty: '0' },
                            { icon: 'bi-patch-check-fill', label: 'FAQs', color: '#F60014', top: '44%', left: '96%', tx: '-50%', ty: '-50%' },
                            { icon: 'bi-list-check', label: 'SOPs', color: '#111111', top: '76%', left: '85%', tx: '-50%', ty: '0' },
                            { icon: 'bi-people-fill', label: 'Training', color: '#056CB8', top: '90%', left: '50%', tx: '-50%', ty: '0' },
                            { icon: 'bi-graph-up', label: 'Reports', color: '#09983A', top: '76%', left: '15%', tx: '-50%', ty: '0' },
                            { icon: 'bi-file-earmark-text', label: 'Guides', color: '#F60014', top: '44%', left: '4%', tx: '-50%', ty: '-50%' },
                            { icon: 'bi-diagram-3', label: 'Wikis', color: '#111111', top: '14%', left: '15%', tx: '-50%', ty: '0' },
                        ].map((node) => (
                            <div
                                key={node.label}
                                className="absolute bg-white border border-[#e0e0e0] p-4 flex flex-col items-center gap-2 w-[110px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#056CB8]"
                                style={{ top: node.top, left: node.left, transform: `translate(${node.tx}, ${node.ty})` }}
                            >
                                <div
                                    className="w-10 h-10 flex items-center justify-center"
                                    style={{ backgroundColor: `${node.color}10` }}
                                >
                                    <i className={`bi ${node.icon} text-base`} style={{ color: node.color }}></i>
                                </div>
                                <span className="text-[0.8rem] font-bold text-[#111111]">{node.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Fallback — Grid */}
                    <div className="hidden max-md:grid grid-cols-2 max-sm:grid-cols-1 gap-3 max-sm:gap-2" data-animate="fade-up">
                        <div className="col-span-2 flex justify-center mb-4">
                            <div className="w-[100px] h-[100px] rounded-full bg-[#056CB8] flex flex-col items-center justify-center shadow-[0_0_0_6px_rgba(5,108,184,0.1)]">
                                <i className="bi bi-lightning-charge-fill text-white text-xl mb-0.5"></i>
                                <span className="text-white text-[0.55rem] font-bold uppercase tracking-wider">Knowledge</span>
                                <span className="text-white text-[0.55rem] font-bold uppercase tracking-wider">Base</span>
                            </div>
                        </div>
                        {[
                            { icon: 'bi-file-earmark-text', label: 'Docs', color: '#056CB8' },
                            { icon: 'bi-shield-check', label: 'Policies', color: '#09983A' },
                            { icon: 'bi-patch-check-fill', label: 'FAQs', color: '#F60014' },
                            { icon: 'bi-list-check', label: 'SOPs', color: '#111111' },
                            { icon: 'bi-people-fill', label: 'Training', color: '#056CB8' },
                            { icon: 'bi-graph-up', label: 'Reports', color: '#09983A' },
                            { icon: 'bi-file-earmark-text', label: 'Guides', color: '#F60014' },
                            { icon: 'bi-diagram-3', label: 'Wikis', color: '#111111' },
                        ].map((node) => (
                            <div
                                key={node.label}
                                className="bg-white border border-[#e0e0e0] p-4 flex flex-col items-center gap-2"
                            >
                                <div className="w-9 h-9 flex items-center justify-center" style={{ backgroundColor: `${node.color}10` }}>
                                    <i className={`bi ${node.icon} text-base`} style={{ color: node.color }}></i>
                                </div>
                                <span className="text-[0.78rem] font-bold text-[#111111]">{node.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 4: Stats — Full-Width Blue Ribbon ── */}
            <section className="py-20 px-12 bg-[#056CB8] max-md:py-14 max-md:px-6 max-sm:py-10 max-sm:px-4">
                <div className="grid grid-cols-4 gap-12 max-w-[1000px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-8 max-[480px]:grid-cols-1">
                    {[
                        { value: '95%', label: 'Faster answer discovery' },
                        { value: '20+', label: 'File formats supported' },
                        { value: '< 3s', label: 'Average query response' },
                        { value: '99.9%', label: 'Uptime SLA guaranteed' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <CountUp value={stat.value} className="text-[2.6rem] font-extrabold text-white mb-2 block max-sm:text-[1.8rem]" />
                            <div className="text-[0.85rem] text-white/70 font-semibold uppercase tracking-wide max-sm:text-[0.75rem]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Section 5: Works With Section ── */}
            <section className="py-24 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-14 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Works with everything you use
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                            Upload documents directly or connect with your Zynex apps
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-5" data-animate="fade-up">
                        {/* Document Formats Card */}
                        <div className="bg-white border border-[#e0e0e0] p-8 max-sm:p-5">
                            <div className="flex items-center gap-3 mb-7 max-sm:mb-5">
                                <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center">
                                    <i className="bi bi-file-earmark-text text-[#111111] text-base"></i>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-[#111111]">Document Formats</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {['PDF', 'Excel', 'Word', 'CSV', 'PowerPoint', 'Text', 'Markdown', 'HTML', 'JSON', 'Images'].map((item) => (
                                    <span
                                        key={item}
                                        className="bg-[#f5f5f5] border border-[#e0e0e0] px-4 py-2 text-[0.8rem] font-semibold text-[#111111] max-sm:px-3 max-sm:py-1.5 max-sm:text-[0.72rem]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Zynex App Connections Card */}
                        <div className="bg-white border-2 border-[#056CB8] p-8 max-sm:p-5">
                            <div className="flex items-center gap-3 mb-7 max-sm:mb-5">
                                <div className="w-10 h-10 bg-[#056CB8]/10 flex items-center justify-center">
                                    <i className="bi bi-diagram-3 text-[#056CB8] text-base"></i>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-[#111111]">Zynex Apps</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {['CRM Lite', 'Finance Plus', 'Project Plus', 'Human Resources', 'Marketing Automation', 'YenAI', 'Assistant Hub', 'Knowledge Base'].map((app) => (
                                    <span
                                        key={app}
                                        className="bg-[#056CB8]/5 border border-[#056CB8]/20 px-4 py-2 text-[0.8rem] font-semibold text-[#056CB8] max-sm:px-3 max-sm:py-1.5 max-sm:text-[0.72rem]"
                                    >
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 6: CTA ── */}
            <section className="py-28 px-12 bg-[#111111] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[800px] mx-auto" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-white mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Your team&apos;s knowledge deserves better than a shared drive.
                    </h2>
                    <p className="text-[1.1rem] text-white/60 leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem]">
                        Build a living, searchable knowledge hub that grows smarter with every document. Your team finds answers in seconds, not hours.
                    </p>
                    <button className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Build Your Knowledge Base <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
