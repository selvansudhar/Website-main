import Link from 'next/link';
import CampaignStepExplorer from './CampaignStepExplorer';

export const metadata = {
    title: 'Marketing Automation — AI Campaign Builder',
    description: 'Create complete marketing campaigns in minutes. AI generates posters, ad copy, Instagram captions, email sequences, and Canva-ready designs from a single brief.',
    alternates: {
        canonical: 'https://zenvict.com/products/marketing-automation',
    },
    openGraph: {
        title: 'Marketing Automation — AI Campaign Builder',
        description: 'Create complete marketing campaigns in minutes. AI generates posters, ad copy, captions, and designs from a single brief.',
    },
};

export default function MarketingAutomation() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zenvict AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Marketing Automation</span>
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
                    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://zenvict.com/products" },
                    { "@type": "ListItem", "position": 3, "name": "Marketing Automation" }
                  ]
                }) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "name": "Zenvict Marketing Automation",
                  "description": "Create complete marketing campaigns in minutes. AI generates posters, ad copy, Instagram captions, email sequences, and Canva-ready designs from a single brief.",
                  "url": "https://zenvict.com/products/marketing-automation",
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
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                <div className="flex flex-col gap-6" data-animate="fade-up">
                    <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F60014]"></span>
                        <span className="text-[0.82rem] font-medium text-[#555555]">AI-Powered Campaigns</span>
                    </div>
                    <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                        From Brief to Live Campaign<br />in Minutes.
                    </h1>
                    <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[540px] max-md:text-base max-sm:text-[0.9rem]">
                        Tell us about your business, pick your platforms, and let AI generate everything — posters, ad copy, Instagram captions, email sequences, and Canva-ready designs. One input, every format.
                    </p>
                    <div className="flex gap-4 mt-2 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                        <Link href="/contact" className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] no-underline group">
                            Launch a campaign
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></Link>
                    </div>
                    <p className="text-[0.78rem] text-[#888888] m-0">
                        Faster than manual design &nbsp;&bull;&nbsp; Multiple platforms &nbsp;&bull;&nbsp; Many template styles
                    </p>
                </div>

                {/* Hero Visual — Campaign Stack */}
                <div className="relative flex items-center justify-center max-lg:mt-4">
                    <div className="relative w-[420px] h-[380px] max-md:w-[320px] max-md:h-[290px] max-sm:w-[280px] max-sm:h-[250px]">
                        {/* Stacked campaign cards */}
                        <div className="absolute top-0 left-0 w-[280px] h-[200px] bg-white rounded-md border border-[#e0e0e0] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-5 animate-float max-md:w-[220px] max-md:h-[160px] max-md:p-4 max-sm:w-[190px] max-sm:h-[140px] max-sm:p-3">
                            <div className="flex gap-2 mb-3 max-sm:mb-2">
                                <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center max-sm:w-6 max-sm:h-6">
                                    <i className="bi bi-bullseye text-white text-xs"></i>
                                </div>
                                <div className="flex-1">
                                    <div className="h-2.5 bg-[#e0e0e0] rounded-full w-3/4 mb-1.5"></div>
                                    <div className="h-2 bg-[#f5f5f5] rounded-full w-1/2"></div>
                                </div>
                            </div>
                            <div className="h-16 bg-[#f5f5f5] rounded-md mb-3 max-sm:h-12 max-sm:mb-2"></div>
                            <div className="flex gap-2">
                                <div className="h-6 bg-[#f5f5f5] border border-[#e0e0e0] rounded-full px-3 flex items-center max-sm:h-5">
                                    <span className="text-[0.6rem] font-bold text-[#555555] max-sm:text-[0.5rem]">Instagram</span>
                                </div>
                                <div className="h-6 bg-[#f5f5f5] border border-[#e0e0e0] rounded-full px-3 flex items-center max-sm:h-5">
                                    <span className="text-[0.6rem] font-bold text-[#555555] max-sm:text-[0.5rem]">Facebook</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-16 right-0 w-[260px] h-[180px] bg-white rounded-md border border-[#e0e0e0] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-5 animate-float-delay-1 max-md:w-[200px] max-md:h-[150px] max-md:p-4 max-sm:w-[180px] max-sm:h-[130px] max-sm:p-3">
                            <div className="text-[0.65rem] font-bold text-[#056CB8] uppercase tracking-wider mb-2 max-sm:text-[0.55rem]">AI Generated</div>
                            <div className="h-2.5 bg-[#e0e0e0] rounded-full w-full mb-2"></div>
                            <div className="h-2.5 bg-[#e0e0e0] rounded-full w-4/5 mb-2"></div>
                            <div className="h-2.5 bg-[#f5f5f5] rounded-full w-3/5 mb-4 max-sm:mb-3"></div>
                            <div className="flex gap-2">
                                <div className="h-8 flex-1 bg-[#056CB8] rounded-md flex items-center justify-center max-sm:h-6">
                                    <span className="text-[0.55rem] font-bold text-white uppercase tracking-wider">Generate</span>
                                </div>
                                <div className="h-8 flex-1 bg-[#f5f5f5] rounded-md border border-[#e0e0e0] flex items-center justify-center max-sm:h-6">
                                    <span className="text-[0.55rem] font-bold text-[#555555] uppercase tracking-wider">Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-8 w-[240px] h-[120px] bg-white rounded-md border border-[#e0e0e0] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 animate-float-delay-2 max-md:w-[190px] max-md:h-[100px] max-md:p-3 max-sm:w-[170px] max-sm:h-[90px] max-sm:p-2.5">
                            <div className="flex items-center gap-2 mb-3 max-sm:mb-2">
                                <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center max-sm:w-5 max-sm:h-5">
                                    <i className="bi bi-bar-chart-fill text-white text-[0.5rem]"></i>
                                </div>
                                <span className="text-[0.7rem] font-bold text-[#111111] max-sm:text-[0.6rem]">Campaign Live</span>
                                <span className="w-2 h-2 rounded-full bg-[#09983A] animate-pulse"></span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center">
                                    <div className="text-[0.9rem] font-bold text-[#111111] max-sm:text-[0.7rem]">12.4K</div>
                                    <div className="text-[0.5rem] text-[#888888] max-sm:text-[0.45rem]">Reach</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[0.9rem] font-bold text-[#09983A] max-sm:text-[0.7rem]">3.2%</div>
                                    <div className="text-[0.5rem] text-[#888888] max-sm:text-[0.45rem]">CTR</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[0.9rem] font-bold text-[#056CB8] max-sm:text-[0.7rem]">847</div>
                                    <div className="text-[0.5rem] text-[#888888] max-sm:text-[0.45rem]">Clicks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* What AI Generates */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[900px] mx-auto mb-20 max-sm:mb-12" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-4">
                        One brief. Every asset.
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                        Fill in your campaign details once — AI generates everything you need across every channel and format
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 max-w-[1400px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1" data-animate="fade-up">
                    {[
                        {
                            icon: 'bi bi-bullseye',
                            title: 'Social Media Posters',
                            desc: 'Instagram stories, feed posts, carousels, and reels covers — auto-sized for every platform with your brand colors and fonts.',
                            formats: ['1080x1080', '1080x1920', '1200x628'],
                        },
                        {
                            icon: 'bi bi-bar-chart-fill',
                            title: 'Ad Copy & Headlines',
                            desc: 'Google Ads headlines, Facebook ad copy, LinkedIn sponsored content — A/B variants generated automatically, optimized for each platform\'s character limits.',
                            formats: ['Google Ads', 'Meta Ads', 'LinkedIn'],
                        },
                        {
                            icon: 'bi bi-graph-up',
                            title: 'Instagram Captions',
                            desc: 'Engaging captions with relevant hashtags, emojis, and CTAs. Matches your brand voice — whether that\'s witty, professional, or bold.',
                            formats: ['Captions', 'Hashtags', 'Bio links'],
                        },
                        {
                            icon: 'bi bi-inbox-fill',
                            title: 'Email Sequences',
                            desc: 'Welcome series, drip campaigns, and promotional blasts. Subject lines, preview text, body copy, and CTAs — all tested for deliverability.',
                            formats: ['Welcome', 'Nurture', 'Promo'],
                        },
                        {
                            icon: 'bi bi-file-earmark-text',
                            title: 'Canva-Ready Templates',
                            desc: 'Export designs directly to Canva for final tweaks. Layers, text, and images stay editable so your team can customize without starting from zero.',
                            formats: ['Editable', 'Layered', 'Brand kit'],
                        },
                        {
                            icon: 'bi bi-bar-chart-line-fill',
                            title: 'Performance Dashboards',
                            desc: 'Track impressions, clicks, conversions, and ROI across every channel in real time. AI suggests optimizations based on what\'s working.',
                            formats: ['Real-time', 'Cross-channel', 'AI insights'],
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-white rounded-md p-7 border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                            <div className="w-11 h-11 bg-[#f5f5f5] rounded-lg flex items-center justify-center mb-5 text-[#111111] max-sm:w-10 max-sm:h-10 max-sm:mb-4">
                                <i className={`${item.icon} text-lg`}></i>
                            </div>
                            <h3 className="text-[1.05rem] font-bold text-[#111111] mb-3 max-sm:text-[1rem]">{item.title}</h3>
                            <p className="text-[0.9rem] text-[#555555] leading-[1.7] mb-5 max-sm:text-[0.8rem]">{item.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.formats.map((fmt) => (
                                    <span key={fmt} className="text-[0.7rem] font-semibold text-[#555555] bg-[#f5f5f5] border border-[#e0e0e0] px-2.5 py-1 rounded-full">{fmt}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Campaign Builder Steps */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[900px] mx-auto mb-16 max-sm:mb-10" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-4">
                        10 inputs. Infinite outputs.
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                        Walk through 10 simple steps — business details, audience, design, copy — and let AI generate your entire campaign
                    </p>
                </div>

                <CampaignStepExplorer />
            </section>

            {/* How It Works — Simple Flow */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-20 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-12" data-animate="fade-up">
                    Brief to live in four steps
                </h2>
                <div className="flex items-center justify-center max-w-[1400px] mx-auto gap-6 max-lg:flex-wrap max-md:flex-col max-sm:gap-4">
                    {[
                        { num: '1', title: 'Fill in your brief', text: 'Answer 10 guided questions about your business, audience, and campaign goals. Takes about 5 minutes.' },
                        { num: '2', title: 'AI generates everything', text: 'Posters, ad copy, captions, email sequences — all generated in your brand voice, sized for every platform.' },
                        { num: '3', title: 'Review and tweak', text: 'Edit any asset in the visual editor. Swap images, change copy, adjust colors — or approve as-is.' },
                        { num: '4', title: 'Publish everywhere', text: 'Push to Instagram, Facebook, Google Ads, email, and more with one click. Track performance in real time.' },
                    ].map((step, i) => (
                        <div key={step.num} className="flex items-center gap-6 max-lg:flex-col max-lg:gap-4">
                            <div className="flex-1 text-center p-8 max-sm:p-6">
                                <div className="w-[56px] h-[56px] bg-[#111111] text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-6 max-sm:w-[48px] max-sm:h-[48px] max-sm:text-lg max-sm:mb-4">
                                    {step.num}
                                </div>
                                <h3 className="text-[1.1rem] font-bold text-[#111111] mb-4 max-sm:text-[1rem] max-sm:mb-3">{step.title}</h3>
                                <p className="text-[0.9rem] text-[#555555] leading-[1.6] max-sm:text-[0.85rem]">{step.text}</p>
                            </div>
                            {i < 3 && (
                                <div className="text-[1.5rem] text-[#e0e0e0] flex-shrink-0 max-lg:hidden">&rarr;</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-12 bg-white max-md:py-12 max-md:px-6 max-sm:py-10 max-sm:px-4">
                <div className="grid grid-cols-4 gap-12 max-w-[1000px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-6">
                    {[
                        { number: 'Much faster', label: 'Than manual design' },
                        { number: 'Multiple', label: 'Platforms supported' },
                        { number: 'Many', label: 'Template styles' },
                        { number: 'Lower', label: 'Production cost' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-[2.2rem] font-extrabold text-[#111111] mb-1 max-sm:text-[1.8rem]">{stat.number}</div>
                            <div className="text-[0.85rem] text-[#555555] font-semibold max-sm:text-[0.8rem]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                    Campaigns that deliver results
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[800px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12" data-animate="fade-up">
                    Real businesses using Marketing Automation to launch faster and convert more
                </p>

                <div className="grid grid-cols-3 gap-8 max-w-[1400px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-6" data-animate="fade-up">
                    {[
                        {
                            title: 'Product Launch Campaign',
                            desc: 'A D2C brand used Marketing Automation to launch their new skincare line. From brief to 48 unique assets — Instagram posts, Stories, email drip, and Google Shopping ads — in 20 minutes.',
                            result: 'Strong return on ad spend',
                            icon: 'bi bi-lightning-charge-fill',
                        },
                        {
                            title: 'Holiday Sales Blitz',
                            desc: 'An e-commerce store generated Black Friday campaigns across 5 platforms simultaneously. AI created platform-specific copy, sized creatives, and scheduled posts — all from a single brief.',
                            result: 'Significant increase in holiday revenue',
                            icon: 'bi bi-calendar-check-fill',
                        },
                        {
                            title: 'B2B Lead Gen Campaign',
                            desc: 'A SaaS company ran a LinkedIn + email campaign targeting CFOs. AI wrote personalized ad variants, email sequences with follow-up logic, and retargeting creatives — all matching their enterprise tone.',
                            result: 'Lower cost per lead',
                            icon: 'bi bi-graph-up-arrow',
                        },
                    ].map((card) => (
                        <div key={card.title} className="bg-white rounded-md overflow-hidden border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                            <div className="p-7 flex flex-col gap-4 max-sm:p-5 max-sm:gap-3">
                                <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center text-[#111111] max-sm:w-9 max-sm:h-9">
                                    <i className={`${card.icon} text-lg`}></i>
                                </div>
                                <h3 className="text-[1.15rem] font-bold text-[#111111] leading-[1.3] max-sm:text-[1.05rem]">{card.title}</h3>
                                <p className="text-[0.9rem] text-[#555555] leading-[1.7] max-sm:text-[0.85rem]">{card.desc}</p>
                                <div className="mt-2 p-4 bg-[#f5f5f5] border-l-[3px] border-[#111111] rounded-sm">
                                    <span className="text-[0.85rem] font-bold text-[#111111]">{card.result}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[800px] mx-auto" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Turn your marketing into a revenue engine
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem]">
                        Automate campaigns, nurture leads, and measure ROI across every channel — all from one intelligent platform.
                    </p>
                    <Link href="/contact" className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] no-underline group">
                        Automate Your Marketing
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></Link>
                </div>
            </section>
        </div>
    );
}