import Image from 'next/image';

export const metadata = {
    title: 'YenAI — Your AI-Powered Digital Twin',
    description: 'Create an AI persona that talks, thinks, and responds like you. Let YenAI handle client conversations, meetings, and support — while you focus on what matters.',
    alternates: {
        canonical: 'https://zynex.ai/products/yenai',
    },
    openGraph: {
        title: 'YenAI — Your AI-Powered Digital Twin',
        description: 'Create an AI persona that talks, thinks, and responds like you. Let YenAI handle client conversations, meetings, and support.',
    },
};

export default function YenAI() {
    return (
        <div className="bg-white text-[#111111]">
            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32 max-md:px-6 max-md:pt-24 max-md:pb-12 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-[#555555]">Zynex AI</span>
                    <span className="text-[#e0e0e0]">/</span>
                    <span className="text-[#056CB8] uppercase">YenAI</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                        <span className="text-[0.82rem] font-medium text-[#555555]">New from Zynex</span>
                    </div>
                    <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-[#111111] tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                        You, But Always Available.
                    </h1>
                    <p className="text-[1.15rem] text-[#555555] leading-relaxed max-w-[520px] max-md:text-base max-sm:text-[0.9rem]">
                        YenAI learns how you talk, think, and respond — then handles conversations on your behalf. Clients get the experience of speaking with you, even when you&apos;re not there.
                    </p>
                    <div className="flex gap-4 mt-2 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                        <button className="bg-[#056CB8] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem]">
                            Create your AI twin
                        </button>
                        <button className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                            Watch demo
                        </button>
                    </div>
                    <p className="text-[0.78rem] text-[#888888] m-0">
                        99.2% voice accuracy &nbsp;&bull;&nbsp; 50+ languages &nbsp;&bull;&nbsp; Always available
                    </p>
                </div>

                {/* Hero Visual — Animated AI Scene */}
                <div className="relative flex items-center justify-center max-lg:mt-4">
                    <div className="relative w-[500px] h-[520px] max-md:w-[380px] max-md:h-[400px] max-sm:w-[300px] max-sm:h-[320px]">

                        {/* Dark scene background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#111111] rounded-2xl overflow-hidden">
                            {/* Grid pattern */}
                            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#056CB8 1px, transparent 1px), linear-gradient(90deg, #056CB8 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
                            {/* Multiple glow spots */}
                            <div className="absolute top-[15%] left-[40%] w-[240px] h-[240px] bg-[#056CB8]/8 rounded-full blur-[80px]"></div>
                            <div className="absolute top-[50%] left-[30%] w-[150px] h-[150px] bg-[#056CB8]/5 rounded-full blur-[50px]"></div>
                            {/* Subtle radial gradient overlay */}
                            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(5,108,184,0.06) 0%, transparent 70%)' }}></div>
                        </div>

                        {/* Robot Head */}
                        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 z-[3]">
                            {/* Head shape */}
                            <div className="w-[88px] h-[104px] bg-gradient-to-b from-[#f0f0f0] to-[#c8c8c8] rounded-t-[2.2rem] rounded-b-[1.2rem] relative mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-md:w-[72px] max-md:h-[84px] max-sm:w-[58px] max-sm:h-[68px]">
                                {/* Head highlight */}
                                <div className="absolute top-2 left-3 w-4 h-6 bg-white/20 rounded-full blur-sm max-sm:w-3 max-sm:h-4 max-sm:left-2"></div>
                                {/* Forehead panel */}
                                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-10 h-2 bg-[#d0d0d0] rounded-full max-sm:w-7 max-sm:h-1.5"></div>
                                {/* Eyes */}
                                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 flex gap-[18px] max-md:gap-[14px] max-sm:gap-[10px]">
                                    <div className="w-4 h-2.5 bg-[#056CB8] rounded-full shadow-[0_0_10px_rgba(5,108,184,0.7),0_0_20px_rgba(5,108,184,0.3)] yenai-typing-dot max-md:w-3 max-md:h-2 max-sm:w-2.5 max-sm:h-1.5"></div>
                                    <div className="w-4 h-2.5 bg-[#056CB8] rounded-full shadow-[0_0_10px_rgba(5,108,184,0.7),0_0_20px_rgba(5,108,184,0.3)] yenai-typing-dot max-md:w-3 max-md:h-2 max-sm:w-2.5 max-sm:h-1.5" style={{ animationDelay: '0.3s' }}></div>
                                </div>
                                {/* Nose ridge */}
                                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[2px] h-3 bg-[#bbb] rounded max-sm:h-2"></div>
                                {/* Mouth */}
                                <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-7 h-[2px] bg-[#056CB8]/30 rounded-full max-sm:w-5">
                                    <div className="absolute inset-0 bg-[#056CB8]/20 rounded-full yenai-bar" style={{ animationDelay: '1s' }}></div>
                                </div>
                                {/* Jaw line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-[#aaa]/30"></div>
                                {/* Ear pieces */}
                                <div className="absolute top-[32%] -left-3 w-3.5 h-6 bg-gradient-to-b from-[#444] to-[#222] rounded-l-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] max-sm:w-2.5 max-sm:h-4 max-sm:-left-2">
                                    <div className="absolute top-1/2 -translate-y-1/2 right-0.5 w-1 h-2 bg-[#056CB8]/40 rounded-full max-sm:w-0.5 max-sm:h-1.5"></div>
                                </div>
                                <div className="absolute top-[32%] -right-3 w-3.5 h-6 bg-gradient-to-b from-[#444] to-[#222] rounded-r-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] max-sm:w-2.5 max-sm:h-4 max-sm:-right-2">
                                    <div className="absolute top-1/2 -translate-y-1/2 left-0.5 w-1 h-2 bg-[#056CB8]/40 rounded-full max-sm:w-0.5 max-sm:h-1.5"></div>
                                </div>
                            </div>
                            {/* Neck */}
                            <div className="w-7 h-5 bg-gradient-to-b from-[#aaa] to-[#888] mx-auto rounded-b relative max-sm:w-5 max-sm:h-3">
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-[#777] max-sm:w-2"></div>
                            </div>
                        </div>

                        {/* Shoulders + Body */}
                        <div className="absolute top-[34%] left-1/2 -translate-x-1/2 z-[2]">
                            {/* Shoulders */}
                            <div className="w-36 h-5 bg-gradient-to-b from-[#d8d8d8] to-[#bbb] rounded-t-3xl mx-auto max-md:w-28 max-md:h-4 max-sm:w-24 max-sm:h-3"></div>
                            {/* Torso */}
                            <div className="w-32 h-24 bg-gradient-to-b from-[#d0d0d0] to-[#aaa] rounded-b-2xl relative mx-auto shadow-[0_4px_16px_rgba(0,0,0,0.2)] max-md:w-26 max-md:h-20 max-sm:w-22 max-sm:h-16">
                                {/* Chest arc reactor */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 max-sm:top-2.5">
                                    <div className="w-6 h-6 bg-[#0a1628] rounded-full flex items-center justify-center border border-[#056CB8]/40 max-sm:w-4 max-sm:h-4">
                                        <div className="w-3.5 h-3.5 bg-[#056CB8] rounded-full shadow-[0_0_12px_rgba(5,108,184,0.6),0_0_24px_rgba(5,108,184,0.3)] yenai-typing-dot max-sm:w-2.5 max-sm:h-2.5"></div>
                                    </div>
                                </div>
                                {/* Body panel lines */}
                                <div className="absolute top-14 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 items-center max-sm:top-10 max-sm:gap-1">
                                    <div className="w-14 h-[1px] bg-[#999] max-sm:w-10"></div>
                                    <div className="w-10 h-[1px] bg-[#999] max-sm:w-7"></div>
                                    <div className="w-6 h-[1px] bg-[#999] max-sm:w-4"></div>
                                </div>
                                {/* Side joint details */}
                                <div className="absolute top-6 -left-1.5 w-2 h-8 bg-[#888] rounded-full max-sm:w-1.5 max-sm:h-6 max-sm:top-4"></div>
                                <div className="absolute top-6 -right-1.5 w-2 h-8 bg-[#888] rounded-full max-sm:w-1.5 max-sm:h-6 max-sm:top-4"></div>
                            </div>
                        </div>

                        {/* Left Arm holding holographic tablet */}
                        <div className="absolute top-[40%] left-[8%] z-[4] max-sm:left-[4%]">
                            {/* Arm segment */}
                            <div className="w-3 h-14 bg-gradient-to-b from-[#bbb] to-[#999] rounded-full absolute -top-2 left-8 rotate-[15deg] max-md:h-10 max-sm:h-8 max-sm:left-6 max-sm:w-2"></div>
                            {/* Holographic tablet */}
                            <div className="relative mt-10 yenai-ring-1 max-md:mt-6 max-sm:mt-4">
                                <div className="w-32 h-24 bg-[#056CB8]/8 border border-[#056CB8]/25 rounded-lg backdrop-blur-sm p-3 relative overflow-hidden max-md:w-28 max-md:h-20 max-md:p-2 max-sm:w-22 max-sm:h-16 max-sm:p-1.5">
                                    {/* Holo shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#056CB8]/5 to-transparent"></div>
                                    {/* Mini chart bars */}
                                    <div className="flex items-end gap-1 h-[35%] mb-2 relative z-[1] max-sm:mb-1">
                                        {[35, 65, 50, 85, 60, 75, 45].map((h, i) => (
                                            <div key={i} className="flex-1 bg-[#056CB8]/40 rounded-sm yenai-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}></div>
                                        ))}
                                    </div>
                                    {/* Mini donut chart */}
                                    <div className="flex items-center gap-2 relative z-[1]">
                                        <div className="w-6 h-6 rounded-full border-2 border-[#056CB8]/30 relative max-sm:w-4 max-sm:h-4">
                                            <div className="absolute inset-[3px] rounded-full border-2 border-t-[#056CB8]/60 border-r-transparent border-b-transparent border-l-transparent yenai-ring-3 max-sm:inset-[2px]"></div>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <div className="w-10 h-[2px] bg-[#056CB8]/20 rounded max-sm:w-7"></div>
                                            <div className="w-7 h-[2px] bg-[#056CB8]/15 rounded max-sm:w-5"></div>
                                        </div>
                                    </div>
                                    {/* Data rows */}
                                    <div className="flex flex-col gap-1 mt-1.5 relative z-[1] max-sm:gap-0.5 max-sm:mt-1">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-[#09983A]/50"></div>
                                            <div className="w-full h-[1.5px] bg-[#056CB8]/15 rounded"></div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-[#056CB8]/50"></div>
                                            <div className="w-3/4 h-[1.5px] bg-[#056CB8]/15 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Arm — pointing up */}
                        <div className="absolute top-[36%] right-[14%] z-[3] max-sm:right-[10%]">
                            <div className="w-3 h-16 bg-gradient-to-b from-[#bbb] to-[#999] rounded-full rotate-[-20deg] max-md:h-12 max-sm:h-10 max-sm:w-2"></div>
                            {/* Hand */}
                            <div className="w-5 h-5 bg-[#ccc] rounded-full absolute -top-2 right-0 shadow-[0_0_8px_rgba(5,108,184,0.2)] max-sm:w-4 max-sm:h-4"></div>
                        </div>

                        {/* Laptop on desk */}
                        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-[2]">
                            {/* Screen */}
                            <div className="w-36 h-24 bg-[#12121f] border border-[#2a2a3a] rounded-t-md mx-auto relative overflow-hidden shadow-[0_0_20px_rgba(5,108,184,0.08)] max-md:w-32 max-md:h-20 max-sm:w-26 max-sm:h-16">
                                {/* Screen glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#056CB8]/5 to-transparent"></div>
                                {/* Screen content */}
                                <div className="p-2.5 flex flex-col gap-1.5 relative z-[1] max-sm:p-1.5 max-sm:gap-1">
                                    {/* Top bar */}
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="w-1 h-1 rounded-full bg-[#F60014]/50"></div>
                                        <div className="w-1 h-1 rounded-full bg-[#fbbf24]/50"></div>
                                        <div className="w-1 h-1 rounded-full bg-[#09983A]/50"></div>
                                        <div className="w-8 h-[1.5px] bg-white/10 rounded ml-1 max-sm:w-5"></div>
                                    </div>
                                    {/* Code/chat lines */}
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-[2px] bg-[#056CB8]/50 rounded"></div>
                                        <div className="w-12 h-[2px] bg-white/15 rounded max-sm:w-8"></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-[2px] bg-[#09983A]/40 rounded"></div>
                                        <div className="w-16 h-[2px] bg-white/10 rounded max-sm:w-10"></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-[2px] bg-[#056CB8]/50 rounded"></div>
                                        <div className="w-10 h-[2px] bg-white/15 rounded max-sm:w-7"></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-[2px] bg-[#09983A]/40 rounded"></div>
                                        <div className="w-14 h-[2px] bg-white/10 rounded yenai-bar max-sm:w-9" style={{ animationDelay: '0.5s' }}></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-[2px] bg-[#056CB8]/50 rounded"></div>
                                        <div className="w-8 h-[2px] bg-white/15 rounded max-sm:w-5"></div>
                                    </div>
                                </div>
                                {/* Blinking cursor */}
                                <div className="absolute bottom-2.5 left-[20%] w-[2px] h-3 bg-[#056CB8] yenai-typing-dot max-sm:bottom-2 max-sm:h-2"></div>
                            </div>
                            {/* Screen hinge */}
                            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#555] to-transparent mx-auto max-md:w-36 max-sm:w-30"></div>
                            {/* Keyboard */}
                            <div className="w-40 h-3 bg-gradient-to-b from-[#666] to-[#444] rounded-b-sm mx-auto relative max-md:w-36 max-sm:w-30 max-sm:h-2">
                                {/* Keyboard dots */}
                                <div className="absolute inset-x-2 top-1 flex gap-[3px] max-sm:gap-[2px] max-sm:inset-x-1.5 max-sm:top-0.5">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="flex-1 h-[1px] bg-[#555] rounded"></div>
                                    ))}
                                </div>
                            </div>
                            {/* Desk surface */}
                            <div className="w-56 h-1.5 bg-gradient-to-r from-[#2a2218] via-[#3a2f25] to-[#2a2218] mt-1.5 mx-auto rounded max-md:w-48 max-sm:w-40">
                                <div className="w-full h-[1px] bg-[#4a3f35] rounded"></div>
                            </div>
                            {/* Pencil holder */}
                            <div className="absolute -left-10 bottom-0 max-md:-left-8 max-sm:hidden">
                                <div className="w-5 h-7 bg-[#555] rounded-t-sm relative">
                                    <div className="absolute -top-3 left-0.5 w-[2px] h-4 bg-[#fbbf24] rotate-[-5deg] rounded-t"></div>
                                    <div className="absolute -top-4 left-2 w-[2px] h-5 bg-[#056CB8] rotate-[3deg] rounded-t"></div>
                                    <div className="absolute -top-2 left-3 w-[2px] h-3 bg-[#F60014] rotate-[8deg] rounded-t"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating idea nodes with labels */}
                        {[
                            { icon: 'bi-lightning-charge-fill', label: 'AI', top: '4%', left: '22%', delay: '0s' },
                            { icon: 'bi-diagram-3', label: 'Connect', top: '2%', left: '62%', delay: '0.8s' },
                            { icon: 'bi-people-fill', label: 'Teams', top: '20%', left: '82%', delay: '1.6s' },
                            { icon: 'bi-shield-fill-check', label: 'Secure', top: '14%', left: '2%', delay: '2.4s' },
                            { icon: 'bi-graph-up', label: 'Insights', top: '32%', left: '90%', delay: '1.2s' },
                            { icon: 'bi-headset', label: 'Support', top: '28%', left: '-4%', delay: '2s' },
                            { icon: 'bi-inbox-fill', label: 'Email', top: '8%', left: '42%', delay: '0.4s' },
                            { icon: 'bi-calendar-check-fill', label: 'Schedule', top: '22%', left: '50%', delay: '1.8s' },
                        ].map((node) => (
                            <div
                                key={node.icon}
                                className="absolute z-[5] animate-float max-sm:hidden"
                                style={{ top: node.top, left: node.left, animationDelay: node.delay }}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(5,108,184,0.1)]">
                                        <i className={`bi ${node.icon} text-white/70 text-sm`}></i>
                                    </div>
                                    <span className="text-[0.5rem] font-semibold text-white/30 uppercase tracking-wider">{node.label}</span>
                                </div>
                            </div>
                        ))}

                        {/* Connection lines — SVG */}
                        <svg className="absolute inset-0 z-[1] w-full h-full max-sm:hidden" viewBox="0 0 500 520" fill="none">
                            {/* Lines from nodes to robot center */}
                            {[
                                { x1: 130, y1: 40, x2: 230, y2: 100, dur: '2s' },
                                { x1: 340, y1: 30, x2: 270, y2: 100, dur: '2.5s' },
                                { x1: 435, y1: 120, x2: 310, y2: 160, dur: '1.8s' },
                                { x1: 30, y1: 95, x2: 180, y2: 140, dur: '2.2s' },
                                { x1: 470, y1: 190, x2: 320, y2: 200, dur: '2.8s' },
                                { x1: 10, y1: 170, x2: 180, y2: 180, dur: '2.4s' },
                                { x1: 230, y1: 60, x2: 250, y2: 100, dur: '1.5s' },
                                { x1: 275, y1: 135, x2: 260, y2: 155, dur: '1.6s' },
                            ].map((line, i) => (
                                <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="rgba(5,108,184,0.12)" strokeWidth="1" strokeDasharray="4 6">
                                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur={line.dur} repeatCount="indefinite" />
                                </line>
                            ))}
                            {/* Circular arcs around head — idea orbits */}
                            <circle cx="250" cy="110" r="80" fill="none" stroke="rgba(5,108,184,0.06)" strokeWidth="1" strokeDasharray="3 8">
                                <animateTransform attributeName="transform" type="rotate" from="0 250 110" to="360 250 110" dur="20s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="250" cy="110" r="120" fill="none" stroke="rgba(5,108,184,0.04)" strokeWidth="1" strokeDasharray="2 10">
                                <animateTransform attributeName="transform" type="rotate" from="360 250 110" to="0 250 110" dur="25s" repeatCount="indefinite" />
                            </circle>
                        </svg>

                        {/* Floating stat tags */}
                        <div className="absolute bottom-[28%] right-[3%] z-[5] bg-white/8 backdrop-blur-sm border border-white/12 rounded-md py-2 px-3 animate-float max-sm:hidden" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#056CB8] yenai-typing-dot"></div>
                                <span className="text-[0.65rem] font-bold text-[#056CB8]">99.2% match</span>
                            </div>
                        </div>
                        <div className="absolute bottom-[34%] left-[2%] z-[5] bg-white/8 backdrop-blur-sm border border-white/12 rounded-md py-2 px-3 animate-float max-sm:hidden" style={{ animationDelay: '1.8s' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#09983A] yenai-typing-dot" style={{ animationDelay: '0.5s' }}></div>
                                <span className="text-[0.65rem] font-semibold text-[#09983A]">Active now</span>
                            </div>
                        </div>
                        <div className="absolute top-[48%] right-[6%] z-[5] bg-white/8 backdrop-blur-sm border border-white/12 rounded-md py-2 px-3 animate-float max-sm:hidden" style={{ animationDelay: '1.2s' }}>
                            <span className="text-[0.6rem] font-semibold text-white/50">847 patterns</span>
                        </div>

                        {/* Particle dots scattered */}
                        {[
                            { top: '6%', left: '10%', size: 'w-1 h-1', delay: '0s' },
                            { top: '12%', left: '88%', size: 'w-1.5 h-1.5', delay: '0.5s' },
                            { top: '45%', left: '95%', size: 'w-1 h-1', delay: '1s' },
                            { top: '55%', left: '3%', size: 'w-1 h-1', delay: '1.5s' },
                            { top: '70%', left: '85%', size: 'w-1.5 h-1.5', delay: '2s' },
                            { top: '65%', left: '8%', size: 'w-1 h-1', delay: '0.8s' },
                            { top: '15%', left: '50%', size: 'w-1 h-1', delay: '1.3s' },
                            { top: '38%', left: '5%', size: 'w-1 h-1', delay: '1.7s' },
                        ].map((dot, i) => (
                            <div
                                key={i}
                                className={`absolute ${dot.size} rounded-full bg-[#056CB8]/30 yenai-typing-dot z-[1] max-sm:hidden`}
                                style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
                            ></div>
                        ))}
                    </div>
                </div>
                </div>
            </section>

            {/* How It Works — Persona Setup */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[900px] mx-auto mb-20 max-sm:mb-12">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-4">
                        Teach it once. Let it speak forever.
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                        Building your AI twin takes minutes, not months. Answer a few questions, upload some examples, and YenAI captures the way you communicate.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8 max-w-[1400px] mx-auto max-lg:grid-cols-1 max-sm:gap-6">
                    {[
                        {
                            step: '01',
                            title: 'Define Your Personality',
                            desc: 'Tell YenAI how you speak — formal or casual, direct or diplomatic, technical or simple. Set your communication style, preferred greetings, and sign-off tone.',
                            icon: 'bi bi-person-check',
                        },
                        {
                            step: '02',
                            title: 'Feed Your Knowledge',
                            desc: 'Upload past emails, chat logs, call transcripts, and FAQs. YenAI learns your domain expertise, common responses, and the way you handle different situations.',
                            icon: 'bi bi-file-earmark-text',
                        },
                        {
                            step: '03',
                            title: 'Set Your Boundaries',
                            desc: 'Define what your AI twin can and cannot do. Approve sensitive topics for human handoff, set response limits, and choose which channels it operates on.',
                            icon: 'bi bi-shield-check',
                        },
                    ].map((item) => (
                        <div key={item.step} className="relative bg-white rounded-md p-8 border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-6">
                            <div className="text-[4rem] font-extrabold text-[#f5f5f5] absolute top-4 right-6 leading-none max-sm:text-[3rem]">{item.step}</div>
                            <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center mb-6 max-sm:w-10 max-sm:h-10 max-sm:mb-4">
                                <i className={`${item.icon} text-xl text-white max-sm:text-lg`}></i>
                            </div>
                            <h3 className="text-[1.2rem] font-bold text-[#111111] mb-3 max-sm:text-[1.05rem]">{item.title}</h3>
                            <p className="text-[0.9rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-28 px-12 bg-white max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                    What your AI twin can do
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[800px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12">
                    From live chat to email replies — your AI persona handles it all, in your voice
                </p>

                <div className="grid grid-cols-2 gap-6 max-w-[1200px] mx-auto max-md:grid-cols-1">
                    {[
                        {
                            icon: 'bi bi-headset',
                            title: 'Live Client Conversations',
                            desc: 'Your AI twin joins live chats, answers questions, negotiates timelines, and follows up — all matching your tone and decision-making style.',
                            tag: 'Real-time',
                        },
                        {
                            icon: 'bi bi-inbox-fill',
                            title: 'Email & Message Replies',
                            desc: 'Drafts and sends email responses that sound exactly like you. Handles scheduling, confirmations, follow-ups, and even polite declines.',
                            tag: 'Async',
                        },
                        {
                            icon: 'bi bi-activity',
                            title: 'Voice Call Handling',
                            desc: 'Answer incoming calls with your AI voice clone. It greets callers, takes messages, answers FAQs, and escalates when needed — 24/7.',
                            tag: 'Voice',
                        },
                        {
                            icon: 'bi bi-calendar-check-fill',
                            title: 'Meeting Scheduling',
                            desc: 'Coordinates availability, proposes meeting times, sends calendar invites, and handles rescheduling — just like a personal assistant who knows your preferences.',
                            tag: 'Scheduling',
                        },
                        {
                            icon: 'bi bi-file-earmark-text',
                            title: 'Proposal & Quote Generation',
                            desc: 'Generates proposals, estimates, and quotes based on your pricing rules and past deals. Reviews with you before sending, or auto-sends within approved ranges.',
                            tag: 'Documents',
                        },
                        {
                            icon: 'bi bi-diagram-3',
                            title: 'Smart Handoff to You',
                            desc: 'Knows when to stop and involve the real you. Flags sensitive conversations, high-value deals, or edge cases — with full context so you pick up seamlessly.',
                            tag: 'Escalation',
                        },
                    ].map((cap) => (
                        <div key={cap.title} className="flex gap-5 p-6 bg-white border border-[#e0e0e0] rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#111111] max-sm:p-5 max-sm:gap-4 max-sm:flex-col">
                            <div className="w-11 h-11 bg-[#f5f5f5] rounded-lg flex items-center justify-center shrink-0 text-[#111111]">
                                <i className={`${cap.icon} text-lg`}></i>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-[1rem] font-bold text-[#111111] max-sm:text-[0.95rem]">{cap.title}</h3>
                                    <span className="text-[0.65rem] font-bold text-[#111111] bg-[#f5f5f5] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#e0e0e0]">{cap.tag}</span>
                                </div>
                                <p className="text-[0.9rem] text-[#555555] leading-[1.7] max-sm:text-[0.8rem]">{cap.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                    Built for people who can&apos;t be everywhere
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[800px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12">
                    From solo founders to enterprise sales leaders — YenAI scales your presence
                </p>

                <div className="grid grid-cols-3 gap-8 max-w-[1400px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-6">
                    {[
                        {
                            persona: 'Founder / CEO',
                            icon: 'bi bi-lightning-charge-fill',
                            title: 'Never miss a lead again',
                            desc: 'A SaaS founder trained YenAI on 2 years of sales emails and pitch decks. Now inbound leads get instant, personalized responses at 2 AM — in the founder\'s exact voice.',
                            result: 'Response time dropped from 8 hours to 12 seconds',
                        },
                        {
                            persona: 'Consultant',
                            icon: 'bi bi-people',
                            title: 'Scale without hiring',
                            desc: 'A management consultant created an AI twin that handles initial client discovery calls. It asks the right questions, takes notes, and schedules the real meeting — freeing up 15 hours per week.',
                            result: 'Client capacity increased 3x without new hires',
                        },
                        {
                            persona: 'Sales Team Lead',
                            icon: 'bi bi-graph-up-arrow',
                            title: 'Consistent team performance',
                            desc: 'A VP of Sales created YenAI personas for their top 3 reps. New team members use these AI twins to learn objection handling, pricing conversations, and closing techniques in real scenarios.',
                            result: 'New rep ramp time cut from 90 days to 30',
                        },
                    ].map((card) => (
                        <div key={card.title} className="bg-white rounded-md overflow-hidden border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                            <div className="bg-[#111111] px-6 py-3.5 flex items-center gap-3">
                                <i className={`${card.icon} text-white text-sm`}></i>
                                <span className="text-xs font-bold text-white uppercase tracking-[0.05em]">{card.persona}</span>
                            </div>
                            <div className="p-7 flex flex-col gap-4 max-sm:p-5 max-sm:gap-3">
                                <h3 className="text-[1.15rem] font-bold text-[#111111] leading-[1.3] max-sm:text-[1.05rem]">{card.title}</h3>
                                <p className="text-[0.9rem] text-[#555555] leading-[1.7] max-sm:text-[0.85rem]">{card.desc}</p>
                                <div className="mt-2 p-4 bg-[#f5f5f5] border-l-[3px] border-[#111111] rounded-sm text-[0.85rem] text-[#111111] max-sm:p-3 max-sm:text-[0.8rem]">
                                    <strong className="font-bold">Result:</strong> {card.result}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-12 bg-white max-md:py-12 max-md:px-6 max-sm:py-10 max-sm:px-4">
                <div className="grid grid-cols-4 gap-12 max-w-[1000px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-6">
                    {[
                        { number: '99.2%', label: 'Voice accuracy match' },
                        { number: '<2s', label: 'Average response time' },
                        { number: '50+', label: 'Languages supported' },
                        { number: '24/7', label: 'Always available' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-[2.2rem] font-extrabold text-[#111111] mb-1 max-sm:text-[1.8rem]">{stat.number}</div>
                            <div className="text-[0.85rem] text-[#555555] font-semibold max-sm:text-[0.8rem]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust / Privacy */}
            <section className="py-24 px-12 bg-[#f5f5f5] border-t border-[#e0e0e0] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-[1.8rem] font-extrabold text-[#111111] mb-6 max-sm:text-[1.5rem] max-sm:mb-4">
                        Your voice, your rules, your data
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.8] mb-12 max-sm:text-[0.95rem] max-sm:mb-8">
                        YenAI is built with privacy at its core. Your persona data is encrypted, never shared, and you control exactly what your AI twin can access and say.
                    </p>
                    <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {[
                            { icon: 'bi bi-lock-fill', label: 'End-to-end encrypted' },
                            { icon: 'bi bi-shield-fill-check', label: 'Private by default' },
                            { icon: 'bi bi-sliders', label: 'Full control over responses' },
                            { icon: 'bi bi-arrow-counterclockwise', label: 'Delete anytime, instantly' },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center gap-4 p-6 bg-white border border-[#e0e0e0] rounded-md max-sm:p-4 max-sm:gap-3">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#f5f5f5] text-[#111111]">
                                    <i className={`${item.icon} text-lg`}></i>
                                </div>
                                <span className="text-[0.9rem] font-semibold text-[#555555] text-center max-sm:text-[0.8rem]">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Block with wave background */}
            <section className="relative py-40 px-12 overflow-hidden max-md:py-24 max-md:px-6 max-sm:py-16 max-sm:px-4">
                <Image
                    src="/images/ai-wave-bg.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    aria-hidden="true"
                    quality={80}
                />
                <div className="absolute inset-0 bg-[#0f172a]/70"></div>
                <div className="relative z-10 text-center max-w-[800px] mx-auto">
                    <h2 className="text-[2.2rem] font-extrabold text-white mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Ready to clone yourself?
                    </h2>
                    <p className="text-[1.1rem] text-white/80 leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem]">
                        Create your AI twin in under 10 minutes. Start handling conversations, emails, and calls — while you focus on the work that matters most.
                    </p>
                    <button className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem]">
                        Create your AI twin
                    </button>
                </div>
            </section>
        </div>
    );
}
