"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Parses a stat string like "$500M+", "99.7%", "3.2x", "18K+" into
 * { prefix, number, suffix, decimals }.
 * Returns null for unparseable values like "< 1s", "24/7".
 */
function parseStat(value) {
  const str = String(value).trim();

  // Skip values that can't be meaningfully animated
  if (/^[<>]/.test(str) || /^\d+\/\d+$/.test(str)) return null;

  // Match: optional prefix ($, +$), number (with optional commas/decimals), rest is suffix
  const match = str.match(/^([+$]*\$?)(\d[\d,]*\.?\d*)\s*(.*)$/);
  if (!match) return null;

  const prefix = match[1] || "";
  const numStr = match[2].replace(/,/g, "");
  const suffix = match[3] || "";
  const num = parseFloat(numStr);

  if (isNaN(num)) return null;

  const decimalPart = numStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, number: num, suffix, decimals };
}

/**
 * CountUp — animates a stat number from 0 when scrolled into view.
 *
 * Usage: <CountUp value="$500M+" className="text-2xl font-bold" />
 *
 * Automatically parses prefixes ($), suffixes (%, +, x, K+, M+, /yr, ms),
 * decimals, and comma formatting.
 *
 * Falls back to static text for unparseable values (e.g., "< 1s", "24/7").
 */
export default function CountUp({ value, duration = 2000, className = "" }) {
  const parsed = parseStat(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!parsed) return; // Static fallback — no animation
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const { prefix, number: end, suffix, decimals } = parsed;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            const formatted = current.toFixed(decimals);
            // Add commas for thousands
            const parts = formatted.split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            setDisplay(`${prefix}${parts.join(".")}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, parsed, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
