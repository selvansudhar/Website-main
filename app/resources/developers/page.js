"use client";

import { useState } from 'react';

const techStack = [
  {
    category: 'Frontend',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: 'Backend',
    tools: ['Node.js', 'Python', 'Go', 'GraphQL'],
  },
  {
    category: 'AI & ML',
    tools: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI'],
  },
  {
    category: 'Infrastructure',
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Data',
    tools: ['PostgreSQL', 'Redis', 'Elasticsearch', 'MongoDB'],
  },
  {
    category: 'DevOps',
    tools: ['GitHub Actions', 'Jenkins', 'Grafana', 'Datadog'],
  },
];

const integrations = [
  {
    icon: 'bi-arrow-left-right',
    title: 'ERP & CRM Connectors',
    desc: 'Pre-built connectors for SAP, Salesforce, Oracle, Microsoft Dynamics, and more — enabling seamless data sync with your existing enterprise systems.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Webhook & Event System',
    desc: 'Real-time event notifications for module actions — new invoice in Finance Plus, deal closed in CRM Lite, leave approved in HR, and 50+ other triggers.',
  },
  {
    icon: 'bi-shield-fill-check',
    title: 'SSO & Identity',
    desc: 'SAML 2.0 and OAuth 2.0 integration for Single Sign-On. Connect with Okta, Azure AD, Google Workspace, and any LDAP directory.',
  },
  {
    icon: 'bi-inbox-fill',
    title: 'Communication Platforms',
    desc: 'Native integrations with Slack, Microsoft Teams, Google Chat, and email — surface Zynex notifications and YenAI responses where your team already works.',
  },
  {
    icon: 'bi-bar-chart-fill',
    title: 'BI & Analytics Tools',
    desc: 'Export data to Tableau, Power BI, Looker, or Google Data Studio. Scheduled exports and live dashboards powered by Zynex data.',
  },
  {
    icon: 'bi-calendar-check-fill',
    title: 'Productivity & Workflow',
    desc: 'Sync with Jira, Asana, Trello, and Notion. Connect Project Plus tasks and timelines bidirectionally with your team\'s preferred tools.',
  },
];

const devServices = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'SaaS Product Development',
    desc: 'Full-stack cloud-native SaaS applications — from MVP to enterprise scale. Multi-tenant architecture, subscription billing, and analytics built in.',
    link: '/solutions/saas-development',
  },
  {
    icon: 'bi-people-fill',
    title: 'B2B Web Applications',
    desc: 'Custom portals, dashboards, automation platforms, and integration hubs purpose-built for complex B2B workflows and enterprise security.',
    link: '/solutions/b2b-development',
  },
  {
    icon: 'bi-star-fill',
    title: 'E-Commerce Solutions',
    desc: 'Headless storefronts, omnichannel platforms, payment integrations, and AI-powered product recommendations that convert browsers into buyers.',
    link: '/solutions/ecommerce',
  },
  {
    icon: 'bi-bullseye',
    title: 'AI-Powered Solutions',
    desc: 'Custom AI models, NLP engines, predictive analytics, and intelligent automation tailored to your industry and business workflows.',
    link: '/solutions/ai-solutions',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery & Planning', desc: 'We analyze your requirements, map technical architecture, and define milestones with your team.' },
  { num: '02', title: 'Design & Prototype', desc: 'UI/UX design, interactive prototypes, and user testing — before a single line of production code.' },
  { num: '03', title: 'Build & Iterate', desc: 'Agile sprints with weekly demos. Continuous integration, automated testing, and code reviews at every step.' },
  { num: '04', title: 'Launch & Scale', desc: 'Production deployment, performance monitoring, and ongoing support to scale as your business grows.' },
];

