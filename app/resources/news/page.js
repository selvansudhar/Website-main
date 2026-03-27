export const metadata = {
  title: 'News & Newsroom | Zenvict',
  description: 'The latest announcements, press releases, and company updates from Zenvict.',
  alternates: { canonical: 'https://zenvict.com/resources/news' },
  openGraph: {
    title: 'News & Newsroom | Zenvict',
    description: 'The latest announcements, press releases, and company updates from Zenvict.',
  },
};

export default function NewsPage() {
  const headlines = [
    {
      date: 'Mar 5, 2026',
      tag: 'PRESS RELEASE',
      title: 'Zenvict Launches AI-Powered Enterprise Platform for Growing Businesses',
      excerpt: 'The platform combines ERP, CRM, HR, and intelligent AI assistants in a single unified solution designed for modern enterprises.',
      featured: true,
    },
    {
      date: 'Feb 28, 2026',
      tag: 'PRODUCT',
      title: 'Zenvict Introduces Finance Plus with AI-Powered Forecasting',
      excerpt: 'The latest product features automated invoicing, smart expense tracking, and real-time financial dashboards.',
      featured: true,
    },
  ];

  const news = [
    { date: 'Feb 24, 2026', tag: 'PARTNERSHIP', title: 'Zenvict Partners with Cloud Providers for Seamless Deployment', excerpt: 'Strategic integrations enable one-click deployment of Zenvict modules on major cloud platforms.' },
    { date: 'Feb 20, 2026', tag: 'PRODUCT', title: 'YenAI Digital Twin Now Available for Early Access', excerpt: 'Create an AI persona that handles client conversations and meetings on your behalf.' },
    { date: 'Feb 15, 2026', tag: 'COMPANY', title: 'Zenvict Expands Product Suite to 10+ Enterprise Modules', excerpt: 'From CRM and HR to Knowledge Base and Marketing Automation — Zenvict now covers the full enterprise stack.' },
    { date: 'Feb 10, 2026', tag: 'PRODUCT', title: 'Project Plus: Real-Time Collaboration Features Released', excerpt: 'Teams can now co-edit sprint boards, assign tasks in real-time, and track project progress across departments.' },
    { date: 'Feb 5, 2026', tag: 'COMPANY', title: 'Zenvict Crosses 25+ Successfully Delivered Projects', excerpt: 'Milestone driven by growing adoption across healthcare, education, and financial services industries.' },
    { date: 'Jan 30, 2026', tag: 'PRODUCT', title: 'Knowledge Base: AI-Powered Search Across All Enterprise Data', excerpt: 'New intelligent search delivers instant answers from documents, systems, and databases in seconds.' },
    { date: 'Jan 25, 2026', tag: 'COMPANY', title: 'Zenvict Publishes 2025 Year-in-Review', excerpt: 'Annual report highlights product launches, client milestones, and the roadmap for 2026.' },
    { date: 'Jan 18, 2026', tag: 'PRODUCT', title: 'Marketing Automation: AI Campaign Builder Goes Live', excerpt: 'Generate complete marketing campaigns — posters, ad copy, email sequences, and social content — from a single brief.' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://zenvict.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "News" }
        ]
      }) }} />

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
                Latest from Zenvict
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
            <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
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
