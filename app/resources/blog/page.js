export const metadata = {
  title: 'Blog | Zynex',
  description: 'Insights, guides, and thought leadership on AI, enterprise technology, and digital transformation from the Zynex team.',
  alternates: { canonical: 'https://zynex.ai/resources/blog' },
  openGraph: {
    title: 'Blog | Zynex',
    description: 'Insights, guides, and thought leadership on AI, enterprise technology, and digital transformation from the Zynex team.',
  },
};

export default function BlogPage() {
  const featuredPost = {
    category: 'AI & MACHINE LEARNING',
    title: 'The Future of Enterprise AI: 5 Trends Shaping 2026',
    excerpt: 'From autonomous agents to multimodal intelligence, discover the AI trends that will redefine how enterprises operate, compete, and innovate in the coming year.',
    author: 'Dr. Arun Patel',
    role: 'Chief AI Officer',
    date: 'Mar 4, 2026',
    readTime: '8 min read',
  };

  const posts = [
    { category: 'ENGINEERING', title: 'Building Multi-Tenant SaaS: Architecture Decisions That Scale', excerpt: 'A deep dive into tenant isolation, shared infrastructure, and the trade-offs we made building Zynex\'s platform.', author: 'Priya Sharma', date: 'Mar 1, 2026', readTime: '12 min read' },
    { category: 'PRODUCT', title: 'Introducing Zynex Finance Plus 3.0', excerpt: 'Automated reconciliation, AI-powered forecasting, and 40% faster reporting — here\'s everything new.', author: 'James Chen', date: 'Feb 26, 2026', readTime: '5 min read' },
    { category: 'INDUSTRY', title: 'How Healthcare Systems Are Using AI to Reduce Wait Times by 40%', excerpt: 'Real-world case studies from three hospital networks that deployed intelligent scheduling.', author: 'Dr. Sarah Mitchell', date: 'Feb 22, 2026', readTime: '10 min read' },
    { category: 'ENGINEERING', title: 'Zero-Downtime Migrations: Our Playbook for Enterprise Clients', excerpt: 'How we migrated 2.4 billion records across 12 time zones without a single second of downtime.', author: 'Raj Krishnan', date: 'Feb 18, 2026', readTime: '15 min read' },
    { category: 'AI & MACHINE LEARNING', title: 'Retrieval-Augmented Generation: Beyond the Hype', excerpt: 'A practical guide to implementing RAG systems that actually work in production environments.', author: 'Emily Zhang', date: 'Feb 14, 2026', readTime: '11 min read' },
    { category: 'PRODUCT', title: 'Project Plus: The Sprint Board Reimagined', excerpt: 'Why we rebuilt our project management module from scratch and what we learned along the way.', author: 'Marco Silva', date: 'Feb 10, 2026', readTime: '7 min read' },
  ];

  const categories = ['All', 'AI & Machine Learning', 'Engineering', 'Product', 'Industry', 'Company'];

  return (
    <div className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center" data-animate="fade-up">
          <p className="text-sm text-white/50 mb-8">Home / Resources / Blog</p>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            ZYNEX BLOG
          </span>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-6 max-md:text-[2.2rem]">
            Insights & Engineering
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Thought leadership, technical deep-dives, and product updates from the
            team building the future of enterprise AI.
          </p>
        </div>
      </section>

      {/* ===== CATEGORY FILTERS ===== */}
      <section className="bg-white border-b border-[#e0e0e0] py-4 px-6 sticky top-[73px] z-50">
        <div className="max-w-5xl mx-auto flex gap-3 overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#111111] text-white' : 'bg-[#f5f5f5] text-[#555555] hover:bg-[#e0e0e0]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ===== FEATURED POST ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center border border-[#e0e0e0] p-0 overflow-hidden" data-animate="fade-up">
            <div className="bg-[#f5f5f5] h-full min-h-[300px] flex flex-col items-center justify-center">
              <i className="bi bi-file-earmark-text text-5xl text-[#e0e0e0] mb-3"></i>
              <p className="text-sm text-[#e0e0e0]">Featured image</p>
            </div>
            <div className="p-8 max-md:p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-3 block">{featuredPost.category}</span>
              <h2 className="text-2xl font-bold text-[#111111] mb-3 leading-tight">{featuredPost.title}</h2>
              <p className="text-[#555555] text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#056CB8]/10 rounded-full flex items-center justify-center">
                  <i className="bi bi-person-check text-[#056CB8] text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111]">{featuredPost.author}</p>
                  <p className="text-xs text-[#555555]">{featuredPost.date} &middot; {featuredPost.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POST GRID ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2rem] font-bold text-[#111111] mb-12" data-animate="fade-up">Latest Articles</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {posts.map((post, i) => (
              <article key={i} className="bg-white border border-[#e0e0e0] flex flex-col hover:border-[#056CB8] transition-colors">
                <div className="bg-[#f5f5f5] h-40 flex items-center justify-center border-b border-[#e0e0e0]">
                  <i className="bi bi-file-earmark-text text-3xl text-[#e0e0e0]"></i>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-2">{post.category}</span>
                  <h3 className="text-base font-bold text-[#111111] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#555555] pt-4 border-t border-[#e0e0e0]">
                    <span className="font-semibold">{post.author}</span>
                    <span>{post.date} &middot; {post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#111111] hover:text-white transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="bg-[#056CB8] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center" data-animate="fade-up">
          <h2 className="text-2xl font-bold mb-3">Stay in the Loop</h2>
          <p className="text-white/80 mb-8">
            Get the latest insights on AI, engineering, and product updates delivered to your inbox weekly.
          </p>
          <div className="flex max-md:flex-col gap-3 max-w-md mx-auto">
            <div className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white/50">
              your@email.com
            </div>
            <button className="group px-6 py-3 bg-white text-[#056CB8] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/90 transition-colors">
              Subscribe <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
