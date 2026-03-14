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
            <section className="bg-gradient-to-r from-[#303f97] via-[#516adb] to-[#6b8ff0] pt-40 pb-40 max-md:pt-24 max-md:pb-20">
                <div className="max-w-[1400px] mx-auto px-12 max-md:px-6 max-sm:px-4">
                {/* Nav Trail */}
                <div className="flex items-center gap-3 mb-8 text-xs font-medium tracking-wide max-sm:text-[0.65rem] max-sm:gap-2 max-sm:mb-4">
                    <span className="text-white/60">Zynex AI</span>
                    <span className="text-white/30">/</span>
                    <span className="text-white uppercase">YenAI</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-lg:grid-cols-1 max-lg:text-center max-md:gap-10 max-sm:gap-8">
                <div className="flex flex-col gap-6" data-animate="fade-up">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-[100px] px-4 py-1.5 w-fit max-lg:mx-auto max-sm:px-3 max-sm:py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        <span className="text-[0.82rem] font-medium text-white/80">New from Zynex</span>
                    </div>
                    <h1 className="text-[2.8rem] font-extrabold leading-[1.08] text-white tracking-[-0.03em] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                        You, But Always Available.
                    </h1>
                    <p className="text-[1.15rem] text-white/75 leading-relaxed max-w-[520px] max-md:text-base max-sm:text-[0.9rem]">
                        YenAI learns how you talk, think, and respond — then handles conversations on your behalf. Clients get the experience of speaking with you, even when you&apos;re not there.
                    </p>
                    <div className="flex gap-4 mt-2 max-lg:justify-center max-sm:flex-col max-sm:items-center">
                        <button className="bg-white text-[#4a6cc9] border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-300 uppercase tracking-[0.05em] hover:bg-white/90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                            Create your AI twin
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                        <button className="bg-transparent text-white border-2 border-white/30 px-8 py-3.5 rounded-none text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-3 w-fit transition-all duration-200 hover:border-white/60 max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                            Watch demo
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                    </div>
                    <p className="text-[0.78rem] text-white/50 m-0">
                        99.2% voice accuracy &nbsp;&bull;&nbsp; 50+ languages &nbsp;&bull;&nbsp; Always available
                    </p>
                </div>

                {/* Hero Visual */}
                <div className="relative flex items-end justify-center max-lg:mt-4 overflow-hidden" data-animate="fade-up" data-delay="2">
                    <Image src="/images/yenai-banner.webp" alt="YenAI - AI assistant across devices" width={1536} height={1024} className="w-full h-auto scale-105 origin-bottom" priority sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                </div>
                </div>
            </section>
            {/* How It Works — Persona Setup */}
            <section className="py-28 px-12 bg-[#f5f5f5] max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
                <div className="text-center max-w-[900px] mx-auto mb-20 max-sm:mb-12" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-4">
                        Teach it once. Let it speak forever.
                    </h2>
                    <p className="text-[1.1rem] text-[#555555] leading-[1.7] max-md:text-base max-sm:text-[0.9rem]">
                        Building your AI twin takes minutes, not months. Answer a few questions, upload some examples, and YenAI captures the way you communicate.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8 max-w-[1400px] mx-auto max-lg:grid-cols-1 max-sm:gap-6" data-animate="fade-up">
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
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                    What your AI twin can do
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[800px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12" data-animate="fade-up">
                    From live chat to email replies — your AI persona handles it all, in your voice
                </p>

                <div className="grid grid-cols-2 gap-6 max-w-[1200px] mx-auto max-md:grid-cols-1" data-animate="fade-up">
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
                <h2 className="text-[2.2rem] font-extrabold text-[#111111] mb-6 tracking-[-0.02em] leading-[1.2] text-center max-md:text-[1.8rem] max-sm:text-[1.5rem]" data-animate="fade-up">
                    Built for people who can&apos;t be everywhere
                </h2>
                <p className="text-[1.1rem] text-[#555555] leading-[1.7] text-center max-w-[800px] mx-auto mb-20 max-md:text-base max-sm:text-[0.9rem] max-sm:mb-12" data-animate="fade-up">
                    From solo founders to enterprise sales leaders — YenAI scales your presence
                </p>

                <div className="grid grid-cols-3 gap-8 max-w-[1400px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-6" data-animate="fade-up">
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
                    <h2 className="text-[1.8rem] font-extrabold text-[#111111] mb-6 max-sm:text-[1.5rem] max-sm:mb-4" data-animate="fade-up">
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
                <div className="relative z-10 text-center max-w-[800px] mx-auto" data-animate="fade-up">
                    <h2 className="text-[2.2rem] font-extrabold text-white mb-6 tracking-[-0.02em] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                        Ready to clone yourself?
                    </h2>
                    <p className="text-[1.1rem] text-white/80 leading-[1.7] mb-10 max-md:text-base max-sm:text-[0.9rem]">
                        Create your AI twin in under 10 minutes. Start handling conversations, emails, and calls — while you focus on the work that matters most.
                    </p>
                    <button className="bg-[#F60014] text-white border-0 px-10 py-4 rounded-none text-[0.95rem] font-bold cursor-pointer inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-8 max-sm:py-3 max-sm:text-[0.8rem] group">
                        Create your AI twin
                     <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></button>
                </div>
            </section>
        </div>
    );
}
