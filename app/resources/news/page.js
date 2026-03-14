export const metadata = {
  title: 'News & Newsroom | Zynex',
  description: 'The latest announcements, press releases, and company updates from Zynex.',
  alternates: { canonical: 'https://zynex.ai/resources/news' },
  openGraph: {
    title: 'News & Newsroom | Zynex',
    description: 'The latest announcements, press releases, and company updates from Zynex.',
  },
};

export default function NewsPage() {
  const headlines = [
    {
      date: 'Mar 5, 2026',
      tag: 'PRESS RELEASE',
      title: 'Zynex Raises $120M Series C to Accelerate Enterprise AI Adoption',
      excerpt: 'The funding round, led by Sequoia Capital, will fuel product expansion across healthcare, manufacturing, and financial services sectors.',
      featured: true,
    },
    {
      date: 'Feb 28, 2026',
      tag: 'PRODUCT',
      title: 'Zynex Launches Finance Plus 3.0 with AI-Powered Forecasting',
      excerpt: 'The latest release introduces predictive revenue modeling, automated reconciliation, and 40% faster financial reporting.',
      featured: true,
    },
  ];

  const news = [
    { date: 'Feb 24, 2026', tag: 'PARTNERSHIP', title: 'Zynex Partners with AWS to Deliver AI Solutions at Scale', excerpt: 'Strategic collaboration brings Zynex AI capabilities to AWS Marketplace, enabling one-click deployment for enterprise customers.' },
    { date: 'Feb 20, 2026', tag: 'AWARD', title: 'Zynex Named a Leader in Gartner Magic Quadrant for Enterprise AI Platforms', excerpt: 'Recognition for completeness of vision and ability to execute in the enterprise AI space.' },
    { date: 'Feb 15, 2026', tag: 'COMPANY', title: 'Zynex Expands to Singapore, Opens Asia-Pacific Headquarters', excerpt: 'The new office will serve as a hub for the growing APAC customer base across healthcare and manufacturing.' },
    { date: 'Feb 10, 2026', tag: 'PRODUCT', title: 'New: Real-Time Collaboration in Project Plus', excerpt: 'Teams can now co-edit sprint boards, share live cursors, and comment in-context across projects.' },
    { date: 'Feb 5, 2026', tag: 'COMPANY', title: 'Zynex Surpasses 500 Enterprise Customers Worldwide', excerpt: 'Milestone driven by rapid adoption in healthcare, higher education, and financial services industries.' },
    { date: 'Jan 30, 2026', tag: 'PARTNERSHIP', title: 'Zynex and Salesforce Announce Deep Integration Partnership', excerpt: 'Native bi-directional sync between Zynex CRM Lite and Salesforce, eliminating manual data transfers.' },
    { date: 'Jan 25, 2026', tag: 'PRESS RELEASE', title: 'Zynex Publishes 2025 AI Impact Report', excerpt: 'Annual report details how enterprise AI deployments delivered $4.2B in combined client savings.' },
    { date: 'Jan 18, 2026', tag: 'AWARD', title: 'Zynex Wins "Best Enterprise SaaS" at TechCrunch Disrupt Awards', excerpt: 'Recognized for innovation in AI-powered enterprise workflows and exceptional customer outcomes.' },
  ];

  const tagColors = {
    'PRESS RELEASE': 'bg-[#056CB8]/10 text-[#056CB8]',
    'PRODUCT': 'bg-[#22c55e]/10 text-[#22c55e]',
    'PARTNERSHIP': 'bg-purple-100 text-purple-700',
    'AWARD': 'bg-yellow-100 text-yellow-700',
    'COMPANY': 'bg-[#f5f5f5] text-[#555555]',
  };

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-white pt-40 max-md:pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-[#555555] mb-8">Home / Resources / News</p>
          <div className="flex max-md:flex-col max-md:gap-4 justify-between items-end mb-12" data-animate="fade-up">
            <div>
              <span className="inline-block bg-[#056CB8]/10 text-[#056CB8] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-4">
                NEWSROOM
              </span>
              <h1 className="text-[3rem] font-bold text-[#111111] leading-[1.1] max-md:text-[2.2rem]">
                Latest from Zynex
              </h1>
            </div>
            <p className="text-[#555555] max-w-sm text-right max-md:text-left">
              Press releases, product announcements, partnerships, and company milestones.
            </p>
          </div>

          {/* Featured Headlines */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-6" data-animate="fade-up" data-delay="2">
            {headlines.map((item, i) => (
              <article key={i} className="border border-[#e0e0e0] bg-white hover:border-[#056CB8] transition-colors group">
                <div className="bg-[#f5f5f5] h-48 flex items-center justify-center border-b border-[#e0e0e0]">
                  <i className="bi bi-star-fill text-4xl text-[#e0e0e0] group-hover:text-[#056CB8] transition-colors"></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-1 ${tagColors[item.tag]}`}>{item.tag}</span>
                    <span className="text-xs text-[#555555]">{item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#111111] mb-2 leading-tight">{item.title}</h2>
                  <p className="text-sm text-[#555555] leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS TIMELINE ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2rem] font-bold text-[#111111] mb-12" data-animate="fade-up">All Updates</h2>

          <div className="flex flex-col gap-0" data-animate="fade-up" data-delay="2">
            {news.map((item, i) => (
              <article key={i} className="bg-white border border-[#e0e0e0] border-t-0 first:border-t p-6 flex max-md:flex-col gap-6 hover:bg-[#f5f5f5]/50 transition-colors">
                <div className="w-28 flex-shrink-0 max-md:w-full">
                  <p className="text-sm text-[#555555] font-medium">{item.date}</p>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-1 ${tagColors[item.tag]}`}>{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{item.excerpt}</p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <span className="text-sm text-[#056CB8] font-semibold">Read &rarr;</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#111111] hover:text-white transition-colors">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* ===== MEDIA CONTACT ===== */}
      <section className="bg-[#111111] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center">
          <div data-animate="fade-left">
            <h2 className="text-2xl font-bold mb-3">Media & Press Inquiries</h2>
            <p className="text-white/60 leading-relaxed">
              For press kits, interview requests, and media inquiries, reach out to our communications team.
            </p>
          </div>
          <div className="flex max-md:flex-col gap-4 justify-end max-md:justify-start" data-animate="fade-right">
            <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Contact Press Team <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Download Press Kit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
