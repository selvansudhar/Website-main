import CapabilitySelector from './CapabilitySelector';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'AI Solutions | Zynex',
  description: 'Enterprise AI capabilities including generative AI, intelligent automation, predictive analytics, and conversational interfaces.',
  alternates: { canonical: 'https://zynex.ai/solutions/ai-solutions' },
  openGraph: {
    title: 'AI Solutions | Zynex',
    description: 'Enterprise AI capabilities including generative AI, intelligent automation, predictive analytics, and conversational interfaces.',
  },
};

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://zynex.ai/solutions" },
          { "@type": "ListItem", "position": 3, "name": "AI Solutions" }
        ]
      }) }} />

      {/* ===== DARK HERO WITH AI DASHBOARD ===== */}
      <section className="bg-[#111111] text-white pt-40 pb-32 px-6 max-md:pt-24 max-md:pb-16 max-sm:pb-12 max-sm:px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Solutions / AI Solutions</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-6" data-animate="fade-up">
              <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 w-fit">
                AI SOLUTIONS
              </span>
              <h1 className="text-[3rem] font-bold leading-[1.1] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
                Deploy Production-Ready AI in Weeks, Not Years
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-sm:text-base">
                From generative models to predictive analytics — Zynex AI adapts to your
                data, your workflows, and your industry. Enterprise-grade intelligence
                that compounds over time.
              </p>
              <div className="flex gap-4 flex-wrap mt-2 max-sm:flex-col max-sm:items-start">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                  Start Building with AI
                </a>
                <a href="/resources/developers" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]">
                  Watch Platform Demo
                </a>
              </div>
              <p className="text-white/40 text-sm mt-2">Trusted by 300+ enterprise teams</p>
            </div>

            {/* AI Model Dashboard Mockup */}
            <div className="bg-white/5 border border-white/10 p-6 max-lg:max-w-lg" data-animate="fade-right">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-white/80">AI Model Dashboard</span>
                <span className="flex items-center gap-2 text-xs text-[#22c55e]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span> Active
                </span>
              </div>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { model: 'NLP Engine v3.2', accuracy: '99.4%', status: 'Active', color: 'text-[#22c55e]' },
                  { model: 'Vision Model v2.1', accuracy: '97.8%', status: 'Active', color: 'text-[#22c55e]' },
                  { model: 'Prediction Engine v4.0', accuracy: '96.2%', status: 'Training', color: 'text-yellow-400' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-b-0">
                    <span className="text-sm text-white/70">{m.model}</span>
                    <span className="text-xs text-white/50">{m.accuracy}</span>
                    <span className={`text-xs font-semibold ${m.color}`}>{m.status}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-xs text-white/40 mb-1">Queries/Day</p>
                  <p className="text-sm font-bold text-white/90">1.2M</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 mb-1">Avg Latency</p>
                  <p className="text-sm font-bold text-white/90">12ms</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 mb-1">Models</p>
                  <p className="text-sm font-bold text-white/90">40+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS RIBBON ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-8 text-center" data-animate="fade-in">
          {[
            { value: '10x', label: 'Faster Deployment' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '40+', label: 'Pre-trained Models' },
            { value: '300%', label: 'Average ROI' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold"><CountUp value={stat.value} /></p>
              <p className="text-xs text-white/80 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CAPABILITIES (CapabilitySelector) ===== */}
      <section className="bg-white py-24 px-6 max-md:py-16 max-sm:py-12 max-sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem] max-sm:text-[1.5rem]">
              Four Pillars of Enterprise Intelligence
            </h2>
            <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
              Explore our core AI capabilities — each designed to solve real business problems at scale.
            </p>
          </div>
          <CapabilitySelector />
        </div>
      </section>

      {/* ===== HOW IT WORKS — 4 Steps ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-md:py-16 max-sm:py-12 max-sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem] max-sm:text-[1.5rem] max-sm:mb-10">
              From Data to Decisions in Four Steps
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[12%] right-[12%] h-px bg-[#e0e0e0] max-md:hidden"></div>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-8" data-animate="fade-up">
              {[
                { num: '01', title: 'Connect', desc: 'Plug in your data sources — databases, APIs, file stores, SaaS tools. Automatic schema mapping and normalization.' },
                { num: '02', title: 'Train', desc: 'Select from pre-built models or bring your own. Fine-tune on proprietary data with our no-code training interface.' },
                { num: '03', title: 'Deploy', desc: 'Push models to production with one click. Auto-scaling infrastructure handles traffic spikes seamlessly.' },
                { num: '04', title: 'Optimize', desc: 'Monitor performance, detect drift, and trigger retraining automatically. Continuous improvement built in.' },
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-12 h-12 bg-[#056CB8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold relative z-10">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="bg-white py-24 px-6 max-md:py-16 max-sm:py-12 max-sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem] max-sm:text-[1.5rem]">
              AI at Work Across Every Industry
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Real-world applications delivering measurable results.
            </p>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { num: '01', industry: 'HEALTHCARE', title: 'Diagnostic Assistance', desc: 'AI-powered imaging analysis reducing diagnostic time by 60% with 99.2% accuracy across radiology workflows.' },
              { num: '02', industry: 'FINANCE', title: 'Risk Intelligence', desc: 'Real-time fraud detection and credit scoring processing 10M+ transactions daily with sub-second latency.' },
              { num: '03', industry: 'RETAIL', title: 'Demand Prediction', desc: 'ML-driven inventory optimization achieving 94% forecast accuracy, reducing stockouts by 40%.' },
              { num: '04', industry: 'MANUFACTURING', title: 'Predictive Maintenance', desc: 'IoT + AI models detecting equipment failures 72 hours in advance, cutting downtime by 55%.' },
              { num: '05', industry: 'EDUCATION', title: 'Adaptive Learning', desc: 'Personalized learning paths that adjust difficulty in real-time based on student performance patterns.' },
              { num: '06', industry: 'LOGISTICS', title: 'Route Optimization', desc: 'Dynamic routing algorithms reducing delivery times by 30% and fuel costs by 22% across fleet operations.' },
            ].map((uc, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6 hover:border-[#056CB8] transition-colors">
                <p className="text-4xl font-bold text-[#e0e0e0] mb-3">{uc.num}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-2">{uc.industry}</p>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{uc.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-md:py-16 max-sm:py-12 max-sm:px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] mb-4 max-md:text-[1.75rem] max-sm:text-[1.5rem]">
              Works With Your Existing Stack
            </h2>
            <p className="text-[#555555] mb-12 max-w-2xl mx-auto">
              Zynex AI integrates seamlessly with 200+ enterprise tools and platforms.
              REST APIs, webhooks, SDKs for Python, Node.js, and Java.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['PostgreSQL', 'MongoDB', 'AWS S3', 'Snowflake', 'Salesforce', 'SAP', 'Slack', 'Teams'].map((tool, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] px-6 py-2.5 text-sm font-semibold text-[#111111] hover:border-[#056CB8] hover:text-[#056CB8] transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center max-md:py-16 max-sm:py-12 max-sm:px-4">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem] max-sm:text-[1.5rem]">
            Ready to unlock the power of AI for your business?
          </h2>
          <p className="text-white/60 mb-8">
            Our AI specialists will assess your workflows and build a custom implementation roadmap tailored to your industry.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Schedule a Consultation <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/" className="text-white/50 text-sm hover:text-white transition-colors">
              Explore the platform &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
