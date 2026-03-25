import CountUp from '@/components/CountUp';

export const metadata = {
  title: "Manufacturing Solutions | Zynex",
  description:
    "Smart factory operations platform powering 300+ production facilities with AI-driven manufacturing intelligence, predictive maintenance, and real-time quality control.",
};

export default function ManufacturingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
          { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://zynex.ai/industries" },
          { "@type": "ListItem", "position": 3, "name": "Manufacturing" }
        ]
      }) }} />
      {/* ───────── Section 1: Hero with Production Command Center Mockup ───────── */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-32 px-6 max-[480px]:px-4 max-[480px]:pb-16">
        <p className="text-sm text-white/50 mb-8 max-w-6xl mx-auto max-[480px]:text-xs">
          Home / Industries / Manufacturing
        </p>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-[480px]:gap-10 items-center max-w-6xl mx-auto">
          {/* Left */}
          <div data-animate="fade-up">
            <span className="inline-block bg-[#F60014]/20 text-[#F60014] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Manufacturing Solutions
            </span>
            <h1 className="text-5xl max-md:text-3xl font-bold leading-tight mb-6">
              Smart Factory Operations Platform
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Unify your production floor with AI-powered intelligence. Monitor,
              optimize, and scale every aspect of manufacturing — from raw
              materials to final dispatch — in a single command center.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#F60014] text-white px-7 py-3 rounded-none uppercase tracking-[0.05em] text-sm font-semibold hover:opacity-90 transition"
              >
                Get Started <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-7 py-3 rounded-none uppercase tracking-[0.05em] text-sm font-semibold hover:bg-white/10 transition"
              >
                Watch Demo
              </a>
            </div>
            <p className="text-white/40 text-sm">
              Powering 300+ Production Facilities
            </p>
          </div>

          {/* Right — Command Center Mockup */}
          <div className="bg-white/5 border border-white/10 p-6 max-[480px]:p-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold tracking-wide max-[480px]:text-xs">
                Production Dashboard
              </span>
              <span className="flex items-center gap-2 text-xs text-white/60 max-[480px]:text-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#F60014] inline-block animate-pulse" />
                Live Monitoring
              </span>
            </div>

            {/* Gauge stat cards */}
            <div className="grid grid-cols-3 gap-3 max-[480px]:gap-2 mb-6">
              <div className="bg-white/5 border border-white/10 p-4 max-[480px]:p-2 text-center">
                <p className="text-2xl max-[480px]:text-lg font-bold text-[#22c55e]">87.3%</p>
                <p className="text-xs max-[480px]:text-[10px] text-white/50 mt-1">OEE</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 max-[480px]:p-2 text-center">
                <p className="text-2xl max-[480px]:text-lg font-bold text-[#056CB8]">1,247</p>
                <p className="text-xs max-[480px]:text-[10px] text-white/50 mt-1">Units/hr</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 max-[480px]:p-2 text-center">
                <p className="text-2xl max-[480px]:text-lg font-bold text-[#F60014]">0.02%</p>
                <p className="text-xs max-[480px]:text-[10px] text-white/50 mt-1">Defect Rate</p>
              </div>
            </div>

            {/* Production line status */}
            <div className="space-y-3">
              {[
                { line: "Line A", status: "Running", color: "#22c55e" },
                { line: "Line B", status: "Running", color: "#22c55e" },
                { line: "Line C", status: "Maintenance", color: "#f59e0b" },
                { line: "Line D", status: "Running", color: "#22c55e" },
              ].map((item) => (
                <div
                  key={item.line}
                  className="flex items-center justify-between bg-white/5 px-4 py-2"
                >
                  <span className="text-sm text-white/70">{item.line}</span>
                  <span className="flex items-center gap-2 text-xs">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: item.color }}
                    />
                    <span style={{ color: item.color }}>{item.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Section 2: Production Metrics Ribbon ───────── */}
      <section className="bg-[#F60014] text-white py-5 max-[480px]:py-4">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6 max-[480px]:gap-3 text-center max-w-6xl mx-auto px-6 max-[480px]:px-4" data-animate="fade-up">
          {[
            { value: "300+", label: "Factories" },
            { value: "99.7%", label: "Quality Rate" },
            { value: "24/7", label: "Monitoring" },
            { value: "35%", label: "Cost Reduction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold"><CountUp value={stat.value} /></p>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Section 3: Production Line Flow ───────── */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="text-center mb-16 max-[480px]:mb-10" data-animate="fade-up">
          <h2 className="text-4xl max-md:text-2xl max-[480px]:text-xl font-bold text-[#111111] mb-4">
            End-to-End Production Intelligence
          </h2>
          <p className="text-[#555555] max-w-xl mx-auto">
            A connected pipeline that transforms raw materials into finished
            products with intelligence at every stage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#e0e0e0] max-md:left-6 max-[480px]:left-4" />

          {[
            {
              step: 1,
              title: "Raw Material Intake",
              icon: "bi-inbox-fill",
              description:
                "Automated inventory tracking with IoT-enabled sensors that monitor incoming materials, verify quality specs, and update stock levels in real time.",
              side: "left",
            },
            {
              step: 2,
              title: "Production Planning",
              icon: "bi-calendar-check-fill",
              description:
                "AI-optimized scheduling that balances demand forecasts, resource availability, and equipment capacity to maximize throughput and minimize waste.",
              side: "right",
            },
            {
              step: 3,
              title: "Quality Control",
              icon: "bi-shield-fill-check",
              description:
                "Real-time defect detection using computer vision and sensor analytics, catching deviations before they impact downstream processes.",
              side: "left",
            },
            {
              step: 4,
              title: "Assembly & Packaging",
              icon: "bi-list-check",
              description:
                "Automated workflow management that coordinates robotic assembly, packaging sequences, and labeling with zero-error precision.",
              side: "right",
            },
            {
              step: 5,
              title: "Dispatch & Logistics",
              icon: "bi-arrow-left-right",
              description:
                "Smart route optimization that selects the fastest, most cost-effective delivery paths and tracks shipments from warehouse to customer.",
              side: "left",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative flex items-start mb-16 last:mb-0 max-md:flex-row"
            >
              {/* Numbered circle on the center line */}
              <div className="w-10 h-10 max-[480px]:w-8 max-[480px]:h-8 rounded-full bg-[#056CB8] text-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 max-md:left-6 max-[480px]:left-4 text-sm max-[480px]:text-xs font-bold z-10">
                {item.step}
              </div>

              {/* Card */}
              <div
                className={`bg-white border border-[#e0e0e0] p-6 max-[480px]:p-4 w-[45%] max-md:w-full max-md:ml-16 max-[480px]:ml-12 ${
                  item.side === "left"
                    ? "mr-auto max-md:mr-0"
                    : "ml-auto max-md:ml-16 max-[480px]:ml-12"
                }`}
              >
                <i
                  className={`bi ${item.icon} text-[#056CB8] text-2xl mb-3 block`}
                />
                <h3 className="text-lg font-bold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Section 4: Smart Factory Modules ───────── */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="text-center mb-16 max-[480px]:mb-10" data-animate="fade-up">
          <h2 className="text-4xl max-md:text-2xl max-[480px]:text-xl font-bold text-[#111111] mb-4">
            Smart Factory Modules
          </h2>
          <p className="text-[#555555] max-w-xl mx-auto">
            Modular capabilities that snap into your existing infrastructure and
            start delivering value from day one.
          </p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-w-5xl mx-auto" data-animate="fade-up" data-delay="2">
          {[
            {
              icon: "bi-activity",
              name: "Predictive Maintenance",
              description:
                "Forecast equipment failures before they happen. Reduce unplanned downtime by up to 45% with sensor-driven anomaly detection.",
              tag: "AI-Powered",
            },
            {
              icon: "bi-bar-chart-fill",
              name: "Inventory Optimization",
              description:
                "Maintain optimal stock levels across warehouses. Automated reorder triggers and demand-based allocation reduce carrying costs.",
              tag: "Real-Time",
            },
            {
              icon: "bi-people-fill",
              name: "Workforce Management",
              description:
                "Schedule shifts, track certifications, and allocate skilled operators to the right stations based on production requirements.",
              tag: "Automated",
            },
            {
              icon: "bi-lightning-charge-fill",
              name: "Energy Monitoring",
              description:
                "Track energy consumption per machine, per line, per facility. Identify waste patterns and optimize for sustainability targets.",
              tag: "Real-Time",
            },
            {
              icon: "bi-arrow-repeat",
              name: "Supply Chain Tracking",
              description:
                "End-to-end visibility from supplier to shelf. Monitor lead times, track shipments, and flag disruptions before they cascade.",
              tag: "AI-Powered",
            },
            {
              icon: "bi-file-earmark-text",
              name: "Compliance & Reporting",
              description:
                "Auto-generate audit-ready reports for ISO, OSHA, and industry-specific regulations with full traceability and version control.",
              tag: "Automated",
            },
          ].map((mod) => (
            <div
              key={mod.name}
              className="border-t-4 border-t-[#F60014] bg-white border border-[#e0e0e0] p-6"
            >
              <i
                className={`bi ${mod.icon} text-[#056CB8] text-2xl mb-4 block`}
              />
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                {mod.name}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed mb-4">
                {mod.description}
              </p>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#056CB8]/10 text-[#056CB8]">
                {mod.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Section 5: ROI Impact ───────── */}
      <section className="bg-[#111111] text-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="text-center mb-16 max-[480px]:mb-10" data-animate="fade-up">
          <h2 className="text-4xl max-md:text-2xl max-[480px]:text-xl font-bold mb-4">
            Measurable Production Impact
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Real results from real factories. Here is what our customers achieve
            within the first year of deployment.
          </p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-w-4xl mx-auto" data-animate="fade-up">
          {[
            {
              value: "35%",
              color: "#22c55e",
              label: "Reduction in Downtime",
              description:
                "Predictive maintenance and real-time alerts keep your lines running longer with fewer unplanned stops.",
            },
            {
              value: "2.4x",
              color: "#056CB8",
              label: "Production Throughput",
              description:
                "Intelligent scheduling and automated workflows multiply output without adding headcount or shifts.",
            },
            {
              value: "$4.2M",
              color: "#F60014",
              label: "Average Annual Savings",
              description:
                "Reduced waste, optimized energy, and streamlined operations add up to significant bottom-line savings.",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 p-8 max-[480px]:p-5 text-center"
            >
              <p
                className="text-6xl max-[480px]:text-4xl font-bold mb-3"
                style={{ color: stat.color }}
              >
                <CountUp value={stat.value} />
              </p>
              <p className="text-lg font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-white/50 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Section 6: Industry 4.0 Checklist ───────── */}
      <section className="bg-white py-24 px-6 max-[480px]:px-4 max-[480px]:py-16">
        <div className="text-center mb-16 max-[480px]:mb-10" data-animate="fade-up">
          <h2 className="text-4xl max-md:text-2xl max-[480px]:text-xl font-bold text-[#111111] mb-4">
            Industry 4.0 Ready
          </h2>
          <p className="text-[#555555] max-w-xl mx-auto">
            Everything you need for smart manufacturing
          </p>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-16 max-md:gap-4 gap-y-5 max-w-4xl mx-auto">
          {[
            "IoT Sensor Integration",
            "Predictive Analytics",
            "Digital Twin Support",
            "Automated Reporting",
            "Real-Time Alerts",
            "Machine Learning Models",
            "Edge Computing Ready",
            "API-First Architecture",
            "Custom Dashboards",
            "Multi-Plant Support",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <i className="bi bi-check-circle-fill text-[#22c55e] text-lg flex-shrink-0" />
              <span className="text-[#111111] font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Section 7: CTA ───────── */}
      <section className="bg-[#f5f5f5] py-24 px-6 max-[480px]:px-4 max-[480px]:py-16 text-center">
        <div data-animate="fade-up">
        <h2 className="text-4xl max-md:text-2xl max-[480px]:text-xl font-bold text-[#111111] mb-4">
          Optimize your factory floor with intelligent automation
        </h2>
        <p className="text-[#555555] max-w-xl mx-auto mb-8">
          Reduce downtime, improve quality control, and maximize throughput with AI-powered manufacturing solutions built for Industry 4.0.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#F60014] text-white px-7 py-3 rounded-none uppercase tracking-[0.05em] text-sm font-semibold hover:opacity-90 transition"
          >
            Get Started with Manufacturing <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
          </a>
          <a
            href="/contact"
            className="border border-[#111111] text-[#111111] px-7 py-3 rounded-none uppercase tracking-[0.05em] text-sm font-semibold hover:bg-[#111111] hover:text-white transition"
          >
            Download Whitepaper
          </a>
        </div>
        <p className="text-sm text-[#555555]">
          Trusted by manufacturers in 30+ countries
        </p>
        </div>
      </section>
    </>
  );
}
