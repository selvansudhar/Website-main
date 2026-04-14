import Link from 'next/link';
import CountUp from '@/components/CountUp';

export const metadata = {
    title: 'CRM Lite — Smart Sales Pipeline for Growing Teams',
    description: 'Lightweight yet powerful CRM to manage contacts, deals, and customer relationships with intelligent pipeline automation.',
    alternates: { canonical: 'https://zenvict.com/products/crm-lite' },
    openGraph: {
        title: 'CRM Lite — Smart Sales Pipeline for Growing Teams',
        description: 'Lightweight yet powerful CRM to manage contacts, deals, and customer relationships with intelligent pipeline automation.',
    },
};

export default function CRMLite() {
    return (
        <div className="bg-white text-[#111111]">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://zenvict.com/products" },
                { "@type": "ListItem", "position": 3, "name": "CRM Lite" }
              ]
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zenvict CRM Lite",
              "description": "Lightweight yet powerful CRM to manage contacts, deals, and customer relationships with intelligent pipeline automation.",
              "url": "https://zenvict.com/products/crm-lite",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "provider": {
                "@type": "Organization",
                "name": "Zenvict AI",
                "url": "https://zenvict.com"
              }
            }) }} />

            {/* Section 1: Full-Width Dark Hero with Horizontal Pipeline */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 pt-40 pb-20 max-md:px-6 max-md:pt-24 max-md:pb-14 max-sm:px-4 max-sm:pt-20 max-sm:pb-10">
                    {/* Nav Trail */}
                    <div className="flex items-center justify-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                        <span className="text-white/50">Zenvict AI</span>
                        <span className="text-white/20">/</span>
                        <span className="text-[#056CB8] uppercase">CRM Lite</span>
                    </div>

                    <div className="text-center max-w-[780px] mx-auto" data-animate="fade-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-[100px] px-5 py-2 mb-8 max-sm:px-4 max-sm:py-1.5 max-sm:mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-white/70">Smart Sales Pipeline</span>
                        </div>

                        <h1 className="text-[3.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 max-md:text-[2.4rem] max-sm:text-[1.9rem] max-sm:mb-4">
                            Close more deals.<br />Without the complexity.
                        </h1>

                        <p className="text-[1.15rem] text-white/60 leading-relaxed max-w-[600px] mx-auto mb-10 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-8">
                            Transform raw inquiries into closed deals. Track leads, qualify opportunities, and drive revenue through an intuitive pipeline — built for teams that want results, not bloat.
                        </p>

                        <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
                            <Link href="/contact" className="no-underline bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                                Start free
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Horizontal Pipeline Flow */}
                <div className="max-w-[1000px] mx-auto px-12 pb-24 max-md:px-6 max-md:pb-16 max-sm:px-4 max-sm:pb-12" data-animate="fade-up">
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                        {[
                            { stage: 'New Lead', icon: 'bi-person-check', color: '#056CB8' },
                            { stage: 'Qualified', icon: 'bi-sliders', color: '#8b5cf6' },
                            { stage: 'Proposal', icon: 'bi-file-earmark-text', color: '#fbbf24' },
                            { stage: 'Negotiation', icon: 'bi-headset', color: '#f97316' },
                            { stage: 'Won', icon: 'bi-star-fill', color: '#09983A' },
                        ].map((item, i) => (
                            <div key={item.stage} className="flex items-center max-sm:w-full">
                                <div className="flex flex-col items-center gap-3 max-sm:flex-row max-sm:gap-4 max-sm:w-full">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center border-2 max-sm:w-12 max-sm:h-12 shrink-0"
                                        style={{ borderColor: item.color, backgroundColor: `${item.color}15` }}
                                    >
                                        <i className={`bi ${item.icon} text-xl max-sm:text-base`} style={{ color: item.color }}></i>
                                    </div>
                                    <span className="text-[0.78rem] font-bold text-white/80 tracking-wide uppercase max-sm:text-[0.72rem]">{item.stage}</span>
                                </div>
                                {i < 4 && (
                                    <div className="flex items-center mx-6 max-lg:mx-3 max-sm:hidden">
                                        <div className="w-12 h-[2px] max-lg:w-6" style={{ backgroundColor: `${item.color}50` }}></div>
                                        <i className="bi bi-arrow-left-right text-[0.7rem]" style={{ color: `${item.color}80` }}></i>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: "How It Works" - Large Numbered Steps */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-20 max-sm:mb-12" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            How It Works
                        </h2>
                        <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Four simple steps from first contact to closed deal
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-6">
                        {[
                            {
                                num: '01',
                                icon: 'bi-inbox-fill',
                                iconBg: '#056CB8',
                                title: 'Capture Leads',
                                desc: 'Auto-capture from website forms, emails, social media, and imports. Every inquiry lands in your pipeline instantly — nothing slips through.',
                            },
                            {
                                num: '02',
                                icon: 'bi-sliders',
                                iconBg: '#8b5cf6',
                                title: 'Qualify & Score',
                                desc: 'Smart scoring ranks leads by engagement, fit, and intent. Focus your energy on the prospects most likely to convert.',
                            },
                            {
                                num: '03',
                                icon: 'bi-arrow-repeat',
                                iconBg: '#f97316',
                                title: 'Nurture & Follow-up',
                                desc: 'Automated reminders, scheduled touchpoints, and personalized sequences keep every lead warm and moving forward.',
                            },
                            {
                                num: '04',
                                icon: 'bi-star-fill',
                                iconBg: '#09983A',
                                title: 'Close & Win',
                                desc: 'Track proposals, negotiations, and contracts in one view. See your win rate climb as deals flow through the pipeline.',
                            },
                        ].map((step, i) => (
                            <div
                                key={step.num}
                                className="relative bg-white border border-[#e0e0e0] p-8 overflow-hidden transition-all duration-300 hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-sm:p-6"
                                data-animate={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                            >
                                {/* Large decorative number */}
                                <span className="absolute top-4 right-6 text-[4rem] font-extrabold text-[#056CB8]/10 leading-none select-none pointer-events-none max-sm:text-[3rem] max-sm:top-3 max-sm:right-4">
                                    {step.num}
                                </span>

                                <div className="relative z-10">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 max-sm:w-10 max-sm:h-10 max-sm:mb-4"
                                        style={{ backgroundColor: step.iconBg }}
                                    >
                                        <i className={`bi ${step.icon} text-white text-lg max-sm:text-base`}></i>
                                    </div>
                                    <h3 className="text-[1.25rem] font-bold text-[#111111] mb-3 max-sm:text-[1.05rem]">{step.title}</h3>
                                    <p className="text-[0.92rem] text-[#555555] leading-[1.7] max-sm:text-[0.85rem]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Capabilities - Left Sticky Text + Right Scrolling Cards */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_1.4fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10 max-sm:gap-8">
                    {/* Left — Sticky */}
                    <div className="max-lg:text-center lg:sticky lg:top-32 lg:self-start" data-animate="fade-right">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Everything you need to close deals faster
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                            From first contact to signed contract — manage your entire sales cycle in one place. No bloat, no complexity, just results.
                        </p>
                    </div>

                    {/* Right — Scrolling Cards */}
                    <div className="flex flex-col gap-5 max-sm:gap-4" data-animate="fade-left">
                        {[
                            {
                                icon: 'bi-bar-chart-fill',
                                title: 'Pipeline Management',
                                desc: 'Drag-and-drop Kanban boards let you see every deal at a glance. Custom stages, probability scoring, and expected close dates in one view.',
                                borderColor: '#056CB8',
                            },
                            {
                                icon: 'bi-inbox-fill',
                                title: 'Lead Capture',
                                desc: 'Auto-capture from website forms, emails, and imports. Score and assign leads instantly with smart routing rules.',
                                borderColor: '#8b5cf6',
                            },
                            {
                                icon: 'bi-calendar-event-fill',
                                title: 'Activity Tracking',
                                desc: 'Schedule calls, meetings, and follow-ups with automated reminders. Never miss a touchpoint across your entire pipeline.',
                                borderColor: '#f97316',
                            },
                            {
                                icon: 'bi-people-fill',
                                title: 'Contact Management',
                                desc: 'Complete customer profiles with interaction history, notes, deal associations, and communication preferences.',
                                borderColor: '#09983A',
                            },
                            {
                                icon: 'bi-graph-up-arrow',
                                title: 'Sales Forecasting',
                                desc: 'Win/loss ratios, conversion rates, and revenue forecasts powered by real-time pipeline data and historical trends.',
                                borderColor: '#F60014',
                            },
                            {
                                icon: 'bi-lightning-charge-fill',
                                title: 'Smart Automation',
                                desc: 'Auto-assign leads, trigger follow-ups, and move deals through stages based on custom rules and AI recommendations.',
                                borderColor: '#056CB8',
                            },
                        ].map((cap) => (
                            <div
                                key={cap.title}
                                className="bg-white p-6 flex gap-5 items-start transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-sm:p-5 max-sm:gap-4"
                                style={{ borderLeft: `4px solid ${cap.borderColor}` }}
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 max-sm:w-9 max-sm:h-9"
                                    style={{ backgroundColor: `${cap.borderColor}12` }}
                                >
                                    <i className={`bi ${cap.icon} text-base`} style={{ color: cap.borderColor }}></i>
                                </div>
                                <div>
                                    <h3 className="text-[1.05rem] font-bold text-[#111111] mb-1.5 max-sm:text-[0.95rem]">{cap.title}</h3>
                                    <p className="text-[0.88rem] text-[#555555] leading-[1.7] max-sm:text-[0.82rem]">{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Before/After as Dark Split Panel */}
            <section className="grid grid-cols-2 max-md:grid-cols-1">
                {/* Without CRM — Dark Panel */}
                <div className="bg-[#111111] p-16 max-md:p-10 max-sm:p-8" data-animate="fade-right">
                    <div className="max-w-[480px] ml-auto max-md:mx-auto max-sm:max-w-full">
                        <div className="flex items-center gap-3 mb-10 max-sm:mb-8">
                            <i className="bi bi-exclamation-triangle text-[#F60014] text-xl"></i>
                            <h3 className="text-[1.3rem] font-bold text-white max-sm:text-[1.1rem]">Without CRM</h3>
                        </div>
                        <div className="flex flex-col gap-6 max-sm:gap-5">
                            {[
                                'Leads lost in spreadsheets and email threads',
                                'No visibility into pipeline value or deal stage',
                                'Follow-ups forgotten — deals go cold',
                                'Manual data entry wastes valuable time every week',
                                'No way to forecast revenue accurately',
                            ].map((pain) => (
                                <div key={pain} className="flex gap-4 items-start">
                                    <span className="text-[#F60014] font-bold text-lg mt-0 shrink-0">&times;</span>
                                    <p className="text-[0.92rem] text-white/60 leading-[1.6] max-sm:text-[0.85rem]">{pain}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* With CRM Lite — Blue Panel */}
                <div className="bg-[#056CB8] p-16 max-md:p-10 max-sm:p-8" data-animate="fade-left">
                    <div className="max-w-[480px] max-md:mx-auto max-sm:max-w-full">
                        <div className="flex items-center gap-3 mb-10 max-sm:mb-8">
                            <i className="bi bi-check-circle-fill text-white text-xl"></i>
                            <h3 className="text-[1.3rem] font-bold text-white max-sm:text-[1.1rem]">With CRM Lite</h3>
                        </div>
                        <div className="flex flex-col gap-6 max-sm:gap-5">
                            {[
                                'Every lead captured, scored, and assigned automatically',
                                'Visual pipeline shows every deal and its probability',
                                'Automated reminders ensure zero missed follow-ups',
                                'One-click data entry with smart field suggestions',
                                'Real-time forecasts based on pipeline data',
                            ].map((benefit) => (
                                <div key={benefit} className="flex gap-4 items-start">
                                    <i className="bi bi-check-circle-fill text-white text-lg mt-0 shrink-0"></i>
                                    <p className="text-[0.92rem] text-white/80 leading-[1.6] max-sm:text-[0.85rem]">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Stats Ribbon */}
            <section className="py-20 px-12 bg-white max-md:py-14 max-md:px-6 max-sm:py-10 max-sm:px-4">
                <div className="max-w-[1000px] mx-auto flex items-center justify-between max-lg:flex-wrap max-lg:justify-center max-lg:gap-y-10 max-sm:flex-col max-sm:gap-6" data-animate="fade-up">
                    {[
                        { number: 'Higher', label: 'Win rates' },
                        { number: 'Faster', label: 'Deal progression' },
                        { number: 'Quick', label: 'Setup time' },
                        { number: '0', label: 'Lines of code needed' },
                    ].map((stat, i, arr) => (
                        <div key={stat.label} className="flex items-center">
                            <div className="text-center px-10 max-lg:px-8 max-sm:px-6">
                                <div className="text-[2.4rem] font-extrabold text-[#111111] mb-1 max-sm:text-[1.8rem]">
                                    <CountUp value={stat.number} />
                                </div>
                                <div className="text-[0.85rem] text-[#555555] font-semibold max-sm:text-[0.78rem]">{stat.label}</div>
                            </div>
                            {i < arr.length - 1 && (
                                <div className="w-[1px] h-14 bg-[#e0e0e0] shrink-0 max-lg:hidden"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 6: CTA */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[700px] mx-auto" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Stop letting deals slip through the cracks
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-8">
                        See how CRM Lite helps you track every lead, automate follow-ups, and close more deals — all from one simple dashboard.
                    </p>
                    <Link href="/contact" className="no-underline bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Try CRM Lite Free
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
