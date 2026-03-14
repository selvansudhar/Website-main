export const metadata = {
    title: 'Assistant Hub — Your AI Workforce, Ready to Deploy',
    description: 'Deploy 16 specialized AI assistants across every department. From sales to analytics, automate tasks and unlock insights with zero code.',
    alternates: { canonical: 'https://zynex.ai/products/assistant-hub' },
    openGraph: {
        title: 'Assistant Hub — Your AI Workforce, Ready to Deploy',
        description: 'Deploy 16 specialized AI assistants across every department. Automate tasks and unlock insights with zero code.',
    },
};

const departments = [
    { name: 'Sales', icon: 'bi-graph-up' },
    { name: 'Quotation', icon: 'bi-file-earmark-text' },
    { name: 'GRN', icon: 'bi-download' },
    { name: 'DC', icon: 'bi-inbox-fill' },
    { name: 'Expense', icon: 'bi-bar-chart-line-fill' },
    { name: 'Inventory', icon: 'bi-list-check' },
    { name: 'Purchase', icon: 'bi-arrow-repeat' },
    { name: 'Invoicing', icon: 'bi-bar-chart-fill' },
    { name: 'Accounting', icon: 'bi-bar-chart-line-fill' },
    { name: 'CRM', icon: 'bi-people-fill' },
    { name: 'HRMS', icon: 'bi-person-check' },
    { name: 'Payroll', icon: 'bi-calendar-check-fill' },
    { name: 'Project', icon: 'bi-calendar-event-fill' },
    { name: 'Support', icon: 'bi-headset' },
    { name: 'Analytics', icon: 'bi-activity' },
    { name: 'Marketing', icon: 'bi-bullseye' },
];

const howItWorks = [
    { step: '01', icon: 'bi-diagram-3', title: 'Connect', desc: 'Link your Zynex modules — Finance, CRM, HR, and more — so assistants can access live data.' },
    { step: '02', icon: 'bi-sliders', title: 'Configure', desc: 'Set permissions, define workflows, and choose which assistants each team gets access to.' },
    { step: '03', icon: 'bi-lightning-charge-fill', title: 'Deploy', desc: 'Activate assistants in under 5 minutes. No code, no consultants, no downtime.' },
    { step: '04', icon: 'bi-bar-chart-fill', title: 'Monitor', desc: 'Track task automation rates, response quality, and team adoption from a single dashboard.' },
];

const assistantDirectory = [
    { name: 'Sales Assistant', icon: 'bi-graph-up', role: 'Pipeline & forecasting' },
    { name: 'Quotation Assistant', icon: 'bi-file-earmark-text', role: 'Quote generation' },
    { name: 'GRN Assistant', icon: 'bi-download', role: 'Goods receipt notes' },
    { name: 'DC Assistant', icon: 'bi-inbox-fill', role: 'Delivery challans' },
    { name: 'Expense Assistant', icon: 'bi-bar-chart-line-fill', role: 'Expense tracking' },
    { name: 'Inventory Assistant', icon: 'bi-list-check', role: 'Stock management' },
    { name: 'Purchase Assistant', icon: 'bi-arrow-repeat', role: 'Purchase orders' },
    { name: 'Invoicing Assistant', icon: 'bi-bar-chart-fill', role: 'Invoice processing' },
    { name: 'Accounting Assistant', icon: 'bi-bar-chart-line-fill', role: 'Ledger & reconciliation' },
    { name: 'CRM Assistant', icon: 'bi-people-fill', role: 'Contact management' },
    { name: 'HRMS Assistant', icon: 'bi-person-check', role: 'Employee lifecycle' },
    { name: 'Payroll Assistant', icon: 'bi-calendar-check-fill', role: 'Salary processing' },
    { name: 'Project Assistant', icon: 'bi-calendar-event-fill', role: 'Task & milestone tracking' },
    { name: 'Support Assistant', icon: 'bi-headset', role: 'Ticket resolution' },
    { name: 'Analytics Assistant', icon: 'bi-activity', role: 'Insights & reports' },
    { name: 'Marketing Assistant', icon: 'bi-bullseye', role: 'Campaign management' },
];

