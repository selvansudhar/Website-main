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
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">Project Plus</span>
                </div>
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
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                    {/* Left — Text */}
                    <div className="flex flex-col gap-6" data-animate="fade-up">
                        <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#056CB8]"></span>
                            <span className="text-[0.82rem] font-medium text-[#555555]">Project Management</span>
                        </div>
                        <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                            Deliver projects on time.<br />Every time.
                        </h1>
                        <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[520px] max-lg:mx-auto max-md:text-base max-sm:text-[0.9rem]">
                            Transform your project management with powerful tools for task tracking, team collaboration, and real-time insights. Keep your projects on schedule and your teams aligned.
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
                            Unlimited projects &nbsp;&bull;&nbsp; Real-time collaboration &nbsp;&bull;&nbsp; Get started free
                        </p>
                    </div>

                    {/* Right — Sprint Board Mockup */}
                    <div className="max-lg:mt-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e0e0e0] bg-[#f5f5f5]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]"></span>
                                <span className="ml-3 text-[0.7rem] font-semibold text-[#555555] tracking-wide uppercase">Project Plus — Sprint Board</span>
                            </div>

                            <div className="p-5 max-sm:p-4">
                                {/* Sprint Header */}
                                <div className="flex items-center justify-between mb-4 max-sm:mb-3">
                                    <div>
                                        <div className="text-[0.75rem] font-bold text-[#111111] max-sm:text-[0.68rem]">Sprint 14 — Website Redesign</div>
                                        <div className="text-[0.6rem] text-[#555555] mt-0.5">Mar 1 — Mar 14 &bull; 8 tasks</div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-5 h-5 rounded-full bg-[#056CB8] flex items-center justify-center"><span className="text-[0.4rem] font-bold text-white">PS</span></div>
                                        <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center"><span className="text-[0.4rem] font-bold text-white">AK</span></div>
                                        <div className="w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center"><span className="text-[0.4rem] font-bold text-white">RD</span></div>
                                        <div className="w-5 h-5 rounded-full bg-[#e0e0e0] flex items-center justify-center"><span className="text-[0.4rem] font-bold text-[#555555]">+2</span></div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-[#e0e0e0] rounded-full mb-4 max-sm:mb-3 overflow-hidden">
                                    <div className="flex h-full">
                                        <div className="bg-[#22c55e] h-full" style={{ width: '37.5%' }}></div>
                                        <div className="bg-[#056CB8] h-full" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mb-4 text-[0.55rem] font-medium text-[#555555] max-sm:mb-3">
                                    <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22c55e] mr-1"></span>Done 3</span>
                                    <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#056CB8] mr-1"></span>In Progress 2</span>
                                    <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e0e0e0] mr-1"></span>To Do 3</span>
                                </div>

                                {/* Task List */}
                                {[
                                    { title: 'Design homepage hero', tag: 'Design', status: 'done', assignee: 'PS', priority: 'High' },
                                    { title: 'Build navigation component', tag: 'Dev', status: 'done', assignee: 'AK', priority: 'High' },
                                    { title: 'API integration — auth', tag: 'Dev', status: 'progress', assignee: 'RD', priority: 'Medium' },
                                    { title: 'Content migration', tag: 'Content', status: 'todo', assignee: 'PS', priority: 'Low' },
                                ].map((task) => (
                                    <div key={task.title} className="flex items-center justify-between py-2 border-b border-[#e0e0e0] last:border-0">
                                        <div className="flex items-center gap-2.5">
                                            <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[0.5rem] ${
                                                task.status === 'done' ? 'bg-[#22c55e] border-[#22c55e] text-white' :
                                                task.status === 'progress' ? 'bg-[#056CB8] border-[#056CB8] text-white' :
                                                'border-[#d1d5db] text-transparent'
                                            }`}>&#10003;</span>
                                            <span className={`text-[0.72rem] font-medium max-sm:text-[0.65rem] ${task.status === 'done' ? 'text-[#555555] line-through' : 'text-[#111111]'}`}>{task.title}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[0.5rem] font-bold px-1.5 py-0.5 rounded ${
                                                task.priority === 'High' ? 'text-[#F60014] bg-[#F60014]/10' :
                                                task.priority === 'Medium' ? 'text-[#f59e0b] bg-[#f59e0b]/10' :
                                                'text-[#555555] bg-[#f5f5f5]'
                                            }`}>{task.priority}</span>
                                            <span className="text-[0.5rem] font-semibold text-[#056CB8] bg-[#056CB8]/8 px-1.5 py-0.5 rounded">{task.tag}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities — Horizontal Scroll Cards */}
            <section className="border-y border-[#e0e0e0] bg-[#f5f5f5]">
                <div className="max-w-[1400px] mx-auto px-12 py-24 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                        <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                            Everything you need to manage projects
                        </h2>
                        <p className="text-[1.05rem] text-[#555555] max-w-[560px] mx-auto max-sm:text-[0.9rem]">
                            Four powerful capabilities working together for seamless execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1" data-animate="fade-up">
                        {[
                            {
                                icon: 'bi-list-check',
                                title: 'Task Management',
                                desc: 'Create, assign, and track tasks with priorities, deadlines, and dependencies to keep projects moving forward.',
                                accent: '#056CB8',
                            },
                            {
                                icon: 'bi-people',
                                title: 'Team Collaboration',
                                desc: 'Built-in chat, file sharing, and real-time updates. Keep everyone on the same page, always.',
                                accent: '#8b5cf6',
                            },
                            {
                                icon: 'bi-clock-history',
                                title: 'Time Tracking',
                                desc: 'Monitor time on tasks and projects. Generate accurate timesheets and improve resource allocation.',
                                accent: '#f59e0b',
                            },
                            {
                                icon: 'bi-bar-chart-line-fill',
                                title: 'Project Analytics',
                                desc: 'Comprehensive dashboards and reports. Track progress, identify bottlenecks, and make data-driven decisions.',
                                accent: '#22c55e',
                            },
                        ].map((cap) => (
                            <div key={cap.title} className="bg-white border border-[#e0e0e0] rounded-md p-6 max-sm:p-5">
                                <div className="w-11 h-11 rounded-md flex items-center justify-center mb-5 shrink-0" style={{ backgroundColor: `${cap.accent}12` }}>
                                    <i className={`bi ${cap.icon} text-lg`} style={{ color: cap.accent }}></i>
                                </div>
                                <h3 className="text-[1rem] font-bold text-[#111111] mb-2">{cap.title}</h3>
                                <p className="text-[0.85rem] text-[#555555] leading-relaxed m-0">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Views — Unique Tabbed Preview */}
            <section className="max-w-[1400px] mx-auto px-12 py-32 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="text-center mb-16 max-sm:mb-10" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        See your projects the way you want
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] max-w-[560px] mx-auto max-sm:text-[0.9rem]">
                        Switch between views instantly — Board, List, Timeline, or Calendar.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1" data-animate="fade-up">
                    {/* Board View */}
                    <div className="border border-[#e0e0e0] rounded-md overflow-hidden">
                        <div className="bg-[#f5f5f5] px-5 py-3 border-b border-[#e0e0e0] flex items-center gap-2">
                            <i className="bi bi-list-check text-[#056CB8] text-sm"></i>
                            <span className="text-[0.75rem] font-bold text-[#111111] uppercase tracking-wider">Board View</span>
                        </div>
                        <div className="p-5 max-sm:p-4">
                            <div className="grid grid-cols-3 gap-3 max-sm:gap-2">
                                {[
                                    { col: 'To Do', color: '#e0e0e0', items: ['Research competitors', 'Write PRD'] },
                                    { col: 'In Progress', color: '#056CB8', items: ['UI mockups', 'API design'] },
                                    { col: 'Done', color: '#22c55e', items: ['Project setup', 'Team onboarding'] },
                                ].map((column) => (
                                    <div key={column.col}>
                                        <div className="flex items-center gap-1.5 mb-2.5">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: column.color }}></span>
                                            <span className="text-[0.6rem] font-bold text-[#111111] uppercase tracking-wider">{column.col}</span>
                                        </div>
                                        {column.items.map((item) => (
                                            <div key={item} className="bg-[#f5f5f5] border border-[#e0e0e0] rounded p-2.5 mb-2 last:mb-0">
                                                <span className="text-[0.68rem] font-medium text-[#111111] max-sm:text-[0.6rem]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline View */}
                    <div className="border border-[#e0e0e0] rounded-md overflow-hidden">
                        <div className="bg-[#f5f5f5] px-5 py-3 border-b border-[#e0e0e0] flex items-center gap-2">
                            <i className="bi bi-calendar-event-fill text-[#056CB8] text-sm"></i>
                            <span className="text-[0.75rem] font-bold text-[#111111] uppercase tracking-wider">Timeline View</span>
                        </div>
                        <div className="p-5 max-sm:p-4">
                            {/* Week headers */}
                            <div className="grid grid-cols-5 gap-0 mb-3 border-b border-[#e0e0e0] pb-2">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
                                    <span key={d} className="text-[0.55rem] font-semibold text-[#555555] text-center uppercase">{d}</span>
                                ))}
                            </div>
                            {/* Gantt bars */}
                            <div className="flex flex-col gap-3">
                                {[
                                    { task: 'Design phase', start: 0, span: 3, color: '#056CB8' },
                                    { task: 'Development', start: 1, span: 4, color: '#8b5cf6' },
                                    { task: 'Testing', start: 3, span: 2, color: '#22c55e' },
                                    { task: 'Deployment', start: 4, span: 1, color: '#f59e0b' },
                                ].map((bar) => (
                                    <div key={bar.task} className="flex items-center gap-2">
                                        <span className="text-[0.6rem] font-medium text-[#555555] w-16 shrink-0 truncate max-sm:text-[0.55rem] max-sm:w-12">{bar.task}</span>
                                        <div className="flex-1 relative h-5">
                                            <div
                                                className="absolute h-full rounded-sm"
                                                style={{
                                                    left: `${(bar.start / 5) * 100}%`,
                                                    width: `${(bar.span / 5) * 100}%`,
                                                    backgroundColor: bar.color,
                                                    opacity: 0.8,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* List View */}
                    <div className="border border-[#e0e0e0] rounded-md overflow-hidden">
                        <div className="bg-[#f5f5f5] px-5 py-3 border-b border-[#e0e0e0] flex items-center gap-2">
                            <i className="bi bi-file-earmark-text text-[#056CB8] text-sm"></i>
                            <span className="text-[0.75rem] font-bold text-[#111111] uppercase tracking-wider">List View</span>
                        </div>
                        <div className="p-5 max-sm:p-4">
                            {/* Table header */}
                            <div className="grid grid-cols-[1fr_60px_60px_50px] gap-2 pb-2 border-b border-[#e0e0e0] mb-2">
                                <span className="text-[0.55rem] font-bold text-[#555555] uppercase tracking-wider">Task</span>
                                <span className="text-[0.55rem] font-bold text-[#555555] uppercase tracking-wider">Status</span>
                                <span className="text-[0.55rem] font-bold text-[#555555] uppercase tracking-wider">Due</span>
                                <span className="text-[0.55rem] font-bold text-[#555555] uppercase tracking-wider">Owner</span>
                            </div>
                            {[
                                { task: 'Homepage design', status: 'Done', due: 'Mar 3', owner: 'PS', statusColor: '#22c55e' },
                                { task: 'Auth API', status: 'Active', due: 'Mar 7', owner: 'RD', statusColor: '#056CB8' },
                                { task: 'DB schema', status: 'Active', due: 'Mar 8', owner: 'AK', statusColor: '#056CB8' },
                                { task: 'Unit tests', status: 'To Do', due: 'Mar 12', owner: 'RD', statusColor: '#e0e0e0' },
                            ].map((row) => (
                                <div key={row.task} className="grid grid-cols-[1fr_60px_60px_50px] gap-2 py-1.5 border-b border-[#e0e0e0] last:border-0 items-center">
                                    <span className="text-[0.68rem] font-medium text-[#111111] max-sm:text-[0.6rem]">{row.task}</span>
                                    <span className="text-[0.55rem] font-bold px-1.5 py-0.5 rounded w-fit" style={{ color: row.statusColor, backgroundColor: `${row.statusColor}15` }}>{row.status}</span>
                                    <span className="text-[0.6rem] text-[#555555]">{row.due}</span>
                                    <div className="w-5 h-5 rounded-full bg-[#e0e0e0] flex items-center justify-center">
                                        <span className="text-[0.4rem] font-bold text-[#555555]">{row.owner}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Calendar View */}
                    <div className="border border-[#e0e0e0] rounded-md overflow-hidden">
                        <div className="bg-[#f5f5f5] px-5 py-3 border-b border-[#e0e0e0] flex items-center gap-2">
                            <i className="bi bi-calendar-check-fill text-[#056CB8] text-sm"></i>
                            <span className="text-[0.75rem] font-bold text-[#111111] uppercase tracking-wider">Calendar View</span>
                        </div>
                        <div className="p-5 max-sm:p-4">
                            <div className="text-[0.7rem] font-bold text-[#111111] mb-3">March 2026</div>
                            <div className="grid grid-cols-7 gap-1">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                    <span key={`h-${i}`} className="text-[0.5rem] font-bold text-[#555555] text-center pb-1">{d}</span>
                                ))}
                                {/* Empty cells for starting day */}
                                {[null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((day, i) => (
                                    <div key={`d-${i}`} className={`text-center py-1 rounded text-[0.55rem] ${
                                        day === 3 || day === 7 || day === 12 ? 'bg-[#056CB8]/10 text-[#056CB8] font-bold' :
                                        day === 14 ? 'bg-[#F60014]/10 text-[#F60014] font-bold' :
                                        day ? 'text-[#111111]' : ''
                                    }`}>
                                        {day || ''}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3 mt-3 pt-2 border-t border-[#e0e0e0]">
                                <span className="text-[0.5rem] text-[#555555]"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#056CB8] mr-0.5"></span> Milestone</span>
                                <span className="text-[0.5rem] text-[#555555]"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F60014] mr-0.5"></span> Deadline</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Teams Choose — Dark Section */}
            <section className="bg-[#111111] text-white">
                <div className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                    <div className="grid grid-cols-[1fr_1.2fr] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
                        {/* Left */}
                        <div data-animate="fade-left">
                            <h2 className="text-[2.2rem] font-extrabold tracking-[-0.02em] mb-6 max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                                Why teams choose<br />Zynex Project Plus
                            </h2>
                            <p className="text-[1.05rem] text-white/50 leading-relaxed mb-10 max-w-[460px] max-sm:text-[0.9rem] max-sm:mb-8">
                                Built for teams that need results, not complexity. Every feature is designed to reduce overhead and ship faster.
                            </p>
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 max-sm:gap-4">
                                {[
                                    { value: '60%', label: 'Less project delays' },
                                    { value: '3x', label: 'Faster reporting' },
                                    { value: '40%', label: 'More team output' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-[2rem] font-extrabold text-[#056CB8] leading-none max-sm:text-[1.6rem]">{stat.value}</div>
                                        <div className="text-[0.75rem] text-white/40 font-medium mt-1.5">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Benefits List */}
                        <div className="flex flex-col gap-0" data-animate="fade-right">
                            {[
                                { icon: 'bi-check-circle-fill', title: 'Deliver Projects On Schedule', desc: 'Clear dependencies, automated reminders, and real-time tracking reduce delays.' },
                                { icon: 'bi-people-fill', title: 'Boost Team Productivity', desc: 'Centralized tasks with clear ownership. Focus on execution, not coordination.' },
                                { icon: 'bi-clock-history', title: 'Save Time on Reporting', desc: 'Automated time tracking and progress updates eliminate manual status reports.' },
                                { icon: 'bi-sliders', title: 'Optimize Resources', desc: 'Visualize team workload and capacity. Balance assignments to prevent burnout.' },
                                { icon: 'bi-inbox-fill', title: 'Centralize Everything', desc: 'Documents, conversations, and updates in one place. No scattered files.' },
                                { icon: 'bi-graph-up', title: 'Improve Budget Control', desc: 'Track costs in real-time with integrated time and expense management.' },
                            ].map((item, idx) => (
                                <div key={item.title} className={`flex items-start gap-4 py-5 border-b border-white/10 ${idx === 0 ? 'border-t' : ''}`}>
                                    <i className={`bi ${item.icon} text-[#056CB8] text-base mt-0.5 shrink-0`}></i>
                                    <div>
                                        <h3 className="text-[0.95rem] font-bold mb-1">{item.title}</h3>
                                        <p className="text-[0.82rem] text-white/45 leading-relaxed m-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Showcase Section */}
            <section className="max-w-[1400px] mx-auto px-12 py-28 max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-12">
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
                    {/* Text */}
                    <div data-animate="fade-left">
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

                    <div className="w-full" data-animate="fade-right">
                        <Image src="/images/project-teams.webp" alt="Teams that ship" width={6300} height={2965} className="w-full h-auto object-contain" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-12 bg-white flex justify-center items-center w-full border-t border-[#e0e0e0] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[680px] w-full text-center flex flex-col items-center gap-6 max-sm:gap-4" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] tracking-[-0.02em] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Your team deserves better project management
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] leading-relaxed max-sm:text-[0.9rem]">
                        From sprint planning to delivery tracking — manage every project with clarity and confidence.
                    </p>
                    <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 mt-4 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Start Managing Projects
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
