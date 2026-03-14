import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'Healthcare Solutions',
  description:
    'HIPAA-compliant healthcare technology for patient management, diagnostics support, and clinical workflow automation.',
  alternates: { canonical: 'https://zynex.ai/industries/healthcare' },
  openGraph: {
    title: 'Healthcare Solutions',
    description:
      'HIPAA-compliant healthcare technology for patient management, diagnostics support, and clinical workflow automation.',
  },
};

const careFlowStages = [
  { icon: 'bi-file-earmark-text', name: 'Registration', desc: 'Patient intake and data capture' },
  { icon: 'bi-activity', name: 'Triage', desc: 'Priority assessment and routing' },
  { icon: 'bi-bar-chart-line-fill', name: 'Diagnosis', desc: 'Clinical evaluation and testing' },
  { icon: 'bi-patch-check-fill', name: 'Treatment', desc: 'Care delivery and monitoring' },
  { icon: 'bi-graph-up-arrow', name: 'Billing', desc: 'Claims processing and payment' },
  { icon: 'bi-arrow-repeat', name: 'Follow-up', desc: 'Post-care engagement' },
];

const modules = [
  {
    icon: 'bi-file-earmark-text',
    title: 'Electronic Health Records',
    desc: 'Centralized, interoperable patient records with AI-powered insights for faster clinical decisions.',
    features: ['Unified patient timeline', 'Real-time data sync', 'HL7 FHIR interoperability'],
  },
  {
    icon: 'bi-calendar-check-fill',
    title: 'Appointment Scheduling',
    desc: 'Intelligent scheduling that optimizes provider availability and reduces patient wait times.',
    features: ['AI-driven slot optimization', 'Automated reminders', 'Multi-location support'],
  },
  {
    icon: 'bi-list-check',
    title: 'Pharmacy Management',
    desc: 'End-to-end medication tracking from prescription to dispensing with interaction alerts.',
    features: ['Drug interaction checks', 'Inventory management', 'E-prescriptions'],
  },
  {
    icon: 'bi-bar-chart-fill',
    title: 'Lab & Diagnostics',
    desc: 'Streamlined lab order management with automated result routing and critical value alerts.',
    features: ['Order tracking dashboard', 'Auto result notifications', 'Integration with lab devices'],
  },
  {
    icon: 'bi-graph-up',
    title: 'Billing & Claims',
    desc: 'Automated claims submission, denial management, and real-time revenue cycle visibility.',
    features: ['Auto claim generation', 'Denial root-cause analysis', 'Payment reconciliation'],
  },
  {
    icon: 'bi-headset',
    title: 'Telemedicine',
    desc: 'HIPAA-compliant virtual visits with integrated charting, e-prescriptions, and follow-up workflows.',
    features: ['HD video consultations', 'Screen sharing', 'Virtual waiting room'],
  },
];

const comparisonRows = [
  { before: 'Paper Records', after: 'Digital EHR' },
  { before: 'Manual Scheduling', after: 'AI Scheduling' },
  { before: 'Phone Follow-ups', after: 'Automated Reminders' },
  { before: 'Siloed Data', after: 'Unified Platform' },
  { before: 'Manual Billing', after: 'Automated Claims' },
];

const metrics = [
  { value: '35%', label: 'Faster Patient Processing' },
  { value: '60%', label: 'Less Paperwork' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '4.8/5', label: 'Provider Satisfaction' },
];

