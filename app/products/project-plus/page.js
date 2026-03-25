import Image from 'next/image';

export const metadata = {
    title: 'Project Plus — Deliver Projects On Time, Every Time',
    description: 'Collaborative project management with task tracking, resource allocation, and AI-assisted planning for teams of any size.',
    alternates: { canonical: 'https://zynex.ai/products/project-plus' },
    openGraph: {
        title: 'Project Plus — Deliver Projects On Time, Every Time',
        description: 'Collaborative project management with task tracking, resource allocation, and AI-assisted planning for teams of any size.',
    },
};

export default function ProjectPlus() {
    return (
        <div className="bg-white text-[#111111]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://zynex.ai/products" },
                { "@type": "ListItem", "position": 3, "name": "Project Plus" }
              ]
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zynex Project Plus",
              "description": "Collaborative project management with task tracking, resource allocation, and AI-assisted planning for teams of any size.",
              "url": "https://zynex.ai/products/project-plus",
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

            {/* Section 1: Split Hero — Left Dark + Right Light */}
            <section className="w-full grid grid-cols-2 max-lg:grid-cols-1">
                {/* Left Half — Dark */}
                <div className="bg-[#111111] text-white flex flex-col justify-center pt-40 pb-24 max-lg:pt-32 max-lg:pb-20 max-md:pt-28 max-md:pb-16 max-sm:pt-24 max-sm:pb-14">
                  <div className="ml-auto w-full max-w-[700px] px-12 max-md:px-6 max-sm:px-4">
                    <div data-animate="fade-right">
                        {/* Nav Trail */}
                        <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-5">
                            <span className="text-white/40">Zynex AI</span>
                            <span className="text-white/20">/</span>
                            <span className="text-[#056CB8] uppercase">Project Plus</span>
                        </div>

                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 border border-white/15 rounded-[100px] px-4 py-1.5 mb-8 max-sm:px-3 max-sm:py-1 max-sm:mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-white/60">Project Management</span>
                        </div>

                        <h1 className="text-[3rem] font-extrabold leading-[1.06] tracking-[-0.03em] mb-6 max-md:text-[2.2rem] max-sm:text-[1.8rem] max-sm:mb-4">
                            Deliver projects<br />on time. Every time.
                        </h1>
                        <p className="text-[1.1rem] text-white/50 leading-relaxed max-w-[480px] mb-8 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-6">
                            Transform your project management with powerful tools for task tracking, team collaboration, and real-time insights. Keep your projects on schedule and your teams aligned.
                        </p>

                        <div className="flex gap-4 mb-6 max-sm:flex-col max-sm:items-start">
                            <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                                Talk Sales
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                            </button>
                            <button className="bg-transparent text-white border-2 border-white/20 px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-white/50 max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem] group">
                                See demo
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                            </button>
                        </div>
                        <p className="text-[0.78rem] text-white/30 m-0">
                            Unlimited projects &nbsp;&bull;&nbsp; Real-time collaboration &nbsp;&bull;&nbsp; Get started free
                        </p>
                    </div>
                  </div>
                </div>

                {/* Right Half — Light with Sprint Board + Stats + Activity */}
                <div className="bg-[#f5f5f5] pt-40 pb-24 flex flex-col items-center justify-center gap-4 max-lg:pt-16 max-lg:pb-16 max-sm:pt-12 max-sm:pb-12 px-12 max-md:px-6 max-sm:px-4">
                    {/* Sprint Board Card */}
                    <div className="w-full max-w-[520px]" data-animate="fade-left">
                        <div className="bg-white border border-[#e0e0e0] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#fafafa]">
                                <span className="w-2 h-2 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.65rem] font-bold text-[#555555] tracking-wider uppercase">Sprint Board</span>
                            </div>
                            <div className="p-5 max-sm:p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[0.65rem] font-bold text-[#111111]">Sprint 14</span>
                                    <span className="text-[0.55rem] text-[#555555]">62% complete</span>
                                </div>
                                <div className="w-full h-1.5 bg-[#e0e0e0] rounded-full mb-5 overflow-hidden">
                                    <div className="flex h-full">
                                        <div className="bg-[#22c55e] h-full" style={{ width: '38%' }}></div>
                                        <div className="bg-[#056CB8] h-full" style={{ width: '24%' }}></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3 max-sm:gap-2">
                                    {[
                                        { col: 'To Do', color: '#e0e0e0', items: ['Write PRD', 'Research'] },
                                        { col: 'In Progress', color: '#056CB8', items: ['UI mockups', 'API design'] },
                                        { col: 'Done', color: '#22c55e', items: ['Setup', 'Onboarding'] },
                                    ].map((column) => (
                                        <div key={column.col}>
                                            <div className="flex items-center gap-1.5 mb-2">
                                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: column.color }}></span>
                                                <span className="text-[0.55rem] font-bold text-[#555555] uppercase tracking-wider">{column.col}</span>
                                            </div>
                                            {column.items.map((item) => (
                                                <div key={item} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded p-2 mb-1.5 last:mb-0">
                                                    <span className="text-[0.62rem] font-medium text-[#111111]">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mini Stats Row */}
                    <div className="w-full max-w-[520px] grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:gap-2" data-animate="fade-left" data-delay="1">
                        {[
                            { icon: 'bi-check-circle-fill', value: '12', label: 'Tasks done', color: '#22c55e' },
                            { icon: 'bi-people-fill', value: '5', label: 'Active members', color: '#056CB8' },
                            { icon: 'bi-clock-history', value: '3d', label: 'Until deadline', color: '#f59e0b' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white border border-[#e0e0e0] p-4 flex flex-col items-center text-center">
                                <i className={`bi ${stat.icon} text-lg mb-1.5`} style={{ color: stat.color }}></i>
                                <span className="text-lg font-extrabold text-[#111111] leading-none">{stat.value}</span>
                                <span className="text-[0.6rem] text-[#555555] mt-1 uppercase tracking-wider font-semibold">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Activity Feed */}
                    <div className="w-full max-w-[520px]" data-animate="fade-left" data-delay="2">
                        <div className="bg-white border border-[#e0e0e0] overflow-hidden">
                            <div className="px-4 py-2.5 border-b border-[#e0e0e0] bg-[#fafafa]">
                                <span className="text-[0.6rem] font-bold text-[#555555] uppercase tracking-wider">Recent Activity</span>
                            </div>
                            <div className="divide-y divide-[#e0e0e0]">
                                {[
                                    { user: 'S', name: 'Sudhar', action: 'moved "UI mockups" to In Progress', time: '2m ago', color: 'bg-[#056CB8]' },
                                    { user: 'A', name: 'Arjun', action: 'completed "Onboarding flow"', time: '15m ago', color: 'bg-[#22c55e]' },
                                    { user: 'P', name: 'Priya', action: 'added comment on "API design"', time: '1h ago', color: 'bg-[#8b5cf6]' },
                                ].map((activity) => (
                                    <div key={activity.time} className="flex items-center gap-3 px-4 py-3">
                                        <div className={`w-6 h-6 ${activity.color} flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-white text-[0.55rem] font-bold">{activity.user}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[0.65rem] text-[#111111] m-0 truncate">
                                                <span className="font-bold">{activity.name}</span>{' '}{activity.action}
                                            </p>
                                        </div>
                                        <span className="text-[0.55rem] text-[#555555] flex-shrink-0">{activity.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Project Views — Horizontal Scrolling Showcase */}
            <section className="bg-white py-28 max-md:py-16 max-sm:py-12">
                <div className="max-w-[1400px] mx-auto px-12 max-md:px-6 max-sm:px-4">
                    <div className="text-center mb-14 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            See your projects your way
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] max-w-[520px] mx-auto max-sm:text-[0.9rem]">
                            Switch between views instantly to match the way you think and work.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-5 max-lg:flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:gap-4 max-lg:pb-4 max-lg:-mx-6 max-lg:px-6 max-sm:-mx-4 max-sm:px-4" data-animate="fade-up">
                        {[
                            {
                                accent: '#056CB8',
                                icon: 'bi-list-check',
                                name: 'Board View',
                                lines: [
                                    { label: 'To Do', count: 4, dot: '#e0e0e0' },
                                    { label: 'In Progress', count: 3, dot: '#056CB8' },
                                    { label: 'Review', count: 2, dot: '#f59e0b' },
                                    { label: 'Done', count: 6, dot: '#22c55e' },
                                ],
                            },
                            {
                                accent: '#8b5cf6',
                                icon: 'bi-bar-chart-fill',
                                name: 'Timeline View',
                                lines: [
                                    { label: 'Design', bar: '60%', color: '#8b5cf6' },
                                    { label: 'Develop', bar: '80%', color: '#056CB8' },
                                    { label: 'Test', bar: '40%', color: '#f59e0b' },
                                    { label: 'Deploy', bar: '20%', color: '#22c55e' },
                                ],
                            },
                            {
                                accent: '#f59e0b',
                                icon: 'bi-list-check',
                                name: 'List View',
                                lines: [
                                    { label: 'Homepage design', status: 'Done' },
                                    { label: 'Auth API', status: 'Active' },
                                    { label: 'DB schema', status: 'Active' },
                                    { label: 'Unit tests', status: 'To Do' },
                                ],
                            },
                            {
                                accent: '#22c55e',
                                icon: 'bi-calendar-event-fill',
                                name: 'Calendar View',
                                lines: [
                                    { label: 'Mar 3 — Design review' },
                                    { label: 'Mar 7 — Sprint demo' },
                                    { label: 'Mar 12 — Release v2.1' },
                                    { label: 'Mar 14 — Retrospective' },
                                ],
                            },
                        ].map((view) => (
                            <div key={view.name} className="bg-white border border-[#e0e0e0] overflow-hidden flex flex-col max-lg:min-w-[280px] max-sm:min-w-[220px] max-lg:snap-start max-lg:shrink-0">
                                {/* Colored top accent */}
                                <div className="h-1" style={{ backgroundColor: view.accent }}></div>
                                {/* Header */}
                                <div className="px-5 py-4 flex items-center gap-2.5 border-b border-[#e0e0e0]">
                                    <i className={`bi ${view.icon} text-base`} style={{ color: view.accent }}></i>
                                    <span className="text-[0.82rem] font-bold text-[#111111]">{view.name}</span>
                                </div>
                                {/* Minimal mockup content */}
                                <div className="px-5 py-4 flex flex-col gap-2.5">
                                    {view.lines.map((line, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {line.dot && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: line.dot }}></span>}
                                                <span className="text-[0.72rem] text-[#111111] font-medium">{line.label}</span>
                                            </div>
                                            {line.count !== undefined && (
                                                <span className="text-[0.6rem] font-bold text-[#555555] bg-[#f5f5f5] px-1.5 py-0.5 rounded">{line.count}</span>
                                            )}
                                            {line.bar && (
                                                <div className="w-16 h-1.5 bg-[#e0e0e0] rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full" style={{ width: line.bar, backgroundColor: line.color }}></div>
                                                </div>
                                            )}
                                            {line.status && (
                                                <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded ${
                                                    line.status === 'Done' ? 'text-[#22c55e] bg-[#22c55e]/10' :
                                                    line.status === 'Active' ? 'text-[#056CB8] bg-[#056CB8]/10' :
                                                    'text-[#555555] bg-[#f5f5f5]'
                                                }`}>{line.status}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Why Teams Choose — Vertical Alternating Timeline */}
            <section className="bg-[#f5f5f5] py-28 max-md:py-16 max-sm:py-12">
                <div className="max-w-[1100px] mx-auto px-12 max-md:px-6 max-sm:px-4">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Why teams choose Zynex Project Plus
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] max-w-[520px] mx-auto max-sm:text-[0.9rem]">
                            Built for teams that need results, not complexity.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central vertical dashed line — desktop */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#d1d5db] -translate-x-1/2 max-md:left-5 max-md:translate-x-0"></div>

                        {[
                            { num: '01', icon: 'bi-clock-history', title: 'On Schedule Delivery', desc: 'Clear dependencies, automated reminders, and real-time tracking keep every milestone on target.', accent: '#056CB8' },
                            { num: '02', icon: 'bi-people-fill', title: 'Team Productivity', desc: 'Centralized tasks with clear ownership. Focus on execution, not endless coordination meetings.', accent: '#8b5cf6' },
                            { num: '03', icon: 'bi-clock-history', title: 'Time Tracking', desc: 'Automated time logging and progress updates eliminate manual status reports and timesheets.', accent: '#f59e0b' },
                            { num: '04', icon: 'bi-sliders', title: 'Resource Optimization', desc: 'Visualize team workload and capacity. Balance assignments to prevent burnout and bottlenecks.', accent: '#22c55e' },
                            { num: '05', icon: 'bi-file-earmark-text', title: 'Centralized Docs', desc: 'Documents, conversations, and updates in one place. No more scattered files across tools.', accent: '#F60014' },
                            { num: '06', icon: 'bi-bar-chart-line-fill', title: 'Budget Control', desc: 'Track project costs in real-time with integrated time and expense management dashboards.', accent: '#056CB8' },
                        ].map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <div key={item.num} className={`relative flex items-start mb-12 last:mb-0 max-md:pl-14 max-md:mb-10 ${isLeft ? 'justify-start' : 'justify-end'}`} data-animate={isLeft ? 'fade-right' : 'fade-left'}>
                                    {/* Numbered circle on the line */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#d1d5db] flex items-center justify-center z-10 max-md:left-5 max-md:translate-x-0">
                                        <span className="text-[0.65rem] font-extrabold text-[#111111]">{item.num}</span>
                                    </div>

                                    {/* Card */}
                                    <div className={`w-[calc(50%-40px)] bg-white border border-[#e0e0e0] p-6 max-md:w-full max-sm:p-5 ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.accent}12` }}>
                                                <i className={`bi ${item.icon} text-sm`} style={{ color: item.accent }}></i>
                                            </div>
                                            <h3 className="text-[0.95rem] font-bold text-[#111111] m-0">{item.title}</h3>
                                        </div>
                                        <p className="text-[0.85rem] text-[#555555] leading-relaxed m-0">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 4: Built For Teams That Ship */}
            <section className="bg-white py-28 max-md:py-16 max-sm:py-12">
                <div className="max-w-[1400px] mx-auto px-12 max-md:px-6 max-sm:px-4">
                    <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
                        {/* Left — Text + Checklist */}
                        <div data-animate="fade-right">
                            <h2 className="text-[2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-6 max-md:text-[1.6rem] max-sm:text-[1.4rem]">
                                Built for teams that ship
                            </h2>
                            <p className="text-[1.05rem] text-[#555555] leading-relaxed mb-8 max-sm:text-[0.9rem] max-sm:mb-6">
                                Whether you&apos;re a startup sprinting to launch or an enterprise managing complex programs, Project Plus adapts to your workflow.
                            </p>
                            <div className="flex flex-col gap-4">
                                {[
                                    'Agile sprints with backlog management',
                                    'Custom workflows for any methodology',
                                    'Cross-project dependency tracking',
                                    'Automated progress notifications',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <i className="bi bi-check-circle-fill text-[#22c55e] text-sm shrink-0"></i>
                                        <span className="text-[0.92rem] text-[#111111] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Image */}
                        <div className="w-full" data-animate="fade-left">
                            <Image src="/images/project-teams.webp" alt="Teams that ship" width={6300} height={2965} className="w-full h-auto object-contain" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Stats as Inline Cards */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-20 max-md:px-6 max-md:py-14 max-sm:px-4 max-sm:py-10">
                    <div className="grid grid-cols-3 max-md:grid-cols-1" data-animate="fade-up">
                        {[
                            { value: '60%', label: 'Less project delays' },
                            { value: '3x', label: 'Faster reporting' },
                            { value: '40%', label: 'More team output' },
                        ].map((stat, idx) => (
                            <div key={stat.label} className={`flex flex-col items-center text-center py-8 max-md:py-6 ${idx < 2 ? 'border-r border-white/10 max-md:border-r-0 max-md:border-b max-sm:border-b-0' : ''}`}>
                                <div className="text-[3rem] font-extrabold leading-none mb-2 max-md:text-[2.4rem] max-sm:text-[2rem]">{stat.value}</div>
                                <div className="text-[0.85rem] text-white/40 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: CTA */}
            <section className="bg-white border-t border-[#e0e0e0] py-28 max-md:py-16 max-sm:py-12">
                <div className="max-w-[680px] mx-auto px-12 text-center flex flex-col items-center gap-6 max-md:px-6 max-sm:px-4 max-sm:gap-4" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Your team deserves better project management
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] leading-relaxed max-sm:text-[0.9rem]">
                        From sprint planning to delivery tracking — manage every project with clarity and confidence.
                    </p>
                    <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 mt-4 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Start Managing Projects
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
