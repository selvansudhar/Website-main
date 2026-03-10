export const metadata = {
  title: 'Financial Services Solutions | Zynex',
  description: 'Secure, compliant fintech solutions for banking, insurance, and investment management with AI-driven risk analysis.',
  alternates: { canonical: 'https://zynex.ai/industries/financial-services' },
  openGraph: {
    title: 'Financial Services Solutions | Zynex',
    description: 'Secure, compliant fintech solutions for banking, insurance, and investment management with AI-driven risk analysis.',
  },
};

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen">

      {/* ===== DARK HERO WITH TRADING TERMINAL ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Industries / Financial Services</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 w-fit">
                FINANCIAL SERVICES
              </span>
              <h1 className="text-[3rem] font-bold leading-[1.1] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
                Transform Financial Operations with AI
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Zynex powers banks, insurance companies, and fintech firms with secure,
                AI-driven solutions that modernize operations, strengthen compliance, and
                deliver exceptional customer experiences.
              </p>
              <div className="flex gap-4 flex-wrap mt-2">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                  Schedule a Demo
                </a>
                <a href="/solutions" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
                  Explore Solutions
                </a>
              </div>
              <p className="text-white/40 text-sm mt-2">Trusted by 200+ financial institutions</p>
            </div>

            {/* Trading Terminal Mockup */}
            <div className="bg-white/5 border border-white/10 p-6 max-lg:max-w-lg">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-white/80">Market Overview</span>
                <span className="flex items-center gap-2 text-xs text-[#22c55e]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span> Live
                </span>
              </div>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { asset: 'ZYNX/USD', price: '$142.38', change: '+2.41%', up: true },
                  { asset: 'BND/CORP', price: '$98.72', change: '+0.18%', up: true },
                  { asset: 'FX/EUR', price: '$1.0847', change: '-0.32%', up: false },
                  { asset: 'IDX/FINTECH', price: '$3,891.20', change: '+1.67%', up: true },
                ].map((ticker, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-b-0">
                    <span className="text-sm text-white/70 font-medium">{ticker.asset}</span>
                    <span className="text-sm text-white/90 font-semibold">{ticker.price}</span>
                    <span className={`text-sm font-semibold ${ticker.up ? 'text-[#22c55e]' : 'text-[#F60014]'}`}>
                      {ticker.change}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-xs text-white/40 mb-1">Total AUM</p>
                  <p className="text-sm font-bold text-white/90">$4.2B</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 mb-1">Daily P&L</p>
                  <p className="text-sm font-bold text-[#22c55e]">+$1.8M</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 mb-1">Risk Score</p>
                  <p className="text-sm font-bold text-white/90">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== METRICS RIBBON ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-8 text-center">
          {[
            { value: '99.99%', label: 'Uptime' },
            { value: '$2.4B+', label: 'Processed' },
            { value: '50ms', label: 'Latency' },
            { value: '200+', label: 'Institutions' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/80 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OVERLAPPING CARD STACK ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Three pillars of intelligent financial technology, designed to work together seamlessly.
          </p>

          <div className="flex flex-col">
            {[
              {
                num: '01',
                icon: 'bi-graph-up-arrow',
                title: 'Trading & Portfolio Management',
                desc: 'AI-powered trading insights, portfolio optimization, and real-time market analysis for smarter investment decisions.',
                features: ['Algorithmic trading support', 'Portfolio rebalancing', 'Risk-adjusted returns', 'Multi-asset class coverage'],
              },
              {
                num: '02',
                icon: 'bi-shield-fill-check',
                title: 'Risk & Compliance Engine',
                desc: 'Automated regulatory compliance, real-time risk monitoring, and audit-ready reporting across all jurisdictions.',
                features: ['Regulatory automation', 'AML/KYC screening', 'Stress testing models', 'Audit trail generation'],
              },
              {
                num: '03',
                icon: 'bi-arrow-left-right',
                title: 'Payment Processing Hub',
                desc: 'Multi-currency, multi-channel payment infrastructure with sub-second settlement and global reach.',
                features: ['Multi-currency support', 'Instant settlement', 'PCI DSS compliant', 'Cross-border payments'],
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`border border-[#e0e0e0] p-8 bg-white relative ${i > 0 ? '-mt-4' : ''}`}
                style={{ zIndex: 3 - i }}
              >
                <div className="flex max-md:flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-[#e0e0e0]">{card.num}</span>
                    <i className={`bi ${card.icon} text-2xl text-[#056CB8] mt-1`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#111111] mb-2">{card.title}</h3>
                    <p className="text-[#555555] mb-4">{card.desc}</p>
                    <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-2">
                      {card.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-[#111111]">
                          <i className="bi bi-check-circle-fill text-[#22c55e] text-xs"></i>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENTO SECURITY GRID ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
            Enterprise-Grade Security
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Built from the ground up for the security demands of financial services.
          </p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            {/* Large card spanning 2 cols and 2 rows */}
            <div className="col-span-2 row-span-2 max-md:col-span-1 max-md:row-span-1 bg-white border border-[#e0e0e0] p-8">
              <i className="bi bi-lock-fill text-3xl text-[#056CB8] mb-4 block"></i>
              <h3 className="text-2xl font-bold text-[#111111] mb-3">End-to-End Encryption</h3>
              <p className="text-[#555555] leading-relaxed mb-6">
                Every transaction, every data point, every communication is protected with
                military-grade AES-256 encryption. Our zero-trust architecture ensures that
                sensitive financial data remains secure at rest and in transit, with automated
                key rotation and hardware security modules (HSMs) managing cryptographic operations.
              </p>
              <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-3">
                {['AES-256 encryption', 'Zero-trust architecture', 'Automated key rotation', 'HSM integration'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#111111]">
                    <i className="bi bi-check-circle-fill text-[#22c55e] text-xs"></i>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* 4 smaller cards */}
            {[
              { icon: 'bi-shield-check', title: 'SOC 2 Type II', desc: 'Audited for security, availability, and confidentiality.' },
              { icon: 'bi-patch-check-fill', title: 'GDPR Ready', desc: 'Full EU data protection compliance.' },
              { icon: 'bi-activity', title: 'Real-time Monitoring', desc: '24/7 threat detection and response.' },
              { icon: 'bi-file-earmark-text', title: 'Audit Trail', desc: 'Complete transaction history and logs.' },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6">
                <i className={`bi ${card.icon} text-xl text-[#056CB8] mb-3 block`}></i>
                <h4 className="text-base font-bold text-[#111111] mb-1">{card.title}</h4>
                <p className="text-sm text-[#555555]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION ECOSYSTEM ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
            Seamless Integration Ecosystem
          </h2>
          <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
            Connect with your existing financial infrastructure through pre-built connectors.
          </p>

          <div className="flex flex-col items-center mb-12">
            <div className="w-32 h-32 rounded-full bg-[#056CB8] flex items-center justify-center mb-8">
              <div className="text-center">
                <i className="bi bi-lightning-charge-fill text-white text-2xl"></i>
                <p className="text-white text-xs font-bold mt-1">Zynex Core</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
            {[
              { icon: 'bi-bar-chart-line-fill', name: 'Bloomberg Terminal' },
              { icon: 'bi-arrow-left-right', name: 'SWIFT Network' },
              { icon: 'bi-diagram-3', name: 'FIX Protocol' },
              { icon: 'bi-inbox-fill', name: 'Core Banking' },
              { icon: 'bi-arrow-repeat', name: 'Payment Gateways' },
              { icon: 'bi-graph-up', name: 'Market Data Feeds' },
            ].map((item, i) => (
              <div key={i} className="border border-[#e0e0e0] p-5 text-center hover:border-[#056CB8] transition-colors">
                <i className={`bi ${item.icon} text-2xl text-[#056CB8] mb-2 block`}></i>
                <p className="text-sm font-semibold text-[#111111]">{item.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#555555] mt-8">50+ pre-built connectors available</p>
        </div>
      </section>

      {/* ===== ROI CALCULATOR PREVIEW ===== */}
      <section className="bg-[#111111] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
          <div>
            <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">Measure Your ROI</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Financial institutions using Zynex see dramatic cost reductions through
              automation, error elimination, and streamlined compliance workflows. See
              what your organization could save.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Calculate Your Savings
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-8">
            <div className="flex flex-col gap-4 mb-6">
              {[
                { label: 'Manual Processing Cost', value: '$450K/yr', color: 'text-white/70' },
                { label: 'With Zynex', value: '$120K/yr', color: 'text-white/70' },
                { label: 'Annual Savings', value: '$330K/yr', color: 'text-[#22c55e]' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                  <span className="text-sm text-white/50">{row.label}</span>
                  <span className={`text-lg font-bold ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#056CB8]/20 border border-[#056CB8]/30 p-4 text-center">
              <p className="text-2xl font-bold text-[#056CB8]">73%</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] mb-4 max-md:text-[1.75rem]">
            Ready to Modernize Your Financial Operations?
          </h2>
          <p className="text-[#555555] mb-8">
            Partner with Zynex to modernize your financial infrastructure, strengthen
            compliance, and deliver intelligent experiences.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Schedule a Demo
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#f5f5f5] transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
