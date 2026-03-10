'use client';

import { useState } from 'react';

const capabilities = [
    {
        tag: 'GENERATIVE AI',
        title: "Create, don't just compute",
        description: 'From intelligent document generation to automated content pipelines, our generative AI layer transforms raw business context into actionable outputs — reports, emails, summaries, and creative assets — all tuned to your brand voice.',
        features: ['Auto-draft proposals & reports', 'Context-aware content generation', 'Multi-format output (text, image, code)', 'Brand-aligned tone & style control']
    },
    {
        tag: 'MACHINE LEARNING',
        title: "Patterns your team can't see",
        description: 'Deploy production-grade ML models that continuously learn from your operational data. Predict customer churn, forecast demand, detect anomalies, and surface opportunities before they become obvious.',
        features: ['Predictive analytics pipelines', 'Anomaly & fraud detection', 'Demand forecasting models', 'Auto-retraining & model drift alerts']
    },
    {
        tag: 'NATURAL LANGUAGE',
        title: 'Speak business, not queries',
        description: 'Natural language processing that understands industry jargon, customer sentiment, and document structure. Extract meaning from contracts, support tickets, reviews, and internal communications at scale.',
        features: ['Sentiment & intent analysis', 'Entity extraction from documents', 'Multi-language support (40+)', 'Conversational AI interfaces']
    },
    {
        tag: 'COMPUTER VISION',
        title: 'See what data describes',
        description: 'Visual intelligence for quality inspection, document digitization, facial recognition, and real-time monitoring. Process images and video streams with enterprise-grade accuracy and speed.',
        features: ['Quality inspection automation', 'OCR & document digitization', 'Real-time video analytics', 'Visual search & classification']
    }
];

export default function CapabilitySelector() {
    const [activeCapability, setActiveCapability] = useState(0);

    return (
        <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-8">
            {/* Nav */}
            <div className="flex flex-col max-lg:flex-row max-lg:overflow-x-auto max-lg:gap-0 max-lg:border-l-0 max-lg:border-b max-lg:border-b-border max-lg:pb-0">
                {capabilities.map((cap, i) => (
                    <div
                        key={i}
                        className={`relative px-6 py-6 border-l-2 cursor-pointer transition-all duration-300 max-lg:border-l-0 max-lg:border-b-2 max-lg:px-4 max-lg:py-4 max-lg:shrink-0 max-sm:px-3 max-sm:py-3 ${activeCapability === i ? 'border-l-primary bg-bg-accent max-lg:border-b-primary' : 'border-l-border max-lg:border-b-transparent'}`}
                        onClick={() => setActiveCapability(i)}
                    >
                        <span className="block font-heading text-[0.75rem] font-bold text-primary mb-1">0{i + 1}</span>
                        <span className="block text-[0.7rem] font-bold tracking-[0.1em] text-muted mb-1">{cap.tag}</span>
                        <span className={`block font-heading text-[1.15rem] font-semibold max-lg:text-[1rem] max-sm:text-[0.9rem] max-lg:whitespace-nowrap ${activeCapability === i ? 'text-dark' : 'text-muted'}`}>{cap.title}</span>
                        <div className="cap-nav-progress"></div>
                    </div>
                ))}
            </div>
            {/* Detail */}
            <div className="bg-bg-accent border border-primary/10 rounded-[20px] p-12 max-md:p-8 max-sm:p-6">
                <div className="text-[0.7rem] font-bold tracking-[0.15em] text-purple mb-4">{capabilities[activeCapability].tag}</div>
                <h3 className="font-heading text-[1.8rem] font-bold text-dark mb-5 leading-[1.2] max-md:text-[1.4rem] max-sm:text-[1.2rem]">{capabilities[activeCapability].title}</h3>
                <p className="text-[1.05rem] leading-[1.7] text-muted mb-8 max-sm:text-[0.9rem] max-sm:mb-6">{capabilities[activeCapability].description}</p>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    {capabilities[activeCapability].features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-[0.9rem] text-dark max-sm:text-[0.85rem]">
                            <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0">
                                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>{feat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
