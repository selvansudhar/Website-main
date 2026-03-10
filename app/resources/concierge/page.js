"use client";

import { useState } from 'react';

const benefits = [
  {
    icon: 'bi-person-check',
    title: 'Personalized Module Mapping',
    desc: 'We match your workflows to the right Zynex modules — Finance Plus, CRM Lite, HR, Project Plus, or any combination your business actually needs.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Integration Blueprint',
    desc: 'Already using Salesforce, SAP, or Slack? We map how Zynex fits into your existing stack without disrupting what works.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Industry-Specific Guidance',
    desc: 'Healthcare compliance, manufacturing workflows, financial regulations — our experts understand the constraints of your industry.',
  },
  {
    icon: 'bi-graph-up',
    title: 'Growth Roadmap',
    desc: 'Start with what you need today and get a phased plan for adding modules as your team and business scale.',
  },
];

const notIncluded = [
  'No sales pitches or pressure',
  'No product demos you didn\'t ask for',
  'No commitment required',
  'No hidden fees — ever',
];

const included = [
  'Honest, tailored recommendations',
  'Module-by-module breakdown',
  'Integration feasibility review',
  'Written summary after every call',
];

const steps = [
  {
    num: '1',
    title: 'Tell Us About Your Business',
    desc: 'Fill out a short form about your team size, industry, current tools, and the challenges you want to solve. Takes under 3 minutes.',
  },
  {
    num: '2',
    title: 'Talk to a Zynex Expert',
    desc: 'A product specialist (not a salesperson) reviews your needs and walks you through which modules and configurations make sense for your workflows.',
  },
  {
    num: '3',
    title: 'Get Your Personalized Roadmap',
    desc: 'Receive a written recommendation with your ideal module stack, integration plan, estimated timeline, and next steps — all within 48 hours.',
  },
];

const testimonials = [
  {
    quote: 'We were overwhelmed trying to compare 6 different tools. The Concierge team mapped our exact needs in a 30-minute call and we deployed Finance Plus and CRM Lite the same week.',
    name: 'Priya Sharma',
    role: 'Operations Director, NexaTech',
    result: 'Deployed in 5 days',
  },
  {
    quote: 'They didn\'t try to sell us modules we didn\'t need. They actually told us to skip two products and start with three. That honesty earned our trust — and our business.',
    name: 'Marcus Weber',
    role: 'CTO, BrightPath Health',
    result: '3 modules, zero waste',
  },
  {
    quote: 'Our university needed FERPA-compliant tools that worked with our existing SIS. The Concierge team built a custom integration roadmap that our IT department loved.',
    name: 'Dr. Lisa Okonkwo',
    role: 'VP of Technology, Meridian University',
    result: 'Full compliance on day one',
  },
];

const faqs = [
  {
    q: 'Is Zynex Concierge really free?',
    a: 'Yes, completely free — no credit card, no contract, no obligation. We believe that when you get the right setup, you stay. That\'s our incentive.',
  },
  {
    q: 'How long is the consultation call?',
    a: 'Typically 20-30 minutes. We keep it focused and efficient. If your setup is complex (multi-department, multi-location), we may schedule a follow-up.',
  },
  {
    q: 'Who will I be talking to?',
    a: 'A Zynex product specialist — someone who knows the platform deeply and has helped hundreds of businesses find the right configuration. Not a sales rep reading a script.',
  },
  {
    q: 'What should I prepare before the call?',
    a: 'Think about: (1) What tools you currently use and what frustrates you, (2) Your team size and departments involved, (3) Any compliance or security requirements. That\'s it.',
  },
  {
    q: 'Can I get recommendations without a call?',
    a: 'Yes. Fill out the consultation form with enough detail and we\'ll email you a written recommendation within 48 hours. Some businesses prefer async — that\'s fine.',
  },
  {
    q: 'What if I\'m already using some Zynex modules?',
    a: 'Even better. We\'ll review your current setup, identify gaps, and suggest optimizations or additional modules that integrate with what you already have.',
  },
];

const industries = [
  { name: 'Healthcare', icon: 'bi-activity' },
  { name: 'Financial Services', icon: 'bi-bar-chart-line-fill' },
  { name: 'Manufacturing', icon: 'bi-sliders' },
  { name: 'Higher Education', icon: 'bi-people' },
  { name: 'Retail & Commerce', icon: 'bi-star-fill' },
];