const spotlightAssistants = [
    {
        name: 'Sales Assistant',
        icon: 'bi-graph-up',
        desc: 'Manages your entire pipeline — from lead scoring to deal forecasting — with real-time CRM data.',
        capabilities: ['Auto-score leads by conversion probability', 'Generate pipeline forecasts weekly', 'Draft follow-up emails from CRM notes', 'Alert on stale deals over 14 days'],
        integrations: ['CRM Lite', 'Finance Plus'],
    },
    {
        name: 'HRMS Assistant',
        icon: 'bi-person-check',
        desc: 'Handles employee queries, leave management, and onboarding workflows without HR intervention.',
        capabilities: ['Process leave requests instantly', 'Answer policy questions 24/7', 'Generate onboarding checklists', 'Track attendance anomalies'],
        integrations: ['Human Resources', 'Payroll'],
    },
];

const intelligenceFeatures = [
    { icon: 'bi-lightning-charge-fill', title: 'Context-Aware', desc: 'Every response factors in your company data, user role, and recent activity for relevant answers.' },
    { icon: 'bi-shield-fill-check', title: 'Role-Based Permissions', desc: 'Assistants only access data their user is authorized to see. Zero data leakage by design.' },
    { icon: 'bi-arrow-repeat', title: 'Self-Learning', desc: 'Assistants improve over time by learning from corrections, preferences, and usage patterns.' },
    { icon: 'bi-clock-history', title: 'Audit Trail', desc: 'Every action logged. Full transparency for compliance, governance, and internal reviews.' },
    { icon: 'bi-diagram-3', title: 'Cross-Module Awareness', desc: 'Assistants share context across Zynex modules so insights flow between departments.' },
    { icon: 'bi-sliders', title: 'Human-in-the-Loop', desc: 'Set approval gates for critical actions. Assistants suggest — humans decide when it matters.' },
];

const timeline = [
    { day: 'Day 1', title: 'Connect Your Modules', desc: 'Link Finance, CRM, HR, and other Zynex apps. Assistants begin indexing your data immediately.' },
    { day: 'Day 2', title: 'Choose Your Assistants', desc: 'Pick from 16 specialized assistants. Assign them to teams based on department needs.' },
    { day: 'Day 3', title: 'Set Rules & Permissions', desc: 'Define approval workflows, data access levels, and escalation paths for each assistant.' },
    { day: 'Day 5', title: 'Go Live', desc: 'Activate assistants across your organization. Teams start interacting immediately — no training needed.' },
    { day: 'Day 30', title: 'Measure Impact', desc: 'Review automation rates, time saved, and task reduction metrics from your analytics dashboard.' },
];

const integrationMap = [
    { module: 'Finance Plus', assistants: ['Accounting', 'Expense', 'Invoicing'] },
    { module: 'CRM Lite', assistants: ['Sales', 'CRM', 'Quotation'] },
    { module: 'Human Resources', assistants: ['HRMS', 'Payroll'] },
    { module: 'Project Plus', assistants: ['Project', 'Analytics'] },
    { module: 'Inventory', assistants: ['Inventory', 'GRN', 'DC'] },
    { module: 'Support', assistants: ['Support'] },
    { module: 'Marketing Automation', assistants: ['Marketing'] },
    { module: 'Knowledge Base', assistants: ['Analytics', 'Support'] },
];

