"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setActiveMenu(null);
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
        if (mobileMenuOpen) setMobileSubmenu(null);
    };

    const toggleMobileSubmenu = (menu) => {
        setMobileSubmenu(prev => prev === menu ? null : menu);
    };

    const handleNavKeyDown = useCallback((e, menuName) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveMenu(prev => prev === menuName ? null : menuName);
        } else if (e.key === 'Escape') {
            setActiveMenu(null);
            e.target.focus();
        }
    }, []);

    const handleMobileToggleKeyDown = useCallback((e, menuName) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileSubmenu(menuName);
        }
    }, []);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (mobileMenuOpen) closeMobileMenu();
                if (activeMenu) closeMenu();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [mobileMenuOpen, activeMenu]);

    useEffect(() => {
        closeMenu();
        closeMobileMenu();
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <header className="bg-white/90 backdrop-blur-[10px] fixed top-0 left-0 w-full z-[1000] border-b border-black/5" onMouseLeave={closeMenu}>
            <div className="flex items-center justify-between px-12 py-4 max-w-[1400px] mx-auto w-full max-md:px-6 max-[480px]:px-4 max-[480px]:py-3">
                <Link href="/" className="no-underline flex items-center" onClick={closeMobileMenu} onMouseEnter={closeMenu}>
                    <Image src="/images/zenvict-side.svg" alt="Zenvict" width={220} height={70} className="h-12 w-auto max-[480px]:hidden" priority />
                    <Image src="/images/zenvict-logo.svg" alt="Zenvict" width={50} height={44} className="h-10 w-auto hidden max-[480px]:block" priority />
                </Link>

                <nav className="hidden md:flex items-center gap-8 flex-1 justify-center" aria-label="Main navigation" role="menubar">
                    {/* Product Menu */}
                    <div
                        className={`static ${activeMenu === 'product' ? 'nav-item-active' : ''}`}
                    >
                        <span className="text-dark no-underline text-[0.95rem] font-medium relative transition-colors duration-300 cursor-pointer hover:text-primary nav-link-arrow" role="menuitem" aria-haspopup="true" aria-expanded={activeMenu === 'product'} tabIndex="0" onMouseEnter={() => setActiveMenu('product')} onKeyDown={(e) => handleNavKeyDown(e, 'product')}>Product</span>
                        <div className="mega-menu" onMouseEnter={() => setActiveMenu('product')} onMouseLeave={closeMenu}>
                            <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-[3fr_1fr] gap-16">
                                <div>
                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-black/5">
                                        <span className="text-xs font-bold text-muted tracking-[0.05em] block">ZENVICT PRODUCTS</span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-12 mb-8">
                                        {/* Zenvict Assistant */}
                                        <div>
                                            <div className="flex gap-4 mb-6">
                                                <div className="w-9 h-9 bg-transparent border border-primary rounded-[10px] flex items-center justify-center text-primary shrink-0">
                                                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-base text-primary mb-0.5">Zenvict Assistant</span>
                                                    <span className="block text-xs text-muted">Your personal AI assistant</span>
                                                </div>
                                            </div>
                                            <ul className="list-none flex flex-col gap-3">
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/knowledge-base" className="no-underline text-[#334155] block hover:text-primary">Knowledge Base</Link></li>
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/assistant-hub" className="no-underline text-[#334155] block hover:text-primary">Assistant Hub</Link></li>
                                            </ul>
                                        </div>

                                        {/* Zenvict AI */}
                                        <div>
                                            <div className="flex gap-4 mb-6">
                                                <div className="w-9 h-9 bg-transparent border border-primary rounded-[10px] flex items-center justify-center text-primary shrink-0">
                                                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-base text-primary mb-0.5">Zenvict AI</span>
                                                    <span className="block text-xs text-muted">AI-powered tools for growth</span>
                                                </div>
                                            </div>
                                            <ul className="list-none flex flex-col gap-3">
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/yenai" className="no-underline text-[#334155] block hover:text-primary">YenAI</Link></li>
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/marketing-automation" className="no-underline text-[#334155] block hover:text-primary">Marketing Automation</Link></li>
                                            </ul>
                                        </div>

                                        {/* Zenvict ERP */}
                                        <div>
                                            <div className="flex gap-4 mb-6">
                                                <div className="w-9 h-9 bg-transparent border border-primary rounded-[10px] flex items-center justify-center text-primary shrink-0">
                                                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 22"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-base text-primary mb-0.5">Zenvict ERP</span>
                                                    <span className="block text-xs text-muted">The enterprise solutions</span>
                                                </div>
                                            </div>
                                            <ul className="list-none flex flex-col gap-3">
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/crm-lite" className="no-underline text-[#334155] block hover:text-primary">CRM Lite</Link></li>
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/finance-plus" className="no-underline text-[#334155] block hover:text-primary">Finance Plus</Link></li>
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/human-resources" className="no-underline text-[#334155] block hover:text-primary">Human Resources</Link></li>
                                                <li className="text-sm text-[#334155] font-medium cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}><Link href="/products/project-plus" className="no-underline text-[#334155] block hover:text-primary">Project Plus</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                {/* Sidebar promo */}
                                <div>
                                    <div className="promo-card-gradient rounded-2xl p-8 text-white flex flex-col gap-6 min-h-[320px] shadow-[0_8px_24px_rgba(45,27,78,0.4)] mt-10">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-5xl font-bold tracking-[0.05em] leading-none promo-title-gradient">IVA</span>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-xl font-semibold m-0 leading-tight text-white">Zenvict Powerful AI Assistant</h3>
                                            <p className="text-sm leading-relaxed m-0 text-white/85">Automate your business work faster with intelligent AI-powered solutions.</p>
                                            <a href="/products/yenai" className="inline-flex items-center gap-2 text-[#a78bfa] no-underline font-semibold text-[0.95rem] mt-2 transition-all duration-200 hover:translate-x-1 hover:text-[#c4b5fd]" onClick={closeMenu}>Know more →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/enterprise" className="text-dark no-underline text-[0.95rem] font-medium relative transition-colors duration-300 cursor-pointer hover:text-primary" role="menuitem" onClick={closeMenu} onMouseEnter={closeMenu}>Enterprise</Link>

                    {/* Solutions Menu */}
                    <div
                        className={`static ${activeMenu === 'solutions' ? 'nav-item-active' : ''}`}
                    >
                        <span className="text-dark no-underline text-[0.95rem] font-medium relative transition-colors duration-300 cursor-pointer hover:text-primary nav-link-arrow" role="menuitem" aria-haspopup="true" aria-expanded={activeMenu === 'solutions'} tabIndex="0" onMouseEnter={() => setActiveMenu('solutions')} onKeyDown={(e) => handleNavKeyDown(e, 'solutions')}>Solutions</span>
                        <div className="mega-menu mega-menu-solutions" onMouseEnter={() => setActiveMenu('solutions')} onMouseLeave={closeMenu}>
                            <div className="mega-menu-content-inner max-w-[1400px] mx-auto px-12">
                                <div className="grid grid-cols-2 gap-12 pt-6 pb-16 relative">
                                    <div>
                                        <div className="text-[0.8rem] font-extrabold text-subtle tracking-[0.1em] mb-5">INDUSTRIES</div>
                                        <ul className="list-none flex flex-col gap-3">
                                            {[
                                                { href: '/industries/retail', label: 'Retail' },
                                                { href: '/industries/financial-services', label: 'Financial Services' },
                                                { href: '/industries/higher-education', label: 'Higher Education' },
                                                { href: '/industries/healthcare', label: 'Healthcare' },
                                                { href: '/industries/manufacturing', label: 'Manufacturing' },
                                            ].map((item, i) => (
                                                <li key={i} className="text-sm text-dark font-semibold cursor-pointer flex items-center gap-3 transition-colors duration-200 hover:text-primary" onClick={closeMenu}>
                                                    <Link href={item.href} className="no-underline text-inherit block hover:text-primary">{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-[0.8rem] font-extrabold text-subtle tracking-[0.1em] mb-5">SOLUTIONS & SERVICES</div>
                                        <ul className="list-none flex flex-col gap-3">
                                            {[
                                                { href: '/solutions/ai-solutions', label: 'AI Solutions' },
                                                { href: '/solutions/enterprise-solutions', label: 'Enterprise Solutions' },
                                                { href: '/solutions/saas-development', label: 'SaaS Development' },
                                                { href: '/solutions/b2b-development', label: 'B2B Web Development' },
                                                { href: '/solutions/ecommerce', label: 'E-Commerce Solutions' },
                                            ].map((item, i) => (
                                                <li key={i} className="text-sm text-dark font-semibold cursor-pointer flex items-center gap-3 transition-colors duration-200 hover:text-primary" onClick={closeMenu}>
                                                    <Link href={item.href} className="no-underline text-inherit block hover:text-primary">{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* View All Solutions */}
                                    <div className="absolute bottom-0 left-0 right-0 mx-8 mb-4" onClick={closeMenu}>
                                        <Link href="/solutions" className="group relative block bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] overflow-hidden no-underline p-4 px-6 rounded-xl border border-[#8b5cf6]/15 transition-all duration-400 hover:border-[#8b5cf6]/40 hover:shadow-[0_4px_20px_rgba(139,92,246,0.12)] hover:-translate-y-0.5">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3.5">
                                                    <div className="w-10 h-10 rounded-lg bg-[#8b5cf6] flex items-center justify-center shadow-[0_2px_8px_rgba(139,92,246,0.3)]">
                                                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-white"><path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 0h5v5H9V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-[#111111] text-[0.88rem] block">Explore All Solutions</span>
                                                        <span className="text-[#555555] text-[0.7rem] font-medium">5 solutions tailored for your business</span>
                                                    </div>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#8b5cf6] group-hover:scale-110">
                                                    <span className="text-[#8b5cf6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 inline-block">→</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="solutions-hero-area p-8 flex items-center justify-center flex-1 overflow-hidden rounded-2xl">
                                    <div className="flex flex-col gap-4 items-center text-center max-w-[380px]">
                                        <div className="flex items-center gap-2 bg-dark py-1.5 px-4 rounded-[50px] text-[0.8rem] font-bold text-white">
                                            <span className="text-xs">✦</span> Real Results
                                        </div>
                                        <h3 className="text-[1.8rem] font-extrabold text-dark m-0 leading-[1.1] tracking-tight">One Platform. Every Department.</h3>
                                        <p className="text-sm text-[#334155] leading-relaxed m-0 font-medium">Replace disconnected tools with a single AI-powered platform for CRM, finance, HR, and projects — designed for growing businesses.</p>
                                        <Link href="/enterprise" className="bg-white text-primary py-2.5 px-6 rounded-[50px] border-none font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-blue hover:text-white no-underline" onClick={closeMenu}>See the Impact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resources Menu */}
                    <div
                        className={`static ${activeMenu === 'resources' ? 'nav-item-active' : ''}`}
                    >
                        <span className="text-dark no-underline text-[0.95rem] font-medium relative transition-colors duration-300 cursor-pointer hover:text-primary nav-link-arrow" role="menuitem" aria-haspopup="true" aria-expanded={activeMenu === 'resources'} tabIndex="0" onMouseEnter={() => setActiveMenu('resources')} onKeyDown={(e) => handleNavKeyDown(e, 'resources')}>Resources</span>
                        <div className="mega-menu mega-menu-solutions" onMouseEnter={() => setActiveMenu('resources')} onMouseLeave={closeMenu}>
                            <div className="mega-menu-content-inner max-w-[1400px] mx-auto px-12">
                                <div className="grid grid-cols-2 gap-6 pt-6 pb-16 relative">
                                    <div>
                                        <div className="text-[0.8rem] font-extrabold text-subtle tracking-[0.1em] mb-5">EXPLORE</div>
                                        <ul className="list-none flex flex-col gap-3">
                                            {[
                                                { href: '/resources/blog', label: 'Blog' },
                                                { href: '/resources/news', label: 'News' },
                                                { href: '/resources/community', label: 'Community' },
                                            ].map((item, i) => (
                                                <li key={i} className="text-sm text-dark font-semibold cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}>
                                                    <Link href={item.href} className="no-underline text-inherit block hover:text-primary">{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-[0.8rem] font-extrabold text-subtle tracking-[0.1em] mb-5">SUPPORT & SERVICES</div>
                                        <ul className="list-none flex flex-col gap-3">
                                            {[
                                                { href: '/resources/concierge', label: 'Concierge' },
                                                { href: '/resources/help-center', label: 'Help center' },
                                                { href: '/resources/developers', label: 'Developers' },
                                                { href: '/resources/partners', label: 'Partners' },
                                            ].map((item, i) => (
                                                <li key={i} className="text-sm text-dark font-semibold cursor-pointer transition-colors duration-200 hover:text-primary" onClick={closeMenu}>
                                                    <Link href={item.href} className="no-underline text-inherit block hover:text-primary">{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link href="/resources/news" className="absolute bottom-0 left-0 right-0 work-ai-banner-gradient p-3 px-6 rounded-lg cursor-pointer transition-transform duration-200 border border-black/5 hover:-translate-y-0.5 hover:shadow-sm mx-8 mb-3 no-underline" onClick={closeMenu}>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-dark text-sm">Explore how Zenvict helps businesses streamline operations</span>
                                            <span className="text-muted text-lg">→</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="resources-hero-area p-6 flex items-center justify-center flex-1 rounded-2xl">
                                    <div className="bg-white rounded-2xl w-full max-w-[380px] flex items-center justify-center p-8 px-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                                        <div className="flex flex-col items-center text-center gap-3">
                                            <div className="flex items-center gap-2 bg-primary/10 py-1.5 px-4 rounded-[50px] text-[0.75rem] font-bold text-primary tracking-[0.05em]">
                                                📊 Industry Report
                                            </div>
                                            <h3 className="text-xl font-extrabold text-dark m-0 leading-[1.15]">Why Unified Platforms Win</h3>
                                            <p className="text-sm text-[#475569] leading-relaxed m-0 font-medium">Businesses using multiple disconnected tools waste time and money. Learn how a single platform simplifies everything.</p>
                                            <Link href="/resources/blog" className="bg-dark text-white py-2.5 px-8 rounded-[50px] border-none font-bold text-sm cursor-pointer transition-all duration-300 mt-2 hover:bg-black hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] no-underline" onClick={closeMenu}>Read the Report</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/about" className="text-dark no-underline text-[0.95rem] font-medium relative transition-colors duration-300 cursor-pointer hover:text-primary" role="menuitem" tabIndex="0" onClick={closeMenu} onMouseEnter={closeMenu}>About</Link>
                </nav>

                <div className="hidden md:flex items-center gap-6" onMouseEnter={closeMenu}>
                    <Link href="/contact" className={`py-2.5 px-6 rounded-none text-[0.95rem] font-semibold cursor-pointer transition-all duration-300 border no-underline ${scrolled ? 'bg-[#F60014] text-white border-[#F60014] hover:bg-[#d4000f]' : 'bg-white text-[#F60014] border-[#F60014] hover:bg-[#F60014] hover:text-white'}`} onClick={closeMenu}>Contact Us</Link>
                </div>

                <button
                    className={`flex md:hidden flex-col justify-center items-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer p-0 z-[201] ${mobileMenuOpen ? 'hamburger-active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className="hamburger-line block w-[22px] h-[2px] bg-[#111111] rounded-sm transition-all duration-300"></span>
                    <span className="hamburger-line block w-[22px] h-[2px] bg-[#111111] rounded-sm transition-all duration-300"></span>
                    <span className="hamburger-line block w-[22px] h-[2px] bg-[#111111] rounded-sm transition-all duration-300"></span>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`block md:hidden fixed top-0 left-0 w-full h-screen bg-white/[0.98] backdrop-blur-[20px] z-[199] pt-20 overflow-y-auto mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="px-8 pb-12 pt-6 flex flex-col max-[480px]:px-6">
                    <div className="border-b border-border">
                        <button className="w-full flex justify-between items-center py-[1.1rem] bg-none border-none text-[1.05rem] font-semibold text-dark cursor-pointer font-[inherit] max-[480px]:text-base max-[480px]:py-4" onClick={() => toggleMobileSubmenu('product')} onKeyDown={(e) => handleMobileToggleKeyDown(e, 'product')} aria-expanded={mobileSubmenu === 'product'}>
                            <span>Product</span>
                            <span className={`text-xs text-muted transition-transform duration-300 ${mobileSubmenu === 'product' ? 'rotate-180' : ''}`} aria-hidden="true">&#9662;</span>
                        </button>
                        {mobileSubmenu === 'product' && (
                            <div className="pb-4 pl-2 flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Zenvict Assistant</span>
                                    <Link href="/products/knowledge-base" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Knowledge Base</Link>
                                    <Link href="/products/assistant-hub" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Assistant Hub</Link>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Zenvict AI</span>
                                    <Link href="/products/yenai" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>YenAI</Link>
                                    <Link href="/products/marketing-automation" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Marketing Automation</Link>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Zenvict ERP</span>
                                    <Link href="/products/crm-lite" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>CRM Lite</Link>
                                    <Link href="/products/finance-plus" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Finance Plus</Link>
                                    <Link href="/products/human-resources" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Human Resources</Link>
                                    <Link href="/products/project-plus" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Project Plus</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/enterprise" className="block py-[1.1rem] text-[1.05rem] font-semibold text-dark no-underline border-b border-border cursor-pointer max-[480px]:text-base max-[480px]:py-4" onClick={closeMobileMenu}>Enterprise</Link>

                    <div className="border-b border-border">
                        <button className="w-full flex justify-between items-center py-[1.1rem] bg-none border-none text-[1.05rem] font-semibold text-dark cursor-pointer font-[inherit] max-[480px]:text-base max-[480px]:py-4" onClick={() => toggleMobileSubmenu('solutions')} onKeyDown={(e) => handleMobileToggleKeyDown(e, 'solutions')} aria-expanded={mobileSubmenu === 'solutions'}>
                            <span>Solutions</span>
                            <span className={`text-xs text-muted transition-transform duration-300 ${mobileSubmenu === 'solutions' ? 'rotate-180' : ''}`} aria-hidden="true">&#9662;</span>
                        </button>
                        {mobileSubmenu === 'solutions' && (
                            <div className="pb-4 pl-2 flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Industries</span>
                                    <Link href="/industries/retail" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Retail</Link>
                                    <Link href="/industries/financial-services" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Financial Services</Link>
                                    <Link href="/industries/higher-education" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Higher Education</Link>
                                    <Link href="/industries/healthcare" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Healthcare</Link>
                                    <Link href="/industries/manufacturing" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Manufacturing</Link>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Solutions & Services</span>
                                    <Link href="/solutions/ai-solutions" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>AI Solutions</Link>
                                    <Link href="/solutions/enterprise-solutions" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Enterprise Solutions</Link>
                                    <Link href="/solutions/saas-development" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>SaaS Development</Link>
                                    <Link href="/solutions/b2b-development" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>B2B Development</Link>
                                    <Link href="/solutions/ecommerce" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>E-Commerce Solutions</Link>
                                    <Link href="/solutions" className="block py-2 text-[0.95rem] text-primary font-semibold no-underline" onClick={closeMobileMenu}>View all solutions →</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="border-b border-border">
                        <button className="w-full flex justify-between items-center py-[1.1rem] bg-none border-none text-[1.05rem] font-semibold text-dark cursor-pointer font-[inherit] max-[480px]:text-base max-[480px]:py-4" onClick={() => toggleMobileSubmenu('resources')} onKeyDown={(e) => handleMobileToggleKeyDown(e, 'resources')} aria-expanded={mobileSubmenu === 'resources'}>
                            <span>Resources</span>
                            <span className={`text-xs text-muted transition-transform duration-300 ${mobileSubmenu === 'resources' ? 'rotate-180' : ''}`} aria-hidden="true">&#9662;</span>
                        </button>
                        {mobileSubmenu === 'resources' && (
                            <div className="pb-4 pl-2 flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Explore</span>
                                    <Link href="/resources/blog" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Blog</Link>
                                    <Link href="/resources/news" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>News</Link>
                                    <Link href="/resources/community" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Community</Link>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase py-1">Support & Services</span>
                                    <Link href="/resources/concierge" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Concierge</Link>
                                    <Link href="/resources/help-center" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Help Center</Link>
                                    <Link href="/resources/developers" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Developers</Link>
                                    <Link href="/resources/partners" className="block py-2 text-[0.95rem] text-[#475569] no-underline transition-colors duration-200 hover:text-primary" onClick={closeMobileMenu}>Partners</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="block py-[1.1rem] text-[1.05rem] font-semibold text-dark border-b border-border cursor-pointer no-underline max-[480px]:text-base max-[480px]:py-4" onClick={closeMobileMenu}>About</Link>

                    <div className="flex flex-col gap-3 pt-6">
                        <Link href="/contact" className="w-full block text-center py-3.5 px-6 text-[0.95rem] rounded-none font-semibold cursor-pointer transition-colors border-none bg-[#F60014] text-white hover:bg-[#d4000f] no-underline" onClick={closeMobileMenu}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
