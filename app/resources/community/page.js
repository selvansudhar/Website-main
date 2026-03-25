export const metadata = {
  title: 'Community | Zynex',
  description: 'Join the Zynex community — connect with developers, share knowledge, attend events, and shape the future of enterprise AI.',
  alternates: { canonical: 'https://zynex.ai/resources/community' },
  openGraph: {
    title: 'Community | Zynex',
    description: 'Join the Zynex community — connect with developers, share knowledge, attend events, and shape the future of enterprise AI.',
  },
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://zynex.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Community" }
        ]
      }) }} />

      {/* ===== HERO — CENTERED, BOLD ===== */}
      <section className="bg-[#056CB8] text-white pt-40 max-md:pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-white/50 mb-8 text-center">Home / Resources / Community</p>
          <div className="text-center max-w-3xl mx-auto" data-animate="fade-up">
            <h1 className="text-[3.5rem] font-bold leading-[1.05] mb-6 max-md:text-[2.5rem] max-[480px]:text-[2rem]">
              Build Together. Grow Together.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join thousands of developers, operators, and business leaders who are
              building the future of enterprise technology with Zynex.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-white text-[#056CB8] font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/90 transition-colors">
                Join the Community <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
              </a>
              <a href="/resources/developers" className="inline-flex items-center justify-center px-8 py-4 border border-white/50 text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
                Developer Docs
              </a>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 mt-16 max-w-3xl mx-auto" data-animate="fade-in">
            {[
              { value: '500+', label: 'Members' },
              { value: '50+', label: 'Contributors' },
              { value: '5+', label: 'Industries' },
              { value: '10+', label: 'Events/Year' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 border border-white/20 p-4 text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY SPACES — 3 Large Cards ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Find Your Space
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Whether you are a developer, a business leader, or an AI enthusiast — there is a place for you.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              {
                icon: 'bi-lightning-charge-fill',
                title: 'Developer Forum',
                desc: 'Ask questions, share code snippets, discuss APIs, and get help from Zynex engineers and fellow developers.',
                stats: '200+ discussions',
                color: 'bg-[#056CB8]',
              },
              {
                icon: 'bi-people-fill',
                title: 'User Groups',
                desc: 'Local and virtual meetups organized by industry and product. Connect with peers solving similar challenges.',
                stats: '5 active groups',
                color: 'bg-[#22c55e]',
              },
              {
                icon: 'bi-star-fill',
                title: 'Champions Program',
                desc: 'Become a Zynex Champion — get early access to features, direct engineer support, and exclusive events.',
                stats: '15 champions',
                color: 'bg-[#111111]',
              },
            ].map((space, i) => (
              <div key={i} className="border border-[#e0e0e0] p-8 flex flex-col hover:border-[#056CB8] transition-colors">
                <div className={`w-12 h-12 ${space.color} flex items-center justify-center mb-5`}>
                  <i className={`bi ${space.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{space.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-6 flex-1">{space.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
                  <span className="text-xs text-[#555555] font-medium">{space.stats}</span>
                  <span className="text-sm text-[#056CB8] font-semibold">Join &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex max-md:flex-col justify-between items-end mb-12 gap-4" data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] max-md:text-[1.75rem]">Upcoming Events</h2>
            <a href="/contact" className="text-sm text-[#056CB8] font-semibold">View all events &rarr;</a>
          </div>

          <div className="flex flex-col gap-4" data-animate="fade-up" data-delay="2">
            {[
              { date: 'Mar 15', month: 'MAR', title: 'Zynex AI Summit 2026', type: 'VIRTUAL', desc: 'Annual community conference — keynotes, workshops, and product roadmap reveals.' },
              { date: 'Mar 22', month: 'MAR', title: 'Building RAG Systems Workshop', type: 'WORKSHOP', desc: 'Hands-on session on implementing retrieval-augmented generation with Zynex AI.' },
              { date: 'Apr 5', month: 'APR', title: 'Healthcare User Group — Q1 Meetup', type: 'MEETUP', desc: 'Industry-specific discussion on AI adoption in clinical workflows.' },
              { date: 'Apr 12', month: 'APR', title: 'Zynex Hackathon: Build the Future', type: 'HACKATHON', desc: '48-hour hackathon with $50K in prizes. Build on Zynex APIs and win.' },
            ].map((event, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 flex max-md:flex-col gap-6 items-center hover:border-[#056CB8] transition-colors">
                <div className="w-16 h-16 bg-[#056CB8]/10 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#056CB8]">{event.month}</span>
                  <span className="text-xl font-bold text-[#056CB8]">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1 max-md:text-center">
                  <div className="flex max-md:justify-center items-center gap-3 mb-1">
                    <h3 className="text-base font-bold text-[#111111]">{event.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] bg-[#f5f5f5] text-[#555555] px-2 py-0.5">{event.type}</span>
                  </div>
                  <p className="text-sm text-[#555555]">{event.desc}</p>
                </div>
                <a href="/contact" className="text-sm text-[#056CB8] font-semibold flex-shrink-0 hover:underline">Register &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY HIGHLIGHTS ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem]" data-animate="fade-up">
            Community Voices
          </h2>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { quote: 'The developer forum helped us integrate Zynex APIs into our workflow in just a few days. Great community support.', name: 'Developer', role: 'Zynex User' },
              { quote: 'Zynex community events are a great way to learn about new features and connect with other users.', name: 'Team Lead', role: 'Zynex Client' },
              { quote: 'Being an early adopter gave us direct access to the engineering team. Our feedback actually shaped the product.', name: 'Early Adopter', role: 'Zynex Champion' },
            ].map((testimonial, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6">
                <p className="text-6xl text-[#056CB8]/15 font-serif leading-none mb-2">&ldquo;</p>
                <p className="text-sm text-[#111111] italic leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="pt-4 border-t border-[#e0e0e0]">
                  <p className="text-sm font-bold text-[#111111]">{testimonial.name}</p>
                  <p className="text-xs text-[#555555]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTRIBUTE ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Ways to Contribute
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              The community thrives because of people like you. Here is how you can give back.
            </p>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              { icon: 'bi-file-earmark-text', title: 'Write', desc: 'Author blog posts, tutorials, or case studies.' },
              { icon: 'bi-headset', title: 'Mentor', desc: 'Help newcomers get started with Zynex tools.' },
              { icon: 'bi-people', title: 'Organize', desc: 'Host or co-host local meetups and workshops.' },
              { icon: 'bi-patch-check-fill', title: 'Review', desc: 'Test beta features and provide early feedback.' },
            ].map((way, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 text-center">
                <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center mx-auto mb-4">
                  <i className={`bi ${way.icon} text-xl text-[#056CB8]`}></i>
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{way.title}</h3>
                <p className="text-sm text-[#555555]">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Ready to Join?
          </h2>
          <p className="text-white/60 mb-8">
            It takes 30 seconds to create your community account. Start connecting, learning, and building today.
          </p>
          <a href="/contact" className="group inline-flex items-center gap-3 justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
            Join the Community <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