export default function AssistantHub() {
    return (
        <div className="bg-white text-[#111111]">

            {/* ─── Section 1: Two-Column Hero — Text Left + Hub Mockup Right ─── */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Assistant Hub</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                    {/* Left — Text */}
                    <div data-animate="fade-up">
                        <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 mb-6 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-[#555555]">16 AI Assistants</span>
                        </div>
                        <h1 className="text-[2.8rem] font-extrabold leading-[1.1] text-[#111111] tracking-[-0.02em] mb-6 max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                            One hub. Every department. Fully automated.
                        </h1>
                        <p className="text-[1.15rem] leading-relaxed text-[#555555] mb-10 max-w-[520px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Deploy specialized AI assistants across sales, finance, HR, support, and more. They learn your data, follow your rules, and work 24/7 — no code required.
                        </p>
                        <div className="flex gap-4 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                            <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                                Deploy assistants
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                            <button className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                                Watch demo
                             <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                        </div>
                    </div>

                    {/* Right — Assistant Hub Mockup */}
                    <div>
                        <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">Assistant Hub</span>
                            </div>

                            <div className="p-6 max-sm:p-4">
                                {/* Status Bar */}
                                <div className="flex items-center justify-between bg-[#f5f5f5] border border-[#e0e0e0] rounded-md px-4 py-3 mb-5">
                                    <div className="flex items-center gap-2">
                                        <i className="bi bi-lightning-charge-fill text-[#056CB8] text-sm"></i>
                                        <span className="text-[0.85rem] text-[#111111] font-semibold max-sm:text-[0.75rem]">16 Assistants Active</span>
                                    </div>
                                    <span className="text-[0.7rem] font-bold text-white bg-[#09983A] px-2.5 py-0.5 rounded-full">All Online</span>
                                </div>

                                {/* Mini Assistant List */}
                                <div className="flex flex-col gap-2.5">
                                    {[
                                        { name: 'Sales Assistant', icon: 'bi-graph-up', status: 'Processing 12 leads', color: '#056CB8' },
                                        { name: 'HRMS Assistant', icon: 'bi-person-check', status: '3 leave requests handled', color: '#056CB8' },
                                        { name: 'Finance Assistant', icon: 'bi-bar-chart-fill', status: 'Monthly report ready', color: '#056CB8' },
                                        { name: 'Support Assistant', icon: 'bi-headset', status: '8 tickets resolved today', color: '#056CB8' },
                                    ].map((asst) => (
                                        <div key={asst.name} className="flex items-center gap-3 bg-white border border-[#e0e0e0] rounded-md px-4 py-3 max-sm:px-3 max-sm:py-2.5">
                                            <div className="w-8 h-8 bg-[#056CB8]/10 rounded flex items-center justify-center shrink-0">
                                                <i className={`bi ${asst.icon} text-[#056CB8] text-sm`}></i>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="text-[0.8rem] font-semibold text-[#111111]">{asst.name}</div>
                                                <div className="text-[0.7rem] text-[#555555]">{asst.status}</div>
                                            </div>
                                            <span className="w-2 h-2 rounded-full bg-[#09983A] shrink-0"></span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer stat */}
                                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#e0e0e0]">
                                    <i className="bi bi-activity text-[#555555] text-xs"></i>
                                    <span className="text-[0.72rem] text-[#555555]">85% tasks automated · 12 departments connected</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── Section 2: How It Works — Central Hub + 4 Spoke Cards ─── */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        How it works
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        From connection to insight in four simple steps
                    </p>

                    <div className="relative">
                        {/* 4 Step Cards */}
                        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4" data-animate="fade-up">
                            {howItWorks.map((item) => (
                                <div key={item.step} className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[0.7rem] font-bold text-white bg-[#056CB8] w-7 h-7 rounded flex items-center justify-center">{item.step}</span>
                                        <div className="w-9 h-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                                            <i className={`bi ${item.icon} text-[#111111] text-base`}></i>
                                        </div>
                                    </div>
                                    <h3 className="text-[1.05rem] font-bold text-[#111111] mb-2">{item.title}</h3>
                                    <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Section 3: Assistant Roster — Left Directory + Right Detail Panel ─── */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        Meet your AI workforce
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        16 specialized assistants, each trained for a specific business function
                    </p>

                    <div className="grid grid-cols-[2fr_3fr] gap-8 max-lg:grid-cols-1 max-sm:gap-6">
                        {/* Left — Directory List */}
                        <div className="border border-[#e0e0e0] rounded-md overflow-hidden">
                            <div className="bg-[#f5f5f5] px-5 py-3 border-b border-[#e0e0e0]">
                                <span className="text-[0.7rem] font-bold text-[#111111] uppercase tracking-wider">All Assistants</span>
                            </div>
                            <div className="max-h-[520px] overflow-y-auto">
                                {assistantDirectory.map((asst) => (
                                    <div key={asst.name} className="flex items-center gap-3 px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f5f5f5] transition-colors duration-200">
                                        <div className="w-8 h-8 bg-[#f5f5f5] rounded flex items-center justify-center shrink-0">
                                            <i className={`bi ${asst.icon} text-[#056CB8] text-sm`}></i>
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[0.85rem] font-semibold text-[#111111] truncate">{asst.name}</div>
                                            <div className="text-[0.72rem] text-[#555555]">{asst.role}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Spotlight Cards */}
                        <div className="flex flex-col gap-6 max-sm:gap-4">
                            {spotlightAssistants.map((asst) => (
                                <div key={asst.name} className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#056CB8]/10 rounded-lg flex items-center justify-center">
                                            <i className={`bi ${asst.icon} text-[#056CB8] text-base`}></i>
                                        </div>
                                        <h3 className="text-[1.05rem] font-bold text-[#111111]">{asst.name}</h3>
                                    </div>
                                    <p className="text-[0.85rem] text-[#555555] leading-[1.7] mb-4 max-sm:text-[0.8rem]">{asst.desc}</p>
                                    <ul className="flex flex-col gap-2 mb-4">
                                        {asst.capabilities.map((cap) => (
                                            <li key={cap} className="flex items-start gap-2 text-[0.82rem] text-[#555555] leading-[1.5]">
                                                <i className="bi bi-check-circle-fill text-[#056CB8] text-xs mt-0.5 shrink-0"></i>
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {asst.integrations.map((tag) => (
                                            <span key={tag} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded px-3 py-1 text-[0.7rem] font-semibold text-[#111111]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Section 4: Staggered Two-Row Grid — Intelligence Features ─── */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        What makes each assistant smart
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        Built-in intelligence that goes far beyond simple automation
                    </p>

                    {/* Row 1 — 3 cards aligned normally */}
                    <div className="grid grid-cols-3 gap-6 mb-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mb-4">
                        {intelligenceFeatures.slice(0, 3).map((feat) => (
                            <div key={feat.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                                <div className="w-10 h-10 bg-[#111111] rounded-lg flex items-center justify-center mb-4">
                                    <i className={`bi ${feat.icon} text-white text-base`}></i>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-[#111111] mb-2">{feat.title}</h3>
                                <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{feat.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 — 3 cards offset right by half a column */}
                    <div className="grid grid-cols-3 gap-6 ml-[calc(100%/6)] max-lg:grid-cols-2 max-lg:ml-0 max-md:grid-cols-1">
                        {intelligenceFeatures.slice(3, 6).map((feat) => (
                            <div key={feat.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                                <div className="w-10 h-10 bg-[#111111] rounded-lg flex items-center justify-center mb-4">
                                    <i className={`bi ${feat.icon} text-white text-base`}></i>
                                </div>
                                <h3 className="text-[1.05rem] font-bold text-[#111111] mb-2">{feat.title}</h3>
                                <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Section 5: Deployment Journey — Vertical Alternating Timeline ─── */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        Your deployment journey
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        From zero to fully automated in under a week
                    </p>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Central Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#e0e0e0] -translate-x-1/2 max-md:left-5"></div>

                        <div className="flex flex-col gap-16 max-sm:gap-10">
                            {timeline.map((step, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <div key={step.day} className="relative grid grid-cols-[1fr_auto_1fr] gap-8 items-center max-md:grid-cols-[auto_1fr] max-md:gap-6">
                                        {/* Left Content or Spacer */}
                                        <div className={`${isLeft ? '' : 'max-md:hidden'} max-md:hidden`}>
                                            {isLeft && (
                                                <div className="bg-white border border-[#e0e0e0] rounded-md p-6 text-right transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111]">
                                                    <span className="text-[0.7rem] font-bold text-[#056CB8] uppercase tracking-wider">{step.day}</span>
                                                    <h3 className="text-[1.05rem] font-bold text-[#111111] mt-1 mb-2">{step.title}</h3>
                                                    <p className="text-[0.85rem] text-[#555555] leading-[1.7]">{step.desc}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="w-10 h-10 bg-[#056CB8] rounded-full flex items-center justify-center z-10 shadow-[0_0_0_4px_white,0_0_0_5px_#e0e0e0]">
                                            <span className="text-white text-[0.7rem] font-bold">{i + 1}</span>
                                        </div>

                                        {/* Right Content or Spacer */}
                                        <div className={`${!isLeft ? '' : 'max-md:block'} max-md:block`}>
                                            {!isLeft ? (
                                                <div className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                                                    <span className="text-[0.7rem] font-bold text-[#056CB8] uppercase tracking-wider">{step.day}</span>
                                                    <h3 className="text-[1.05rem] font-bold text-[#111111] mt-1 mb-2">{step.title}</h3>
                                                    <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{step.desc}</p>
                                                </div>
                                            ) : (
                                                /* Mobile fallback for left-aligned items */
                                                <div className="hidden max-md:block">
                                                    <div className="bg-white border border-[#e0e0e0] rounded-md p-6 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5">
                                                        <span className="text-[0.7rem] font-bold text-[#056CB8] uppercase tracking-wider">{step.day}</span>
                                                        <h3 className="text-[1.05rem] font-bold text-[#111111] mt-1 mb-2">{step.title}</h3>
                                                        <p className="text-[0.85rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{step.desc}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Section 6: Integration Map — Single Oversized Card ─── */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-4 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                        Connected to your entire Zynex ecosystem
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center mb-16 max-w-[600px] mx-auto max-md:text-base max-sm:text-[0.9rem] max-sm:mb-10" data-animate="fade-up">
                        Every module, every assistant — working together
                    </p>

                    {/* Single Large Card */}
                    <div className="bg-white border border-[#e0e0e0] rounded-md p-10 shadow-[0_8px_24px_rgba(0,0,0,0.04)] max-sm:p-6">
                        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
                            {integrationMap.map((mod) => (
                                <div key={mod.module} className="border border-[#e0e0e0] rounded-md p-5 max-sm:p-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-[#056CB8]"></div>
                                        <h4 className="text-[0.85rem] font-bold text-[#111111]">{mod.module}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {mod.assistants.map((name) => (
                                            <span key={name} className="bg-[#056CB8]/5 border border-[#056CB8]/20 rounded px-2.5 py-1 text-[0.7rem] font-semibold text-[#056CB8]">
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Section 7: Split Dark CTA with Stats Sidebar ─── */}
            <section className="py-28 px-12 bg-[#056CB8] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1200px] mx-auto grid grid-cols-[1.2fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10">
                    {/* Left — CTA */}
                    <div data-animate="fade-left">
                        <h2 className="text-[2.2rem] font-extrabold text-white mb-4 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Ready to deploy your AI workforce?
                        </h2>
                        <p className="text-[1.05rem] text-white/60 leading-relaxed mb-10 max-w-[500px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Start with one assistant or deploy all 16. No code, no consultants — just results from day one.
                        </p>
                        <button className="bg-white text-[#056CB8] border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:bg-white/90 max-lg:mx-auto max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem]">
                            Talk Sales
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                    </div>

                    {/* Right — Stats */}
                    <div className="grid grid-cols-2 gap-6 max-sm:gap-4" data-animate="fade-right">
                        {[
                            { value: '16', label: 'Specialized assistants' },
                            { value: '<5 min', label: 'Average deploy time' },
                            { value: '85%', label: 'Task reduction rate' },
                            { value: '0', label: 'Lines of code needed' },
                        ].map((stat) => (
                            <div key={stat.label} className="border-l-2 border-white/30 pl-5 py-2">
                                <div className="text-[1.8rem] font-extrabold text-white mb-0.5 max-sm:text-[1.4rem]">{stat.value}</div>
                                <div className="text-[0.8rem] text-white/50 font-semibold max-sm:text-[0.72rem]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
