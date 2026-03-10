import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#111111] pt-20 pb-8">
            <div className="max-w-[1400px] mx-auto px-12 max-md:px-6 max-sm:px-4">

                {/* Top: Brand + Nav columns */}
                <div className="grid grid-cols-[1.5fr_3fr] gap-16 pb-16 border-b border-white/10 max-lg:grid-cols-1 max-lg:gap-12">

                    {/* Brand column */}
                    <div>
                        <Link href="/" className="text-3xl font-extrabold text-white no-underline inline-block mb-4">zynex</Link>
                        <p className="text-sm text-white/50 leading-relaxed max-w-[280px] mb-8">
                            AI-powered enterprise platform for growing teams. ERP, intelligence, and assistants — all in one place.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-white/10 flex items-center justify-center text-white/60 no-underline text-sm font-bold transition-colors hover:bg-[#056CB8] hover:text-white" aria-label="X (Twitter)">X</a>
                            <a href="#" className="w-9 h-9 bg-white/10 flex items-center justify-center text-white/60 no-underline text-sm font-bold transition-colors hover:bg-[#056CB8] hover:text-white" aria-label="LinkedIn">in</a>
                            <a href="#" className="w-9 h-9 bg-white/10 flex items-center justify-center text-white/60 no-underline text-sm font-bold transition-colors hover:bg-[#056CB8] hover:text-white" aria-label="YouTube">YT</a>
                            <a href="#" className="w-9 h-9 bg-white/10 flex items-center justify-center text-white/60 no-underline text-sm font-bold transition-colors hover:bg-[#056CB8] hover:text-white" aria-label="Instagram">IG</a>
                        </div>
                    </div>

                    {/* Nav columns */}
                    <nav aria-label="Footer navigation" className="grid grid-cols-5 gap-8 max-lg:gap-6 max-md:grid-cols-3 max-sm:grid-cols-2">

                        {/* Products */}
                        <div>
                            <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5">Products</span>
                            <ul className="list-none flex flex-col gap-3">
                                <li><Link href="/products/yenai" className="text-white/60 no-underline text-sm transition-colors hover:text-white">YenAI</Link></li>
                                <li><Link href="/products/assistant-hub" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Assistant Hub</Link></li>
                                <li><Link href="/products/knowledge-base" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Knowledge Base</Link></li>
                                <li><Link href="/products/crm-lite" className="text-white/60 no-underline text-sm transition-colors hover:text-white">CRM Lite</Link></li>
                                <li><Link href="/products/finance-plus" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Finance Plus</Link></li>
                                <li><Link href="/products/human-resources" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Human Resources</Link></li>
                                <li><Link href="/products/project-plus" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Project Plus</Link></li>
                                <li><Link href="/products/marketing-automation" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Marketing Automation</Link></li>
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5">Solutions</span>
                            <ul className="list-none flex flex-col gap-3">
                                <li><Link href="/solutions/ai-solutions" className="text-white/60 no-underline text-sm transition-colors hover:text-white">AI Solutions</Link></li>
                                <li><Link href="/solutions/enterprise-solutions" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Enterprise Solutions</Link></li>
                                <li><Link href="/solutions/saas-development" className="text-white/60 no-underline text-sm transition-colors hover:text-white">SaaS Development</Link></li>
                                <li><Link href="/solutions/b2b-development" className="text-white/60 no-underline text-sm transition-colors hover:text-white">B2B Development</Link></li>
                                <li><Link href="/solutions/ecommerce" className="text-white/60 no-underline text-sm transition-colors hover:text-white">E-Commerce</Link></li>
                            </ul>

                            <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5 mt-8">Industries</span>
                            <ul className="list-none flex flex-col gap-3">
                                <li><Link href="/industries/healthcare" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Healthcare</Link></li>
                                <li><Link href="/industries/financial-services" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Financial Services</Link></li>
                                <li><Link href="/industries/manufacturing" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Manufacturing</Link></li>
                                <li><Link href="/industries/higher-education" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Higher Education</Link></li>
                                <li><Link href="/industries/retail" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Retail</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5">Resources</span>
                            <ul className="list-none flex flex-col gap-3">
                                <li><Link href="/resources/blog" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Blog</Link></li>
                                <li><Link href="/resources/news" className="text-white/60 no-underline text-sm transition-colors hover:text-white">News</Link></li>
                                <li><Link href="/resources/community" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Community</Link></li>
                                <li><Link href="/resources/concierge" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Concierge</Link></li>
                                <li><Link href="/resources/help-center" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Help Center</Link></li>
                                <li><Link href="/resources/developers" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Developers</Link></li>
                                <li><Link href="/resources/partners" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Partners</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5">Company</span>
                            <ul className="list-none flex flex-col gap-3">
                                <li><Link href="/enterprise" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Enterprise</Link></li>
                                <li><a href="#" className="text-white/60 no-underline text-sm transition-colors hover:text-white">About</a></li>
                                <li><Link href="/contact" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Get Started */}
                        <div>
                            <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-5">Get Started</span>
                            <ul className="list-none flex flex-col gap-3">
                                <li><Link href="/contact" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Request a Demo</Link></li>
                                <li><Link href="/resources/concierge" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Free Consultation</Link></li>
                                <li><a href="#" className="text-white/60 no-underline text-sm transition-colors hover:text-white">Sign In</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 flex justify-between items-center flex-wrap gap-6 max-sm:flex-col max-sm:items-center max-sm:text-center">
                    <p className="text-white/30 text-xs">
                        &copy; 2026 Zynex Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 max-sm:justify-center">
                        <Link href="/privacy-policy" className="text-white/30 no-underline text-xs transition-colors hover:text-white/60">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-white/30 no-underline text-xs transition-colors hover:text-white/60">Terms of Service</Link>
                        <Link href="/cookie-policy" className="text-white/30 no-underline text-xs transition-colors hover:text-white/60">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