export default function HealthcarePage() {
  return (
    <main>
      {/* ===== Section 1: Split Hero with Patient Dashboard ===== */}
      <section className="bg-white pt-40 max-md:pt-24 pb-32 px-6 max-[480px]:px-4 max-[480px]:pb-16">
        <p className="text-sm text-[#555555] mb-8 max-w-6xl mx-auto max-[480px]:text-xs">
          Home / Industries / Healthcare
        </p>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-[480px]:gap-10 items-center max-w-6xl mx-auto">
          {/* Left */}
          <div data-animate="fade-up">
            <span className="inline-block bg-[#22c55e]/10 text-[#22c55e] text-xs font-semibold tracking-[0.05em] uppercase px-4 py-1.5 rounded-full mb-6">
              Healthcare Solutions
            </span>
            <h1 className="text-4xl md:text-5xl max-[480px]:text-[1.75rem] font-bold text-[#111111] leading-tight mb-6">
              Intelligent Healthcare Management Platform
            </h1>
            <p className="text-[#555555] text-lg leading-relaxed mb-8">
              Zynex delivers a unified platform purpose-built for healthcare organizations.
              Streamline patient workflows, ensure regulatory compliance, and empower your
              care teams with tools designed for clinical precision and operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/contact"
                className="group inline-block bg-[#056CB8] text-white px-8 py-3.5 rounded-none uppercase tracking-[0.05em] text-sm font-semibold no-underline"
              >
                Request a Demo <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
              </a>
              <a
                href="/solutions"
                className="inline-block border border-[#111111] text-[#111111] px-8 py-3.5 rounded-none uppercase tracking-[0.05em] text-sm font-semibold no-underline"
              >
                Learn More
              </a>
            </div>
            <p className="text-xs text-[#555555] tracking-[0.05em] uppercase font-medium">
              HIPAA Compliant | SOC 2 Certified | HL7 Ready
            </p>
          </div>

          {/* Right: Patient Dashboard Mockup */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-6 max-[480px]:p-4 overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#111111] m-0 max-[480px]:text-base">Patient Overview</h3>
              <span className="flex items-center gap-2 text-sm text-[#22c55e] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block"></span>
                Active
              </span>
            </div>

            {/* Mini Stat Cards */}
            <div className="grid grid-cols-3 gap-3 mb-5 max-[480px]:gap-2">
              <div className="bg-white border border-[#e0e0e0] p-3 text-center max-[480px]:p-2">
                <p className="text-2xl font-bold text-[#056CB8] m-0 max-[480px]:text-lg">47</p>
                <p className="text-xs text-[#555555] m-0 mt-1 max-[480px]:text-[10px]">Today&apos;s Appts</p>
              </div>
              <div className="bg-white border border-[#e0e0e0] p-3 text-center max-[480px]:p-2">
                <p className="text-2xl font-bold text-[#056CB8] m-0 max-[480px]:text-lg">82%</p>
                <p className="text-xs text-[#555555] m-0 mt-1 max-[480px]:text-[10px]">Bed Occupancy</p>
              </div>
              <div className="bg-white border border-[#e0e0e0] p-3 text-center max-[480px]:p-2">
                <p className="text-2xl font-bold text-[#056CB8] m-0 max-[480px]:text-lg">124</p>
                <p className="text-xs text-[#555555] m-0 mt-1 max-[480px]:text-[10px]">Staff on Duty</p>
              </div>
            </div>

            {/* Patient Table Mockup */}
            <div className="bg-white border border-[#e0e0e0] overflow-x-auto">
              <div className="grid grid-cols-4 gap-0 text-xs font-semibold text-[#555555] uppercase tracking-wider border-b border-[#e0e0e0] min-w-[400px]">
                <div className="p-3">ID</div>
                <div className="p-3">Name</div>
                <div className="p-3">Status</div>
                <div className="p-3">Dept</div>
              </div>
              {[
                { id: 'P-1042', name: 'Sarah Johnson', status: 'Admitted', color: 'bg-[#056CB8]', dept: 'Cardiology' },
                { id: 'P-1043', name: 'Michael Chen', status: 'In Triage', color: 'bg-[#F60014]', dept: 'Emergency' },
                { id: 'P-1044', name: 'Emma Williams', status: 'Discharged', color: 'bg-[#22c55e]', dept: 'Orthopedics' },
                { id: 'P-1045', name: 'James Brown', status: 'Scheduled', color: 'bg-[#555555]', dept: 'Neurology' },
              ].map((row) => (
                <div
                  key={row.id}
                  className="grid grid-cols-4 gap-0 text-sm text-[#111111] border-b border-[#e0e0e0] last:border-b-0 min-w-[400px]"
                >
                  <div className="p-3 font-medium max-[480px]:text-xs">{row.id}</div>
                  <div className="p-3 max-[480px]:text-xs">{row.name}</div>
                  <div className="p-3">
                    <span
                      className={`inline-block ${row.color} text-white text-xs px-2 py-0.5 rounded-none`}
                    >
                      {row.status}
                    </span>
                  </div>
                  <div className="p-3 max-[480px]:text-xs">{row.dept}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Patient Care Flow — Horizontal Pipeline ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
          <h2 className="text-3xl max-[480px]:text-2xl font-bold text-[#111111] text-center mb-14 max-[480px]:mb-8">
            Streamlined Patient Care Journey
          </h2>
          </div>
          <div className="flex max-md:flex-col items-center gap-0 max-w-5xl mx-auto overflow-x-auto max-[480px]:items-stretch">
            {careFlowStages.map((stage, i) => (
              <div key={stage.name} className="flex max-md:flex-col items-center max-[480px]:w-full">
                <div className="bg-white border border-[#e0e0e0] p-5 min-w-[160px] max-[480px]:min-w-0 max-[480px]:w-full text-center">
                  <i className={`bi ${stage.icon} text-2xl text-[#056CB8] mb-2 block`}></i>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">{stage.name}</h3>
                  <p className="text-xs text-[#555555] m-0 leading-snug">{stage.desc}</p>
                </div>
                {i < careFlowStages.length - 1 && (
                  <span className="text-[#056CB8] text-2xl max-md:rotate-90 px-2 max-md:py-2 flex-shrink-0">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 3: Core Modules — Left-Accent Cards ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
          <h2 className="text-3xl max-[480px]:text-2xl font-bold text-[#111111] text-center mb-14 max-[480px]:mb-8">
            Comprehensive Healthcare Modules
          </h2>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="border-l-4 border-l-[#056CB8] border border-[#e0e0e0] bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`bi ${mod.icon} text-lg text-[#056CB8]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] m-0">{mod.title}</h3>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed mb-4">{mod.desc}</p>
                <ul className="list-none m-0 p-0 flex flex-col gap-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#111111]">
                      <i className="bi bi-check-circle-fill text-[#22c55e] text-xs"></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 4: Compliance & Security — Full-Width Dark Banner ===== */}
      <section className="bg-[#111111] text-white py-20 px-6 max-[480px]:px-4 max-[480px]:py-14">
        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-8 items-center max-w-5xl mx-auto" data-animate="fade-up">
          <div className="col-span-3 max-md:col-span-1">
            <h2 className="text-3xl max-[480px]:text-2xl font-bold mb-4">
              Healthcare-Grade Security &amp; Compliance
            </h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Every layer of the Zynex platform is engineered to meet the most stringent
              healthcare regulations. From end-to-end encryption and role-based access controls
              to continuous audit logging and automated compliance reporting, we ensure your
              patient data stays protected while you focus on delivering exceptional care.
            </p>
          </div>
          <div className="col-span-2 max-md:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'HIPAA', icon: 'bi-shield-fill-check' },
                { label: 'SOC 2', icon: 'bi-shield-check' },
                { label: 'GDPR', icon: 'bi-lock-fill' },
                { label: 'HL7 FHIR', icon: 'bi-arrow-left-right' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="bg-white/5 border border-white/10 p-4 text-center"
                >
                  <i className={`bi ${badge.icon} text-2xl block mb-2`}></i>
                  <span className="text-sm font-semibold">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Before vs After — Comparison Table ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="max-w-3xl mx-auto">
          <div data-animate="fade-up">
          <h2 className="text-3xl max-[480px]:text-2xl font-bold text-[#111111] text-center mb-14 max-[480px]:mb-8">
            The Zynex Difference
          </h2>
          </div>
          <div className="bg-white border border-[#e0e0e0]" data-animate="fade-up">
            {/* Table Header */}
            <div className="grid grid-cols-2 border-b border-[#e0e0e0]">
              <div className="p-4 text-sm font-bold text-[#555555] uppercase tracking-wider">
                Before Zynex
              </div>
              <div className="p-4 text-sm font-bold text-[#111111] uppercase tracking-wider border-l border-[#e0e0e0]">
                With Zynex
              </div>
            </div>
            {/* Table Rows */}
            {comparisonRows.map((row) => (
              <div
                key={row.before}
                className="grid grid-cols-2 border-b border-[#e0e0e0] last:border-b-0"
              >
                <div className="p-4 flex items-center gap-3 text-[#555555]">
                  <i className="bi bi-calendar-x-fill text-[#F60014]"></i>
                  <span className="text-sm">{row.before}</span>
                </div>
                <div className="p-4 flex items-center gap-3 text-[#111111] border-l border-[#e0e0e0]">
                  <i className="bi bi-check-circle-fill text-[#22c55e]"></i>
                  <span className="text-sm font-medium">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 6: Impact Metrics ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 max-[480px]:gap-4 max-w-5xl mx-auto text-center" data-animate="fade-up">
          {metrics.map((m) => (
            <div key={m.label} className="border-t-2 border-[#056CB8] pt-6 max-[480px]:pt-4">
              <p className="text-5xl font-bold text-[#056CB8] m-0 mb-2 max-[480px]:text-3xl"><CountUp value={m.value} /></p>
              <p className="text-sm text-[#555555] m-0 max-[480px]:text-xs">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Section 7: CTA ===== */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-3xl max-[480px]:text-2xl font-bold text-[#111111] mb-4">
            Ready to Transform Patient Care?
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed mb-8">
            Join leading healthcare organizations already using Zynex to improve patient
            outcomes, streamline operations, and stay ahead of regulatory demands.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="/contact"
              className="group inline-block bg-[#056CB8] text-white px-8 py-3.5 rounded-none uppercase tracking-[0.05em] text-sm font-semibold no-underline"
            >
              Request a Demo <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a
              href="/contact"
              className="group inline-block border border-[#111111] text-[#111111] px-8 py-3.5 rounded-none uppercase tracking-[0.05em] text-sm font-semibold no-underline"
            >
              Talk to Sales <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
          </div>
          <p className="text-xs text-[#555555] tracking-[0.05em] uppercase font-medium">
            HIPAA Compliant | 24/7 Support | No Setup Fees
          </p>
        </div>
      </section>
    </main>
  );
}