export default function Developers() {
  const [activeStack, setActiveStack] = useState(0);

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://zynex.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Developers" }
        ]
      }) }} />

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-white/50 mb-8">Home / Resources / Developers</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            <div data-animate="fade-left">
              <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
                FOR DEVELOPERS
              </span>
              <h1 className="text-[3rem] font-bold leading-[1.1] mb-6 max-md:text-[2.2rem]">
                Engineering That<br />
                <span className="text-[#056CB8]">Delivers Results</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                Zynex builds enterprise-grade software using modern technologies. Explore our tech stack, integration capabilities, and custom development services.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
                  Start a Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                </a>
                <a href="/solutions/ai-solutions" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Terminal-style mockup */}
            <div className="bg-[#0a0a0a] border border-white/10 overflow-hidden max-lg:max-w-lg" data-animate="fade-right">
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F60014]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
                </div>
                <span className="text-xs text-white/40 font-mono ml-2">zynex-platform</span>
              </div>
              <div className="p-6 font-mono text-[0.78rem] leading-[1.8] text-white/70">
                <p><span className="text-[#22c55e]">$</span> zynex deploy --production</p>
                <p className="text-white/40 mt-2">Building modules...</p>
                <p className="text-white/40">&nbsp;&nbsp;&#10003; Finance Plus &nbsp;&nbsp;&nbsp;configured</p>
                <p className="text-white/40">&nbsp;&nbsp;&#10003; CRM Lite &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;configured</p>
                <p className="text-white/40">&nbsp;&nbsp;&#10003; YenAI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;configured</p>
                <p className="text-white/40">&nbsp;&nbsp;&#10003; Knowledge Base &nbsp;configured</p>
                <p className="text-white/40">&nbsp;&nbsp;&#10003; Project Plus &nbsp;&nbsp;configured</p>
                <p className="text-white/40 mt-2">Running health checks...</p>
                <p className="text-[#22c55e] mt-1">&#10003; All 9 modules deployed successfully</p>
                <p className="text-[#056CB8] mt-1">&#8594; Platform live at app.zynex.ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Our Tech Stack
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              We choose the right tools for each challenge — modern, battle-tested technologies that scale.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {techStack.map((stack, i) => (
              <button
                key={i}
                onClick={() => setActiveStack(i)}
                className={`px-5 py-2.5 border cursor-pointer transition-colors text-sm font-semibold ${
                  activeStack === i
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#111111] border-[#e0e0e0] hover:border-[#111111]'
                }`}
              >
                {stack.category}
              </button>
            ))}
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4" data-animate="fade-up" data-delay="2">
            {techStack[activeStack].tools.map((tool, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-6 text-center hover:border-[#056CB8] transition-colors">
                <p className="text-base font-bold text-[#111111]">{tool}</p>
                <p className="text-xs text-[#555555] mt-1">{techStack[activeStack].category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION CAPABILITIES ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Integration Capabilities
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              Connect Zynex with the tools your team already uses. Pre-built integrations and custom connectors for seamless workflows.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {integrations.map((item, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6 hover:border-[#056CB8] transition-colors">
                <div className="w-11 h-11 bg-[#056CB8]/10 flex items-center justify-center mb-4">
                  <i className={`bi ${item.icon} text-lg text-[#056CB8]`}></i>
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEVELOPMENT SERVICES ===== */}
      <section className="bg-[#111111] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-center mb-4 max-md:text-[1.75rem]">
              Custom Development Services
            </h2>
            <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
              Beyond our platform — we build custom software tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {devServices.map((service, i) => (
              <a key={i} href={service.link} className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-colors">
                <div className="w-11 h-11 bg-[#056CB8]/20 flex items-center justify-center mb-4">
                  <i className={`bi ${service.icon} text-lg text-[#056CB8]`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{service.desc}</p>
                <span className="text-sm font-semibold text-[#056CB8]">Learn more &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              How We Build
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              A proven development process that balances speed with quality.
            </p>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {processSteps.map((step, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6">
                <span className="text-3xl font-bold text-[#e0e0e0] block mb-4">{step.num}</span>
                <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM MODULES ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div data-animate="fade-up">
            <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-4 max-md:text-[1.75rem]">
              Built-In Platform Modules
            </h2>
            <p className="text-[#555555] text-center mb-16 max-w-2xl mx-auto">
              The Zynex platform comes with 8 integrated modules — each designed to work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-4" data-animate="fade-up" data-delay="2">
            {[
              { name: 'YenAI', desc: 'AI Digital Twin that responds like you', href: '/products/yenai' },
              { name: 'Assistant Hub', desc: 'Deploy AI assistants across departments', href: '/products/assistant-hub' },
              { name: 'Knowledge Base', desc: 'Centralized company knowledge with AI search', href: '/products/knowledge-base' },
              { name: 'CRM Lite', desc: 'Pipeline management & lead tracking', href: '/products/crm-lite' },
              { name: 'Finance Plus', desc: 'Invoicing, accounting & AI forecasting', href: '/products/finance-plus' },
              { name: 'Human Resources', desc: 'Payroll, leave, performance & onboarding', href: '/products/human-resources' },
              { name: 'Project Plus', desc: 'Task management & team collaboration', href: '/products/project-plus' },
              { name: 'Marketing Automation', desc: 'Campaign builder & audience targeting', href: '/products/marketing-automation' },
            ].map((mod, i) => (
              <a key={i} href={mod.href} className="group bg-white border border-[#e0e0e0] p-5 flex items-start gap-4 hover:border-[#056CB8] transition-colors">
                <div className="w-9 h-9 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#056CB8]">{mod.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#056CB8] transition-colors">{mod.name}</h4>
                  <p className="text-xs text-[#555555] mt-1">{mod.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Start building with Zynex APIs today
          </h2>
          <p className="text-white/60 mb-8">
            Access comprehensive documentation, SDKs, and developer tools. Build custom integrations that extend the Zynex platform.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
              Explore Developer Docs <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
            </a>
            <a href="/enterprise" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/70 font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-white/10 transition-colors">
              Explore the Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
