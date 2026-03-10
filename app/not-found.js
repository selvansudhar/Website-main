import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] max-[480px]:min-h-[70vh] py-8 px-8 max-[480px]:px-6 col-[1/-1]">
      <div className="flex flex-col items-center text-center gap-4 max-w-[520px]">
        <span className="text-gradient font-heading font-extrabold leading-none tracking-[-0.04em] text-[8rem] max-md:text-[6rem] max-[480px]:text-[5rem]">
          404
        </span>
        <h1 className="font-heading text-[1.75rem] max-md:text-[1.4rem] max-[480px]:text-[1.25rem] font-bold text-dark leading-[1.3] m-0">
          Page not found
        </h1>
        <p className="text-[1.05rem] max-md:text-[0.95rem] max-[480px]:text-[0.9rem] text-muted leading-[1.6] m-0">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-4 px-8 py-[0.85rem] max-[480px]:px-7 max-[480px]:py-3 max-[480px]:text-[0.9rem] bg-gradient-primary text-white font-semibold text-[0.95rem] rounded-full no-underline transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-blue"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
