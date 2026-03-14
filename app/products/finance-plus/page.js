import FinanceTabs from './FinanceTabs';
import CountUp from '@/components/CountUp';

export const metadata = {
    title: 'Finance Plus',
    description: 'Streamline invoicing, expense tracking, budgeting, and financial reporting with AI-powered automation and real-time insights.',
    alternates: { canonical: 'https://zynex.ai/products/finance-plus' },
    openGraph: {
        title: 'Finance Plus',
        description: 'Streamline invoicing, expense tracking, budgeting, and financial reporting with AI-powered automation and real-time insights.',
    },
};

export default function FinancePlus() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Finance Plus</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                    {/* Left — Text */}
                    <div className="flex flex-col gap-6" data-animate="fade-up">
                        <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-[#555555]">Integrated Finance Suite</span>
                        </div>
                        <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                            One platform for<br />complete back-office management.
                        </h1>
                        <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[520px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Simplify billing, order processing, and financial management with a single, integrated system designed for accuracy, efficiency, and full GST compliance.
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
                            Trusted by 500+ businesses &nbsp;&bull;&nbsp; GST-ready &nbsp;&bull;&nbsp; Setup in minutes
                        </p>
                    </div>

                    {/* Right — Finance Dashboard Mockup */}
                    <div className="max-lg:mt-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">Finance Plus — Dashboard</span>
                            </div>

                            <div className="p-5 max-sm:p-4">
                                {/* Summary Cards Row */}
                                <div className="grid grid-cols-3 gap-3 mb-4 max-sm:gap-2 max-sm:mb-3">
                                    {[
                                        { label: 'Revenue', value: '$84,230', change: '+12.4%', up: true },
                                        { label: 'Expenses', value: '$31,560', change: '-3.2%', up: false },
                                        { label: 'Net Profit', value: '$52,670', change: '+18.7%', up: true },
                                    ].map((card) => (
                                        <div key={card.label} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-3 max-sm:p-2">
                                            <div className="text-[0.6rem] font-semibold text-[#555555] uppercase tracking-wider mb-1">{card.label}</div>
                                            <div className="text-[0.95rem] font-extrabold text-[#111111] max-sm:text-[0.8rem]">{card.value}</div>
                                            <div className={`text-[0.6rem] font-bold mt-1 ${card.up ? 'text-[#22c55e]' : 'text-[#F60014]'}`}>{card.change}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini Bar Chart */}
                                <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-md p-4 mb-4 max-sm:p-3 max-sm:mb-3">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">Monthly Revenue</span>
                                        <span className="text-[0.6rem] font-medium text-[#555555]">Last 6 months</span>
                                    </div>
                                    <div className="flex items-end gap-2 h-16 max-sm:h-12">
                                        {[40, 55, 45, 70, 60, 85].map((h, i) => (
                                            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i === 5 ? '#056CB8' : '#d1d5db' }}></div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'].map((m) => (
                                            <span key={m} className="flex-1 text-center text-[0.5rem] text-[#555555]">{m}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Transactions */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[0.65rem] font-bold text-[#111111] uppercase tracking-wider">Recent Transactions</span>
                                </div>
                                {[
                                    { name: 'Invoice #1084', amount: '+$4,200', type: 'credit' },
                                    { name: 'Payroll — Feb', amount: '-$12,800', type: 'debit' },
                                    { name: 'Invoice #1083', amount: '+$7,650', type: 'credit' },
                                ].map((tx) => (
                                    <div key={tx.name} className="flex items-center justify-between py-2 border-b border-[#e0e0e0] last:border-0">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${tx.type === 'credit' ? 'bg-[#22c55e]' : 'bg-[#F60014]'}`}></span>
                                            <span className="text-[0.72rem] font-medium text-[#111111] max-sm:text-[0.65rem]">{tx.name}</span>
                                        </div>
                                        <span className={`text-[0.72rem] font-bold max-sm:text-[0.65rem] ${tx.type === 'credit' ? 'text-[#22c55e]' : 'text-[#F60014]'}`}>{tx.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Ribbon */}
            <section className="border-y border-[#e0e0e0] bg-[#f5f5f5]">
                <div className="max-w-[1400px] mx-auto px-12 py-10 grid grid-cols-4 gap-8 max-md:grid-cols-2 max-md:px-6 max-md:py-8 max-sm:px-4 max-sm:gap-6 max-[480px]:grid-cols-1">
                    {[
                        { value: '8', label: 'Integrated modules', suffix: '' },
                        { value: '99.9', label: 'Uptime guaranteed', suffix: '%' },
                        { value: '60', label: 'Faster invoicing', suffix: '%' },
                        { value: '500', label: 'Businesses onboarded', suffix: '+' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-[2.4rem] font-extrabold text-[#111111] leading-none tracking-tight max-sm:text-[2rem]">
                                <CountUp value={stat.value} /><span className="text-[#056CB8]">{stat.suffix}</span>
                            </div>
                            <div className="text-[0.82rem] text-[#555555] font-medium mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive tabs section — Client Component (KEEP AS-IS) */}
            <FinanceTabs />

            {/* Benefits — Alternating Rows */}
            <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="text-center mb-20 max-sm:mb-12" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Why businesses choose an integrated finance suite
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] max-w-[600px] mx-auto max-sm:text-[0.9rem]">
                        Six reasons teams switch from scattered tools to one unified platform.
                    </p>
                </div>

                <div className="flex flex-col gap-0">
                    {[
                        {
                            num: '01',
                            icon: 'bi-diagram-3',
                            title: 'Unified Applications, One Platform',
                            desc: 'All Zynex Finance applications operate as a single ecosystem. Data entered anywhere flows automatically across the suite, ensuring consistency, accuracy, and real-time visibility.',
                        },
                        {
                            num: '02',
                            icon: 'bi-lightning-charge-fill',
                            title: 'Streamlined Quote-to-Revenue Workflow',
                            desc: 'Sales, operations, and finance teams stay perfectly aligned. Quotes and orders created in one system are instantly accessible across functions, enabling faster fulfillment and quicker payment collection.',
                        },
                        {
                            num: '03',
                            icon: 'bi-arrow-repeat',
                            title: 'Built for Subscription-Driven Businesses',
                            desc: 'Native support for subscription billing while remaining fully integrated with traditional accounting workflows — giving businesses the flexibility to operate both models seamlessly.',
                        },
                        {
                            num: '04',
                            icon: 'bi-people-fill',
                            title: 'Faster Employee Reimbursements',
                            desc: 'Automated expense approval workflows make reimbursement easy for employees and finance teams alike. Expenses are accurately categorized and recorded, reducing manual effort.',
                        },
                        {
                            num: '05',
                            icon: 'bi-shield-fill-check',
                            title: 'GST-Ready by Design',
                            desc: 'Engineered to support GST requirements end-to-end — simplifying compliance, tax calculations, and filings while minimizing errors and administrative overhead.',
                        },
                        {
                            num: '06',
                            icon: 'bi-lock-fill',
                            title: 'Centralized Administration & Access Control',
                            desc: 'Manage users, roles, and permissions through a single administrative dashboard. Assign role-based access across departments from one centralized control panel.',
                        },
                    ].map((item, idx) => (
                        <div
                            key={item.num}
                            className={`grid grid-cols-[80px_1fr] gap-8 py-10 border-b border-[#e0e0e0] items-start max-md:grid-cols-1 max-md:gap-4 max-md:py-8 max-sm:py-6 ${idx === 0 ? 'border-t' : ''}`}
                        >
                            {/* Number */}
                            <div className="text-[2.5rem] font-extrabold text-[#e0e0e0] leading-none max-md:text-[1.8rem]">
                                {item.num}
                            </div>

                            {/* Content */}
                            <div className="flex gap-5 items-start max-sm:flex-col max-sm:gap-3">
                                <div className="w-12 h-12 rounded-md bg-[#056CB8]/8 flex items-center justify-center shrink-0">
                                    <i className={`bi ${item.icon} text-[#056CB8] text-lg`}></i>
                                </div>
                                <div>
                                    <h3 className="text-[1.15rem] font-bold text-[#111111] mb-2 max-sm:text-[1rem]">{item.title}</h3>
                                    <p className="text-[0.95rem] text-[#555555] leading-relaxed m-0 max-w-[640px] max-sm:text-[0.85rem]">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Compliance & Security — Dark Section */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="grid grid-cols-[1fr_1fr] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
                        {/* Left */}
                        <div data-animate="fade-left">
                            <div className="inline-flex items-center gap-2 border border-white/20 rounded-[100px] px-4 py-1.5 mb-6 max-sm:px-3 max-sm:py-1">
                                <i className="bi bi-shield-check text-[#22c55e] text-xs"></i>
                                <span className="text-[0.82rem] font-medium text-white/70">Enterprise-Grade Security</span>
                            </div>
                            <h2 className="text-[2.2rem] font-extrabold tracking-[-0.02em] mb-6 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                                Built for compliance.<br />Designed for trust.
                            </h2>
                            <p className="text-[1.05rem] text-white/60 leading-relaxed max-w-[480px] max-sm:text-[0.9rem]">
                                Every transaction, every report, every data point is secured with enterprise-grade infrastructure and compliance-first architecture.
                            </p>
                        </div>

                        {/* Right — Compliance Cards */}
                        <div className="grid grid-cols-2 gap-4 max-sm:gap-3" data-animate="fade-right">
                            {[
                                { icon: 'bi-shield-fill-check', title: 'GST Compliant', desc: 'End-to-end GST support with automated calculations and e-invoicing.' },
                                { icon: 'bi-lock-fill', title: 'Data Encryption', desc: 'AES-256 encryption at rest and TLS 1.3 in transit.' },
                                { icon: 'bi-person-check', title: 'Role-Based Access', desc: 'Granular permissions per user, team, and department.' },
                                { icon: 'bi-clock-history', title: 'Audit Trail', desc: 'Complete transaction history with timestamped records.' },
                            ].map((card) => (
                                <div key={card.title} className="bg-white/5 border border-white/10 rounded-md p-5 max-sm:p-4">
                                    <i className={`bi ${card.icon} text-[#056CB8] text-xl mb-3 block`}></i>
                                    <h3 className="text-[0.9rem] font-bold mb-1.5">{card.title}</h3>
                                    <p className="text-[0.8rem] text-white/50 leading-relaxed m-0">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-12 bg-white flex justify-center items-center w-full max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[680px] w-full text-center flex flex-col items-center gap-6 max-sm:gap-4" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Ready to streamline your business finance?
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] leading-relaxed max-sm:text-[0.9rem]">
                        Experience the power of a truly integrated finance suite. Start transforming your business operations with Zynex Finance Plus today.
                    </p>
                    <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 mt-4 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Get started now
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
