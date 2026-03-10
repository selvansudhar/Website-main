'use client';

import { useState } from 'react';

const campaignSteps = [
    {
        id: 1,
        icon: 'bi bi-diagram-3',
        title: 'Business Details',
        desc: 'Company name, industry, brand voice, and target market. We tailor everything to your brand identity.',
        fields: ['Company name', 'Industry', 'Brand voice', 'Target market'],
    },
    {
        id: 2,
        icon: 'bi bi-bullseye',
        title: 'Campaign Objective',
        desc: 'What do you want to achieve? Brand awareness, lead generation, product launch, event promotion, or sales conversion.',
        fields: ['Goal type', 'KPI targets', 'Timeline', 'Budget range'],
    },
    {
        id: 3,
        icon: 'bi bi-people-fill',
        title: 'Target Audience',
        desc: 'Define who you want to reach — demographics, interests, behaviors, and lookalike audiences from your existing data.',
        fields: ['Age range', 'Location', 'Interests', 'Behavior signals'],
    },
    {
        id: 4,
        icon: 'bi bi-list-check',
        title: 'Product Details',
        desc: 'What are you promoting? Product features, pricing, USPs, and competitive advantages that make your offer stand out.',
        fields: ['Product name', 'Key features', 'Price point', 'USP'],
    },
    {
        id: 5,
        icon: 'bi bi-patch-check-fill',
        title: 'Offers & Promotions',
        desc: 'Discounts, bundles, limited-time deals, or free trials. Set the hook that drives your audience to act now.',
        fields: ['Offer type', 'Discount %', 'Validity period', 'Promo code'],
    },
    {
        id: 6,
        icon: 'bi bi-activity',
        title: 'Platform Selection',
        desc: 'Choose where your campaign runs — Instagram, Facebook, Google Ads, LinkedIn, X, TikTok, email, or all of them at once.',
        fields: ['Social platforms', 'Ad networks', 'Email lists', 'SMS channels'],
    },
    {
        id: 7,
        icon: 'bi bi-sliders',
        title: 'Design Preferences',
        desc: 'Brand colors, fonts, logo placement, and layout style. Upload your brand kit or let AI generate a cohesive look from scratch.',
        fields: ['Color palette', 'Font style', 'Logo file', 'Layout type'],
    },
    {
        id: 8,
        icon: 'bi bi-star-fill',
        title: 'Visual Style',
        desc: 'Photo-realistic, illustrated, minimal, bold, or cinematic. Pick a mood and our AI generates scroll-stopping visuals.',
        fields: ['Style mood', 'Image type', 'Aspect ratios', 'Background'],
    },
    {
        id: 9,
        icon: 'bi bi-file-earmark-text',
        title: 'Text Content',
        desc: 'Headlines, body copy, hashtags, and captions — generated in your brand voice. Edit, approve, or let AI A/B test variations.',
        fields: ['Headlines', 'Body copy', 'Hashtags', 'Ad copy variants'],
    },
    {
        id: 10,
        icon: 'bi bi-lightning-charge-fill',
        title: 'Call to Action',
        desc: 'Shop Now, Learn More, Sign Up, Book a Call — choose the action, set the destination URL, and track every click.',
        fields: ['CTA text', 'Landing URL', 'UTM params', 'Tracking pixel'],
    },
];

export default function CampaignStepExplorer() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="grid grid-cols-[280px_1fr] gap-8 max-w-[1200px] mx-auto max-lg:grid-cols-1 max-sm:gap-4">
            {/* Step navigator */}
            <div className="flex flex-col gap-1 max-lg:flex-row max-lg:overflow-x-auto max-lg:gap-2 max-lg:pb-2">
                {campaignSteps.map((step, i) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveStep(i)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left border-0 cursor-pointer transition-all duration-200 max-lg:shrink-0 max-lg:px-3 max-lg:py-2 ${
                            activeStep === i
                                ? 'bg-[#111111] text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                                : 'bg-transparent text-[#555555] hover:bg-[#f5f5f5]'
                        }`}
                    >
                        <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                            activeStep === i ? 'bg-white/20 text-white' : 'bg-[#e0e0e0] text-[#555555]'
                        }`}>
                            {step.id}
                        </span>
                        <span className="text-[0.85rem] font-semibold whitespace-nowrap">{step.title}</span>
                    </button>
                ))}
            </div>

            {/* Step detail card */}
            <div className="bg-white rounded-md border border-[#e0e0e0] p-10 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-sm:p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#111111] rounded-xl flex items-center justify-center max-sm:w-12 max-sm:h-12">
                        <i className={`${campaignSteps[activeStep].icon} text-2xl text-white max-sm:text-xl`}></i>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-[#056CB8] uppercase tracking-wider">Step {campaignSteps[activeStep].id} of 10</div>
                        <h3 className="text-[1.3rem] font-bold text-[#111111] max-sm:text-[1.1rem]">{campaignSteps[activeStep].title}</h3>
                    </div>
                </div>
                <p className="text-[1rem] text-[#555555] leading-[1.7] mb-8 max-sm:text-[0.85rem]">{campaignSteps[activeStep].desc}</p>
                <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    {campaignSteps[activeStep].fields.map((field) => (
                        <div key={field} className="flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-4 py-3 border border-[#e0e0e0] max-sm:px-3 max-sm:py-2">
                            <i className="bi bi-check-circle-fill text-[#09983A] text-sm"></i>
                            <span className="text-[0.85rem] font-medium text-[#555555] max-sm:text-[0.8rem]">{field}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
