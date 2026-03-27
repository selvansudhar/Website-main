'use client';

import React from 'react';
import Image from 'next/image';

const financeData = {
    invoice: {
        id: 'invoice',
        label: 'INVOICE',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="7" y1="8" x2="17" y2="8" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="13" y2="16" />
            </svg>
        ),
        title: 'Zenvict Invoice',
        description: 'Create professional invoices and get paid on time with Zenvict Invoice.',
        features: [
            'Generate detailed quotes and invoices in minutes',
            'Accept payments through multiple online payment options',
            'Send automated reminders to reduce delayed payments'
        ],
    },
    books: {
        id: 'books',
        label: 'BOOKS',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
        title: 'Zenvict Books',
        description: 'A powerful cloud-based accounting solution built for growing businesses.',
        features: [
            'Sync bank transactions and manage online payments with ease',
            'Automate invoice follow-ups and payment tracking',
            'Gain business clarity with advanced financial reports',
            'Collaborate seamlessly with customers, accountants, and vendors',
            'Stay compliant with GST and e-invoicing regulations'
        ],
    },
    checkout: {
        id: 'checkout',
        label: 'CHECKOUT',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        title: 'Zenvict Checkout',
        description: 'Design branded payment pages and collect payments effortlessly.',
        features: [
            'Personalize hosted checkout pages with your brand identity',
            'Offer flexible payment amounts and recurring options',
            'Share payment links or embed checkout directly on your website'
        ],
    },
    commerce: {
        id: 'commerce',
        label: 'COMMERCE',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: 'Zenvict Commerce',
        description: 'An all-in-one ecommerce platform to launch and scale your online store.',
        features: [
            'Build modern, responsive online storefronts',
            'Manage products, orders, and payments from one dashboard',
            'Promote your business and drive growth with built-in marketing tools'
        ],
    },
    payroll: {
        id: 'payroll',
        label: 'PAYROLL',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Zenvict Payroll',
        description: 'Run payroll accurately, securely, and on schedule with Zenvict Payroll.',
        features: [
            'Automatically calculate salaries, taxes, deductions, and benefits',
            'Support compliance across India, UAE, and the USA',
            'Manage payroll operations through an intuitive, easy-to-use interface'
        ],
    },
    inventory: {
        id: 'inventory',
        label: 'INVENTORY',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
        title: 'Zenvict Inventory',
        description: 'Stay in control of stock levels and warehouse operations in real time.',
        features: [
            'Track inventory across locations with precision',
            'Automate stock updates, reorder alerts, and adjustments',
            'Manage suppliers, purchase orders, and inventory valuation'
        ],
    },
    billing: {
        id: 'billing',
        label: 'BILLING',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: 'Zenvict Billing',
        description: 'Simplify recurring and usage-based billing with complete transparency.',
        features: [
            'Set up subscription plans and automated billing cycles',
            'Generate accurate bills with tax and compliance support',
            'Track revenue, renewals, and payment status in one place'
        ],
    },
    expense: {
        id: 'expense',
        label: 'EXPENSE',
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
            </svg>
        ),
        title: 'Zenvict Expense',
        description: 'Manage business expenses smarter with automation and visibility.',
        features: [
            'Record, categorize, and approve expenses effortlessly',
            'Upload receipts and automate expense reconciliation',
            'Gain insights into spending patterns with detailed reports'
        ],
    }
};

export default function FinanceTabs() {
    const [activeTab, setActiveTab] = React.useState('invoice');
    const currentItem = financeData[activeTab];

    return (
        <section className="py-32 px-16 bg-white flex flex-col items-center w-full max-md:py-16 max-md:px-6 max-[480px]:py-12 max-[480px]:px-4">
            <h2 className="text-[2.2rem] font-extrabold text-dark tracking-[-0.02em] mb-16 text-center max-w-[900px] max-md:text-[1.8rem] max-[480px]:text-[1.5rem] max-[480px]:mb-8">
                Manage your operations and financial activities efficiently.
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-12 w-full mb-20 border-b border-black/5 pb-4 flex-wrap max-lg:gap-6 max-[480px]:gap-4 max-[480px]:mb-10">
                {Object.values(financeData).map((item) => (
                    <div
                        key={item.id}
                        className={`flex flex-col items-center gap-3 cursor-pointer relative px-2 pb-4 transition-all duration-300 ${activeTab === item.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        {activeTab === item.id && (
                            <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#22c55e] rounded-[2px]" />
                        )}
                        <div className={`text-primary transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : ''}`}>
                            {item.icon}
                        </div>
                        <span className="text-[0.75rem] font-bold text-dark tracking-[0.05em] max-[480px]:text-[0.65rem]">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Showcase */}
            <div
                className="grid gap-20 max-w-[1300px] w-full items-center rounded-[20px] max-lg:!grid-cols-1 max-lg:gap-12 max-lg:p-8 max-[480px]:gap-8 max-[480px]:p-0"
                style={{ gridTemplateColumns: '1.2fr 0.8fr' }}
            >
                <div className="w-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                    <Image
                        src="/images/finance-plus-1.webp"
                        alt={currentItem.title}
                        width={1024}
                        height={576}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto block scale-[1.02]"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="text-[1.4rem] font-extrabold text-dark m-0 leading-[2] max-[480px]:text-[1.2rem]">
                        {currentItem.title}
                    </h3>
                    <p className="text-[1.05rem] text-muted leading-[1.6] m-0 max-md:text-[0.95rem] max-[480px]:text-[0.85rem]">
                        {currentItem.description}
                    </p>
                    <ul className="list-none p-4 m-0 flex flex-col gap-4 max-[480px]:p-2">
                        {currentItem.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-[0.9rem] text-dark font-medium max-[480px]:text-[0.8rem] max-[480px]:gap-2.5">
                                <span className="text-[#22c55e] font-extrabold text-[1.2rem]">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
