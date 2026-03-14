import Image from 'next/image';
import CountUp from '@/components/CountUp';

export const metadata = {
    title: 'Enterprise Platform — Intelligent Software for Growth',
    description: 'All-in-one enterprise management platform with inventory, sales, CRM, procurement, finance, and HR modules powered by AI.',
    alternates: { canonical: 'https://zynex.ai/enterprise' },
    openGraph: {
        title: 'Enterprise Platform — Intelligent Software for Growth',
        description: 'All-in-one enterprise management platform with inventory, sales, CRM, procurement, finance, and HR modules powered by AI.',
    },
};

const features = [
    { title: 'Inventory Management', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg> },
    { title: 'Sales Management', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
    { title: 'CRM', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { title: 'Procurement', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg> },
    { title: 'Finance & Accounting', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg> },
    { title: 'HRMS', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg> },
    { title: 'Vendor Management', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="16" height="13" x="4" y="9" rx="2" /><path d="M4 11h16" /><path d="M8 2h8" /><path d="M12 2v7" /><path d="M12 18v3" /></svg> },
    { title: 'Billing & Invoicing', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" /></svg> },
    { title: 'Project Management', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg> },
    { title: 'Manufacturing', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" /><path d="M7 18h10" /><path d="M12 18v-4" /><path d="M8 10h8" /><path d="M12 10V6" /></svg> },
    { title: 'Supply Chain', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> },
    { title: 'Business Development', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
    { title: 'Quick & Reliable POS', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="12" x="3" y="2" rx="2" ry="2" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M7 22h10" /><path d="M12 14v8" /></svg> },
    { title: 'AI-Driven Analytics', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg> },
    { title: 'Multi-Store Sync', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /></svg> },
    { title: 'ERP Integration', icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg> },
];

export default function Enterprise() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-24 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Enterprise</span>
                </div>

                <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-6 max-sm:gap-4" data-animate="fade-up">
                    <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 max-sm:px-3 max-sm:py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                        <span className="text-[0.82rem] font-medium text-[#555555]">AI-Powered Enterprise Software</span>
                    </div>
                    <h1 className="text-[2.8rem] font-extrabold leading-[1.1] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                        Driving Enterprise Transformation with Intelligent Software
                    </h1>
                    <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[780px] max-md:text-base max-sm:text-[0.9rem]">
                        We build scalable, enterprise-grade software that helps organizations work smarter and grow faster. Our solutions simplify operations, strengthen collaboration across teams, and transform data into meaningful insights.
                    </p>
                    <div className="flex gap-4 mt-2 max-sm:flex-col max-sm:items-center">
                        <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                            Contact sales
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                        <button className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                            See demo
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                    </div>
                    <p className="text-[0.78rem] text-[#888888] m-0">
                        Trusted by 500+ businesses &nbsp;&bull;&nbsp; 16 data centers &nbsp;&bull;&nbsp; 150+ countries
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="max-w-[1400px] mx-auto px-12 pb-20 max-md:px-6 max-sm:px-4 max-sm:pb-12">
                <div className="w-full overflow-hidden">
                    <Image
                        src="/images/enterprise-banner.webp"
                        alt="Zynex Enterprise Platform Dashboard"
                        width={1536}
                        height={683}
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="w-full h-auto block"
                        priority
                    />
                </div>
            </section>

            {/* Stats Ribbon */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-14 grid grid-cols-6 gap-8 max-lg:grid-cols-3 max-md:px-6 max-md:py-10 max-sm:px-4 max-sm:grid-cols-2 max-sm:gap-6" data-animate="fade-in">
                    {[
                        { value: '130M+', label: 'Users Worldwide' },
                        { value: '29+', label: 'Years' },
                        { value: '150+', label: 'Countries' },
                        { value: '16', label: 'Data Centers' },
                        { value: '18K+', label: 'Employees' },
                        { value: '55+', label: 'Apps' },
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

            {/* Solutions Section */}
            <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Flexible Solutions Built for Enterprise Operations
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1" data-animate="fade-up" data-delay="2">
                    {[
                        {
                            category: 'CUSTOMER EXPERIENCE',
                            title: 'Deliver meaningful engagement across every customer interaction',
                            text: 'Bring sales, marketing, and customer support together on a unified platform to ensure consistent communication, deeper context, and faster responses throughout the customer lifecycle.',
                            brands: ['Zynex CRM Plus', 'Zynex Desk'],
                            icon: 'bi-people-fill',
                        },
                        {
                            category: 'EMPLOYEE EXPERIENCE',
                            title: 'Simplify workforce management across teams and locations',
                            text: 'Oversee the complete employee journey through a centralized HR management system designed to improve operational efficiency while delivering intuitive, people-first digital experiences.',
                            brands: ['People', 'Expense', 'Payroll'],
                            icon: 'bi-person-check',
                        },
                        {
                            category: 'FINANCE',
                            title: 'Operate with speed, insight, and regulatory confidence',
                            text: 'Manage core financial functions — from invoicing and inventory to accounting — within a single, integrated system built to support accuracy, compliance, and informed decision-making.',
                            brands: ['Billing', 'Inventory', 'Books'],
                            icon: 'bi-bar-chart-fill',
                        },
                    ].map((card) => (
                        <div
                            key={card.category}
                            className="bg-white border border-[#e0e0e0] rounded-md p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 max-sm:p-6"
                        >
                            <div className="flex items-center gap-3">
                                <i className={`bi ${card.icon} text-[#056CB8] text-lg`}></i>
                                <span className="text-[0.7rem] font-bold text-[#056CB8] tracking-[0.1em]">{card.category}</span>
                            </div>
                            <h3 className="text-[1.05rem] font-bold text-[#111111] leading-[1.3]">{card.title}</h3>
                            <p className="text-[0.9rem] text-[#555555] leading-relaxed mb-4 max-sm:text-[0.85rem]">{card.text}</p>
                            <div className="mt-auto flex flex-wrap gap-4 pt-5 border-t border-[#e0e0e0]">
                                {card.brands.map((brand) => (
                                    <span key={brand} className="text-[0.82rem] font-bold text-[#111111] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#056CB8] rounded-full"></span>
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Enterprise Software Hub — Marquee */}
            <section className="border-y border-[#e0e0e0] bg-[#f5f5f5]">
                <div className="max-w-[1400px] mx-auto px-12 pt-20 pb-8 max-md:px-6 max-md:pt-14 max-sm:px-4 max-sm:pt-10">
                    <div data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] text-center mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Enterprise Software Hub
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] text-center max-w-[560px] mx-auto mb-12 max-sm:text-[0.9rem] max-sm:mb-8">
                            16 integrated modules powering every department.
                        </p>
                    </div>
                </div>
                <div className="w-full overflow-hidden pb-16 flex flex-col gap-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] max-sm:pb-10 max-sm:gap-4">
                    {/* Row 1: scrolls left */}
                    <div className="flex gap-4 w-max animate-[scrollLeft_60s_linear_infinite]">
                        {[...features.slice(0, 8), ...features.slice(0, 8)].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#e0e0e0] rounded-md px-6 py-4 min-w-[220px] flex items-center gap-3 transition-all duration-300 hover:border-[#056CB8] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] max-sm:px-4 max-sm:py-3 max-sm:min-w-[180px]"
                            >
                                <div className="w-8 h-8 text-[#056CB8] [&>svg]:w-full [&>svg]:h-full shrink-0">
                                    {feature.icon}
                                </div>
                                <span className="font-bold text-[0.82rem] text-[#111111] leading-[1.3]">
                                    {feature.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Row 2: scrolls right */}
                    <div className="flex gap-4 w-max animate-[scrollRight_60s_linear_infinite]">
                        {[...features.slice(8, 16), ...features.slice(8, 16)].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#e0e0e0] rounded-md px-6 py-4 min-w-[220px] flex items-center gap-3 transition-all duration-300 hover:border-[#056CB8] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] max-sm:px-4 max-sm:py-3 max-sm:min-w-[180px]"
                            >
                                <div className="w-8 h-8 text-[#056CB8] [&>svg]:w-full [&>svg]:h-full shrink-0">
                                    {feature.icon}
                                </div>
                                <span className="font-bold text-[0.82rem] text-[#111111] leading-[1.3]">
                                    {feature.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Security Built for the Enterprise
                        </h2>
                        <p className="text-[1.05rem] text-white/50 max-w-[700px] mx-auto max-sm:text-[0.9rem]">
                            Data protection and privacy are embedded into everything we do — from how our products are designed to how our partners and vendors operate.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1" data-animate="fade-up" data-delay="2">
                        {[
                            {
                                icon: 'bi-shield-fill-check',
                                title: 'Data Protection & Encryption',
                                text: 'We apply globally recognized security practices with end-to-end encryption safeguarding data during transmission through modern, industry-approved protocols.',
                            },
                            {
                                icon: 'bi-lock-fill',
                                title: 'Privacy Standards You Can Trust',
                                text: 'Our policies protect personal information at all times. We adhere to leading global privacy regulations, including GDPR and CCPA, to maintain transparency and trust.',
                            },
                            {
                                icon: 'bi-diagram-3',
                                title: 'Scalable Infrastructure for Growth',
                                text: 'Powered by infrastructure we own and operate, giving us full control over performance, reliability, and security. AI, analytics, and search scale seamlessly as you grow.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white/5 border border-white/10 rounded-md p-7 flex flex-col gap-4 max-sm:p-5">
                                <div className="w-12 h-12 rounded-md bg-[#056CB8]/15 flex items-center justify-center">
                                    <i className={`bi ${item.icon} text-[#056CB8] text-xl`}></i>
                                </div>
                                <h3 className="text-[1.1rem] font-bold">{item.title}</h3>
                                <p className="text-[0.9rem] text-white/50 leading-relaxed m-0">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-12 bg-white flex justify-center items-center w-full max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 relative overflow-hidden">
                {/* Rotating SVG background */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none overflow-visible" aria-hidden="true">
                    <Image
                        src="/images/enterprise-footer.svg"
                        alt=""
                        width={517}
                        height={517}
                        className="w-[400px] h-[400px] max-md:w-[280px] max-md:h-[280px] opacity-50 animate-spin-slow"
                    />
                </div>
                <div className="max-w-[680px] w-full text-center flex flex-col items-center gap-6 max-sm:gap-4 relative z-10">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Explore how our solutions can help your enterprise
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] leading-relaxed max-sm:text-[0.9rem]">
                        Our team will get in touch with you for an exploratory call.
                    </p>
                    <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 mt-4 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Contact sales
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
