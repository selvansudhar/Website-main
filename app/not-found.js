import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-[600px] text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#056CB8] mb-6">Error 404</p>
        <h1 className="text-[6rem] font-extrabold text-[#111111] leading-none tracking-[-0.04em] mb-4 max-md:text-[4rem] max-sm:text-[3rem]">
          404
        </h1>
        <h2 className="text-[1.5rem] font-bold text-[#111111] mb-4 max-sm:text-[1.2rem]">
          Page not found
        </h2>
        <p className="text-[#555555] text-base leading-relaxed mb-8 max-w-[440px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
          <Link
            href="/"
            className="group bg-[#056CB8] text-white border-0 px-8 py-4 rounded-none text-[0.95rem] font-bold no-underline inline-flex items-center gap-3 transition-all duration-300 uppercase tracking-[0.05em] hover:opacity-90 max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]"
          >
            Back to Home
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-[#111111] border-2 border-[#e0e0e0] px-8 py-3.5 rounded-none text-[0.95rem] font-semibold no-underline inline-flex items-center gap-3 transition-all duration-200 hover:border-[#111111] max-sm:px-6 max-sm:py-3 max-sm:text-[0.8rem]"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-[#e0e0e0]">
          <p className="text-xs font-semibold text-[#555555] uppercase tracking-[0.1em] mb-4">Popular pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Products', href: '/products/yenai' },
              { label: 'Solutions', href: '/solutions' },
              { label: 'Enterprise', href: '/enterprise' },
              { label: 'Help Center', href: '/resources/help-center' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#056CB8] font-medium no-underline border border-[#e0e0e0] px-4 py-2 hover:border-[#056CB8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
