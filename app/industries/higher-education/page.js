export const metadata = {
  title: 'Higher Education Solutions',
  description: 'Digital campus solutions for student management, online learning, admissions, and academic analytics.',
  alternates: { canonical: 'https://zynex.ai/industries/higher-education' },
  openGraph: {
    title: 'Higher Education Solutions',
    description: 'Digital campus solutions for student management, online learning, admissions, and academic analytics.',
  },
};

export default function HigherEducationPage() {
  const journeySteps = [
    { icon: 'bi-people-fill', step: '01', title: 'Recruitment', description: 'Attract top talent with targeted outreach campaigns and prospect management.' },
    { icon: 'bi-file-earmark-text', step: '02', title: 'Admission', description: 'Streamline applications with AI-powered review and automated workflows.' },
    { icon: 'bi-person-check', step: '03', title: 'Enrollment', description: 'Simplify registration, course selection, and onboarding for new students.' },
    { icon: 'bi-bar-chart-fill', step: '04', title: 'Academics', description: 'Deliver personalized learning paths and real-time performance tracking.' },
    { icon: 'bi-star-fill', step: '05', title: 'Alumni', description: 'Build lifelong connections through engagement programs and donor relations.' },
  ];

  const campusSolutions = [
    {
      category: 'STUDENT MANAGEMENT',
      title: 'Student Information System',
      description: 'A centralized hub for managing every aspect of the student lifecycle, from first inquiry through graduation and beyond.',
      bullets: ['Unified student profiles with complete academic history', 'Automated degree audits and progress tracking', 'Real-time enrollment and registration management'],
      icon: 'bi-people',
    },
    {
      category: 'ACADEMIC TOOLS',
      title: 'Learning Management',
      description: 'AI-enhanced course delivery platform that adapts to individual learning styles and keeps students engaged throughout their academic journey.',
      bullets: ['Adaptive learning paths powered by AI', 'Interactive content authoring and assessment tools', 'Integrated grade analytics and feedback loops'],
      icon: 'bi-bar-chart-line-fill',
    },
    {
      category: 'FINANCE & AID',
      title: 'Financial Aid & Billing',
      description: 'End-to-end financial management that simplifies tuition billing, scholarship distribution, and financial aid processing for students and staff.',
      bullets: ['Automated scholarship and grant matching', 'Self-service billing portal for students and families', 'Compliance-ready reporting for federal aid programs'],
      icon: 'bi-graph-up-arrow',
    },
    {
      category: 'INSIGHTS & REPORTING',
      title: 'Campus Analytics',
      description: 'Transform institutional data into actionable insights with dashboards that empower leaders to make evidence-based decisions across every department.',
      bullets: ['Real-time dashboards for enrollment and retention', 'Predictive analytics for student success intervention', 'Cross-departmental reporting and benchmarking'],
      icon: 'bi-graph-up',
    },
  ];

  const capabilities = [
    'Student Portal',
    'Automated Grading',
    'Attendance Tracking',
    'Course Registration',
    'Faculty Management',
    'Library Integration',
    'Alumni Network',
    'Research Management',
    'Accreditation Support',
    'Mobile Campus App',
    'Parent Portal',
    'Event Management',
  ];

  return (
    <div className="min-h-screen">

      {/* ===== SECTION 1: HERO ===== */}
      <section className="bg-[#f5f5f5] pt-40 max-md:pt-24 pb-32 px-6">
        <p className="text-sm text-[#555555] mb-8 text-center">Home / Industries / Higher Education</p>
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#056CB8]/10 text-[#056CB8] text-xs font-semibold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-6">
            Higher Education Platform
          </span>
          <h1 className="text-5xl max-md:text-3xl font-bold text-[#111111] leading-tight mb-6">
            Empowering the Future of Education
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed mb-8 max-w-2xl mx-auto">
            Zynex helps universities and colleges modernize operations, enhance learning outcomes, and create seamless digital campus experiences that put students first.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#056CB8] text-white font-semibold text-sm uppercase tracking-[0.05em] rounded-none"
            >
              Request a Demo
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#111111] text-[#111111] font-semibold text-sm uppercase tracking-[0.05em] rounded-none"
            >
              Explore Solutions
            </a>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mt-16 max-w-2xl mx-auto">
            {[
              { value: '50K+', label: 'Students' },
              { value: '150+', label: 'Institutions' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 text-center">
                <p className="text-3xl font-bold text-[#056CB8] mb-1">{stat.value}</p>
                <p className="text-sm text-[#555555]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: STUDENT JOURNEY ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl max-md:text-2xl font-bold text-[#111111] text-center mb-16">
            The Complete Student Lifecycle
          </h2>
          <div className="flex max-md:flex-col items-start justify-between gap-4 max-w-5xl mx-auto">
            {journeySteps.map((step, i) => (
              <div key={i} className="flex max-md:flex-row items-center max-md:items-start flex-col text-center max-md:text-left gap-3 flex-1">
                <div className="flex flex-col items-center max-md:items-start gap-3">
                  <div className="w-12 h-12 bg-[#056CB8]/10 flex items-center justify-center">
                    <i className={`bi ${step.icon} text-[#056CB8] text-xl`}></i>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#056CB8]">Step {step.step}</p>
                  <h3 className="text-base font-bold text-[#111111]">{step.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{step.description}</p>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="max-md:hidden border-t border-dashed border-[#e0e0e0] flex-1 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: CAMPUS SOLUTIONS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl max-md:text-2xl font-bold text-[#111111] text-center mb-16">
            Solutions for Every Campus Need
          </h2>
          {campusSolutions.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center mb-16 last:mb-0"
            >
              <div className={i % 2 === 1 ? 'max-md:order-1 order-2' : 'max-md:order-1'}>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#056CB8] mb-3">{feature.category}</p>
                <h3 className="text-2xl font-bold text-[#111111] mb-4">{feature.title}</h3>
                <p className="text-[#555555] leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3 list-none m-0 p-0">
                  {feature.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#111111]">
                      <i className="bi bi-check-circle-fill text-[#22c55e] mt-0.5 flex-shrink-0"></i>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'order-1' : 'order-2 max-md:order-1'}>
                <div className="bg-white border border-[#e0e0e0] h-64 flex flex-col items-center justify-center gap-3">
                  <i className={`bi ${feature.icon} text-6xl text-[#e0e0e0]`}></i>
                  <span className="text-sm text-[#555555]">Image coming soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 4: TESTIMONIAL ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-8xl text-[#056CB8]/20 font-serif leading-none mb-4">&ldquo;</p>
          <blockquote className="text-xl text-[#111111] italic leading-relaxed mb-8">
            Zynex transformed how we manage our 30,000+ students across 12 departments. The automation alone saved us 2,000 hours annually.
          </blockquote>
          <div className="w-12 h-0.5 bg-[#056CB8] mx-auto mb-4"></div>
          <p className="text-base font-bold text-[#111111]">Dr. Sarah Mitchell</p>
          <p className="text-sm text-[#555555]">VP of Technology, State University</p>
        </div>
      </section>

      {/* ===== SECTION 5: BY THE NUMBERS ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl max-md:text-2xl font-bold text-[#111111] text-center mb-16">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6 max-w-5xl mx-auto">
            {[
              { number: '40%', metric: 'Reduction in Admin Time', description: 'Automated workflows free up staff to focus on student success instead of paperwork.' },
              { number: '3x', metric: 'Faster Enrollment', description: 'Streamlined processes cut enrollment cycle times from weeks to days.' },
              { number: '95%', metric: 'Data Accuracy', description: 'Centralized records eliminate duplicate entries and ensure reliable reporting.' },
              { number: '$2M+', metric: 'Annual Savings', description: 'Institutions save significantly through operational efficiency and resource optimization.' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 text-center">
                <p className="text-4xl font-bold text-[#056CB8] mb-2">{stat.number}</p>
                <p className="text-sm font-semibold text-[#111111] mb-2">{stat.metric}</p>
                <p className="text-xs text-[#555555] leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: PLATFORM CAPABILITIES ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl max-md:text-2xl font-bold text-[#111111] text-center mb-16">
            Everything You Need for Modern Education
          </h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-12 max-md:gap-4 gap-y-4 max-w-4xl mx-auto">
            {capabilities.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <i className="bi bi-check-circle-fill text-[#22c55e] flex-shrink-0"></i>
                <span className="text-[#111111] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl max-md:text-2xl font-bold leading-tight mb-4">
              Transform Your Campus Today
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Join forward-thinking institutions that trust Zynex to power their digital campus. See how we can streamline your operations and elevate the student experience.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#056CB8] text-white font-semibold text-sm uppercase tracking-[0.05em] rounded-none"
              >
                Get Started
              </a>
              <a href="/resources/help-center" className="text-white text-sm font-medium underline underline-offset-4">
                Talk to an Expert
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { value: '50K+', label: 'Students Managed' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#056CB8] pl-5 py-2">
                <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                <p className="text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
