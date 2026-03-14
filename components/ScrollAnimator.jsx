"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is ready after navigation
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate]:not(.is-visible)");
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
