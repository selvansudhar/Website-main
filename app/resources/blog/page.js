export const metadata = {
  title: 'Blog | Zenvict',
  description: 'Insights, guides, and thought leadership on AI, enterprise technology, and digital transformation from the Zenvict team.',
  alternates: { canonical: 'https://zenvict.com/resources/blog' },
  openGraph: {
    title: 'Blog | Zenvict',
    description: 'Insights, guides, and thought leadership on AI, enterprise technology, and digital transformation from the Zenvict team.',
  },
};

export default function BlogPage() {
  const featuredPost = {
    category: 'AI & MACHINE LEARNING',
    title: 'How We Built Our AI Assistant Hub from Scratch',
    excerpt: 'A behind-the-scenes look at how we designed, trained, and deployed 16 specialized AI assistants that automate enterprise workflows across departments.',
    author: 'Sudhar',
    role: 'Founder & CEO',
    date: 'Mar 10, 2026',
    readTime: '8 min read',
  };

  const posts = [
    { category: 'ENGINEERING', title: 'Building a Multi-Tenant SaaS Architecture with Next.js', excerpt: 'How we designed Zenvict\'s infrastructure to handle multiple enterprise clients with isolated data and shared resources.', author: 'Zenvict Engineering', date: 'Mar 6, 2026', readTime: '12 min read', icon: 'bi-lightning-charge-fill', color: 'bg-[#8b5cf6]' },
    { category: 'PRODUCT', title: 'Introducing Zenvict Finance Plus — Smarter Financial Management', excerpt: 'AI-powered invoicing, expense tracking, and real-time financial insights built for growing businesses.', author: 'Zenvict Product', date: 'Feb 28, 2026', readTime: '5 min read', icon: 'bi-inbox-fill', color: 'bg-[#22c55e]' },
    { category: 'INDUSTRY', title: 'Why Healthcare Organizations Need AI-Ready ERP Systems', excerpt: 'Exploring how intelligent automation is transforming patient management, scheduling, and compliance in healthcare.', author: 'Zenvict Team', date: 'Feb 22, 2026', readTime: '10 min read', icon: 'bi-diagram-3', color: 'bg-[#f59e0b]' },
    { category: 'ENGINEERING', title: 'From Monolith to Microservices: Our Migration Journey', excerpt: 'Lessons learned from refactoring our platform into modular services without disrupting existing clients.', author: 'Zenvict Engineering', date: 'Feb 18, 2026', readTime: '15 min read', icon: 'bi-diagram-3', color: 'bg-[#8b5cf6]' },
    { category: 'AI & MACHINE LEARNING', title: 'RAG in Production: What Actually Works', excerpt: 'A practical guide to implementing retrieval-augmented generation for enterprise knowledge base systems.', author: 'Zenvict AI Team', date: 'Feb 14, 2026', readTime: '11 min read', icon: 'bi-lightning-charge-fill', color: 'bg-[#056CB8]' },
    { category: 'PRODUCT', title: 'Project Plus: How We Redesigned Sprint Management', excerpt: 'The thinking behind our new project management module — built for teams that ship fast.', author: 'Zenvict Product', date: 'Feb 10, 2026', readTime: '7 min read', icon: 'bi-list-check', color: 'bg-[#22c55e]' },
  ];

  const categories = ['All', 'AI & Machine Learning', 'Engineering', 'Product', 'Industry', 'Company'];

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenvict.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://zenvict.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Blog" }
        ]
      }) }} />

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center" data-animate="fade-up">
          <p className="text-sm text-white/50 mb-8">Home / Resources / Blog</p>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            ZENVICT BLOG
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
          <div className="grid grid-cols-[1fr_1.3fr] max-md:grid-cols-1 gap-0 overflow-hidden" data-animate="fade-up">
            {/* Left — Visual Block */}
            <div className="bg-gradient-to-br from-[#056CB8] via-[#0856a0] to-[#111111] p-10 max-sm:p-6 flex flex-col justify-between min-h-[340px] relative overflow-hidden">
              <div className="absolute top-6 right-6 w-32 h-32 border border-white/10 rounded-full" />
              <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 border border-white/5 rounded-full" />
              <div>
                <span className="inline-block bg-white/15 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 mb-4">Featured</span>
                <i className="bi bi-lightning-charge-fill text-[4rem] text-white/15 block mb-4"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 block mb-2">{featuredPost.category}</span>
                <p className="text-white/50 text-xs">{featuredPost.date} &middot; {featuredPost.readTime}</p>
              </div>
            </div>

            {/* Right — Content */}
            <div className="bg-[#f5f5f5] p-10 max-sm:p-6 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-3 block">{featuredPost.category}</span>
              <h2 className="text-[1.6rem] max-sm:text-xl font-bold text-[#111111] mb-4 leading-tight">{featuredPost.title}</h2>
              <p className="text-[#555555] text-sm leading-relaxed mb-8">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-[#e0e0e0]">
                <div className="w-10 h-10 bg-[#056CB8] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{featuredPost.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111]">{featuredPost.author}</p>
                  <p className="text-xs text-[#555555]">{featuredPost.role}</p>
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
              <article key={i} className="bg-white flex flex-col group hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg">
                {/* Color Header with Icon */}
                <div className={`${post.color} h-36 flex items-center justify-center relative overflow-hidden`}>
                  <i className={`bi ${post.icon} text-[3.5rem] text-white/25`}></i>
                  <div className="absolute top-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 bg-black/15 px-2 py-1">{post.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-4">
                    <span className="text-[10px] text-white/60">{post.readTime}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-[#111111] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#555555] pt-4 border-t border-[#e0e0e0]">
                    <span className="font-semibold">{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-3 px-8 py-4 border border-[#111111] text-[#111111] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#111111] hover:text-white transition-colors">
              Load More Articles <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
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
            <button className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-[#056CB8] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/90 transition-colors">
              Subscribe <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