export default function Concierge() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-white pt-40 max-md:pt-24 pb-24 px-6 max-[480px]:px-4 max-[480px]:pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-[#555555] mb-8">Home / Resources / Concierge</p>
          <span className="inline-block bg-[#056CB8]/10 text-[#056CB8] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            FREE CONSULTATION
          </span>
          <h1 className="text-[3rem] font-bold text-[#111111] leading-[1.1] mb-6 max-md:text-[2.2rem] max-[480px]:text-[1.7rem]">
            Stop Guessing.<br />Get Your Perfect Zynex Stack.
          </h1>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            With 9 modules and endless configurations, choosing the right setup can feel overwhelming.
            Let our experts do the thinking — tell us your challenges and we'll recommend exactly what you need.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-6">
            <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Book Free Consultation
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#f5f5f5] transition-colors">
              See How It Works
            </a>
          </div>
          <p className="text-xs text-[#555555]">
            No sales pitch &nbsp;&bull;&nbsp; No commitment &nbsp;&bull;&nbsp; 100% free
          </p>
        </div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6 max-[480px]:px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold">2,500+</p>
            <p className="text-xs text-white/80 uppercase tracking-wider mt-1">Businesses Guided</p>
          </div>
          <div>
            <p className="text-2xl font-bold">92%</p>
            <p className="text-xs text-white/80 uppercase tracking-wider mt-1">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-white/80 uppercase tracking-wider mt-1">Free, Always</p>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET / WHAT YOU DON'T ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem] max-[480px]:text-[1.4rem] max-[480px]:mb-10">
            Honest Guidance, Not a Sales Call
          </h2>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {/* What you get */}
            <div className="bg-white border border-[#e0e0e0] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e0e0e0]">
                <i className="bi bi-check-circle-fill text-[#22c55e] text-lg"></i>
                <h3 className="text-lg font-bold text-[#111111]">What You Get</h3>
              </div>
              <div className="flex flex-col gap-4">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className="bi bi-check-circle-fill text-[#22c55e] text-sm flex-shrink-0"></i>
                    <span className="text-sm text-[#111111] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What you don't */}
            <div className="bg-white border border-[#e0e0e0] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e0e0e0]">
                <i className="bi bi-exclamation-triangle text-[#F60014] text-lg"></i>
                <h3 className="text-lg font-bold text-[#111111]">What You Won't Get</h3>
              </div>
              <div className="flex flex-col gap-4">
                {notIncluded.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className="bi bi-exclamation-triangle text-[#F60014]/60 text-sm flex-shrink-0"></i>
                    <span className="text-sm text-[#555555] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CONCIERGE ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
            Why Zynex Concierge?
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Skip the months of trial and error. Get expert guidance tailored to your business from day one.
          </p>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="border border-[#e0e0e0] p-8 hover:border-[#056CB8] transition-colors">
                <div className="w-11 h-11 bg-[#056CB8]/10 flex items-center justify-center mb-4">
                  <i className={`bi ${b.icon} text-lg text-[#056CB8]`}></i>
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{b.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="bg-[#111111] text-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-center mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
            How It Works
          </h2>
          <p className="text-white/60 text-center mb-16">Three steps. Zero pressure. Total clarity.</p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < 2 && (
                  <div className="absolute top-8 left-full w-full h-px bg-white/10 max-md:hidden" style={{ left: 'calc(100% + 8px)', width: 'calc(100% - 16px)' }}></div>
                )}
                <div className="bg-white/5 border border-white/10 p-8">
                  <div className="w-12 h-12 bg-[#056CB8] flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-white">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Book Your Free Call
            </a>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
            We Speak Your Industry
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Our specialists have guided businesses across these verticals — they understand your compliance needs, workflows, and pain points.
          </p>

          <div className="grid grid-cols-5 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6 text-center hover:border-[#056CB8] transition-colors">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mx-auto mb-3">
                  <i className={`bi ${ind.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <p className="text-sm font-bold text-[#111111]">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem] max-[480px]:text-[1.4rem] max-[480px]:mb-10">
            What Businesses Are Saying
          </h2>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-8 flex flex-col">
                <p className="text-6xl text-[#056CB8]/15 font-serif leading-none mb-2">&ldquo;</p>
                <p className="text-sm text-[#111111] italic leading-relaxed mb-6 flex-1">{t.quote}</p>
                <div className="pt-4 border-t border-[#e0e0e0] flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-bold text-[#111111]">{t.name}</p>
                    <p className="text-xs text-[#555555]">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#056CB8] bg-[#056CB8]/10 px-3 py-1 uppercase tracking-wider w-fit">
                    {t.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#555555] text-center mb-16">Everything you need to know before booking</p>

          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border border-[#e0e0e0] border-t-0 first:border-t overflow-hidden transition-colors ${openFaq === i ? 'bg-[#f5f5f5]' : 'bg-white'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="text-sm font-bold text-[#111111] pr-4">{faq.q}</span>
                  <span className={`text-[#555555] text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="px-6 pb-6 text-sm text-[#555555] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
            Your Perfect Setup Is One Conversation Away
          </h2>
          <p className="text-white/60 mb-8">
            2,500+ businesses have found their ideal Zynex stack through Concierge. Book your free consultation today — no strings attached.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
            Book Free Consultation
          </a>
          <p className="text-white/40 text-xs mt-6">Average call: 25 minutes &nbsp;&bull;&nbsp; Written recommendation within 48 hours</p>
        </div>
      </section>
    </div>
  );
}
