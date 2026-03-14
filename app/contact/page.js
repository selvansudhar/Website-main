"use client";

import { useState } from 'react';

const inquiryTypes = [
  'General Inquiry',
  'Request a Demo',
  'Sales & Pricing',
  'Partner Program',
  'Technical Support',
  'Enterprise Consultation',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zynex.ai" },
          { "@type": "ListItem", "position": 2, "name": "Contact" }
        ]
      }) }} />

      {/* ===== HERO ===== */}
      <section className="bg-[#111111] text-white pt-40 max-md:pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center" data-animate="fade-up">
          <p className="text-sm text-white/50 mb-8">Home / Contact</p>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 mb-6">
            GET IN TOUCH
          </span>
          <h1 className="text-[3rem] font-bold leading-[1.1] mb-6 max-md:text-[2.2rem]">
            Let's Talk About What's Next
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you're exploring Zynex for the first time or ready to scale — our team is here to help.
          </p>
        </div>
      </section>

      {/* ===== FORM + SIDEBAR ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-[1fr_1.4fr] max-lg:grid-cols-1 gap-16">

          {/* Left — Contact Info */}
          <div data-animate="fade-left">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Reach Us Directly</h2>
            <p className="text-sm text-[#555555] leading-relaxed mb-10">
              Fill out the form and a member of our team will get back to you within one business day. Or reach out through any of these channels.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-inbox-fill text-[#056CB8]"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111] mb-1">Email</p>
                  <p className="text-sm text-[#555555]">contact@zynex.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-headset text-[#056CB8]"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111] mb-1">Phone</p>
                  <p className="text-sm text-[#555555]">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#056CB8]/10 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-clock-history text-[#056CB8]"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111] mb-1">Business Hours</p>
                  <p className="text-sm text-[#555555]">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-12 pt-8 border-t border-[#e0e0e0]">
              <p className="text-[10px] font-bold text-[#555555] uppercase tracking-[0.15em] mb-4">Quick Links</p>
              <div className="flex flex-col gap-3">
                <a href="/resources/concierge" className="text-sm text-[#056CB8] font-semibold no-underline hover:underline">Free Consultation (Concierge) &rarr;</a>
                <a href="/resources/help-center" className="text-sm text-[#056CB8] font-semibold no-underline hover:underline">Help Center &rarr;</a>
                <a href="/resources/partners" className="text-sm text-[#056CB8] font-semibold no-underline hover:underline">Partner Program &rarr;</a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#f5f5f5] border border-[#e0e0e0] p-10 max-md:p-6" data-animate="fade-right">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Send Us a Message</h3>
            <p className="text-sm text-[#555555] mb-8">We typically respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 bg-white border border-[#e0e0e0] text-[#111111] text-sm rounded-none outline-none focus:border-[#056CB8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 bg-white border border-[#e0e0e0] text-[#111111] text-sm rounded-none outline-none focus:border-[#056CB8] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-white border border-[#e0e0e0] text-[#111111] text-sm rounded-none outline-none focus:border-[#056CB8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-white border border-[#e0e0e0] text-[#111111] text-sm rounded-none outline-none focus:border-[#056CB8] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">Inquiry Type *</label>
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 bg-white border border-[#e0e0e0] text-[#111111] text-sm rounded-none outline-none focus:border-[#056CB8] transition-colors appearance-none"
                >
                  <option value="">Select an option</option>
                  {inquiryTypes.map((type, i) => (
                    <option key={i} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full py-3 px-4 bg-white border border-[#e0e0e0] text-[#111111] text-sm rounded-none outline-none focus:border-[#056CB8] transition-colors resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none border-none cursor-pointer uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors mt-2"
              >
                Send Message
              </button>

              <p className="text-xs text-[#555555] text-center">
                By submitting, you agree to our privacy policy. We'll never share your data.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== OFFICES ===== */}
      <section className="bg-[#f5f5f5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] font-bold text-[#111111] text-center mb-16 max-md:text-[1.75rem]" data-animate="fade-up">
            Our Offices
          </h2>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6" data-animate="fade-up" data-delay="2">
            {[
              {
                city: 'Bangalore',
                country: 'India',
                address: 'Tech Park, Whitefield',
                label: 'Headquarters',
              },
              {
                city: 'Dubai',
                country: 'UAE',
                address: 'Business Bay, Tower A',
                label: 'Middle East',
              },
              {
                city: 'Singapore',
                country: 'Singapore',
                address: 'One Raffles Place',
                label: 'Asia Pacific',
              },
            ].map((office, i) => (
              <div key={i} className="bg-white border border-[#e0e0e0] p-8">
                <span className="text-[10px] font-bold text-[#056CB8] bg-[#056CB8]/10 px-3 py-1 uppercase tracking-wider">{office.label}</span>
                <h3 className="text-xl font-bold text-[#111111] mt-4 mb-1">{office.city}</h3>
                <p className="text-sm text-[#555555] mb-1">{office.country}</p>
                <p className="text-sm text-[#555555]">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#111111] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <h2 className="text-[2.25rem] font-bold mb-4 max-md:text-[1.75rem]">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/60 mb-8">
            Book a free Concierge consultation and let our experts recommend the perfect Zynex setup for your business.
          </p>
          <a href="/resources/concierge" className="inline-flex items-center justify-center px-10 py-4 bg-[#056CB8] text-white font-semibold text-sm rounded-none uppercase tracking-[0.05em] hover:bg-[#045a9e] transition-colors">
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
