import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'E-Commerce Solutions | Zynex',
  description: 'Headless commerce development with custom storefronts, payment integration, and AI-powered personalization.',
  alternates: { canonical: 'https://zynex.ai/solutions/ecommerce' },
  openGraph: {
    title: 'E-Commerce Solutions | Zynex',
    description: 'Headless commerce development with custom storefronts, payment integration, and AI-powered personalization.',
  },
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen">

      {/* ===== HERO WITH STORE MOCKUP ===== */}
      <section className="bg-white pt-40 max-md:pt-24 pb-32 px-6 max-[480px]:px-4 max-[480px]:pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#555555] mb-8 max-[480px]:text-xs">Home / Solutions / E-Commerce</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-[480px]:gap-10 items-center">
            <div className="flex flex-col gap-6" data-animate="fade-up">
              <span className="inline-block bg-[#056CB8]/10 text-[#056CB8] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 w-fit">
                E-COMMERCE SOLUTIONS
              </span>
              <h1 className="text-[3rem] font-bold text-[#111111] leading-[1.1] max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">
                Commerce That Converts
              </h1>
              <p className="text-[#555555] text-lg leading-relaxed">
                End-to-end e-commerce development — from headless storefronts to omnichannel
                platforms. We build online commerce experiences that turn browsers into buyers.
              </p>
              <div className="flex gap-4 flex-wrap mt-2">
                <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                  Launch Your Store <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                </a>
                <a href="/resources/partners" className="inline-flex items-center justify-center px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#f5f5f5] transition-colors">
                  See Our Work
                </a>
              </div>
              <p className="text-xs text-[#555555] mt-2">150+ stores launched globally</p>
            </div>

            {/* Store Mockup */}
            <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 max-[480px]:p-4 max-lg:max-w-lg overflow-hidden" data-animate="fade-right">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-[#111111] max-[480px]:text-xs">Store Dashboard</span>
                <span className="flex items-center gap-2 text-xs text-[#22c55e] max-[480px]:text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span> Live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 max-[480px]:gap-2 mb-4">
                {[
                  { label: 'Revenue', value: '$847K', change: '+23.5%' },
                  { label: 'Orders', value: '3,241', change: '+18.2%' },
                  { label: 'Conversion', value: '4.7%', change: '+1.2%' },
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-[#e0e0e0] p-3 max-[480px]:p-2 text-center">
                    <p className="text-xs text-[#555555] mb-1 max-[480px]:text-[10px]">{s.label}</p>
                    <p className="text-lg max-[480px]:text-sm font-bold text-[#111111]">{s.value}</p>
                    <p className="text-xs text-[#22c55e] font-semibold max-[480px]:text-[10px]">{s.change}</p>
                  </div>
                ))}
              </div>
              {/* Mini product cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Premium Wireless', price: '$249', tag: 'Best Seller' },
                  { name: 'Smart Watch Pro', price: '$399', tag: 'New Arrival' },
                ].map((p, i) => (
                  <div key={i} className="bg-white border border-[#e0e0e0] overflow-hidden">
                    <div className="h-16 bg-[#e0e0e0]/30 relative">
                      <span className="absolute top-1 right-1 bg-[#056CB8] text-white text-[8px] font-bold px-1.5 py-0.5">{p.tag}</span>
                    </div>
                    <div className="p-2 flex justify-between items-center">
                      <span className="text-xs font-semibold text-[#111111]">{p.name}</span>
                      <span className="text-xs font-bold text-[#056CB8]">{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-[#056CB8] text-white py-6 px-6 max-[480px]:px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-8 max-[480px]:gap-4 text-center" data-animate="fade-in">
          {[
            { value: '$500M+', label: 'Revenue Processed' },
            { value: '150+', label: 'Stores Launched' },
            { value: '3.2x', label: 'Conversion Lift' },
            { value: '< 1s', label: 'Page Load Time' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold"><CountUp value={stat.value} /></p>
              <p className="text-xs text-white/80 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CAPABILITIES — 6 Cards ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
              Everything You Need to Sell Online
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              A complete commerce toolkit from storefront to fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { icon: 'bi-inbox-fill', title: 'Storefront Development', desc: 'Custom storefronts with lightning-fast performance, SEO optimization, and conversion-focused UX on headless architecture.' },
              { icon: 'bi-shield-check', title: 'Payment & Checkout', desc: 'Seamless checkout with multi-gateway support, one-click payments, subscription billing, and PCI-DSS compliance.' },
              { icon: 'bi-list-check', title: 'Inventory & Orders', desc: 'Real-time inventory sync across channels, automated reorder points, and intelligent fulfillment routing.' },
              { icon: 'bi-lightning-charge-fill', title: 'AI Personalization', desc: 'Dynamic product recommendations, personalized search, and behavioral targeting that increases AOV by 35%.' },
              { icon: 'bi-arrow-left-right', title: 'Multi-Channel Commerce', desc: 'Sell everywhere — web, mobile, marketplaces, social, and in-store POS — from a single unified platform.' },
              { icon: 'bi-graph-up-arrow', title: 'Analytics & Growth', desc: 'Revenue dashboards, funnel analytics, cohort analysis, and A/B testing built into every deployment.' },
            ].map((feat, i) => (
              <div key={i} className="border border-[#e0e0e0] p-8 hover:border-[#056CB8] transition-colors">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mb-4">
                  <i className={`bi ${feat.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ZYNEX — Checklist + Revenue Card ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-16 max-[480px]:gap-10 items-center">
          <div data-animate="fade-left">
            <h2 className="text-[2rem] font-bold text-[#111111] mb-4 max-md:text-[1.5rem] max-[480px]:text-[1.3rem]">
              Built for Commerce. Optimized for Growth.
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6">
              We do not just build stores — we build revenue engines. Every pixel,
              every interaction, every backend process is optimized for your bottom line.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Conversion-first UX design',
                'Mobile-optimized experiences',
                'SEO & performance baked in',
                'Scalable to millions of SKUs',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#111111]">
                  <i className="bi bi-check-circle-fill text-[#22c55e]"></i>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white border border-[#e0e0e0] p-8" data-animate="fade-right">
            <p className="text-xs text-[#555555] font-semibold mb-1">Monthly Revenue</p>
            <p className="text-3xl font-bold text-[#111111] mb-1">$847,293</p>
            <p className="text-sm text-[#22c55e] font-semibold mb-6">&uarr; 23.5% vs last month</p>
            <div className="flex items-end gap-2 h-[100px]">
              {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-[#056CB8]' : 'bg-[#e0e0e0]'}`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
              We Work With the Best
            </h2>
            <p className="text-[#555555] mb-12 max-w-2xl mx-auto">
              Whether you need a hosted solution or a fully custom headless build,
              we have expertise across every major commerce platform.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Shopify Plus', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom Headless', 'Stripe', 'Razorpay', 'PayPal'].map((p, i) => (
              <div key={i} className="bg-[#f5f5f5] border border-[#e0e0e0] px-6 py-3 text-sm font-semibold text-[#111111] hover:border-[#056CB8] hover:text-[#056CB8] transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem] max-[480px]:text-[1.4rem] max-[480px]:mb-10">
              From Idea to First Sale
            </h2>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6" data-animate="fade-up">
            {[
              { num: '01', title: 'Strategy', desc: 'Market analysis, platform selection, feature prioritization, and go-to-market planning.' },
              { num: '02', title: 'Design', desc: 'Conversion-optimized UI/UX with brand-aligned visual design and mobile-first prototyping.' },
              { num: '03', title: 'Development', desc: 'Full-stack build with payment integration, inventory sync, and third-party connections.' },
              { num: '04', title: 'Launch & Grow', desc: 'Performance optimization, SEO setup, analytics configuration, and ongoing support.' },
            ].map((step, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 text-center">
                <p className="text-3xl font-bold text-[#e0e0e0] mb-3">{step.num}</p>
                <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem] max-[480px]:text-[1.4rem]">
            Ready to Launch Your Commerce Platform?
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your product, your market, and your goals.
            We will build the store that gets you there.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Get a Free Quote <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Explore Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
