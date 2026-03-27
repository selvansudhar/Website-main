import CountUp from '@/components/CountUp';
import Image from 'next/image';

export const metadata = {
    title: 'Retail Industry Solutions — AI-Powered Commerce',
    description: 'AI-powered retail solutions for inventory management, omnichannel commerce, and personalized customer experiences.',
    alternates: { canonical: 'https://zenvict.com/industries/retail' },
    openGraph: {
        title: 'Retail Industry Solutions — AI-Powered Commerce',
        description: 'AI-powered retail solutions for inventory management, omnichannel commerce, and personalized customer experiences.',
    },
};

export default function IndustryRetail() {
    return (
        <div className="bg-white text-[#111111]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
                { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://zenvict.com/industries" },
                { "@type": "ListItem", "position": 3, "name": "Retail" }
              ]
            }) }} />
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zenvict AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#555555]">Industries</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Retail</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                    {/* Left — Text */}
                    <div className="flex flex-col gap-6" data-animate="fade-up">
                        <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-[#555555]">Retail Industry</span>
                        </div>
                        <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                            Reimagine retail with<br />AI-powered commerce.
                        </h1>
                        <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[520px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Build the future of retail with omnichannel commerce, smart inventory management, and deeply personalized customer experiences — all powered by intelligent automation that scales with your business.
                        </p>
                        <div className="flex gap-4 mt-2 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                            <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                                Get started
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                            <button className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                                See demo
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                        </div>
                        <p className="text-[0.78rem] text-[#888888] m-0">
                            500+ retail brands &nbsp;&bull;&nbsp; Omnichannel ready &nbsp;&bull;&nbsp; Setup in days
                        </p>
                    </div>

                    {/* Right — Retail Dashboard Mockup */}
                    <div className="max-lg:mt-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">Retail — Store Dashboard</span>
                            </div>

                            <div className="p-5 max-sm:p-4">
                                {/* Top Metrics */}
                                <div className="grid grid-cols-3 gap-3 mb-4 max-sm:gap-2 max-sm:mb-3">
                                    {[
                                        { label: 'Today Sales', value: '$14,820', change: '+8.3%', up: true },
                                        { label: 'Orders', value: '186', change: '+12', up: true },
                                        { label: 'Avg Order', value: '$79.67', change: '+$4.20', up: true },
                                    ].map((stat) => (
                                        <div key={stat.label} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-3 max-sm:p-2">
                                            <div className="text-[0.55rem] font-semibold text-[#555555] uppercase tracking-wider mb-1">{stat.label}</div>
                                            <div className="text-[0.95rem] font-extrabold text-[#111111] max-sm:text-[0.8rem]">{stat.value}</div>
                                            <div className="text-[0.6rem] font-bold text-[#22c55e] mt-0.5">{stat.change}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Top Products */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">Top Products</span>
                                    <span className="text-[0.55rem] text-[#555555]">Today</span>
                                </div>
                                {[
                                    { name: 'Wireless Earbuds Pro', sold: 42, revenue: '$2,940' },
                                    { name: 'Organic Cotton Tee', sold: 38, revenue: '$1,140' },
                                    { name: 'Smart Watch Band', sold: 27, revenue: '$810' },
                                ].map((product) => (
                                    <div key={product.name} className="flex items-center justify-between py-2 border-b border-[#e0e0e0] last:border-0">
                                        <div>
                                            <div className="text-[0.72rem] font-semibold text-[#111111] max-sm:text-[0.65rem]">{product.name}</div>
                                            <div className="text-[0.58rem] text-[#555555]">{product.sold} sold</div>
                                        </div>
                                        <span className="text-[0.72rem] font-bold text-[#056CB8] max-sm:text-[0.65rem]">{product.revenue}</span>
                                    </div>
                                ))}

                                {/* Stock Alert */}
                                <div className="mt-3 bg-[#F60014]/5 border border-[#F60014]/15 rounded-md px-3 py-2 flex items-center gap-2">
                                    <i className="bi bi-exclamation-triangle text-[#F60014] text-xs"></i>
                                    <span className="text-[0.6rem] font-medium text-[#111111]">3 items low stock — <span className="font-bold text-[#F60014]">Reorder now</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points — What We Solve */}
            <section className="border-y border-[#e0e0e0] bg-[#f5f5f5]">
                <div className="max-w-[1400px] mx-auto px-12 py-24 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Retail problems, solved
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] max-w-[560px] mx-auto max-sm:text-[0.9rem]">
                            Modern retailers face fragmented systems, rising expectations, and thin margins. We address each head-on.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1" data-animate="fade-up" data-delay="2">
                        {[
                            { icon: 'bi-exclamation-triangle', title: 'Inventory Blindspots', desc: 'Real-time stock visibility across all channels and locations.' },
                            { icon: 'bi-arrow-counterclockwise', title: 'Cart Abandonment', desc: 'AI-driven recovery campaigns that convert abandoned carts to sales.' },
                            { icon: 'bi-people-fill', title: 'Disjointed Customer Data', desc: 'Unified 360° customer profiles across every touchpoint.' },
                            { icon: 'bi-graph-up-arrow', title: 'Manual Pricing', desc: 'Dynamic pricing powered by real-time market intelligence.' },
                        ].map((point) => (
                            <div key={point.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 max-sm:p-5">
                                <div className="w-11 h-11 rounded-md bg-[#056CB8]/8 flex items-center justify-center mb-4">
                                    <i className={`bi ${point.icon} text-[#056CB8] text-lg`}></i>
                                </div>
                                <h3 className="text-[1rem] font-bold text-[#111111] mb-2">{point.title}</h3>
                                <p className="text-[0.85rem] text-[#555555] leading-relaxed m-0">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        End-to-end retail solutions
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] max-w-[560px] mx-auto max-sm:text-[0.9rem]">
                        Everything you need to run, grow, and optimize your retail operations from a single platform.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1" data-animate="fade-up" data-delay="2">
                    {[
                        {
                            icon: 'bi-lightning-charge-fill',
                            title: 'Smart POS System',
                            desc: 'Next-gen point of sale with AI recommendations, real-time analytics, and seamless payment processing.',
                            tags: ['AI Upsell', 'Contactless Pay', 'Multi-Terminal'],
                        },
                        {
                            icon: 'bi-bar-chart-fill',
                            title: 'Inventory Intelligence',
                            desc: 'Predictive stock management with demand forecasting, auto-reorder, and shrinkage detection.',
                            tags: ['Demand Forecast', 'Auto-Reorder', 'Multi-Warehouse'],
                        },
                        {
                            icon: 'bi-diagram-3',
                            title: 'Omnichannel Commerce',
                            desc: 'Unified shopping experience across web, mobile, in-store, and marketplace from one platform.',
                            tags: ['Web + Mobile', 'Marketplace Sync', 'Unified Cart'],
                        },
                        {
                            icon: 'bi-graph-up',
                            title: 'Customer Analytics',
                            desc: 'Deep insights into shopping behavior with cohort analysis, heatmaps, and journey mapping.',
                            tags: ['Behavior Tracking', 'Cohort Analysis', 'Journey Maps'],
                        },
                        {
                            icon: 'bi-star-fill',
                            title: 'Loyalty & Rewards',
                            desc: 'Personalized loyalty programs with tiered rewards, referral bonuses, and gamified engagement.',
                            tags: ['Tiered Rewards', 'Referral System', 'Gamification'],
                        },
                        {
                            icon: 'bi-arrow-left-right',
                            title: 'Supply Chain Optimizer',
                            desc: 'End-to-end supply chain visibility with vendor scoring, route optimization, and cost analytics.',
                            tags: ['Vendor Scoring', 'Route Optimize', 'Cost Analytics'],
                        },
                    ].map((sol) => (
                        <div key={sol.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 max-sm:p-5">
                            <div className="w-11 h-11 rounded-md bg-[#056CB8]/8 flex items-center justify-center shrink-0">
                                <i className={`bi ${sol.icon} text-[#056CB8] text-lg`}></i>
                            </div>
                            <h3 className="text-[1.05rem] font-bold text-[#111111]">{sol.title}</h3>
                            <p className="text-[0.88rem] text-[#555555] leading-relaxed m-0 flex-1">{sol.desc}</p>
                            <div className="flex gap-2 flex-wrap mt-1">
                                {sol.tags.map((tag) => (
                                    <span key={tag} className="inline-flex px-2.5 py-1 bg-[#f5f5f5] border border-[#e0e0e0] rounded-sm text-[0.68rem] font-semibold text-[#056CB8] tracking-[0.02em]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Omnichannel Showcase */}
            <section className="max-w-[1400px] mx-auto px-12 pb-32 max-md:px-6 max-md:pb-16 max-sm:px-4 max-sm:pb-12">
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
                    <div className="w-full overflow-hidden rounded-md">
                        <Image src="/images/retail-omnichannel.webp" alt="Omnichannel Retail Experience" width={640} height={380} className="w-full h-auto object-cover" />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-[2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-6 max-md:text-[1.6rem] max-sm:text-[1.4rem]">
                            True omnichannel experience
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] leading-relaxed mb-8 max-sm:text-[0.9rem] max-sm:mb-6">
                            Deliver a seamless retail experience that meets customers wherever they are — online, in-store, or on the go.
                        </p>
                        <div className="flex flex-col gap-4">
                            {[
                                'Seamless in-store to online handoff with persistent cart sync',
                                'Unified customer profiles across every channel in real-time',
                                'Click-and-collect, ship-from-store, and curbside pickup built in',
                                'Consistent pricing, promotions, and inventory visibility everywhere',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <i className="bi bi-check-circle-fill text-[#22c55e] text-sm shrink-0 mt-0.5"></i>
                                    <span className="text-[0.92rem] text-[#111111] font-medium leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results / Metrics — Dark Section */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Results that speak
                        </h2>
                        <p className="text-[1.05rem] text-white/50 max-w-[560px] mx-auto max-sm:text-[0.9rem]">
                            Real outcomes from real retailers who transformed their business with Zenvict.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1" data-animate="fade-up">
                        {[
                            { value: '3.2x', label: 'Revenue Growth', desc: 'Average increase in revenue within the first 12 months of deployment.' },
                            { value: '67%', label: 'Less Stockouts', desc: 'Reduction in out-of-stock incidents with predictive inventory management.' },
                            { value: '89%', label: 'Customer Retention', desc: 'Retention rate achieved through personalized loyalty and engagement.' },
                            { value: '42%', label: 'Higher AOV', desc: 'Average order value boost driven by AI-powered recommendations.' },
                        ].map((m) => (
                            <div key={m.label} className="bg-white/5 border border-white/10 rounded-md p-6 text-center max-sm:p-5">
                                <div className="text-[2.4rem] font-extrabold text-[#056CB8] leading-none mb-2 max-sm:text-[2rem]"><CountUp value={m.value} /></div>
                                <div className="text-[0.95rem] font-bold mb-2">{m.label}</div>
                                <p className="text-[0.82rem] text-white/45 leading-relaxed m-0">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="text-center mb-14 max-sm:mb-10" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Works with your stack
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] max-w-[520px] mx-auto max-sm:text-[0.9rem]">
                        Seamless integrations with the platforms and tools you already use.
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe', 'PayPal', 'QuickBooks', 'Xero'].map((platform) => (
                        <div key={platform} className="flex items-center justify-center gap-3 px-5 py-4 bg-[#f5f5f5] border border-[#e0e0e0] rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                            <span className="w-2 h-2 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.88rem] font-semibold text-[#111111]">{platform}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-12 bg-white flex justify-center items-center w-full border-t border-[#e0e0e0] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[680px] w-full text-center flex flex-col items-center gap-6 max-sm:gap-4" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Transform your retail operations with AI
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] leading-relaxed max-sm:text-[0.9rem]">
                        From inventory management to personalized customer experiences — see how Zenvict helps retailers increase revenue and reduce operational costs.
                    </p>
                    <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 mt-4 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Get a Retail Demo
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
